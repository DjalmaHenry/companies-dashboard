class RegistrationsController < Devise::RegistrationsController
    respond_to :json, :html
  
    def create
      build_resource(sign_up_params)
      resource.save
      yield resource if block_given?
  
      respond_to do |format|
        if resource.persisted?
          if resource.active_for_authentication?
            set_flash_message! :notice, :signed_up
            sign_up(resource_name, resource)
            format.html { redirect_to after_sign_up_path_for(resource) }
            format.json { render json: { success: true }, status: :created }
          else
            set_flash_message! :notice, :"signed_up_but_#{resource.inactive_message}"
            expire_data_after_sign_in!
            format.html { redirect_to after_inactive_sign_up_path_for(resource) }
            format.json { render json: { success: true }, status: :created }
          end
        else
          clean_up_passwords resource
          set_minimum_password_length
          format.html { render :new }
          format.json { render json: { success: false, errors: resource.errors.full_messages }, status: :unprocessable_entity }
        end
      end
    end
  end
  