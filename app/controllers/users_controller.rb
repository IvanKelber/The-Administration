class UsersController < ApplicationController
  before_action :logged_in_user, only: [:edit, :update, :show]
  before_action :correct_user,   only: [:edit, :update]
  before_action :admin_user,     only: [:destroy, :index]


  def new
    @user = User.new
  end

  def edit
    @user = User.find(params[:id])
  end


  def create
    @user = User.new(user_params)    # Not the final implementation!
    if @user.save
      # Handle a successful save.
      @user.send_activation_email
      flash[:info] = "Please check your email to activate your account."
      redirect_to root_url
    else
      render 'new'
    end
  end

  def destroy
    User.find(params[:id]).destroy
    flash[:success] = "User deleted"
    redirect_to users_url
  end

  def update
    @user = User.find(params[:id])
    puts "UPDATING"
    puts @user.name
    if @user.update_attributes(user_params)
      flash[:success] = "Account information updated"
      redirect_to user_url(@user)
    else
      render 'edit'
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)

    end


    # Confirms the correct user.
    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_url) unless @user == current_user
    end


end
