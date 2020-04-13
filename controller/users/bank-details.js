const BankDetailService = require('../../services/bank-details'); 

class BankDetailController{

    async createBankDetail(req, res) {
        try {
            let bankDetail = req.body;
            bankDetail.user = req.user._id;
            bankDetail = await BankDetailService.createBankDetail(bankDetail);
            return res.send(bankDetail);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async getBankDetails (req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            var bankDetails = await BankDetailService.getBankDetails({user: req.user._id}, page, limit);
            return res.send(bankDetails);
        } catch (error) {
            res.processError(400, error);
        }
    }
    async getBankDetail(req, res) {
        try {
            var bankDetail = await BankDetailService.getBankDetail(req.params.id);
            return res.send(bankDetail);
        } catch (error) {
            res.processError(400, error);
        }
    }
    
    async updateBankDetail(req, res) {
        try {
            var bankDetail = await BankDetailService.updateBankDetail(req.params.id, req.body);
            return res.send(bankDetail);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async deleteBankDetail(req, res) {
        try {
            var bankDetail = await BankDetailService.deleteBankDetail(req.params.id);
            return res.send(bankDetail);
        } catch (error) {
            res.processError(400, error);
        }
    }
}


module.exports = new BankDetailController();
