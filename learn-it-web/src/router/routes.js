export const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: () => import("../views/Dashboard.vue"),
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Login.vue"),
	},
	{
		path: "/logout",
		name: "Logout",
		component: () => import("../views/Logout.vue"),
	},
	{
		path: "/task/:id",
		name: "Task",
		component: () => import("../views/Task.vue"),
	},
];
