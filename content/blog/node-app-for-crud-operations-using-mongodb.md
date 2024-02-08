# Set up your Node application for CRUD operations using MongoDB

## Introduction

In the realm of modern web development, creating scalable and efficient databases is crucial for handling large volumes of data. MongoDB, a NoSQL database, has gained popularity for its flexibility and scalability. In this blog post, we'll guide you through the process of setting up a MongoDB cluster for a Node.js Express project and implementing basic CRUD (Create, Read, Update, Delete) operations.

## Prerequisites

1. Node Install in the system.
2. One code editor installs in System.
3. Postman installs to check ROutes.

## Create a mongo cluster account
1 create an account and verify your mail address.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707321245/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/Mongo1.png)

2. A few questions will be asked and answer them and click finish button.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707324841/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/mongologin.webp)

3. select your plan, provider, regions and write your cluster name by default name is Cluster0. select complete details to click Create.


![](https://res.cloudinary.com/dhntmsget/image/upload/v1707324841/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/mongologin.webp)

4. Enter User name and password by default the name and password are fill up you have also go with generated name and password. Enter your user name and password to click create user button.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707324996/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/cluster2.webp)

5. Add entries to your IP Access List
 remove from default generated Ip address and click Network Access button for sidebar.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707325249/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/cluster3.webp)

6. Add IP address button.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707325325/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/ADDIPADDRESS.webp)

7. Click allow access from anywhere button and click confirm button.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707325511/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/IPAddress.png)

8. Network access from status is completed your IP address are set completed click database to show the cluster from you have created.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707325599/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/finalcluster.webp)

## Let's Start a CRUD Operation with Node.js, Express, MongoDB.

1. First create a folder name **`CRUD operation with node.js, express, MongoDB`** and open folder in VS Code (Code editor).
 

2 initialization your node package module your project. And add project dependences.
open terminal and write this command and add dependences.

`npm i`

`npm I nodemon express mongoose cors dotenv `

3. create `app.js` file add write a basic server code.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707419479/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/BasicServer.png)

4. Add script in package. Json page.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707326059/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/Script.webp)

5. Open terminal and run the code "npm run dev" to run your server

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707326115/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/terminal.webp)

6. Click the http://localhost:8000 and show the browser print Node Server.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707326177/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/browser.webp)

## Connection for mongo cluster to our Project
- First create .env file in the project folder.
- Open your cluster and click connect button.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707326389/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/connection1.webp)

Open dialog box to click Drivers and copy Add your connection string into your application code.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707326457/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/connection2.webp)

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707326523/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/connection3.webp)

7. Open VS code and paste URL in your .env file in this way.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707326632/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/connection4.webp)

8. After that open app.js file and to write for connection code for MongoDB and some other connectivity to help to run easy our application.

This is updated **`app.js`** file code.

[app.js](https://github.com/poojan-bhalodiya/Todo/blob/main/index.js)

9. Now to run ```npm run code``` in terminal that show the your connection is complete work. and show the **message connected to MongoDB**.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707326784/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/connectMongoDB.webp)

Our MongoDB connection is completed.

### now to go to our CRUD operation.

1. Create a `model` folder and create `model.js` file. This file creates our schema. This is our schema code.

- I have link the model.js file Plese check and write the code

[model.js](https://github.com/poojan-bhalodiya/Todo/blob/main/model/todoModel.js)

2. Create a `controller` folder and create `todo-controller.js` file in our controller folder.

To write our first crate Todo operation controller code for this.

[](https://res.cloudinary.com/dhntmsget/image/upload/v1707419038/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/CreateController.png)

3. Now to create a `routes` folder and create `router.js` file in routes folder. Create a our first route.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707419350/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/FirstRouter.png)

4. import router file to `app.js` file this is our `app.js` fie updated code.

[App.js](https://github.com/poojan-bhalodiya/Todo/blob/main/index.js)

5. now run the code to write a `npm run dev` in terminal and our server is start.
 to test our routes to use postman.

## Testing Routes

- open Postman And select post request and write a **http://localhost:8000/todos** and select body and raw to write your Todo. I have attached a screen short for your reference.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707328664/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/Postman1.webp)

- Click send button and check your response in response field.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707328712/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/Postman2.webp)

- To successfully a first create operation are completed. This similar way to create our other operation I have attached our all-operation code file to check and update your file.

 ### Todo-controller.js 

I have add my file link to go and check all controller code.

[Controller.js](https://github.com/poojan-bhalodiya/Todo/blob/main/controllers/todo.js)

### router.js

I have add my router file to go and check router file code.

[Router.js](https://github.com/poojan-bhalodiya/Todo/blob/main/routes/router.js)

- Now to run the code that can be complete and server is running fine to check our API I have attached for one-by-one screen short for your reference.

### Create Todo

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707328945/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/CreateTodo.webp)

### Read Todo

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707328975/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/ReadTodo.webp)

### Update Todo

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707329025/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/UpdateTodo.webp)

### Delete Todo

![](https://res.cloudinary.com/dhntmsget/image/upload/v1707329072/Blog/SetupYourNodeAppForCRUDOperationsUsingMongoDB/ScreenShort/DeleteTodo.webp)

Our Mongo connection and CRUD operation successfully completed.

Thank you for read a Blog.