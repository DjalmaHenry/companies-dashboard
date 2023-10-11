class ApplicationController < ActionController::Base
    before_action :set_devise_vars
  
    def set_devise_vars
      @resource ||= User.new
      @resource_name ||= :user
      @devise_mapping ||= Devise.mappings[:user]  # Adiciona esta linha para o devise_mapping
    end
  end
  