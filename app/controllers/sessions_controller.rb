class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password] 
    )
    
    if user
      login_user!(user)
      redirect_to '#/u'
    else
      flash.now[:error] = "Invalid email/password combination"
      render :new
    end
  end
  
  def destroy
    logout_current_user!
    render :json => nil
  end
end
