import React from "react"

class Clock extends React.Component {
  timeInterval!: NodeJS.Timer

  state: {
    data: any
  }

  constructor(props: any) {
    super(props)
    this.state = {
      data: new Date(),
    }
  }
  componentDidMount() {
    this.timeInterval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval()
  }

  tick() {
    this.setState({
      data: new Date(),
    })
  }

  handleClick(id:number,e: React.MouseEvent) {
    console.log(this)
    console.log(e)
    console.log(id)
  }



  render():React.ReactChild {
    return <span onClick={(e) => this.handleClick(1,e)}>{this.state.data.toLocaleTimeString()}</span>
  }
}

export default Clock
