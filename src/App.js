import React, { Component } from 'react';

class App extends Component {
  state = { 
    boards: [ 
      { 
        brdno: 1, 
        brdwriter: 'Twice', 
        brdtitle: 'If you intend to live then you die', 
        brddate: new Date()  
      },
      { 
        brdno: 2, 
        brdwriter: 'Itzy', 
        brdtitle: 'Founder for two countries'
        , brddate: new Date() 
      } 
    ] 
  }

  render(){
    const {boards} = this.state;
    const list = boards.map(function(row){
      return row.brdno + row.brdwriter + '\n';
    });

    return(
      <p>
        {list}<br/>
      </p>
    )

  }

}

export default App;
