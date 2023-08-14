import type { AstroIntegration } from "astro";
import Merge from "files-pipe/Target/Library/Merge.js";
import type { Path } from "files-pipe/Target/Options/Index.js";
import type { Options } from "./Option/Index.js";
import Default from "./Option/Index.js";

export default (Options: Options = {}): AstroIntegration => {
	for (const Option in Options) {
		if (
			Object.prototype.hasOwnProperty.call(Options, Option) &&
			Options[Option] === true
		) {
			Options[Option] = Default[Option];
		}
	}

	const _options = Merge(Default, Options);

	const paths = new Set<Path>();

	if (typeof _options["path"] !== "undefined") {
		if (
			_options["path"] instanceof Array ||
			_options["path"] instanceof Set
		) {
			for (const path of _options["path"]) {
				paths.add(path);
			}
		}
	}

	return {
		name: "astro-convert",
		hooks: {
			"astro:build:done": async ({ dir }) => {
				if (!paths.size) {
					paths.add(dir);
				}
			},
		},
	};
};
