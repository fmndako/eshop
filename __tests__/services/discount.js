const DiscountService = require('../../services/discounts');
const DiscountModel = require('../../models/discounts');

const {
    setupDB
} = require('../../utilities/test-setup');
setupDB('discount-service-testing');


describe('Discount Service', () => {

    it('Testing discount service', async done => {


        let data = {};
        data.created = 'today';
        data.startDate = new Date();
        data.endDate = new Date()

        // get by id
        let discount = await DiscountService.getDiscount(id);
        expect(discount.order.amount).toBe(5000);

        // get all discount
        let discounts = await DiscountService.getDiscount(id, data);
        expect(discounts.amount).toBe(5000);

        done();
    });
