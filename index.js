// Code your solution in this file!
const returnFirstTwoDrivers=function(){
return ([`Antonia`,`Nuru`])
}
 const returnLastTwoDrivers=function(){
    return([`Amari`,`Mo`])
 }

const selectingDrivers=([returnFirstTwoDrivers,returnLastTwoDrivers])

function createFareMultiplier(a){
   return function(fare){
     return (fare*a)
   }
}
const fareDoubler=createFareMultiplier(2)
const fareTripler=createFareMultiplier(3)

const selectDifferentDrivers=function(returnLastTwoDrivers,returnFirstTwoDrivers){
   return returnFirstTwoDrivers(returnLastTwoDrivers)
}

   

