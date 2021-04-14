class Menu < ApplicationRecord

    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant
end
