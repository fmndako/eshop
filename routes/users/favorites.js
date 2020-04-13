const FavoriteController = require('../../controller/users/favorites');
const express = require('express');

const router = express.Router();

router.get('/', FavoriteController.getFavorites);

router.post('/:productId', FavoriteController.createFavorite);

router.delete('/:productId', FavoriteController.deleteFavorite);


module.exports = router;
