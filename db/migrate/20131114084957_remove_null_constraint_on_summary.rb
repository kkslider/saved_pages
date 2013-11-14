class RemoveNullConstraintOnSummary < ActiveRecord::Migration
  def change
    change_column(:bookmarks, :summary, :string)
  end
end
