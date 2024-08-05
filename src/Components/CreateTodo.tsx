import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'

type createProps = {
  doList: string[],
  updateDoList: (string: string[]) => void,
  Flipshow: () => void
}

type createState = {
  text : string
}

export default class CreateTodo extends Component<createProps,createState> {

  constructor(props: createProps) {
    super(props);
    this.Save = this.Save.bind(this);
    this.Cancel = this.Cancel.bind(this);
    this.HandleText = this.HandleText.bind(this);
  }

  HandleText = (text: string) => {
    this.setState({ text: text})
  }

  Save = (text: string) => {
    let newDoList = [...this.props.doList, text];
    this.props.updateDoList(newDoList);
    this.props.Flipshow();
  }

  Cancel = () => {
    this.props.Flipshow();
  }


  render() {
    return (
      <div className='flex flex-col p-4 gap-5 shadow-lg'>
        <h1>Create Todo</h1>
        <Input onChange={(event) => this.HandleText(event.currentTarget.value)} type='text' className='border px-4 py-2 rounded-md' placeholder='Write the new Todo here' />
        <div className="flex gap-2">
            <Button onClick={(event) => this.Save(this.state.text)} theme='primary'  >Save</Button>
            <Button onClick={this.Cancel} theme='secondary'>Cancel</Button>
        </div>
      </div>
    )
  }
}
