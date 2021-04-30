import config from "../config/config";

const saveToken = (token) => {
	localStorage.setItem("auth-token", JSON.stringify(token));
};

const loadToken = () => {
	return JSON.parse(localStorage.getItem("auth-token") || '{"token_type": "", "token": ""}');
};

const clearToken = () => {
	localStorage.removeItem("auth-token");
};

const userStore = {
	state: () => ({
		user: {
			id: "",
			login: "",
			email: "",
		},
		token: loadToken(),
	}),
	getters: {
		isLoggedIn(state) {
			return !!state.token.token;
		},
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			saveToken(token);
		},
		clearToken(state) {
			state.token = { token_type: "", token: "" };
			clearToken();
		},
		setUser(state, user) {
			state.user = user;
		},
	},
	actions: {
		async getLoggedUser({ commit, state }) {
			const res = await fetch(`${config.apiUrl}users/me`, {
				headers: {
					authorization: `${state.token.token_type} ${state.token.token}`,
				},
			});
			const data = await res.json();
			commit("setUser", data);
		},
	},
};

export default userStore;
