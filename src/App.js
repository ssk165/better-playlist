import React, { Component } from 'react';
import './App.css';

let fakeServerData = {
  user : {
    name: 'shubham',
    playlists:[
      {
        name:"My favourite",
        songs:[
          {name:'Beat It',duration: 1345},
          {name:'Connaloni Makkroni',duration: 1236},
          {name:'Rosa Helicopter',duration: 7000}
        ]
      },
      {
        name:"Discover Weekly",
        songs:[
          {name:'Beat It',duration: 1345},
          {name:'Connaloni Makkroni',duration: 1236},
          {name:'Rosa Helicopter',duration: 7000}
        ]
      },
      {
        name:"Wow a song!",
        songs:[
          {name:'Beat It',duration: 1345},
          {name:'Connaloni Makkroni',duration: 1236},
          {name:'Rosa Helicopter',duration: 7000}
        ]
      },
      {
        name:"Let's Nacho",
        songs:[
          {name:'Beat It',duration: 1345},
          {name:'Connaloni Makkroni',duration: 1236},
          {name:'Rosa Helicopter',duration: 7000}
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component{
  render(){
    return (
      <div style={{width:"40%",display:"inline-block"}}>
      <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    )
  }
}

class HoursCounter extends Component{
  render(){
    let allSongs = this.props.playlists.reduce((songs,eachPlaylist)=>{
      return songs.concat(eachPlaylist.songs)
    },[]);

    let totalDuration = allSongs.reduce((sum,eachSong)=>{
      return sum+eachSong.duration
    },0);

    return (
      <div style={{width:"40%",display:"inline-block"}}>
      <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    )
  }
}

class Filter extends Component{
   render(){
     return (
       <div>
       <img/>
       <input type="text"/>
       </div>
     )

   }
}

class Playlist extends Component{
   render(){
     return (
       <div style={{width:"25%",display:"inline-block"}}>
         <img/>
         <h3>Song 1</h3>
         <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
       </div>
     )

   }
}

class App extends Component {
  constructor(){
    super();
    this.state = {serverData : {}};
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({serverData:fakeServerData});
    },1000);

  }

  render() {
    let color = "green";

    return (
      <div className="App">
      {
        this.state.serverData.user ?
        <div>
        <h1>{ this.state.serverData.user.name}  playlist</h1>
        <PlaylistCounter playlists = {this.state.serverData.user && this.state.serverData.user.playlists}/>
        <HoursCounter playlists = {this.state.serverData.user && this.state.serverData.user.playlists}/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        </div> : <h1>Loading...</h1>
      }
      </div>
    );
  }
}

export default App;
