const lorum = [
    'lorem',
    'imsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'curabitur',
    'vel',
    'hendrerit',
    'libero',
    'eleifend',
    'blandit',
    'nunc',
    'ornare',
    'odio',
    'ut',
    'orci',
    'gravida',
    'imperdiet',
    'nullam',
    'purus',
    'lacinia',
    'a',
    'pretium',
    'quis',
  ];
  
  function makeThought() {
    const thought = [];
    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * lorum.length);
        thought.push(lorum[randomIndex]);
    }
    return thought.join(' ');
  };

  module.exports = { makeThought };