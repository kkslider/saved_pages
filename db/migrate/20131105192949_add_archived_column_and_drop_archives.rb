class AddArchivedColumnAndDropArchives < ActiveRecord::Migration
  def change
    add_column(:bookmarks, :is_archived, :boolean, { default: false, null: false })
    drop_table(:archives)
  end
end
