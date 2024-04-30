import {
  OPENAI_API_KEY_HEADER_KEY,
  OPENAI_END_POINT,
  PUERHUB_CHAT_ACCESS_CODE,
} from '@/const/fetch';
import { useUserStore } from '@/store/user';
import { modelConfigSelectors, settingsSelectors } from '@/store/user/selectors';

// TODO: Need to be removed after tts refactor
// eslint-disable-next-line no-undef
export const createHeaderWithOpenAI = (header?: HeadersInit): HeadersInit => {
  const openai = modelConfigSelectors.openAIConfig(useUserStore.getState());

  const apiKey = openai.apiKey || '';
  const endpoint = openai.endpoint || '';

  // eslint-disable-next-line no-undef
  return {
    ...header,
    [OPENAI_API_KEY_HEADER_KEY]: apiKey,
    [OPENAI_END_POINT]: endpoint,
    [PUERHUB_CHAT_ACCESS_CODE]: settingsSelectors.password(useUserStore.getState()),
  };
};
