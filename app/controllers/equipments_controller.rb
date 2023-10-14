class EquipmentsController < ApplicationController
  def index
    @company = Company.find(params[:company_id])
    @equipments = @company.equipments
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
end
