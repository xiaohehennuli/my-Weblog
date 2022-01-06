import React from "react"

import '../css/demo.css'

interface Goods {
  category: string
  price: string
  stocked: boolean
  name: string
}

class Demo extends React.Component {
  state: {
    dataList: Goods[]
  }
  constructor(props: any) {
    super(props)
    this.state = {
      dataList: [],
    }
  }

  componentDidMount() {
    this.setState({
      dataList: require("./data.json"),
    })
  }

  render() {
    return (
      <div className="demo-box">
        <SeachInput></SeachInput>
        <CheckBox></CheckBox>
        <GoodsList dataList={this.state.dataList}></GoodsList>
      </div>
    )
  }
}

function GoodsList(props: { dataList: Goods[] }) {
  const { dataList } = props
  const list = dataList.map((item, index) => {
    return <li key={index}>{item.name}</li>
  })
  return <div className="list-box">{list}</div>
}

function CheckBox(props: any) {
  return (
    <div className="check-box">
      <input type="checkbox" />only show stock goods
    </div>
  )
}

function SeachInput(props:any) {
    return (
        <div className="search-box">
            Seach
            <input type="text"/>
        </div>
    )
}

export default Demo
