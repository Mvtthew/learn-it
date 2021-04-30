const ResposeError = require("../objects/resposeError");

const router = require("express").Router();
const sha256 = require("sha256");
const User = require("../objects/User");

const db = require("../db");

router.post("/", async (req, res) => {
	const { login, email, password } = req.body;
	if (!login || !password || !email) {
		res.json(new ResposeError("You need to provide all fields."));
		return;
	}
	const existingLoginUser = db.get("users").find({ login }).value();
	if (existingLoginUser) {
		res.json(new ResposeError("User with this login already exists."));
		return;
	}
	const existingEmailUser = db.get("users").find({ email }).value();
	if (existingEmailUser) {
		res.json(new ResposeError("User with this email already exists."));
		return;
	}
	const encryptedPassword = sha256(password);
	const user = new User(login, email, encryptedPassword);
	db.get("users").push(user).write();
	res.json(user);
});

module.exports = router;
