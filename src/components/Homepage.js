import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Iframe from 'react-iframe'

const Homepage = () => (
<div>
  <h1>WELCOME TO PV HERRERA MUSIC</h1>




  <Grid columns={2}>
  <Grid.Row>

  <Grid.Column width={6}>
  <Image src='https://i.ibb.co/WHWdkHK/Screen-Shot-2020-02-24-at-9-32-32-AM.png' width="520px"
        height="320px" />

  </Grid.Column>

  <Grid.Column width={2}>

  </Grid.Column>

  <Grid.Column width={6}>
  <h1>NEWS</h1>
  <p>WELCOME to the new site</p>
  <p>New album will be out on Feb 28th. There will be 9 tracks on a CD but 8 tracks on the digital version.  Also, a new theme for my friends new film will be recorded as well. I hope you have a wonderful day!</p>
  </Grid.Column>

  </Grid.Row>
</Grid>


</div>

)


export default Homepage;