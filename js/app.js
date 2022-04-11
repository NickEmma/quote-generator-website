let quoteText = document.querySelector('.quote')
let authorName = document.querySelector('.author .name')
let quoteBtn = document.querySelector('button')
let soundBtn = document.querySelector('.sound')
let copyBtn = document.querySelector('.copy')
let twitterBtn = document.querySelector('.twitter')

function randomQuote() {
  quoteBtn.classList.add('loading')
  quoteBtn.innerText = 'Loading Quote...'
  // fetching random quote and passing it into js object
  fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((result) => {
      // console.log(result)
      quoteText.innerText = result.content
      authorName.innerText = result.author
      quoteBtn.innerText = 'New Quote'
      quoteBtn.classList.remove('loading')
    })
}
soundBtn.addEventListener('click', () => {
  // the SpeechSynthesisUtterance is a web speech api that represent a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${authorName.innerText}`
  )
  SpeechSynthesis.speak(utterance) // the speak method speaks the utterance
})

copyBtn.addEventListener('click', () => {
  Navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener('click', () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
  window.open(tweetUrl, '_blank') //open in a new tab
})

quoteBtn.addEventListener('click', randomQuote)
