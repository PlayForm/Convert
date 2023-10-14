import type { Option } from "./Option/Index.js";

import type { Path } from "files-pipe";

import type { AstroIntegration } from "astro";

import Default from "./Option/Index.js";

import { Merge } from "files-pipe";

export default (Options: Option = {}): AstroIntegration => {
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
			Array.isArray(_options["path"]) ||
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
