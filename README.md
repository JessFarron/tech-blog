# tech-blog   [![Github license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
* [Description](#description)
* [Deploy](#deploy)
* [Installation](#installation)

## Description
This project is a CMS-style blog site where developers can publish their blog posts and comment on other developers' posts. It follows the Model-View-Controller (MVC) architectural pattern and utilizes various technologies such as Handlebars.js, Sequelize, express-session, and more. The application is deployed to Heroku.

## Deploy
Heroku URL : https://super-techblog-65720e7aef4a.herokuapp.com/ 

## Technologies Used
The project utilizes the following technologies and packages:

- Express.js - for building the server-side application and APIs.
- Handlebars.js (express-handlebars package) - as the templating language for rendering views.
- MySQL2 and Sequelize - for connecting to a MySQL database and managing models and data.
- dotenv - for using environment variables to store sensitive information.
- bcrypt - for hashing passwords to ensure secure authentication.
- express-session and connect-session-sequelize - for adding authentication and managing user sessions.

## Installation and Setup
To run the project locally, follow these steps:

- Clone the repository and navigate into the project's root directory.
- Run npm install to install the required dependencies.
- Set up a MySQL database and update the database configuration in the .env file.
- Run the database migrations using the Sequelize CLI or other tools, if necessary.
- Run npm start to start the server.
- Access the application in your web browser at `http://localhost:3001`
