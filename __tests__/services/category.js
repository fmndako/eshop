const categoryService = require('../../services/category');

const { setupDB } = require('../../utilities/test-setup');
setupDB('category-service-testing');


describe('Category Service', () => {

    it('Testing category service', async done => {

        let data = {};
        data.name = 'mohammed';
        data.description = 'collection package';


        // get by id
        let Category = await categoryService.getCategory(id);
        expect(Category.name).toBe(data.name);

        // update
        data.name = 'major testing';
        let updateCategory = await categoryService.updateCategory(id, data);
        expect(updateCategory.name).toBe('major testing');


        done();
    });
});