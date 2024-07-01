import UserContext from "../utils/userContext";
import UserContext from "../utils/userContext";
import UserClass from "./UserClass"
import React from 'react'
// const About = () => {
//     return (
//         <>
//         <div>About</div>
//         {/* <User name="Vineet"/> */}
//         <UserClass name="Vineet"/>
//         </>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent did mount")
    }

    render(){
        console.log("Parent render")
        return (
            <>
        <div>About</div>
        <UserContext.Consumer>
            {({loggedInUser})=> (<h1>{loggedInUser}</h1>)}
        </UserContext.Consumer>

        <UserClass name="Vineet"/>
        </>
        )
    }
}

export default About