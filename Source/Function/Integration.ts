/**
 * @module Integration
 *
 */
export default ((...[_Option = {}]: Parameters<Type>) => {
	for (const Option in _Option) {
		if (
			Object.prototype.hasOwnProperty.call(_Option, Option) &&
			_Option[Option] === true
		) {
			_Option[Option] = Default[Option as keyof typeof Default];
		}
	}

	const { Path } = Merge(Default, _Option);

	const Paths = new Set<Path>();

	if (typeof Path !== "undefined") {
		if (Array.isArray(Path) || Path instanceof Set) {
			for (const _Path of Path) {
				Paths.add(_Path);
			}
		}
	}

	return {
		name: "astro-convert",
		hooks: {
			"astro:build:done": async ({ dir }) => {
				if (!Paths.size) {
					Paths.add(dir);
				}
			},
		},
	};
}) satisfies Type as Type;

import type Type from "../Interface/Integration.js";

import type Path from "files-pipe/Target/Type/Path.js";

export const { default: Default } = await import("../Variable/Option.js");

export const { default: Merge } = await import(
	"typescript-esbuild/Target/Function/Merge.js"
);
