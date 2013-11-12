class AddUniqueIndexToBookmarkletToken < ActiveRecord::Migration
  def change
    add_index(:users, :bookmarklet_token, unique: true)
  end
end
