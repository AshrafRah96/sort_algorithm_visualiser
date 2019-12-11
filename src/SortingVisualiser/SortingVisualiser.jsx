import React from 'react';
import './SortingVisualiser.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

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
        //slow it down using thread sleep
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < arrayBars.length; i++){
            setTimeout(() => {
                this.resetArray()
            },100);
        }
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

