var content = document.getElementById('content');
var minusli = "";
var d = new Date();
document.getElementById('today').innerHTML = d.getFullYear() + "년 " + (d.getMonth()+1) + "월 " + d.getDate() + "일";


var key = function(event){
	if(event.keyCode == 13){ // Enter
		var inputData = content.value;
		if(checkData(inputData)){
			addli(inputData);
		}
	}
}

function checkData(inputData){
	if(inputData == ""){
		alert('TODO를 입력하세요.');
		return false;
	}
	return true;
}
function addli(inputData){
	inputData = escape(inputData);
	minusli =  '<li>' + inputData +
		       '<img id="right" alt="삭제" src="./resources/images/cross.png" onclick="deleteli(this)">' +
		       '<img id="left" alt="완료" src="./resources/images/check.png" onclick="finishli(this)">' +
		       '</li>';
	document.getElementById('list').innerHTML += minusli;
	content.value = '';
}

// 삭제
function deleteli(e){
	e.parentNode.remove();
}

// 완료.
function finishli(e){
	e.parentNode.setAttribute("class", "success");
	var text = e.parentNode.innerText;
	text = escape(text);
	e.parentNode.innerHTML = text +
							 '<img id="left" alt="완료" src="./resources/images/check.png">' +
							 '<img id="right" alt="삭제" src="./resources/images/cross.png" onclick="deleteli(this)">';
}
// 내용에 < , >를 포함하는 경우.
function escape(data){
	data = data.replaceAll('<', '&lt;');
	data = data.replaceAll('>', '&gt;');
	return data;
}

addEventListener("keydown", key);


