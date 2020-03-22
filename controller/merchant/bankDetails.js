const bankDetailsService = require('../../services/bank-details')

class BankDetailsController {
    async getBankDetail(req, res) {
        try {
            var bankDetail = await bankDetailsService.getBankDetail(req.params.id)
            res.send(bankDetail)
        } catch (error) {
            res.proccessError(400, error)
        }
    }

    async getBankDetails(req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            let query = {'user': req.user._id};
            var bankDetails = await bankDetailsService.getBankdetails(query, page, limit);
            return res.send(bankDetails);
        } catch (error) {
            res.processError(400, error);
        }
    }
}

module.exports = new BankDetailsController();

