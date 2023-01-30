class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :move

      # t.integer :pokemon_id
      t.references :pokemon, foreign_key: true, index: true

      t.timestamps
    end
  end
end
