const categoryService = require('../../services/category');

class categoryController {
    async getCategory(req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            let query = { 'merchant': req.user._id };
            var category = await categoryService.getCategory(query, page, limit)
            return res.send(category);
        } catch (error) {
            res.processError(400, error)
        }
    }
}

module.exports = new categoryController();