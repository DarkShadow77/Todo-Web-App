import { useState } from 'react'
import { Component } from 'react';
import './App.css'

class App extends Component {

    state = { to_do_Array: [], to_do_Text: "", todoLength: 0};

    render() { 
    
        let components = [];
        let to_do = this.state.to_do_Array;
        let todoText = this.state.to_do_Text;
    
        const changeText = (text) => {
            this.setState({
                to_do_Text: text,
            });
        };

        const searchKeyPress = () => {
            event.keyCode === 13 && addToArray();
        };

        const addToArray = () => {
            if (todoText.length > 0) {
                this.setState({
                    to_do_Array: [...to_do, todoText],
                    to_do_Text: "",
                });
            }
        };
    
        const editToDo = (index, value) => {
            let prompts = window.prompt("Edit To-Do,", value);

            if (prompts.length > 0) {
                let array = to_do;

                array.splice(index, 1, prompts);

                this.setState({
                    to_do_Array: [...array],
                    to_do_Text: "",
                });
            }
        };

        const deleteToDo = (index) => {
            let array = to_do;

            array.splice(index, 1);

            this.setState({
                to_do_Array: [...array],
                to_do_Text: "",
            });
        };

        to_do.forEach((value, index) => {
            components.push(
                <li key={index}>
                    <div id="value">
                        {value}
                    </div>
                    <div id="buttons">
                        <button onClick={()=>editToDo(index, value)} id="edit">Edit</button>
                        <button onClick={()=>deleteToDo(index)} id="delete">Delete</button>
                    </div>
                </li>
            );
        });

        return (
            <>
                <h1>To-Do App</h1>
                <div id="inputCont">
                    <input type="text" name="input" value={todoText} id="to_do_input" onKeyDown={searchKeyPress} onChange={() => changeText(event.target.value)} placeholder="Enter your To-Do" />
                    <button id="send" onClick={addToArray} >Send</button>
                </div>
        
        
                <div id="body">
                    {components}
                </div>
            </>
        )
    }
}
 
export default App;

// function App() {

//   const [todoText, setTodoText] = useState('');
//   const [to_do, setState] = useState([])

//   let components = [];

//   function changeText(text) {
//     setTodoText(text)
//   }

//   function searchKeyPress() {
//     event.keyCode === 13 && addToArray();
//   }

//   function addToArray() {
//     if (todoText.length > 0) {
//       setState([...to_do, todoText]);
//       setTodoText('')

//     }
//   }

//   function editToDo(key) {
//     let prompts = window.prompt("Edit To-Do,");
//     console.log(prompts)
//     if (prompts.length > 0) {
      
//       to_do_array.splice(x, 1, { text: prompts });
//       to_do_input.value = ""
//     }
//     displayArray(to_do_array);
//   }

//   function deleteToDo(index) {
//     to_do_array.splice(index, 1);

//     displayArray(to_do_array);
//   }

// to_do.forEach((value, index) => {
//       components.push(
//         <li key={index}>{value}
//           <div id="buttons">
//             <button id="edit">Edit</button>
//             <button id="delete">Delete</button>
//           </div>
//         </li>
//       )
//     })
//   return (
//     <>
//       <h1>To-Do App</h1>
//       <div id="inputCont">
//         <input type="text" name="input" value={todoText} id="to_do_input" onKeyDown={searchKeyPress} onChange={() => changeText(event.target.value)} placeholder="Enter your To-Do" />
//         <button id="send" onClick={addToArray} >Send</button>
//       </div>


//       <div id="body">
//         {components}
//       </div>
//     </>
//   )
// }

// export default App
