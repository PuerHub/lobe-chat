import {
  OPENAI_API_KEY_HEADER_KEY,
  OPENAI_END_POINT,
  PUERHUB_CHAT_ACCESS_CODE,
  PUERHUB_USER_ID,
} from '@/const/fetch';
import { useUserStore } from '@/store/user';
import { keyVaultsConfigSelectors } from '@/store/user/selectors';

/**
 * TODO: Need to be removed after tts refactor
 * @deprecated
 */
// eslint-disable-next-line no-undef
export const createHeaderWithOpenAI = (header?: HeadersInit): HeadersInit => {
  const state = useUserStore.getState();
  const openAIConfig = keyVaultsConfigSelectors.openAIConfig(state);

  // eslint-disable-next-line no-undef
  return {
    ...header,
    [OPENAI_API_KEY_HEADER_KEY]: openAIConfig.apiKey || '',
    [OPENAI_END_POINT]: openAIConfig.baseURL || '',
    [PUERHUB_CHAT_ACCESS_CODE]: keyVaultsConfigSelectors.password(state),
    [PUERHUB_USER_ID]: state.user?.id || '',
  };
};
