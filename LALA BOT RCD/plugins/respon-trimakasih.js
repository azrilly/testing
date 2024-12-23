import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
/*m.reply('\nIyah... sama" kak, Semoga Harimu Menyenangkan :)\n')
}*/
let info = `\nIyah... sama" kak, Semoga Harimu Menyenangkan :) `
await conn.reply(m.chat, info, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: author, body: '☂︎ ᴄʀᴇᴀᴛᴇ ʙʏ zen', sourceUrl: `https://www.instagram.com/p/CLPWKRYgkEW/?igsh=MW9xa2xjZTBjNWlxdw==`, thumbnail: fs.readFileSync('./src/menu.jpg') }}})
}
handler.customPrefix = /^(trimakasih|terimakasih|makasih|mksh|thanks|tq|arigatou|thankyou)$/i
handler.command = new RegExp

export default handler