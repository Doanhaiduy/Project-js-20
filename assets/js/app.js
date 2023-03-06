let btn = document.querySelector(".btn");
btn.onclick = function (e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const y = e.pageY - rect.top;
    btn.style.setProperty("--transform-origin", `${x + 30}px ${y + 80}px`);
    btn.classList.add("active");
    setTimeout(() => {
        btn.classList.remove("active");
    }, 300);
};
