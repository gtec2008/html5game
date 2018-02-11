// JavaScript source code
function collision(posx1, posy1, width1, height1, posx2, posy2, width2, height2) {
    if (posx1 <= posx2 + width2 && posx2 <= posx1 + width1 && posy1 <= posy2 + height2 && posy2 <= posy1 + height1) {
        //alert("collision");
        return true;
    } else {
        return false;
    }
}