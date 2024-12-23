
function Button(props){

    
    return(
        <>
        <button onClick = { () =>{
            alert(props.message)
        }}> {props.text} </button>
        </>
    );
}

export default Button;
