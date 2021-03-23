class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :phone_number, null:false
      t.time :opening_time, null: false
      t.time :closing_time, null: false
      t.string :executive_chef, null: false
      t.string :city, null: false
      t.text :description, null: false
      t.timestamps
    end

    add_index :restaurants, :name
    add_index :restaurants, :city
  end
end
