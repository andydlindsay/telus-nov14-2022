// $(document).ready(() => {});

$(() => {

  console.log('hello');

  const $characterSection = $('.character-container');

  const fetchCharacters = () => {
    $.get('/characters', (characters) => {
      console.log(characters);
      renderCharacters(characters);
    });
  };

  fetchCharacters();

  // $('<article>').addClass('character'); // <article></article>
  // $('<article class="character"></article>');

  const createCharacter = (character) => {
    const $character = $(`
      <article class="character">
        <header>
          <p>Name: ${character.name}</p>
          <p class="identification">Id: ${character.id}</p>
        </header>
        <p>${character.saying}</p>
      </article>
    `);

    return $character;
  };

  const renderCharacters = (characters) => {
    $characterSection.empty();
    
    // iterate through the provided array
    for (const character of characters) {
      // create a $character component from each character object
      const $character = createCharacter(character);

      // append/prepend the $character to the DOM
      $characterSection.prepend($character);
    }
  };

  // grab the form from the DOM
  const $form = $('#new-saying-form');

  $form.on('submit', (event) => {
    event.preventDefault();
    
    // get the data from the form (urlencoded data)
    const data = $form.serialize();

    // make a post request to the server
    $.post('/characters', data, (response) => {
      console.log(response);
      fetchCharacters(); // GET
    });

    
  });

});
