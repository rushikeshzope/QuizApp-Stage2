import { Component } from 'react'
import './QuizComponent.css'
import Questions from '../resources/Questions.json'

export default class QuizComponent extends Component {

    constructor(){
        super()
        this.state = {
            number : 0
        }
    }
    
    render() {

        let currQuestion = Questions[this.state.number]
        let currentQuestionNumber = this.state.number

        let handlePrevious = () => {

            if(currentQuestionNumber == 0){
                alert("THIS IS THE FIRST QUESTION")
            }
            else{
                this.setState({
                    number : currentQuestionNumber - 1
                })
            }
        }

        let handleNext = () => {

            if(currentQuestionNumber == 14){
                alert("THIS IS THE LAST QUESTION")
            }
            else{
                this.setState({
                    number : currentQuestionNumber + 1
                })
            }
        }

        let handleQuit = () => {
            alert("Do you want to Quit?")
        }

        return(
            <>

                <div className='quiz-container'>

                    <div className='question-text'>
                        <h2>Question</h2>
                    </div>

                    <div className='page'>
                        <h4>{this.state.number + 1} of 15</h4>
                    </div>

                    <div className='question'>
                        <h3>{currQuestion.question}</h3>
                    </div>

                    <div className='options'>
                        <div className='option-1'>
                            <button className='opt-btn'>{currQuestion.optionA}</button>
                        </div>

                        <div className='option-2'>
                            <button className='opt-btn'>{currQuestion.optionB}</button>
                        </div>

                        <div className='option-3'>
                            <button className='opt-btn'>{currQuestion.optionC}</button>
                        </div>

                        <div className='option-4'>
                            <button className='opt-btn'>{currQuestion.optionD}</button>
                        </div>
                    </div>
                    
                    <div className='actions'>
                        <div className='prev'>
                            <button className='prev-btn' onClick={handlePrevious}>Previous</button>
                        </div>

                        <div className='next'>
                            <button className='next-btn' onClick={handleNext}>Next</button>
                        </div>

                        <div className='quit'>
                            <button className='quit-btn' onClick={handleQuit}>Quit</button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}