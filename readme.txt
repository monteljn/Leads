Instructions for running the Lead Management application:

*you need MySQL installed


Once you have cloned the repo:

1) Add credentials

First you will need to modify the following file with your MySQL connection info:

Leads/barebones-react-typescript-express/src/server/config/index.ts

2) Create database

In MySQL Workbench, execute the SQL script CreateDatabaseAndTable.sql. You will see
a new schema called leads.

3) Run the program

In a terminal, go to the barebones directory and run the following:

npm install
npm run dev

*This will start the server

In a new terminal, go to the leads_client and run the following:

npm install
npm start

*This will start the client

From here, you can add new leads, and modify a lead's stage.

NOTE: when adding a new lead, the event date cannot include a "/". Please use "-"




