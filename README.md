# svelte-inline-style #

Efficiently apply inline styles to Svelte components.

**NPM users**: please consider the [Github README](https://github.com/rozek/svelte-inline-style/blob/main/README.md) for the latest description of this package (as updating the docs would otherwise always require a new NPM package version)

### Installation ###

```
npm install svelte-inline-style
```

### Usage ###

```
<script>
  import style from 'svelte-inline-style'

  export let styles = {
    fontSize:'22px',   // use camel-cased CSS property names...
    fontWeight:'bold'  // ...and start with a small letter
  }
</script>

<div use:style={styles}>...</div>
```

### Try yourself ###

Experiment with `svelte-inline-style` using the [Svelte REPL](https://svelte.dev/repl/38dd68dc0838491bac4472b6229246b7)

### Background Information ###

Sometimes it is necessary to add inline styles to a Svelte component rather than to rely on a stylesheet and just switch classes.

A straightforward approach could be to use `style` attributes:

```
<div style="font-size:{fontsize}px; font-weight:{fontweight}">...</div>
```

but this one would first require to construct a string which would then have to parsed by the browser before the actual changes could be made.

Another solution has been shown by [mouse484](https://github.com/mouse484) in package [svelte-inline-css](https://github.com/mouse484/svelte-inline-css): with the aid of Svelte "actions" inline styles may be directly set on the HTML elements created to represent Svelte components:

```
<script>
  import style from 'svelte-inline-css'

  export let styles = {
    'font-size':'22px',
    'font-weight':'bold'
  }
</script>

<div use:style={styles}>...</div>
```

This solution works great, but - again - requires some string processing before the actual style can be applied: `svelte-inline-css` expects kebab-cased CSS property names which first have to be converted to camel-cased identifiers before they may be set.

This implementation therefore suggests a third alternative, which seems "more natural": start with camel-cased CSS property names right away and apply them to HTML elements without prior conversion.

```
<script>
  import style from './svelte-inline-style.js'

  export let styles = {
    fontSize:'22px',
    fontWeight:'bold'
  }
</script>

<div use:style={styles}>...</div>
```

### Build Instructions ###

You may easily build this package yourself.

Just install [NPM](https://docs.npmjs.com/) according to the instructions for your platform and follow these steps:

1. either clone this repository using [git](https://git-scm.com/) or [download a ZIP archive](https://github.com/rozek/svelte-inline-style/archive/refs/heads/main.zip) with its contents to your disk and unpack it there 
2. open a shell and navigate to the root directory of this repository
3. run `npm install` in order to install the complete build environment
4. execute `npm run build` to create a new build
