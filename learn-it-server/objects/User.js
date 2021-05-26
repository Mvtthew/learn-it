module.exports = class User {
	level = 1;
	expiriencePoints = 0;
	nextLevelExpiriencePoints = 10;

	constructor(id, login, email, password) {
		(this.id = id),
			(this.login = login),
			(this.password = password),
			(this.email = email);
	}
};
