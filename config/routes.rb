Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: :create
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:show, :index]
    resources :resrvations, only: [:create, :index, :show, :destroy, :update]
    get "search", to: "restaurants#search"
  end

  root to: "static_pages#root"
end
