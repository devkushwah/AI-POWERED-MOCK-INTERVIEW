function AnswerInput({ answer, setAnswer }) {
  return (
    <textarea
      className="form-control"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
    />
  );
}

export default AnswerInput;
