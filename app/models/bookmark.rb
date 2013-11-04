class Bookmark < ActiveRecord::Base
  attr_accessible :summary, :title, :url, :user_id
  validates :summary, :title, :url, :user_id, presence: true
  
  belongs_to(
  :user,
  :class_name => "User",
  :foreign_key => :user_id,
  :primary_key => :id
  )
end
