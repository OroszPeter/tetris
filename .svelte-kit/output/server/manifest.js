export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8e012cbb.js","app":"_app/immutable/entry/app.4e30643b.js","imports":["_app/immutable/entry/start.8e012cbb.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/singletons.63c13f16.js","_app/immutable/entry/app.4e30643b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.a8a22574.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
