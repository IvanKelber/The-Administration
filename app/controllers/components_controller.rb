class ComponentsController < ApplicationController
  before_action :admin_user


  def create
    permitted_params = component_params
    permitted_params[:keywords] = []
    if !permitted_params[:words].nil?
      permitted_params[:words].each do |w|
        keyword = Keyword.find_or_create_by(word: w[:text])
        permitted_params[:keywords].push(keyword)
      end
    end
    permitted_params.except!(:words)
    @component = current_user.components.build(permitted_params)
    # puts "KEYWORDS: "
    if @component.save
      #handle success
      render json: @component

    else
      render json: @component.errors.full_messages, status: :error
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
    @suggestions = Keyword.all
  end

  def show
  end

  def new
    @component = Component.new
  end

  private

    #This method loops through each keyword and formats it properly.
    # TODO: format this properly when passing the JSON in the first place, ya dingus
    def component_params
      words = []
      if !params[:component][:words].nil?
        params[:component][:words].each do |number,value|

          words.push(value)
        end
        params[:component][:words] = words
      end
      ret = params.require(:component).permit(:name,:description,:min_teams,:max_teams,:category,:words => [:id, :text])

      return ret
    end

end
