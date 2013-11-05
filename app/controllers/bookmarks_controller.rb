class BookmarksController < ApplicationController
  def create
    @bookmark = Bookmark.new(params[:bookmark])
    @bookmark.user_id = current_user.id
    
    if @bookmark.save
      render :json => @bookmark
    else
      render :json => @bookmark.errors.full_messages, status: 422
    end
  end
  
  def edit
    @bookmark = Bookmark.find(params[:id])
    render :edit
  end
  
  def update
    @bookmark = Bookmark.find(params[:id])
    
    if @bookmark.update_attributes(params[:bookmark])
      render :json => @bookmark
    else
      render :json => @bookmark.errors.full_messages, status: 422
    end
  end
end
