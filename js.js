console.log("hellos")
let x = 0;
while(true){
    let len = 5*Math.sin(x)
    let st = "";
    for(let i=0;i<len;i++){
        st += "a";
    }
    console.log(st);
    x++;
}