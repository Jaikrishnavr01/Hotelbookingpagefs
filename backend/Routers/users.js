const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
const UsersSchema = require('../Models/UsersSchema')

router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send("Users page")
})


router.post('/post', (req, res) => {
    console.log(req.body);
    const newStaff = new UsersSchema(req.body)

    newStaff.save()
        .then(response => console.log(response))
        .catch(err => console.log(err))
    res.send("staff postion page")
})

router.get('/get', (req, res) => {
    UsersSchema.find()
        .then(response => res.send(response))
        .catch((err) => console.log(err))
})
router.get('/get/:id', (req, res) => {
    console.log(req.params.id, req.params);
    UsersSchema.findById(req.params.id)
        .then((response) => {
            console.log(response);

            res.send(response);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error on getting id")
        });
});

router.put('/update/:id', (req, res) => {
    UsersSchema.findByIdAndUpdate(req.params.id, req.body)
        .then((response) => {
            console.log(response);

        })
        .catch((err) => {
            console.log(err)
        });
    res.send("Staff updated successfully");
});


router.delete('/delete/:id', (req, res) => {
    UsersSchema.findByIdAndDelete(req.params.id)
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    res.send("staff delete page")
})

module.exports = router
