class Favorite < ActiveRecord::Base
  attr_accessible :user_id, :bookmark_id
  validates :user_id, :bookmark_id, presence: true
  
  belongs_to(
  :user,
  :class_name => "User",
  :foreign_key => :user_id,
  :primary_key => :id
  )
  
  belongs_to(
  :bookmark,
  :class_name => "Bookmark",
  :foreign_key => :bookmark_id,
  :primary_key => :id
  )
  
end
