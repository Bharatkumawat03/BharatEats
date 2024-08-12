import React from "react";

class ProfileClass extends React.Component {
    constructor(props){
        super(props);
        console.log("2 child constructor")
    }

    componentDidMount(){
        console.log("2 child mount");
    }
    render(){
        console.log("2 child render");

        return(
            <h1>profile page second child</h1>
        );
    }
}

export default ProfileClass;