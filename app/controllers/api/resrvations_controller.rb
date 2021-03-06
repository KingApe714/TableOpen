class Api::ResrvationsController < ApplicationController

    def show
        @reservation = Resrvation.find(params[:id])
        render :show
    end

    def index
        @reservations = current_user.reservations.order('reservation_date_time DESC')
        # debugger
        render :index
    end

    # .order(content_date: :desc)

    def create
        @reservation = Resrvation.new(reservation_params)
        # debugger
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
            render json: @reservation.errors.full_messages, status: 404
        end
    end

    def destroy
        @reservation = Resrvation.find_by(id: params[:id])
        if @reservation && @reservation.destroy 
        end
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
