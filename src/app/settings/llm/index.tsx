'use client';

// import Link from 'next/link';
import { memo } from 'react';
// import { Trans, useTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

import PageTitle from '@/components/PageTitle';

import Anthropic from './Anthropic';
import Google from './Google';
import Groq from './Groq';
import Moonshot from './Moonshot';
import Ollama from './Ollama';
import OpenAI from './OpenAI';
import OpenRouter from './OpenRouter';
import Reverse from './Reverse';
// import TogetherAI from './TogetherAI';
import ZeroOne from './ZeroOne';
import Zhipu from './Zhipu';

export default memo<{ showOllama: boolean }>(({ showOllama }) => {
  const { t } = useTranslation('setting');

  return (
    <>
      <PageTitle title={t('tab.llm')} />
      <OpenAI />
      {/*<AzureOpenAI />*/}
      {showOllama && <Ollama />}
      <Anthropic />
      <Google />
      <Groq />
      {/*<Bedrock />*/}
      {/*<Perplexity />*/}
      {/*<Mistral />*/}
      <OpenRouter />
      <Moonshot />
      <ZeroOne />
      <Zhipu />
      <Reverse />
      {/*<TogetherAI />*/}
      {/*<Footer>*/}
      {/*  <Trans i18nKey="llm.waitingForMore" ns={'setting'}>*/}
      {/*    更多模型正在*/}
      {/*    <Link aria-label={'todo'} href={MORE_MODEL_PROVIDER_REQUEST_URL} target="_blank">*/}
      {/*      计划接入*/}
      {/*    </Link>*/}
      {/*    中 ，敬请期待 ✨*/}
      {/*  </Trans>*/}
      {/*</Footer>*/}
    </>
  );
});
