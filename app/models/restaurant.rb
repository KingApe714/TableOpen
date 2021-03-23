class Restaurant < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :phone_number, presence: true, uniqueness: true
    validates :operation_hours, presence: true
    validates :executive_chef, presence: true, uniqueness: true
    validates :city, presence: true
    validates :description, presence: true, length: {maximum: 2000}

    has_many_attached :photos
end
