# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo_user = User.create!(username: "John Snow", 
                        email: "test123", 
                        password: "123456")

Restaurant.destroy_all

demo_restaurant = Restaurant.create!(id: 1, 
                                    name: "Dinos", 
                                    phone_number: "123-456-7890", 
                                    operation_hours: "10:00am - 4:00pm", 
                                    executive_chef: "James Koenig", 
                                    city: "Newark", 
                                    description: "GLANG")

# photo1 = open('https://table-open-seeds.s3.amazonaws.com/Jonathan_Diaz.jpg')
photo1 = open('/Users/jonathandiaz/Desktop/Jonathan_Diaz.jpg')

demo_restaurant.photos.attach(io: photo1, filename: 'Jonathan_Diaz.jpg')