# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all
Resrvation.destroy_all
Menu.destroy_all

demo_user = User.create!(username: "John Snow", 
                        email: "test123", 
                        password: "123456")

user1 = User.create!(username: "Jonathan Diaz",
                    email: "kingape@gmail.com",
                    password: "123456")
                    
user2 = User.create!(username: "Michael Noble",
                    email: "makonobo@gmail.com",
                    password: "123456")

user3 = User.create!(username: "Janette Tinoco",
                    email: "janette@gmail.com",
                    password: "123456")

user4 = User.create!(username: "Alexey Sergieve",
                    email: "alexey@gmail.com",
                    password: "123456")
                    
r1 = Restaurant.create!(id: 1, 
                        name: "Michael's Pasteria", 
                        phone_number: "973-661-5252", 
                        operation_hours: "11:30am - 9:00pm", 
                        executive_chef: "Michael", 
                        city: "Montclair", 
                        description: "Michaels Pastaria is re-opening with new owners using original recipes. Including Michael's famous thin crust pizza. Located in Nutley, NJ. We provide a casual romantic setting, soothing dinner music, and we guarantee we will make you feel right at home the minute you walk in the door.")

p1 = open('https://table-open-seeds.s3.amazonaws.com/michaels-pasteria.jpeg')

r1.photos.attach(io: p1, filename: 'michaels-pasteria.jpg')

r2 = Restaurant.create!(id: 2, 
                        name: "Uncle Momo's", 
                        phone_number: "973-233-9500", 
                        operation_hours: "12:00pm - 9:30pm", 
                        executive_chef: "Uncle Momo", 
                        city: "Montclair", 
                        description: "Known with its delicious dishes and unique ambiance, Uncle Momo is serving a fusion of French and Lebanese cuisine in a chic atmosphere that makes you feel as you’ve been transported to a bistro in Paris..")

p2 = open('https://table-open-seeds.s3.amazonaws.com/uncle-momo.jpeg')

r2.photos.attach(io: p2, filename: 'uncle-momo.jpg')

r3 = Restaurant.create!(id: 3, 
                        name: "Blue Steel Pizza Company", 
                        phone_number: "973-678-1873", 
                        operation_hours: "12:00pm - 9:30pm", 
                        executive_chef: "Chef Lawerence Talis", 
                        city: "Montclair", 
                        description: "Detroit style pizza, expertly made cocktails, and a full American cuisine menu. Uniquely crafted menu items featuring locally sourced ingredients, masterfully prepared. **Please note, reservations are for Blue Steel Pizza Company, for reservations at the Rab bit hole, please email ron@bluesteelpizzaco.com")

p3 = open('https://table-open-seeds.s3.amazonaws.com/blue-steel.jpeg')

r3.photos.attach(io: p3, filename: 'blue-steel.jpg')

r4 = Restaurant.create!(id: 4, 
                        name: "Brix", 
                        phone_number: "973-751-7001", 
                        operation_hours: "11:00am - 11:00pm", 
                        executive_chef: "Brix Matrix", 
                        city: "Montclair", 
                        description: "Nestled in the middle of prestigious Essex County, New Jersey, Brix offers a dining experience were casual comfort meets sophistication, all in one experience. American cuisine with influences of Italy , cocktails, brick oven pizza, and a warm knowledgeable staff are what have the neighborhood raving about Brix Restaurant & Pizza Bar.")

p4 = open('https://table-open-seeds.s3.amazonaws.com/brix.jpeg')

r4.photos.attach(io: p4, filename: 'brix.jpg')

r5 = Restaurant.create!(id: 5, 
                        name: "Joe's Crab Shack", 
                        phone_number: "973-777-5114", 
                        operation_hours: "11:00am - 11:00pm", 
                        executive_chef: "Joe", 
                        city: "Clifton", 
                        description: "Joe’s Crab Shack offers a variety of favorites from all parts of the sea and shore. From its extensive menu, guests can choose from buckets of seasonal seafood, fried shrimp platters and fish dishes, as well as options from the “mainland” that include steak, sandwiches, and chicken. Guests can indulge in over-sized and creative cocktails, such as the Shark Bite which is playfully garnished with a shark toy. Since its inception, Joe’s popularity has stemmed not only from its menu, but also its retail store. With various pieces of merchandise for purchase, including the ever-popular tie-dye T-shirt with the phrase “Peace, Love and Crabs,” Joe’s has become synonymous with the word “fun.”")

p5 = open('https://table-open-seeds.s3.amazonaws.com/joes-crab-shack.jpeg')

r5.photos.attach(io: p5, filename: 'joes-crab-shack.jpeg')

r6 = Restaurant.create!(id: 6, 
                        name: "Uno's Pizzeria & Grill", 
                        phone_number: "973-574-1303", 
                        operation_hours: "11:00am - 10:00pm", 
                        executive_chef: "N/A", 
                        city: "Clifton", 
                        description: "Our newest menu features all your favorites like the Numero Uno Deep Dish Pizza, and even some new items that may become your favorite including the Margherita Chicago Thin Crust Pizza and the Chicken Parm Sub. We have pizzas that are perfect for all meat-lovers, vegans, and gluten-free guests alike, whether it is our legendary Deep Dish or our Cauliflower Crust that you can try on any 10” Chicago Thin Crust.")

p6 = open('https://table-open-seeds.s3.amazonaws.com/unos.jpeg')

r6.photos.attach(io: p6, filename: 'unos.jpeg')

r7 = Restaurant.create!(id: 7, 
                        name: "Villalobos", 
                        phone_number: "973-337-6667", 
                        operation_hours: "11:00am - 10:00pm", 
                        executive_chef: "N/A", 
                        city: "Montclair", 
                        description: "Open for lunch and dinner 6 days a week, Villalobos offers Mexican food prepared with traditional recipes and modern technique. We opened our doors August 12, 2014 and ever since then we have been delivering some of the the best tacos New Jersey has to offer. Our kitchen offers flavors and ingredients that you can only find in the heart of Mexico's true culinary soul.")

p7 = open('https://table-open-seeds.s3.amazonaws.com/villalobos.jpeg')

r7.photos.attach(io: p7, filename: 'villalobos.jpeg')

