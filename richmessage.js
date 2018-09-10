const bot = require('bbot')

bot.global.text(/text button with url/i, (b) => {
  b.envelope.write('text button with url')
  b.envelope.payload.quickReply({
      text: 'Book flights',
      url: 'http://www.kayak.com',
      is_webview: false
  })
  return b.respond().catch((err) => console.error(err))
})

bot.global.text(/text button with msg in chat window/i, (b) => {
  b.envelope.write('text button with msg in chat window')
  b.envelope.payload.quickReply({ 
    msg: 'hello (message sent via RichMessageBot) :D',
    text: 'hello in chat window',
  })
  return b.respond().catch((err) => console.error(err))
})

bot.global.text(/image button with url/i, (b) => {
  b.envelope.write('image button with url')
  b.envelope.payload.quickReply({
      image_url: 'http://www.emoji.co.uk/files/phantom-open-emojis/travel-places-phantom/12698-airplane.png',
      url: 'http://www.kayak.com'
  })
  return b.respond().catch((err) => console.error(err))
})

bot.global.text(/image button with msg in chat window/i, (b) => {
  b.envelope.write('image button with msg in chat window')
  b.envelope.payload.quickReply({ 
    image_url: 'http://www.emoji.co.uk/files/phantom-open-emojis/travel-places-phantom/12698-airplane.png',
    msg: 'I clicked the airplane'
  })
  return b.respond().catch((err) => console.error(err))
})

bot.global.text(/horizontal text buttons/i, (b) => {
  b.envelope.write('Horizontal buttons:')
  b.envelope.attach({ 
    title: 'horizontal text buttons with url',
    button_alignment: 'horizontal'
  })
  b.envelope.payload.quickReply({
    type: 'button',
    text: 'Book flights',
    url: 'http://www.kayak.com',
    is_webview: false
  })
  b.envelope.payload.quickReply({
    type: 'button',
    text: 'Cancel travel request',
    url: 'https://requests.example.com/cancel/r123456',
    is_webview: false
  })
  return b.respond().catch((err) => console.error(err))
})  