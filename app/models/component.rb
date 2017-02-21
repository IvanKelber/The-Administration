class Component < ApplicationRecord
  belongs_to :user
  has_many :component_keyword_joins
  has_many :keywords, through: :component_keyword_joins
  has_many :component_supply_joins
  has_many :supplies, through: :component_supply_joins


  validates :name, presence:true
  validates :description, presence:true, length:{maximum:1000}
  validates :category, presence:true
  validates :min_teams, presence:true, numericality:{only_integer:true,greater_than:0,less_than:5}
  validates :max_teams, presence:true, numericality:{only_integer:true,greater_than:0,less_than:5}

end
