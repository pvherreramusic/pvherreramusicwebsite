import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Iframe from "react-iframe";
import Comments from "./ContactForm";





const Music = () => (
  <div>
    <h1>WELCOME TO PV HERRERA MUSIC</h1>
    <h2>PLEASE, ENJOY THE MUSIC</h2>
    <h3>Please visit Bandcamp to buy a CD or Digital Download.</h3>

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
            url="https://bandcamp.com/EmbeddedPlayer/album=1729143350/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/"
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
            url="https://bandcamp.com/EmbeddedPlayer/album=1301991312/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/"
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
        <Grid.Column width={4}>
          <Iframe
            url="https://bandcamp.com/EmbeddedPlayer/album=40784967/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/tracklist=true/tracks=533393158,2948037564,3772676358,601271290,2644100421,1285308926,2700745509,813243993/esig=e4c92d20a21f6b773d8e9a8a4f3aaef0/"
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

  </div>


);

export default Music;
