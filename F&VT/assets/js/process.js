

const searchHtml= '<div class ="col-sm col-lg-4 d-flex justify-content-center"><div class ="card" style ="width: 18rem;"><img class = "card-img-top" id ="img-top" src ="" alt ="Card image Cap"><div class ="card-body"><h5 class ="card-title">Description:</h5><p class ="card-text" id="desc"></p><button onclick="myFunction()" id="myBtn">Read more</button></div></div></div><div class ="col-sm col-lg-4 d-flex justify-content-center"><div class ="card" style ="width: 18rem;"><div class = "card-header" id = "card-header">Translation</div><div id ="data-list"><ul class = "list-group list-group-flush"><li class = "list-group-item"><b>English:</b> <p id = "english"></p></li><li class = "list-group-item" ><b>Yoruba:</b> <p id="yoruba"></p> </li><li class = "list-group-item"><b>Hausa:</b> <p id="hausa"></p></li><li class = "list-group-item"><b>Igbo:</b> <p id="igbo">ugu</p></li></ul></div></div></div></div></div>';
const noData = '<div class = "d-flex justify-content-center"><div class="alert alert-primary" role="alert">No data found for this!</div></div>';

function loadFile() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://json.extendsclass.com/bin/d42aa353a4a9", true);
request.onreadystatechange = () => {
  var data = request.responseText;
	   var json = JSON.parse(data);
	   var done = processSearch(json);
	   console.log(done);
	   if(!done){
	   document.getElementById("data").innerHTML = noData;
	   }
	};
request.send(null);
};
  
function processSearch(value){
  var searchVal = document.getElementById("ed-srch-term").value;
  console.log(searchVal);
  const myArray = value;
  console.log(myArray[2].name);
  var obj =null;
  if (searchVal != null){
	for (let i = 0; i < myArray.length; i++){
		console.log(myArray[i].name);
		if(myArray[i].name.toLowerCase() == searchVal.toLowerCase() ){
		  obj = myArray[i];
		  console.log(obj.description);
		  document.getElementById("data").innerHTML =searchHtml;
		  setHtml(obj);
		  return true;
		  break;
		}
	}return false;
  
  }
};

function setHtml(obj){
  document.getElementById("desc").innerHTML ='<span id="dots"></span><span id="more">' + obj.description;
  document.getElementById("yoruba").innerHTML = obj.yoruba_name;
  document.getElementById("hausa").innerHTML = obj.hausa_name;
   document.getElementById("igbo").innerHTML = obj.igbo_name;
   document.getElementById("english").innerHTML = obj.name + " " + obj.engtrans;
   document.getElementById("img-top").setAttribute('src','assets/img/Fruit/'+obj.name+'.PNG');
};

var form = document.getElementById("form");

form.addEventListener('submit', handleForm);

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
};
function processLogin(){
	var form = document.getElementById("form");
	function handleForm(event) { event.preventDefault(); } 
	form.addEventListener('submit', handleForm);
	let user = document.getElementById("username");
	let pass = document.getElementById("password");
	console.log(user.value + pass.value);
	if (user.value !='admin' && pass.value !='temitope'){
		user.value = '';
		pass.value = '';
		document.getElementById('alert').innerHTML = '<div class="alert alert-danger"role="alert">"Wrong inputs!!!, contact the admin</div>';
	}
	else{
		 window.location.href="admin.html"; 
	}
};