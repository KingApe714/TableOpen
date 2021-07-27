class ReviewsController < ApplicationController

    def show
        @review = Review.find(params[:id])
    end

    def index
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: ['Unabe to create review'], status: 404
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review && @review.destroy
        end
    end

    private
    def review_params
        params.require(:review).permit(
            :guest_id,
            :restaurant_id,
            :food_score,
            :service_score,
            :ambience_score,
            :overall_score,
            :value,
            :noise_level
        )
    end
end
