

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.eca98dab.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.a8a22574.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/2.d9ff35cf.css"];
export const fonts = [];
