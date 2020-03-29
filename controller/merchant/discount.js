const discountsService = require('../../services/discounts')

class discountsController {
    async getDiscounts(req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.page : 10;
            let query = { 'merchant': req.user._id }
            var discounts = await discountsService.getDiscounts(query, page, limit);
            res.send(discounts);
        } catch (error) {
            res.processError(400, error);
        }
    }
}

module.exports = new discountsController()
