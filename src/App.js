import React from 'react';
import logo from './logo.svg';
import Homepage from './Homepage';
import Navbar from './Navbar';
import { Responsive, Menu, Grid, Container, Segment,Icon,Embed, Button, Divider } from 'semantic-ui-react';
import './App.css';
import BackgroundImage from "./images/JP_Clipboard_Image.png"
import detectBrowserLanguage from 'detect-browser-language';


function App() {
  const browserLang = detectBrowserLanguage().toLowerCase();
  const spanish = browserLang.indexOf("es") > -1;
  return (
    <div style={{"overflow":"hidden"}}>
      <div className="App">
      <Navbar browserLang={browserLang}></Navbar>
      <header className="App-header">
        <Homepage browserLang={browserLang}>
          
        </Homepage>
      </header>
      <section>
      
        <Container>
          <h1>{spanish? "Cómo Funciona":"How it works"}</h1>  
          <Grid centered stackable columns={3}>
            <Grid.Column>
              <Segment>
                <Grid container centered>
                  <Grid.Row>
                    <Icon name="cloud upload" size="big" color="purple"></Icon>
                  </Grid.Row>
                  <Grid.Row>
                    <h2>{spanish? "Envío":"Upload"}</h2>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment compact basic size="large" style={{"padding":"0"}}>
                      {spanish? "Envíanos de forma segura los datos que necesitas analizar":
                      "Send us the data that you need to analyze"}
                    </Segment>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                 <Grid container centered>
                  <Grid.Row>
                    <Icon name="cogs" size="big" color="purple"></Icon>
                  </Grid.Row>
                  <Grid.Row>
                    <h2>{spanish? "Análisis":"Analyze"}</h2>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment compact basic size="large" style={{"padding":"0"}}>
                      {spanish? "Nosotros analizamos los datos con nuestros algoritmos de visión computacional":
                      "We analyze the data using our computer vision algorithms"}
                    </Segment>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                 <Grid container centered>
                  <Grid.Row>
                    <Icon name="map" size="big" color="purple"></Icon>
                  </Grid.Row>
                  <Grid.Row>
                    <h2>{spanish? "Reporte":"Report"}</h2>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment compact basic size="large" style={{"padding":"0"}}>
                      {spanish? "Recibe un reporte con el insight que necesitas para tomar decisiones informadas":
                      "Receive a report with the insight that you need to make informed decisions"}
                    </Segment>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
        
      </section>
      <section>
        <Grid container stackable columns={2} verticalAlign='middle'>
          <Grid.Column>
            <Embed id="Qha3sMSNIEM" hd defaultActive brandedUI color="purple" source="youtube" autoplay={true}>
              
            </Embed>
          </Grid.Column>
          <Grid.Column>
              <h1>{spanish? "El programa en acción":"Our program in action"}</h1>
              <Segment basic size="massive">
                niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              </Segment>
              <Button className="CTA-2" size="huge" href="#contact-us">
                {spanish? "Aprender más": "Learn more"}
              </Button>
          </Grid.Column>
        </Grid>
      </section>
      <section className="purpleBack" >
        <Grid container stackable columns={2} verticalAlign='middle'>
          
          <Grid.Column>
              <h1>{spanish? "Por qué escoger a Engin.ai":"Why Choose Engin.ai"}</h1>
              <Segment basic size="massive">
                niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              </Segment>
          </Grid.Column>
          <Grid.Column>
            
          </Grid.Column>
        </Grid>
      </section>
      <section className="cta-section" id="contact-us">
      <Grid.Row centered>
        <h1>{spanish? "Contáctenos": "Contact Us"}</h1>
      </Grid.Row>
        <Grid container stackable columns={2} verticalAlign='middle'>
          
          <Grid.Column>
              <h1>{spanish? "Por qué escoger a Engin.ai":"Why Choose Engin.ai"}</h1>
              <Segment basic size="massive">
                niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              </Segment>
          </Grid.Column>
          <Grid.Column>
            
          </Grid.Column>
        </Grid>
      </section>
    </div>
    </div>
      
    
  );
}

export default App;
