const ProductService = require('../../services/products'); 
const ShippingService = require('../../services/shipping'); 
const FavoriteService = require('../../services/favorites'); 

const ProductDetailService = require('../../services/product-details'); 
const TagService = require('../../services/tags');   


class ProductController{
    async getProducts (req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            let query = {'approved': true};
            var products = await ProductService.getProducts(query, page, limit);
            return res.send(products);
        } catch (error) {
            res.processError(400, error);
        }
    }
    async getProduct(req, res) {
        try {
            var product = await ProductService.getProduct(req.params.id);
            if (!product) throw "product not found";
            let query = {'product': product._id};
            let productDetails = await ProductDetailService.getProductDetails(query);
            var shippings = await ShippingService.getShippings(query);
            var tags = await TagService.getTags(query);
            query.user = req.user._id;
            var favorite = await FavoriteService.getFavorites(query);
            product.tags = tags;
            product.details = productDetails;
            product.shippings = shippings;
            product.favorite = favorite.length > 0 ? true : false;
            return res.send(product);
        } catch (error) {
            res.processError(400, error);
        }
    }
    
}


module.exports = new ProductController();
