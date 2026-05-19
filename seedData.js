// server/seed.js

const facilities = [
  {
    name: "Neymar Jr Football Arena",
    facility_type: "Football",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
    location: "Dhaka, Bangladesh",
    price_per_hour: 600,
    capacity: 22,
    available_slots: ["9AM-11AM", "2PM-4PM", "6PM-8PM", "8PM-10PM"],
    description: "Premium artificial turf inspired by Neymar's training ground. Perfect for 5-a-side matches with professional lighting.",
    owner_email: "user@example.com",
    booking_count: 0
  },
  {
    name: "Marcelo Beach Volleyball Court",
    facility_type: "Volleyball",
    image: "https://images.unsplash.com/photo-1613395877344-13d4c79e4284?w=800",
    location: "Cox's Bazar, Bangladesh",
    price_per_hour: 450,
    capacity: 12,
    available_slots: ["7AM-9AM", "4PM-6PM", "6PM-8PM"],
    description: "Beach-style volleyball court with soft sand surface. Inspired by Marcelo's beach training sessions.",
    owner_email: "user@example.com",
    booking_count: 0
  },
  {
    name: "Copacabana Badminton Hub",
    facility_type: "Badminton",
    image: "https://images.unsplash.com/photo-1626224503172-1c9f289e3f4b?w=800",
    location: "Chittagong, Bangladesh",
    price_per_hour: 350,
    capacity: 8,
    available_slots: ["8AM-10AM", "12PM-2PM", "5PM-7PM", "7PM-9PM"],
    description: "Professional badminton courts with wooden flooring and proper ventilation. Named after Rio's famous beach.",
    owner_email: "user@example.com",
    booking_count: 0
  },
  {
    name: "Amazon Cricket Ground",
    facility_type: "Cricket",
    image: "https://images.unsplash.com/photo-1531415074968-036ba3b575da?w=800",
    location: "Sylhet, Bangladesh",
    price_per_hour: 500,
    capacity: 30,
    available_slots: ["6AM-8AM", "3PM-5PM", "5PM-7PM"],
    description: "Lush green cricket ground with practice nets. Inspired by the energy of Amazon rainforest.",
    owner_email: "user@example.com",
    booking_count: 0
  },
  {
    name: "Ipanema Tennis Academy",
    facility_type: "Tennis",
    image:  "https://images.unsplash.com/photo-1622279457486-62dcc4a030fb?w=800",
    location: "Dhaka, Bangladesh",
    price_per_hour: 550,
    capacity: 4,
    available_slots: ["7AM-9AM", "10AM-12PM", "4PM-6PM", "6PM-8PM"],
    description: "Hard court tennis facility with professional coaching available. Named after Rio's elegant neighborhood.",
    owner_email: "user@example.com",
    booking_count: 0
  },
  {
    name: "Rio Olympic Swimming Pool",
    facility_type: "Swimming",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20bfc18fb?w=800",
    location: "Dhaka, Bangladesh",
    price_per_hour: 400,
    capacity: 15,
    available_slots: ["6AM-8AM", "8AM-10AM", "5PM-7PM", "7PM-9PM"],
    description: "Olympic-standard 25m swimming pool with lifeguard on duty. Crystal clear water and modern facilities.",
    owner_email: "user@example.com",
    booking_count: 0
  },
  {
    name: "Samba Basketball Court",
    facility_type: "Basketball",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
    location: "Khulna, Bangladesh",
    price_per_hour: 450,
    capacity: 10,
    available_slots: ["8AM-10AM", "3PM-5PM", "5PM-7PM", "7PM-9PM"],
    description: "Outdoor basketball court with professional hoop and rubber flooring. Feel the Samba rhythm while you play!",
    owner_email: "user@example.com",
    booking_count: 0
  },
  {
    name: "Pelé Futsal Arena",
    facility_type: "Football",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800",
    location: "Rajshahi, Bangladesh",
    price_per_hour: 550,
    capacity: 10,
    available_slots: ["9AM-11AM", "2PM-4PM", "6PM-8PM", "8PM-10PM"],
    description: "Indoor futsal court with FIFA-approved flooring. Named after the legendary Pelé for authentic Brazilian experience.",
    owner_email: "user@example.com",
    booking_count: 0
  },
  {
    name: "Carnival Table Tennis Zone",
    facility_type: "Table Tennis",
    image: "https://images.unsplash.com/photo-1534158914592-062992900be6?w=800",
    location: "Dhaka, Bangladesh",
    price_per_hour: 250,
    capacity: 8,
    available_slots: ["10AM-12PM", "2PM-4PM", "5PM-7PM", "7PM-9PM"],
    description: "Multiple table tennis tables with professional nets. Fast-paced fun in a vibrant Carnival-themed environment.",
    owner_email: "user@example.com",
    booking_count: 0
  },
  {
    name: "Amazonia Multi-Sport Complex",
    facility_type: "Multi-Sport",
    image:  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
    location: "Sylhet, Bangladesh",
    price_per_hour: 800,
    capacity: 50,
    available_slots: ["8AM-10AM", "10AM-12PM", "2PM-4PM", "4PM-6PM"],
    description: "Versatile sports complex that can be configured for football, cricket, or athletics. Perfect for tournaments and events.",
    owner_email: "user@example.com",
    booking_count: 0
  },
  {
    name: "Bossa Nova Yoga & Fitness",
    facility_type: "Fitness",
    image: "https://i.ibb.co/5nK8LpM/bossa-yoga.jpg",
    location: "Dhaka, Bangladesh",
    price_per_hour: 300,
    capacity: 20,
    available_slots: ["6AM-8AM", "7AM-9AM", "5PM-7PM", "6PM-8PM"],
    description: "Peaceful yoga and fitness studio with Brazilian Bossa Nova music. Perfect for morning meditation and evening workouts.",
    owner_email: "user@example.com",
    booking_count: 0
  },
  {
    name: "Maracanã Mini Stadium",
    facility_type: "Football",
    image: "https://i.ibb.co/8mT6KqN/maracana-stadium.jpg",
    location: "Dhaka, Bangladesh",
    price_per_hour: 1000,
    capacity: 50,
    available_slots: ["9AM-11AM", "3PM-5PM", "5PM-7PM"],
    description: "Mini stadium-style football ground with spectator seating. Experience the Maracanã magic right in Bangladesh!",
    owner_email: "user@example.com",
    booking_count: 0
  }
];

module.exports = facilities;
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri);

async function seedDatabase() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('game-project');
    const facilitiesCollection = db.collection('facilities');

    // Clear existing data (optional - চাইলে এই লাইন কমেন্ট করে দিও)
    await facilitiesCollection.deleteMany({});
    console.log('🗑️ Cleared existing facilities');

    // Insert seed data
    const result = await facilitiesCollection.insertMany(facilities);
    
    console.log(`🎉 ${result.insertedCount} facilities inserted successfully!`);
    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await client.close();
    console.log('🔌 MongoDB connection closed');
    process.exit(0);
  }
}

seedDatabase();