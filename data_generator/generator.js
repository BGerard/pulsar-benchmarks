const faker = require('faker');
const { fromPairs } = require('lodash');

const createFakeFinanceObject = () => {
    const objectPairs = Object.keys(faker.finance).map((key) => {
        const func = faker.finance[key];
        return [key, func()];
    });
    return fromPairs(objectPairs);
};

const generateFakeItems = (numberOfItems) => {
    const x =[ ...Array(numberOfItems).keys() ].map( i => i+1);
    return x.map(() => {
       return createFakeFinanceObject();
    });
};

module.exports = {
    generateFakeItems,
};