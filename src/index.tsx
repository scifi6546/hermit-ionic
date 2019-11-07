import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ReactComponent } from '*.svg';
import { string } from 'prop-types';
import { IonContent, IonInput,IonHeader, IonButton,IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';

class MainPage extends React.Component{
    constructor(props:React.Component){
        super(props);
    }
    render(){
        return(
            <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonButton>
                                Videos
                            </IonButton>
                        </IonToolbar>
                    </IonHeader>

            </IonPage>
        )
    }
}


ReactDOM.render(<App/>,document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
