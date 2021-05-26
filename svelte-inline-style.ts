/**** use:style={styleset} - with camel-cased style properties ****/

  type StyleSet = { [Name:string]:string|number }

  function style (Element:HTMLElement, initialStyleSet:StyleSet) {
    function update (newStyleSet:StyleSet) {
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
