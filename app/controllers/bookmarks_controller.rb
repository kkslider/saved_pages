class BookmarksController < ApplicationController
  layout "bookmarks"
  # respond_to :json
  
  def create
    @bookmark = Bookmark.new(params[:bookmark])
    @bookmark.user_id = current_user.id
    
    if @bookmark.save
      render :json => @bookmark
    else
      render :json => @bookmark.errors.full_messages, status: 422
    end
  end
  
  def show
    @bookmark = Bookmark.find(params[:id])
    render :json => @bookmark
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
  
  def destroy
    @bookmark = Bookmark.find(params[:id])
    @bookmark.destroy
    render :json => nil
  end
  
  def unread
    # return if !current_user
    @bookmarks = current_user.bookmarks
 
    render :json => @bookmarks
  end
  
  def archive
    @archived_bookmarks = current_user.archived_bookmarks
    render :archive
  end
  
  def like
    @liked_bookmarks = current_user.liked_bookmarks
    render :like
  end
  
end
