class CompaniesController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @companies = Company.paginate(page: params[:page], per_page: 10)
    @company = Company.new
  end

  def new
    @company = Company.new
  end

  def create
    @company = Company.new(company_params)

    if @company.save
      render json: { success: true, company: @company.as_json(only: [:id, :name, :address]) }
    else
      render json: { success: false, errors: @company.errors.full_messages }, status: 400
    end
  end

  private

  def company_params
    params.require(:company).permit(:name, :address, :logo)
  end
end
