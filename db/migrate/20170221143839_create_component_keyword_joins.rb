class CreateComponentKeywordJoins < ActiveRecord::Migration[5.0]
  def change
    create_table :component_keyword_joins do |t|
      t.references :component, foreign_key: true
      t.references :keyword, foreign_key: true

      t.timestamps
    end
  end
end
