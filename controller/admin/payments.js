const PaymentService = require('../../services/payments');

class PaymentController {

    async getPayments(req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            var query = {};
            var categories = await PaymentService.getPayments(query, page, limit);
            return res.status(200).json({
                status: 200,
                data: categories,
                message: 'All payments fetched successfully'
            });
        } catch (error) {
            res.processError(400, error);
        }
    }

    async getPayment(req, res) {
        try {
            var payment = await PaymentService.getPayment(req.params.id);
            return res.send(payment);
        } catch (error) {
            res.processError(400, error);
        }
    }

}


module.exports = new PaymentController();