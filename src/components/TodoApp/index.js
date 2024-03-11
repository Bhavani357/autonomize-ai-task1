import { Component } from "react";
import './index.css'
import { MdOutlineModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

class TodoApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
          tasks: [],
          taskCount: {},
          count:0
        };
      }

      handleAddTask = () => {
        const { inputValue, tasks, taskCount } = this.state;
        // const [taskName, count] = inputValue.split(' ');
        const inputList = inputValue.split(" ")
        const count = inputList[inputList.length-1]
        let taskName = inputList.slice(0,inputList.length-1)
        console.log(taskName)
        taskName = taskName.join(" ")

        const newTasks = [...tasks];
        newTasks.push(taskName);
        const newTaskCount = { ...taskCount };
        newTaskCount[taskName] = newTaskCount[taskName] ? newTaskCount[taskName] + parseInt(count || 1) : parseInt(count || 1);
        this.setState({ tasks: newTasks, taskCount: newTaskCount, inputValue: '' ,count: count});
      };

      handleDeleteTask = (index) => {
        const { tasks, taskCount } = this.state;
        const taskName = tasks[index];
        const newTasks = tasks.filter((_, i) => i !== index);
        const newTaskCount = { ...taskCount };
        delete newTaskCount[taskName];
        this.setState({ tasks: newTasks, taskCount: newTaskCount });
      };
      handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
      };
    


    render(){
        const { tasks, taskCount, inputValue ,count} = this.state;
        

        return (
            <div className="bg-container">
                <h1 className="heading">Day Goals!</h1>
                <div className="card-container">
                    
                    <input type="text" placeholder="Write code 3" className="input-element" value={inputValue} onChange={this.handleInputChange}/><br/>
                    <button className="button"  onClick={this.handleAddTask}>Add Todo</button>
                    <ul className="ul-container">
                        {tasks.map((task, index) => (
                            
                            
                                <li key={index} className='li-element'>
                                    <pre>{task} Updated({count} times)</pre>
                                    <div className='icons-container'>
                                        <MdOutlineModeEdit className='edit-icon'/>

                                        <RxCross2  onClick={() => this.handleDeleteTask(index)} className='cross-icon'/>
                                    </div>                                
                                </li>
                            
    ))}                    
                    </ul>
                </div>
            </div>
        )

    }
}
export default TodoApp