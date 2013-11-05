class Archive < ActiveRecord::Base
  attr_accessible :bookmark_id, :user_id
  validates :user_id, :bookmark_id, presence: true
  
  def is_archived?
    self.is_archived
  end
  
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
