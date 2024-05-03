import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI, { ClientOptions } from 'openai';

import { LobeRuntimeAI } from '../BaseAI';
import { AgentRuntimeErrorType } from '../error';
import { ChatStreamPayload, ModelProvider, OpenAIChatMessage } from '../types';
import { AgentRuntimeError } from '../utils/createError';
import { desensitizeUrl } from '../utils/desensitizeUrl';
import { handleOpenAIError } from '../utils/handleOpenAIError';

const DEFAULT_BASE_URL = 'https://api.puerhub.net/v1';

export class LobeGoogleOpenAI implements LobeRuntimeAI {
  private _llm: OpenAI;

  baseURL: string;

  constructor(oai: OpenAI) {
    this._llm = oai;
    this.baseURL = this._llm.baseURL;
  }

  static async fromAPIKey({ apiKey, baseURL = DEFAULT_BASE_URL, ...res }: ClientOptions) {
    const llm = new OpenAI({ apiKey, baseURL, ...res });

    return new LobeGoogleOpenAI(llm);
  }

  async chat(payload: ChatStreamPayload) {
    try {
      const params = this.buildCompletionsParams(payload);

      const response = await this._llm.chat.completions.create(
        params as unknown as OpenAI.ChatCompletionCreateParamsStreaming,
      );

      const stream = OpenAIStream(response);

      const [returnStream] = stream.tee();

      return new StreamingTextResponse(returnStream);
    } catch (error) {
      const { errorResult, RuntimeError } = handleOpenAIError(error);

      const errorType = RuntimeError || AgentRuntimeErrorType.GoogleBizError;

      let desensitizedEndpoint = this.baseURL;

      if (this.baseURL !== DEFAULT_BASE_URL) {
        desensitizedEndpoint = desensitizeUrl(this.baseURL);
      }
      throw AgentRuntimeError.chat({
        endpoint: desensitizedEndpoint,
        error: errorResult,
        errorType,
        provider: ModelProvider.Google,
      });
    }
  }

  private buildCompletionsParams(payload: ChatStreamPayload) {
    const { messages, temperature, top_p, model, ...params } = payload;

    let final_messages = messages.slice(-1);
    let final_model = model;

    if (
      model === 'gemini-pro-vision' &&
      !final_messages.slice(-1).some((m) => {
        if (typeof m.content === 'string') {
          return false;
        } else {
          return m.content.some((c) => c.type === 'image_url');
        }
      })
    ) {
      final_model = 'gemini-pro';
    }

    return {
      messages: final_messages.map((m) => this.transformMessage(m)) as any,
      model: final_model,
      ...params,
      stream: true,
      temperature,
      top_p,
    };
  }

  // TODO: 临时处理，后续需要移除
  private transformMessage = (message: OpenAIChatMessage): OpenAIChatMessage => {
    return {
      ...message,
      content:
        typeof message.content === 'string'
          ? message.content
          : message.content.map((c) => {
              switch (c.type) {
                default:
                case 'text': {
                  return c;
                }

                case 'image_url': {
                  return {
                    image_url: { ...c.image_url, detail: undefined, url: c.image_url.url },
                    type: 'image_url',
                  };
                }
              }
            }),
    };
  };
}

export default LobeGoogleOpenAI;
