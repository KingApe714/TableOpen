class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: ["Invalid email and/or password"]
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render 'api/users/show'
        else
            render json: ["No one to sign in"]
        end
    end
end