r8 = Restaurant.create!(id: 8, 
                        name: "Laboratorio", 
                        phone_number: "973-746-6100", 
                        operation_hours: "4:00pm - 10:00pm", 
                        executive_chef: "James DeSisto", 
                        city: "Montclair", 
                        description: "Laboratorio Kitchen offers guests a modern atmosphere paired with seasonal food and tender service. We are a BYOB restaurant. Chef/Owner James DeSisto has a seasonal a la carte menu featuring fresh seafood, pasta, steaks, and appetizers. In addition there is a small plates menu available (Tuesday thru Thursday) and daily specials every night. Chef DeSisto also has gluten free and vegan options for guests as well. Keep in mind we are a BYOB restaurant so dont forget the wine.")

p8 = open('https://table-open-seeds.s3.amazonaws.com/laboratorio.jpeg')

r8.photos.attach(io: p8, filename: 'laboratorio.jpeg')

r9 = Restaurant.create!(id: 9, 
                        name: "Fascino", 
                        phone_number: "973-233-0350", 
                        operation_hours: "4:00pm - 10:00pm", 
                        executive_chef: "Ryan DePersio", 
                        city: "Montclair", 
                        description: "Fascino, the brainchild of celebrity Chef Ryan DePersio and his family, is a study in modern Italian food, coined 'Italian without borders.' Ryan's unique approach is apparent, showcasing his years with world renowned chefs Jean Georges Vongrichten and David Bouley. Achieving a Zagat food rating of 26, it states, a 'consistent' 'favorite' for its 'elegant', 'innovative' interpretations of 'traditional' dishes (and his mom's 'alluring' desserts). 16 years and going strong, Fascino was renovated in 2010, completely redecorated with a fresh new look, and has an expanded menu.")

p9 = open('https://table-open-seeds.s3.amazonaws.com/fascino.jpeg')

r9.photos.attach(io: p9, filename: 'fascino.jpeg')

r10 = Restaurant.create!(id: 10, 
                        name: "Zeugma", 
                        phone_number: "973-744-0074", 
                        operation_hours: "10:30am - 9:45pm", 
                        executive_chef: "Chef Can Alp", 
                        city: "Montclair", 
                        description: "Zeugma is BYOB restaurant No Corkage fee. Zeugma Grill offers a distinct menu for its customers that is sure to please the palate. The Mediterranean fusion and modern menu includes mezzes, special entrees, salads, desserts and much more. Try our fresh made and our creations BEET FALAFEL, MANTI(Handmade Mushroom dumpling). Domenico winery also sells their California wines out our restaurant so no need to stop on your way for a bottle.")

p10 = open('https://table-open-seeds.s3.amazonaws.com/zeugma.jpeg')

r10.photos.attach(io: p10, filename: 'zeugma.jpeg')

r11 = Restaurant.create!(id: 11, 
                        name: "Crosby", 
                        phone_number: "973-509-2337", 
                        operation_hours: "4:00pm - 11:00pm", 
                        executive_chef: "N/A", 
                        city: "Montclair", 
                        description: "Located in the heart of downtown Montclair, The Crosby is best known for its craft cocktails, spacious venue, and energetic nightlife. The chic, industrial ambiance of the restaurant is all in the details, including roaring fireplaces and floor to ceiling garage doors that are left open on nice days to capture the breezy ambience of a never ending summer. The restaurant is home to two large indoor bars that seat over 50 people and a seasonal outdoor beer garden on the back patio. The menu and venue appeal to occasions of all kinds, including your casual lunch plans, your date night dinners, your girl’s night out, and even your next private party.")

p11 = open('https://table-open-seeds.s3.amazonaws.com/crosby.jpeg')

r11.photos.attach(io: p11, filename: 'crosby.jpeg')

r12 = Restaurant.create!(id: 12, 
                        name: "Bareburger", 
                        phone_number: "973-509-2273", 
                        operation_hours: "9:00am - 11:00pm", 
                        executive_chef: "N/A", 
                        city: "Montclair", 
                        description: "In 2019, after our doors have been open for a decade, we took a step back and looked at ourselves as a company. We looked beyond what we created, we reflected upon the journey that brought us here and explored ideas of where this path and our growth will lead. Our greatest strength has always been creating a menu with choices that feel good for everyone. We source mindfully, with our farmers, our environment and our guests in mind at all times. We now look to the future of food, and plant-based proteins are undoubtedly at the forefront of sustainability. Our menu is now half vegan; plant-based and more delicious than ever. What we eat is who we are, and at Bareburger, we celebrate everyone.")

p12 = open('https://table-open-seeds.s3.amazonaws.com/bareburger.jpeg')

r12.photos.attach(io: p12, filename: 'bareburger.jpeg')

r13 = Restaurant.create!(id: 13, 
                        name: "Sayola", 
                        phone_number: "862-333-4499", 
                        operation_hours: "12:00pm - 11:00pm", 
                        executive_chef: "N/A", 
                        city: "Montclair", 
                        description: "After many names were considered, only one truly represented our mission. We are driven to provide an authentic spanish dining experience, pleasurable ambience, and outstanding service from our staff. The name had to stand for a future legacy. Therefore SAYOLA comes from the names of the proprietors children: SAndra, YOrett, and LAzaro. Visit us for a unique fine dinning experience.")

p13 = open('https://table-open-seeds.s3.amazonaws.com/sayola.jpeg')

r13.photos.attach(io: p13, filename: 'sayola.jpeg')

r14 = Restaurant.create!(id: 14, 
                        name: "Alto", 
                        phone_number: "973-329-5600", 
                        operation_hours: "4:00pm - 11:30pm", 
                        executive_chef: "N/A", 
                        city: "Montclair", 
                        description: "Montclairs only rooftop! Sip on a cocktail and grab a bite; soak in stunning views of the NYC skyline. Due to our current limited floor plan capacity for large parties or private events please email info@themchotel.com. Please call 973-329 5600 ALTO Rooftop after 3:00 pm for any questions. No Kids or Infants, you must be 21 years of age for admission.")

p14 = open('https://table-open-seeds.s3.amazonaws.com/alfo.jpeg')

r14.photos.attach(io: p14, filename: 'alfo.jpeg')

r15 = Restaurant.create!(id: 15, 
                        name: "Brasil Paradise Grill", 
                        phone_number: "973-577-1977", 
                        operation_hours: "4:00pm - 10:00pm", 
                        executive_chef: "Marcelo / Pedro", 
                        city: "Montclair", 
                        description: "The passion of cooking, which stemmed from my family who has been in the restaurant business for years, is the reason why I decided to initiate this successful journey. This journey is called Brasil Paradise Grill. We chose Montclair, NJ for its beauty and energy, which is synonymous with the Brasilian culture, passion and food.")

