const image = document.querySelector('.image')
const title = document.querySelector('.img-title')
const explanation = document.querySelector('.explanation')

const requestUrl = 'https://api.nasa.gov/planetary/apod?api_key=8JxbEAGtqOqlstuQsg4kQ2ykKDd0w4xddSDmBDzf'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const data = JSON.parse(this.responseText)
            if(data.media_type === 'video'){
                image.innerHTML = `<iframe src="${data.url}">`
            } else{
                image.innerHTML = `<img
                src="${data.url}"
                alt=""/>`
            }
            title.innerHTML = `${data.title}`
            explanation.innerHTML = `${data.explanation}`
        } else {
            console.error(`Request failed with status: ${xhr.status}`);
        };
    };
};
xhr.onerror = function () {
    document.querySelector('body').innerHTML = 'An error occurred during the request.'
};
xhr.send();