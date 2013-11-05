class ArchivesController < ApplicationController
  def index
    @archived_bookmarks = current_user.archived_bookmarks
    render :index
  end
end
