import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Por favor ingresa tu nombre"],
  },
  description: {
    type: String,
    required: [true, "Por favor ingresa la descripcion del producto"],
  },
  price: {
    type: Number,
    required: [true, "Por favor ingresa el precio del producto"],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  talla: {
    type: String,
    required: [true, "Por favor ingresa el color del producto"],
    enum: {
      values: [
        "S",
        "M", 
        "L", 
        "XL",
        "XS",
        "35",
        "36",
        "37",
        "38",
        "40",
        "41",
        "42",
      ],
      message: "Por favor selecciona un color correcto",
    },
  },
  color:{
    type: String,
    required: [false, "Por favor ingresa el color del producto"],
    enum: {
      values: [
        "negro",
        "blanco",
        "morado",
        "rojo",
        "verde",
        "azul",
        "rosado",
      ],
      message: "Por favor selecciona un color correcto",
    },

  },
  category: {
    type: String,
    required: [true, "Por favor ingresa la categoria del producto"],
    enum: {
      values: [
        "camisas mujer",
        "conjuntos mujer",
        "zapatos mujer",
        "accesorios mujer",
        "belleza",
      ],
      message: "Por favor selecciona una categoria correcta",
    },
  },
  seller: {
    type: String,
    required: [true, "Por favor ingresa el vendedor"],
  },
  stock: {
    type: Number,
    required: [true, "Por favor ingresa el Stock(inventario)"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
