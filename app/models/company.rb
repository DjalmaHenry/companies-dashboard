class Company < ApplicationRecord
    has_many :equipment, dependent: :destroy
  end
  