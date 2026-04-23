const wrapper = document.querySelector(".share-links-wrapper");
wrapper.addEventListener("click", () => {
    const links = document.querySelector(".sm-links");
    links.style.display = "flex";

    const linkIconGreen = document.querySelector(".click-share-icon-two");
    linkIconGreen.style.display = "flex";

    const linkIconYellow = document.querySelector(".click-share-icon-one");
    linkIconYellow.style.display = "none";
});