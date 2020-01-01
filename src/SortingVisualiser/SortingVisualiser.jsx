import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithim/MergeSort.js';
import {getQuickSortAnimations} from '../SortingAlgorithim/QuickSort.js';
import {getBubbleSortAnimations} from '../SortingAlgorithim/BubbleSort.js';
import './SortingVisualiser.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;
// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 300;
// This is the main color of the array bars.
const PRIMARY_COLOR = '#3D5467';
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
    const arrayBars = document.getElementsByClassName("array-bar");
        for (let i = 0; i < animations.length; i++) {
            

            let isColorChange = animations[i][2];
            if (isColorChange) {
              const [barOneIdx, barTwoIdx, move] = animations[i];
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

    bubbleSort(){
        this.animate(getBubbleSortAnimations(this.state.array, []));
    }

    heapSort(){
        
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
                <button class="button" onClick={() => this.resetArray()}>New Array</button>
                
                <button class="button" onClick={() => {
                    this.mergeSort();
                    updateInfomation(mergeSortInfomation());
                    }}>Merge Sort</button>
                
                <button class="button" onClick={() => {
                    this.quickSort();
                    updateInfomation(quickSortInfomation());
                    }}>Quick Sort</button>
                
                <button class="button" onClick={() => {
                    this.bubbleSort();
                    updateInfomation(bubbleSortInfomation());
                    }}>Bubble Sort</button>

                <button class="button" onClick={() => {
                    this.heapSort();
                    updateInfomation(heapSortInfomation());
                    }}>Heap Sort</button>
                </div>
                
                <div class="algo-infomation" id="info">
                    <h1 class="title"></h1>
                    <h3 class="description"></h3>
                    <h3 class="complexitiy"></h3>
                </div>
                
            </div>
        );
    }
}

  function randomIntFromInterval(min, max){
    // from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function updateInfomation(info) {
    document.querySelector(".title").innerHTML = info.Title;
    document.querySelector(".description").innerHTML = info.Description;
    document.querySelector(".complexitiy").innerHTML = info.Complexitiy;
  }

  function mergeSortInfomation(){
      let dictionaryOfInfo = {};
      dictionaryOfInfo.Title = "Merge Sort";
      dictionaryOfInfo.Description = "Merge Sort is a Divide and Conquer algorithm. " 
                        +"It divides the array in two halves, calls itself for the two halves (using recursion) and then merges the two sorted halves.";
      dictionaryOfInfo.Complexitiy = "The complexity is: O(n Log n) "
                        +"in all 3 cases (worst, average and best) as merge sort always divides the array into two halves and take linear time to merge two halves";
    return dictionaryOfInfo;
  }

  function quickSortInfomation(){
    let dictionaryOfInfo = {};
    dictionaryOfInfo.Title = "Quick Sort";
    dictionaryOfInfo.Description = "Quick Sort is a Divide and Conquer algorithm. " 
                      +"Similar to merge sort, however it works by selecting a pivot (typically the first or last element in the array), "
                      +"then places the element smaller than the pivot left and elements higher than the pivot to the right. Sorting in-place before spliting rather than splitting and then sorting.";
    dictionaryOfInfo.Complexitiy = "The complexity is: O(n Log n) "
                      +", worst case being O(n^2) when the list is already sorted however this is very rare.";
    return dictionaryOfInfo;
  }

  function bubbleSortInfomation(){
    let dictionaryOfInfo = {};
    dictionaryOfInfo.Title = "Bubble Sort";
    dictionaryOfInfo.Description = "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.";
    dictionaryOfInfo.Complexitiy = "The complexity is: O(n^2), Worst case occurs when array is reverse sorted."
                      +" And Best case O(n) when the array is already sorted. ";
    return dictionaryOfInfo;
  }

  function heapSortInfomation(){
    let dictionaryOfInfo = {};
    dictionaryOfInfo.Title = "Heap Sort";
    dictionaryOfInfo.Description = "Under Development";
    dictionaryOfInfo.Complexitiy = "The complexity is:  "
                      +", ";
    return dictionaryOfInfo;
  }
