@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, 
                        :id, 
                        :name,
                        :phone_number,
                        :executive_chef,
                        :city,
                        :operation_hours
        json.photoUrl url_for(restaurant.photos[0])
    end
end