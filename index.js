const isString = ( variable ) => {
  typeof variable === 'string' || variable instanceof String
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

module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};
