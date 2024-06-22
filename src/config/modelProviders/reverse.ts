import { ModelProviderCard } from '@/types/llm';

const Reverse: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Suno v3',
      enabled: true,
      files: false,
      functionCall: false,
      id: 'suno-v3',
      vision: false,
    },
    {
      displayName: 'Suno v3.5',
      enabled: true,
      files: false,
      functionCall: false,
      id: 'suno-v3.5',
      vision: false,
    },
    {
      displayName: 'Luma Video Reverse',
      enabled: true,
      files: false,
      functionCall: false,
      id: 'luma-video',
      vision: false,
    },
    {
      displayName: `GPTs Search`,
      enabled: true,
      files: false,
      functionCall: false,
      id: 'search-gpts-chat',
      vision: false,
    },
    {
      displayName: `GPT 4 All`,
      enabled: true,
      files: false,
      functionCall: false,
      id: 'gpt-4-all',
      vision: false,
    },
    {
      displayName: `GPT 4o All`,
      enabled: true,
      files: false,
      functionCall: false,
      id: 'gpt-4o-all',
      vision: false,
    },
  ],
  id: 'reverse',
  name: 'Reverse',
};

export default Reverse;
