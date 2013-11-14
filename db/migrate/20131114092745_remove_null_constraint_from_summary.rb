class RemoveNullConstraintFromSummary < ActiveRecord::Migration
  def change
    change_column(:bookmarks, :summary, :string, :null => true)
  end
end
