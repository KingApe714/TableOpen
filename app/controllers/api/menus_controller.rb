class Api::MenusController < ApplicationController
    
    def show
        @menu = Menu.find(params[:id])
        render :show
    end
end
