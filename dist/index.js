import { deepmerge as n } from "deepmerge-ts";
import e from "./options/index.js";
var h=(r={})=>{var a;for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&r[o]===!0&&(r[o]=e()[o]);const t=n(e(),r);return t.path=(a=t.path)!=null&&a.endsWith("/")?t.path:`${t.path}/`,{name:"astro-convert",hooks:{"astro:config:done":async o=>{t.path=t.path?t.path:o.config.outDir.toString()},"astro:build:done":async()=>{}}}};export { h as default };

