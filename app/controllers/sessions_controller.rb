class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
     if user && user.authenticate(params[:session][:password])
       # Log the user in and redirect to the user's show page.
       params[:session][:remember_me] == '1' ? remember(user) : forget(user)
       log_in user
       remember user
       redirect_to user
     else
       # Create an error message.
       flash.now[:danger] = 'Invalid email/password combination' # Not quite right!

       render 'new'
     end
  end

  def destroy
    log_out
    redirect_to root_path
  end

  # Remembers a user in a persistent session.
  def remember(user)
    user.remember
    cookies.permanent.signed[:user_id] = user.id
    cookies.permanent[:remember_token] = user.remember_token
  end

end