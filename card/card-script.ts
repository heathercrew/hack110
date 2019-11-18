let myImage: HTMLImageElement = document.getElementById("pic") as HTMLImageElement;

myImage.onclick = function (event: MouseEvent): void {
    myImage.src = "https://i.gifer.com/5RTD.gifewImageURL";
    alert("In here!");
};