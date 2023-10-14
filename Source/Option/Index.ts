import type { Option as _Option } from "files-pipe";

import { Default, Merge } from "files-pipe";

export default interface Option extends _Option {
	// biome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default Merge(Default, {
	pipe: {},
} satisfies Option);
