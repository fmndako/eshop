const ProductService = require('../../services/product');
const ProductModel = require('../../models/products');

const { setupDB } = require('../../utilities/test-setup');
setupDB('product-service-testing');


describe('Product Service', () => {

    it('Testing product service', async done => {

        let data = {};
        data.name = 'timberland boots';
        data.stock = 5;
        data.price = 3000;
        data.shortDescription = 'small size';
        data.longDescription = 'big size';
        data.videoUrl = 'processing';
        data.status = 'paid';

        // create 
        let res = await ProductService.createProduct(data);
        let id = res._id;
        expect(res._id).toBeTruthy();
        let models = await ProductModel.find();
        expect(models.length).toBe(1);

        // get all
        let products = await ProductService.getProducts();
        expect(products.length).toBe(1);

        // get by id
        let Product = await ProductService.getProduct(id);
        expect(Product.name).toBe(data.name);

        // update
        data.name = 'children new boot';
        let updateProduct = await ProductService.updateProduct(id, data);
        expect(updateProduct.name).toBe('children new boot');

        //delete 
        await ProductService.deleteProduct(id);
        products = await ProductService.getProducts();
        expect(products.length).toBe(0);
        models = await ProductModel.find();
        expect(models.length).toBe(0); 

        done();
    });
});