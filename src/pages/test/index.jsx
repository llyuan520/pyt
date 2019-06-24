import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './module/action';
import { LanguagePackage } from '@/utils/createContext';
import InvoiceType from '@/components/invoiceType';
import './index.scss';
class Test extends Component {
  buttonHandler = () => {
    this.props.testAction();
  }

  render() {
    return (
      <LanguagePackage.Consumer>
        {({ LABEL_TEXT, INVOICE_TYPES }) => (
          <div >
            <div>{LABEL_TEXT['INVOICE_TYPE']}</div>
            <div>
              <label>发票类型图标：</label>
              {Object.keys(INVOICE_TYPES).map((item, index) => {
                return (
                  <InvoiceType type={item} key={index} />
                );
              })}
            </div>
            <span>{this.props.test}</span>
            <button onClick={this.buttonHandler}>button</button>
          </div>
        )}
      </LanguagePackage.Consumer>
    );
  }
}

function mapStateToProps(state) {
  return {test: state.test.test};
}

function mapDispatchToProps(dispatch) {
  return {
    testAction: bindActionCreators(actions.testAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
