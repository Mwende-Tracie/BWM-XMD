const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9l3rFPnJHTDoZRI6AV1REncxDAQWUItcChY7/PkG70z3JnDM9PFWqqLVXrbX2fgNJiks0RQ0YvoGswDUkqFuSJkNgCEZVEKAC9IAPCQRDYOnL84Jqqe3+dAh1rY2X/k4QSRvN48GCI+IpF5PLLh4H9PwV3Hsgq9wYe78BxM6pHScDwd3p23hBVZJDBVFfPLX2bhVxc4lyRqW73goOVl7BvUOEuMBJqGURuqACxlPUrCAuvke/WaiBpVxwm7VMrOaTQL8oQpWxWsyzljmY+lQtbNJ5zOr09+iHYpmvkd3nxOORs5FMLfqDll1fWx4nuxq3JWKcfLqD5iZ80i9xmCDf8FFCMGm+rfvSODdXNq61XLZdX7uOSzuMy+lhsDhC0cm38eHmkPPEWWr294jLhlxXwv7aHC/HYzTG9lga6YrY0Nv2wOfjhcCh5rChOXfyD+Kr4iMr5/+jOzL1ltFVq+87TDHSdEizfRdGCuTE/Qo2vL4zuE3qCopefo/+NWRs+xA3RxL5N3G6Zw8EsXOOmdFHORULKReQOA+maz8sP+lDUhW/YxmsgvwqhRezgNvbbTAbK9AenSyaEWpRQGl+MLHWjkftNstyhI4Tvdr+xC5/MPaVtOdmc+Fw5gzX0Dw8xU5fouVLi0fX18eLzqgxfDBk7j1QoBCXpIAEp8ljT2R6APr1BnkFIg95QZ3PsnGdLr3M0zKz0BdSsd+4vsEtVkd5Yv3s72rjZh/Wkkm/gh7IitRDZYl8HZckLZo5KksYohIM//yrBxJ0I0/junIc0wMBLkpiJ1UWp9D/cPXjEHpeWiVk0ySe2i1QAYb05zYiBCdh2elYJbDwIlwjNYKkBMMAxiW694CPauyhDg+sM3ehMYvBGl9sc8yK5k6YaFZHOUqT5y80x7BeANELLQzQC+8NuBeZY/2XQJA4KRgMZMjRoAfwe890d35p4ZSdK4YjrClJ9UvXXHh7vgzgeOvutYcNT+1RgXwwJEWFesCF3rnKtukZJb/BLZAcL/vZiVWEJccISjGwT+v6JkW+/QX36SkYvn3OKTX1OzzF4Uz5OJmAHrg8Ioi7l7MCL7ESK3OiwA5F+Y/yx7UTEmbZjwSRDvdd9O6GjwjEcQmGQJ25Eu1dNc3AZSOlk4kyDxU1VMCnSR9pf6bJqwNR8yIeU6Z1Dae7mwcjNbAsKBtG6I5lbk0JSrIwud389V9AwBBEghlSI9g36cZamXGGkwArfAJHwgK2Zb5r1sv1tmRH5WwjGmeqPhdMzUNnurluWHU1hdTMVZXGa1ri3FI+t7QjWynKa1ftGZavxZAuTc0NnsXb6XotN1EsqnuFVAddrnnzvGCOtbWcGMWOV4p2zJzX6uTqQmoW/Dzt/XG9spX0dKbzfnpyaF5k9v0mmELVevbhYw7E7/MXPzrk7T1aAUaPcZbAzqL/Mudryul77wvG+4D8RZJG+xlHRbqBjBrbc0ONvf0ktRJam9Qb1Zhc+z4dVJbZbnxmC+73v3ogiyEJ0uIChgAmfpFiH/RADEuifDbqFl9QSeAlA0NG4jh+wNK01AOXRsmyDYHko7+B0n0/8RXc/wbdur2A+wcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

