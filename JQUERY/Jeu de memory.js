
var coups = 0;
$(document).ready(SetupGame);

function click1() {
    if ($("#debutant").is(":checked")) {

    }
    else if ($("#confirm").is(":checked")) {
        /* laisser le car il y a déjà 12 cartes affichées à l'écran*/
    }
    else {

    }
};

function SetupGame() {
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

    /* if two card are flipped, check! */


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
                $(".card.visible").each(
                    function () {
                        $(this).removeClass("visible");
                    }
                )
            }, 1000);
        }
    }
}

function GameOver() {
    if ($(".matched").length == 12) {
        $(".victoryFinish").addClass("visible");
    }
}
