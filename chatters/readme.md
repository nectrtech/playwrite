TODO - add:
-git clone & go instructions

For now...
(assume you have a standalone mongod instance running, for example:
 mkdir -p ./db/logs
 mongod --logpath ./db/logs/mongo.log --dbpath ./db
)

git clone https://github.com/nectrtech/playwrite && cd ./playwrite/chatters

(assume node installed - should use nodeeenv and an active VM environment...)
npm install
npm start

