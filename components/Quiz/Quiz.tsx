import { useEffect, useState } from 'react'
import styles from './Quiz.module.scss'
import Button from '../Button/Button'
import { AiTwotoneCloseCircle, AiOutlineCloseCircle } from 'react-icons/ai'

type Quiz = {
  id: string
  questions: {
    id: string
    question: string
    correctAnswer: 'A' | 'B' | 'C' | 'D'
    answers: {
      key: string
      value: string
    }[]
  }[]
}

type Props = {
  quizId: string
}

export function Quiz({ quizId }: Props) {
  const [isQuizShown, setIsQuizShown] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<undefined | string>(
    undefined
  )
  const [quiz, setQuiz] = useState<Quiz>()

  useEffect(() => {
    fetch(`/api/quizes/${quizId}`)
      .then((res) => res.json())
      .then((data) => {
        setQuiz(data.quiz)
      })
  }, [quizId])

  const selectAnswer = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const submitAnswer = (currentQuestionIndex: number) => {
    setSelectedAnswer(undefined)
    setCurrentQuestion(currentQuestionIndex + 1)
  }

  const progressBars = (barLength: number | undefined) => {
    if (!barLength) return

    let bars: number[] = []
    for (let i = 0; i < barLength; i++) {
      bars.push(i)
    }
    return bars
  }

  const parseTextWithCode = (text: string) => {
    const splitText = text.split('`')
    return (
      <span>
        {splitText.map((item, index) =>
          index % 2 === 0 ? (
            splitText[index]
          ) : (
            <code key={index}>{splitText[index]}</code>
          )
        )}
      </span>
    )
  }

  return (
    <div className={styles.quizWrapper}>
      {!isQuizShown ? (
        <div className={styles.startQuiz}>
          <button onClick={() => setIsQuizShown(true)}>Start Quiz</button>
        </div>
      ) : (
        <div className={styles.quiz}>
          <div className={styles.quizContainer}>
            <div className={styles.quizInner}>
              <div className={styles.progressBar}>
                {progressBars(quiz?.questions.length)?.map((el) => (
                  <div key={el} className={styles.barItem}>
                    <div
                      className={styles.barItemInner}
                      style={{
                        background: 'black',
                        width: currentQuestion >= el ? '100%' : '0%',
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.quizHeader}>
                <span onClick={() => setIsQuizShown(false)}>
                  <AiTwotoneCloseCircle />
                </span>
              </div>

              {quiz &&
                quiz.questions.map(
                  (question, index) =>
                    currentQuestion === index && (
                      <div className={styles.question} key={question.id}>
                        <h4>
                          <small>
                            Question {index + 1}/{quiz.questions.length}
                          </small>
                        </h4>
                        <h5>{parseTextWithCode(question.question)}</h5>
                        <div className={styles.answers}>
                          {question.answers.map((answer) => (
                            <div
                              key={answer.key}
                              className={styles.answerButton}
                            >
                              <button
                                className={`${
                                  selectedAnswer === answer.key
                                    ? styles.selectedAnswer
                                    : ''
                                }`}
                                onClick={() => selectAnswer(answer.key)}
                              >
                                <b>{answer.key})</b>{' '}
                                {parseTextWithCode(answer.value)}
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className={styles.buttonsWrapper}>
                          <Button
                            disabled={currentQuestion < 1}
                            onClick={() =>
                              setCurrentQuestion((prevState) => prevState - 1)
                            }
                            label={'Back'}
                          />
                          <Button
                            disabled={
                              currentQuestion >= quiz.questions.length - 1
                            }
                            onClick={() => submitAnswer(index)}
                            label={'Next'}
                          />
                        </div>
                      </div>
                    )
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
