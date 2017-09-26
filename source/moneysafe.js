const $ = (
  dollars,
  options = { symbol: '$' }
) => {
  const value = Math.round(dollars * 100)
  const add = (n) => $.of(value + n)

  return Object.assign(add, {
    constructor: $,
    $: value / 100,
    add: (m) => add(m.cents),
    subtract: (m) => add(m.cents * -1),
    cents: value,
    round: () => $.of(value),
    toString: () => `${options.symbol}${(value / 100).toFixed(2)}`,
    valueOf: () => value,
  })
}

$.cents = (n) => $(n / 100)
$.of = (n) => $(n / 100)

const m$ = (options) => (n) => $(n, options)
const in$ = (cents) => $.of(cents).$

module.exports = {
  $,
  m$,
  in$,
}
