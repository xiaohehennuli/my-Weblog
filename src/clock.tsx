import React from 'react';

class clock extends React.Component {
  state:{
    date:any
  }
  timeId!: NodeJS.Timer;

  constructor(props:any){
    super(props)
    this.state = {
      date:new Date()
    }
  }
  componentDidMount() {
    this.timeId = setInterval(() => this.tick(),1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  a() {
    console.log('111')
  }

  tick() {
    this.setState({date:new Date()})
  }

  render(): React.ReactNode {
    return <span onClick={this.a}>{this.state.date.toLocaleTimeString()}</span>
  }
}

export default clock

