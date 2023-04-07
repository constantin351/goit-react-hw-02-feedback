import React, { Component } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

class App extends Component { 

  static defaultProps = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positivePercentage: 0,
  };

  state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
  };

  onOptionBtnClick = (event) => {
      const targetOptionBtn = event.target.name; //name кнопки из name={option} (<button name={option}>{option}</button>)

      const stateKeys = Object.keys(this.state);

      for (const key of stateKeys) {
          if (key === targetOptionBtn) {
            this.setState(prevState => ({
              [targetOptionBtn]: prevState[targetOptionBtn] + 1,
            }))
          }
      }
  };
   
  //  onGoodBtnClick = () => {    
  //       this.setState(prevState => ({
  //           good: prevState.good + 1,
  //       }))
  //   };

  //   onNeutralBtnClick = () => {
  //       this.setState(prevState => ({
  //           neutral: prevState.neutral + 1,
  //       }))
  //   };
    
  //   onBadBtnClick = () => {
  //       this.setState(prevState => ({
  //           bad: prevState.bad + 1,
  //       }))
  //   };

  countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      const totalFeedback = good + neutral + bad;          
      const positiveFeedbackPercentage = Math.round(good / totalFeedback * 100);
      return positiveFeedbackPercentage;
  };

  countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      const totalFeedback = good + neutral + bad;
      return totalFeedback;
  };
  
  render() { 
      const optionsArray = Object.keys(this.state); //массив с именами свойств state-a (good, neutral, bad)
      const { good, neutral, bad } = this.state;

      return (
        <>
            <Section title="Please leave feedback">
                  <FeedbackOptions
                      options={optionsArray}
                      onLeaveFeedback={this.onOptionBtnClick}>
                  </FeedbackOptions>
            </Section>
          

            <Section title="Statistics">
                {this.countTotalFeedback() > 0
                    ? (
                        <Statistics
                              good={good}
                              neutral={neutral}
                              bad={bad}
                              total={this.countTotalFeedback()}
                              positivePercentage={
                                  this.countTotalFeedback() === 0
                                      ? 0
                                      : this.countPositiveFeedbackPercentage()
                      }>
                        </Statistics>)
                  
                    : (<Notification message="There is no feedback"></Notification>)
                }
            </Section>            
          </>
        )
  };
}

export default App;
