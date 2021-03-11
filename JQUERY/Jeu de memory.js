
var coups = 0;
$(document).ready(SetupGame);
// $(".choix").click(SelectLevel); this line executes faster than Setupgame and makes an error(Full blue line)

function SelectLevel() {
    if ($("#debutant").is(":checked")) {
        SetupGameForBeginner();
    }
    else if ($("#confirm").is(":checked")) {
        SetupGame();
    }
    else {
        SetupGameForExpert();
    }
};

function SetupGame() {
    var coups = 0;
    $(".game1").css("grid-template-columns", "repeat(4, auto)");
    $("#filps").val(coups);
    $(".game1").empty();
    var txt1 = "<div class ='card'>" +
        "<div class ='card-back card-face'>" +
        "<img class ='card-backImg' src ='../IMG/deck_4.png'>" +
        "</div>" +
        "<div class ='card-front card-face'>" +
        "<img class ='frontSideEmpty' src ='../IMG/card_empty_large.png'>" +
        "<img class ='frontPicture' src ='../IMG/008-donut.png'>" + "</div></div>"
    
    for (i = 0; i < 12; i++) {
        $(".game1").append(txt1);
    }

    var numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
    var random = 0;
    var temp = 0;
    for (i = 1; i < numbers.length; i++) {
        random = Math.round(Math.random() * i);
        temp = numbers[i];
        /* actually I've learned an important concept of coding. 
        when you give "b = 3" inequality, 3 doesn't change into b 
        only left side be affected by right side and right side doesn't change.
        So in this case we put aside the number we had before in array.
        We could use the same function as what the professer gave us but it can induce some errors */
        numbers[i] = numbers[random];
        numbers[random] = temp;
    }
    console.log(numbers);
    $('.frontPicture').each(function (index) { /* no need to instanciate index cause it's a function creation */
        $(this).parent('.card-front').parent('.card').attr('id', numbers[index])

        if (numbers[index] == 1) {
            $(this).attr('src', '../IMG/008-donut.png');
        }
        else if (numbers[index] == 2) {
            $(this).attr('src', '../IMG/012-hamburger.png');
        }
        else if (numbers[index] == 3) {
            $(this).attr('src', '../IMG/014-ice cream.png');
        }
        else if (numbers[index] == 4) {
            $(this).attr('src', '../IMG/019-pizza.png');
        }
        else if (numbers[index] == 5) {
            $(this).attr('src', '../IMG/021-sausage.png');
        }
        else if (numbers[index] == 6) {
            $(this).attr('src', '../IMG/023-taco.png');
        }
    });

    $('.card').click(ShowFront);
    $("#victoryText").click(function () {
        location.reload();
    })
}

function ShowFront() {
    /* flipping card */
    if ($(this).attr("class") == "card") {

        $(this).addClass("visible");
    }

    /* if two cards are flipped, check! */


    if ($(".card.visible").length == 2) {
        coups++;
        $("#filps").val(coups);
        if ($(".card.visible").first().attr("id") == $(".card.visible").last().attr("id")) {
            $(".card.visible").each(function () {
                $(this).addClass("matched");
                $(this).removeClass("visible");
                $(this).addClass("visibleFix");
            })
            GameOver();
        }
        else {
            setTimeout(function () {
                $(".card.visible").removeClass("visible");
            }, 1000);
        }
    }
}

function GameOver() {
    if ($(".matched").length == 12) {  //이부분 고쳐야함 variable로 놓고 바꾸면됨
        $(".victoryFinish").addClass("visible");
    }
}

function SetupGameForBeginner() {
    var coups = 0;
    $(".game1").empty();
    $("#filps").val(coups);
    var txt1 = "<div class ='card'>" +
    "<div class ='card-back card-face'>" +
    "<img class ='card-backImg' src ='../IMG/deck_4.png'>" +
    "</div>" +
    "<div class ='card-front card-face'>" +
    "<img class ='frontSideEmpty' src ='../IMG/card_empty_large.png'>" +
    "<img class ='frontPicture' src ='../IMG/008-donut.png'>" + "</div></div>"
    for (i = 0; i < 6; i++) {
        $(".game1").append(txt1);
    }

    var numbers = [1, 1, 2, 2, 3, 3]
    var random = 0;
    var temp = 0;
    for (i = 1; i < numbers.length; i++) {
        random = Math.round(Math.random() * i);
        temp = numbers[i];
        numbers[i] = numbers[random];
        numbers[random] = temp;
    }
    console.log(numbers);
    $('.frontPicture').each(function (index) { /* no need to instanciate index cause it's a function creation */
        $(this).parent('.card-front').parent('.card').attr('id', numbers[index])

        if (numbers[index] == 1) {
            $(this).attr('src', '../IMG/008-donut.png');
        }
        else if (numbers[index] == 2) {
            $(this).attr('src', '../IMG/012-hamburger.png');
        }
        else if (numbers[index] == 3) {
            $(this).attr('src', '../IMG/014-ice cream.png');
        }

    });

    $('.card').click(ShowFront);
    $("#victoryText").click(function () {
        location.reload();
    })
}

function SetupGameForExpert() {
    var coups = 0;
    $(".game1").empty();
    $(".game1").css("grid-template-columns", "repeat(6, auto)");
    $("#filps").val(coups);
    
    var txt1 = "<div class ='card'>" +
    "<div class ='card-back card-face'>" +
    "<img class ='card-backImg' src ='../IMG/deck_4.png'>" +
    "</div>" +
    "<div class ='card-front card-face'>" +
    "<img class ='frontSideEmpty' src ='../IMG/card_empty_large.png'>" +
    "<img class ='frontPicture' src ='../IMG/008-donut.png'>" + "</div></div>"
    for (i = 0; i < 18; i++) {
        $(".game1").append(txt1);
    }

    var numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
    var random = 0;
    var temp = 0;
    for (i = 1; i < numbers.length; i++) {
        random = Math.round(Math.random() * i);
        temp = numbers[i];
        numbers[i] = numbers[random];
        numbers[random] = temp;
    }
    console.log(numbers);
    $('.frontPicture').each(function (index) { 
        $(this).parent('.card-front').parent('.card').attr('id', numbers[index])

        if (numbers[index] == 1) {
            $(this).attr('src', '../IMG/008-donut.png');
        }
        else if (numbers[index] == 2) {
            $(this).attr('src', '../IMG/012-hamburger.png');
        }
        else if (numbers[index] == 3) {
            $(this).attr('src', '../IMG/014-ice cream.png');
        }
        else if (numbers[index] == 4) {
            $(this).attr('src', '../IMG/019-pizza.png');
        }
        else if (numbers[index] == 5) {
            $(this).attr('src', '../IMG/021-sausage.png');
        }
        else if (numbers[index] == 6) {
            $(this).attr('src', '../IMG/023-taco.png');
        }
        else if (numbers[index] == 7) {
            $(this).attr('src', '../IMG/003-beer.png');
        }
        else if (numbers[index] == 8) {
            $(this).attr('src', '../IMG/005-chicken.png');
        }
        else if (numbers[index] == 9) {
            $(this).attr('src', '../IMG/024-takoyaki.png');
        }
    });

    $('.card').click(ShowFront);
    $("#victoryText").click(function () {
        location.reload();
    })
}