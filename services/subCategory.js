var SubCategory = require('../models/subCategory');
const { ErrorHandler } = require('../utilities/error');

class SubCategoryService {
    async getSubCategory(SubCategoryId) {
        try {
            return await SubCategory.findOne({ '_id': SubCategoryId }).populate('Category');
        } catch (e) {
            throw new ErrorHandler(400, 'Error occur while Paginating SubCategory');
        }
    }
    async getSubCategorys(query, page, limit) {
        try {
            var SubCategorys = await SubCategory.find(query).skip(page).limit(limit);
            return SubCategorys;
        } catch (e) {
            throw new ErrorHandler(400, 'Error while Paginating SubCategory');
        }
    }
    async createSubCategory(body) {
        try {
            let newSubCategory = new SubCategory();
            Object.keys(body).forEach(k => {
                newSubCategory[k] = body[k];
            });
            return await newSubCategory.save();
        }
        catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateCategory(SubCategoryId, body) {
        try {
            let SubCategory = await SubCategory.findOne({ '_id': SubCategoryId });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    SubCategory[k] = body[k];
                }
            });
            return SubCategory.save();
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error updating SubCategory');
        }
    }

    async deleteCategory(SubCategoryId) {
        try {
            return await SubCategory.deleteOne({ '_id': SubCategoryId });
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error Deleteing SubCategory');
        }
    }

}

module.exports = new SubCategoryService();