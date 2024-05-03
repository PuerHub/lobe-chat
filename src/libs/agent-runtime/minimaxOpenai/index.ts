import { AgentRuntimeErrorType } from '../error';
import { ModelProvider } from '../types';
import { LobeOpenAICompatibleFactory } from '../utils/openaiCompatibleFactory';

export const LobeMinimaxOpenAI = LobeOpenAICompatibleFactory({
  baseURL: 'https://api.puerhub.net/v1',
  debug: {
    chatCompletion: () => process.env.DEBUG_ZEROONE_CHAT_COMPLETION === '1',
  },
  errorType: {
    bizError: AgentRuntimeErrorType.ZeroOneBizError,
    invalidAPIKey: AgentRuntimeErrorType.InvalidZeroOneAPIKey,
  },
  provider: ModelProvider.ZeroOne,
});
