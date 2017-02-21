class Supply < ApplicationRecord
  has_many :component_supply_joins
  has_many :components, through: :component_supply_joins
end
