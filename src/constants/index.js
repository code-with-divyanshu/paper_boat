import { IoLogIn } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { FaStar, FaLeaf, FaHeart } from "react-icons/fa";

export const publicLinks = [
  { id: 1, link: "/", name: "Home" },
  { id: 2, link: "/about", name: "About" },
  { id: 3, link: "/drinks", name: "Drinks" },
  { id: 4, link: "/getintouch", name: "Get in touch" },
];

export const authLinks = [
  { id: 5, link: "/login", name: "Login", icon: IoLogIn },
  { id: 6, link: "/signup", name: "Sign Up", icon: FaUserPlus },
];

// hero section data

export const heroProductsData = [
  {
    name: "Traditional Drinks",
    accentColor: "primary",
    image: "/images/treditional_tile.png",
    description: "Authentic traditional flavors",
  },
  {
    name: "Sip and Snack",
    accentColor: "primary",
    description: "Perfect snacking companion",
    image: "images/sip_snack_tile.png",
  },
  {
    name: "Vitamin D Drink",
    accentColor: "primary",
    image: "/images/vitamin_tile.png",
    description: "Healthy vitamin enriched drink",
  },
  {
    name: "Low Sugar",
    accentColor: "primary",
    description: "Health conscious choice",
    image: "images/low_sugar_tile.png",
  },
  {
    name: "Fruit Juices",
    accentColor: "primary",
    description: "Fresh fruit extracts",
    image: "images/swing_tile.png",
  },
  {
    name: "Coconut Water",
    accentColor: "primary",
    image: "images/Coconut_Water.png",
    description: "Natural coconut refreshment",
  },
];

// home product section data

export const productsHomeData = [
  {
    id: 1,
    name: "Traditional Drinks",
    bgcolor: "from-[#849C3A]",
    image: "/images/treditional_tile.png",
    description: "Authentic traditional flavors",
    price: "₹25-35",
    tag: "Heritage",
    icon: FaStar,
    tagColor: "bg-primary",
  },
  {
    id: 2,
    name: "Sip and Snack",
    bgcolor: "from-[#B1506B]",
    description: "Perfect snacking companion",
    image: "/images/sip_snack_tile.png",
    price: "₹30-40",
    tag: "Combo",
    icon: FaHeart,
    tagColor: "bg-brown",
  },
  {
    id: 3,
    name: "Vitamin D Drink",
    bgcolor: "from-[#849C3A]",
    image: "/images/vitamin_tile.png",
    description: "Healthy vitamin enriched drink",
    price: "₹35-45",
    tag: "Healthy",
    icon: FaLeaf,
    tagColor: "bg-primary",
  },
  {
    id: 4,
    name: "Low Sugar",
    bgcolor: "from-[#B1506B]",
    description: "Health conscious choice",
    image: "/images/low_sugar_tile.png",
    price: "₹28-38",
    tag: "Diet",
    icon: FaHeart,
    tagColor: "bg-brown",
  },
  {
    id: 5,
    name: "Fruit Juices",
    bgcolor: "from-[#B1506B]",
    description: "Fresh fruit extracts",
    image: "/images/swing_tile.png",
    price: "₹25-35",
    tag: "Fresh",
    icon: FaStar,
    tagColor: "bg-primary",
  },
  {
    id: 6,
    name: "Coconut Water",
    bgcolor: "from-[#849C3A]",
    image: "/images/Coconut_Water.png",
    description: "Natural coconut refreshment",
    price: "₹20-30",
    tag: "Natural",
    icon: FaLeaf,
    tagColor: "bg-brown",
  },
];

// home section slide data component

