class ComponentSupplyJoin < ApplicationRecord
  belongs_to :component
  belongs_to :supply
end
