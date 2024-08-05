import React, { Component } from 'react'
import Button from './Button'
import List from './List'
import CreateTodo from './CreateTodo'


type listState = {
  doList: string[],
  doneList: string[],
  show: boolean
}

export default class Todo extends Component<{},listState> {
  
  constructor(props: {}){
    super(props);
    this.state = {
      doList: ["Clean my computer", "Buy a keyboard"],
      doneList: ["Write an article about @xstate/test"],
      show: false
    }
    this.updateDo = this.updateDo.bind(this);
    this.updateDone = this.updateDone.bind(this);
    this.Flipshow = this.Flipshow.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  updateDo = (list: string[]) => {
    this.setState({doList: list})
  }

  updateDone = (list: string[]) => {
    this.setState({doneList: list})
  }

  Flipshow = () =>{
    this.setState({show: !this.state.show})
  }

  handleRefresh = () => {
    let newDoneList = [...this.state.doneList,"Todo created by another user"]
    this.updateDone(newDoneList)
  }

  render() {
    return (
      <div className='flex flex-col md:self-center md:w-9/12 px-2 gap-2'>
        <div className="flex flex-col gap-2 py-4 md:flex-row md: justify-between">
            <h1 className="text-xl md:text-3xl xl:text-5xl font-semibold">Things to get done</h1>
            <Button onClick={this.handleRefresh} theme='primary' className='self-start' >Refresh</Button>
        </div>

        <p className='lg:text-2xl font-medium' >Things to do</p>

        {this.state.doList.length > 0 && 
        this.state.doList.map( (item,index) => 
        <List 
        key={index} 
        text={item} 
        index={index} 
        flag={false}
        doList={this.state.doList}
        doneList={this.state.doneList}
        updateDoList={this.updateDo}
        updateDoneList={this.updateDone}
         /> )}
         {this.state.doList.length == 0 && <p className='lg:text-base' >No Todo's here</p>}

        {!this.state.show && <Button theme='rounded' onClick={this.Flipshow} className='self-start'>+ Add a todo</Button>}

        {this.state.show && <CreateTodo doList={this.state.doList} updateDoList={this.updateDo} Flipshow={this.Flipshow} />}

        
  
        <p className='lg:text-2xl font-medium'  >Things Done</p>

        {this.state.doneList.length > 0 && 
        this.state.doneList.map( (item,index) => 
        <List 
        key={index} 
        text={item} 
        index={index} 
        flag={true} 
        doList={this.state.doList}
        doneList={this.state.doneList}
        updateDoList={this.updateDo}
        updateDoneList={this.updateDone}
        /> )}
        {this.state.doneList.length == 0 && <p className='lg:text-base' >No Todo's here</p>}
      </div>
    )
  }
}
