const breakpoints = {
  'small': [],
  'medium': [],
  'medium-up': [],
  'medium-down': [],
  'large': [],
  'large-up': []
}

Object.keys(breakpoints).map(key => {
  return breakpoints[key] = breakpoints[key].length !== 2
    ? key.includes('up')
    ? `@media screen and (min-width: ${breakpoints[key][0]}px)`
    : `@media screen and (max-width: ${breakpoints[key][0]}px)`
    : `@media screen and (min-width: ${breakpoints[key][0]}px) and (max-width: ${breakpoints[key][1]}px)`
})

const small = breakpoints['small']
const medium = breakpoints['medium']
const mediumUp = breakpoints['medium-up']
const mediumDown = breakpoints['medium-down']
const large = breakpoints['large']
const largeUp = breakpoints['large-up']

export {
  small,
  medium,
  mediumUp,
  mediumDown,
  large,
  largeUp
}
