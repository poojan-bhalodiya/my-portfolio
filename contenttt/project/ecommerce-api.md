# Ecommerce API
This is ecommerce api. user can register, login,Update User,Delete user, Get perticular User, Get all User, Add Product, Add Order and check payment method.

- payment Method to use stripe
**https://stripe.com/in**

### Get Ecommerce API request 
` http://localhost:6000/ `

### How to run this Project

- Install dependency

`` npm i ``

- Run the Project

`` npm start ``


## Packages

| Name             | Version                                                                |
| ----------------- | ------------------------------------------------------------------ |
| cors | ^2.8.5 |
| dotenv | ^16.4.1 |
| express | ^4.18.2 |
| nodemon | ^3.0.2 |
| crypto-js | "^4.1.1 |
| jsonwebtoken | "^8.5.1 |
| mongoose | "^6.0.5 |
| stripe | ^8.174.0 |



## API Reference

#### Register User

`` POST || http://localhost:6000/api/auth/register ``

- User can register for the write your username,email,password.

#### login

`` POST || http://localhost:6000/api/auth/login ``

- login User

- email and password are required in body.

#### update User

`` PUT || http://localhost:6000/api/users/${id} ``

- User have a login that genrate a token if user update your profile to use token other wise not to update profile. Token to send in header and changing profile data to send body.

#### Get User

`` GET || http://localhost:6000/api/users/find/${id} ``

- Only admin can show all User data. Admin token compaosry to add in header.

#### Get All User

`` GET || http://localhost:6000/api/users/ ``

- only admin can show all user data with your token to input in header tab.

#### Add Product

`` POST || http://localhost:6000/api/products ``

- only admin can add product in use your token no other user to authorize.

#### Get All Product

`` GET || http://localhost:6000/api/products/ ``

- only admin can show all products.

#### Add Order

`` POST || http://localhost:6000/api/orders ``

- add token and add your Order.

  
## Screenshots :

### Register User

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707350985/Projects/ecommerceapi/ScreenShort/registeruser.png)

### Login User

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707352252/Projects/ecommerceapi/ScreenShort/login.png)

### Update User

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707354098/Projects/ecommerceapi/ScreenShort/UpdatedHeaderToken.png)


![](https://res.cloudinary.com/dhntmsget/image/upload/v1707354170/Projects/ecommerceapi/ScreenShort/updatedBody.png)

### Get User

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707356534/Projects/ecommerceapi/ScreenShort/GetUser.png)

### Get All User

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707356859/Projects/ecommerceapi/ScreenShort/GetAllUser.png)

### Add Product

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707357354/Projects/ecommerceapi/ScreenShort/AddProduct.png)

### Get All Product

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707357706/Projects/ecommerceapi/ScreenShort/GetAllProducts.png)

### Add Order

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707358242/Projects/ecommerceapi/ScreenShort/AddOrder.png)
