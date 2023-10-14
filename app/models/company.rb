class Company < ApplicationRecord
  has_one_attached :logo
  has_many :equipments
end
