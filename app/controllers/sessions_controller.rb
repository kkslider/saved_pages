class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password] 
    )
  end
  
  def destroy
    logout_current_user!
    
    # need to redirect somewhere
  end
end
