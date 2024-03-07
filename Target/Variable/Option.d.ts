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
            Read: ({ Input }: any) => Promise<string>;
            Wrote: ({ Buffer }: any) => Promise<any>;
            Passed: (On: any) => Promise<true>;
            Failed: ({ Input }: any) => Promise<string>;
            Accomplished: ({ Input, Output }: any) => Promise<string>;
            Fulfilled: ({ Files }: any) => Promise<string | false>;
            Changed: (Plan: any) => Promise<any>;
        };
        Files: string;
        Exclude: false;
    };
}, "__proto__">;
export default _default;
