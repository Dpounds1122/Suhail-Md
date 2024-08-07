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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_19_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUwLFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDY5LFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICA4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlE2cklwY1IraWN4bzI2Mml6UzhjTzhVeDBPQ2N1S0VWenE2NDVGZGNQdWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZzeGFtcVlJUTZxMXdVSTNrRUl6aVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDlkYzMzNDQtMzAzNy00NDY3LTkyMzktYWUzNTY5NTE4NDAyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMCxcbiAgICAgIDkwLFxuICAgICAgOSxcbiAgICAgIDIzNixcbiAgICAgIDYyLFxuICAgICAgMjEwLFxuICAgICAgNzIsXG4gICAgICAxNzcsXG4gICAgICAxMjksXG4gICAgICA0MCxcbiAgICAgIDI0MyxcbiAgICAgIDE1MyxcbiAgICAgIDQsXG4gICAgICAyMDMsXG4gICAgICAxMzcsXG4gICAgICAyMTAsXG4gICAgICAzLFxuICAgICAgMTg1LFxuICAgICAgMjIxLFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgNjIsXG4gICAgICA1MCxcbiAgICAgIDEwNixcbiAgICAgIDE1OCxcbiAgICAgIDIxNyxcbiAgICAgIDMzLFxuICAgICAgMjUzLFxuICAgICAgMTY1LFxuICAgICAgMTE0LFxuICAgICAgMTY4LFxuICAgICAgNDMsXG4gICAgICA5NSxcbiAgICAgIDIzNyxcbiAgICAgIDY2LFxuICAgICAgMjE5LFxuICAgICAgMjcsXG4gICAgICA3MixcbiAgICAgIDEyMixcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZINTJMSExDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY2MzA3NzA2OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGVzdGlueSBQb3VuZHNcIixcbiAgICBcImxpZFwiOiBcIjIwNTk0NzIwNTMwNTc4OjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xmMG5ZMEZFUEMvekxVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ25rZmMrd2xBc1FuOWpSUlQrWER1b1NkU1dVbXlyL2RCandKQ0txVXJBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuMW9xWGxMUFh5ZWtlU2FvRFhPcVFUOWxkVit2NXMxUnhkaEtmam1SVEYwdy9ON0haTytUOUhWZFkzaDNGcFlWT2xmNzBYNmtqZnBmM251MHVjV3VDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlVGFmdkVyZVJmWTZZRVlRR1pwTFlQNkUzWGFtblJ6cnlyVzVvSlE2cVJpV0pUS3B3ZUxsUVEraVZ6Ky9WemttQW1tK2lsZHRFazlNVnA0RkhSakRnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY2MzA3NzA2OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMTUxNTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIaUlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhpSS5qc29uIjogIntcImtleURhdGFcIjpcImhoZWpaWmxIMVJHOFR1Y0hxNm9sZDc0YTBnNVFJZ2t0K1VvRENYdXJlYUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM2OTkzMDI5NSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
