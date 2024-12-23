let handler = async (m, { conn, command }) => {
m.reply(wait)
let audio = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://www.instagram.com/yanz_5008',
    mediaType: 2, 
    description: 'L A L A  M U L T I D E V I C E',
    title: "ɴᴏᴡ ᴘʟᴀʏɪɴɢ...",
    body: `${command}`,
    thumbnail: await (await fetch('https://files.catbox.moe/17jbqv.jpg')).buffer(),
    sourceUrl: 'https://www.instagram.com/yanz_5008'
}
     }
    })
}

handler.help = ['mangkane1','mangkane2','mangkane3', 'mangkane4','mangkane5','mangkane6','mangkane7','mangkane8','mangkane9','mangkane10','mangkane11','mangkane12','mangkane13','mangkane14','mangkane15','mangkane16','mangkane17','mangkane18','mangkane19','mangkane20','mangkane21','mangkane22','mangkane23','mangkane24']
handler.tags = ['sound']
handler.command = /^(mangkane1|mangkane2|mangkane3|mangkane4|mangkane5|mangkane6|mangkane7|mangkane8|mangkane9|mangkane10|mangkane11|mangkane12|mangkane13|mangkane14|mangkane15|mangkane16|mangkane17|mangkane18|mangkane19|mangkane20|mangkane21|mangkane22|mangkane23|mangkane24)$/i
handler.owner = false
handler.limit = true

export default handler