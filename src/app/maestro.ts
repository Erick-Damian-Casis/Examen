export interface Maestro {
    fechaeEmision: string;
    numeroFactura:string;
    cedulaRuc:string;
    nombreCliente:string;
    direccion:string;
    telefono: string;
    subtotal: number;
    iva: string;
    total:number;
  }
  export interface DetalleFactura {
    cantidad: number; 
    producto:string;
    precioUnitario: number;
    valor: number;
  }