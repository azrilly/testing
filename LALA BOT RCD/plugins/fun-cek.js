import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender    
    let name = conn.getName(who)
switch (command) {
case 'cekgay':                
case 'ceklesbi':
case 'cekganteng':
case 'cekcantik':
case 'ceksange':
case 'cekalim':
case 'cekfakboy':
case 'cekfakgirl':{
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
conn.sendMessage(m.chat, { text: 'Pertanyaan : *' + command + '*\nNama : ' + `@${m.sender.split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [m.sender] }, { quoted: m })
      break;
    }
  }
};
handler.tags = ['fun-cek']
handler.help = handler.command = ['cekgay',                
'ceklesbi',
'cekganteng',
'cekcantik',
'ceksange',
'cekfakboy',
'cekalim',
'cekfakgirl']
handler.limit = true
export default handler
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']