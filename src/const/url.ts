import urlJoin from 'url-join';

import pkg from '../../package.json';
import { INBOX_SESSION_ID } from './session';

export const GITHUB = pkg.homepage;
export const CHANGELOG = urlJoin(GITHUB, 'blob/master/CHANGELOG.md');
export const WIKI = urlJoin(GITHUB, 'wiki');
export const WIKI_PLUGIN_GUIDE = urlJoin(WIKI, 'Plugin-Development');
export const ABOUT = pkg.homepage;
export const FEEDBACK = pkg.bugs.url;
export const DISCORD = 'https://discord.gg/AYFPHvv2jT';
export const SUPPORT_URL = 'https://work.weixin.qq.com/kfid/kfc2924409ff29a46bb';

export const GROUP_URL = 'https://work.weixin.qq.com/gm/ed5c903a9ed58fc92f2dc8828778387c';

export const GROUP_QRCODE_URL = 'https://oss.puerhub.com/web/chat_wecom_qr_350.png';

export const MANUAL_URL = 'https://doc.puerhub.xyz';

export const PLUGINS_INDEX_URL = 'https://chat-plugins.lobehub.com';

export const AGENTS_INDEX_GITHUB = 'https://github.com/lobehub/lobe-chat-agents';
export const AGENTS_INDEX_GITHUB_ISSUE = urlJoin(AGENTS_INDEX_GITHUB, 'issues/new');

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  mobile ? `/chat/mobile?session=${id}` : `/chat?session=${id}`;
export const MANUAL_UPGRADE_URL = 'https://github.com/lobehub/lobe-chat/wiki/Upstream-Sync';
