document.querySelectorAll('.lomba').forEach((item) => {
    item.addEventListener('click', (event) => {
        event.target.style.border = "2px solid green";
        event.target.style.padding = "2px 2px";
        event.target.style.borderRadius = "9999px"
    })
})