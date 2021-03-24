@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, 
                        :id, 
                        :name,
                        :phone_number,
                        :executive_chef,
                        :city,
                        :operation_hours
        # json.photoUrls restaurant.map { |file| url_for(file) }
    end
end