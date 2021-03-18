$(document).on('click','ul li' ,function(){
    $(this).addClass('active-cl').siblings().removeClass('active-cl');
});

function close1(){
    document.getElementById('menu').classList.toggle("cls")
    document.getElementById('navi').classList.toggle("nav")
}