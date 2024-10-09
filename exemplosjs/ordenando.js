// Função swap: troca os valores de duas posições em um vetor
const swap = (array, index1, index2) => {
    // Troca simultânea
    [array[index1], array[index2]] = [array[index2], array[index1]];
};

// Função shuffle: embaralha os elementos de um vetor
const shuffle = (array) =>{
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0){
        // Seleciona um elemento aleatorio
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Troca o elemento atual com o elemento aleatório
        swap(array, currentIndex, randomIndex)
    }
    return array;
};

// Função bubble_sort: ordena um vetor de inteiros usando o algoritmo Bubble Sort
const bubbleSort = (array) => {
    const len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
            }
        }
    }
    return array;
};

// Função selection_sort: ordena um vetor de inteiros usando o algoritmo Selection Sort
const selectionSort = (array) => {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        let indexMin = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
        }
        // Troca o elemento mínimo encontrado com o elemento na posição atual
        swap(array, indexMin, i)
    }
    return array;
};

// Função quick_sort: ordena um vetor de inteiros usando o algoritmo Quick Sort
const quickSort = (array, start = 0, end = array.length - 1) => {
    if (start >= end) {
        return;
    } 

    const pivotIndex = particionamento(array, start, end);
    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
    return array
};

// Função auxiliar particionamento para o Quick Sort
const particionamento = (array, start, end) => {
    const pivotValue = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(array, pivotIndex, end);
    return pivotIndex;
};
