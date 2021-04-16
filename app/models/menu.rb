class Menu < ApplicationRecord

    has_many_attached :photos
    
    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant
end
