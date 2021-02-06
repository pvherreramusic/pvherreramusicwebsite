import React from "react";
import { Tab } from "semantic-ui-react";
import { Music, Homepage, JavaSc, ImageExampleGroupSize, Footer} from "./index";
import MusicFriends from "./MusicalFriends";


const panes = [
  { menuItem: "Home/News", render: () => <Homepage></Homepage> },
  { menuItem: "Music Content", render: () => <Music></Music> },
  { menuItem: "JavaScript Projects", render: () => <JavaSc></JavaSc> },
  {
    menuItem: "Pictures of P.V. Herrera by his Friends",
    render: () => <ImageExampleGroupSize></ImageExampleGroupSize>,
  },
  {
    menuItem: "Musical Friends you should check out",
    render: () => <MusicFriends></MusicFriends>,
  },
];

const Album = () => (
  <div>
  <Tab
    menu={{ fluid: true, vertical: true }}
    menuPosition="right"
    panes={panes}
    style={{
      backgroundColor: "Aqua",

    }}
    
  />
  <Footer
  
  ></Footer>
</div>



)


export default Album;
