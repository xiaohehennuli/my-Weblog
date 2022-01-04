import React from "react"

function BoilingVerdict(props: any) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
}

function tryConvert(temperature:any, convert:any) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ""
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

function toCelsius(fahrenheit:number) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius:number) {
    return (celsius * 9 / 5) + 32;
  }

class TemperatureInput extends React.Component {
  props!: {
    temperature:string
    scale: string
    onTemperatureChange: (value: string) => void
  }

  constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e: { target: { value: any } }) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale as keyof {}]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  state: {
    scale: string
    temperature: string
  }
  constructor(props: any) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = { temperature: "", scale: "c" }
  }

  handleCelsiusChange(temperature: any) {
    this.setState({ scale: "c", temperature })
  }

  handleFahrenheitChange(temperature: any) {
    this.setState({ scale: "f", temperature })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

export default Calculator
