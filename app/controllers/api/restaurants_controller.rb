class Api::RestaurantsController < ApplicationController

    def show
        @restaurant = Restaurant.with_attached_photos.find(params[:id])
        render :show
    end

    def index
        @restaurants = Restaurant.all
        render :index
    end

    def search
        search = params[:search]
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
        render :index
    end
end
