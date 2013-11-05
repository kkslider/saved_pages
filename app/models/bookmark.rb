class Bookmark < ActiveRecord::Base
  attr_accessible :summary, :title, :url, :user_id, :author, :is_favorited
  validates :summary, :title, :url, :user_id, :is_favorited, presence: true
  
  def is_favorited?
    self.is_favorited
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
