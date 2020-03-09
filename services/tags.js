var Tag = require('../models/tags');
const { ErrorHandler } = require('../utilities/error');

class TagService {
    async getTag(tagId) {
        try {
            return await Tag.findOne({'_id': tagId}).populate('product');
        } catch (e) {
            throw new ErrorHandler(400, 'Error occur while Paginating Tag');
        }
    }
    async getTags(query, page, limit) {
        try { 
            var tags = await Tag.find(query).skip(page).limit(limit);
            return tags;
        } catch (e) {
            throw new ErrorHandler(400, 'Error while Paginating Tag');
        }
    }
    async createTag(body) {
        try {
            let newTag = new Tag();
            Object.keys(body).forEach(k => {
                newTag[k] = body[k];
            });
            return await newTag.save();
        }
        catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateTag(tagId, body) {
        try {
            let tag = await Tag.findOne({ '_id': tagId });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    tag[k] = body[k];
                }
            });
            return tag.save();
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error updating tag');
        }
    }

    async deleteTag(tagId) {
        try {
            return await Tag.deleteOne({ '_id': tagId });
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error Deleteing Tag');
        }
    }
}

module.exports = new TagService();