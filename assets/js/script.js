
// TODO: Chiave API Pexels= Swx7IP1usnK1p3zVSTa9tCqpLx2hwRUgCDZdV22rdzDar3kTPyH5s1dx

const apiKey = "Swx7IP1usnK1p3zVSTa9tCqpLx2hwRUgCDZdV22rdzDar3kTPyH5s1dx"

const getPhotos = async () => {
    try{
        const rawData= await fetch (`https://api.pexels.com/v1/search?query=nature`, {
            headers:{
                "Authorization": apiKey
            }
        })
        const data = await rawData.json()
        //data.forEach(el => {
        //   const photo = document.createElement("img")
        //   photo.setAttribute("src", "el.photos.url")
        //});
        return data
    }
    catch(error){
        console.log(error)
    }
}

getPhotos()
    .then(res => console.log(res))