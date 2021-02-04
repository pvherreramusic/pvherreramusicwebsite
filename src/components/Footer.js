import React, { useState } from "react";
import { Grid, Header } from "semantic-ui-react";

const Footer = () => {
  const [state, setState] = useState(false);
  let Bandcamp = "https://pvherreramusic.bandcamp.com";
  let Youtube = "https://www.youtube.com/channel/UCQfdibtYzntJgnVpcrnLXQg";
  let Instagram = "https://www.instagram.com/pvherreramusic/";
  let GitHub = "https://github.com/pvherreramusic";

  return (
    <div>
      <br></br>
      <Header
        as="h3"
        content="LINKS"
        style={{
          backgroundColor: "Grey",
        }}
        textAlign="center"
      />
      <Grid
        columns={4}
        doubling
        style={{
          backgroundColor: "black",
        }}
      >
        <Grid.Column>
          <a href={Bandcamp}>Bandcamp</a>
        </Grid.Column>
        <Grid.Column>
          <a href={Youtube}>Youtube</a>
        </Grid.Column>
        <Grid.Column>
          <a href={Instagram}>Instagram</a>
        </Grid.Column>
        <Grid.Column>
          <a href={GitHub}>GitHub</a>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Footer;
