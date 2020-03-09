const ProductService = require('../../services/products'); 
const TagService = require('../../services/tags');   


class ProductController{
    async getProducts (req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            let query = {'approved':true};
            var products = await ProductService.getProducts(query, page, limit);
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
    
}


module.exports = new ProductController();
