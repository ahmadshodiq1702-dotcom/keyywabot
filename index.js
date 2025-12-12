import makeWASocket from "@whiskeysockets/baileys"

async function start() {
  const sock = makeWASocket({ printQRInTerminal: true })
  
  sock.ev.on("messages.upsert", m => {
    const msg = m.messages[0]
    if (!msg.message) return
    
    const text = msg.message.conversation || ""
    if (text === "ping") {
      sock.sendMessage(msg.key.remoteJid, { text: "pong" })
    }
  })
}

start(){
