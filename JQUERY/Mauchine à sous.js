var restMoney = 50;
$(document).ready(SetupGame);

function SetupGame() {
    $("#gagnotte").val(restMoney);
}

function ButtonClick() {
    PageReload();
    if ($("#mise").val() == "") {
        alert("Saisir votre mise");
        return;
    }
    else if ($("#mise").val() > restMoney) {
        alert("Vous ne pouvez pas miser plus que ce que vous possèdez");
        return;
    }
    else if($("#mise").val() <= 0){
        alert("Vous ne pouvez pas miser une somme inferieure ou egales a 0");
        return;
    }
    else {
        ScrollAnimation();
    }
}

function MoneyCalculation() {
    if ($("#card11").attr("src") == $("#card22").attr("src") && $("#card22").attr("src") == $("#card33").attr("src")) {
        restMoney = restMoney + 5 * $("#mise").val();
        $("#gagnotte").val(restMoney);
        didGameFinish();
        return;
    }
    else if ($("#card11").attr("src") == $("#card22").attr("src") || $("#card22").attr("src") == $("#card33").attr("src") || $("#card11").attr("src") == $("#card33").attr("src")) {
        restMoney = restMoney + 2 * $("#mise").val();
        $("#gagnotte").val(restMoney);
        didGameFinish();
        return;
    }
    else {
        restMoney = restMoney - $("#mise").val();
        $("#gagnotte").val(restMoney);
        didGameFinish();
    }
}


function didGameFinish() {
    if (restMoney == 0) {
        $(".Finish").addClass("visible");
    }
}

function PageReload() {
    $(".overlaySmall").click(
        function () {
            location.reload();
        }
    );
}

function ScrollAnimation() {

    var cardInterval = 60;
    var timeTerm = 10;
    var numberOfCards = $('#firstCard img').length;
    var card1Item = Math.round(Math.random() * 9);
    var card2Item = Math.round(Math.random() * 9);
    var card3Item = Math.round(Math.random() * 9);

    var infiniteLoop = setInterval(function () {
        $('#firstCard img').eq(card1Item).fadeOut(timeTerm);
        $('#secondCard img').eq(card2Item).fadeOut(timeTerm);
        $('#thirdCard img').eq(card3Item).fadeOut(timeTerm)
        if (card1Item == numberOfCards - 1) {
            card1Item = 0;
        } else {
            card1Item++;
        }
        if (card2Item == numberOfCards - 1) {
            card2Item = 0;
        } else {
            card2Item++;
        }
        if (card3Item == numberOfCards - 1) {
            card3Item = 0;
        } else {
            card3Item++;
        }
        $('#firstCard img').eq(card1Item).fadeIn(timeTerm);
        $('#secondCard img').eq(card2Item).fadeIn(timeTerm);
        $('#thirdCard img').eq(card3Item).fadeIn(timeTerm);
    }, cardInterval);

    setTimeout(function () {
        clearInterval(infiniteLoop);
        $("#card11").attr("src", $('#firstCard img').eq(card1Item).attr("src"));
        $("#card22").attr("src", $('#secondCard img').eq(card2Item).attr("src"));
        $("#card33").attr("src", $('#thirdCard img').eq(card3Item).attr("src"));
        MoneyCalculation();
    }, 1500);


}
