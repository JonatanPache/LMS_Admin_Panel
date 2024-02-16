## SETUP

- Install dependecies
`npm install sequelize sequelize-cli mysql2 nodemon bcrypt express-fileupload express-session express-flash`

- Sequelize
`npx sequelize init`

Create Database
`npx sequelize model:generate --name Admin --attributes name:string,email:string,password:string`
`npx sequelize model:generate --name Category --attributes name:string,status:enum`
`npx sequelize model:generate --name Option --attributes option_name:string,option_value:string`
`npx sequelize model:generate --name User --attributes name:string,email:string,mobile:string,gender:enum,address:text,status:enum`
`npx sequelize model:generate --name DaySetting --attributes total_days:integer,status:enum`
`npx sequelize model:generate --name Book --attributes name:string,categoryId:integer,description:text,amount:integer,cover_image:string,author:string,status:enum`
`npx sequelize model:generate --name IssueBook --attributes categoryId:integer,bookId:integer,userId:integer,days_issued:integer,issued_date:date,is_returned:enum,returned_date:date,status:enum`