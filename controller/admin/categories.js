const CategoryService = require('../../services/category');

class CategoryController {

    async createCategory(req, res) {
        try {
            var category = await CategoryService.createCategory(req.body);
            return res.send(category);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async getCategories(req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            var query = {};
            var categories = await CategoryService.getCategories(query, page, limit);
            return res.status(200).json({
                status: 200,
                data: categories,
                message: 'All categories fetched successfully'
            });
        } catch (error) {
            res.processError(400, error);
        }
    }

    async getCategory(req, res) {
        try {
            var category = await CategoryService.getCategory(req.params.id);
            return res.send(category);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async updateCategory(req, res) {
        try {
            var category = await CategoryService.updateCategory(req.params.id, req.body);
            return res.send(category);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async deleteCategory(req, res) {
        try {
            var category = await CategoryService.deleteCategory(req.params.id);
            return res.send(category);
        } catch (error) {
            res.processError(400, error);
        }
    }

}


module.exports = new CategoryController();