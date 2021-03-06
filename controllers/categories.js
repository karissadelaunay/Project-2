const {Category} = require('../models/category');
const User = require('../models/user');

module.exports = {
    index,
	create,
    new: newCategory,
    show
}

async function index(req, res){
    try{

        const categoryDocuments = await Category.find({userCategory: req.user._id})
        res.render('categories/index',{
            title: 'Categories',
        categories: categoryDocuments
        });
        
    } catch(err){

    }

}

async function show(req, res) {
    try{
        const categoryDocument = await Category.findById(req.params.id);
        categoryDocument.populate('workouts');
        res.render('categories/show', {
            title: 'Category Details',
            category: categoryDocument,
            workouts: categoryDocument.workouts
        })
    
    } catch(err){
        console.log(err, 'error in show function');
    }
}

async function create(req, res){
    try{

        const category = await Category.create(req.body);
        category.userCategory = req.user._id;
        category.save();
        res.redirect('/categories');
    
    } catch(err){

    }
}

async function newCategory(req, res){
    try{
        res.render('categories/new', {title: 'New Category'})
    
    } catch(err){
    
    }
}
