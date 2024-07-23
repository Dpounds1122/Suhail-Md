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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_53_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDgzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQzLFxuICAgICAgICA3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm02VExhaElXVlQzZytXTVg2ZU92QW1qYjZ3eVUvMnVtUDBTNTB3QzV1bjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2NjMwNzcwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjNBQTBBN0IxNzlDNkMzQzJEQjU1QkRDNEE3RkM0MDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNzM1NTgwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFwSGFGTDh5VERDcGVXNGRPRnhSU0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmI2M2EyNzEtN2JkOS00ZmE3LTg5NDMtNjExZjg4NmE4OGVlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NSxcbiAgICAgIDE3MCxcbiAgICAgIDE2MyxcbiAgICAgIDE3LFxuICAgICAgMjMwLFxuICAgICAgMjQxLFxuICAgICAgMjIwLFxuICAgICAgODAsXG4gICAgICAxMTQsXG4gICAgICAyOCxcbiAgICAgIDgwLFxuICAgICAgMTgzLFxuICAgICAgMTQ0LFxuICAgICAgMjA3LFxuICAgICAgOTYsXG4gICAgICAzOSxcbiAgICAgIDIzOSxcbiAgICAgIDUzLFxuICAgICAgMjQ0LFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDIxNixcbiAgICAgIDE1MCxcbiAgICAgIDIzLFxuICAgICAgMjIxLFxuICAgICAgMTMzLFxuICAgICAgNjUsXG4gICAgICAyLFxuICAgICAgMTczLFxuICAgICAgNDIsXG4gICAgICA3MixcbiAgICAgIDc0LFxuICAgICAgNzgsXG4gICAgICAxNzgsXG4gICAgICA2NixcbiAgICAgIDY4LFxuICAgICAgMTcyLFxuICAgICAgMTUxLFxuICAgICAgNjEsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEhZNEVOUEZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjYzMDc3MDY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEZXN0aW55IFBvdW5kc1wiLFxuICAgIFwibGlkXCI6IFwiMjA1OTQ3MjA1MzA1Nzg6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEQwblkwRkVKR3ovclFHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnbmtmYyt3bEFzUW45alJSVCtYRHVvU2RTV1VteXIvZEJqd0pDS3FVckFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkM4OUNQN093Y3R5R0JZOHQrNVRUVFhVNW1UL21HcTR1Z3Q1eklabXcrdzRHbEhoZUdZVmtvVjNDaDVjZGM0UUFpenlacnlYR0lVVWNwd2o2YUo0QUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZRVng0TXdqeHUzVHduNytYSS9WeXVkRy9UNmRyWDZrNjRDZVA2cDF0a2ltMWNlNkQrcVZYNU5CM1dpdm1wOENvVEFaeGJYR3I0ZzRoZzdDOHVMb2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjYzMDc3MDY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTczNTU3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhob1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGhvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYmNMZVRRZG15WUk5aTA5N1lCNktydUkxRkYrRWdlR3FGQkYxTEZncVl3QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzY5OTMwMjg4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
