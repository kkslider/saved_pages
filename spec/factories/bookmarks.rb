require 'faker'

FactoryGirl.define do
  factory :bookmark do |f|
    f.title { Faker::Name.title }
    f.url { Faker::Internet.url }
    f.user_id 1
  end
end