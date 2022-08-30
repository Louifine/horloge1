document.querySelector('.previous').addEventListener("click", event => {
    const tabPhoto = document.getElementsByClassName('card');
    console.log(tabPhoto);
    let parent = tabPhoto[0].parentNode;
    parent.insertBefore(tabPhoto[tabPhoto.length-1], tabPhoto[0]);
});

document.querySelector('.next').addEventListener("click", event => {
    const tabPhoto = document.getElementsByClassName('card');
    console.log(tabPhoto);
    let parent = tabPhoto[0].parentNode;
    parent.appendChild(tabPhoto[0]);
});