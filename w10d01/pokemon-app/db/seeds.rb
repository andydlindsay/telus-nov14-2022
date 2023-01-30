# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# new_pokemon = Pokemon.new()
# new_pokemon.save

puts "creating the pokemon"
25.times do
  Pokemon.create(
    name: Faker::Games::Pokemon.name 
  )
end

puts "retrieving the newly created pokemon"
pokemon = Pokemon.all

puts "creating the locations"
100.times do
  Location.create(
    name: Faker::Games::Pokemon.location,
    move: Faker::Games::Pokemon.move,
    pokemon: pokemon.sample
  )
end

puts "all done!"

