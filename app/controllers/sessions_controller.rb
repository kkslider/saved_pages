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
    render :json => nil
    # redirect_to root_url, status: 200
    # need to redirect somewhere
  end
end
