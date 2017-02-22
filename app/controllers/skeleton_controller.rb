class SkeletonController < ApplicationController
  before_action :logged_in_user, only:[:media]

  def home
  end

  def media
  end

  def rules
  end

  def about
  end

  def contact
  end

end
