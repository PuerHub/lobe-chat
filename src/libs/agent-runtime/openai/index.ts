import { ModelProvider } from '../types';
import { LobeOpenAICompatibleFactory } from '../utils/openaiCompatibleFactory';

export const LobeOpenAI = LobeOpenAICompatibleFactory({
  baseURL: 'https://api.puerhub.net/v1',
  debug: {
    chatCompletion: () => process.env.DEBUG_OPENAI_CHAT_COMPLETION === '1',
  },
  provider: ModelProvider.OpenAI,
});
