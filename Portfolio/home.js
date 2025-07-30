let slideimg = ['Neumont.jpg','imageItook.jpg','imageItook2.jpg']
//add image file to img folder then type filename into array to add it to the 'slideshow'
let slideindex = 0

document.addEventListener('DOMContentLoaded', function () {
  randquote()
  updateslide()
  setInterval(updateslide, 3000);
});

function updateslide(){
  if (document.getElementById("slideshow") == null){return}
  document.getElementById("slideshow").innerHTML = `<img src="img/${slideimg[slideindex]}">`
  slideindex+=1;
  if (slideindex == slideimg.length) slideindex = 0
}

async function randquote(){
  let script = await fetch('https://dummyjson.com/quotes?limit=100')
  let scriptext = await script.text()
  let list = await JSON.parse(scriptext)
  let randq = list.quotes[(Math.random()*list.quotes.length).toFixed()]
  let inner = `
    <h3>${randq.quote}</h3>
    <h4>~${randq.author}</h4>
    `

  document.getElementById("quoteBox").innerHTML= inner
}
