class CreateResrvations < ActiveRecord::Migration[5.2]
  def change
    create_table :resrvations do |t|
      t.integer :restaurant_id, null:false
      t.integer :guest_id, null:false
      t.integer :guest_count, null:false
      t.datetime :reservation_date_time, null:false
      t.timestamps
    end

    add_index :resrvations, :restaurant_id
    add_index :resrvations, :guest_id
  end
end
