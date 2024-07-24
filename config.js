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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_12_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNixcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICA1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzLFxuICAgICAgICA2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICA0NixcbiAgICAgICAgODAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDM1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1UTFiOUlmWVp0Sm9rZXM3UUwyL0NEaWxCLzJWRURzdHg5N1NYYUdDcE40PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiOUJRc2lWVVFwT3hxNDYyVE8tTjhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhYzA1YzliLWU2MjItNDA3MC1iOWIxLTE5MjU5M2JlNGQ0MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAxMjAsXG4gICAgICA4MCxcbiAgICAgIDM2LFxuICAgICAgMTY4LFxuICAgICAgMTg4LFxuICAgICAgOTYsXG4gICAgICAyMzMsXG4gICAgICA5LFxuICAgICAgMjM4LFxuICAgICAgMjA1LFxuICAgICAgMTA1LFxuICAgICAgODksXG4gICAgICAxOTEsXG4gICAgICAxOSxcbiAgICAgIDIzMyxcbiAgICAgIDE4LFxuICAgICAgNTMsXG4gICAgICA4OCxcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDIzMyxcbiAgICAgIDEzNyxcbiAgICAgIDIwMCxcbiAgICAgIDE3MSxcbiAgICAgIDU0LFxuICAgICAgNjUsXG4gICAgICAyMjcsXG4gICAgICAyNTMsXG4gICAgICAxNDUsXG4gICAgICAxMTQsXG4gICAgICAyNixcbiAgICAgIDEyOCxcbiAgICAgIDE3MyxcbiAgICAgIDgyLFxuICAgICAgNDYsXG4gICAgICAxNTYsXG4gICAgICAxODcsXG4gICAgICAyMjQsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkpWMjkxNkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjYzMDc3MDY6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEZXN0aW55IFBvdW5kc1wiLFxuICAgIFwibGlkXCI6IFwiMjA1OTQ3MjA1MzA1Nzg6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEwwblkwRkVOcVhoTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnbmtmYyt3bEFzUW45alJSVCtYRHVvU2RTV1VteXIvZEJqd0pDS3FVckFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitMVDZSTDVIN0Z6RUxmWlpmRS9qTW5PVkdSeWtaRXBxeFllK0oyanpLblFqVE9EQmhXTk96cWFZZmJTbzkwVkxrL2tFaExtQmxGYVZXc3hTM3hzakJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJjZlV4d2FyczFKNFlmK0pUTGFndFUxc3l1ZU5HVUh1Q3pjZUh4eEtSRFFxVU5pLzdmZG9QbzM5N2IzVTZ6dEIvb3NEaUJLRHJmMGdhK2NHZWp5WER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjYzMDc3MDY6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgzMDM2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhod1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGh3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidGg3OUNaR3AzdzBLQnQ4K0t6Zk01QUVERTIyMGVpczVTZThZM21RdldzUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzY5OTMwMjg4LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNzYxMTA1ODYwXCJ9Igp9"  // PUT your SESSION_ID 


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