export const homeSlideData = [
  {
    id: 1,
    imageUrl: "../images/aam.jpg",
    alt: "aam",
  },
  {
    id: 2,
    imageUrl: "../images/aam_panna.jpg",
    alt: "aam_panna",
  },
  {
    id: 3,
    imageUrl: "../images/aamras.jpg",
    alt: "aamras",
  },
  {
    id: 4,
    imageUrl: "../images/coconut_water.jpg",
    alt: "coconut_water",
  },
  {
    id: 5,
    imageUrl: "../images/last_day_at_nani.jpg",
    alt: "last_day_at_nani",
  },
  {
    id: 6,
    imageUrl: "../images/guava.jpg",
    alt: "guava",
  },
  {
    id: 7,
    imageUrl: "../images/anar.jpg",
    alt: "anar",
  },
  {
    id: 8,
    imageUrl: "../images/first_guava.jpg",
    alt: "first_guava",
  },
  {
    id: 9,
    imageUrl: "../images/anaar_seeds.jpg",
    alt: "anaar_seeds",
  },
];

//  about page timeline data

export const timeline = [
  {
    year: "2009",
    title: "Hector Beverages",
    description:
      "is founded in India by Neeraj Kakkar, James Nuttall, Suhas Misra, and Neeraj Biyani",
    image: "/images/bg-2009.png",
  },
  {
    year: "2011",
    title: "Manesar Plant operations start",
    description:
      "'Amidst the serene landscapes of Haryana, Manesar!' said young Kakkar",
    image: "/images/2011.png",
  },
  {
    year: "2013",
    title: "Oppa Paper Boat Style!",
    description: "Launch our range of traditional drinks in major cities",
    image: "/images/2013.png",
  },
  {
    year: "2015",
    title: "Next Sip Station- Mysuru!",
    description: "We established a sparkling new plant in Mysuru, Karnataka.",
    image: "/images/2015.png",
  },
  {
    year: "2018",
    title: "Swinging into juicy fun",
    description:
      "We launched a new Paper Boat Swing in six fan-favourite flavours ",
    image: "/images/2018.png",
  },
  {
    year: "2022",
    title: "Lighten up!",
    description:
      "We launched  Sparkling Water- a range of sweet drinks with zero sugar and no calories, just sparkly fun!",
    image: "/images/2022.png",
  },
  {
    year: "2024",
    title: "Loco for Nata de Coco",
    description: "Team Paper Boat proudly presents our Nata de Coco range",
    image: "/images/2024.png",
  },
];

// about section company value data

export const companyValues = [
  {
    icon: "🌱",
    title: "Sustainability",
    description: "Committed to eco-friendly practices and sustainable sourcing",
  },
  {
    icon: "🏺",
    title: "Tradition",
    description: "Preserving authentic Indian flavors and cultural heritage",
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "Continuously evolving while staying true to our roots",
  },
  {
    icon: "❤️",
    title: "Quality",
    description: "Uncompromising quality in every product we create",
  },
];

//  drink page data

