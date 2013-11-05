User.create!(email: "test1@test.com", password: "password")
User.create!(email: "test2@test.com", password: "password")
User.create!(email: "test3@test.com", password: "password")
User.create!(email: "test4@test.com", password: "password")

Bookmark.create!(user_id: 1, url: "www.gamefaqs.com", title: "GameFAQs", summary: "summary1")
Bookmark.create!(user_id: 1, url: "www.amazon.com", title: "Amazon", summary: "summary2")
Bookmark.create!(user_id: 1, url: "www.reddit.com", title: "Reddit", summary: "summary3")
Bookmark.create!(user_id: 1, url: "www.ebay.com", title: "eBay", summary: "summary4")

Favorite.create!(user_id: 1, bookmark_id: 1)
Favorite.create!(user_id: 1, bookmark_id: 2)
Favorite.create!(user_id: 1, bookmark_id: 3)

Archive.create!(user_id: 1, bookmark_id: 1)
Archive.create!(user_id: 1, bookmark_id: 2)