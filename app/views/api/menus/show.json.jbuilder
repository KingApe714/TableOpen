json.extract! @menu,
    :id,
    :menu_items,
    :drink_items,
    :restaurant_id
json.photoUrls @menu.photos.map { |file| url_for(file) }