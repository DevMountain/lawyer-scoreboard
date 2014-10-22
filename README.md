lawyer-scoreboard
=================

Start of the lawyer scoreboard project

##Objectives
You're building an API that will list ratings/stats of lawyers. You'll use basic database architecture to create the Sequelize models that will drive your application.

###Step 1: Create the base of your project
* Create a package.json file with the following dependencies:
  * mysql
  * sequelize
  * express
* Create a server.js file
* In your server.js file, require sequelize and initiate a new db connection to your local db
* Using Sequel Pro, create a database called lawyer_scoreboard

###Step 2: Create the model
* Create a Lawyer model, with the following fields:
  * name
  * location
  * record (wins/losses)
  * hourly rate
* Using the Sequelize documentation as a resource (http://sequelizejs.com/documentation#models-data-types), decide which types of fields these should be
* Make sure to sync() the models to the actual db

###Step 3: Create a simple GET endpoint `/lawyers` for retrieving lawyer rankings
* Using Sequel Pro, insert some data into your lawyer table
* Utilize Express to create a single GET endpoint for retrieving the lawyer data in JSON format
 * To retrieve the data, check out the `.all()` method for Sequelize models:

```javascript 
Lawyer.all().success(function(lawyers) {
  // lawyers will be an array of all Lawyer instances
})
```
###Step 4: Front-end
Create a simple Angular front-end for showing your lawyer scoreboard.
* Create an index.html file use `<script>` tags to link to Angular (//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.js)
* (You could also include bootstrap CSS to give your project some initial style)
* Create an app.js to define your app
* Create a main-ctrl.js as your `MainCtrl`
* Create a lawyer-service.js that will get the lawyer data from your API
* Use express static middleware to serve your static html/js files alongside your API endpoint. Reference: http://runnable.com/UWw3g0PKxoAWAA6K/how-to-serve-static-files-in-express-for-node-js
* Show the lawyers in an ng-repeat in your index.html file
