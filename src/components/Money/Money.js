import React from 'react';

const cur = {
  RUB: '₽',
  EUR: '€',
  GBP: '£',
  USD: '$'
};

export default ({ value, currency }) => (
  <span>
    <span>{Math.floor(value)}</span>
    {value * 100 % 100 > 0 && <span>,{value * 100 % 100}</span>}
    {currency && <span>{cur[currency]}</span>}
  </span>);
