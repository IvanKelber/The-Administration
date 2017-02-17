class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def edit
  end

  def create
    redirect_to root_url #temporary of course
  end

  def destroy
  end

  def update
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end
end
