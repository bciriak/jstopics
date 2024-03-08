import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { HorizontalRule } from './ui/horizontalRule'
import { XIcon } from 'lucide-react'

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
      <>
        {splitText.map((item, index) =>
          index % 2 === 0 ? (
            splitText[index]
          ) : (
            <code className="px-1 py-0.5 mx-1 bg-gray-200 rounded" key={index}>
              {splitText[index]}
            </code>
          )
        )}
      </>
    )
  }

  return (
    <div className="p-2 border">
      {!isQuizShown ? (
        <div className="flex items-center">
          <button onClick={() => setIsQuizShown(true)}>Start Quiz</button>
        </div>
      ) : (
        <div className="flex justify-center fixed top-0 bottom-0 right-0 left-0 bg-opacity-70 bg-black transition-opacity duration-200 visible">
          {/*<div className={styles.quiz}>*/}
          {/*<div className={styles.quizContainer}>*/}
          <div className="relative w-3/6 mt-16">
            {/*<div className={styles.quizInner}>*/}
            <div className="bg-white p-6">
              {/*<div className={styles.progressBar}>*/}
              <div className="flex mb-4 -mx-6 -mt-6">
                {progressBars(quiz?.questions.length)?.map((el) => (
                  <div key={el} className="flex-1">
                    <div
                      className="h-1 w-0 transition-all duration-500"
                      style={{
                        background: 'black',
                        width: currentQuestion >= el ? '100%' : '0%',
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="pb-2 float-end">
                <span
                  className="hover:cursor-pointer"
                  onClick={() => setIsQuizShown(false)}
                >
                  <XIcon className="h-7 w-7 text-gray-900" />
                </span>
              </div>

              {quiz &&
                quiz.questions.map(
                  (question, index) =>
                    currentQuestion === index && (
                      <div key={question.id}>
                        <div className="text-center my-8">
                          <small className="text-gray-700">
                            Question {index + 1}/{quiz.questions.length}
                          </small>
                        </div>
                        <h5 className="text-xl mt-10 mb-10 text-center font-bold">
                          {parseTextWithCode(question.question)}
                        </h5>
                        <HorizontalRule />
                        {question.answers.map((answer) => (
                          <div key={answer.key}>
                            <button
                              className={`rounded w-full text-left p-2 mb-3 border transition-all hover:cursor-pointer hover:bg-gray-300 hover:border-gray-400  ${
                                selectedAnswer === answer.key
                                  ? 'bg-gray-300 border-gray-400'
                                  : 'bg-gray-100'
                              }`}
                              onClick={() => selectAnswer(answer.key)}
                            >
                              <b className="mr-1">{answer.key})</b>{' '}
                              {parseTextWithCode(answer.value)}
                            </button>
                          </div>
                        ))}
                        <div className="flex justify-between mt-8">
                          <Button
                            disabled={currentQuestion < 1}
                            onClick={() =>
                              setCurrentQuestion((prevState) => prevState - 1)
                            }
                            variant="outline"
                          >
                            Back
                          </Button>
                          <Button
                            disabled={
                              currentQuestion >= quiz.questions.length - 1 ||
                              !selectedAnswer
                            }
                            onClick={() => submitAnswer(index)}
                          >
                            Next
                          </Button>
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
