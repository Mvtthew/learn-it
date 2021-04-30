const ResposeError = require("../objects/resposeError");

const router = require("express").Router();
const sha256 = require("sha256");
const User = require("../objects/User");
const { NANO_SIZE } = require("../config");

const db = require("../db");
const isAuth = require("../middleware/isAuth");
const { nanoid } = require("nanoid");

router.get("/me", isAuth, (req, res) => {
	res.json(req.user);
});

router.post("/", async (req, res) => {
	const { login, email, password } = req.body;
	if (!login || !password || !email) {
		res.status(400).json(new ResposeError("You need to provide all fields."));
		return;
	}
	const existingLoginUser = db.get("users").find({ login }).value();
	if (existingLoginUser) {
		res
			.status(400)
			.json(new ResposeError("User with this login already exists."));
		return;
	}
	const existingEmailUser = db.get("users").find({ email }).value();
	if (existingEmailUser) {
		res
			.status(400)
			.json(new ResposeError("User with this email already exists."));
		return;
	}
	const encryptedPassword = sha256(password);
	const user = new User(nanoid(NANO_SIZE), login, email, encryptedPassword);
	db.get("users").push(user).write();
	res.json(user);
});

module.exports = router;
