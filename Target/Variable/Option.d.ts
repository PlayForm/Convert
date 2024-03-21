/**
 * @module Option
 *
 */
declare const _default: Omit<{} & {
    default: {
        Cache: {
            Search: string;
            Folder: string;
        };
        Path: string;
        Logger: 2;
        Action: {
            Read: ({ Input }: any) => Promise<string>;
            Wrote: ({ Buffer }: any) => Promise<any>;
            Passed: (On: any) => Promise<true>;
            Failed: ({ Input }: any) => Promise<string>;
            Accomplished: ({ Input, Output }: any) => Promise<string>;
            Fulfilled: ({ File }: any) => Promise<string | false>;
            Changed: (Plan: any) => Promise<any>;
        };
        File: string;
        Exclude: false;
    };
    Action: {};
}, "__proto__">;
export default _default;
