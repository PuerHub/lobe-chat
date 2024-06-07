import { AgentRuntimeErrorType } from '../error';
import { ModelProvider } from '../types';
import { LobeOpenAICompatibleFactory } from '../utils/openaiCompatibleFactory';

export const LobeAnthropicOpenAI = LobeOpenAICompatibleFactory({
  baseURL: 'https://api.puerhub.net/v1',
  debug: {
    chatCompletion: () => process.env.DEBUG_ANTHROPIC_CHAT_COMPLETION === '1',
  },
  errorType: {
    bizError: AgentRuntimeErrorType.ProviderBizError,
    invalidAPIKey: AgentRuntimeErrorType.InvalidProviderAPIKey,
  },
  provider: ModelProvider.Anthropic,
});
