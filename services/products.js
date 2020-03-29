var Product = require('../models/products');
const { ErrorHandler } = require('../utilities/error');

class ProductService {
    async getProduct(productId) {
        console.log(productId)
        try {
            return await Product.findOne({ '_id': productId }).populate('user discount store merchant ')
        } catch (e) {
            throw new ErrorHandler(400, 'Error Cannot get Product');
        }
    }
    async getProducts(query, page, limit) {
        try {
            var products = await Product.find(query).skip(page).limit(limit);
            return products;
        } catch (e) {
            throw new ErrorHandler(400, 'Error cannot access all Products');
        }
    }
    async createProduct(body) {
        try {
            let newProduct = new Product();
            Object.keys(body).forEach(k => {
                newProduct[k] = body[k];
            });
            return await newProduct.save();
        }
        catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateProduct(productId, body) {
        try {
            let product = await Product.findOne({ '_id': productId });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    product[k] = body[k];
                }
            });
            return product.save();
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error updating product');
        }
    }

    async deleteProduct(productId) {
        try {
            return await Product.deleteOne({ '_id': productId });
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error Deleteing product');
        }
    }
}

module.exports = new ProductService();