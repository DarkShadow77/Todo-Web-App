function ToDoList(props) {
    return (
        <>
            <li key={props.index}>
                <div id="value">
                    {props.value}
                </div>
                <div id="buttons">
                    <button onClick={props.editClick} id="edit">Edit</button>
                    <button onClick={props.deleteClick} id="delete">Delete</button>
                </div>
            </li>

        </>
    );
}

export default ToDoList;