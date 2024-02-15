import styles from './Quiz.module.scss'
import quiz from '../../quizes/omit-quiz.json'
import { useState } from 'react'

// type Quiz = {
//   questions: {
//     question: string,
//     correctAnswer: 'A' | 'B' | 'C' | 'D',
//     answers: 'string'
//   }[],
// }

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<undefined | string>(
    undefined
  )

  const selectAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    console.log('answer', answer) // TODO: remove this line
  }

  const submitAnswer = (currentQuestionIndex: number) => {
    setSelectedAnswer(undefined)
    setCurrentQuestion(currentQuestionIndex + 1)
  }

  return (
    <div className={styles.quiz}>
      <h3>Quiz</h3>
      <small>(Only one answer is correct.)</small>

      {quiz.questions.map((question, index) => {
        return (
          currentQuestion === index && (
            <>
              <div key={question.id}>
                <h4>Question {index + 1}:</h4>
                <p>{question.question}</p>
                <div className={styles.answers}>
                  {question.answers.map((answer) => (
                    <button
                      className={`${
                        selectedAnswer === answer.key && styles.selectedAnswer
                      }`}
                      onClick={() => selectAnswer(answer.key)}
                    >
                      <b>{answer.key}:</b> {answer.value}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => submitAnswer(index)}>Submit</button>
            </>
          )
        )
      })}
    </div>
  )
}
