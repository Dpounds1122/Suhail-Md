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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_02_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODksXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAwLFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgNjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NixcbiAgICAgICAgODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDgyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRkh3bmNuZy9EV3RGNUw1SXEyaE41bmY1RTZoSDVmWHZBTTJqWU12akUxOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwialliY1FBVFVSUWFfTEZHSjBhZTRGUVwiLFxuICBcInBob25lSWRcIjogXCI0OTY3ODAzZS01ZjJhLTQwZDEtYTgyNi0wODVjOWYwNDZlMGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMyxcbiAgICAgIDM2LFxuICAgICAgMTcyLFxuICAgICAgMTg3LFxuICAgICAgNzUsXG4gICAgICAxNTMsXG4gICAgICAyMjAsXG4gICAgICAxNjksXG4gICAgICA4LFxuICAgICAgMTE5LFxuICAgICAgMjA5LFxuICAgICAgNCxcbiAgICAgIDYsXG4gICAgICA0NixcbiAgICAgIDE2MyxcbiAgICAgIDE1NSxcbiAgICAgIDE3OCxcbiAgICAgIDE4MSxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDgsXG4gICAgICAxMzEsXG4gICAgICAzMSxcbiAgICAgIDU2LFxuICAgICAgMjcsXG4gICAgICA1OCxcbiAgICAgIDkzLFxuICAgICAgMjgsXG4gICAgICAyMzksXG4gICAgICAxMzQsXG4gICAgICAzOCxcbiAgICAgIDEzMixcbiAgICAgIDE4MCxcbiAgICAgIDEwNixcbiAgICAgIDgzLFxuICAgICAgMjM2LFxuICAgICAgNTgsXG4gICAgICAxOTQsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTThQR00yWlhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjYzMDc3MDY6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEZXN0aW55IFBvdW5kc1wiLFxuICAgIFwibGlkXCI6IFwiMjA1OTQ3MjA1MzA1Nzg6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEgwblkwRkVKTE9nclVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnbmtmYyt3bEFzUW45alJSVCtYRHVvU2RTV1VteXIvZEJqd0pDS3FVckFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpWcDZCSFdXUnovUVJWK0JZMVcrMXQwSTU0QXA0RE92ZmhxNW9YaXVGOVJlM2lBbkJrYSsrdlhwMlB4L2FLcHp5NEYveVZUR0tIWEZKUmdSRE1LNUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImQ5V1llR0dVTVJvdlUyR0E5TnQxUzlQaXJYVlowWDJQK29sSzBOV1RUdENsNk5IeFV4NVZ0VkQydmpPZTZQZDVBOVh6TWxMd3VtaG05dU03ZGVTSEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjYzMDc3MDY6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgwNDU2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhod1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGh3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidGg3OUNaR3AzdzBLQnQ4K0t6Zk01QUVERTIyMGVpczVTZThZM21RdldzUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzY5OTMwMjg4LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNzYxMTA1ODYwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
global.isMongodb = false; 
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
