import logo from './logo.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import back_icon from './back_icon.png'
import hero_img from './hero.jpg'
import exchange_icon from './exchange_icon.png'
import return_icon from './return_icon.png'
import support_icon from './support_icon.png'
import dropdown_icon from './dropdown_icon.png'
import cross_icon from './cross_icon.png'
import star_icon from './star_icon.png'
import star_dull_icon from './star_dull_icon.png'
import bin_icon from './bin_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import about from './about.png'
import contact from './contact.jpg'
import home1 from './home1.webp'
import minus from './minus.png'
import plus from './plus.png'

export const assets={
    minus,
    plus,
    logo,
    p_img1,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    back_icon,
    hero_img,
    exchange_icon,
    return_icon,
    support_icon,
    dropdown_icon,
    cross_icon,
    star_icon,
    star_dull_icon,
    bin_icon,
    stripe_logo,
    razorpay_logo,
    about,
    contact,
    p1_2,p1_3,p1_4,p1_1,p2_1,p2_2,p4,p5,p6,home1
}
export const products = [
    {
      _id: "001",
      name: "Spiral Notebook",
      description: "Our spiral notebooks boast sturdy metal binding and hard covers for long-lasting use, while thick, bleed-proof paper accommodates all pen types. Featuring lovely floral designs, these 10.5 x 8.5 notebooks offer 110 pages and a storage pocket for added convenience. Perfect for organizing notes, reminders, and to-do lists, they're a stylish and efficient tool for both home and office.",
      price: 499,
      image: [p1_1,p1_2,p1_3,p1_4],
      category: "Notebook",
      sizes: ["1","5","10"],
      date: 1716634345448,
      bestseller: true
    },
    {
      _id: "002",
      name: "Classmate Notebook",
      description: "Classmate Notebooks are designed for easy note-taking with single-line ruling on 19.0cm x 15.5cm paper. They feature unique and attractive cover designs and use smooth, smudge-free, eco-friendly paper.",
      price: 150,
      image: [p2_1,p2_2],
      category: "Notebook", 
      sizes: ["1","5"],
      date: 1716621345448,
      bestseller: false
    },
    {
      _id: "003",
      name: "Classmate Octane- Blue Ball Pens (pack Of 5)",
      description: "These high-quality ballpoint pens feature smooth-flowing ink and an ergonomic grip for comfortable writing. Ideal for both classroom and exam settings, they offer reliable performance and come in a pack of 5 blue pens, ensuring you're always prepared.",
      price: 50,
      image: [p4],
      category: "Writing",
      sizes: ["1"],
      date: 1716634345448,
      bestseller: true
    },
    {
      id: "005",
      name: "Drafter for Engineering Drawing",
      description: "MINI DRAFTER- Light Weight for Better Grip (Transparent).thick die casted, unbreakable scale along with cover provided.",
      price: 400,
      image: [p5],
      category: "EngSupplies",
      sizes: ["1"],
      date: 1716634345,
      bestseller: false
    },
    {
      id: "006",
      name: "Pencils for Engineering Drawing",
      description: "DISTINCTIVE GRADE VARIETY: This Set Includes Six Distinctive Grades (Hb, 2b, 4b, 6b, 8b, 10b), Catering to Various Drawing, Sketching, and Shading Needs. Each Grade Offers a Different Level of Darkness for Precise Artwork.",
      price: 100,
      image: [p6],
      category: "EngSupplies",
      sizes: ["1"],
      date: 1716634345,
      bestseller: true
    }
    
]
