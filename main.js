canvas = document.getElementById("mycanvas");
ctx= canvas.getContext("2d");

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.strokeStyle();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity starts
    color = document.getElementById("color").value;
    console.log(color);
    //additional activity ends

    mouse_x = e.clientx - canvas.offsetleft;
    moese_y = e.clienty - canvas.offsettop;

     console.log("x = "+ mouse_x + " ,y =  " + mouse_y);
     circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y);
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}