function slaider(x) {
    h2.innerText = sliderText['h2_' + x];
    h1.innerText = sliderText['h1_' + x];
    p.innerText = sliderText['p_' + x];
    a.innerText = sliderText['a_' + x];
}
    
//найдем все теги с которыми будем работать
var h2 = document.getElementsByClassName("slider-wrp-content-title-h2")[0];
var h1 = document.getElementsByClassName("slider-wrp-content-title-h1")[0];
var p = document.getElementsByClassName("slider-wrp-content-text")[0];
var a = document.getElementsByClassName("slider-wrp-content-btn")[0];
var left = document.getElementsByClassName("slider-wrp-btn-left")[0];
var right = document.getElementsByClassName("slider-wrp-btn-right")[0];

left.addEventListener("click", fLeft);//Нажимаем кнопку left
right.addEventListener("click", fRight);//Нажимаем кнопку right

//автоматически переключать картинку раз 2сек
var tm = setInterval(fRight, 3000);

var i = 0;
    
function fLeft()
{
    i++;
    switch (i) {
        case 3:
            slaider(3);
            break;
        case 2:
            slaider(2);
            break;
        case 1:
            slaider(1);
            break;
        default:
            slaider(0);
            i = 0;
            break;
    }
}
function fRight()
{
    i++;
    switch (i) {
        case 1:
            slaider(1);
            break;
        case 2:
            slaider(2);
            break;
        case 3:
            slaider(3);
            break;
        default:
            slaider(0);
            i = 0;
            break;
    }
}