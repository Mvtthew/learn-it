const router = require("express").Router();

router.get("/", (req, res) => {
	res.json({
		message: "WORKS",
	});
});

// Users routes
router.use("/users", require("./users"));

// Tasks routes
router.use("/tasks", require("./tasks"));

module.exports = router;
