class RecreateBookmarksTable < ActiveRecord::Migration
  def change
    drop_table(:bookmarks)
    create_table :bookmarks do |t|
      t.integer :user_id, null: false
      t.string :url, null: false
      t.string :title, null: false
      t.string :summary, null: false
      t.string :author
      t.boolean :is_favorited, default: false, null: false
      t.boolean :is_archived, default: false, null: false
      
      t.timestamps
    end
    
    add_index(:bookmarks, :user_id)
  end
end
