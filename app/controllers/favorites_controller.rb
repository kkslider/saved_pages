class FavoritesController < ApplicationController
  def index
    @liked_bookmarks = current_user.liked_bookmarks
    render :index
  end
  
  def create
    debugger
    @favorite = Favorite.new
    @favorite.user_id = current_user.id
    @favorite.bookmark_id = data-bookmark_id
    
    if @favorite.save
      render :json => @favorite
    else
      render :json => @favorite.errors.full_messages
    end
  end
end
