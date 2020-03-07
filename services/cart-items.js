const CartItem = require('../models/cart-items');
const {
    ErrorHandler
} = require('../utilities/error');

class CartItemService {
    async getCartItem(itemId) {
        try {
            return await CartItem.findOne({
                '_id': itemId
            }).populate('cart productDetail');
        } catch (e) {
            throw new ErrorHandler(400, 'Can not find cart item');
        }
    }
    async getCartItems(query, page, limit) {
        try {
            var items = await CartItem.find(query).populate('cart productDetail').skip(page).limit(limit);
            return items;
        } catch (e) {
            throw new ErrorHandler(400, 'Error paginating cart items');
        }
    }
    async createCartItem(body) {
        try {
            let newItem = new CartItem();
            Object.keys(body).forEach(k => {
                newItem[k] = body[k];
            });
            return await newItem.save();
        } catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateCartItem(itemId, body) {
        try {
            let item = await CartItem.findOne({
                '_id': itemId
            });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    item[k] = body[k];
                }
            });
            return item.save();
        } catch (err) {
            throw new ErrorHandler(400, 'Error updating cart item');
        }
    }

    async deleteCartItem(itemId) {
        try {
            return await CartItem.deleteOne({
                '_id': itemId
            });
        } catch (err) {
            throw new ErrorHandler(400, 'Error deleteing cart item');
        }
    }
}
module.exports = new CartItemService();