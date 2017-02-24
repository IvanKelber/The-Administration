class ComponentsController < ApplicationController
  before_action :admin_user


  def create
    @component = current_user.components.build(component_params)
    if @component.save
      #handle success
      # flash[:success] = "Component '#{@component.name}' created"
      # redirect_to action: "index"
      render json: @component

    else
      # render 'index'
    end
  end

  def destroy
  end

  def edit
  end

  def update
  end

  def index
    @components = Component.all
  end

  def show
  end

  def new
    @component = Component.new
  end

  private

    def component_params
      params.require(:component).permit(:name,:description,:min_teams,:max_teams,:category)
    end

end
