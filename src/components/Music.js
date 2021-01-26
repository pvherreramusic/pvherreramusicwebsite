import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Iframe from 'react-iframe'

const Music = () => (

      <div>

<h1>WELCOME TO PV HERRERA MUSIC</h1>
<h2>PLEASE, ENJOY THE MUSIC</h2>

  <Grid columns={2}>
  <Grid.Row>
  <Grid.Column width={4}>

 <p width="520px">Cigarettes and Weddings LP 1</p>

  </Grid.Column>
  <Grid.Column width={6}>
  <Image src='https://f4.bcbits.com/img/a3389450868_10.jpg' width="520px"
        height="320px" />

  </Grid.Column>
  <Grid.Column width={4}>
  <Iframe url="https://open.spotify.com/embed/album/7JVudtvhxjCv2Uw1CJ1uah"
        width="320px"
        height="320px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
  </Grid.Column>
  </Grid.Row>
  <Grid.Row>
  <Grid.Column width={4}>

 <p width="520px">Xanax and Mercy LP 2 </p>

  </Grid.Column>

  <Grid.Column width={6}>
  <Image src='https://f4.bcbits.com/img/a1809106631_10.jpg' width="520px"
        height="320px" />

  </Grid.Column>
  <Grid.Column width={4}>
  <Iframe url="https://open.spotify.com/embed/album/2NDEyvBtaYl8mftqcgaKIo"
        width="320px"
        height="320px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
  </Grid.Column>
  </Grid.Row>
</Grid>


</div>

)

export default Music;