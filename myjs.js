document.addEventListener('DOMContentLoaded',loadItems);
function loadItems()
{
    let ul=document.querySelector('#list-of-users');
    for(x in localStorage){
        if(x=='length')
            break;
        var value = localStorage.getItem(x);
        console.log(value);
        value = JSON.parse(value);
        //var li = createNewLi(value.item, value.desc);
        //itemList.appendChild(li);
        var li=document.createElement('li');
        li.className='user_records';
        li.appendChild(document.createTextNode(value.name));  
        li.appendChild(document.createTextNode(value.email));
        li.appendChild(document.createTextNode(value.number));
        li.appendChild(document.createTextNode(value.Date));
        li.appendChild(document.createTextNode(value.Time));
        console.log(li);
        ul.append(li);
        //new_div.append(value.name);
    }
}
function print(e)
{
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let number=document.getElementById('Phone').value;
    let date=new Date(document.getElementById("tfc").value);
    let time=document.getElementById("time").value;
    let d=date.getDate();
    let m=date.getMonth()+1;
    let y=date.getFullYear();
    let Time=document.getElementById('time').value;
   
    //let user_records=new Array();
    //let get_user_records=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]


    let user_records={
        'name': name,
        'email': email,
        'number': number,
        'Date': `${d}-${m}-${y}`,
        'Time': Time
    };

    localStorage.setItem(user_records.name,JSON.stringify(user_records));

    
    console.log(user_records);
    //document.write("Name: "+name);
    //document.write("<br>");
    //document.write("Email Id: "+email);
    //document.write("<br>");
    //document.write("Phone NO.: "+number);
    //document.write("<br>");
    //document.write("Date:"+d+"-"+m+"-"+y);
    //document.write("<br>");
    //document.write("Time: "+time);


    //localStorage.setItem('Name',name);
    //localStorage.setItem('Email',email);
    //localStorage.setItem('Mobile',number);
    //localStorage.setItem('Date',`${d}-${m}-${y}`);
    //localStorage.setItem('Date',m);
    //localStorage.setItem('Date',y);
    //localStorage.setItem('Time',time);

    //let myObj_serialized=JSON.stringify(myObj);

    //console.log(myObj_serialized);

    //localStorage.setItem('formData',JSON.stringify(formData));

    //localStorage.setItem('myObj', myObj);
    //console.log(localStorage);

    //display();
    
    //localStorage.removeItem(user_records[0]);
    //console.log(localStorage.getItem('myObj'));
}



    

