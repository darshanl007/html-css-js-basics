let btn1 = document.querySelector("#btn1")
btn1.onclick = () =>{
    console.log("Button Clicked");
    let a = 24;
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log(`You are inside div`);
}