p15 = open('https://table-open-seeds.s3.amazonaws.com/brasile-paradise.jpeg')

r15.photos.attach(io: p15, filename: 'brasile-paradise.jpeg')

r16 = Restaurant.create!(id: 16, 
                        name: "Bella Luce", 
                        phone_number: "973-661-4300", 
                        operation_hours: "11:30am - 11:00pm", 
                        executive_chef: "N/A", 
                        city: "Nutley", 
                        description: "For the many people who thought Luce Restaurant in Caldwell was the ultimate mix of “good food, good people, and good prices” you are in for a very pleasant surprise. Bella Luce in Nutley actually surpasses it as the quintessential dining experience in Northern New Jersey. Opened in March of 2015, Bella Luce picks up where Luce left off and has been transformed into a trendy, yet casual, atmosphere, serving authentic Italian cuisine highlighting signature dishes.")

p16 = open('https://table-open-seeds.s3.amazonaws.com/bella-luce.jpeg')

r16.photos.attach(io: p16, filename: 'bella-luce.jpeg')

r17 = Restaurant.create!(id: 17, 
                        name: "Cucina 355", 
                        phone_number: "973-798-4500", 
                        operation_hours: "10:30am - 10:00pm", 
                        executive_chef: "N/A", 
                        city: "Nutley", 
                        description: "At Cucina 355 Ristorante & Pizzeria, we strive to serve the best food in the most pleasant atmosphere. It is our philosophy that when you surround yourself with the best, you rise to their level. At our new Nutley, NJ restaurant we have done just that. Ours looks to stand out among Italian restaurants in Essex County New Jersey with our comfortable, relaxed atmosphere and our affordable Italian cuisine.")

p17 = open('https://table-open-seeds.s3.amazonaws.com/cucina-355.jpeg')

r17.photos.attach(io: p17, filename: 'cucina-355.jpeg')

r18 = Restaurant.create!(id: 18, 
                        name: "Spuntino Wine Bar and Italian Tapas", 
                        phone_number: "973-661-2435", 
                        operation_hours: "11:00am - 10:00pm", 
                        executive_chef: "N/A", 
                        city: "Clifton", 
                        description: "Spuntino Wine Bar & Italian Tapas set out with the goal of introducing a wonderful breadth of world-class international wine that is paired with an expansive Italian, small plate menu. Our wine list and food menu are thoughtfully prepared and selected by a team that strives to introduce our guests to new, fresh Italian flavors.")

p18 = open('https://table-open-seeds.s3.amazonaws.com/spuntino.jpeg')

r18.photos.attach(io: p18, filename: 'spuntino.jpeg')

r19 = Restaurant.create!(id: 19, 
                        name: "The Shannon Rose of Clifton", 
                        phone_number: "973-284-0200", 
                        operation_hours: "11:00am - 11:30pm", 
                        executive_chef: "N/A", 
                        city: "Clifton", 
                        description: "Before you even step foot into The Shannon Rose Irish Pub, the pub-shop exterior architecture and Gaelic phrases will make you feel like you’ve been transported to Dublin. Inside you'll find four bars, large dining rooms, and a friendly staff. In our traditional pub atmosphere, you’ll feel continents away from America! The Shannon Rose features an abundance of mouthwatering appetizers and traditional Irish fare, including corned beef and cabbage, shepherd’s pie, and Guinness beef stew. You'll want to try them all! The pub is open daily for lunch and dinner. Each pub features over 20 beers on tap, including Guinness, craft beers and your favorite domestics, along with great scotch malts, Irish whiskeys, signature cocktails & wine.")

p19 = open('https://table-open-seeds.s3.amazonaws.com/shannon-rose.jpeg')

r19.photos.attach(io: p19, filename: 'shannon-rose.jpeg')

r20 = Restaurant.create!(id: 20, 
                        name: "Anthony's Coal Fired Pizza", 
                        phone_number: "973-471-2625", 
                        operation_hours: "11:30am - 10:00pm", 
                        executive_chef: "N/A", 
                        city: "Clifton", 
                        description: "The Coal-Fired Difference. Like nothing you've ever tasted, our coal-fired specialties are served straight out of our 800-degree oven; cooked to perfection and bursting with flavor. A delicious combination of always fresh (never frozen), authentic recipes, makes Anthony's a fan favorite. Visit today and experience the craveable coal-fired difference.")

p20 = open('https://table-open-seeds.s3.amazonaws.com/anthonys.jpeg')

r20.photos.attach(io: p20, filename: 'anthonys.jpeg')

r21 = Restaurant.create!(id: 21, 
                        name: "Jamie's Restaurant and Cigar Bar", 
                        phone_number: "973-779-8596", 
                        operation_hours: "11:30am - 10:00pm", 
                        executive_chef: "Michael Leuzzi", 
                        city: "Clifton", 
                        description: "A rare experience: great food, wine and cigars all in an elegant setting. Relax at your table in the dining room, bar or outside deck with everything from chicken wings to Prime steaks.")

p21 = open('https://table-open-seeds.s3.amazonaws.com/jamies-cigar-bar.jpeg')

r21.photos.attach(io: p21, filename: 'jamies-cigar-bar.jpeg')

r22 = Restaurant.create!(id: 22, 
                        name: "Rumba Cubana", 
                        phone_number: "973-777-2999", 
                        operation_hours: "11:00am - 10:00pm", 
                        executive_chef: "N/A", 
                        city: "Clifton", 
                        description: "Rumba Cubana will transport you from New Jersey to Havana without the need of a passport. The experience is sure to feel like a getaway, whether you are on vacation ,or looking for a vacation from your everyday life.")

p22 = open('https://table-open-seeds.s3.amazonaws.com/rumba-cubana.jpeg')

r22.photos.attach(io: p22, filename: 'rumba-cubana.jpeg')

r23 = Restaurant.create!(id: 23, 
                        name: "Shaking Crab", 
                        phone_number: "862-225-9996", 
                        operation_hours: "5:00pm - 10:00pm", 
                        executive_chef: "N/A", 
                        city: "Clifton", 
                        description: "The 8th Shaking Crab brings the flavors of butter, garlic and Cajun spices to the New Jersey area. With a Culinary Institute of America alumni leading the kitchen and an enthusiastic, spice-loving team on the floor, we are ready to shake up Clifton!")

