import React from 'react';
import './SortingVisualiser.css';

export class SortingVisualiser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: []
        };
    }

    componentDidMount(){
        this.resetArray(); // When the application runs for the first time we call the method
    }
    
    resetArray(){
        const array = [];
        for(let i = 0; i < 250; i++){
            array.push(randomIntFromInterval(5,1000)); // Starting from 5 so we can see the bar on the screen
        }
        this.setState({array}); // Reset to have this array
    }

    mergeSort(){

    }

    quickSort(){
        
    }

    heapSort(){
        
    }

    bubbleSort(){
        
    }

    render(){
        const array = this.state.array;
        return (
            <div class="array-container">
                {array.map((value, index) => (
                    <div 
                        class="array-bar" 
                        key={index}
                        style={{height: `${(value/1.5)}px`}}></div> // adujsting hight to fit screen
                ))}
                
                <div>
                <button onClick={() => this.resetArray()}>New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
                
            </div>
        )
    }
}

function randomIntFromInterval(min, max){
    // from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1) + min)
}