

for (var i=0; i<products.length; i++){

  var productName = document.createElement('td')
  productName.textContent = products[i].ProductName
  document.querySelector('#product-name').appendChild(productName)

  var unitsInStock = document.createElement('td')
  unitsInStock.textContent = products[i].UnitsInStock
  document.querySelector('#units-in-stock').appendChild(unitsInStock)

  var unitPrice = document.createElement('td')
  unitPrice.textContent = products[i].UnitPrice
  document.querySelector('#unit-price').appendChild(unitPrice)

  var discontinued = document.createElement('td')
  discontinued.textContent = products[i].Discontinued
  document.querySelector('#discontinued').appendChild(discontinued)

  var btn = document.createElement('button');   
  btn.innerHTML = "Details";                   
  document.querySelector('#details').appendChild(btn);  
}

