# Dashboard de Ventas - Angular Starter

Dashboard de Ventas es una aplicación web diseñada para que los administradores de ventas puedan analizar el rendimiento de sus vendedores, filtrar ventas por fechas y obtener estadísticas clave para la toma de decisiones. Este sistema aprovecha Angular para crear una experiencia de usuario interactiva y responsiva.

# Descripción del Proyecto

Este proyecto fue desarrollado para empresas que desean optimizar sus procesos de ventas mediante un sistema de monitoreo en tiempo real. La aplicación permite visualizar información de ventas detallada, obtenida de un backend REST, en un entorno modular y fácil de usar.

# Objetivos del Proyecto
Visualización de Ventas: Mostrar los detalles de ventas en una interfaz amigable.
Monitoreo de Vendedores: Ver a los vendedores con mejor rendimiento en términos de ingresos y cantidad de ventas.
Filtrado de Datos: Permitir que los administradores filtren las ventas por fecha y obtengan un análisis específico de períodos de tiempo.
Escalabilidad: Diseñar la aplicación de forma modular para facilitar futuras mejoras o integraciones.

# Funcionalidades Principales
Panel de Ventas:
Proporciona una vista general de las métricas clave de ventas.
Muestra el top de vendedores basado en el rendimiento.
Filtrado de Fechas:
Un formulario permite a los usuarios seleccionar un rango de fechas específico y ver únicamente las ventas dentro de ese periodo.
Integración con API:
La aplicación se conecta a un backend para obtener datos de ventas y vendedores.
Usa HTTP para realizar consultas en tiempo real y actualizar los datos mostrados.

# Arquitectura de la Aplicación

La arquitectura de este proyecto sigue una estructura modular en Angular:

Componentes:
SalesDashboardComponent: El componente central de la aplicación, encargado de mostrar el panel de ventas, el formulario de filtro de fechas y la lista de vendedores principales.
Servicios:
SalesService: Servicio encargado de gestionar las solicitudes HTTP al backend. Este servicio facilita la obtención de datos, el filtrado de ventas, y la recuperación de información sobre los vendedores destacados.
Modelos:
User: Representa un usuario del sistema (vendedor).
Sale: Modelo para estructurar los datos de una venta, incluyendo detalles como productName, amount, quantity, y date.

# Flujo de Datos

Obtención de Datos: SalesService envía solicitudes al backend REST, recuperando información de ventas y de vendedores.
Interacción de Usuario:
El usuario utiliza el formulario de filtro de fechas para especificar un período.
Al enviar el formulario, SalesDashboardComponent llama al servicio para obtener solo las ventas en ese rango.
Presentación de Resultados: Los datos se muestran en el panel de ventas, donde el usuario puede visualizar las métricas y resultados filtrados.

# Tecnologías Utilizadas

Angular: Framework principal para la construcción de la aplicación.
TypeScript: Tipado fuerte para asegurar una estructura de datos sólida.
CSS: Estilos responsivos y diseño adaptativo para dispositivos móviles y de escritorio.

# Casos de Uso

Monitoreo de Vendedores en Tiempo Real: El sistema permite observar el rendimiento de los vendedores, identificando quiénes destacan en ventas en tiempo real.
Análisis por Periodo: Filtrando las ventas por fechas, los administradores pueden realizar un análisis de ventas en periodos específicos (mensual, trimestral, etc.).
Optimización de Estrategias de Ventas: Con datos claros y filtrados, los gerentes pueden identificar patrones de ventas, productos populares y oportunidades de mejora.
Futuras Mejoras

Reportes Exportables: Implementar una funcionalidad para exportar los datos filtrados a formatos como PDF o Excel.
Dashboard Personalizable: Permitir al usuario personalizar el tipo de métricas o gráficos que desea visualizar.
Notificaciones: Añadir alertas o notificaciones basadas en eventos de ventas, como cuando un vendedor alcanza una meta.
Conclusión

# Anexos 

<img width="1236" alt="Captura de pantalla 2024-11-09 a la(s) 5 00 12 p  m" src="https://github.com/user-attachments/assets/c2a5412a-afff-49ff-888b-a4fc4e03b06b">
<img width="331" alt="Captura de pantalla 2024-11-09 a la(s) 5 01 51 p  m" src="https://github.com/user-attachments/assets/b84180b8-2a84-4a97-b10b-1cdf62651d11">
<img width="742" alt="Captura de pantalla 2024-11-09 a la(s) 5 06 02 p  m" src="https://github.com/user-attachments/assets/956c1dd6-2b45-4e2b-b85b-5bef5c6cdbfa">

