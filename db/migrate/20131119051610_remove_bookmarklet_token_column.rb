class RemoveBookmarkletTokenColumn < ActiveRecord::Migration
  def change
    remove_column(:users, :bookmarklet_token)
  end
end
