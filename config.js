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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_58_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDU5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICA5OCxcbiAgICAgICAgOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1LFxuICAgICAgICA5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYxLFxuICAgICAgICA2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDkxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJia1BhTTNvUFhDZnlVOER4OEVQVWJBWEtnd2c0Wi91SVZlaHFoWE9oYXlvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjYzMDc3MDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE2RUY3OEU4RkFDQzAyNTlEQ0I3QzY4QkFFQjhGQTY3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTc2MTEyN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsN2NSN3JYZ1R0Q0FTQzBIdjZpa0VBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZkN2ZlYTIyLWY2ZDItNGVkYi1iZTlmLTFkMDgyYjI3OWFjMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAyMzAsXG4gICAgICAxODksXG4gICAgICAxOCxcbiAgICAgIDEyNixcbiAgICAgIDMwLFxuICAgICAgMjA0LFxuICAgICAgMjExLFxuICAgICAgMTAsXG4gICAgICAxMjgsXG4gICAgICAyNDMsXG4gICAgICAxMTksXG4gICAgICAxNDUsXG4gICAgICA0LFxuICAgICAgNTUsXG4gICAgICAxMDksXG4gICAgICAyMTMsXG4gICAgICAxNDEsXG4gICAgICAyNTIsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMjUsXG4gICAgICAyMSxcbiAgICAgIDE5NCxcbiAgICAgIDEzOSxcbiAgICAgIDgsXG4gICAgICAyMjgsXG4gICAgICAxMDEsXG4gICAgICAxODAsXG4gICAgICA1NyxcbiAgICAgIDIyMyxcbiAgICAgIDIxMSxcbiAgICAgIDEzMSxcbiAgICAgIDEwMSxcbiAgICAgIDEzLFxuICAgICAgNTMsXG4gICAgICAyMDcsXG4gICAgICA1MixcbiAgICAgIDEyMixcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ1VjUyWkQ1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY2MzA3NzA2OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGVzdGlueSBQb3VuZHNcIixcbiAgICBcImxpZFwiOiBcIjIwNTk0NzIwNTMwNTc4OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xIMG5ZMEZFTjM2LzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ25rZmMrd2xBc1FuOWpSUlQrWER1b1NkU1dVbXlyL2RCandKQ0txVXJBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCMnRsTDdXdXdSaEgvZWt5YlpGRmYxUTJ6MWhydjV2dHlFUXJaU3dHZjhydkxEN3RqVzBralpPa252dm5EM3dHVTV3MHN5QjZTdUJaUW8zVEpydEdBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0RU5sNlkzb2RlbW9Nd3NDUFFQUnJ2TzBFVnJIUlVzbi9YOGtQUG9mWFFSN21Cdkx3eDllQUtqb3B2OWlxN0lHWnBsWU9pbGthT0h5czFlSUV6MzVEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY2MzA3NzA2OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3NjExMjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIaHdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhody5qc29uIjogIntcImtleURhdGFcIjpcInRoNzlDWkdwM3cwS0J0OCtLemZNNUFFREUyMjBlaXM1U2U4WTNtUXZXc1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM2OTkzMDI4OCxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc2MTEwNTg2MFwifSIKfQ=="  // PUT your SESSION_ID 


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
