import React, {useState, useEffect} from 'react';
function AddLead() {

    useEffect(() => {
        //fetchLeads();
        }, []);
    
    const [leads, setleads] = useState([]);
    

    const addNewLead = async (event) =>{
        

        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var event_date = document.getElementById('event_date');
        var guest_count = document.getElementById('guest_count');
        var budget = document.getElementById('budget');

        var fetchString = 'http://localhost:3001/api/add/name/' + name.value +'/email/' + email.value +'/phone/' + phone.value +'/event_date/'+ event_date.value +'/guest_count/'+ guest_count.value +'/budget/'+ budget.value +'';
        console.log(fetchString);


        const data = await fetch(fetchString);
        const leads = await data.json();
        setleads(leads);
        
        window.location.href = './';

      }

    return (
        <div>
        <h1 className="text-primary text-center">Add New Lead </h1>
        <label>Name: <input type="text" id="name" /></label><br />
        <label>Email: <input type="text" id="email" /></label><br />
        <label>Phone: <input type="text" id="phone" /></label><br />
        <label>Event Date: <input type="text" id="event_date" /></label><br />
        <label>Guest Count: <input type="text" id="guest_count" /></label><br />
        <label>Budget: <input type="text" id="budget" /></label><br />

        <br /><input type="submit" value="Submit" onClick={addNewLead} />
        </div>
  );
}



export default AddLead;
