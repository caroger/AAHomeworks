class ToysController < ApplicationController
  def index
    cat = Cat.find_by(id: params[:cat_id])
    render json: cat.toys
  end

  def show
    render json: Toy.find_by(id: params[:id])
  end

  def new
    @cat = Cat.find_by(id: params[:cat_id])
    @toy = Toy.new
    render :new
  end

  def destroy
    toy = Toy.find_by(id: params[:id])
    toy.destroy
    render json: toy
  end

  def update
    toy = Toy.find(params[:id])
    success = toy.update(toy_params)
    if success
      render json: toy
    else
      render json: toy.errors.full_messages, status: :unprocessable_entity
    end
  end

  def create
    # POST /cats/:cat_id/toys
    # POST /toys
    @toy = Toy.new(toy_params)
    @cat = @toy.cat

    if @toy.save
      redirect_to cat_url(@cat)
    else
      render :new
    end
  end

  private
  def toy_params
    params.require(:toy).permit(:cat_id, :name, :ttype)
  end
end
