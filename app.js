 const inventory = [
    { name: 'asparagus', type: 'vegetables' },
    { name: 'bananas',  type: 'fruit' },
    { name: 'goat', type: 'meat' },
    { name: 'cherries', type: 'fruit' },
    { name: 'fish', type: 'meat' }
  ];

  //let result = inventory.groupBy( ({ type }) => type ); // Firefox only
  let result = inventory.reduce((key, value) => {
      // Group initialization
      if (!key[value.type]) {
          key[value.type] = [];
      }

      // Grouping
      key[value.type].push(value);

      return key;
  }, {});

  console.log(result.vegetables);
  // [{name: 'asparagus', type: 'vegetables'}]

  //Ref: https://www.robinwieruch.de/javascript-groupby/
  