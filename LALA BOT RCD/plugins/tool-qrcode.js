import { toDataURL } from 'qrcode'

var handler = async (m, { conn, text }) => {

if (!text) throw 'Teksnya mana banh?'
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'L A L A  M U L T I D E V I C E', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i


export default handler
