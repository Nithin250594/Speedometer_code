// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.speed < 200 ? {speed: prevState.speed + 10} : {speed: 200},
    )
  }

  brake = () => {
    this.setState(prevState =>
      prevState.speed > 10 ? {speed: prevState.speed - 10} : {speed: 0},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="speedometer-title">SPEEDOMETER</h1>
        <img
          className="speedometer-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speedometer-header"> Speed is {speed}mph</h1>
        <p className="speedometer-para">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button
            onClick={this.accelerate}
            className="button-accelerate"
            type="button"
          >
            Accelerate
          </button>
          <button
            onClick={this.brake}
            className="button-apply-brake"
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
