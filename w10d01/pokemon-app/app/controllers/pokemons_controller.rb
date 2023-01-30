class PokemonsController < ApplicationController
  def index
    # res.render('index', {});
    @pokemons = Pokemon.all
    # @greeting = 'hello'
  end
end
