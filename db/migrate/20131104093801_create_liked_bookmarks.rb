class CreateLikedBookmarks < ActiveRecord::Migration
  def change
    create_table :liked_bookmarks do |t|
      t.integer :user_id, null: false
      t.integer :bookmark_id, null: false
      
      t.timestamps
    end
    
    add_index(:liked_bookmarks, :user_id)
    add_index(:liked_bookmarks, :bookmark_id)
    add_index(:liked_bookmarks, [:bookmark_id, :user_id], unique: true)
  end
end
