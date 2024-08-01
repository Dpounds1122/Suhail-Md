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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_32_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2LFxuICAgICAgICA4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICA0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDc0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMixcbiAgICAgICAgMjE3LFxuICAgICAgICA4NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMixcbiAgICAgICAgNCxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMcWxCTitWbW9ZZEhtbytsNFd5MzBVeDJJdllScW9rYjBCOWVieW56aXBJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2ZWtYNWM1bFNKeVNTYVVlWjctTTNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg3ZjI1NDEyLTg2OTYtNGQ1Ni05ODJlLWM0ZWU0MGZjMzYwOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDIzNSxcbiAgICAgIDE2NSxcbiAgICAgIDE5NSxcbiAgICAgIDksXG4gICAgICAxMzEsXG4gICAgICAxMTIsXG4gICAgICAyNDIsXG4gICAgICAxMixcbiAgICAgIDQ4LFxuICAgICAgMTcsXG4gICAgICA1MCxcbiAgICAgIDg1LFxuICAgICAgMTAxLFxuICAgICAgNTgsXG4gICAgICAxNDgsXG4gICAgICA0MixcbiAgICAgIDUsXG4gICAgICA0OSxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgOTUsXG4gICAgICAxNjAsXG4gICAgICAxMDEsXG4gICAgICAyMDQsXG4gICAgICAyMjQsXG4gICAgICAyNDUsXG4gICAgICAyNSxcbiAgICAgIDE1MixcbiAgICAgIDI5LFxuICAgICAgMjQ4LFxuICAgICAgOCxcbiAgICAgIDIxOCxcbiAgICAgIDE2LFxuICAgICAgMTgzLFxuICAgICAgMjA3LFxuICAgICAgNjUsXG4gICAgICA0OCxcbiAgICAgIDExNixcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2R1k0TVo4VlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NjMwNzcwNjozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRlc3RpbnkgUG91bmRzXCIsXG4gICAgXCJsaWRcIjogXCIyMDU5NDcyMDUzMDU3ODozM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVDBuWTBGRVArdXE3VUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdua2ZjK3dsQXNRbjlqUlJUK1hEdW9TZFNXVW15ci9kQmp3SkNLcVVyQVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwienhIZ0U3b3NHdDRuRDhLZ0pTR2U4Mk9scmFpd2c0MmRaNGptSjFyOUkwVnJEK2lhWEJjNFBPbXpmRDZxc1BkZkY5U2IrR2RBMjQyWFhoVTJOZWs4QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTU91RE1Fekl4ZlNlbGxUcnh0aFdnOFV3Y1JRQk05YW1XL1U4MXNtT1lTbUlib0pwUzZGb3lpUUNrWGpJR2NiNEtwWkNHY2N4UG9FZWYvTURtc1VxQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NjMwNzcwNjozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDcyMzI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGlBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIaUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIybnJ1NDBqMTlzWWJrOHEyWDd5aWFVV3BDbWRBTWlzSkt5RjhJMVJPVS9BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNjk5MzAyOTIsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
