Rails.application.routes.draw do
  root to: "sessions#new"
  get 'login', to: 'sessions#new', as: 'login'
  
  devise_for :users, controllers: { sessions: 'sessions' }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
