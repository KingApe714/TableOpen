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

        @restaurants = Restaurant.where(
                        'city ILIKE :search 
                        OR name ILIKE :search',
                        {search: "%#{search}"})

        debugger

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
