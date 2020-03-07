const Payments = require('../models/payments');
const {
    ErrorHandler
} = require('../utilities/error');

class PaymentService {
    async getPayment(paymentId) {
        try {
            let result = await Payments.findOne({
                '_id': paymentId
            }).populate('orders');
            console.log(result);
            return;

        } catch (e) {
            throw new ErrorHandler(400, 'Can not find payment');
        }
    }
    async getPayments(query, page, limit) {
        try {
            var payments = await Payments.find(query).populate('order').skip(page).limit(limit);
            return payments;
        } catch (e) {
            throw new ErrorHandler(400, 'Error paginating payments');
        }
    }
    async createPayment(body) {
        try {
            let newPayment = new Payments();
            Object.keys(body).forEach(k => {
                newPayment[k] = body[k];
            });
            return await newPayment.save();
        } catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updatePayment(paymentId, body) {
        try {
            let payment = await Payments.findOne({
                '_id': paymentId
            });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    payment[k] = body[k];
                }
            });
            return payment.save();
        } catch (err) {
            throw new ErrorHandler(400, 'Error updating payment');
        }
    }

    async deletePayment(paymentId) {
        try {
            return await Payments.deleteOne({
                '_id': paymentId
            });
        } catch (err) {
            throw new ErrorHandler(400, 'Error deleteing payment');
        }
    }
}
module.exports = new PaymentService();