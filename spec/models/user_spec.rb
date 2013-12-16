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
  
  describe "methods" do
    let(:user) { FactoryGirl.create(:user) }
    
    describe "#liked_bookmarks" do
      it "should return bookmarks the user has liked" do
        bookmark = FactoryGirl.create(:bookmark, user_id: user.id, is_favorited: true)
        user.liked_bookmarks.should include(bookmark)
      end
    end
  
    describe "archived_bookmarks" do
      it "should return bookmarks the user has archived" do
        bookmark = FactoryGirl.create(:bookmark, user_id: user.id, is_archived: true)
        user.archived_bookmarks.should include(bookmark)
      end
    end
    
    describe ".generate_token" do
      it "should generate a string representing a token" do
        User.generate_token.should be_an_instance_of(String)
      end
    end
    
    describe "#password=" do
      it "should set the password for the user" do
        new_user = FactoryGirl.build(:user, password: "testpass")
        new_user.password.should eql("testpass")
      end
      
      it "should create a password_digest for the user" do
        new_user = FactoryGirl.build(:user, password: "testpass")
        new_user.password_digest.should_not be_nil
      end
    end
    
    describe "#reset_session_token" do
      it "should set a session_token for the user but not save the user" do
        users_count = User.count
        new_user = FactoryGirl.build(:user)
        new_user.reset_session_token
        User.count.should eql(users_count)
      end
    end
  
    describe "#reset_session_token!" do
      it "should create a session_token for user upon creation of user" do
        new_user = FactoryGirl.build(:user)
        new_user.reset_session_token!
        new_user.session_token.should_not be_nil
      end
    end
  
    describe "#is_password?" do
      it "should return true if the password is correct" do
        user = FactoryGirl.create(:user, password: "testpass")
        user.is_password?("testpass").should eql(true)
      end
    end
  
    describe ".find_by_credentials" do
      it "should find the right user by email and password" do
        user = FactoryGirl.create(:user, email: "testuser@test.com", password: "testpass")
        User.find_by_credentials("testuser@test.com", "testpass").should eql(user)
      end
    end
  end
  
  describe "associations" do
    it { should have_many(:bookmarks) }
  end
end