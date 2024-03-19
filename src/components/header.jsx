function Header(props) {
    return ( 
        <>
            <h1>To-Do App</h1>
            <div id="inputCont">
                <input type="text" name="input" value={props.text} id="to_do_input" onKeyDown={props.keyDown} onChange={props.change} placeholder="Enter your To-Do" />
                <button id="send" onClick={props.addArray} >Send</button>
            </div>
        </>
     );
}

export default Header;