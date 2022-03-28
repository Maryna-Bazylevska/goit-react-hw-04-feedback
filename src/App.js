import React, { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;

      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

// class App1 extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = (key) => {
//     this.setState((state) => ({
//       [key]: state[key] + 1,
//     }));
//   };
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const keyName = Object.keys(this.state);
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={keyName}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </>
//     );
//   }
// }

export default App;
