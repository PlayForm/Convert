/**
 * @module Integration
 *
 */
declare const _default: Interface;
export default _default;
import type Interface from "../Interface/Integration.js";
export declare const Default: Omit<{} & {
    default: {
        Cache: {
            Search: string;
            Folder: string;
        };
        Path: string;
        Logger: 2;
        Action: {
            Read: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
            Wrote: ({ Buffer }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<import("@playform/pipe/Target/Type/Buffer.js").Type>;
            Passed: (On: import("@playform/pipe/Target/Interface/File.js").default) => Promise<true>;
            Failed: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
            Accomplished: ({ Input, Output }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
            Fulfilled: ({ File }: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
            Changed: (Plan: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<import("@playform/pipe/Target/Interface/Plan.js").default>;
        };
        File: string;
        Exclude: false;
    };
    Action: {};
}, "__proto__">;
export declare const Merge: import("@playform/build/Target/Interface/Merge.js").default<import("@playform/build/Target/Interface/Merge.js").Generic>;
