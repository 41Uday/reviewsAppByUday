// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {position: 0}

  onIncreaseButton = () => {
    const {position} = this.state
    console.log('dec')

    this.setState(prevState => ({position: prevState.position + 1}))

    console.log(position)
  }

  onDecreaseButton = () => {
    const {position} = this.state

    this.setState(prevState => ({position: prevState.position - 1}))
    console.log('inc', position)
  }

  render() {
    const {position} = this.state

    const {reviewsList} = this.props

    if (position > 3 || position < 0) {
      const result = reviewsList[0]
      return (
        <div className="bg-container">
          <h1 className="head">Reviews</h1>
          <div className="outer-card">
            <button
              type="button"
              onClick={this.onDecreaseButton}
              testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="l-img"
              />
            </button>

            <div className="card">
              <img src={result.imgUrl} alt={result.username} />
              <p className="para-1">{result.username}</p>
              <p className="para-2">{result.companyName}</p>
            </div>
            <button
              type="button"
              onClick={this.onIncreaseButton}
              testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="l-img"
              />
            </button>
          </div>
          <p className="para-3">{result.description}</p>
        </div>
      )
    }
    const result = reviewsList[position]
    return (
      <div className="bg-container">
        <h1 className="head">Reviews</h1>
        <div className="outer-card">
          <button
            type="button"
            onClick={this.onDecreaseButton}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="l-img"
            />
          </button>

          <div className="card">
            <img src={result.imgUrl} alt={result.username} className="" />
            <p className="para-1">{result.username}</p>
            <p className="para-2">{result.companyName}</p>
          </div>
          <button
            type="button"
            onClick={this.onIncreaseButton}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="l-img"
            />
          </button>
        </div>
        <p className="para-3">{result.description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
