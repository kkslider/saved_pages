class AddAuthorToBookmark < ActiveRecord::Migration
  def change
    add_column(:bookmarks, :author, :string)
  end
end
