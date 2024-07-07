//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "22389520946@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f7edb5677a13b03eec2f7.jpg";
global.devs = "22389520946";
global.sudo = process.env.SUDO || "22389520946";
global.owner = process.env.OWNER_NUMBER || "22389520946";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || ".";
global.waPresence = process.env.WAPRESENCE || "https://telegra.ph/file/f7edb5677a13b03eec2f7.jpg";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xhOUl5NnFRaGpYakFIYUErR2V1VjNJUmg4ZG9kR2thb29vUlhXYWkzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1lNRG91RjJYcnBCa1h5czMyTE51VmhDVzNxbWhrQmVwWEV2ZVV5d0poOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1S0V0bVpHeUpNdG0ra2pPbzF1ait4UGdQMTFBNU1CVUdCdTZybEpsRjFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkTGQ1Ynl0ZG84NWlLTWs1VlNNNHpnZ0YwdlJNV3ZETm9xaXFPY2hVUURzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklEZ2tndTVDdjRUZ1ZmbXNkNnRUR1VvMlhsbExGeGU0VU5NdkNNU0EzbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncvYzR5UDdKd1MzNjEyY0R0K3lKSGJQdU0waitNem5GT0FtQUxGMGxGQU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0lNQ3hDUllTaFl3ZVRCUGRIQ2R6cGJQNkVkQ1FLVzNHRlFwaUUwYzRGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFZnNEFaV1N3NlRFT1JsTEFBaTZHZ282dm9xaEs2K0NBWCtSSUxla0QxZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdQSlhPS0pYNzdUc3NJQ1Urd3hlMTNjMkIvTmp6YTE2b2E2NEVJOXhrMFZMd0x2K1NPdU5USHZKa1FjQmZGSHNSNzU4blZXWWhsTEw5Y3hYZ0l4K0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJtZGhrakVIR05ldXRraW5oUFRxdjFuaHRYZ1FwSWN3cmh0S3hTdnhWaG9rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyMzg5NTIwOTQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk2RTAzN0Q1MThFRTJEMjk4OTZBQkJENDlGMjUxRDk3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAzMTg5OTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyMzg5NTIwOTQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY4MEQ1RTg4N0FFOEJCMUFCMzg4NDEwMjYzNkZFNzA0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAzMTkwMDh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyMzg5NTIwOTQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjczMEU2QkJGRDE3Q0UwMUVDNzE3NzZCOEVENDAyOTFFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAzMTkwNzN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkhWZjRNMEtXVENXeVYxejRhMEJCNnciLCJwaG9uZUlkIjoiNzg3NzRjN2QtZTRiMS00NWM5LWExNDItMzE3N2I5MWExYjQ1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx6ODVnL0llWHZQTEVPUitjZUVGL3NBa2NKVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Z1hxU25uM1pHQUZHWnoxeEhzb3ZROHlsNGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjRXWlo3NVciLCJtZSI6eyJpZCI6IjIyMzg5NTIwOTQ2Ojc5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlN5bXBhIFN5bXBhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKS2I1N2tHRUlINHA3UUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFNU5ZQzZONXQ1NTVSVGoyOC92UXBGT0JJN1ZVeitvSjVINTZTOUNLSWtjPSIsImFjY291bnRTaWduYXR1cmUiOiJaY1BxSm0zU0RmNGJtVGIzKzNyb25KR3lvSE1wU2N4TURZVVg4Z3gxek90VkswdVFNaVJ4MkR2ZmJVYjl5dThrQVBkakcrMGE1V1J4ekQyYkMrN2NEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVFZ1bFZjekhMc0tLWUJ5cHVLNG9EWkp0V2FvQ0JvV042TkJLS0tzRUZzYlJJUCtJVTdscGwrbEdIVWdkNWUyUzJmMUFIeW5TcklqZDhBdy9HMG9qRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjM4OTUyMDk0Njo3OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJST1RXQXVqZWJlZWVVVTQ5dlA3MEtSVGdTTzFWTS9xQ2VSK2VrdlFpaUpIIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzE5MTgwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJ6MCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "DEVYLOUS",
  packname: process.env.PACK_NAME || "🦟🖤",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "DEVILOUS",
  errorChat: process.env.ERROR_CHAT || "error",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
