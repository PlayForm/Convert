/**
 * @module Option
 *
 */
declare const _default: Omit<{} & {
    Pipe: {};
    default: {
        Cache: {
            Search: string;
            Folder: string;
        };
        Path: string;
        Logger: 2;
        Action: {
            Read: ({ Input }: import("files-pipe/Target/Interface/File").default) => Promise<string>;
            Wrote: ({ Buffer }: import("files-pipe/Target/Interface/File").default) => Promise<import("files-pipe/Target/Type/Buffer").Type>;
            Passed: (On: import("files-pipe/Target/Interface/File").default) => Promise<true>;
            Failed: ({ Input }: import("files-pipe/Target/Interface/File").default) => Promise<string>;
            Accomplished: ({ Input, Output }: import("files-pipe/Target/Interface/File").default) => Promise<string>;
            Fulfilled: ({ Files }: import("files-pipe/Target/Interface/Plan").default) => Promise<string | false>;
            Changed: (Plan: import("files-pipe/Target/Interface/Plan").default) => Promise<import("files-pipe/Target/Interface/Plan").default>;
        };
        Files: string;
        Exclude: false;
    };
}, "__proto__">;
export default _default;
