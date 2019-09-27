import React, {Component} from 'react';

class Calculator extends Component{
    constructor(props){
        super(props)
        this.state={
            fnum : '',
            snum : '',
            result : ''
        }
    }
    FirstNum(e){
        e.preventDefault(e);
        this.setState({fnum:(e.target.value)})
    }
    SecNum(e){
        e.preventDefault(e);
        this.setState({snum: (e.target.value)})
    }
    plus(e){
        e.preventDefault(e);
        let first = Number(this.state.fnum);
        let second = Number(this.state.snum);
        let total = Number(first + second);
        this.setState({result:  total})
    }
    sub(e){
        e.preventDefault(e);
        let first = this.state.fnum;
        let second = this.state.snum;
        let total =  Number(first-second);
        this.setState({result:  total})

    }
    multi(e){
        let first = this.state.fnum;
        let second = this.state.snum;
        let total =  Number(first*second);
        this.setState({result:  total})
    }
    div(e){
        let first = this.state.fnum;
        let second = this.state.snum;
        let total =  Number(first/second);
        this.setState({result:  total})
    }

    expo(e){
        let first = this.state.fnum;
        let second = this.state.snum;
        let total =  Number(first**second);
        this.setState({result:  total})
    }

    render(){
        return(
            <center>
                <div>
                    <div>
                    <input type="text" placeholder="Enter First Number" onChange={(e)=>this.FirstNum(e)}/><br/>
                    <input type="text" placeholder="Enter Second Number" onChange={(e)=>this.SecNum(e)}/>
                    </div>
                    <button onClick={(e)=>this.plus(e)}>Add</button>
                    <button onClick={(e)=>this.sub(e)}>sub</button>
                    <button onClick={(e)=>this.multi(e)}>multi</button>
                    <button onClick={(e)=>this.div(e)}>div</button>
                    <button onClick={(e)=>this.expo(e)}>Exponent</button>
                    <div>
                        <label><h1>Result:</h1></label>
                        {this.state.result}
                    </div>
                </div>
            </center>   
        )
    }

}
export default Calculator