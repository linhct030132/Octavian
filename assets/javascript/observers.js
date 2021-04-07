
const sectionOne = document.querySelector('#analysis')

const options = {
    threshold: 1,
}


const observer = new IntersectionObserver (
    function(entries, observer) {
        entries.forEach(entry => {
            console.log(entry)
        })
}, options)

observer.observe(sectionOne)

