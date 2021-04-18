# need to keep testing with menu here to send up the photoUrls.
# debugger
json.extract! @restaurant, 
                :id,
                :name,
                :phone_number,
                :executive_chef, 
                :city, 
                :description,
                :operation_hours,
                :menu
json.photoUrls @restaurant.menu.photos.map { |file| url_for(file) }
json.photoUrl url_for(@restaurant.photos[0])