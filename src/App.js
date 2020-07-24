import React from "react"
import Data from "./Data/Data"
import Display from "./Component/Display"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: Data
        }
        this.handleChange = this.handleChange.bind(this)
      
    }
    handleChange(id){
      this.setState(prevState =>{

       const newData= prevState.data.map(data=>{
          if(data.id===id){
          data.completed = !data.completed
          }
          return  data
        })
        return{ data:newData}
      })
    }
    
 
    
    render() {
        const data = this.state.data.map(item => <Display key={item.id} item={item} handleChange={this.handleChange}/>)
        console.log(data)
        return (
            <div className="todo-list">
                {data}
            </div>
        )    
    }
}

export default App