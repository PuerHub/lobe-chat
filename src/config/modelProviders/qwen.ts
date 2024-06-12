import { ModelProviderCard } from '@/types/llm';

// ref https://help.aliyun.com/zh/dashscope/developer-reference/api-details
const Qwen: ModelProviderCard = {
  chatModels: [
    {
      description: '通义千问2 0.5B 规模的模型',
      displayName: 'Qwen-2 0.5B Instruct (free)',
      enabled: true,
      id: 'qwen2-0.5b-instruct',
      tokens: 30_720,
    },
    {
      description: '通义千问2 1.5B 规模的模型',
      displayName: 'Qwen-2 1.5B Instruct (free)',
      enabled: true,
      id: 'qwen2-1.5b-instruct',
      tokens: 30_720,
    },
    {
      description: '通义千问2 7B 规模的模型',
      displayName: 'Qwen-2 7B Instruct',
      enabled: true,
      id: 'qwen2-7b-instruct',
      tokens: 128_000,
    },
    {
      description: '通义千问2 57B规模14B激活参数的MOE模型',
      displayName: 'Qwen-2 57B-A14B MoE',
      enabled: true,
      id: 'qwen2-57b-a14b-instruct',
      tokens: 30_720,
    },
    {
      description: '通义千问2 72B 规模的模型',
      displayName: 'Qwen-2 72B Instruct',
      enabled: true,
      id: 'qwen2-72b-instruct',
      tokens: 128_000,
    },
    {
      description: '通义千问超大规模语言模型，支持中文、英文等不同语言输入。',
      displayName: 'Qwen Turbo',
      enabled: true,
      id: 'qwen-turbo',
      tokens: 6000,
    },
    {
      description: '通义千问超大规模语言模型增强版，支持中文、英文等不同语言输入。',
      displayName: 'Qwen Plus',
      enabled: true,
      id: 'qwen-plus',
      tokens: 30_000,
    },
    {
      description:
        '通义千问千亿级别超大规模语言模型，支持中文、英文等不同语言输入，当前通义千问2.5产品版本背后的API模型。',
      displayName: 'Qwen Max',
      enabled: false,
      id: 'qwen-max',
      tokens: 6000,
    },
    {
      description: '通义千问千亿级别超大规模语言模型，支持中文、英文等不同语言输入。',
      displayName: 'Qwen Max Long Context',
      enabled: true,
      id: 'qwen-max-longcontext',
      tokens: 28_000,
    },
  ],
  checkModel: 'qwen2-0.5b-instruct',
  id: 'qwen',
  // modelList: { showModelFetcher: true },
  name: 'Qwen',
};

export default Qwen;
