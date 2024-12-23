//Follow Developer https://www.instagram.com/yanz_5008/profilecard/?igsh=Y2ZlOHF0dzlhMzJt
//Note : Sumber daripada di hapus mending tambahin 😂
import fetch from 'node-fetch';
let handler = async (m, { conn, command, text }) => {

    if (!text) throw `Iya kak, apa yg mau ditanyakan?\nContoh: .${command} Apa arti nama Lala?`;	
  let apii = await fetch(`https://widipe.com/gpt4?text=${text}`)
  let res = await apii.json()
  conn.reply(m.chat, `
${res.result}
`.trim(), m)
}
handler.command = ['ai','bot'];
handler.help = ['ai']
handler.tags = ['internet'];
handler.premium = false;
export default handler;
