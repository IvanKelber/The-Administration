class DropSuppliesDropKeywords < ActiveRecord::Migration[5.0]
  def change
    drop_table :supplies
    drop_table :keywords

  end
end
