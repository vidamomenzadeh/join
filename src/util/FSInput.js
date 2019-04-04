import React, { Component } from 'react';

export default class FSInput extends Component{

    constructor(props) {
        super(props);

    }

    isValid(){
        const { validations } = this.props;        

        if(validations.length > 0){
            var length = this.refs.input.value.length;
            for(var i = 0; i < validations.length; i++){
                switch(validations[i].type){
                    case 'min':
                        if(length < parseInt(validations[i].length))
                            return validations[i].message;
                    break;

                    case 'max':
                        if(length > parseInt(validations[i].length))
                            return validations[i].message;
                    break;

                    case 'digit':
                        if(!/^[0-9]*$/.test(this.refs.input.value))
                            return validations[i].message;
                    break;
                }
           }
        }


        return true;
    }

    getValue(){
        const {type, id} = this.props;
        
        switch(type){
            case 'RADIO':
                return document.querySelector('input[name="' + id + '"]:checked').value;
            break;

            case 'CHECKBOX':
                let values = [],
                elements = document.getElementsByName(id);

                Object.keys(elements).map(key => (
                   values.push(elements[key].value)
                ));
                
                return values.join(",");
            break;
        }
        return this.refs.input.value
    }

    render(){
        const { type, options, id, onChangeCallback, value } = this.props; 

        return(
             <div>
              {(function() {
                 switch(type) {
                    case 'TEXT':
                        return <input ref="input" name={id} value={value} type="text"/>;
                    case 'NUMBER':
                        return <input ref="input" name={id} type="text" />;
                    case 'RADIO':
                        return Object.keys(options).map(key => (
                            <div className="question-item-radio">
                                <input value={options[key].text} ref="input" id={key} name={id} type="radio"/>
                                <label for={key}>{options[key].text}</label>
                            </div>
                        ))
                        
                    case 'DATE':
                        return <input ref="input" type="date"/>;
                    case 'CHECKBOX':
                       return Object.keys(options).map(key => (
                            <div className="question-item-checkbox">
                                <label>
                                    <input ref="input" name={id} value={options[key].text} type="checkbox"/>{options[key].text}
                                    <span className="checkmark" ></span>
                                </label>
                            </div>
                        ))
                    case 'SELECT':                                                                    
                        return<select ref="input" name={id}> {Object.keys(options).map(id => (
                            <option value={options[id].value}>{options[id].text}</option>
                        ))}</select>
                    default:
                        return null;
                }
              })()}
            </div>
        );
    }
}
