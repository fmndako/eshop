var Category = require('../models/category');
const { ErrorHandler } = require('../utilities/error');

class CategoryService {
    async getCategory(categoryId) {
        try {
            return await Category.findOne({ '_id': categoryId }).populate('SubCategory');
        } catch (e) {
            throw new ErrorHandler(400, 'Error occur while Paginating Category');
        }
    }
    async getCategorys(query, page, limit) {
        try {
            var categorys = await Category.find(query).skip(page).limit(limit);
            return categorys;
        } catch (e) {
            throw new ErrorHandler(400, 'Error while Paginating Category');
        }
    }
    async createCategory(body) {
        try {
            let newCategory = new Category();
            Object.keys(body).forEach(k => {
                newCategory[k] = body[k];
            });
            return await newCategory.save();
        }
        catch (e) {
            throw new ErrorHandler(400, e);
        }
    }

    async updateCategory(categoryId, body) {
        try {
            let category = await Category.find({ '_id': categoryId });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    category[k] = body[k];
                }
            });
            return Category.save();
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error updating category');
        }
    }

    async deleteCategory(categoryId) {
        try {
            return await Category.deleteOne({ '_id': categoryId });
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error Deleteing Category');
        }
    }

}

module.exports = new CategoryService();