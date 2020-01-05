export function getHeapSortAnimations(array, animations) {
  
    if (array.length <= 1) return array;
    
    HeapSort(array, animations);
  
    return animations;
}

  function HeapSort(arr, animations){
    const n = arr.length;
    // Build heap (rearrange array) 
    BuildMaxHeap(arr, n, animations);

    // One by one extract an element from heap 
    for(let i = n - 1; i >= 0; i--){
      Swap(arr, 0, i, animations);// Move current root to end
      Heapify(arr, i, 0, animations);//// Move current root to end
    }
  }

  function BuildMaxHeap(arr, n, animations){
    for(let i = n / 2 - 1; i >= 0; i--){
      Heapify(arr, n, i, animations);
    }
  }

  function Heapify(arr, n, i, animations){
    let largest = i; // Initialize largest as root 
    let l = 2*i + 1; // left = 2*i + 1 
    let r = 2*i + 2; // right = 2*i + 2 
  
    // If left child is larger than root 
    if (l < n && arr[l] > arr[largest]){
        largest = l; 
    }
  
    // If right child is larger than largest so far 
    if (r < n && arr[r] > arr[largest]) {
        largest = r; 
    }
    // If largest is not root 
    if (largest !== i) 
    { 
        Swap(arr, i, largest, animations); 
  
        // Recursively heapify the affected sub-tree 
        Heapify(arr, n, largest, animations); 
    } 
  }

  function Swap(arr, i, j, animations){
    let temp = arr[i];  
    arr[i] = arr[j];
    arr[j] = temp;

    animations.push([i, i, true]);
    animations.push([i, i, true]);

    animations.push([i, arr[i], false]);

    animations.push([j, i, true]);
    animations.push([j, i, true]);

    animations.push([j, arr[j], false]);
  }