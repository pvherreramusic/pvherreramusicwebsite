import React from 'react'
import { Tab } from 'semantic-ui-react'
import { Music, Homepage , JavaSc} from "./index";

const panes = [
  { menuItem: 'Home/News', render: () => <Homepage></Homepage>},
  { menuItem: 'Music Content', render: () => <Music></Music> },
  { menuItem: 'JavaScript Projects', render: () => <JavaSc></JavaSc>}

  
]

const Album = () => (
  <Tab
    menu={{ fluid: true, vertical: true }}
    menuPosition='right'
    panes={panes}
    style={{
      backgroundColor: 'Aqua',
  
    }}
  />
  


  
)

export default Album