
const express = require('express');
const router = express.Router();
const checkTime = require('../middlewares/checkTime.js')

const post = require("../Data/posts.js");

// router.use(checkTime)


const postController = require("../Controllers/postsContoller.js")

const {index, show, store, update, patch, destroy} = require('../Controllers/postsContoller.js')



router.get('/',checkTime, index); // checkTime funzia solo per ogni silgola router , se inserisco!!


router.get('/:id',show);


router.post('/',store);


router.put('/:id', update);


router.patch('/:id', patch);


router.delete('/:id', destroy);

module.exports = router;