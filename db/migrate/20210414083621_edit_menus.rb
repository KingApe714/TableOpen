class EditMenus < ActiveRecord::Migration[5.2]
  def change
    add_column :menus, :restaurant_id, :integer, null: false
    add_index :menus, :restaurant_id
  end
end
