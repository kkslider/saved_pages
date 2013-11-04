class Friend < ActiveRecord::Base
  attr_accessible :follower_id, :user_id
  validates :follower_id, :user_id, presence: true
end
