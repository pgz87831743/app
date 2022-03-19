import React from "react";

class Hello extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            pls: [
                {person: 'xiao1', spk: ['x', 'y']},
                {person: 'xiao2', spk: ['x', 'y']},
                {person: 'xiao3', spk: ['x', 'y']}]

        }
        this.textPerson = React.createRef();
        this.textSpk = React.createRef();

    }

    submit = () => {
        this.state.pls.push(
            {person: this.textPerson.current, spk: ['x', 'y']}
        )
    }


    render() {
        return (
            <div>
                <input type="text" ref={this.textPerson}/>
                <br/>
                <textarea ref={this.textSpk}/>
                <br/>
                <button onClick={this.submit}>发布</button>
                <br/>

                {this.state.pls.map(value => <ul key={value.person}>{value.spk.map(sp=><li key={sp}>sp</li>)}</ul>)}

            </div>
        )
    }
}


export default Hello
