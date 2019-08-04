import React, {Component} from 'react';
import { Responsive, Segment, Button } from 'semantic-ui-react';
import './App.css';

const Homepage = ()=>{
	return (
		<Segment basic style={{width:"70%"}}>
			<h1 style={{"textTransform": "uppercase"}}>Empoderamos su negocio con inteligencia artificial</h1>
			<br/>
			<br/>
			<h2>Engin.ai es su aliado estratégico</h2>
			<br/>
			<Button className="mainCTABtn" inverted color="white" size="huge" syle={{"width":"50%"}}>Contáctenos</Button>
		</Segment>
		
		);

}


export default Homepage;