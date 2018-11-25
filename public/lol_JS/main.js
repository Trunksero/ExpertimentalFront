
//Can only contain Underscores Slashes and the usual crap etc.
//JS var's are CaSe SeNsItIvE

//var something = something;
var l = 0;
//for(l = 0;l < 10;l++){console.log(l)}

var N = 9;
//while(N < 20){console.log(N);N++}

var losers = "winners";
var niggers = [23,84,100,385];

switch(losers){case "winners":
console.log("winners are now finally SWITCHed to losers...yes.");
  break;
  default:alert("You failed ma nigga"+2)}

var nums = [24,239,48,10,8,2,'functioning'];


for(i = 0;i < nums.length;i++){
    console.log(nums[i]);
}
//Literal Object Example Below
  var things = {
    firsthing: 'Apple',
    secondthing: 'banana',
    age: 65,
    children: ['Coca','Cola',35,39,'LiteralShit'],
    IntoTheGay: {
      Street: 'GayishStreet',
      Address: 'DangerousAddress',
      Linked: 'Linked?'},

   JustAnything: function(){
      return this.firsthing +"  "+this.secondthing;
      }
  }

    console.log(things.JustAnything())

  console.log(things.IntoTheGay.Linked);

  //Object Constructor

  var apple = new Object
    apple.color = 'red',
    apple.shape = 'round';
        apple.describe = function(){
    return 'The apple has a color of '+this.color+' And the shape of '+this.shape
  }
  console.log(apple.describe());


//Constructor Pattern

function Fruit(name,street,date){
  this.name = name;
  this.street = street;
  this.date = date;
  this.describe = function() {
    return ('His name is '+this.name+' And he lives in '+this.street+' and you have to do it on '+this.date);
  }
}
var melons = new Fruit('Thomas','34th Street','12th Of July');
var papayas = new Fruit('John','33th Street ',' Trump ');

console.log(melons.describe());
console.log(papayas.describe());

function DoClick(nigger){
  var nigger = document.getElementById('NotMe');
  nigger.innerHTML = "Congratz";
}
function Back(){
  document.getElementById('NotMe').style.background= "wheat";
  NotMe.innerHTML = "Welcome Back To the JS Tutorial";
  }
function MyTime(){
  var time = document.getElementById('DisplayTime');
  time.innerHTML = Date();
}
function MyTimeOff(){
var time = document.getElementById('DisplayTime');
  time.innerHTML = "";
}
function ChangeBG(lol){
   console.log(lol.value)
var idfk = document.getElementById('body');
    idfk.style.backgroundColor = lol.value;
}
function ChangeColor(x1){
  var lol = document.getElementsByTagName('h1');
  var i;
   for(i = 0;i < lol.length;i++) {
  lol[i].style.color = x1.value}
}
function ChangeCircle(x1){
  var lol = document.getElementById('Round');
    lol.style.backgroundColor = x1.value;

}

//Mainly JS-HTML DOM from here on out
// 5 Clean small lines of Code
var ro = document.querySelectorAll('.row');
ro.forEach(function(btn){
btn.addEventListener('mouseleave', function(e){
   var visual = e.currentTarget;
 visual.style.display = 'none';

});
});
 function OpenMenu(){
 document.getElementById('raw').style.display = 'block';
}

function OpenMenu2(){
  document.getElementById('Inside').style.display = 'block';
}
function CelsiusTo(f){
   return (f * 9/5)+(32);
};

var items = document.querySelectorAll('li');
// METHOD 1 OF LOOPING ----------------------
var ii;
//for (ii = 0;ii < items.length;++ii){
 //items[ii].innerHTML += 'foooooooooooos';}
//METHOD 2 OF LOOPING ----------------------
//items.forEach(function(displayem){
//  displayem.innerHTML += ' '+ 'temporarily disabled';})

var warping =  document.querySelectorAll('#Inside li');
console.log(warping);
var idk;


//Global EventListener
//document.addEventListener("click", function(e) {
//  if(e.target && e.target.nodeName == "DIV") {
  //console.log("List item ", e.target.textContent, " was clicked!");
//}//I added this and it works! else{console.log("hah! there ain't nothin!")}
//});

var storeRound = document.querySelector('#Round');

storeRound.addEventListener('mouseover',function(e){
  if (e.target && e.target.nodeName == 'DIV'){
     e.target.style = '';//BRINGS VALUE TO DEFAULT CSS VALUE... Interesting
  }
  })

//Deleting function --- Learned
var deleting = document.querySelector('#Imps');
deleting.addEventListener('click',function(e){
if (e.target.className == 'delete'){
   const li = e.target.parentElement;
     deleting.removeChild(li);}
})


//adding stuff

var addForm = document.forms['MovForm'];

addForm.addEventListener('submit',function(e){
  e.preventDefault();
  var dInput = addForm.querySelector('input[type="text"]').value;
  const p = document.createElement('p');
  const btns = document.createElement('button');
  const uli = document.createElement('li');

  uli.appendChild(p);
  uli.appendChild(btns);
  deleting.appendChild(uli);
 btns.classList.add('delete');
  btns.textContent = "Delete";
   p.textContent = dInput;
  });

//Searchbar
const search = document.forms['searchbar'].querySelector('input');
search.addEventListener('keyup',function(e){
  const searching = e.target.value.toLowerCase();
  const books = deleting.getElementsByTagName('li');

Array.from(books).forEach(function(book){
  const title = book.firstElementChild.textContent;
  if(title.toLowerCase().indexOf(searching) != -1 ){
    book.style.display = 'flex';
  }else{book.style.display = 'none';}
})
});
