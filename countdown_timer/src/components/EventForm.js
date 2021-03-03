import React, { Component } from 'react';
import Inputs from './EventFieldsName'
import './EventForm.css'

class EventForm extends Component{
    render(){
        return(
            <div className='container' id='form_container'>
                <h2>Enter Your Event</h2>
                    <Inputs/>
                
            </div>
        );
    }
}

export default EventForm;