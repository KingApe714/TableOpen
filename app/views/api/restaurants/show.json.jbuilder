# <h1><%= @restaurant.name %></h1>
# <img src="<%= url_for(@restaurant.photos)%>">
json.extract! @restaurant, 
                :name,
                :phone_number,
                :executive_chef, 
                :city, 
                :description,
                :operation_hours
json.photoUrls @restaurant.photos.map { |file| url_for(file) }