p23 = open('https://table-open-seeds.s3.amazonaws.com/shaking-crab.jpeg')

r23.photos.attach(io: p23, filename: 'shaking-crab.jpeg')

r24 = Restaurant.create!(id: 24, 
                        name: "Chef Yang", 
                        phone_number: "973-777-8855", 
                        operation_hours: "11:30am - 9:00pm", 
                        executive_chef: "N/A", 
                        city: "Clifton", 
                        description: "Chef Yang 46 is a gourmet Chinese restaurant specialized in Sichuan Food. Our chef and staff are striving to bring the best food and service to our community. Featuring a full bar perfect for an after-work cocktail with coworkers and friends. Located on Route 46 in Clifton down the street from Montclair, Bloomfield & Wayne.")

p24 = open('https://table-open-seeds.s3.amazonaws.com/chef-yang.jpeg')

r24.photos.attach(io: p24, filename: 'chef-yang.jpeg')

r25 = Restaurant.create!(id: 25, 
                        name: "Toros Restaurant", 
                        phone_number: "973-772-8032", 
                        operation_hours: "11:00am - 11:00pm", 
                        executive_chef: "N/A", 
                        city: "Clifton", 
                        description: "Toros Restaurant gets its name from the Toros Mountains, the western-most portion of the Himalayas, much of which resides in Turkey. This part of the world is also known for its unique cuisine, due to the equally unique topography.")

p25 = open('https://table-open-seeds.s3.amazonaws.com/toros.jpeg')

r25.photos.attach(io: p25, filename: 'toros.jpeg')

demo_res0 = Resrvation.create!(restaurant_id: 1,
                                guest_id: demo_user.id,
                                guest_count: 1,
                                reservation_date_time: Time.new(2021, 04, 10, 14, 00, 00))

demo_res1 = Resrvation.create!(restaurant_id: 2,
                                guest_id: demo_user.id,
                                guest_count: 2,
                                reservation_date_time: Time.new(2017, 2, 13, 12, 30, 00))

demo_res2 = Resrvation.create!(restaurant_id: 3,
                                guest_id: demo_user.id,
                                guest_count: 1,
                                reservation_date_time: Time.new(2017, 3, 17, 10, 30, 00))

demo_res3 = Resrvation.create!(restaurant_id: 3,
                                guest_id: demo_user.id,
                                guest_count: 1,
                                reservation_date_time: Time.new(2017, 4, 19, 4, 30, 00))

demo_res4 = Resrvation.create!(restaurant_id: 4,
                                guest_id: demo_user.id,
                                guest_count: 4,
                                reservation_date_time: Time.new(2017, 5, 20, 10, 30, 00))

demo_res5 = Resrvation.create!(restaurant_id: 5,
                                guest_id: demo_user.id,
                                guest_count: 10,
                                reservation_date_time: Time.new(2017, 6, 23, 11, 30, 00))

demo_res6 = Resrvation.create!(restaurant_id: 10,
                                guest_id: demo_user.id,
                                guest_count: 4,
                                reservation_date_time: Time.new(2017, 10, 18, 14, 30, 00))

demo_res7 = Resrvation.create!(restaurant_id: 23,
                                guest_id: demo_user.id,
                                guest_count: 12,
                                reservation_date_time: Time.new(2018, 12, 7, 19, 00, 00))

demo_res8 = Resrvation.create!(restaurant_id: 1,
                                guest_id: demo_user.id,
                                guest_count: 6,
                                reservation_date_time: Time.new(2018, 5, 14, 10, 30, 00))

demo_res9 = Resrvation.create!(restaurant_id: 19,
                                guest_id: demo_user.id,
                                guest_count: 4,
                                reservation_date_time: Time.new(2018, 7, 19, 4, 30, 00))

demo_res10 = Resrvation.create!(restaurant_id: 25,
                                guest_id: user1.id,
                                guest_count: 1,
                                reservation_date_time: Time.new(2018, 12, 4, 17, 30, 00))

demo_res11 = Resrvation.create!(restaurant_id: 24,
                                guest_id: user1.id,
                                guest_count: 12,
                                reservation_date_time: Time.new(2018, 8, 8, 12, 30, 00))

demo_res12 = Resrvation.create!(restaurant_id: 23,
                                guest_id: user1.id,
                                guest_count: 10,
                                reservation_date_time: Time.new(2018, 9, 9, 10, 00, 00))

demo_res13 = Resrvation.create!(restaurant_id: 22,
                                guest_id: user1.id,
                                guest_count: 20,
                                reservation_date_time: Time.new(2018, 10, 12, 22, 30, 00))

demo_res14 = Resrvation.create!(restaurant_id: 21,
                                guest_id: user1.id,
                                guest_count: 3,
                                reservation_date_time: Time.new(2019, 12, 17, 8, 30, 00))

demo_res15 = Resrvation.create!(restaurant_id: 20,
                                guest_id: user1.id,
                                guest_count: 1,
                                reservation_date_time: Time.new(2019, 5, 1, 20, 30, 00))

demo_res16 = Resrvation.create!(restaurant_id: 1,
                                guest_id: user2.id,
                                guest_count: 11,
                                reservation_date_time: Time.new(2019, 7, 8, 21, 00, 00))

demo_res17 = Resrvation.create!(restaurant_id: 12,
                                guest_id: user2.id,
                                guest_count: 12,
                                reservation_date_time: Time.new(2019, 1, 19, 16, 30, 00))

demo_res18 = Resrvation.create!(restaurant_id: 13,
                                guest_id: user2.id,
                                guest_count: 13,
                                reservation_date_time: Time.new(2019, 2, 18, 19, 00, 00))

demo_res19 = Resrvation.create!(restaurant_id: 17,
                                guest_id: user2.id,
                                guest_count: 14,
                                reservation_date_time: Time.new(2019, 3, 12, 3, 30, 00))

demo_res20 = Resrvation.create!(restaurant_id: 14,
                                guest_id: user2.id,
                                guest_count: 15,
                                reservation_date_time: Time.new(2020, 8, 10, 4, 30, 00))

