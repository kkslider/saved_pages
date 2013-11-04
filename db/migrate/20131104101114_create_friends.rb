class CreateFriends < ActiveRecord::Migration
  def change
    create_table :friends do |t|
      t.integer :user_id, null: false
      t.integer :follower_id, null: false

      t.timestamps
    end
    
    add_index(:friends, :user_id)
    add_index(:friends, :follower_id)
    add_index(:friends, [:user_id, :follower_id], unique: true)
  end
end
