function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.querySelector('.animation-content')
            .classList.remove('animation-content--hide');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation-wraper');

for (let elm of elements) {
    observer.observe(elm);
}