demo_res21 = Resrvation.create!(restaurant_id: 15,
                                guest_id: user2.id,
                                guest_count: 16,
                                reservation_date_time: Time.new(2020, 11, 20, 10, 30, 00))

menu1 = Menu.create!(restaurant_id: 1,
                    menu_items: [
                        "Margherita Pizza",
                        "Puttanesca Pizza",
                        "Meat Lovers Pizza",
                        "Broccoli Bri Pizza",
                        "Zingada Pizza",
                        "Quattro Formaggi Rossa Pizza",
                        "Michael's Pizza",
                        "Vodka Pizza"
                    ],
                    drink_items: [])

#Michael's Pasteria no menu photos
#Michael's PAsteria no drink items

menu2 = Menu.create!(restaurant_id: 2,
                    menu_items: [
                        "Lentil Soup",
                        "Fattouch",
                        "Tabouleh",
                        "Falafel Plate",
                        "Hummus",
                        "Babagannouj",
                        "Spinach Pie"
                    ],
                    drink_items: [
                        "Coke, Diet Coke, Sprite",
                        "San Pellegrino Orange",
                        "Bottle of Water",
                        "Loomi (Citrus Drink)",
                        "Fresh Lemonade"
                    ])

m2p1 = open('https://table-open-seeds.s3.amazonaws.com/uncle-momo1.jpg')
m2p2 = open('https://table-open-seeds.s3.amazonaws.com/uncle-momo2.jpg')
m2p3 = open('https://table-open-seeds.s3.amazonaws.com/uncle-momo3.jpg')

menu2.photos.attach(io: m2p1, filename: 'uncle-momo1.jpg')
menu2.photos.attach(io: m2p2, filename: 'uncle-momo2.jpg')
menu2.photos.attach(io: m2p3, filename: 'uncle-momo3.jpg')

menu3 = Menu.create!(restaurant_id: 3,
                    menu_items: [
                        "Chili Shrimp",
                        "Roasted Sweet Potato",
                        "Wedge Salad",
                        "Tuna Tostada",
                        "Butternut Squash",
                        "Maccheroni + Vodka",
                        "Seafood Paella",
                        "Duck Ramen"
                    ],
                    drink_items: [
                        "Tom Collins",
                        "Manhattan",
                        "Mexican Fire Squad",
                        "Pisco Sour",
                        "Smokey Mirrors",
                        "Not Your Grandmas Cider"
                    ])

m3p1 = open('https://table-open-seeds.s3.amazonaws.com/blue-steel1.jpg')
m3p2 = open('https://table-open-seeds.s3.amazonaws.com/blue-steel2.jpg')
m3p3 = open('https://table-open-seeds.s3.amazonaws.com/blue-steel3.jpg')

menu3.photos.attach(io: m3p1, filename: 'blue-steel1.jpg')
menu3.photos.attach(io: m3p2, filename: 'blue-steel2.jpg')
menu3.photos.attach(io: m3p3, filename: 'blue-steel3.jpg')

menu4 = Menu.create!(restaurant_id: 4,
                    menu_items: [
                        "East Coast Oysters",
                        "Little Neck Clams",
                        "Colossal Shrimp Cocktail",
                        "Principessa Tower",
                        "Potatoes, Sausage & Longhots",
                        "Shrimp Arrabiatta",
                        "Calamari Fritti",
                        "Lobster Mac & Cheese",
                        "Meat & Cheese Antipasto Board"
                    ],
                    drink_items: [
                        "Heineken",
                        "Michelob Ultra",
                        "Corona",
                        "Cucumber Ricky",
                        "Margarita el Fuego"
                    ])

#Brix doesn't have any menu photos

menu5 = Menu.create!(restaurant_id: 5,
                    menu_items: [
                        "PEEL ‘N EAT SHRIMP",
                        "CRISPY CALAMARI",
                        "GARLIC BREAD",
                        "MOZZARELLA BRICKS",
                        "VOODOO CHICKEN FINGERS",
                        "NEW ENGLAND CLAM CHOWDER",
                        "JOE’S GARDEN SALAD",
                        "ALL-AMERICAN BURGER"
                    ],
                    drink_items: [
                        "BOOZY IN BORA BORA",
                        "WATERMELON SANGRIA",
                        "STAGE DIVE",
                        "CRANBERRY CRUSH",
                        "JAMAICAN ME THIRSTY"
                    ])

m5p1 = open('https://table-open-seeds.s3.amazonaws.com/joes1.jpg')
m5p2 = open('https://table-open-seeds.s3.amazonaws.com/joes2.jpg')
m5p3 = open('https://table-open-seeds.s3.amazonaws.com/joes3.jpg')

menu5.photos.attach(io: m5p1, filename: 'joes1.jpg')
menu5.photos.attach(io: m5p2, filename: 'joes2.jpg')
menu5.photos.attach(io: m5p3, filename: 'joes3.jpg')

menu6 = Menu.create!(restaurant_id: 6,
                    menu_items: [
                        "Numero Uno",
                        "Prima Pepperoni",
                        "Chicago Meat Market",
                        "Chicago Classic",
                        "Cheese & Tomato",
                        "Chicago Thin Crust",
                        "BBQ Chicken",
                        "Veggie Extravaganza"
                    ],
                    drink_items: [
                        "American Lager",
                        "Porter & Stout",
                        "Beer 101",
                        "American Pale Ale",
                        "Mango Blush Sangria",
                        "Ruby Red Sangria"
                    ])

m6p1 = open('https://table-open-seeds.s3.amazonaws.com/uno1.jpg')
m6p2 = open('https://table-open-seeds.s3.amazonaws.com/uno2.jpg')
m6p3 = open('https://table-open-seeds.s3.amazonaws.com/uno3.jpg')

menu6.photos.attach(io: m6p1, filename: 'uno1.jpg')
menu6.photos.attach(io: m6p2, filename: 'uno2.jpg')
menu6.photos.attach(io: m6p3, filename: 'uno3.jpg')

menu7 = Menu.create!(restaurant_id: 7,
                    menu_items: [
                        "Traditional Guacamole",
                        "Jonah Crab Salad Guacamole",
                        "Beet and Arugula Salad",
                        "Tuna Tostadas",
                        "Elote",
                        "Octopus Ceviche",
                        "Vegetarian Enchiladas"
                    ],
                    drink_items: [

                    ])

