const ProductService = require('../../services/products'); 
const ProductDetailService = require('../../services/product-details'); 

const TagService = require('../../services/tags');   


class ProductController{

    async createProduct(req, res) {
        try {
            var product = await ProductService.createProduct(req.body);
            product = product.toJSON();
            product.details = [];
            if (!req.body.details) req.body.details = [{type: 'main'},];
            for (var detail of req.body.details) {                
                detail.product = product._id;
                product.details.push(await ProductDetailService.createProductDetail(detail));
            }
            return res.send(product);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async getProducts (req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            var products = await ProductService.getProducts({}, page, limit);
            return res.send(products);
        } catch (error) {
            res.processError(400, error);
        }
    }
    async getProduct(req, res) {
        try {
            var product = await ProductService.getProduct(req.params.id);
            let query = {'product': product._id};
            var tags = await TagService.getTags(query);
            product.tags = tags;
            return res.send(product);
        } catch (error) {
            res.processError(400, error);
        }
    }
    
    async updateProduct(req, res) {
        try {
            var product = await ProductService.updateProduct(req.params.id, req.body);
            return res.send(product);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async deleteProduct(req, res) {
        try {
            var product = await ProductService.deleteProduct(req.params.id);
            return res.send(product);
        } catch (error) {
            res.processError(400, error);
        }
    }
}


module.exports = new ProductController();
