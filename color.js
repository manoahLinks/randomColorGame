// QUERYING HTML ELEMENTS AND CREATING VARIABLES TO MANIPULATE THE U.I ELEMENTS

// COLOROPTIONS ON THE U.I
let colorButton = Array.from(document.querySelectorAll('.colorButton'))

// RGB COLORNAME TO BE FOUND AMONG THE COLOR OPTIONS
const screen = document.querySelector('#screen')

// 
const result = document.querySelector('#result')


const points = document.querySelector('strong')
// CREATING AN ARRAY CONTAINING OBJECTS WITH THE VARIOUS COLORNAME AND ITS OPTIONS TO BE DISPLAYED ON U.I

const colorArray = [

    {colorName: 'rgb(139, 243, 139)',
     options: [ 'rgb(71, 145, 71)', 'rgb(15, 145, 15)', 'rgb(139, 243, 139)', 'rgb(32, 23, 239)', 'rgb(137, 113, 9)', 'rgb(19, 143, 190)']},

    {colorName: 'rgb(231, 60, 123)',
     options: [ 'rgb(100, 100, 100)', 'rgb(200, 0, 200)','rgb(100, 50, 210)','rgb(20, 200, 60)', 'rgb(234, 13, 90)', 'rgb(231, 60, 123)']},

    {colorName: 'rgb(241, 10, 145)', 
     options: [ 'rgb(190, 241, 100)', 'rgb(241, 10, 145)', 'rgb(234, 143, 90)', 'rgb(198, 10, 190)','rgb(219, 143, 10)','rgb(19, 13, 190)']},

    {colorName: 'rgb(101, 122, 75)', 
     options: [ 'rgb(101, 100, 200)','rgb(27, 100, 200)', 'rgb(101, 122, 75)', 'rgb(255, 255, 125)','rgb(109, 243, 240)','rgb(0, 0, 219)']},

    {colorName: 'rgb(0, 180, 45)',
     options: [ 'rgb(0, 100, 200)', 'rgb(0, 180, 45)', 'rgb(109, 170, 70)', 'rgb(255, 0, 20)', 'rgb(190, 43, 90)', 'rgb(0, 173, 90)']},

    {colorName: 'rgb(56, 50, 200)', 
     options: [ 'rgb(56, 50, 0)', 'rgb(40, 40, 200)','rgb(45, 143, 190)', 'rgb(190, 143, 190)', 'rgb(56, 50, 200)','rgb(19, 143, 190)']},

    {colorName: 'rgb(105, 41, 65)',
     options: [ 'rgb(104, 100, 100)', 'rgb(105, 31, 60)', 'rgb(190, 143, 90)', 'rgb(105, 43, 0)', 'rgb(105, 41, 65)', 'rgb(19, 3, 19)']},

    {colorName: 'rgb(89, 250, 245)',
     options: [ 'rgb(65, 250, 250)', 'rgb(80, 250, 203)', 'rgb(245, 250, 89)', 'rgb(90, 213, 19)', 'rgb(90, 243, 243)', 'rgb(89, 250, 245)']},

    {colorName: 'rgb(171, 240, 175)',
     options: [ 'rgb(200, 230, 10)', 'rgb(171, 240, 200)', 'rgb(171, 240, 175)', 'rgb(209, 43, 190)', 'rgb(191, 143, 190)', 'rgb(19, 143, 0)']},

    {colorName: 'rgb(34, 255, 45)', 
     options: [ 'rgb(40, 250, 30)', 'rgb(200, 90, 40)', 'rgb(34, 233, 190)', 'rgb(19, 143, 40)', 'rgb(34, 255, 45)', 'rgb(19, 143, 190)']}

]

