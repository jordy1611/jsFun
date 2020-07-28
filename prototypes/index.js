/*eslint-disable*/
const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    let orangeKitties = kitties.filter(kitty => kitty.color === 'orange');
    orangeKittyNames = orangeKitties.map(kitty => kitty.name);

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = orangeKittyNames;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // use combo of .map and .sort
    const result = kitties.sort((a, b) => (a.age > b.age) ? -1 : 1);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    kitties.forEach(kitty => kitty.age += 2);
    const result = kitties;
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(thing) {
  //   clubs.reduce((list, object) => {
  //     object.members.forEach(member => {
  //
  //     })
  //   }, {});
  // let peoples = {};
  //   clubs.forEach(place => {
  //     place.members.forEach( )
  //     // peoples[place.members] = place.club
  //   });

    // returns {
  // 'Louisa,Pam,Nathaniel': 'Drama',
  // 'Leta,Robbie,Jhun,Will': 'Band',
  // 'David,Pam,Brittany,Robbie': 'Chess',
  // 'Pam,David,Brittany,Christie,Leta': 'Newspaper',
  // 'Nathaniel,Leta': 'Astronomy',
  // 'Christie,David,Robbie': 'FBLA',
  // 'Jhun,Louisa': 'Art',
  // }

  // or for Each thing thing.members.find()

  //let test1 = {'Louisa,Pam,Nathaniel': 'Drama'};


    // let peoples = clubs.reduce((profile, club) => {
    //
    // })
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // Biut
    // console.log(peoples);
    const result = thing
    return result;


    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {

    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    // sort through data array
    // create new data array
    // map or reduce
    // keep mod key & values in same order
    // create new key studentsPerInstructor
    // set spi value to students/instructor




    // const result = mods.map(mod => {
    //   return {'mod': mod.mod, 'studentsPerInstructor': (mod.students / mod.instructors)}
    // });

    const result = mods.reduce((array, mod) => {
      let obj = {'mod': mod.mod, 'studentsPerInstructor': (mod.students / mod.instructors)}
    //  console.log(obj);
      array.push(obj);
      return array
      //console.log(array);
    }, [])
    // console.log(result);

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    // iterate through cake
    // create new array
    // w/ .map or .reduce
    // each flavor and stock# in same order
    // const result = cakes.map(cake => {
    //   return {'flavor': cake.cakeFlavor, 'inStock': cake.inStock}
    // })

    const result = cakes.reduce((cakes, cake) => {
      cake = {'flavor': cake.cakeFlavor, 'inStock': cake.inStock}
      cakes.push(cake);
      return cakes
    }, [])

    return result;
    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    // iterate through cake
    // filter any cake not in stock
    // if cake.inStock !== 0
    // return new arrays

    const result = cakes.filter(cake => cake.inStock !== 0)
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    // need to access inStock
    // need to change array of objects into array of numbers
    // return values in array of numbers
    // reduce or map to return new numbers
    // reduce array into one value

    const result = cakes.reduce((sum, cake) => {
      return sum += cake.inStock
    }, 0)
    return result;



    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]


    //have list of objets with arrays of toppings
    // need to access toppings
    // with REDUCE or map
    // add to new array aka accumnulator
    //
    // concat that array/accumulator at end
    // return one big array of toppings

    const result = cakes.reduce((toppingsList, cake) => {
      toppingsList.push(cake.toppings);
      return toppingsList.reduce((acc, array) => {
        return acc.concat(array).reduce((acc, ingredient) => {
          if(acc.indexOf(ingredient) === -1) { //wtf does this mean
            acc.push(ingredient)
          }
          return acc
        }, [])
      }, [])
      //console.log(allToppings.concat(toppingsList));
      //console.log(toppingsList);
    }, [])

    //console.log(toppingsArray)

    return result;
    // Annotation:
    // Write your annotation here as a comment

  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    // need a list of ingredients with repeats
    // use nested reduce
    // first reduce, create array of topping arrays
    // second reduce, concat array of topping arrays
    // then filter and creat new array of with topping array and length of filtered arrays
    // filtering

    // returning an object
    // reduce to create object w/ keys as value from non repeating
    // need to compare non repeating array to repeating array and make object
    // value of keys is non repeating, using square brackets
    /// user reduce to create object  'ingredient': value
    // value is number of times each key shows up in repeating array
    // for each ingredient in nonrepeating array
    // filter repeating array with name
    // take length of filtered array


    // default object[ingredient] = 0
    //
    //if statement object[ingredient] ++
    //
    // const ingredients = cakes.reduce((toppingArrays, cake) => {
    //   toppingArrays.push(cake.toppings)
    //   return toppingArrays.reduce((toppings, toppingArray) => {
    //     // return repeating array
    //     return toppings.concat(toppingArray).reduce((noRepeats, repeatIng) => {
    //       if(noRepeats.indexOf(repeatIng) === -1) {
    //         noRepeats.push(repeatIng)
    //       }
    //       // returns non repeating array
    //       return noRepeats.reduce((list, nonRepeatIng) => {
    //         list[`${nonRepeatIng}`] = 'butts' //having issue creating object
    //         return list
    //       }, {})
    //     }, []) // list of repeating ingredients
    //   }, [])
    // }, [])




    // tally reduce in mdn
    // Josh Approach
    const grocery = cakes.reduce((ingredientsList, cake) => {
      return [...ingredientsList, ...cake.toppings];  /// so initaly pushes empty array
    }, []);
    // console.log(grocery);
    // in the return statement it starts off with ingredientsList (at that point is empty array)
    //concats that into nothing
    // adds a concatted cake.toppings
    // again
    // again

    const result = grocery.reduce((acc, topping) => {
      acc[topping] = (acc[topping] || 0) + 1;
      return acc;
    }, {});
    //accumulatorObject[topping] is equal to it's (current value or 0) +1
    // console.log(result);
    // console.log(ingredients)
  //  return result;
    // Annotation:
    // Write your annotation here as a comment

    // const parks = nationalParks.reduce((visit, park) => {
    //   if(!park.visited) {
    //     visit.parksToVisit.push(park.name);
    //   } else {
    //     visit.parksVisited.push(park.name);
    //   }
    //   return visit;
    // }, {parksToVisit: [], parksVisited: []});
    // const result = parks
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {

    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]
    // filter classrooms arrays
    // criteria is program === 'FE'
    const result = classrooms.filter(classroom => {
      return classroom.program === 'FE';
    })
    // console.log(result)
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

      // go through each classroom using reduce
      // create a new object
      // build out object with empty values at end of reduce
      // keys are feCapacity and beCapacity
      // values are separate reduces?
      // can I use spread operator?
    const modCapacities = classrooms.reduce((totalCap, classroom) => {
      if(classroom.program === 'FE') {
        totalCap.feCapacity += classroom.capacity;
      } else {
        totalCap.beCapacity += classroom.capacity;
      }
      return totalCap
    }, {feCapacity: 0, beCapacity: 0})

    const result = modCapacities
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    // use sort on classrooms
    // need to target capacity of each classroom
    // a.capicity - b.capacity

    const sortedClassrooms = classrooms.sort((a, b) => {
      return a.capacity - b.capacity;
    })
    // console.log(sortedClassrooms);
    const result = sortedClassrooms;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']
    // using reduce
    // filter out books whose genre does not equal horror or true Crime
    // if genre !== horror && !== true crime
    //push book.name into the accumulator
    // return accumulator
    //return that array

    const happyBooks = books.reduce((titles, book) => {
      if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
        titles.push(book.title)
      }
      return titles
    }, [])
    // console.log(happyBooks)
    const result = happyBooks
    return result;

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
    /*
    filtering and creating new array === reduces
    use reduce on books, acc is array
      if book.published >= 1990
        object is title: book.title year: book.years
        push new object to accumulator
      return acc
    return reduce (probably at beginning)
    */

    const newBooks = books.reduce((newList, book) => {
      if (book.published >= 1990) {
        let newBook = {title: book.title, year: book.published}
        newList.push(newBook)
      }
      return newList
    }, [])

    const result = newBooks;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]
    /* forEach, do some math, create new array of math === map
     .map each city
        function that each city changes to the avg
        avg temp is city.high + city.low / 2
     */

     const avgTemps = weather.map(city => {
      return (city.temperature.high + city.temperature.low) / 2
     })
    const result = avgTemps
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]


    /*go through array and return changed arrat based on 1 property === reduce
    weather.filter
      if type is sunny or mostly sunny
        psuh message including location and type using interpolation into acc
      return acc
    */

    const sunnyCities = weather.reduce((sunCities, city) => {
      if(city.type === 'sunny' || city.type === 'mostly sunny') {
        sunCities.push(`${city.location} is ${city.type}.`)
      }
      return sunCities
    }, [])

    const result = sunnyCities
    return result;
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    // only need to return one object
    // sort through array using humidity as criteria
    // return first item in array

    const sortedCities = weather.sort(function(a, b) {
      return b.humidity - a.humidity
    })
    const humidCity = sortedCities.shift()
    const result = humidCity
    return result;

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    // iterate through national parks
    // new object w/ new keys
    // parksVisited and parksToVisit
    // maybe one reduce
    // if visited = true
    // push name to parksVisited key
    // if visited = false
    // push name to parksToVisit to visit key

    //

    const parks = nationalParks.reduce((visit, park) => {
      if(!park.visited) {
        visit.parksToVisit.push(park.name);
      } else {
        visit.parksVisited.push(park.name);
      }
      return visit;
    }, {parksToVisit: [], parksVisited: []});
    const result = parks
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]
    /* go through each array object and return altered object === reduce
      for each reduce
        create empty object
        object[park.location] = park.name
        push object into acc
        return acc
        */
        const parkStates = nationalParks.reduce((parks, park) => {
          let state = {}
          state[park.location] = park.name
          parks.push(state);
          return parks
        }, [])
        // console.log(parkStates)
        // const parkStates = nationalParks.map(park => {
        //   return park[park.location] = park.name
        // })
    // Annotation:
    // Write your annotation here as a comment
    return parkStates
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    // create array of only activities.
    // start off with var = []
    // for each park push ... park acitivities

    let activities = []
    nationalParks.forEach(park => {
      activities.push(...park.activities)
    })

    // console.log(activities);
    filteredActivities = Array.from(new Set(activities));
    // console.log(filteredActivities);
    // console.log(filteredActivities)
    const result = filteredActivities
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40
    /*each brewery, add length of param to new array, sum those numbers === reduce
    for each brewery
      add brewery.beers.length to acc
      return acc*/
    const brewCount = breweries.reduce((count, brewery) => {
      return count += brewery.beers.length
    }, 0)
    // console.log(brewCount)
    const result = brewCount;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    // going through each brewery, taking length of beers and name, creating new array of objects === map
    // for each map
      // create new object
        // object keys are name and beerCount
        // object values are brewery.name and beers.length

    const breweryBeers = breweries.map(bar => {
      return {name: bar.name, beerCount: bar.beers.length}
    })

    const result = breweryBeers
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    // let topBeer
    // let counter = 0
    // go through each brewery
      // go through each breweries beers
        //if beer.abv > counter
          // counter = beer.abv
          // topBeer == beer
    // create a counter = 0 in between for each's,
    // in 2nd each if abv > counter then counter = abv

    let topBeer;
    let topAbv = 0
    breweries.forEach(brewery => {
      brewery.beers.forEach(beer => {
        if (beer.abv > topAbv) {
          topAbv = beer.abv
          topBeer = beer
        }
      })
    })

    const result = topBear
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // crate empty array to push new teacher objects
      let result = [];
    // iterate over instructors array
      instructors.forEach(instructor => {
        cohorts.forEach(cohort => {
          if(instructor.module === cohort.module) {
            result.push({name: instructor.name, studentCount: cohort.studentCount});
          }
        })
        // instructor.reduce((teacherObject, modules) => {
        //
        // }, {})
      })
    // using module to compare
    // iterate over cohorts
    // compare module values
    // create object with key name: value name (from instructors) &
    // studentCount : value (from cohorts);



    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    // const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // create object outside of forEach loop
    // iterate over cohorts
    // filter instructors based on cohort modules
    // return length of array (number of teachers) of teachers that match filter
    // divide cohorts.studentCount by length of filtered teachers
    const result = {};
    cohorts.forEach(cohort => {
      let filteredInstructors = instructors.filter(instructor => {
        return instructor.module === cohort.module;
      })
      let studentRatio = cohort.studentCount / filteredInstructors.length;
      result[`cohort${cohort.cohort}`] = studentRatio;
    })
    // Create object with cohortname as key and math as value
    // Return an object of how many students per teacher there are in each cohort e.g.

    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((instructorMods, instructor) => {
      instructorMods[instructor.name] = [];
      cohorts.forEach(cohort => {
        instructor.teaches.forEach(skill => {
          if (cohort.curriculum.includes(skill) && !instructorMods[instructor.name].includes(cohort.module)) {
              instructorMods[instructor.name].push(cohort.module)
            }
          })
        })
      return instructorMods
    }, {})
    return result;

    // Annotation:
    // Write your annotation here as a comment
    //
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* .includes somewhere
    make a list of curriculums from cohorts, keys are in order from cohorts
    start with empty array
    create array of curriculums using forEach.
      for cohort
        curriculem .forEach push curriculum into empty array
    Array from new Set to elimenate duplicates.
    Using a reduce on new array of curriculems, create a new object (entire thing will be acc)
      each reduce acc[curriculem] = []
    ---- back up is create empty object. foreach new array and set emptyobject[curriculum] = []
      value = for each on instructors
        if isntructor.teches.includes curriculem
          push teacher name to acc curriculem
    */

  function getCurriculums() {
    let curriculums = []
    cohorts.forEach(cohort => curriculums.push(...cohort.curriculum))
    curriculums = Array.from(new Set(curriculums))
    let currics = curriculums.reduce((currics, curric) => {
      currics[curric] = []
      instructors.forEach(instructor => {
        if (instructor.teaches.includes(curric)) {
          currics[curric].push(instructor.name)
        }
      })
      return currics
    }, {})
    return currics
  }


    const result = getCurriculums()
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]
    /*
    create array of new objects based on bosses

    start with array of boss object keys using Object.keys
    bosses array.reduce
    push a new object into the acc
      can just create object with key values
      {bossName : bosses[boss].name, sidekickLoyalty: 0}
      inside of reduce go through sidekicks with for each
        for each side kick
          if sidekick.boss === bosses[boss].name
            sidekickLoyalty += sidekick.loyaltyToBoss
      return acc
    return full reduce
    */

    function getBossLoyalties() {
      const bossKeys = Object.keys(bosses);
      const bossLoyalties = bossKeys.reduce((loyalties, bossKey) => {
        let bossInfo = {bossName: bosses[bossKey].name, sidekickLoyalty: 0}
        sidekicks.forEach(sidekick => {
          if (sidekick.boss === bosses[bossKey].name) {
            bossInfo.sidekickLoyalty += sidekick.loyaltyToBoss
          }
        })
        loyalties.push(bossInfo)
        return loyalties
      }, [])
      return bossLoyalties
    }


    const result = getBossLoyalties();
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // return array of objects exactly the same objects as stars
    //but filtered based on constellations

    /* filtering stars based on constellation
    crate empty array
    for each constellation key
     if constellation.stars.includes()
    create an object keys array of constellations
    forEach star
      if
      use object keys to iterate through constellations
      if constellation

create array of constellation keys
reduce stars
inside reduce, for each constellation key
if constellation.stars includes(star.name)
  push entire star into accumulator array
return array
      */

  function getConstellationStars() {

    const constellationKeys = Object.keys(constellations)
    return stars.reduce((stars, star) => {
      constellationKeys.forEach(constellationKey => {
        if(constellations[constellationKey].stars.includes(star.name)) {
          stars.push(star);
        }
      })
      return stars
    }, [])
  }

  return getConstellationStars()
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* return object with keys of star colors, value being array of stars with that color
    need all of the colors of stars, need it to not repeat.
      map on stars to only return colors
      Array from to get rid of duplicates
    iterate through colors array to create new object with colors as keys and [] as their value
    with reduce or map(ideally)
    iterate through stars and color array (or Object.keys for practice),
      if stars.color === color
        push entire star into colors[color]
    foreach color.
    object[color] = value
    value is filtered stars array based on color
    return starsByColor
    */
    function organizeByColor() {
      let starColors = stars.map(star => star.color)
      starColors = Array.from(new Set(starColors)) //array of non repeating star colors
      const starsByColor = {}
      starColors.forEach(color => {
        starsByColor[color] = stars.filter(star => {
          return star.color === color
        })

        })
      return starsByColor
    }
    const result = organizeByColor()
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]

    /* Display array of constellation names based on order of star brightness
    need to sort stars based on visual magnitude, low is actually best so a - b
    .map over sorted array and change to star.constellation.
    Get rid of empty string, probablly with ... when using map*/

    function orderConstellations() {
      const filteredStars = stars.filter(star => star.constellation.length > 0)
      const sortedStars = filteredStars.sort((a, b) => a.visualMagnitude - b.visualMagnitude)
      const sortedContsellations = sortedStars.map(star => star.constellation)
      // const joinedArray = Array.from(new Set(sortedContsellations))
      // console.log(joinedArray)
      return sortedContsellations

    }

    const result = orderConstellations()
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /*need to make array of weapons available to characters
        .reduce characters to return ...character.weapons
    Using reduce
    // iterate over array of weapons, and change to weapons[weapon].damage
    return acc += weapons[wep].damage

    */

    function getTotalDamage() {
      const charWeps = characters.reduce((weps, char) => {
        weps.push(...char.weapons)
        return weps
      }, [])
      const totDam = charWeps.reduce((dams, wep) => {
        return dams += weapons[wep].damage
      }, 0)
      // console.log(charWeps)
      // console.log(totDam)
      return totDam
    }

    const result = getTotalDamage()
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* using reduce, change each character in characters
    to key = name
    value = object
      object.damage = totalDamage
      object.range = totalRange

    Reduce on characters, acc is empty array, character is ind character
      create empty object
      empty object[charName] = {damage: 0, range: 0}
      keys are created need values
      reduce on character.weapons, acc is {damage: 0, range: 0}, cv is weaponName
        acc.damage += weapons[wepaon].damage
        acc.range += weapons[weapon].range
    return object
*/
    function getCharTots() {
      return characters.reduce((chars, char) => {
        charInfo = {} //big object
        charInfo[char.name] = char.weapons.reduce((stats, wep) => {
          stats.damage += weapons[wep].damage
          stats.range += weapons[wep].range
          return stats
        }, {damage: 0, range: 0})
        chars.push(charInfo)
        return chars
      }, [] )
      // console.log(chars)
    }

    const result = getCharTots()
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
