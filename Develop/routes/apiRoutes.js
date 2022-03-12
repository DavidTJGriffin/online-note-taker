const { response } = require('express');
const fs = require('fs');
const router = require('express').Router();
//GET  - /api/notes'
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', "utf8", (error, response) => {
        if (error) throw error;
        console.log("got data from file ", response);
        //Convert into JSON format 
        const data = JSON.parse(response);
        console.log(data);
        //display the data on HTML 
        res.json(data);

    })
});

//POST -/api/notes'
router.post('/notes', (req, res) => {
    const createNote = req.body;
    console.log(createNote);
});

//DELETE  -/api/notes/:id'
router.delete('/notes/:id', (req, res) => {

});


module.exports = router; 