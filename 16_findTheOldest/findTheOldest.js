const findTheOldest = function(array) {
    let currentYear = new Date().getFullYear();
    let oldest = array[0];
    for (let person of array){
        console.log(person);
        let start, end;
        start = person.yearOfBirth;
        if ("yearOfDeath" in person) end = person.yearOfDeath;
        else end = currentYear;

        let old_start, old_end;
        old_start = oldest.yearOfBirth;
        if ("yearOfDeath" in oldest) old_end = oldest.yearOfDeath;
        else old_end = currentYear;

        if (end-start > old_end-old_start) oldest = person;
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
