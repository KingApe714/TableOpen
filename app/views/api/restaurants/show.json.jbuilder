# need to keep testing with menu here to send up the photoUrls.
json.extract! @restaurant, 
                :id,
                :name,
                :phone_number,
                :executive_chef, 
                :city, 
                :description,
                :operation_hours,
                :menu
json.photoUrls @restaurant.photos.map { |file| url_for(file) }