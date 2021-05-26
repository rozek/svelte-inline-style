/**** use:style={styleset} - with camel-cased style properties ****/

  function style (Element, initialStyleSet) {
    function update (newStyleSet) {
      for (let CamelCasedName in newStyleSet) {
        if (newStyleSet.hasOwnProperty(CamelCasedName)) {
          Element.style[CamelCasedName] = newStyleSet[CamelCasedName]
        }
      }
    }

    update(initialStyleSet) // update for the 1st time after element was created

    return { update }                  // update again whenever styleset changes
  }
export default style