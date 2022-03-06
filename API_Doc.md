# API Documentation

## GET
1) To get all Inventory: /getInventory 
   Request:
           body:{}
           
   Response: 
            paylaod:[
              {
                itemId: "123yz",
                productType: "coke",
                priceInDollars: "2"
              },
              {
                itemId: "675vr",
                productType: "water",
                priceInDollars: "1"
              },
              {
                itemId: "323dv",
                productType: "coke",
                priceInDollars: "2"
              },
              {
                itemId: "098nb",
                productType: "water",
                priceInDollars: "1"
              }
            ]
2) To get all product info of same type: /getInventory/<productType>
   Request:
           body:{}
           
   Response: 
            paylaod:[
              {
                itemId: "123yz",
                productType: "coke",
                priceInDollars: "2"
              },
              {
                id: "323dv",
                productType: "coke",
                priceInDollars: "2"
              }
            ]
