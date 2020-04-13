const paymentService = require('../../services/payments');

class paymentController {
    async getPayment(req, res) {
        try {
            var payment = await paymentService.getPayment(req.params.id);
            return res.send(payment);
        } catch (error) {
            res.proccessError(400, error);
        }
    }


    async getPayments(req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            let query = { 'user': req.user._id };
            var payments = await paymentService.getPayments(query, page, limit);
            return res.send(payments);
        } catch (error) {
            res.processError(400, error);
        }
    }
}

module.exports = new paymentController(); 