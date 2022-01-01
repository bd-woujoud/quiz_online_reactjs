
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTest, selectTest, updateTest } from '../features/testt/testSlice'
import '../assets/test.css'
import { useParams } from 'react-router-dom'
import axios from '../config/axios'
import { useHistory } from 'react-router-dom'


function Test() {
    let { id } = useParams();
    const qcmlist = useSelector(selectTest)
    const dispatch = useDispatch()
    const [time, settime] = useState(30)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (time === 0) {
                next()
                settime(30)
            } else {

                settime(time - 1)
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [time])

    // Event handlers

    const handleReponsesButtonClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    };
    const updateTest = () => {
        axios.put('http://localhost:5000/test/updatebyid/' + id, { score: score, isvalid: true })
            .then(res => {
           
            })
    }

    const next = () => {

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < qcmlist.questions.length) {
            setCurrentQuestion(nextQuestion);
            settime(30)

        } else {
            setShowScore(true);
            updateTest()
            
        }
    }
    useEffect(() => {
        dispatch(getTest(id));
    }, [])

    return (

        <> <div className="appo">

            <div className="maino">

                {showScore ? (

                    <div className=" out"  >

                        <h2 className='h2'>Nous vous remercions de votre participation</h2>
                        <p className='p' >Votre demande sera traitée dans les plus brefs délais et une réponse vous sera alors transmise par courriel. </p>
                    </div>

                ) : (

                    <>
                        {
                            qcmlist && qcmlist.isvalid
                                ?
                                <div className=" out "  >

                                    <h1 className='h1'>Test déja passé</h1>

                                </div>
                                :
                                <>

                                    <div className="top">
                                        <div className="timer">
                                            {time}
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="trivia " >
                                            <div className="question ">
                                                <div className='question-count '>
                                                    <span>Question {currentQuestion + 1}</span>/{qcmlist && qcmlist.questions.length}
                                                </div>
                                                <>
                                                    <div className="question-number mt-5 mb-3 "> <span style={{ color: 'yellow' }}>Q {currentQuestion + 1} : </span> <b>{qcmlist && qcmlist.questions[currentQuestion].question}</b></div>
                                                    <div className=" optionNumber   pt-3 mt-3" id="options">
                                                        {qcmlist && qcmlist.questions[currentQuestion].reponses.map((reponses, index) => (
                                                            <div key={index}>
                                                                <div class="form-check">
                                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                                            onClick={() =>
                                                                                handleReponsesButtonClick(reponses.isCorrect)
                                                                            } />
                                                                        {reponses.text}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>

                                                <div className=" pt-3">
                                                    <div className='right'>

                                                        <button onClick={() => currentQuestion < qcmlist.questions.length ? next() : setShowScore(true)} className="btn btn-success">Next</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                        }
                    </>
                )}
            </div>
        </div>
        </>
    );
};
export default Test