import Quiz from "../images/quiz.png";
import './Home.css';

const Home = () => {
  return (
    <div id="welcome">
    <h2>Welcome to Trivia&Co.</h2>
    <img src={Quiz} alt="quiz start image" />
    <p>Ready to start?</p>
    <button>Let's go!🤘</button>
    
    </div>
  )
}

export default Home