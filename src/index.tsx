import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios"
import App from './App';
import { ReactComponent } from '*.svg';
import { string } from 'prop-types';
class State{
    logged_in:Boolean;
    username:string;
    password:string
}
//const URL = "http://127.0.0.1:8088";
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
        console.log(status);
    }
    handleSubmit(event:React.FormEvent){
        event.preventDefault();
        this.setState({
            ["logged_in"]: true,
        })
        //console.log("loging in")
        const data = event.target;
        this.login(this.state.username,this.state.password)
        console.log(data)
        this.state.logged_in=true;
       
    }
    handleInputChange(event:any){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} action="">
                <input type="text" name="username"></input>
                <input type="password" name="password"></input>
                <input type="Submit"></input>
                <div>
                    {this.get_logged_in()}
                </div>
            </form>
            
        );
    }
}
ReactDOM.render(<Login></Login>,document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
