import { ModelProviderCard } from '@/types/llm';

const Google: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Gemini 1.5 Pro',
      id: 'gemini-1.5-pro',
      tokens: 1_048_576,
    },
    {
      displayName: 'Gemini Pro (free)',
      id: 'gemini-pro',
      tokens: 30_720,
    },
    {
      displayName: 'Gemini Pro Vision (free)',
      id: 'gemini-pro-vision',
      tokens: 12_288,
      vision: true,
    },
  ],
  id: 'google',
};

export default Google;
