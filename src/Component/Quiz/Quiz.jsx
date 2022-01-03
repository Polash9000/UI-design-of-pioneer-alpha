import React from 'react';
import './Quiz.css';

const Quiz = () => {
    return (
        <div className="card mb-3 border-0 ms-3 mt-2">
            <div className="row g-0">
                <div className="col-md-11">
                    <div className="margin-right">
                        <label>
                            Quiz Title
                            <i className="fas fa-star-of-life ms-1 required-star"></i>
                        </label>
                        <br />
                        <input className="input-width" type="text" required />
                        <br />
                        <div className="space-between">
                            <div className="question-div11">
                                <input className="space-between-input" type="text" placeholder="Set Due Date" />
                                <span className="day-icon"><i class="fas fa-calendar-day"></i></span>
                            </div>
                            <br />
                            <div className="question-div11">
                                <input className="space-between-input" type="text" placeholder="Set Time" />
                                <span className="time-icon"><i class="far fa-clock"></i></span>
                            </div>
                        </div>
                        <h4 className="text-center mt-4 mb-4">Questions</h4>
                        <div className="ms-3 mb-4 question1">
                            <div className="full-content">
                                <div className="mb-4 question1-div-flex">
                                    <div className="question-div1">
                                        <input className="question-div1-input" type="text" placeholder="Question" />
                                        <span><i class="question-div1-icon fas fa-chart-area mouse-effect"></i></span>
                                    </div>
                                    <div className="dropdown-div">
                                        <div class="dropdown">
                                            <span><input type="radio" name="" id="" checked /></span>
                                            <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Multiple Choice
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <input className="question-div-radio-style" type="radio" name="" id="" />
                                <label htmlFor="">Option1</label>
                                <br />
                                <input className="question-div-radio-style" type="radio" name="" id="" />
                                <label htmlFor="">Option2</label>
                                <br />
                                <input className="question-div-radio-style" type="radio" name="" id="" />
                                <label htmlFor="">Add Option or <span style={{ color: "blue", cursor: "pointer" }}>add "other"</span></label>
                                <hr className="mt-4" />
                                <div className="copy-delete">
                                    <i class="question-div-copy-delete far fa-copy"></i>
                                    <i class="question-div-copy-delete far fa-trash-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div className="ms-3 mb-4 question2">
                            <div className="full-content">
                                <div className="mb-4 question1-div-flex">
                                    <div className="question-div1">
                                        <input className="question-div1-input" type="text" placeholder="Question" />
                                        <span><i class="question-div1-icon fas fa-chart-area mouse-effect"></i></span>
                                    </div>
                                    <div className="dropdown-div">
                                        <div class="dropdown">
                                            <span><input type="radio" name="" id="" checked /></span>
                                            <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Fill in the blanks
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <input className="question-div-radio-style" type="radio" name="" id="" checked />
                                <label htmlFor=""><b>Blank 1</b></label>
                                <br />
                                <input className="question-div-radio-style" type="radio" name="" id="" />
                                <label htmlFor="">Option1</label>
                                <br />
                                <input className="question-div-radio-style" type="radio" name="" id="" />
                                <label htmlFor="">Option2</label>
                                <br />
                                <input className="question-div-radio-style" type="radio" name="" id="" />
                                <label htmlFor="">Add Option or <span style={{ color: "blue", cursor: "pointer" }}>add "other"</span></label>
                                <br /> <br />
                                <input className="question-div-radio-style" type="radio" name="" id="" checked />
                                <label htmlFor=""><b>Blank 2</b></label>
                                <br />
                                <input className="question-div-radio-style" type="radio" name="" id="" />
                                <label htmlFor="">Option1</label>
                                <br />
                                <input className="question-div-radio-style" type="radio" name="" id="" />
                                <label htmlFor="">Option2</label>
                                <br />
                                <input className="question-div-radio-style" type="radio" name="" id="" />
                                <label htmlFor="">Add Option or <span style={{ color: "blue", cursor: "pointer" }}>add "other"</span></label>
                                <br /> <br />
                                <span><i className="question-div-radio-style fas fa-plus mouse-effect"></i></span>
                                <b>Add more blanks</b>
                                <hr className="mt-5" />
                                <div className="copy-delete">
                                    <i class="question-div-copy-delete far fa-copy"></i>
                                    <i class="question-div-copy-delete far fa-trash-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 my-auto">
                    <div className="card-body">
                        <div className="icon-shadow">
                            <i className="round fas fa-plus mouse-effect"></i>
                            <br />
                            <i className="fas fa-file-export mouse-effect"></i>
                            <br />
                            <i className="fas fa-text-height mouse-effect"></i>
                            <br />
                            <i class="fas fa-chart-area mouse-effect"></i>
                            <br />
                            <i class="fab fa-youtube mouse-effect"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Quiz;