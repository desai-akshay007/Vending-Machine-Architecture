
# Vending Machine Architecture

![Screen Shot 2022-03-06 at 10 00 30 PM](https://user-images.githubusercontent.com/10819865/156965699-ba5c5cc0-9ad6-4baa-8e68-cf72e3eeb355.png)

### Some form of Client Hardware
- Displays Messages & Input Options 
- Takes User Input & Payment Input
- Makes the call to the Internal Vending Machine Server
- Does Validation for Payment & Availability

### Vending Machine Internal Server Hardware
- Interacts with the Client by responding to the request
- Interacts with the internal DB (Add, Update, Delete, Fetch)
- Interacts with the external Server over the internet

### Vending Machine External Server Hardware
- Interacts with the Vending Machine internal Server over the internet. (Add, Update, Delete, Fetch)
- Interacts with the Mobile App over the internet.
- Helps Scaling: One External Server can communicate with multiple internal servers & apps.
