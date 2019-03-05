// add your solutions here
arrayOne = [1,2,3,4,5,6,7,8,9,10,-1,-2,-3,20,99,97,200, 220, 12];

function evenNumbers(numbers) {
    let evenArray = numbers;
    return evenArray.filter(i => i % 2 === 0);
}
console.log(evenNumbers(arrayOne))

function positiveNumbers(numbers) {
    let positiveArray = numbers;
    return positiveArray.filter(i => i > 0)
}
console.log(positiveNumbers(arrayOne))

function squareNumbers(numbers) {
    let squareArray = []
    numbers.forEach(function (number) {
        let squared = number ** 2;
        squareArray.push(squared);
    });
    console.log(squareArray);
}

squareNumbers(arrayOne)

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

function coolCities(citiesArray) {
    let cities = (citiesArray)
    let coldCities = []
    cities.forEach(function (city) {
    let citytemp = city.temperature
    if (citytemp < 70) {
        coldCities.push(city)
    }
})
return coldCities
}
coolCities(cities) 

function cityNames(citiesArray) {
    let cityNameArray = []
    let allCities = Object.values(citiesArray);
    allCities.forEach(function (cities) {
    let cityName = cities.name
    cityNameArray.push(cityName)
})
return cityNameArray
}
cityNames(cities)

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

function goodJob(people) {
    let names = people
    names.forEach(function (name) {
        console.log(`Good job ${name}!`)
    })
}
goodJob(people)


function call3Times(fun) {
    fun("hello world");
    fun("hello world");
    fun("hello world");
}

call3Times(console.log)

function hello(){
    console.log('Hello World!')
}

function nTimes(times, fun) {
    for (i = 0; i < times; i++) {
        fun()
    }
}

nTimes(2, hello)

function hello(){
    console.log('Hello World!')
}