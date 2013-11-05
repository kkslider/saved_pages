class Bookmark < ActiveRecord::Base
  attr_accessible :summary, :title, :url, :user_id, :author, :is_favorited, :is_archived
  validates :summary, :title, :url, :user_id, :is_favorited, :is_archived, presence: true
  
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
  
  has_many(
  :favorites,
  :class_name => "Favorite",
  :foreign_key => :bookmark_id,
  :primary_key => :id
  )
  
  has_many(
  :archives,
  :class_name => "Archive",
  :foreign_key => :bookmark_id,
  :primary_key => :id
  )
  
  
end
