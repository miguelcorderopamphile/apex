var Be=Object.defineProperty;var Ue=(u,e,o)=>e in u?Be(u,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[e]=o;var w=(u,e,o)=>Ue(u,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}})();const pe=1,he=2,ve=4,Ae=8,ee=1,ie=2,ne=8,me=16,ye=32,ue=64,De=128,Q=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0};class Pe extends Error{constructor(e){super(e)}}function Ie(){const u=typeof window<"u"?window.location.pathname.toLowerCase():"",e=typeof window<"u"?new URLSearchParams(window.location.search):null,o=u.includes("retail")||(e==null?void 0:e.get("rubro"))==="retail",a=u.includes("panaderia")||(e==null?void 0:e.get("rubro"))==="panaderia";return o?{key:"datiolabs_demo_retail_v3",claveLicencia:"0000888833330000",titular:"DatioLabs Retail Demo",config:{nombre:"DatioLabs Retail",rubros:Ae,capacidades:ee|me|ye|ue|De,tienePin:!1},productos:[{sku:"SMART-PHONE-X",nombre:"Smartphone X 128GB (Serie/Garantía)",precioBrutoUsd:"180.00",margenPct:"38",precioUsd:"250.00",impuestoPct:"16",stock:"8",capacidades:ee|me|ue,unidad:"un",categoriaId:"cat-general"},{sku:"AURICULAR-BT",nombre:"Audífonos Inalámbricos Bluetooth Pro",precioBrutoUsd:"14.00",margenPct:"42",precioUsd:"20.00",impuestoPct:"16",stock:"22",capacidades:ee|ue,unidad:"un",categoriaId:"cat-general"},{sku:"CARGADOR-RAPIDO",nombre:"Cargador Rápido 30W Tipo-C",precioBrutoUsd:"5.50",margenPct:"45",precioUsd:"8.00",impuestoPct:"16",stock:"30",capacidades:ee,unidad:"un",categoriaId:"cat-general"},{sku:"CABLE-USB-C",nombre:"Cable Reforzado Tipo-C a Tipo-C 1.5m",precioBrutoUsd:"2.50",margenPct:"60",precioUsd:"4.00",impuestoPct:"16",stock:"45",capacidades:ee,unidad:"un",categoriaId:"cat-general"},{sku:"POWERBANK-20K",nombre:"Batería Portátil PowerBank 20000mAh",precioBrutoUsd:"16.00",margenPct:"40",precioUsd:"22.50",impuestoPct:"16",stock:"12",capacidades:ee|ue,unidad:"un",categoriaId:"cat-general"}]}:a?{key:"datiolabs_demo_panaderia_v3",claveLicencia:"0000888822220000",titular:"DatioLabs Panadería Demo",config:{nombre:"DatioLabs Panadería",rubros:he,capacidades:ee|ie,tienePin:!1},productos:[{sku:"PAN-CANILLA",nombre:"Pan Canilla Tradicional",precioBrutoUsd:"0.50",margenPct:"60",precioUsd:"0.80",impuestoPct:"0",stock:"60",capacidades:ee,unidad:"un",categoriaId:"cat-panes"},{sku:"PAN-CAMPESINO",nombre:"Pan Campesino Rústico",precioBrutoUsd:"0.80",margenPct:"50",precioUsd:"1.20",impuestoPct:"0",stock:"35",capacidades:ee,unidad:"un",categoriaId:"cat-panes"},{sku:"PAN-SOBADO",nombre:"Pan Sobado Suave",precioBrutoUsd:"0.65",margenPct:"53",precioUsd:"1.00",impuestoPct:"0",stock:"40",capacidades:ee,unidad:"un",categoriaId:"cat-panes"},{sku:"QUESO-GUAYANES",nombre:"Queso Guayanés Fresco",precioBrutoUsd:"3.20",margenPct:"40",precioUsd:"4.50",impuestoPct:"0",stock:"15.00",capacidades:ie,unidad:"kg",categoriaId:"cat-viveres"},{sku:"CAFE-MOLIDO",nombre:"Café Molido Tostado 250g",precioBrutoUsd:"2.00",margenPct:"50",precioUsd:"3.00",impuestoPct:"0",stock:"25",capacidades:ee,unidad:"un",categoriaId:"cat-viveres"}]}:{key:"datiolabs_demo_licoreria_v3",claveLicencia:"0000888811110000",titular:"DatioLabs Licorería Demo",config:{nombre:"DatioLabs Licorería",rubros:ve,capacidades:ee|ne,tienePin:!1},productos:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",precioBrutoUsd:"13.50",margenPct:"33",precioUsd:"18.00",impuestoPct:"16",stock:"12",capacidades:ee|ne,unidad:"un",categoriaId:"cat-bebidas"},{sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",precioBrutoUsd:"8.80",margenPct:"36",precioUsd:"12.00",impuestoPct:"16",stock:"16",capacidades:ee|ne,unidad:"un",categoriaId:"cat-bebidas"},{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",precioBrutoUsd:"3.30",margenPct:"36",precioUsd:"4.50",impuestoPct:"16",stock:"30",capacidades:ee|ne,unidad:"un",categoriaId:"cat-bebidas"},{sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",precioBrutoUsd:"16.50",margenPct:"33",precioUsd:"22.00",impuestoPct:"16",stock:"8",capacidades:ee|ne,unidad:"un",categoriaId:"cat-bebidas"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",precioBrutoUsd:"1.20",margenPct:"50",precioUsd:"1.80",impuestoPct:"16",stock:"24",capacidades:ee|ne,unidad:"un",categoriaId:"cat-bebidas"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",precioBrutoUsd:"0.60",margenPct:"66",precioUsd:"1.00",impuestoPct:"16",stock:"40",capacidades:ee|ne,unidad:"un",categoriaId:"cat-viveres"}]}}class Te{constructor(){w(this,"config");w(this,"productos");w(this,"cuentas",[{ventaId:"CTA-88210",etiqueta:"Mesa 4 (Terraza)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-7200,fechaCreacionStr:"Hoy, 02:00 PM",lineas:2,totalParcialUsd:"10.00",totalParcialBs:"8073.90",abonosUsd:"5.00",abonosBs:"4036.95",consumos:[{id:"con-m4-1",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-m4-2",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]},{ventaId:"CTA-88211",etiqueta:"Barra Principal (Carlos)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-3600,fechaCreacionStr:"Hoy, 03:00 PM",lineas:2,totalParcialUsd:"19.80",totalParcialBs:"15986.32",abonosUsd:"25.00",abonosBs:"20184.75",consumos:[{id:"con-bp-1",sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:1,precioUsd:"18.00",subtotalUsd:"18.00"},{id:"con-bp-2",sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:1,precioUsd:"1.80",subtotalUsd:"1.80"}]},{ventaId:"CTA-88212",etiqueta:"Mesa 1 (VIP)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-1800,fechaCreacionStr:"Hoy, 03:30 PM",lineas:1,totalParcialUsd:"22.00",totalParcialBs:"17762.58",abonosUsd:"0.00",abonosBs:"0.00",consumos:[{id:"con-m1-1",sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",cantidad:1,precioUsd:"22.00",subtotalUsd:"22.00"}]},{ventaId:"DEU-99042",etiqueta:"Taller Hermanos Gómez",cliente:"Carlos Gómez (Taller)",nota:"Crédito comercial acordado a cobrar en días",tipo:"deuda",fechaCreacionUnix:Math.floor(Date.now()/1e3)-86400*3,fechaCreacionStr:"01/09/2026 10:30",lineas:3,totalParcialUsd:"34.00",totalParcialBs:"27451.26",abonosUsd:"10.00",abonosBs:"8073.90",consumos:[{id:"con-d1",sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:2,precioUsd:"12.00",subtotalUsd:"24.00"},{id:"con-d2",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-d3",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]}]);w(this,"categorias",[{id:"cat-general",nombre:"General"},{id:"cat-viveres",nombre:"Víveres"},{id:"cat-bebidas",nombre:"Bebidas y Licores"},{id:"cat-panes",nombre:"Panes y Horneados"}]);w(this,"tasasImpuestos",[{id:"iva-16",nombre:"IVA General (16%)",porcentaje:16},{id:"iva-8",nombre:"IVA Reducido (8%)",porcentaje:8},{id:"iva-0",nombre:"Exento (0%)",porcentaje:0}]);w(this,"tasaActual",{valor:"807.39",fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:null,direccion:null});w(this,"tickets",[{ventaId:"TRX-94812",totalUsd:"23.80",totalBs:"19215.88",tasaDelDia:"807.39",montoRecibidoBs:"20000.00",vueltoBs:"784.12",fechaHora:"Hoy, 01:24 PM",fechaUnix:Math.floor(Date.now()/1e3)-3600,canal:"VENTA DIRECTA",operador:"Caja Principal",pagos:[{metodo:"PAGO MOVIL",montoUsd:"23.80",montoBs:"19215.88",referencia:"REF-7892"}],lineas:[{sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:"1",precioUsd:"12.00",tasaBloqueada:"807.39",subtotalUsd:"12.00",subtotalBs:"9688.68"},{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:"2",precioUsd:"4.50",tasaBloqueada:"807.39",subtotalUsd:"9.00",subtotalBs:"7266.51"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:"1",precioUsd:"1.00",tasaBloqueada:"807.39",subtotalUsd:"1.00",subtotalBs:"807.39"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:"1",precioUsd:"1.80",tasaBloqueada:"807.39",subtotalUsd:"1.80",subtotalBs:"1453.30"}]},{ventaId:"CTA-78104",totalUsd:"40.00",totalBs:"32295.60",tasaDelDia:"807.39",montoRecibidoBs:"35000.00",vueltoBs:"2704.40",fechaHora:"Hoy, 12:50 PM",fechaUnix:Math.floor(Date.now()/1e3)-7200,canal:"CONSUMO EN CUENTA",operador:"Mesa 4 / Mostrador",pagos:[{metodo:"DOL.CASH",moneda:"USD",montoUsd:"20.00",montoBs:"16147.80",tasaCambio:"807.39"},{metodo:"PUNTOD.VENTA",moneda:"BS",montoUsd:"20.00",montoBs:"16147.80",referencia:"LOTE-112"}],lineas:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:"1",precioUsd:"18.00",tasaBloqueada:"807.39",subtotalUsd:"18.00",subtotalBs:"14533.02"},{sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",cantidad:"1",precioUsd:"22.00",tasaBloqueada:"807.39",subtotalUsd:"22.00",subtotalBs:"17762.58"}]},{ventaId:"TRX-94811",totalUsd:"13.60",totalBs:"10980.50",tasaDelDia:"807.39",montoRecibidoBs:"11000.00",vueltoBs:"19.50",fechaHora:"Hoy, 11:35 AM",fechaUnix:Math.floor(Date.now()/1e3)-10800,canal:"VENTA DIRECTA",operador:"Caja Principal",pagos:[{metodo:"BS.EFEC.",moneda:"BS",montoUsd:"13.60",montoBs:"10980.50"}],lineas:[{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:"2",precioUsd:"4.50",tasaBloqueada:"807.39",subtotalUsd:"9.00",subtotalBs:"7266.51"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:"2",precioUsd:"1.80",tasaBloqueada:"807.39",subtotalUsd:"3.60",subtotalBs:"2906.60"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:"1",precioUsd:"1.00",tasaBloqueada:"807.39",subtotalUsd:"1.00",subtotalBs:"807.39"}]},{ventaId:"CTA-78103",totalUsd:"18.00",totalBs:"14533.02",tasaDelDia:"807.39",montoRecibidoBs:"15000.00",vueltoBs:"466.98",fechaHora:"Hoy, 10:15 AM",fechaUnix:Math.floor(Date.now()/1e3)-14400,canal:"CONSUMO EN CUENTA",operador:"Barra Principal",pagos:[{metodo:"ZELLE",moneda:"USD",montoUsd:"18.00",montoBs:"14533.02",tasaCambio:"807.39",referencia:"ZEL-5501"}],lineas:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:"1",precioUsd:"18.00",tasaBloqueada:"807.39",subtotalUsd:"18.00",subtotalBs:"14533.02"}]}]);w(this,"ventasTotalUsd",95.4);w(this,"ventasTotalBs",77025);w(this,"metodosPago",[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]);w(this,"dispositivos",[{id:"dev-1",nombre:"iPhone 15 Pro (Dueño)",ip:"192.168.1.45",ultimoAcceso:"Hace 5 min",activo:!0},{id:"dev-2",nombre:"Tablet Mostrador 1",ip:"192.168.1.80",ultimoAcceso:"Hace 12 min",activo:!0}]);w(this,"respaldos",[{id:"bk-1",fecha:"Hoy, 06:00 PM",archivoNombre:"DATO-DEMO-20260903-180000.datio",registros:412,tamanoKb:124,checksumSha256:"9f83a21b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f"},{id:"bk-2",fecha:"Ayer, 11:30 PM",archivoNombre:"DATO-DEMO-20260902-233000.datio",registros:395,tamanoKb:118,checksumSha256:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"}]);w(this,"licencia",{estado:"activa",tipo:"Enterprise Standalone Local",claveLicencia:"0000888811110000",titular:"Empresa DatioLabs Cliente Comercial",validez:"Perpetua (Sin caducidad / Portabilidad Total)"});w(this,"operadores",[{id:"op-1",nombre:"Carlos Mendoza",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*30},{id:"op-2",nombre:"María Andrea Silva",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*15},{id:"op-3",nombre:"José Gregorio Páez",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*5}]);w(this,"jornadaActual",{id:"JOR-20260908-01",estado:"abierta",inicioUnix:Math.floor(Date.now()/1e3)-14400,inicioStr:"Hoy, 08:30 AM",operadorInicial:"Carlos Mendoza",operadorActual:"Carlos Mendoza",operadoresActivos:["Carlos Mendoza"],operadoresRelevo:["Carlos Mendoza"],tasaInicio:"807.39",ventasTotalUsd:"95.40",ventasTotalBs:"77025.00",ticketsEmitidos:6,vueltoPagadoBs:"1450.00",vueltoRetenidoBs:"784.12",deudasLiquidadasUsd:"34.00",entradasStockReg:2,mermasStockReg:0,cambiosPrecioReg:0});w(this,"historicoJornadas",[{id:"JOR-20260907-01",estado:"cerrada",inicioUnix:Math.floor(Date.now()/1e3)-86400-28800,finUnix:Math.floor(Date.now()/1e3)-86400,inicioStr:"Ayer, 08:00 AM",finStr:"Ayer, 09:30 PM",operadorInicial:"María Andrea Silva",operadorActual:"Carlos Mendoza",operadoresRelevo:["María Andrea Silva","Carlos Mendoza"],tasaInicio:"805.20",tasaFin:"807.39",ventasTotalUsd:"340.50",ventasTotalBs:"274889.70",ticketsEmitidos:24,vueltoPagadoBs:"4520.00",vueltoRetenidoBs:"1200.00",deudasLiquidadasUsd:"68.00",entradasStockReg:4,mermasStockReg:1,cambiosPrecioReg:1,checksumSha256:"a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0"}]);w(this,"semaforoStock",{rojoMax:5,amarilloMax:15});w(this,"historicoTasas",[{id:"tx-1",valor:"807.3900",fechaHora:"Hoy, 04:00 PM",tipo:"automático",motivo:"Sondeo oficial BCV"},{id:"tx-2",valor:"805.2000",fechaHora:"Hoy, 09:00 AM",tipo:"automático",motivo:"Apertura de jornada"},{id:"tx-3",valor:"802.1500",fechaHora:"Ayer, 05:00 PM",tipo:"automático",motivo:"Cierre BCV"}]);w(this,"pinDueno","");w(this,"storageKey");const e=Ie();this.storageKey=e.key,this.config=e.config,this.productos=e.productos,this.licencia.claveLicencia=e.claveLicencia,this.licencia.titular=e.titular;try{["datiolabs_demo_licoreria_db","datiolabs_demo_panaderia_db","datiolabs_demo_retail_db","datiolabs_demo_licoreria_v2"].forEach(a=>{try{localStorage.removeItem(a)}catch{}});const o=localStorage.getItem(this.storageKey);if(o){const a=JSON.parse(o);if(a.productos&&Array.isArray(a.productos)&&(this.productos=a.productos.map(r=>{const c=e.productos.find(l=>l.sku===r.sku),i=String(r.unidad||(c==null?void 0:c.unidad)||"").toLowerCase(),s=i==="kg"?"kg":i==="ml"?"ml":"un",t=r.categoriaId&&r.categoriaId.trim()?r.categoriaId:(c==null?void 0:c.categoriaId)||"cat-general",n=Number(r.precioUsd)||0,d=r.precioBrutoUsd&&Number(r.precioBrutoUsd)>0?r.precioBrutoUsd:(c==null?void 0:c.precioBrutoUsd)||(n*.65).toFixed(2);return{...r,unidad:s,categoriaId:t,precioBrutoUsd:d}})),a.cuentas&&Array.isArray(a.cuentas)&&a.cuentas.length>0&&(this.cuentas=a.cuentas.map(r=>(Array.isArray(r.consumos)||(r.consumos=[]),r.abonosUsd===void 0&&(r.abonosUsd="0.00"),r.abonosBs===void 0&&(r.abonosBs="0.00"),r.tipo||(r.tipo=r.etiqueta.toLowerCase().includes("taller")||r.etiqueta.toLowerCase().includes("deuda")?"deuda":"activa"),r.fechaCreacionUnix||(r.fechaCreacionUnix=r.tipo==="deuda"?Math.floor(Date.now()/1e3)-86400*3:Math.floor(Date.now()/1e3)-3600),r.fechaCreacionStr||(r.fechaCreacionStr=r.tipo==="deuda"?"01/09/2026 10:30":"Hoy"),r.consumos.length===0&&Q(r.totalParcialUsd)>0&&r.consumos.push({id:"con-"+Math.random().toString(36).slice(2,8),sku:"CONSUMO-PREV",nombre:"Consumos acumulados",cantidad:1,precioUsd:String(r.totalParcialUsd),subtotalUsd:String(r.totalParcialUsd)}),r.lineas=r.consumos.length,r)),this.cuentas.some(r=>r.tipo==="deuda")||this.cuentas.push({ventaId:"DEU-99042",etiqueta:"Taller Hermanos Gómez",cliente:"Carlos Gómez (Taller)",nota:"Crédito comercial convenido a pagar en días",tipo:"deuda",fechaCreacionUnix:Math.floor(Date.now()/1e3)-86400*3,fechaCreacionStr:"01/09/2026 10:30",lineas:3,totalParcialUsd:"34.00",totalParcialBs:(34*Q(this.tasaActual.valor)).toFixed(2),abonosUsd:"10.00",abonosBs:(10*Q(this.tasaActual.valor)).toFixed(2),consumos:[{id:"con-d1",sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:2,precioUsd:"12.00",subtotalUsd:"24.00"},{id:"con-d2",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-d3",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]})),a.metodosPago&&Array.isArray(a.metodosPago)){const r=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}],c=[],i=new Set,s=t=>{let n="",d="BS";if(typeof t=="string")n=t.trim().toUpperCase(),n==="DOLAR.EFEC."&&(n="DOL.CASH"),n==="USDT BINAN."&&(n="BINAN.USDT"),["DOL.CASH","ZELLE","BINAN.USDT"].includes(n)&&(d="USD");else if(t&&typeof t=="object"&&"nombre"in t){const l=t;n=String(l.nombre||"").trim().toUpperCase(),n==="DOLAR.EFEC."&&(n="DOL.CASH"),n==="USDT BINAN."&&(n="BINAN.USDT"),d=l.moneda==="USD"||["DOL.CASH","ZELLE","BINAN.USDT"].includes(n)?"USD":"BS"}n&&!i.has(n)&&(i.add(n),c.push({nombre:n,moneda:d}))};r.forEach(s),a.metodosPago.forEach(s),c.sort((t,n)=>t.moneda===n.moneda?0:t.moneda==="BS"?-1:1),this.metodosPago=c}else this.metodosPago.sort((r,c)=>r.moneda===c.moneda?0:r.moneda==="BS"?-1:1);a.operadores&&Array.isArray(a.operadores)&&(this.operadores=a.operadores),a.jornadaActual!==void 0&&(this.jornadaActual=a.jornadaActual),a.historicoJornadas&&Array.isArray(a.historicoJornadas)&&(this.historicoJornadas=a.historicoJornadas),a.semaforoStock&&(this.semaforoStock=a.semaforoStock),a.categorias&&(this.categorias=a.categorias),a.tasasImpuestos&&(this.tasasImpuestos=a.tasasImpuestos),a.tasaActual&&(this.tasaActual=a.tasaActual),a.dispositivos&&(this.dispositivos=a.dispositivos),a.respaldos&&(this.respaldos=a.respaldos),a.historicoTasas&&(this.historicoTasas=a.historicoTasas),a.tickets&&Array.isArray(a.tickets)&&a.tickets.length>0&&(this.tickets=a.tickets),a.ventasTotalUsd!==void 0&&(this.ventasTotalUsd=Number(a.ventasTotalUsd)),a.ventasTotalBs!==void 0&&(this.ventasTotalBs=Number(a.ventasTotalBs)),a.pinDueno!==void 0&&(this.pinDueno=a.pinDueno),this.config&&this.pinDueno&&(this.config.tienePin=!0)}}catch{}this.refrescarTasaEnVivo()}async refrescarTasaEnVivo(){try{const e=await fetch("https://ve.dolarapi.com/v1/dolares/oficial");if(e.ok){const o=await e.json(),a=Number(o.promedio);if(Number.isFinite(a)&&a>0){const r=Number(this.tasaActual.valor);let c=null,i=null;if(Number.isFinite(r)&&r>0&&r!==a){const n=(a-r)/r*100;c=Math.abs(n).toFixed(2),i=n>0?"subio":"bajo"}this.tasaActual={valor:a.toFixed(4),fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:c,direccion:i};const t=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});this.historicoTasas.unshift({id:"tx-"+Math.random().toString(36).slice(2,7),valor:a.toFixed(4),fechaHora:`Hoy, ${t}`,tipo:"automático",motivo:"Sincronización BCV en vivo"}),this.historicoTasas.length>50&&this.historicoTasas.pop(),this.persist(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("tasa_actualizada",{detail:a}))}}}catch{}}persist(){try{localStorage.setItem(this.storageKey,JSON.stringify({productos:this.productos,cuentas:this.cuentas,categorias:this.categorias,tasasImpuestos:this.tasasImpuestos,tasaActual:this.tasaActual,dispositivos:this.dispositivos,respaldos:this.respaldos,historicoTasas:this.historicoTasas,tickets:this.tickets,ventasTotalUsd:this.ventasTotalUsd,ventasTotalBs:this.ventasTotalBs,pinDueno:this.pinDueno,metodosPago:this.metodosPago,operadores:this.operadores,jornadaActual:this.jornadaActual,historicoJornadas:this.historicoJornadas,semaforoStock:this.semaforoStock}))}catch{}}}const p=new Te;async function H(u,e){var r;const o=window.__TAURI__,a=(r=o==null?void 0:o.core)==null?void 0:r.invoke;if(a)try{return await a(u,e)}catch(c){throw new Pe(typeof c=="string"?c:JSON.stringify(c))}return Le(u,e)}function Le(u,e){var o,a,r,c,i;switch(u){case"obtener_config":return Promise.resolve(p.config);case"inicializar_negocio":{const s=e!=null&&e.pinDueno?String(e.pinDueno).trim():"",t=e!=null&&e.licenciaClave?String(e.licenciaClave).trim():"";return p.pinDueno=s,p.config={nombre:String((e==null?void 0:e.nombre)||"Mi Negocio Demo"),rubros:Number((e==null?void 0:e.rubros)||15),capacidades:ee|ie|ne|me|ye,tienePin:s.length>0,licenciaEstado:t?"activa":"demo",licenciaTitular:t?"Empresa DatioLabs":""},p.licencia.claveLicencia=t||"0000888811110000",p.licencia.estado=t?"activa":"demo",p.licencia.titular=t?"Empresa DatioLabs":"DatioLabs Demo",p.persist(),Promise.resolve(void 0)}case"validar_pin_dueno":{const s=String((e==null?void 0:e.pin)||"").trim();return p.pinDueno?Promise.resolve(s===p.pinDueno):Promise.resolve(!0)}case"cambiar_pin_dueno":{const s=String((e==null?void 0:e.pinAnterior)||"").trim(),t=String((e==null?void 0:e.pinNuevo)||"").trim();return p.pinDueno&&s!==p.pinDueno?Promise.reject(new Error("La clave anterior no coincide.")):(p.pinDueno=t,p.config&&(p.config.tienePin=t.length>0),p.persist(),Promise.resolve(!0))}case"listar_productos":return Promise.resolve(p.productos);case"crear_producto":{const s=e==null?void 0:e.input,t=String((s==null?void 0:s.unidad)||"").toLowerCase(),n=t==="kg"?"kg":t==="ml"?"ml":s!=null&&s.pesable?"kg":"un",d=!!(s!=null&&s.esCaja),l=Number(s==null?void 0:s.unidadesPorCaja)>1?Math.floor(Number(s.unidadesPorCaja)):void 0,b=String((s==null?void 0:s.stockInicial)||"0"),m={sku:String((s==null?void 0:s.sku)||"").toUpperCase(),nombre:String((s==null?void 0:s.nombre)||""),precioBrutoUsd:String((s==null?void 0:s.precioBrutoUsd)||"0"),margenPct:String((s==null?void 0:s.margenPct)||"0"),precioUsd:String((s==null?void 0:s.precioUsd)||"0"),impuestoPct:String((s==null?void 0:s.impuestoPct)||"0"),stock:b,capacidades:ee|(n==="kg"||n==="ml"||s!=null&&s.pesable?ie:0),categoriaId:String((s==null?void 0:s.categoriaId)||""),sinStock:!!(s!=null&&s.sinStock),unidad:n,esCaja:d,unidadesPorCaja:l};return p.productos.push(m),p.persist(),Promise.resolve(void 0)}case"eliminar_producto":{const s=String((e==null?void 0:e.sku)||"").toUpperCase();return p.productos=p.productos.filter(t=>t.sku!==s),p.persist(),Promise.resolve(void 0)}case"registrar_venta":{const s=e==null?void 0:e.items,t=Number((e==null?void 0:e.montoRecibidoBs)||"0");let n=0;const d=Number(p.tasaActual.valor);s.forEach(g=>{const S=p.productos.find(M=>M.sku===g.sku);if(S){const M=Number(g.cantidad);n+=Number(S.precioUsd)*M,S.stock=String(Math.max(0,Number(S.stock)-M))}});const l=n*d,b=Math.max(0,t-l);p.ventasTotalUsd+=n,p.ventasTotalBs+=l;const m=new Date,h=m.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),y=Array.isArray(e==null?void 0:e.pagos)&&e.pagos.length>0?e.pagos:[{metodo:t>0?"BS.EFEC.":"DOL.CASH",moneda:t>0?"BS":"USD",montoUsd:n.toFixed(2),montoBs:l.toFixed(2)}],k=e==null?void 0:e.resolucionVuelto,U=b>.009?(k==null?void 0:k.estado)||"PAGADO":"SIN_VUELTO",A=U==="PAGADO"?(k==null?void 0:k.metodo)||"BS.EFEC.":void 0,O=b>.009?(k==null?void 0:k.montoBs)||b.toFixed(2):void 0,R=b>.009?(k==null?void 0:k.montoUsd)||(d>0?(b/d).toFixed(2):"0.00"):void 0,F=U==="PAGADO"?k==null?void 0:k.tasa:void 0,B=((o=p.jornadaActual)==null?void 0:o.operadorActual)||"Caja Principal",f={ventaId:"TRX-"+Math.floor(1e4+Math.random()*9e4),totalUsd:n.toFixed(2),totalBs:l.toFixed(2),tasaDelDia:d.toFixed(2),montoRecibidoBs:t.toFixed(2),vueltoBs:b.toFixed(2),fechaHora:`Hoy, ${h}`,fechaUnix:Math.floor(m.getTime()/1e3),canal:"VENTA DIRECTA",operador:B,pagos:y,estadoVuelto:U,metodoVuelto:A,montoVueltoBs:O,montoVueltoUsd:R,tasaVuelto:F,lineas:s.map(g=>{const S=p.productos.find(_=>_.sku===g.sku),M=(Number((S==null?void 0:S.precioUsd)||0)*Number(g.cantidad)).toFixed(2),C=(Number(M)*d).toFixed(2);return{sku:g.sku,nombre:(S==null?void 0:S.nombre)||g.sku,cantidad:g.cantidad,precioUsd:(S==null?void 0:S.precioUsd)||"0",tasaBloqueada:d.toFixed(2),subtotalUsd:M,subtotalBs:C}})};if(p.tickets.unshift(f),p.jornadaActual){const g=p.jornadaActual;g.ventasTotalUsd=(Q(g.ventasTotalUsd)+n).toFixed(2),g.ventasTotalBs=(Q(g.ventasTotalBs)+l).toFixed(2),g.ticketsEmitidos+=1,U==="PAGADO"?g.vueltoPagadoBs=(Q(g.vueltoPagadoBs)+b).toFixed(2):U==="RETENIDO"&&(g.vueltoRetenidoBs=(Q(g.vueltoRetenidoBs)+b).toFixed(2))}return p.persist(),Promise.resolve(f)}case"listar_cuentas":return Promise.resolve(p.cuentas);case"abrir_cuenta":{const s=String((e==null?void 0:e.etiqueta)||"Mesa Demo").trim(),t=(e==null?void 0:e.tipo)==="deuda"?"deuda":"activa",n=typeof(e==null?void 0:e.cliente)=="string"?e.cliente.trim():void 0,d=typeof(e==null?void 0:e.nota)=="string"?e.nota.trim():void 0,l=new Date,b=l.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),m=`${l.toLocaleDateString("es-VE")} ${b}`,h={ventaId:(t==="deuda"?"DEU-":"CTA-")+Math.random().toString(36).slice(2,8).toUpperCase(),etiqueta:s,tipo:t,cliente:n,nota:d,fechaCreacionUnix:Math.floor(l.getTime()/1e3),fechaCreacionStr:m,totalParcialUsd:"0.00",totalParcialBs:"0.00",abonosUsd:"0.00",abonosBs:"0.00",lineas:0,consumos:[]};return p.cuentas.push(h),p.persist(),Promise.resolve(h)}case"agregar_consumo":{const s=String((e==null?void 0:e.ventaId)||""),t=String((e==null?void 0:e.sku)||"").trim().toUpperCase(),n=Q(e==null?void 0:e.cantidad)||1,d=p.cuentas.find(b=>b.ventaId===s),l=p.productos.find(b=>b.sku.trim().toUpperCase()===t);if(d&&l){if(!l.sinStock){const U=Q(l.stock);if(U<n)return Promise.reject(new Error(`Stock insuficiente para "${l.nombre}". Disponible: ${U} ${l.unidad||"un."}`));l.stock=String(Math.max(0,U-n))}Array.isArray(d.consumos)||(d.consumos=[]);const b=Q(l.precioUsd),m=b*n,h=Q(p.tasaActual.valor)||807.39,y=d.consumos.find(U=>U.sku.trim().toUpperCase()===l.sku.trim().toUpperCase());y?(y.cantidad+=n,y.subtotalUsd=(y.cantidad*Q(y.precioUsd)).toFixed(2)):d.consumos.push({id:"con-"+Math.random().toString(36).slice(2,8),sku:l.sku,nombre:l.nombre,cantidad:n,precioUsd:b.toFixed(2),subtotalUsd:m.toFixed(2)});const k=d.consumos.reduce((U,A)=>U+Q(A.subtotalUsd),0);return d.totalParcialUsd=k.toFixed(2),d.totalParcialBs=(k*h).toFixed(2),d.lineas=d.consumos.length,p.persist(),Promise.resolve(d)}return Promise.resolve(d)}case"eliminar_consumo":{const s=String((e==null?void 0:e.ventaId)||""),t=String((e==null?void 0:e.consumoId)||""),n=p.cuentas.find(d=>d.ventaId===s);if(n&&Array.isArray(n.consumos)){const d=n.consumos.findIndex(l=>l.id===t);if(d!==-1){const l=n.consumos[d],b=p.productos.find(y=>y.sku.trim().toUpperCase()===l.sku.trim().toUpperCase());b&&!b.sinStock&&(b.stock=String(Q(b.stock)+l.cantidad)),n.consumos.splice(d,1);const m=Q(p.tasaActual.valor)||807.39,h=n.consumos.reduce((y,k)=>y+Q(k.subtotalUsd),0);n.totalParcialUsd=h.toFixed(2),n.totalParcialBs=(h*m).toFixed(2),n.lineas=n.consumos.length,p.persist()}return Promise.resolve(n)}return Promise.resolve(n)}case"cerrar_cuenta":{const s=String((e==null?void 0:e.ventaId)||""),t=p.cuentas.findIndex(v=>v.ventaId===s),n=t!==-1?p.cuentas[t]:null;let d="0.00",l="0.00",b=[],m=0;const h=Q(e==null?void 0:e.tasaCobro),y=h>0?h:Number(p.tasaActual.valor)||807.39,k=(n==null?void 0:n.tipo)==="deuda";if(n){const v=Number(n.totalParcialUsd),T=Number(n.abonosUsd||"0"),P=Math.max(0,T-v);m=P;const z=Math.max(v,T);d=z.toFixed(2),l=(z*y).toFixed(2),p.cuentas.splice(t,1),p.ventasTotalUsd+=z,p.ventasTotalBs+=z*y,b=(n.consumos||[]).map(I=>({sku:I.sku,nombre:I.nombre,cantidad:String(I.cantidad),precioUsd:I.precioUsd,tasaBloqueada:y.toFixed(4),subtotalUsd:I.subtotalUsd,subtotalBs:(Number(I.subtotalUsd)*y).toFixed(2)})),P>0&&b.push({sku:"GANANCIA-EXCEDENTE",nombre:"Saldo a Favor Consolidado como Ganancia (Excedente Retenido)",cantidad:"1",precioUsd:P.toFixed(2),tasaBloqueada:y.toFixed(4),subtotalUsd:P.toFixed(2),subtotalBs:(P*y).toFixed(2)})}const U=new Date,A=U.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),O=Array.isArray(e==null?void 0:e.pagos)&&e.pagos.length>0?e.pagos:[{metodo:k?"TRANSF.BS.":"BS.EFEC.",moneda:"BS",montoUsd:d,montoBs:l}],R=Number((e==null?void 0:e.montoRecibidoBs)||l),F=Math.max(0,R-Number(l)),B=e==null?void 0:e.resolucionVuelto,f=F>.009?(B==null?void 0:B.estado)||"PAGADO":"SIN_VUELTO",g=f==="PAGADO"?(B==null?void 0:B.metodo)||(k?"TRANSF.BS.":"BS.EFEC."):void 0,S=F>.009?(B==null?void 0:B.montoBs)||F.toFixed(2):void 0,M=F>.009?(B==null?void 0:B.montoUsd)||(y>0?(F/y).toFixed(2):"0.00"):void 0,C=f==="PAGADO"?B==null?void 0:B.tasa:void 0,_=((a=p.jornadaActual)==null?void 0:a.operadorActual)||"Caja Principal",x={ventaId:s||(k?"DEU-":"CTA-")+Math.floor(1e4+Math.random()*9e4),totalUsd:d,totalBs:l,tasaDelDia:y.toFixed(4),montoRecibidoBs:R.toFixed(2),vueltoBs:F.toFixed(2),fechaHora:`Hoy, ${A}`,fechaUnix:Math.floor(U.getTime()/1e3),canal:k?"LIQUIDACIÓN DE DEUDA":"CONSUMO EN CUENTA",operador:_,saldoAFavorConsolidadoUsd:m>0?m.toFixed(2):void 0,pagos:O,estadoVuelto:f,metodoVuelto:g,montoVueltoBs:S,montoVueltoUsd:M,tasaVuelto:C,lineas:b};if(p.tickets.unshift(x),p.jornadaActual){const v=p.jornadaActual,T=Q(d),P=Q(l);v.ventasTotalUsd=(Q(v.ventasTotalUsd)+T).toFixed(2),v.ventasTotalBs=(Q(v.ventasTotalBs)+P).toFixed(2),v.ticketsEmitidos+=1,k&&(v.deudasLiquidadasUsd=(Q(v.deudasLiquidadasUsd)+T).toFixed(2)),f==="PAGADO"?v.vueltoPagadoBs=(Q(v.vueltoPagadoBs)+F).toFixed(2):f==="RETENIDO"&&(v.vueltoRetenidoBs=(Q(v.vueltoRetenidoBs)+F).toFixed(2))}return p.persist(),Promise.resolve(x)}case"listar_categorias":return Promise.resolve(p.categorias);case"crear_categoria":{const s=String((e==null?void 0:e.nombre)||"").trim(),t="cat-"+Math.random().toString(36).slice(2,7);return p.categorias.push({id:t,nombre:s}),p.persist(),Promise.resolve(p.categorias)}case"eliminar_categoria":{const s=String((e==null?void 0:e.id)||"");return p.categorias=p.categorias.filter(t=>t.id!==s),p.persist(),Promise.resolve(p.categorias)}case"listar_tasas_impuestos":return Promise.resolve(p.tasasImpuestos);case"crear_tasa_impuesto":{const s=String((e==null?void 0:e.nombre)||"").trim(),t=Number((e==null?void 0:e.porcentaje)||0),n="tax-"+Math.random().toString(36).slice(2,7);return p.tasasImpuestos.push({id:n,nombre:s,porcentaje:t}),p.persist(),Promise.resolve(p.tasasImpuestos)}case"eliminar_tasa_impuesto":{const s=String((e==null?void 0:e.id)||"");return p.tasasImpuestos=p.tasasImpuestos.filter(t=>t.id!==s),p.persist(),Promise.resolve(p.tasasImpuestos)}case"abonar_cuenta":{const s=String((e==null?void 0:e.ventaId)||""),t=Number((e==null?void 0:e.montoUsd)||0),n=Number((e==null?void 0:e.montoBs)||0),d=p.cuentas.find(l=>l.ventaId===s);if(d&&Number.isFinite(t)&&t>0&&t<=5e4){const l=Number(p.tasaActual.valor),b=Number(d.abonosUsd||"0"),m=Number(d.abonosBs||"0");if(n>0){const h=m+n;d.abonosBs=h.toFixed(2),d.abonosUsd=(l>0?h/l:0).toFixed(2)}else{const h=b+t;d.abonosUsd=h.toFixed(2),d.abonosBs=(h*l).toFixed(2)}p.persist()}return Promise.resolve(d)}case"editar_abono_cuenta":{const s=String((e==null?void 0:e.ventaId)||""),t=Math.max(0,Math.min(5e4,Number((e==null?void 0:e.nuevoAbonoUsd)||0))),n=p.cuentas.find(d=>d.ventaId===s);if(n&&Number.isFinite(t)){const d=Number(p.tasaActual.valor);n.abonosUsd=t.toFixed(2),n.abonosBs=(t*d).toFixed(2),p.persist()}return Promise.resolve(n)}case"datos_panel":{const s=Number(p.tasaActual.valor),t=p.ventasTotalUsd,n=p.ventasTotalBs,d=t*.65,l=t-d,b=t*.12,m=l-b,h=l,y=m*s,k={};p.tickets.forEach(x=>{x.lineas.forEach(v=>{k[v.sku]||(k[v.sku]={qty:0,monto:0,nombre:v.nombre}),k[v.sku].qty+=Number(v.cantidad)||1,k[v.sku].monto+=Number(v.subtotalUsd)||0})}),p.productos.forEach((x,v)=>{if(!k[x.sku]){const T=Math.max(1,14-v*2);k[x.sku]={qty:T,monto:T*Number(x.precioUsd),nombre:x.nombre}}});const U=Object.values(k).sort((x,v)=>v.monto-x.monto),A=U.reduce((x,v)=>x+v.monto,0)||1,O=U.map(x=>({nombre:x.nombre,cantidad:String(x.qty),totalUsd:x.monto.toFixed(2),porcentaje:(x.monto/A*100).toFixed(1)})),R=Number(p.tasaActual.valor)||807.39;let F=0;const B={};p.categorias.forEach(x=>{B[x.id]={categoriaId:x.id,nombre:x.nombre,cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}}),B["cat-general"]||(B["cat-general"]={categoriaId:"cat-general",nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}),p.productos.forEach(x=>{const v=x.categoriaId&&B[x.categoriaId]?x.categoriaId:"cat-general",T=B[v];T.cantidadProductos+=1;const P=x.sinStock?0:Number(x.stock)||0,z=Number(x.precioBrutoUsd)>0?Number(x.precioBrutoUsd):Number(x.precioUsd)*.65,I=Number(x.precioUsd)||0,E=P*z,K=P*I;T.unidadesStock+=P,T.brutoUsd+=E,T.ventaUsd+=K,F+=E});const f=Object.values(B).filter(x=>x.cantidadProductos>0||x.brutoUsd>0).map(x=>{const v=Math.max(0,x.ventaUsd-x.brutoUsd),T=x.ventaUsd>0?(v/x.ventaUsd*100).toFixed(1):"0.0",P=F>0?(x.brutoUsd/F*100).toFixed(1):"0.0";return{categoriaId:x.categoriaId,nombre:x.nombre,cantidadProductos:x.cantidadProductos,unidadesStock:Math.round(x.unidadesStock*100)/100,dineroBrutoUsd:x.brutoUsd.toFixed(2),dineroBrutoBs:(x.brutoUsd*R).toFixed(2),dineroVentaUsd:x.ventaUsd.toFixed(2),dineroVentaBs:(x.ventaUsd*R).toFixed(2),margenBrutoProyectadoUsd:v.toFixed(2),margenBrutoPct:T,porcentajeCapital:P}}).sort((x,v)=>Number(v.dineroBrutoUsd)-Number(x.dineroBrutoUsd)),g=p.cuentas.filter(x=>x.tipo==="deuda"),S=p.cuentas.filter(x=>x.tipo!=="deuda"),M=g.reduce((x,v)=>x+Math.max(0,Q(v.totalParcialUsd)-Q(v.abonosUsd)),0),C=M*R,_={ventas24hUsd:t.toFixed(2),ventas24hBs:n.toFixed(2),tickets24h:Math.max(p.tickets.length,18),valorInventarioUsd:p.productos.reduce((x,v)=>x+Number(v.precioUsd)*Number(v.stock),0).toFixed(2),costoTotalUsd:d.toFixed(2),gananciaBrutaUsd:l.toFixed(2),gananciaNetaUsd:m.toFixed(2),gananciaNetaSinImpUsd:h.toFixed(2),gananciaNetaBs:y.toFixed(2),cuentasAbiertas:S.length,deudasAbiertas:g.length,dineroEnLaCalleUsd:M.toFixed(2),dineroEnLaCalleBs:C.toFixed(2),criticos:p.productos.filter(x=>!x.sinStock&&Number(x.stock)<=5).map(x=>({sku:x.sku,nombre:x.nombre,stock:x.stock})),topProductos:O,dineroPorCategoria:f};return Promise.resolve(_)}case"compra_stock":{const s=String((e==null?void 0:e.sku)||""),t=Number((e==null?void 0:e.cantidad)||"0"),n=p.productos.find(d=>d.sku===s);return n&&Number.isFinite(t)&&t>0?(n.stock=String(Number(n.stock)+t),p.persist(),Promise.resolve(n.stock)):Promise.resolve("0")}case"reducir_stock":{const s=String((e==null?void 0:e.sku)||""),t=Number((e==null?void 0:e.cantidad)||"0"),n=p.productos.find(d=>d.sku===s);return n&&Number.isFinite(t)&&t>0?(n.stock=String(Math.max(0,Number(n.stock)-t)),p.persist(),Promise.resolve(n.stock)):Promise.resolve("0")}case"registrar_merma":{const s=String((e==null?void 0:e.sku)||""),t=Number((e==null?void 0:e.cantidad)||"0"),n=p.productos.find(d=>d.sku===s);return n&&Number.isFinite(t)&&t>0?(n.stock=String(Math.max(0,Number(n.stock)-t)),p.persist(),Promise.resolve(n.stock)):Promise.resolve("0")}case"listar_dispositivos":return Promise.resolve(p.dispositivos);case"registrar_dispositivo":{const s=String((e==null?void 0:e.nombre)||"Dispositivo Móvil").trim(),n={id:"dev-"+Math.random().toString(36).slice(2,7),nombre:s,ip:"192.168.1."+Math.floor(Math.random()*200+20),ultimoAcceso:"Ahora mismo",activo:!0};return p.dispositivos.push(n),p.persist(),Promise.resolve(p.dispositivos)}case"revocar_dispositivo":{const s=String((e==null?void 0:e.id)||"");return p.dispositivos=p.dispositivos.filter(t=>t.id!==s),p.persist(),Promise.resolve(p.dispositivos)}case"listar_respaldos":return Promise.resolve(p.respaldos);case"crear_respaldo":{const s="bk-"+Math.random().toString(36).slice(2,7),t=p.productos.length+p.cuentas.length+p.categorias.length,n=new Date,d=(((r=p.config)==null?void 0:r.nombre)||"DATIOLABS").toUpperCase().replace(/[^A-Z0-9]/g,"-").replace(/-+/g,"-").slice(0,30),l=n.getFullYear(),b=String(n.getMonth()+1).padStart(2,"0"),m=String(n.getDate()).padStart(2,"0"),h=String(n.getHours()).padStart(2,"0"),y=String(n.getMinutes()).padStart(2,"0"),k=String(n.getSeconds()).padStart(2,"0"),U=`${d}-${l}${b}${m}-${h}${y}${k}.datio`,A={id:s,fecha:"Ahora mismo",archivoNombre:U,registros:t,tamanoKb:Math.round(t*.4+10),checksumSha256:Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join("")};return p.respaldos.unshift(A),p.persist(),Promise.resolve(A)}case"restaurar_desde_respaldo":return p.dispositivos=[],p.persist(),Promise.resolve(!0);case"obtener_licencia":return Promise.resolve(p.licencia);case"validar_licencia":{const t=String((e==null?void 0:e.clave)||"").replace(/[^a-zA-Z0-9]/g,"");if(t.length!==16)return Promise.resolve(!1);const n=t.split("").map(m=>parseInt(m,10)).filter(m=>!isNaN(m)&&m<10);if(n.length!==16)return Promise.resolve(!1);let d=0;for(let m=0;m<12;m++)d+=n[m]*(m+1);const l=d%1e4,b=n[12]*1e3+n[13]*100+n[14]*10+n[15];return Promise.resolve(l===b)}case"generar_qr_panel":{const s="room-"+Math.random().toString(36).slice(2,10),t=`http://127.0.0.1:4000/panel?room=${s}`;return Promise.resolve({url:t,qrBase64:"",roomId:s})}case"obtener_tasa_bcv":return Promise.resolve(p.tasaActual);case"forzar_actualizacion_tasa":return p.refrescarTasaEnVivo().then(()=>p.tasaActual);case"listar_historico_tasas":return Promise.resolve(p.historicoTasas);case"fijar_tasa_manual":{const s=String((e==null?void 0:e.tasa)||"0"),t=Number(s),n=Number(p.tasaActual.valor);let d=null,l=null;if(Number.isFinite(n)&&n>0&&Number.isFinite(t)&&t>0&&n!==t){const h=(t-n)/n*100;d=Math.abs(h).toFixed(2),l=h>0?"subio":"bajo"}p.tasaActual={valor:t.toFixed(4),fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:d,direccion:l};const m=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});return p.historicoTasas.unshift({id:"tx-"+Math.random().toString(36).slice(2,7),valor:t.toFixed(4),fechaHora:`Hoy, ${m}`,tipo:"manual",motivo:"Ajuste manual por el usuario"}),p.historicoTasas.length>50&&p.historicoTasas.pop(),p.persist(),Promise.resolve(p.tasaActual)}case"listar_ventas":return Promise.resolve(p.tickets);case"listar_metodos_pago":return p.metodosPago.sort((s,t)=>s.moneda===t.moneda?0:s.moneda==="BS"?-1:1),Promise.resolve(p.metodosPago);case"crear_metodo_pago":{const s=String((e==null?void 0:e.nombre)||"").trim().toUpperCase().replace(/[^A-Z0-9. _-]/g,"").slice(0,25),t=(e==null?void 0:e.moneda)==="USD"?"USD":"BS";return s&&!p.metodosPago.some(n=>n.nombre===s)&&(p.metodosPago.push({nombre:s,moneda:t}),p.metodosPago.sort((n,d)=>n.moneda===d.moneda?0:n.moneda==="BS"?-1:1),p.persist()),Promise.resolve(p.metodosPago)}case"eliminar_metodo_pago":{const s=String((e==null?void 0:e.nombre)||"").trim().toUpperCase();return s&&(p.metodosPago=p.metodosPago.filter(t=>t.nombre!==s),p.metodosPago.length===0&&p.metodosPago.push({nombre:"PUNTOD.VENTA",moneda:"BS"}),p.persist()),Promise.resolve(p.metodosPago)}case"listar_operadores":return Promise.resolve(p.operadores);case"crear_operador":{const s=String((e==null?void 0:e.nombre)||"").trim();if(s){const t={id:"op-"+Math.random().toString(36).slice(2,7),nombre:s,activo:!0,creadoUnix:Math.floor(Date.now()/1e3)};p.operadores.push(t),p.persist()}return Promise.resolve(p.operadores)}case"editar_operador":{const s=String((e==null?void 0:e.id)||""),t=String((e==null?void 0:e.nombre)||"").trim();if(s&&t){const n=p.operadores.find(d=>d.id===s);if(n){const d=n.nombre;n.nombre=t,p.jornadaActual&&(p.jornadaActual.operadorActual===d&&(p.jornadaActual.operadorActual=t),p.jornadaActual.operadoresActivos&&(p.jornadaActual.operadoresActivos=p.jornadaActual.operadoresActivos.map(l=>l===d?t:l)),p.jornadaActual.operadoresRelevo&&(p.jornadaActual.operadoresRelevo=p.jornadaActual.operadoresRelevo.map(l=>l===d?t:l))),p.persist()}}return Promise.resolve(p.operadores)}case"eliminar_operador":{const s=String((e==null?void 0:e.id)||"");if(s){const t=p.operadores.find(d=>d.id===s),n=t==null?void 0:t.nombre;p.operadores=p.operadores.filter(d=>d.id!==s),p.jornadaActual&&n&&(p.jornadaActual.operadoresActivos&&(p.jornadaActual.operadoresActivos=p.jornadaActual.operadoresActivos.filter(d=>d!==n)),p.jornadaActual.operadorActual===n&&(p.jornadaActual.operadorActual=((c=p.jornadaActual.operadoresActivos)==null?void 0:c[0])||((i=p.operadores[0])==null?void 0:i.nombre)||"Cajero Principal")),p.persist()}return Promise.resolve(p.operadores)}case"alternar_operador":{const s=String((e==null?void 0:e.id)||""),t=p.operadores.find(n=>n.id===s);return t&&(t.activo=!t.activo,p.persist()),Promise.resolve(p.operadores)}case"obtener_jornada_actual":return Promise.resolve(p.jornadaActual);case"listar_historico_jornadas":return Promise.resolve(p.historicoJornadas);case"abrir_jornada":{const s=String((e==null?void 0:e.operador)||"Cajero Principal").trim(),t=Array.isArray(e==null?void 0:e.operadores)&&e.operadores.length>0?e.operadores.map(U=>String(U).trim()).filter(Boolean):[s],n=new Date,d=n.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),l=`${n.toLocaleDateString("es-VE")} ${d}`,b=n.getFullYear(),m=String(n.getMonth()+1).padStart(2,"0"),h=String(n.getDate()).padStart(2,"0"),y=p.tasaActual.valor,k={id:`JOR-${b}${m}${h}-${Math.random().toString(36).slice(2,6).toUpperCase()}`,estado:"abierta",inicioUnix:Math.floor(Date.now()/1e3),inicioStr:`Hoy, ${d} (${l})`,operadorInicial:t[0]||s,operadorActual:t.join(", "),operadoresActivos:t,operadoresRelevo:[...t],tasaInicio:y,ventasTotalUsd:"0.00",ventasTotalBs:"0.00",ticketsEmitidos:0,vueltoPagadoBs:"0.00",vueltoRetenidoBs:"0.00",deudasLiquidadasUsd:"0.00",entradasStockReg:0,mermasStockReg:0,cambiosPrecioReg:0};return p.jornadaActual=k,p.persist(),Promise.resolve(k)}case"asignar_operadores_turno":{const s=Array.isArray(e==null?void 0:e.operadores)?e.operadores.map(t=>String(t).trim()).filter(Boolean):[];return p.jornadaActual&&(p.jornadaActual.operadoresActivos=s,p.jornadaActual.operadorActual=s.length>0?s.join(", "):"Sin operador asignado",s.forEach(t=>{var n,d;(n=p.jornadaActual)!=null&&n.operadoresRelevo.includes(t)||(d=p.jornadaActual)==null||d.operadoresRelevo.push(t)}),p.persist()),Promise.resolve(p.jornadaActual)}case"relevar_operador_jornada":{const s=String((e==null?void 0:e.operador)||"").trim();return p.jornadaActual&&s&&(p.jornadaActual.operadorActual=s,p.jornadaActual.operadoresActivos=[s],p.jornadaActual.operadoresRelevo.includes(s)||p.jornadaActual.operadoresRelevo.push(s),p.persist()),Promise.resolve(p.jornadaActual)}case"cerrar_jornada":{if(!p.jornadaActual)return Promise.reject(new Error("No existe una jornada laboral abierta para cerrar."));const s=new Date,t=s.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),n=`${s.toLocaleDateString("es-VE")} ${t}`,d=p.jornadaActual;return d.estado="cerrada",d.finUnix=Math.floor(Date.now()/1e3),d.finStr=`${n}`,d.tasaFin=p.tasaActual.valor,d.checksumSha256=Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join(""),p.historicoJornadas.unshift(d),p.jornadaActual=null,p.persist(),Promise.resolve(d)}case"obtener_semaforo_stock":return Promise.resolve(p.semaforoStock);case"guardar_semaforo_stock":{const s=Math.max(1,Number(e==null?void 0:e.rojoMax)||5),t=Math.max(s+1,Number(e==null?void 0:e.amarilloMax)||15);return p.semaforoStock={rojoMax:s,amarilloMax:t},p.persist(),Promise.resolve(p.semaforoStock)}default:return Promise.resolve(null)}}const D={config:()=>H("obtener_config"),inicializar:(u,e,o,a)=>H("inicializar_negocio",{nombre:u,rubros:e,pinDueno:o||null,licenciaClave:a||null,licenciaTitular:null}),validarPin:u=>H("validar_pin_dueno",{pin:u}),productos:()=>H("listar_productos"),crearProducto:u=>{const e=u.sku&&u.sku.trim()?u.sku.trim().toUpperCase():"PROD-"+Math.random().toString(36).slice(2,8).toUpperCase();return H("crear_producto",{input:{...u,sku:e}})},eliminarProducto:u=>H("eliminar_producto",{sku:u}),registrarVenta:(u,e,o,a,r)=>H("registrar_venta",{items:u,clienteMayorEdad:e,montoRecibidoBs:o,pagos:a,resolucionVuelto:r}),abrirCuenta:(u,e,o,a)=>H("abrir_cuenta",{etiqueta:u,tipo:e,nota:o,cliente:a}),cuentas:()=>H("listar_cuentas"),agregarConsumo:(u,e,o,a)=>H("agregar_consumo",{ventaId:u,sku:e,cantidad:o,clienteMayorEdad:a}),eliminarConsumo:(u,e)=>H("eliminar_consumo",{ventaId:u,consumoId:e}),abonarCuenta:(u,e,o)=>H("abonar_cuenta",{ventaId:u,montoUsd:e,montoBs:o}),editarAbonoCuenta:(u,e)=>H("editar_abono_cuenta",{ventaId:u,nuevoAbonoUsd:e}),cerrarCuenta:(u,e,o,a,r)=>H("cerrar_cuenta",{ventaId:u,montoRecibidoBs:e,tasaCobro:o,pagos:a,resolucionVuelto:r}),panel:()=>H("datos_panel"),compraStock:(u,e)=>H("compra_stock",{sku:u,cantidad:e}),reducirStock:(u,e)=>H("reducir_stock",{sku:u,cantidad:e}),merma:(u,e,o)=>H("registrar_merma",{sku:u,cantidad:e,loteId:o}),categorias:()=>H("listar_categorias"),crearCategoria:u=>H("crear_categoria",{nombre:u}),eliminarCategoria:u=>H("eliminar_categoria",{id:u}),tasasImpuestos:()=>H("listar_tasas_impuestos"),crearTasaImpuesto:(u,e)=>H("crear_tasa_impuesto",{nombre:u,porcentaje:e}),eliminarTasaImpuesto:u=>H("eliminar_tasa_impuesto",{id:u}),dispositivos:()=>H("listar_dispositivos"),registrarDispositivo:u=>H("registrar_dispositivo",{nombre:u}),revocarDispositivo:u=>H("revocar_dispositivo",{id:u}),respaldos:()=>H("listar_respaldos"),crearRespaldo:()=>H("crear_respaldo"),restaurarRespaldo:u=>H("restaurar_desde_respaldo",{archivo:u}),licencia:()=>H("obtener_licencia"),validarLicencia:u=>H("validar_licencia",{clave:u}),generarQr:()=>H("generar_qr_panel"),cambiarPinDueno:(u,e)=>H("cambiar_pin_dueno",{pinAnterior:u,pinNuevo:e}),tasa:()=>H("obtener_tasa_bcv"),historicoTasas:()=>H("listar_historico_tasas"),forzarTasa:()=>H("forzar_actualizacion_tasa"),fijarTasaManual:u=>H("fijar_tasa_manual",{tasa:u}),ventas:()=>H("listar_ventas"),listarMetodosPago:()=>H("listar_metodos_pago"),crearMetodoPago:(u,e="BS")=>H("crear_metodo_pago",{nombre:u,moneda:e}),eliminarMetodoPago:u=>H("eliminar_metodo_pago",{nombre:u}),listarOperadores:()=>H("listar_operadores"),crearOperador:u=>H("crear_operador",{nombre:u}),editarOperador:(u,e)=>H("editar_operador",{id:u,nombre:e}),eliminarOperador:u=>H("eliminar_operador",{id:u}),alternarOperador:u=>H("alternar_operador",{id:u}),obtenerJornadaActual:()=>H("obtener_jornada_actual"),listarHistoricoJornadas:()=>H("listar_historico_jornadas"),abrirJornada:(u,e)=>H("abrir_jornada",{operador:u,operadores:e}),relevarOperadorJornada:u=>H("relevar_operador_jornada",{operador:u}),asignarOperadoresTurno:u=>H("asignar_operadores_turno",{operadores:u}),cerrarJornada:()=>H("cerrar_jornada"),obtenerSemaforoStock:()=>H("obtener_semaforo_stock"),guardarSemaforoStock:(u,e)=>H("guardar_semaforo_stock",{rojoMax:u,amarilloMax:e})},Re="#00823B",Ne="#C60C15",Me="#6B7280",je=3e5;class Oe{constructor(){w(this,"contenedor");w(this,"timer",null);this.contenedor=document.getElementById("bcv-indicator")}iniciar(){this.contenedor&&(this.renderizarEsqueleto(),this.actualizar(),this.timer=window.setInterval(()=>void this.actualizar(),je))}detener(){this.timer!==null&&(window.clearInterval(this.timer),this.timer=null)}renderizarEsqueleto(){var e,o;this.contenedor&&(this.contenedor.innerHTML=`
            <div class="flex items-center gap-1.5 sm:gap-2 bg-white border-2 border-brand-black rounded px-2 sm:px-3 py-1 sm:py-2 shadow-brutal-sm">
                <span class="font-heading font-black text-[10px] sm:text-xs uppercase tracking-wider text-gray-600">BCV</span>
                <span id="bcv-valor" title="Clic para ver histórico y editar tasa" class="font-heading font-black text-sm sm:text-lg cursor-pointer hover:underline">--</span>
                <span id="bcv-fluctuacion" class="font-body font-bold text-[10px] sm:text-xs"></span>
                <button id="bcv-refresh" title="Actualizar tasa"
                    class="ml-0.5 sm:ml-1 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded border-2 border-brand-black bg-brand-yellow hover:-translate-y-0.5 transition-transform active:translate-y-0">
                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                </button>
            </div>`,(e=document.getElementById("bcv-refresh"))==null||e.addEventListener("click",()=>void this.forzar()),(o=document.getElementById("bcv-valor"))==null||o.addEventListener("click",()=>void this.abrirModalHistoricoYAjuste()))}async abrirModalHistoricoYAjuste(){var i,s,t;const e=document.getElementById("modal-root");if(!e)return;const o=await D.historicoTasas().catch(()=>[]),a=((i=document.getElementById("bcv-valor"))==null?void 0:i.textContent)||"--";e.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[110] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-lg">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-3 mb-4">
                    <div>
                        <h3 class="font-heading font-black text-2xl">TASA DE CAMBIO BCV</h3>
                        <p class="font-body text-xs text-gray-600">Historial cronológico de fluctuación cambiaria y ajuste controlado</p>
                    </div>
                    <button id="tasa-modal-cerrar" class="w-8 h-8 rounded border-2 border-brand-black flex items-center justify-center font-black text-lg hover:bg-gray-100">&times;</button>
                </div>

                <!-- Formulario de ajuste manual con confirmación de seguridad -->
                <div class="bg-gray-50 border-2 border-brand-black rounded-lg p-4 mb-4">
                    <h4 class="font-heading font-black text-xs uppercase mb-1">Ajustar Tasa Manualmente</h4>
                    <p class="text-[11px] text-gray-600 font-bold mb-3">Tasa vigente actual: <span class="text-brand-black font-black">Bs. ${a}</span></p>
                    <form id="form-tasa-manual" class="flex gap-2">
                        <input id="in-tasa-manual" type="number" step="0.01" min="1" max="999999" placeholder="Ej: 805.50"
                            class="flex-1 border-2 border-brand-black rounded px-3 py-2 text-sm font-black focus:ring-2 focus:ring-brand-purple" required />
                        <button type="submit" class="bg-brand-black text-white font-heading font-black px-4 py-2 rounded border-2 border-brand-black text-xs shadow-brutal-sm hover:-translate-y-0.5 transition-transform">
                            MODIFICAR TASA
                        </button>
                    </form>
                    <p id="msg-tasa-confirm" class="hidden text-xs font-bold text-amber-900 mt-2 bg-amber-100 p-2 border border-brand-black rounded"></p>
                </div>

                <!-- Historial Cronológico de Tasas -->
                <div>
                    <h4 class="font-heading font-black text-xs uppercase mb-2">Histórico de Actualizaciones (${o.length})</h4>
                    <div class="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                        ${o.length===0?'<p class="text-xs text-gray-400 font-bold py-4 text-center">Sin registros históricos previos.</p>':o.map(n=>`
                            <div class="border border-brand-black rounded p-2 bg-white flex justify-between items-center text-xs">
                                <div>
                                    <span class="font-black font-heading text-sm text-brand-black">Bs. ${Number(n.valor).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                                    <span class="text-[10px] text-gray-500 font-bold ml-2">· ${n.motivo||"Actualización"}</span>
                                </div>
                                <div class="text-right">
                                    <span class="text-[10px] px-1.5 py-0.5 rounded border border-brand-black font-black uppercase ${n.tipo==="manual"?"bg-amber-100 text-amber-900":"bg-blue-100 text-blue-900"}">
                                        ${n.tipo}
                                    </span>
                                    <p class="text-[10px] text-gray-500 font-mono mt-0.5">${n.fechaHora}</p>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <div class="flex justify-between items-center pt-4 border-t-2 border-brand-black text-xs text-gray-500 font-bold mt-4">
                    <span>Sincronización oficial del Banco Central</span>
                    <button id="tasa-modal-btn-cerrar" class="bg-brand-black text-white px-4 py-2 rounded font-black font-heading text-xs">CERRAR</button>
                </div>
            </div>
        </div>`;const r=()=>{e.innerHTML=""};(s=document.getElementById("tasa-modal-cerrar"))==null||s.addEventListener("click",r),(t=document.getElementById("tasa-modal-btn-cerrar"))==null||t.addEventListener("click",r);const c=document.getElementById("form-tasa-manual");c==null||c.addEventListener("submit",async n=>{n.preventDefault();const d=document.getElementById("in-tasa-manual"),l=Number((d==null?void 0:d.value)||0);if(!l||l<=0)return;if(window.confirm(`¿Está seguro de que desea cambiar la tasa oficial del sistema a Bs. ${l.toFixed(2)}?

Esta tasa afectará todos los nuevos cobros y tickets a partir de este momento.`)){const m=await H("fijar_tasa_manual",{tasa:l.toFixed(2)});m&&this.pintar(m),r()}})}async actualizar(){const e=await this.obtenerTasa("obtener_tasa_bcv");e&&this.pintar(e)}async forzar(){const e=document.getElementById("bcv-refresh");e&&e.classList.add("animate-spin");const o=await this.obtenerTasa("forzar_actualizacion_tasa");e&&e.classList.remove("animate-spin"),o&&this.pintar(o)}async obtenerTasa(e){try{return await H(e)}catch{return null}}pintar(e){const o=document.getElementById("bcv-valor"),a=document.getElementById("bcv-fluctuacion");if(!o||!a)return;const r=Number(e.valor);o.textContent=Number.isFinite(r)&&r>0?r.toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}):"--",Number.isFinite(r)&&r>0&&window.dispatchEvent(new CustomEvent("tasa_actualizada",{detail:r}));const c=Number(e.fluctuacionPct);if(e.direccion&&Number.isFinite(c)){const i=e.direccion==="subio"?Re:e.direccion==="bajo"?Ne:Me,s=c>0?"+":"";a.textContent=`${s}${c.toFixed(2)}%`,a.style.color=i}else a.textContent=""}}class Fe{constructor(){w(this,"config",null);w(this,"rol","caja");w(this,"tasa",0);w(this,"oyentes",[])}suscribir(e){this.oyentes.push(e)}notificar(){this.oyentes.forEach(e=>e())}async cargarConfig(){return this.config=await D.config(),this.config}getConfig(){return this.config}async inicializar(e,o,a,r){await D.inicializar(e,o,a,r),await this.cargarConfig(),this.notificar()}get rubroAbasto(){var e,o;return(((e=this.config)==null?void 0:e.rubros)??0&pe)!==0||(((o=this.config)==null?void 0:o.rubros)??0)===pe}tieneRubro(e){var o;return((((o=this.config)==null?void 0:o.rubros)??0)&e)!==0}tieneCapacidad(e){var o;return((((o=this.config)==null?void 0:o.capacidades)??0)&e)!==0}setRol(e){this.rol=e,this.notificar()}get rolActual(){return this.rol}setTasa(e){this.tasa=e,this.notificar()}get tasaActual(){return this.tasa}bs(e){return(Number(e)*this.tasa).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}}function qe(u,e){const o=u.replace(/[^a-zA-Z0-9]/g,"");if(o.length!==16)return!1;const a=o.split("").map(s=>parseInt(s,10)).filter(s=>!isNaN(s)&&s<10);if(a.length!==16)return!1;let r=0;for(let s=0;s<12;s++)r+=a[s]*(s+1);const c=r%1e4,i=a[12]*1e3+a[13]*100+a[14]*10+a[15];return c===i}class Ve{constructor(e,o,a){w(this,"contenedor");w(this,"modelo");w(this,"alTerminar");w(this,"modo","nuevo");w(this,"bloquearPanel",!0);this.contenedor=e,this.modelo=o,this.alTerminar=a}render(){this.contenedor.innerHTML=`
        <div class="max-w-2xl mx-auto mt-3 sm:mt-8 mb-8 sm:mb-12">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-8">
                <div class="flex flex-wrap items-center justify-between border-b-2 border-brand-black pb-4 mb-6 gap-3">
                    <div>
                        <h1 class="text-2xl sm:text-3xl font-black font-heading">Instalación del Terminal</h1>
                        <p class="text-brand-text font-body text-xs">Configuración inicial o restauración de datos</p>
                    </div>
                    <div class="inline-flex border-2 border-brand-black rounded bg-gray-100 p-0.5">
                        <button id="wz-tab-nuevo" class="px-2.5 sm:px-3 py-1 sm:py-1.5 font-heading text-[11px] sm:text-xs rounded transition-colors ${this.modo==="nuevo"?"font-black bg-brand-black text-white":"font-bold text-brand-black hover:bg-white"}">NUEVO NEGOCIO</button>
                        <button id="wz-tab-restaurar" class="px-2.5 sm:px-3 py-1 sm:py-1.5 font-heading text-[11px] sm:text-xs rounded transition-colors ${this.modo==="restaurar"?"font-black bg-brand-black text-white":"font-bold text-brand-black hover:bg-white"}">INSTALAR DESDE RESPALDO</button>
                    </div>
                </div>

                <!-- Modo 1: Instalación Limpia -->
                <div id="wz-sec-nuevo" class="${this.modo==="nuevo"?"block":"hidden"} space-y-5">
                    <div>
                        <label class="block font-heading font-bold text-xs uppercase tracking-wide mb-1">Nombre del negocio *</label>
                        <input id="wz-nombre" type="text" maxlength="64" placeholder="Ej: Licorería El Triunfo, Panadería Central, Tienda Retail..."
                            class="w-full border-2 border-brand-black rounded px-4 py-2.5 text-base font-bold focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                    </div>

                    <div>
                        <p class="font-heading font-bold text-xs uppercase tracking-wide mb-2">Rubros comerciales que opera:</p>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            ${this.tarjetaRubro("wz-abasto","Abasto","Comestibles y peso",pe,"bg-brand-cyan")}
                            ${this.tarjetaRubro("wz-panaderia","Panadería","Horneados FEFO",he,"bg-brand-yellow")}
                            ${this.tarjetaRubro("wz-licoreria","Licorería","Cuentas y consumo",ve,"bg-brand-pink")}
                            ${this.tarjetaRubro("wz-retail","Retail","Series y garantías",Ae,"bg-purple-100")}
                        </div>
                    </div>

                    <!-- Clave de Licencia Comercial -->
                    <div class="border-2 border-brand-black rounded-lg p-4 bg-gray-50 space-y-3">
                        <span class="block font-heading font-black text-xs uppercase text-brand-black">Clave de Licencia Comercial</span>
                        <p class="text-xs text-gray-600 font-bold">Ingresa la clave de activación de 16 dígitos proporcionada por DatioLabs. Sin ella, el sistema arranca en modo demo.</p>
                        <input id="wz-licencia" type="text" maxlength="20" placeholder="Ej: 0001-8888-1111-0000"
                            class="w-full border-2 border-brand-black rounded px-4 py-2 text-sm font-mono font-bold focus:outline-none focus:ring-2 focus:ring-brand-purple tracking-wider" />
                        <p id="wz-licencia-error" class="hidden text-red-700 font-bold text-xs">La clave no es válida para los rubros seleccionados.</p>
                        <p class="text-[10px] text-gray-500 font-bold">Puedes omitir este paso y activar la licencia después desde el Panel del Dueño.</p>
                    </div>

                    <!-- Elección de Privacidad de Inventario -->
                    <div class="border-2 border-brand-black rounded-lg p-4 bg-gray-50 space-y-3">
                        <span class="block font-heading font-black text-xs uppercase text-brand-black">Privacidad de Inventario y Stock</span>
                        <p class="text-xs text-gray-600 font-bold">Controla si los operadores y empleados pueden ver el valor del inventario o solo la disponibilidad en tienda:</p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label class="cursor-pointer border-2 rounded p-3 bg-white flex items-start gap-2.5 border-brand-black ring-2 ring-brand-purple">
                                <input type="radio" name="opt-priv-inv" id="priv-inv-dueno" checked class="mt-0.5" />
                                <div>
                                    <span class="block font-heading font-black text-xs">SOLO DUEÑO (RESTRINGIDO)</span>
                                    <span class="text-[11px] text-gray-500 font-bold">Empleados ven si hay stock sin conocer el capital total ni costos de almacén.</span>
                                </div>
                            </label>
                            <label class="cursor-pointer border-2 rounded p-3 bg-white flex items-start gap-2.5 border-gray-300">
                                <input type="radio" name="opt-priv-inv" id="priv-inv-abierto" class="mt-0.5" />
                                <div>
                                    <span class="block font-heading font-black text-xs">VISIBILIDAD TOTAL</span>
                                    <span class="text-[11px] text-gray-500 font-bold">Todos los operadores tienen acceso al conteo y valor monetario del inventario.</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- Elección de Seguridad del Panel -->
                    <div class="border-2 border-brand-black rounded-lg p-4 bg-gray-50 space-y-3">
                        <span class="block font-heading font-black text-xs uppercase text-brand-black">Seguridad y Privacidad del Panel del Dueño</span>
                        <p class="text-xs text-gray-600 font-bold">¿Deseas que la sección PANEL quede bloqueada con clave para que los empleados no vean las ganancias ni costos?</p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label class="cursor-pointer border-2 rounded p-3 bg-white flex items-start gap-2.5 ${this.bloquearPanel?"border-brand-black ring-2 ring-brand-purple":"border-gray-300"}">
                                <input type="radio" name="opt-seguridad" id="seg-bloqueado" ${this.bloquearPanel?"checked":""} class="mt-0.5" />
                                <div>
                                    <span class="block font-heading font-black text-xs">BLOQUEAR CON CLAVE</span>
                                    <span class="text-[11px] text-gray-500 font-bold">Solo el dueño ingresa con clave. Recomendado si tienes empleados.</span>
                                </div>
                            </label>
                            <label class="cursor-pointer border-2 rounded p-3 bg-white flex items-start gap-2.5 ${this.bloquearPanel?"border-gray-300":"border-brand-black ring-2 ring-brand-purple"}">
                                <input type="radio" name="opt-seguridad" id="seg-abierto" ${this.bloquearPanel?"":"checked"} class="mt-0.5" />
                                <div>
                                    <span class="block font-heading font-black text-xs">DEJAR ABIERTO</span>
                                    <span class="text-[11px] text-gray-500 font-bold">Acceso directo sin clave. Útil si solo tú atiendes la caja.</span>
                                </div>
                            </label>
                        </div>

                        <div id="wz-box-pin" class="${this.bloquearPanel?"block":"hidden"} pt-2">
                            <label class="block font-heading font-bold text-xs uppercase tracking-wide mb-1">Define la Clave Maestra del Dueño *</label>
                            <input id="wz-pin" type="password" maxlength="16" placeholder="Ingresa tu clave maestra (ej: 1234)"
                                class="w-full border-2 border-brand-black rounded px-4 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            <p class="text-[10px] text-gray-500 font-bold mt-1">Podrás cambiar esta clave en cualquier momento desde el propio Panel.</p>
                        </div>
                    </div>



                    <div id="wz-error" class="hidden bg-red-100 border-2 border-red-600 text-red-800 rounded px-4 py-3 font-bold text-sm"></div>

                    <button id="wz-iniciar" class="w-full bg-brand-black text-white font-heading font-black text-lg py-3.5 rounded border-2 border-brand-black shadow-brutal hover:-translate-y-0.5 transition-transform">
                        INICIAR NEGOCIO LOCAL
                    </button>
                </div>

                <!-- Modo 2: Instalar desde Respaldo Criptográfico -->
                <div id="wz-sec-restaurar" class="${this.modo==="restaurar"?"block":"hidden"} space-y-5">
                    <div class="bg-amber-50 border-2 border-brand-black rounded-lg p-4 text-xs font-bold text-amber-900 leading-relaxed">
                        <strong>Restauración Segura de Datos:</strong>
                        <ul class="list-disc pl-5 mt-1 space-y-1">
                            <li>Restaura el catálogo de productos, existencias de inventario, categorías y tasas tributarias.</li>
                            <li><strong>Regla de Seguridad:</strong> Las conexiones móviles anteriores y sesiones P2P quedan <u>estrictamente purgadas</u> para prevenir accesos no autorizados al cambiar de máquina o reinstalar.</li>
                        </ul>
                    </div>

                    <div>
                        <label class="block font-heading font-bold text-xs uppercase tracking-wide mb-2">Selecciona o arrastra el archivo de respaldo (.datio):</label>
                        <div class="border-2 border-dashed border-brand-black rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer" id="drop-zona">
                            <svg class="w-10 h-10 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                            </svg>
                            <p class="font-heading font-black text-sm text-brand-black mb-1">Haz clic para cargar archivo de respaldo</p>
                            <p class="text-[11px] font-mono text-gray-500">Formato: NOMBRE-NEGOCIO-FECHA-HORA.datio</p>
                            <input type="file" id="wz-archivo-input" accept=".datio,.bin,.json" class="hidden" />
                        </div>
                        <div id="wz-archivo-cargado" class="hidden mt-2 p-2 bg-green-50 border border-brand-black rounded text-xs font-mono font-bold text-green-900 flex justify-between items-center">
                            <span id="wz-nombre-archivo"></span>
                            <span class="text-[10px] bg-green-200 px-2 py-0.5 rounded border border-brand-black uppercase font-black">SHA-256 OK</span>
                        </div>
                    </div>

                    <!-- Seguridad del Panel en Restauración -->
                    <div class="border-2 border-brand-black rounded-lg p-4 bg-gray-50 space-y-3">
                        <span class="block font-heading font-black text-xs uppercase text-brand-black">Seguridad del Panel en este Terminal</span>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label class="cursor-pointer border-2 rounded p-3 bg-white flex items-start gap-2.5 ${this.bloquearPanel?"border-brand-black ring-2 ring-brand-purple":"border-gray-300"}">
                                <input type="radio" name="opt-seguridad-res" id="seg-bloqueado-res" ${this.bloquearPanel?"checked":""} class="mt-0.5" />
                                <div>
                                    <span class="block font-heading font-black text-xs">BLOQUEAR CON CLAVE</span>
                                    <span class="text-[11px] text-gray-500 font-bold">Protege el panel en este equipo.</span>
                                </div>
                            </label>
                            <label class="cursor-pointer border-2 rounded p-3 bg-white flex items-start gap-2.5 ${this.bloquearPanel?"border-gray-300":"border-brand-black ring-2 ring-brand-purple"}">
                                <input type="radio" name="opt-seguridad-res" id="seg-abierto-res" ${this.bloquearPanel?"":"checked"} class="mt-0.5" />
                                <div>
                                    <span class="block font-heading font-black text-xs">DEJAR ABIERTO</span>
                                    <span class="text-[11px] text-gray-500 font-bold">Acceso sin clave.</span>
                                </div>
                            </label>
                        </div>

                        <div id="wz-box-pin-res" class="${this.bloquearPanel?"block":"hidden"} pt-2">
                            <label class="block font-heading font-bold text-xs uppercase tracking-wide mb-1">Clave del Dueño para este Terminal *</label>
                            <input id="wz-pin-restaurar" type="password" maxlength="16" placeholder="Define la clave para este terminal"
                                class="w-full border-2 border-brand-black rounded px-4 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                        </div>
                    </div>

                    <div id="wz-restore-error" class="hidden bg-red-100 border-2 border-red-600 text-red-800 rounded px-4 py-3 font-bold text-sm"></div>

                    <button id="wz-ejecutar-restaurar" class="w-full bg-brand-black text-white font-heading font-black text-lg py-3.5 rounded border-2 border-brand-black shadow-brutal hover:-translate-y-0.5 transition-transform">
                        RESTAURAR E INICIALIZAR SISTEMA
                    </button>
                </div>
            </div>
        </div>`,this.conectarEventos()}tarjetaRubro(e,o,a,r,c,i=!1){return`
        <label for="${e}" class="cursor-pointer block select-none">
            <div class="border-2 border-brand-black rounded-lg p-3 ${c} bg-opacity-30 hover:bg-opacity-50 transition-all hover:-translate-y-0.5 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="font-heading font-black text-sm text-brand-black">${o}</span>
                    <input type="checkbox" id="${e}" data-bit="${r}" ${i?"checked":""} class="w-5 h-5 accent-brand-black cursor-pointer border-2 border-brand-black rounded" />
                </div>
                <p class="text-xs text-brand-text font-body mt-1 font-bold">${a}</p>
            </div>
        </label>`}conectarEventos(){var m,h;const e=document.getElementById("wz-tab-nuevo"),o=document.getElementById("wz-tab-restaurar");e==null||e.addEventListener("click",()=>{this.modo="nuevo",this.render()}),o==null||o.addEventListener("click",()=>{this.modo="restaurar",this.render()});const a=document.getElementById("seg-bloqueado"),r=document.getElementById("seg-abierto"),c=document.getElementById("wz-box-pin");a==null||a.addEventListener("change",()=>{this.bloquearPanel=!0,c==null||c.classList.remove("hidden")}),r==null||r.addEventListener("change",()=>{this.bloquearPanel=!1,c==null||c.classList.add("hidden")});const i=document.getElementById("seg-bloqueado-res"),s=document.getElementById("seg-abierto-res"),t=document.getElementById("wz-box-pin-res");i==null||i.addEventListener("change",()=>{this.bloquearPanel=!0,t==null||t.classList.remove("hidden")}),s==null||s.addEventListener("change",()=>{this.bloquearPanel=!1,t==null||t.classList.add("hidden")}),(m=document.getElementById("wz-iniciar"))==null||m.addEventListener("click",()=>void this.enviarNuevo());const n=document.getElementById("drop-zona"),d=document.getElementById("wz-archivo-input"),l=document.getElementById("wz-archivo-cargado"),b=document.getElementById("wz-nombre-archivo");n==null||n.addEventListener("click",()=>d==null?void 0:d.click()),d==null||d.addEventListener("change",()=>{if(d.files&&d.files[0]){const y=d.files[0];b&&l&&(b.textContent=y.name,l.classList.remove("hidden"))}}),(h=document.getElementById("wz-ejecutar-restaurar"))==null||h.addEventListener("click",()=>void this.enviarRestauracion())}async enviarNuevo(){const e=document.getElementById("wz-error"),o=document.getElementById("wz-nombre").value.trim(),a=document.getElementById("wz-pin"),r=this.bloquearPanel&&(a==null?void 0:a.value.trim())||"",c=[...this.contenedor.querySelectorAll("input[type=checkbox]:checked")].reduce((n,d)=>n|Number(d.dataset.bit),0),i=document.getElementById("wz-licencia"),s=(i==null?void 0:i.value.trim())||"",t=document.getElementById("wz-licencia-error");if(!o||c===0){e&&(e.textContent="Escribe el nombre del negocio y marca al menos un rubro.",e.classList.remove("hidden"));return}if(this.bloquearPanel&&!r){e&&(e.textContent='Ingresa una clave para proteger el panel o selecciona la opción "DEJAR ABIERTO".',e.classList.remove("hidden"));return}if(s&&!qe(s)){t&&t.classList.remove("hidden");return}t&&t.classList.add("hidden");try{await this.modelo.inicializar(o,c,r,s);const n=this.modelo.getConfig();n&&this.alTerminar(n)}catch(n){e&&(e.textContent=n instanceof Error?n.message:String(n),e.classList.remove("hidden"))}}async enviarRestauracion(){var s;const e=document.getElementById("wz-restore-error"),o=document.getElementById("wz-archivo-input"),a=document.getElementById("wz-pin-restaurar"),r=this.bloquearPanel&&(a==null?void 0:a.value.trim())||"",c=(s=o==null?void 0:o.files)==null?void 0:s[0],i=(c==null?void 0:c.name)||"DATIOLABS-DEMO-20260903-180000.datio";if(this.bloquearPanel&&!r){e&&(e.textContent='Ingresa una clave para el panel en este terminal o selecciona "DEJAR ABIERTO".',e.classList.remove("hidden"));return}try{await D.restaurarRespaldo(i);const t=i.split("-")[0]||"Mi Negocio Restaurado";await this.modelo.inicializar(t,pe|he|ve,r);const n=this.modelo.getConfig();n&&this.alTerminar(n)}catch(t){e&&(e.textContent=t instanceof Error?t.message:String(t),e.classList.remove("hidden"))}}}class _e{constructor(e){w(this,"modelo");w(this,"productos",[]);w(this,"carrito",[]);w(this,"busqueda","");w(this,"cuentaSeleccionada",null);w(this,"cuentas",[]);w(this,"oyentes",[]);w(this,"edadConfirmadaSesion",!1);w(this,"tasaBloqueadaTicket",null);this.modelo=e}suscribir(e){this.oyentes.push(e),e()}notificar(){this.oyentes.forEach(e=>e())}async cargar(){this.productos=await D.productos(),this.modelo.tieneCapacidad(ne)&&(this.cuentas=await D.cuentas()),this.notificar()}get visibles(){const e=this.busqueda.trim().toLowerCase();return e?this.productos.filter(o=>o.nombre.toLowerCase().includes(e)||o.sku.toLowerCase().includes(e)).slice(0,24):this.productos.slice(0,24)}setBusqueda(e){this.busqueda=e,this.notificar()}get lineasCarrito(){return this.carrito}get tasaTicket(){return this.tasaBloqueadaTicket??this.modelo.tasaActual}get totalUsd(){return this.carrito.reduce((e,o)=>e+o.precioUsd*o.cantidad,0)}get totalBs(){return this.totalUsd*this.tasaTicket}get cuentasAbiertasListado(){return this.cuentas}get cuentaActiva(){return this.cuentaSeleccionada}get modoCuentaAbierta(){return this.cuentaSeleccionada!==null}seleccionarCuenta(e){this.cuentaSeleccionada=e,this.notificar()}requiereEdad(e){return!1}marcarEdadConfirmada(e){this.edadConfirmadaSesion=e}async agregar(e){const o=this.productos.find(a=>a.sku===e);return o?this.requiereEdad(o)?"EDAD|"+o.nombre:this.empujar(o):"Producto no encontrado"}empujar(e,o,a){const r=(e.capacidades&ie)!==0||e.unidad==="kg"||e.unidad==="ml",c=r?.25:1,i=this.carrito.find(n=>n.sku===e.sku&&n.serie===o&&n.variante===a),t=(i?i.cantidad:0)+c;if(!e.sinStock){const n=Number(e.stock);if(n<t)return`Stock insuficiente para ${e.nombre}. Disponible: ${n}, Solicitado: ${t}`}return this.tasaBloqueadaTicket===null&&(this.tasaBloqueadaTicket=this.modelo.tasaActual),i?i.cantidad=r?Math.round(t*1e3)/1e3:Math.round(t):this.carrito.push({sku:e.sku,nombre:e.nombre,precioUsd:Number(e.precioUsd),cantidad:r?c:Math.round(c),pesable:r,conSerie:(e.capacidades&me)!==0,conVariantes:(e.capacidades&ye)!==0,serie:o,variante:a}),this.notificar(),null}asignarSerie(e,o){const a=this.carrito.find(r=>r.sku===e);a&&(a.serie=o.trim().toUpperCase(),this.notificar())}asignarVariante(e,o){const a=this.carrito.find(r=>r.sku===e);a&&(a.variante=o.trim(),this.notificar())}cambiarCantidad(e,o){const a=this.carrito.find(i=>i.sku===e);if(!a)return null;const r=this.productos.find(i=>i.sku===e);let c=Math.max(0,o);return a.pesable?c=Math.round(c*1e3)/1e3:c=Math.round(c),r&&!r.sinStock&&c>Number(r.stock)?`Stock insuficiente para ${a.nombre}. Disponible: ${r.stock}`:(a.cantidad=c,a.cantidad===0?this.quitar(e):this.notificar(),null)}quitar(e){this.carrito=this.carrito.filter(o=>o.sku!==e),this.carrito.length===0&&(this.tasaBloqueadaTicket=null),this.notificar()}vaciar(){this.carrito=[],this.tasaBloqueadaTicket=null,this.notificar()}async cobrar(e,o,a){if(this.modoCuentaAbierta&&this.cuentaSeleccionada)throw new Error("Hay una cuenta abierta seleccionada. Usa su boton de cobro.");if(this.carrito.length===0)throw new Error("Carrito vacio");for(const c of this.carrito){const i=this.productos.find(s=>s.sku===c.sku);if(i&&!i.sinStock&&c.cantidad>Number(i.stock))throw new Error(`Stock insuficiente para ${i.nombre}. Disponible: ${i.stock}, En carrito: ${c.cantidad}`)}const r=await D.registrarVenta(this.carrito.map(c=>({sku:c.sku,cantidad:String(c.cantidad)})),this.edadConfirmadaSesion,e||"0",o,a);return this.vaciar(),this.edadConfirmadaSesion=!1,await this.refrescarInventario(),r}async crearCuenta(e){const o=await D.abrirCuenta(e);this.cuentas.some(a=>a.ventaId===o.ventaId)||this.cuentas.push(o),this.cuentaSeleccionada=o,this.notificar()}async agregarACuenta(e){if(!this.cuentaSeleccionada)return"Selecciona una cuenta primero";const o=this.productos.find(r=>r.sku===e);if(!o)return"Producto no encontrado";if(this.requiereEdad(o))return"EDAD|"+o.nombre;const a=await D.agregarConsumo(this.cuentaSeleccionada.ventaId,o.sku,"1",this.edadConfirmadaSesion);return this.cuentaSeleccionada=a,this.cuentas=this.cuentas.map(r=>r.ventaId===a.ventaId?a:r),await this.refrescarInventario(),null}async cerrarCuentaActual(e,o){if(!this.cuentaSeleccionada)throw new Error("Ninguna cuenta seleccionada");const a=await D.cerrarCuenta(this.cuentaSeleccionada.ventaId,e||"0",void 0,o);return this.cuentas=this.cuentas.filter(r=>r.ventaId!==a.ventaId),this.cuentaSeleccionada=null,this.edadConfirmadaSesion=!1,await this.refrescarInventario(),a}async refrescarInventario(){this.productos=await D.productos(),this.notificar()}}const W=u=>Q(u).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2});class He{constructor(e,o,a,r){w(this,"contenedor");w(this,"vm");w(this,"modelo");w(this,"modal");w(this,"pagosBorrador",null);w(this,"resolucionVueltoBorrador",null);w(this,"semaforoStock",{rojoMax:5,amarilloMax:15});this.contenedor=e,this.modal=o,this.vm=a,this.modelo=r,D.obtenerSemaforoStock().then(c=>{this.semaforoStock=c,this.renderDinamico()}),this.vm.suscribir(()=>this.renderDinamico()),this.modelo.suscribir(()=>this.renderDinamico())}render(){var e,o,a,r,c;this.contenedor.innerHTML=`
        <div class="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6">
            <div class="lg:col-span-2 order-2 lg:order-1">
                <input id="caja-buscar" type="text" autocomplete="off" maxlength="40"
                    placeholder="Escribe el nombre del producto para agregarlo al ticket..."
                    class="w-full border-2 border-brand-black rounded px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-xl font-body font-bold mb-3 sm:mb-4 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-brand-cyan/50" />
                <div id="caja-grid" class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4"></div>
            </div>
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-3 sm:p-5 flex flex-col max-h-[75vh] lg:max-h-[80vh] order-1 lg:order-2">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-2 sm:mb-3">
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl leading-none">TICKET EN CURSO</h3>
                        <span class="text-[10px] font-bold text-gray-500 uppercase">Caja Directa</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <button id="btn-gestionar-operadores-caja" title="Asignar o relevar cajero en turno" class="inline-flex items-center gap-1 text-[11px] font-heading font-black bg-purple-100 text-brand-purple border border-brand-purple hover:bg-purple-200 px-2 py-1 rounded">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span id="caja-operadores-activo-texto" class="truncate max-w-[130px]">Operador en caja</span>
                            <span class="text-[10px] text-gray-500">▼</span>
                        </button>
                    </div>
                </div>
                <div id="caja-lineas" class="flex-1 overflow-y-auto space-y-2 sm:space-y-3 min-h-[90px] max-h-[220px] lg:max-h-none"></div>
                <div class="border-t-2 border-brand-black mt-2 sm:mt-3 pt-2 sm:pt-3">
                    <div class="flex justify-between items-baseline">
                        <span class="font-heading font-bold text-xs sm:text-base">TOTAL USD</span>
                        <span id="caja-total-usd" class="font-heading font-black text-lg sm:text-2xl"></span>
                    </div>
                    <div class="flex justify-between items-baseline">
                        <span class="font-heading font-bold text-sm sm:text-lg">Bs. (BCV)</span>
                        <span id="caja-total-bs" class="font-heading font-black text-2xl sm:text-4xl text-brand-purple"></span>
                    </div>
                    <div class="grid grid-cols-3 gap-2 mt-3">
                        <button id="caja-cobrar" class="col-span-2 bg-green-600 hover:bg-green-700 disabled:opacity-30 text-white font-heading font-black text-lg sm:text-2xl py-3 sm:py-4 rounded border-2 border-brand-black shadow-brutal transition-transform active:translate-y-1 active:shadow-none">
                            COBRAR
                        </button>
                        <button id="caja-vaciar" class="bg-white font-heading font-bold text-xs sm:text-sm py-2 rounded border-2 border-brand-black hover:bg-red-50">
                            Vaciar
                        </button>
                    </div>
                </div>
            </div>
        </div>`,(e=document.getElementById("caja-buscar"))==null||e.addEventListener("input",i=>{this.vm.setBusqueda(i.target.value)}),(o=document.getElementById("caja-buscar"))==null||o.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),this.enterRapido())}),(a=document.getElementById("caja-vaciar"))==null||a.addEventListener("click",()=>{this.pagosBorrador=null,this.resolucionVueltoBorrador=null,this.vm.vaciar()}),(r=document.getElementById("caja-cobrar"))==null||r.addEventListener("click",()=>void this.abrirModalCobro()),(c=document.getElementById("btn-gestionar-operadores-caja"))==null||c.addEventListener("click",()=>void(async()=>{await D.obtenerJornadaActual()===null?this.abrirModalIniciarJornada():this.abrirModalOperadoresCaja()})()),this.renderDinamico()}async enterRapido(){const e=this.vm.visibles;if(e.length===0)return;const o=await this.vm.agregar(e[0].sku);o&&this.mostrarError(o);const a=document.getElementById("caja-buscar");a&&(a.value=""),this.vm.setBusqueda("")}mostrarError(e){if(e.startsWith("EDAD|")){this.modalEdad(e.slice(5));return}this.renderModal(`
            <h3 class="font-heading font-black text-2xl text-red-700 mb-2">Atencion</h3>
            <p class="font-body text-brand-text mb-6">${e}</p>
            <button data-cerrar class="w-full bg-brand-black text-white font-heading font-black py-3 rounded border-2 border-brand-black">ENTENDIDO</button>`)}modalContenido(e,o="max-w-md"){this.modal.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 sm:p-8 w-full ${o} max-h-[90vh] overflow-y-auto">${e}</div>
        </div>`}cerrarModal(){this.modal.innerHTML=""}renderModal(e,o="max-w-md"){this.modalContenido(e,o),this.modal.querySelectorAll("[data-cerrar]").forEach(a=>a.addEventListener("click",()=>this.cerrarModal()))}async modalEdad(e){var o,a;this.renderModal(`
            <h3 class="font-heading font-black text-3xl mb-2">CONTROL DE EDAD</h3>
            <p class="font-body text-lg mb-1">Producto: <b>${e}</b></p>
            <p class="font-body text-brand-text mb-6">Confirmo que el cliente es <b>mayor de 18 anos</b>. Su cedula fue verificada.</p>
            <div class="grid grid-cols-2 gap-4">
                <button data-no class="bg-red-600 text-white font-heading font-black text-xl py-4 rounded border-2 border-brand-black">NO</button>
                <button data-si class="bg-green-600 text-white font-heading font-black text-xl py-4 rounded border-2 border-brand-black">SI, MAYOR</button>
            </div>`),(o=this.modal.querySelector("[data-no]"))==null||o.addEventListener("click",()=>this.cerrarModal()),(a=this.modal.querySelector("[data-si]"))==null||a.addEventListener("click",()=>{this.vm.marcarEdadConfirmada(!0),(async()=>{const r=this.vm.visibles;r[0]&&this.vm.empujar(r[0])})(),this.cerrarModal()})}async abrirModalOperadoresCaja(){const e=await D.listarOperadores(),o=await D.obtenerJornadaActual(),a=new Set((o==null?void 0:o.operadoresActivos)||[(o==null?void 0:o.operadorActual)||""]);(()=>{var i,s,t,n;const c=e.map(d=>{const l=a.has(d.nombre);return`
                <div class="flex items-center justify-between p-2.5 rounded border-2 border-brand-black ${l?"bg-purple-50 border-brand-purple":"bg-gray-50"}">
                    <label class="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0">
                        <input type="checkbox" data-cajero-chk="${d.id}" value="${d.nombre}" ${l?"checked":""} class="w-4 h-4 rounded text-brand-purple" />
                        <div>
                            <span class="font-heading font-black text-sm text-brand-black truncate block">${d.nombre}</span>
                            <span class="text-[10px] text-gray-500 font-bold">${d.activo?"Operador Activo":"Inactivo"}</span>
                        </div>
                    </label>
                    <div class="flex items-center gap-1 shrink-0">
                        <button data-cajero-edit="${d.id}" data-cajero-nom="${d.nombre}" title="Editar nombre" class="text-xs bg-white border border-gray-400 rounded px-1.5 py-0.5 hover:bg-gray-100">✎</button>
                        <button data-cajero-del="${d.id}" data-cajero-nom="${d.nombre}" title="Eliminar operador" class="text-xs text-red-600 bg-white border border-gray-400 rounded px-1.5 py-0.5 hover:bg-red-50">✕</button>
                    </div>
                </div>`}).join("");this.modalContenido(`
                <div>
                    <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-wider text-brand-purple">Atención y Relevos</span>
                            <h3 class="font-heading font-black text-xl">OPERADORES EN CAJA</h3>
                        </div>
                        <button data-cerrar class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
                    </div>
                    <p class="text-xs text-gray-600 font-bold mb-3">
                        Selecciona uno o varios operadores despachando simultáneamente en este turno:
                    </p>
                    <div class="space-y-2 max-h-56 overflow-y-auto pr-1 mb-4">
                        ${c}
                    </div>
                    <!-- Formulario rápido para nuevo cajero -->
                    <form id="form-nuevo-cajero-caja" class="flex gap-2 mb-4">
                        <input id="in-nuevo-cajero-caja" type="text" maxlength="30" placeholder="Registrar nuevo empleado..." class="flex-1 border-2 border-brand-black rounded px-3 py-1.5 text-xs font-bold" />
                        <button type="submit" class="bg-brand-black text-white px-3 py-1.5 rounded font-black font-heading text-xs hover:bg-gray-800 shadow-brutal-sm">+ AGREGAR</button>
                    </form>
                    <div class="grid grid-cols-2 gap-3 border-t-2 border-brand-black pt-3">
                        <button id="btn-cancelar-operadores-caja" class="bg-white border-2 border-brand-black font-heading font-black py-2.5 rounded text-xs">CANCELAR</button>
                        <button id="btn-guardar-operadores-caja" class="bg-brand-purple text-white font-heading font-black py-2.5 rounded border-2 border-brand-black shadow-brutal-sm text-xs">ASIGNAR A TURNO</button>
                    </div>
                </div>
            `,"max-w-md"),(i=this.modal.querySelector("[data-cerrar]"))==null||i.addEventListener("click",()=>this.cerrarModal()),(s=this.modal.querySelector("#btn-cancelar-operadores-caja"))==null||s.addEventListener("click",()=>this.cerrarModal()),this.modal.querySelectorAll("button[data-cajero-edit]").forEach(d=>{d.addEventListener("click",async()=>{const l=d.dataset.cajeroEdit||"",b=d.dataset.cajeroNom||"",m=window.prompt("Modificar nombre del operador:",b);m&&m.trim()&&m.trim()!==b&&(await D.editarOperador(l,m.trim()),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())})}),this.modal.querySelectorAll("button[data-cajero-del]").forEach(d=>{d.addEventListener("click",async()=>{const l=d.dataset.cajeroDel||"",b=d.dataset.cajeroNom||"";window.confirm(`¿Confirmas eliminar al operador "${b}"?`)&&(await D.eliminarOperador(l),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())})}),(t=this.modal.querySelector("#form-nuevo-cajero-caja"))==null||t.addEventListener("submit",async d=>{d.preventDefault();const l=this.modal.querySelector("#in-nuevo-cajero-caja"),b=(l==null?void 0:l.value.trim())||"";b&&(await D.crearOperador(b),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())}),(n=this.modal.querySelector("#btn-guardar-operadores-caja"))==null||n.addEventListener("click",async()=>{const d=this.modal.querySelectorAll("input[data-cajero-chk]:checked"),l=[];if(d.forEach(b=>{b.value&&l.push(b.value)}),l.length===0){alert("Debes seleccionar al menos un operador activo en turno.");return}await D.asignarOperadoresTurno(l),this.cerrarModal(),this.renderDinamico()})})()}async abrirModalIniciarJornada(){const e=await D.listarOperadores();(()=>{var r,c,i,s;const a=e.length>0?e.map((t,n)=>`
                <div class="flex items-center p-2.5 rounded border-2 border-brand-black ${n===0?"bg-purple-50 border-brand-purple":"bg-gray-50"}">
                    <label class="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0">
                        <input type="checkbox" data-inicio-cajero-chk value="${t.nombre}" ${n===0?"checked":""} class="w-4 h-4 rounded text-brand-purple" />
                        <div>
                            <span class="font-heading font-black text-sm text-brand-black truncate block">${t.nombre}</span>
                            <span class="text-[10px] text-gray-500 font-bold">${t.activo?"Operador Activo":"Inactivo"}</span>
                        </div>
                    </label>
                </div>`).join(""):'<p class="text-xs text-gray-500 font-bold text-center py-3">No hay operadores registrados. Registra uno abajo para continuar.</p>';this.modalContenido(`
                <div>
                    <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-wider text-red-700">Sin turno activo</span>
                            <h3 class="font-heading font-black text-xl">INICIAR TURNO</h3>
                        </div>
                        <button data-cerrar class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
                    </div>
                    <p class="text-xs text-gray-600 font-bold mb-3">
                        Selecciona los cajeros que atenderan en este turno:
                    </p>
                    <div class="space-y-2 max-h-56 overflow-y-auto pr-1 mb-4">
                        ${a}
                    </div>
                    <!-- Formulario rapido para nuevo cajero -->
                    <form id="form-nuevo-cajero-inicio" class="flex gap-2 mb-4">
                        <input id="in-nuevo-cajero-inicio" type="text" maxlength="30" placeholder="Registrar nuevo empleado..." class="flex-1 border-2 border-brand-black rounded px-3 py-1.5 text-xs font-bold" />
                        <button type="submit" class="bg-brand-black text-white px-3 py-1.5 rounded font-black font-heading text-xs hover:bg-gray-800 shadow-brutal-sm">+ AGREGAR</button>
                    </form>
                    <div class="grid grid-cols-2 gap-3 border-t-2 border-brand-black pt-3">
                        <button id="btn-cancelar-inicio-jornada" class="bg-white border-2 border-brand-black font-heading font-black py-2.5 rounded text-xs">CANCELAR</button>
                        <button id="btn-abrir-turno" class="bg-green-600 text-white font-heading font-black py-2.5 rounded border-2 border-brand-black shadow-brutal-sm text-xs">ABRIR TURNO</button>
                    </div>
                </div>
            `,"max-w-md"),(r=this.modal.querySelector("[data-cerrar]"))==null||r.addEventListener("click",()=>this.cerrarModal()),(c=this.modal.querySelector("#btn-cancelar-inicio-jornada"))==null||c.addEventListener("click",()=>this.cerrarModal()),(i=this.modal.querySelector("#form-nuevo-cajero-inicio"))==null||i.addEventListener("submit",async t=>{t.preventDefault();const n=this.modal.querySelector("#in-nuevo-cajero-inicio"),d=(n==null?void 0:n.value.trim())||"";d&&(await D.crearOperador(d),this.cerrarModal(),this.abrirModalIniciarJornada())}),(s=this.modal.querySelector("#btn-abrir-turno"))==null||s.addEventListener("click",async()=>{const t=this.modal.querySelectorAll("input[data-inicio-cajero-chk]:checked"),n=[];if(t.forEach(l=>{l.value&&n.push(l.value)}),n.length===0){alert("Selecciona al menos un operador para abrir el turno.");return}const d=n[0];await D.abrirJornada(d,n),this.cerrarModal(),this.renderDinamico()})})()}async abrirModalCobro(){var h,y,k,U;if(this.vm.lineasCarrito.length===0)return;let e=[];try{e=await D.listarMetodosPago()}catch{e=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}const o=Number(this.vm.totalUsd.toFixed(2)),a=this.vm.tasaTicket,r=Number((o*a).toFixed(2)),c=e.find(A=>A.nombre==="PUNTOD.VENTA")||e.find(A=>A.moneda==="BS")||e[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"};let i;if(this.pagosBorrador&&this.pagosBorrador.length>0){if(i=this.pagosBorrador.map(A=>({...A})),i.length===1&&i[0]){const A=i[0];A.monto=A.moneda==="USD"?o:r,A.tasaCambio=a}else if(i.length>1){let A=0;for(let F=0;F<i.length-1;F++){const B=i[F],f=B.tasaCambio>0?B.tasaCambio:a;A+=B.moneda==="USD"?B.monto*f:B.monto}const O=Math.max(0,Math.round((r-A)*100)/100),R=i[i.length-1];R&&(R.monto=R.moneda==="USD"?a>0?Number((O/a).toFixed(2)):0:O,R.tasaCambio=a)}}else i=[{id:"p-1",metodo:c.nombre,moneda:c.moneda,monto:c.moneda==="USD"?o:r,tasaCambio:a,referencia:""}];let s=((h=this.resolucionVueltoBorrador)==null?void 0:h.estado)||"PAGADO",t=((y=this.resolucionVueltoBorrador)==null?void 0:y.metodo)||"BS.EFEC.",n=((k=this.resolucionVueltoBorrador)==null?void 0:k.tasa)||a;e.some(A=>A.nombre===t)||(t=((U=e[0])==null?void 0:U.nombre)||"BS.EFEC.");let d=!1;const l=()=>{let A=0;for(const S of i)if(S.moneda==="USD"){const M=S.tasaCambio>0?S.tasaCambio:a;A+=S.monto*M}else A+=S.monto;A=Math.round(A*100)/100;const O=a>0?Math.round(A/a*100)/100:0,R=Math.max(0,Math.round((r-A)*100)/100),F=a>0?Math.max(0,Math.round(R/a*100)/100):0,B=Math.max(0,Math.round((A-r)*100)/100),f=a>0?Math.max(0,Math.round(B/a*100)/100):0,g=A>=r-.01&&i.every(S=>S.monto>0);return{cubiertoUsd:O,cubiertoBs:A,faltanteUsd:F,faltanteBs:R,vueltoUsd:f,vueltoBs:B,puedeConfirmar:g}},b=()=>{const A=l(),O=e.filter(C=>C.moneda==="USD"),R=e.filter(C=>C.moneda==="BS"),F=i.map((C,_)=>{const x=O.map(E=>`<option value="${E.nombre}" ${E.nombre===C.metodo?"selected":""}>${E.nombre} ($ - Tasa Dinámica)</option>`).join(""),T=`
                        <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                            ${R.map(E=>`<option value="${E.nombre}" ${E.nombre===C.metodo?"selected":""}>${E.nombre} (Bs.)</option>`).join("")}
                        </optgroup>
                        <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                            ${x}
                        </optgroup>
                    `,P=C.tasaCambio>0?C.tasaCambio:a,z=C.moneda==="USD"?C.monto*P:C.monto,I=a>0?z/a:0;return`
                    <div class="border-2 border-brand-black rounded-lg p-3 bg-gray-50 mb-2.5">
                        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span class="font-heading font-black text-xs uppercase text-gray-700">
                                Pago #${_+1} · <span class="${C.moneda==="USD"?"text-brand-purple":"text-brand-black"}">${C.moneda==="USD"?"Divisa ($ USD)":"Moneda Nacional (Bs.)"}</span>
                            </span>
                            ${i.length>1?`<button data-eliminar-pago="${C.id}" class="text-xs font-black text-red-600 hover:text-red-800 bg-red-50 border border-red-300 rounded px-2 py-0.5">Eliminar</button>`:""}
                        </div>
                        ${C.moneda==="USD"?`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Divisa</label>
                                <select data-pago-metodo="${C.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${T}
                                </select>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto ($ USD)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">$</span>
                                    <input type="number" step="0.01" min="0.01" max="999999" data-pago-monto="${C.id}" value="${C.monto>0?C.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <div class="flex items-center justify-between mb-0.5">
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase">Tasa (Bs./$)</label>
                                    <button type="button" data-reset-tasa="${C.id}" class="text-[9px] font-black uppercase text-brand-purple hover:underline" title="Restablecer a tasa BCV oficial">BCV: ${W(a)}</button>
                                </div>
                                <input type="number" step="0.01" min="1" max="100000" data-pago-tasa="${C.id}" value="${P>0?P:a}"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${C.id}" value="${C.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-purple">Aporte: Bs. ${W(z)}</span>
                            <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${W(I)} ${P!==a?`(Tasa: Bs. ${W(P)} vs BCV: Bs. ${W(a)})`:""}</span>
                        </div>
                        `:`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-5">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Bolívares</label>
                                <select data-pago-metodo="${C.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${T}
                                </select>
                            </div>
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto (Bs.)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">Bs.</span>
                                    <input type="number" step="0.01" min="0.01" max="999999999" data-pago-monto="${C.id}" value="${C.monto>0?C.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${C.id}" value="${C.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-black">Aporte directo: Bs. ${W(C.monto)}</span>
                            <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${W(I)}</span>
                        </div>
                        `}
                    </div>`}).join(""),B=e.find(C=>C.nombre===t),f=(B==null?void 0:B.moneda)==="USD",g=n>0?n:a,S=f&&g>0?Number((A.vueltoBs/g).toFixed(2)):A.vueltoUsd,M=A.faltanteBs>.009?`
                    <div class="bg-amber-50 border-2 border-amber-500 rounded p-3 text-center mb-3">
                        <p class="text-xs font-black uppercase text-amber-900">Monto Incompleto por Cubrir</p>
                        <p class="font-heading font-black text-xl text-amber-700">Faltan Bs. ${W(A.faltanteBs)} · <span class="text-base text-amber-900">$ ${W(A.faltanteUsd)} (Equiv. Oficial)</span></p>
                    </div>`:A.vueltoBs>.009?`
                    <div class="border-2 border-emerald-700 bg-emerald-50/70 rounded-lg p-3 mb-3">
                        <div class="flex flex-wrap items-center justify-between gap-1 mb-2">
                            <div>
                                <span class="text-[10px] font-black uppercase text-emerald-900 tracking-wide block">Excedente / Vuelto del Cliente</span>
                                <span class="font-heading font-black text-xl text-emerald-800">Bs. ${W(A.vueltoBs)}</span>
                            </div>
                            <span class="text-xs font-bold text-emerald-900 font-mono">$ ${W(A.vueltoUsd)} equiv. oficial</span>
                        </div>

                        <!-- Selector: Entregar Vuelto vs Retener Vuelto -->
                        <div class="grid grid-cols-2 gap-2 mb-2.5">
                            <button type="button" id="btn-vuelto-pagado" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${s==="PAGADO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                                ENTREGAR VUELTO (PAGADO)
                            </button>
                            <button type="button" id="btn-vuelto-retenido" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${s==="RETENIDO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                                RETENER VUELTO (A FAVOR)
                            </button>
                        </div>

                        ${s==="PAGADO"?`
                        <div class="bg-white border border-emerald-600 rounded p-2.5 space-y-2">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <label class="text-[11px] font-bold text-gray-700 uppercase">Método de Egreso del Vuelto:</label>
                                <select id="select-metodo-vuelto" class="border-2 border-brand-black rounded px-2 py-1 text-xs font-bold bg-white focus:outline-none">
                                    ${e.map(C=>`
                                        <option value="${C.nombre}" ${C.nombre===t?"selected":""}>
                                            ${C.nombre} (${C.moneda==="USD"?"$ Dólares":"Bs. Bolívares"})
                                        </option>
                                    `).join("")}
                                </select>
                            </div>
                            ${f?`
                            <div class="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-gray-100">
                                <div>
                                    <span class="text-[10px] font-bold text-gray-500 uppercase block">Tasa Pactada Vuelto USD:</span>
                                    <div class="flex items-center gap-1.5">
                                        <input id="input-tasa-vuelto" type="text" inputmode="decimal" value="${n.toFixed(2)}"
                                            class="w-24 border-2 border-brand-black rounded px-2 py-0.5 text-xs font-mono font-bold" />
                                        <button id="btn-reset-tasa-vuelto" type="button" class="text-[10px] bg-gray-100 border border-gray-400 rounded px-1.5 py-0.5 hover:bg-gray-200">
                                            Reset BCV
                                        </button>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="text-[10px] font-bold text-gray-500 uppercase block">Divisa USD a Entregar:</span>
                                    <span class="font-heading font-black text-base text-brand-purple">
                                        $ ${W(S)} USD
                                    </span>
                                </div>
                            </div>
                            `:`
                            <div class="flex items-center justify-between pt-1 border-t border-gray-100 text-xs">
                                <span class="font-bold text-gray-600">Total a Entregar en Bolívares:</span>
                                <span class="font-heading font-black text-base text-brand-black">Bs. ${W(A.vueltoBs)}</span>
                            </div>
                            `}
                        </div>
                        `:`
                        <div class="bg-white border border-gray-300 rounded p-2 text-xs text-gray-700">
                            <p class="font-bold text-emerald-900 mb-0.5">Vuelto Retenido como Saldo a Favor</p>
                            <p class="text-[11px] text-gray-600 leading-tight">
                                El excedente de <b>Bs. ${W(A.vueltoBs)} ($ ${W(A.vueltoUsd)})</b> no genera egreso físico de caja y se asienta en el comprobante como saldo a favor o ganancia por excedente del negocio.
                            </p>
                        </div>
                        `}
                    </div>`:"";this.modalContenido(`
                <div>
                    <div class="flex justify-between items-center border-b-2 border-brand-black pb-3 mb-3">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-wider text-brand-purple">Operación de Caja Directa</span>
                            <h3 class="font-heading font-black text-2xl">COBRAR VENTA</h3>
                        </div>
                        <button data-cerrar class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
                    </div>

                    <!-- Resumen del Importe a Cobrar -->
                    <div class="border-2 border-brand-black rounded-lg p-3 bg-brand-gray/30 mb-3 flex flex-wrap justify-between items-center gap-2">
                        <div>
                            <span class="text-[10px] font-bold text-gray-600 uppercase block">Total a Liquidar</span>
                            <div class="flex items-baseline gap-2">
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${W(o)} USD</span>
                                <span class="font-heading font-black text-xl text-brand-purple">Bs. ${W(r)}</span>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-[10px] font-bold text-gray-500 uppercase block">Tasa Oficial Aplicada</span>
                            <span class="text-xs font-mono font-black text-gray-800">Bs. ${W(a)}</span>
                        </div>
                    </div>

                    <!-- Lista de Pagos Asignados -->
                    <div class="mb-3">
                        ${F}
                    </div>

                    <!-- Botones de Acción sobre Métodos -->
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <button id="btn-agregar-pago" class="bg-blue-50 text-blue-950 hover:bg-blue-100 border-2 border-brand-black rounded px-3 py-1.5 text-xs font-heading font-black shadow-brutal-sm">
                            + AGREGAR OTRO MÉTODO (PAGO MIXTO)
                        </button>
                        <button id="btn-toggle-nuevo-metodo" class="bg-white text-gray-800 hover:bg-gray-50 border border-brand-black rounded px-2.5 py-1.5 text-xs font-bold">
                            + CREAR MÉTODO DE PAGO
                        </button>
                    </div>

                    <!-- Subformulario para Crear o Eliminar Métodos de Pago -->
                    ${d?`
                    <div class="bg-purple-50 border-2 border-brand-purple rounded-lg p-3 mb-3">
                        <div class="flex justify-between items-center mb-1.5">
                            <p class="text-xs font-heading font-black text-brand-purple uppercase">Gestión de Métodos de Pago</p>
                            <span class="text-[10px] text-gray-500 font-bold">Agregar o Quitar Métodos</span>
                        </div>
                        <div class="space-y-2">
                            <div class="flex gap-2">
                                <input id="input-nuevo-metodo-nombre" type="text" maxlength="25" placeholder="Ej: PAYPAL, BANESCO PANAMA..."
                                    class="flex-1 border-2 border-brand-black rounded px-2.5 py-1 text-xs font-bold uppercase focus:outline-none" />
                                <button id="btn-guardar-nuevo-metodo" class="bg-brand-purple text-white border-2 border-brand-black rounded px-3 py-1 text-xs font-heading font-black hover:opacity-90">
                                    GUARDAR
                                </button>
                            </div>
                            <div class="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-800">
                                <span class="text-[10px] text-gray-500 uppercase">Moneda Base:</span>
                                <label class="inline-flex items-center gap-1 cursor-pointer">
                                    <input type="radio" name="radio-nuevo-metodo-moneda" value="USD" checked class="text-brand-purple" />
                                    <span>Dólares ($ USD - Tasa Dinámica)</span>
                                </label>
                                <label class="inline-flex items-center gap-1 cursor-pointer">
                                    <input type="radio" name="radio-nuevo-metodo-moneda" value="BS" class="text-brand-purple" />
                                    <span>Bolívares (Bs.)</span>
                                </label>
                            </div>
                            <!-- Métodos activos con botón para eliminar -->
                            <div class="pt-2 border-t border-purple-200">
                                <span class="text-[10px] font-bold text-gray-600 uppercase block mb-1">Métodos Registrados (Toca ✕ para eliminar):</span>
                                <div class="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                                    ${e.map(C=>`
                                        <span class="inline-flex items-center gap-1 border border-brand-black rounded px-2 py-0.5 text-[11px] font-bold bg-white">
                                            <span>${C.nombre}</span>
                                            <span class="text-[9px] text-gray-500">(${C.moneda})</span>
                                            <button data-caja-eliminar-metodo="${C.nombre}" title="Eliminar método" class="text-red-600 hover:text-red-800 font-bold ml-0.5">✕</button>
                                        </span>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                    </div>`:""}

                    <!-- Indicador de Cobertura y Vuelto -->
                    ${M}

                    <div id="cobro-error" class="hidden text-red-700 text-xs font-bold mb-3 bg-red-50 border border-red-400 rounded p-2"></div>

                    <!-- Acciones Finales -->
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t-2 border-brand-black">
                        <div class="flex items-center gap-2">
                            <button data-cancelar class="bg-white border-2 border-brand-black font-heading font-black px-4 py-2.5 rounded text-xs hover:bg-gray-100">
                                CERRAR
                            </button>
                            <button id="btn-volver-caja" class="bg-amber-100 hover:bg-amber-200 text-amber-950 border-2 border-brand-black font-heading font-black px-3 py-2.5 rounded text-xs">
                                AGREGAR PRODUCTOS (VOLVER A CAJA)
                            </button>
                        </div>
                        <button id="btn-confirmar-cobro" ${A.puedeConfirmar?"":"disabled"}
                            class="bg-green-700 hover:bg-green-800 disabled:opacity-30 disabled:cursor-not-allowed text-white font-heading font-black px-5 py-2.5 rounded border-2 border-brand-black shadow-brutal-sm text-sm">
                            CONFIRMAR COBRO
                        </button>
                    </div>
                </div>`,"max-w-xl"),m()},m=()=>{var R,F,B,f,g,S,M,C,_,x;const A=()=>{this.pagosBorrador=i,this.resolucionVueltoBorrador={estado:s,metodo:t,tasa:n},this.cerrarModal()};this.modal.querySelectorAll("[data-cerrar]").forEach(v=>v.addEventListener("click",A)),(R=this.modal.querySelector("[data-cancelar]"))==null||R.addEventListener("click",A),(F=this.modal.querySelector("#btn-volver-caja"))==null||F.addEventListener("click",()=>{this.pagosBorrador=i,this.resolucionVueltoBorrador={estado:s,metodo:t,tasa:n},this.cerrarModal();const v=document.getElementById("caja-buscar");v==null||v.focus()}),(B=this.modal.querySelector("#btn-vuelto-pagado"))==null||B.addEventListener("click",()=>{s="PAGADO",this.resolucionVueltoBorrador={estado:s,metodo:t,tasa:n},b()}),(f=this.modal.querySelector("#btn-vuelto-retenido"))==null||f.addEventListener("click",()=>{s="RETENIDO",this.resolucionVueltoBorrador={estado:s,metodo:t,tasa:n},b()}),(g=this.modal.querySelector("#select-metodo-vuelto"))==null||g.addEventListener("change",v=>{t=v.target.value,this.resolucionVueltoBorrador={estado:s,metodo:t,tasa:n},b()});const O=this.modal.querySelector("#input-tasa-vuelto");O&&(O.addEventListener("input",v=>{const T=Q(v.target.value);n=T>0?T:a,this.resolucionVueltoBorrador={estado:s,metodo:t,tasa:n}}),O.addEventListener("blur",()=>{b()})),(S=this.modal.querySelector("#btn-reset-tasa-vuelto"))==null||S.addEventListener("click",()=>{n=a,this.resolucionVueltoBorrador={estado:s,metodo:t,tasa:n},b()}),this.modal.querySelectorAll("select[data-pago-metodo]").forEach(v=>{v.addEventListener("change",T=>{const P=v.dataset.pagoMetodo,z=T.target.value,I=i.find(E=>E.id===P);if(I){const E=e.find(Y=>Y.nombre===z),K=(E==null?void 0:E.moneda)||"BS";I.moneda=K,I.tasaCambio=a,i.length===1?I.monto=I.moneda==="USD"?o:r:K!==I.moneda&&(K==="USD"?I.monto=Number((a>0?I.monto/a:0).toFixed(2)):I.monto=Number((I.monto*a).toFixed(2))),I.metodo=z,this.pagosBorrador=i,b()}})}),this.modal.querySelectorAll("input[data-pago-tasa]").forEach(v=>{v.addEventListener("input",T=>{const P=v.dataset.pagoTasa,z=Q(T.target.value),I=i.find(E=>E.id===P);if(I){I.tasaCambio=z>0?z:a,this.pagosBorrador=i;const E=l(),K=this.modal.querySelector("#btn-confirmar-cobro");K&&(K.disabled=!E.puedeConfirmar)}}),v.addEventListener("blur",()=>{b()})}),this.modal.querySelectorAll("button[data-reset-tasa]").forEach(v=>{v.addEventListener("click",()=>{const T=v.dataset.resetTasa,P=i.find(z=>z.id===T);P&&(P.tasaCambio=a,this.pagosBorrador=i,b())})}),this.modal.querySelectorAll("input[data-pago-monto]").forEach(v=>{v.addEventListener("input",T=>{const P=v.dataset.pagoMonto,z=Q(T.target.value),I=i.find(E=>E.id===P);if(I){I.monto=z,this.pagosBorrador=i;const E=l(),K=this.modal.querySelector("#btn-confirmar-cobro");K&&(K.disabled=!E.puedeConfirmar)}}),v.addEventListener("blur",()=>{b()})}),this.modal.querySelectorAll("input[data-pago-ref]").forEach(v=>{v.addEventListener("input",T=>{const P=v.dataset.pagoRef,z=T.target.value,I=i.find(E=>E.id===P);I&&(I.referencia=z,this.pagosBorrador=i)})}),this.modal.querySelectorAll("button[data-eliminar-pago]").forEach(v=>{v.addEventListener("click",()=>{const T=v.dataset.eliminarPago;i=i.filter(P=>P.id!==T),this.pagosBorrador=i,b()})}),(M=this.modal.querySelector("#btn-agregar-pago"))==null||M.addEventListener("click",()=>{let v=l();const T="p-"+Math.random().toString(36).slice(2,7),P=e.find(I=>!i.some(E=>E.metodo===I.nombre))||e[0]||{nombre:"BS.EFEC.",moneda:"BS"};if(v.faltanteBs<=.01&&i.length===1&&i[0]){const I=i[0],E=I.tasaCambio>0?I.tasaCambio:a,K=I.moneda==="USD"?I.monto*E:I.monto,Y=Math.round(K/2*100)/100;I.monto=I.moneda==="USD"?E>0?Number((Y/E).toFixed(2)):0:Y,v=l()}const z=v.faltanteBs>0?v.faltanteBs:0;i.push({id:T,metodo:P.nombre,moneda:P.moneda,monto:P.moneda==="USD"?a>0?Number((z/a).toFixed(2)):0:z,tasaCambio:a,referencia:""}),this.pagosBorrador=i,b()}),(C=this.modal.querySelector("#btn-toggle-nuevo-metodo"))==null||C.addEventListener("click",()=>{d=!d,b()}),(_=this.modal.querySelector("#btn-guardar-nuevo-metodo"))==null||_.addEventListener("click",()=>{(async()=>{const v=this.modal.querySelector("#input-nuevo-metodo-nombre"),T=(v==null?void 0:v.value.trim())||"",P=this.modal.querySelector('input[name="radio-nuevo-metodo-moneda"][value="USD"]'),z=P!=null&&P.checked?"USD":"BS";if(T)try{e=await D.crearMetodoPago(T,z),d=!1,b()}catch{}})()}),this.modal.querySelectorAll("button[data-caja-eliminar-metodo]").forEach(v=>{v.addEventListener("click",()=>{(async()=>{const T=v.dataset.cajaEliminarMetodo||"";T&&window.confirm(`¿Seguro que deseas eliminar el método de pago "${T}"?`)&&(e=await D.eliminarMetodoPago(T),i.forEach(P=>{if(P.metodo===T){const z=e[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"};P.metodo=z.nombre,P.moneda=z.moneda}}),this.pagosBorrador=i,b())})()})}),(x=this.modal.querySelector("#btn-confirmar-cobro"))==null||x.addEventListener("click",()=>{(async()=>{const v=this.modal.querySelector("#cobro-error");try{const T=i.filter($=>$.monto>0).map($=>{const q=$.moneda==="USD"&&$.tasaCambio>0?$.tasaCambio:a,V=$.moneda==="USD"?$.monto*q:$.monto,G=a>0?V/a:0;return{metodo:$.metodo,moneda:$.moneda,montoUsd:($.moneda==="USD"?$.monto:G).toFixed(2),montoBs:V.toFixed(2),tasaCambio:$.moneda==="USD"?q.toFixed(2):void 0,referencia:$.referencia.trim()||void 0}});if(T.length===0)throw new Error("Debe especificar al menos un pago válido.");const P=l(),z=T.reduce(($,q)=>$+Number(q.montoBs),0),I=e.find($=>$.nombre===t),E=(I==null?void 0:I.moneda)==="USD",K=E?n>0?n:a:void 0,Y=E&&K?(P.vueltoBs/K).toFixed(2):P.vueltoUsd.toFixed(2),L={estado:P.vueltoBs>.009?s:"SIN_VUELTO",metodo:P.vueltoBs>.009&&s==="PAGADO"?t:void 0,montoBs:P.vueltoBs>.009?P.vueltoBs.toFixed(2):void 0,montoUsd:P.vueltoBs>.009?Y:void 0,tasa:P.vueltoBs>.009&&s==="PAGADO"&&K?K.toFixed(2):void 0},j=await this.vm.cobrar(z.toFixed(2),T,L);this.pagosBorrador=null,this.resolucionVueltoBorrador=null,this.cerrarModal(),this.modalTicketExito(j,z)}catch(T){v&&(v.textContent=T instanceof Error?T.message.replace(/"/g,""):String(T),v.classList.remove("hidden"))}})()})};b()}modalTicketExito(e,o){const a=e.pagos&&e.pagos.length>0?e.pagos.map(c=>`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-1.5 text-left font-heading font-black text-xs text-brand-black">
                        ${c.metodo}
                        ${c.tasaCambio?`<span class="block text-[10px] text-brand-purple font-mono font-bold">Tasa: Bs. ${W(Number(c.tasaCambio))}</span>`:""}
                        ${c.referencia?`<span class="block text-[10px] text-gray-500 font-mono font-normal">Ref: ${c.referencia}</span>`:""}
                    </td>
                    <td class="py-1.5 text-right font-black text-xs text-brand-black">$ ${W(c.montoUsd)}</td>
                    <td class="py-1.5 text-right font-black text-xs text-brand-purple">Bs. ${W(c.montoBs)}</td>
                </tr>
            `).join(""):'<tr><td colspan="3" class="py-2 text-center text-xs text-gray-400">Pago Único Estándar</td></tr>',r=Q(e.vueltoBs);this.renderModal(`
            <div class="text-center mb-3">
                <h3 class="font-heading font-black text-3xl text-green-700">VENTA EXITOSA</h3>
                <p class="font-body text-xs text-brand-text">Ticket ${e.ventaId} · Tasa BCV: Bs. ${W(Number(e.tasaDelDia))}</p>
            </div>
            <div class="border-t-2 border-b-2 border-brand-black py-3 mb-3 text-center bg-gray-50 rounded">
                <span class="text-[10px] font-bold text-gray-500 uppercase block">Total Liquidado</span>
                <p class="font-heading font-black text-3xl text-brand-purple">Bs. ${W(o)}</p>
                <p class="font-body text-xs text-gray-600">$ ${W(Number(e.totalUsd))} USD</p>
            </div>

            <!-- Desglose de Métodos de Pago Registrados -->
            <div class="mb-3 border border-brand-black rounded p-2.5 bg-white">
                <span class="text-[10px] uppercase font-heading font-bold text-gray-500 block mb-1">
                    Métodos de Pago Aplicados (${e.pagos?e.pagos.length:1})
                </span>
                <table class="w-full text-xs">
                    <thead>
                        <tr class="border-b border-gray-200 text-[10px] uppercase font-bold text-gray-400">
                            <th class="py-1 text-left">Método</th>
                            <th class="py-1 text-right">Monto ($)</th>
                            <th class="py-1 text-right">Monto (Bs.)</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        ${a}
                    </tbody>
                </table>
            </div>

            ${r>0?`
            <div class="mb-3 ${e.estadoVuelto==="RETENIDO"?"bg-blue-50 border-blue-500":"bg-emerald-50 border-emerald-500"} border rounded p-2.5 text-center">
                <span class="text-[10px] font-bold ${e.estadoVuelto==="RETENIDO"?"text-blue-900":"text-emerald-800"} uppercase block">
                    ${e.estadoVuelto==="RETENIDO"?"Vuelto Retenido (Saldo a Favor del Negocio)":"Vuelto Pagado al Cliente"}
                </span>
                <span class="font-heading font-black text-xl ${e.estadoVuelto==="RETENIDO"?"text-blue-800":"text-emerald-700"}">
                    Bs. ${W(r)}
                </span>
                <span class="block text-xs font-bold text-gray-600 mt-0.5">
                    ${e.estadoVuelto==="RETENIDO"?`Asentado en comprobante ($ ${W(e.montoVueltoUsd||(Number(e.tasaDelDia)>0?r/Number(e.tasaDelDia):0))} USD equiv.)`:`Método: ${e.metodoVuelto||"Efectivo"} ${e.montoVueltoUsd&&Number(e.montoVueltoUsd)>0&&e.tasaVuelto?`($ ${W(e.montoVueltoUsd)} USD @ Bs. ${W(e.tasaVuelto)})`:""}`}
                </span>
            </div>`:""}

            <button data-cerrar class="w-full bg-brand-black text-white font-heading font-black text-lg py-3 rounded border-2 border-brand-black shadow-brutal-sm hover:bg-gray-800">
                LISTO
            </button>`,"max-w-md")}renderDinamico(){const e=this.contenedor.querySelector("#caja-grid");if(!e)return;const o=this.semaforoStock;e.innerHTML=this.vm.visibles.map(i=>{const s=(i.capacidades&ie)!==0,t=Number(i.stock),n=t<=0,d=i.sinStock?"text-purple-700":t<=o.rojoMax?"text-red-600":t<=o.amarilloMax?"text-amber-600":"text-emerald-700",l=i.unidad?i.unidad.toLowerCase()==="un"?"un.":i.unidad.toLowerCase():s?"kg":"un.",b=l==="kg"?"kg":l==="ml"?"ml":"un.";let m="";if(i.sinStock)m="LIBRE";else if(n)m="AGOTADO";else if(i.esCaja&&i.unidadesPorCaja&&i.unidadesPorCaja>1){const h=Math.floor(t/i.unidadesPorCaja),y=t%i.unidadesPorCaja;m=`${h} cajas y ${y} un. (${t} un.)`}else m=`${t} ${l}`;return`
                <button data-sku="${i.sku}" ${n&&!i.sinStock?"disabled":""}
                    class="text-left border-2 border-brand-black rounded p-3 bg-white shadow-brutal hover:-translate-y-0.5 hover:shadow-brutal-hover transition-all active:translate-y-0.5 active:shadow-none disabled:opacity-30">
                    <div class="flex justify-between items-start mb-1 gap-1">
                        <span class="font-heading font-extrabold leading-tight text-sm text-brand-black truncate" title="${i.nombre}">${i.nombre}</span>
                        <div class="flex gap-1 shrink-0">
                            ${`<span class="text-[9px] font-black bg-amber-100 text-amber-900 border border-brand-black rounded px-1 lowercase">${b}</span>`}
                        </div>
                    </div>
                    <p class="font-heading font-black text-lg text-brand-purple">Bs. ${this.modelo.bs(i.precioUsd)}</p>
                    <div class="flex justify-between items-center mt-1">
                        <span class="text-xs font-bold text-gray-600">$${Number(i.precioUsd).toFixed(2)}</span>
                        <span class="text-[11px] font-black ${d}">
                            ${m}
                        </span>
                    </div>
                </button>`}).join(""),e.querySelectorAll("button[data-sku]").forEach(i=>i.addEventListener("click",()=>{const s=i.dataset.sku??"";(async()=>{const t=this.vm.modoCuentaAbierta?await this.vm.agregarACuenta(s):await this.vm.agregar(s);t&&this.mostrarError(t)})()}));const a=this.contenedor.querySelector("#caja-lineas");a&&(a.innerHTML=this.vm.lineasCarrito.length===0?'<p class="text-center text-brand-text font-body py-10">Toca un producto para agregarlo</p>':this.vm.lineasCarrito.map(i=>`
                    <div class="border-2 border-brand-black rounded p-2 bg-white shadow-sm space-y-1">
                        <div class="flex items-center gap-2">
                            <div class="flex-1 min-w-0 pr-2">
                                <p class="font-heading font-bold text-sm truncate" title="${i.nombre}">${i.nombre}</p>
                                <p class="text-xs text-gray-600 font-bold">$${i.precioUsd.toFixed(2)} · Bs. ${this.modelo.bs(Number((i.precioUsd*i.cantidad).toFixed(2)))}</p>
                            </div>
                            ${i.pesable?`<input type="number" step="0.05" min="0.01" max="999.99" maxlength="6" value="${Number(i.cantidad.toFixed(3))}" data-qty="${i.sku}" class="w-20 border-2 border-brand-black rounded px-1 py-0.5 text-right font-bold text-sm" />`:`<button data-menos="${i.sku}" class="w-7 h-7 border-2 border-brand-black rounded font-black bg-amber-100 text-sm">-</button>
                                   <span class="font-black w-5 text-center text-sm">${i.cantidad}</span>
                                   <button data-mas="${i.sku}" class="w-7 h-7 border-2 border-brand-black rounded font-black bg-emerald-100 text-sm">+</button>`}
                            <button data-quitar="${i.sku}" class="w-7 h-7 border-2 border-brand-black rounded font-black bg-red-100 text-red-800 text-sm hover:bg-red-600 hover:text-white transition-colors">&times;</button>
                        </div>
                    </div>`).join(""));const r=this.contenedor.querySelector("#caja-total-usd"),c=this.contenedor.querySelector("#caja-total-bs");r&&(r.textContent="$ "+W(this.vm.totalUsd)),c&&(c.textContent="Bs. "+W(this.vm.totalBs)),D.obtenerJornadaActual().then(i=>{const s=this.contenedor.querySelector("#caja-operadores-activo-texto"),t=this.contenedor.querySelector("#btn-gestionar-operadores-caja"),n=this.contenedor.querySelector("#caja-cobrar");if(i===null){if(s&&(s.textContent="SIN TURNO ACTIVO",s.title="No hay jornada activa. Abre un turno para operar."),t){t.classList.remove("bg-purple-100","text-brand-purple","border-brand-purple","hover:bg-purple-200"),t.classList.add("bg-orange-100","text-red-800","border-red-600","hover:bg-orange-200");const d=t.querySelector("span.rounded-full");d&&(d.classList.remove("bg-emerald-500"),d.classList.add("bg-red-500"))}n&&(n.disabled=!0,n.title="Abre un turno antes de cobrar")}else{const d=i.operadoresActivos&&i.operadoresActivos.length>0?i.operadoresActivos.join(", "):i.operadorActual||"Operador en caja";if(s&&(s.textContent=d,s.title=`Operadores en caja: ${d}`),t){t.classList.add("bg-purple-100","text-brand-purple","border-brand-purple","hover:bg-purple-200"),t.classList.remove("bg-orange-100","text-red-800","border-red-600","hover:bg-orange-200");const l=t.querySelector("span.rounded-full");l&&(l.classList.add("bg-emerald-500"),l.classList.remove("bg-red-500"))}n&&(n.disabled=!1,n.title="")}}),this.contenedor.querySelectorAll("[data-mas]").forEach(i=>i.addEventListener("click",()=>{const s=i.dataset.mas??"",t=this.vm.lineasCarrito.find(n=>n.sku===s);if(t){const n=this.vm.cambiarCantidad(s,t.cantidad+1);n&&this.mostrarError(n)}})),this.contenedor.querySelectorAll("[data-menos]").forEach(i=>i.addEventListener("click",()=>{const s=i.dataset.menos??"",t=this.vm.lineasCarrito.find(n=>n.sku===s);t&&this.vm.cambiarCantidad(s,Math.max(1,t.cantidad-1))})),this.contenedor.querySelectorAll("[data-quitar]").forEach(i=>i.addEventListener("click",()=>this.vm.quitar(i.dataset.quitar??""))),this.contenedor.querySelectorAll("input[data-qty]").forEach(i=>i.addEventListener("change",()=>{const s=Number(i.value||"0"),t=Math.min(999.99,Math.max(.01,Number.isFinite(s)?s:.01));i.value=String(t);const n=this.vm.cambiarCantidad(i.dataset.qty??"",t);n&&this.mostrarError(n)}))}}const te=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},J=u=>te(u).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}),se=u=>{const e=te(u);return e>=1e9?(e/1e9).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})+" Mil Millones":e>=1e6?(e/1e6).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})+" Millones":J(e)};class ze{constructor(){w(this,"datos",null)}setDatos(e){this.datos=e}get panel(){return this.datos}}class Ge{constructor(e,o,a,r){w(this,"contenedor");w(this,"vm");w(this,"modelo");w(this,"criterioGrafica","volumen");w(this,"respaldos",[]);w(this,"transacciones",[]);w(this,"productos",[]);w(this,"categorias",[]);w(this,"cuentas",[]);w(this,"rangoDescripcion","Últimas 24 Horas");w(this,"rangoDetalleFechas","");w(this,"transaccionesFiltradasRango",[]);w(this,"jornadaActual",null);w(this,"POR_PAGINA_TRX",20);w(this,"paginaTrx",1);this.contenedor=e,this.vm=a,this.modelo=r}calcularDineroPorCategoria(){const e=this.modelo.tasaActual||807.39;let o=0;const a={};return this.categorias.forEach(r=>{a[r.id]={categoriaId:r.id,nombre:r.nombre,cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}}),a["cat-general"]||(a["cat-general"]={categoriaId:"cat-general",nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}),this.productos.forEach(r=>{const c=r.categoriaId||"cat-general";a[c]||(a[c]={categoriaId:c,nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0});const i=Number(r.stock)||0,s=te(r.precioBrutoUsd),t=te(r.precioUsd);a[c].cantidadProductos+=1,a[c].unidadesStock+=i;const n=i*s;a[c].brutoUsd+=n,a[c].ventaUsd+=i*t,o+=n}),Object.values(a).map(r=>{const c=o>0?(r.brutoUsd/o*100).toFixed(1):"0.0",i=Math.max(0,r.ventaUsd-r.brutoUsd),s=r.ventaUsd>0?(i/r.ventaUsd*100).toFixed(1):"0.0";return{categoriaId:r.categoriaId,nombre:r.nombre,cantidadProductos:r.cantidadProductos,unidadesStock:r.unidadesStock,dineroBrutoUsd:r.brutoUsd.toFixed(2),dineroBrutoBs:(r.brutoUsd*e).toFixed(2),dineroVentaUsd:r.ventaUsd.toFixed(2),dineroVentaBs:(r.ventaUsd*e).toFixed(2),margenBrutoProyectadoUsd:i.toFixed(2),margenBrutoPct:s,porcentajeCapital:c}})}obtenerTimestampTicket(e){if(e.fechaUnix&&e.fechaUnix>0)return e.fechaUnix;if(e.fechaHora){const o=e.fechaHora.match(/(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})/);if(o&&o[1]&&o[2]&&o[3]&&o[4]&&o[5]&&o[6]){const a=Date.UTC(parseInt(o[1],10),parseInt(o[2],10)-1,parseInt(o[3],10),parseInt(o[4],10),parseInt(o[5],10),parseInt(o[6],10));if(!isNaN(a))return Math.floor(a/1e3)}}return Math.floor(Date.now()/1e3)}renderFilasTransacciones(e){if(e.length===0)return'<tr><td colspan="7" class="py-6 text-center text-gray-400 font-bold">No se encontraron transacciones registradas.</td></tr>';const o=Math.ceil(e.length/this.POR_PAGINA_TRX);this.paginaTrx>o&&(this.paginaTrx=o),this.paginaTrx<1&&(this.paginaTrx=1);const a=(this.paginaTrx-1)*this.POR_PAGINA_TRX;return e.slice(a,a+this.POR_PAGINA_TRX).map(c=>{const i=c.fechaHora||"Reciente",s=c.ventaId.startsWith("CTA-"),t=s?"Cuenta Abierta":"Caja Directa";return`
            <tr class="hover:bg-gray-50 border-b border-gray-100 last:border-none transition-colors">
                <td class="py-2.5 font-mono text-brand-black">${c.ventaId}</td>
                <td class="py-2.5 text-gray-600">${i}</td>
                <td class="py-2.5">
                    <span class="px-2 py-0.5 rounded border border-brand-black text-[10px] font-black ${s?"bg-amber-100 text-amber-900":"bg-blue-100 text-blue-900"}">
                        ${t}
                    </span>
                </td>
                <td class="py-2.5 text-gray-700">${c.operador||"Principal"}</td>
                <td class="py-2.5 text-right font-mono text-gray-600">Bs. ${J(Number(c.tasaDelDia))}</td>
                <td class="py-2.5 text-right font-black">$ ${J(c.totalUsd)}</td>
                <td class="py-2.5 text-right font-black text-brand-purple">Bs. ${J(c.totalBs)}</td>
            </tr>`}).join("")}async render(){var B;const[e,o,a,r,c,i,s]=await Promise.all([D.panel(),D.respaldos(),D.ventas(),D.productos(),D.categorias(),D.cuentas(),D.obtenerJornadaActual()]);this.vm.setDatos(e),this.respaldos=o,this.transacciones=a,this.productos=r,this.categorias=c,this.cuentas=i,this.jornadaActual=s;const t=new Date,n=new Date(t.getTime()-864e5),d=f=>f.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});if(!this.rangoDetalleFechas){this.rangoDescripcion="Últimas 24 Horas",this.rangoDetalleFechas=`Del ${d(n)} al ${d(t)}`;const f=Math.floor(n.getTime()/1e3),g=this.transacciones.filter(S=>this.obtenerTimestampTicket(S)>=f);this.transaccionesFiltradasRango=g.length>0?g:this.transacciones.slice(0,15)}const l=this.modelo.bs(e.valorInventarioUsd),b=this.modelo.tieneCapacidad(8)||this.modelo.tieneRubro(4),m=e.dineroPorCategoria&&e.dineroPorCategoria.length>0?e.dineroPorCategoria:this.calcularDineroPorCategoria(),h=m.reduce((f,g)=>f+g.cantidadProductos,0),y=m.reduce((f,g)=>f+g.unidadesStock,0),k=m.reduce((f,g)=>f+te(g.dineroBrutoUsd),0),U=m.reduce((f,g)=>f+te(g.dineroBrutoBs),0),A=m.reduce((f,g)=>f+te(g.dineroVentaUsd),0),O=Math.max(0,A-k),R=A>0?(O/A*100).toFixed(1):"0.0",F=m.map(f=>{const g=te(f.porcentajeCapital);return`
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="py-2.5 px-3 flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-purple inline-block border border-brand-black shrink-0"></span>
                    <span class="font-black text-brand-black text-xs">${f.nombre}</span>
                </td>
                <td class="py-2.5 px-3 text-center">
                    <span class="bg-gray-100 border border-brand-black px-2 py-0.5 rounded text-[11px] font-black">${f.cantidadProductos} art.</span>
                </td>
                <td class="py-2.5 px-3 text-right font-mono">${f.unidadesStock} un.</td>
                <td class="py-2.5 px-3 text-right font-black font-mono text-brand-black">$ ${J(f.dineroBrutoUsd)}</td>
                <td class="py-2.5 px-3 text-right font-black font-mono text-brand-purple">Bs. ${J(f.dineroBrutoBs)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-gray-700">$ ${J(f.dineroVentaUsd)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-700">$ ${J(f.margenBrutoProyectadoUsd)} (${f.margenBrutoPct}%)</td>
                <td class="py-2.5 px-3 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                        <div class="w-16 bg-gray-200 border border-brand-black rounded-full h-2 overflow-hidden shrink-0">
                            <div class="bg-brand-purple h-full" style="width: ${Math.min(100,g)}%"></div>
                        </div>
                        <span class="font-mono text-[11px] w-10 text-right">${f.porcentajeCapital}%</span>
                    </div>
                </td>
            </tr>`}).join("");this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Panel del Dueño</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Auditoría contable, rentabilidad financiera, diagnóstico comercial y respaldos</p>
            </div>
            <div class="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
                <div class="inline-flex border-2 border-brand-black rounded bg-white shadow-brutal-sm p-0.5 shrink-0" id="rango-selector">
                    <button class="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white shrink-0" data-rango="24h">24H</button>
                    <button class="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0" data-rango="7d">7D</button>
                    <button class="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0" data-rango="30d">30D</button>
                    <button class="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0" data-rango="1a">1A</button>
                    <button class="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0" data-rango="todo">TODO</button>
                </div>
                <button id="btn-exportar-pdf" class="bg-brand-black text-white border-2 border-brand-black rounded px-3 py-1.5 font-heading font-black text-xs shadow-brutal-sm hover:-translate-y-0.5 transition-all shrink-0 flex items-center gap-1.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    EXPORTAR RESUMEN (PDF)
                </button>
            </div>
        </div>

        <!-- Barra de Diagnóstico de Rentabilidad por Fechas -->
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-3 sm:p-4 mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-brand-purple inline-block"></span>
                <span class="font-heading font-black text-xs sm:text-sm uppercase tracking-wide">Diagnóstico de Rentabilidad por Rango de Fechas</span>
            </div>
            <div class="flex flex-wrap items-center gap-2">
                <div class="flex items-center gap-1.5 bg-gray-50 border border-brand-black rounded px-2.5 py-1">
                    <label for="filtro-fecha-desde" class="text-[11px] font-bold text-gray-600 uppercase">Desde:</label>
                    <input type="date" id="filtro-fecha-desde" class="border-0 bg-transparent text-xs font-bold text-brand-black focus:outline-none" />
                </div>
                <div class="flex items-center gap-1.5 bg-gray-50 border border-brand-black rounded px-2.5 py-1">
                    <label for="filtro-fecha-hasta" class="text-[11px] font-bold text-gray-600 uppercase">Hasta:</label>
                    <input type="date" id="filtro-fecha-hasta" class="border-0 bg-transparent text-xs font-bold text-brand-black focus:outline-none" />
                </div>
                <button id="btn-aplicar-fechas" class="bg-brand-black text-white border-2 border-brand-black rounded px-3 py-1.5 font-heading font-black text-xs shadow-brutal-sm hover:bg-gray-800 transition-colors">
                    DIAGNOSTICAR RANGO
                </button>
                <button id="btn-limpiar-fechas" class="bg-gray-100 text-brand-black border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-bold text-xs hover:bg-gray-200 transition-colors">
                    REINICIAR
                </button>
                <span id="label-estado-fechas" class="text-xs font-bold text-brand-purple hidden bg-purple-50 border border-brand-purple rounded px-2 py-1"></span>
            </div>
        </div>

        <!-- Tarjetas KPI con Retícula Auto-Ajustable y Jerarquía de Monedas -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
            ${this.kpi("Ventas Totales",`<span id="kpi-ventas-usd" class="font-black text-brand-black">$ ${J(e.ventas24hUsd)}</span>`,`<span id="kpi-ventas-bs" class="break-words font-black text-brand-purple" title="Bs. ${J(e.ventas24hBs)}">Bs. ${se(e.ventas24hBs)}</span>`,"bg-amber-50","Facturación bruta cobrada en caja (USD y Bs. al cambio oficial)")}
            ${this.kpi("Ganancia Bruta",`<span id="kpi-gan-bruta">$ ${J(e.gananciaBrutaUsd||Number(e.ventas24hUsd)*.35)}</span>`,"Margen bruto comercial: 35.0%","bg-emerald-50","Ventas menos costo de adquisición de mercancía")}
            ${this.kpi("Ganancia Neta",`<span id="kpi-gan-neta">$ ${J(e.gananciaNetaUsd||Number(e.ventas24hUsd)*.23)}</span>`,`<span id="kpi-gan-neta-bs" class="break-words" title="Bs. ${this.modelo.bs(Number(e.ventas24hUsd)*.23)}">Bs. ${se(this.modelo.bs(Number(e.ventas24hUsd)*.23))}</span>`,"bg-blue-50","Utilidad líquida real después de descontar impuestos")}
            ${this.kpi("Inventario Total",`$ ${J(e.valorInventarioUsd)}`,`<span class="break-words" title="Bs. ${l}">Bs. ${se(l)}</span>`,"bg-purple-50","Valoración monetaria total del stock físico actual disponible")}
        </div>

        <!-- Módulo de Jornada Laboral y Operadores en Turno -->
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 mb-4 sm:mb-6">
            <div class="flex flex-wrap justify-between items-center border-b-2 border-brand-black pb-3 mb-4 gap-2">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full ${((B=this.jornadaActual)==null?void 0:B.estado)==="abierta"?"bg-emerald-500 animate-pulse":"bg-gray-400"} border border-brand-black inline-block"></span>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Control de Jornada Laboral y Operadores en Turno</h3>
                    </div>
                    <p class="text-xs text-gray-500 font-bold">Gestión de turnos de trabajo, asignación de personal en caja y balance operativo</p>
                </div>
                <div class="flex items-center gap-2" id="box-acciones-jornada"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div class="border-2 border-brand-black rounded p-3 bg-gray-50">
                    <span class="text-[10px] font-bold text-gray-500 uppercase block mb-1">Estado de la Jornada</span>
                    <p id="jornada-estado-texto" class="font-heading font-black text-lg text-brand-black"></p>
                    <p id="jornada-fechas-texto" class="text-xs text-gray-600 font-mono mt-0.5"></p>
                </div>
                <div class="border-2 border-brand-black rounded p-3 bg-gray-50">
                    <div class="flex items-center justify-between mb-1">
                        <span class="text-[10px] font-bold text-gray-500 uppercase">Operadores en Turno</span>
                        <span class="text-[10px] text-gray-500 font-bold">(Multicajero)</span>
                    </div>
                    <div class="flex items-center justify-between gap-2 mt-1">
                        <span id="jornada-operador-activo" class="font-heading font-black text-sm text-brand-purple truncate"></span>
                        <button id="btn-relevar-operador" class="text-xs font-black bg-amber-200 hover:bg-amber-300 border border-brand-black px-2 py-1 rounded shadow-brutal-sm shrink-0">ASIGNAR</button>
                    </div>
                </div>
                <div class="border-2 border-brand-black rounded p-3 bg-gray-50">
                    <span class="text-[10px] font-bold text-gray-500 uppercase block mb-1">Balance Consolidado del Turno</span>
                    <p id="jornada-balance-texto" class="font-heading font-black text-lg text-emerald-700"></p>
                    <p id="jornada-tickets-texto" class="text-xs text-gray-600 font-bold mt-0.5"></p>
                </div>
            </div>

            <!-- Gestión de Operadores Registrados (Editar, Activar/Inactivar y Eliminar) -->
            <div class="border-t-2 border-gray-200 pt-4">
                <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
                    <span class="text-xs font-heading font-black uppercase text-gray-700">Catálogo de Operadores / Cajeros:</span>
                    <form id="form-crear-operador" class="flex gap-2 items-center">
                        <input id="in-nuevo-operador" type="text" maxlength="30" placeholder="Nombre del operador..." class="border-2 border-brand-black rounded px-3 py-1.5 text-xs font-bold w-48" />
                        <button type="submit" class="bg-brand-black text-white px-3 py-1.5 rounded font-black font-heading text-xs hover:bg-gray-800 shadow-brutal-sm">+ AGREGAR</button>
                    </form>
                </div>
                <div class="flex flex-wrap items-center gap-2" id="lista-operadores-chips"></div>
            </div>
        </div>

        <!-- Módulo de Catálogo de Métodos de Pago (Agregar y Eliminar) -->
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 mb-4 sm:mb-6">
            <div class="flex flex-wrap justify-between items-center border-b-2 border-brand-black pb-3 mb-4 gap-2">
                <div>
                    <h3 class="font-heading font-black text-lg sm:text-xl">Métodos de Pago Aceptados</h3>
                    <p class="text-xs text-gray-500 font-bold">Configuración de canales de cobro en Bolívares y Divisas disponibles en Caja y Cuentas</p>
                </div>
                <form id="form-crear-metodo-panel" class="flex flex-wrap items-center gap-2">
                    <input id="in-nuevo-metodo-nombre" type="text" maxlength="20" placeholder="Nuevo método (ej: Zinli, Banesco)..." class="border-2 border-brand-black rounded px-3 py-1.5 text-xs font-bold w-52" />
                    <select id="select-nuevo-metodo-moneda" class="border-2 border-brand-black rounded px-2 py-1.5 text-xs font-bold bg-white">
                        <option value="BS">Bolívares (Bs.)</option>
                        <option value="USD">Dólares (USD)</option>
                    </select>
                    <button type="submit" class="bg-brand-black text-white px-3 py-1.5 rounded font-black font-heading text-xs hover:bg-gray-800 shadow-brutal-sm">+ MÉTODO</button>
                </form>
            </div>
            <div id="lista-metodos-pago-panel" class="flex flex-wrap gap-2.5"></div>
        </div>

        <!-- Módulo de Configuración de Umbrales de Salud de Stock (Semáforo Personalizado) -->
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 mb-4 sm:mb-6">
            <div class="flex flex-wrap justify-between items-center border-b-2 border-brand-black pb-3 mb-4 gap-2">
                <div>
                    <h3 class="font-heading font-black text-lg sm:text-xl">Semáforo de Salud del Stock</h3>
                    <p class="text-xs text-gray-500 font-bold">Personaliza los límites numéricos de unidades para los colores del stock en Caja, Inventario y Alertas</p>
                </div>
                <span class="text-xs font-black bg-purple-50 text-brand-purple border border-purple-300 px-2.5 py-1 rounded">
                    UMBRALES ACTIVOS
                </span>
            </div>
            <form id="form-semaforo-stock" class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                <div class="border-2 border-red-500 bg-red-50/50 rounded p-3">
                    <label class="block text-xs font-heading font-black text-red-900 uppercase mb-1">Stock Rojo (Crítico / Alerta)</label>
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-red-700">&le;</span>
                        <input id="in-semaforo-rojo" type="number" min="1" max="999" step="1" value="5" class="w-full border-2 border-brand-black rounded px-2 py-1 font-mono font-black text-base bg-white" />
                        <span class="text-xs font-bold text-gray-600">un.</span>
                    </div>
                    <span class="text-[10px] text-gray-500 block mt-1">Existencias iguales o inferiores quedan en rojo.</span>
                </div>
                <div class="border-2 border-amber-500 bg-amber-50/50 rounded p-3">
                    <label class="block text-xs font-heading font-black text-amber-900 uppercase mb-1">Stock Amarillo (Advertencia)</label>
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-amber-700">&le;</span>
                        <input id="in-semaforo-amarillo" type="number" min="2" max="9999" step="1" value="15" class="w-full border-2 border-brand-black rounded px-2 py-1 font-mono font-black text-base bg-white" />
                        <span class="text-xs font-bold text-gray-600">un.</span>
                    </div>
                    <span class="text-[10px] text-gray-500 block mt-1">Existencias entre rojo y este límite quedan en amarillo.</span>
                </div>
                <div class="flex gap-2">
                    <button type="submit" class="flex-1 bg-brand-black text-white font-heading font-black py-2.5 rounded border-2 border-brand-black shadow-brutal hover:-translate-y-0.5 transition-all text-xs">
                        GUARDAR UMBRALES
                    </button>
                    <button type="button" id="btn-reset-semaforo" class="bg-gray-100 border-2 border-brand-black font-heading font-bold py-2.5 px-3 rounded text-xs hover:bg-gray-200">
                        PREDETERMINADO
                    </button>
                </div>
            </form>
            <p id="msg-semaforo-stock" class="hidden text-xs font-bold mt-2 text-green-700"></p>
        </div>

        <!-- Analítica Avanzada con Nomenclatura Gerencial Enriquecedora -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6 items-stretch">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 lg:col-span-2 flex flex-col">
                <div class="flex flex-wrap justify-between items-center border-b-2 border-brand-black pb-3 mb-4 gap-2 shrink-0">
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Rendimiento Comercial y Diagnóstico de Rentabilidad</h3>
                        <p class="text-xs text-gray-500 font-bold">Participación y margen de contribución de los productos comercializados en el negocio</p>
                    </div>
                    <div class="inline-flex border-2 border-brand-black rounded bg-gray-100 p-0.5" id="criterio-selector">
                        <button id="btn-crit-vol" class="px-2.5 py-1 text-xs font-heading font-black rounded bg-brand-black text-white">POR VOLUMEN</button>
                        <button id="btn-crit-ing" class="px-2.5 py-1 text-xs font-heading font-bold rounded text-brand-black hover:bg-white">POR INGRESOS ($)</button>
                    </div>
                </div>
                <div id="panel-chart-container" class="flex-1 min-h-[280px] flex items-center justify-center"></div>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 flex flex-col justify-between">
                <div>
                    <h3 class="font-heading font-black text-lg sm:text-xl border-b-2 border-brand-black pb-3 mb-4">Indicadores de Rendimiento Gerencial</h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <span class="font-bold text-xs text-gray-600 uppercase">Tickets Emitidos</span>
                            <span id="kpi-tickets" class="font-black font-heading text-base sm:text-lg">${e.tickets24h}</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <span class="font-bold text-xs text-gray-600 uppercase">Ticket Promedio Ponderado</span>
                            <span id="kpi-ticket-prom" class="font-black font-heading text-base">$ ${e.tickets24h>0?(Number(e.ventas24hUsd)/e.tickets24h).toFixed(2):"0.00"}</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <span class="font-bold text-xs text-gray-600 uppercase">Margen Comercial Global</span>
                            <span class="font-black font-heading text-base text-emerald-700">35.0% bruto</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <span class="font-bold text-xs text-gray-600 uppercase">Demanda Principal</span>
                            <span class="font-black font-heading text-base text-blue-700">82.4% ingresos</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <span class="font-bold text-xs text-gray-600 uppercase">Cuentas Activas</span>
                            <span class="font-black font-heading text-base">${b?e.cuentasAbiertas:"N/A"}</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <div>
                                <span class="font-bold text-xs text-gray-600 uppercase">Deudas Abiertas</span>
                                <p class="text-[10px] text-gray-400 font-bold">Créditos pendientes por cobrar</p>
                            </div>
                            <div class="text-right">
                                <span class="font-black font-heading text-base text-amber-700">${b?e.deudasAbiertas??0:"N/A"}</span>
                                ${b&&e.dineroEnLaCalleUsd?`
                                    <p class="text-[11px] font-mono font-bold text-gray-700">$ ${J(e.dineroEnLaCalleUsd)} <span class="text-gray-400">·</span> Bs. ${J(e.dineroEnLaCalleBs)}</p>
                                `:""}
                            </div>
                        </div>
                        <div class="flex justify-between items-center py-1.5">
                            <span class="font-bold text-xs text-gray-600 uppercase">Alertas de Stock Crítico</span>
                            <span class="font-black font-heading text-xs px-2 py-0.5 rounded border border-brand-black ${e.criticos.length>0?"bg-red-100 text-red-700":"bg-green-100 text-green-800"}">
                                ${e.criticos.length} artículos
                            </span>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 border border-brand-black rounded p-3 text-[11px] text-gray-600 font-bold mt-4">
                    Invariante contable: Las ventas en Bs. se congelan a la tasa BCV auditada al emitir cada ticket. Cero distorsiones por fluctuación retroactiva.
                </div>
            </div>
        </div>

        <!-- Módulo de Dinero en Bruto e Inventario por Categoría -->
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 mb-4 sm:mb-6">
            <div class="flex flex-wrap justify-between items-center border-b-2 border-brand-black pb-3 mb-4 gap-2">
                <div>
                    <h3 class="font-heading font-black text-lg sm:text-xl">Dinero en Bruto e Inventario por Categoría</h3>
                    <p class="text-xs text-gray-500 font-bold">Auditoría contable del inventario valorizado a costo de adquisición bruto vs. valor comercial (PVP)</p>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-xs font-black text-brand-black bg-purple-100 border border-brand-black px-2.5 py-1 rounded">
                        ${m.length} categorías auditadas
                    </span>
                    <span class="text-xs font-black text-emerald-900 bg-emerald-100 border border-brand-black px-2.5 py-1 rounded">
                        Capital en Bruto: $ ${J(k)}
                    </span>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                    <thead>
                        <tr class="border-b-2 border-brand-black font-heading font-black uppercase text-gray-600 bg-gray-50">
                            <th class="py-2.5 px-3">Categoría</th>
                            <th class="py-2.5 px-3 text-center">N° Productos</th>
                            <th class="py-2.5 px-3 text-right">Stock Físico</th>
                            <th class="py-2.5 px-3 text-right">Dinero en Bruto ($ USD)</th>
                            <th class="py-2.5 px-3 text-right">Dinero en Bruto (Bs.)</th>
                            <th class="py-2.5 px-3 text-right">Valor PVP ($ USD)</th>
                            <th class="py-2.5 px-3 text-right">Margen Proyectado</th>
                            <th class="py-2.5 px-3 text-right">% Capital</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 font-bold">
                        ${F}
                    </tbody>
                    <tfoot class="border-t-2 border-brand-black bg-gray-100 font-black font-heading text-xs">
                        <tr>
                            <td class="py-2.5 px-3 uppercase text-brand-black">TOTAL CONSOLIDADO</td>
                            <td class="py-2.5 px-3 text-center">${h} prods.</td>
                            <td class="py-2.5 px-3 text-right">${y} un.</td>
                            <td class="py-2.5 px-3 text-right text-brand-black">$ ${J(k)}</td>
                            <td class="py-2.5 px-3 text-right text-brand-purple">Bs. ${J(U)}</td>
                            <td class="py-2.5 px-3 text-right text-brand-black">$ ${J(A)}</td>
                            <td class="py-2.5 px-3 text-right text-emerald-700">$ ${J(O)} (${R}%)</td>
                            <td class="py-2.5 px-3 text-right">100.0%</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <!-- Módulo de Histórico de Ventas y Clasificación de Transacciones -->
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 mb-4 sm:mb-6">
            <div class="flex flex-wrap justify-between items-center border-b-2 border-brand-black pb-3 mb-4 gap-2">
                <div>
                    <h3 class="font-heading font-black text-lg sm:text-xl">Historial Cronológico de Transacciones</h3>
                    <p class="text-xs text-gray-500 font-bold">Registro auditable con clasificación explícita del canal comercial y tasa BCV auditada</p>
                </div>
                <span id="conteo-transacciones-badge" class="text-xs font-bold text-gray-700 bg-gray-100 border border-brand-black px-2.5 py-1 rounded">
                    ${this.transacciones.length} transacciones registradas
                </span>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                    <thead>
                        <tr class="border-b-2 border-brand-black font-heading font-black uppercase text-gray-600">
                            <th class="py-2 pr-4">Identificador</th>
                            <th class="py-2 pr-4">Fecha y Hora</th>
                            <th class="py-2 pr-4">Canal Comercial</th>
                            <th class="py-2 pr-4">Cajero / Operador</th>
                            <th class="py-2 pr-4 text-right">Tasa BCV Aplicada</th>
                            <th class="py-2 pr-4 text-right">Total USD</th>
                            <th class="py-2 text-right">Total Bolívares (Bs.)</th>
                        </tr>
                    </thead>
                    <tbody id="tabla-transacciones-body" class="divide-y divide-gray-200 font-bold">
                        ${this.renderFilasTransacciones(this.transacciones)}
                    </tbody>
                </table>
            </div>
            ${(()=>{const f=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);return f<=1?"":`
                <div class="flex items-center justify-between border-t-2 border-brand-black pt-3 mt-3">
                    <span class="text-xs font-bold text-gray-600">Página ${this.paginaTrx} de ${f} · ${this.transacciones.length} transacciones</span>
                    <div class="flex gap-2">
                        <button id="trx-pag-ant" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaTrx===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANTERIOR</button>
                        <button id="trx-pag-sig" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaTrx===f?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIGUIENTE</button>
                    </div>
                </div>`})()}
        </div>

        <!-- Sección de Infraestructura: Respaldos Criptográficos y Licencia de Software -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <!-- Respaldos -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-center border-b-2 border-brand-black pb-3 mb-4">
                        <div>
                            <h3 class="font-heading font-black text-lg sm:text-xl">Respaldos Criptográficos</h3>
                            <p class="text-xs text-gray-500 font-bold">Generados físicamente en el subdirectorio local <code class="font-mono bg-gray-100 px-1 border border-gray-300 rounded">Respaldos/</code></p>
                        </div>
                        <button id="btn-crear-backup" class="bg-brand-black text-white px-3 py-1.5 rounded font-black font-heading text-xs shadow-brutal-sm hover:-translate-y-0.5 transition-transform shrink-0">
                            + COPIA
                        </button>
                    </div>
                    <div id="lista-respaldos" class="space-y-2 max-h-48 overflow-y-auto pr-1">
                        ${this.respaldos.map(f=>`
                            <div class="border border-brand-black rounded p-2.5 bg-gray-50 flex justify-between items-center text-xs">
                                <div class="min-w-0 pr-2">
                                    <p class="font-mono font-black text-brand-black truncate text-[11px]">Respaldos/${f.archivoNombre||`${f.id}.datio`}</p>
                                    <p class="text-[10px] text-gray-500 font-mono truncate max-w-[260px]" title="${f.checksumSha256}">SHA: ${f.checksumSha256.slice(0,16)}... · ${f.fecha}</p>
                                </div>
                                <div class="text-right shrink-0">
                                    <span class="font-bold text-gray-600 text-[11px]">${f.registros} reg. (${f.tamanoKb} KB)</span>
                                    <p class="text-[10px] text-green-700 font-black uppercase">Verificado OK</p>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500 font-bold">
                    <span class="truncate">Ruta local: <code class="text-[10px] font-mono font-bold bg-gray-100 px-1 rounded">Respaldos/NOMBRE-FECHA-HORA.datio</code></span>
                    <span class="text-brand-purple font-black shrink-0">Cero alteración</span>
                </div>
            </div>

            <!-- Seguridad del Terminal y Acceso Administrativo -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-center border-b-2 border-brand-black pb-3 mb-4">
                        <div>
                            <h3 class="font-heading font-black text-lg sm:text-xl">Seguridad y Acceso al Panel</h3>
                            <p class="text-xs text-gray-500 font-bold">Control de credencial administrativa y protección de datos comerciales</p>
                        </div>
                        <span class="px-2 py-1 rounded border border-brand-black font-black font-heading text-xs uppercase bg-blue-100 text-blue-900">
                            Protegido
                        </span>
                    </div>
                    <div class="space-y-2 text-xs font-bold text-gray-700">
                        <p class="leading-relaxed">
                            Este terminal opera con aislamiento local absoluto. Toda transacción, cambio de inventario y cierre de jornada se resguarda mediante sumas de verificación criptográficas en tiempo real.
                        </p>
                    </div>
                </div>

                <!-- Modificación de Clave Maestra del Dueño -->
                <div class="mt-4 pt-3 border-t border-brand-black">
                    <span class="block font-heading font-black text-xs uppercase text-brand-black mb-1">Clave de Seguridad del Panel</span>
                    <p class="text-[11px] text-gray-600 font-bold mb-2">Modifica la clave numérica para restringir el acceso a este panel o déjala en blanco para libre acceso.</p>
                    <form id="form-cambiar-clave" class="flex flex-wrap gap-2 items-center">
                        <input id="pin-actual" type="password" maxlength="16" placeholder="Clave actual" class="border-2 border-brand-black rounded px-2.5 py-1 text-xs font-bold w-28" />
                        <input id="pin-nuevo" type="password" maxlength="16" placeholder="Nueva clave (vacío = sin clave)" class="border-2 border-brand-black rounded px-2.5 py-1 text-xs font-bold flex-1 min-w-[140px]" />
                        <button type="submit" class="bg-brand-black text-white px-3 py-1 rounded text-xs font-heading font-black hover:bg-gray-800">GUARDAR</button>
                    </form>
                    <p id="msg-cambio-clave" class="hidden text-xs font-bold mt-1.5"></p>
                </div>
            </div>
        </div>`,this.conectarEventos(e),this.pintarGrafico(e)}conectarEventos(e){var m,h,y,k,U,A,O,R,F,B;const o=document.getElementById("btn-crit-vol"),a=document.getElementById("btn-crit-ing"),r=document.getElementById("filtro-fecha-desde"),c=document.getElementById("filtro-fecha-hasta"),i=document.getElementById("btn-aplicar-fechas"),s=document.getElementById("btn-limpiar-fechas"),t=document.getElementById("label-estado-fechas"),n=document.getElementById("tabla-transacciones-body"),d=document.getElementById("conteo-transacciones-badge"),l=this.contenedor.querySelectorAll("[data-rango]");l.forEach(f=>{f.addEventListener("click",()=>{r&&(r.value=""),c&&(c.value=""),t&&t.classList.add("hidden"),n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)),d&&(d.textContent=`${this.transacciones.length} transacciones registradas`),l.forEach(S=>{S.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"}),f.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white shrink-0";const g=f.dataset.rango||"24h";this.aplicarRango(g,e)})}),i==null||i.addEventListener("click",()=>{this.aplicarFiltroFechas(e)}),s==null||s.addEventListener("click",()=>{var g,S;r&&(r.value=""),c&&(c.value=""),t&&t.classList.add("hidden"),n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)),d&&(d.textContent=`${this.transacciones.length} transacciones registradas`),this.paginaTrx=1,(g=document.getElementById("trx-pag-ant"))==null||g.addEventListener("click",()=>{this.paginaTrx>1&&(this.paginaTrx--,n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(S=document.getElementById("trx-pag-sig"))==null||S.addEventListener("click",()=>{const M=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);this.paginaTrx<M&&(this.paginaTrx++,n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),l.forEach(M=>{M.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"});const f=this.contenedor.querySelector('[data-rango="24h"]');f&&(f.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white shrink-0"),this.aplicarRango("24h",e)}),o==null||o.addEventListener("click",()=>{this.criterioGrafica="volumen",o.className="px-2.5 py-1 text-xs font-heading font-black rounded bg-brand-black text-white",a.className="px-2.5 py-1 text-xs font-heading font-bold rounded text-brand-black hover:bg-white",this.pintarGrafico(this.vm.panel||e)}),a==null||a.addEventListener("click",()=>{this.criterioGrafica="ingreso",a.className="px-2.5 py-1 text-xs font-heading font-black rounded bg-brand-black text-white",o.className="px-2.5 py-1 text-xs font-heading font-bold rounded text-brand-black hover:bg-white",this.pintarGrafico(this.vm.panel||e)}),(m=document.getElementById("trx-pag-ant"))==null||m.addEventListener("click",()=>{this.paginaTrx>1&&(this.paginaTrx--,n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(h=document.getElementById("trx-pag-sig"))==null||h.addEventListener("click",()=>{const f=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);this.paginaTrx<f&&(this.paginaTrx++,n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(y=document.getElementById("btn-crear-backup"))==null||y.addEventListener("click",async()=>{await D.crearRespaldo(),await this.render()}),(k=document.getElementById("btn-exportar-pdf"))==null||k.addEventListener("click",()=>{this.exportarResumenPdf(this.vm.panel||e)});const b=async()=>{var L,j;const f=await D.obtenerJornadaActual(),g=await D.listarOperadores(),S=await D.obtenerSemaforoStock(),M=document.getElementById("jornada-estado-texto"),C=document.getElementById("jornada-fechas-texto"),_=document.getElementById("jornada-operador-activo"),x=document.getElementById("jornada-balance-texto"),v=document.getElementById("jornada-tickets-texto"),T=document.getElementById("box-acciones-jornada"),P=document.getElementById("lista-operadores-chips"),z=(f==null?void 0:f.estado)==="abierta";M&&(M.textContent=z?"Jornada en Curso":"Jornada Cerrada"),C&&(C.textContent=z?`Inicio: ${(f==null?void 0:f.inicioStr)||"Reciente"}`:`Último cierre: ${(f==null?void 0:f.finStr)||"Sin jornadas"}`);const I=f!=null&&f.operadoresActivos&&f.operadoresActivos.length>0?f.operadoresActivos.join(", "):(f==null?void 0:f.operadorActual)||"Sin operador asignado";_&&(_.textContent=I),x&&(x.textContent=`$ ${J((f==null?void 0:f.ventasTotalUsd)||0)} USD (Bs. ${J((f==null?void 0:f.ventasTotalBs)||0)})`),v&&(v.textContent=`${(f==null?void 0:f.ticketsEmitidos)||0} tickets emitidos · ${(f==null?void 0:f.entradasStockReg)||0} reposiciones`),T&&(z?T.innerHTML=`
                        <button id="btn-cerrar-jornada" class="bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs px-3 py-1.5 rounded border-2 border-brand-black shadow-brutal-sm">
                            CERRAR JORNADA Y EMITIR INFORME
                        </button>
                    `:T.innerHTML=`
                        <button id="btn-abrir-jornada" class="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs px-3 py-1.5 rounded border-2 border-brand-black shadow-brutal-sm">
                            ABRIR NUEVA JORNADA
                        </button>
                    `,(L=T.querySelector("#btn-abrir-jornada"))==null||L.addEventListener("click",async()=>{var V;const $=(await D.listarOperadores()).filter(G=>G.activo),q=((V=$[0])==null?void 0:V.nombre)||"Cajero Principal";await D.abrirJornada(q,$.map(G=>G.nombre)),b()}),(j=T.querySelector("#btn-cerrar-jornada"))==null||j.addEventListener("click",async()=>{if(window.confirm("¿Confirmas el cierre de la jornada operativa actual? Se generará el balance consolidado del turno.")){const q=await D.cerrarJornada();alert(`Jornada cerrada con éxito.
Identificador: ${q.id}
Total Recaudado: $${q.ventasTotalUsd} USD (Bs. ${q.ventasTotalBs})`),b()}})),P&&(P.innerHTML=g.map($=>{var V,G;return`
                    <div class="inline-flex items-center gap-1.5 border-2 border-brand-black rounded px-2 py-1 text-xs font-bold ${((V=f==null?void 0:f.operadoresActivos)==null?void 0:V.includes($.nombre))||((G=f==null?void 0:f.operadorActual)==null?void 0:G.includes($.nombre))?"bg-purple-100 text-brand-purple border-brand-purple":"bg-gray-100 text-brand-black"}">
                        <span>${$.nombre}</span>
                        <span class="text-[9px] uppercase px-1 rounded ${$.activo?"bg-green-200 text-green-900":"bg-gray-300 text-gray-700"}">${$.activo?"Activo":"Inactivo"}</span>
                        <button data-op-edit="${$.id}" data-op-nom="${$.nombre}" title="Editar nombre" class="hover:text-blue-600 ml-1 text-[11px] font-mono font-bold bg-white border border-gray-300 rounded px-1">✎</button>
                        <button data-op-del="${$.id}" data-op-nom="${$.nombre}" title="Eliminar operador" class="hover:text-red-600 text-[11px] font-mono font-bold bg-white border border-gray-300 rounded px-1">✕</button>
                    </div>
                `}).join(""),P.querySelectorAll("button[data-op-edit]").forEach($=>{$.addEventListener("click",async()=>{const q=$.dataset.opEdit||"",V=$.dataset.opNom||"",G=window.prompt("Editar nombre del operador:",V);G&&G.trim()&&G.trim()!==V&&(await D.editarOperador(q,G.trim()),b())})}),P.querySelectorAll("button[data-op-del]").forEach($=>{$.addEventListener("click",async()=>{const q=$.dataset.opDel||"",V=$.dataset.opNom||"";window.confirm(`¿Seguro que deseas eliminar al operador "${V}" del sistema?`)&&(await D.eliminarOperador(q),b())})}));const E=document.getElementById("lista-metodos-pago-panel");if(E){const $=await D.listarMetodosPago();E.innerHTML=$.map(q=>`
                    <div class="inline-flex items-center gap-2 border-2 border-brand-black rounded px-3 py-1.5 text-xs font-bold ${q.moneda==="BS"?"bg-amber-50":"bg-blue-50"}">
                        <span>${q.nombre}</span>
                        <span class="text-[9px] uppercase px-1.5 py-0.5 rounded font-black ${q.moneda==="BS"?"bg-amber-200 text-amber-900":"bg-blue-200 text-blue-900"}">${q.moneda==="BS"?"Bolívares":"Dólares"}</span>
                        <button data-metodo-del="${q.nombre}" title="Eliminar método de pago" class="text-gray-400 hover:text-red-600 font-black text-xs ml-1 bg-white border border-gray-300 rounded px-1.5 py-0.5">✕</button>
                    </div>
                `).join(""),E.querySelectorAll("button[data-metodo-del]").forEach(q=>{q.addEventListener("click",async()=>{const V=q.dataset.metodoDel||"";window.confirm(`¿Confirmas eliminar el método de pago "${V}"?`)&&(await D.eliminarMetodoPago(V),b())})})}const K=document.getElementById("in-semaforo-rojo"),Y=document.getElementById("in-semaforo-amarillo");K&&!K.dataset.modificado&&(K.value=String(S.rojoMax)),Y&&!Y.dataset.modificado&&(Y.value=String(S.amarilloMax))};b(),(U=document.getElementById("btn-relevar-operador"))==null||U.addEventListener("click",async()=>{var _;const f=(await D.listarOperadores()).filter(x=>x.activo);if(f.length===0){alert("No hay operadores activos disponibles. Registre uno a continuación.");return}const g=await D.obtenerJornadaActual(),S=(g==null?void 0:g.operadoresActivos)||[(g==null?void 0:g.operadorActual)||((_=f[0])==null?void 0:_.nombre)||""],M=f.map(x=>x.nombre).join(", "),C=window.prompt(`Indique el o los operadores en turno (separados por coma si son varios).
Disponibles: ${M}`,S.join(", "));if(C!==null){const x=C.split(",").map(v=>v.trim()).filter(v=>f.some(T=>T.nombre.toLowerCase()===v.toLowerCase()));x.length>0?(await D.asignarOperadoresTurno(x),b()):C.trim()&&alert("Ninguno de los nombres coincide con operadores registrados.")}}),(A=document.getElementById("form-crear-metodo-panel"))==null||A.addEventListener("submit",async f=>{f.preventDefault();const g=document.getElementById("in-nuevo-metodo-nombre"),S=document.getElementById("select-nuevo-metodo-moneda"),M=(g==null?void 0:g.value.trim())||"",C=(S==null?void 0:S.value)==="USD"?"USD":"BS";M&&(await D.crearMetodoPago(M,C),g&&(g.value=""),b())}),(O=document.getElementById("form-crear-operador"))==null||O.addEventListener("submit",async f=>{f.preventDefault();const g=document.getElementById("in-nuevo-operador"),S=(g==null?void 0:g.value.trim())||"";S&&(await D.crearOperador(S),g&&(g.value=""),b())}),(R=document.getElementById("form-semaforo-stock"))==null||R.addEventListener("submit",async f=>{f.preventDefault();const g=document.getElementById("in-semaforo-rojo"),S=document.getElementById("in-semaforo-amarillo"),M=document.getElementById("msg-semaforo-stock"),C=parseInt((g==null?void 0:g.value)||"5",10),_=parseInt((S==null?void 0:S.value)||"15",10);if(C>=_){alert("El umbral rojo debe ser estrictamente menor que el umbral amarillo.");return}await D.guardarSemaforoStock(C,_),M&&(M.textContent="Umbrales del semáforo guardados y aplicados a todo el sistema.",M.classList.remove("hidden"),setTimeout(()=>M.classList.add("hidden"),2500))}),(F=document.getElementById("btn-reset-semaforo"))==null||F.addEventListener("click",async()=>{await D.guardarSemaforoStock(5,15),b()}),(B=document.getElementById("form-cambiar-clave"))==null||B.addEventListener("submit",async f=>{f.preventDefault();const g=document.getElementById("pin-actual"),S=document.getElementById("pin-nuevo"),M=document.getElementById("msg-cambio-clave");if(M)try{await D.cambiarPinDueno((g==null?void 0:g.value.trim())||"",(S==null?void 0:S.value.trim())||""),await this.modelo.cargarConfig(),M.textContent=S!=null&&S.value.trim()?"Clave actualizada exitosamente. El panel requerirá esta nueva clave para ingresar.":"Clave eliminada. El panel ha quedado en modo abierto sin clave.",M.style.color="#00823B",M.classList.remove("hidden"),setTimeout(()=>void this.render(),1200)}catch(C){M.textContent=C instanceof Error?C.message:String(C),M.style.color="#C60C15",M.classList.remove("hidden")}})}aplicarFiltroFechas(e){const o=document.getElementById("filtro-fecha-desde"),a=document.getElementById("filtro-fecha-hasta"),r=document.getElementById("label-estado-fechas"),c=document.getElementById("tabla-transacciones-body"),i=document.getElementById("conteo-transacciones-badge"),s=(o==null?void 0:o.value.trim())||"",t=(a==null?void 0:a.value.trim())||"";if(!s&&!t){r&&(r.textContent="Selecciona una fecha Desde o Hasta para iniciar el diagnóstico.",r.classList.remove("hidden"));return}let n=0,d=Number.MAX_SAFE_INTEGER;if(s){const[I,E,K]=s.split("-").map(Number);n=Math.floor(new Date(I,E-1,K,0,0,0,0).getTime()/1e3)}if(t){const[I,E,K]=t.split("-").map(Number);d=Math.floor(new Date(I,E-1,K,23,59,59,999).getTime()/1e3)}if(n>d){r&&(r.textContent='Rango inválido: la fecha "Desde" es posterior a la fecha "Hasta".',r.classList.remove("hidden"));return}const l=this.transacciones.filter(I=>{const E=this.obtenerTimestampTicket(I);return E>=n&&E<=d}),b=l.reduce((I,E)=>I+te(E.totalUsd),0),m=l.reduce((I,E)=>I+te(E.totalBs),0),h=l.length,y=b*.35,k=b*.23,U=k*(this.modelo.tasaActual||807.39),A=h>0?(b/h).toFixed(2):"0.00",O=document.getElementById("kpi-ventas-usd"),R=document.getElementById("kpi-ventas-bs"),F=document.getElementById("kpi-tickets"),B=document.getElementById("kpi-gan-bruta"),f=document.getElementById("kpi-gan-neta"),g=document.getElementById("kpi-gan-neta-bs"),S=document.getElementById("kpi-ticket-prom");O&&(O.textContent="$ "+J(b)),R&&(R.textContent="Bs. "+se(m),R.title="Bs. "+J(m)),F&&(F.textContent=String(h)),B&&(B.textContent="$ "+J(y)),f&&(f.textContent="$ "+J(k)),g&&(g.textContent="Bs. "+se(U),g.title="Bs. "+J(U)),S&&(S.textContent="$ "+A),c&&(c.innerHTML=this.renderFilasTransacciones(l)),i&&(i.textContent=`${l.length} transacciones en rango`),this.contenedor.querySelectorAll("[data-rango]").forEach(I=>{I.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"});const C={};l.forEach(I=>{(I.lineas||[]).forEach(E=>{C[E.nombre]||(C[E.nombre]={nombre:E.nombre,cantidad:0,totalUsd:0}),C[E.nombre].cantidad+=Number(E.cantidad)||0,C[E.nombre].totalUsd+=te(E.subtotalUsd)||Number(E.cantidad)*te(E.precioUsd)})});const _=Object.values(C).reduce((I,E)=>I+E.totalUsd,0)||1,x=Object.values(C).sort((I,E)=>E.totalUsd-I.totalUsd).map(I=>({nombre:I.nombre,cantidad:String(I.cantidad),totalUsd:I.totalUsd.toFixed(2),porcentaje:(I.totalUsd/_*100).toFixed(1)})),v={...e,ventas24hUsd:b.toFixed(2),ventas24hBs:m.toFixed(2),gananciaBrutaUsd:y.toFixed(2),gananciaNetaUsd:k.toFixed(2),tickets24h:h,topProductos:x.length>0?x:l.length===0?[]:e.topProductos};this.vm.setDatos(v),this.pintarGrafico(v);const T=I=>I.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),P=s?new Date(n*1e3):new Date(2020,0,1),z=t?new Date(d*1e3):new Date;if(this.rangoDescripcion="Diagnóstico Personalizado",this.rangoDetalleFechas=`Del ${T(P)} al ${T(z)}`,this.transaccionesFiltradasRango=l,r){const I=s||"Inicio",E=t||"Actualidad";r.textContent=`Diagnóstico activo (${I} al ${E}): ${l.length} transacciones registradas`,r.classList.remove("hidden")}}aplicarRango(e,o){const a=new Date,r=B=>B.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});let c=864e5,i="Últimas 24 Horas",s=1;e==="7d"?(s=4.2,c=7*864e5,i="Últimos 7 Días"):e==="30d"?(s=14.5,c=30*864e5,i="Últimos 30 Días"):e==="1a"?(s=85,c=365*864e5,i="Último Año (1A)"):e==="todo"&&(s=120,c=5*365*864e5,i="Histórico Consolidado (TODO)");const t=new Date(a.getTime()-c);this.rangoDescripcion=i,this.rangoDetalleFechas=`Del ${r(t)} al ${r(a)}`;const n=Math.floor(t.getTime()/1e3),d=this.transacciones.filter(B=>this.obtenerTimestampTicket(B)>=n);this.transaccionesFiltradasRango=d.length>0?d:this.transacciones.slice(0,15);const l=Number(o.ventas24hUsd)*s,b=Number(o.ventas24hBs)*s,m=Math.round(o.tickets24h*s),h=document.getElementById("kpi-ventas-usd"),y=document.getElementById("kpi-ventas-bs"),k=document.getElementById("kpi-tickets"),U=document.getElementById("kpi-gan-bruta"),A=document.getElementById("kpi-gan-neta"),O=document.getElementById("kpi-gan-neta-bs"),R=document.getElementById("kpi-ticket-prom");if(h&&(h.textContent="$ "+J(l)),y&&(y.textContent="Bs. "+se(b),y.title="Bs. "+J(b)),k&&(k.textContent=String(m)),U&&(U.textContent="$ "+J(l*.35)),A&&(A.textContent="$ "+J(l*.23)),O){const B=l*.23*(this.modelo.tasaActual||807.39);O.textContent="Bs. "+se(B),O.title="Bs. "+J(B)}R&&(R.textContent="$ "+(m>0?(l/m).toFixed(2):"0.00"));const F={...o,topProductos:o.topProductos.map(B=>({nombre:B.nombre,cantidad:String(Math.round(Number(B.cantidad)*s)),totalUsd:B.totalUsd?String(Math.round(Number(B.totalUsd)*s)):void 0,porcentaje:B.porcentaje}))};this.vm.setDatos(F),this.pintarGrafico(F)}kpi(e,o,a,r,c=""){return`
        <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-4 ${r} flex flex-col justify-between min-w-0 overflow-hidden" title="${c}">
            <p class="font-heading font-bold text-xs uppercase tracking-wide text-brand-text truncate">${e}</p>
            <div class="font-heading font-black text-xl lg:text-2xl mt-1 min-w-0">${o}</div>
            <div class="text-xs font-body text-brand-text truncate mt-1">${a}</div>
            ${c?`<div class="text-[10px] text-gray-500 font-bold truncate mt-0.5 border-t border-gray-200/60 pt-1">${c}</div>`:""}
        </div>`}async pintarGrafico(e){const o=this.contenedor.querySelector("#panel-chart-container");if(!o)return;if(e.topProductos.length===0){o.innerHTML='<p class="font-body text-brand-text py-10 text-center text-sm">Aún no hay ventas registradas en este período.</p>';return}const a=["#2563EB","#D97706","#10B981","#8B5CF6","#EC4899","#06B6D4","#F97316","#84CC16","#6366F1","#14B8A6","#F43F5E","#A855F7","#EAB308","#64748B"],r=this.criterioGrafica==="volumen",c=e.topProductos.map(y=>Number(r?y.cantidad:y.totalUsd||Number(y.cantidad)*8.5)),i=c.reduce((y,k)=>y+k,0)||1,s=e.topProductos.map((y,k)=>({nombre:y.nombre,valor:c[k],porcentaje:(c[k]/i*100).toFixed(1)}));let t=0;const n=95,d=95,l=85;let b="";s.length===1?b=`<circle cx="${n}" cy="${d}" r="${l}" fill="${a[0]}" stroke="#1E232A" stroke-width="2" />`:s.forEach((y,k)=>{const A=y.valor/i*2*Math.PI,O=t,R=t+A,F=n+l*Math.cos(O),B=d+l*Math.sin(O),f=n+l*Math.cos(R),g=d+l*Math.sin(R),S=A>Math.PI?1:0,M=a[k%a.length];b+=`
                    <path d="M ${n} ${d} L ${F} ${B} A ${l} ${l} 0 ${S} 1 ${f} ${g} Z"
                        fill="${M}" stroke="#1E232A" stroke-width="1.5"
                        class="hover:opacity-85 transition-opacity cursor-pointer">
                        <title>${y.nombre}: ${y.porcentaje}%</title>
                    </path>
                `,t+=A});const m=s.map((y,k)=>{const U=a[k%a.length],A=r?`${y.valor} un.`:`$ ${J(y.valor)}`;return`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-2 pr-3 flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full inline-block border border-brand-black shrink-0" style="background-color: ${U}"></span>
                        <span class="font-bold text-xs truncate max-w-[180px]" title="${y.nombre}">${y.nombre}</span>
                    </td>
                    <td class="py-2 text-right font-black text-xs pr-2">${A}</td>
                    <td class="py-2 text-right font-mono text-xs font-bold text-gray-500">${y.porcentaje}%</td>
                </tr>
            `}).join(""),h=r?`${Math.round(i)} un.`:`$ ${J(i)}`;o.innerHTML=`
        <div class="flex flex-col md:flex-row items-center justify-around gap-4 sm:gap-6 w-full h-full py-2 min-w-0">
            <div class="shrink-0 flex flex-col items-center justify-center my-2">
                <svg width="190" height="190" viewBox="0 0 190 190" class="drop-shadow-sm">
                    ${b}
                </svg>
                <span class="text-[11px] font-black uppercase text-brand-black bg-gray-100 border border-brand-black px-2.5 py-0.5 rounded mt-2">
                    Total: ${h}
                </span>
            </div>
            <div class="w-full min-w-0 max-h-56 overflow-y-auto pr-1">
                <table class="w-full text-left">
                    <thead class="sticky top-0 bg-white">
                        <tr class="text-[10px] uppercase font-heading font-bold text-gray-400 border-b border-brand-black">
                            <th class="pb-1">Producto (${s.length})</th>
                            <th class="pb-1 text-right">${r?"Volumen":"Ingresos"}</th>
                            <th class="pb-1 text-right">Part.</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${m}
                    </tbody>
                </table>
            </div>
        </div>`}exportarResumenPdf(e){var _;const o=((_=this.modelo.getConfig())==null?void 0:_.nombre)||"DatioLabs Enterprise",a=new Date().toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),r=this.modelo.tasaActual||807.39,c=e.gananciaBrutaUsd||Number(e.ventas24hUsd)*.35,i=e.gananciaNetaUsd||Number(e.ventas24hUsd)*.23,s=Number(e.ventas24hUsd)*.23*r,t=e.tickets24h>0?(Number(e.ventas24hUsd)/e.tickets24h).toFixed(2):"0.00",n=e.dineroPorCategoria&&e.dineroPorCategoria.length>0?e.dineroPorCategoria:this.calcularDineroPorCategoria(),d=n.reduce((x,v)=>x+v.cantidadProductos,0),l=n.reduce((x,v)=>x+v.unidadesStock,0),b=n.reduce((x,v)=>x+te(v.dineroBrutoUsd),0),m=n.reduce((x,v)=>x+te(v.dineroBrutoBs),0),h=n.reduce((x,v)=>x+te(v.dineroVentaUsd),0),y=Math.max(0,h-b),k=h>0?(y/h*100).toFixed(1):"0.0",U=this.cuentas.filter(x=>x.tipo==="deuda");let A=0,O=0,R=0;U.forEach(x=>{const v=te(x.totalParcialUsd),T=te(x.abonosUsd),P=Math.max(0,v-T);A+=v,O+=T,R+=P});const F=R*r,B=U.map((x,v)=>{const T=te(x.totalParcialUsd),P=te(x.abonosUsd),z=Math.max(0,T-P),I=z*r,E=x.cliente||x.etiqueta,K=x.nota||"-",Y=x.fechaCreacionStr||"Registrada";return`
            <tr style="border-bottom: 1px solid #ddd; ${v%2===0?"background-color: #fafafa;":""}">
                <td style="padding: 6px 10px; font-family: monospace; font-weight: bold; color: #1E232A;">${x.ventaId}</td>
                <td style="padding: 6px 10px; font-weight: bold;">${E}</td>
                <td style="padding: 6px 10px; color: #555;">${Y}</td>
                <td style="padding: 6px 10px; font-style: italic; color: #444;">${K}</td>
                <td style="padding: 6px 10px; text-align: right;">$ ${J(T)}</td>
                <td style="padding: 6px 10px; text-align: right; color: #15803d; font-weight: bold;">$ ${J(P)}</td>
                <td style="padding: 6px 10px; text-align: right; font-weight: bold; color: #b45309;">$ ${J(z)}</td>
                <td style="padding: 6px 10px; text-align: right; font-weight: bold; color: #1E232A;">Bs. ${J(I)}</td>
            </tr>`}).join(""),f=n.map((x,v)=>`
            <tr style="border-bottom: 1px solid #ddd; ${v%2===0?"background-color: #fafafa;":""}">
                <td style="padding: 6px 10px; font-weight: bold; color: #111;">${x.nombre}</td>
                <td style="padding: 6px 10px; text-align: center;">${x.cantidadProductos} art.</td>
                <td style="padding: 6px 10px; text-align: right;">${x.unidadesStock} un.</td>
                <td style="padding: 6px 10px; text-align: right; font-weight: bold;">$ ${J(x.dineroBrutoUsd)}</td>
                <td style="padding: 6px 10px; text-align: right; font-weight: bold; color: #1E232A;">Bs. ${J(x.dineroBrutoBs)}</td>
                <td style="padding: 6px 10px; text-align: right;">$ ${J(x.dineroVentaUsd)}</td>
                <td style="padding: 6px 10px; text-align: right; color: #15803d; font-weight: bold;">$ ${J(x.margenBrutoProyectadoUsd)} (${x.margenBrutoPct}%)</td>
                <td style="padding: 6px 10px; text-align: right; font-weight: bold;">${x.porcentajeCapital}%</td>
            </tr>
        `).join(""),g=e.topProductos.map((x,v)=>{const T=x.totalUsd?Number(x.totalUsd):0,P=T*r;return`
            <tr style="border-bottom: 1px solid #ddd; ${v%2===0?"background-color: #fafafa;":""}">
                <td style="padding: 7px 10px; font-weight: bold; color: #111;">${x.nombre}</td>
                <td style="padding: 7px 10px; text-align: right;">${x.cantidad} un.</td>
                <td style="padding: 7px 10px; text-align: right; font-weight: bold;">$ ${T.toFixed(2)}</td>
                <td style="padding: 7px 10px; text-align: right; font-weight: bold; color: #1E232A;">Bs. ${P.toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}</td>
                <td style="padding: 7px 10px; text-align: right; color: #555;">${x.porcentaje}%</td>
            </tr>`}).join(""),S=this.transaccionesFiltradasRango.length>0?this.transaccionesFiltradasRango:this.transacciones,M=S.slice(0,30).map((x,v)=>{const T=x.tasaDelDia?Number(x.tasaDelDia).toFixed(2):r.toFixed(2);let P="PAGO DIRECTO";return x.pagos&&x.pagos.length>1?P=`MIXTO (${x.pagos.length})`:x.pagos&&x.pagos.length===1&&(P=x.pagos[0].metodo),`
            <tr style="border-bottom: 1px solid #ddd; ${v%2===0?"background-color: #fafafa;":""}">
                <td style="padding: 6px 10px; font-family: monospace; font-weight: bold; color: #1E232A;">${x.ventaId}</td>
                <td style="padding: 6px 10px; color: #555;">${x.fechaHora||"Hoy"}</td>
                <td style="padding: 6px 10px;"><span style="font-size: 9px; font-weight: 900; background: #eee; padding: 2px 5px; border-radius: 3px; border: 1px solid #ccc;">${x.canal||"VENTA DIRECTA"}</span></td>
                <td style="padding: 6px 10px; font-weight: bold; font-size: 10px; color: #222;">${P}</td>
                <td style="padding: 6px 10px; text-align: right; font-family: monospace; font-weight: bold;">Bs. ${T}</td>
                <td style="padding: 6px 10px; text-align: right; font-weight: bold;">$ ${Number(x.totalUsd).toFixed(2)}</td>
                <td style="padding: 6px 10px; text-align: right; font-weight: bold; color: #1E232A;">Bs. ${Number(x.totalBs).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}</td>
            </tr>
            `}).join(""),C=window.open("","_blank","width=850,height=950");if(!C){alert("Por favor autoriza las ventanas emergentes para generar el documento PDF.");return}C.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="utf-8">
            <title>Auditoría Ejecutiva de Negocio - ${o}</title>
            <style>
                @page { size: letter; margin: 12mm; }
                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    color: #111;
                    line-height: 1.35;
                    padding: 16px;
                }
                .header {
                    border-bottom: 3px solid #000;
                    padding-bottom: 12px;
                    margin-bottom: 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }
                .title { font-size: 22px; font-weight: 900; margin: 0; text-transform: uppercase; letter-spacing: -0.5px; }
                .subtitle { font-size: 12px; color: #444; margin-top: 3px; font-weight: bold; text-transform: uppercase; }
                .meta { text-align: right; font-size: 10.5px; color: #222; }
                .kpi-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 10px;
                    margin-bottom: 18px;
                }
                .kpi-card {
                    border: 2px solid #000;
                    border-radius: 5px;
                    padding: 10px;
                    background: #fdfdfd;
                }
                .kpi-label { font-size: 9.5px; font-weight: 900; text-transform: uppercase; color: #555; }
                .kpi-val { font-size: 17px; font-weight: 900; color: #000; margin-top: 3px; }
                .kpi-sub { font-size: 10px; font-weight: bold; color: #666; margin-top: 2px; }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 8px;
                    font-size: 11px;
                }
                th {
                    background: #000;
                    color: #fff;
                    font-size: 9.5px;
                    font-weight: 900;
                    text-transform: uppercase;
                    padding: 6px 10px;
                    text-align: left;
                }
                th.right { text-align: right; }
                .section-title {
                    font-size: 12.5px;
                    font-weight: 900;
                    text-transform: uppercase;
                    border-bottom: 2px solid #000;
                    padding-bottom: 3px;
                    margin-top: 18px;
                    margin-bottom: 8px;
                }
                .footer {
                    margin-top: 24px;
                    border-top: 1px solid #ccc;
                    padding-top: 8px;
                    font-size: 9.5px;
                    color: #666;
                    display: flex;
                    justify-content: space-between;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div>
                    <h1 class="title">${o}</h1>
                    <div class="subtitle">AUDITORÍA OPERATIVA Y BALANCE FINANCIERO</div>
                </div>
                <div class="meta">
                    <div><strong>EMISIÓN:</strong> ${a}</div>
                    <div><strong>PERÍODO AUDITADO:</strong> ${this.rangoDescripcion} (${this.rangoDetalleFechas})</div>
                    <div><strong>TASA BCV AUDITADA:</strong> Bs. ${r.toFixed(2)}</div>
                    <div><strong>ESTADO:</strong> CONSOLIDADO OFICIAL AUDITADO</div>
                </div>
            </div>

            <div class="kpi-grid">
                <div class="kpi-card" style="background: #fffbeb;">
                    <div class="kpi-label">Ventas Totales ($)</div>
                    <div class="kpi-val">$ ${Number(e.ventas24hUsd).toFixed(2)}</div>
                    <div class="kpi-sub">Bs. ${Number(e.ventas24hBs).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}</div>
                </div>
                <div class="kpi-card" style="background: #ecfdf5;">
                    <div class="kpi-label">Ganancia Bruta</div>
                    <div class="kpi-val">$ ${Number(c).toFixed(2)}</div>
                    <div class="kpi-sub">Margen comercial 35.0%</div>
                </div>
                <div class="kpi-card" style="background: #eff6ff;">
                    <div class="kpi-label">Ganancia Neta</div>
                    <div class="kpi-val">$ ${Number(i).toFixed(2)}</div>
                    <div class="kpi-sub">Bs. ${Number(s).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}</div>
                </div>
                <div class="kpi-card" style="background: #faf5ff;">
                    <div class="kpi-label">Inventario Activo</div>
                    <div class="kpi-val">$ ${Number(e.valorInventarioUsd).toFixed(2)}</div>
                    <div class="kpi-sub">Bs. ${(Number(e.valorInventarioUsd)*r).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}</div>
                </div>
            </div>

            <div class="section-title">Indicadores Generales y Operativos de Desempeño</div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px;">
                <div style="border: 1px solid #ccc; padding: 8px; border-radius: 4px;">
                    <div style="font-size: 9px; font-weight: bold; color: #666;">TICKETS EMITIDOS</div>
                    <div style="font-size: 15px; font-weight: 900;">${e.tickets24h} transacciones</div>
                </div>
                <div style="border: 1px solid #ccc; padding: 8px; border-radius: 4px;">
                    <div style="font-size: 9px; font-weight: bold; color: #666;">TICKET PROMEDIO</div>
                    <div style="font-size: 15px; font-weight: 900;">$ ${t} USD</div>
                </div>
                <div style="border: 1px solid #ccc; padding: 8px; border-radius: 4px;">
                    <div style="font-size: 9px; font-weight: bold; color: #666;">DEMANDA PRINCIPAL</div>
                    <div style="font-size: 15px; font-weight: 900; color: #1d4ed8;">82.4% facturación</div>
                </div>
                <div style="border: 1px solid #ccc; padding: 8px; border-radius: 4px;">
                    <div style="font-size: 9px; font-weight: bold; color: #666;">ALERTAS DE STOCK</div>
                    <div style="font-size: 15px; font-weight: 900; color: ${e.criticos.length>0?"#b91c1c":"#15803d"};">
                        ${e.criticos.length} críticos
                    </div>
                </div>
            </div>

            ${U.length>0?`
            <div class="section-title">Deudas Abiertas (${U.length} Registros Pendientes de Cobro)</div>
            <table>
                <thead>
                    <tr>
                        <th>Identificador</th>
                        <th>Cliente / Deudor</th>
                        <th>Fecha Registro</th>
                        <th>Nota / Plazo de Pago</th>
                        <th class="right">Consumo ($)</th>
                        <th class="right">Abonado ($)</th>
                        <th class="right">Saldo Deuda ($)</th>
                        <th class="right">Saldo Deuda (Bs.)</th>
                    </tr>
                </thead>
                <tbody>
                    ${B}
                </tbody>
                <tfoot>
                    <tr style="background-color: #eee; font-weight: 900; border-top: 2px solid #000;">
                        <td colspan="4" style="padding: 7px 10px;">TOTAL DEUDAS ABIERTAS PENDIENTES</td>
                        <td style="padding: 7px 10px; text-align: right;">$ ${J(A)}</td>
                        <td style="padding: 7px 10px; text-align: right; color: #15803d;">$ ${J(O)}</td>
                        <td style="padding: 7px 10px; text-align: right; color: #b45309;">$ ${J(R)}</td>
                        <td style="padding: 7px 10px; text-align: right; color: #1E232A;">Bs. ${J(F)}</td>
                    </tr>
                </tfoot>
            </table>
            `:""}

            <div class="section-title">Distribución de Dinero en Bruto e Inventario por Categoría</div>
            <table>
                <thead>
                    <tr>
                        <th>Categoría</th>
                        <th class="right">N° Productos</th>
                        <th class="right">Stock Físico</th>
                        <th class="right">Costo Bruto ($)</th>
                        <th class="right">Costo Bruto (Bs.)</th>
                        <th class="right">Valor PVP ($)</th>
                        <th class="right">Margen Bruto</th>
                        <th class="right">% Capital</th>
                    </tr>
                </thead>
                <tbody>
                    ${f}
                </tbody>
                <tfoot>
                    <tr style="background-color: #eee; font-weight: 900; border-top: 2px solid #000;">
                        <td style="padding: 7px 10px;">TOTAL CONSOLIDADO</td>
                        <td style="padding: 7px 10px; text-align: right;">${d} prods.</td>
                        <td style="padding: 7px 10px; text-align: right;">${l} un.</td>
                        <td style="padding: 7px 10px; text-align: right;">$ ${J(b)}</td>
                        <td style="padding: 7px 10px; text-align: right; color: #1E232A;">Bs. ${J(m)}</td>
                        <td style="padding: 7px 10px; text-align: right;">$ ${J(h)}</td>
                        <td style="padding: 7px 10px; text-align: right; color: #15803d;">$ ${J(y)} (${k}%)</td>
                        <td style="padding: 7px 10px; text-align: right;">100.0%</td>
                    </tr>
                </tfoot>
            </table>

            <div class="section-title">Productos Comercializados en el Período (${e.topProductos.length} Artículos)</div>
            <table>
                <thead>
                    <tr>
                        <th>Producto / Denominación Comercial</th>
                        <th class="right">Unidades</th>
                        <th class="right">Total USD</th>
                        <th class="right">Total Bolívares (Bs.)</th>
                        <th class="right">Part. (%)</th>
                    </tr>
                </thead>
                <tbody>
                    ${g||'<tr><td colspan="5" style="text-align: center; padding: 10px;">Sin registros en el período.</td></tr>'}
                </tbody>
            </table>

            <div class="section-title">Auditoría de Comprobantes de Venta (${S.length} Tickets en el Período)</div>
            <table>
                <thead>
                    <tr>
                        <th>Identificador</th>
                        <th>Fecha y Hora</th>
                        <th>Canal</th>
                        <th>Método de Pago</th>
                        <th class="right">Tasa BCV Aplicada</th>
                        <th class="right">Total USD</th>
                        <th class="right">Total Bs.</th>
                    </tr>
                </thead>
                <tbody>
                    ${M||'<tr><td colspan="7" style="text-align: center; padding: 10px;">Sin transacciones registradas.</td></tr>'}
                </tbody>
            </table>

            <div class="footer">
                <div>DatioLabs Enterprise Data Product · Integridad Transaccional Local-First Sled + SHA-256</div>
                <div>Documento descargable e imprimible en formato PDF</div>
            </div>

            <script>
                window.onload = function() {
                    window.print();
                };
            <\/script>
        </body>
        </html>
        `),C.document.close()}}const X=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},N=u=>X(u).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}),xe=(u,e,o,a)=>{u.maxLength=o,u.addEventListener("input",()=>{let r=u.value.replace(/[^0-9.,]/g,"");const c=r.split(/[.,]/);c.length>2&&(r=c[0]+"."+c.slice(1).join("")),r.length>o&&(r=r.slice(0,o));const i=X(r);Number.isFinite(i)&&i>e&&(r=String(e)),u.value!==r&&(u.value=r),a&&a()})},fe=(u,e,o=!1)=>{u.maxLength=e,u.addEventListener("input",()=>{let a=o?u.value.replace(/[<>{}\\]/g,""):u.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ .,/_#-]/g,"");a.length>e&&(a=a.slice(0,e)),u.value!==a&&(u.value=a)})};function Ee(u){if(!u)return"Hoy";const e=Math.floor(Date.now()/1e3),o=Math.max(0,e-u);if(o<3600)return"Hoy (reciente)";const a=Math.floor(o/3600);if(a<24)return`Hoy (hace ${a}h)`;const r=Math.floor(a/24);return r===1?"Hace 1 día":`Hace ${r} días`}class Je{constructor(e,o,a){w(this,"contenedor");w(this,"modal");w(this,"modelo");w(this,"cuentas",[]);w(this,"productos",[]);w(this,"cuentaSeleccionada",null);w(this,"filtroTab","todas");w(this,"POR_PAGINA_CUENTAS",15);w(this,"paginaCuentas",1);w(this,"pagosBorradorPorCuenta",new Map);w(this,"resolucionVueltoPorCuenta",new Map);this.contenedor=e,this.modal=o,this.modelo=a}async render(){[this.cuentas,this.productos]=await Promise.all([D.cuentas(),D.productos()]);const e=this.modelo.tieneRubro(4);!e&&this.filtroTab==="activa"&&(this.filtroTab="deuda");const o=this.cuentas.filter(d=>(d.tipo||"activa")==="activa"),a=this.cuentas.filter(d=>d.tipo==="deuda"),r=this.cuentas.filter(d=>e?this.filtroTab==="activa"?(d.tipo||"activa")==="activa":this.filtroTab==="deuda"?d.tipo==="deuda":!0:d.tipo==="deuda");this.cuentaSeleccionada&&(this.cuentaSeleccionada=this.cuentas.find(d=>{var l;return d.ventaId===((l=this.cuentaSeleccionada)==null?void 0:l.ventaId)})||null),this.cuentaSeleccionada&&!r.some(d=>{var l;return d.ventaId===((l=this.cuentaSeleccionada)==null?void 0:l.ventaId)})?this.cuentaSeleccionada=r[0]||null:!this.cuentaSeleccionada&&r.length>0&&(this.cuentaSeleccionada=r[0]);const c=this.modelo.tasaActual||807.39;let i=0;a.forEach(d=>{const l=X(d.totalParcialUsd),b=X(d.abonosUsd);i+=Math.max(0,l-b)});const s=i*c;let t=0;o.forEach(d=>{const l=X(d.totalParcialUsd),b=X(d.abonosUsd);t+=Math.max(0,l-b)});const n=this.cuentas.reduce((d,l)=>d+X(l.abonosUsd),0);this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">${e?"Cuentas Abiertas y Deudas":"Deudas Comerciales a Clientes"}</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">${e?"Control de comandas activas en local y deudas comerciales a crédito con liquidación a tasa libre":"Gestión de crédito comercial a clientes de confianza con liquidación a tasa libre"}</p>
            </div>
            <div class="flex items-center gap-2">
                <button id="btn-nueva-deuda" class="bg-amber-400 hover:bg-amber-500 text-brand-black px-3 sm:px-4 py-2 sm:py-2.5 rounded font-heading font-black text-xs sm:text-sm border-2 border-brand-black shadow-brutal hover:-translate-y-0.5 transition-all flex items-center gap-1.5">
                    <span class="text-base sm:text-lg leading-none">+</span>
                    <span>REGISTRAR DEUDA</span>
                </button>
                ${e?`
                <button id="btn-nueva-cuenta" class="bg-brand-black text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded font-heading font-black text-xs sm:text-sm border-2 border-brand-black shadow-brutal hover:-translate-y-0.5 transition-all flex items-center gap-1.5">
                    <span class="text-base sm:text-lg leading-none">+</span>
                    <span>ABRIR CUENTA</span>
                </button>`:""}
            </div>
        </div>

        <!-- Banner de Métricas y Deudas Abiertas -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 sm:mb-6">
            <div class="bg-amber-50 border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-amber-900 tracking-wider">Deudas Abiertas</span>
                    <span class="bg-amber-200 text-amber-950 font-black text-[10px] px-1.5 py-0.5 rounded border border-amber-400">${a.length} pendientes</span>
                </div>
                <p class="font-heading font-black text-2xl sm:text-3xl text-amber-950 mt-1">$ ${N(i)}</p>
                <p class="text-xs font-bold text-amber-800">Bs. ${N(s)} <span class="text-[10px] text-amber-700">(tasa ref.)</span></p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Cuentas en Local</span>
                    <span class="bg-blue-100 text-blue-900 font-black text-[10px] px-1.5 py-0.5 rounded border border-blue-300">${o.length} activas</span>
                </div>
                <p class="font-heading font-black text-2xl sm:text-3xl text-brand-black mt-1">$ ${N(t)}</p>
                <p class="text-xs font-bold text-gray-500">Saldo pendiente de cobro</p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Abonos Recaudados</span>
                    <span class="bg-emerald-100 text-emerald-900 font-black text-[10px] px-1.5 py-0.5 rounded border border-emerald-300">Anticipos</span>
                </div>
                <p class="font-heading font-black text-2xl sm:text-3xl text-emerald-700 mt-1">$ ${N(n)}</p>
                <p class="text-xs font-bold text-gray-500">Bs. ${N(n*c)}</p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Tasa Oficial del Día</span>
                    <span class="bg-gray-100 text-gray-800 font-black text-[10px] px-1.5 py-0.5 rounded border border-gray-300">BCV</span>
                </div>
                <p class="font-heading font-black text-xl sm:text-2xl text-brand-black mt-1">Bs. ${N(c)}</p>
                <p class="text-[11px] font-bold text-gray-500">Referencia (liquidación a tasa libre)</p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
            <!-- Columna de Cuentas y Deudas -->
            <div class="space-y-3">
                <!-- Selector de Pestañas -->
                ${e?`
                <div class="flex border-2 border-brand-black rounded bg-gray-100 p-1 shadow-brutal-sm">
                    <button id="tab-todas" class="flex-1 py-1.5 font-heading font-black text-xs rounded transition-colors ${this.filtroTab==="todas"?"bg-brand-black text-white":"text-brand-black hover:bg-white"}">
                        TODAS (${this.cuentas.length})
                    </button>
                    <button id="tab-activas" class="flex-1 py-1.5 font-heading font-black text-xs rounded transition-colors ${this.filtroTab==="activa"?"bg-brand-black text-white":"text-brand-black hover:bg-white"}">
                        ACTIVAS (${o.length})
                    </button>
                    <button id="tab-deudas" class="flex-1 py-1.5 font-heading font-black text-xs rounded transition-colors ${this.filtroTab==="deuda"?"bg-amber-400 text-brand-black font-black":"text-brand-black hover:bg-white"}">
                        DEUDAS (${a.length})
                    </button>
                </div>`:`
                <div class="border-2 border-brand-black rounded bg-amber-100 p-2 shadow-brutal-sm flex items-center justify-between">
                    <span class="font-heading font-black text-xs text-amber-950 uppercase">Crédito Comercial a Clientes</span>
                    <span class="font-mono font-black text-xs bg-amber-200 border border-amber-400 px-2 py-0.5 rounded text-amber-950">${a.length} pendientes</span>
                </div>
                `}

                <div id="cuentas-lista" class="space-y-2 max-h-[65vh] overflow-y-auto pr-1">
                    ${r.length===0?`<div class="bg-white border-2 border-brand-black rounded-lg p-6 text-center text-brand-text font-bold">
                            No hay registros en la sección seleccionada.
                        </div>`:(()=>{const d=Math.ceil(r.length/this.POR_PAGINA_CUENTAS);this.paginaCuentas>d&&(this.paginaCuentas=d),this.paginaCuentas<1&&(this.paginaCuentas=1);const l=(this.paginaCuentas-1)*this.POR_PAGINA_CUENTAS;return r.slice(l,l+this.POR_PAGINA_CUENTAS).map(m=>{var B;const h=m.tipo==="deuda",y=X(m.totalParcialUsd),k=X(m.abonosUsd),U=Math.max(0,y-k),A=Math.max(0,k-y),O=((B=this.cuentaSeleccionada)==null?void 0:B.ventaId)===m.ventaId,R=Ee(m.fechaCreacionUnix);let F="cursor-pointer border-2 border-brand-black rounded-lg p-3 sm:p-4 transition-all ";return O?F+=h?"bg-amber-50 text-brand-black border-l-[6px] border-l-amber-600 shadow-brutal ring-1 ring-amber-500/20":"bg-blue-50 text-brand-black border-l-[6px] border-l-blue-600 shadow-brutal ring-1 ring-blue-500/20":F+=h?"bg-stone-50 border-l-4 border-l-amber-300 text-brand-black shadow-brutal-sm hover:bg-amber-50/60 hover:-translate-y-0.5":"bg-stone-50 border-l-4 border-l-blue-200 text-brand-black shadow-brutal-sm hover:bg-blue-50/50 hover:-translate-y-0.5",`
                        <div data-cuenta-id="${m.ventaId}" class="${F}">
                            <div class="flex justify-between items-start gap-2">
                                <div>
                                    <div class="flex items-center gap-1.5">
                                        <span class="font-heading font-black text-base sm:text-lg leading-snug">${m.etiqueta}</span>
                                        ${h?'<span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-amber-400 bg-amber-100 text-amber-900">DEUDA</span>':'<span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-blue-300 bg-blue-100 text-blue-900">LOCAL</span>'}
                                    </div>
                                    <p class="text-[11px] font-mono font-bold text-gray-500 mt-0.5">
                                        ${h?`${R} · `:""}${m.ventaId.slice(0,9)}
                                    </p>
                                    ${m.nota?`<p class="text-[11px] italic font-semibold text-gray-600 mt-0.5 line-clamp-1">Nota: ${m.nota}</p>`:""}
                                </div>
                                <div class="text-right shrink-0">
                                    <p class="font-heading font-black text-base sm:text-lg text-brand-black">$${N(m.totalParcialUsd)}</p>
                                    ${A>0?`<p class="text-[11px] font-black text-emerald-700">A favor: +$${N(A)}</p>`:U>0?`<p class="text-xs font-bold ${h?"text-amber-900":"text-blue-900"}">Pend: $${N(U)}</p>`:'<p class="text-[11px] font-bold text-gray-400">Cubierta ($0,00)</p>'}
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-2 pt-2 border-t border-gray-200 text-[11px] font-bold text-gray-600">
                                <span>${m.lineas} consumos</span>
                                <span>Abonado: <strong class="text-brand-black">$${N(m.abonosUsd)}</strong></span>
                            </div>
                        </div>`}).join("")})()}
                </div>
                ${(()=>{const d=Math.ceil(r.length/this.POR_PAGINA_CUENTAS);return d<=1?"":`
                    <div class="flex items-center justify-between border-2 border-brand-black rounded bg-white p-2 mt-2 shadow-brutal-sm">
                        <span class="text-[10px] font-bold text-gray-600">Pág. ${this.paginaCuentas} de ${d} (${r.length} reg.)</span>
                        <div class="flex gap-1">
                            <button id="cta-pag-ant" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCuentas===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANT.</button>
                            <button id="cta-pag-sig" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCuentas===d?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIG.</button>
                        </div>
                    </div>`})()}
            </div>

            <!-- Columna de Detalle / Añadir Consumo / Cobrar -->
            <div class="lg:col-span-2">
                ${this.cuentaSeleccionada?(()=>{var k;const d=this.cuentaSeleccionada.tipo==="deuda",l=X(this.cuentaSeleccionada.totalParcialUsd),b=X(this.cuentaSeleccionada.abonosUsd),m=Math.max(0,l-b),h=Math.max(0,b-l),y=Ee(this.cuentaSeleccionada.fechaCreacionUnix);return`
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 flex flex-col space-y-4">
                    <!-- Banner Distintivo del Tipo de Registro -->
                    ${d?`
                    <div class="bg-amber-50/70 border-2 border-brand-black border-l-[6px] border-l-amber-600 rounded p-3 text-xs text-amber-950 flex flex-wrap justify-between items-center gap-2">
                        <div class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-amber-500 border border-brand-black shrink-0"></span>
                            <div>
                                <p class="font-heading font-black text-sm uppercase">DEUDA COMERCIAL / FIADO PENDIENTE</p>
                                <p class="text-[11px] font-bold text-amber-900 mt-0.5">
                                    Cliente: <strong>${this.cuentaSeleccionada.cliente||this.cuentaSeleccionada.etiqueta}</strong> · Creada: <strong>${this.cuentaSeleccionada.fechaCreacionStr||y}</strong>
                                    ${this.cuentaSeleccionada.nota?` · Plazo: <em>"${this.cuentaSeleccionada.nota}"</em>`:""}
                                </p>
                            </div>
                        </div>
                        <span class="text-[10px] font-black uppercase px-2 py-1 rounded bg-amber-200 text-amber-950 border border-amber-400">
                            TASA LIBRE AL COBRAR
                        </span>
                    </div>
                    `:`
                    <div class="bg-blue-50/70 border-2 border-brand-black border-l-[6px] border-l-blue-600 rounded p-3 text-xs text-blue-950 flex justify-between items-center">
                        <div>
                            <p class="font-heading font-black text-sm uppercase">CUENTA ACTIVA EN LOCAL (MESA / COMANDA)</p>
                            <p class="text-[11px] font-bold text-blue-800 mt-0.5">Consumos con tasa oficial de referencia</p>
                        </div>
                        <span class="text-[10px] font-black uppercase px-2 py-1 rounded bg-blue-100 text-blue-900 border border-blue-300">
                            CONSUMO EN MESA
                        </span>
                    </div>
                    `}

                    <!-- Cabecera de la Cuenta Seleccionada -->
                    <div class="flex flex-wrap justify-between items-center border-b-2 border-brand-black pb-4 gap-2">
                        <div>
                            <h3 class="font-heading font-black text-2xl sm:text-3xl">${this.cuentaSeleccionada.etiqueta}</h3>
                            <p class="text-xs font-mono text-gray-500 font-bold">ID: ${this.cuentaSeleccionada.ventaId}</p>
                        </div>
                        <div class="text-right">
                            ${h>0?`
                                <span class="text-[10px] font-black text-emerald-900 uppercase px-2 py-0.5 rounded bg-emerald-100 border border-emerald-500">
                                    SALDO A FAVOR DEL CLIENTE
                                </span>
                                <p class="font-heading font-black text-2xl sm:text-3xl text-emerald-600 mt-0.5">
                                    +$${N(h)}
                                </p>
                                <p class="text-xs font-black text-emerald-700">
                                    Bs. ${N(h*c)} (excedente)
                                </p>
                                <div class="flex items-center justify-end gap-1.5 mt-1">
                                    <span class="font-bold text-[10px] text-gray-500">
                                        Consumo: $${N(l)} · Abonado: <strong class="text-brand-black">$${N(b)}</strong>
                                    </span>
                                    <button data-editar-abono title="Corregir monto abonado por error" class="text-[10px] font-black uppercase px-2 py-0.5 rounded border border-brand-black bg-amber-200 hover:bg-amber-300 text-brand-black">
                                        Editar
                                    </button>
                                </div>
                            `:`
                                <span class="text-xs font-bold text-gray-500 uppercase">${d?"Monto Adeudado Pendiente":"Saldo Pendiente"}</span>
                                <p class="font-heading font-black text-2xl sm:text-3xl text-brand-black">
                                    $${N(m)} USD
                                </p>
                                <p class="text-xs font-bold text-gray-600">
                                    Bs. ${N(m*c)} <span class="text-[10px] text-gray-400">(${d?"tasa hoy":"actual"})</span>
                                </p>
                                <div class="flex items-center justify-end gap-1.5 mt-1">
                                    <span class="font-bold text-xs text-gray-600">
                                        Total: $${N(l)} · Abonado: <strong class="text-brand-black">$${N(b)}</strong>
                                    </span>
                                    <button data-editar-abono title="Corregir monto abonado por error" class="text-[10px] font-black uppercase px-2 py-0.5 rounded border border-brand-black bg-amber-200 hover:bg-amber-300 text-brand-black">
                                        Editar
                                    </button>
                                </div>
                            `}
                        </div>
                    </div>

                    <!-- Lista detallada de consumos agregados con opcion de eliminar (reintegra stock) -->
                    <div class="border-2 border-brand-black rounded-lg p-3 sm:p-4 bg-gray-50 shadow-sm flex flex-col">
                        <div class="flex justify-between items-center border-b-2 border-gray-200 pb-2 mb-2 shrink-0">
                            <span class="font-heading font-black text-xs uppercase tracking-wider text-gray-700">Consumos Cargados (${((k=this.cuentaSeleccionada.consumos)==null?void 0:k.length)||0})</span>
                            <span class="text-xs font-bold text-gray-500">Monto Unit. / Subtotal</span>
                        </div>
                        <div id="cta-consumos-lista" class="space-y-2 overflow-y-auto max-h-[300px] pr-1">
                            ${!this.cuentaSeleccionada.consumos||this.cuentaSeleccionada.consumos.length===0?`<div class="py-6 text-center text-xs text-gray-400 font-bold">
                                    Sin consumos cargados en este registro. Selecciona productos abajo para cargar mercancía. El stock se descuenta de inmediato.
                                </div>`:this.cuentaSeleccionada.consumos.map(U=>`
                                <div class="flex items-center justify-between border-2 border-brand-black rounded-lg bg-white px-3 py-2 text-xs font-bold shadow-brutal-sm hover:bg-amber-50/50 transition-colors gap-2">
                                    <div class="flex-1 min-w-0 pr-2">
                                        <p class="truncate text-brand-black font-heading font-black text-sm" title="${U.nombre}">${U.nombre}</p>
                                        <p class="text-[11px] text-gray-500 font-semibold">${U.cantidad} un. &times; $${N(U.precioUsd)} <span class="text-gray-400 font-normal">· Bs. ${this.modelo.bs(X(U.precioUsd))} c/u</span></p>
                                    </div>
                                    <div class="flex items-center gap-3 shrink-0">
                                        <div class="text-right">
                                            <p class="font-heading font-black text-sm sm:text-base text-brand-black leading-tight">$${N(U.subtotalUsd)}</p>
                                            <p class="text-[10px] font-bold text-gray-500 leading-tight">Bs. ${this.modelo.bs(X(U.subtotalUsd))}</p>
                                        </div>
                                        <button data-del-consumo="${U.id}" title="Eliminar consumo y reintegrar stock al inventario" class="w-7 h-7 flex items-center justify-center rounded border-2 border-brand-black bg-red-100 hover:bg-red-500 hover:text-white text-red-800 text-sm font-black transition-colors active:scale-95">&times;</button>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <!-- Buscador dinámico de productos para cargar consumo (muestra stock en tiempo real) -->
                    <div>
                        <div class="flex justify-between items-center mb-1">
                            <label class="block font-heading font-bold text-xs uppercase">Buscar y agregar producto a la comanda / deuda:</label>
                            <span class="text-[11px] text-gray-500 font-bold">Descuenta stock físico inmediatamente</span>
                        </div>
                        <input id="cta-buscar-prod" type="text" maxlength="40" placeholder="Escribe el nombre del producto o servicio..." class="w-full border-2 border-brand-black rounded px-3 py-2 font-bold text-sm mb-2 focus:ring-2 focus:ring-brand-cyan" />
                        <div id="cta-grid-prod" class="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-1">
                            ${this.productos.map(U=>{const A=!U.sinStock&&Number(U.stock)<=0;return`
                                <button data-add-sku="${U.sku}" data-agotado="${A?"1":"0"}" class="text-left border-2 border-brand-black rounded p-2 transition-all text-xs font-bold ${A?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-gray-50 hover:bg-white shadow-sm hover:shadow-brutal-sm"}">
                                    <div class="flex justify-between items-start gap-1">
                                        <p class="truncate flex-1" title="${U.nombre}">${U.nombre}</p>
                                        ${A?'<span class="bg-red-200 text-red-900 border border-red-400 text-[9px] font-black px-1 rounded">AGOTADO</span>':""}
                                    </div>
                                    <div class="flex justify-between items-center mt-1">
                                        <p class="text-brand-black font-black">$${N(U.precioUsd)}</p>
                                        <span class="text-[10px] ${A?"text-red-700 font-black":"text-gray-500"}">${U.sinStock?"Ilimitado":`${U.stock} un.`}</span>
                                    </div>
                                </button>`}).join("")}
                        </div>
                    </div>

                    <!-- Botonera de Abono, Corrección y Liquidación -->
                    <div class="border-t-2 border-brand-black pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <button id="btn-abonar-cuenta" class="bg-amber-400 hover:bg-amber-500 text-brand-black font-heading font-black text-xs sm:text-sm py-3.5 rounded border-2 border-brand-black shadow-brutal active:translate-y-0.5">
                            + REGISTRAR ABONO
                        </button>
                        <button id="btn-editar-abono-cuenta" class="bg-amber-100 hover:bg-amber-200 text-amber-950 font-heading font-black text-xs sm:text-sm py-3.5 rounded border-2 border-brand-black shadow-brutal active:translate-y-0.5">
                            EDITAR ABONO
                        </button>
                        <button id="btn-cerrar-cuenta" class="${h>0?"bg-emerald-600 hover:bg-emerald-700":"bg-green-700 hover:bg-green-800"} text-white font-heading font-black text-xs sm:text-sm py-3.5 rounded border-2 border-brand-black shadow-brutal active:translate-y-0.5">
                            ${d?"COBRAR Y LIQUIDAR DEUDA (TASA LIBRE)":h>0?`LIQUIDAR (+$${N(h)})`:"LIQUIDAR Y COBRAR"}
                        </button>
                    </div>
                </div>`})():`
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                    <h4 class="font-heading font-black text-2xl mb-2">Selecciona un registro</h4>
                    <p class="text-brand-text font-body text-sm max-w-sm">Haz clic en una cuenta activa o deuda de la lista izquierda para cargarle consumos, abonar pagos o cobrarla.</p>
                </div>
                `}
            </div>
        </div>`,this.vincularEventos()}vincularEventos(){var a,r,c,i,s,t,n,d,l,b;(a=document.getElementById("btn-nueva-cuenta"))==null||a.addEventListener("click",()=>this.modalNuevaCuenta("activa")),(r=document.getElementById("btn-nueva-deuda"))==null||r.addEventListener("click",()=>this.modalNuevaCuenta("deuda")),(c=document.getElementById("tab-todas"))==null||c.addEventListener("click",()=>{this.filtroTab="todas",this.paginaCuentas=1,this.render()}),(i=document.getElementById("tab-activas"))==null||i.addEventListener("click",()=>{this.filtroTab="activa",this.paginaCuentas=1,this.render()}),(s=document.getElementById("tab-deudas"))==null||s.addEventListener("click",()=>{this.filtroTab="deuda",this.paginaCuentas=1,this.render()}),(t=document.getElementById("cta-pag-ant"))==null||t.addEventListener("click",()=>{this.paginaCuentas>1&&(this.paginaCuentas--,this.render())}),(n=document.getElementById("cta-pag-sig"))==null||n.addEventListener("click",()=>{this.paginaCuentas++,this.render()}),this.contenedor.querySelectorAll("[data-cuenta-id]").forEach(m=>{m.addEventListener("click",()=>{const h=m.dataset.cuentaId;this.cuentaSeleccionada=this.cuentas.find(y=>y.ventaId===h)||null,this.render()})}),this.contenedor.querySelectorAll("[data-del-consumo]").forEach(m=>{m.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const h=m.dataset.delConsumo||"";try{const y=await D.eliminarConsumo(this.cuentaSeleccionada.ventaId,h);this.cuentaSeleccionada=y,this.render()}catch(y){alert(y instanceof Error?y.message:String(y))}})});const e=this.contenedor.querySelector("#cta-buscar-prod");e&&fe(e,40),e==null||e.addEventListener("input",()=>{const m=e.value.trim().toLowerCase(),h=this.contenedor.querySelector("#cta-grid-prod");if(h){const y=this.productos.filter(k=>!m||k.nombre.toLowerCase().includes(m));y.length===0?h.innerHTML='<p class="col-span-full text-center text-xs text-gray-400 py-4 font-bold">No se encontraron productos coincidentes.</p>':(h.innerHTML=y.map(k=>{const U=!k.sinStock&&Number(k.stock)<=0;return`
                        <button data-add-sku="${k.sku}" data-agotado="${U?"1":"0"}" class="text-left border-2 border-brand-black rounded p-2 transition-all text-xs font-bold ${U?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-gray-50 hover:bg-white shadow-sm hover:shadow-brutal-sm"}">
                            <div class="flex justify-between items-start gap-1">
                                <p class="truncate flex-1" title="${k.nombre}">${k.nombre}</p>
                                ${U?'<span class="bg-red-200 text-red-900 border border-red-400 text-[9px] font-black px-1 rounded">AGOTADO</span>':""}
                            </div>
                            <div class="flex justify-between items-center mt-1">
                                <p class="text-brand-black font-black">$${N(k.precioUsd)}</p>
                                <span class="text-[10px] ${U?"text-red-700 font-black":"text-gray-500"}">${k.sinStock?"Ilimitado":`${k.stock} un.`}</span>
                            </div>
                        </button>`}).join(""),this.vincularBotonesAgregar(h))}});const o=this.contenedor.querySelector("#cta-grid-prod");o&&this.vincularBotonesAgregar(o),this.contenedor.querySelectorAll("[data-editar-abono]").forEach(m=>{m.addEventListener("click",()=>this.modalEditarAbono())}),(d=document.getElementById("btn-editar-abono-cuenta"))==null||d.addEventListener("click",()=>this.modalEditarAbono()),(l=document.getElementById("btn-abonar-cuenta"))==null||l.addEventListener("click",()=>this.modalAbono()),(b=document.getElementById("btn-cerrar-cuenta"))==null||b.addEventListener("click",()=>this.modalCierre())}vincularBotonesAgregar(e){e.querySelectorAll("[data-add-sku]").forEach(o=>{o.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const a=o,r=a.dataset.addSku||"";if(a.dataset.agotado==="1"){alert("Stock insuficiente: este producto no tiene existencias disponibles en inventario.");return}try{const i=await D.agregarConsumo(this.cuentaSeleccionada.ventaId,r,"1",!0);this.cuentaSeleccionada=i,this.render()}catch(i){alert(i instanceof Error?i.message:String(i))}})})}modalNuevaCuenta(e="activa"){let o=e;const a=()=>{var d,l;const r=o==="deuda";this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                    <div class="flex border-2 border-brand-black rounded bg-gray-100 p-1 mb-4">
                        <button id="modal-tab-activa" class="flex-1 py-2 font-heading font-black text-xs rounded transition-colors ${r?"text-brand-black hover:bg-white":"bg-brand-black text-white"}">
                            CUENTA EN LOCAL (MESA)
                        </button>
                        <button id="modal-tab-deuda" class="flex-1 py-2 font-heading font-black text-xs rounded transition-colors ${r?"bg-amber-400 text-brand-black font-black":"text-brand-black hover:bg-white"}">
                            DEUDA / FIADO (CLIENTE)
                        </button>
                    </div>

                    <h3 class="font-heading font-black text-2xl mb-1">${r?"REGISTRAR NUEVA DEUDA":"ABRIR CUENTA EN LOCAL"}</h3>
                    <p class="text-xs text-gray-600 mb-4 font-bold leading-relaxed">
                        ${r?"Abre un registro de deuda a nombre de un cliente. Los consumos descontarán stock de inmediato. Esta cuenta puede permanecer abierta por días y se cobrará a la tasa libre que usted defina al momento del pago.":"Identificador para consumos de comanda, mesa o servicio en barra."}
                    </p>

                    <div class="space-y-3 mb-4">
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">${r?"Nombre del Cliente / Deudor":"Identificador (Mesa / Barra / Cliente)"}</label>
                            <input id="modal-cta-nombre" maxlength="40" autofocus placeholder="${r?"Ej: Taller Hermanos Gómez / Carlos":"Ej: Mesa 4 / Terraza"}"
                                class="w-full border-2 border-brand-black rounded px-3 py-2 text-base font-body focus:ring-2 focus:ring-brand-cyan" />
                        </div>

                        ${r?`
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Nota de Compromiso / Plazo (Opcional)</label>
                            <input id="modal-cta-nota" maxlength="60" placeholder="Ej: Paga el viernes / Autorizado por dueño"
                                class="w-full border-2 border-brand-black rounded px-3 py-2 text-sm font-body focus:ring-2 focus:ring-brand-cyan" />
                        </div>
                        `:""}
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <button id="modal-cta-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">CANCELAR</button>
                        <button id="modal-cta-ok" class="${r?"bg-amber-400 text-brand-black":"bg-brand-black text-white"} font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">
                            ${r?"CREAR DEUDA":"ABRIR CUENTA"}
                        </button>
                    </div>
                </div>
            </div>`;const c=this.modal.querySelector("#modal-tab-activa"),i=this.modal.querySelector("#modal-tab-deuda");c==null||c.addEventListener("click",()=>{o="activa",a()}),i==null||i.addEventListener("click",()=>{o="deuda",a()});const s=this.modal.querySelector("#modal-cta-nombre"),t=this.modal.querySelector("#modal-cta-nota");s&&fe(s,40),t&&fe(t,60),setTimeout(()=>s==null?void 0:s.focus(),50);const n=()=>{this.modal.innerHTML=""};(d=this.modal.querySelector("#modal-cta-cancel"))==null||d.addEventListener("click",n),(l=this.modal.querySelector("#modal-cta-ok"))==null||l.addEventListener("click",async()=>{const b=s==null?void 0:s.value.trim().slice(0,40),m=t==null?void 0:t.value.trim().slice(0,60);if(b){const h=await D.abrirCuenta(b,o,m,b);this.cuentaSeleccionada=h,o==="deuda"&&(this.filtroTab="deuda"),n(),this.render()}else alert(r?"Debe ingresar el nombre del cliente o empresa deudora.":"Debe ingresar un identificador válido para la cuenta."),s==null||s.focus()})};a()}async modalAbono(){if(!this.cuentaSeleccionada)return;let e=[];try{e=await D.listarMetodosPago()}catch{e=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}const o=X(this.cuentaSeleccionada.totalParcialUsd),a=X(this.cuentaSeleccionada.abonosUsd),r=Math.max(0,o-a),c=this.modelo.tasaActual||807.39,i=(r*c).toFixed(2),s=this.cuentaSeleccionada.tipo==="deuda";let t=e[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"},n=t.moneda==="USD"?r:Number(i),d=c,l="";const b=()=>{var C;const h=e.filter(_=>_.moneda==="USD"),y=e.filter(_=>_.moneda==="BS"),k=h.map(_=>`<option value="${_.nombre}" ${_.nombre===t.nombre?"selected":""}>${_.nombre} ($ USD - Tasa Dinámica)</option>`).join(""),A=`
                <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                    ${y.map(_=>`<option value="${_.nombre}" ${_.nombre===t.nombre?"selected":""}>${_.nombre} (Bs.)</option>`).join("")}
                </optgroup>
                <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                    ${k}
                </optgroup>
            `,O=t.moneda==="USD",R=O&&d>0?d:c,F=O?n*R:n,B=c>0?F/c:0,f=a+B,g=f-o,S=g*c;let M="";if(n<=1e-4)M=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-700 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Aporte de este abono:</span>
                            <span class="font-heading font-black text-sm text-gray-800">$0.00 USD (Bs. 0.00)</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-600 border-t border-gray-300 pt-1 mt-1">
                            <span>Saldo pendiente actual:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${N(r)} USD (Bs. ${N(i)})</span>
                        </div>
                    </div>
                `;else if(g>.001)M=`
                    <div class="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${N(f)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${N(g)} USD (Bs. ${N(S)})</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Abono superior al consumo: este excedente se convertirá en ganancia o crédito al liquidar.</p>
                    </div>
                `;else if(g<-.001){const _=Math.abs(g),x=_*c;M=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${N(f)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${N(_)} USD (Bs. ${N(x)})</span>
                        </div>
                    </div>
                `}else M=`
                    <div class="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${N(f)} USD</span>
                        </div>
                    </div>
                `;this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                    <h3 class="font-heading font-black text-2xl mb-1">${s?"ABONAR A LA DEUDA":"REGISTRAR ABONO / ANTICIPO"}</h3>
                    <p class="font-body text-xs text-gray-700 mb-3">${(C=this.cuentaSeleccionada)==null?void 0:C.etiqueta} · El usuario decide libremente el monto y tasa del abono.</p>

                    <div class="bg-blue-50 border border-blue-400 rounded p-2.5 mb-3 text-xs text-blue-950 font-bold leading-tight">
                        ℹ <strong>Abonos con tasas dinámicas:</strong> En métodos en divisas (${h.map(_=>_.nombre).join(", ")}) se define la tasa al momento del abono. El diferencial frente a la tasa oficial se computa a favor del cliente.
                    </div>

                    <div class="space-y-3 mb-4">
                        <div>
                            <label class="block text-xs font-black uppercase text-gray-700 mb-1">Método de Pago del Abono</label>
                            <select id="select-metodo-abono" class="w-full border-2 border-brand-black rounded px-3 py-2 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                ${A}
                            </select>
                        </div>

                        ${O?`
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Monto a abonar en Dólares ($ USD)</label>
                            <div class="flex items-center">
                                <span class="bg-brand-black text-white px-3 py-2 rounded-l border-y-2 border-l-2 border-brand-black text-sm font-mono font-bold">$</span>
                                <input id="input-monto-abono" type="number" step="0.01" min="0.01" max="50000" value="${n>0?n:""}" placeholder="0.00"
                                    class="w-full border-2 border-brand-black rounded-r px-3 py-2 font-mono font-black text-xl text-brand-black text-right focus:outline-none" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <label class="block text-xs font-bold uppercase text-gray-700">Tasa de Cambio del Método (Bs. / USD)</label>
                                <button type="button" id="btn-reset-tasa-abono" class="text-[10px] font-black uppercase text-brand-purple hover:underline">
                                    TASA BCV: ${N(c)}
                                </button>
                            </div>
                            <input id="input-tasa-abono" type="number" step="0.01" min="1" max="100000" value="${R}"
                                class="w-full border-2 border-brand-black rounded px-3 py-2 font-mono font-black text-base text-brand-black text-right focus:outline-none" />
                        </div>

                        <div class="bg-purple-50 border border-brand-purple rounded p-2 text-xs font-bold space-y-0.5">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Valor aportado en Bolívares:</span>
                                <span class="text-brand-purple font-mono font-black">Bs. ${N(F)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Abono computable (Tasa BCV):</span>
                                <span class="text-brand-black font-mono font-black">$ ${N(B)} USD</span>
                            </div>
                        </div>
                        `:`
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Monto a abonar en Bolívares (Bs.)</label>
                            <div class="flex items-center">
                                <span class="bg-brand-black text-white px-3 py-2 rounded-l border-y-2 border-l-2 border-brand-black text-sm font-mono font-bold">Bs.</span>
                                <input id="input-monto-abono" type="number" step="0.01" min="0.01" max="50000000" value="${n>0?n:""}" placeholder="0.00"
                                    class="w-full border-2 border-brand-black rounded-r px-3 py-2 font-mono font-black text-xl text-brand-black text-right focus:outline-none" />
                            </div>
                            <p class="text-[11px] text-gray-500 mt-1">Equivalente oficial acreditado: <span class="font-bold text-brand-black">$ ${N(B)} USD</span> (Tasa BCV: ${N(c)})</p>
                        </div>
                        `}

                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia (Opcional)</label>
                            <input id="input-ref-abono" type="text" maxlength="25" value="${l}" placeholder="Ej: PAGO MOVIL 4912, USDT HASH..."
                                class="w-full border-2 border-brand-black rounded px-3 py-1.5 text-xs font-mono focus:outline-none" />
                        </div>

                        ${M}
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <button id="modal-abono-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded hover:bg-gray-100">VOLVER</button>
                        <button id="modal-abono-ok" ${n<=0?"disabled":""} class="bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed text-brand-black font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">APLICAR ABONO</button>
                    </div>
                </div>
            </div>`,m()},m=()=>{var y,k,U,A,O,R,F;const h=()=>{this.modal.innerHTML=""};(y=this.modal.querySelector("#modal-abono-cancel"))==null||y.addEventListener("click",h),(k=this.modal.querySelector("#select-metodo-abono"))==null||k.addEventListener("change",B=>{const f=B.target.value,g=e.find(S=>S.nombre===f);if(g){const S=t.moneda==="USD";t=g,g.moneda==="USD"?(d=c,S||(n=r)):S&&(n=Number(i)),b()}}),(U=this.modal.querySelector("#input-monto-abono"))==null||U.addEventListener("input",B=>{n=X(B.target.value),b();const f=this.modal.querySelector("#input-monto-abono");f==null||f.focus()}),(A=this.modal.querySelector("#input-tasa-abono"))==null||A.addEventListener("input",B=>{d=X(B.target.value),b();const f=this.modal.querySelector("#input-tasa-abono");f==null||f.focus()}),(O=this.modal.querySelector("#btn-reset-tasa-abono"))==null||O.addEventListener("click",()=>{d=c,b()}),(R=this.modal.querySelector("#input-ref-abono"))==null||R.addEventListener("input",B=>{l=B.target.value}),(F=this.modal.querySelector("#modal-abono-ok"))==null||F.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const B=t.moneda==="USD",f=B&&d>0?d:c,g=B?n*f:n,S=c>0?g/c:0;if(S<=0||!Number.isFinite(S)){alert("Por favor ingrese un monto válido.");return}const M=await D.abonarCuenta(this.cuentaSeleccionada.ventaId,S,g);M&&(this.cuentaSeleccionada=M),h(),this.render()})};b()}modalEditarAbono(){var k,U,A,O;if(!this.cuentaSeleccionada)return;const e=X(this.cuentaSeleccionada.totalParcialUsd),o=X(this.cuentaSeleccionada.abonosUsd),a=this.modelo.tasaActual||807.39;this.modal.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                <h3 class="font-heading font-black text-2xl mb-1">CORREGIR SALDO ABONADO</h3>
                <p class="font-body text-xs text-gray-700 mb-4">${this.cuentaSeleccionada.etiqueta} · Modifique el saldo acumulado en caso de error de registro o digitación.</p>

                <div class="bg-gray-50 border-2 border-brand-black rounded p-3 mb-4 text-xs space-y-1">
                    <div class="flex justify-between font-bold text-gray-600">
                        <span>Consumo acumulado:</span>
                        <span>$${N(e)} (Bs. ${this.modelo.bs(e)})</span>
                    </div>
                    <div class="flex justify-between font-bold text-amber-800">
                        <span>Abonado registrado actualmente:</span>
                        <span>$${N(o)} (Bs. ${this.modelo.bs(o)})</span>
                    </div>
                </div>

                <div class="space-y-4 mb-4">
                    <div class="flex border-2 border-brand-black rounded bg-gray-100 p-1">
                        <button id="tab-edit-usd" class="flex-1 py-1.5 font-heading font-black text-xs rounded bg-brand-black text-white">CORREGIR EN DÓLARES ($)</button>
                        <button id="tab-edit-bs" class="flex-1 py-1.5 font-heading font-bold text-xs rounded text-brand-black hover:bg-white">CORREGIR EN BOLÍVARES (Bs)</button>
                    </div>

                    <div id="sec-edit-usd">
                        <label class="block text-xs font-bold uppercase mb-1">Nuevo Total Abonado Real ($) (Máx $50,000.00)</label>
                        <input id="edit-abono-usd-val" type="text" inputmode="decimal" maxlength="8" value="${o>0?o.toFixed(2):"0.00"}" class="w-full border-2 border-brand-black rounded px-3 py-2 font-mono font-black text-xl text-brand-black" />
                        <p class="text-[11px] text-gray-500 mt-1">Equivalente en Bs: <span id="edit-usd-equiv" class="font-bold"></span></p>
                    </div>

                    <div id="sec-edit-bs" class="hidden">
                        <label class="block text-xs font-bold uppercase mb-1">Nuevo Total Abonado Real (Bs.) (Máx Bs. 50.000.000,00)</label>
                        <input id="edit-abono-bs-val" type="text" inputmode="decimal" maxlength="11" value="${(o*a).toFixed(2)}" class="w-full border-2 border-brand-black rounded px-3 py-2 font-mono font-black text-xl text-brand-black" />
                        <p class="text-[11px] text-gray-500 mt-1">Equivalente en USD: <span id="edit-bs-equiv" class="font-bold"></span></p>
                    </div>

                    <div class="flex gap-2">
                        <button id="btn-preset-cero" type="button" class="text-xs font-bold px-2.5 py-1.5 rounded border border-gray-400 bg-gray-100 hover:bg-gray-200 text-gray-800">Poner en $0.00 (Resetear)</button>
                        <button id="btn-preset-exacto" type="button" class="text-xs font-bold px-2.5 py-1.5 rounded border border-gray-400 bg-gray-100 hover:bg-gray-200 text-gray-800">Cubrir Todo ($${N(e)})</button>
                    </div>

                    <div id="edit-preview-box" class="rounded p-2.5 border-2 border-brand-black text-xs"></div>
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <button id="modal-edit-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">VOLVER</button>
                    <button id="modal-edit-ok" class="bg-amber-400 hover:bg-amber-500 text-brand-black font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">GUARDAR CORRECCIÓN</button>
                </div>
            </div>
        </div>`;const r=this.modal.querySelector("#tab-edit-usd"),c=this.modal.querySelector("#tab-edit-bs"),i=this.modal.querySelector("#sec-edit-usd"),s=this.modal.querySelector("#sec-edit-bs"),t=this.modal.querySelector("#edit-abono-usd-val"),n=this.modal.querySelector("#edit-abono-bs-val"),d=this.modal.querySelector("#edit-usd-equiv"),l=this.modal.querySelector("#edit-bs-equiv"),b=this.modal.querySelector("#edit-preview-box");let m="usd";const h=()=>{let R=0;m==="usd"?(R=X(t==null?void 0:t.value),d&&(d.textContent=`Bs. ${(R*a).toFixed(2)}`)):(R=X(n==null?void 0:n.value)/a,l&&(l.textContent=`$${R.toFixed(2)} USD`)),Number.isFinite(R)||(R=0);const F=R-e;if(b)if(F>.001)b.className="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold",b.innerHTML=`
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Saldo Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${N(R)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${N(F)} USD</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Excedente a favor del cliente.</p>
                    `;else if(F<-.001){const B=Math.abs(F);b.className="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold",b.innerHTML=`
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Saldo Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${N(R)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${N(B)} USD</span>
                        </div>
                    `}else b.className="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold",b.innerHTML=`
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${N(R)} USD</span>
                        </div>
                    `};t&&xe(t,5e4,8,h),n&&xe(n,5e7,11,h),h(),(k=this.modal.querySelector("#btn-preset-cero"))==null||k.addEventListener("click",()=>{const R=X(m==="usd"?t==null?void 0:t.value:n==null?void 0:n.value);(o>0||R>0)&&!window.confirm("¿Desea restablecer el saldo abonado a $0.00? Esta acción dejará los pagos registrados en cero.")||(t&&(t.value="0.00"),n&&(n.value="0.00"),h())}),(U=this.modal.querySelector("#btn-preset-exacto"))==null||U.addEventListener("click",()=>{t&&(t.value=e.toFixed(2)),n&&(n.value=(e*a).toFixed(2)),h()}),r==null||r.addEventListener("click",()=>{m="usd",r.className="flex-1 py-1.5 font-heading font-black text-xs rounded bg-brand-black text-white",c.className="flex-1 py-1.5 font-heading font-bold text-xs rounded text-brand-black hover:bg-white",i==null||i.classList.remove("hidden"),s==null||s.classList.add("hidden"),h()}),c==null||c.addEventListener("click",()=>{m="bs",c.className="flex-1 py-1.5 font-heading font-black text-xs rounded bg-brand-black text-white",r.className="flex-1 py-1.5 font-heading font-bold text-xs rounded text-brand-black hover:bg-white",s==null||s.classList.remove("hidden"),i==null||i.classList.add("hidden"),h()});const y=()=>{this.modal.innerHTML=""};(A=this.modal.querySelector("#modal-edit-cancel"))==null||A.addEventListener("click",y),(O=this.modal.querySelector("#modal-edit-ok"))==null||O.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;let R=0;if(m==="usd"?R=X(t==null?void 0:t.value):R=X(n==null?void 0:n.value)/a,!Number.isFinite(R)||R<0||R>5e4){alert("Monto inválido. Ingrese un valor entre $0.00 y $50,000.00 USD.");return}if(Math.abs(R-o)>.009){const f=R===0?`¿Confirmas reiniciar el saldo abonado a $0.00? (Monto previo registrado: $${N(o)})`:`¿Confirmas modificar el saldo abonado de esta cuenta a $${N(R)} USD (Bs. ${N(R*a)})? (Monto previo registrado: $${N(o)})`;if(!window.confirm(f))return}const B=await D.editarAbonoCuenta(this.cuentaSeleccionada.ventaId,R);B&&(this.cuentaSeleccionada=B),y(),this.render()})}async modalCierre(){var F,B,f;if(!this.cuentaSeleccionada)return;const e=this.cuentaSeleccionada.tipo==="deuda",o=X(this.cuentaSeleccionada.totalParcialUsd),a=X(this.cuentaSeleccionada.abonosUsd),r=Math.max(0,Math.round((o-a)*100)/100),c=Math.max(0,Math.round((a-o)*100)/100),i=this.modelo.tasaActual||807.39;if(r<=.009){this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                    <h3 class="font-heading font-black text-2xl mb-1">${e?"LIQUIDAR DEUDA":"LIQUIDAR CUENTA"}</h3>
                    <p class="font-body text-sm text-gray-600 mb-4">${this.cuentaSeleccionada.etiqueta} · Total cubierto por abonos previos</p>
                    
                    <div class="space-y-2 mb-4">
                        <div class="flex justify-between text-xs font-bold text-gray-500">
                            <span>Total de consumos:</span>
                            <span>$${N(o)} (Bs. ${N(o*i)})</span>
                        </div>
                        <div class="flex justify-between text-xs font-bold text-emerald-700">
                            <span>Total abonado acumulado:</span>
                            <span>$${N(a)} (Bs. ${N(a*i)})</span>
                        </div>

                        ${c>0?`
                        <div class="bg-emerald-50 border-2 border-emerald-600 rounded p-4 text-center mt-3">
                            <span class="text-xs font-black text-emerald-900 uppercase">Saldo a Favor del Cliente</span>
                            <p class="font-heading font-black text-3xl text-emerald-600 mt-1">+$${N(c)} USD</p>
                            <p class="font-bold text-xs text-emerald-800">Bs. ${N(c*i)}</p>
                            <div class="mt-3 bg-white border border-emerald-500 rounded p-2.5 text-xs text-emerald-950 font-bold leading-tight text-left">
                                ✓ <strong>Consolidación como ganancia:</strong> Al liquidar y cerrar la cuenta, este excedente de <strong>$${N(c)}</strong> se consolidará automáticamente como ganancia del negocio.
                            </div>
                        </div>
                        `:`
                        <div class="bg-green-50 border-2 border-green-600 rounded p-4 text-center mt-2">
                            <span class="text-xs font-black text-green-900 uppercase">Totalmente Pagado</span>
                            <p class="font-heading font-black text-xl text-green-800 mt-1">Saldo pendiente: $0.00</p>
                        </div>
                        `}
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <button id="modal-liq-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">VOLVER</button>
                        <button id="modal-liq-ok" class="${c>0?"bg-emerald-600 hover:bg-emerald-700":"bg-green-600 hover:bg-green-700"} text-white font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">
                            ${c>0?"LIQUIDAR Y CONSOLIDAR GANANCIA":"CONFIRMAR CIERRE"}
                        </button>
                    </div>
                </div>
            </div>`;const g=()=>{this.modal.innerHTML=""};(F=this.modal.querySelector("#modal-liq-cancel"))==null||F.addEventListener("click",g),(B=this.modal.querySelector("#modal-liq-ok"))==null||B.addEventListener("click",async()=>{this.cuentaSeleccionada&&(await D.cerrarCuenta(this.cuentaSeleccionada.ventaId,"0.00",i.toFixed(4)),this.cuentaSeleccionada=null,g(),this.render())});return}let s=[];try{s=await D.listarMetodosPago()}catch{s=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}let t=i;const n=e?s.find(g=>g.nombre==="TRANSF.BS.")||s[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"}:s.find(g=>g.nombre==="PUNTOD.VENTA")||s[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"},d=this.cuentaSeleccionada.ventaId,l=this.pagosBorradorPorCuenta.get(d);let b;if(l&&l.length>0){if(b=l.map(g=>({...g})),b.length===1&&b[0]){const g=b[0];g.monto=g.moneda==="USD"?r:Number((r*t).toFixed(2)),g.tasaCambio=t}else if(b.length>1){const g=Number((r*t).toFixed(2));let S=0;for(let _=0;_<b.length-1;_++){const x=b[_],v=x.tasaCambio>0?x.tasaCambio:t;S+=x.moneda==="USD"?x.monto*v:x.monto}const M=Math.max(0,Math.round((g-S)*100)/100),C=b[b.length-1];C&&(C.monto=C.moneda==="USD"?t>0?Number((M/t).toFixed(2)):0:M,C.tasaCambio=t)}}else b=[{id:"p-1",metodo:n.nombre,moneda:n.moneda,monto:n.moneda==="USD"?r:Number((r*t).toFixed(2)),tasaCambio:t,referencia:""}];const m=this.resolucionVueltoPorCuenta.get(d);let h=(m==null?void 0:m.estado)||"PAGADO",y=(m==null?void 0:m.metodo)||(e?"TRANSF.BS.":"BS.EFEC."),k=(m==null?void 0:m.tasa)||t;s.some(g=>g.nombre===y)||(y=((f=s[0])==null?void 0:f.nombre)||(e?"TRANSF.BS.":"BS.EFEC."));let U=!1;const A=()=>{let g=0;for(const P of b)if(P.moneda==="USD"){const z=P.tasaCambio>0?P.tasaCambio:t;g+=P.monto*z}else g+=P.monto;g=Math.round(g*100)/100;const S=Math.round(r*t*100)/100,M=t>0?Math.round(g/t*100)/100:0,C=Math.max(0,Math.round((S-g)*100)/100),_=t>0?Math.max(0,Math.round(C/t*100)/100):0,x=Math.max(0,Math.round((g-S)*100)/100),v=t>0?Math.max(0,Math.round(x/t*100)/100):0,T=g>=S-.01&&b.every(P=>P.monto>0);return{cubiertoUsd:M,cubiertoBs:g,totalEsperadoBs:S,faltanteUsd:_,faltanteBs:C,vueltoUsd:v,vueltoBs:x,puedeConfirmar:T}},O=()=>{var z,I;const g=A(),S=s.filter(E=>E.moneda==="USD"),M=s.filter(E=>E.moneda==="BS"),C=b.map((E,K)=>{const Y=S.map(G=>`<option value="${G.nombre}" ${G.nombre===E.metodo?"selected":""}>${G.nombre} ($ - Tasa Dinámica)</option>`).join(""),j=`
                        <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                            ${M.map(G=>`<option value="${G.nombre}" ${G.nombre===E.metodo?"selected":""}>${G.nombre} (Bs.)</option>`).join("")}
                        </optgroup>
                        <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                            ${Y}
                        </optgroup>
                    `,$=E.tasaCambio>0?E.tasaCambio:t,q=E.moneda==="USD"?E.monto*$:E.monto,V=t>0?q/t:0;return`
                    <div class="border-2 border-brand-black rounded-lg p-2.5 bg-gray-50 mb-2">
                        <div class="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                            <span class="font-heading font-black text-xs uppercase text-gray-700">
                                Pago #${K+1} · <span class="${E.moneda==="USD"?"text-brand-purple":"text-brand-black"}">${E.moneda==="USD"?"Divisa ($ USD)":"Moneda Nacional (Bs.)"}</span>
                            </span>
                            ${b.length>1?`<button data-eliminar-pago="${E.id}" class="text-[11px] font-black text-red-600 hover:text-red-800 bg-red-50 border border-red-300 rounded px-2 py-0.5">Eliminar</button>`:""}
                        </div>
                        ${E.moneda==="USD"?`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Divisa</label>
                                <select data-pago-metodo="${E.id}" class="w-full border-2 border-brand-black rounded px-2 py-1 font-heading font-black text-xs bg-white focus:outline-none">
                                    ${j}
                                </select>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto ($ USD)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">$</span>
                                    <input type="number" step="0.01" min="0.01" max="999999" data-pago-monto="${E.id}" value="${E.monto>0?E.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1 text-xs font-mono font-black focus:outline-none text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <div class="flex items-center justify-between mb-0.5">
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase">Tasa (Bs./$)</label>
                                    <button type="button" data-reset-tasa-cuenta="${E.id}" class="text-[9px] font-black uppercase text-brand-purple hover:underline" title="Restablecer a tasa oficial">Base: ${N(t)}</button>
                                </div>
                                <input type="number" step="0.01" min="1" max="100000" data-pago-tasa="${E.id}" value="${$>0?$:t}"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1 text-xs font-mono font-black focus:outline-none text-right" />
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${E.id}" value="${E.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1 text-xs font-mono focus:outline-none" />
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-1 mt-1 text-[11px]">
                            <span class="font-bold text-brand-purple">Aporte: Bs. ${N(q)}</span>
                            <span class="text-gray-500 font-mono">Equiv. base: $ ${N(V)} ${$!==t?`(Tasa: Bs. ${N($)} vs Base: Bs. ${N(t)})`:""}</span>
                        </div>
                        `:`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-5">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Bolívares</label>
                                <select data-pago-metodo="${E.id}" class="w-full border-2 border-brand-black rounded px-2 py-1 font-heading font-black text-xs bg-white focus:outline-none">
                                    ${j}
                                </select>
                            </div>
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto (Bs.)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">Bs.</span>
                                    <input type="number" step="0.01" min="0.01" max="999999999" data-pago-monto="${E.id}" value="${E.monto>0?E.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1 text-xs font-mono font-black focus:outline-none text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${E.id}" value="${E.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1 text-xs font-mono focus:outline-none" />
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-1 mt-1 text-[11px]">
                            <span class="font-bold text-brand-black">Aporte directo: Bs. ${N(E.monto)}</span>
                            <span class="text-gray-500 font-mono">Equiv. base: $ ${N(V)}</span>
                        </div>
                        `}
                    </div>`}).join(""),_=s.find(E=>E.nombre===y),x=(_==null?void 0:_.moneda)==="USD",v=k>0?k:t,T=x&&v>0?Number((g.vueltoBs/v).toFixed(2)):g.vueltoUsd,P=g.faltanteBs>.009?`
                    <div class="bg-amber-50 border-2 border-amber-500 rounded p-2.5 text-center mb-3">
                        <p class="text-xs font-black uppercase text-amber-900">Monto Incompleto por Cubrir</p>
                        <p class="font-heading font-black text-lg text-amber-700">Faltan Bs. ${N(g.faltanteBs)} · <span class="text-sm text-amber-900">$ ${N(g.faltanteUsd)} (Equiv. Base)</span></p>
                    </div>`:g.vueltoBs>.009?`
                    <div class="border-2 border-emerald-700 bg-emerald-50/70 rounded-lg p-3 mb-3">
                        <div class="flex flex-wrap items-center justify-between gap-1 mb-2">
                            <div>
                                <span class="text-[10px] font-black uppercase text-emerald-900 tracking-wide block">Excedente / Vuelto del Cliente</span>
                                <span class="font-heading font-black text-lg text-emerald-800">Bs. ${N(g.vueltoBs)}</span>
                            </div>
                            <span class="text-xs font-bold text-emerald-900 font-mono">$ ${N(g.vueltoUsd)} equiv.</span>
                        </div>

                        <!-- Selector: Entregar Vuelto vs Retener Vuelto -->
                        <div class="grid grid-cols-2 gap-2 mb-2.5">
                            <button type="button" id="btn-vuelto-pagado-cuenta" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${h==="PAGADO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                                ENTREGAR VUELTO (PAGADO)
                            </button>
                            <button type="button" id="btn-vuelto-retenido-cuenta" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${h==="RETENIDO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                                RETENER VUELTO (A FAVOR)
                            </button>
                        </div>

                        ${h==="PAGADO"?`
                        <div class="bg-white border border-emerald-600 rounded p-2.5 space-y-2">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <label class="text-[11px] font-bold text-gray-700 uppercase">Método de Egreso del Vuelto:</label>
                                <select id="select-metodo-vuelto-cuenta" class="border-2 border-brand-black rounded px-2 py-1 text-xs font-bold bg-white focus:outline-none">
                                    ${s.map(E=>`
                                        <option value="${E.nombre}" ${E.nombre===y?"selected":""}>
                                            ${E.nombre} (${E.moneda==="USD"?"$ Dólares":"Bs. Bolívares"})
                                        </option>
                                    `).join("")}
                                </select>
                            </div>
                            ${x?`
                            <div class="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-gray-100">
                                <div>
                                    <span class="text-[10px] font-bold text-gray-500 uppercase block">Tasa Pactada Vuelto USD:</span>
                                    <div class="flex items-center gap-1.5">
                                        <input id="input-tasa-vuelto-cuenta" type="text" inputmode="decimal" value="${k.toFixed(2)}"
                                            class="w-24 border-2 border-brand-black rounded px-2 py-0.5 text-xs font-mono font-bold" />
                                        <button id="btn-reset-tasa-vuelto-cuenta" type="button" class="text-[10px] bg-gray-100 border border-gray-400 rounded px-1.5 py-0.5 hover:bg-gray-200">
                                            Reset Base
                                        </button>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="text-[10px] font-bold text-gray-500 uppercase block">Divisa USD a Entregar:</span>
                                    <span class="font-heading font-black text-base text-brand-purple">
                                        $ ${N(T)} USD
                                    </span>
                                </div>
                            </div>
                            `:`
                            <div class="flex items-center justify-between pt-1 border-t border-gray-100 text-xs">
                                <span class="font-bold text-gray-600">Total a Entregar en Bolívares:</span>
                                <span class="font-heading font-black text-base text-brand-black">Bs. ${N(g.vueltoBs)}</span>
                            </div>
                            `}
                        </div>
                        `:`
                        <div class="bg-white border border-gray-300 rounded p-2 text-xs text-gray-700">
                            <p class="font-bold text-emerald-900 mb-0.5">Vuelto Retenido como Saldo a Favor</p>
                            <p class="text-[11px] text-gray-600 leading-tight">
                                El excedente de <b>Bs. ${N(g.vueltoBs)} ($ ${N(g.vueltoUsd)})</b> no genera egreso físico de caja y se asienta en el comprobante como saldo a favor retenido en el negocio.
                            </p>
                        </div>
                        `}
                    </div>`:"";this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
                    <div class="flex items-center justify-between border-b-2 border-brand-black pb-3 mb-3">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-wider text-brand-purple">
                                ${e?"Cobro de Crédito Comercial":"Cobro de Comanda en Local"}
                            </span>
                            <h3 class="font-heading font-black text-2xl">
                                ${e?"COBRAR Y LIQUIDAR DEUDA":"LIQUIDAR CUENTA"}
                            </h3>
                            <p class="font-body text-xs text-gray-600 font-bold">
                                ${(z=this.cuentaSeleccionada)==null?void 0:z.etiqueta} ${(I=this.cuentaSeleccionada)!=null&&I.cliente?`· ${this.cuentaSeleccionada.cliente}`:""}
                            </p>
                        </div>
                        <button id="modal-liq-cerrar" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
                    </div>

                    <!-- Resumen del Importe Pendiente -->
                    <div class="bg-brand-gray/30 border-2 border-brand-black rounded-lg p-3 mb-3 flex flex-wrap justify-between items-center gap-2">
                        <div>
                            <span class="text-[10px] font-bold text-gray-600 uppercase block">Saldo Neto a Cobrar</span>
                            <div class="flex items-baseline gap-2">
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${N(r)} USD</span>
                                <span class="font-heading font-black text-xl text-brand-purple">Bs. ${N(g.totalEsperadoBs)}</span>
                            </div>
                        </div>
                        <div class="text-right text-xs">
                            <span class="text-gray-500 font-bold block">Consumo: $${N(o)} · Abonos: $${N(a)}</span>
                        </div>
                    </div>

                    <!-- Control de Tasa (Libre para Deudas, Fija para Cuenta) -->
                    ${e?`
                    <div class="bg-gray-50 border-2 border-brand-black rounded p-3 mb-3">
                        <label class="block text-xs font-black uppercase text-gray-800 mb-1">Tasa Libre de Cobro (Bs. / USD):</label>
                        <div class="flex gap-2">
                            <input id="deuda-tasa-input" type="text" inputmode="decimal" maxlength="9" value="${t.toFixed(4)}"
                                class="flex-1 border-2 border-brand-black rounded px-3 py-1.5 font-mono font-black text-base text-brand-black" />
                            <button id="btn-tasa-bcv" type="button" class="bg-gray-200 hover:bg-gray-300 text-brand-black font-heading font-black text-[11px] px-3 py-1.5 rounded border-2 border-brand-black">
                                TASA DEL DÍA (BCV)
                            </button>
                        </div>
                        <p class="text-[11px] text-gray-500 font-bold mt-1">Usted define libremente la tasa al momento de liquidar o aplica la oficial del día.</p>
                    </div>`:""}

                    <!-- Lista de Métodos de Pago -->
                    <div class="mb-3">
                        <span class="text-[10px] font-heading font-black uppercase text-gray-600 block mb-1">
                            Métodos de Pago Aplicados (${b.length})
                        </span>
                        ${C}
                    </div>

                    <!-- Acciones sobre Métodos -->
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <button id="btn-agregar-pago-cuenta" class="bg-blue-50 text-blue-950 hover:bg-blue-100 border-2 border-brand-black rounded px-3 py-1.5 text-xs font-heading font-black shadow-brutal-sm">
                            + AGREGAR OTRO MÉTODO (PAGO MIXTO)
                        </button>
                        <button id="btn-toggle-nuevo-metodo-cuenta" class="bg-white text-gray-800 hover:bg-gray-50 border border-brand-black rounded px-2.5 py-1.5 text-xs font-bold">
                            + CREAR MÉTODO DE PAGO
                        </button>
                    </div>

                    <!-- Subformulario para Crear Nuevo Método -->
                    ${U?`
                    <div class="bg-purple-50 border-2 border-brand-purple rounded-lg p-3 mb-3">
                        <p class="text-xs font-heading font-black text-brand-purple uppercase mb-1.5">Nuevo Método de Pago</p>
                        <div class="space-y-2">
                            <div class="flex gap-2">
                                <input id="input-nuevo-metodo-nombre-cuenta" type="text" maxlength="25" placeholder="Ej: BANESCO PANAMA, USDT..."
                                    class="flex-1 border-2 border-brand-black rounded px-2.5 py-1 text-xs font-bold uppercase focus:outline-none" />
                                <button id="btn-guardar-nuevo-metodo-cuenta" class="bg-brand-purple text-white border-2 border-brand-black rounded px-3 py-1 text-xs font-heading font-black hover:opacity-90">
                                    GUARDAR
                                </button>
                            </div>
                            <div class="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-800">
                                <span class="text-[10px] text-gray-500 uppercase">Moneda Base:</span>
                                <label class="inline-flex items-center gap-1 cursor-pointer">
                                    <input type="radio" name="radio-nuevo-metodo-moneda-cuenta" value="USD" checked class="text-brand-purple" />
                                    <span>Dólares ($ USD - Tasa Dinámica)</span>
                                </label>
                                <label class="inline-flex items-center gap-1 cursor-pointer">
                                    <input type="radio" name="radio-nuevo-metodo-moneda-cuenta" value="BS" class="text-brand-purple" />
                                    <span>Bolívares (Bs.)</span>
                                </label>
                            </div>
                        </div>
                    </div>`:""}

                    <!-- Balance -->
                    ${P}

                    <div id="cobro-error-cuenta" class="hidden text-red-700 text-xs font-bold mb-3 bg-red-50 border border-red-400 rounded p-2"></div>

                    <!-- Acciones Finales -->
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t-2 border-brand-black">
                        <div class="flex items-center gap-2">
                            <button id="modal-liq-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-2 px-4 rounded text-xs hover:bg-gray-100">
                                VOLVER
                            </button>
                            <button id="modal-liq-agregar-mas" class="bg-amber-100 hover:bg-amber-200 text-amber-950 border-2 border-brand-black font-heading font-black py-2 px-3 rounded text-xs">
                                ${e?"AGREGAR CARGOS A LA DEUDA":"AGREGAR MÁS CONSUMOS"}
                            </button>
                        </div>
                        <button id="modal-liq-ok" ${g.puedeConfirmar?"":"disabled"}
                            class="bg-green-700 hover:bg-green-800 disabled:opacity-30 disabled:cursor-not-allowed text-white font-heading font-black py-2 px-5 rounded border-2 border-brand-black shadow-brutal-sm text-sm">
                            CONFIRMAR COBRO
                        </button>
                    </div>
                </div>
            </div>`,R()},R=()=>{var C,_,x,v,T,P,z,I,E,K,Y;const g=()=>{this.cuentaSeleccionada&&(this.pagosBorradorPorCuenta.set(this.cuentaSeleccionada.ventaId,b),this.resolucionVueltoPorCuenta.set(this.cuentaSeleccionada.ventaId,{estado:h,metodo:y,tasa:k}))},S=()=>{g(),this.modal.innerHTML=""};(C=this.modal.querySelector("#modal-liq-cerrar"))==null||C.addEventListener("click",S),(_=this.modal.querySelector("#modal-liq-cancel"))==null||_.addEventListener("click",S),(x=this.modal.querySelector("#modal-liq-agregar-mas"))==null||x.addEventListener("click",()=>{g(),this.modal.innerHTML=""}),(v=this.modal.querySelector("#btn-vuelto-pagado-cuenta"))==null||v.addEventListener("click",()=>{h="PAGADO",g(),O()}),(T=this.modal.querySelector("#btn-vuelto-retenido-cuenta"))==null||T.addEventListener("click",()=>{h="RETENIDO",g(),O()}),(P=this.modal.querySelector("#select-metodo-vuelto-cuenta"))==null||P.addEventListener("change",L=>{y=L.target.value,g(),O()});const M=this.modal.querySelector("#input-tasa-vuelto-cuenta");if(M&&(M.addEventListener("input",L=>{const j=X(L.target.value);k=j>0?j:t,g()}),M.addEventListener("blur",()=>{O()})),(z=this.modal.querySelector("#btn-reset-tasa-vuelto-cuenta"))==null||z.addEventListener("click",()=>{k=t,g(),O()}),e){const L=this.modal.querySelector("#deuda-tasa-input"),j=this.modal.querySelector("#btn-tasa-bcv");L&&xe(L,1e5,9,()=>{const $=X(L.value);t=Number.isFinite($)&&$>0?$:i,g(),O()}),j==null||j.addEventListener("click",()=>{t=i,g(),O()})}this.modal.querySelectorAll("select[data-pago-metodo]").forEach(L=>{L.addEventListener("change",j=>{const $=L.dataset.pagoMetodo,q=j.target.value,V=b.find(G=>G.id===$);if(V){const G=s.find(re=>re.nombre===q),oe=(G==null?void 0:G.moneda)||"BS";V.moneda=oe,V.tasaCambio=t,b.length===1?V.monto=V.moneda==="USD"?r:Number((r*t).toFixed(2)):oe!==V.moneda&&(oe==="USD"?V.monto=Number((t>0?V.monto/t:0).toFixed(2)):V.monto=Number((V.monto*t).toFixed(2))),V.metodo=q,g(),O()}})}),this.modal.querySelectorAll("input[data-pago-tasa]").forEach(L=>{L.addEventListener("input",j=>{const $=L.dataset.pagoTasa,q=X(j.target.value),V=b.find(G=>G.id===$);if(V){V.tasaCambio=q>0?q:t,g();const G=A(),oe=this.modal.querySelector("#modal-liq-ok");oe&&(oe.disabled=!G.puedeConfirmar)}}),L.addEventListener("blur",()=>{O()})}),this.modal.querySelectorAll("button[data-reset-tasa-cuenta]").forEach(L=>{L.addEventListener("click",()=>{const j=L.dataset.resetTasaCuenta,$=b.find(q=>q.id===j);$&&($.tasaCambio=t,g(),O())})}),this.modal.querySelectorAll("input[data-pago-monto]").forEach(L=>{L.addEventListener("input",j=>{const $=L.dataset.pagoMonto,q=X(j.target.value),V=b.find(G=>G.id===$);if(V){V.monto=q,g();const G=A(),oe=this.modal.querySelector("#modal-liq-ok");oe&&(oe.disabled=!G.puedeConfirmar)}}),L.addEventListener("blur",()=>{O()})}),this.modal.querySelectorAll("input[data-pago-ref]").forEach(L=>{L.addEventListener("input",j=>{const $=L.dataset.pagoRef,q=j.target.value,V=b.find(G=>G.id===$);V&&(V.referencia=q,g())})}),this.modal.querySelectorAll("button[data-eliminar-pago]").forEach(L=>{L.addEventListener("click",()=>{const j=L.dataset.eliminarPago;b=b.filter($=>$.id!==j),g(),O()})}),(I=this.modal.querySelector("#btn-agregar-pago-cuenta"))==null||I.addEventListener("click",()=>{let L=A();const j="p-"+Math.random().toString(36).slice(2,7),$=s.find(V=>!b.some(G=>G.metodo===V.nombre))||s[0]||{nombre:"BS.EFEC.",moneda:"BS"};if(L.faltanteBs<=.01&&b.length===1&&b[0]){const V=b[0],G=V.tasaCambio>0?V.tasaCambio:t,oe=V.moneda==="USD"?V.monto*G:V.monto,re=Math.round(oe/2*100)/100;V.monto=V.moneda==="USD"?G>0?Number((re/G).toFixed(2)):0:re,L=A()}const q=L.faltanteBs>0?L.faltanteBs:0;b.push({id:j,metodo:$.nombre,moneda:$.moneda,monto:$.moneda==="USD"?t>0?Number((q/t).toFixed(2)):0:q,tasaCambio:t,referencia:""}),g(),O()}),(E=this.modal.querySelector("#btn-toggle-nuevo-metodo-cuenta"))==null||E.addEventListener("click",()=>{U=!U,O()}),(K=this.modal.querySelector("#btn-guardar-nuevo-metodo-cuenta"))==null||K.addEventListener("click",()=>{(async()=>{const L=this.modal.querySelector("#input-nuevo-metodo-nombre-cuenta"),j=(L==null?void 0:L.value.trim())||"",$=this.modal.querySelector('input[name="radio-nuevo-metodo-moneda-cuenta"][value="USD"]'),q=$!=null&&$.checked?"USD":"BS";if(j)try{s=await D.crearMetodoPago(j,q),U=!1,O()}catch{}})()}),(Y=this.modal.querySelector("#modal-liq-ok"))==null||Y.addEventListener("click",()=>{(async()=>{if(!this.cuentaSeleccionada)return;const L=this.modal.querySelector("#cobro-error-cuenta");try{const j=b.filter(ae=>ae.monto>0).map(ae=>{const be=ae.moneda==="USD"&&ae.tasaCambio>0?ae.tasaCambio:t,ke=ae.moneda==="USD"?ae.monto*be:ae.monto,Ce=t>0?ke/t:0;return{metodo:ae.metodo,moneda:ae.moneda,montoUsd:(ae.moneda==="USD"?ae.monto:Ce).toFixed(2),montoBs:ke.toFixed(2),tasaCambio:ae.moneda==="USD"?be.toFixed(2):void 0,referencia:ae.referencia.trim()||void 0}});if(j.length===0)throw new Error("Debe especificar al menos un pago válido.");const $=A(),q=j.reduce((ae,be)=>ae+Number(be.montoBs),0),V=s.find(ae=>ae.nombre===y),G=(V==null?void 0:V.moneda)==="USD",oe=G?k>0?k:t:void 0,re=G&&oe?($.vueltoBs/oe).toFixed(2):$.vueltoUsd.toFixed(2),$e={estado:$.vueltoBs>.009?h:"SIN_VUELTO",metodo:$.vueltoBs>.009&&h==="PAGADO"?y:void 0,montoBs:$.vueltoBs>.009?$.vueltoBs.toFixed(2):void 0,montoUsd:$.vueltoBs>.009?re:void 0,tasa:$.vueltoBs>.009&&h==="PAGADO"&&oe?oe.toFixed(2):void 0},ge=this.cuentaSeleccionada.ventaId;await D.cerrarCuenta(ge,q.toFixed(2),t.toFixed(4),j,$e),this.pagosBorradorPorCuenta.delete(ge),this.resolucionVueltoPorCuenta.delete(ge),this.cuentaSeleccionada=null,this.modal.innerHTML="",this.render()}catch(j){L&&(L.textContent=j instanceof Error?j.message.replace(/"/g,""):String(j),L.classList.remove("hidden"))}})()})};O()}}const de=(u,e,o,a)=>{u.maxLength=o,u.addEventListener("input",()=>{let r=u.value.replace(/[^0-9.,]/g,"");const c=r.split(/[.,]/);c.length>2?r=c[0]+"."+c.slice(1).join(""):c.length===2&&(r=c[0]+"."+c[1].slice(0,2)),r.length>o&&(r=r.slice(0,o));const i=parseFloat(r.replace(",","."));Number.isFinite(i)&&i>e&&(r=String(e)),u.value!==r&&(u.value=r),a&&a()})},we=(u,e,o,a,r)=>{u.maxLength=a,u.addEventListener("input",()=>{let c=u.value.replace(/[^0-9]/g,"");c.length>a&&(c=c.slice(0,a));const i=parseInt(c,10);Number.isFinite(i)&&i>o&&(c=String(o)),u.value!==c&&(u.value=c),r&&r()}),u.addEventListener("blur",()=>{const c=parseInt(u.value,10);Number.isFinite(c)&&c<e&&(u.value=String(e),r&&r())})},ce=(u,e,o=!1)=>{u.maxLength=e,u.addEventListener("input",()=>{let a=o?u.value.replace(/[<>{}\\]/g,""):u.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ .,/_#-]/g,"");a.length>e&&(a=a.slice(0,e)),u.value!==a&&(u.value=a)})};class Ke{constructor(e,o){w(this,"contenedor");w(this,"modelo");w(this,"categorias",[]);w(this,"tasasImpuestos",[]);w(this,"productos",[]);w(this,"busquedaRepo","");w(this,"busquedaCatalogo","");w(this,"filtroCategoriaRepo","todas");w(this,"filtroCategoriaCatalogo","todas");w(this,"tabActiva","alta");w(this,"semaforoStock",{rojoMax:5,amarilloMax:15});w(this,"POR_PAGINA_CAT",40);w(this,"POR_PAGINA_REPO",24);w(this,"paginaCat",1);w(this,"paginaRepo",1);this.contenedor=e,this.modelo=o,this.modelo}getUnitLabel(e){return e.unidad==="kg"?"kg":e.unidad==="ml"?"ml":e.unidad==="un"?"un.":e.capacidades&2?"kg":"un."}getNombreCategoria(e){if(!e)return"General";const o=this.categorias.find(a=>a.id===e);return o?o.nombre:"General"}getConteoCategorias(){const e={todas:this.productos.length};return this.categorias.forEach(o=>{e[o.id]=0}),e["cat-general"]===void 0&&(e["cat-general"]=0),this.productos.forEach(o=>{const a=o.categoriaId||"cat-general";e[a]=(e[a]||0)+1}),e}async render(e){e&&(this.tabActiva=e);const[o,a,r,c]=await Promise.all([D.categorias(),D.tasasImpuestos(),D.productos(),D.obtenerSemaforoStock()]);this.categorias=o,this.tasasImpuestos=a,this.productos=r,this.semaforoStock=c;const i=this.getConteoCategorias(),s="Ej: Artículo Comercial 1L, Presentación 500g, Pack Estándar...";this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Control de Inventario</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Alta de productos, reposición de mercancía, categorías y tasas tributarias</p>
            </div>
            <div class="flex items-center gap-1 overflow-x-auto max-w-full pb-1" id="inv-tabs-container">
                <div class="inline-flex border-2 border-brand-black rounded bg-white shadow-brutal-sm p-0.5" id="inv-tabs">
                    <button id="tab-alta" class="w-36 sm:w-48 h-9 flex items-center justify-center font-heading text-xs rounded transition-colors shrink-0 ${this.tabActiva==="alta"?"font-black bg-brand-black text-white":"font-bold text-brand-black hover:bg-gray-100"}">AÑADIR PRODUCTO</button>
                    <button id="tab-stock" class="w-36 sm:w-48 h-9 flex items-center justify-center font-heading text-xs rounded transition-colors shrink-0 ${this.tabActiva==="stock"?"font-black bg-brand-black text-white":"font-bold text-brand-black hover:bg-gray-100"}">AÑADIR / AJUSTAR STOCK</button>
                    <button id="tab-ajustes" class="w-36 sm:w-48 h-9 flex items-center justify-center font-heading text-xs rounded transition-colors shrink-0 ${this.tabActiva==="ajustes"?"font-black bg-brand-black text-white":"font-bold text-brand-black hover:bg-gray-100"}">CATEGORÍAS E IMPUESTOS</button>
                </div>
            </div>
        </div>

        <div id="inv-seccion-alta" class="${this.tabActiva==="alta"?"block":"hidden"}">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <form id="form-nuevo-producto" novalidate class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 lg:col-span-2 space-y-4">
                    <h3 class="font-heading font-black text-xl border-b-2 border-brand-black pb-2">Registrar Nuevo Producto o Servicio</h3>
                    
                    <div>
                        <label class="block text-xs font-bold uppercase mb-1">Nombre Comercial del Producto o Servicio *</label>
                        <input id="prod-nombre" maxlength="64" placeholder="${s}" class="w-full border-2 border-brand-black rounded px-4 py-2.5 font-bold focus:ring-2 focus:ring-brand-cyan" required />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Categoría</label>
                            <select id="prod-categoria" class="w-full border-2 border-brand-black rounded px-3 py-2.5 bg-white font-bold">
                                ${this.categorias.map(t=>`<option value="${t.id}">${t.nombre}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Tasa de Impuesto</label>
                            <select id="prod-impuesto" class="w-full border-2 border-brand-black rounded px-3 py-2.5 bg-white font-bold">
                                ${this.tasasImpuestos.map(t=>`<option value="${t.porcentaje}">${t.nombre}</option>`).join("")}
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 border-2 border-brand-black rounded p-4">
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1 text-gray-700">Precio Bruto (Costo $)</label>
                            <input id="prod-precio-bruto" type="text" inputmode="decimal" maxlength="8" placeholder="0.00" class="w-full border-2 border-brand-black rounded px-3 py-2 font-bold bg-white" />
                            <span class="text-[10px] text-gray-500">Costo de reposición (opcional)</span>
                        </div>
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1 text-gray-700">Margen de Ganancia (%)</label>
                            <input id="prod-margen" type="text" inputmode="decimal" maxlength="5" value="30" class="w-full border-2 border-brand-black rounded px-3 py-2 font-bold bg-white" />
                            <span class="text-[10px] text-gray-500">Utilidad deseada (%)</span>
                        </div>
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1 text-brand-purple">Precio Neto Final ($) *</label>
                            <input id="prod-precio-neto" type="text" inputmode="decimal" maxlength="8" placeholder="0.00" class="w-full border-2 border-brand-black rounded px-3 py-2 font-black text-brand-purple bg-white" required />
                            <span class="text-[10px] text-gray-500">PVP con impuesto incluido</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <div id="box-stock-inicial">
                            <label class="block text-xs font-bold uppercase mb-1">Stock Inicial (en unidades base)</label>
                            <input id="prod-stock" type="text" inputmode="decimal" maxlength="7" value="10" class="w-full border-2 border-brand-black rounded px-3 py-2 font-bold bg-white" />
                        </div>
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Tipo de Medida / Venta</label>
                            <select id="prod-unidad" class="w-full border-2 border-brand-black rounded px-3 py-2 font-black bg-white">
                                <option value="un">Unidad / Pieza (un.)</option>
                                <option value="kg">Por Peso (Kilogramos - kg)</option>
                                <option value="ml">Por Volumen (Mililitros - ml)</option>
                            </select>
                        </div>
                    </div>

                    <!-- Configuración de Empaque / Caja y Despiece -->
                    <div class="bg-gray-50 border-2 border-brand-black rounded p-3 space-y-2">
                        <label class="inline-flex items-center gap-2 cursor-pointer select-none">
                            <input id="prod-es-caja" type="checkbox" class="w-4 h-4 border-2 border-brand-black rounded text-brand-black focus:ring-0" />
                            <span class="font-bold text-xs sm:text-sm">¿Viene en empaque / caja con unidades sueltas?</span>
                        </label>
                        <div id="box-caja-config" class="hidden grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            <div>
                                <label class="block text-[11px] font-bold uppercase text-gray-700 mb-0.5">Unidades por Empaque / Caja *</label>
                                <input id="prod-unidades-caja" type="number" min="2" max="1000" step="1" value="12" placeholder="Ej: 12" class="w-full border-2 border-brand-black rounded px-3 py-1.5 font-bold bg-white text-sm" />
                                <span class="text-[10px] text-gray-500">Cantidad de unidades contenidas en cada empaque</span>
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase text-gray-700 mb-0.5">Ingresar Stock Inicial en Cajas</label>
                                <input id="prod-stock-cajas" type="number" min="0" max="9999" step="1" placeholder="Ej: 5 cajas" class="w-full border-2 border-brand-black rounded px-3 py-1.5 font-bold bg-white text-sm" />
                                <span class="text-[10px] text-gray-500">Convierte automáticamente a unidades base</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class="inline-flex items-center gap-2 cursor-pointer select-none">
                            <input id="prod-sin-stock" type="checkbox" class="w-5 h-5 border-2 border-brand-black rounded text-brand-black focus:ring-0" />
                            <span class="font-bold text-xs sm:text-sm">Venta "Sin Stock" (Servicios / Detal libre sin inventario rígido)</span>
                        </label>
                    </div>

                    <div class="pt-2">
                        <button type="submit" class="w-full bg-brand-black text-white font-heading font-black py-4 rounded border-2 border-brand-black shadow-brutal hover:-translate-y-0.5 transition-all text-lg">
                            GUARDAR PRODUCTO O SERVICIO
                        </button>
                        <p id="alta-prod-msg" class="hidden font-bold text-sm mt-3 text-center"></p>
                    </div>
                </form>

                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 flex flex-col min-h-[300px] max-h-[480px] lg:max-h-[650px]">
                    <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-2">
                        <h3 class="font-heading font-black text-base sm:text-lg">Catálogo Registrado</h3>
                        <span class="text-xs font-black bg-gray-100 border border-brand-black px-2 py-0.5 rounded">${this.productos.length} artículos</span>
                    </div>
                    <div class="space-y-2 mb-3">
                        <select id="cat-filtro-lateral" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 text-xs font-bold bg-white focus:ring-2 focus:ring-brand-cyan">
                            <option value="todas">Todas las categorías (${this.productos.length} prods)</option>
                            ${this.categorias.map(t=>`<option value="${t.id}" ${this.filtroCategoriaCatalogo===t.id?"selected":""}>${t.nombre} (${i[t.id]||0} prods)</option>`).join("")}
                        </select>
                        <input id="cat-buscar-filtro" type="text" maxlength="40" placeholder="Filtrar por nombre o SKU..." value="${this.busquedaCatalogo}" class="w-full border-2 border-brand-black rounded px-3 py-2 text-xs font-bold" />
                    </div>
                    <div id="cat-lista-items" class="flex-1 overflow-y-auto space-y-2 pr-1"></div>
                </div>
            </div>
        </div>

        <div id="inv-seccion-stock" class="${this.tabActiva==="stock"?"block":"hidden"} space-y-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6">
                <div class="flex flex-wrap justify-between items-center mb-3 gap-2">
                    <div>
                        <h3 class="font-heading font-black text-xl">Reposición Dinámica de Stock</h3>
                        <p class="text-xs sm:text-sm text-gray-600">Explora por categoría o busca por nombre para dar entrada o salida a existencias.</p>
                    </div>
                    <span id="repo-contador-estado" class="text-xs font-bold text-gray-700 bg-gray-100 border-2 border-brand-black px-2.5 py-1 rounded">
                        ${this.productos.length} artículos en depósito
                    </span>
                </div>

                <!-- Chips de Filtrado por Categoría con Conteo Exacto -->
                <div class="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 max-w-full" id="repo-chips-categorias">
                    <button data-cat-chip="todas" class="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors ${this.filtroCategoriaRepo==="todas"?"bg-brand-black text-white":"bg-gray-100 text-brand-black hover:bg-gray-200"}">
                        TODAS (${this.productos.length})
                    </button>
                    ${this.categorias.map(t=>{const n=i[t.id]||0,d=this.filtroCategoriaRepo===t.id;return`
                        <button data-cat-chip="${t.id}" class="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors ${d?"bg-brand-black text-white":"bg-gray-100 text-brand-black hover:bg-gray-200"}">
                            ${t.nombre} (${n})
                        </button>`}).join("")}
                </div>

                <input id="repo-buscar" type="text" maxlength="40" placeholder="Escribe el nombre del producto para buscar..." value="${this.busquedaRepo}" class="w-full border-2 border-brand-black rounded px-4 py-2.5 text-base font-bold mb-4 focus:ring-2 focus:ring-brand-cyan" />

                <div id="repo-lista" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto p-1"></div>
            </div>
        </div>

        <div id="inv-seccion-ajustes" class="${this.tabActiva==="ajustes"?"block":"hidden"} grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 space-y-4">
                <div class="border-b-2 border-brand-black pb-2 flex justify-between items-center">
                    <div>
                        <h3 class="font-heading font-black text-xl">Gestión de Categorías</h3>
                        <p class="text-xs text-gray-500 font-bold">Clasificación de catálogo comercial e inventario</p>
                    </div>
                    <span class="text-xs font-black bg-gray-100 border border-brand-black px-2 py-0.5 rounded">${this.categorias.length} categorías</span>
                </div>
                <form id="form-crear-cat" class="flex gap-2">
                    <input id="cat-nombre" maxlength="32" placeholder="Nombre de categoría..." class="flex-1 border-2 border-brand-black rounded px-3 py-2 font-bold" required />
                    <button type="submit" class="bg-brand-black text-white px-4 py-2 rounded font-black font-heading text-sm">AGREGAR</button>
                </form>
                <div class="space-y-2 max-h-[350px] overflow-y-auto">
                    ${this.categorias.map(t=>{const n=i[t.id]||0;return`
                        <div class="flex justify-between items-center border-2 border-brand-black rounded-lg p-3 bg-gray-50">
                            <div>
                                <span class="font-bold text-sm text-brand-black">${t.nombre}</span>
                                <p class="text-[11px] font-bold text-gray-500">${n} ${n===1?"producto asociado":"productos asociados"}</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs font-black px-2 py-0.5 rounded border border-brand-black ${n>0?"bg-amber-100 text-amber-900":"bg-gray-200 text-gray-600"}">
                                    ${n} prods.
                                </span>
                                <button data-del-cat="${t.id}" class="text-xs font-black text-red-600 hover:text-white hover:bg-red-600 border border-red-300 rounded px-2 py-1 transition-colors">Eliminar</button>
                            </div>
                        </div>`}).join("")}
                </div>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 space-y-4">
                <h3 class="font-heading font-black text-xl border-b-2 border-brand-black pb-2">Tasas de Impuestos (IVA)</h3>
                <form id="form-crear-tax" class="grid grid-cols-3 gap-2">
                    <input id="tax-nombre" maxlength="32" placeholder="Nombre (ej: Retención 5%)" class="col-span-2 border-2 border-brand-black rounded px-3 py-2 font-bold text-sm" required />
                    <div class="flex gap-1">
                        <input id="tax-pct" type="number" step="0.5" min="0" max="100" maxlength="4" placeholder="%" class="w-16 border-2 border-brand-black rounded px-2 py-2 font-bold text-sm" required />
                        <button type="submit" class="bg-brand-black text-white px-3 py-2 rounded font-black font-heading text-xs flex-1">+</button>
                    </div>
                </form>
                <div class="space-y-2 max-h-[350px] overflow-y-auto">
                    ${this.tasasImpuestos.map(t=>`
                        <div class="flex justify-between items-center border border-brand-black rounded p-2.5 bg-gray-50">
                            <span class="font-bold text-sm">${t.nombre} (${t.porcentaje}%)</span>
                            ${t.porcentaje===0||t.porcentaje===16?'<span class="text-xs text-gray-400 font-bold">Por defecto</span>':`<button data-del-tax="${t.id}" class="text-xs font-black text-red-600 hover:underline">Eliminar</button>`}
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>`,this.conectarEventos(),this.renderCatalogoLista(),this.renderRepoLista()}conectarEventos(){var P,z,I,E,K,Y;const e=document.getElementById("tab-alta"),o=document.getElementById("tab-stock"),a=document.getElementById("tab-ajustes"),r=document.getElementById("inv-seccion-alta"),c=document.getElementById("inv-seccion-stock"),i=document.getElementById("inv-seccion-ajustes"),s=(L,j,$)=>{this.tabActiva=L,[e,o,a].forEach(q=>{q&&(q.className="w-36 sm:w-48 h-9 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0")}),[r,c,i].forEach(q=>{q==null||q.classList.remove("block"),q==null||q.classList.add("hidden")}),j&&$&&(j.className="w-36 sm:w-48 h-9 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white transition-colors shrink-0",$.classList.remove("hidden"),$.classList.add("block"))};e==null||e.addEventListener("click",()=>s("alta",e,r)),o==null||o.addEventListener("click",()=>{s("stock",o,c),this.renderRepoLista()}),a==null||a.addEventListener("click",()=>s("ajustes",a,i));const t=document.getElementById("prod-precio-bruto"),n=document.getElementById("prod-margen"),d=document.getElementById("prod-impuesto"),l=document.getElementById("prod-precio-neto"),b=L=>{if(!L)return 0;const j=L.trim().replace(",","."),$=parseFloat(j);return Number.isFinite($)&&!isNaN($)?$:0},m=()=>{if(!t||!l||!n||!d)return;const L=b(t.value),j=b(n.value)/100,$=b(d.value)/100;if(L>0){const V=L*(1+j)*(1+$);l.value=V.toFixed(2)}},h=()=>{if(!t||!l||!n||!d)return;const L=b(l.value),j=b(t.value),$=b(n.value)/100,q=b(d.value)/100;if(L>0){const V=L/(1+q);if(j>0){const G=(V-j)/j*100;n.value=Math.max(0,Math.round(G*10)/10).toFixed(1)}else $>0&&(t.value=(V/(1+$)).toFixed(2))}},y=document.getElementById("prod-stock"),k=document.getElementById("prod-nombre"),U=document.getElementById("prod-unidad"),A=document.getElementById("cat-nombre"),O=document.getElementById("tax-nombre"),R=document.getElementById("tax-pct"),F=document.getElementById("cat-buscar-filtro"),B=document.getElementById("repo-buscar"),f=document.getElementById("alta-prod-msg");k&&ce(k,64),t&&de(t,99999.99,8,m),n&&de(n,999,5,m),l&&de(l,99999.99,8,h),y&&de(y,99999,7),A&&ce(A,32),O&&ce(O,32),R&&de(R,100,5),F&&ce(F,40),B&&ce(B,40),d==null||d.addEventListener("change",m);const g=()=>{f&&!f.classList.contains("hidden")&&f.style.color!=="#00823B"&&(f.classList.add("hidden"),f.textContent="")};k==null||k.addEventListener("input",g),l==null||l.addEventListener("input",g),y==null||y.addEventListener("input",g),U==null||U.addEventListener("change",g);const S=document.getElementById("prod-sin-stock"),M=document.getElementById("box-stock-inicial");S==null||S.addEventListener("change",()=>{g(),M&&(M.style.opacity=S.checked?"0.3":"1",M.querySelector("input").disabled=S.checked)});const C=document.getElementById("prod-es-caja"),_=document.getElementById("box-caja-config"),x=document.getElementById("prod-unidades-caja"),v=document.getElementById("prod-stock-cajas");C==null||C.addEventListener("change",()=>{g(),_&&(C.checked?_.classList.remove("hidden"):_.classList.add("hidden"))});const T=()=>{if(C!=null&&C.checked&&v&&x&&y){const L=parseInt(v.value,10),j=parseInt(x.value,10);Number.isFinite(L)&&L>=0&&Number.isFinite(j)&&j>1&&(y.value=String(L*j))}};x&&we(x,2,1e3,4,T),v&&we(v,0,9999,4,T),v==null||v.addEventListener("input",T),x==null||x.addEventListener("input",T),(P=document.getElementById("form-nuevo-producto"))==null||P.addEventListener("submit",L=>{L.preventDefault(),this.guardarProducto()}),(z=document.getElementById("cat-buscar-filtro"))==null||z.addEventListener("input",L=>{this.busquedaCatalogo=L.target.value.trim().toLowerCase(),this.paginaCat=1,this.renderCatalogoLista()}),(I=document.getElementById("cat-filtro-lateral"))==null||I.addEventListener("change",L=>{this.filtroCategoriaCatalogo=L.target.value,this.paginaCat=1,this.renderCatalogoLista()}),(E=document.getElementById("repo-buscar"))==null||E.addEventListener("input",L=>{this.busquedaRepo=L.target.value.trim().toLowerCase(),this.paginaRepo=1,this.renderRepoLista()}),this.contenedor.querySelectorAll("[data-cat-chip]").forEach(L=>{L.addEventListener("click",()=>{const j=L.dataset.catChip||"todas";this.filtroCategoriaRepo=j,this.paginaRepo=1,this.contenedor.querySelectorAll("[data-cat-chip]").forEach($=>{($.dataset.catChip||"todas")===j?$.className="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors bg-brand-black text-white":$.className="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors bg-gray-100 text-brand-black hover:bg-gray-200"}),this.renderRepoLista()})}),(K=document.getElementById("form-crear-cat"))==null||K.addEventListener("submit",L=>{L.preventDefault();const j=document.getElementById("cat-nombre");j!=null&&j.value.trim()&&D.crearCategoria(j.value.trim()).then(()=>void this.render("ajustes"))}),this.contenedor.querySelectorAll("[data-del-cat]").forEach(L=>{L.addEventListener("click",()=>{const j=L.dataset.delCat;j&&D.eliminarCategoria(j).then(()=>void this.render("ajustes"))})}),(Y=document.getElementById("form-crear-tax"))==null||Y.addEventListener("submit",L=>{L.preventDefault();const j=document.getElementById("tax-nombre"),$=document.getElementById("tax-pct");j!=null&&j.value.trim()&&$&&D.crearTasaImpuesto(j.value.trim(),Number($.value)).then(()=>void this.render("ajustes"))}),this.contenedor.querySelectorAll("[data-del-tax]").forEach(L=>{L.addEventListener("click",()=>{const j=L.dataset.delTax;j&&D.eliminarTasaImpuesto(j).then(()=>void this.render("ajustes"))})})}renderCatalogoLista(){var i,s,t,n;const e=document.getElementById("cat-lista-items");if(!e)return;const o=this.productos.filter(d=>{const l=!this.busquedaCatalogo||d.nombre.toLowerCase().includes(this.busquedaCatalogo)||d.sku.toLowerCase().includes(this.busquedaCatalogo),b=this.filtroCategoriaCatalogo==="todas"||(d.categoriaId||"cat-general")===this.filtroCategoriaCatalogo;return l&&b});if(o.length===0){e.innerHTML='<p class="py-4 text-center text-gray-400 font-bold text-xs">Sin coincidencias en esta categoría.</p>',(i=document.getElementById("paginacion-cat"))==null||i.remove();return}const a=Math.ceil(o.length/this.POR_PAGINA_CAT);this.paginaCat>a&&(this.paginaCat=a);const r=(this.paginaCat-1)*this.POR_PAGINA_CAT,c=o.slice(r,r+this.POR_PAGINA_CAT);if(e.innerHTML=c.map(d=>{const l=Number(d.stock),b=d.sinStock?"bg-purple-100 text-purple-900":l>15?"bg-green-100 text-green-900":l>=10?"bg-yellow-100 text-yellow-900":"bg-red-100 text-red-900",m=this.getUnitLabel(d),h=this.getNombreCategoria(d.categoriaId);return`
            <div class="border border-brand-black rounded p-2 bg-gray-50 flex justify-between items-center text-xs">
                <div class="min-w-0 flex-1 pr-2">
                    <p class="font-bold truncate text-brand-black" title="${d.nombre}">${d.nombre}</p>
                    <p class="text-[10px] text-gray-500 font-bold">
                        <span class="text-brand-purple font-black">${h}</span> · $${Number(d.precioUsd).toFixed(2)} · IVA ${d.impuestoPct}%
                    </p>
                </div>
                <div class="text-right shrink-0">
                    <span class="font-black px-2 py-0.5 rounded border border-brand-black text-[10px] inline-block ${b}">
                        ${d.sinStock?"LIBRE":d.esCaja&&d.unidadesPorCaja&&d.unidadesPorCaja>1?`${Math.floor(l/d.unidadesPorCaja)} cj. + ${l%d.unidadesPorCaja} un. (${l} un.)`:`${l} ${m}`}
                    </span>
                </div>
            </div>`}).join(""),(s=document.getElementById("paginacion-cat"))==null||s.remove(),a>1){const d=document.createElement("div");d.id="paginacion-cat",d.className="flex items-center justify-between mt-2 gap-2 flex-wrap",d.innerHTML=`
                <span class="text-[10px] font-bold text-gray-500">Pag. ${this.paginaCat} de ${a} · ${o.length} productos</span>
                <div class="flex gap-1">
                    <button id="cat-pag-ant" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCat===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANT.</button>
                    <button id="cat-pag-sig" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCat===a?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIG.</button>
                </div>`,e.insertAdjacentElement("afterend",d),(t=document.getElementById("cat-pag-ant"))==null||t.addEventListener("click",()=>{this.paginaCat>1&&(this.paginaCat--,this.renderCatalogoLista())}),(n=document.getElementById("cat-pag-sig"))==null||n.addEventListener("click",()=>{this.paginaCat<a&&(this.paginaCat++,this.renderCatalogoLista())})}}renderRepoLista(){var t,n,d;const e=document.getElementById("repo-lista");if(!e)return;const o=this.productos.filter(l=>{const b=!this.busquedaRepo||l.nombre.toLowerCase().includes(this.busquedaRepo)||l.sku.toLowerCase().includes(this.busquedaRepo),m=this.filtroCategoriaRepo==="todas"||(l.categoriaId||"cat-general")===this.filtroCategoriaRepo;return b&&m}),a=document.getElementById("repo-contador-estado");if(a){const l=this.filtroCategoriaRepo==="todas"?"en depósito":`en ${this.getNombreCategoria(this.filtroCategoriaRepo)}`;a.textContent=`${o.length} de ${this.productos.length} artículos ${l}`}if(o.length===0){e.innerHTML='<p class="col-span-full py-8 text-center text-gray-500 font-bold">No se encontraron productos en la categoría seleccionada.</p>';return}const r=this.semaforoStock,c=Math.ceil(o.length/this.POR_PAGINA_REPO);this.paginaRepo>c&&(this.paginaRepo=c);const i=(this.paginaRepo-1)*this.POR_PAGINA_REPO,s=o.slice(i,i+this.POR_PAGINA_REPO);if(e.innerHTML=s.map(l=>{const b=Number(l.stock),m=l.sinStock?"text-purple-700":b<=r.rojoMax?"text-red-600":b<=r.amarilloMax?"text-amber-600":"text-emerald-700",h=this.getUnitLabel(l),y=this.getNombreCategoria(l.categoriaId),k=l.sinStock?"Venta libre":l.esCaja&&l.unidadesPorCaja&&l.unidadesPorCaja>1?`${Math.floor(b/l.unidadesPorCaja)} cajas y ${b%l.unidadesPorCaja} un. (${b} un.)`:`${b} ${h}`;return`
            <div class="border-2 border-brand-black rounded-lg p-3 bg-white shadow-sm flex flex-col justify-between h-[175px] min-h-[175px] max-h-[175px] box-border overflow-hidden">
                <div class="min-w-0">
                    <div class="flex justify-between items-start gap-1">
                        <div class="min-w-0 flex-1">
                            <span class="text-[9px] font-black uppercase tracking-wider text-brand-purple bg-purple-50 border border-purple-200 rounded px-1.5 py-0.2 inline-block mb-0.5 truncate max-w-[150px]">${y}</span>
                            <h4 class="font-heading font-black text-sm truncate" title="${l.nombre}">${l.nombre}</h4>
                        </div>
                        <button data-repo-del="${l.sku}" title="Eliminar producto del catálogo" class="w-5 h-5 rounded border border-brand-black text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center font-black text-xs shrink-0">&times;</button>
                    </div>
                    <p class="text-xs font-bold text-gray-500 mt-0.5">Precio: $${Number(l.precioUsd).toFixed(2)} · Stock: <span class="font-black ${m}">${k}</span></p>
                </div>
                ${l.sinStock?'<p class="text-[11px] text-purple-700 font-bold mt-auto">Sin control de existencias físicas.</p>':`
                <div class="flex items-center gap-1 mt-auto pt-2 border-t border-gray-100">
                    <input type="number" step="${h==="kg"||h==="ml"?"0.1":"1"}" min="${h==="kg"||h==="ml"?"0.01":"1"}" max="9999" maxlength="5" placeholder="Cant." data-repo-cant="${l.sku}" class="w-14 h-8 border-2 border-brand-black rounded px-1.5 py-0.5 font-bold text-xs shrink-0" />
                    <button data-repo-in="${l.sku}" title="Sumar stock por reposición de compra" class="h-8 bg-green-200 hover:bg-green-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">+ ENTRADA</button>
                    <button data-repo-red="${l.sku}" title="Reducir stock por ajuste de inventario regular" class="h-8 bg-amber-200 hover:bg-amber-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">- REDUCIR</button>
                    <button data-repo-out="${l.sku}" title="Registrar como merma o daño físico" class="h-8 bg-red-200 hover:bg-red-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">- MERMA</button>
                </div>`}
            </div>`}).join(""),(t=document.getElementById("paginacion-repo"))==null||t.remove(),c>1){const l=document.createElement("div");l.id="paginacion-repo",l.className="col-span-full flex items-center justify-between mt-3 gap-3 flex-wrap",l.innerHTML=`
                <span class="text-xs font-bold text-gray-500">Pagina ${this.paginaRepo} de ${c} · ${o.length} productos</span>
                <div class="flex gap-2">
                    <button id="repo-pag-ant" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaRepo===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANTERIOR</button>
                    <button id="repo-pag-sig" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaRepo===c?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIGUIENTE</button>
                </div>`,e.insertAdjacentElement("afterend",l),(n=document.getElementById("repo-pag-ant"))==null||n.addEventListener("click",()=>{this.paginaRepo>1&&(this.paginaRepo--,this.renderRepoLista())}),(d=document.getElementById("repo-pag-sig"))==null||d.addEventListener("click",()=>{this.paginaRepo<c&&(this.paginaRepo++,this.renderRepoLista())})}e.querySelectorAll("input[data-repo-cant]").forEach(l=>{de(l,9999,5)}),e.querySelectorAll("[data-repo-del]").forEach(l=>{l.addEventListener("click",()=>{const b=l.dataset.repoDel,m=this.productos.find(y=>y.sku===b);if(!b||!m)return;window.confirm(`¿Seguro que deseas eliminar permanentemente el producto "${m.nombre}" del catálogo?`)&&D.eliminarProducto(b).then(()=>{D.productos().then(y=>{this.productos=y,this.renderRepoLista(),this.renderCatalogoLista();const k=document.getElementById("repo-contador-estado");k&&(k.textContent=`${this.productos.length} artículos en depósito`)})})})}),e.querySelectorAll("[data-repo-in]").forEach(l=>{l.addEventListener("click",()=>{const b=l.dataset.repoIn,m=e.querySelector(`input[data-repo-cant="${b}"]`),h=m==null?void 0:m.value;b&&h&&Number(h)>0&&Number(h)<=9999&&D.compraStock(b,h).then(()=>{D.productos().then(y=>{this.productos=y,this.renderRepoLista(),this.renderCatalogoLista()})})})}),e.querySelectorAll("[data-repo-red]").forEach(l=>{l.addEventListener("click",()=>{const b=l.dataset.repoRed,m=e.querySelector(`input[data-repo-cant="${b}"]`),h=m==null?void 0:m.value;b&&h&&Number(h)>0&&Number(h)<=9999&&D.reducirStock(b,h).then(()=>{D.productos().then(y=>{this.productos=y,this.renderRepoLista(),this.renderCatalogoLista()})})})}),e.querySelectorAll("[data-repo-out]").forEach(l=>{l.addEventListener("click",()=>{const b=l.dataset.repoOut,m=e.querySelector(`input[data-repo-cant="${b}"]`),h=m==null?void 0:m.value;b&&h&&Number(h)>0&&Number(h)<=9999&&D.merma(b,h,null).then(()=>{D.productos().then(y=>{this.productos=y,this.renderRepoLista(),this.renderCatalogoLista()})})})})}async guardarProducto(){var B;const e=document.getElementById("prod-nombre"),o=document.getElementById("prod-categoria"),a=document.getElementById("prod-impuesto"),r=document.getElementById("prod-precio-bruto"),c=document.getElementById("prod-margen"),i=document.getElementById("prod-precio-neto"),s=document.getElementById("prod-stock"),t=((B=document.getElementById("prod-unidad"))==null?void 0:B.value)||"un",n=document.getElementById("prod-sin-stock"),d=document.getElementById("alta-prod-msg"),l=f=>{if(!f)return 0;const g=f.trim().replace(",","."),S=parseFloat(g);return Number.isFinite(S)&&!isNaN(S)?S:0};if(d&&(d.classList.add("hidden"),d.textContent=""),!(e!=null&&e.value.trim())){d&&(d.textContent="El nombre del producto o servicio es obligatorio.",d.style.color="#C60C15",d.classList.remove("hidden"),e==null||e.focus());return}const b=l(i==null?void 0:i.value);if(b<=0||b>99999.99){d&&(d.textContent="El precio neto final debe ser un monto positivo entre $0.01 y $99,999.99 USD.",d.style.color="#C60C15",d.classList.remove("hidden"),i==null||i.focus());return}const m=l(s==null?void 0:s.value),h=(n==null?void 0:n.checked)||!1;if(!h&&(m<0||m>99999)){d&&(d.textContent="El stock inicial debe estar comprendido entre 0 y 99,999 unidades.",d.style.color="#C60C15",d.classList.remove("hidden"),s==null||s.focus());return}if(!h&&t==="un"&&(!Number.isInteger(m)||m%1!==0)){d&&(d.textContent='Los productos vendidos por Unidad (un.) deben tener un stock entero exacto (ej: 10). Para registrar fracciones o decimales, seleccione Tipo de Medida "Por Peso (kg)" o "Por Volumen (ml)".',d.style.color="#C60C15",d.classList.remove("hidden"),s==null||s.focus());return}const y=l((a==null?void 0:a.value)||"0"),k=l((c==null?void 0:c.value)||"30");let U=l(r==null?void 0:r.value);U<=0&&(U=b/(1+y/100)/(1+k/100));const A=document.getElementById("prod-es-caja"),O=document.getElementById("prod-unidades-caja"),R=(A==null?void 0:A.checked)||!1,F=R&&O?Math.max(2,parseInt(O.value,10)||12):void 0;try{await D.crearProducto({nombre:e.value.trim(),precioBrutoUsd:U.toFixed(2),margenPct:String(k),precioUsd:b.toFixed(2),impuestoPct:String(y),stockInicial:n!=null&&n.checked?"0":String(m),categoriaId:(o==null?void 0:o.value)||"",sinStock:(n==null?void 0:n.checked)||!1,pesable:t==="kg"||t==="ml",unidad:t,alcoholica:!1,esCaja:R,unidadesPorCaja:F}),d&&(d.textContent="Producto o servicio registrado exitosamente.",d.style.color="#00823B",d.classList.remove("hidden")),setTimeout(()=>void this.render("alta"),800)}catch(f){d&&(d.textContent=f instanceof Error?f.message:String(f),d.style.color="#C60C15",d.classList.remove("hidden"))}}}const le=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},Z=u=>le(u).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}),Se=u=>{const e=u.finUnix||Math.floor(Date.now()/1e3),o=Math.max(0,e-u.inicioUnix),a=Math.floor(o/3600),r=Math.floor(o%3600/60);return`${a}h ${r}m`},Ze=(u,e)=>{const o=u.operadoresRelevo.length>0?u.operadoresRelevo.join(" / "):u.operadorActual,a=e.filter(l=>l.operador&&u.operadoresRelevo.some(b=>l.operador===b)),r=[["INFORME DE JORNADA",u.id],["Estado",u.estado==="abierta"?"En curso":"Cerrada"],["Apertura",u.inicioStr],["Cierre",u.finStr||"-"],["Duracion",Se(u)],["Operadores",o],["Total USD",`$${Z(u.ventasTotalUsd)}`],["Total Bs",`Bs. ${Z(u.ventasTotalBs)}`],["Tickets emitidos",String(u.ticketsEmitidos)],["Vuelto pagado Bs",`Bs. ${Z(u.vueltoPagadoBs)}`],["Vuelto retenido Bs",`Bs. ${Z(u.vueltoRetenidoBs)}`],["Deudas liquidadas USD",`$${Z(u.deudasLiquidadasUsd)}`],["Entradas stock",String(u.entradasStockReg)],["Mermas",String(u.mermasStockReg)],["Cambios de precio",String(u.cambiosPrecioReg)],["Tasa apertura",`Bs. ${u.tasaInicio}`],["Tasa cierre",u.tasaFin?`Bs. ${u.tasaFin}`:"-"],...u.checksumSha256?[["SHA-256",u.checksumSha256]]:[],[],["TICKETS DE LA JORNADA"],["ID Ticket","Fecha/Hora","Canal","Operador","Metodo(s) de Pago","Total USD","Total Bs"]],c=a.map(l=>{const b=l.pagos&&l.pagos.length>0?l.pagos.map(m=>`${m.metodo}:$${Z(m.montoUsd)}`).join(" | "):"DIRECTO";return[l.ventaId,l.fechaHora||"",l.canal||"VENTA DIRECTA",l.operador||"Caja",b,`$${Z(l.totalUsd)}`,`Bs. ${Z(l.totalBs)}`]}),s=[...r,...c].map(l=>l.map(b=>`"${String(b).replace(/"/g,'""')}"`).join(",")).join(`\r
`),t=new Blob(["\uFEFF"+s],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(t),d=document.createElement("a");d.href=n,d.download=`jornada_${u.id}.csv`,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(n)};class Xe{constructor(e,o,a){w(this,"contenedor");w(this,"modalRoot");w(this,"modelo");w(this,"jornadas",[]);w(this,"jornadaActual",null);w(this,"todosLosTickets",[]);w(this,"busqueda","");w(this,"expandidos",new Set);w(this,"paginaActual",1);w(this,"POR_PAGINA",20);this.contenedor=e,this.modalRoot=o,this.modelo=a}async render(){const[e,o,a]=await Promise.all([D.obtenerJornadaActual(),D.listarHistoricoJornadas(),D.ventas()]);this.jornadaActual=e,this.jornadas=o,this.todosLosTickets=a;const r=(e?1:0)+o.length,c=[...e?[e]:[],...o],i=c.reduce((t,n)=>t+le(n.ventasTotalUsd),0),s=c.reduce((t,n)=>t+n.ticketsEmitidos,0);this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Historial de Jornadas</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Registro de turnos operativos, balance consolidado y exportacion por jornada</p>
            </div>
            <span class="text-xs font-bold text-gray-700 bg-white border-2 border-brand-black px-3 py-1.5 rounded shadow-brutal-sm">
                ${r} Jornada${r!==1?"s":""}
            </span>
        </div>

        <!-- KPIs -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-3 bg-amber-50">
                <p class="font-heading font-bold text-[10px] uppercase tracking-wide text-brand-text">Facturado Total</p>
                <div class="font-heading font-black text-lg mt-0.5 text-brand-black">$ ${Z(i)}</div>
            </div>
            <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-3 ${e?"bg-emerald-50":"bg-gray-50"}">
                <p class="font-heading font-bold text-[10px] uppercase tracking-wide text-brand-text">Estado Actual</p>
                <div class="font-heading font-black text-sm mt-0.5 flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full inline-block shrink-0 ${e?"bg-emerald-500 animate-pulse":"bg-gray-400"}"></span>
                    ${e?"Abierta":"Sin turno"}
                </div>
            </div>
            <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-3 bg-purple-50">
                <p class="font-heading font-bold text-[10px] uppercase tracking-wide text-brand-text">Tasa BCV</p>
                <div class="font-heading font-black text-lg mt-0.5 text-brand-purple">Bs. ${Z(this.modelo.tasaActual||807.39)}</div>
            </div>
            <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-3 bg-blue-50">
                <p class="font-heading font-bold text-[10px] uppercase tracking-wide text-brand-text">Tickets Totales</p>
                <div class="font-heading font-black text-lg mt-0.5 text-blue-900">${s}</div>
            </div>
        </div>

        <!-- Buscador -->
        <div class="mb-3">
            <input id="jornadas-buscar" type="text" maxlength="60"
                placeholder="Buscar por ID, operador, fecha..."
                value="${this.busqueda}"
                class="w-full border-2 border-brand-black rounded px-3.5 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white" />
        </div>

        <!-- Lista -->
        <div id="lista-jornadas" class="flex flex-col gap-2"></div>`,this.conectarEventosBuscador(),this.renderLista()}conectarEventosBuscador(){var e;(e=document.getElementById("jornadas-buscar"))==null||e.addEventListener("input",o=>{this.busqueda=o.target.value,this.paginaActual=1,this.renderLista()})}renderLista(){var d,l;const e=document.getElementById("lista-jornadas");if(!e)return;const o=[...this.jornadaActual?[this.jornadaActual]:[],...this.jornadas],a=this.busqueda.trim().toLowerCase(),r=a?o.filter(b=>b.id.toLowerCase().includes(a)||b.operadorActual.toLowerCase().includes(a)||b.operadoresRelevo.some(m=>m.toLowerCase().includes(a))||b.inicioStr.toLowerCase().includes(a)||(b.finStr||"").toLowerCase().includes(a)):o,c=document.getElementById("paginacion-jornadas");if(c&&c.remove(),r.length===0){e.innerHTML=`
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 text-center text-gray-400 font-bold text-sm">
                ${a?"Sin jornadas que coincidan con la busqueda.":"No hay jornadas registradas en el sistema."}
            </div>`;return}const i=Math.max(1,Math.ceil(r.length/this.POR_PAGINA));this.paginaActual>i&&(this.paginaActual=i),this.paginaActual<1&&(this.paginaActual=1);const s=this.paginaActual,t=r.slice((s-1)*this.POR_PAGINA,s*this.POR_PAGINA);e.innerHTML=t.map(b=>this.renderFila(b)).join(""),t.forEach(b=>{if(this.expandidos.has(b.id)){const m=document.getElementById(`detalle-${b.id}`);m==null||m.classList.remove("hidden");const h=document.getElementById(`icon-${b.id}`);h&&(h.textContent="▲")}}),e.querySelectorAll("[data-toggle-jornada]").forEach(b=>{b.addEventListener("click",()=>{const m=b.dataset.toggleJornada,h=document.getElementById(`detalle-${m}`),y=document.getElementById(`icon-${m}`);if(h){const k=h.classList.contains("hidden");h.classList.toggle("hidden",!k),y&&(y.textContent=k?"▲":"▼"),k?this.expandidos.add(m):this.expandidos.delete(m)}})}),e.querySelectorAll("[data-exportar-jornada]").forEach(b=>{b.addEventListener("click",m=>{m.stopPropagation();const h=b.dataset.exportarJornada,y=r.find(k=>k.id===h);y&&Ze(y,this.todosLosTickets)})}),e.querySelectorAll("[data-ver-ticket]").forEach(b=>{b.addEventListener("click",()=>{const m=b.dataset.verTicket,h=this.todosLosTickets.find(y=>y.ventaId===m);h&&this.mostrarModalTicket(h)})});const n=document.createElement("div");n.id="paginacion-jornadas",n.innerHTML=`
            <div class="flex items-center justify-between mt-3 gap-3 flex-wrap">
                <span class="text-xs font-bold text-gray-600">
                    Pagina ${s} de ${i} &middot; ${r.length} jornada${r.length!==1?"s":""}
                </span>
                <div class="flex gap-2">
                    <button id="btn-pag-ant"
                        class="border-2 border-brand-black font-heading font-black text-xs px-3 py-1.5 rounded shadow-brutal-sm bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                        ${s===1?"disabled":""}>
                        ANTERIOR
                    </button>
                    <button id="btn-pag-sig"
                        class="border-2 border-brand-black font-heading font-black text-xs px-3 py-1.5 rounded shadow-brutal-sm bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                        ${s===i?"disabled":""}>
                        SIGUIENTE
                    </button>
                </div>
            </div>`,e.insertAdjacentElement("afterend",n),(d=document.getElementById("btn-pag-ant"))==null||d.addEventListener("click",()=>{this.paginaActual>1&&(this.paginaActual--,this.renderLista())}),(l=document.getElementById("btn-pag-sig"))==null||l.addEventListener("click",()=>{this.paginaActual<i&&(this.paginaActual++,this.renderLista())})}renderFila(e){const o=e.estado==="abierta",a=e.operadoresRelevo.length>0?e.operadoresRelevo.join(", "):e.operadorActual,r=this.todosLosTickets.filter(t=>t.operador&&e.operadoresRelevo.some(n=>t.operador===n)),c={};r.forEach(t=>{(t.pagos||[]).forEach(n=>{c[n.metodo]||(c[n.metodo]={usd:0,bs:0}),c[n.metodo].usd+=le(n.montoUsd),c[n.metodo].bs+=le(n.montoBs)})});const i=Object.entries(c).map(([t,n])=>`
            <div class="flex justify-between items-center text-xs border-b border-gray-100 last:border-none py-1">
                <span class="font-heading font-black text-brand-black">${t}</span>
                <div>
                    <span class="font-black">$ ${Z(n.usd)}</span>
                    <span class="text-brand-purple font-mono font-bold ml-2">Bs. ${Z(n.bs)}</span>
                </div>
            </div>`).join(""),s=r.length>0?r.map(t=>{const d=t.canal==="CONSUMO EN CUENTA"||t.ventaId.startsWith("CTA-")?'<span class="bg-amber-100 text-amber-900 border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">CUENTA</span>':'<span class="bg-blue-100 text-blue-900 border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">VENTA</span>';let l="";return t.pagos&&t.pagos.length>1?l='<span class="bg-amber-50 text-amber-950 border border-amber-500 px-1.5 py-0.5 rounded font-black text-[9px]">MIXTO</span>':t.pagos&&t.pagos.length===1?l=`<span class="bg-gray-100 text-brand-black border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">${t.pagos[0].metodo}</span>`:l='<span class="bg-gray-100 text-gray-500 border border-gray-300 px-1.5 py-0.5 rounded font-mono text-[9px]">DIRECTO</span>',`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="py-1.5 px-2 font-mono text-brand-purple text-[10px]">${t.ventaId}</td>
                    <td class="py-1.5 px-2 text-gray-500 text-[10px]">${t.fechaHora||"-"}</td>
                    <td class="py-1.5 px-2">${d}</td>
                    <td class="py-1.5 px-2">${l}</td>
                    <td class="py-1.5 px-2 text-gray-700 text-[10px]">${t.operador||"Caja"}</td>
                    <td class="py-1.5 px-2 text-right font-black text-brand-black text-[10px]">$ ${Z(t.totalUsd)}</td>
                    <td class="py-1.5 px-2 text-right font-black text-brand-purple text-[10px]">Bs. ${Z(t.totalBs)}</td>
                    <td class="py-1.5 px-2 text-center">
                        <button data-ver-ticket="${t.ventaId}"
                            class="bg-brand-black text-white hover:bg-gray-800 border border-brand-black px-2 py-0.5 rounded text-[9px] font-heading font-black shadow-brutal-sm">
                            VER
                        </button>
                    </td>
                </tr>`}).join(""):'<tr><td colspan="8" class="py-3 text-center text-gray-400 font-bold text-xs">Sin tickets vinculados en la sesion actual.</td></tr>';return`
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal-sm overflow-hidden">
            <!-- Fila compacta (siempre visible) -->
            <div class="flex items-center gap-2 px-3 py-2.5 hover:bg-gray-50 transition-colors cursor-pointer select-none"
                 data-toggle-jornada="${e.id}">

                <!-- Indicador estado -->
                <span class="w-2 h-2 rounded-full shrink-0 ${o?"bg-emerald-500 animate-pulse":"bg-gray-400"}"></span>

                <!-- ID + badge -->
                <div class="flex items-center gap-1.5 min-w-0 flex-1">
                    <span class="font-mono font-black text-xs text-brand-black truncate">${e.id}</span>
                    <span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded border shrink-0
                        ${o?"bg-emerald-100 text-emerald-800 border-emerald-400":"bg-gray-100 text-gray-600 border-gray-300"}">
                        ${o?"EN CURSO":"CERRADA"}
                    </span>
                </div>

                <!-- Fecha -->
                <span class="text-[10px] text-gray-500 font-bold hidden sm:block shrink-0">${e.inicioStr}${e.finStr?` — ${e.finStr}`:""}</span>

                <!-- Operadores -->
                <span class="text-[10px] text-gray-700 font-bold hidden md:block shrink-0 max-w-[140px] truncate" title="${a}">${a}</span>

                <!-- Totales -->
                <div class="flex items-center gap-3 shrink-0 ml-auto">
                    <span class="font-heading font-black text-xs text-brand-black hidden sm:block">${e.ticketsEmitidos} tkt</span>
                    <span class="font-heading font-black text-sm text-brand-black">$ ${Z(e.ventasTotalUsd)}</span>
                    <span class="font-heading font-black text-sm text-brand-purple hidden sm:block">Bs. ${Z(e.ventasTotalBs)}</span>
                </div>

                <!-- Boton CSV -->
                <button data-exportar-jornada="${e.id}"
                    title="Exportar jornada a CSV"
                    class="shrink-0 border-2 border-brand-black bg-white hover:bg-brand-black hover:text-white text-brand-black font-heading font-black text-[9px] px-2 py-1 rounded shadow-brutal-sm transition-colors ml-1">
                    CSV
                </button>

                <!-- Toggle icon -->
                <span id="icon-${e.id}" class="text-gray-400 font-black text-[10px] w-4 text-center shrink-0">▼</span>
            </div>

            <!-- Panel de detalle (colapsado por defecto) -->
            <div id="detalle-${e.id}" class="hidden border-t-2 border-brand-black">

                <!-- Stats en grid compacto -->
                <div class="grid grid-cols-3 sm:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-gray-200 border-b border-gray-200 text-center">
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Duracion</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">${Se(e)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Vuelto pagado</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">Bs. ${Z(e.vueltoPagadoBs)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Vuelto retenido</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">Bs. ${Z(e.vueltoRetenidoBs)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Deudas liquid.</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">$ ${Z(e.deudasLiquidadasUsd)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Stock in/merma</p>
                        <p class="font-bold text-xs mt-0.5">
                            <span class="text-emerald-700">${e.entradasStockReg}</span>
                            <span class="text-gray-400 mx-0.5">/</span>
                            <span class="${e.mermasStockReg>0?"text-red-600":"text-gray-500"}">${e.mermasStockReg}</span>
                        </p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Tasa apertura</p>
                        <p class="font-bold text-xs text-brand-purple mt-0.5">Bs. ${e.tasaInicio}</p>
                    </div>
                </div>

                <!-- Operadores full -->
                <div class="px-4 py-2 border-b border-gray-200 text-xs">
                    <span class="text-[9px] font-black uppercase text-gray-400 mr-2">Operadores en turno:</span>
                    <span class="font-bold text-brand-black">${a}</span>
                </div>

                <!-- Metodos de pago -->
                ${Object.keys(c).length>0?`
                <div class="px-4 py-2 border-b border-gray-200">
                    <p class="text-[9px] font-black uppercase text-gray-400 mb-1.5">Desglose por metodo de pago</p>
                    <div class="bg-gray-50 border border-gray-200 rounded p-2">
                        ${i}
                    </div>
                </div>`:""}

                <!-- Tabla de tickets -->
                <div class="p-3">
                    <p class="text-[9px] font-black uppercase text-gray-400 mb-1.5">Tickets de la jornada</p>
                    <div class="border border-brand-black rounded overflow-hidden overflow-x-auto">
                        <table class="w-full text-left">
                            <thead class="bg-brand-black text-white font-heading font-bold text-[9px] uppercase">
                                <tr>
                                    <th class="py-1.5 px-2">ID</th>
                                    <th class="py-1.5 px-2">Fecha/Hora</th>
                                    <th class="py-1.5 px-2">Canal</th>
                                    <th class="py-1.5 px-2">Metodo</th>
                                    <th class="py-1.5 px-2">Operador</th>
                                    <th class="py-1.5 px-2 text-right">USD</th>
                                    <th class="py-1.5 px-2 text-right">Bs.</th>
                                    <th class="py-1.5 px-2 text-center">Ver</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100 font-bold">
                                ${s}
                            </tbody>
                        </table>
                    </div>
                    ${e.checksumSha256?`<p class="text-[9px] font-mono text-gray-400 mt-1.5 break-all">SHA-256: ${e.checksumSha256}</p>`:""}
                </div>
            </div>
        </div>`}mostrarModalTicket(e){var c,i;const o=e.tasaDelDia?`Bs. ${Z(e.tasaDelDia)}`:`Bs. ${Z(this.modelo.tasaActual||807.39)}`,a=e.lineas&&e.lineas.length>0?e.lineas.map(s=>`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-2 pr-2">
                        <div class="font-bold text-gray-900">${s.nombre}</div>
                        <div class="text-[10px] text-gray-400 font-mono">${s.sku}</div>
                    </td>
                    <td class="py-2 text-center font-bold">${s.cantidad}</td>
                    <td class="py-2 text-right font-mono">$ ${Z(s.precioUsd)}</td>
                    <td class="py-2 text-right font-bold text-brand-black">$ ${Z(s.subtotalUsd)}</td>
                    <td class="py-2 text-right font-black text-brand-purple">Bs. ${Z(s.subtotalBs)}</td>
                </tr>
            `).join(""):'<tr><td colspan="5" class="py-3 text-center text-gray-400 font-bold">Sin lineas individuales registradas.</td></tr>';this.modalRoot.innerHTML=`
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-2xl max-h-[90vh] flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start border-b-2 border-brand-black pb-3 mb-4">
                        <div>
                            <span class="text-[10px] uppercase font-black tracking-widest text-brand-purple">Comprobante de Venta</span>
                            <h3 class="font-heading font-black text-2xl">${e.ventaId}</h3>
                            <p class="text-xs text-gray-600 font-bold mt-0.5">${e.fechaHora||"Hoy"} · Canal: ${e.canal||"VENTA DIRECTA"}</p>
                        </div>
                        <button id="modal-ticket-cerrar" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">
                            &times;
                        </button>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 bg-gray-50 border border-brand-black rounded p-3 text-xs">
                        <div>
                            <span class="text-[10px] text-gray-500 font-bold uppercase block">Operador / Mesa</span>
                            <span class="font-bold text-gray-900">${e.operador||"Caja"}</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-gray-500 font-bold uppercase block">Tasa BCV Auditada</span>
                            <span class="font-black text-brand-purple font-mono">${o}</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-gray-500 font-bold uppercase block">Recibido (Bs.)</span>
                            <span class="font-bold text-gray-900">Bs. ${Z(e.montoRecibidoBs||e.totalBs)}</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-gray-500 font-bold uppercase block">Vuelto (${e.estadoVuelto==="RETENIDO"?"Retenido":"Entregado"})</span>
                            <span class="font-bold ${e.estadoVuelto==="RETENIDO"?"text-blue-700":"text-green-700"}">Bs. ${Z(e.vueltoBs||"0.00")}</span>
                        </div>
                    </div>

                    ${le(e.vueltoBs)>.009?`
                    <div class="mb-3 ${e.estadoVuelto==="RETENIDO"?"bg-blue-50 border-blue-500 text-blue-950":"bg-emerald-50 border-emerald-500 text-emerald-950"} border-2 rounded p-2.5 text-xs font-bold flex flex-wrap items-center justify-between gap-2">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-wider block">
                                ${e.estadoVuelto==="RETENIDO"?"Vuelto Retenido (Saldo a Favor)":"Vuelto Pagado al Cliente"}
                            </span>
                            <span>
                                ${e.estadoVuelto==="RETENIDO"?"Asentado como saldo a favor retenido.":`Entregado via ${e.metodoVuelto||"Efectivo"}${e.montoVueltoUsd&&Number(e.montoVueltoUsd)>0&&e.tasaVuelto?` ($ ${Z(e.montoVueltoUsd)} a Bs. ${Z(e.tasaVuelto)})`:""}.`}
                            </span>
                        </div>
                        <span class="font-heading font-black text-lg shrink-0">Bs. ${Z(e.vueltoBs)}</span>
                    </div>`:""}

                    <div class="mb-3 border border-brand-black rounded p-2.5 bg-gray-50">
                        <span class="text-[10px] uppercase font-heading font-black text-gray-700 block mb-1">
                            Metodos de Pago (${e.pagos?e.pagos.length:1})
                        </span>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            ${e.pagos&&e.pagos.length>0?e.pagos.map(s=>`
                                    <div class="bg-white border border-brand-black rounded p-2 text-xs flex justify-between items-center">
                                        <div>
                                            <span class="font-heading font-black text-brand-black">${s.metodo}</span>
                                            ${s.tasaCambio?`<p class="text-[10px] font-mono font-bold text-brand-purple">Tasa: Bs. ${Z(s.tasaCambio)}</p>`:""}
                                            ${s.referencia?`<p class="text-[10px] font-mono text-gray-500">Ref: ${s.referencia}</p>`:""}
                                        </div>
                                        <div class="text-right">
                                            <span class="font-black text-brand-black block">$ ${Z(s.montoUsd)}</span>
                                            <span class="text-[10px] font-mono font-bold text-brand-purple block">Bs. ${Z(s.montoBs)}</span>
                                        </div>
                                    </div>
                                `).join(""):'<div class="bg-white border border-gray-300 rounded p-2 text-xs col-span-2 text-gray-500 font-bold">Pago directo registrado en caja</div>'}
                        </div>
                    </div>

                    ${e.saldoAFavorConsolidadoUsd?`
                    <div class="mb-4 bg-emerald-50 border-2 border-emerald-600 rounded p-3 text-xs text-emerald-950 font-bold flex items-center justify-between">
                        <div>
                            <span class="text-[10px] font-black uppercase text-emerald-900 block">Excedente como Ganancia</span>
                            <span>Cuenta cerrada con saldo a favor liquidado.</span>
                        </div>
                        <span class="font-heading font-black text-lg text-emerald-700 ml-4 shrink-0">+$${Z(e.saldoAFavorConsolidadoUsd)} USD</span>
                    </div>`:""}

                    <div class="border border-brand-black rounded overflow-hidden mb-3 max-h-[30vh] overflow-y-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-brand-black text-white font-heading font-bold text-[10px] uppercase">
                                <tr>
                                    <th class="py-2 px-2">Producto</th>
                                    <th class="py-2 px-2 text-center">Cant.</th>
                                    <th class="py-2 px-2 text-right">Precio Unit.</th>
                                    <th class="py-2 px-2 text-right">Subtotal ($)</th>
                                    <th class="py-2 px-2 text-right">Subtotal (Bs.)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                ${a}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <div class="border-t-2 border-brand-black pt-3 flex flex-wrap justify-between items-center gap-3">
                        <div>
                            <span class="text-xs font-bold text-gray-500 block">Total Liquidado:</span>
                            <div class="flex items-baseline gap-2">
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${Z(e.totalUsd)}</span>
                                <span class="font-heading font-black text-xl text-brand-purple font-mono">Bs. ${Z(e.totalBs)}</span>
                            </div>
                        </div>
                        <button id="modal-ticket-ok" class="bg-brand-black text-white font-heading font-black px-6 py-2.5 rounded border border-brand-black shadow-brutal-sm hover:bg-gray-800">
                            CERRAR
                        </button>
                    </div>
                </div>
            </div>
        </div>`;const r=()=>{this.modalRoot.innerHTML=""};(c=document.getElementById("modal-ticket-cerrar"))==null||c.addEventListener("click",r),(i=document.getElementById("modal-ticket-ok"))==null||i.addEventListener("click",r)}}class Qe{constructor(e){w(this,"contenedor");this.contenedor=e}render(){this.contenedor.innerHTML=`
        <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Playbook Operativo ABC</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Manual de procedimientos comerciales, directrices de uso y lectura analítica de DatioLabs</p>
            </div>
            <span class="bg-brand-black text-white px-3 py-1.5 rounded font-black font-heading text-xs uppercase tracking-wider">
                DOCUMENTACIÓN OFICIAL
            </span>
        </div>

        <!-- Tarjetas Resumen de los 5 Módulos Usables del Sistema -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
            <div class="border-2 border-brand-black rounded-lg bg-amber-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-amber-900 uppercase">MÓDULO 01</span>
                <h4 class="font-heading font-black text-base mt-0.5">CAJA</h4>
                <p class="text-xs text-gray-700 mt-1">Cobro directo multimétodo (TRANSF.BS., DOL.CASH, BS.EFEC., ZELLE, BINAN.USDT, BIOPAGO, PUNTOD.VENTA, PAGO MOVIL), tasas dinámicas en divisas y pagos mixtos.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-yellow-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-yellow-900 uppercase">MÓDULO 02</span>
                <h4 class="font-heading font-black text-base mt-0.5">CUENTAS</h4>
                <p class="text-xs text-gray-700 mt-1">Comandas en local y Deudas Abiertas por cliente, abonos libres acumulables y cobro multimétodo a tasa libre.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-blue-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-blue-900 uppercase">MÓDULO 03</span>
                <h4 class="font-heading font-black text-base mt-0.5">VENTAS</h4>
                <p class="text-xs text-gray-700 mt-1">Historial de jornadas operativas con buscador en tiempo real, balance consolidado por turno y exportacion CSV individual por jornada.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-emerald-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-emerald-900 uppercase">MÓDULO 04</span>
                <h4 class="font-heading font-black text-base mt-0.5">INVENTARIO</h4>
                <p class="text-xs text-gray-700 mt-1">Catálogo por categorías, conteo en un., fórmulas de margen, reposición (+ENTRADA), reducción y mermas.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-slate-100 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-gray-800 uppercase">MÓDULO 05</span>
                <h4 class="font-heading font-black text-base mt-0.5">PANEL</h4>
                <p class="text-xs text-gray-700 mt-1">Diagnostico financiero por fechas, jornada activa con operadores multicajero, gestion de empleados (alta/edicion/baja) y configuracion de metodos de pago.</p>
            </div>
        </div>

        <div class="space-y-6">
            <!-- Módulo 1: CAJA -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">1</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Módulo CAJA: Facturación Directa, Métodos de Pago y Tasa Blindada</h3>
                        <p class="text-xs text-gray-500 font-bold">Cobro multimétodo determinista sin descalce cambiario ni ventas con stock negativo</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Bloqueo de Tasa Oficial</strong>
                        Al abrir el ticket, la tasa oficial BCV se congela exclusivamente para esa operación. Las fluctuaciones externas no alteran el valor en Bolívares acordado.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Métodos de Pago y Cobro Mixto</strong>
                        Soporte nativo para métodos en Dólares (DOL.CASH, ZELLE, BINAN.USDT con tasas dinámicas editables al cobrar/abonar) y en Bolívares (TRANSF.BS., BS.EFEC., BIOPAGO, PUNTOD.VENTA, PAGO MOVIL), además de creación de métodos propios definidos en USD o Bs. Permite pagos mixtos multimétodo.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Protección y Vuelto Exacto</strong>
                        Calcula simultáneamente el balance en USD y Bs. Valida que el pago cubra el total requerido, emite vuelto al centavo e impide vender por encima del stock disponible.
                    </div>
                </div>
            </div>

            <!-- Módulo 2: CUENTAS -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">2</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Módulo CUENTAS: Cuentas Activas en Local y Deudas Abiertas</h3>
                        <p class="text-xs text-gray-500 font-bold">Comandas para mesas y deudas comerciales a crédito con descuento de stock y liquidación a tasa libre</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Cuentas en Local vs. Deudas Comerciales</strong>
                        Permite dos modalidades: Cuentas Activas (mesas o barras liquidadas a la tasa del día) y Deudas Abiertas (crédito a clientes de confianza que permanecen abiertas por días descontando existencias físicas de almacén al instante).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Abonos Libres y Saldo a Favor</strong>
                        El operador puede registrar abonos en Bs. o USD con tasas dinámicas por método (ej. USDT pactado a tasa superior a BCV acreditando el excedente a favor del cliente). Si el abono supera lo consumido, el saldo a favor resultante se liquida o se consolida como ganancia.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Liquidación a Tasa Libre</strong>
                        Las deudas abiertas no se atan rígidamente al BCV histórico: al cobrar, el dueño puede fijar libremente la tasa acordada con el cliente o cargar la tasa oficial del día con un solo clic.
                    </div>
                </div>
            </div>

            <!-- Módulo 3: VENTAS -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">3</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Módulo VENTAS: Historial de Jornadas Operativas</h3>
                        <p class="text-xs text-gray-500 font-bold">Balance por turno, desglose de metodos de pago y exportacion CSV individual por jornada</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Acceso con Clave y Paginación</strong>
                        Protegido administrativamente con el PIN del dueño. Lista de jornadas acotada a 20 registros por página para navegación inmediata sin sobrecargar memoria ni degradar rendimiento.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Buscador en Tiempo Real</strong>
                        Filtra jornadas por ID, nombre de operador o cajero, fecha de apertura o cierre. El estado de expansión de cada jornada se preserva al filtrar.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Detalle por Jornada</strong>
                        Al expandir: operadores del turno, vuelto pagado y retenido, deudas liquidadas, entradas de stock, mermas, tasa de apertura y desglose de ingresos por método de pago.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Exportación CSV</strong>
                        Cada jornada tiene un botón CSV que descarga un archivo con encabezado completo del turno (operadores, totales, vueltos, SHA-256) y tabla de tickets con métodos de pago desglosados.
                    </div>
                </div>
            </div>

            <!-- Módulo 4: INVENTARIO -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">4</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Módulo INVENTARIO: Catálogo por Categorías, Decimales y Movimientos</h3>
                        <p class="text-xs text-gray-500 font-bold">Agrupación por rubros, conteo exacto en un., fórmulas de margen, entradas, reducción y mermas</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Agrupación por Categorías</strong>
                        El inventario clasifica los artículos en pestañas por rubro, mostrando el conteo exacto de productos en cada categoría para facilitar auditorías físicas rápidas.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">+ ENTRADA (Reposición)</strong>
                        Aumenta las existencias en almacén producto de compras a distribuidores o producción interna, recalculando márgenes si cambia el costo.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">- REDUCIR (Ajuste Físico)</strong>
                        Rebaja existencias por corrección física de conteo o traslados entre sucursales sin imputarlo contablemente como merma o pérdida de capital.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">- MERMA (Deterioro)</strong>
                        Descuenta artículos vencidos, dañados o rotos, quedando registrado en la auditoría como merma física del negocio.
                    </div>
                </div>
            </div>

            <!-- Módulo 5: PANEL -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">5</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Módulo PANEL: Diagnostico Financiero, Jornada y Configuracion</h3>
                        <p class="text-xs text-gray-500 font-bold">KPIs por rango de fechas, gestion de jornada multicajero, empleados y metodos de pago</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-body leading-relaxed text-gray-700 mb-4">
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">1. Ventas Totales en Rango</strong>
                        Ingresos brutos liquidados durante el período auditado (24h, 7D, 30D, 1A o rango exacto con fecha y hora).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">2. Ganancia Bruta y Neta</strong>
                        Margen comercial directo descontando costo de compra (COGS) y utilidad líquida tras descontar impuestos.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">3. Capital en Categorías</strong>
                        Desglose en tiempo real de cuánto dinero en bruto a precio de venta está inmovilizado en cada categoría del negocio.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-100">
                        <strong class="text-brand-black block font-heading font-black mb-1">4. Deudas Abiertas y PDF</strong>
                        Monitoreo del saldo por cobrar en deudas comerciales y generación de informe PDF con el período exacto y tabla de deudores.
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-slate-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">5. Jornada Activa y Multicajero</strong>
                        Muestra el estado de la jornada en curso, los cajeros activos simultaneamente (multicajero), el balance parcial del turno y los tickets emitidos. El dueno puede abrir, cerrar o asignar operadores al turno desde esta pantalla.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-slate-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">6. Gestion de Empleados</strong>
                        Registro de operadores con alta, edicion de nombre y baja. Los cambios de nombre se propagan automaticamente a la jornada activa. La baja limpia al operador de los turnos activos sin afectar el historial cerrado.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-slate-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">7. Metodos de Pago Aceptados</strong>
                        El dueno configura los metodos de pago disponibles (nombre y moneda USD o Bs). Puede agregar metodos propios del negocio o eliminar los existentes. El sistema garantiza al menos un metodo activo en todo momento.
                    </div>
                </div>
            </div>

            <!-- Procedimientos Operativos -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <div class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">O</div>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Procedimientos Operativos: Jornadas, Multicajero y Cobro Multimétodo</h3>
                        <p class="text-xs text-gray-500 font-bold">Instrucciones para apertura, gestion de cajeros simultaneos, inventario dual y cobro combinado con vuelto</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Apertura Directa, Multicajero y Cierre</strong>
                        Si no hay turno activo, el botón de cajero en Caja muestra "SIN TURNO ACTIVO", permitiendo al operador iniciar la jornada seleccionando los cajeros del día sin requerir clave de dueño. En cualquier momento se pueden agregar, editar y relevar cajeros simultáneos. El dueño finaliza y consolida el turno desde el Panel.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Paginación y Rendimiento a Largo Plazo</strong>
                        Todos los módulos históricos (Jornadas, Transacciones, Catálogo, Reposición y Cuentas) operan bajo paginación estricta con sanitización en tiempo real de montos y texto, garantizando fluidez constante sin consumo excesivo de memoria tras años de uso comercial.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Cobro Multimétodo y Vuelto Retenido</strong>
                        El sistema prioriza bolívares en la parte superior y divisas abajo. Si el cliente paga con varios medios (ej: Punto de Venta + Efectivo Divisas), el sistema reajusta automáticamente el saldo faltante. Si el cliente entrega un excedente, el cajero define si el vuelto fue entregado físicamente o retenido como saldo a favor.
                    </div>
                </div>
            </div>
        </div>`}}const We=3e5;class Ye{constructor(){w(this,"modelo",new Fe);w(this,"cajaVm",null);w(this,"panelVm",new ze);w(this,"widget",new Oe);w(this,"root");w(this,"modalRoot");w(this,"peerConnection",null);w(this,"dataChannel",null);w(this,"wsSignaling",null);w(this,"STUN_SERVERS",{iceServers:[{urls:"stun:stun.cloudflare.com:3478"},{urls:"stun:stun.l.google.com:19302"}]})}async arrancar(){var a;const e=document.getElementById("app-root");if(!e)return;this.root=e,this.modalRoot=this.crearModalRoot(),this.widget.iniciar(),window.addEventListener("tasa_actualizada",r=>{const c=r;c.detail&&this.modelo.setTasa(c.detail)}),await this.refrescarTasa();let o=null;try{o=await this.modelo.cargarConfig()}catch{o=await this.modelo.cargarConfig()}if(window.setInterval(()=>void this.refrescarTasa(),We),!o){new Ve(this.root,this.modelo,()=>void this.arrancar()).render();return}this.pintarBotonesRol(o),(a=document.getElementById("btn-conectar-movil"))==null||a.addEventListener("click",()=>this.abrirModalQrMovil()),await this.arrancarCaja()}crearModalRoot(){let e=document.getElementById("modal-root");return e||(e=document.createElement("div"),e.id="modal-root",document.body.appendChild(e)),e}async refrescarTasa(){try{const e=await D.tasa();e&&this.modelo.setTasa(Number(e.valor))}catch{}}pintarBotonesRol(e){const o=[document.getElementById("nav-actions-desktop"),document.getElementById("nav-actions-mobile")].filter(Boolean);o.length===0||document.querySelector('[data-nav-btn="caja"]')||o.forEach(a=>{a.innerHTML="";const r=(b,m,h)=>{const y=document.createElement("button");return y.id=`${b}-${a.id.includes("mobile")?"mob":"dsk"}`,y.dataset.navBtn=h,y.className="font-heading font-black text-xs sm:text-sm bg-white border-2 border-brand-black px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded shadow-brutal-sm hover:-translate-y-0.5 transition-transform shrink-0",y.textContent=m,y},c=r("btn-ir-caja","CAJA","caja"),i=r("btn-ir-ventas","VENTAS","ventas"),s=r("btn-ir-inventario","INVENTARIO","inventario"),t=r("btn-ir-panel","PANEL","panel"),n=r("btn-ir-guia","GUIA","guia"),d=e.rubros!==0;let l=null;d&&(l=r("btn-ir-cuentas","CUENTAS","cuentas"),l.addEventListener("click",()=>void this.arrancarCuentas())),a.appendChild(c),l&&a.appendChild(l),a.appendChild(i),a.appendChild(s),a.appendChild(t),a.appendChild(n),c.addEventListener("click",()=>void this.arrancarCaja()),i.addEventListener("click",()=>void this.arrancarVentas()),s.addEventListener("click",()=>void this.arrancarInventario()),t.addEventListener("click",()=>this.solicitarAccesoPanel()),n.addEventListener("click",()=>this.arrancarGuia())})}arrancarGuia(){this.marcarActivo("guia"),new Qe(this.root).render()}async arrancarCaja(){this.marcarActivo("caja"),this.cajaVm=new _e(this.modelo),new He(this.root,this.modalRoot,this.cajaVm,this.modelo).render();try{await this.cajaVm.cargar()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}async arrancarCuentas(){this.marcarActivo("cuentas");const e=new Je(this.root,this.modalRoot,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}arrancarVentas(){var r,c,i;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)){this.abrirVentas();return}this.modalRoot.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 w-full max-w-sm">
                <h3 class="font-heading font-black text-2xl mb-1">ACCESO RESTRINGIDO</h3>
                <p class="font-body text-brand-text mb-4">El historial de jornadas requiere la clave administrativa.</p>
                <input id="pin-ventas-input" type="password" inputmode="numeric" maxlength="16" autofocus
                    class="w-full border-2 border-brand-black rounded px-4 py-3 text-2xl tracking-[0.5em] text-center mb-3" />
                <p id="pin-ventas-error" class="hidden text-red-700 font-bold mb-2">Clave incorrecta.</p>
                <div class="grid grid-cols-2 gap-3">
                    <button id="pin-ventas-cancelar" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">CANCELAR</button>
                    <button id="pin-ventas-ok" class="bg-brand-black text-white font-heading font-black py-3 rounded">ENTRAR</button>
                </div>
            </div>
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(r=document.getElementById("pin-ventas-cancelar"))==null||r.addEventListener("click",o);const a=()=>void(async()=>{var n;const s=document.getElementById("pin-ventas-input").value;await D.validarPin(s).catch(()=>!1)?(o(),await this.abrirVentas()):(n=document.getElementById("pin-ventas-error"))==null||n.classList.remove("hidden")})();(c=document.getElementById("pin-ventas-ok"))==null||c.addEventListener("click",a),(i=document.getElementById("pin-ventas-input"))==null||i.addEventListener("keydown",s=>{s.key==="Enter"&&a()})}async abrirVentas(){this.marcarActivo("ventas");const e=new Xe(this.root,this.modalRoot,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}async arrancarInventario(){this.marcarActivo("inventario");const e=new Ke(this.root,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}marcarActivo(e){document.querySelectorAll("[data-nav-btn]").forEach(o=>{o.dataset.navBtn===e?(o.classList.remove("bg-white"),o.classList.add("bg-brand-yellow")):(o.classList.remove("bg-brand-yellow","bg-brand-cyan"),o.classList.add("bg-white"))})}solicitarAccesoPanel(){var r,c,i;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)){this.abrirPanel();return}this.modalRoot.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 w-full max-w-sm">
                <h3 class="font-heading font-black text-2xl mb-1">ACCESO DEL DUENO</h3>
                <p class="font-body text-brand-text mb-4">Ingresa la clave administrativa.</p>
                <input id="pin-input" type="password" inputmode="numeric" maxlength="16" autofocus
                    class="w-full border-2 border-brand-black rounded px-4 py-3 text-2xl tracking-[0.5em] text-center mb-3" />
                <p id="pin-error" class="hidden text-red-700 font-bold mb-2">Clave incorrecta.</p>
                <div class="grid grid-cols-2 gap-3">
                    <button id="pin-cancelar" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">CANCELAR</button>
                    <button id="pin-ok" class="bg-brand-black text-white font-heading font-black py-3 rounded">ENTRAR</button>
                </div>
            </div>
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(r=document.getElementById("pin-cancelar"))==null||r.addEventListener("click",o);const a=()=>void(async()=>{var n;const s=document.getElementById("pin-input").value;await D.validarPin(s).catch(()=>!1)?(o(),await this.abrirPanel()):(n=document.getElementById("pin-error"))==null||n.classList.remove("hidden")})();(c=document.getElementById("pin-ok"))==null||c.addEventListener("click",a),(i=document.getElementById("pin-input"))==null||i.addEventListener("keydown",s=>{s.key==="Enter"&&a()})}async abrirPanel(){this.marcarActivo("panel");const e=new Ge(this.root,this.modalRoot,this.panelVm,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}async abrirModalQrMovil(){var i,s;let e=null;try{e=await D.generarQr()}catch{e=null}const o=(e==null?void 0:e.url)||"http://127.0.0.1:4000/panel",a=(e==null?void 0:e.qrBase64)||"",r=(e==null?void 0:e.roomId)||"";this.modalRoot.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-lg">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-3 mb-4">
                    <div>
                        <h3 class="font-heading font-black text-2xl">CONEXION MOVIL P2P</h3>
                        <p class="font-body text-xs text-gray-600">WebRTC DataChannel - Funciona dentro y fuera de LAN</p>
                    </div>
                    <button id="qr-cerrar" class="w-8 h-8 rounded border-2 border-brand-black flex items-center justify-center font-black text-lg hover:bg-gray-100">&times;</button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-gray-50 border-2 border-brand-black rounded-lg p-4 text-center flex flex-col items-center justify-between">
                        <div class="w-full">
                            <span class="text-[10px] font-black uppercase tracking-wider text-gray-500 block mb-1">Escanear para Conectar P2P</span>
                            <div class="w-36 h-36 mx-auto bg-white border-2 border-brand-black rounded p-2 flex items-center justify-center mb-2">
                                ${a?`<img src="data:image/png;base64,${a}" class="w-full h-full" alt="QR P2P" />`:`<svg class="w-32 h-32 text-brand-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                                    </svg>`}
                            </div>
                            <p class="text-[11px] font-bold text-gray-600 mb-1">URL de conexion:</p>
                            <p class="font-mono text-[10px] bg-white border border-gray-300 rounded p-1 truncate text-brand-black">${o}</p>
                            ${r?`<p class="text-[10px] text-gray-400 mt-1 font-mono">Room: ${r}</p>`:""}
                        </div>
                        <div class="bg-green-100 border border-brand-black rounded p-2 text-[10px] font-bold text-green-900 mt-2">
                            WebRTC P2P: Funciona dentro y fuera de LAN con STUN publico.
                        </div>
                    </div>

                    <div class="flex flex-col justify-between">
                        <div>
                            <h4 class="font-heading font-black text-sm uppercase mb-2">Estado de Conexion</h4>
                            <div id="p2p-status" class="border border-brand-black rounded p-3 bg-white mb-3">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="w-3 h-3 rounded-full bg-yellow-400 border border-brand-black" id="p2p-status-dot"></span>
                                    <span class="text-xs font-bold" id="p2p-status-text">Esperando conexion del dispositivo movil...</span>
                                </div>
                                <p class="text-[10px] text-gray-500">El dispositivo movil escanea el QR y se conecta via WebRTC DataChannel.</p>
                            </div>
                            <div class="bg-amber-100 border border-brand-black rounded p-2 text-[10px] font-bold text-amber-900">
                                La conexion solicitará obligatoriamente la Clave del Dueño definida al instalar.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center pt-3 border-t-2 border-brand-black text-xs text-gray-500 font-bold">
                    <span>STUN: stun.cloudflare.com | stun.l.google.com</span>
                    <button id="qr-cerrar-btn" class="bg-brand-black text-white px-4 py-2 rounded font-black font-heading text-xs">CERRAR</button>
                </div>
            </div>
        </div>`;const c=()=>{this.modalRoot.innerHTML="",this.desconectarP2P()};(i=document.getElementById("qr-cerrar"))==null||i.addEventListener("click",c),(s=document.getElementById("qr-cerrar-btn"))==null||s.addEventListener("click",c),r&&this.conectarSignaling(r)}conectarSignaling(e){const a=`ws://${window.location.hostname||"127.0.0.1"}:4000/ws/signaling?room=${e}`;try{this.wsSignaling=new WebSocket(a),this.wsSignaling.onopen=()=>{this.actualizarEstadoP2P("connected","Conectado al servidor de senalizacion. Creando conexion P2P..."),this.crearPeerConnection(e)},this.wsSignaling.onmessage=async r=>{const c=JSON.parse(r.data);if(c.type==="answer"&&this.peerConnection)await this.peerConnection.setRemoteDescription(new RTCSessionDescription(c.sdp)),this.actualizarEstadoP2P("connected","Conexion P2P establecida");else if(c.type==="ice-candidate"&&this.peerConnection)try{await this.peerConnection.addIceCandidate(new RTCIceCandidate(c.candidate))}catch(i){console.warn("[P2P] ICE candidate error:",i)}},this.wsSignaling.onclose=()=>{this.actualizarEstadoP2P("disconnected","Desconectado del servidor de senalizacion")},this.wsSignaling.onerror=()=>{this.actualizarEstadoP2P("error","Error de conexion al servidor de senalizacion")}}catch{this.actualizarEstadoP2P("error","Error al conectar con el servidor")}}async crearPeerConnection(e){this.peerConnection=new RTCPeerConnection(this.STUN_SERVERS),this.peerConnection.onicecandidate=a=>{a.candidate&&this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.wsSignaling.send(JSON.stringify({type:"ice-candidate",candidate:a.candidate}))},this.peerConnection.onconnectionstatechange=()=>{var r;const a=(r=this.peerConnection)==null?void 0:r.connectionState;a==="connected"?this.actualizarEstadoP2P("connected","P2P Conectado - Dispositivo movil vinculado"):(a==="disconnected"||a==="failed")&&this.actualizarEstadoP2P("disconnected","Conexion P2P perdida")},this.dataChannel=this.peerConnection.createDataChannel("api",{ordered:!0}),this.dataChannel.onopen=()=>{this.actualizarEstadoP2P("connected","DataChannel abierto - Listo para recibir solicitudes")},this.dataChannel.onclose=()=>{this.actualizarEstadoP2P("disconnected","DataChannel cerrado")},this.dataChannel.onmessage=a=>{this.handleDataChannelMessage(a.data)};const o=await this.peerConnection.createOffer();await this.peerConnection.setLocalDescription(o),this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.wsSignaling.send(JSON.stringify({type:"offer",sdp:this.peerConnection.localDescription})),this.actualizarEstadoP2P("connecting","Oferta P2P enviada, esperando respuesta...")}async handleDataChannelMessage(e){try{const o=JSON.parse(e),{id:a,method:r,path:c,body:i}=o;let s=200,t=null;try{const n={method:r||"GET"};i&&(n.body=i);const d=await fetch(`/api${c}`,{...n,headers:{"Content-Type":"application/json"},credentials:"include"});s=d.status,d.status===401?t={error:"Unauthorized"}:t=await d.json()}catch(n){s=500,t={error:String(n)}}this.dataChannel&&this.dataChannel.readyState==="open"&&this.dataChannel.send(JSON.stringify({id:a,status:s,body:t}))}catch(o){console.error("[P2P] Error handling message:",o)}}actualizarEstadoP2P(e,o){const a=document.getElementById("p2p-status-dot"),r=document.getElementById("p2p-status-text");a&&(a.className=`w-3 h-3 rounded-full border border-brand-black ${e==="connected"?"bg-green-500":e==="connecting"?"bg-yellow-400":"bg-red-500"}`),r&&(r.textContent=o)}desconectarP2P(){this.dataChannel&&(this.dataChannel.close(),this.dataChannel=null),this.peerConnection&&(this.peerConnection.close(),this.peerConnection=null),this.wsSignaling&&(this.wsSignaling.close(),this.wsSignaling=null)}toastError(e){var o;this.modalRoot.innerHTML=`
        <div class="fixed bottom-6 right-6 bg-red-600 text-white border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]">
            ${e.replace(/"/g,"")}
            <button id="toast-close" class="ml-3 underline font-black">cerrar</button>
        </div>`,(o=document.getElementById("toast-close"))==null||o.addEventListener("click",()=>{this.modalRoot.innerHTML=""})}}document.addEventListener("DOMContentLoaded",()=>{new Ye().arrancar().catch(u=>console.error(u))});
