import React, { Component, InputHTMLAttributes } from 'react'

type inputProps = {
    type: string,
    flag?: boolean
}& InputHTMLAttributes<HTMLInputElement>;

export default class Input extends Component<inputProps> {
    
  render() {
    const  { type, flag, onChange , ...rest } = this.props
    return (
        <>
        <label htmlFor="checkbox" className='sr-only' >checkbox</label>
        <input type={type} onChange={onChange} checked={flag} {...rest} id={this.props.type} />
        </>
    )
  }
}
