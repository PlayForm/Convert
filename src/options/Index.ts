import deepmerge from "files-pipe/dist/lib/deepmerge.js";
import type { Options as OptionsBase } from "files-pipe/dist/options/Index.js";
import defaults from "files-pipe/dist/options/Index.js";

export interface Options extends OptionsBase {
	[key: string]: any;
}

export default deepmerge(defaults, {
	pipe: {},
} satisfies Options) as Options;
