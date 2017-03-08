class ComponentsController < ApplicationController
  before_action :admin_user


  def create
    permitted_params = component_params
    permitted_params[:keywords] = []
    if !permitted_params[:tags].nil?
      permitted_params[:tags].each do |w|
        keyword = Keyword.find_or_create_by(word: w[:text])
        permitted_params[:keywords].push(keyword)
      end
    end
    permitted_params.except!(:tags)
    @component = current_user.components.build(permitted_params)
    # puts "KEYWORDS: "
    if @component.save
      #handle success
      obj = @component.as_json
      obj[:tags] = @component.keywords #hacky way of combining keyword references into component creation
      render json: obj

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
    @tags = []
    @components.each do |c|
      @tags.push(c.keywords)
    end
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
      tags = []
      if !params[:component][:tags].nil?
        params[:component][:tags].each do |number,value|

          tags.push(value)
        end
        params[:component][:tags] = tags
      end
      ret = params.require(:component).permit(:name,:description,:min_teams,:max_teams,:category,:tags => [:id, :text])

      return ret
    end

end
