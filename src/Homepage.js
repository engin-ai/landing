import React, {Component} from 'react';
import { Responsive, Segment, Button, Icon } from 'semantic-ui-react';
import './App.css';

const Homepage = (props)=>{
	const browserLang = props.browserLang;
	const spanish = browserLang.indexOf("es") > -1;
	return (
		<Segment basic style={{width:"70%"}}>
			<h1 style={{"textTransform": "uppercase"}}>
			{spanish ? (
				"Empoderamos su negocio con inteligencia artificial"
				):
				"Empowering your business with artificial intelligence"}
			
			</h1>
			<br/>
			<br/>
			<h2>{spanish ? 
				"Engin.ai es su aliado estratégico" : 
				"Engin.ai is your strategic partner"}</h2>
			<br/>
			<Button className="mainCTABtn" inverted color="white" size="huge" syle={{"width":"50%"}} href="#contact-us">
				{spanish?
					<span className="buttonText">Contáctenos</span> 
					 : 
					<span>Contact Us</span>}
				<span className ="iconContainer" style={{"display":"inline-block", "width":"10px"}}>
					<Icon name="chevron right">
						
					</Icon>
				</span>
			</Button>
		</Segment>
		
		);

}


export default Homepage;