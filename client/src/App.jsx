import { useState, useEffect } from 'react';
import axios from 'axios'; 
import QuestionDisplay from './components/QuestionDisplay';
import AnswerInput from './components/AnswerInput';
import SubmitButton from './components/SubmitButton';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/questions').then((res) => {
      setQuestion(res.data.question);
    });
  }, []);

  const submitAnswer = () => {
    axios.post('http://localhost:5000/answers', { questionId: 1, answer });
    setAnswer('');
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <QuestionDisplay question={question} />
          <AnswerInput answer={answer} setAnswer={setAnswer} />
          <SubmitButton onClick={submitAnswer} />
        </div>
      </div>
    </div>
  );
}

export default App;