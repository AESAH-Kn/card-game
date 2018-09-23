import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
class App extends Component{
    render(){
        return(
            <div>
                <WordCard value={world}/>
            </div>
        );
    }
}

export default App;