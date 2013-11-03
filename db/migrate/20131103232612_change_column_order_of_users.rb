class ChangeColumnOrderOfUsers < ActiveRecord::Migration
  def change
    change_column(:users, :password_digest, :string, { :after => :email })
  end
end
