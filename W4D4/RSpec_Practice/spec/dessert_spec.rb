require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  subject(:dessert) {Dessert.new("sweet", 80, "Roger")}

  describe "#initialize" do
    it "sets a type" do
      expect(dessert.type).to eq("sweet")
    end

    it "sets a quantity" do
      expect(dessert.quantity).to eq(80)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.ingredients).to be_empty
    end


    it "raises an argument error when given a non-integer quantity" do 
      expect { Dessert.new("Sweet", "80", "Roger")}.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      expect(dessert.ingredients).to_not include("sugar")
      dessert.add_ingredient("sugar")
      expect(dessert.ingredients).to include("sugar")
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      ingredients = %w(a b c d e f g) 

      ingredients.each do |ingredient|
        dessert.add_ingredient(ingredient)
      end

      expect(dessert.ingredients).to eq(ingredients)
      dessert.mix!
      expect(dessert.ingredients).to_not eq(ingredients)
      expect(dessert.ingredients.sort).to eq(ingredients.sort)

    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      expect(dessert.quantity).to eq(80)
      dessert.eat(80)
      expect(dessert.quantity).to eq(0)
    end


    it "raises an error if the amount is greater than the quantity" do 
      expect {dessert.eat(81)}.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect ()
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in"
  end
end
