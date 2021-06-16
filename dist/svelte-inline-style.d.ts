/**** use:style={styleset} - with camel-cased style properties ****/
declare type StyleSet = {
    [Name: string]: string | number;
};
declare function style(Element: HTMLElement, initialStyleSet: StyleSet): {
    update: (newStyleSet: StyleSet) => void;
};
export default style;
