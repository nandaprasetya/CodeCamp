let linkhomepage = "index.html";
let linkprogram = "index.html#program";
let linkkelas = "program.html";
let linkdetailkelas = "kelas.html";
let linktesting = "testing.html"

$("#nav-home").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkhomepage;
    }, 700);
});

$("#coba-kode1").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linktesting;
    }, 700);
});


$("#nav-program").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkprogram;
    }, 700);
    $(".area-animation").removeClass("active");
    setTimeout(() => {
    $(".area-animation").css("display","none");
    }, 1400);
});

$("#nav-kelas").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkkelas;
    }, 700);
});

$("#link-footer-home").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkhomepage;
    }, 700);
});

$("#link-footer-program").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkprogram;
    }, 700);
    $(".area-animation").removeClass("active");
    setTimeout(() => {
    $(".area-animation").css("display","none");
    }, 1400);
});

$("#link-footer-kelas").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkkelas;
    }, 700);
});

$("#nav-home-res").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkhomepage;
    }, 700);
});

$("#nav-program-res").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkprogram;
    }, 700);
});

$("#nav-kelas-res").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkkelas;
    }, 700);
});

$("#link-kelas1").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkdetailkelas;
    }, 700);
});
$("#link-kelas2").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkdetailkelas;
    }, 700);
});

$("#link-kelas-Javascript-Dasar").click(function(){
    $(".area-animation").css("display","block");
    setTimeout(() => {
        $(".area-animation").addClass("active");
    }, 10);
    setTimeout(() => {
        window.location.href = linkdetailkelas;
    }, 700);
});

$("#nav-btn").click(function(){
    $(".area-nav").toggleClass("active");
});

$("#nav-close").click(function(){
    $(".area-nav").removeClass("active");
});