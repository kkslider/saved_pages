class User < ActiveRecord::Base
  attr_accessible :email, :password
  validates :email, :password, presence: true
  validates :email, uniqueness: true
  
  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end
  
  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
  end
  
  def is_password?(password)
    
  end
  
  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    if user
      return user if user.is_password?(password)
    end
  end
  
  
end
