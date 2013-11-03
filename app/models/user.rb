class User < ActiveRecord::Base
  attr_accessible :email, :password
  validates :email, :password, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }
  
  before_validation(on: :create) do
    self.reset_session_token! if !self.session_token
  end
  
  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end
  
  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    if user
      user.is_password?(password) ? user : nil
    end
  end
    
end
