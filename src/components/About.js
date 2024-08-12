import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/userContext";

const About0 = () => {
    return(
        <div>
            <h1>About us Page </h1>
        </div>
    );
    
};


class About extends React.Component {
    constructor(props){
        super(props);
        console.log("parent constructor")
    }

    componentDidMount(){
        this.timer = setInterval(() =>{
            console.log("parent mount");
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        console.log("parent render")
        return (
            <>
            <h1>About us</h1>
            <UserContext.Consumer>
                {({user}) => (
                    <h4>{user.name}</h4>
                )}
            </UserContext.Consumer>
           
            <Outlet />
            <ProfileClass/>
            </>
        )
    }
}

export default About;