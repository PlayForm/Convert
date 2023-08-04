import type { AstroIntegration } from "astro";
import Merge from "files-pipe/dist/Lib/Merge.js";
import type { optionPath } from "files-pipe/dist/options/Index.js";
import type { Options } from "./options/Index.js";
import Defaults from "./options/Index.js";

export default (options: Options = {}): AstroIntegration => {
	for (const option in options) {
		if (
			Object.prototype.hasOwnProperty.call(options, option) &&
			options[option] === true
		) {
			options[option] = Defaults[option];
		}
	}

	const _options = Merge(Defaults, options);

	const paths = new Set<optionPath>();

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
