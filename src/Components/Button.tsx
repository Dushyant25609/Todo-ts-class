import React, { ButtonHTMLAttributes, Component } from 'react'

type ButtonProps = {
    theme: "primary" | "secondary" | "rounded",
    children: string,
    className?: string,
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default class Button extends Component<ButtonProps> {
    private theme = {
        primary: "bg-yellow-500 text-white rounded-md",
        secondary: "border rounded-md",
        rounded: "bg-yellow-500 text-white rounded-full"
    }
    private classTheme : string;
    constructor (props: ButtonProps) {
        super(props);
        this.classTheme = this.theme[props.theme]
    }
  render() {
    return (
      <button type='button' onClick={this.props.onClick} className={'px-4 py-2 text-sm md:text-base ' + this.classTheme + " "+ this.props.className} >{this.props.children}</button>
    )
  }
}
