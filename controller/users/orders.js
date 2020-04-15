const OrderService = require('../../services/orders'); 
const PaymentService = require('../../services/payments'); 


class OrderController{
    async getOrders (req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            let query = {'user': req.user._id};
            var orders = await OrderService.getOrders(query, page, limit);
            return res.send(orders);
        } catch (error) {
            res.processError(400, error);
        }
    }
    async createOrder (req, res) {
        try {
            var orders = await OrderService.createOrder(req.body);
            return res.send(orders);
        } catch (error) {
            res.processError(400, error);
        }
    }
    async getOrder(req, res) {
        try {
            var order = await OrderService.getOrder(req.params.id);
            let query = {'order': order._id};
            var payments = await PaymentService.getPayments(query);
            order.payments = payments;
            return res.send(order);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async updateOrder(req, res) {
        try {
            var order = await OrderService.updateOrder(req.body._id, req.body);
            return res.send(order);
        } catch (error) {
            res.processError(400, error);
        }
    }
    
}


module.exports = new OrderController();
