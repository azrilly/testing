import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `\n🔵 LALA BOT AKTIF\nᴷᵉᵗⁱᵏ ·ˡᵃˡᵃ ⁽ᵘⁿᵗᵘᵏ ᵇᵉʳᵇⁱᶜᵃʳᵃ ᵈᵉⁿᵍᵃⁿ ˡᵃˡᵃ⁾\n\n_Ketik .menu untuk melihat daftar menu bot_`
await conn.reply(m.chat, info, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
isForwarded: true, externalAdReply: { title: author, body: '☂︎ ᴄʀᴇᴀᴛᴇ ʙʏ zen', sourceUrl: `https://www.instagram.com/p/CLPWKRYgkEW/?igsh=MW9xa2xjZTBjNWlxdw==`, thumbnail: fs.readFileSync('./src/menu.jpg') }}})
}
handler.customPrefix = /^(tes|bot|test|lala|.)?$/i
handler.command = new RegExp
handler.register = true
export default handler