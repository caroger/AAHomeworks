class CatsController < ApplicationController

  def index
    @cats = Cat.all
    render json: @cats
  end

  def show
    @cat = Cat.find_by(id: params[:id])
    render json: @cat
  end

  def create

  end
end
