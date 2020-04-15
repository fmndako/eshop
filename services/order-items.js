const OrderItem = require('../models/order-items');
const {
    ErrorHandler
} = require('../utilities/error');

class OrderItemService {
    async getOrderItem(itemId) {
        try {
            return await OrderItem.findOne({
                '_id': itemId
            }).populate('order productDetail');
        } catch (e) {
            throw new ErrorHandler(400, 'Can not find order item');
        }
    }
    async getOrderItems(query, page, limit) {
        try {
            var items = await OrderItem.find(query).skip(page).limit(limit);
            return items;
        } catch (e) {
            throw new ErrorHandler(400, e);
        }
    }
    async createOrderItem(body) {
        try {
            let newItem = new OrderItem();
            Object.keys(body).forEach(k => {
                newItem[k] = body[k];
            });
            return await newItem.save();
        } catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateOrderItem(itemId, body) {
        try {
            let item = await OrderItem.findOne({
                '_id': itemId
            });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    item[k] = body[k];
                }
            });
            return item.save();
        } catch (err) {
            throw new ErrorHandler(400, 'Error updating order item');
        }
    }

    async deleteOrderItem(itemId) {
        try {
            return await OrderItem.deleteOne({
                '_id': itemId
            });
        } catch (err) {
            throw new ErrorHandler(400, 'Error deleteing order item');
        }
    }
}
module.exports = new OrderItemService();