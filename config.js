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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_37_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICA0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUzLFxuICAgICAgICA2OSxcbiAgICAgICAgOSxcbiAgICAgICAgNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICA1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NixcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg3LFxuICAgICAgICA5MCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OSxcbiAgICAgICAgNSxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICAzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDI1LFxuICAgICAgICA4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYTFBXR1ZBcHRuQlJHaEoxdmkvUkVweFRjeUZWekZZRExOVjhCVCt1aTJFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0Z0N2ZXhKdVQtLTREWV9JLUZTeVJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzYmVhZTY0LWYwNDItNDI2Mi04NzEzLTYyZDgyOTQ5NjA1OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDIyNyxcbiAgICAgIDcwLFxuICAgICAgMTcyLFxuICAgICAgNCxcbiAgICAgIDg2LFxuICAgICAgNjEsXG4gICAgICAyNTEsXG4gICAgICAyMTQsXG4gICAgICAxMzAsXG4gICAgICAxNTgsXG4gICAgICAyMDEsXG4gICAgICAxNDEsXG4gICAgICA3MSxcbiAgICAgIDIxMCxcbiAgICAgIDE1MixcbiAgICAgIDEyMyxcbiAgICAgIDgsXG4gICAgICAxMzIsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgMzUsXG4gICAgICAyNDIsXG4gICAgICAxNjcsXG4gICAgICAxNDgsXG4gICAgICA4NyxcbiAgICAgIDE1OCxcbiAgICAgIDExNCxcbiAgICAgIDcwLFxuICAgICAgMjQ2LFxuICAgICAgMixcbiAgICAgIDE1MixcbiAgICAgIDE0NSxcbiAgICAgIDIyNixcbiAgICAgIDEyMCxcbiAgICAgIDEwOSxcbiAgICAgIDYsXG4gICAgICAxMixcbiAgICAgIDEwMixcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKWUNGMjNWMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NjMwNzcwNjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRlc3RpbnkgUG91bmRzXCIsXG4gICAgXCJsaWRcIjogXCIyMDU5NDcyMDUzMDU3ODoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMRDBuWTBGRVBybS9MUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdua2ZjK3dsQXNRbjlqUlJUK1hEdW9TZFNXVW15ci9kQmp3SkNLcVVyQVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicjFrK2NuQ0NYZHJGbG1KSWdvSXVya1A2bDM3amI5OURHRmJCVld3TVVvUkdQWHpYRFc0REk2eE5OL2N0cWFHNmhzb09MWi9ReGNsdWRlQkdkZUR1REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNXVsRmdMUFZmRWE2WkQvblp3U2tTVmt5L25sQ1F1L1lmL0NMc0RVaHd0NFZuakNJYWppamRIclJsb21nSVlhOXhRc2hJclgrem5TZ2NPSTQ4ODhvZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NjMwNzcwNjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzA5NDM3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
