class Component < ApplicationRecord
  belongs_to :user
  has_many :component_keyword_joins
  has_many :keywords, through: :component_keyword_joins
  has_many :component_supply_joins
  has_many :supplies, through: :component_supply_joins
  $VALID_CATEGORIES = ["Alcohol", "Physical", "Puzzle"]

  validates :name, presence:true,  length:{maximum:50}
  validates :description, presence:true, length:{maximum:1000}
  validates :category, presence:true, inclusion: {in: $VALID_CATEGORIES}
  validates :min_teams, presence:true, numericality:{only_integer:true,greater_than:0,less_than:5}
  validates :max_teams, presence:true, numericality:{only_integer:true,greater_than:0,less_than:5}
  validate :min_less_than_max


  private

    def min_less_than_max
      if self.min_teams && self.max_teams
        if self.min_teams > self.max_teams
          errors.add(:min_teams,"can't be greater than max teams")
        end
      end
    end
end
