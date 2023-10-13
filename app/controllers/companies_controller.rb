class CompaniesController < ApplicationController
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
      redirect_to companies_path, notice: "Company was successfully created."
    else
      render :new
    end
  end

  private

  def company_params
    params.require(:company).permit(:name, :address, :logo)
  end  
end
