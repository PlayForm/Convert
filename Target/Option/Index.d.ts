import type { Option as _Option } from "files-pipe";
export interface Option extends _Option {
    [key: string]: any;
}
declare const _default: Omit<{} & {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Action: {
        Read: (On: import("files-pipe").File) => Promise<string>;
        Wrote: (On: import("files-pipe").File) => Promise<import("files-pipe").Buffer>;
        Passed: (On: import("files-pipe").File) => Promise<boolean>;
        Failed: (On: import("files-pipe").File) => Promise<string>;
        Accomplished: (On: import("files-pipe").File) => Promise<string>;
        Fulfilled: (Plan: import("files-pipe/Target/Interface/Plan").Type) => Promise<string | false>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan").Type) => Promise<import("files-pipe/Target/Interface/Plan").Type>;
    };
    Logger: 2;
    pipe: {};
}, "__proto__">;
export default _default;
