export const formatMaskWithComma = ({
  currency = '',
  fixedNumber = 2,
  hasComma = true,
  hasDot = false
}): string | number => {
  if (!!currency) {
    const newCurrency = (parseInt(currency, 10) / 100).toFixed(fixedNumber);

    if (hasComma) {
      return newCurrency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (hasDot) {
      return newCurrency;
    } else {
      return parseInt(currency.replace(/\D/g, ''), 10);
    }
  } else {
    return '';
  }
};
