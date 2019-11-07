import { IonContent, IonInput,IonHeader, IonButton,IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import React from 'react';
import axios from "axios"
class State{
    logged_in:Boolean;
    username:string;
    password:string
}
class Login extends React.Component{
    state: State;
    constructor(props:React.Component){
        super(props);
        //this.logged_in="false";
        //let this.logg:string = "foo";
        this.state={
            logged_in:false,
            username:"",
            password:""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
        
    }
    componentDidMount(){
        //fetch(URL)
    }
    get_logged_in():string{
        if(this.state.logged_in==true){
            return "logged in"
        }
        return ("not")

    }
    async login(username:string,password:string){
        console.log("performing login")
        let status = await axios.post("/api/login",{
            username:username,
            password:password,
        })
        if(status.data=="logged in sucessfully")
            this.setState({
                ["logged_in"]: true,
            });
            sessionStorage.setItem("logged_in","true")
        console.log(status);
    }
    handleSubmit(event:React.FormEvent){
        event.preventDefault();
        
        //console.log("loging in")
        const data = event.target;
        this.login(this.state.username,this.state.password)
       
    }
    handleInputChange(event:any){
        console.log(event)
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        })
    }
    render(){
        return (
            <IonPage>
                
                    <form onSubmit={this.handleSubmit} action="">
                        <IonInput type="text" name="username" onIonInput={this.handleInputChange}></IonInput>
                        <IonInput type="password" name="password" onIonInput={this.handleInputChange}></IonInput>
                        <input type="Submit"></input>
                        <div>
                            {this.get_logged_in()}
                        </div>
                    </form>
            
            </IonPage>
            
        );
    }
}

export default Login;