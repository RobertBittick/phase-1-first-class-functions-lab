const returnFirstTwoDrivers = function() {
    return ['Antonia', 'Nuru']
}

const returnLastTwoDrivers = function(){
    return ['Amari','Mo']
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function fareQuintupler() {
        return integer * 5
    }
}

const newvar = fareQuintupler()

function fareDoubler(newvar){
    return newvar * 2
}
function fareTripler(newvar){
    return newvar * 3
}

const drivers = ['Antonia', 'Nuru','Amari','Mo']

function selectDifferentDrivers(drivers,selectingDrivers){
    if (selectingDrivers === returnFirstTwoDrivers) {
        return drivers = ["Antonia", "Nuru"] 
    } else if (returnLastTwoDrivers) {
        return drivers = ["Amari", "Mo"]
    }
}
