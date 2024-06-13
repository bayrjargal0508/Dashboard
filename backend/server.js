const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/e-commerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error.message));

const addressSchema = new mongoose.Schema({
  email: String,
  phone: String,
  district: String,
  subDistrict: String,
  residentialArea: String,
  apartmentNumber: String,
});

const Address = mongoose.model('Address', addressSchema);

app.get('/addresses', async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE endpoint to delete an address by ID
app.delete('/addresses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Address.findByIdAndDelete(id);
    res.json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// PUT endpoint to update an address by ID
app.put('/addresses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAddressData = req.body; // New data for the address

    // Find the address by ID and update it with the new data
    const updatedAddress = await Address.findByIdAndUpdate(id, updatedAddressData, { new: true });

    if (!updatedAddress) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.json(updatedAddress);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Define Schema for Products
const productSchema = new mongoose.Schema({
  text1: String,
  text2: String,
  text3: String,
  text4: String,
  text5: String,
});

const Product = mongoose.model('Product', productSchema);

app.post('/products', async (req, res) => {
  try {
    const { text1, text2, text3, text4, text5 } = req.body;
    const product = new Product({ text1, text2, text3, text4, text5 });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
