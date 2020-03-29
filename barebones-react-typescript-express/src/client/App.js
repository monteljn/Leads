import React, {useState, useEffect} from 'react';
import leads from '../server/db/leads';
//import './App.css';

function App(){
	useEffect(() => {
		fetchLeads();
	}, []);

	const [leads, setleads] = useState([]);

	const fetchLeads = async () => {
		const data = await fetch('/api/leads');
		const leads = await data.json();
		setleads(leads);
	};



		return (
			<div>
				<h1 className="text-primary text-center">My DB </h1>
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
							<td className="list-group-item">{Lead.couple_name}</td>
							<td className="list-group-item">{Lead.email_address}</td>
							<td className="list-group-item">{Lead.phone_nbr}</td>
							<td className="list-group-item">{Lead.event_date}</td>
							<td className="list-group-item">{Lead.guest_count}</td>
							<td className="list-group-item">{Lead.budget}</td>
							<td className="list-group-item">{Lead.stage_desc}</td>
						</tr>)
					})}
				</table>
			</div>
		);
	
}

export default App;
