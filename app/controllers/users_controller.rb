class UsersController < ApplicationController
  def create
    @user = User.new(params[:user])
    if @user.save
      login_user!(@user)
      redirect_to '#/u'
    else
      flash.now[:error] = @user.errors.full_messages
      render :new
    end
  end
  
  def show
    @user = User.find(params[:id])
    render :json => @user
  end
end
