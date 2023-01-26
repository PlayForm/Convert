import { deepmerge as a } from "deepmerge-ts";
import e from "./options/index.js";
var i=(t={})=>{for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&t[r]===!0&&(t[r]=e()[r]);const o=a(e(),t);return o.path=o.path?.endsWith("/")?o.path:`${o.path}/`,{name:"astro-convert",hooks:{"astro:build:done":async()=>{}}}};export { i as default };

