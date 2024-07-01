import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count : 0,
            userInfo:{
                name: "user name",
                location: "user location",
                avatar_url:"...user_img"
            }
        }
        console.log("Child constructor")
    }

    async componentDidMount(){
        console.log("child did mount")
        const userInfo = await fetch("https://api.github.com/users/vineet7388")
        const userData = await userInfo.json()
        this.setState({
            userInfo:userData
        })

        this.interval = setInterval(() => {
            console.log("interval set")
        }, 1000);
    }

    componentDidUpdate(prevProps,prevState){
        if(this.props.count!==prevProps.count){
            // do something
        }
        if(this.state.count!==prevState.count){
            // do something
        }
        console.log("component updated")
    }

    componentWillUnmount(){
        clearInterval(this.interval);
        console.log("component unmount called")
    }

    render () {
        console.log("render cycle")
        const {name,location,avatar_url}= this.state.userInfo
        return (
            <div className="user-card">
                <h1 onClick={()=>{this.setState({count : this.state.count+1})}}>Count : {this.state.count}</h1>
                <h1>Name : {name} (Class)</h1>
                <h2>Location : {location}</h2>
                <h3>Contact : vineetmall150@gmail.com</h3>
                <img src={avatar_url}/>
            </div>
        )
    }
}

export default UserClass