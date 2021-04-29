const ResposeError = require("../objects/resposeError");

const router = require("express").Router();
const sha256 = require("sha256");
const User = require("../objects/User");

const db = require("../db");

// TODO: Secure with admin access only
router.post("/", async (req, res) => {
	const { login, password } = req.body;
	if (!login || !password) {
		res.json(new ResposeError("You need to provide all fields"));
		return;
	}
	const existingUser = db.get("users").find({ login }).value();
	if (existingUser) {
		res.json(new ResposeError("User with this login already exists"));
		return;
	}
	const encryptedPassword = sha256(password);
	const user = new User(login, encryptedPassword);
	db.get("users").push(user).write();
	res.json(user);
});

module.exports = router;
