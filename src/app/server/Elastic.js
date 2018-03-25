const { getBrands } = require('node-car-api');
const { getModels } = require('node-car-api');
var fs = require('fs');

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  hosts: ['http://localhost:9200']
});

client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('Error elasticsearch');
  } else {
    console.log('ok');
  }
});



async function insertIntoElastic() {
  const brands = await getBrands();
  console.log(brands);
  const cars = [];
  for(brand of brands){
    var carsWithBrand = await getModels(brand);
    for(car of carsWithBrand) {
      cars.push({index:{_index:"caradisiac",_type:"car",_id: car.uuid}})
      cars.push(car);
    };

    client.bulk({"body":cars}, function (err, resp, status) {
        console.log(resp);
      });    
  };
}

//insertIntoElastic();
exports.insertElastic = insertIntoElastic;