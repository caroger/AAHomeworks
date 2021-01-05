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
    cat = Cat.new(name: params[:cat][:name])
    if cat.save
      render json: cat
    else
      render json: cat.errors.full_messages, status: :unprocessable_entity
    end
  end


end
