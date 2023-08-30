const image = document.querySelector('.image')
const title = document.querySelector('.img-title')
const explanation = document.querySelector('.explanation')

const requestUrl = 'https://api.nasa.gov/planetary/apod?api_key=8JxbEAGtqOqlstuQsg4kQ2ykKDd0w4xddSDmBDzf'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            // console.log(data.hdurl);
            // console.log(data.title);
            // console.log(data.explanation);
            image.innerHTML = `<img
            src="${data.hdurl}"
            alt=""/>`
            title.innerHTML = `${data.title}`
            explanation.innerHTML = `${data.explanation}`
        }
    }
    xhr.send();