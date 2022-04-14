var click = 0;
var file = true;
var key = 25;
var user_count = 0;
var cser_count = 0;
var computer_count = 0;
var arr_user = [];
var arr_user_a = [];
var arr_computer = [];
var arr_computer_a = [];
var win = 0;
var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];

var arr1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
var i;

var sp1 = true;
var sp2 = true;
var sp3 = true;
var sp4 = true;
var sp5 = true;
var sp6 = true;
var sp7 = true;
var sp8 = true;
var sp9 = true;
var sp10 = true;
var sp11 = true;
var sp12 = true;

var cp1 = true;
var cp2 = true;
var cp3 = true;
var cp4 = true;
var cp5 = true;
var cp6 = true;
var cp7 = true;
var cp8 = true;
var cp9 = true;
var cp10 = true;
var cp11 = true;
var cp12 = true;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function start_game() {
    document.getElementById("loadscreen").style.display = "none";
    document.getElementById("game").style.display = "block";

}

function get(value) {
    click++;
    if (click < 25 && file) {
        var r = "btn" + value;
        document.getElementById(r).disabled = true;
        document.getElementById(r).innerHTML = click;
    } else if (click == 25 && file) {
        var r = "btn" + value;
        document.getElementById(r).disabled = true;
        document.getElementById(r).innerHTML = click;
        document.getElementById("start").style.display = "inline";
        for (i = 1; i < 26; i++) {
            var t1 = "btn" + i;
            var t2 = document.getElementById(t1).innerHTML;
            arr_user.push(t2);
        }
        computer();
        file = false;
        click = 0;
    }
    if (!file && click > 0) {
        color(value);
    }

}

function start() {
    for (i = 1; i < 26; i++) {
        var a = "btn" + i;
        document.getElementById(a).disabled = false;
    }
    document.getElementById("start").style.display = "none";
}

function color(val) {
    var s = "btn" + val;
    var t = document.getElementById(s).innerHTML;
    document.getElementById(s).style.backgroundColor = "#7781FE";
    document.getElementById(s).style.color = "white";
    document.getElementById(s).disabled = true;
    arr_user_a.push(val);
    var u = arr1.indexOf(t);

    var b = arr.indexOf(t);
    var q = Number(b) + Number(1);
    arr_computer_a.push(q);
    var c = "btnc" + q;
    document.getElementById(c).style.backgroundColor = "#7781FE";
    document.getElementById(c).style.color = "white";

    arr1.splice(u, 1);
    key--;

    checkWinner();
    if (win != 1) {
        setTimeout(computer_turn, 500);
    }

}

function computer_turn() {
    var ch1 = arr_computer_a.indexOf(1);
    var ch5 = arr_computer_a.indexOf(5);
    var ch21 = arr_computer_a.indexOf(21);
    var ch25 = arr_computer_a.indexOf(25);
    var ch7 = arr_computer_a.indexOf(7);
    var ch9 = arr_computer_a.indexOf(9);
    var ch17 = arr_computer_a.indexOf(17);
    var ch19 = arr_computer_a.indexOf(19);
    var ch13 = arr_computer_a.indexOf(13);

    var ch6 = arr_computer_a.indexOf(6);
    var ch10 = arr_computer_a.indexOf(10);
    var ch16 = arr_computer_a.indexOf(16);
    var ch20 = arr_computer_a.indexOf(20);

    var ch11 = arr_computer_a.indexOf(11);
    var ch15 = arr_computer_a.indexOf(15);
    var ch18 = arr_computer_a.indexOf(18);


    shuffle(arr1);

    if (ch13 == -1) {
        var k = arr[12];
    } else if (ch1 == -1) {
        var k = arr[0];
    } else if (ch5 == -1) {
        var k = arr[4];
    } else if (ch21 == -1) {
        var k = arr[20];
    } else if (ch25 == -1) {
        var k = arr[24];
    } else if (ch7 == -1) {
        var k = arr[6];
    } else if (ch9 == -1) {
        var k = arr[8];
    } else if (ch17 == -1) {
        var k = arr[16];
    } else if (ch19 == -1) {
        var k = arr[18];
    } else if (ch6 == -1) {
        var k = arr[5];
    } else if (ch10 == -1) {
        var k = arr[9];
    } else if (ch16 == -1) {
        var k = arr[15];
    } else if (ch20 == -1) {
        var k = arr[19];
    } else if (ch11 == -1) {
        var k = arr[10];
    } else if (ch15 == -1) {
        var k = arr[14];
    } else if (ch18 == -1) {
        var k = arr[17];
    } else {
        var k = arr1[0];
    }
    document.getElementById("computer_last").innerHTML = "Last Computer Cut : " + k;

    var b2 = arr.indexOf(k);
    var q2 = Number(b2) + Number(1);
    arr_computer_a.push(q2);
    var c2 = "btnc" + q2;
    document.getElementById(c2).style.backgroundColor = "#7781FE";

    document.getElementById(c2).style.color = "white";

    var box1 = arr_user.indexOf(k);
    var w = Number(box1) + Number(1);
    var c1 = "btn" + w;
    document.getElementById(c1).style.backgroundColor = "#7781FE";

    document.getElementById(c1).style.color = "white";
    document.getElementById(c1).disabled = true;

    arr_user_a.push(w);

    var u1 = arr1.indexOf(k);
    arr1.splice(u1, 1);
    key--;


    checkWinner();

}

