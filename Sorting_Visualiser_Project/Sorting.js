//Disables sorting buttons used in conjunction with enable
//so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}
function enableSortingBtn(){
    document.querySelector(".selectionSort").disabled=false;
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
}
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable
//so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can do animations of sorting
//takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let arraySize=document.querySelector("#arr_sz");
//Event Listener to update size of array and creating it
 arraySize.addEventListener('input',function(){
     newarray(parseInt(arraySize.value));
 })

let delayElement = document.querySelector('#speed_input');
//default value
let delay=260;

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});

//swap function for sorting algorithms
//It takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
//Function to delete previous added elements
function deleteChild()
{
    const bar=document.getElementById("bars");
    bar.innerHTML=" ";
}
let array=[];
let newbtn=document.getElementById("button");

newbtn.addEventListener("click",function(){
    enableSortingBtn();
    enableSizeSlider();
    newarray(arraySize.value);
})
function newarray(noOfBars=100)
{
    //calling function to delete previously added elements
    deleteChild();

    array=[];
    for(let i=0;i<noOfBars;i++){
        array.push(Math.floor(Math.random()*400)+2);    
    }
    const MyBar=document.getElementById("bars");
    for(let i=0;i<noOfBars;i++){
        let tempbar=document.createElement("div");
        tempbar.classList.add("flex-item");
        tempbar.classList.add("Allbars");
        tempbar.classList.add("barNo${i}");
        tempbar.style.height=array[i]+"px";
        MyBar.appendChild(tempbar);
    }
    

}