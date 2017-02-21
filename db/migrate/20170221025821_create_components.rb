class CreateComponents < ActiveRecord::Migration[5.0]
  def change
    create_table :components do |t|
      t.string :name
      t.text :description
      t.string :category
      t.integer :min_teams
      t.integer :max_teams
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :components, [:user_id,:created_at]
  end
end
