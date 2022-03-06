# API Documentation

## GET
1) /getInventory
   Request:
           body:{}
           
   Response: 
            paylaod:[
              {
                id: "123yz",
                productType: "coke",
                priceInDollars: "2"
              },
              {
                id: "675vr",
                productType: "water",
                priceInDollars: "1"
              },
              {
                id: "323dv",
                productType: "coke",
                priceInDollars: "2"
              },
              {
                id: "098nb",
                productType: "water",
                priceInDollars: "1"
              }
            ]
2) /getInventory/<productType>
   Request:
           body:{}
           
   Response: 
            paylaod:[
              {
                id: "123yz",
                productType: "coke",
                priceInDollars: "2"
              },
              {
                id: "675vr",
                productType: "water",
                priceInDollars: "1"
              },
              {
                id: "323dv",
                productType: "coke",
                priceInDollars: "2"
              },
              {
                id: "098nb",
                productType: "water",
                priceInDollars: "1"
              }
            ]
