const breakpoints = {
  'small': [0, 640],
  'medium': [641, 1024],
  'medium-up': [641],
  'medium-down': [1024],
  'large': [1025, 1440],
  'large-up': [1025]
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
