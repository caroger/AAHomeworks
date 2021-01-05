class Cat < ActiveRecord::Base
  validates :name, presence: true
  has_many :toys,
    primary_key: :id,
    foreign_key: :cat_id,
    class_name: :Toy
end
