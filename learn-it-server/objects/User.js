module.exports = class User {
	constructor(login, email, password) {
		(this.login = login), (this.password = password), (this.email = email);
	}
};
