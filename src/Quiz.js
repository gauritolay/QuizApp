import React from 'react';
import './css_styles.css';

class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            ques : [
                { 'ques' : 'Ques1', 'ans' : 'Ans1' }, 
                { 'ques' : 'Ques2', 'ans' : 'Ans2' }, 
                { 'ques' : 'Ques3', 'ans' : 'Ans3' }
            ],
            current_ques : -1,
            score : 0,
            form_ans : {}
        };
    }

    componentDidMount(){}

    startQuiz = () => {
        this.setState({ current_ques : 0 })
    }

    changeQues = (diff) => {
        let current_ques = this.state.current_ques
        let current_ans = document.getElementById("text"+current_ques).value;
        let correct_ans = this.state.ques[current_ques]['ans']
        let score = this.state.score
        if(current_ans === correct_ans){
            score = score + 1
        }
        let next_ques = current_ques+diff
        let form_ans = this.state.form_ans
        form_ans[current_ques] = current_ans
        // let quiz_len = this.state.ques.length
        // // console.log(next_ques, quiz_len)
        // if(next_ques === quiz_len){
        //     this.setState({ score : score })
        //     return(
        //         <p>End of test</p>
        //     )
        // }
        // else{
            document.getElementById("text"+current_ques).value = "";
            this.setState({ current_ques : next_ques, score : score, form_ans : form_ans })
        // }
    }

    getQues = (current_ques) => {
        return(
            <>
                <p>
                    Q.{current_ques+1}) {this.state.ques[current_ques]['ques']}
                </p>
                <p>
                    Ans <textarea id={"text"+current_ques} />
                </p>
            </>
        )
    }

    render(){
        let quiz_len = this.state.ques.length
        return(
            <>
                <input type="button" value="Start Quiz" onClick={(e) => this.startQuiz()} />
                {
                    this.state.current_ques >= 0 && this.state.current_ques < quiz_len
                    ?
                        <>
                            {this.getQues(this.state.current_ques)}
                            {/* <input type="button" value="Prev Ques" onClick={(e) => this.changeQues(-1)} /> */}
                            <input type="button" value="Next Ques" onClick={(e) => this.changeQues(1)} />
                            <p>Score: {this.state.score} / {this.state.ques.length}</p>
                        </>
                    :
                        this.state.current_ques === quiz_len
                        ?
                            <>
                                <p>End of test</p>
                                <p>Final Score: {this.state.score} / {this.state.ques.length}</p>
                                {
                                    this.state.ques.map((q, i) => {
                                        return(
                                            <>
                                                <p>
                                                    Q.{i+1}) {this.state.ques[i]['ques']}
                                                </p>
                                                <p className={this.state.form_ans[i] !== this.state.ques[i]['ans'] ? "wrong_ans" : ""} >
                                                    Your Ans {this.state.form_ans[i]}
                                                </p>
                                                <p>
                                                    Actual Ans {this.state.ques[i]['ans']}
                                                </p>
                                            </>
                                        )
                                    })
                                }
                            </>
                        :
                            null
                }
            </>
        )
    }
}
export default Quiz;