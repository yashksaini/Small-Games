var rad = 80;
var cad = 1;
var rad1 = 60;
var cad1 = 1;

var t = setInterval(move, 8);
var p = setInterval(move1, 11);

function start() {
    clearInterval(t);
    clearInterval(p);
    document.getElementById("loadscreen").style.display = "none";
    document.getElementById("Music_Player").style.display = "block";
}

function move() {
    rad--;
    if (rad > 1) {
        document.getElementById('c1').style.height = rad + "px";
        document.getElementById('c3').style.height = 80 - rad + "px";

    } else if (rad < 2 && cad > 0) {
        cad = 80 + rad;

        document.getElementById('c1').style.height = 80 - cad + "px";
        document.getElementById('c3').style.height = cad + "px";

    } else {
        rad = 80;
        cad = 1;
    }

}

function move1() {
    rad1--;
    if (rad1 > 1) {
        document.getElementById('c2').style.height = rad1 + "px";
        document.getElementById('c4').style.height = 60 - rad1 + "px";

    } else if (rad1 < 2 && cad1 > 0) {
        cad1 = 60 + rad1;

        document.getElementById('c2').style.height = 60 - cad1 + "px";
        document.getElementById('c4').style.height = cad1 + "px";

    } else {
        rad1 = 60;
        cad1 = 1;
    }

}

var current_song_no = 1;

var audio_id = document.getElementById("current_audio");
var slider = document.getElementById("song_length");
slider.oninput = function() {
    audio_id.currentTime = this.value;
}

function next(value) {
    if (value == 1) {
        if (current_song_no == 1) {
            var x = "songs/12.mp3";
            current_song_no = 12;
            document.getElementById("current_audio").src = x;
            play(1);
        } else {
            current_song_no = current_song_no - 1;
            var x = "songs/" + current_song_no + ".mp3";
            document.getElementById("current_audio").src = x;
            play(1);
        }
    } else if (value == 2) {
        if (current_song_no == 12) {
            var x = "songs/1.mp3";
            current_song_no = 1;
            document.getElementById("current_audio").src = x;
            play(1);
        } else {
            current_song_no++;
            var x = "songs/" + current_song_no + ".mp3";
            document.getElementById("current_audio").src = x;
            play(1);

        }
    }
}

function refresh() {
    var audio_id = document.getElementById("current_audio");
    var audio_length = audio_id.duration;

    document.getElementById("song_length").max = audio_length;
    document.getElementById("song_length").value = audio_id.currentTime;

    audio_min = parseInt(audio_length / 60);
    over_sec = parseInt(audio_length % 60);

    if (audio_min < 10) {
        audio_min = "0" + audio_min;
    }
    if (over_sec < 10) {
        over_sec = "0" + over_sec;
    }

    current_min = parseInt(audio_id.currentTime / 60);
    current_sec = parseInt(audio_id.currentTime % 60);

    if (current_sec < 10) {
        current_sec = "0" + current_sec;
    }
    if (current_min < 10) {
        current_min = "0" + current_min;
    }
    document.getElementById("total_time").innerHTML = audio_min + ":" + over_sec;
    document.getElementById("time_laps").innerHTML = current_min + ":" + current_sec;

    if (audio_length == audio_id.currentTime) {
        next(2);
    }

}

function mute_song(value) {
    var audio_id = document.getElementById("current_audio");
    if (value == 1) {
        audio_id.muted = true;
        document.getElementById("mute_btn").style.display = "inline";
        document.getElementById("vol_btn").style.display = "none";
    } else if (value == 2) {
        audio_id.muted = false;
        document.getElementById("mute_btn").style.display = "none";
        document.getElementById("vol_btn").style.display = "inline";
    }
}

function play(value) {
    var p = setInterval(refresh, 100);
    var audio_id = document.getElementById("current_audio");
    if (value == 1) {
        document.getElementById("play_song").style.display = "none";
        document.getElementById("pause_song").style.display = "inline";
        audio_id.play();
    } else if (value == 2) {
        document.getElementById("pause_song").style.display = "none";
        document.getElementById("play_song").style.display = "inline";
        audio_id.pause();
    }
    var y = "song" + current_song_no;
    document.getElementById("current_detail").innerHTML = document.getElementById(y).innerHTML;
}

function change_song(value) {
    document.documentElement.scrollTop = 0;
    var x = "songs/" + value + ".mp3";
    current_song_no = value;
    document.getElementById("current_audio").src = x;
    play(1);
}