class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password] 
    )
    
    if user
      login_user!(user)
      # render :json => user
      redirect_to '#/u'
      # redirect/render
    else
      render :json => user.errors.full_messages, status: 422
      # redirect/render
    end
  end
  
  def destroy
    logout_current_user!
    redirect_to new_session_url
    # need to redirect somewhere
  end
end
