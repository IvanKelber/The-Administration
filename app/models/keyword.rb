class Keyword < ApplicationRecord
  before_save {self.word.downcase!}

  has_many :component_keyword_joins
  has_many :components, through: :component_keyword_joins

  validates(:word, presence:true,uniqueness: {case_sensitive: false});

end
