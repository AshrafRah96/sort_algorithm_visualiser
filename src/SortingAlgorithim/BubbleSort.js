export function getBubbleSortAnimations(array, animations) {
  
    if (array.length <= 1) return array;

    //array = [2,4,1,5,7,6,8,9,10,3];
    //index = [0,1,2,3,4,5,6,7,8,9]

    bubbleSort(array, animations);
  
    return animations;
  }

  function bubbleSort(arr, animation){
    if (arr.length <= 1){return arr;}

    /*Loop through the array reducing its size after each (the largest will be moved to the right so we dont need to compare)
        when the value is greater we swap */

    const n = arr.length; 
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) 
            {
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                animation.push([j, j, true]);
                animation.push([j, j, true]);

                animation.push([j, arr[j], false]);

                animation.push([j+1, j, true]);
                animation.push([j+1, j, true]);

                animation.push([j+1, arr[j+1], false]);
            }
        }
    }
    
  }