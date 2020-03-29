import React, {useState, useEffect} from 'react';
import './App.css'; 
import AddLead from './AddLead';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function AllLeads() {

  useEffect(() => {
    fetchLeads();
	}, []);

	const [leads, setleads] = useState([]);

	const fetchLeads = async () => {
		const data = await fetch('http://localhost:3001/api/leads');
    const leads = await data.json();
		setleads(leads);
  };
  
    
  const updateLead = async (event) =>{
    // var stageSelect = document.getElementById('stageSelect');
    //console.log(stageSelect.value);
    console.log(event.target.value);
    console.log(event.target.id);
    //const data = await fetch('http://localhost:3001/api/update/id/1/stage/4');
    const data = await fetch('http://localhost:3001/api/update/id/' + event.target.id + '/stage/' + event.target.value + '');
    const leads = await data.json();
    setleads(leads);
  }
  
  const addLead = () =>{
    window.location.href = './AddLead';
  }

  return (
    <div>
      <h1 className="text-primary text-center">All Leads </h1>
      <button onClick={addLead}>  
        Add New Lead
      </button> <br></br><br></br>
      <table>
        <tr>
        <th>Couple Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Event Date</th>
        <th>Guest Count</th>
        <th>Budget</th>
        <th>Stage</th>
        </tr>
        {leads.map(Lead =>{
          return(
          <tr>	
            <td>{Lead.couple_name}</td>
            <td>{Lead.email_address}</td>
            <td>{Lead.phone_nbr}</td>
            <td>{Lead.event_date}</td>
            <td>{Lead.guest_count}</td>
            <td>{Lead.budget}</td>
            <td><select id={Lead.id} value={Lead.stage_id} onChange={updateLead}>
              <option value='1'> New</option>
              <option value='2'> Qualified</option>
              <option value='3'> Tour Confirmed</option>
              <option value='4'> Toured</option>
              <option value='5'> Booked</option>
              </select></td>
           
          </tr>)
        })}
      </table>
    </div>
  );
}



export default AllLeads;