function checkWinner() {

    var us1 = arr_user_a.indexOf(1);
    var us2 = arr_user_a.indexOf(2);
    var us3 = arr_user_a.indexOf(3);
    var us4 = arr_user_a.indexOf(4);
    var us5 = arr_user_a.indexOf(5);
    var us6 = arr_user_a.indexOf(6);
    var us7 = arr_user_a.indexOf(7);
    var us8 = arr_user_a.indexOf(8);
    var us9 = arr_user_a.indexOf(9);
    var us10 = arr_user_a.indexOf(10);
    var us11 = arr_user_a.indexOf(11);
    var us12 = arr_user_a.indexOf(12);
    var us13 = arr_user_a.indexOf(13);
    var us14 = arr_user_a.indexOf(14);
    var us15 = arr_user_a.indexOf(15);
    var us16 = arr_user_a.indexOf(16);
    var us17 = arr_user_a.indexOf(17);
    var us18 = arr_user_a.indexOf(18);
    var us19 = arr_user_a.indexOf(19);
    var us20 = arr_user_a.indexOf(20);
    var us21 = arr_user_a.indexOf(21);
    var us22 = arr_user_a.indexOf(22);
    var us23 = arr_user_a.indexOf(23);
    var us24 = arr_user_a.indexOf(24);
    var us25 = arr_user_a.indexOf(25);

    for (i = 1; i < 13; i++) {
        if (user_count < 5) {
            if (us1 != -1 && us2 != -1 && us3 != -1 && us4 != -1 && us5 != -1 && sp1) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp1 = false;
            } else if (us6 != -1 && us7 != -1 && us8 != -1 && us9 != -1 && us10 != -1 && sp2) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp2 = false;
            } else if (us11 != -1 && us12 != -1 && us13 != -1 && us14 != -1 && us15 != -1 && sp3) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp3 = false;
            } else if (us16 != -1 && us17 != -1 && us18 != -1 && us19 != -1 && us20 != -1 && sp4) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp4 = false;
            } else if (us21 != -1 && us22 != -1 && us23 != -1 && us24 != -1 && us25 != -1 && sp5) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp5 = false;
            } else if (us1 != -1 && us6 != -1 && us11 != -1 && us16 != -1 && us21 != -1 && sp6) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp6 = false;
            } else if (us2 != -1 && us7 != -1 && us12 != -1 && us17 != -1 && us22 != -1 && sp7) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp7 = false;
            } else if (us3 != -1 && us8 != -1 && us13 != -1 && us18 != -1 && us23 != -1 && sp8) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp8 = false;
            } else if (us4 != -1 && us9 != -1 && us14 != -1 && us19 != -1 && us24 != -1 && sp9) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp9 = false;
            } else if (us5 != -1 && us10 != -1 && us15 != -1 && us20 != -1 && us25 != -1 && sp10) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp10 = false;
            } else if (us1 != -1 && us7 != -1 && us13 != -1 && us19 != -1 && us25 != -1 && sp11) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp11 = false;
            } else if (us5 != -1 && us9 != -1 && us13 != -1 && us17 != -1 && us21 != -1 && sp12) {
                user_count++;
                var zu = "btnt" + user_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                sp12 = false;
            }
        }
    }
    var cs1 = arr_computer_a.indexOf(1);
    var cs2 = arr_computer_a.indexOf(2);
    var cs3 = arr_computer_a.indexOf(3);
    var cs4 = arr_computer_a.indexOf(4);
    var cs5 = arr_computer_a.indexOf(5);
    var cs6 = arr_computer_a.indexOf(6);
    var cs7 = arr_computer_a.indexOf(7);
    var cs8 = arr_computer_a.indexOf(8);
    var cs9 = arr_computer_a.indexOf(9);
    var cs10 = arr_computer_a.indexOf(10);
    var cs11 = arr_computer_a.indexOf(11);
    var cs12 = arr_computer_a.indexOf(12);
    var cs13 = arr_computer_a.indexOf(13);
    var cs14 = arr_computer_a.indexOf(14);
    var cs15 = arr_computer_a.indexOf(15);
    var cs16 = arr_computer_a.indexOf(16);
    var cs17 = arr_computer_a.indexOf(17);
    var cs18 = arr_computer_a.indexOf(18);
    var cs19 = arr_computer_a.indexOf(19);
    var cs20 = arr_computer_a.indexOf(20);
    var cs21 = arr_computer_a.indexOf(21);
    var cs22 = arr_computer_a.indexOf(22);
    var cs23 = arr_computer_a.indexOf(23);
    var cs24 = arr_computer_a.indexOf(24);
    var cs25 = arr_computer_a.indexOf(25);

    for (i = 1; i < 13; i++) {
        if (cser_count < 5) {
            if (cs1 != -1 && cs2 != -1 && cs3 != -1 && cs4 != -1 && cs5 != -1 && cp1) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp1 = false;
            } else if (cs6 != -1 && cs7 != -1 && cs8 != -1 && cs9 != -1 && cs10 != -1 && cp2) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp2 = false;
            } else if (cs11 != -1 && cs12 != -1 && cs13 != -1 && cs14 != -1 && cs15 != -1 && cp3) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp3 = false;
            } else if (cs16 != -1 && cs17 != -1 && cs18 != -1 && cs19 != -1 && cs20 != -1 && cp4) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp4 = false;
            } else if (cs21 != -1 && cs22 != -1 && cs23 != -1 && cs24 != -1 && cs25 != -1 && cp5) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp5 = false;
            } else if (cs1 != -1 && cs6 != -1 && cs11 != -1 && cs16 != -1 && cs21 != -1 && cp6) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp6 = false;
            } else if (cs2 != -1 && cs7 != -1 && cs12 != -1 && cs17 != -1 && cs22 != -1 && cp7) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp7 = false;
            } else if (cs3 != -1 && cs8 != -1 && cs13 != -1 && cs18 != -1 && cs23 != -1 && cp8) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp8 = false;
            } else if (cs4 != -1 && cs9 != -1 && cs14 != -1 && cs19 != -1 && cs24 != -1 && cp9) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp9 = false;
            } else if (cs5 != -1 && cs10 != -1 && cs15 != -1 && cs20 != -1 && cs25 != -1 && cp10) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp10 = false;
            } else if (cs1 != -1 && cs7 != -1 && cs13 != -1 && cs19 != -1 && cs25 != -1 && cp11) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp11 = false;
            } else if (cs5 != -1 && cs9 != -1 && cs13 != -1 && cs17 != -1 && cs21 != -1 && cp12) {
                cser_count++;
                var zu = "btnct" + cser_count;
                document.getElementById(zu).style.backgroundColor = "#FF6060";
                document.getElementById(zu).style.color = "#fff";
                cp12 = false;
            }
        }
    }

    if (user_count >= 5 && cser_count < 5) {
        document.getElementById("p1").innerHTML = "BINGO ! You Win ( " + user_count + " - " + cser_count + " )";
        win = 1;
    } else if (cser_count >= 5 && user_count < 5) {
        document.getElementById("p1").innerHTML = "OOPs You Loose Soo Close ( " + user_count + " - " + cser_count + " )";
        win = 1;
    } else if (cser_count >= 5 && user_count >= 5) {
        document.getElementById("p1").innerHTML = "WoooW Double BINGO ( " + user_count + " - " + cser_count + " )";
        win = 1;
    }


    if (win == 1) {
        for (i = 1; i < 26; i++) {
            var a = "btn" + i;
            var b = "btnc" + i;
            document.getElementById(a).disabled = true;
            document.getElementById(b).disabled = true;
        }
        document.getElementById("computer").style.display = "block";
        document.getElementById("p2").innerHTML = "(Scroll Down to See Computer Bingo Box) ";
        document.getElementById("res").click();
    }


}

function computer() {
    shuffle(arr);
    for (i = 1; i < 26; i++) {
        var p = "btnc" + i;
        document.getElementById(p).innerHTML = arr[i - 1];
    }
}