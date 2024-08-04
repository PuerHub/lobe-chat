import { ModelProviderCard } from '@/types/llm';

// ref https://console.groq.com/docs/models
const Groq: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'LLaMA3.1 405B (Preview - free)',
      enabled: false,
      functionCall: true,
      id: 'llama-3.1-405b-reasoning',
      tokens: 16_000,
    },
    {
      displayName: 'LLaMA 3.1 70B (Preview - free)',
      enabled: true,
      functionCall: true,
      id: 'llama-3.1-70b-versatile',
      tokens: 8000,
    },
    {
      displayName: 'LLaMA 3.1 8B (Preview - free)',
      enabled: true,
      functionCall: true,
      id: 'llama-3.1-8b-instant',
      tokens: 8000,
    },
    {
      displayName: 'LLaMA 3 Groq 70b Tool Use (preview - free)',
      enabled: true,
      functionCall: true,
      id: 'llama3-groq-70b-8192-tool-use-preview',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA 3 Groq 8b Tool Use (preview - free)',
      enabled: true,
      functionCall: true,
      id: 'llama3-groq-8b-8192-tool-use-preview',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA3 70B (free)',
      enabled: true,
      functionCall: true,
      id: 'llama3-70b-8192',
      tokens: 8192,
    },
    {
      displayName: 'Mixtral-8x7b (free)',
      enabled: true,
      functionCall: true,
      id: 'mixtral-8x7b-32768',
      tokens: 32_768,
    },
    {
      displayName: 'Gemma 7B (free)',
      functionCall: true,
      id: 'gemma-7b-it',
      tokens: 8192,
    },
    // {
    //   displayName: 'Gemma2 9B (free)',
    //   enabled: true,
    //   functionCall: true,
    //   id: 'gemma-7b-it',
    //   tokens: 8192,
    // },
    {
      displayName: 'LLaMA3-3-8B (free)',
      enabled: true,
      functionCall: true,
      id: 'llama3-8b-8192',
      tokens: 8192,
    },
    {
      displayName: 'LLaMA2-70b-chat (free)',
      id: 'llama2-70b-4096',
      tokens: 4096,
    },
  ],
  checkModel: 'gemma-7b-it',
  id: 'groq',
  name: 'Groq',
  // proxyUrl: {
  //   placeholder: 'https://api.groq.com/openai/v1',
  // },
};

export default Groq;
