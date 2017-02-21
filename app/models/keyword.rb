class Keyword < ApplicationRecord
  has_many :component_keyword_joins
  has_many :components, through: :component_keyword_joins
end
