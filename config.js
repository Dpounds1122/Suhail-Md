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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_02_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk3LFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMyxcbiAgICAgICAgNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc5LFxuICAgICAgICA1NixcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxLFxuICAgICAgICAxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTksXG4gICAgICAgIDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMixcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImpkc1hVTHhNb2pQblA0SVZCdFl4N2h6UW9aWGdrV2lrdkFVODE1Tkd2aTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkc4VmgyaC1qUlR5VDhBS2NzaWg3eXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWU5YWJiNGYtY2NkOS00ZDU4LWJjNDUtNTBmMGUwNTU4OTQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDc0LFxuICAgICAgMTQ1LFxuICAgICAgNzgsXG4gICAgICAyMDQsXG4gICAgICA0MCxcbiAgICAgIDIzMixcbiAgICAgIDE1NyxcbiAgICAgIDE2MSxcbiAgICAgIDc4LFxuICAgICAgNjcsXG4gICAgICA4NyxcbiAgICAgIDIwMyxcbiAgICAgIDIzNSxcbiAgICAgIDE0MSxcbiAgICAgIDk4LFxuICAgICAgMjExLFxuICAgICAgNjEsXG4gICAgICA2NyxcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDEwMSxcbiAgICAgIDYzLFxuICAgICAgMTEsXG4gICAgICAxMixcbiAgICAgIDQsXG4gICAgICAxMTksXG4gICAgICAxNDEsXG4gICAgICAyNTEsXG4gICAgICAxMzAsXG4gICAgICAxMjQsXG4gICAgICAxMTYsXG4gICAgICA2OCxcbiAgICAgIDMsXG4gICAgICAyMTcsXG4gICAgICAyMCxcbiAgICAgIDE0MixcbiAgICAgIDIwOSxcbiAgICAgIDIxNixcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQxS00zQ1NKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY2MzA3NzA2OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGVzdGlueSBQb3VuZHNcIixcbiAgICBcImxpZFwiOiBcIjIwNTk0NzIwNTMwNTc4OjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xUMG5ZMEZFTjYxaWJVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ25rZmMrd2xBc1FuOWpSUlQrWER1b1NkU1dVbXlyL2RCandKQ0txVXJBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5RGt4Y0tRbnFZNUVvVUZQV2tEa2N3d2pPL2gyMUxxcHNGY3UvamR4d2VEVlFKb0pEcFVlK2tXRnVNQmtMTHBRQlNsVGtXYjJoQVRjamp1MzVBampEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZd1dCU3h4dUUzVlBjaW1IRlNlTVhjQkRlKzd4aVdnaU1xbVFTbjY2U3FFL2VNbisxL2d1ckZGajRDNkhmRHEzaG00ajBxeDJZWnRSY3pueUtobTVCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY2MzA3NzA2OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5MTYxMzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIaC9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhoLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
