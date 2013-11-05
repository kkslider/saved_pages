class AddIsFavoritedColumnToBookmark < ActiveRecord::Migration
  def change
    add_column(:bookmarks, :is_favorited, :boolean, { default: false, null: false } )
  end
end
