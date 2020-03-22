var bankDetails = require('../models/bank-details');
const { ErrorHandler } = require('../utilities/error');

class bankDetailsService {
    async getBankDetail(bankDetailsId) {
        try {
            return await bankDetails.findOne({ '_id': bankDetailsId });
        } catch (e) {
            throw new ErrorHandler(400, 'Error while getting BankDetail');
        }
    }
    async getBankdetails(query, page, limit) {
        try {
            var bankDetails = await bankDetails.find(query).skip(page).limit(limit);
            return bankDetails;
        } catch (e) {
            throw new ErrorHandler(400, 'Error occur while fetching BankDetails');
        }
    }
    async createBankDetails(body) {
        try {
            let newBankDetails = new bankDetails();
            Object.keys(body).forEach(k => {
                newBankDetails[k] = body[k];
            });
            return await newBankDetails.save();
        }
        catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateBankDetails(bankDetailsId, body) {
        try {
            let bankDetails = await bankDetails.findOne({ '_id': bankDetailsId });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    bankDetails[k] = body[k];
                }
            });
            return bankDetails.save();
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error updating BankDetails');
        }
    }

    async deleteBankDetails(bankDetailsId) {
        try {
            return await bankDetails.deleteOne({ '_id': bankDetailsId });
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error Deleteing BankDetails');
        }
    }
}

module.exports = new bankDetailsService();