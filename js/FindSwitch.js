var array = [
    {"id": "P6-1-A10", "imgName": "P6-1-A10"},
    {"id": "P6-1-A12", "imgName": "P6-1-A12"},
    {"id": "P6-1-A13", "imgName": "P6-1-A13"},
    {"id": "P6-1-A14", "imgName": "P6-1-A14"},
    {"id": "P6-1-A15", "imgName": "P6-1-A15"},
    {"id": "P6-1-A16", "imgName": "P6-1-A16"},
    {"id": "P6-1-A17", "imgName": "P6-1-A17"},
    {"id": "P6-1-B4", "imgName": "P6-1-B4"},
    {"id": "P6-1-B5", "imgName": "P6-1-B5"},
    {"id": "P6-1-B6", "imgName": "P6-1-B6"},
    {"id": "P6-1-B7", "imgName": "P6-1-B7"}
];
var imgId;
var clock;
function Sel(name){
    var objectIndex = array.findIndex(object => object.id == name);
    id=array[objectIndex].imgName;
    //调用setInterval()函数,每隔0.5秒隐藏显示
    clock =  setInterval("getImg(id)",500);
}

function getImg(id) {
    imgId = document.getElementById(id);
    if(imgId.style.display=="none"){//图片隐藏
        imgId.style.display="block";//图片显示
    }else{
        imgId.style.display="none";//图片隐藏
    }
}

$("#btnSel").click(function (){
    if(imgId!=null) {
        imgId.style.display = "block";//图片显示
    }
    clearInterval(clock);
    Sel($("#name").val());
});

$("#btnClear").click(function (){
    if(imgId!=null) {
        imgId.style.display = "block";//图片显示
        imgId=null;
    }
    clearInterval(clock);
    $("#name").val("");
});

