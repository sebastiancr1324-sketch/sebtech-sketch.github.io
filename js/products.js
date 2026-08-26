const productos = [
  {
    id: "galaxy-a15",
    nombre: "Samsung Galaxy A15",
    categoria: "celulares",
    precio: null,
    descripcion: "128GB de almacenamiento, cámara triple y batería de larga duración.",
    imagen: "../img/GalaxyA15.avif",
    especificaciones: ["128GB de almacenamiento", "Cámara triple", "Batería de larga duración"]
  },
  {
    id: "redmi-note-13",
    nombre: "Xiaomi Redmi Note 13",
    categoria: "celulares",
    precio: null,
    descripcion: "Pantalla AMOLED, carga rápida y gran rendimiento diario.",
    imagen: "../img/RedmiNote13.jpg",
    especificaciones: ["Pantalla AMOLED", "Carga rápida", "Rendimiento diario"]
  },
  {
    id: "moto-g54",
    nombre: "Motorola Moto G54",
    categoria: "celulares",
    precio: null,
    descripcion: "Ideal para uso diario, con buena cámara y batería confiable.",
    imagen: "../img/MotorolaG54.webp",
    especificaciones: ["Buena cámara", "Batería confiable", "Uso diario"]
  },
  {
    id: "galaxy-tab-a9",
    nombre: "Samsung Galaxy Tab A9",
    categoria: "tablets",
    precio: null,
    descripcion: "Perfecta para estudio y entretenimiento, pantalla grande y liviana.",
    imagen: "../img/GalaxyTabA9.webp",
    especificaciones: ["Pantalla grande", "Liviana", "Ideal para estudio"]
  },
  {
    id: "lenovo-tab-m10",
    nombre: "Lenovo Tab M10",
    categoria: "tablets",
    precio: null,
    descripcion: "Buena autonomía y rendimiento para uso diario o trabajo.",
    imagen: "../img/LenovoTabM10.png",
    especificaciones: ["Buena autonomía", "Rendimiento confiable", "Uso diario y trabajo"]
  },
  {
    id: "haylou-s30",
    nombre: "Haylou S30",
    categoria: "auriculares",
    precio: null,
    descripcion: "Sonido nítido, larga duración de batería y conexión estable.",
    imagen: "../img/HaylouS30.webp",
    especificaciones: ["Sonido nítido", "Larga batería", "Conexión estable"]
  },
  {
    id: "airpods-3",
    nombre: "Airpods 3",
    categoria: "auriculares",
    precio: null,
    descripcion: "Livianos, resistentes al sudor, ideales para entrenar y con un gran sonido.",
    imagen: "../img/Airpods3.webp",
    especificaciones: ["Livianos", "Resistentes al sudor", "Gran sonido"]
  }
];

function obtenerProductoPorId(id) {
  return productos.find(function(p) { return p.id === id; });
}

function obtenerProductosPorCategoria(categoria) {
  return productos.filter(function(p) { return p.categoria === categoria; });
}

function formatearPrecio(precio) {
  if (precio === null) return "Consultar precio";
  return "$" + precio.toLocaleString("es-AR");
}

/*
=============================================
  PLANTILLA PARA AGREGAR UN PRODUCTO NUEVO
=============================================

Copiá este bloque y pegalo DENTRO del array "productos" al final,
antes del corchete de cierre "]". Recordá agregar una coma ","
después del último producto que ya existe.

  {
    id: "nombre-en-minusculas-sin-espacios",
    nombre: "Nombre del Producto",
    categoria: "celulares",
    precio: null,
    descripcion: "Descripción breve del producto.",
    imagen: "../img/nombre-de-la-imagen.jpg",
    especificaciones: ["Spec 1", "Spec 2", "Spec 3"]
  },

NOTAS:
- "id": identificador único, sin espacios, en minúsculas
- "categoria": puede ser "celulares", "tablets" o "auriculares"
- "precio": número sin decimales (ej: 150000) o null para "Consultar"
- "imagen": ruta relativa a la carpeta img/
- "especificaciones": lista de características destacadas

=============================================
*/
