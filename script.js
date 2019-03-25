function init(){
    let image =document.createElement("img");
    image.src="flower2.png";
    var src= document.getElementById("new_element");
    src.appendChild(image);

console.log("colors[i]");
let spans =document.getElementsByClassName("rain");
var length = document.getElementsByClassName("rain").length;
let colors = ["red","orange","yellow","green","blue","violet","pink"];
for ( var i = length -1 ;i >= 0;i--){
    spans[i].style.color=colors[i];
}
    var changeSrc = function(event) {
        if (event.target.src) {
          event.target.src = "flower2.png";
          let filename = event.target.src.replace(/^.*[\\\/]*$/, '')
        }
      };
      
      document.getElementById("event").addEventListener("mouseover", changeSrc);


      var changeSrc1 = function(event) {
        if (event.target.src) {
          event.target.src = "flower1.png";
        }
      };
      
      document.getElementById("event").addEventListener("mouseout", changeSrc1);
}

function addItem () {
    var ul = document.getElementById("valeurs");
    var x = document.getElementById("enter").value;
    var li = document.createElement("li");
    let text = document.createTextNode(x);
   li.appendChild(text);
   ul.appendChild(li);
  
    if(document.getElementById("put").checked){
      li.style.color ="red";
    } else if(document.getElementById("groceries").checked){
      li.style["text-decoration"] = "underline";
    } else {
  
    }
  }
  
  function removeItem(){
    var ul = document.getElementById("valeurs");
    var index = document.getElementById("remove_input").value;
    ul.removeChild(ul.childNodes[index-1]);
  
  }
