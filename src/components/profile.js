import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2:1,
        };
        console.log("1 child constructor");
    }

    componentDidMount(){
        console.log("1 child mount");
    }
    render(){
        console.log("1 child render");
        const {count} = this.state;
        return(
            <>
            <h1>profile page first child</h1>
            <h2>{this.props.name}</h2>
            <h2>{count}</h2>
            <h2>{this.state.count2}</h2>

            <button onClick={ () => {
                 this.setState({
                    count:1,
                    count2:0,
                 })
            }} />

            </>
        );
    }
}

export default Profile;