
// Draw table from 'jsData' array of objects 
function drawTable(tbody) { var tr, td; 
  tbody = document.getElementById(tbody); // loop through data source 
  for (var i = 0; i < products.length; i++) 
     { tr = tbody.insertRow(tbody.rows.length); 
      td = tr.insertCell(tr.cells.length); 
      td.setAttribute("align", "center"); 
      td.innerHTML = products[i].ProductName; 
      td = tr.insertCell(tr.cells.length); 
      td.innerHTML = products[i].UnitsInStock; 
      td = tr.insertCell(tr.cells.length); 
      td.innerHTML = products[i].UnitPrice; 
      td = tr.insertCell(tr.cells.length); 
      td.innerHTML = products[i].Discontinued; 
      td = tr.insertCell(tr.cells.length);} } 

drawTable('table-data')

// var table = document.getElementById("display-table"); //give this ID to your table

// for (var i = 0; i < products.length; i++) {
//     var row = table.insertRow(i);
//     var cell = row.insertCell(0);
//     cell.innerHTML = products[i].ProductName;
// }



// for (var i=0; i<products.length; i++){

//   var productName = document.createElement('td')
//   productName.textContent = products[i].ProductName
//   document.querySelector('#product-name').appendChild(productName)

//   var unitsInStock = document.createElement('td')
//   unitsInStock.textContent = products[i].UnitsInStock
//   document.querySelector('#units-in-stock').appendChild(unitsInStock)

//   var unitPrice = document.createElement('td')
//   unitPrice.textContent = products[i].UnitPrice
//   document.querySelector('#unit-price').appendChild(unitPrice)

//   var discontinued = document.createElement('td')
//   discontinued.textContent = products[i].Discontinued
//   document.querySelector('#discontinued').appendChild(discontinued)

//   var detailsBtn = document.createElement('td') 
//   detailsBtn.textContent = ('View Details')  
//   document.querySelector('#details').appendChild(detailsBtn)
  
// }

