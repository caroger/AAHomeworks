# Implement the map ADT in Ruby using #Array as the underlying data storage
class Map
  def initialize
    @map = []
  end

  def set(key, val)
    case get(key).nil?
    when true
      @map << [key, val]
    when false
      @map.each { |ele| ele[-1] = val if ele[0] == key }
    end
  end

  def get(key)
    val = nil
    @map.each do |ele|
      val = ele[-1] if ele[0] == key
    end
    val
  end

  def delete(key)
    i = nil
    @map.each_with_index do |ele, idx|
      i = idx if ele[0] == key
    end
    i.nil? ? nil : @map = @map[0...i] + @map[i + 1..-1]
  end

  def show
    @map
  end
end
