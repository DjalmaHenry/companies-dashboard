class EquipmentsController < ApplicationController
  def index
    @company = Company.find(params[:company_id])
    @equipments = @company.equipments
    @equipments = @company.equipments.paginate(page: params[:page], per_page: 10)
    @equipment = Equipment.new
  end

  def create
    @company = Company.find(params[:company_id])
    @equipment = @company.equipments.build(equipment_params)

    if @equipment.save
      redirect_to company_equipments_path(@company), notice: "Equipment was successfully created."
    else
      render :index
    end
  end

  private

  def equipment_params
    params.require(:equipment).permit(:name, :serial_number, :acquisition_date, :responsible_user)
  end

  def destroy
    @equipment = Equipment.find(params[:id])
    @equipment.destroy
    respond_to do |format|
      format.js
    end
  end  
  
end
