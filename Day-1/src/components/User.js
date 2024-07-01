import {useState} from 'react'
const User = ({name}) => {
    const count = useState(0)
    const count2 = useState(2)
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count2 :{count2}</h1>
            <h1>Name : {name} (Functional)</h1>
            <h2>Location : Pune</h2>
            <h3>Contact : vineetmall150@gmail.com</h3>
        </div>
    )
}

export default User