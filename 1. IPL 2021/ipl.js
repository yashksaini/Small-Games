      var team1 = [];
      var team2 = [];
      var team1_bowl = [];
      var team2_bowl = [];
      var team1_id = [];
      var team2_id = [];
      var inngs = 1;
      var curr_ov_by = -1;
      var curr_ov = [];
      var curr_ov_color = [];
      var inn_overs = 0;
      var ov_complete = 0;

      var balls_left = 120;
      var runs_to_chase;

      var ov_ball = 0;
      var inngs_over = 0;

      var check_last_bowler;

      var batting_first = [];
      var batting_sec = [];
      var bowling_first = [];
      var bowling_sec = [];

      var first_inn_run = 0;
      var first_inn_w = 0;
      var sec_inn_run = 0;
      var sec_inn_w = 0;
      var first_inn_ball = 0;
      var sec_inn_ball = 0;
      var p_ship_ball = 0;
      var p_ship_run = 0;

      var curr_bowler_no;

      var last_over_by;

      var ball_number = 0;
      var strike = 1;

      var batsman = [];
      var bowler = [];

      var batsman1 = [];
      var bowler1 = [];

      var sn = 0;
      var myArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 3, 3, 4, 6, 6, 6, 4, 4, 3, 3, 4, 6, 'W', 'W', 'W'];

      var batting1 = 0;
      var batting2 = 1;
      var curr_batsman = 1;

      var rad = 30;
      var cad = 1;
      var toss_winner;
      var toss_loser;
      var teams = ["CSK", "RCB", "DC", "RR", "KKR", "PBKS", "SRH", "MI"];
      var type_player = ["WK", "Batsman", "All Rounder", "Bowler"];
      var t = setInterval(move, 18);

      function change() {

          var p = setTimeout(stop, 3000);
      }

      function move() {
          rad--;
          if (rad > 1) {
              document.getElementById('c1').style.width = rad + "px";
              document.getElementById('c1').style.height = rad + "px";

              document.getElementById('c3').style.width = 30 - rad + "px";
              document.getElementById('c3').style.height = 30 - rad + "px";

          } else if (rad < 2 && cad > 0) {
              cad = 30 + rad;

              document.getElementById('c1').style.width = 30 - cad + "px";
              document.getElementById('c1').style.height = 30 - cad + "px";

              document.getElementById('c3').style.width = cad + "px";
              document.getElementById('c3').style.height = cad + "px";

          } else {
              rad = 30;
              cad = 1;
          }

      }

      function stop() {
          document.getElementById("loadpage").style.display = "none";

          document.getElementById("team_select").style.display = "block";
          clearInterval(t);
      }


      var a, b;
      var team =
          '{"CSK":[' +
          '{"Name":"Faf du Plessis","Type":"1","overseas":"1" },' +
          '{"Name":"Dwayne Bravo","Type":"2","overseas":"1" },' +
          '{"Name":"Sam Curran","Type":"2","overseas":"1" },' +
          '{"Name":"Ravindra Jadeja","Type":"2","overseas":"0" },' +
          '{"Name":"MS Dhoni","Type":"0","overseas":"0" },' +
          '{"Name":"Robin Uthappa","Type":"0","overseas":"0" },' +
          '{"Name":"N Jagadeesan","Type":"0","overseas":"0" },' +
          '{"Name":"Ambati Rayudu","Type":"1","overseas":"0" },' +
          '{"Name":"Suresh Raina","Type":"2","overseas":"0" },' +
          '{"Name":"Cheteshwar Pujara","Type":"1","overseas":"0" },' +
          '{"Name":"Krishnappa Gowtham","Type":"2","overseas":"0" },' +
          '{"Name":"Moeen Ali ","Type":"2","overseas":"1" },' +
          '{"Name":"Josh Hazlewood","Type":"3","overseas":"1" },' +
          '{"Name":"Lungi Ngidi ","Type":"3","overseas":"1" },' +
          '{"Name":"Shardul Thakur","Type":"3","overseas":"0" },' +
          '{"Name":"Deepak Chahar","Type":"3","overseas":"0" },' +
          '{"Name":"Imran Tahir","Type":"3","overseas":"1" },' +
          '{"Name":"Mitchell Santner","Type":"2","overseas":"1" },' +
          '{"Name":"Ruturaj Gaikwad","Type":"1","overseas":"0" },' +
          '{"Name":"Karn Sharma","Type":"3","overseas":"0" },' +
          '{"Name":"Bhagath Verma","Type":"2","overseas":"0" },' +
          '{"Name":"Harishankar Reddy","Type":"3","overseas":"0" },' +
          '{"Name":"KM Asif","Type":"3","overseas":"0" },' +
          '{"Name":"R Sai Kishore","Type":"3","overseas":"0" },' +
          '{"Name":"Hari Nishanth","Type":"1","overseas":"0" }],' +
          '"RCB":[' +
          '{"Name":"Virat Kohli","Type":"1","overseas":"0" },' +
          '{"Name":"AB de Villiers","Type":"0","overseas":"1" },' +
          '{"Name":"Devdutt Padikkal","Type":"1","overseas":"0" },' +
          '{"Name":"Mohammed Siraj","Type":"3","overseas":"0" },' +
          '{"Name":"Washington Sundar","Type":"2","overseas":"0" },' +
          '{"Name":"Yuzvendra Chahal","Type":"3","overseas":"0" },' +
          '{"Name":"Pavan Deshpande","Type":"1","overseas":"0" },' +
          '{"Name":"Josh Philippe","Type":"0","overseas":"1" },' +
          '{"Name":"Shahbaz Ahmed","Type":"2","overseas":"0" },' +
          '{"Name":"Adam Zampa","Type":"3","overseas":"1" },' +
          '{"Name":"Rajat Patidar","Type":"1","overseas":"0" },' +
          '{"Name":"Kane Richardson ","Type":"3","overseas":"1" },' +
          '{"Name":"Harshal Patel","Type":"3","overseas":"0" },' +
          '{"Name":"Daniel Sams","Type":"2","overseas":"1" },' +
          '{"Name":"Navdeep Saini","Type":"3","overseas":"0" },' +
          '{"Name":"Glenn Maxwell ","Type":"2","overseas":"1" },' +
          '{"Name":"Sachin Baby","Type":"1","overseas":"0" },' +
          '{"Name":"Kyle Jamieson","Type":"3","overseas":"1" },' +
          '{"Name":"Mohammed Azharuddeen","Type":"0","overseas":"0" },' +
          '{"Name":"Daniel Christian","Type":"2","overseas":"1" },' +
          '{"Name":"Suyash Prabhudessai","Type":"1","overseas":"0" },' +
          '{"Name":"Srikar Bharat","Type":"0","overseas":"0" }],' +
          '"DC":[' +
          '{"Name":"Shikhar Dhawan","Type":"1","overseas":"0" },' +
          '{"Name":"Prithvi Shaw","Type":"1","overseas":"0" },' +
          '{"Name":"Ajinkya Rahane","Type":"1","overseas":"0" },' +
          '{"Name":"Shreyas Iyer","Type":"1","overseas":"0" },' +
          '{"Name":"Rishabh Pant","Type":"0","overseas":"0" },' +
          '{"Name":"Shimron Hetmyer","Type":"1","overseas":"1" },' +
          '{"Name":"Marcus Stoinis","Type":"2","overseas":"1" },' +
          '{"Name":"Chris Woakes","Type":"2","overseas":"1" },' +
          '{"Name":"Ravichandran Ashwin","Type":"2","overseas":"0" },' +
          '{"Name":"Axar Patel","Type":"2","overseas":"0" },' +
          '{"Name":"Amit Mishra","Type":"3","overseas":"0" },' +
          '{"Name":"Lalit Yadav","Type":"2","overseas":"0" },' +
          '{"Name":"Kagiso Rabada","Type":"3","overseas":"1" },' +
          '{"Name":"Anrich Nortje","Type":"3","overseas":"1" },' +
          '{"Name":"Ishant Sharma","Type":"3","overseas":"0" },' +
          '{"Name":"Avesh Khan","Type":"3","overseas":"0" },' +
          '{"Name":"Steven Smith ","Type":"1","overseas":"1" },' +
          '{"Name":"Umesh Yadav","Type":"3","overseas":"0" },' +
          '{"Name":"Sam Billings ","Type":"0","overseas":"1" },' +
          '{"Name":"Tom Curran","Type":"2","overseas":"1" },' +
          '{"Name":"Ripal Patel","Type":"3","overseas":"0" },' +
          '{"Name":"Vishnu Vinod ","Type":"0","overseas":"0" },' +
          '{"Name":"Manimaran Siddharth","Type":"3","overseas":"0" },' +
          '{"Name":"Lukman Meriwala","Type":"3","overseas":"0" }],' +
          '"RR":[' +
          '{"Name":"Sanju Samson","Type":"0","overseas":"0" },' +
          '{"Name":"Ben Stokes","Type":"2","overseas":"1" },' +
          '{"Name":"Jofra Archer","Type":"3","overseas":"1" },' +
          '{"Name":"Jos Buttler","Type":"0","overseas":"1" },' +
          '{"Name":"Shivam Dube","Type":"2","overseas":"0" },' +
          '{"Name":"Andrew Tye","Type":"3","overseas":"1" },' +
          '{"Name":"David Miller","Type":"1","overseas":"1" },' +
          '{"Name":"Chris Morris","Type":"2","overseas":"1" },' +
          '{"Name":"Mahipal Lomror","Type":"2","overseas":"0" },' +
          '{"Name":"Manan Vohra","Type":"1","overseas":"0" },' +
          '{"Name":"Rahul Tewatia","Type":"2","overseas":"0" },' +
          '{"Name":"Riyan Parag","Type":"1","overseas":"0" },' +
          '{"Name":"Jaydev Unadkat","Type":"3","overseas":"0" },' +
          '{"Name":"Shreyas Gopal","Type":"2","overseas":"0" },' +
          '{"Name":"Yashasvi Jaiswal","Type":"1","overseas":"0" },' +
          '{"Name":"Anuj Rawat","Type":"0","overseas":"0" },' +
          '{"Name":"Kartik Tyagi ","Type":"3","overseas":"0" },' +
          '{"Name":"Mayank Markande","Type":"3","overseas":"0" },' +
          '{"Name":"Mustafizur Rahman ","Type":"3","overseas":"1" },' +
          '{"Name":"Chetan Sakariya","Type":"3","overseas":"0" },' +
          '{"Name":"KC Cariappa","Type":"3","overseas":"0" },' +
          '{"Name":"Liam Livingstone","Type":"1","overseas":"1" },' +
          '{"Name":"Kuldip Yadav","Type":"3","overseas":"0" },' +
          '{"Name":"Akash Singh","Type":"1","overseas":"0" }],' +
          '"KKR":[' +
          '{"Name":"Shubman Gill","Type":"1","overseas":"0" },' +
          '{"Name":"Tim Seifert","Type":"0","overseas":"1" },' +
          '{"Name":"Rahul Tripathi","Type":"1","overseas":"0" },' +
          '{"Name":"Rinku Singh","Type":"1","overseas":"0" },' +
          '{"Name":"Dinesh Karthik","Type":"0","overseas":"0" },' +
          '{"Name":"Eoin Morgan","Type":"1","overseas":"1" },' +
          '{"Name":"Andre Russell","Type":"2","overseas":"1" },' +
          '{"Name":"Sunil Narine","Type":"3","overseas":"1" },' +
          '{"Name":"Varun Chakravarthy","Type":"3","overseas":"0" },' +
          '{"Name":"Kuldeep Yadav","Type":"3","overseas":"0" },' +
          '{"Name":"Pat Cummins","Type":"3","overseas":"1" },' +
          '{"Name":"Lockie Ferguson","Type":"3","overseas":"1" },' +
          '{"Name":"Kamlesh Nagarkoti","Type":"3","overseas":"0" },' +
          '{"Name":"Shivam Mavi","Type":"2","overseas":"0" },' +
          '{"Name":"Sandeep Warrier","Type":"3","overseas":"0" },' +
          '{"Name":"Prasidh Krishna","Type":"3","overseas":"0" },' +
          '{"Name":"Shakib Al Hasan ","Type":"2","overseas":"1" },' +
          '{"Name":"Nitish Rana","Type":"1","overseas":"0" },' +
          '{"Name":"Sheldon Jackson ","Type":"0","overseas":"0" },' +
          '{"Name":"Vaibhav Arora","Type":"3","overseas":"0" },' +
          '{"Name":"Karun Nair","Type":"1","overseas":"0" },' +
          '{"Name":"Harbhajan Singh","Type":"3","overseas":"0" },' +
          '{"Name":"Ben Cutting","Type":"2","overseas":"1" },' +
          '{"Name":"Pawan Negi","Type":2,"overseas":"0" },' +
          '{"Name":"Venkatesh Iyer","Type":"3","overseas":"0" }],' +
          '"PBKS":[' +
          '{"Name":"Chris Gayle","Type":"1","overseas":"1" },' +
          '{"Name":"Nicholas Pooran","Type":"0","overseas":"1" },' +
          '{"Name":"KL Rahul","Type":"0","overseas":"0" },' +
          '{"Name":"Mayank Agarwal","Type":"1","overseas":"0" },' +
          '{"Name":"Mandeep Singh","Type":"1","overseas":"0" },' +
          '{"Name":"Dawid Malan","Type":"1","overseas":"1" },' +
          '{"Name":"Arshdeep Singh","Type":"3","overseas":"0" },' +
          '{"Name":"Darshan Nalkande","Type":"3","overseas":"0" },' +
          '{"Name":"Simran Singh","Type":"0","overseas":"0" },' +
          '{"Name":"Saurabh Kumar","Type":"2","overseas":"0" },' +
          '{"Name":"Harpreet Brar","Type":"2","overseas":"0" },' +
          '{"Name":"Ravi Bishnoi","Type":"3","overseas":"0" },' +
          '{"Name":"Chris Jordan ","Type":"2","overseas":"1" },' +
          '{"Name":"Mohammed Shami","Type":"3","overseas":"0" },' +
          '{"Name":"Deepak Hooda","Type":"2","overseas":"0" },' +
          '{"Name":"Murugan Ashwin","Type":"3","overseas":"0" },' +
          '{"Name":"Sarfaraz Khan ","Type":"1","overseas":"0" },' +
          '{"Name":"Ishan Porel","Type":"3","overseas":"0" },' +
          '{"Name":"Jhye Richardson ","Type":"2","overseas":"1" },' +
          '{"Name":"Shahrukh Khan","Type":"2","overseas":"0" },' +
          '{"Name":"Riley Meredith","Type":"3","overseas":"1" },' +
          '{"Name":"Moises Henriques","Type":"2","overseas":"1" },' +
          '{"Name":"Jalaj Saxena","Type":"2","overseas":"0" },' +
          '{"Name":"Utkarsh Singh","Type":3,"overseas":"0" },' +
          '{"Name":"Fabian Allen ","Type":"2","overseas":"1" }],' +
          '"SRH":[' +
          '{"Name":"David Warner","Type":"1","overseas":"1" },' +
          '{"Name":"Kane Williamson","Type":"1","overseas":"1" },' +
          '{"Name":"Priyam Garg","Type":"1","overseas":"0" },' +
          '{"Name":"Abhishek Sharma","Type":"2","overseas":"0" },' +
          '{"Name":"Abdul Samad","Type":"1","overseas":"0" },' +
          '{"Name":"Mohammad Nabi","Type":"2","overseas":"1" },' +
          '{"Name":"Mitchell Marsh","Type":"2","overseas":"1" },' +
          '{"Name":"Wriddhiman Saha","Type":"0","overseas":"0" },' +
          '{"Name":"Manish Pandey","Type":"1","overseas":"0" },' +
          '{"Name":"Jonny Bairstow","Type":"0","overseas":"1" },' +
          '{"Name":"Shreevats Goswami","Type":"0","overseas":"0" },' +
          '{"Name":"Shahbaz Nadeem","Type":"3","overseas":"0" },' +
          '{"Name":"Bhuvneshwar Kumar","Type":"3","overseas":"0" },' +
          '{"Name":"Siddarth Kaul","Type":"3","overseas":"0" },' +
          '{"Name":"Jason Holder ","Type":"2","overseas":"1" },' +
          '{"Name":"Sandeep Sharma","Type":"3","overseas":"0" },' +
          '{"Name":"Vijay Shankar ","Type":"2","overseas":"0" },' +
          '{"Name":"Virat Singh","Type":"1","overseas":"0" },' +
          '{"Name":"Rashid Khan  ","Type":"3","overseas":"1" },' +
          '{"Name":"Basil Thampi","Type":"3","overseas":"0" },' +
          '{"Name":"T Natarajan","Type":"3","overseas":"0" },' +
          '{"Name":"Khaleel Ahmed","Type":"3","overseas":"0" },' +
          '{"Name":"Jagadeesha Suchith","Type":"3","overseas":"0" },' +
          '{"Name":"Kedar Jadhav","Type":2,"overseas":"0" },' +
          '{"Name":"Mujeeb Ur Rahman","Type":"3","overseas":"1" }],' +
          '"MI":[' +
          '{"Name":"Rohit Sharma","Type":"1","overseas":"0" },' +
          '{"Name":"Aditya Tare","Type":"0","overseas":"0" },' +
          '{"Name":"Quinton de Kock","Type":"0","overseas":"1" },' +
          '{"Name":"Suryakumar Yadav","Type":"1","overseas":"0" },' +
          '{"Name":"Ishan Kishan","Type":"0","overseas":"0" },' +
          '{"Name":"Hardik Pandya","Type":"2","overseas":"0" },' +
          '{"Name":"Anmolpreet Singh","Type":"1","overseas":"0" },' +
          '{"Name":"Dhawal Kulkarni","Type":"3","overseas":"0" },' +
          '{"Name":"Rahul Chahar","Type":"3","overseas":"0" },' +
          '{"Name":"Anukul Roy","Type":"2","overseas":"0" },' +
          '{"Name":"Jasprit Bumrah","Type":"3","overseas":"0" },' +
          '{"Name":"Kieron Pollard","Type":"2","overseas":"1" },' +
          '{"Name":"Jayant Yadav","Type":"3","overseas":"0" },' +
          '{"Name":"Krunal Pandya","Type":"2","overseas":"0" },' +
          '{"Name":"Trent Boult","Type":"3","overseas":"1" },' +
          '{"Name":"Chris Lynn","Type":"1","overseas":"1" },' +
          '{"Name":"Saurabh Tiwary ","Type":"1","overseas":"0" },' +
          '{"Name":"Mohsin Khan","Type":"3","overseas":"0" },' +
          '{"Name":"Adam Milne","Type":"3","overseas":"1" },' +
          '{"Name":"Nathan Coulter-Nile","Type":"3","overseas":"1" },' +
          '{"Name":"James Neesham","Type":"2","overseas":"1" },' +
          '{"Name":"Marco Jansen","Type":"2","overseas":"1" },' +
          '{"Name":"Piyush Chawla","Type":"2","overseas":"0" },' +
          '{"Name":"Yudhvir Singh","Type":3,"overseas":"0" },' +
          '{"Name":"Arjun Tendulkar ","Type":"2","overseas":"0" }]}';


      obj = JSON.parse(team);


      function select_teams() {
          a = document.getElementById("p_1_team").value;
          b = document.getElementById("p_2_team").value;
          if (a == b) {
              alert("Please Select Different Teams");
          } else {
              document.getElementById("team_select").style.display = "none";
              document.getElementById("p_1team").innerHTML = teams[a - 1];
              document.getElementById("p_2team").innerHTML = teams[b - 1];
              document.getElementById("toss").style.display = "block";
          }
      }

      function toss() {
          var toss = Math.floor(Math.random() * 2) + 1;
          document.getElementById("toss_win").style.display = "block";
          if (toss == 1) {
              document.getElementById("toss_win").innerHTML = teams[a - 1] + " ( Player 1 WON the toss )";
              toss_winner = teams[a - 1];
          } else {
              document.getElementById("toss_win").innerHTML = teams[b - 1] + " ( Player 2 WON the toss )";
              toss_winner = teams[b - 1];
          }
          document.getElementById("toss_btn").style.display = "none";
          document.getElementById("toss_bat").style.display = "inline";
          document.getElementById("toss_bowl").style.display = "inline";


      }
      var bat_first;
      var bowl_first;

      function play(value) {
          document.getElementById("play_squad").style.display = "inline";
          document.getElementById("toss").style.display = "none";
          if (value == 1) {
              document.getElementById("toss_det").innerHTML = toss_winner + " won the toss and decided to Bat First ";
              if (toss_winner == teams[a - 1]) {
                  bat_first = teams[a - 1];
                  bowl_first = teams[b - 1];
              } else if (toss_winner == teams[b - 1]) {
                  bat_first = teams[b - 1];
                  bowl_first = teams[a - 1];
              }
          } else {
              document.getElementById("toss_det").innerHTML = toss_winner + " won the toss and decided to Bowl First ";
              if (toss_winner == teams[a - 1]) {
                  bat_first = teams[b - 1];
                  bowl_first = teams[a - 1];
              } else if (toss_winner == teams[b - 1]) {
                  bat_first = teams[a - 1];
                  bowl_first = teams[b - 1];
              }
          }
          document.getElementById("select_t_p").innerHTML = "Player 1 ( " + teams[a - 1] + " ) Select Playing 11";
          curr_team(teams[a - 1]);

      }

      function curr_team(value) {

          for (var i = 0; i < obj[value].length; i++) {
              var y = i + 1;
              var x = "p" + y;
              var z = obj[value][i].Type;
              var w = obj[value][i].overseas;
              if (w == 0) {
                  document.getElementById(x).innerHTML = obj[value][i].Name + " <br> " + "<span style='color:red;'>" + type_player[z] + "</span>";
              } else {
                  document.getElementById(x).innerHTML = obj[value][i].Name + "<span style='color:green;font-size:16px;'>*</span> <br> " + "<span style='color:red;'>" + type_player[z] + "</span>";
              }
          }
          document.getElementById("snb").disabled = true;

      }

      function select_player(btn) {
          var p_s = "p" + btn;
          var kite = 0;



          document.getElementById(p_s).style.display = "none";

          for (var i = 1; i < 12; i++) {
              var sel_p = "cp" + i;
              var p_id = "pid" + i;
              var c_list = document.getElementById(sel_p).innerHTML;

              if (c_list == "") {
                  document.getElementById(sel_p).innerHTML = document.getElementById(p_s).innerHTML;
                  document.getElementById(p_id).innerHTML = btn;
                  i = 15;
              }

          }

          for (i = 1; i < 12; i++) {
              var to = "cp" + i;
              var z = document.getElementById(to).innerHTML;
              if (z === "") {
                  kite++;
              }
              document.getElementById("para").innerHTML = "Players Left - " + kite;
          }

          if (kite != 0) {
              for (i = 1; i < 26; i++) {
                  var too = "p" + i;
                  document.getElementById(too).style.pointerEvents = "auto";
                  document.getElementById(too).style.opacity = "1";
              }
          } else {
              for (i = 1; i < 26; i++) {
                  var too = "p" + i;
                  document.getElementById(too).style.pointerEvents = "none";
                  document.getElementById(too).style.opacity = "0.5";
              }
          }

          var count_over = $('#playing_list').find(":contains('*')").length;

          var count_batsman = $('#playing_list').find(":contains('Batsman')").length + $('#playing_list').find(":contains('All Rounder')").length + $('#playing_list').find(":contains('WK')").length;

          var count_bowler = $('#playing_list').find(":contains('Bowler')").length + $('#playing_list').find(":contains('All Rounder')").length;

          var count_WK = $('#playing_list').find(":contains('WK')").length;
          document.getElementById("c_overseas").innerHTML = count_over / 2;
          document.getElementById("c_batsman").innerHTML = count_batsman / 2;
          document.getElementById("c_bowler").innerHTML = count_bowler / 2;
          document.getElementById("c_wk").innerHTML = count_WK / 2;

          check_team_con();
      }


      function dselect(value) {

          var ds = "pid" + value;
          var dp = "cp" + value;
          var tooo = document.getElementById(dp).innerHTML;
          if (tooo != 0) {
              var dv = document.getElementById(ds).innerHTML;
              var rm = "p" + dv;
              var kite = 0;

              document.getElementById(rm).style.display = "inline";

              document.getElementById(dp).innerHTML = "";
              document.getElementById(ds).innerHTML = "";

              for (i = 1; i < 12; i++) {
                  var to = "cp" + i;
                  var z = document.getElementById(to).innerHTML;
                  if (z === "") {
                      kite++;
                  }
                  document.getElementById("para").innerHTML = "Players Left - " + kite;
              }

              if (kite != 0) {
                  for (i = 1; i < 26; i++) {
                      var too = "p" + i;
                      document.getElementById(too).style.pointerEvents = "auto";
                      document.getElementById(too).style.opacity = "1";

                  }
              } else {
                  for (i = 1; i < 26; i++) {
                      var too = "p" + i;
                      document.getElementById(too).style.pointerEvents = "none";
                      document.getElementById(too).style.opacity = "0.5";
                  }
              }


              var count_over = $('#playing_list').find(":contains('*')").length;

              var count_batsman = $('#playing_list').find(":contains('Batsman')").length + $('#playing_list').find(":contains('All Rounder')").length + $('#playing_list').find(":contains('WK')").length;

              var count_bowler = $('#playing_list').find(":contains('Bowler')").length + $('#playing_list').find(":contains('All Rounder')").length;

              var count_WK = $('#playing_list').find(":contains('WK')").length;
              document.getElementById("c_overseas").innerHTML = count_over / 2;
              document.getElementById("c_batsman").innerHTML = count_batsman / 2;
              document.getElementById("c_bowler").innerHTML = count_bowler / 2;
              document.getElementById("c_wk").innerHTML = count_WK / 2;
          }
          check_team_con();
      }

      function check_team_con() {
          var k = 0;
          for (i = 1; i < 12; i++) {
              var to = "cp" + i;
              var z = document.getElementById(to).innerHTML;
              if (z != "") {
                  k++;
              }
          }
          var l = document.getElementById("c_overseas").innerHTML;
          var m = document.getElementById("c_bowler").innerHTML;
          var n = document.getElementById("c_wk").innerHTML;

          if (k == 11 && l < 5 && m > 5 && n > 0) {
              document.getElementById("snb").disabled = false;
          } else {
              document.getElementById("snb").disabled = true;
          }
          if (l > 4) {
              document.getElementById("c_overseas").style.backgroundColor = "red";
          } else {
              document.getElementById("c_overseas").style.backgroundColor = "#46DA01";
          }
          if (m < 6) {
              document.getElementById("c_bowler").style.backgroundColor = "red";
          } else {
              document.getElementById("c_bowler").style.backgroundColor = "#46DA01";
          }
          if (n < 1) {
              document.getElementById("c_wk").style.backgroundColor = "red";
          } else {
              document.getElementById("c_wk").style.backgroundColor = "#46DA01";
          }

      }

      function selected_team() {
          sn++;
          if (sn == 1) {
              for (var i = 1; i < 12; i++) {
                  var z = "pid" + i;
                  team1_id[i - 1] = document.getElementById(z).innerHTML;
              }

              for (var i = 0; i < 11; i++) {
                  var u = team1_id[i] - 1;
                  var v = teams[a - 1];
                  team1[i] = obj[v][u].Name;
                  var y = obj[v][u].Type;
                  if (y == 2 || y == 3) {
                      team1_bowl.push(team1[i]);
                  }
              }
              document.getElementById("snb").disabled = false;

              for (i = 1; i < 12; i++) {
                  var t = "pid" + i;
                  var u = "cp" + i;
                  document.getElementById(t).innerHTML = "";
                  document.getElementById(u).innerHTML = "";
              }
              for (i = 1; i < 26; i++) {
                  var v = "p" + i;
                  document.getElementById(v).innerHTML = "";
                  document.getElementById(v).style.pointerEvents = "auto";
                  document.getElementById(v).style.opacity = "1";
                  document.getElementById(v).style.display = "inline";
              }
              document.getElementById("para").innerHTML = "Players Left - 11";


              document.getElementById("c_overseas").innerHTML = "";
              document.getElementById("c_batsman").innerHTML = "";
              document.getElementById("c_bowler").innerHTML = "";
              document.getElementById("c_wk").innerHTML = "";

              document.getElementById("select_t_p").innerHTML = "Player 2 ( " + teams[b - 1] + " ) Select Playing 11";
              curr_team(teams[b - 1]);



          } else if (sn == 2) {

              for (var i = 1; i < 12; i++) {
                  var z = "pid" + i;
                  team2_id[i - 1] = document.getElementById(z).innerHTML;
              }

              for (var i = 0; i < 11; i++) {
                  var u = team2_id[i] - 1;
                  var v = teams[b - 1];
                  team2[i] = obj[v][u].Name;
                  var y = obj[v][u].Type;
                  if (y == 2 || y == 3) {
                      team2_bowl.push(team2[i]);
                  }
              }

              var temp = [];
              if (teams[a - 1] == bat_first) {
                  batting_first = [...team1];
                  bowling_first = [...team2_bowl];
                  batting_sec = [...team2];
                  bowling_sec = [...team1_bowl];
              } else if (teams[b - 1] == bat_first) {
                  batting_first = [...team2];
                  bowling_first = [...team1_bowl];
                  batting_sec = [...team1];
                  bowling_sec = [...team2_bowl];
              }


              document.getElementById("play_squad").style.display = "none";
              document.getElementById("main_game").style.display = "block";
              for (var j = 0; j < 11; j++) {
                  batsman[j] = new Object();
                  batsman[j].b_name = batting_first[j];
                  batsman[j].b_run = 0;
                  batsman[j].b_balls = 0;
                  batsman[j].b_sr = 0;
                  batsman[j].b_four = 0;
                  batsman[j].b_six = 0;
                  batsman[j].b_out = "Yet to Play";
                  batsman[j].b_status = "grey";
              }
              batsman[batting2].b_out = "Batting";
              batsman[batting2].b_status = "green";

              batsman[batting1].b_out = "Batting";
              batsman[batting1].b_status = "green";


              for (var i = 0; i < bowling_first.length; i++) {
                  bowler[i] = new Object();
                  bowler[i].b_name = bowling_first[i];
                  bowler[i].b_run = 0;
                  bowler[i].b_wick = 0;
                  bowler[i].b_eco = 0;
                  bowler[i].b_over = 0;
                  bowler[i].b_balls = 0;
                  bowler[i].b_ball = 0;
              }

              // 2nd Innings Scorecard 

              for (var j = 0; j < 11; j++) {
                  batsman1[j] = new Object();
                  batsman1[j].b_name = batting_sec[j];
                  batsman1[j].b_run = 0;
                  batsman1[j].b_balls = 0;
                  batsman1[j].b_sr = 0;
                  batsman1[j].b_four = 0;
                  batsman1[j].b_six = 0;
                  batsman1[j].b_out = "Yet to Play";
                  batsman1[j].b_status = "grey";
              }


              for (var i = 0; i < bowling_sec.length; i++) {
                  bowler1[i] = new Object();
                  bowler1[i].b_name = bowling_sec[i];
                  bowler1[i].b_run = 0;
                  bowler1[i].b_wick = 0;
                  bowler1[i].b_eco = 0;
                  bowler1[i].b_over = 0;
                  bowler1[i].b_balls = 0;
                  bowler1[i].b_ball = 0;
              }

              document.getElementById("c_bo_name").innerHTML = bowler[0].b_name;
              document.getElementById("c_bo_ov").innerHTML = bowler[0].b_over + "." + bowler[0].b_balls;
              document.getElementById("c_bo_run").innerHTML = bowler[0].b_run;
              document.getElementById("c_bo_w").innerHTML = bowler[0].b_wick;
              document.getElementById("c_bo_eco").innerHTML = bowler[0].b_eco;


              document.getElementById("c_b_name1").innerHTML = batsman[0].b_name;
              document.getElementById("c_b_run1").innerHTML = batsman[0].b_run + " (" + batsman[0].b_balls + ")";
              document.getElementById("c_b_sr1").innerHTML = batsman[0].b_sr;
              document.getElementById("c_b_41").innerHTML = batsman[0].b_four;
              document.getElementById("c_b_61").innerHTML = batsman[0].b_six;


              document.getElementById("c_b_name2").innerHTML = batsman[1].b_name;
              document.getElementById("c_b_run2").innerHTML = batsman[1].b_run + " (" + batsman[0].b_balls + ")";
              document.getElementById("c_b_sr2").innerHTML = batsman[1].b_sr;
              document.getElementById("c_b_42").innerHTML = batsman[1].b_four;
              document.getElementById("c_b_62").innerHTML = batsman[1].b_six;
              document.getElementById("bat_t1").innerHTML = bat_first;
              document.getElementById("bat_t2").innerHTML = bat_first;
              document.getElementById("bat_t3").innerHTML = bowl_first;
              document.getElementById("bat_t4").innerHTML = bowl_first;
              document.getElementById("bat_t5").innerHTML = bat_first;

              select_bowler();

              scorecard_update();
          }

      }
      var batting = 0;

      function bat() {
          batting++;
          balls_left--;
          var run = myArray[Math.floor(Math.random() * myArray.length)];
          check_run(run);


          complete_inngs();

          if (inngs == 2) {
              if (first_inn_w == 10 && runs_to_chase == 1) {
                  document.getElementById("left_run").innerHTML = "Match Tie";
                  document.getElementById("dropdownMenuButton1").style.display = "none";
                  document.getElementById("bat_c_btn").style.display = "none";


                  document.getElementById("bat_t12").innerHTML = bowl_first;
                  document.getElementById("inn_score2").innerHTML = first_inn_run + "/" + first_inn_w;
                  document.getElementById("inn_over2").innerHTML = document.getElementById("inn_over").innerHTML;

              } else if (first_inn_w == 10 || balls_left == 0) {
                  var m = sec_inn_run - first_inn_run;
                  document.getElementById("left_run").innerHTML = bat_first + " won by " + m + " runs.";

                  document.getElementById("dropdownMenuButton1").style.display = "none";
                  document.getElementById("bat_c_btn").style.display = "none";
                  document.getElementById("bat_t12").innerHTML = bowl_first;
                  document.getElementById("inn_score2").innerHTML = first_inn_run + "/" + first_inn_w;
                  document.getElementById("inn_over2").innerHTML = document.getElementById("inn_over").innerHTML;
              } else if (runs_to_chase <= 0) {
                  var n = 10 - first_inn_w;
                  document.getElementById("left_run").innerHTML = bowl_first + " won by " + n + " wickets.";

                  document.getElementById("dropdownMenuButton1").style.display = "none";
                  document.getElementById("bat_c_btn").style.display = "none";
                  document.getElementById("bat_t12").innerHTML = bowl_first;
                  document.getElementById("inn_score2").innerHTML = first_inn_run + "/" + first_inn_w;
                  document.getElementById("inn_over2").innerHTML = document.getElementById("inn_over").innerHTML;
              } else {
                  document.getElementById("left_run").innerHTML = bowl_first + " needed " + runs_to_chase + " in " + balls_left + " balls to win.";
              }



          }

          update_array();

      }

      function check_run(value) {

          if (value == "W") {
              first_inn_w++;
          } else {
              runs_to_chase = runs_to_chase - value;
          }
          change_strike(value);
          change_score(value);

          ball_number++;
          if (ball_number % 2 != 0) {
              document.getElementById("ba1").style.display = "inline";
              document.getElementById("ba2").style.display = "none";
              document.getElementById("ba1").innerHTML = value;
              var bcolor = check_color(value);
              document.getElementById("ba1").style.backgroundColor = bcolor;
          } else {
              document.getElementById("ba2").style.display = "inline";
              document.getElementById("ba1").style.display = "none";
              document.getElementById("ba2").innerHTML = value;
              var bcolor = check_color(value);

              document.getElementById("ba2").style.backgroundColor = bcolor;

          }

          curr_ov.push(value);
          var g = check_color(value);
          curr_ov_color.push(g);

          current_over(value);
      }

      function change_strike(value) {

          update_curr_bat(value);
          if (value % 2 != 0 && value != "W") {
              if (strike == 1) {
                  strike = 2;
              } else if (strike == 2) {
                  strike = 1;
              }
              if (strike == 1) {
                  document.getElementById("star1").style.display = "inline";
                  document.getElementById("star2").style.display = "none";
              } else if (strike == 2) {
                  document.getElementById("star1").style.display = "none";
                  document.getElementById("star2").style.display = "inline";
              }
          }
      }

      function change_strike1(value) {

          if (value % 2 != 0 || value != "W") {
              if (strike == 1) {
                  strike = 2;
              } else if (strike == 2) {
                  strike = 1;
              }
              if (strike == 1) {
                  document.getElementById("star1").style.display = "inline";
                  document.getElementById("star2").style.display = "none";
              } else if (strike == 2) {
                  document.getElementById("star1").style.display = "none";
                  document.getElementById("star2").style.display = "inline";
              }
          }
      }

      function check_color(value) {
          var bcolor;
          if (value == "0") {
              bcolor = "#E1DCDC";
          } else if (value == "1" || value == "2" || value == "3") {
              bcolor = "#8A8A8A";
          } else if (value == "4") {
              bcolor = "#2A198B";
          } else if (value == "6") {
              bcolor = "#3DB42E";
          } else if (value == "W") {
              bcolor = "#DE0000";
          }
          return bcolor;

      }


      function current_over(value) {
          ov_ball++;
          if (ov_ball == 1) {
              check_last_bowler = last_over_by;
              var xy = inn_overs + 1;
              document.getElementById("dropdownMenuButton1").disabled = true;
              document.getElementById("Over_no").innerHTML = "Ov - " + xy;
              for (var j = 1; j < 7; j++) {
                  var s = "ball" + j;
                  document.getElementById(s).innerHTML = "";
              }

          }
          for (var i = 1; i < 7; i++) {
              var f = "ball" + i;
              if (i <= ov_ball) {
                  document.getElementById(f).style.display = "inline";
              } else {
                  document.getElementById(f).style.display = "none";
              }
          }
          var g = "ball" + ov_ball;
          var o = 0;
          document.getElementById(g).innerHTML = value;
          document.getElementById(g).style.backgroundColor = check_color(value);
          for (var k = 1; k < 7; k++) {
              var u = "ball" + k;
              var v = document.getElementById(u).innerHTML;
              if (v != "W") {
                  o = +o + +v;
              }
          }
          document.getElementById("Runs").innerHTML = o + " Runs";
          if (ov_ball == 6) {
              ov_ball = 0;
              inn_overs++;
              document.getElementById("bat_c_btn").disabled = true;

              document.getElementById("dropdownMenuButton1").disabled = false;
              change_strike1(value);

              var f = document.getElementById("Runs").innerHTML;
              $(function() {
                  $("#over_s").after("<div class='c_o d-flex justify-content-center align-items-center mt-1'><div class='c_o_ball3 animated zoomIn'>Ov - " + inn_overs + " ( " + f + " )<br>" + last_over_by + "</div><div class='c_o_ball2 animated zoomIn' style='background-color:" + curr_ov_color[0] + "'>" + curr_ov[0] + "</div><div class='c_o_ball2 animated zoomIn' style='background-color:" + curr_ov_color[1] + "'>" + curr_ov[1] + "</div><div class='c_o_ball2 animated zoomIn' style='background-color:" + curr_ov_color[2] + "'>" + curr_ov[2] + "</div><div class='c_o_ball2 animated zoomIn' style='background-color:" + curr_ov_color[3] + "'>" + curr_ov[3] + "</div><div class='c_o_ball2 animated zoomIn' style='background-color:" + curr_ov_color[4] + "'>" + curr_ov[4] + "</div><div class='c_o_ball2 animated zoomIn' style='background-color:" + curr_ov_color[5] + "'>" + curr_ov[5] + "</div></div>");
              });


          }

      }

      function scorecard_update() {
          $(function() {
              $(".batsman_scorecard").remove();
          });

          $(function() {
              $(".batsman_scorecard1").remove();
          });

          $(function() {
              $(".bowling_scorecard").remove();
          });

          $(function() {
              $(".bowling_scorecard1").remove();
          });

          $(function() {
              for (var j = 0; j < 11; j++) {
                  $("#inn1s").before("<tr class='batsman_scorecard'><td> " + batsman[j].b_name + " <br><span class='bat_details' style='background-color:" + batsman[j].b_status + ";'>" + batsman[j].b_out + "</span></td><td>" + batsman[j].b_run + " (" + batsman[j].b_balls + ")</td><td>" + batsman[j].b_sr + "</td><td>" + batsman[j].b_four + "</td><td>" + batsman[j].b_six + "</td></tr>");
              }
          });

          $(function() {
              for (var j = 0; j < 11; j++) {
                  $("#inn2s").before("<tr class='batsman_scorecard1'><td> " + batsman1[j].b_name + " <br><span class='bat_details' style='background-color:" + batsman1[j].b_status + ";'>" + batsman1[j].b_out + "</span></td><td>" + batsman1[j].b_run + " (" + batsman1[j].b_balls + ")</td><td>" + batsman1[j].b_sr + "</td><td>" + batsman1[j].b_four + "</td><td>" + batsman1[j].b_six + "</td></tr>");
              }
          });

          $(function() {
              for (var j = 0; j < bowling_first.length; j++) {
                  $("#b_inns1").before("<tr class='bowling_scorecard'><td> " + bowler[j].b_name + "</td><td>" + bowler[j].b_over + "." + bowler[j].b_ball + "</td><td>" + bowler[j].b_run + "</td><td>" + bowler[j].b_wick + "</td><td>" + bowler[j].b_eco + "</td></tr>");
              }
          });

          $(function() {
              for (var j = 0; j < bowling_sec.length; j++) {
                  $("#b_inns2").before("<tr class='bowling_scorecard1'><td> " + bowler1[j].b_name + "</td><td>" + bowler1[j].b_over + "." + bowler1[j].b_ball + "</td><td>" + bowler1[j].b_run + "</td><td>" + bowler1[j].b_wick + "</td><td>" + bowler1[j].b_eco + "</td></tr>");
              }
          });
      }

      function select_bowler() {
          if (inngs == 1) {
              $(function() {
                  for (var j = 0; j < bowling_first.length; j++) {
                      $("#bowl_sel").before("<li class='dropdown-item b_l'  onclick = " + "Select_bowler(" + j + ")" + ">" + bowler[j].b_name + "</li>");
                  }
              });
          }

      }

      function Select_bowler(value) {
          curr_bowler_no = value;
          curr_ov.length = 0;
          curr_ov_color.length = 0;
          if (inngs == 1) {
              if (bowler[value].b_over == 4) {
                  alert("All 4 overs completed. Please Select Another Bowler");
              } else if (bowler[value].b_name == check_last_bowler) {
                  alert("Same Bolwer, please select another bowler");
              } else if (bowler[value].b_over != 4) {
                  document.getElementById("bat_c_btn").disabled = false;
                  last_over_by = bowler[value].b_name;
                  document.getElementById("c_bo_name").innerHTML = bowler[value].b_name;
                  document.getElementById("c_bo_run").innerHTML = bowler[value].b_run;
                  document.getElementById("c_bo_w").innerHTML = bowler[value].b_wick;
                  document.getElementById("c_bo_eco").innerHTML = bowler[value].b_eco;
                  document.getElementById("c_bo_ov").innerHTML = bowler[value].b_over + "." + bowler[value].b_ball;
              }
          } else if (inngs == 2) {
              if (bowler1[value].b_over == 4) {
                  alert("All 4 overs completed. Please Select Another Bowler");
              } else if (bowler1[value].b_name == check_last_bowler) {
                  alert("Same Bolwer, please select another bowler");
              } else if (bowler1[value].b_over != 4) {
                  document.getElementById("bat_c_btn").disabled = false;
                  last_over_by = bowler1[value].b_name;
                  document.getElementById("c_bo_name").innerHTML = bowler1[value].b_name;
                  document.getElementById("c_bo_run").innerHTML = bowler1[value].b_run;
                  document.getElementById("c_bo_w").innerHTML = bowler1[value].b_wick;
                  document.getElementById("c_bo_eco").innerHTML = bowler1[value].b_eco;
                  document.getElementById("c_bo_ov").innerHTML = bowler1[value].b_over + "." + bowler1[value].b_ball;
              }
          }
      }

      function update_curr_bat(value) {
          if (inngs == 1) {
              if (strike == 1) {
                  if (value == "W" && first_inn_w < 10) {
                      batsman[batting1].b_balls += 1;
                      batsman[batting1].b_status = "red";
                      batsman[batting1].b_out = "b " + last_over_by;
                      curr_batsman++;
                      batting1 = curr_batsman;
                      batsman[batting1].b_status = "green";
                      batsman[batting1].b_out = "Batting";
                  } else if (value == "W" && first_inn_w == 10) {
                      batsman[batting1].b_balls += 1;
                      batsman[batting1].b_status = "red";
                      batsman[batting1].b_out = "b " + last_over_by;
                  } else {
                      batsman[batting1].b_run += value;
                      batsman[batting1].b_balls += 1;
                      var rr = (batsman[batting1].b_run * 100) / batsman[batting1].b_balls;

                      batsman[batting1].b_sr = rr.toFixed(2);
                      if (value == 4) {
                          batsman[batting1].b_four += 1;
                      }
                      if (value == 6) {
                          batsman[batting1].b_six += 1;
                      }
                  }
              } else if (strike == 2) {
                  if (value == "W" && first_inn_w < 10) {
                      batsman[batting2].b_balls += 1;
                      batsman[batting2].b_status = "red";
                      batsman[batting2].b_out = "b " + last_over_by;
                      curr_batsman++;
                      batting2 = curr_batsman;

                      batsman[batting2].b_status = "green";
                      batsman[batting2].b_out = "Batting";
                  } else if (value == "W" && first_inn_w == 10) {
                      batsman[batting2].b_balls += 1;
                      batsman[batting2].b_status = "red";
                      batsman[batting2].b_out = "b " + last_over_by;
                  } else {
                      batsman[batting2].b_run += value;
                      batsman[batting2].b_balls += 1;
                      var rr = (batsman[batting2].b_run * 100) / batsman[batting2].b_balls;

                      batsman[batting2].b_sr = rr.toFixed(2);
                      if (value == 4) {
                          batsman[batting2].b_four += 1;
                      }
                      if (value == 6) {
                          batsman[batting2].b_six += 1;
                      }
                  }
              }

              document.getElementById("c_b_name1").innerHTML = batsman[batting1].b_name;
              document.getElementById("c_b_run1").innerHTML = batsman[batting1].b_run + " (" + batsman[batting1].b_balls + ")";
              document.getElementById("c_b_sr1").innerHTML = batsman[batting1].b_sr;
              document.getElementById("c_b_41").innerHTML = batsman[batting1].b_four;
              document.getElementById("c_b_61").innerHTML = batsman[batting1].b_six;


              document.getElementById("c_b_name2").innerHTML = batsman[batting2].b_name;
              document.getElementById("c_b_run2").innerHTML = batsman[batting2].b_run + " (" + batsman[batting2].b_balls + ")";
              document.getElementById("c_b_sr2").innerHTML = batsman[batting2].b_sr;
              document.getElementById("c_b_42").innerHTML = batsman[batting2].b_four;
              document.getElementById("c_b_62").innerHTML = batsman[batting2].b_six;
              if (value == "W") {
                  bowler[curr_bowler_no].b_wick += 1;
                  value = 0;
              }
              bowler[curr_bowler_no].b_run += value;
              bowler[curr_bowler_no].b_balls += 1;
              bowler[curr_bowler_no].b_ball = bowler[curr_bowler_no].b_balls % 6;
              var k = parseInt(bowler[curr_bowler_no].b_balls / 6);
              bowler[curr_bowler_no].b_over = k;
              var l = (bowler[curr_bowler_no].b_run * 6) / bowler[curr_bowler_no].b_balls;
              bowler[curr_bowler_no].b_eco = l.toFixed(2);




              document.getElementById("c_bo_name").innerHTML = bowler[curr_bowler_no].b_name;
              document.getElementById("c_bo_run").innerHTML = bowler[curr_bowler_no].b_run;
              document.getElementById("c_bo_w").innerHTML = bowler[curr_bowler_no].b_wick;
              document.getElementById("c_bo_eco").innerHTML = bowler[curr_bowler_no].b_eco;

              document.getElementById("c_bo_ov").innerHTML = bowler[curr_bowler_no].b_over + "." + bowler[curr_bowler_no].b_ball;
          } else if (inngs == 2) {

              if (strike == 1) {
                  if (value == "W" && first_inn_w < 10) {
                      batsman1[batting1].b_balls += 1;
                      batsman1[batting1].b_status = "red";
                      batsman1[batting1].b_out = "b " + last_over_by;
                      curr_batsman++;
                      batting1 = curr_batsman;
                      batsman1[batting1].b_status = "green";
                      batsman1[batting1].b_out = "Batting";
                  } else if (value == "W" && first_inn_w == 10) {
                      batsman1[batting1].b_balls += 1;
                      batsman1[batting1].b_status = "red";
                      batsman1[batting1].b_out = "b " + last_over_by;
                  } else {
                      batsman1[batting1].b_run += value;
                      batsman1[batting1].b_balls += 1;
                      var rr = (batsman1[batting1].b_run * 100) / batsman1[batting1].b_balls;

                      batsman1[batting1].b_sr = rr.toFixed(2);
                      if (value == 4) {
                          batsman1[batting1].b_four += 1;
                      }
                      if (value == 6) {
                          batsman1[batting1].b_six += 1;
                      }
                  }
              } else if (strike == 2) {
                  if (value == "W" && first_inn_w < 10) {
                      batsman1[batting2].b_balls += 1;
                      batsman1[batting2].b_status = "red";
                      batsman1[batting2].b_out = "b " + last_over_by;
                      curr_batsman++;
                      batting2 = curr_batsman;

                      batsman1[batting2].b_status = "green";
                      batsman1[batting2].b_out = "Batting";
                  } else if (value == "W" && first_inn_w == 10) {
                      batsman1[batting2].b_balls += 1;
                      batsman1[batting2].b_status = "red";
                      batsman1[batting2].b_out = "b " + last_over_by;
                  } else {
                      batsman1[batting2].b_run += value;
                      batsman1[batting2].b_balls += 1;
                      var rr = (batsman1[batting2].b_run * 100) / batsman1[batting2].b_balls;

                      batsman1[batting2].b_sr = rr.toFixed(2);
                      if (value == 4) {
                          batsman1[batting2].b_four += 1;
                      }
                      if (value == 6) {
                          batsman1[batting2].b_six += 1;
                      }
                  }
              }

              document.getElementById("c_b_name1").innerHTML = batsman1[batting1].b_name;
              document.getElementById("c_b_run1").innerHTML = batsman1[batting1].b_run + " (" + batsman1[batting1].b_balls + ")";
              document.getElementById("c_b_sr1").innerHTML = batsman1[batting1].b_sr;
              document.getElementById("c_b_41").innerHTML = batsman1[batting1].b_four;
              document.getElementById("c_b_61").innerHTML = batsman1[batting1].b_six;


              document.getElementById("c_b_name2").innerHTML = batsman1[batting2].b_name;
              document.getElementById("c_b_run2").innerHTML = batsman1[batting2].b_run + " (" + batsman1[batting2].b_balls + ")";
              document.getElementById("c_b_sr2").innerHTML = batsman1[batting2].b_sr;
              document.getElementById("c_b_42").innerHTML = batsman1[batting2].b_four;
              document.getElementById("c_b_62").innerHTML = batsman1[batting2].b_six;
              if (value == "W") {
                  bowler1[curr_bowler_no].b_wick += 1;
                  value = 0;
              }
              bowler1[curr_bowler_no].b_run += value;
              bowler1[curr_bowler_no].b_balls += 1;
              bowler1[curr_bowler_no].b_ball = bowler1[curr_bowler_no].b_balls % 6;
              var k = parseInt(bowler1[curr_bowler_no].b_balls / 6);
              bowler1[curr_bowler_no].b_over = k;
              var l = (bowler1[curr_bowler_no].b_run * 6) / bowler1[curr_bowler_no].b_balls;
              bowler1[curr_bowler_no].b_eco = l.toFixed(2);




              document.getElementById("c_bo_name").innerHTML = bowler1[curr_bowler_no].b_name;
              document.getElementById("c_bo_run").innerHTML = bowler1[curr_bowler_no].b_run;
              document.getElementById("c_bo_w").innerHTML = bowler1[curr_bowler_no].b_wick;
              document.getElementById("c_bo_eco").innerHTML = bowler1[curr_bowler_no].b_eco;

              document.getElementById("c_bo_ov").innerHTML = bowler1[curr_bowler_no].b_over + "." + bowler1[curr_bowler_no].b_ball;

          }
          scorecard_update();
      }

      function change_score(value) {
          first_inn_ball++;
          p_ship_ball++;
          if (value == "W") {
              value = 0;

              p_ship_run = 0;
              p_ship_ball = 0;
          }

          p_ship_run += value;
          first_inn_run += value;
          var t = first_inn_ball % 6;
          var u = parseInt(first_inn_ball / 6);
          document.getElementById("inn_score").innerHTML = first_inn_run + "/" + first_inn_w;
          document.getElementById("inn_over").innerHTML = u + "." + t;
          var x = (first_inn_run * 6) / first_inn_ball;
          document.getElementById("crr").innerHTML = "CRR " + x.toFixed(2);
          document.getElementById("pship").innerHTML = "P'ship " + p_ship_run + "(" + p_ship_ball + ")";

      }

      function complete_inngs() {
          if (inn_overs == 20 || first_inn_w == 10) {
              myArray.length = 0;
              myArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 3, 3, 4, 6, 6, 6, 4, 4, 3, 3, 4, 6, 'W', 'W', 'W'];
              inngs_over++;
              if (inngs_over == 1) {
                  for (var j = 1; j < 7; j++) {
                      var s = "ball" + j;
                      document.getElementById(s).innerHTML = "";
                      document.getElementById(s).style.display = "none";
                  }
                  sec_inn_run = first_inn_run;
                  sec_inn_w = first_inn_w;
                  document.getElementById("first_inn").style.display = "inline";
                  document.getElementById("bat_t11").innerHTML = bat_first;
                  document.getElementById("inn_score1").innerHTML = sec_inn_run + "/" + sec_inn_w;
                  document.getElementById("inn_over1").innerHTML = document.getElementById("inn_over").innerHTML;
                  inn_overs = 0;
                  first_inn_w = 0;
                  inngs = 2;
                  ov_ball = 0;
                  var ko = sec_inn_run + 1;
                  runs_to_chase = ko;

                  first_inn_run = 0;
                  strike = 1;
                  first_inn_ball = 0;

                  batting1 = 0;
                  batting2 = 1;
                  curr_batsman = 1;
                  balls_left = 120;
                  p_ship_run = 0;
                  p_ship_ball = 0;
                  document.getElementById("pship").innerHTML = "P'ship " + p_ship_run + "(" + p_ship_ball + ")";
                  document.getElementById("left_run").innerHTML = bowl_first + " needed " + ko + " in " + balls_left + " balls to win.";

                  document.getElementById("c_bo_name").innerHTML = bowler1[0].b_name;
                  document.getElementById("c_bo_ov").innerHTML = bowler1[0].b_over + "." + bowler1[0].b_balls;
                  document.getElementById("c_bo_run").innerHTML = bowler1[0].b_run;
                  document.getElementById("c_bo_w").innerHTML = bowler1[0].b_wick;
                  document.getElementById("c_bo_eco").innerHTML = bowler1[0].b_eco;


                  document.getElementById("c_b_name1").innerHTML = batsman1[0].b_name;
                  document.getElementById("c_b_run1").innerHTML = batsman1[0].b_run + " (" + batsman1[0].b_balls + ")";
                  document.getElementById("c_b_sr1").innerHTML = batsman1[0].b_sr;
                  document.getElementById("c_b_41").innerHTML = batsman1[0].b_four;
                  document.getElementById("c_b_61").innerHTML = batsman1[0].b_six;


                  document.getElementById("c_b_name2").innerHTML = batsman1[1].b_name;
                  document.getElementById("c_b_run2").innerHTML = batsman1[1].b_run + " (" + batsman1[0].b_balls + ")";
                  document.getElementById("c_b_sr2").innerHTML = batsman1[1].b_sr;
                  document.getElementById("c_b_42").innerHTML = batsman1[1].b_four;
                  document.getElementById("c_b_62").innerHTML = batsman1[1].b_six;


                  batsman1[batting1].b_status = "green";
                  batsman1[batting1].b_out = "Batting";

                  batsman1[batting2].b_status = "green";
                  batsman1[batting2].b_out = "Batting";



                  $(function() {
                      $(".b_l").remove();
                  });

                  $(function() {
                      for (var j = 0; j < bowling_sec.length; j++) {
                          $("#bowl_sel").before("<li class='dropdown-item b_l'  onclick = " + "Select_bowler(" + j + ")" + ">" + bowler1[j].b_name + "</li>");
                      }
                  });

                  document.getElementById("bat_c_btn").disabled = true;

                  document.getElementById("dropdownMenuButton1").disabled = false;

                  document.getElementById("bat_t1").innerHTML = bowl_first;

                  scorecard_update();
                  document.getElementById("pship").innerHTML = "P'ship 0(0)";
                  document.getElementById("inn_score").innerHTML = "0/0";
                  document.getElementById("inn_over").innerHTML = "0.0";
                  document.getElementById("crr").innerHTML = "CRR 0.00";


              }
          }
      }

      function update_array() {
          if (inn_overs >= 14 && first_inn_w < 6) {
              myArray.length = 0;
              myArray = [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 4, 3, 4, 6, 6, 6, 4, 4, 3, 4, 6, 6, 6, 'W', 'W'];
          } else if (inn_overs > 9 && first_inn_w < 1) {
              myArray.length = 0;
              myArray = [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 4, 3, 4, 6, 6, 6, 4, 4, 3, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 4, 'W', 'W'];
          } else if (inn_overs > 6 && first_inn_w >= 3) {
              myArray.length = 0;
              myArray = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 4, 3, 6, 'W', 'W', 'W', 'W'];
          } else if (first_inn_w > 6) {
              myArray.length = 0;
              myArray = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 3, 6, 'W', 'W', 'W', 'W'];
          }

      }