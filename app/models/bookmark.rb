class Bookmark < ActiveRecord::Base
  attr_accessible :summary, :title, :url, :user_id
end
