Rails.application.routes.draw do
  root "companies#index"

  devise_for :users, skip: [:registrations]

  resources :companies

  resources :companies do
    resources :equipments
  end  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
