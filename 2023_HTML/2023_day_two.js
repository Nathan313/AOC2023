function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                text = allText;
            }
        }
    }
    rawFile.send(null);
    return text;
    
}
function partOne(){
    let fileData = readTextFile("../2023_inputFiles/daytwoinput.txt");
    newArray = fileData.split("\n");
    console.log("test");
}


function partTwo(){
    let fileData = readTextFile("../2023_inputFiles/daytwoinput.txt");
    newArray = fileData.split("\n");

}

window.onload = function(){
partOne();
//partTwo();
}
