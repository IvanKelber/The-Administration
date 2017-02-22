class Supply < ApplicationRecord
  before_save {self.item.downcase!}
  has_many :component_supply_joins
  has_many :components, through: :component_supply_joins

  validates(:item, presence:true,uniqueness: {case_sensitive: false});

end
