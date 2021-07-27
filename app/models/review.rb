class Review < ApplicationRecord
    validates :food_score, :service_score, :amience_score, :overall_score, :value, :noise_level, presence: true

    belongs_to :user,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant
end
