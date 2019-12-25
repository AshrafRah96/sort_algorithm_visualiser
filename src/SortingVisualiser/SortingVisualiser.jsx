import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithim/MergeSort.js';
import {getQuickSortAnimations} from '../SortingAlgorithim/QuickSort.js';
import './SortingVisualiser.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;
// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 300;
// This is the main color of the array bars.
const PRIMARY_COLOR = 'darkslategray';
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export class SortingVisualiser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray(); // When the application runs for the first time we call the method
    }
    
    resetArray(){
        const array = [];
        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromInterval(5,1000)); // Starting from 5 so we can see the bar on the screen
        }
        this.setState({array}); // Reset to have this array
    }

    animate(animations){
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");

            let isColorChange = animations[i][2];
            if (isColorChange) {
              const [barOneIdx, barTwoIdx, move] = animations[i];
              console.log(barOneIdx);
              console.log(barTwoIdx);
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight, move] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight/1.5}px`;
              }, i * ANIMATION_SPEED_MS);
            }
          }
    }

    // Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves
    mergeSort(){
        this.animate(getMergeSortAnimations(this.state.array, []));
    }

    quickSort(){
        this.animate(getQuickSortAnimations(this.state.array, []));
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
                        className="array-bar"
                        key={index}
                        style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value/1.5}px`,
                        }}>
                        </div>
                ))}
                
                <div>
                <button onClick={() => this.resetArray()}>New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
                
            </div>
        );
    }
}

function randomIntFromInterval(min, max){
    // from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1) + min)
}

