import React,{Component} from 'react';

class Title extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-12 text-center title">
                    <h3>{this.props.title}</h3>
                </div>
            </div>
        );
    }
}
export default Title;