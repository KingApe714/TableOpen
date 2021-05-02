class Api::RestaurantsController < ApplicationController

    def show
        @restaurant = Restaurant.with_attached_photos.find(params[:id])
        # debugger
        render :show
    end

    def index
        @restaurants = Restaurant.all
        render :index
    end

    def search
        search = params[:search]
        # debugger
        if search.is_a?(Object)
            @restaurants = Restaurant
                            .where(name: search["0"])
                            .or(Restaurant.where(city: search["1"]))
        else
            @restaurants = Restaurant.where(
                            'city ILIKE :search 
                            OR name ILIKE :search',
                            {search: "%#{search}"})
        end

        # debugger

        # if @restaurants.length == 0
        #     Restaurant.all.each do |restaurant|
        #         if restaurant.name.downcase.include?(search.downcase) || restaurant.city.downcase.include?(search.downcase)
        #             @restaurants << restaurant
        #         end
        #     end
        # end
        render :index
    end
end
