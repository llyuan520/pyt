import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Pages from './pages/index';
import { antdThemes, packageThemes, LanguagePackage } from '@/utils/createContext';
import configureStore from './store/configureStore';
import {LocaleProvider} from 'antd'
import {AuthCodeContext} from '@xforceplus/authcode'
import fetch from '@xforceplus/httprequest'

import './assets/scss/index.scss';

let store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authCodes:['J00500000',
        'J00500001',
        'J00500002',
        'J00500003',
        'J00500004',
        'J00500005',
        'J00500006',
        'J00500007',
        'J00500008'
      ],
      currentPackageThemes: packageThemes['zh-CN'],
      currentAntdThemes: antdThemes['zh-CN']
    };
  }
  componentDidMount() {
    const currentLanguage = window.__currentLanguage || 'zh-CN';
    this.requestResource();
    this.setState({
      currentPackageThemes: {...packageThemes[currentLanguage]},
      currentAntdThemes: {...antdThemes[currentLanguage]},
    });
  }

  requestResource = () => {
    fetch({
      url:`${SERVICE_URL}/api/v1/ucenter/security/getUserResourceApiUrls`,
      body: {
        resourcePlatForm: '0'
      }
    }).then((res) => {
      if(parseInt(res.code) === 1) {
        /*this.setState({
          authCodes: res.result
        })*/
      } else {
        message.error(res.message);
      }
    }).catch(res => {
      // console.log(res)
    })
  }

  render() {
    const { currentAntdThemes, currentPackageThemes,authCodes } = this.state;
    return (
      <LocaleProvider locale={currentAntdThemes}>
        <LanguagePackage.Provider value={currentPackageThemes}>
          <AuthCodeContext.Provider value={{"authCodes":authCodes}}>
            <Provider store={store}>
              <HashRouter>
                <React.Fragment>
                  <Pages />
                </React.Fragment>
              </HashRouter>
            </Provider>
          </AuthCodeContext.Provider>
        </LanguagePackage.Provider>
      </LocaleProvider>
    );
  }
};

render(
  <App />,
  document.querySelector('#app')
);
