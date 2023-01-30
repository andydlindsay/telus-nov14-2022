class LocationsController < ApplicationController
  def index
    # req.params.pokemon_id
    pokemon_id = params[:pokemon_id]
    @pokemon = Pokemon.find pokemon_id

    @locations = @pokemon.locations
  end
end
