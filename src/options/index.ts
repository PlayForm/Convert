import deepmerge from "files-pipe/dist/lib/deepmerge.js";
import defaults from "files-pipe/dist/options/index.js";

import type { Options as OptionsBase } from "files-pipe/dist/options/index.js";

export interface Options extends OptionsBase {
	[key: string]: unknown;
}

export default deepmerge(defaults, {
	pipe: {},
} satisfies Options) as Options;
