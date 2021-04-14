class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.string :menu_items, array: true
      t.string :drink_items, array: true
      t.timestamps
    end
  end
end
