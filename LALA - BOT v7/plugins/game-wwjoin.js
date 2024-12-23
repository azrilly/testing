let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.status == "undefined" || werewolf.status != "playing") {
    conn.reply(m.chat, "_Permainan Werewolf tidak sedang berlangsung !_", m)
    return
  }
  if (typeof werewolf.players[m.sender] != "undefined") {
    conn.reply(m.chat, "_Anda sudah bergabung dalam permainan !_", m)
    return
  }
  werewolf.players[m.sender] = "villager"
  werewolf.villagers.push(m.sender)
  global.db.data.werewolf = werewolf
  conn.reply(m.sender, "_Anda telah bergabung dalam permainan sebagai penduduk desa !_", m)
}
handler.help = ['wwjoin']
handler.tags = ['game']
handler.command = /^wwjoin$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler