
var matchGoal = 12;
var coups = 0;
$(document).ready(SetupGame);

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
    matchGoal = 12;
    coups = 0;
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
    });

    $('.card').click(ShowFront);
    $("#victoryText").click(function () {
        location.reload();
    })
}

function ShowFront() {
    /* returner les cartes */
    if ($(this).attr("class") == "card") {

        $(this).addClass("visible");
    }

    /* si deux cartes sont retournées, verifi si le jeu est terminé*/
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
    if ($(".matched").length == matchGoal) {
        $(".victoryFinish").addClass("visible");
    }
}

function SetupGameForBeginner() {
    coups = 0;
    matchGoal = 6;
    $(".game1").empty();
    $(".game1").css("grid-template-columns", "repeat(3, 120px)");
    $(".game1").css("padding-top","50px")
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

    });

    $('.card').click(ShowFront);
    $("#victoryText").click(function () {
        location.reload();
    })
}

function SetupGameForExpert() {
    coups = 0;
    matchGoal = 18;
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