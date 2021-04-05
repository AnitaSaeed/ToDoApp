function myFunction() {
   var i=1;
   var table=document.getElementById("tab")
   var tr=document.createElement("tr")
   var item=document.createElement("td")
   var td=document.createElement("td")
   td.className='td'
    item.innerText= document.getElementById("item").value
    
    table.appendChild(tr)
    tr.appendChild(item)
    tr.appendChild(td)
    
   
    var check = document.createElement("BUTTON");
    check.innerHTML = "Done";
    td.appendChild(check);
    check.className="check"
    check.addEventListener("click",function(){
      
      if(i==1){
        check.style= " background-color: #4CAF50; -+border: none;color: white;"
        i--;
        

      }
      else{
        check.style=""
        i++
      }
      
      console.log(i)
      
    }
    )

    var del = document.createElement("BUTTON");
    del.innerHTML = "X";
    td.appendChild(del);
    del.className="del"
    del.addEventListener("click",function(){
      var result=confirm("are you sure?")
      if(result== true){
        tr.remove();
      }
      
      
    })


  }