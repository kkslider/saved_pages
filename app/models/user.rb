class User < ActiveRecord::Base
  attr_accessible :email, :password
  attr_reader :password
  validates :email, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, on: :create
  validates :password, presence: true, on: :create
  
  before_validation(on: :create) do
    self.reset_session_token if !self.session_token
  end
  
  has_many(
  :bookmarks,
  :class_name => "Bookmark",
  :foreign_key => :user_id,
  :primary_key => :id
  )
  
  has_many(
  :friends,
  :class_name => "Friend",
  :foreign_key => :user_id,
  :primary_key => :id
  )
  
  has_many(
  :followed_users,
  :class_name => "Friend",
  :foreign_key => :follower_id,
  :primary_key => :id
  )
  
  def liked_bookmarks
    self.bookmarks.where(is_favorited: true)
  end
  
  def archived_bookmarks
    self.bookmarks.where(is_archived: true)
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def self.generate_token
    SecureRandom.urlsafe_base64(16)
  end
  
  def reset_session_token
    self.session_token = self.class.generate_token
  end
  
  def reset_session_token!
    self.session_token = self.class.generate_token
    self.save!
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    if user
      user.is_password?(password) ? user : nil
    end
  end
    
end
