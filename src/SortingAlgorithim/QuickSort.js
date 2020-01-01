export function getQuickSortAnimations(array, animations) {
  
    if (array.length <= 1) return array;
    
    quickSort(array, 0, array.length - 1, animations);
  
    return animations;
  }

  function quickSort(arr, low, high, animation){
        if (low < high)
        {
            /* pi is partitioning index, arr[pi] is now
            at right place */
            let pi = partition(arr, low, high, animation);

            quickSort(arr, low, pi - 1, animation);  // Before pi
            quickSort(arr, pi + 1, high, animation); // After pi
        }
    }

    /* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
    function partition (arr, low, high, animation)
    {

        // pivot (Element to be placed at right position)
        const pivot = arr[high];  
    
        let i = (low - 1)  // Index of smaller element

        animation.push([low, high, true]);
        animation.push([low, high, true]);

        animation.push([low, pivot, false]);

        for (let j = low; j <= high - 1; j++)
        {
            // If current element is smaller than the pivot
            if (arr[j] < pivot)
            {
                i++;    // increment index of smaller element

                let temp = arr[i]; // swap
                arr[i] = arr[j];
                arr[j] = temp;

                animation.push([i, i, true]);
                animation.push([i, i, true]);

                animation.push([i, arr[i], false]);

                animation.push([j, i, true]);
                animation.push([j, i, true]);

                animation.push([j, arr[j], false]);
            }
        }

        i++;
        let temp = arr[i]; 
        arr[i] = arr[high]; 
        arr[high] = temp;

        animation.push([i, i, true]);
        animation.push([i, i, true]);

        animation.push([i, arr[i], false]);

        animation.push([high, i, true]);
        animation.push([high, i, true]);

        animation.push([high, arr[high], false]);

        return i;
    }


