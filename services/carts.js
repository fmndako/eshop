const Cart = require('../models/carts');
const {
    ErrorHandler
} = require('../utilities/error');

class CartService {
    async getCart(cartId) {
        try {
            return await Cart.findOne({
                '_id': cartId
            }).populate('user');
        } catch (e) {
            throw new ErrorHandler(400, 'Can not find cart');
        }
    }
    async getCarts(query, page, limit) {
        try {
            var carts = await Cart.find(query).populate('user').skip(page).limit(limit);
            return carts;
        } catch (e) {
            throw new ErrorHandler(400, 'Error paginating carts');
        }
    }
    async createCart(body) {
        try {
            let newCart = new Cart();
            Object.keys(body).forEach(k => {
                newCart[k] = body[k];
            });
            return await newCart.save();
        } catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateCart(cartId, body) {
        try {
            let cart = await Cart.findOne({
                '_id': cartId
            });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    cart[k] = body[k];
                }
            });
            return cart.save();
        } catch (err) {
            throw new ErrorHandler(400, 'Error updating cart');
        }
    }

    async deleteCart(cartId) {
        try {
            return await Cart.deleteOne({
                '_id': cartId
            });
        } catch (err) {
            throw new ErrorHandler(400, 'Error deleteing cart');
        }
    }
}
module.exports = new CartService();