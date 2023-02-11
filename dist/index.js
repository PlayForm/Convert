import a from "files-pipeline/dist/lib/deepmerge.js";
import o from "./options/index.js";
var p=(t={})=>{for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&t[e]===!0&&(t[e]=o[e]);t=a(o,t);const r=new Set;if(typeof t.path<"u"&&(t.path instanceof Array||t.path instanceof Set))for(const e of t.path)r.add(e);return{name:"astro-convert",hooks:{"astro:build:done":async({dir:e})=>{r.size||r.add(e)}}}};export { p as default };

