import React, { Component } from 'react';
import { LanguagePackage } from '@/utils/createContext';
import './index.scss';

class CompanyCircle extends Component {
  render() {
    const { type } = this.props;
    return (
      <LanguagePackage.Consumer>
        {({INVOICE_TYPES}) => (
          <div className={`xforce-invoice-type ${INVOICE_TYPES[type].class}`}>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><defs><style/></defs><path d="M44.373 787.342H978.49V722.49c-35.066-17.826-58.971-54.002-59.165-95.573.194-41.436 24.099-77.612 59.165-95.574v-21.618c-35.066-17.3-58.971-53.476-59.165-94.435.194-42.048 24.099-78.225 59.165-95.573V235.52H44.373v79.644c39.992 15.577 68.408 54.261 68.267 100.125.141 44.775-28.275 83.458-68.267 98.987v13.653c39.992 15.052 68.408 53.736 68.267 98.987.141 45.387-28.275 84.07-68.267 98.986v61.44zm977.351 43.236H2.276V690.63c1.558.659 3.132.717 4.55 1.138 35.358-.421 63.885-28.947 63.716-63.716.169-35.61-28.358-64.136-63.715-63.715-1.42-.421-2.993-.364-4.551 0v-85.334c1.558-.1 3.132-.042 4.55 0 35.358-.042 63.885-28.57 63.716-63.715.169-35.231-28.358-63.758-63.715-63.716-1.42-.042-2.993.016-4.551 0v-158.15h1019.448v158.15c-32.984 2.546-58.996 30.072-59.164 63.716.168 33.56 26.18 61.086 59.164 63.715v85.334c-32.984 2.166-58.996 29.692-59.164 63.715.168 33.18 26.18 60.708 59.164 62.578v139.947zM808.96 278.756h45.511v127.43H808.96v-127.43zm0 169.528h45.511v127.432H808.96V448.284zm0 169.53h45.511v127.43H808.96v-127.43zM171.804 278.755h45.512v127.43h-45.512v-127.43zm0 169.528h45.512v127.432h-45.512V448.284zm0 169.53h45.512v127.43h-45.512v-127.43z" fill="#609ee7"/></svg>
            <span className="xforce-invoice-type__inner">{INVOICE_TYPES[type].icon}</span>
          </div>
        )}
      </LanguagePackage.Consumer>
    );
  }
}

export default CompanyCircle;
