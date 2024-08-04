import {
  // AiMass,
  // Ai360,
  Anthropic,
  Baichuan,
  Claude,
  DeepSeek,
  Gemini,
  Google,
  Groq,
  Minimax, // Mistral,
  Moonshot, // Novita,
  OpenRouter, // Perplexity,
  Stepfun,
  Together,
  Tongyi,
  ZeroOne,
  Zhipu,
} from '@lobehub/icons';
import { Divider } from 'antd';
import { useTheme } from 'antd-style';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import Logo from '@/components/Logo';
import {
  // Ai360ProviderCard,
  AnthropicProviderCard,
  BaichuanProviderCard,
  DeepSeekProviderCard,
  GoogleProviderCard,
  GroqProviderCard,
  MinimaxProviderCard, // MistralProviderCard,
  MoonshotProviderCard, // NovitaProviderCard,
  OpenRouterProviderCard, // PerplexityProviderCard,
  QwenProviderCard,
  ReverseProviderCard,
  StepfunProviderCard, // TaichuProviderCard,
  TogetherAIProviderCard,
  ZeroOneProviderCard,
  ZhiPuProviderCard,
} from '@/config/modelProviders';

import { ProviderItem } from '../type';
// import { useAzureProvider } from './Azure';
// import { useBedrockProvider } from './Bedrock';
import { useOllamaProvider } from './Ollama';
import { useOpenAIProvider } from './OpenAI';

// const BASE_DOC_URL = 'https://lobehub.com/docs/usage/providers';

const AnthropicBrand = () => {
  const { isDarkMode } = useTheme();
  return <Anthropic.Text color={isDarkMode ? undefined : Claude.colorPrimary} size={15} />;
};

const MoonshotBrand = () => {
  const theme = useTheme();
  return (
    <Moonshot.Combine
      color={theme.isDarkMode ? theme.colorText : Moonshot.colorPrimary}
      size={22}
    />
  );
};

const GroqBrand = () => {
  const theme = useTheme();

  return <Groq.Text color={theme.isDarkMode ? theme.colorText : Groq.colorPrimary} size={20} />;
};

const GoogleBrand = () => (
  <Flexbox align={'center'} gap={8} horizontal>
    <Google.BrandColor size={22} />
    <Divider style={{ margin: '0 4px' }} type={'vertical'} />
    <Gemini.Combine size={22} type={'color'} />
  </Flexbox>
);

export const useProviderList = (): ProviderItem[] => {
  // const azureProvider = useAzureProvider();
  const ollamaProvider = useOllamaProvider();
  const openAIProvider = useOpenAIProvider();
  // const bedrockProvider = useBedrockProvider();
  const { t } = useTranslation('setting');

  return useMemo(
    () => [
      openAIProvider,
      // azureProvider,
      {
        ...GoogleProviderCard,
        title: <GoogleBrand />,
      },
      {
        ...AnthropicProviderCard,
        title: <AnthropicBrand />,
      },
      // bedrockProvider,
      {
        ...GroqProviderCard,
        title: <GroqBrand />,
      },
      {
        ...OpenRouterProviderCard,
        title: <OpenRouter.Combine iconProps={{ color: OpenRouter.colorPrimary }} size={20} />,
      },
      // {
      //   ...NovitaProviderCard,
      //   title: <Novita.Combine size={20} type={'color'} />,
      // },
      {
        ...TogetherAIProviderCard,
        title: <Together.Combine size={26} type={'color'} />,
      },
      {
        ...QwenProviderCard,
        title: <Tongyi.Combine extra={'千问'} size={26} type={'color'} />,
      },
      {
        ...DeepSeekProviderCard,
        title: <DeepSeek.Combine size={28} type={'color'} />,
      },
      {
        ...MinimaxProviderCard,
        title: <Minimax.Combine size={32} type={'color'} />,
      },
      // {
      //   ...MistralProviderCard,
      //   title: <Mistral.Combine size={26} type={'color'} />,
      // },
      {
        ...MoonshotProviderCard,
        title: <MoonshotBrand />,
      },
      // {
      //   ...PerplexityProviderCard,
      //   title: <Perplexity.Combine size={24} type={'color'} />,
      // },
      {
        ...ZhiPuProviderCard,
        title: <Zhipu.Combine size={32} type={'color'} />,
      },
      {
        ...ZeroOneProviderCard,
        title: <ZeroOne.Text size={20} />,
      },
      {
        ...StepfunProviderCard,
        title: <Stepfun.Combine size={20} type={'color'} />,
      },
      {
        ...BaichuanProviderCard,
        title: <Baichuan.Combine size={20} type={'color'} />,
      },
      // {
      //   ...TaichuProviderCard,
      //   title: <AiMass.Combine size={28} type={'color'} />,
      // },
      // {
      //   ...Ai360ProviderCard,
      //   title: <Ai360.Combine size={ 20 } type={ 'color' } />,
      // },
      {
        ...ReverseProviderCard,
        title: <Logo extra={t('llm.reverse')} type={'combine'} />,
      },
      ollamaProvider,
    ],
    [ollamaProvider],
  );
};
