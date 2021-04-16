const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({
		message: 'WORKS',
	});
});

// Tasks routes
router.use('/tasks', require('./tasks'));

module.exports = router;
