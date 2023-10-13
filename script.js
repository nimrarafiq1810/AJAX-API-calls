'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//WITH XML REQUEST METHOD
// const getcountrydata = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const getFirstValue = function (obj) {
//       let firstValue;
//       for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//           firstValue = obj[key];
//           return firstValue;
//           break;
//         }
//       }
//     };
//     const language = getFirstValue(data.languages);
//     const currency = getFirstValue(data.currencies).name;
//     console.log(language);
//     console.log(currency);

//     const html = `<article class="country">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${data.population}</p>
//     <p class="country__row"><span>🗣️</span>${language}</p>
//     <p class="country__row"><span>💰</span>${currency}</p>
//   </div>
// </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getcountrydata('pakistan');
// getcountrydata('afghanistan');
// getcountrydata('iran');
// getcountrydata('italy');

/////////////////////////////////
// USING MODERN WAY OF FETCH & PROMISE

// const renderdata = function (data) {
//   const getFirstValue = function (obj) {
//     let firstValue;
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         firstValue = obj[key];
//         return firstValue;
//         break;
//       }
//     }
//   };
//   const language = getFirstValue(data.languages);
//   const currency = getFirstValue(data.currencies).name;
//   console.log(language);

//   const html = `<article class="country">
//               <img class="country__img" src="${data.flags.png}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${data.population}</p>
//                 <p class="country__row"><span>🗣️</span>${language}</p>
//                 <p class="country__row"><span>💰</span>${currency}</p>
//               </div>
//             </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getcountrydata = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderdata(data[0]);
//     })
//     .catch(err => {
//       alert(err);
//     });
// };

// getcountrydata('pakistan');
// getcountrydata('iran');
// getcountrydata('italy');
// getcountrydata('afghanistan');

// USING ASYNC/AWAIT METHOD

const renderdata = function (data) {
  const getFirstValue = function (obj) {
    let firstValue;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        firstValue = obj[key];
        return firstValue;
        break;
      }
    }
  };
  const language = getFirstValue(data.languages);
  const currency = getFirstValue(data.currencies).name;

  const html = `<article class="country">
              <img class="country__img" src="${data.flags.png}" />
              <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${data.population}</p>
                <p class="country__row"><span>🗣️</span>${language}</p>
                <p class="country__row"><span>💰</span>${currency}</p>
              </div>
            </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const get3Countries = async function (c1, c2, c3) {
  try {
    const country1 = await fetch(`https://restcountries.com/v3.1/name/${c1}`);
    const data1 = await country1.json();
    renderdata(data1[0]);
    const country2 = await fetch(`https://restcountries.com/v3.1/name/${c2}`);
    const data2 = await country2.json();
    renderdata(data2[0]);
    const country3 = await fetch(`https://restcountries.com/v3.1/name/${c3}`);
    const data3 = await country3.json();
    renderdata(data3[0]);
    console.log(
      `All 3 countries ${c1}, ${c2}, ${c3} are successfully rendered on webpage`
    );
  } catch (err) {
    console.error(err);
  }
};
var userInput1 = prompt('Enter country1 name in Lowercase');
var userInput2 = prompt('Enter country2 name in Lowercase');
var userInput3 = prompt('Enter country3 name in Lowercase');
get3Countries(userInput1, userInput2, user);

// const imageContainer = document.querySelector('.images');
// const createImage = function (imagePath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imagePath;
//     img.addEventListener('load', function () {
//       imageContainer.append(img);
//
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject('error occured,failed to load');
//     });
//   });
// };

// createImage('img/img-3.jp')
//   .then(img => {
//     console.log('Image1 is load');
//   })
//   .catch(err => {
//     console.log(err);
//   });
