const apiKiey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa'
const apiURL =`https://api.giphy.com/v1/gifs/search?api_key=dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa&q=panda&limit=10&offset=0&rating=G&lang=en`


export  default function getGifs ({keryword ='pandas'} ={} ){
    const apiURL =`https://api.giphy.com/v1/gifs/search?api_key=$
    {apiKiey}&q=${keryword}&limit=10&offset=0&rating=G&lang=en`

   return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
     const {data= []}=response
     if (Array.isArray(data)){
     const gifs = data.map(image => {
        const {images, title, id} = image
        const {url}= image.images.downsized_medium.url
        return { title, id, url}
    })
     return gifs
}
})
}
