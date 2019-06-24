/*
 * 发票类型
 */
const INVOICE_TYPES = {
  'c': {
    icon: '普',
    class: 'primary',
    label: '增值税普通发票'
  },
  'ct': {
    icon: '行',
    class: 'primary',
    label: '增值税电子普通发票（通行费）'
  },
  's': {
    icon: '专',
    class: 'success',
    label: '增值税专用发票'
  },
  'ce': {
    icon: '电',
    class: 'warning',
    label: '增值税电子普通发票'
  },
  'j': {
    icon: '机',
    class: 'success',
    label: '机动车销售统一发票'
  },
  'cj': {
    icon: '卷',
    class: 'warning',
    label: '增值税普通发票（卷票）'
  }
};

export default {
  INVOICE_TYPES
};
