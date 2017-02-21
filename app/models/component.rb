class Component < ApplicationRecord
  belongs_to :user

  validates :name, presence:true
  validates :description, presence:true, length:{maximum:1000}
  validates :category, presence:true
  validates :min_teams, presence:true, numericality:{only_integer:true,greater_than:0,less_than:5}
  validates :max_teams, presence:true, numericality:{only_integer:true,greater_than:0,less_than:5}

end