export const ProductDatacategories = [
  {
    id: 1,
    name: "Traditional Drinks",
    bgcolor: "#bfd380",
    products: [
      {
        id: 1,
        name: "Aamras",
        price: 85,
        image: "/images/treditional_tile.png",
        description:
          "The one treasure that easily transforms Indian summer into the festivity that it is, is Aamras. An honest treat for an honest day's work. A silk-esque ale cascading down your throat - Soothing, serenading and more importantly, lingering. Sometimes enveloped in rotis, sometimes guzzled with milk but the best way to go about fruity Aamras is to have it directly as is. The way the ancients intended. Without frills or hassles. Ah! One just cannot help but submit to the tasty tyranny of the one true king of the fruit realm. All hail the mango! Long live the king!",
      },
      {
        id: 2,
        name: "Chili Guava",
        price: 75,
        image: "/images/chilli-guava-final.png",
        description:
          "The restless few minutes before the school bell. The thap-thap-thap of your black shoes running down the school steps. The old school guard pushing open the gate. You rushing to the aunty with her basket of fresh guava fruit perched on her cycle so that you can partake in this glorious after-school feast with both hands. Our chilli guava is like we took that memory, squished it, and put it in a pack just for you.",
      },
      {
        id: 3,
        name: "Jaljeera",
        price: 70,
        image: "/images/trad_jaljeera_200.png",
        description:
          "A hot summer day is magnified tenfold in India. The Sun, once a trusted ally, is now a vengeful god charring its antlike populace. Don't worry, he'll calm down in a while. But till he does, what respite does a mortal have against the might of distant nuclear fusion of a main-sequence star that constantly turns hydrogen into helium? (What? We paid attention in school.) The answer descends from the heavens in the form of the beloved Jaljeera drink!",
      },
      {
        id: 4,
        name: "Aam Panna",
        price: 80,
        image: "/images/aampanna-final.png",
        description:
          "The pre-vacation between your actual summer vacation and the last day of the final exams. The buffer time it took for your teachers to grade you, to graduate you into another class. That was the window of The Kairi. There was something poetic about raw, unfledged mangoes enticing our fully formed taste buds. It was another fruit altogether. Mixed with spices and mint and served cold, almost inversely to the soaring temperatures outside. You gushed it down in a single gulp. But the moment lingered forever. Relive those memories and unforgettable taste yet again with Paper Boat Aam Panna.",
      },
      {
        id: 5,
        name: "Santra",
        price: 65,
        image: "/images/santra-final.png",
        description:
          "Remember the little window between breakfast and recess? That uncalled-for echo of 'krrrr' from our stomachs while we were still paying attention in math class (one can only try) It is only then we understood the true value of oranges packed in the blue Tupperware dabba (Ma's prized possession). Day after day, we'd carry this powerhouse of vitamins with us and let its juicy freshness take over during those small gaps between the classes and keep us well-fed till lunch break a few hours later. It's been many moons now, but even to this day, Santra transports me to the sweet old days!",
      },
      {
        id: 6,
        name: "Coconut Water",
        price: 90,
        image: "/images/coconut-water-final.png",
        description:
          "The sweet taste of nature's coolest hydrant is reminiscent of many evenings at the beach. We'd have just enough money for one treat. After a sweaty evening filled with activities like running and playing ball, the whole bunch of cousins, the elder ones being in charge of course, would invariably end up at their favourite nariyal paaniwalla who would help us pick the sweetest coconuts (it's still a mystery to me how they can always tell those apart). Years later, we still pick a nariyal pani to cool down on a hot summer day says a lot about our allegiance to this natural coolant. Sadly there's not as much playtime anymore but as long as there's coconut juice, all we have to do is shut our eyes and be transported, giggles, laughter and all.",
      },
    ],
  },
  {
    id: 2,
    name: "Sip and Snack",
    bgcolor: "#ffd6e2",
    products: [
      {
        id: 1,
        name: "Lychee Nata De Coco",
        price: 120,
        image: "/images/sip_snack_tile.png",
        description:
          "We know it's hard workDive into the exotic with Paper Boat Nata de Coco Drink, where lychee meets the delightful chewiness of Nata de Coco. Each sip is a tropical escape, a harmony of sweetness and texture that transports you to lychee orchards with every gulp. So, shake up your refreshment routine and savour the lychee-infused bliss in every drop!",
      },
      {
        id: 2,
        name: "Orange Nata De Coco",
        price: 115,
        image: "/images/nata-orange.png",
        description:
          "Citrusy zest meets the chewy delight in our Orange Nata de Coco Drink. Unleash the vibrant flavour of oranges blended seamlessly with the jelly-like goodness of Nata de Coco. It's a zesty dance on your taste buds, a symphony of citrus notes and a burst of texture in every sip. Quench your thirst with the refreshing twist of orange, and let each gulp be a journey into citrus paradise!",
      },
      {
        id: 3,
        name: "Pomegranate with Sabja Seeds",
        price: 110,
        image: "/images/nata-pomegranate.png",
        description:
          "Experience the vibrant burst of flavour with a Pomegranate and Sabja Seeds Drink. A tangy pomegranate fruit drink, enhanced with the pleasant bite of sabja seeds, creates the coolest drink. Enjoy the refreshing taste of this unique blend ñ a perfect companion for moments of pure refreshment. Cheers to a flavourful sip!",
      },
      {
        id: 4,
        name: "Mixed Fruit with Sabja Seeds",
        price: 105,
        image: "/images/nata-mixed-fruit.png",
        description:
          "Indulge in the goodness of a Mixed Fruit Sabja Seeds Drink ñ a delightful blend that combines the refreshing taste of mixed fruits with the unique texture of sabja seeds. It's a sweet experience that adds a twist to your beverage routine. So, take a sip, bite and savour the goodness with every gulp!",
      },
    ],
  },
  {
    id: 3,
    name: "Vitamin D Drinks",
    bgcolor: "#ffdb8a",
    products: [
      {
        id: 1,
        name: "Apple Vit D",
        price: 95,
        image: "/images/vitd-apple.png",
        description:
          "An apple a day keeps the doctor away might just be the main mantra of the Indian parent's handbook, no? Which kid wasn't raised with sermons on how one must eat apples for health? It's a good thing that this biblical fruit is juicy, tasty and fulfilling or else we really have a bone to pick with our parents. Growing up we had a family joke, that no matter what time of the day you tell mom youre hungry she has a standard response, apple khaa lo. In fact, we reached a point where we would ask her just for this automated response and then giggle away to glory. In our household, apples were not just the breakfast fruit, however, because we made warm apple pies and trifle pudding with apple pieces regularly. The unsung hero of fruits, it truly was versatile and is the family's go-to snack option to this day!",
      },
      {
        id: 2,
        name: "Mixed Fruit Vit D",
        price: 100,
        image: "/images/vitd-fixed-fruit.png",
        description:
          "Our evening rituals included tightly clutching onto Daduís finger and walking to fruit vendors in the mandi. The hustle and bustle of fellow shoppers, the hue and cry of the sellers and between all of the clamour there were the fruits. Freshest fruits of the season in all shapes and sizes, all colours and textures. We'd authoritatively point out to fruits that we would want to have that day in our juice. From seasonal fruits to the usual suspects, we were initiated early into the magical, delicious world of nature. This fruitilicious activity was thrilling and fulfilling, all at once. Amongst the taste of fresh apples, bananas, guavas, oranges, and pears are memories that can outdo these fresh fruits in the sweetness department.",
      },
      {
        id: 3,
        name: "Lychee vit D",
        price: 105,
        image: "/images/vitd-lychee.png",
        description:
          "Every year the roads are lined with little bulbs in shades of red and pink. They are a beautiful sight and hard to miss! Every year we wait patiently for these decorated streets and we beg our parents for a taste of these plump, juicy, flavourful fruits. Oh, the love for lychee! We do know where it began and we do not see an end. This fruit is as sweet as they come and as delicious as it gets. We've taken its best bits and put it in a drink, cutely packaged for you to slurp on. No more craving for nature's best treat!",
      },
      {
        id: 4,
        name: "Orange",
        price: 85,
        image: "/images/vitd-orange.png",
        description:
          "Remember the little window between breakfast and recess? That uncalled-for echo of 'krrrr' from our stomachs while we were still paying attention in the math class (one can only try) It is only then we understood the true value of oranges packed in the blue Tupperware dabba (Maís prized possession). Day after day, we'd carry this powerhouse of Vitamins with us and let its juicy freshness take over during those small gaps between the classes and keep us well-fed till lunch break a few hours later. It has been many moons now, but even to this day, a bit of this citrus wonder transports me to a carefree time where Ma packed thoughtful dabbas and we actually got breaks to replenish ourselves. Ah, the sweet old days!",
      },
      {
        id: 5,
        name: "Alphonso",
        price: 110,
        image: "/images/vitamin_tile.png",
        description:
          "Turn your day around with Paper Boat Alphonso Mango Juice! All it takes is a glass and a bit of ice. Delicious and refreshing - there's no other way to describe it. This juice is a perfect delicious summer drink. It contains a handpicked and delicious selection of the finest quality ingredients. Let your taste buds sink with a delicious burst of mango flavour. So order online today and share this tasty drink with your loved ones.",
      },
    ],
  },
  {
    id: 4,
    name: "Low Sugar",
    bgcolor: "#cd9aa4",
    products: [
      {
        id: 1,
        name: "Anar Low Sugar",
        price: 125,
        image: "/images/low_sugar_tile.png",
        description:
          "We know it's hard work to get Anar to open up but someone had to do it, so we did! And it is worth all that it takes to reach the centre! Take a sip of this delicious fruit any time of year and we promise you, it will taste just as great. Red beads of pomegranate, juiced and packaged just for you! This low-sugar drink is all about making you feel your best!",
      },
      {
        id: 2,
        name: "Jamun Low Sugar",
        price: 120,
        image: "/images/jamun-ls.png",
        description:
          "We took a nostalgic trip back to those summer days and brought back a taste of childhood. Remember Jamun? The fruit that painted our tongues purple and filled our hearts with joy. Now, we've bottled that goodness without a trace of sugar! Perfect for your low-calorie goals or just keeping things light.",
      },
    ],
  },
  {
    id: 5,
    name: "Dairy (milk based)",
    bgcolor: "#e1bee7",
    products: [
      {
        id: 1,
        name: "Thandai",
        price: 140,
        image: "/images/dairy_tile.png",
        description:
          "Can there be a Tom without a Jerry, a Betaal without a Vikram, or a picnic without Antakshari? Now imagine a Holi without Thandai. Unthinkable, no? Thandai had its humble beginnings in the oldest by-lanes of Lucknow and Varanasi, but it is perhaps the first ever phenomenon to have gone viral. Chugging a few glasses before bounding off with them pichkaaris or hurling water balloons and dunking your friends in water tanks, a gulp of this even today brings back the colourful mischief. Roll out the red carpet—Thandai takes home the award for both taste and health benefits!",
      },
    ],
  },
  {
    id: 6,
    name: "Fruit Juices",
    bgcolor: "#efb9c3",
    products: [
      {
        id: 1,
        name: "Mixed Fruit",
        price: 90,
        image: "/images/mixed-fruit-mf.png",
        description:
          "A wise fruit once said, 'Let's get the band back together'- and since then, the harmonies have been going strong! A delightful medley of fruit-tastic fun that's enriched with Vitamin D- Paper Boat Swing Mixed Fruit!",
      },
      {
        id: 2,
        name: "Pomegranate",
        price: 95,
        image: "/images/swing_tile.png",
        description:
          "The ruby red seeds that glistened in the summer sun, the fruit that outshone its peers - behold the pomegranate! Delight in that same scarlet splendour with Paper Boat Swing Pomegranate - a juicy drink enriched with vitamin D",
      },
      {
        id: 3,
        name: "Lychee",
        price: 100,
        image: "/images/lychee-mf.png",
        description:
          "Lakshya, London, Lion and errr... Lychee! But Lychee is more than just our saviour in Name place animal thing - it's also the answer to our summer cravings. A refreshing sip enriched with vitamin D- it's Paper Boat Swing Lychee!",
      },
      {
        id: 4,
        name: "Mango",
        price: 105,
        image: "/images/mango-mf.png",
        description:
          "Craving mango? Its delicious golden-yellow juice and sweet taste? Look no further, we've got just the thing. Refreshing, just the right amount of sweet - an anytime-anywhere drink just for you. With the added benefit of vitamin D, you can enjoy mango's sublime flavour and sluuuuuurp your way to good health and a great time!",
      },
      {
        id: 5,
        name: "Guava",
        price: 85,
        image: "/images/guave-mf.png",
        description:
          "Everyone loves guava. You know the feeling of taking a succulent bite into a soft guava? Now take that feeling and package it there you have it, that's exactly how Swing Guava was made. That and the added goodness of vitamin D makes this a tasty, healthy treat. Made with delicious guava, this drink is a must-have refresher for days when you need that extra boost!",
      },
      {
        id: 6,
        name: "Orange",
        price: 80,
        image: "/images/orange-mf.png",
        description:
          "A fruit so tasty that they could never come up with a rhyming word for it, a bane for the copywriter but a blessing for everyone else! That's the legendary status orange (rightfully) holds in the world of fruits. Bringing the same citrusy succulence in liquid form with Swing Orange Fruit Drink now enriched with vitamin D. Orange you glad we made this drink?",
      },
    ],
  },
  {
    id: 7,
    name: "Other Products",
    bgcolor: "#76d1a7",
    products: [
      {
        id: 1,
        name: "Coconut Water",
        price: 95,
        image: "/images/Coconut_Water.png",
        description:
          "The sweet taste of nature's coolest hydrant is reminiscent of many evenings at the beach. We'd have just enough money for one treat. After a sweaty evening filled with activities like running and playing ball, the whole bunch of cousins, the elder ones being in charge of course, would invariably end up at their favourite nariyal paaniwalla who would help us pick the sweetest coconuts (it's still a mystery to me how they can always tell those apart). Years later, we still pick a nariyal pani to cool down on a hot summer day says a lot about our allegiance to this natural coolant. Sadly there's not as much playtime anymore but as long as there's coconut juice, all we have to do is shut our eyes and be transported, giggles, laughter and all.",
      },
      {
        id: 2,
        name: "Jee For Jeera",
        price: 115,
        image: "/images/Jeera_150ml.png",
        description:
          "Your Classic Jeera Soda That Delivers A Sip Of Nostalgia With A Fizzy Twist. Bold, Fizzy, And Unapologetically Indian-Why Settle For A Soft Drink When You Can Swing With Jeera Soda? !",
      },
    ],
  },
  {
    id: 8,
    name: "Zero Sparkling Water",
    bgcolor: "#e1bee7",
    products: [
      {
        id: 1,
        name: "Lemon Lime",
        price: 60,
        image: "/images/flavour1.png",
        description:
          "A zesty blend of lemon and lime, perfectly balanced to deliver a crisp, refreshing sparkle with every sip.",
      },
      {
        id: 2,
        name: "Green Apple",
        price: 60,
        image: "/images/flavour2.png",
        description:
          "A burst of sweet-tart green apple flavor with a light fizz that energizes your senses.",
      },
      {
        id: 3,
        name: "Peach",
        price: 65,
        image: "/images/flavour3.png",
        description:
          "Juicy, sun-ripened peaches infused into sparkling water for a smooth and fruity refreshment.",
      },
      {
        id: 4,
        name: "Cranberry Lime",
        price: 65,
        image: "/images/flavour4.png",
        description:
          "A tangy twist of cranberry and lime, creating the perfect balance of sweet and sour fizz.",
      },
      {
        id: 5,
        name: "Yuzu Orange",
        price: 70,
        image: "/images/flavour7.png",
        description:
          "Exotic yuzu meets the citrusy sweetness of orange for a unique, refreshing sparkling experience.",
      },
      {
        id: 6,
        name: "Ginger Lemon",
        price: 65,
        image: "/images/flavour6.png",
        description:
          "A warm hint of ginger blended with zesty lemon, creating a sparkling water with a gentle kick.",
      },
      {
        id: 7,
        name: "Cumin",
        price: 70,
        image: "/images/flavour5.png",
        description:
          "A bold, earthy cumin twist that offers a savory and unique sparkling water experience.",
      },
      {
        id: 8,
        name: "Coffee",
        price: 75,
        image: "/images/flavour9.png",
        description:
          "A rich and aromatic coffee-inspired sparkling water for those who crave bold flavor without the heaviness.",
      },
    ],
  },
];

//  contact info

export const contactInfo = [
  {
    icon: "📍",
    title: "Visit Our Office",
    details: [
      "Hector Beverages Pvt. Ltd.",
      " Plot No: 128-P2, Whitefield, Bengaluru",
      "Karnataka, Pin-560066",
      "India",
    ],
    link: "https://maps.google.com",
  },
  {
    icon: "📞",
    title: "Call Us",
    details: [
      "1800-2030-515",
      "Mon-Fri: 9:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Closed",
    ],
    link: "tel:+911204770000",
  },
  {
    icon: "✉️",
    title: "Email Us",
    details: [
      "paperboat@hectorbeverages.com",
      "careers@paperboatdrinks.com",
      "support@paperboatdrinks.com",
      "We'll respond within 24 hours",
    ],
    link: "mailto:paperboat@hectorbeverages.com",
  },
  {
    icon: "🌐",
    title: "Follow Us",
    details: [
      "Facebook: @PaperBoatDrinks",
      "Instagram: @paperboatdrinks",
      "Twitter: @PaperBoatDrink",
      "LinkedIn: Paper Boat",
    ],
    link: "https://facebook.com/paperboatdrinks",
  },
];
