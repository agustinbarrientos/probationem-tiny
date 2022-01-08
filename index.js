const isString = ( variable ) => {
  return typeof variable === 'string' || variable instanceof String
}

const tiny = ( variable ) => {
  let modifiedString = variable;

  // Check if the string is really a string
  if ( isString( variable ) ) {
    modifiedString = variable.replace( /\s/g, '' );
  } else {
    throw new TypeError( `Tiny expects a String` );
  }

  return modifiedString;
}

module.exports = tiny;
