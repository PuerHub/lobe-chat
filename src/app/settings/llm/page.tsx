'use client';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import PageTitle from '@/components/PageTitle';
import { useSwitchSideBarOnInit } from '@/store/global/hooks/useSwitchSettingsOnInit';
import { SettingsTabs } from '@/store/global/initialState';

import Google from './Google';
import OpenAI from './OpenAI';
import Zhipu from './Zhipu';

export default memo(() => {
  useSwitchSideBarOnInit(SettingsTabs.LLM);
  const { t } = useTranslation('setting');
  return (
    <>
      <PageTitle title={t('tab.llm')} />
      <OpenAI />
      {/*<AzureOpenAI />*/}
      <Zhipu />
      {/*<Moonshot />*/}
      <Google />
      {/*<Bedrock />*/}
      {/*<Footer>*/}
      {/*  <Trans i18nKey="llm.waitingForMore" ns={'setting'}>*/}
      {/*    更多模型正在*/}
      {/*    <Link*/}
      {/*      aria-label={'todo'}*/}
      {/*      href="https://github.com/lobehub/lobe-chat/issues/151"*/}
      {/*      target="_blank"*/}
      {/*    >*/}
      {/*      计划接入*/}
      {/*    </Link>*/}
      {/*    中 ，敬请期待 ✨*/}
      {/*  </Trans>*/}
      {/*</Footer>*/}
    </>
  );
});
