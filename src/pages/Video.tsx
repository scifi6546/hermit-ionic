import { IonContent, IonInput,IonHeader, IonButton,IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import React from 'react';
import axios from "axios"
import { ReactComponent } from '*.svg';
class State{
    url:string
}
class VideoView extends React.Component{
    state:State;
    constructor(props:any){
        super(props);
        this.state={
            url:props.url,
        }
        
    }
    render(){
        return(<video src={this.state.url}></video>)
    }
}
export default VideoView