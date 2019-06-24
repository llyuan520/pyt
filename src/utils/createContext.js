import React from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';
import LanguageEN from '@/language/en-US';
import LanguageCN from '@/language/zh-CN';

export const packageThemes = {
  'en-US': {...LanguageEN},
  'zh-CN': {...LanguageCN}
};

export const antdThemes = {
  'en-US': enUS,
  'zh-CN': zhCN
};

export const LanguagePackage = React.createContext(LanguageEN);
