class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password] 
    )
    
    if user
      login_user!(user)
      # redirect/render
    else
      # redirect/render
    end
  end
  
  def destroy
    logout_current_user!
    
    # need to redirect somewhere
  end
end
