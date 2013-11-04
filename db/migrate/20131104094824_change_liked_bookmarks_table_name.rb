class ChangeLikedBookmarksTableName < ActiveRecord::Migration
  def change
    rename_table :liked_bookmarks, :favorites
  end
end
