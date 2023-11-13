const numList = [98, 1, 2, 10, 2, 9, 16];

function sortArray(arr: number[]) {

    console.log(Array.from(new Set(numList)).sort((a, b) => a - b))
}

sortArray(numList);
