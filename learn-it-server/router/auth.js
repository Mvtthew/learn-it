const db = require("../db");
const ResposeError = require("../objects/resposeError");
const sha256 = require("sha256");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const router = require("express").Router();

router.post("/", (req, res) => {
	const { login, email, password } = req.body;
	if ((!password && !login) || (!password && !email)) {
		res.json(
			new ResposeError(
				"You need to provide login/password, email/password combination."
			)
		);
		return;
	}
	const encryptedPassword = sha256(password);
	let user = undefined;
	if (login)
		user = db.get("users").find({ login, password: encryptedPassword }).value();
	else
		user = db.get("users").find({ email, password: encryptedPassword }).value();
	if (!user) {
		res.json(new ResposeError("Invalid credentials."));
		return;
	}
	const token = jwt.sign({ user }, JWT_SECRET, {
		algorithm: "HS256",
	});
	res.json({
		token_type: "Bearer",
		token,
	});
});

module.exports = router;
