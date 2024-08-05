import React, { Component } from 'react'
import Input from './Input'

type propsType = {
    index: number,
    text: string,
    flag: boolean,
    updateDoList: (string: string[]) => void,
    updateDoneList: (string: string[]) => void,
    doList: string[],
    doneList: string[],
}

export default class List extends Component<propsType> {

    constructor(props: propsType){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (check: boolean, string: string) => {
        if (check){
            let newDoList = [...this.props.doList]
            let newDoneList = [...this.props.doneList,string]
            let index = newDoList.indexOf(string);
            newDoList.splice(index, 1);
            this.props.updateDoList(newDoList)
            this.props.updateDoneList(newDoneList)
        }
        else{
            let newDoneList = [...this.props.doneList]
            let newDoList = [...this.props.doList,string]
            let index = newDoneList.indexOf(string);
            newDoneList.splice(index, 1);
            this.props.updateDoneList(newDoneList)
            this.props.updateDoList(newDoList)
        }
    } 


  render() {
    return (
      <div className='flex gap-2'>
        <Input type='checkbox' flag={this.props.flag} onChange={ (event) => this.handleClick(event.currentTarget.checked,this.props.text) } />
        <p className='lg:text-base' >{this.props.text}</p>
      </div>
    )
  }
}
