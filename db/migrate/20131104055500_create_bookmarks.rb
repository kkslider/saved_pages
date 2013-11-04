class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.integer :user_id, null: false
      t.string :url, null: false
      t.string :title, null: false
      t.string :summary, null: false

      t.timestamps
    end
    
    add_index(:bookmarks, :user_id)
  end
end
