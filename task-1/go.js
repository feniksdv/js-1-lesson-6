var big = document.getElementsByClassName("big")[0]; //масив - обращаемся к элементам на странице
var small = document.getElementsByClassName("small")[0]; //масив - обращаемся к элементам на странице
bigArr = ["big/1.jpg","big/2.jpg"]; //масив больших картинок
smallArr = ["small/1.png","small/2.png","small/3.png"];//масив маленьких картинок
for (var i = 0; i < 3; i++)//создаем 3 маленьких картинки
{
    img = document.createElement("img"); //создаем тег img
    var src = document.createAttribute("src"); //добавляем атрибут src
    var id = document.createAttribute("id");  //добавляем атрибут id
    src.value = smallArr[i]; //присваиваем значение атрибуту src
    id.value = "i"+i; //присваиваем значение атрибуту id
    img.setAttributeNode(src); //добавляем атрибут в img
    img.setAttributeNode(id); //добавляем атрибут в img
    small.append(img); //выводим тег в нутри тега div.small
}
small.addEventListener("click", f);//создаем одну большую картинку по клику
var img1 = document.querySelector("#i1");
var img2 = document.querySelector("#i2");
var img3 = document.querySelector("#i3");
function check() //общая проверка
{
    var elemImg = document.querySelector("#one");
    var elemP = document.querySelectorAll("p")[0];
    if (elemImg != null )
        elemImg.remove();
    if (elemP !== undefined) 
        elemP.remove();
}
function newElementCreate(x) //создание и раположение элементов DOM
{
    img = document.createElement("img"); //создаем тег img
    var src = document.createAttribute("src");//добавляем атрибут src
    var id = document.createAttribute("id");  //добавляем атрибут id
    id.value = "one"; //присваиваем значение атрибуту id
    img.setAttributeNode(id); //добавляем атрибут id в img
    src.value = bigArr[x];
    img.setAttributeNode(src);//добавляем атрибут src в img
    big.append(img);
}
function f(e) //выводим большую картинку если есть
{
    switch (e.target) {
        case i0:
            check();
            newElementCreate(0);
            break;
        case i1:
            check();
            newElementCreate(1);
            break;
        default:
            check();
            p = document.createElement("p");
            p.innerText = "Такой картинки нет";
            big.append(p);
            break;
    }
}