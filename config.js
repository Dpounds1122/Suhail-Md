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

SUHAIL_11_40_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDg1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTczLFxuICAgICAgICA5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODIsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDI3LFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwLFxuICAgICAgICA0MyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NixcbiAgICAgICAgODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM0LFxuICAgICAgICAzLFxuICAgICAgICA4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODEsXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZTNMM2F6UlRGUFVQTmEzVGZFakljVzhYU0t4ZlVVaU1Udy83bm9VR2ZNaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVEFfak8xVE5ULUdQd1JZS0I0bUNvd1wiLFxuICBcInBob25lSWRcIjogXCJiNWE2ZDEyMS01MmI5LTRmNDAtOWNhNi0wZGY3ZmQ0YTI0NzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMTUzLFxuICAgICAgMTI0LFxuICAgICAgNzYsXG4gICAgICA5LFxuICAgICAgMjAwLFxuICAgICAgMTk5LFxuICAgICAgMjQsXG4gICAgICAzNSxcbiAgICAgIDE5LFxuICAgICAgMTYyLFxuICAgICAgMjMyLFxuICAgICAgODcsXG4gICAgICAyNDEsXG4gICAgICAyNDYsXG4gICAgICAxMzcsXG4gICAgICAyNTIsXG4gICAgICAyNTMsXG4gICAgICA4MixcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAxMTQsXG4gICAgICA0NixcbiAgICAgIDcsXG4gICAgICAyMzgsXG4gICAgICAyNDQsXG4gICAgICAyNTAsXG4gICAgICAyMjAsXG4gICAgICA5MixcbiAgICAgIDI1MSxcbiAgICAgIDE3MyxcbiAgICAgIDE2MyxcbiAgICAgIDE4NCxcbiAgICAgIDIwNCxcbiAgICAgIDM3LFxuICAgICAgMTg3LFxuICAgICAgMTg3LFxuICAgICAgMTM0LFxuICAgICAgMjAsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVE1CR01YQjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjYzMDc3MDY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEZXN0aW55IFBvdW5kc1wiLFxuICAgIFwibGlkXCI6IFwiMjA1OTQ3MjA1MzA1Nzg6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEQwblkwRkVLeXQvclFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnbmtmYyt3bEFzUW45alJSVCtYRHVvU2RTV1VteXIvZEJqd0pDS3FVckFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNoQjFkTk94Q1BOdE5UTTU3eDNJKzJwaUxFNjlMU0hUejJ2QW1aWllmYzRISzMrMHdWaXlYR1krNUpCbW8zU204VFBSTkpaUTJqMTcyWE5CWU5HV0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIml6QlJpMHA1WWkrbEF2NzdrZHN6bkVTSU10YkxFTXpSUWszYmF2aU13dnBuTTNQaGNRL0lkcmJuaU1JekN2aG5lbE5vdWRhbDhURnBsNlZHOVEzNEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjYzMDc3MDY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTczNDgzMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhob1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGhvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYmNMZVRRZG15WUk5aTA5N1lCNktydUkxRkYrRWdlR3FGQkYxTEZncVl3QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzY5OTMwMjg4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=
global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


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
