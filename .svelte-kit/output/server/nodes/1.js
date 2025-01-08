

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a03b217d.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.a8a22574.js","_app/immutable/chunks/singletons.63c13f16.js"];
export const stylesheets = [];
export const fonts = [];
