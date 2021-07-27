class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :food_score, null: false
      t.integer :service_score, null: false
      t.integer :ambience_score, null: false
      t.integer :overall_score, null: false
      t.integer :value, null: false
      t.integer :noise_level, null: false
      t.timestamps
    end
  end
end
