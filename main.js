const menu = document.getElementById("menu");

menu.addEventListener("click", (e) => {
    // نتأكد إن اللي اتضغط عليه هو link
    if (e.target.tagName === "A") {
        
        const links = menu.querySelectorAll("a");

        links.forEach(link => {
            link.classList.remove("active");
        });

        e.target.classList.add("active");
    }
});

console.log("hello world!");

console.log("welcom in the new feature");

console.log("this is my console");