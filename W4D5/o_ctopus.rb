def sluggish(fish)
  fish.each do |f|
    return f if fish.all? { |fis| fis.length <= f.length }
  end
end

class Array
  def fish_sort
    return self if length <= 1

    mid = length / 2
    left = take(mid).fish_sort
    right = drop(mid).fish_sort

    merge_fish(left, right)
  end

  def merge_fish(left, right)
    merged = []
    until left.empty? || right.empty?
      merged << if left.first.length < right.first.length
                  left.shift
                else
                  right.shift
                end
    end
    merged + left + right
  end
end

def dominant(fish)
  fish.fish_sort.last
end

def clever(fish)
  longest_fish = fish.first
  fish.each do |f|
    longest_fish = f if f.length > longest_fish.length
  end
  longest_fish
end

def slow_dance(dir, titles_array)
  titles_array.each_with_index do |ele, idx|
    return idx if ele == dir
  end
  nil
end

def constant_dance(dir, titles_hash)
  titles_hash[dir]
end

if __FILE__ == $PROGRAM_NAME
  fish = %w[fish fiiish fiiiiish fiiiish fffish ffiiiiisshh fsh fiiiissshhhhhh]
  # p sluggish(fish)
  # p dominant(fish)
  # p clever(fish)

  titles_array = %w[up right-up right right-down down left-down left left-up]
  titles_hash = titles_array.map.with_index { |ele, idx| [ele, idx] }.to_h

  p slow_dance('up', titles_array)
  p constant_dance('right-down', titles_hash)
end
