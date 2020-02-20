import React,{Component} from 'react';
import Child from'./Child';
import ToggleButton from './ToggleButton';
import BoilingVerdict from './BoilingVerdict';

class DisplayInputs extends Component{
    constructor(props){
        super(props);

        this.state = {
            tempC: "",
            tempF: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){

        const name = e.target.name;
        const value = e.target.value;

        if(name === "tempC"){
            this.setState({tempC: value,
                          tempF: this.toFahrenheit(value),
                        });
        }
        else{
            this.setState({tempF: value,
                tempC: this.toCelsius(value),
              });  
        }

    }

    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

    render(){
        return(<div>
                <label>Celsius</label>
                <div><input type="text" name="tempC" value={this.state.tempC} onChange={this.handleChange}/></div>
                <label>Fahrenheit</label>
                <div><input type="text" name="tempF" value={this.state.tempF} onChange={this.handleChange}/></div>
                <div><BoilingVerdict temp={this.state.tempC}></BoilingVerdict></div>
              </div>);
    }
}
export default DisplayInputs;


