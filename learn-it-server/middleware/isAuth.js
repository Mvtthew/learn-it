const ResposeError = require("../objects/resposeError");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization) {
		res
			.status(401)
			.json(
				new ResposeError("You need to provide authorization token header.")
			);
		return;
	}
	const [tokenType, token] = authorization.split(" ");
	if (!tokenType || tokenType != "Bearer") {
		res
			.status(400)
			.json(new ResposeError("You need to provide valid token type."));
		return;
	}
	if (!token) {
		res.status(400).json(new ResposeError("You need to provide valid token."));
		return;
	}
	try {
		const user = jwt.verify(token, JWT_SECRET);
		req.user = user;
		next();
	} catch {
		res
			.status(401)
			.json(new ResposeError("Invalid/expired authorization token."));
		return;
	}
};
