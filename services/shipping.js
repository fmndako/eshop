var Shipping = require('../models/shipping');
const { ErrorHandler } = require('../utilities/error');

class ShippingService {
    async getShipping (shippingId) {
        try {
            return await Shipping.findOne({'_id': shippingId}).populate('product');
        } catch (e) {
            throw new ErrorHandler(400, e);
        }
    }
    async getShippings(query, page, limit) {
        try {
            var shippings = await Shipping.find(query).skip(page).limit(limit);
            return shippings;
        } catch (e) {
            throw new ErrorHandler(400, e);
        }
    }
    async createShipping(body) {
        try {
            let newShippings = new Shipping();
            Object.keys(body).forEach(k => {
                newShippings[k] = body[k];
            });
            return await newShippings.save();
        }
        catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateShipping(shippingId, body) {
        try {
            let shippings = await Shipping.findOne({ '_id': shippingId});
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    shippings[k] = body[k];
                }
            });
            return shippings.save();
        }
        catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async deleteShipping(shippingId) {
        try {
            return await Shipping.deleteOne({ '_id': shippingId });
        }
        catch (err) {
            throw new ErrorHandler(400, err);
        }
    }
}

module.exports = new ShippingService();