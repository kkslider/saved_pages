require 'spec_helper'

describe User do 
  it "has a valid factory" do
    FactoryGirl.create(:user).should be_valid
  end
  
  it "is invalid without an email" do
    FactoryGirl.build(:user, email: nil).should_not be_valid
  end
  
  it "is invalid without a password" do
    FactoryGirl.build(:user, password: nil).should_not be_valid
  end
  
  it "should assign session_token before validation" do
    FactoryGirl.build(:user, session_token: nil).should be_valid
  end
  
  describe "associations" do
    it { should have_many(:bookmarks) }
  end
end