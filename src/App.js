import React, {Component} from 'react';
import './App.css';

class ShowBox extends Component {
    render() {
        let bgStyle = {
            backgroundColor:this.props.bgColor
        };
        return (
            <div style={bgStyle} className={'showbox'}>
                {this.props.color}
            </div>
        )
    }
}

class ColorModifier extends Component {
    render(){
        return(
            <div className={'color-modifier'}>
                <input type="text" placeholder={'Type color here'}/>
                <div className={'btn'} onClick={this.props.handleClick}>Go</div>
            </div>
        )
    }
}

class Colorizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:'white'
        };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(e){
        console.log('Clicked',e.target.previousElementSibling.value);
        this.setState({
            color: e.target.previousElementSibling.value
        })
};
    render(){
        return(
            <div>
                <ShowBox bgColor={this.state.color}/>
                <ColorModifier handleClick={this.changeColor}/>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className={'colorizer-wrapper'}>
                <Colorizer/>
            </div>
        )
    }
}

export default App;
