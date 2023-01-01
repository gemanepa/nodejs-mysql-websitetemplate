# NodeJS + MySQL Website Template
A preconfigured template for building classic 4 sections websites with server side rendering nodejs app + mysql database . Includes working form with data automatically being sent to mail account

Live example: https://gemanepa-nodejs-mysql-websitetemplate.glitch.me/


## Software Requirements
-  [Node](https://nodejs.org/es/download/)
1.  `sudo apt-get install nodejs`


-  [MySQL](https://dev.mysql.com/downloads/installer/)
1.  `sudo apt install mysql-server`
2.  `sudo mysql_secure_installation`
3.  `sudo mysql`
4. mysql> `CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';`
5. mysql> `GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' WITH GRANT OPTION;`
6. mysql> `CREATE DATABASE database_name;`
7. mysql> `exit`
8. If `systemctl status mysql.service` shows MySQL is not running use `sudo systemctl start mysql`

## Preconfiguration
1. MySQL credentials (username, password, database name) go in *mysql-config.js*
2. Mail account (where form data will be sent) credentials go in *nodemailer-config.js*

## How to run
1.  `git clone https://github.com/gemanepa/nodejs-mysql-websitetemplate.git`
2.  `cd nodejs-mysql-websitetemplate`
3.  `npm install`
4.  `npm run start`
5. Open browser in http://localhost:3000

NodeJS Version Incompatibility? Run *nvm use* in project folder ([nvm installation link](https://github.com/nvm-sh/nvm))

## Routes
- http://localhost:3000/home

- http://localhost:3000/nosotros

- http://localhost:3000/productos

- http://localhost:3000/contacto