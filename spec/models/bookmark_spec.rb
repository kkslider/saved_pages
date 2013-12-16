require 'spec_helper'

describe Bookmark do
  it "has a valid factory" do
    FactoryGirl.create(:bookmark).should be_valid
  end
  
  it "is invalid without a url" do
    FactoryGirl.build(:bookmark, url: nil).should_not be_valid
  end
  
  it "is invalid without a title" do
    FactoryGirl.build(:bookmark, title: nil).should_not be_valid
  end
  
  describe "#is_favorited?" do
    it "returns true if the bookmark is favorited" do
      bookmark = FactoryGirl.create(:bookmark, is_favorited: true)
      bookmark.is_favorited?.should eql true
    end
  end
  
  describe "#is_archived?" do
    it "returns true if the bookmark is archived" do
      bookmark = FactoryGirl.create(:bookmark, is_archived: true)
      bookmark.is_archived?.should eql true
    end
  end
  
  describe "associations" do
    it { should belong_to(:user) }
  end
end