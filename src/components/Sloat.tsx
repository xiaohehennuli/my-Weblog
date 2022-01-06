import React from "react"

class Father extends React.Component {
    props!:{
        left:any,
        right:any,
        children:any
    }
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="left">
            {this.props.left}
        </div>
        <div className="right">
            {this.props.right}
        </div>
      </div>
    )
  }
}

export default Father
