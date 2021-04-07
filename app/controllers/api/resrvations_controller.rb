class Api::ResrvationsController < ApplicationController

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
        debugger
        if @reservation.save
            render :show
        else
            render json: ['Unable to create reservation'], status: 404
        end
    end

    def update
        @reservation = Resrvation.find(params[:id])

        if @reservation && @reservation.update(reservation_params)
            render :show
        else
            render json: ['Reservation did not update'], status: 404
        end
    end

    def destroy
        @reservation = Resrvation.find_by(id: params[:id])

        @reservation.destroy
    end
    private
    def reservation_params
        params.require(:resrvation).permit(
            :guest_id,
            :restaurant_id,
            :guest_count,
            :reservation_date_time
        )
    end
end
