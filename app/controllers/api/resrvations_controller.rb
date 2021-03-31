class Api::ResrvationController < ApplicationController

    def show
        @reservation = Resrvation.find(params[:id])
        render :show
    end

    def index
        @reservations = current_user.reservations
        render :index
    end

    def create
        @reservation = Resrvation.new(reservation_params)

        if @reservation.save
            render json: ['reservation created']
        else
            render json:
        end
    end
    private
    def reservation_params
        params.require(:resrvation).permit(
            :guest_id,
            :restaurant_id,
            :guest_count,
            :reservation_datetime
        )
    end
end
