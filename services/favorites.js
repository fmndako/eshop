var Favorite = require('../models/favorites');
const { ErrorHandler } = require('../utilities/error');

class FavoriteService {
    async getFavorite(favoriteId) {
        try {
            return await Favorite.findOne({ '_id': favoriteId }).populate('user product');
        } catch (e) {
            throw new ErrorHandler(400, 'Error while Paginating Favorite');
        }
    }
    async getFavorites(query, page, limit) {
        try {
            var favorites = await Favorite.find(query ).skip(page).limit(limit);
            return favorites;
        } catch (e) {
            throw new ErrorHandler(400, 'Error while Paginating Favorite');
        }
    }
    async createFavorite(body) {
        try {
            let newFavorite = new Favorite();
            Object.keys(body).forEach(k => {
                newFavorite[k] = body[k];
            });
            return await newFavorite.save();
        }
        catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateFavorite(favoriteId, body) {
        try {
            let favorite = await Favorite.findOne({ '_id': favoriteId });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    favorite[k] = body[k];
                }
            });
            return favorite.save();
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error updating Favorite');
        }
    }

    async deleteFavorite(favoriteId) {
        try {
            return await Favorite.deleteOne({ '_id': favoriteId });
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error Deleteing Favorite');
        }
    }
}

module.exports = new FavoriteService();