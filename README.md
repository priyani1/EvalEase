###Brief:
EvalEase is an angular based web application that uses MongoDB as backend, Angular as front end, Angular Material for UI and Express JS for building REST APIs.
Right on application start, we are greeted by Home component. From here we can go to Student dashboard or Teacher dashboard. Using routerLink, clicking on respective buttons will take us to the respective components. 
To achieve our functionality, i.e, student to upload the assignments and teachers to vew and evaluate the assignments, we needed a storage. For this application we are using MongoDB as storage. Because, it is free, robust and provides clean APIs to work with Express JS. 
Using Student route and Teacher route, we are able to do CRUD operations on our MongoDB.

###Dependencies:
MongoDB
ExpressJS

###Steps to run:
1) Install Mongoose on your system by typing "npm install mongoose" in terminal or command prompt.
2) Run Mongo DB server locally by typing "mongod" in terminal or command prompt.
3) Open EvalEase in VS Code and type "npm install" in terminal of VS Code. All the dependencies will be installed now.
4) Now in the terminal navigate to eduflow backend to run backend server by typing "cd eduflow-backend" and "node index.js".
5) You should see backend server successfully running on port 5000.
6) Open a new a terminal in VS Code and type "ng serve" to run the application on localhost 4200.
