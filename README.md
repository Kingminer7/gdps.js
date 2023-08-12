# GDPS.js
### This project is in early development.
GDPS.js is essentially just a port of Cvolton's GMDPrivateServer to Javascript.

Requires an SQL database and Node.js
PHPMyAdmin is recommended for database management, but any database management tool will work.

## Installation
1. Install MariaDB and Node.js
2. Clone this repository.
3. Run `npm install` in the repository directory.
4. Import `database.sql` into MariaDB.
5. Edit `config/connection.js` to have your database credentials.

## Use
<strong>Install before running!.</strong>
1. Run `npm start` in the repository directory.

## Discord Bot (Optional)
1. Create a Discord bot at https://discord.com/developers/applications.
    I recommend inviting it to your server.
2. Copy the bot token. DO NOT SHARE THIS WITH ANYONE.
3. Open the `config/discord.js` file. Change `enableBot` to `true` and paste the bot token in the `token` field.
4. Run `npm i discord.js` in the repository directory.