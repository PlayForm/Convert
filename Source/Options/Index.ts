import Merge from "files-pipe/dist/Library//Merge.js";
import type { Options as OptionsBase } from "files-pipe/dist/Options/Index.js";
import defaults from "files-pipe/dist/Options/Index.js";

export interface Options extends OptionsBase {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default Merge(defaults, {
	pipe: {},
} satisfies Options) as Options;