m7p1 = open('https://table-open-seeds.s3.amazonaws.com/villalobos1.jpg')
m7p2 = open('https://table-open-seeds.s3.amazonaws.com/villalobos2.jpg')

menu7.photos.attach(io: m7p1, filename: 'villalobos1.jpg')
menu7.photos.attach(io: m7p2, filename: 'villalobos2.jpg')

#Villalobos doesn't have a drink menu
#Villalobos only has two menu photos

menu8 = Menu.create!(restaurant_id: 8,
                    menu_items: [
                        "Veal and Beef Meatball",
                        "PEI Mussels",
                        "House Made Ravioli",
                        "Baby Arugula",
                        "Idaho Rainbow Trout",
                        "Fresh Rigatoni Pasta",
                        "Hand Rolled Ricotta Cavatelli",
                        "Steak Frites"
                    ],
                    drink_items: [

                    ])

m8p1 = open('https://table-open-seeds.s3.amazonaws.com/laboratorio1.jpg')
m8p2 = open('https://table-open-seeds.s3.amazonaws.com/laboratorio2.jpg')
m8p3 = open('https://table-open-seeds.s3.amazonaws.com/laboratorio3.jpg')

menu8.photos.attach(io: m8p1, filename: 'laboratorio1.jpg')
menu8.photos.attach(io: m8p2, filename: 'laboratorio2.jpg')
menu8.photos.attach(io: m8p3, filename: 'laboratorio3.jpg')

menu9 = Menu.create!(restaurant_id: 9,
                    menu_items: [
                        "Half Dozen East Coast Oysters",
                        "Romaine Wedge",
                        "Charred Octopus",
                        "Mascarpone Polenta Fries",
                        "Ricotta Gnocchi",
                        "Papa Mac's Cavatelli",
                        "Squid Ink Pappardelle",
                        "Buttermilk Baked Chicken"
                    ],
                    drink_items: [

                    ])

m9p1 = open('https://table-open-seeds.s3.amazonaws.com/fascino1.jpg')
m9p2 = open('https://table-open-seeds.s3.amazonaws.com/fascino2.jpg')
m9p3 = open('https://table-open-seeds.s3.amazonaws.com/fascino3.jpg')

menu9.photos.attach(io: m9p1, filename: 'fascino1.jpg')
menu9.photos.attach(io: m9p2, filename: 'fascino2.jpg')
menu9.photos.attach(io: m9p3, filename: 'fascino3.jpg')

menu10 = Menu.create!(restaurant_id: 10,
                    menu_items: [
                        "Hummus",
                        "Pumpkin Muhammara",
                        "Babaganoush",
                        "Beet Falafel",
                        "Sheperd's Salad",
                        "In House Smoked Salmon",
                        "Medi Omelet",
                        "Z-Premium Medi Breakfast Platter"
                    ],
                    drink_items: [
                        "Blend for Sangria",
                        "Fresh Squeezed (FSQ) Orange Juice",
                        "Mimosa (w/ FSQ OJ)",
                        "Montclair Orange: FSQ OJ, Cinnamon, Nutmeg",
                        "POG: Passion Fruit, FSQ 0J, Guava"
                    ])

m10p1 = open('https://table-open-seeds.s3.amazonaws.com/zeugma1.jpg')
m10p2 = open('https://table-open-seeds.s3.amazonaws.com/zeugma2.jpg')
m10p3 = open('https://table-open-seeds.s3.amazonaws.com/zeugma3.jpg')

menu10.photos.attach(io: m10p1, filename: 'zeugma1.jpg')
menu10.photos.attach(io: m10p2, filename: 'zeugma2.jpg')
menu10.photos.attach(io: m10p3, filename: 'zeugma3.jpg')

menu11 = Menu.create!(restaurant_id: 11,
                    menu_items: [
                        "French Onion Soup",
                        "Crispy Oysters + Harissa + Tobiko",
                        "3 Spicy BBQ Pork Lollipop Wings",
                        "Bavarian Pretzel + Beer Cheese",
                        "Salumi & Cheeses*",
                        "Chicken Paillard*",
                        "Burrata Ravioli",
                        "Cannelloni"
                    ],
                    drink_items: [
                        "The Ginger Snap",
                        "The Man-Garita",
                        "The Hop-A-Long",
                        "The Sangria on Tap",
                        "The Sazerac",
                        "Blueberry Lemonade",
                        "It's Fa Har"
                    ])

#The Crosby has no photos

menu12 = Menu.create!(restaurant_id: 12,
                    menu_items: [
                        "American",
                        "Buckaroo",
                        "El Matador",
                        "Paul Bunyan",
                        "So Cal",
                        "Flamin' Bacon",
                        "Buttermilk Buffalo",
                        "Triple Decker BLT",
                        "Santa Fe"
                    ],
                    drink_items: [
                        "Organic Unsweetened Iced Teas",
                        "Organic Lemonades",
                        "Be My Milkshake",
                        "Cola",
                        "Ginger Beer (10oz)",
                        "Black Cherry"
                    ])

m12p1 = open('https://table-open-seeds.s3.amazonaws.com/bareburger1.jpg')
m12p2 = open('https://table-open-seeds.s3.amazonaws.com/bareburger2.jpg')
m12p3 = open('https://table-open-seeds.s3.amazonaws.com/bareburger3.jpg')

menu12.photos.attach(io: m12p1, filename: 'bareburger1.jpg')
menu12.photos.attach(io: m12p2, filename: 'bareburger2.jpg')
menu12.photos.attach(io: m12p3, filename: 'bareburger3.jpg')

menu13 = Menu.create!(restaurant_id: 13,
                    menu_items: [
                        "Croquetas de Jamon",
                        "Pulpo a la Plancha",
                        "Callos Guisados aI Estilo Espanol",
                        "Gambas al Ajillo",
                        "Almejas en Salsa Verde",
                        "Salpicon de Mariscos y Aguacate",
                        "Tabla de Iberlca",
                        "Pulpo a la Gallega",
                        "Mi-Cult Foie Gras Casero"
                    ],
                    drink_items: [
                        "Double Espresso",
                        "Double Decaf Espresso",
                        "Decaf Cappuccino",
                        "Caffe Latte",
                        "Diet Coke",
                        "Cranberry",
                        "Cortadito"
                    ])

