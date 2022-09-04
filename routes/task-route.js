const router = require('express').Router();
const Task = require('../models/task')

router.get('/', (req, res) => {
   Task.find()
       .exec()
       .then((results) => {
        if(results.length < 1) {
           return res.json({success: false, message: "No data found"})
        }
        res.json({success: true, data: results})
       })
       .catch((err) => {
          return res.json({success: false, message: "server error"})
       })
})
router.post('/', (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        createdAt: Date.now().valueOf(),
        updatedAt: Date.now().valueOf()
    })
    task.save()
        .then(
            (result) => {
                res.json({success: true, message: "Task has been added"})
            }
        )
        .catch(
            (err) => {
                res.json({success: false, message: "Task is not saving", error: err})
            }
        )
})
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Task.findById(id)
       .exec()
       .then((result) => {
        if(!result) {
           return res.json({success: false, message: "No data found"})
        }
        res.json({success: true, data: result})
       })
       .catch((err) => {
          return res.json({success: false, message: "server error"})
       })
})
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    Task.updateOne({_id:id}, {$set: req.body})
       .then((result) => {
          res.json({success: true, message: "data has been updated"})
       })
       .catch((err) => {
          return res.json({success: false, message: "server error"})
       })
})
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Task.deleteOne({_id:id})
       .then((result) => {
          res.json({success: true, message: "data has been deletetd"})
       })
       .catch((err) => {
          return res.json({success: false, message: "server error"})
       })
})


module.exports = router;