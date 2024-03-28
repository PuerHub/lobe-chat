import { ModelProviderCard } from '@/types/llm';

const Reverse: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Suno V3',
      files: false,
      functionCall: false,
      hidden: false,
      id: 'suno-v3',
      isCustom: true,
      vision: false,
    },
    {
      displayName: `GPTs Search`,
      files: false,
      functionCall: false,
      hidden: false,
      id: 'search-gpts-chat',
      isCustom: true,
      vision: false,
    },
    {
      displayName: `GPT 4 All`,
      files: false,
      functionCall: false,
      hidden: false,
      id: 'gpt-4-all',
      isCustom: true,
      vision: false,
    },
  ],
  id: 'reverse',
};

export default Reverse;
