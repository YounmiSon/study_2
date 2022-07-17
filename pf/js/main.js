//스크롤 할 때마다 section 하나씩 보여주도록 자동 스크롤
//https://nykim.work/56 도움
window.addEventListener("scroll", () => {
    let y = scrollY();
    console.log(y)
    if (y >= 600) {
        window.moveTo(scrollY(970))
    }
})

//top 버튼
let topBtn = document.querySelector('#topBtn')
topBtn.onclick = () =>{
    console.log("a")
    window.scrollTo({top: 0, behavior: 'smooth'})
}