m13p1 = open('https://table-open-seeds.s3.amazonaws.com/sayola1.jpg')
m13p2 = open('https://table-open-seeds.s3.amazonaws.com/sayola2.jpg')
m13p3 = open('https://table-open-seeds.s3.amazonaws.com/sayola3.jpg')

menu13.photos.attach(io: m13p1, filename: 'sayola1.jpg')
menu13.photos.attach(io: m13p2, filename: 'sayola2.jpg')
menu13.photos.attach(io: m13p3, filename: 'sayola3.jpg')

menu14 = Menu.create!(restaurant_id: 14,
                    menu_items: [
                        "House Popped Corn",
                        "Alto Fries",
                        "Warm Bavarian Pretzle",
                        "Caramel Apple Fondue",
                        "Mc Burger Sliders",
                        "Ahi Tuna Tartare",
                        "Avocado Dip",
                        "Mc Burger Sliders",
                        "Raclette Fondue"
                    ],
                    drink_items: [
                        "Rose Sangria",
                        "Fallin' Slowly",
                        "Wanna Lackawanna",
                        "Paloma",
                        "Cider I Knew Her Well",
                        "Miller Lite, Milwaukee, Wisconsin, ABV",
                        "Magnify Brewing House Rules IPA",
                        "Bolero Snort Orange Creamsicle IPA"
                    ])

m14p1 = open('https://table-open-seeds.s3.amazonaws.com/alfo1.jpg')
m14p2 = open('https://table-open-seeds.s3.amazonaws.com/alfo2.jpg')
m14p3 = open('https://table-open-seeds.s3.amazonaws.com/alfo3.jpg')

menu14.photos.attach(io: m14p1, filename: 'alfo1.jpg')
menu14.photos.attach(io: m14p2, filename: 'alfo2.jpg')
menu14.photos.attach(io: m14p3, filename: 'alfo3.jpg')

menu15 = Menu.create!(restaurant_id: 15,
                    menu_items: [
                        "Brazilian Sausage",
                        "Shrimp in Garlic Sauce",
                        "Clams in Sauce",
                        "Fried Pork with Yucca",
                        "Brazilian Fried Chicken",
                        "Octopus Salad",
                        "Chicken Parmigiana",
                        "Grilled Chicken Marsala",
                        "Pork Chops 3"
                    ],
                    drink_items: [
                        "Guarana",
                        "Lg. Pellegrino",
                        "Espresso",
                        "Soda",
                        "Cappuccino",
                        "Cafezinho"
                    ])

m15p1 = open('https://table-open-seeds.s3.amazonaws.com/brasil-paradise1.jpg')
m15p2 = open('https://table-open-seeds.s3.amazonaws.com/brasil-paradise2.jpg')
m15p3 = open('https://table-open-seeds.s3.amazonaws.com/brasil-paradise3.jpg')

menu15.photos.attach(io: m15p1, filename: 'brasil-paradise1.jpg')
menu15.photos.attach(io: m15p2, filename: 'brasil-paradise2.jpg')
menu15.photos.attach(io: m15p3, filename: 'brasil-paradise3.jpg')

menu16 = Menu.create!(restaurant_id: 16,
                    menu_items: [
                        "Sweet Fennel Sausage",
                        "Arancini",
                        "Arugula",
                        "Di Cesare",
                        "Di Barbabietole",
                        "Caprese",
                        "Chicken Milanese",
                        "Veal Milanese",
                        "Broccoli Rabe & Sausage"
                    ],
                    drink_items: [

                    ])

m16p1 = open('https://table-open-seeds.s3.amazonaws.com/bella-luce1.jpg')
m16p2 = open('https://table-open-seeds.s3.amazonaws.com/bella-luce2.jpg')
m16p3 = open('https://table-open-seeds.s3.amazonaws.com/bella-luce3.jpg')

menu16.photos.attach(io: m16p1, filename: 'bella-luce1.jpg')
menu16.photos.attach(io: m16p2, filename: 'bella-luce2.jpg')
menu16.photos.attach(io: m16p3, filename: 'bella-luce3.jpg')

menu17 = Menu.create!(restaurant_id: 17,
                    menu_items: [
                        "Mini Rice Balls",
                        "Sautéed Spinach",
                        "Steamers",
                        "Garlic Bread",
                        "Prince Edward Mussels",
                        "Pasta Fagioli",
                        "Stacciatella Romana",
                        "Caesar Salad"
                    ],
                    drink_items: [

                    ])

menu18 = Menu.create!(restaurant_id: 18,
                    menu_items: [
                        "Tomato & Basil",
                        "Gorgonzola, Apple & Walnut",
                        "Grilled Shrimp Scampi",
                        "Seared Tuna",
                        "Wild Mushroom",
                        "Prosciutto Mozzarella",
                        "Arancini",
                        "Caesar",
                        "Spuntino Ribeye"
                    ],
                    drink_items: [
                        "Peroni Pale Lager, Lombardy, Italy, ABV 4.7%",
                        "Ghost Hawk Brewing Rotating Special, Clifton, NJ",
                        "Blue Moon Belgium White, Colorado, USA, ABV 5.4%",
                        "Evil Twin Low Life Pilsner, Brooklyn, NY, ABV 5.5%",
                        "Westbrook Gose, Mount Pleasant, SC, ABV 4%",
                        "Chardonnay, Laguna '15",
                        "Red Blend, Charles & Charles '13",
                        "Malbec Blend, Norton Privada '16",
                        "Pinot Grigio, La Vite, Veneto"
                    ])

m18p1 = open('https://table-open-seeds.s3.amazonaws.com/spuntino1.jpg')
m18p2 = open('https://table-open-seeds.s3.amazonaws.com/spuntino2.jpg')
m18p3 = open('https://table-open-seeds.s3.amazonaws.com/spuntino3.jpg')

menu18.photos.attach(io: m18p1, filename: 'spuntino1.jpg')
menu18.photos.attach(io: m18p2, filename: 'spuntino2.jpg')
menu18.photos.attach(io: m18p3, filename: 'spuntino3.jpg')

