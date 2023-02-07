function print()
{
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let number=document.getElementById('Phone').value;
    let date=new Date(document.getElementById("tfc").value);
    let time=document.getElementById("time").value;
    let d=date.getDate();
    let m=date.getMonth()+1;
    let y=date.getFullYear();
    let Time=document.getElementById('time').value;
    document.write("Name: "+name);
    document.write("<br>");
    document.write("Email Id: "+email);
    document.write("<br>");
    document.write("Phone NO.: "+number);
    document.write("<br>");
    document.write("Date:"+d+"-"+m+"-"+y);
    document.write("<br>");
    document.write("Time: "+time);

    let myObj={
        'name': name,
        'email': email,
        'number': number,
        'Date': `${d}-${m}-${y}`,
        'Time': Time
    };


    //localStorage.setItem('Name',name);
    //localStorage.setItem('Email',email);
    //localStorage.setItem('Mobile',number);
    //localStorage.setItem('Date',`${d}-${m}-${y}`);
    //localStorage.setItem('Date',m);
    //localStorage.setItem('Date',y);
    //localStorage.setItem('Time',time);

    let myObj_serialized=JSON.stringify(myObj);

    //console.log(myObj_serialized);

    localStorage.setItem('myObj',myObj_serialized);

    //localStorage.setItem('myObj', myObj);
    console.log(localStorage);


    //console.log(localStorage.getItem('myObj'));
}
