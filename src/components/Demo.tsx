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
    checkValue:boolean,
    search:string,
    dataList:Goods[]
  }
  dataList:Goods[] = []
  constructor(props: any) {
    super(props)
    this.state = {
      checkValue:false,
      search:'',
      dataList:[]
    }
  }

  handleCheckBoxChange() {
    this.setState({
      checkValue:!this.state.checkValue
    })
  }

  handelSearchChange(value?:string) {
    console.log('value',value)
    this.setState({
      search:value
    })
  }

  componentDidMount() {
    this.setState({
      dataList: require("./data.json")
    })

  }

  filterData() {
    const checkValue = this.state.checkValue
    const key = this.state.search
    let newDataList: Goods[] = this.state.dataList
    console.log(key)
    if(key){
      newDataList = newDataList.filter(item => {
        console.log(item.name.includes(key))
        if(item.name.includes(key) ) {
          return <li>{item.name}</li>
        }
      })
    }
    return newDataList
  }

  render() {
    const newDataList = this.filterData()
    return (
      <div className="demo-box">
        <SeachInput change={(value:string) => this.handelSearchChange(value)}></SeachInput>
        <CheckBox change={() => this.handleCheckBoxChange()}></CheckBox>
        <GoodsList dataList={newDataList}></GoodsList>
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
      <input type="checkbox"  onChange={props.change} />only show stock goods
    </div>
  )
}

function SeachInput(props:any) {

  function handleSearchValue(e:any) {
    console.log(props)
    props.change(e.target.value)
  }

    return (
        <div className="search-box">
            Seach
            <input type="text" onChange={(e) => handleSearchValue(e)} />
        </div>
    )
}

export default Demo
