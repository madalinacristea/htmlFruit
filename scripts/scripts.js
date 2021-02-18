'use strict';

//const prompt = require('prompt-sync')({sigint: true});

//Apple Banana Cherry Diamond Plum

const reel1=['Banana','Cherry','Apple','Cherry','Plum','Cherry','Banana','Apple','Diamond','Plum','Plum', 'Apple']
const reel2=['Apple','Diamond','Cherry','Banana','Plum','Cherry','Apple','Banana','Apple','Cherry','Plum','Plum']
const reel3=['Cherry','Banana','Cherry','Apple','Plum','Banana','Diamond','Apple','Cherry','Banana','Plum','Plum']

let money=10

//while (money){
function spinReels(){

    console.log('You have £' + money )
    prompt('Press enter to spin the wheels') 
       
    money = money -10

    let p1 = Math.floor(Math.random() * 10)
    let p2 = Math.floor(Math.random() * 10) 
    let p3 = Math.floor(Math.random() * 10) 


    console.log(reel1[p1] + ' ' + reel2[p2] + ' ' + reel3[p3])

    
    if (reel1[p1]==reel2[p2] && reel2[p2]==reel3[p3]){

        console.log ('You win :o)')
        if (reel1[p1]=='Apple'){
            money = money + 20
            console.log ('£2')
        }
        else if (reel1[p1]=='Banana'){
            money = money + 30
            console.log ('£3')
        }
        else if (reel1[p1]=='Diamond'){
            money = money + 40
            console.log ('£4')
        }
        else if (reel1[p1]=='Cherry'){
            money = money + 50
            console.log ('£5')
        }
        else if (reel1[p1]=='Plum'){
            money = money + 70
            console.log ('£7')
                
        }
    }
}

