# block === reusable code denoted with a do..end
# lambda === block stored in memory
# Proc === block stored in memory

names = ['Alice', 'Bob', 'Carol']

my_block = lambda do |name, age|
  puts "hello #{name}"
end

my_proc = Proc.new do |name, age|
  puts "hello"
end

# names.each &my_proc

# puts

# ['Mindy', 'Sally', 'Jesse'].each &my_block

# names.each do |name|
#   puts "hello #{name}"
# end

my_lambda = lambda do |arg|
  puts arg
  return 42
end

# method accepts the block "invisibly"
def accepts_block
  return_val = yield 'Dean' # callback('Dean')
  puts return_val
end

accepts_block &my_lambda

