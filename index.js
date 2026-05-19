const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ MongoDB Connected!");

    const db = client.db("game-project");
    const facilitiesCollection = db.collection("facilities");

    // ==================== POST: Add Facility ====================
    app.post('/facilities', async (req, res) => {
      try {
        const facility = req.body;

        facility.booking_count = 0;
        facility.created_at = new Date();

        const result = await facilitiesCollection.insertOne(facility);

        res.status(201).json({
          message: 'Facility added successfully',
          insertedId: result.insertedId,
        });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to add facility' });
      }
    });
    // ==================== END POST ====================
    // ==================== GET: All Facilities (Public + Search/Filter) ====================
    app.get('/facilities', async (req, res) => {
      try {
        const { search, type } = req.query;
        const query = {};

        // Search by facility name using $regex (Assignment Challenge)
        //if (search) {
        //  query.name = { $regex: search, $options: 'i' };
        //}

        // Filter by sport type using $in (Assignment Challenge)
        //if (type && type !== 'All') {
        //  query.facility_type = { $in: [type] };
        // }

        const db = client.db("game-project");
        const facilitiesCollection = db.collection("facilities");

        const facilities = await facilitiesCollection.find(query).toArray();
        res.json(facilities);
      } catch (error) {
        console.error('Error fetching facilities:', error);
        res.status(500).json({ message: 'Failed to fetch facilities' });
      }
    });
    // ==================== END GET /facilities ====================
   // ==================== GET: Single Facility by ID ====================
app.get('/facilities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { ObjectId } = require('mongodb');
    
    const db = client.db("game-project");
    const facilitiesCollection = db.collection("facilities");
    
    const facility = await facilitiesCollection.findOne({ 
      _id: new ObjectId(id) 
    });

    if (!facility) {
      return res.status(404).json({ message: "Facility not found" });
    }

    res.json(facility);
  } catch (error) {
    console.error('Error fetching facility:', error);
    res.status(500).json({ message: 'Failed to fetch facility' });
  }
});
// ==================== END GET /facilities/:id ====================

// ==================== POST: Create Booking ====================
app.post('/bookings', async (req, res) => {
  try {
    const booking = req.body;
    
    // Validate required fields
    const requiredFields = [
      'facility_id',
      'facility_name',
      'booking_date',
      'time_slot',
      'hours',
      'total_price'
    ];

    for (const field of requiredFields) {
      if (!booking[field]) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }

    // Set default values
    booking.status = 'pending';
    booking.created_at = new Date();

    const db = client.db("game-project");
    const bookingsCollection = db.collection("bookings");
    
    const result = await bookingsCollection.insertOne(booking);

    // Update facility booking count
    const { ObjectId } = require('mongodb');
    await facilitiesCollection.updateOne(
      { _id: new ObjectId(booking.facility_id) },
      { $inc: { booking_count: 1 } }
    );

    res.status(201).json({
      message: 'Booking created successfully',
      insertedId: result.insertedId
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Failed to create booking' });
  }
});
// ==================== END POST /bookings ====================
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send(' Server Running!');
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});