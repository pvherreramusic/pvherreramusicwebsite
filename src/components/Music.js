import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Iframe from "react-iframe";
import Comments from "./ContactForm";





const Music = () => (
  <div>
    <h1>WELCOME TO PV HERRERA MUSIC</h1>
    <h2>PLEASE, ENJOY THE MUSIC</h2>

    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column width={4}>
          <p width="520px">Cigarettes and Weddings LP 1</p>
        </Grid.Column>
        <Grid.Column width={6}>
          <Image
            src="https://f4.bcbits.com/img/a3389450868_10.jpg"
            width="520px"
            height="320px"
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Iframe
            url="https://open.spotify.com/embed/album/7JVudtvhxjCv2Uw1CJ1uah"
            width="320px"
            height="320px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <p width="520px">Xanax and Mercy LP 2 </p>
        </Grid.Column>

        <Grid.Column width={6}>
          <Image
            src="https://f4.bcbits.com/img/a1809106631_10.jpg"
            width="520px"
            height="320px"
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Iframe
            url="https://open.spotify.com/embed/album/2NDEyvBtaYl8mftqcgaKIo"
            width="320px"
            height="320px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={4}>
          <p width="520px">Linear Sound Instr. LP 3</p>
        </Grid.Column>
        <Grid.Column width={6}>
          <Image
            src="https://f4.bcbits.com/img/a2685089535_10.jpg"
            width="520px"
            height="320px"
          />
        </Grid.Column>
      </Grid.Row>

      <h1>Soundcloud Tracks</h1>
      <Grid.Row>
        <Grid.Column width={6}>
          <Iframe
            url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/949854043&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            width="320px"
            height="320px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Iframe
            url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/966663577&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            width="320px"
            height="320px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </Grid.Column>

        <Grid.Column width={4}>
          <Iframe
            url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/966666784&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            width="320px"
            height="320px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>

  
<Comments></Comments>


  </div>


);

export default Music;
