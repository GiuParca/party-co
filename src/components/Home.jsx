import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../images/quiz.png";
import './Home.css';

const Home = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div id="welcome">
            <h2>Welcome to Trivia&Co.</h2>
            <img src={Quiz} alt="quiz start image" />
            <p>Ready to start?</p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Let's go!🤘</button>
        </div>
    )
}

export default Home