var list1=document.getElementById("list")
var box = document.getElementById("box")

function todo(){
    var input = document.getElementById("input");
    if(input.value!="")
    {
    //list
    var table = document.createElement('TABLE');
    
    box.appendChild(table);
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    var l = document.createTextNode(input.value);
    var td = document.createElement('TD');
      td.appendChild(l);
      tr.appendChild(td);
    input.value="";
    //del button
    var del = document.createElement('button');
    var deltext = document.createTextNode("Delete")
   
    del.setAttribute("onclick","del(this)");
    del.setAttribute("class","del");
    del.appendChild(deltext);
    
    var td = document.createElement('TD');
     
      td.appendChild(del);
      tr.appendChild(td);
    
   
    //edit button
    var edit = document.createElement('button');
    var edittext = document.createTextNode("Edit")
   
    edit.setAttribute("onclick","edit(this)");
    edit.setAttribute("class","edit");
    edit.appendChild(edittext);
   
    var td = document.createElement('TD');
      td.appendChild(edit);
      tr.appendChild(td);
     
    }
}

function del(e){ 
   e.parentNode.parentNode.remove() 
}

function deleteall(){  
   box.innerHTML= "" ;
}
function edit(e){
   e.parentNode.parentNode.setAttribute("contenteditable","true")
}
