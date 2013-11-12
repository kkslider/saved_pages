# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131112221022) do

  create_table "bookmarks", :force => true do |t|
    t.integer  "user_id",                         :null => false
    t.string   "url",                             :null => false
    t.string   "title",                           :null => false
    t.string   "summary",                         :null => false
    t.string   "author"
    t.boolean  "is_favorited", :default => false, :null => false
    t.boolean  "is_archived",  :default => false, :null => false
    t.datetime "created_at",                      :null => false
    t.datetime "updated_at",                      :null => false
  end

  add_index "bookmarks", ["user_id"], :name => "index_bookmarks_on_user_id"

  create_table "friends", :force => true do |t|
    t.integer  "user_id",     :null => false
    t.integer  "follower_id", :null => false
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  add_index "friends", ["follower_id"], :name => "index_friends_on_follower_id"
  add_index "friends", ["user_id", "follower_id"], :name => "index_friends_on_user_id_and_follower_id", :unique => true
  add_index "friends", ["user_id"], :name => "index_friends_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "email",             :null => false
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
    t.string   "session_token"
    t.string   "password_digest",   :null => false
    t.string   "bookmarklet_token"
  end

  add_index "users", ["bookmarklet_token"], :name => "index_users_on_bookmarklet_token", :unique => true
  add_index "users", ["email"], :name => "index_users_on_email", :unique => true

end
