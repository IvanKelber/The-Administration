class ComponentsController < ApplicationController
  before_action :admin_user


  def create
    permitted_params = component_params
    permitted_params[:keywords] = []
    permitted_params[:words].each do |w|
      keyword = Keyword.find_or_create_by(word: w[:text])
      permitted_params[:keywords].push(keyword)
    end
    permitted_params.except!(:words)
    @component = current_user.components.build(permitted_params)
    # puts "KEYWORDS: "
    if @component.save
      # @component.keywords.each do |keyword|
      #   keyword.components<<(@component)
      # end
      #handle success
      # flash[:success] = "Component '#{@component.name}' created"
      # redirect_to action: "index"
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

    def component_params
      # puts "keywords:"
      words = []
      if !params[:component][:words].nil?
        params[:component][:words].each do |number,value|
          # print number, value[:text], "\n"
          # print value.nil?.to_s
          words.push(value)
        end
        params[:component][:words] = words
      end
      ret = params.require(:component).permit(:name,:description,:min_teams,:max_teams,:category,:words => [:id, :text])
      # puts "RETURN VALUE: "
      # puts ret[:words]
      return ret
    end

end
