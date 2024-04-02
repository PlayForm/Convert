/**
 * @module Option
 *
 */
export default (
	await import("@playform/build/Target/Function/Merge.js")
).default(await import("@playform/pipe/Target/Variable/Option.js"), {
	Action: {},
} satisfies Option);

import type Option from "@playform/pipe/Target/Interface/Option.js";
