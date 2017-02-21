class CreateComponentSupplyJoins < ActiveRecord::Migration[5.0]
  def change
    create_table :component_supply_joins do |t|
      t.references :component, foreign_key: true
      t.references :supply, foreign_key: true

      t.timestamps
    end
  end
end
