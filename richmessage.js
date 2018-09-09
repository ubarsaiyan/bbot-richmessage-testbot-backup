const bot = require('bbot')

bot.global.text(/text button with url/i, (b) => {
  b.envelope.write('text button with url')
  b.envelope.payload.quickReply({
      text: 'Book flights',
      url: 'http://www.kayak.com'
  })
  return b.respond()
})

bot.global.text(/text button with msg in chat window/i, (b) => {
  b.envelope.write('text button with msg in chat window')
  b.envelope.payload
    .quickReply({ text: 'hello in chat window' })
  return b.respond().catch((err) => console.error(err))
})

bot.global.text(/abcd/i, (b) => {
  b.envelope.write('Choose your fate! 🚪... 🎁 ')
  b.envelope.attach({ color: '#f4426e' })
  b.envelope.payload
    .quickReply({ text: 'Door number 1' })
    .quickReply({ text: 'Door number 2' })
    .quickReply({ text: 'Door number 3' })
  return b.respond().catch((err) => console.error(err))
}, { id: 'door-prize-intro' })