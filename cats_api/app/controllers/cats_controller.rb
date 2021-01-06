class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render :index
  end

  def show
    # GET /cats:id
    @cat = Cat.find_by(id: params[:id])
    render :show
  end

  def create
    # POST /cats
    @cat = Cat.new(cat_params)
    if @cat.save
      redirect_to cat_url(@cat)
    else
      render :new
      # render json: @cat.errors.full_messages, status: :unprocessable_entity
    end
  end

  def new
    #/cats/new
    @cat = Cat.new
    render :new
  end

  def update
    cat = Cat.find_by(id: params[:id])
    cat.update(cat_params)
  end

  def edit
    # POST /cats/:id
    # show a form to edit an existing object
    @cat = Cat.find_by(id: params[:id])
    render :edit
  end

  def destroy
    cat = Cat.find_by(id: params[:id])
    cat.destroy
    redirect_to cats_url
  end

  def cat_params
    params.require(:cat).permit(:name, :skill)
  end


end
