class CreateArchives < ActiveRecord::Migration
  def change
    create_table :archives do |t|
      t.integer :user_id, null: false
      t.integer :bookmark_id, null: false

      t.timestamps
    end
    
    add_index(:archives, :user_id)
    add_index(:archives, :bookmark_id)
    add_index(:archives, [:bookmark_id, :user_id], unique: true)
  end
end
