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
    if params[:unread]
      @bookmarks = current_user.bookmarks.where(is_archived: false).order("created_at DESC").page(params[:page])
    elsif params[:liked]
      @bookmarks = current_user.liked_bookmarks.order("updated_at DESC").page(params[:page])
    else
      @bookmarks = current_user.archived_bookmarks.order("updated_at DESC").page(params[:page])
    end
 
    render :json => {
      :models => @bookmarks,
      :page => params[:page],
      :total_pages => @bookmarks.total_pages
    }
  end
  
  def archive
    @archived_bookmarks = current_user.archived_bookmarks.page(params[:page])
    render :json => {
     :models => @archived_bookmarks,
     :page => params[:page],
     :total_pages => @archived_bookmarks.total_pages
    }
  end
  
  def like
    @liked_bookmarks = current_user.liked_bookmarks.page(params[:page])
    render :json => {
     :models => @liked_bookmarks,
     :page => params[:page],
     :total_pages => @liked_bookmarks.total_pages
    }
  end
  
end
