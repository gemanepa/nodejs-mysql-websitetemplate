# NodeJS + MySQL Website Template
A preconfigured template for building classic 4 sections websites with server side rendering nodejs app + mysql database . Includes working form with data automatically being sent to mail account

## Dependencies
- "cookie-parser": "~1.4.4", 
- "debug": "~2.6.9", 
- "express": "~4.16.1",
- "morgan": "~1.9.1", 
- "mysql": "^2.17.1", 
- "nodemailer": "^6.2.1"

## Software Requirements
- [Node](https://nodejs.org/es/download/)
- [MySQL](https://dev.mysql.com/downloads/installer/)

## Preconfiguration
 1. MySQL credentials go in *mysql-config.js*
 2. Mail account (where form data will be sent) credentials go in *nodemailer-config.js*
 
## How to run
 1. `git clone https://github.com/gemanepa/nodejs-mysql-websitetemplate.git`
 2. `cd nodejs-mysql-websitetemplate`
 3. `npm install`
 4. `npm run start`
 5.  Open browser in  http://localhost:3000

## Routes
- http://localhost:3000/home
- http://localhost:3000/nosotros
- http://localhost:3000/productos
- http://localhost:3000/contacto
