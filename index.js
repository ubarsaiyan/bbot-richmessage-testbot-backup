const bot = require('bbot')
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// `text` branch types simply respond when regex pattern is met
// Test with "Hello bots!"
bot.global.text(/(hi|hello).*bots/, (b) => b.respond('Hello :wave:'))

// `direct` branch type requires the bot to be explicitly addressed
// `reply` instead of `respond` prepends messages with user's name
// Test with "@bRocket Hello."
bot.global.direct(/hi|hello/i, (b) => b.reply('Hey there.'))

// `respondVia` allows using custom platform methods to dispatch response
// Test with "Hello anyone?"
bot.global.text(/Hi|Hello/, (b) => b.respondVia('react', ':wave:'))

// Branch callbacks allow asynchronous responding, if they return a promise
// State (b) includes branch matching attributes, see bbot.chat/docs/thought
// Test with "@bRocket ping back in 5 seconds"
bot.global.direct(/ping back in (\d*)/i, async (b) => {
  const ms = parseInt(b.match[1]) * 1000
  await delay(ms)
  return b.respond('Ping :ping_pong:')
})

bot.global.text(/attach image/i, (b) => {
  return b.respond({
    fallback: 'See: https://www.wikiwand.com/en/Three_Laws_of_Robotics',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/I_Robot_-_Runaround.jpg',
    title: {
      text: 'Asimov Three Laws of Robotics',
      link: 'https://www.wikiwand.com/en/Three_Laws_of_Robotics'
    }
  })
}, { id: 'attach-image' })

bot.global.text({
  contains: 'prize'
}, (b) => {
  b.envelope.write('Choose your fate! 🚪... 🎁 ')
  b.envelope.attach({ color: '#f4426e' })
  b.envelope.payload
    .quickReply({ text: 'Door number 1' })
    .quickReply({ text: 'Door number 2' })
    .quickReply({ text: 'Door number 3' })
  return b.respond()
}, { id: 'door-prize-intro' })

bot.start() // 🚀
