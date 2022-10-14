# node-mariadb
Simple NodeJS Server with a MariaDB connection

##  Installation
- Clone Repo
- Im Ordner `npm install` ausführen
    - ladet alle eingebundene Pakete herunter
    - diese sind im `package.json` einsehbar
- In config/default.json Datenbankverbindung konfigurieren

##  Ausführen
- im Projektordner in einem Terminal `node server.js` ausführen
- Danach läuft der Server bis er mit `STRG+C` beendet wird (oder abstürzt)
- In diesem Demo ist nur ein Controller, Service und Route definiert.
    - Dieser Route kann direkt via Browser getestet werden
    - `http://localhost:3030/simplequery`

## Verwendete Packages
- Express
    - https://npmjs.com/package/express
- mariadb
    - https://www.npmjs.com/package/mariadb
- config
    - https://github.com/node-config/node-config
- body-parser    
    - https://www.npmjs.com/package/body-parser


##  Hilfreiche links
- https://nodejs.org/de/download/
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
- https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector/
- https://www.dev-insider.de/was-ist-npm-a-1017053/

