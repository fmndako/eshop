const PaymentService = require('../../services/payments');
const PaymentModel = require('../../models/payments');
const OrderService = require('../../services/orders');
const OrderModel = require('../../models/orders');


const {
    setupDB
} = require('../../utilities/test-setup');
setupDB('payment-service-testing');


describe('Payment Service', () => {

    it('Testing payment service', async done => {

        let order = {};
        order.created = 'today';
        order.status = 'delivered';
        order.amount = 25000;
        order.shipped = true;
        // create order
        let result = await OrderService.createOrder(order);
        let orderId = result._id;
        expect(result._id).toBeTruthy();
        let model = await OrderModel.find();
        expect(model.length).toBe(1);
        done();

        let data = {};
        data.amount = 50000;
        data.date = new Date();
        data.method = 'cash';
        data.methodId = '12345678asdfg';
        data.status = 'delivired';
        data.orders = orderId;
        // create 
        let res = await PaymentService.createPayment(data);
        let id = res._id;
        expect(res._id).toBeTruthy();
        let models = await PaymentModel.find();
        expect(models.length).toBe(1);

        // get by id
        let payment = await PaymentService.getPayment(id);
        expect(payment.order.amount).toBe(25000);

        done();
    });
});