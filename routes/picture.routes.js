const express = require('express');
const router = express.Router();
 
// GET route to display the form to create a new movie
router.get('/gallery/create', (req, res) => res.render('picture-views/picture-create'));
 
module.exports = router;