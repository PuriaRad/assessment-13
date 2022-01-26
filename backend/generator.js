const faker = require('faker');

module.exports = () => {
    const data = {
        recommendeds: [],
        products: [],
        users: [],
        carts: [],
    }

    const amountOfProducts = 1000;
    const amountOfRecommendedProduts = 10;
    const amountOfUsers = 100;

    /**
     * GENERATE PRODUCTS AND RECOMMENDED PRODUCTS
     */
    for (let i = 1; i <= amountOfProducts; i++) {
        let product = {};

        product.id = i;
        product.name = faker.commerce.productName();
        product.description = faker.commerce.productDescription();
        product.defaultImage = faker.image.cats();
        product.images = [
            faker.image.cats(),
            faker.image.cats(),
            faker.image.cats(),
            faker.image.cats()
        ];
        product.price = faker.random.float();
        product.discount = faker.random.number(70);

        if (i <= amountOfRecommendedProduts) {
            data.recommendeds.push(product);
        }
        data.products.push(product);
    }

    /**
     * GENERATE USERS WITH PURCHASE HISTORY AND CART
     */
    for (let i = 1; i <= amountOfUsers; i++) {
        let user = {
            orders: [],
        };

        // Random user data
        user.id = i;
        user.name = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
        }
        user.phone = faker.phone.phoneNumber();
        user.avatar = faker.internet.avatar();
        user.email = faker.internet.email();
        user.address = {
            country: faker.address.country(),
            city: faker.address.city(),
            zip: faker.address.zipCode(),
            street: faker.address.streetAddress(),
        }
        user.role = i % 2 ? 'ADMIN' : 'CUSTOMER';

        // Random products that the user has ordered
        for(let a = 1; a <= faker.random.number({min: 1, max: 5}); a++) {
            const orderedProducts = [];
            for(let z = 1; z <= faker.random.number({min: 1, max: 5}); z++) {
                const product = data.products[faker.random.number({min: 0, max: amountOfProducts - 1})];
                orderedProducts.push({id: product.id, quantity: faker.random.number({min: 1, max: 10})});
            }
            user.orders.push({
                id: a,
                products: orderedProducts
            });
        }

        // Set random products into the user's cart
        const cart = [];
        for(let y = 1; y <= faker.random.number(5); y++) {
            const product = data.products[faker.random.number({min: 0, max: amountOfProducts - 1})]; 
            cart.push({id: product.id, quantity: faker.random.number({min: 1, max: 10})});
        }
        data.carts.push({id: user.id, products: cart});

        
        data.users.push(user);
    }

    return data;
}