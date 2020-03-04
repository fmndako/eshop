const Address = require('../models/address');
const {
    ErrorHandler
} = require('../utilities/error');

class PaymentsService {
    async getAddress(addressId) {
        try {
            return await Address.findOne({
                '_id': addressId
            });
        } catch (e) {
            throw new ErrorHandler(400, 'Can not find address');
        }
    }
    async getAddresses(query, page, limit) {
        try {
            var address = await Address.find(query).skip(page).limit(limit);
            return address;
        } catch (e) {
            throw new ErrorHandler(400, 'Error paginating addresses');
        }
    }
    async creatAddress(body) {
        try {
            let newAddress = new Address();
            Object.keys(body).forEach(k => {
                newAddress[k] = body[k];
            });
            return await newAddress.save();
        } catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateAddress(addressId, body) {
        try {
            let address = await Address.findOne({
                '_id': addressId
            });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    address[k] = body[k];
                }
            });
            return address.save();
        } catch (err) {
            throw new ErrorHandler(400, 'Error updating address');
        }
    }

    async deleteAddress(addressId) {
        try {
            return await Address.deleteOne({
                '_id': addressId
            });
        } catch (err) {
            throw new ErrorHandler(400, 'Error deleteing address');
        }
    }
}
module.exports = new PaymentsService();