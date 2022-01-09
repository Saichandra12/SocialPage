
# SocialPage
### Section - 1  :  Installation Part
1. Open command prompt or vs code terminal.
1. Open server folder and then press command. 
`npm install`
1. Open social-page folder and then press command
`npm install` 
1. This project requires MySQL work bench. Open it and create a table named datatable with four attributes like views, likes, comment, share all are of integer type.
1. Configure username and password in config.json which present in server folder.
1. Before starting the application install nodemon in server folder
`npm install nodemon`
1. Now to start the server, open command prompt in server folder and enter the command
`nodemon server`
1. Now to start the Front End open another command prompt in social-page folder and enter the command
`npm start`

### Section - 2  :  Dependancies used
1. react
1. react-dom
1. react-redux
1. @reduxjs/toolkit
1. sequelize
1. sequelize-cli
1. axios

### Section - 3  :  Features
1. All the details are display from static json file.
1. Whenever page is refreshed (or) reload , view count will increases by 1, everytime it retrieve from database.
1. whenever like button is clicked, like count will increases by 1.
1. whenever comment button is clicked, comment count will increases by 1.
1. whenever share button is clicked, share count will increases by 1.
