lawyer-scoreboard
=================

Start of the lawyer scoreboard project

##Objectives
You're building an API that will list ratings/stats of lawyers. You'll use basic database architecture to create the Sequelize models that will drive your application.

###Step 1: Create the base of your project
* Create a package.json file with the following dependencies:
  * mysql
  * sequelize
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
* 
