class Car
  def initialize make, model, year
    @make = make
    @model = model
    @year = year
  end

  # attr_reader(:model, :make)
  # attr_writer(:model)

  attr_accessor(:year, :make, :model)

  # getter
  # def make
  #   @make
  # end

  # setter
  def make= new_make
    @make = new_make
  end
end

# new Car()
my_car = Car.new('Toyota', 'Tercel', 1986)

p my_car
p my_car.make

my_car.make = 'Dodge'
# my_car.make=('Dodge')
p my_car

p my_car.model
my_car.model = 'Grand Caravan'
p my_car

p my_car.year
my_car.year = 2009
p my_car
