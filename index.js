
const list = document.querySelector('ul')
const listItems = list.querySelectorAll('li')
const btn = document.querySelector('button')
const gallery = document.getElementById('gallery')
const paragraph = document.querySelector('p')

console.log(cities)

btn.addEventListener('click', () => {
  list.classList.toggle('active')

  if (list.classList.contains('active')) {
    btn.innerText = 'Show destinations'
    gallery.style.backgroundImage="none"
    paragraph.innerText='Toggle the list of my Favorite Destinations'
    
  } else {
    btn.innerText = 'Hide destinations'
    gallery.style.backgroundImage="block"    

  }
})

function removeDestination() {
  listItems.forEach(item => {
    item.classList.remove('destination-active')
  })
}



let images = {
    sardinia: 'https://images.unsplash.com/photo-1591103000599-50f5b4ec7d3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    athens: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    petra: 'https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    amsterdam: 'https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    nyc: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
}

function cityName(city) {
  let url;
  Object.keys(images).forEach(key => {
    if (city.toLowerCase() === key) {
      url = images[key]
    }else return
  });
  return url
}

listItems.forEach(item => {
  item.addEventListener('click', () => {
    removeDestination();
    item.classList.add('destination-active')
    
    let city = item.innerText
    paragraph.innerText = `You're selected destination is ${city}`
   
    //bg.style.background = `url(${cityName(city)})`
    gallery.style.background = `url(${cityName(city)})`
    gallery.style.backgroundSize = 'cover'
    
  })
})




