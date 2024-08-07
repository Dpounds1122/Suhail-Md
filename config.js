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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348066307706";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_59_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg5LFxuICAgICAgICA2MixcbiAgICAgICAgNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk2LFxuICAgICAgICA2OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDk3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDc0LFxuICAgICAgICA3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM4LFxuICAgICAgICA2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZ2a1MwQUUyZ0FhRHJWUFZSTFJDYWdxNk41Ylhsc1hPMFdwYnZtMTE3TVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJTaFJRNEYxU0kyaUplb1RJOUFpQXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDIzZThjZjctZTMxMi00M2M1LWE4YjUtMmQyMmY4MTM4ZGU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDEwMixcbiAgICAgIDg3LFxuICAgICAgODgsXG4gICAgICAxNTgsXG4gICAgICA4NixcbiAgICAgIDExNSxcbiAgICAgIDE1MSxcbiAgICAgIDIwMyxcbiAgICAgIDE5NyxcbiAgICAgIDksXG4gICAgICAzMixcbiAgICAgIDQ2LFxuICAgICAgMzQsXG4gICAgICAyMTIsXG4gICAgICAxMjksXG4gICAgICAxODAsXG4gICAgICAxNDIsXG4gICAgICAyNTAsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAyNDgsXG4gICAgICAxNzksXG4gICAgICAxMjIsXG4gICAgICAzNSxcbiAgICAgIDIxMSxcbiAgICAgIDUxLFxuICAgICAgMTY0LFxuICAgICAgMjI2LFxuICAgICAgNyxcbiAgICAgIDIwNixcbiAgICAgIDE3NixcbiAgICAgIDczLFxuICAgICAgMTgyLFxuICAgICAgMTgyLFxuICAgICAgMTk5LFxuICAgICAgMjQxLFxuICAgICAgMTgwLFxuICAgICAgMTE3LFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRHNUtYMk5WXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY2MzA3NzA2OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGVzdGlueSBQb3VuZHNcIixcbiAgICBcImxpZFwiOiBcIjIwNTk0NzIwNTMwNTc4OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xmMG5ZMEZFTURTekxVR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ25rZmMrd2xBc1FuOWpSUlQrWER1b1NkU1dVbXlyL2RCandKQ0txVXJBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtZGcwK1FLeWtiaEpISGtPNnFRdjJhb2VZOXB0S1N1Nkx6TldoQTA2V0dRNkZ4YW5vM293T2xmZlkwZ0pyeHhmekJ4dHJTZEljNXdBc0xpdHJqb1JEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVMXhBZi84VWE0OWFoSUNxNzhTWElSSzJ3U09hZzJyaVFQOGFLUXZKM09rOHA0YXgxbGFVV0F6QkZlQmJIcHVCYXJVSHAwQVZGZExFMmtjbVZVK0pDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY2MzA3NzA2OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMTc1NDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIaUlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhpSS5qc29uIjogIntcImtleURhdGFcIjpcImhoZWpaWmxIMVJHOFR1Y0hxNm9sZDc0YTBnNVFJZ2t0K1VvRENYdXJlYUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM2OTkzMDI5NSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DP",
  ownername:process.env.OWNER_NAME|| "Destiny pounds",


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
global.isMongodb =se; 
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
