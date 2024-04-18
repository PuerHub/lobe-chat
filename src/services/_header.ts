import {
  OPENAI_API_KEY_HEADER_KEY,
  OPENAI_END_POINT,
  PUERHUB_CHAT_ACCESS_CODE,
} from '@/const/fetch';
import { useGlobalStore } from '@/store/global';
import { modelConfigSelectors, settingsSelectors } from '@/store/global/selectors';

/**
 * TODO: Need to be removed after tts refactor
 * @deprecated
 */
// eslint-disable-next-line no-undef
export const createHeaderWithOpenAI = (header?: HeadersInit): HeadersInit => {
  const openAIConfig = modelConfigSelectors.openAIConfig(useGlobalStore.getState());

  // eslint-disable-next-line no-undef
  return {
    ...header,
    [OPENAI_API_KEY_HEADER_KEY]: openAIConfig.apiKey || '',
    [OPENAI_END_POINT]: openAIConfig.endpoint || '',
    [PUERHUB_CHAT_ACCESS_CODE]: settingsSelectors.password(useGlobalStore.getState()),
  };
};
