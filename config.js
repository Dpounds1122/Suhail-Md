const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348066307706";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_43_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDYzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0LFxuICAgICAgICA3LFxuICAgICAgICA5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDksXG4gICAgICAgIDcyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxMY3lOcEN4T1FDSG56UXJJTFFycEdjUGY0aFpnMGFKWXdLV2JZdEVVeUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi0wRmF6aDhjVGFxVHg1MEh0dDVJZGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGFjMWI0MzMtNDA0MC00ZDdkLWE3NWYtN2Q0Njg5MGNhMmNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDE3OCxcbiAgICAgIDE3OCxcbiAgICAgIDE4NyxcbiAgICAgIDE1LFxuICAgICAgMjA0LFxuICAgICAgMTYxLFxuICAgICAgMTkwLFxuICAgICAgMTc3LFxuICAgICAgNTksXG4gICAgICAyNDUsXG4gICAgICAyOCxcbiAgICAgIDU4LFxuICAgICAgMTg0LFxuICAgICAgMjM0LFxuICAgICAgMTc4LFxuICAgICAgNTksXG4gICAgICAxOTQsXG4gICAgICAxMDUsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMCxcbiAgICAgIDIxNixcbiAgICAgIDU4LFxuICAgICAgMTEsXG4gICAgICA1MSxcbiAgICAgIDE0OSxcbiAgICAgIDU0LFxuICAgICAgMTAxLFxuICAgICAgNTEsXG4gICAgICAyMTgsXG4gICAgICAxNDEsXG4gICAgICAyMzQsXG4gICAgICAxODUsXG4gICAgICAxMTcsXG4gICAgICAxNzYsXG4gICAgICAyMDUsXG4gICAgICAxOSxcbiAgICAgIDE1NixcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzVlRDWFgzTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NjMwNzcwNjo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRlc3RpbnkgUG91bmRzXCIsXG4gICAgXCJsaWRcIjogXCIyMDU5NDcyMDUzMDU3ODo0MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZjBuWTBGRUtEa3pyVUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdua2ZjK3dsQXNRbjlqUlJUK1hEdW9TZFNXVW15ci9kQmp3SkNLcVVyQVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNWc1eHhEdDMyaGpWUTRkeWlNajVFblphM2dRMkVQZ2tSaC9uMDdDb00zRFo2YnFwcWJ0bzJxOUp4MG52SWY3SXpzSlF1MDVvTW5FRTVWVGdCcThaQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibWRaeG9TQ0dmOUtpRkUvQk5nR3BLQitnSkc4cHlnR1R6WUR5bU5XbVFIdDlsQ2xCa1RCR3lLSVJrWC9uVXhjTlRUYVF6dkZJVEtOTmcyWVg4MGVIQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NjMwNzcwNjo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDUyNTc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGlJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIaUkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoaGVqWlpsSDFSRzhUdWNIcTZvbGQ3NGEwZzVRSWdrdCtVb0RDWHVyZWFBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNjk5MzAyOTUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DP",
  ownername:process.env.OWNER_NAME|| "Destiny pounds",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";



















global.rank = "updated"
global.isMongodb =se; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 



// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
