'use client';

// import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import PageTitle from '@/components/PageTitle';

// import { MORE_MODEL_PROVIDER_REQUEST_URL } from '@/const/url';
//
// import Footer from '../features/Footer';
import Anthropic from './Anthropic';
// import Azure from './Azure';
// import Bedrock from './Bedrock';
import Google from './Google';
import Groq from './Groq';
// import Mistral from './Mistral';
import Moonshot from './Moonshot';
import OpenAI from './OpenAI';
import OpenRouter from './OpenRouter';
import Reverse from './Reverse';
// import Perplexity from './Perplexity';
// import TogetherAI from './TogetherAI';
import ZeroOne from './ZeroOne';
import Zhipu from './Zhipu';

export default memo(() => {
  const { t } = useTranslation('setting');

  return (
    <>
      <PageTitle title={t('tab.llm')} />
      <OpenAI />
      {/*<Azure />*/}
      {/*<Ollama />*/}
      <Google />
      <Anthropic />
      {/*<Bedrock />*/}
      <OpenRouter />
      {/*<TogetherAI />*/}
      <Groq />
      {/*<Perplexity />*/}
      {/*<Mistral />*/}
      <Moonshot />
      <Zhipu />
      <ZeroOne />
      <Reverse />
    </>
  );
});
