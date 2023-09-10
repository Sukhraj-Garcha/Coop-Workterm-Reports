$(document).ready(function() {

    //launch respective work term report on button click
    $(".wt1").click(function() {
        document.location.href = "./term_pages/camis.html";
    })

    $(".wt2").click(function() {
        document.location.href = "./term_pages/bastian1.html";
    })

    $(".wt3").click(function() {
        document.location.href = "./term_pages/bastian2.html"
    })

    $(".wt4").click(function() {
        document.location.href = "./term_pages/bastian3.html"
    })

    //take user back to home page
    $(".btn_home").click(function() {
        document.location.href = "../index.html"
    })


});


