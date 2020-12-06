var button = document.querySelectorAll("button");
for (var item of button) //всем кнопкам вешам onklick
{
    item.onclick = f;
}
var b = []; //масив в котором хранятся объекты кнопок
var sum = []; //масив цен
var s = 0;
for (var i = 1; i <= 3; i++)//создим объект для каждой кнопки
{
    b[i] = document.getElementById(["b" + i]);
}
function cart(x)
{
    var cartDisplay = document.getElementsByClassName("cart")[0];//обращаемся к классу, в кторый спрятан.
    cartDisplay.style.display = "block"; //показываем корзину
    var cart = document.getElementsByClassName("cart-h2")[0];//обращаемся к классу, в кторый будем выводить полученые данные.
    var rezult = document.getElementsByClassName(["b"+x]); //получаем название продукта и цену
    var span = document.createElement("span"); //создаем новый тег в котором будем выводить названиеи цену
    var cartTotal = document.getElementsByClassName("cart-total")[0];//обращаемся к классу, в кторый спрятан.
    span.className = ("cart-name"); //добавляем класс
    span.innerText = rezult[0].innerHTML+" — "+rezult[1].innerHTML;
    cart.after(span);
    sum = rezult[1].innerHTML.split(" "); //храним в масиве цену товара
    s += Number(sum[0]); //складываем при каждой этерации
    cartTotal.innerText="Итого: "+s+"руб";
}
function f(e) //функция по нажатию на кнопку
{
    switch (e.target)
    {
        case b[1]:
            cart(1);
        break;
        case b[2]:
            cart(2);
        break;
        case b[3]:
            cart(3);
        break;
    }
}