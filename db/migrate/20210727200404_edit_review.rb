class EditReview < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :restaurant_id, :integer, null: false
    add_column :reviews, :guest_id, :integer, null: false
    add_index :reviews, :restaurant_id
    add_index :reviews, :guest_id
  end
end
