import { ModelProviderCard } from '@/types/llm';

// ref https://console.groq.com/docs/models
const Groq: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Mixtral-8x7b-Instruct-v0.1 (free)',
      enabled: true,
      id: 'mixtral-8x7b-32768',
      tokens: 32_768,
    },
    {
      displayName: 'Gemma-7b-it (free)',
      enabled: true,
      id: 'gemma-7b-it',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA3-3-8B (free)',
      enabled: true,
      id: 'llama3-8b-8192',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA3-3-70B (free)',
      enabled: true,
      id: 'llama3-70b-8192',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA2-70b-chat (free)',
      id: 'llama2-70b-4096',
      tokens: 4096,
    },
  ],
  id: 'groq',
};

export default Groq;
