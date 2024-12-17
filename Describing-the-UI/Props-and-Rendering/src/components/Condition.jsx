
function Condition({item, isPacked}){
    return(
        <ul>
            <li> Your {item} is {isPacked ? "packed" : "not packed"} </li>
        </ul>
    )
}


export default Condition