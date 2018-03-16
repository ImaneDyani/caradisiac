const {getBrands} = require('node-car-api');

async function print () {
  const brands = await getBrands();

  console.log(brands);
}

print();
const {getModels} = require('node-car-api');

async function print () {
  const models = await getModels('PEUGEOT');

  console.log(models);
}

print();