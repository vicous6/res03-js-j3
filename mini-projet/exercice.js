
let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];





// function countActiveUsers(users) {
//   let count =0
    
//     for(let i = 0 ; i < users.length; i++){
        
        
//         if(users[i].isActive== true){
//             count++
            
//         }
//     }
//     return count

// }



// // exercice2

// function hasBlueEyes(activeUsers) {
    
//     let count =0
    
//     for(let i = 0 ; i < users.length; i++){
        
        
//         if(activeUsers[i].eyeColor== "blue" && users[i].isActive== true){
//             count++
            
//         }
//     }
//     return count

// }

// console.log(`Out of our currently ${countActiveUsers(users)} active users, ${hasBlueEyes(users)} have blue eyes.`);



// exercice3

// function countActiveUsers(users) {
//   let count =0
    
//     for(let i = 0 ; i < users.length; i++){
        
        
//         if(users[i].isActive== true){
//             count++
            
//         }
//     }
//     return count

// }

// countActiveUsers(users)


// function getActiveUsersAges(users) {
    
//     let tabAge= []
    
//     for(let i = 0 ; i < users.length; i++){
        
        
//         if(users[i].isActive== true){
            
//             tabAge.push(users[i].age)
            
//         }
//     }
//     return tabAge


// }

// function computeActiveUsersAverageAge(ages) {
//     let total = 0
    
    
//     for(let i = 0 ; i < ages.length;i++){
        
//       total += ages[i]
//     }
// return total/ages.length
// }

// console.log(`Out of our currently ${countActiveUsers(users)} active users, the average age is ${computeActiveUsersAverageAge(getActiveUsersAges(users) )}.`);


// Exercice 4


// function getMultronUsers(users) {
    
//     let tab = []
//     for(let i = 0 ; i < users.length; i++){
        
//         if(users[i].company=="MULTRON"){
            
//           tab.push(users[i])
//         }
//     }
//     return tab
// }

// function setMultronToCenturia(users) {


//     for(let i = 0; i < users.count; i++){
        
//         users[i].company= "CENTURIA"
//     }
//     return console.log(users)
// }


// setMultronToCenturia(getMultronUsers(users) )
// console.log(`${getMultronUsers(users).length } user companies have been changed from MULTRON to CENTURIA.`);


// function getBrownEyedUsers(users) {

// }

// function excludeCenturiaWorkers(users) {
//     let count = 0
//     for(let i = 0 ; i < users.length; i ++){
        
//         if(users[i].eyeColor== "brown" && users[i].companies != "CENTURIA "){
            
//             count ++
//         }
        
//     }
//     return count
// }

// console.log(`${excludeCenturiaWorkers(users)} users with brown eyes do not work at CENTURIA`);


// exercice 6


function brownEyesActive (users){
    let count = 0
    for(let i = 0; i < users.length; i ++){
        
        if(users[i].eyeColor==="brown" && users[i].isActive== true){
            
            count++
        }
        
        
    }
 return count  
}
function brownEyesInactive (users){
     let count = 0
     for(let i = 0; i < users.length; i ++){
        
        if(users[i].eyeColor==="brown" && users[i].isActive== false){
            
            count++
        }
        
    }
     return count  
}
function greenEyesActive(users){
     let count = 0
     for(let i = 0; i < users.length; i ++){
        
        if(users[i].eyeColor==="green" && users[i].isActive== true){
            
            count++
        }
        
    }
     return count  
}
function greenEyesInactive  (users){
     let count = 0
     for(let i = 0; i < users.length; i ++){
        
        if(users[i].eyeColor==="green" && users[i].isActive== false){
            
            count++
        }
        
    }
     return count  
}
function blueEyesActive (users){
     let count = 0
     for(let i = 0; i < users.length; i ++){
        
        if(users[i].eyeColor==="blue" && users[i].isActive== true){
            
            count++
        }
        
    }
     return count  
}
function blueEyesInactive (users){
     let count = 0
     for(let i = 0; i < users.length; i ++){
        if(users[i].eyeColor==="blue" && users[i].isActive== false){
            
            count++
        }
        
        
    }
     return count  
}

console.log(`Out of our brown eyed users ${brownEyesActive (users)} are active and ${brownEyesInactive (users)} are inactive`);

console.log(`Out of our green eyed users ${greenEyesInactive  (users)} are active and ${greenEyesInactive  (users)} are inactive`);

console.log(`Out of our blue eyed users ${blueEyesActive (users)} are active and ${blueEyesInactive (users)} are inactive`);