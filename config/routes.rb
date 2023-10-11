Rails.application.routes.draw do
  devise_for :users

  root "companies#index"

  resources :companies do
    resources :equipment
  end
end
