let handler = async (m, { conn, command }) => {
m.reply(wait)
let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`
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

handler.help = ['mangkane25','mangkane26','mangkane27','mangkane28','mangkane29','mangkane30','mangkane31','mangkane32','mangkane33','mangkane34','mangkane35','mangkane36','mangkane37','mangkane38','mangkane39','mangkane40','mangkane41','mangkane42','mangkane43','mangkane44','mangkane45','mangkane46','mangkane47','mangkane48','mangkane49','mangkane50','mangkane51','mangkane52','mangkane53','mangkane54']
handler.tags = ['sound']
handler.command = /^(mangkane25|mangkane26|mangkane27|mangkane28|mangkane29|mangkane30|mangkane31|mangkane32|mangkane33|mangkane34|mangkane35|mangkane36|mangkane37|mangkane38|mangkane39|mangkane40|mangkane41|mangkane42|mangkane43|mangkane44|mangkane45|mangkane46|mangkane47|mangkane48|mangkane49|mangkane50|mangkane51|mangkane52|mangkane53|mangkane54)$/i
handler.owner = false
handler.limit = true

export default handler