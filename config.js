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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_49_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0LFxuICAgICAgICA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NixcbiAgICAgICAgMTU5LFxuICAgICAgICA4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDM1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDcwLFxuICAgICAgICA3MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiZFdnaGl2dUh1dnRPTk92RkU2d0h2aHE5VTRuMDUvbjIyb2ZzYkQ0elVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1cDUtbE4xZVMtYUZ2VDcxaDFxM3VnXCIsXG4gIFwicGhvbmVJZFwiOiBcImMxYTgxZWUxLTAxMWQtNDBhMy04Njk0LWY5ZjNmZDY1Y2IxM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDU5LFxuICAgICAgMTI4LFxuICAgICAgMjEwLFxuICAgICAgMTcwLFxuICAgICAgMTEsXG4gICAgICA3NyxcbiAgICAgIDYxLFxuICAgICAgMTUyLFxuICAgICAgMTkwLFxuICAgICAgMTI3LFxuICAgICAgNTksXG4gICAgICAxNzIsXG4gICAgICAyNDIsXG4gICAgICA3MixcbiAgICAgIDEzLFxuICAgICAgMTc4LFxuICAgICAgODIsXG4gICAgICA0OSxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMSxcbiAgICAgIDEyNyxcbiAgICAgIDE5NyxcbiAgICAgIDI0MixcbiAgICAgIDIwMyxcbiAgICAgIDE2MyxcbiAgICAgIDE5NixcbiAgICAgIDIzOSxcbiAgICAgIDEyMCxcbiAgICAgIDIzNSxcbiAgICAgIDUyLFxuICAgICAgODQsXG4gICAgICAxODksXG4gICAgICAyNyxcbiAgICAgIDI1MyxcbiAgICAgIDYsXG4gICAgICAxNDIsXG4gICAgICAyMTcsXG4gICAgICAxMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLeXZ0TFFJRU9pSS9iUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndwMXE1VWpoaVorZUROY1pVbHhuVG43RXlJNXptSkFOaEhxN2RVaWp3eHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWllLZ0RQVHFMdm9PNWVTbzJiM3c2Z0NJVFp0bVlVVmJobGw3cS9mc0NQVlZRd2lidzR4L3U3U0pJa090bXhkbmpseDJPODRKOG03QTBTekJSdWM0aXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieUEwVWR4MjZjRllMaWtXbWx4Y2RQM21RcHZwV2t1NGMyY0huV3hRclJ0YkFtUkwzeFhidktjMmpXSmtPYVo5dlA1aHh3bUcxNjN0b0NQZi9BbURIRHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM3MjI3NDYyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDQ2OTg0NTUyMDM4NDoxMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNaWdodHnwn5iSXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM3MjI3NDYyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MTM3NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLaWRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtpZC5qc29uIjogIntcImtleURhdGFcIjpcImVtMkRSRGZPcVBRQXFKN1lRYXFxY3dYdWswdVJPdml3ZG5JMDJ5U250WkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjI1NzM5MzU4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjc3NTM5MTEwXCJ9Igp9"  // PUT your SESSION_ID 


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
