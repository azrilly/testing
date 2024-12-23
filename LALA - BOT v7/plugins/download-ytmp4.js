import fetch from 'node-fetch'

 let handler = async (m, { conn, text, usedPrefix, command }) => {
   if (!text) throw `*Example:* ${usedPrefix}${command} <link>`;
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
 let anu = await fetch(`https://rest.cifumo.biz.id/api/downloader/ytdl?url=${text}`)
let result = await anu.json()
await conn.sendFile(m.chat, result.data.video, 'anu.mp4', `*JUDUL:* ${result.data.title}\n*CHANNEL:* ${result.data.metadata.channel}\n*DURASI:* ${result.data.metadata.duration}\n*THUMBNAIL:* ${result.data.metadata.thumbnail}\n*PENONTON:* ${result.data.metadata.views}\n*DESKRIPSI:* ${result.data.metadata.description}`, m)
}
handler.help = ['ytv']
handler.tags = ['downloader']
handler.command = /^(ytv|ytmp4)$/i
handler.premium = false
export default handler