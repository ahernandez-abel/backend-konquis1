// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// Importar rutas
import usuariosRoutes from "./routes/usuarios.js";
import rolesRoutes from "./routes/roles.js";
import unidadesRoutes from "./routes/unidades.js";
import misionesRoutes from "./routes/misiones.js";
import gamificacionRoutes from "./routes/gamificacion.js";
import tiendaRoutes from "./routes/tienda.js";
import transaccionesRoutes from "./routes/transacciones.js";
import auditoriaRoutes from "./routes/auditoria.js";
import configuracionRoutes from "./routes/configuracion.js";
import conquistadorRoutes from "./routes/conquistador.js";
import avatarRoutes from "./routes/avatar.js"; // <-- Nueva ruta para avatars

dotenv.config();
const app = express();

// ----------------- CORS -----------------
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
app.use(cors({ origin: FRONTEND_URL }));

// ----------------- Middleware -----------------
app.use(express.json());

// ----------------- Rutas -----------------
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/usuarios", avatarRoutes); // <-- Aquí montamos el endpoint /avatar
app.use("/api/roles", rolesRoutes);
app.use("/api/unidades", unidadesRoutes);
app.use("/api/misiones", misionesRoutes);
app.use("/api/gamificacion", gamificacionRoutes);
app.use("/api/tienda", tiendaRoutes);
app.use("/api/transacciones", transaccionesRoutes);
app.use("/api/auditoria", auditoriaRoutes);
app.use("/api/configuracion", configuracionRoutes);
app.use("/api/conquistador", conquistadorRoutes);

// ----------------- Archivos estáticos -----------------
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ----------------- Puerto -----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
  if (process.env.FRONTEND_URL) {
    console.log(`🌍 CORS habilitado para: ${process.env.FRONTEND_URL}`);
  }
});
