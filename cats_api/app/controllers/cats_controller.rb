class CatsController < ApplicationController
  def index
    # GET /cats
    cats = Cat.all
    render json: cats
  end

  def show
    # GET /cats:id
    cat = Cat.find(params[:id])
    render json: cat
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
