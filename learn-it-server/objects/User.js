module.exports = class User {
	constructor(id, login, email, password) {
		(this.id = id),
			(this.login = login),
			(this.password = password),
			(this.email = email);
	}
};
