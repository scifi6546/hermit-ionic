import { IonContent, IonInput,IonHeader, IonButton,IonPage, IonTitle, IonToolbar, IonButtons, IonGrid } from '@ionic/react';
import React from 'react';
import axios from "axios"
import { ReactComponent } from '*.svg';
class State{
    url:string
}
const vid_url_begin:string = "/videos/";

class VideoView extends React.Component{
    state:State;
    constructor(props:any){
        super(props);
        console.log("props")
        console.log(props)
        this.state={
            
            url:props.match.params.url_0+"/"+props.match.params.url_1+"/"+props.match.params.url_2,
        }
        console.log("state");
        console.log(this.state)
        
    }
    render(){
        return(<video src={this.state.url}></video>)
    }
}
export default VideoView