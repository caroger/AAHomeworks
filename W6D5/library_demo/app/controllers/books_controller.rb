class BooksController < ApplicationController

  def index
    @books = Book.all
    render :index
  end

  def show
    @book = Book.find_by(id: params[:id])
    # render json: book
    if @book
      render :show
    else
      redirect_to books_url
    end
  end

  def new
    @book = Book.new
    render :new
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      # show uer the book show page
      redirect_to book_url(@book)
    else
      # show user the book form
      render :new
    end
  end

  def edit
    @book = Book.find_by(id: params[:id])
    render :edit
  end

  def update
    @book = Book.find_by(id: params[:id])

    if @book.update_attributes(book_params)
      redirect_to book_url(@book)
    else
      render :edit
    end
  end
  # t.string   "title",       null: false
  # t.string   "author",      null: false
  # t.integer  "year"
  # t.string   "category"
  # t.text     "description"

  private
  def book_params
    params.require(:book).permit(:title, :author, :year, :category, :description)
  end
  
end
  