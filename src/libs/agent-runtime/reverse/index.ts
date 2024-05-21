import { AgentRuntimeErrorType } from '../error';
import { ModelProvider } from '../types';
import { LobeOpenAICompatibleFactory } from '../utils/openaiCompatibleFactory';

export const LobeReverse = LobeOpenAICompatibleFactory({
  baseURL: 'https://api.puerhub.net/v1',
  debug: {
    chatCompletion: () => process.env.DEBUG_REVERSE_CHAT_COMPLETION === '1',
  },
  errorType: {
    bizError: AgentRuntimeErrorType.ReverseBizError,
    invalidAPIKey: AgentRuntimeErrorType.InvalidReverseAPIKey,
  },
  provider: ModelProvider.Reverse,
});
