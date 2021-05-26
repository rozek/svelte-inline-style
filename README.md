# svelte-inline-style #

Sometimes it is necessary to add inline styles to a svelte component rather than to rely on a stylesheet and just switch classes.

A straightforward approach could be to use `style` attributes:

```
<div style="font-size:{fontsize}px; font-weight:{fontweight}">...</div>
```

but this one would first require to construct a string which would then have to parsed by the browser before the actual changes could be made.

Another solution has been shown by [mouse484](https://github.com/mouse484) in package [svelte-inline-css](https://github.com/mouse484/svelte-inline-css): with the aid of svelte "actions" inline styles may be directly set on the HTML elements created to represent svelte components:

```
<script lang="ts">
  import style from 'svelte-inline-css'

  export let styles = {
    'font-size':'14px',
    'font-weight':'bold'
  }
</script>

<div use:style={styles}>...</div>
```

This solution works great, but - again - requires some string processing before the actual style can be applied: `svelte-inline-css` expects kebab-cased CSS property names which first have to be converted to camel-cased identifiers before they may be set.

This implementation therefore suggests a third alternative, which seems "more natural": start with camel-cased CSS property names right away and apply them to HTML elements without prior conversion.

```
<script lang="ts">
  import style from './svelte-inline-style.ts'

  export let styles = {
    fontSize:'14px',
    fontWeight:'bold'
  }
</script>

<div use:style={styles}>...</div>
```
