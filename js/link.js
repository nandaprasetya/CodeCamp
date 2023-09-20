let linkhomepage = "index.html";
let linkprogram = "index.html#program";
let linkkelas = "program.html";
let linkdetailkelas = "kelas.html";

$("#nav-home").click(function(){
    window.location.href = linkhomepage;
});

$("#nav-program").click(function(){
    window.location.href = linkprogram;
});

$("#nav-kelas").click(function(){
    window.location.href = linkkelas;
});
$("#nav-home-res").click(function(){
    window.location.href = linkhomepage;
});

$("#nav-program-res").click(function(){
    window.location.href = linkprogram;
});

$("#nav-kelas-res").click(function(){
    window.location.href = linkkelas;
});

$("#link-kelas-Javascript-Dasar").click(function(){
    window.location.href = linkdetailkelas;
});

$("#nav-btn").click(function(){
    $(".area-nav").toggleClass("active");
});

$("#nav-close").click(function(){
    $(".area-nav").removeClass("active");
})