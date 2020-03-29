/**
 * Filter out classes falsy values such that we can easily pass in an array
 * of condition && value, join to a string, space delimited
 */
export const classes = (classes = []) => {
	return classes.filter((v) => v).join(' ')
}

export const createModifiers = (prefix = '', modifiers = []) => {
    return modifiers
      .filter((v) => v) //filter out falsey values
      .map((modifier) => ` ${prefix}--${modifier}`) //format the modifiers w/prefix
      .join(' ') //join to a string of modifiers, space delimited
}
