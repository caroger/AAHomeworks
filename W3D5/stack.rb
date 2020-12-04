class Stack
  def initialize
    @stack = []
  end

  def push(ele)
    @stack << ele
  end

  def pop
    *a, b = @stack
    @stack = a
    b
  end

  def peak
    @stack[-1]
  end

  def to_s
    @stack.join(' -> ')
  end
end

if __FILE__ == $PROGRAM_NAME
  s = Stack.new
  s.push('A')
  s.push('B')
  s.push('C')
  puts s
  puts s.pop
  puts s
  puts s.peak
end
