const OrderItemService = require('../../services/order-items'); 
const OrderService = require('../../services/orders'); 

// const PaymentService = require('../../services/payments'); 

class CartController {
    async getCarts (req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            let query = {'user': req.user._id, 'checkedOut' : false};
            var orders = await OrderItemService.getOrderItems(query, page, limit);
            return res.send(orders);
        } catch (error) {
            res.processError(400, error);
        }
    }
    async addCart (req, res) {
        try {
            let query = {productDetail: req.params.productDetailId, checkedOut: false}
            var cart = await OrderItemService.getOrderItems(query);

            if (cart.length > 0) {
                // update cart
                return res.send(cart[0])
            }

            req.body.productDetail = req.params.productDetailId;
            req.body.user = req.user._id;
            req.body.timeAdded = new Date();
            req.body.checkedOut = false;
            cart = await OrderItemService.createOrderItem(req.body);
            return res.send(cart);
        } catch (error) {
            res.processError(400, error);
        }
    }
    async removeCart(req, res) {
        try {
            var cart = await OrderItemService.deleteOrderItem(req.params.id);
            return res.send(cart);
        } catch (error) {
            res.processError(400, error);
        }
    }
    async checkoutCart(req, res) {
        try {
            let orderItems = req.body.items;
            let order = req.body;
            order.user = req.user;
            order.date = new Date();
            order = await OrderService.createOrder(req.body);
            for (var item of orderItems){
                item.checkedOut = true;
                item.order = order._id;
                await OrderItemService.updateOrderItem(item._id, item);
            }
            return res.send(await OrderService.getOrder(order._id));
        } catch (error) {
            res.processError(400, error);
        }
    }
    
}


module.exports = new CartController();
