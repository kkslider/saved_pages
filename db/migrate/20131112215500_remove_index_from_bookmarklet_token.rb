class RemoveIndexFromBookmarkletToken < ActiveRecord::Migration
  def change
    remove_index(:users, :bookmarklet_token)
  end
end
