const orderService = require('../../services/orders');

class OrdersController {
    async getOrder(req, res) {
        try {
            var order = await orderService.getOrder(req.params.id);
            return res.send(order);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async getOrders(req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            let query = {};
            var orders = await orderService.getOrders(query, page, limit)
            return res.send(orders);
        } catch (error) {
            res.processError(400, error)
        }
    }


    async updateOrder(req, res) {
        try {
            var order = await orderService.updateOrder(req.params.id);
            return res.send(order);
        } catch (error) {
            res.processError(400, error)
        }
    }
}

module.exports = new OrdersController();
