const Order = require('../models/orders');
const {
    ErrorHandler
} = require('../utilities/error');

class OrderService {
    async getOrder(orderId) {
        try {
            return await Order.findOne({
                '_id': orderId
            }).populate('user address');
        } catch (e) {
            throw new ErrorHandler(400, e);
        }
    }
    async getOrders(query, page, limit) {
        try {
            var orders = await Order.find(query).populate('user address').skip(page).limit(limit);
            return orders;
        } catch (e) {
            throw new ErrorHandler(400, e);
        }
    }
    async createOrder(body) {
        try {
            let newOrder = new Order();
            Object.keys(body).forEach(k => {
                newOrder[k] = body[k];
            });
            return await newOrder.save();
        } catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateOrder(orderId, body) {
        try {
            let order = await Order.findOne({
                '_id': orderId
            });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    order[k] = body[k];
                }
            });
            return order.save();
        } catch (err) {
            throw new ErrorHandler(400, 'Error updating order');
        }
    }

    async deleteCartItem(orderId) {
        try {
            return await Order.deleteOne({
                '_id': orderId
            });
        } catch (err) {
            throw new ErrorHandler(400, 'Error deleteing order');
        }
    }
}
module.exports = new OrderService();