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

        
        let data = {};
        data.amount = 50000;
        data.date = new Date();
        data.method = 'cash';
        data.methodId = '12345678asdfg';
        data.status = 'delivired';
        data.orders = orderId;
        
        // get by id
        let payment = await PaymentService.getPayment(id);
        expect(payment.order.amount).toBe(25000);
        
        // get all payments
        let payments = await PaymentService.getPayments(id, data);
        expect(payments.order.amount).toBe(25000);

        done();
    });
