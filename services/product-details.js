var ProductDetail = require('../models/productDetails');
const { ErrorHandler } = require('../utilities/error');

class ProductDetailService {
    async getProductDetail (productDetailId) {
        try {
            return await ProductDetail.findOne({'_id': productDetailId}).populate('product');
        } catch (e) {
            throw new ErrorHandler(400, 'Error occur while Paginating ProductDetail');
        }
    }
    async getProductDetails(query, page, limit) {
        try {
            var productDetails = await ProductDetail.find(query).skip(page).limit(limit);
            return productDetails;
        } catch (e) {
            throw new ErrorHandler(400, 'Error while Paginating ProductDetail');
        }
    }
    async createProductDetail(body) {
        try {
            let newProductDetails = new ProductDetail();
            Object.keys(body).forEach(k => {
                newProductDetails[k] = body[k];
            });
            return await newProductDetails.save();
        }
        catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateProductDetail(productDetailId, body) {
        try {
            let productDetails = await ProductDetail.findOne({ '_id': productDetailId});
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    productDetails[k] = body[k];
                }
            });
            return productDetails.save();
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error updating ProductDetail');
        }
    }

    async deleteProductDetail(productDetailId) {
        try {
            return await ProductDetail.deleteOne({ '_id': productDetailId });
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error Deleteing ProductDetail');
        }
    }
}

module.exports = new ProductDetailService();