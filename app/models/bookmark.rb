class Bookmark < ActiveRecord::Base
  attr_accessible :summary, :title, :url, :user_id, :author, :is_favorited, :is_archived
  validates :summary, :title, :url, :user_id, presence: true
  paginates_per 13
  
  def is_favorited?
    self.is_favorited
  end
  
  def is_archived?
    self.is_archived
  end
  
  belongs_to(
  :user,
  :class_name => "User",
  :foreign_key => :user_id,
  :primary_key => :id
  )  
  
end
