const AddressService = require('../../services/bank-details'); 

class AddressController{

    async createAddress(req, res) {
        try {
            let address = req.body;
            address.user = req.user._id;
            address = await AddressService.createAddress(address);
            return res.send(address);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async getAddresses (req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            var addresses = await AddressService.getAddresses({user: req.user._id}, page, limit);
            return res.send(addresses);
        } catch (error) {
            res.processError(400, error);
        }
    }
    async getAddress(req, res) {
        try {
            var address = await AddressService.getAddress(req.params.id);
            return res.send(address);
        } catch (error) {
            res.processError(400, error);
        }
    }
    
    async updateAddress(req, res) {
        try {
            var address = await AddressService.updateAddress(req.params.id, req.body);
            return res.send(address);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async deleteAddress(req, res) {
        try {
            var address = await AddressService.deleteAddress(req.params.id);
            return res.send(address);
        } catch (error) {
            res.processError(400, error);
        }
    }
}


module.exports = new AddressController();
