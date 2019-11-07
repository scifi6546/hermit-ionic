import { IonContent,IonLabel,IonText, IonHeader, IonPage, IonTitle,IonList, IonToolbar, IonItem, IonImg, IonThumbnail } from '@ionic/react';
import React from 'react';
import { string } from 'prop-types';
import Login from "./Login"
import VideoView from "./Video"
import axios from "axios"
class video{
  name:string;
  url:string;
  thumbnail_url:string;
  html_url:string;
  path:string;
}
class State{
  videos:[video];
  playing_video:string;
}
class VideoThumb extends React.Component{
  state:State;
  num_rows:Number = 4
  constructor(props:React.Component){
    super(props);  
    

    this.state={
      videos:null,
      playing_video:null
    }
    this.fetch_videos();
    console.log(this.state);
    this.click=this.click.bind(this);
  }
  async fetch_videos(){
    let data =await axios("/api/videos");
    console.log(data);
    this.setState({
      ["videos"]:data["data"]["Ok"]
    });
    console.log(this.state);
  }
  click(event:any){
    console.log(event);
    console.log(event.target.id);
    this.setState({
      ["playing_video"]:event.target.id,
    })
  }
  render(){
    if(this.state.videos==null){
      return (<div></div>);
    }
    if(this.state.playing_video!=null){
      window.location.href="/videos"+this.state.playing_video;
    }
    
    let temp_out = this.state.videos.map((vid)=>
    <IonItem>
      <IonLabel>
        <IonThumbnail>
        <IonImg src={vid.thumbnail_url} onClick={this.click} id={vid.url} key={vid.thumbnail_url}></IonImg>
        </IonThumbnail>
      </IonLabel>
      <IonLabel>
        <IonText class="ion-text-wrap">
          {vid.name}
        </IonText>
      </IonLabel>
    </IonItem>
    );
    console.log("thumbnails:");
    console.log(temp_out)
    return temp_out;
  }
}
class VideoPage extends React.Component{
  constructor(props: any){
      super(props);
  }
  render(){
      return(
              <IonList>
               <VideoThumb></VideoThumb>
              </IonList>
      );
  }
}
class Home extends React.Component{
  state:State;

  constructor(props:React.Component){
    super(props);  
  }
  render(){
    if(sessionStorage.getItem("logged_in")!="true"){
      return (<Login></Login>)
    }
    return (
    <IonPage>
      <IonHeader>
      <IonToolbar>

      </IonToolbar>
      </IonHeader>
      <IonContent>
      <VideoPage/>
      </IonContent>
    </IonPage>);
  }
}
export default Home;
