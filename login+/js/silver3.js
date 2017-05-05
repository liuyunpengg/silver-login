//注册页JS
function registin() {
	var name = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	var check = document.getElementById("checkpassword").value;
	if(name == "" || pass.length < 6 || pass != check) {
		alert("请确认输入正确。")
	} else {
		location.href = "silver3-wel.html";
	}
}

function mouseon() {
	var regbtn = document.getElementById("reg-btn");
	regbtn.style.background = "blue";
	regbtn.style.color = "yellow";
}

function mouseout() {
	var regbtn = document.getElementById("reg-btn");
	regbtn.style.background = "#C1E0F2";
	regbtn.style.color = "#00f";
}

var timer = document.getElementById("timer");
var now = new Date();

//登陆页JS