// nimen tallentaminen näkyviin
function saveName() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}
//sovelluksen avaus/sulkeminen
function openApp() {
    var x = document.getElementById("divExample");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(document).ready(function () {
});

    var price = prices;
    //lipunhinnan laskeminenn
$("#ageFree, #ageUnder, #ageOver, #mtk, #student, #soldier").on('change', function () {
    var freeEntry = $("#ageFree").val();
    var ageUnder = $("#ageUnder").val();
    var ageOver = $("#ageOver").val();
    var mtk = $("#mtk").val();
    var student = $("#student").val();
    var soldier = $("#soldier").val();

    if(freeEntry == 1) {
        $("#price").text(price.free.price + " " + "€");
        $("#ageUnder, #ageOver, #mtk, #student, #soldier").prop('disabled', true);
    } else if(ageUnder == 1) {
        $("#price").text(price.normal.price * price.half.price + " " + "€");
        $("#ageFree, #ageOver, #mtk, #student, #soldier").prop('disabled', true);
    }else if(ageOver == 1) {
        $("#price").text(price.normal.price * price.half.price + " " + "€");
        $("#ageFree, #ageUnder, #mtk, #student, #soldier").prop('disabled', true);
    }else if(mtk == 1) {
        $("#price").text(price.normal.price * price.mtk.price + " " + "€");
        $("#ageUnder, #ageOver, #ageFree, #soldier").prop('disabled', true);
    }else if(student == 1) {
        $("#price").text(price.normal.price * price.student.price + " " + "€");
        $("#ageUnder, #ageOver, #ageFree, #soldier").prop('disabled', true);
    } else if(soldier == 1) {
        $("#price").text(price.normal.price * price.half.price + " " + "€");
        $("#ageUnder, #ageOver, #mtk, #student, #ageFree").prop('disabled', true);
    }
     if(student == 1 && mtk == 1) {
    $("#price").text(price.normal.price * price.student.price * price.mtk.price + " " + "€");
     }

     
});