/**
 * @module Option
 *
 */
declare const _default: {
    default: {
        Cache: {
            Search: string;
            Folder: string;
        };
        Path: string;
        Logger: 2;
        Action: {
            Read: ({ Input }: import("@playform/pipe/Target/Interface/File").default) => Promise<string>;
            Wrote: ({ Buffer }: import("@playform/pipe/Target/Interface/File").default) => Promise<import("@playform/pipe/Target/Type/Buffer").Type>;
            Passed: (On: import("@playform/pipe/Target/Interface/File").default) => Promise<true>;
            Failed: ({ Input }: import("@playform/pipe/Target/Interface/File").default) => Promise<string>;
            Accomplished: ({ Input, Output }: import("@playform/pipe/Target/Interface/File").default) => Promise<string>;
            Fulfilled: ({ File }: import("@playform/pipe/Target/Interface/Plan").default) => Promise<string | false>;
            Changed: (Plan: import("@playform/pipe/Target/Interface/Plan").default) => Promise<import("@playform/pipe/Target/Interface/Plan").default>;
        };
        File: string;
        Exclude: false;
    };
    Action: {};
};
export default _default;
