class UpdateForeignKeys < ActiveRecord::Migration[5.0]
  def change
    # remove the old foreign_key
   remove_foreign_key :component_keyword_joins, :keywords
   remove_foreign_key :component_keyword_joins, :components


   # add the new foreign_key
   add_foreign_key :component_keyword_joins, :keywords, on_delete: :cascade
   add_foreign_key :component_keyword_joins, :components, on_delete: :cascade

  end
end
