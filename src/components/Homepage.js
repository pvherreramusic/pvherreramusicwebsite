import React from "react";
import { Grid, Image, Feed} from "semantic-ui-react";
import Iframe from "react-iframe";


const events = [
  <br></br>,
  <br></br>,
  {
    date: "April 16, 2021",
    summary:
      " New Album out: LINEAR SOUND INSTR.. 8 NOS songs written from 2007-2010 recorded and redone from 2020-2021. Enjoy.",
  },
  
];

const Homepage = () => (
  <div>
    <h1>WELCOME TO PV HERRERA MUSIC</h1>

    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={6}>
          <Image
            src="https://i.ibb.co/WHWdkHK/Screen-Shot-2020-02-24-at-9-32-32-AM.png"
            width="520px"
            height="320px"
          />
        </Grid.Column>

        <Grid.Column width={2}></Grid.Column>

        <Grid.Column width={6}>
          <Feed events={events} />
          <Iframe
            url="https://bandcamp.com/EmbeddedPlayer/album=40784967/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
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

export default Homepage;
