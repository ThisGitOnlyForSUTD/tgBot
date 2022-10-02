const intersection = (a, b) => {

  if ( a === undefined || b === undefined) {
    throw new SyntaxError(`INVALID_ARGUMENTS_COUNT`)
  } else {

  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error(`INVALID_ARGUMENTS`)
  }

  else if (a.every( el => typeof el === 'number') || b.every( el => typeof el === 'number')) {
    let intersection =  a.filter(x => b.indexOf(x))
  
    return Array.from(intersection)
  }

  else {
    throw new SyntaxError(`INVALID_ELEMENT_IN_ARRAY`)
  }

  }
}
console.log(intersection([], [1, '2']))
