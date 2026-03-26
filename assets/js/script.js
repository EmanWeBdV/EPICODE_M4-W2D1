
// TODO: Chiave API Pexels= Swx7IP1usnK1p3zVSTa9tCqpLx2hwRUgCDZdV22rdzDar3kTPyH5s1dx




const apiKey = "Swx7IP1usnK1p3zVSTa9tCqpLx2hwRUgCDZdV22rdzDar3kTPyH5s1dx"

const getPhotos = async photoIn => {
  try {
    const rawData = await fetch(`https://api.pexels.com/v1/search?query=${photoIn}`, {
      headers: {
        Authorization: apiKey
      }
    })

    const data = await rawData.json()
    const dataPhotos = data.photos
    const boxRowMain = document.querySelector(".row")
    boxRowMain.innerHTML=""

    dataPhotos.forEach(el => {
        const containerPhoto = document.createElement("div")
        const photo = document.createElement("img")

        containerPhoto.classList.add("col", "imgBox")
        photo.setAttribute("src", el.src.medium)
        photo.setAttribute("alt", el.alt || "photo")
        photo.setAttribute("draggable", false)
        

        containerPhoto.appendChild(photo)
        boxRowMain.appendChild(containerPhoto)
    })
} catch (error) {
    console.log(error)
}
}


getPhotos("code")

const search = () => {
    const query = document.getElementById("searchField").value
    getPhotos(query)
}