# [astro-convert] 🫶

This **[Astro integration][astro-integration]** converts all your files into different formats.

## Installation

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### `astro add` command

Astro includes a CLI tool for adding first party integrations: `astro add`. This
command will:

1. (Optionally) Install all necessary dependencies and peer dependencies
2. (Also optionally) Update your `astro.config.*` file to apply this integration

To install `astro-convert`, run the following from your project directory and follow
the prompts:

```sh
# Using NPM
npx astro add astro-convert
# Using Yarn
yarn astro add astro-convert
# Using PNPM
pnpx astro add astro-convert
```

### Install dependencies manually

First, install the `astro-convert` integration like so:

```
npm install -D -E astro-convert
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**astro.config.ts**

```ts
import type { AstroUserConfig } from "astro";
import img from "astro-convert";

export default (): AstroUserConfig => ({
	integrations: [img()],
});
```

## Getting started

You can override any of the default options from the configurations of:

-   [sharp](src/options/img.ts)

or disable them entirely:

```ts
import type { AstroUserConfig } from "astro";
import img from "astro-convert";

export default (): AstroUserConfig => ({
	integrations: [
		img({
			img: false,
		}),
	],
});
```

If your path is different than `dist` be sure to update it accordingly:

```ts
import type { AstroUserConfig } from "astro";
import img from "astro-convert";

export default (): AstroUserConfig => ({
	outDir: "./build",
	integrations: [
		img({
			path: "./build",
		}),
	],
});
```

Set logger to 0 if you do not want to see debug messages. Default is 2.

```ts
import type { AstroUserConfig } from "astro";
import img from "astro-convert";

export default (): AstroUserConfig => ({
	integrations: [
		img({
			logger: 0,
		}),
	],
});
```

[astro-convert]: https://npmjs.org/astro-convert
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/

[![Built with Lightrix/npm](https://raw.githubusercontent.com/Lightrix/npm/main/.github/img/favicon-16x16.png)](https://github.com/Lightrix/npm)
