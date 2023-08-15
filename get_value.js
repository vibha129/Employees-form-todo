 //var entry=document.getElementById("Entry");
 //entry.addEventListener("click",displayDetalis);
 var row=1;
 var CompanyNameInput="";
 var selectedRow=0;
 var formData={};
 var list={};
 
 function FormSubmit(){

  var formData=readData();
  optionvaluesinsert(formData);
  if (selectedRow==0){
   displayDetalis();
   // showdate();
 }
  else{
   UpdataRecord(formData);
  }
 }
 var m=[];
 var d=1;
 function displayDetalis(){
  var firstName=document.getElementById("uname").value;
  var lastName=document.getElementById("lastname").value;
  var doc=document.getElementById("Email").value;
  var Mob=document.getElementById("Mobile").value;  
  var company=document.getElementById("companyname").value;
  var serialno=document.getElementById("serialNo").value; 
  m.push(serialno);
  
  var display=document.getElementById("show_display");
  var newRow=display.insertRow(d);
   alert(m);
   CompanyNameInput=company;
  
   if(ValidateEmail(doc)==true)
   {
     alert("true condition");
   }
   else{
    alert("false condition");
   }
   list['email_index']=doc;
   var len=Object.keys(list).length;
  
   var modify=doc;
   if(emailduplicate(doc,2)==true)
   {
    if (ValidateEmail(doc)) {

    if(Mob.length==10)
    {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      
      var mylist=[firstName,lastName,doc,Mob,company,dateTime];
      
      var cell1=newRow.insertCell(0);
      var cell2=newRow.insertCell(1);  
      var cell3=newRow.insertCell(2); 
     
      var cell4=newRow.insertCell(3);
      var cell5=newRow.insertCell(4);
      var cell6=newRow.insertCell(5);
      var cell7=newRow.insertCell(6);
      var cell8=newRow.insertCell(7);
      //insert the value through the users.
      for (var i=1; i<m.length+1; i++) {
        cell1.innerHTML=i;
        console.log(i);
      }
       
       cell2.innerHTML=mylist[1];
       cell3.innerHTML=mylist[2];
       cell4.innerHTML=mylist[3];
       cell5.innerHTML=mylist[4];
       cell6.innerHTML=mylist[5];

       cell8.innerHTML=mylist[7];
       cell7.innerHTML=mylist[6];
       cell8.innerHTML='<a onClick="onEdit(this)"><u>Edit</u></a> <a onClick="onDelete(this)"><u>Delete</u></a>';
       d++;
     }


    else{
      alert("enter the valid Number");
    }
  if(!firstName || !lastName || !doc || !Mob){
     alert("Please fill  all the boxes");  
   return;
  } 
  }
  }
 }
function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("show_display");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}
function readData()
{
  var firstName=document.getElementById("uname").value;
  var lastName=document.getElementById("lastname").value;
  var doc=document.getElementById("Email").value;
  var Mob=document.getElementById("Mobile").value;  
  var company=document.getElementById("companyname").value;

  formData['uname']=firstName;
  formData['lastname']=lastName;
  formData['Email']=doc;
  formData['Mobile']=Mob;
  formData['CompanyName']=company;
  return formData;
}
function resetForm (){
document.getElementById("uname").value="";
document.getElementById("lastname").value="";
document.getElementById("Email").value="";
document.getElementById("Mobile").value="";  
}
function onEdit(td){
  //alert("hello");
 selectedRow=td.parentElement.parentElement;
  document.getElementById("uname").value=selectedRow.cells[0].innerHTML;
  document.getElementById("lastname").value=selectedRow.cells[1].innerHTML;
  document.getElementById("Email").value=selectedRow.cells[2].innerHTML;
  document.getElementById("Mobile").value=selectedRow.cells[3].innerHTML;
}
function UpdataRecord(formData){
 selectedRow.cells[0].innerHTML=formData.uname;
 selectedRow.cells[1].innerHTML=formData.lastname;
 selectedRow.cells[2].innerHTML=formData.Email;
 selectedRow.cells[3].innerHTML=formData.Mobile;
 selectedRow=0;
}
function onDelete(td){
  if(confirm("Are you sure delete this record")){
  row=td.parentElement.parentElement;
  document.getElementById("show_display").deleteRow(row.rowIndex);
  resetForm();
  }
}
function emailduplicate(value,inedx)
{
  // var oTable=document.getElementById('show_display');
  // var i;
  // var rowLength = oTable.rows.length;
  // for (i = 1; i < rowLength; i++) {
  //   var oCells = oTable.rows.item(i).cells; 
  //   if (value == oCells[inedx].firstChild.data) {
  //      alert("Email duplicate value");
  //       return false;
  //       break;
  //   }
  // }
   return true;
}
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
function sortTable(n) {
  // var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  // table = document.getElementById("show_display");
  // switching = true;
  // dir = "asc";
  // while (switching) {
  //   // Start by saying: no switching is done:
  //   switching = false;
  //   rows = table.rows;
  //   for (i = 1; i < (rows.length - 1); i++) {
     
  //     shouldSwitch = false;
  //     x = rows[i].getElementsByTagName("TD")[n];
  //     y = rows[i + 1].getElementsByTagName("TD")[n];
     
  //     if (dir == "asc") {
  //       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
  //         // If so, mark as a switch and break the loop:
  //         shouldSwitch = true;
  //         break;
  //       }
  //     } else if (dir == "desc") {
  //       if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
  //         // If so, mark as a switch and break the loop:
  //         shouldSwitch = true;
  //         break;
  //       }
  //     }
  //   }
  //   if (shouldSwitch) {
  //     rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  //     switching = true;
  //     switchcount ++;
  //   } else {
  //     if (switchcount == 0 && dir == "asc") {
  //       dir = "desc";
  //       switching = true;
  //     }
  //   }
  // }
}
function optionvaluesinsert(list)
{
  var x=document.getElementById("CompanyName");
  var option=document.createElement("option");
  if (CompanyNameInput!=formData.CompanyName) {
  x.add(new Option(formData.CompanyName,formData.CompanyName));
 }
}
function NumbersortTable(n)
 {
  // alert("helllo");
  // var table, rows, switching, i, x, y, shouldSwitch;
  // table = document.getElementById("show_display");
  // switching = true;
  
  // while (switching) {
  //   switching = false;
  //   rows = table.rows;

  //   for (i = 1; i < (rows.length - 1); i++) {
  //     shouldSwitch = false;
  //     x = rows[i].getElementsByTagName("TD")[n];
  //     y = rows[i + 1].getElementsByTagName("TD")[n];
      
  //     if (Number(x.innerHTML) > Number(y.innerHTML)) {
  //       shouldSwitch = true;
  //       break;

  //     }
  //     if (Number(x.innerHTML)< Number(y.innerHTML)) {
  //       shouldSwitch = true;
  //       break;
        
  //     }
  //   }
  //   if (shouldSwitch) {
  //     rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  //     switching = true;
  //     switchcount++;
  //   }
  // }
}
function CName()
{
   var strUser="";
   var x = document.getElementById("CompanyName").selectedIndex;
   var y = document.getElementById("CompanyName").options;
    var input, filter, found, table, tr, td, i, j;

   if (x>0) 
   {
     strUser=y[x].text;
     var t=strUser.toUpperCase();
     console.log(t);
    table = document.getElementById("show_display");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(t) > -1) {
                found = true;
                console.log(td[j]);
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
            //console.log("true");
        } else {
            tr[i].style.display = "none";
            //console.log("false");
        }
    }
  }
}