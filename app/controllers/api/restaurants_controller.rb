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
end
