import urlJoin from 'url-join';

import { getClientConfig } from '@/config/client';
import { withBasePath } from '@/utils/basePath';

import pkg from '../../package.json';
import { INBOX_SESSION_ID } from './session';

export const OFFICIAL_URL = 'https://ai.puerhub.xyz/';

export const getCanonicalUrl = (path: string) => urlJoin(OFFICIAL_URL, path);

export const GITHUB = pkg.homepage;
export const CHANGELOG = urlJoin(GITHUB, 'blob/main/CHANGELOG.md');

const { LOBE_CHAT_DOCS } = getClientConfig();

export const DOCUMENTS = !!LOBE_CHAT_DOCS ? '/docs' : 'https://lobehub.com/docs';

export const WIKI_PLUGIN_GUIDE = urlJoin(GITHUB, 'wiki', 'Plugin-Development');

export const MANUAL_UPGRADE_URL = urlJoin(GITHUB, 'wiki', 'Upstream-Sync');

export const ABOUT = pkg.homepage;
export const FEEDBACK = pkg.bugs.url;
export const DISCORD = 'https://discord.gg/AYFPHvv2jT';
export const SUPPORT_URL = 'https://work.weixin.qq.com/kfid/kfc2924409ff29a46bb';

export const GROUP_URL = 'https://work.weixin.qq.com/gm/ed5c903a9ed58fc92f2dc8828778387c';

export const GROUP_QRCODE_URL = 'https://oss.puerhub.com/web/chat_wecom_qr_350.png';

export const MANUAL_URL = 'https://doc.puerhub.xyz';
export const PRIVACY_URL = 'https://lobehub.com/privacy';

export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com';

export const MORE_MODEL_PROVIDER_REQUEST_URL =
  'https://github.com/lobehub/lobe-chat/discussions/1284';

export const AGENTS_INDEX_GITHUB = 'https://github.com/lobehub/lobe-chat-agents';
export const AGENTS_INDEX_GITHUB_ISSUE = urlJoin(AGENTS_INDEX_GITHUB, 'issues/new');

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  mobile ? `/chat/mobile?session=${id}` : `/chat?session=${id}`;

export const imageUrl = (filename: string) => withBasePath(`/images/${filename}`);
