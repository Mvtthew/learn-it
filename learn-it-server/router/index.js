const router = require("express").Router();

router.get("/", (req, res) => {
	res.json({
		message: "WORKS",
	});
});

// Users routes
router.use("/users", require("./users"));

// Auth routes
router.use("/auth", require("./auth"));

// Tasks routes
router.use("/tasks", require("./tasks"));

module.exports = router;
