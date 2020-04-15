const FavoriteService = require('../../services/favorites'); 
const PaymentService = require('../../services/payments'); 


class FavoriteController{
    async getFavorites (req, res) {
        try {
            var page = req.params.page ? req.params.page : 1;
            var limit = req.params.limit ? req.params.limit : 10;
            let query = {'user': req.user._id};
            var favorites = await FavoriteService.getFavorites(query, page, limit);
            return res.send(favorites);
        } catch (error) {
            res.processError(400, error);
        }
    }
    async createFavorite (req, res) {
        try {
            let product = req.params.productId;
            let query = {'user': req.user._id, 'product': product};
            var favorites = await FavoriteService.getFavorites(query);
            if (favorites.length > 0) return res.send(favorites[0]);
            let user = req.user._id;
            let date = new Date();
            let favorite = {product, user, date};
            favorite = await FavoriteService.createFavorite(favorite);
            return res.send(favorite);
        } catch (error) {
            res.processError(400, error);
        }
    }

    async deleteFavorite(req, res) {
        try {
            let query = {user: req.user._id, product: req.params.productId};
            var favorite = await FavoriteService.getFavorites(query);
            favorite = await FavoriteService.deleteFavorite(favorite[0]._id);
            return res.send(favorite);
        } catch (error) {
            res.processError(400, error);
        }
    }
}


module.exports = new FavoriteController();