menu19 = Menu.create!(restaurant_id: 19,
                    menu_items: [
                        "Corned Beef Spring Rolls",
                        "Bacon Cheddar Boxty",
                        "Fried Cheese Curds",
                        "Pulled Pork Poutine",
                        "Shannon Rose",
                        "Meatless Gardein",
                        "Grilled Chicken Caesar Salad**",
                        "Corned Beef & Cabbage",
                        "Irish Breakfast"
                    ],
                    drink_items: [
                        "Weyerbacher Blithering Idiot",
                        "Killian Irish Red",
                        "Dogfish Head 60 Min",
                        "Deschutes Fresh Squeezed",
                        "Brooklyn Bel Air",
                        "Allagash White",
                        "Paulner Hefe Weiss",
                        "Pabst Blue Ribbon"
                    ])

m19p1 = open('https://table-open-seeds.s3.amazonaws.com/shanon-rose1.jpg')
m19p2 = open('https://table-open-seeds.s3.amazonaws.com/shanon-rose2.jpg')
m19p3 = open('https://table-open-seeds.s3.amazonaws.com/shanon-rose3.jpg')

menu19.photos.attach(io: m19p1, filename: 'shanon-rose1.jpg')
menu19.photos.attach(io: m19p2, filename: 'shanon-rose2.jpg')
menu19.photos.attach(io: m19p3, filename: 'shanon-rose3.jpg')

menu20 = Menu.create!(restaurant_id: 20,
                    menu_items: [
                        "Lunch Size Traditional Cheese Pizza",
                        "Lunch Size Specialty Pizza",
                        "Coal Oven Roasted Chicken Wings",
                        "Eggplant Marino",
                        "Pork Ribs with Vinegar Peppers",
                        "Broccoli Rabe & Sausage",
                        "Traditional Calzone",
                        "Fresh Mozzarella, Sliced Tomato & Basil",
                        "The Square Margherita"
                    ],
                    drink_items: [
                        "Espresso",
                        "Cappuccino"
                    ])

m20p1 = open('https://table-open-seeds.s3.amazonaws.com/anthonys1.jpg')

menu20.photos.attach(io: m20p1, filename: 'anthonys1.jpg')

menu21 = Menu.create!(restaurant_id: 21,
                    menu_items: [
                        "Buffalo Wings",
                        "Mozzarella Sticks",
                        "Chicken Fingers",
                        "Shell Steak Salad",
                        "Caesar Salad with Shrimp",
                        "Sirloin Burger",
                        "Gnocchi Bolognese",
                        "Chicken Scarparello",
                        "Veal Francese"
                    ],
                    drink_items: [

                    ])

m21p1 = open('https://table-open-seeds.s3.amazonaws.com/jamies1.jpg')
m21p2 = open('https://table-open-seeds.s3.amazonaws.com/jamies2.jpg')
m21p3 = open('https://table-open-seeds.s3.amazonaws.com/jamies3.jpg')

menu21.photos.attach(io: m21p1, filename: 'jamies1.jpg')
menu21.photos.attach(io: m21p2, filename: 'jamies2.jpg')
menu21.photos.attach(io: m21p3, filename: 'jamies3.jpg')

menu22 = Menu.create!(restaurant_id: 22,
                    menu_items: [
                        "Picadillo a Caballo",
                        "Un Poquito de Todo",
                        "El Pescador",
                        "Paella Rumbera",
                        "Ropa Vieja",
                        "Churrasco Rumbero",
                        "Bistec de Palomilla",
                        "Pechuga de Pollo Empanizada",
                        "Trio de Empanadas"
                    ],
                    drink_items: [
                        "Coca Cola",
                        "Diet Coke",
                        "Fanta Orange",
                        "Materva",
                        "Snapple Iced Tea"
                    ])

menu23 = Menu.create!(restaurant_id: 23,
                    menu_items: [
                        "Whole Dungeness Crab",
                        "Alaskan King Crab Legs",
                        "Argentinian Shrimp",
                        "Crawfish Live Mar - Jun",
                        "Snow Crab Legs",
                        "Whole Lobster",
                        "Blue Crab",
                        "Clams",
                        "Mussels"
                    ],
                    drink_items: [

                    ])

menu24 = Menu.create!(restaurant_id: 24,
                    menu_items: [
                        "Asparagus w. Scallion Oil",
                        "Sliced Pork Belly w. Fresh Garlic*",
                        "Bean Curd Mixed w. Chopped Scallion",
                        "Chill Braised Eggplant**",
                        "Sliced Beef w. Cilantro*",
                        "Steamed or Pan Fried (6)",
                        "Little Juicy Pork Buns (6)",
                        "Crispy Chicken Wings (4)",
                        "Roast Pork Bun (2)"
                    ],
                    drink_items: [

                    ])

m24p1 = open('https://table-open-seeds.s3.amazonaws.com/chef-yang1.jpg')
m24p2 = open('https://table-open-seeds.s3.amazonaws.com/chef-yang2.jpg')
m24p3 = open('https://table-open-seeds.s3.amazonaws.com/chef-yang3.jpg')

menu24.photos.attach(io: m24p1, filename: 'chef-yang1.jpg')
menu24.photos.attach(io: m24p2, filename: 'chef-yang2.jpg')
menu24.photos.attach(io: m24p3, filename: 'chef-yang3.jpg')

menu25 = Menu.create!(restaurant_id: 25,
                    menu_items: [
                        "Pirzola & Sis (Lamb Chops & Shish Kebab)",
                        "Karides Sote (Shrimp Saute)",
                        "Levrek (Mediterranean Branzino)",
                        "Tilapia (St. Peter's Fish)",
                        "Yogurtlu Doner (Doner with Yogurt)",
                        "Yogurtlu Adana (Adana Kebab with Yogurt)",
                        "Toros Chicken Salad",
                        "Has Has Kebab",
                        "Toros Karisik (Toros Combination Plate)"
                    ],
                    drink_items: [
                        "Seabreeze",
                        "Cosmopolitan",
                        "Strawberry Daiquiri",
                        "Apple Martini",
                        "Pomegranate Martini",
                        "Tequila Sunrise",
                        "Long Island Ice Tea"
                    ])

m25p1 = open('https://table-open-seeds.s3.amazonaws.com/toros1.jpg')
m25p2 = open('https://table-open-seeds.s3.amazonaws.com/toros2.jpg')
m25p3 = open('https://table-open-seeds.s3.amazonaws.com/toros3.jpg')

menu25.photos.attach(io: m25p1, filename: 'toros1.jpg')
menu25.photos.attach(io: m25p2, filename: 'toros2.jpg')
menu25.photos.attach(io: m25p3, filename: 'toros3.jpg')