// CREATING A FUNCTION THAT HANDLES GENERATING A RANDOM COLORNAME FROM THE OBJECTS IN THE COLOR ARRAY
// AND DISPLAY IT TO THE U.I
let colorShuffle = ()=>{
   screen.textContent = colorArray[Math.floor(Math.random() * colorArray.length)].colorName 

   // CREATING IF ELSE CASES TO DETERMINE WHICH OPTIONS COLOR SHOULD BE DISPLAYED ON THE U.I 

    if(screen.textContent == colorArray[0].colorName){
        for(i = 0; i < colorButton.length; i++){
            colorButton[i].style.background = `${colorArray[0].options[i]}` 
        } 
    }else if(screen.textContent == colorArray[1].colorName){    
        for(i = 0; i < colorButton.length; i++){
            colorButton[i].style.background = `${colorArray[1].options[i]}` 
        }
    }else if(screen.textContent == colorArray[2].colorName){
        for(i = 0; i < colorButton.length; i++){
            colorButton[i].style.background = `${colorArray[2].options[i]}` 
        }
    }else if(screen.textContent == colorArray[3].colorName){
        for(i = 0; i < colorButton.length; i++){
            colorButton[i].style.background = `${colorArray[3].options[i]}` 
        }
    }else if(screen.textContent == colorArray[4].colorName){
        for(i = 0; i < colorButton.length; i++){
            colorButton[i].style.background = `${colorArray[4].options[i]}` 
        }
    }else if(screen.textContent == colorArray[5].colorName){
        for(i = 0; i < colorButton.length; i++){
            colorButton[i].style.background = `${colorArray[5].options[i]}` 
        }
    }else if(screen.textContent == colorArray[6].colorName){
        for(i = 0; i < colorButton.length; i++){
            colorButton[i].style.background = `${colorArray[6].options[i]}` 
        }
    }else if(screen.textContent == colorArray[7].colorName){
        for(i = 0; i < colorButton.length; i++){
            colorButton[i].style.background = `${colorArray[7].options[i]}` 
        }
    }else if(screen.textContent == colorArray[8].colorName){
        for(i = 0; i < colorButton.length; i++){
            colorButton[i].style.background = `${colorArray[8].options[i]}` 
        }
    }else if(screen.textContent == colorArray[9].colorName){
        for(i = 0; i < colorButton.length; i++){
            colorButton[i].style.background = `${colorArray[9].options[i]}` 
        }
    }else{
        console.log('wrong option')
    }

}

const wrongOptionsSelected = []
 // LOOPING THROUGH EACH COLOR OPTION IN THE U.I
colorButton.forEach((colorButton)=>{

        // ADDING CLICK EVENTS TO TO EACH COLOR-OPTION IN THE U.I 
        colorButton.addEventListener('click', ()=>{

            // ADDING AN IF STATEMENT TO COMPARE THE USER SELECTED OPTION  
            // IF CORRECT REMOVING THE INVISIBLE CLASS FOR THE BUTTON  AND INCREMENTING RESULT
            // AND RE-INTIALIAZING THE COLOR SHUFFLE FUNCTION TO GENERATE A RANDOM  COLORNAME AND DISPLAY ITS OPTIONS
            // ELSE PUSHING TH WRONG OPTION INTO THE 'WrongoptionsSelected' ARRAY AND MAKING IT INVISIBLE 
            if(colorButton.style.background == screen.textContent){

                wrongOptionsSelected.forEach((wrongOptionSelected)=>{
                    wrongOptionSelected.classList.remove('invisible')
                })
                colorShuffle()
                const arrlen = wrongOptionsSelected.length
                for(i = 0; i <= wrongOptionsSelected.length + 1; i++){
                    wrongOptionsSelected.pop()
                }
                
                if(arrlen == 0){
                    result.value += 5
                    points.textContent =+ result.value
                    points.textContent = '+5'
                }else{
                    switch(arrlen){
                        case 1:
                            result.value += 4
                            points.textContent = '+4'
                            break;
                        case 2:
                            result.value += 3
                            points.textContent = '+3'
                            break;
                        case 3:
                            result.value += 2
                            points.textContent = '+2'
                            break;
                        case 4:
                            result.value += 1
                            points.textContent = '+1'
                            break;
                        case 5:
                            result.value.textContent += 0
                            points.textContent = '+0'
                            break;
                    }
                }
            }else{
                wrongOptionsSelected.push(colorButton)
                colorButton.classList.add('invisible')
            }
        })
})

// INTIAILIZING THE FUNCTION ON LOADING THE PAGE
colorShuffle()
