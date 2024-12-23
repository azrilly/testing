import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `Ngapain om -_-
    
 • SEWA BOT MASUK GRUP :
   - 1 Minggu : 5k
   - 1 Bulan : 10K
   - Permanen : 25K

• Jangan spam BOT (spam = ban permanen)  
 
 Via:
   • Pulsa : [085752235008]
   • Gopay: [085752235008]
   • Spay: [085752235008]
   • Dana: [085180802234]

 Jika Minat Hubungi Owner:
              Wa.me/6285752235008 (Owner)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler