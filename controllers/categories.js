const Category = require('../models/category');
const User = require('../models/user');

module.exports = {
	create,
    // delete: deleteCategory,
    // new: newCategory,
    // show
}

async function create(req, res){
    try{

        const category = await Category.create(req.body.category);
        res.send(categoryDocument);
    } catch(err){

    }
}


	// console.log(req.body)

	// Category = req.body.category; 

	// req.body.userCategory = (`../models/user`)

    // req.body.workouts = [];

	// Category.create(req.body, function(err, categoryDocument){ 
	// 	console.log(categoryDocument, " <categoryDocument");

		
	// 	res.send(categoryDocument); 
	// })


