const ducks = [
  {
    color: 'blue',
    isRubber: true,
    gender: 'female',
    isMigrator: false,
    socialStatus: 'ready to mingle',
    diet: 'vegan',
    age: 47,
    featherNum: 0,
    name: 'Regina',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.perfectimprints.com%2Fassets%2FImage%2FProduct%2Fthumb%2Fad-8060-rubber-blue-duck.jpg&f=1&nofb=1'
  },
  {
    color: 'blue',
    isRubber: false,
    gender: 'male',
    isMigrator: false,
    socialStatus: 'get of my lawn',
    diet: 'vegan',
    age: 45,
    featherNum: 1000,
    name: 'Ferdinand',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc1.staticflickr.com%2F1%2F318%2F19471206324_f8ec68dfe0_n.jpg&f=1&nofb=1'
  },
  {
    color: 'brown',
    isRubber: false,
    gender: 'female',
    isMigrator: true,
    socialStatus: 'where the mallards at?',
    diet: 'vegan',
    age: 30,
    featherNum: 950,
    name: 'Jolene',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FPacific_Black_Duck_%2528Anas_superciliosa%2529_RWD2.jpg%2F350px-Pacific_Black_Duck_%2528Anas_superciliosa%2529_RWD2.jpg&f=1&nofb=1'
  },
  {
    color: 'white',
    isRubber: true,
    gender: 'male',
    isMigrator: false,
    socialStatus: 'feed me',
    diet: 'vegan',
    age: 40,
    featherNum: 0,
    name: 'George',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fecx.images-amazon.com%2Fimages%2FI%2F41J6fKZzYbL._SY300_.jpg&f=1&nofb=1'
  },
  {
    color: 'white',
    isRubber: false,
    gender: 'male',
    isMigrator: false,
    socialStatus: `don't look at me like that`,
    diet: 'anything',
    age: 39,
    featherNum: 1000,
    name: 'Mike',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.feathersite.com%2FPoultry%2FDucks%2FMusc%2FScobieWhDrBelgium.JPEG&f=1&nofb=1'
  },
  {
    color: 'white',
    isRubber: true,
    gender: 'female',
    isMigrator: false,
    socialStatus: `let's be friends`,
    diet: 'anything',
    age: 45,
    featherNum: 0,
    name: 'Debbie',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.duck-shop.co.uk%2Fshop_cfg%2Frubberduck%2FBadeente5631.JPG&f=1&nofb=1'
  },
  {
    color: 'brown',
    isRubber: true,
    gender: 'male',
    isMigrator: false,
    socialStatus: 'on the lookout for Dottie',
    diet: 'vegan',
    age: 34,
    featherNum: 0,
    name: 'Pokey',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2F83%2Fbb%2F99%2F83bb996b367178ec7a257c6644ebe9e2--pink-brown-pink-polka-dots.jpg&f=1&nofb=1'
  },
  {
    color: 'brown',
    isRubber: true,
    gender: 'male',
    isMigrator: false,
    socialStatus: `I'm a cow`,
    diet: 'anything',
    age: 35,
    featherNum: 0,
    name: 'Harold',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.duck-shop.co.uk%2Fshop_cfg%2Frubberduck%2F5464.jpg&f=1&nofb=1'
  },
];

const printToDom = (divId, textToPrint) => {
  document.getElementById(divId).innerHTML = textToPrint;
};

const duckPrinter = (arr) => {
  let domString = '';
  for (let i = 0; i < arr.length; i++) {
    domString += '<div class="col-md-6 col-lg-4">'
    domString += '<div class="card">'
    domString += `<img src="${arr[i].imageUrl}" class="card-img-top" alt="duck photo">`
    domString +=  '<div class="card-body">'
    domString +=    `<h5 class="card-title">${arr[i].name}</h5>`
    domString +=    `<p class="card-text">${arr[i].socialStatus}</p>`
    domString +=    `<p class="card-text">${arr[i].diet}</p>`
    domString +=  '</div>'
    domString += '</div>'
    domString += '</div>'
  }
  printToDom('duck-list', domString);
};

const chooseColor = (e) => {
  const buttonId = e.target.id;
  const selectedDucks = [];
  for (let i = 0; i < ducks.length; i++) {
    if (ducks[i].color === buttonId) {
      selectedDucks.push(ducks[i]);
    }
  }
    duckPrinter(selectedDucks);
};

const chooseGender = (e) => {
  const buttonId = e.target.id;
  const selectedDucks = [];
  for (let i = 0; i < ducks.length; i++) {
    if (ducks[i].gender === buttonId) {
      selectedDucks.push(ducks[i]);
    }
  }
    duckPrinter(selectedDucks);
};

const chooseRubber = () => {
  const selectedDucks = [];
  for (let i = 0; i < ducks.length; i++) {
    if (ducks[i].isRubber) {
      selectedDucks.push(ducks[i]);
    }
  }
    duckPrinter(selectedDucks);
};

const events = () => {
  document.getElementById('blue').addEventListener('click', chooseColor);
  document.getElementById('brown').addEventListener('click', chooseColor);
  document.getElementById('white').addEventListener('click', chooseColor);
  document.getElementById('male').addEventListener('click', chooseGender);
  document.getElementById('female').addEventListener('click', chooseGender);
  document.getElementById('rubber').addEventListener('click', chooseRubber);
};

const init = () => {
  duckPrinter(ducks);
  events();
};

init();