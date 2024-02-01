### How to set up a simple server using Node.js and Express

Create a basic server using node.js and express.

-   Early Steps  
    1. Make sure you have node installed.  
    I recommended to you to install recommended version this is current recommended version is 20.11.0 LTS.  
    I have add link to install node.  
    ``https://nodejs.org/en``
![](https://res.cloudinary.com/dhntmsget/image/upload/v1706792340/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/Node.png)
2. Make sure to Download a code editor I have use Visual studio code to easy to handle a code.  
I have added a link to download direct.  
``https://code.visualstudio.com/``

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706792341/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/VS%20Code.png)
###  Start our First server using node and express**

1.  Create a folder server setup using node.js and express and open folder in VS code.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706792497/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/Project%20folder.png)

2. Open terminal and write this code to initialize node packages  
```npm init```
few question are ask like  
package name : default your folder name  
version : default (1.0.0)  
description:  
entry point : default (index.js)  
test command:  
git repository :  
keyword :  
author :  
License: default (ISC)  
all details you can press enter and continue.  
IS this, ok? so your details are fill-up ok then you write Y and click enter.

You can complete all process that your package. Json file is created.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706792561/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/npm%20init.png)

3. Install express in this project to write a code in your terminal  
``npm I express``

This code to install a express and see this your package. Json file to add.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706792617/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/PackageJSOn.png)

4. Create a new file name index.js and write to like this code to create a sever  
``` 
const express = require(“express”);
Const PORT = 8000;  
const app = express();

app.get(“/”,(req,res)=>{  
res.send(“My First Node server”)  
});  

app.listen(PORT,()=>{
Console.log(`http://localhost:${PORT}`);
});
```

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706792807/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/Code.png)

5 . run this code to write a terminal for this code  
``node index.js``

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706792874/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/run%20node.png)

You can open [http://localhost:8000](http://localhost:8000) this on browser that check the page print My First Node server.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706792933/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/Browser.png)

-   You change the code to run the code and multiple time to run code write multiple time node index.js.
-   that a use nodemon to one time run and save the code to server is auto restart automatic.
-   install nodemon to write terminal and write  
 ``npm I nodemon ``

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706792997/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/npm%20nodemon.png)

Add script ``“dev” : “nodemon index.js” ``in package. Json.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706793058/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/package%20to%20nodemon.png)

Write the terminal to run the code ``npm run dev ``

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706793107/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/run%20to%20nodemon.png)

Check the browser and same output.

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706792933/blog-demo/How%20to%20set%20up%20a%20simple%20server%20using%20Node.js%20and%20Express/Browser.png)

Congratulation, We have completed the server with basic end point.  
Thank you for read this Blog.