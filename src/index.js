import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Display from './Components/display'
import Adder from "./Components/adder";
import Subtractor from "./Components/subtractor";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 4
        }
    };


    render() {
        return (
            <div>
                <Display number={this.state.number}/>
                <Adder add={() => {
                    if (this.state.number < 100)
                        this.setState({number: this.state.number + 1})
                }

                }/>
                <Subtractor subtract={() => {
                    if (this.state.number > 0)
                        this.setState({number: this.state.number - 1})
                }

                }/>
            </div>
        )


    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));