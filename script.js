const btn = document.querySelector("button")

let arr = [

    "  photo1.jpg",
    "  photo2.jpg",
    " photo3.jpg",
    " photo4.jpg",
    "photo5.jpg"
]

function abc() {
    const randomimg = Math.floor(Math.random() * arr.length)
    const randomX = Math.floor(Math.random() * 99)
    const randomY = Math.floor(Math.random() * 90)
    const randomScale = Math.floor(Math.random() * 360)
    return { randomX, randomY, randomimg, randomScale }

}


btn.addEventListener("click", () => {
    const { randomX, randomY, randomimg, randomScale } = abc()
    const img = document.createElement("img")
    document.body.appendChild(img)
    img.src = arr[randomimg]
    img.style.height = "100px"
    img.style.position = "absolute"
    img.style.top = randomX + "%";
    img.style.left = randomY + "%";
    img.style.rotate = randomScale + "deg"

    // console.log(randomX, randomY, randomimg, randomScale)

})