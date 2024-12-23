let handler = async (m, { conn }) => {
  let werewolf = global.db.data.werewolf || {}
  if (typeof werewolf.status == "undefined" || werewolf.status != "playing") {
    conn.reply(m.chat, "_Permainan Werewolf tidak sedang berlangsung !_", m)
    return
  }
  if (Object.keys(werewolf.players).length < 5) {
    conn.reply(m.chat, "_Setidaknya diperlukan 5 pemain untuk memulai permainan !_", m)
    return
  }
  let players = Object.keys(werewolf.players)
  let wolves = []
  while (wolves.length < Math.ceil(players.length / 3)) {
    let wolf = players[Math.floor(Math.random() * players.length)]
    if (werewolf.players[wolf] == "villager") {
      werewolf.players[wolf] = "wolf"
      werewolf.wolves.push(wolf)
      wolves.push(wolf)
    }
  }
  global.db.data.werewolf = werewolf
  conn.reply(m.chat, "Permainan manusia serigala dimulai. Ada" + players.length + " players, including " + werewolf.wolves.length + "🐺. Silakan kirim '.wwvote' untuk memilih pemain", m)
}
handler.help = ['wwstart']
handler.tags = ['game']
handler.command = /^wwstart$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler