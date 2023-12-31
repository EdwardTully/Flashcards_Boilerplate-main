import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { quizSelector } from "./quizzesSlice";
import { useSelector } from "react-redux";

export default function Quizzes() {
  const quizzes = useSelector(quizSelector); 
 
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.quizId} to={ROUTES.quizRoute(quiz.quizId)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
