const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const marked = require('marked');

router.get('/:id', (req, res) => {
	const taskId = req.params.id;
	try {
		const pathToTask = path.join(__dirname, `../storage/tasks/task_${taskId}.MD`);
		const taskMd = fs.readFileSync(pathToTask, 'utf8');
		res.send(marked(taskMd.toString()));
	} catch {
		res.send(marked('# FILE NOT FOUND'));
	}
});

module.exports = router;
