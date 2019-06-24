/*
 * 发票类型
 */
const INVOICE_TYPES = {
  'c': {
    icon: 'ordinary',
    class: 'primary',
    label: 'VAT ORDINARY INVOICE'
  },
  'ct': {
    icon: 'toll',
    class: 'primary',
    label: 'VAT ELECTRONIC GENERAL INVOICE (TOLL)'
  },
  's': {
    icon: 'special',
    class: 'success',
    label: 'VAT SPECIAL INVOICE'
  },
  'ce': {
    icon: 'electronic',
    class: 'warning',
    label: 'VAT ELECTRONIC ORDINARY INVOICE'
  },
  'j': {
    icon: 'motor',
    class: 'success',
    label: 'UNIFORM INVOICE FOR MOTOR VEHICLE SALES'
  },
  'cj': {
    icon: 'ticket',
    class: 'warning',
    label: 'VAT ORDINARY INVOICE (VOLUME TICKET)'
  }
};

export default {
  INVOICE_TYPES
};
