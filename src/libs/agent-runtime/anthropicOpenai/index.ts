// sort-imports-ignore
import '@anthropic-ai/sdk/shims/web';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI, { ClientOptions } from 'openai';

import { LobeRuntimeAI } from '../BaseAI';
import { AgentRuntimeErrorType } from '../error';
import { ChatCompetitionOptions, ChatStreamPayload, ModelProvider } from '../types';
import { AgentRuntimeError } from '../utils/createError';
import { debugStream } from '../utils/debugStream';
import { desensitizeUrl } from '../utils/desensitizeUrl';
import { buildAnthropicMessages } from '../utils/anthropicHelpers';

const DEFAULT_BASE_URL = 'https://api.puerhub.net/v1';

export class LobeAnthropicOpenAI implements LobeRuntimeAI {
  private client: OpenAI;

  baseURL: string;

  constructor({ apiKey, baseURL = DEFAULT_BASE_URL }: ClientOptions) {
    if (!apiKey) throw AgentRuntimeError.createError(AgentRuntimeErrorType.InvalidAnthropicAPIKey);

    this.client = new OpenAI({ apiKey, baseURL });
    this.baseURL = this.client.baseURL;
  }

  async chat(payload: ChatStreamPayload, options?: ChatCompetitionOptions) {
    const { messages, model, max_tokens, temperature, top_p } = payload;
    const system_message = messages.find((m) => m.role === 'system');
    const user_messages = messages.filter((m) => m.role !== 'system');

    try {
      const response = await this.client.chat.completions.create(
        {
          max_tokens: max_tokens || 4096,
          messages: buildAnthropicMessages(user_messages),
          model: model,
          stream: true,
          system: system_message?.content as string,
          temperature: temperature,
          top_p: top_p,
        } as unknown as OpenAI.ChatCompletionCreateParamsStreaming,
        { headers: { Accept: '*/*' } },
      );

      const [prod, debug] = response.tee();

      if (process.env.DEBUG_ANTHROPIC_CHAT_COMPLETION === '1') {
        debugStream(debug.toReadableStream()).catch(console.error);
      }

      return new StreamingTextResponse(OpenAIStream(prod, options?.callback), {
        headers: options?.headers,
      });
    } catch (error) {
      let desensitizedEndpoint = this.baseURL;

      if (this.baseURL !== DEFAULT_BASE_URL) {
        desensitizedEndpoint = desensitizeUrl(this.baseURL);
      }

      if ('status' in (error as any)) {
        switch ((error as Response).status) {
          case 401: {
            throw AgentRuntimeError.chat({
              endpoint: desensitizedEndpoint,
              error: error as any,
              errorType: AgentRuntimeErrorType.InvalidAnthropicAPIKey,
              provider: ModelProvider.Anthropic,
            });
          }
          default: {
            break;
          }
        }
      }
      throw AgentRuntimeError.chat({
        endpoint: desensitizedEndpoint,
        error: error as any,
        errorType: AgentRuntimeErrorType.AnthropicBizError,
        provider: ModelProvider.Anthropic,
      });
    }
  }
}

export default LobeAnthropicOpenAI;
