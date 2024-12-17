import {useDefaultProps} from "react";

const Props = (props) =>{
    let name = props.name;
    let age = props.age;

    const defaultProps =  useDefaultProps({
        name:"Tithi",
        age:19  
    })

    return(
        <div>
            <h1>My name is {name} and my age is {age}</h1>
        </div>
    )

    
}


export default Props