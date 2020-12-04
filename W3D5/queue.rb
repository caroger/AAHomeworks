# Implement Queue ADT using Ruby #Array as underlyin data storage
class Queue
  def initialize
    @queue = []
  end

  def enqueue(ele)
    @queue << ele
  end

  def dequeue
    @queue.shift
  end

  def peak
    @queue.first
  end

  def to_s
    @queue.join(' <- ')
  end
end

if __FILE__ == $PROGRAM_NAME
  my_q = Queue.new
  puts my_q
  my_q.enqueue('A')
  my_q.enqueue('B')
  my_q.enqueue('C')
  puts my_q

  puts my_q.peak
  puts my_q.dequeue

  puts my_q

end
