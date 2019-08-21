// Draw table from 'products' array of objects 

function drawTable(tbody) { 
  
  var tr, td; 
  tbody = document.getElementById(tbody); 

  for (var i = 0; i < products.length; i++) // loop through data source
     { tr = tbody.insertRow(tbody.rows.length); 
      td = tr.insertCell(tr.cells.length); 
      td.innerHTML = products[i].ProductName; 
      td = tr.insertCell(tr.cells.length); 
      td.innerHTML = products[i].UnitsInStock; 
      td = tr.insertCell(tr.cells.length); 
      td.innerHTML = products[i].UnitPrice;
      td = tr.insertCell(tr.cells.length); 
      
      // Replaceing true/false values with disabled checkboxes
      checkbox = document.createElement('input');
      checkbox.setAttribute("type", "checkbox");
      checkbox.disabled = true;
      checkbox.checked = products[i].Discontinued;
      td.appendChild(checkbox);  

      // View Details button
      td = tr.insertCell(tr.cells.length);  
      button = document.createElement('button');
      button.textContent = ('View Details');

      // Display details on button click
      button.onclick = (n=> event=> {
        
        const productName = document.querySelector('#product-name');
        productName.textContent = products[n].ProductName;

        const productCategory = document.querySelector('#product-category'); 
        productCategory.textContent = products[n].Category.CategoryName;

        const productDescription = document.querySelector('#product-description');
        productDescription.textContent = products[n].Category.Description;
        
      })(i);
      td.appendChild(button);
      
      } } 
     
drawTable('table-data');





