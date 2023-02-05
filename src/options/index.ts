import deepmerge from "files-pipeline/dist/lib/deepmerge.js";
import defaults from "files-pipeline/dist/options/index.js";

import type { Options as OptionsBase } from "files-pipeline/dist/options/index.js";

export interface Options extends OptionsBase {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default deepmerge(defaults, {
	pipeline: {},
} satisfies Options) as Options;
