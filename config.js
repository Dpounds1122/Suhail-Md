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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_15_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NCxcbiAgICAgICAgNixcbiAgICAgICAgODcsXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDU4LFxuICAgICAgICA3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICA5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMzLFxuICAgICAgICA2MixcbiAgICAgICAgMTA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOSxcbiAgICAgICAgODAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDY1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzLFxuICAgICAgICA5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFZV3czWFRQZURsei9kM2VNUVJLV21iMXVubDdiOS9nZGpJRlNLdWZzL2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpDZTR4bWt1U2dtWmQ3aXNmTkltNGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWFhOTM2YjEtNmFiNS00ZTlhLWEzMWUtNWY1MGExZDg2YzViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgNDMsXG4gICAgICAzOCxcbiAgICAgIDI1MSxcbiAgICAgIDE1OCxcbiAgICAgIDE4MyxcbiAgICAgIDI0MSxcbiAgICAgIDExOSxcbiAgICAgIDEwOCxcbiAgICAgIDg2LFxuICAgICAgMTM0LFxuICAgICAgNDksXG4gICAgICAxOTQsXG4gICAgICA0MyxcbiAgICAgIDI0NyxcbiAgICAgIDEzMCxcbiAgICAgIDU2LFxuICAgICAgMjI1LFxuICAgICAgMTI2LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgMTA5LFxuICAgICAgODksXG4gICAgICA5MyxcbiAgICAgIDMsXG4gICAgICAxNTcsXG4gICAgICAxMDksXG4gICAgICA5OSxcbiAgICAgIDQ4LFxuICAgICAgMjUzLFxuICAgICAgMTcwLFxuICAgICAgMTI5LFxuICAgICAgMTc0LFxuICAgICAgNjgsXG4gICAgICAyMTcsXG4gICAgICAxMjksXG4gICAgICAzMyxcbiAgICAgIDIzMyxcbiAgICAgIDE3NyxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXTDZWSFM5NFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NjMwNzcwNjozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRlc3RpbnkgUG91bmRzXCIsXG4gICAgXCJsaWRcIjogXCIyMDU5NDcyMDUzMDU3ODozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZjBuWTBGRUtmRHE3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdua2ZjK3dsQXNRbjlqUlJUK1hEdW9TZFNXVW15ci9kQmp3SkNLcVVyQVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWUNGVHZYMVBqeWlKblBsWGEyVkFFaWJOUVdLeDI5U1RyYVFaUlM1QnVvVkppVEZoWWJOblpUT2J4d3lyNXBlWGc5ZW1TMjFRck1UWEd6VitsZGdZQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUllxRWtjajA5L1l6ZktnSXdWcHlzRTk1aGc3NzF0MlFiTmNFUVlKbXI0bFEzTUxSRE43aGhubmcrWm93a3dkSWJKbk8wTGIrMUhpWTJJQldVQjdWRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NjMwNzcwNjozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDc0OTIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGlBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIaUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIybnJ1NDBqMTlzWWJrOHEyWDd5aWFVV3BDbWRBTWlzSkt5RjhJMVJPVS9BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNjk5MzAyOTIsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
