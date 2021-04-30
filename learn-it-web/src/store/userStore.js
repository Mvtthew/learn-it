import config from "../config/config";

const userStore = {
	state: () => ({
		user: {
			id: "",
			login: "",
			email: "",
		},
		token: {
			token_type: "",
			token: "",
		},
	}),
	getters: {
		isLoggedIn(state) {
			return !!state.token.token;
		},
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
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
