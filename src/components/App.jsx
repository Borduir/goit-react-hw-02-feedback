import React, {Component} from 'react';
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section'
import Notification from './Notification/Notification'

export default class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }
  onLeaveFeedback = (event) => {
    const currentButton = event.target.name
    this.setState((prevState) => (
      {[currentButton] : prevState[currentButton] + 1}
    ))
    }

    countTotalFeedback = () => {return(this.state.neutral + this.state.good + this.state.bad)}

    countPositiveFeedbackPercentage = () => {return(Math.round(100 * this.state.good / (this.state.neutral + this.state.good + this.state.bad)))}

  render() {
    const options = Object.keys(this.state)
    const { good, neutral, bad } = this.state
    const {onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage} = this
        return (
          <div>
                        <Section title="Please leave feedback">
              <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} ></FeedbackOptions>
            </Section>
            <Section title="Statistics">
              {countTotalFeedback() ? (
                <Statistics good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
                ></Statistics>
              ) : (<Notification />)}
            </Section>
            </div>
        )
    }
  
};
