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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_41_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyLFxuICAgICAgICA1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICA4NixcbiAgICAgICAgMTU4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgyLFxuICAgICAgICA2LFxuICAgICAgICAzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTkwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NixcbiAgICAgICAgMTE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICA4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNnU2h1NGExV1VTbVNnTXZYWHZ3TW5uYVlUbFVpRktlU21mK1Z0TElGRFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2NjMwNzcwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDgxQjBENDA2Q0VENTY2QzZGQTAzODAwMTNFM0QyNzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODU3MjcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpzY2NVY0txUVdtMXZ1cVJ3akZIT1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTY0ZjA2ZTctZWZiYS00Yjk2LTlmZmQtMWQ4YjUwNzZkNDA5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgNzEsXG4gICAgICAyMTksXG4gICAgICAyNDcsXG4gICAgICA5MSxcbiAgICAgIDg0LFxuICAgICAgMTQ5LFxuICAgICAgMTI1LFxuICAgICAgNjEsXG4gICAgICAxNzMsXG4gICAgICA2NSxcbiAgICAgIDY0LFxuICAgICAgMjUwLFxuICAgICAgMTE0LFxuICAgICAgMjEyLFxuICAgICAgNjcsXG4gICAgICAxMyxcbiAgICAgIDI0OSxcbiAgICAgIDE2MixcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICA5MixcbiAgICAgIDIxNSxcbiAgICAgIDMsXG4gICAgICAxNDksXG4gICAgICAyMzQsXG4gICAgICA2MyxcbiAgICAgIDQsXG4gICAgICAxMzAsXG4gICAgICA5LFxuICAgICAgMTM4LFxuICAgICAgMTU4LFxuICAgICAgMTM4LFxuICAgICAgMTk3LFxuICAgICAgMjMsXG4gICAgICAxMzEsXG4gICAgICA5MixcbiAgICAgIDM2LFxuICAgICAgMjA4LFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdBWDNOU01QXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY2MzA3NzA2OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGVzdGlueSBQb3VuZHNcIixcbiAgICBcImxpZFwiOiBcIjIwNTk0NzIwNTMwNTc4OjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMMG5ZMEZFT3JwaGJVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ25rZmMrd2xBc1FuOWpSUlQrWER1b1NkU1dVbXlyL2RCandKQ0txVXJBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPcjJaL250MVJkdUlyTjdLRlJOazZZMmlBenRGQlF0TjU2Qi9rYWM1RnorUCs4U05mR0tUYWZraHFlMkR4a3JKR1RldjNPZzlzdmQ1Ly84WDZnUitDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBWGdTVk5QQ28wcE9CcHlxRUhlOElGVDF3TDZGMlJYcmIrNWRxYnJXVUE5VTdIdmlydTdDMExrMHJDUTZlc2RRTmp0d0VlcVh5SVJyTWRvMDg5UkNpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY2MzA3NzA2OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4NTcyNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIaHdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhody5qc29uIjogIntcImtleURhdGFcIjpcInRoNzlDWkdwM3cwS0J0OCtLemZNNUFFREUyMjBlaXM1U2U4WTNtUXZXc1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM2OTkzMDI4OCxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc2MTEwNTg2MFwifSIKfQ=="  // PUT your SESSION_ID 


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
