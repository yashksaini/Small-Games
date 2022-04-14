const box = document.getElementsByClassName("btn");
const movement = 
[[1,3],[0,2,4],[1,5],[0,4,6],[1,3,5,7],[2,4,8],[3,7],[6,4,8],[5,7]];
let steps = 0;
function start() {
   for (let i = 0; i < 9; i++) {
     box[i].addEventListener("click", () => {
       play(i);
     });
   }
}
function play(value){
   let a = box[value];
   if(a.innerHTML ==''){
   }
   else{
      moveBox(value);
      checkfinished();
   }
}
function moveBox(value){
   
   let freeMoves = movement[value];

   for(var i=0;i<freeMoves.length;i++){
      if(box[freeMoves[i]].innerHTML==''){
         box[freeMoves[i]].innerHTML= box[value].innerHTML;
         box[value].innerHTML='';
         steps++;
         document.getElementById("steps").innerHTML = steps + " step";
         return;
      }
   }
}
function checkfinished(){
   let count = 0;
   for(let i=0;i<8;i++){
      if(box[i].innerHTML==i+1){
         count++;
      }
   }
   console.log(count);
   if(count==8){
      for(let i=0;i<8;i++){
         box[i].disabled = true;
         box[i].style.backgroundColor = "#1f1f1f";
         box[i].style.color = "white";
      }
      cuteAlert({
         type: "success",
         title: "Congratulations",
         message: "Completed in <b>"+steps+" steps </b>",
         buttonText: "Done"
     })
   }
}