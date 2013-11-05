class FavoritesController < ApplicationController
  def index
    @liked_bookmarks = current_user.liked_bookmarks
    render :index
  end
end
