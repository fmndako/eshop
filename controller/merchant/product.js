const MerchantService = require('../../services/products');
const TagService = require('../../services/tags');


class MerchantController {
    async getProducts(req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            let query = { 'merchant': req.user._id };
            var products = await MerchantService.getProducts(query, page, limit);
            return res.send(products);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async getProduct(req, res) {
        try {

            var product = await MerchantService.getProduct(req.params.id);
            let query = { 'product': product._id };
            var tags = await TagService.getTags(query);
            product.tags = tags;
            return res.send(product);
        } catch (error) {
            res.processError(400, error);
        }

    }

    async createProduct(req, res) {
        try {
            var product = await MerchantService.createProduct(req.body);
            return res.send(product);
        } catch (error) {
            res.processError(400, error);

        }
    }

    async deleteProduct(req, res) {
        try {
            var products = await MerchantService.deleteProduct(req.body.id);
            return res.send(products);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async updateProduct(req, res) {
        try {
            var product = await MerchantService.updateProduct(req.params.id, req.body);
            return res.send(product);
        } catch (error) {
            res.processError(400, error);
        }
    }
}

module.exports = new MerchantController();
