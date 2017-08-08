// JavaScript source code
var img1 = new Rotation();
var img2 = new Rotation();
var img3 = new Rotation();

img1.animate("img1", "clockwise");
img2.animate("img2", "counterclockwise");
img3.animate("img3", "clockwise");

function Rotation() {
    this.d = 0;
    this.animate = function animate(element, direction) {
        var elem = document.getElementById(element);
        var me = this;
        if (direction == "counterclockwise") {
            this.d--;
        }
        else {
            this.d++;
        }
        elem.style.transform = "rotate(" + this.d + "deg)";
        if (this.d > 359) {
            this.d = 1;
        }
        else if (this.d < -359) {
            this.d = -1;
        }
        setTimeout(function () { me.animate(element, direction); }, 20);
    }
}