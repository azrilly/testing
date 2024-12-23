const handler = async (m, { conn, command }) => {
  if (!m.quoted) throw 'Reply pesan yang ingin dihapus';
  try {
    let bilek = m.message.extendedTextMessage.contextInfo.participant;
    let banh = m.message.extendedTextMessage.contextInfo.stanzaId;
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: banh, participant: bilek } });
  } catch {
    return conn.sendMessage(m.chat, { delete: m.quoted.vM.key });
  }
};

handler.help = ['delete'];
handler.tags = ['tools'];
handler.command = /^(d|delete|del|hps|hapus|erase)$/i;
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler;
