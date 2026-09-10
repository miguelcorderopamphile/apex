var Ie=Object.defineProperty;var De=(u,e,o)=>e in u?Ie(u,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[e]=o;var A=(u,e,o)=>De(u,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}})();const ve=1,Ce=2,Ae=4,$e=8,ae=1,ce=2,re=8,ge=16,ye=32,pe=64,Re=128,Z=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0};class Be extends Error{constructor(e){super(e)}}function Le(){const u=typeof window<"u"?window.location.pathname.toLowerCase():"",e=typeof window<"u"?new URLSearchParams(window.location.search):null,o=u.includes("retail")||(e==null?void 0:e.get("rubro"))==="retail",a=u.includes("panaderia")||(e==null?void 0:e.get("rubro"))==="panaderia";return o?{key:"datiolabs_demo_retail_v3",claveLicencia:"0000888833330000",titular:"DatioLabs Retail Demo",config:{nombre:"DatioLabs Retail",rubros:$e,capacidades:ae|ge|ye|pe|Re,tienePin:!1},productos:[{sku:"SMART-PHONE-X",nombre:"Smartphone X 128GB (Serie/Garantía)",precioBrutoUsd:"180.00",margenPct:"38",precioUsd:"250.00",impuestoPct:"16",stock:"8",capacidades:ae|ge|pe,unidad:"un",categoriaId:"cat-general"},{sku:"AURICULAR-BT",nombre:"Audífonos Inalámbricos Bluetooth Pro",precioBrutoUsd:"14.00",margenPct:"42",precioUsd:"20.00",impuestoPct:"16",stock:"22",capacidades:ae|pe,unidad:"un",categoriaId:"cat-general"},{sku:"CARGADOR-RAPIDO",nombre:"Cargador Rápido 30W Tipo-C",precioBrutoUsd:"5.50",margenPct:"45",precioUsd:"8.00",impuestoPct:"16",stock:"30",capacidades:ae,unidad:"un",categoriaId:"cat-general"},{sku:"CABLE-USB-C",nombre:"Cable Reforzado Tipo-C a Tipo-C 1.5m",precioBrutoUsd:"2.50",margenPct:"60",precioUsd:"4.00",impuestoPct:"16",stock:"45",capacidades:ae,unidad:"un",categoriaId:"cat-general"},{sku:"POWERBANK-20K",nombre:"Batería Portátil PowerBank 20000mAh",precioBrutoUsd:"16.00",margenPct:"40",precioUsd:"22.50",impuestoPct:"16",stock:"12",capacidades:ae|pe,unidad:"un",categoriaId:"cat-general"}]}:a?{key:"datiolabs_demo_panaderia_v3",claveLicencia:"0000888822220000",titular:"DatioLabs Panadería Demo",config:{nombre:"DatioLabs Panadería",rubros:Ce,capacidades:ae|ce,tienePin:!1},productos:[{sku:"PAN-CANILLA",nombre:"Pan Canilla Tradicional",precioBrutoUsd:"0.50",margenPct:"60",precioUsd:"0.80",impuestoPct:"0",stock:"60",capacidades:ae,unidad:"un",categoriaId:"cat-panes"},{sku:"PAN-CAMPESINO",nombre:"Pan Campesino Rústico",precioBrutoUsd:"0.80",margenPct:"50",precioUsd:"1.20",impuestoPct:"0",stock:"35",capacidades:ae,unidad:"un",categoriaId:"cat-panes"},{sku:"PAN-SOBADO",nombre:"Pan Sobado Suave",precioBrutoUsd:"0.65",margenPct:"53",precioUsd:"1.00",impuestoPct:"0",stock:"40",capacidades:ae,unidad:"un",categoriaId:"cat-panes"},{sku:"QUESO-GUAYANES",nombre:"Queso Guayanés Fresco",precioBrutoUsd:"3.20",margenPct:"40",precioUsd:"4.50",impuestoPct:"0",stock:"15.00",capacidades:ce,unidad:"kg",categoriaId:"cat-viveres"},{sku:"CAFE-MOLIDO",nombre:"Café Molido Tostado 250g",precioBrutoUsd:"2.00",margenPct:"50",precioUsd:"3.00",impuestoPct:"0",stock:"25",capacidades:ae,unidad:"un",categoriaId:"cat-viveres"}]}:{key:"datiolabs_demo_licoreria_v3",claveLicencia:"0000888811110000",titular:"DatioLabs Licorería Demo",config:{nombre:"DatioLabs Licorería",rubros:Ae,capacidades:ae|re,tienePin:!1},productos:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",precioBrutoUsd:"13.50",margenPct:"33",precioUsd:"18.00",impuestoPct:"16",stock:"12",capacidades:ae|re,unidad:"un",categoriaId:"cat-bebidas"},{sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",precioBrutoUsd:"8.80",margenPct:"36",precioUsd:"12.00",impuestoPct:"16",stock:"16",capacidades:ae|re,unidad:"un",categoriaId:"cat-bebidas"},{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",precioBrutoUsd:"3.30",margenPct:"36",precioUsd:"4.50",impuestoPct:"16",stock:"30",capacidades:ae|re,unidad:"un",categoriaId:"cat-bebidas"},{sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",precioBrutoUsd:"16.50",margenPct:"33",precioUsd:"22.00",impuestoPct:"16",stock:"8",capacidades:ae|re,unidad:"un",categoriaId:"cat-bebidas"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",precioBrutoUsd:"1.20",margenPct:"50",precioUsd:"1.80",impuestoPct:"16",stock:"24",capacidades:ae|re,unidad:"un",categoriaId:"cat-bebidas"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",precioBrutoUsd:"0.60",margenPct:"66",precioUsd:"1.00",impuestoPct:"16",stock:"40",capacidades:ae|re,unidad:"un",categoriaId:"cat-viveres"}]}}class Ne{constructor(){A(this,"config");A(this,"productos");A(this,"cuentas",[{ventaId:"CTA-88210",etiqueta:"Mesa 4 (Terraza)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-7200,fechaCreacionStr:"Hoy, 02:00 PM",lineas:2,totalParcialUsd:"10.00",totalParcialBs:"8073.90",abonosUsd:"5.00",abonosBs:"4036.95",consumos:[{id:"con-m4-1",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-m4-2",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]},{ventaId:"CTA-88211",etiqueta:"Barra Principal (Carlos)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-3600,fechaCreacionStr:"Hoy, 03:00 PM",lineas:2,totalParcialUsd:"19.80",totalParcialBs:"15986.32",abonosUsd:"25.00",abonosBs:"20184.75",consumos:[{id:"con-bp-1",sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:1,precioUsd:"18.00",subtotalUsd:"18.00"},{id:"con-bp-2",sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:1,precioUsd:"1.80",subtotalUsd:"1.80"}]},{ventaId:"CTA-88212",etiqueta:"Mesa 1 (VIP)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-1800,fechaCreacionStr:"Hoy, 03:30 PM",lineas:1,totalParcialUsd:"22.00",totalParcialBs:"17762.58",abonosUsd:"0.00",abonosBs:"0.00",consumos:[{id:"con-m1-1",sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",cantidad:1,precioUsd:"22.00",subtotalUsd:"22.00"}]},{ventaId:"DEU-99042",etiqueta:"Taller Hermanos Gómez",cliente:"Carlos Gómez (Taller)",nota:"Crédito comercial acordado a cobrar en días",tipo:"deuda",fechaCreacionUnix:Math.floor(Date.now()/1e3)-86400*3,fechaCreacionStr:"01/09/2026 10:30",lineas:3,totalParcialUsd:"34.00",totalParcialBs:"27451.26",abonosUsd:"10.00",abonosBs:"8073.90",consumos:[{id:"con-d1",sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:2,precioUsd:"12.00",subtotalUsd:"24.00"},{id:"con-d2",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-d3",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]}]);A(this,"categorias",[{id:"cat-general",nombre:"General"},{id:"cat-viveres",nombre:"Víveres"},{id:"cat-bebidas",nombre:"Bebidas y Licores"},{id:"cat-panes",nombre:"Panes y Horneados"}]);A(this,"tasasImpuestos",[{id:"iva-16",nombre:"IVA General (16%)",porcentaje:"16"},{id:"iva-8",nombre:"IVA Reducido (8%)",porcentaje:"8"},{id:"iva-0",nombre:"Exento (0%)",porcentaje:"0"}]);A(this,"tasaActual",{valor:"807.39",fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:null,direccion:null});A(this,"tickets",[{ventaId:"TRX-94812",totalUsd:"23.80",totalBs:"19215.88",tasaDelDia:"807.39",montoRecibidoBs:"20000.00",vueltoBs:"784.12",fechaHora:"Hoy, 01:24 PM",fechaUnix:Math.floor(Date.now()/1e3)-3600,canal:"VENTA DIRECTA",operador:"Caja Principal",pagos:[{metodo:"PAGO MOVIL",montoUsd:"23.80",montoBs:"19215.88",referencia:"REF-7892"}],lineas:[{sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:"1",precioUsd:"12.00",tasaBloqueada:"807.39",subtotalUsd:"12.00",subtotalBs:"9688.68"},{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:"2",precioUsd:"4.50",tasaBloqueada:"807.39",subtotalUsd:"9.00",subtotalBs:"7266.51"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:"1",precioUsd:"1.00",tasaBloqueada:"807.39",subtotalUsd:"1.00",subtotalBs:"807.39"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:"1",precioUsd:"1.80",tasaBloqueada:"807.39",subtotalUsd:"1.80",subtotalBs:"1453.30"}]},{ventaId:"CTA-78104",totalUsd:"40.00",totalBs:"32295.60",tasaDelDia:"807.39",montoRecibidoBs:"35000.00",vueltoBs:"2704.40",fechaHora:"Hoy, 12:50 PM",fechaUnix:Math.floor(Date.now()/1e3)-7200,canal:"CONSUMO EN CUENTA",operador:"Mesa 4 / Mostrador",pagos:[{metodo:"DOL.CASH",moneda:"USD",montoUsd:"20.00",montoBs:"16147.80",tasaCambio:"807.39"},{metodo:"PUNTOD.VENTA",moneda:"BS",montoUsd:"20.00",montoBs:"16147.80",referencia:"LOTE-112"}],lineas:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:"1",precioUsd:"18.00",tasaBloqueada:"807.39",subtotalUsd:"18.00",subtotalBs:"14533.02"},{sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",cantidad:"1",precioUsd:"22.00",tasaBloqueada:"807.39",subtotalUsd:"22.00",subtotalBs:"17762.58"}]},{ventaId:"TRX-94811",totalUsd:"13.60",totalBs:"10980.50",tasaDelDia:"807.39",montoRecibidoBs:"11000.00",vueltoBs:"19.50",fechaHora:"Hoy, 11:35 AM",fechaUnix:Math.floor(Date.now()/1e3)-10800,canal:"VENTA DIRECTA",operador:"Caja Principal",pagos:[{metodo:"BS.EFEC.",moneda:"BS",montoUsd:"13.60",montoBs:"10980.50"}],lineas:[{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:"2",precioUsd:"4.50",tasaBloqueada:"807.39",subtotalUsd:"9.00",subtotalBs:"7266.51"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:"2",precioUsd:"1.80",tasaBloqueada:"807.39",subtotalUsd:"3.60",subtotalBs:"2906.60"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:"1",precioUsd:"1.00",tasaBloqueada:"807.39",subtotalUsd:"1.00",subtotalBs:"807.39"}]},{ventaId:"CTA-78103",totalUsd:"18.00",totalBs:"14533.02",tasaDelDia:"807.39",montoRecibidoBs:"15000.00",vueltoBs:"466.98",fechaHora:"Hoy, 10:15 AM",fechaUnix:Math.floor(Date.now()/1e3)-14400,canal:"CONSUMO EN CUENTA",operador:"Barra Principal",pagos:[{metodo:"ZELLE",moneda:"USD",montoUsd:"18.00",montoBs:"14533.02",tasaCambio:"807.39",referencia:"ZEL-5501"}],lineas:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:"1",precioUsd:"18.00",tasaBloqueada:"807.39",subtotalUsd:"18.00",subtotalBs:"14533.02"}]}]);A(this,"ventasTotalUsd",95.4);A(this,"ventasTotalBs",77025);A(this,"metodosPago",[{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]);A(this,"dispositivos",[{id:"dev-1",nombre:"iPhone 15 Pro (Dueño)",ip:"192.168.1.45",ultimoAcceso:"Hace 5 min",activo:!0},{id:"dev-2",nombre:"Tablet Mostrador 1",ip:"192.168.1.80",ultimoAcceso:"Hace 12 min",activo:!0}]);A(this,"respaldos",[{id:"bk-1",fecha:"Hoy, 06:00 PM",archivoNombre:"DATO-DEMO-20260903-180000.backup",registros:412,tamanoKb:124,checksumSha256:"9f83a21b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f"},{id:"bk-2",fecha:"Ayer, 11:30 PM",archivoNombre:"DATO-DEMO-20260902-233000.backup",registros:395,tamanoKb:118,checksumSha256:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"}]);A(this,"licencia",{estado:"activa",tipo:"Enterprise Standalone Local",claveLicencia:"0000888811110000",titular:"Empresa DatioLabs Cliente Comercial",validez:"Perpetua (Sin caducidad / Portabilidad Total)"});A(this,"operadores",[{id:"op-1",nombre:"Carlos Mendoza",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*30},{id:"op-2",nombre:"María Andrea Silva",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*15},{id:"op-3",nombre:"José Gregorio Páez",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*5}]);A(this,"jornadaActual",{id:"JOR-20260908-01",estado:"abierta",inicioUnix:Math.floor(Date.now()/1e3)-14400,inicioStr:"Hoy, 08:30 AM",operadorInicial:"Carlos Mendoza",operadorActual:"Carlos Mendoza",operadoresActivos:["Carlos Mendoza"],operadoresRelevo:["Carlos Mendoza"],tasaInicio:"807.39",ventasTotalUsd:"95.40",ventasTotalBs:"77025.00",ticketsEmitidos:6,vueltoPagadoBs:"1450.00",vueltoRetenidoBs:"784.12",deudasLiquidadasUsd:"34.00",entradasStockReg:2,mermasStockReg:0,cambiosPrecioReg:0});A(this,"historicoJornadas",[{id:"JOR-20260907-01",estado:"cerrada",inicioUnix:Math.floor(Date.now()/1e3)-86400-28800,finUnix:Math.floor(Date.now()/1e3)-86400,inicioStr:"Ayer, 08:00 AM",finStr:"Ayer, 09:30 PM",operadorInicial:"María Andrea Silva",operadorActual:"Carlos Mendoza",operadoresRelevo:["María Andrea Silva","Carlos Mendoza"],tasaInicio:"805.20",tasaFin:"807.39",ventasTotalUsd:"340.50",ventasTotalBs:"274889.70",ticketsEmitidos:24,vueltoPagadoBs:"4520.00",vueltoRetenidoBs:"1200.00",deudasLiquidadasUsd:"68.00",entradasStockReg:4,mermasStockReg:1,cambiosPrecioReg:1,checksumSha256:"a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0"}]);A(this,"semaforoStock",{rojoMax:5,amarilloMax:15});A(this,"dedupVentas",{});A(this,"historicoTasas",[{id:"tx-1",valor:"807.3900",fechaHora:"Hoy, 04:00 PM",tipo:"automático",motivo:"Sondeo oficial BCV"},{id:"tx-2",valor:"805.2000",fechaHora:"Hoy, 09:00 AM",tipo:"automático",motivo:"Apertura de jornada"},{id:"tx-3",valor:"802.1500",fechaHora:"Ayer, 05:00 PM",tipo:"automático",motivo:"Cierre BCV"}]);A(this,"pinDueno","");A(this,"storageKey");const e=Le();this.storageKey=e.key,this.config=e.config,this.productos=e.productos,this.licencia.claveLicencia=e.claveLicencia,this.licencia.titular=e.titular;try{["datiolabs_demo_licoreria_db","datiolabs_demo_panaderia_db","datiolabs_demo_retail_db","datiolabs_demo_licoreria_v2"].forEach(a=>{try{localStorage.removeItem(a)}catch{}});const o=localStorage.getItem(this.storageKey);if(o){const a=JSON.parse(o);if(a.productos&&Array.isArray(a.productos)&&(this.productos=a.productos.map(n=>{const c=e.productos.find(d=>d.sku===n.sku),i=String(n.unidad||(c==null?void 0:c.unidad)||"").toLowerCase(),b=i==="kg"?"kg":i==="ml"?"ml":"un",t=n.categoriaId&&n.categoriaId.trim()?n.categoriaId:(c==null?void 0:c.categoriaId)||"cat-general",r=Number(n.precioUsd)||0,s=n.precioBrutoUsd&&Number(n.precioBrutoUsd)>0?n.precioBrutoUsd:(c==null?void 0:c.precioBrutoUsd)||(r*.65).toFixed(2);return{...n,unidad:b,categoriaId:t,precioBrutoUsd:s}})),a.cuentas&&Array.isArray(a.cuentas)&&a.cuentas.length>0&&(this.cuentas=a.cuentas.map(n=>(Array.isArray(n.consumos)||(n.consumos=[]),n.abonosUsd===void 0&&(n.abonosUsd="0.00"),n.abonosBs===void 0&&(n.abonosBs="0.00"),n.tipo||(n.tipo=n.etiqueta.toLowerCase().includes("taller")||n.etiqueta.toLowerCase().includes("deuda")?"deuda":"activa"),n.fechaCreacionUnix||(n.fechaCreacionUnix=n.tipo==="deuda"?Math.floor(Date.now()/1e3)-86400*3:Math.floor(Date.now()/1e3)-3600),n.fechaCreacionStr||(n.fechaCreacionStr=n.tipo==="deuda"?"01/09/2026 10:30":"Hoy"),n.consumos.length===0&&Z(n.totalParcialUsd)>0&&n.consumos.push({id:"con-"+Math.random().toString(36).slice(2,8),sku:"CONSUMO-PREV",nombre:"Consumos acumulados",cantidad:1,precioUsd:String(n.totalParcialUsd),subtotalUsd:String(n.totalParcialUsd)}),n.lineas=n.consumos.length,n)),this.cuentas.some(n=>n.tipo==="deuda")||this.cuentas.push({ventaId:"DEU-99042",etiqueta:"Taller Hermanos Gómez",cliente:"Carlos Gómez (Taller)",nota:"Crédito comercial convenido a pagar en días",tipo:"deuda",fechaCreacionUnix:Math.floor(Date.now()/1e3)-86400*3,fechaCreacionStr:"01/09/2026 10:30",lineas:3,totalParcialUsd:"34.00",totalParcialBs:(34*Z(this.tasaActual.valor)).toFixed(2),abonosUsd:"10.00",abonosBs:(10*Z(this.tasaActual.valor)).toFixed(2),consumos:[{id:"con-d1",sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:2,precioUsd:"12.00",subtotalUsd:"24.00"},{id:"con-d2",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-d3",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]})),a.metodosPago&&Array.isArray(a.metodosPago)){const n=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}],c=[],i=new Set,b=t=>{let r="",s="BS";if(typeof t=="string")r=t.trim().toUpperCase(),r==="DOLAR.EFEC."&&(r="DOL.CASH"),r==="USDT BINAN."&&(r="BINAN.USDT"),["DOL.CASH","ZELLE","BINAN.USDT"].includes(r)&&(s="USD");else if(t&&typeof t=="object"&&"nombre"in t){const d=t;r=String(d.nombre||"").trim().toUpperCase(),r==="DOLAR.EFEC."&&(r="DOL.CASH"),r==="USDT BINAN."&&(r="BINAN.USDT"),s=d.moneda==="USD"||["DOL.CASH","ZELLE","BINAN.USDT"].includes(r)?"USD":"BS"}r&&!i.has(r)&&(i.add(r),c.push({nombre:r,moneda:s}))};n.forEach(b),a.metodosPago.forEach(b),c.sort((t,r)=>t.moneda===r.moneda?0:t.moneda==="BS"?-1:1),this.metodosPago=c}else this.metodosPago.sort((n,c)=>n.moneda===c.moneda?0:n.moneda==="BS"?-1:1);a.operadores&&Array.isArray(a.operadores)&&(this.operadores=a.operadores),a.jornadaActual!==void 0&&(this.jornadaActual=a.jornadaActual),a.historicoJornadas&&Array.isArray(a.historicoJornadas)&&(this.historicoJornadas=a.historicoJornadas),a.semaforoStock&&(this.semaforoStock=a.semaforoStock),a.categorias&&(this.categorias=a.categorias),a.tasasImpuestos&&(this.tasasImpuestos=a.tasasImpuestos),a.tasaActual&&(this.tasaActual=a.tasaActual),a.dispositivos&&(this.dispositivos=a.dispositivos),a.respaldos&&(this.respaldos=a.respaldos),a.historicoTasas&&(this.historicoTasas=a.historicoTasas),a.tickets&&Array.isArray(a.tickets)&&a.tickets.length>0&&(this.tickets=a.tickets),a.ventasTotalUsd!==void 0&&(this.ventasTotalUsd=Number(a.ventasTotalUsd)),a.ventasTotalBs!==void 0&&(this.ventasTotalBs=Number(a.ventasTotalBs)),a.pinDueno!==void 0&&(this.pinDueno=a.pinDueno),this.config&&this.pinDueno&&(this.config.tienePin=!0)}}catch{}this.refrescarTasaEnVivo()}async refrescarTasaEnVivo(){try{const e=await fetch("https://ve.dolarapi.com/v1/dolares/oficial");if(e.ok){const o=await e.json(),a=Number(o.promedio);if(Number.isFinite(a)&&a>0){const n=Number(this.tasaActual.valor);let c=null,i=null;if(Number.isFinite(n)&&n>0&&n!==a){const r=(a-n)/n*100;c=Math.abs(r).toFixed(2),i=r>0?"subio":"bajo"}this.tasaActual={valor:a.toFixed(4),fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:c,direccion:i};const t=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});this.historicoTasas.unshift({id:"tx-"+Math.random().toString(36).slice(2,7),valor:a.toFixed(4),fechaHora:`Hoy, ${t}`,tipo:"automático",motivo:"Sincronización BCV en vivo"}),this.historicoTasas.length>50&&this.historicoTasas.pop(),this.persist(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("tasa_actualizada",{detail:a}))}}}catch{}}persist(){try{localStorage.setItem(this.storageKey,JSON.stringify({productos:this.productos,cuentas:this.cuentas,categorias:this.categorias,tasasImpuestos:this.tasasImpuestos,tasaActual:this.tasaActual,dispositivos:this.dispositivos,respaldos:this.respaldos,historicoTasas:this.historicoTasas,tickets:this.tickets,ventasTotalUsd:this.ventasTotalUsd,ventasTotalBs:this.ventasTotalBs,pinDueno:this.pinDueno,metodosPago:this.metodosPago,operadores:this.operadores,jornadaActual:this.jornadaActual,historicoJornadas:this.historicoJornadas,semaforoStock:this.semaforoStock}))}catch{}}}const p=new Ne,je={crear_respaldo:{method:"POST",path:"/api/respaldos"},listar_respaldos:{method:"GET",path:"/api/respaldos"},restaurar_desde_respaldo:{method:"POST",path:"/api/respaldos/restaurar",body:!0},restaurar_desde_archivo:{method:"POST",path:"/api/respaldos/restaurar",body:!0},obtener_config:{method:"GET",path:"/api/config"},obtener_tasa_bcv:{method:"GET",path:"/api/tasa"},listar_productos:{method:"GET",path:"/api/productos"},listar_categorias:{method:"GET",path:"/api/categorias"},panel:{method:"GET",path:"/api/panel"},listar_ventas:{method:"GET",path:"/api/ventas"},listar_cuentas:{method:"GET",path:"/api/cuentas"},obtener_jornada_actual:{method:"GET",path:"/api/jornadas/actual"},listar_historico_jornadas:{method:"GET",path:"/api/jornadas"},listar_dispositivos:{method:"GET",path:"/api/dispositivos"},listar_metodos_pago:{method:"GET",path:"/api/metodos-pago"},listar_operadores:{method:"GET",path:"/api/operadores"},listar_historico_tasas:{method:"GET",path:"/api/historico-tasas"},obtener_semaforo_stock:{method:"GET",path:"/api/semaforo"}};async function V(u,e){var i;const o=window.__TAURI__,a=(i=o==null?void 0:o.core)==null?void 0:i.invoke;if(a)try{return await a(u,e)}catch(b){throw new Be(typeof b=="string"?b:JSON.stringify(b))}const n=window.__DATACHANNEL__;if(n&&n.readyState==="open"){const b=await Me(n,u,e).catch(()=>null);if(b!==null)return b}const c=await qe(u,e).catch(()=>null);return c!==null?c:_e(u,e)}let Oe=0;const me=new Map;function Me(u,e,o){return new Promise((a,n)=>{const c=`dc-${++Oe}-${Date.now()}`,i=setTimeout(()=>{me.delete(c),n(new Error("DataChannel timeout"))},15e3);me.set(c,{resolve:a,reject:n,timer:i}),window.__P2P_PENDING__=me;try{u.send(JSON.stringify({id:c,comando:e,args:o}))}catch(b){clearTimeout(i),me.delete(c),n(b instanceof Error?b:new Error(String(b)))}})}async function qe(u,e){const o=je[u];if(!o)return null;const a={method:o.method,headers:{"Content-Type":"application/json"}};o.body&&e&&(u==="restaurar_desde_archivo"?a.body=JSON.stringify({contenido_base64:e.contenidoBase64,nombre_archivo:e.nombreArchivo}):a.body=JSON.stringify(e));const n=await fetch(o.path,a);if(!n.ok)throw new Be(`HTTP ${n.status}`);return await n.json()}function _e(u,e){var o,a,n,c,i,b;switch(u){case"obtener_config":return Promise.resolve(p.config);case"inicializar_negocio":{const t=e!=null&&e.pinDueno?String(e.pinDueno).trim():"",r=e!=null&&e.licenciaClave?String(e.licenciaClave).trim():"";return p.pinDueno=t,p.config={nombre:String((e==null?void 0:e.nombre)||"Mi Negocio Demo"),rubros:Number((e==null?void 0:e.rubros)||15),capacidades:ae|ce|re|ge|ye,tienePin:t.length>0,licenciaEstado:r?"activa":"demo",licenciaTitular:r?"Empresa DatioLabs":"",privacidadInventario:!!(e!=null&&e.privacidadInventario)},p.licencia.claveLicencia=r||"0000888811110000",p.licencia.estado=r?"activa":"demo",p.licencia.titular=r?"Empresa DatioLabs":"DatioLabs Demo",p.persist(),Promise.resolve(void 0)}case"validar_pin_dueno":{const t=String((e==null?void 0:e.pin)||"").trim();return p.pinDueno?Promise.resolve(t===p.pinDueno):Promise.resolve(!0)}case"cambiar_pin_dueno":{const t=String((e==null?void 0:e.pinAnterior)||"").trim(),r=String((e==null?void 0:e.pinNuevo)||"").trim();return p.pinDueno&&t!==p.pinDueno?Promise.reject(new Error("La clave anterior no coincide.")):(p.pinDueno=r,p.config&&(p.config.tienePin=r.length>0),p.persist(),Promise.resolve(!0))}case"listar_productos":return Promise.resolve(p.productos);case"crear_producto":{const t=e==null?void 0:e.input,r=String((t==null?void 0:t.unidad)||"").toLowerCase(),s=r==="kg"?"kg":r==="ml"?"ml":t!=null&&t.pesable?"kg":"un",d=!!(t!=null&&t.esCaja),l=Number(t==null?void 0:t.unidadesPorCaja)>1?Math.floor(Number(t.unidadesPorCaja)):void 0,m=String((t==null?void 0:t.stockInicial)||"0"),f={sku:String((t==null?void 0:t.sku)||"").toUpperCase(),nombre:String((t==null?void 0:t.nombre)||""),precioBrutoUsd:String((t==null?void 0:t.precioBrutoUsd)||"0"),margenPct:String((t==null?void 0:t.margenPct)||"0"),precioUsd:String((t==null?void 0:t.precioUsd)||"0"),impuestoPct:String((t==null?void 0:t.impuestoPct)||"0"),stock:m,capacidades:ae|(s==="kg"||s==="ml"||t!=null&&t.pesable?ce:0),categoriaId:String((t==null?void 0:t.categoriaId)||""),sinStock:!!(t!=null&&t.sinStock),unidad:s,esCaja:d,unidadesPorCaja:l,precioPaqueteUsd:t!=null&&t.precioPaqueteUsd?String(t.precioPaqueteUsd):void 0,nombrePaquete:t!=null&&t.nombrePaquete?String(t.nombrePaquete):void 0};return p.productos.push(f),p.persist(),Promise.resolve(void 0)}case"eliminar_producto":{const t=String((e==null?void 0:e.sku)||"").toUpperCase();return p.productos=p.productos.filter(r=>r.sku!==t),p.persist(),Promise.resolve(void 0)}case"registrar_venta":{const t=e==null?void 0:e.items,r=e==null?void 0:e.idempotencyKey,s=Number((e==null?void 0:e.montoRecibidoBs)||"0");if(r&&((o=p.dedupVentas)!=null&&o[r])){const D=p.dedupVentas[r],C=p.tickets.find(G=>G.ventaId===D);if(C)return Promise.resolve(C)}let d=0;const l=Number(p.tasaActual.valor);t.forEach(D=>{const C=p.productos.find(G=>G.sku===D.sku);if(C){const G=Number(D.cantidad),z=(D.modo_venta||"unidad")==="paquete"&&(C.precioPaqueteUsd||C.esCaja&&C.unidadesPorCaja&&C.unidadesPorCaja>1),B=z&&C.unidadesPorCaja||1,N=z?C.precioPaqueteUsd?Number(C.precioPaqueteUsd):Number(C.precioUsd)*B:Number(C.precioUsd);d+=N*G,C.stock=String(Math.max(0,Number(C.stock)-B*G))}});const m=d*l,f=Math.max(0,s-m);p.ventasTotalUsd+=d,p.ventasTotalBs+=m;const h=new Date,g=h.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),E=Array.isArray(e==null?void 0:e.pagos)&&e.pagos.length>0?e.pagos:[{metodo:s>0?"BS.EFEC.":"DOL.CASH",moneda:s>0?"BS":"USD",montoUsd:d.toFixed(2),montoBs:m.toFixed(2)}],w=e==null?void 0:e.resolucionVuelto,P=f>.009?(w==null?void 0:w.estado)||"PAGADO":"SIN_VUELTO",T=P==="PAGADO"?(w==null?void 0:w.metodo)||"BS.EFEC.":void 0,j=f>.009?(w==null?void 0:w.montoBs)||f.toFixed(2):void 0,x=f>.009?(w==null?void 0:w.montoUsd)||(l>0?(f/l).toFixed(2):"0.00"):void 0,v=P==="PAGADO"?w==null?void 0:w.tasa:void 0,y=((a=p.jornadaActual)==null?void 0:a.operadorActual)||"Caja Principal",U={ventaId:"TRX-"+Math.floor(1e4+Math.random()*9e4),totalUsd:d.toFixed(2),totalBs:m.toFixed(2),tasaDelDia:l.toFixed(2),montoRecibidoBs:s.toFixed(2),vueltoBs:f.toFixed(2),fechaHora:`Hoy, ${g}`,fechaUnix:Math.floor(h.getTime()/1e3),canal:"VENTA DIRECTA",operador:y,pagos:E,estadoVuelto:P,metodoVuelto:T,montoVueltoBs:j,montoVueltoUsd:x,tasaVuelto:v,lineas:t.map(D=>{const C=p.productos.find(S=>S.sku===D.sku),G=D.modo_venta||"unidad",_=G==="paquete"&&(C==null?void 0:C.precioPaqueteUsd),z=Number(_?(C==null?void 0:C.precioPaqueteUsd)||0:(C==null?void 0:C.precioUsd)||0),B=(z*Number(D.cantidad)).toFixed(2),N=(Number(B)*l).toFixed(2);return{sku:D.sku,nombre:(C==null?void 0:C.nombre)||D.sku,cantidad:D.cantidad,precioUsd:String(z),tasaBloqueada:l.toFixed(2),subtotalUsd:B,subtotalBs:N,modoVenta:G}})};if(p.tickets.some(D=>D.ventaId===U.ventaId)||p.tickets.unshift(U),r&&(p.dedupVentas||(p.dedupVentas={}),p.dedupVentas[r]=U.ventaId),p.jornadaActual){const D=p.jornadaActual;D.ventasTotalUsd=(Z(D.ventasTotalUsd)+d).toFixed(2),D.ventasTotalBs=(Z(D.ventasTotalBs)+m).toFixed(2),D.ticketsEmitidos+=1,P==="PAGADO"?D.vueltoPagadoBs=(Z(D.vueltoPagadoBs)+f).toFixed(2):P==="RETENIDO"&&(D.vueltoRetenidoBs=(Z(D.vueltoRetenidoBs)+f).toFixed(2))}return p.persist(),Promise.resolve(U)}case"listar_cuentas":return Promise.resolve(p.cuentas);case"abrir_cuenta":{const t=String((e==null?void 0:e.etiqueta)||"Mesa Demo").trim(),r=(e==null?void 0:e.tipo)==="deuda"?"deuda":"activa",s=typeof(e==null?void 0:e.cliente)=="string"?e.cliente.trim():void 0,d=typeof(e==null?void 0:e.nota)=="string"?e.nota.trim():void 0,l=new Date,m=l.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),f=`${l.toLocaleDateString("es-VE")} ${m}`,h={ventaId:(r==="deuda"?"DEU-":"CTA-")+Math.random().toString(36).slice(2,8).toUpperCase(),etiqueta:t,tipo:r,cliente:s,nota:d,fechaCreacionUnix:Math.floor(l.getTime()/1e3),fechaCreacionStr:f,totalParcialUsd:"0.00",totalParcialBs:"0.00",abonosUsd:"0.00",abonosBs:"0.00",lineas:0,consumos:[]};return p.cuentas.push(h),p.persist(),Promise.resolve(h)}case"agregar_consumo":{const t=String((e==null?void 0:e.ventaId)||""),r=String((e==null?void 0:e.sku)||"").trim().toUpperCase(),s=Z(e==null?void 0:e.cantidad)||1,d=String((e==null?void 0:e.modo_venta)||"unidad"),l=p.cuentas.find(f=>f.ventaId===t),m=p.productos.find(f=>f.sku.trim().toUpperCase()===r);if(l&&m){const f=d==="paquete"&&(m.precioPaqueteUsd||m.esCaja&&m.unidadesPorCaja&&m.unidadesPorCaja>1),h=f&&m.unidadesPorCaja||1,g=f?m.precioPaqueteUsd?Z(m.precioPaqueteUsd):Z(m.precioUsd)*h:Z(m.precioUsd),E=s*h;if(!m.sinStock){const x=Z(m.stock);if(x<E)return Promise.reject(new Error(`Stock insuficiente para "${m.nombre}". Disponible: ${x} ${m.unidad||"un."}`));m.stock=String(Math.max(0,x-E))}Array.isArray(l.consumos)||(l.consumos=[]);const w=g*s,P=Z(p.tasaActual.valor)||807.39,T=l.consumos.find(x=>x.sku.trim().toUpperCase()===m.sku.trim().toUpperCase()&&x.modoVenta===d);T?(T.cantidad+=s,T.subtotalUsd=(T.cantidad*Z(T.precioUsd)).toFixed(2)):l.consumos.push({id:"con-"+Math.random().toString(36).slice(2,8),sku:m.sku,nombre:m.nombre,cantidad:s,precioUsd:g.toFixed(2),subtotalUsd:w.toFixed(2),modoVenta:d});const j=l.consumos.reduce((x,v)=>x+Z(v.subtotalUsd),0);return l.totalParcialUsd=j.toFixed(2),l.totalParcialBs=(j*P).toFixed(2),l.lineas=l.consumos.length,p.persist(),Promise.resolve(l)}return Promise.resolve(l)}case"eliminar_consumo":{const t=String((e==null?void 0:e.ventaId)||""),r=String((e==null?void 0:e.consumoId)||""),s=p.cuentas.find(d=>d.ventaId===t);if(s&&Array.isArray(s.consumos)){const d=s.consumos.findIndex(l=>l.id===r);if(d!==-1){const l=s.consumos[d],m=p.productos.find(g=>g.sku.trim().toUpperCase()===l.sku.trim().toUpperCase());m&&!m.sinStock&&(m.stock=String(Z(m.stock)+l.cantidad)),s.consumos.splice(d,1);const f=Z(p.tasaActual.valor)||807.39,h=s.consumos.reduce((g,E)=>g+Z(E.subtotalUsd),0);s.totalParcialUsd=h.toFixed(2),s.totalParcialBs=(h*f).toFixed(2),s.lineas=s.consumos.length,p.persist()}return Promise.resolve(s)}return Promise.resolve(s)}case"cerrar_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),r=p.cuentas.findIndex(B=>B.ventaId===t);if(r===-1){const B=p.tickets.find(N=>N.ventaId===t);return B?Promise.resolve(B):Promise.reject(new Error("Cuenta no encontrada"))}const s=p.cuentas[r];let d="0.00",l="0.00",m=[],f=0;const h=Z(e==null?void 0:e.tasaCobro),g=h>0?h:Number(p.tasaActual.valor)||807.39,E=(s==null?void 0:s.tipo)==="deuda";if(s){const B=Number(s.totalParcialUsd),N=Number(s.abonosUsd||"0"),S=Math.max(0,N-B);f=S;const M=Math.max(B,N);d=M.toFixed(2),l=(M*g).toFixed(2),p.cuentas.splice(r,1),p.ventasTotalUsd+=M,p.ventasTotalBs+=M*g,m=(s.consumos||[]).map(k=>({sku:k.sku,nombre:k.nombre,cantidad:String(k.cantidad),precioUsd:k.precioUsd,tasaBloqueada:g.toFixed(4),subtotalUsd:k.subtotalUsd,subtotalBs:(Number(k.subtotalUsd)*g).toFixed(2)})),S>0&&m.push({sku:"GANANCIA-EXCEDENTE",nombre:"Saldo a Favor Consolidado como Ganancia (Excedente Retenido)",cantidad:"1",precioUsd:S.toFixed(2),tasaBloqueada:g.toFixed(4),subtotalUsd:S.toFixed(2),subtotalBs:(S*g).toFixed(2)})}const w=new Date,P=w.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),T=Array.isArray(e==null?void 0:e.pagos)&&e.pagos.length>0?e.pagos:[{metodo:E?"TRANSF.BS.":"BS.EFEC.",moneda:"BS",montoUsd:d,montoBs:l}],j=Number((e==null?void 0:e.montoRecibidoBs)||l),x=Math.max(0,j-Number(l)),v=e==null?void 0:e.resolucionVuelto,y=x>.009?(v==null?void 0:v.estado)||"PAGADO":"SIN_VUELTO",U=y==="PAGADO"?(v==null?void 0:v.metodo)||(E?"TRANSF.BS.":"BS.EFEC."):void 0,D=x>.009?(v==null?void 0:v.montoBs)||x.toFixed(2):void 0,C=x>.009?(v==null?void 0:v.montoUsd)||(g>0?(x/g).toFixed(2):"0.00"):void 0,G=y==="PAGADO"?v==null?void 0:v.tasa:void 0,_=((n=p.jornadaActual)==null?void 0:n.operadorActual)||"Caja Principal",z={ventaId:t||(E?"DEU-":"CTA-")+Math.floor(1e4+Math.random()*9e4),totalUsd:d,totalBs:l,tasaDelDia:g.toFixed(4),montoRecibidoBs:j.toFixed(2),vueltoBs:x.toFixed(2),fechaHora:`Hoy, ${P}`,fechaUnix:Math.floor(w.getTime()/1e3),canal:E?"LIQUIDACION DE DEUDA":"CONSUMO EN CUENTA",operador:_,saldoAFavorConsolidadoUsd:f>0?f.toFixed(2):void 0,pagos:T,estadoVuelto:y,metodoVuelto:U,montoVueltoBs:D,montoVueltoUsd:C,tasaVuelto:G,lineas:m};if(p.tickets.unshift(z),p.jornadaActual){const B=p.jornadaActual,N=Z(d),S=Z(l);B.ventasTotalUsd=(Z(B.ventasTotalUsd)+N).toFixed(2),B.ventasTotalBs=(Z(B.ventasTotalBs)+S).toFixed(2),B.ticketsEmitidos+=1,E&&(B.deudasLiquidadasUsd=(Z(B.deudasLiquidadasUsd)+N).toFixed(2)),y==="PAGADO"?B.vueltoPagadoBs=(Z(B.vueltoPagadoBs)+x).toFixed(2):y==="RETENIDO"&&(B.vueltoRetenidoBs=(Z(B.vueltoRetenidoBs)+x).toFixed(2))}return p.persist(),Promise.resolve(z)}case"listar_categorias":return Promise.resolve(p.categorias);case"crear_categoria":{const t=String((e==null?void 0:e.nombre)||"").trim(),r="cat-"+Math.random().toString(36).slice(2,7);return p.categorias.push({id:r,nombre:t}),p.persist(),Promise.resolve(p.categorias)}case"eliminar_categoria":{const t=String((e==null?void 0:e.id)||"");return p.categorias=p.categorias.filter(r=>r.id!==t),p.persist(),Promise.resolve(p.categorias)}case"listar_tasas_impuestos":return Promise.resolve(p.tasasImpuestos);case"crear_tasa_impuesto":{const t=String((e==null?void 0:e.nombre)||"").trim(),r=Number((e==null?void 0:e.porcentaje)||0),s="tax-"+Math.random().toString(36).slice(2,7);return p.tasasImpuestos.push({id:s,nombre:t,porcentaje:String(r)}),p.persist(),Promise.resolve(p.tasasImpuestos)}case"eliminar_tasa_impuesto":{const t=String((e==null?void 0:e.id)||"");return p.tasasImpuestos=p.tasasImpuestos.filter(r=>r.id!==t),p.persist(),Promise.resolve(p.tasasImpuestos)}case"abonar_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),r=Number((e==null?void 0:e.montoUsd)||0),s=Number((e==null?void 0:e.montoBs)||0),d=p.cuentas.find(l=>l.ventaId===t);if(d&&Number.isFinite(r)&&r>0&&r<=5e4){const l=Array.isArray(d.consumos)&&d.consumos.length>0,m=Z(d.totalParcialUsd)>0;if(!l&&!m)return Promise.resolve(null);const f=Number(p.tasaActual.valor),h=Number(d.abonosUsd||"0"),g=Number(d.abonosBs||"0");if(s>0){const E=g+s;d.abonosBs=E.toFixed(2),d.abonosUsd=(f>0?E/f:0).toFixed(2)}else{const E=h+r;d.abonosUsd=E.toFixed(2),d.abonosBs=(E*f).toFixed(2)}p.persist()}return Promise.resolve(d)}case"editar_abono_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),r=Math.max(0,Math.min(5e4,Number((e==null?void 0:e.nuevoAbonoUsd)||0))),s=p.cuentas.find(d=>d.ventaId===t);if(s&&Number.isFinite(r)){const d=Number(p.tasaActual.valor);s.abonosUsd=r.toFixed(2),s.abonosBs=(r*d).toFixed(2),p.persist()}return Promise.resolve(s)}case"datos_panel":{const t=Number(p.tasaActual.valor),r=p.ventasTotalUsd,s=p.ventasTotalBs;let d=0,l=0;p.productos.forEach(S=>{const M=Number(S.precioUsd)||0,k=Number(S.precioBrutoUsd)||0;M>0&&(d+=M,k>0&&(l+=k))});const m=d>0&&l>0?(d-l)/d:0,f=r*(1-m),h=r-f,g=r*.12,E=h-g,w=h,P=E*t,T={};p.tickets.forEach(S=>{S.lineas.forEach(M=>{T[M.sku]||(T[M.sku]={qty:0,monto:0,nombre:M.nombre}),T[M.sku].qty+=Number(M.cantidad)||1,T[M.sku].monto+=Number(M.subtotalUsd)||0})}),p.productos.forEach((S,M)=>{if(!T[S.sku]){const k=Math.max(1,14-M*2);T[S.sku]={qty:k,monto:k*Number(S.precioUsd),nombre:S.nombre}}});const j=Object.values(T).sort((S,M)=>M.monto-S.monto),x=j.reduce((S,M)=>S+M.monto,0)||1,v=j.map(S=>({nombre:S.nombre,cantidad:String(S.qty),totalUsd:S.monto.toFixed(2),porcentaje:(S.monto/x*100).toFixed(1)})),y=Number(p.tasaActual.valor)||807.39;let U=0;const D={};p.categorias.forEach(S=>{D[S.id]={categoriaId:S.id,nombre:S.nombre,cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}}),D["cat-general"]||(D["cat-general"]={categoriaId:"cat-general",nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}),p.productos.forEach(S=>{const M=S.categoriaId&&D[S.categoriaId]?S.categoriaId:"cat-general",k=D[M];k.cantidadProductos+=1;const q=S.sinStock?0:Number(S.stock)||0,J=Number(S.precioBrutoUsd)>0?Number(S.precioBrutoUsd):Number(S.precioUsd)*.65,te=Number(S.precioUsd)||0,H=q*J,I=q*te;k.unidadesStock+=q,k.brutoUsd+=H,k.ventaUsd+=I,U+=H});const C=Object.values(D).filter(S=>S.cantidadProductos>0||S.brutoUsd>0).map(S=>{const M=Math.max(0,S.ventaUsd-S.brutoUsd),k=S.ventaUsd>0?(M/S.ventaUsd*100).toFixed(1):"0.0",q=U>0?(S.brutoUsd/U*100).toFixed(1):"0.0";return{categoriaId:S.categoriaId,nombre:S.nombre,cantidadProductos:S.cantidadProductos,unidadesStock:Math.round(S.unidadesStock*100)/100,dineroBrutoUsd:S.brutoUsd.toFixed(2),dineroBrutoBs:(S.brutoUsd*y).toFixed(2),dineroVentaUsd:S.ventaUsd.toFixed(2),dineroVentaBs:(S.ventaUsd*y).toFixed(2),margenBrutoProyectadoUsd:M.toFixed(2),margenBrutoPct:k,porcentajeCapital:q}}).sort((S,M)=>Number(M.dineroBrutoUsd)-Number(S.dineroBrutoUsd)),G=p.cuentas.filter(S=>S.tipo==="deuda"),_=p.cuentas.filter(S=>S.tipo!=="deuda"),z=G.reduce((S,M)=>S+Math.max(0,Z(M.totalParcialUsd)-Z(M.abonosUsd)),0),B=z*y,N={ventas24hUsd:r.toFixed(2),ventas24hBs:s.toFixed(2),tickets24h:Math.max(p.tickets.length,18),valorInventarioUsd:p.productos.reduce((S,M)=>S+Number(M.precioUsd)*Number(M.stock),0).toFixed(2),costoTotalUsd:f.toFixed(2),gananciaBrutaUsd:h.toFixed(2),gananciaNetaUsd:E.toFixed(2),gananciaNetaSinImpUsd:w.toFixed(2),gananciaNetaBs:P.toFixed(2),cuentasAbiertas:_.length,deudasAbiertas:G.length,dineroEnLaCalleUsd:z.toFixed(2),dineroEnLaCalleBs:B.toFixed(2),criticos:p.productos.filter(S=>!S.sinStock&&Number(S.stock)<=5).map(S=>({sku:S.sku,nombre:S.nombre,stock:S.stock})),topProductos:v,dineroPorCategoria:C};return Promise.resolve(N)}case"compra_stock":{const t=String((e==null?void 0:e.sku)||""),r=Number((e==null?void 0:e.cantidad)||"0"),s=p.productos.find(d=>d.sku===t);return s&&Number.isFinite(r)&&r>0?(s.stock=String(Number(s.stock)+r),p.persist(),Promise.resolve(s.stock)):Promise.resolve("0")}case"reducir_stock":{const t=String((e==null?void 0:e.sku)||""),r=Number((e==null?void 0:e.cantidad)||"0"),s=p.productos.find(d=>d.sku===t);return s&&Number.isFinite(r)&&r>0?(s.stock=String(Math.max(0,Number(s.stock)-r)),p.persist(),Promise.resolve(s.stock)):Promise.resolve("0")}case"registrar_merma":{const t=String((e==null?void 0:e.sku)||""),r=Number((e==null?void 0:e.cantidad)||"0"),s=p.productos.find(d=>d.sku===t);return s&&Number.isFinite(r)&&r>0?(s.stock=String(Math.max(0,Number(s.stock)-r)),p.persist(),Promise.resolve(s.stock)):Promise.resolve("0")}case"listar_dispositivos":return Promise.resolve(p.dispositivos);case"registrar_dispositivo":{const t=String((e==null?void 0:e.nombre)||"Dispositivo Móvil").trim(),s={id:"dev-"+Math.random().toString(36).slice(2,7),nombre:t,ip:"192.168.1."+Math.floor(Math.random()*200+20),ultimoAcceso:"Ahora mismo",activo:!0};return p.dispositivos.push(s),p.persist(),Promise.resolve(p.dispositivos)}case"revocar_dispositivo":{const t=String((e==null?void 0:e.id)||"");return p.dispositivos=p.dispositivos.filter(r=>r.id!==t),p.persist(),Promise.resolve(p.dispositivos)}case"listar_respaldos":return Promise.resolve(p.respaldos);case"crear_respaldo":{const t="bk-"+Math.random().toString(36).slice(2,7),r=p.productos.length+p.cuentas.length+p.categorias.length,s=new Date,d=(((c=p.config)==null?void 0:c.nombre)||"DATIOLABS").toUpperCase().replace(/[^A-Z0-9]/g,"-").replace(/-+/g,"-").slice(0,30),l=s.getFullYear(),m=String(s.getMonth()+1).padStart(2,"0"),f=String(s.getDate()).padStart(2,"0"),h=String(s.getHours()).padStart(2,"0"),g=String(s.getMinutes()).padStart(2,"0"),E=String(s.getSeconds()).padStart(2,"0"),w=`${d}-${l}${m}${f}-${h}${g}${E}.backup`,P={id:t,fecha:"Ahora mismo",archivoNombre:w,registros:r,tamanoKb:Math.round(r*.4+10),checksumSha256:Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join("")};return p.respaldos.unshift(P),p.persist(),Promise.resolve(P)}case"restaurar_desde_respaldo":return p.dispositivos=[],p.persist(),Promise.resolve(!0);case"obtener_licencia":return Promise.resolve(p.licencia);case"validar_licencia":{const r=String((e==null?void 0:e.clave)||"").replace(/[^a-zA-Z0-9]/g,"");if(r.length!==16)return Promise.resolve(!1);const s=r.split("").map(f=>parseInt(f,10)).filter(f=>!isNaN(f)&&f<10);if(s.length!==16)return Promise.resolve(!1);let d=0;for(let f=0;f<12;f++)d+=s[f]*(f+1);const l=d%1e4,m=s[12]*1e3+s[13]*100+s[14]*10+s[15];return Promise.resolve(l===m)}case"generar_qr_panel":{const t="room-"+Math.random().toString(36).slice(2,10),s=`${window.__SIGNALING_URL__||"https://datiolabs-signaling.apex-importvcb.workers.dev"}/ws/signaling?room=${t}`;return Promise.resolve({url:s,qrBase64:"",roomId:t})}case"obtener_tasa_bcv":return Promise.resolve(p.tasaActual);case"forzar_actualizacion_tasa":return p.refrescarTasaEnVivo().then(()=>p.tasaActual);case"listar_historico_tasas":return Promise.resolve(p.historicoTasas);case"fijar_tasa_manual":{const t=String((e==null?void 0:e.tasa)||"0"),r=Number(t),s=Number(p.tasaActual.valor);let d=null,l=null;if(Number.isFinite(s)&&s>0&&Number.isFinite(r)&&r>0&&s!==r){const h=(r-s)/s*100;d=Math.abs(h).toFixed(2),l=h>0?"subio":"bajo"}p.tasaActual={valor:r.toFixed(4),fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:d,direccion:l};const f=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});return p.historicoTasas.unshift({id:"tx-"+Math.random().toString(36).slice(2,7),valor:r.toFixed(4),fechaHora:`Hoy, ${f}`,tipo:"manual",motivo:"Ajuste manual por el usuario"}),p.historicoTasas.length>50&&p.historicoTasas.pop(),p.persist(),Promise.resolve(p.tasaActual)}case"listar_ventas":return Promise.resolve(p.tickets);case"listar_metodos_pago":return p.metodosPago.sort((t,r)=>t.moneda===r.moneda?0:t.moneda==="BS"?-1:1),Promise.resolve(p.metodosPago);case"crear_metodo_pago":{const t=String((e==null?void 0:e.nombre)||"").trim().toUpperCase().replace(/[^A-Z0-9. _-]/g,"").slice(0,25),r=(e==null?void 0:e.moneda)==="USD"?"USD":"BS";return t&&!p.metodosPago.some(s=>s.nombre===t)&&(p.metodosPago.push({nombre:t,moneda:r}),p.metodosPago.sort((s,d)=>s.moneda===d.moneda?0:s.moneda==="BS"?-1:1),p.persist()),Promise.resolve(p.metodosPago)}case"eliminar_metodo_pago":{const t=String((e==null?void 0:e.nombre)||"").trim().toUpperCase();return t&&(p.metodosPago=p.metodosPago.filter(r=>r.nombre!==t),p.metodosPago.length===0&&p.metodosPago.push({nombre:"PUNTOD.VENTA",moneda:"BS"}),p.persist()),Promise.resolve(p.metodosPago)}case"listar_operadores":return Promise.resolve(p.operadores);case"crear_operador":{const t=String((e==null?void 0:e.nombre)||"").trim();if(t){const r={id:"op-"+Math.random().toString(36).slice(2,7),nombre:t,activo:!0,creadoUnix:Math.floor(Date.now()/1e3)};p.operadores.push(r),p.persist()}return Promise.resolve(p.operadores)}case"editar_operador":{const t=String((e==null?void 0:e.id)||""),r=String((e==null?void 0:e.nombre)||"").trim();if(t&&r){const s=p.operadores.find(d=>d.id===t);if(s){const d=s.nombre;s.nombre=r,p.jornadaActual&&(p.jornadaActual.operadorActual===d&&(p.jornadaActual.operadorActual=r),p.jornadaActual.operadoresActivos&&(p.jornadaActual.operadoresActivos=p.jornadaActual.operadoresActivos.map(l=>l===d?r:l)),p.jornadaActual.operadoresRelevo&&(p.jornadaActual.operadoresRelevo=p.jornadaActual.operadoresRelevo.map(l=>l===d?r:l))),p.persist()}}return Promise.resolve(p.operadores)}case"eliminar_operador":{const t=String((e==null?void 0:e.id)||"");if(t){const r=p.operadores.find(d=>d.id===t),s=r==null?void 0:r.nombre;p.operadores=p.operadores.filter(d=>d.id!==t),p.jornadaActual&&s&&(p.jornadaActual.operadoresActivos&&(p.jornadaActual.operadoresActivos=p.jornadaActual.operadoresActivos.filter(d=>d!==s)),p.jornadaActual.operadorActual===s&&(p.jornadaActual.operadorActual=((i=p.jornadaActual.operadoresActivos)==null?void 0:i[0])||((b=p.operadores[0])==null?void 0:b.nombre)||"Cajero Principal")),p.persist()}return Promise.resolve(p.operadores)}case"alternar_operador":{const t=String((e==null?void 0:e.id)||""),r=p.operadores.find(s=>s.id===t);return r&&(r.activo=!r.activo,p.persist()),Promise.resolve(p.operadores)}case"obtener_jornada_actual":return Promise.resolve(p.jornadaActual);case"listar_historico_jornadas":{const t=new Set,r=p.historicoJornadas.filter(s=>t.has(s.id)?!1:(t.add(s.id),!0));return Promise.resolve(r)}case"abrir_jornada":{const t=String((e==null?void 0:e.operador)||"Cajero Principal").trim(),r=Array.isArray(e==null?void 0:e.operadores)&&e.operadores.length>0?e.operadores.map(w=>String(w).trim()).filter(Boolean):[t],s=new Date,d=s.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),l=`${s.toLocaleDateString("es-VE")} ${d}`,m=s.getFullYear(),f=String(s.getMonth()+1).padStart(2,"0"),h=String(s.getDate()).padStart(2,"0"),g=p.tasaActual.valor,E={id:`JOR-${m}${f}${h}-${Math.random().toString(36).slice(2,6).toUpperCase()}`,estado:"abierta",inicioUnix:Math.floor(Date.now()/1e3),inicioStr:`Hoy, ${d} (${l})`,operadorInicial:r[0]||t,operadorActual:r.join(", "),operadoresActivos:r,operadoresRelevo:[...r],tasaInicio:g,ventasTotalUsd:"0.00",ventasTotalBs:"0.00",ticketsEmitidos:0,vueltoPagadoBs:"0.00",vueltoRetenidoBs:"0.00",deudasLiquidadasUsd:"0.00",entradasStockReg:0,mermasStockReg:0,cambiosPrecioReg:0};return p.jornadaActual=E,p.persist(),Promise.resolve(E)}case"asignar_operadores_turno":{const t=Array.isArray(e==null?void 0:e.operadores)?e.operadores.map(r=>String(r).trim()).filter(Boolean):[];return p.jornadaActual&&(p.jornadaActual.operadoresActivos=t,p.jornadaActual.operadorActual=t.length>0?t.join(", "):"Sin operador asignado",t.forEach(r=>{var s,d;(s=p.jornadaActual)!=null&&s.operadoresRelevo.includes(r)||(d=p.jornadaActual)==null||d.operadoresRelevo.push(r)}),p.persist()),Promise.resolve(p.jornadaActual)}case"relevar_operador_jornada":{const t=String((e==null?void 0:e.operador)||"").trim();return p.jornadaActual&&t&&(p.jornadaActual.operadorActual=t,p.jornadaActual.operadoresActivos=[t],p.jornadaActual.operadoresRelevo.includes(t)||p.jornadaActual.operadoresRelevo.push(t),p.persist()),Promise.resolve(p.jornadaActual)}case"cerrar_jornada":{if(!p.jornadaActual)return Promise.reject(new Error("No existe una jornada laboral abierta para cerrar."));const t=new Date,r=t.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),s=`${t.toLocaleDateString("es-VE")} ${r}`,d={...p.jornadaActual};return d.estado="cerrada",d.finUnix=Math.floor(Date.now()/1e3),d.finStr=`${s}`,d.tasaFin=p.tasaActual.valor,d.checksumSha256=Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join(""),p.historicoJornadas.unshift(d),p.jornadaActual=null,p.persist(),Promise.resolve(d)}case"obtener_semaforo_stock":return Promise.resolve(p.semaforoStock);case"guardar_semaforo_stock":{const t=Math.max(1,Number(e==null?void 0:e.rojoMax)||5),r=Math.max(t+1,Number(e==null?void 0:e.amarilloMax)||15);return p.semaforoStock={rojoMax:t,amarilloMax:r},p.persist(),Promise.resolve(p.semaforoStock)}default:return Promise.resolve(null)}}const R={config:()=>V("obtener_config"),inicializar:(u,e,o,a,n)=>V("inicializar_negocio",{nombre:u,rubros:e,pinDueno:o||null,licenciaClave:a||null,licenciaTitular:null,privacidadInventario:n??!1}),validarPin:u=>V("validar_pin_dueno",{pin:u}),productos:()=>V("listar_productos"),crearProducto:u=>{const e=u.sku&&u.sku.trim()?u.sku.trim().toUpperCase():"PROD-"+Math.random().toString(36).slice(2,8).toUpperCase();return V("crear_producto",{input:{...u,sku:e}})},eliminarProducto:u=>V("eliminar_producto",{sku:u}),registrarVenta:(u,e,o,a,n,c)=>V("registrar_venta",{items:u,montoRecibidoBs:o,pagos:a,resolucionVuelto:n,idempotencyKey:c}),abrirCuenta:(u,e,o,a)=>V("abrir_cuenta",{etiqueta:u,tipo:e,nota:o,cliente:a}),cuentas:()=>V("listar_cuentas"),agregarConsumo:(u,e,o,a,n)=>V("agregar_consumo",{ventaId:u,sku:e,cantidad:o,clienteMayorEdad:a,modo_venta:n}),eliminarConsumo:(u,e)=>V("eliminar_consumo",{ventaId:u,consumoId:e}),abonarCuenta:(u,e,o)=>V("abonar_cuenta",{ventaId:u,montoUsd:e,montoBs:o}),editarAbonoCuenta:(u,e)=>V("editar_abono_cuenta",{ventaId:u,nuevoAbonoUsd:e}),cerrarCuenta:(u,e,o,a,n)=>V("cerrar_cuenta",{ventaId:u,montoRecibidoBs:e,tasaCobro:o,pagos:a,resolucionVuelto:n}),panel:()=>V("datos_panel"),compraStock:(u,e)=>V("compra_stock",{sku:u,cantidad:e}),reducirStock:(u,e)=>V("reducir_stock",{sku:u,cantidad:e}),merma:(u,e,o)=>V("registrar_merma",{sku:u,cantidad:e,loteId:o}),categorias:()=>V("listar_categorias"),crearCategoria:u=>V("crear_categoria",{nombre:u}),eliminarCategoria:u=>V("eliminar_categoria",{id:u}),tasasImpuestos:()=>V("listar_tasas_impuestos"),crearTasaImpuesto:(u,e)=>V("crear_tasa_impuesto",{nombre:u,porcentaje:e}),eliminarTasaImpuesto:u=>V("eliminar_tasa_impuesto",{id:u}),dispositivos:()=>V("listar_dispositivos"),registrarDispositivo:u=>V("registrar_dispositivo",{nombre:u}),revocarDispositivo:u=>V("revocar_dispositivo",{id:u}),respaldos:()=>V("listar_respaldos"),crearRespaldo:()=>V("crear_respaldo"),restaurarRespaldo:u=>V("restaurar_desde_respaldo",{archivo:u}),restaurarDesdeArchivo:(u,e)=>V("restaurar_desde_archivo",{contenidoBase64:u,nombreArchivo:e}),licencia:()=>V("obtener_licencia"),validarLicencia:u=>V("validar_licencia",{clave:u}),generarQr:()=>V("generar_qr_panel"),cambiarPinDueno:(u,e)=>V("cambiar_pin_dueno",{pinAnterior:u,pinNuevo:e}),actualizarPrivacidadInventario:u=>fetch("/api/config/privacidad",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({privacidadInventario:u})}).then(e=>e.json()),tasa:()=>V("obtener_tasa_bcv"),historicoTasas:()=>V("listar_historico_tasas"),forzarTasa:()=>V("forzar_actualizacion_tasa"),fijarTasaManual:u=>V("fijar_tasa_manual",{tasa:u}),ventas:()=>V("listar_ventas"),listarMetodosPago:()=>V("listar_metodos_pago"),crearMetodoPago:(u,e="BS")=>V("crear_metodo_pago",{nombre:u,moneda:e}),eliminarMetodoPago:u=>V("eliminar_metodo_pago",{nombre:u}),listarOperadores:()=>V("listar_operadores"),crearOperador:u=>V("crear_operador",{nombre:u}),editarOperador:(u,e)=>V("editar_operador",{id:u,nombre:e}),eliminarOperador:u=>V("eliminar_operador",{id:u}),alternarOperador:u=>V("alternar_operador",{id:u}),obtenerJornadaActual:()=>V("obtener_jornada_actual"),listarHistoricoJornadas:()=>V("listar_historico_jornadas"),abrirJornada:(u,e)=>V("abrir_jornada",{operador:u,operadores:e}),relevarOperadorJornada:u=>V("relevar_operador_jornada",{operador:u}),asignarOperadoresTurno:u=>V("asignar_operadores_turno",{operadores:u}),cerrarJornada:()=>V("cerrar_jornada"),obtenerSemaforoStock:()=>V("obtener_semaforo_stock"),guardarSemaforoStock:(u,e)=>V("guardar_semaforo_stock",{rojoMax:u,amarilloMax:e}),autoBackup:(u,e)=>V("auto_backup",{directorio:u,maxBackups:e}),getBackupDir:()=>V("get_backup_dir")},Fe="#00823B",Ve="#C60C15",Ge="#6B7280",He=3e5;class ze{constructor(){A(this,"contenedor");A(this,"timer",null);this.contenedor=document.getElementById("bcv-indicator")}iniciar(){this.contenedor&&(this.renderizarEsqueleto(),this.actualizar(),this.timer=window.setInterval(()=>void this.actualizar(),He))}detener(){this.timer!==null&&(window.clearInterval(this.timer),this.timer=null)}renderizarEsqueleto(){var e,o;this.contenedor&&(this.contenedor.innerHTML=`
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
            </div>`,(e=document.getElementById("bcv-refresh"))==null||e.addEventListener("click",()=>void this.forzar()),(o=document.getElementById("bcv-valor"))==null||o.addEventListener("click",()=>void this.abrirModalHistoricoYAjuste()))}async abrirModalHistoricoYAjuste(){var i,b,t;const e=document.getElementById("modal-root");if(!e)return;const o=await R.historicoTasas().catch(()=>[]),a=((i=document.getElementById("bcv-valor"))==null?void 0:i.textContent)||"--";e.innerHTML=`
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
                        ${o.length===0?'<p class="text-xs text-gray-400 font-bold py-4 text-center">Sin registros históricos previos.</p>':o.map(r=>`
                            <div class="border border-brand-black rounded p-2 bg-white flex justify-between items-center text-xs">
                                <div>
                                    <span class="font-black font-heading text-sm text-brand-black">Bs. ${Number(r.valor).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                                    <span class="text-[10px] text-gray-500 font-bold ml-2">· ${r.motivo||"Actualización"}</span>
                                </div>
                                <div class="text-right">
                                    <span class="text-[10px] px-1.5 py-0.5 rounded border border-brand-black font-black uppercase ${r.tipo==="manual"?"bg-amber-100 text-amber-900":"bg-blue-100 text-blue-900"}">
                                        ${r.tipo}
                                    </span>
                                    <p class="text-[10px] text-gray-500 font-mono mt-0.5">${r.fechaHora}</p>
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
        </div>`;const n=()=>{e.innerHTML=""};(b=document.getElementById("tasa-modal-cerrar"))==null||b.addEventListener("click",n),(t=document.getElementById("tasa-modal-btn-cerrar"))==null||t.addEventListener("click",n);const c=document.getElementById("form-tasa-manual");c==null||c.addEventListener("submit",async r=>{r.preventDefault();const s=document.getElementById("in-tasa-manual"),d=Number((s==null?void 0:s.value)||0);if(!d||d<=0)return;if(window.confirm(`¿Está seguro de que desea cambiar la tasa oficial del sistema a Bs. ${d.toFixed(2)}?

Esta tasa afectará todos los nuevos cobros y tickets a partir de este momento.`)){const m=await V("fijar_tasa_manual",{tasa:d.toFixed(2)});m&&this.pintar(m),n()}})}async actualizar(){const e=await this.obtenerTasa("obtener_tasa_bcv");e&&this.pintar(e)}async forzar(){const e=document.getElementById("bcv-refresh");e&&e.classList.add("animate-spin");const o=await this.obtenerTasa("forzar_actualizacion_tasa");e&&e.classList.remove("animate-spin"),o&&this.pintar(o)}async obtenerTasa(e){try{return await V(e)}catch{return null}}pintar(e){const o=document.getElementById("bcv-valor"),a=document.getElementById("bcv-fluctuacion");if(!o||!a)return;const n=Number(e.valor);o.textContent=Number.isFinite(n)&&n>0?n.toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}):"--",Number.isFinite(n)&&n>0&&window.dispatchEvent(new CustomEvent("tasa_actualizada",{detail:n}));const c=Number(e.fluctuacionPct);if(e.direccion&&Number.isFinite(c)){const i=e.direccion==="subio"?Fe:e.direccion==="bajo"?Ve:Ge,b=c>0?"+":"";a.textContent=`${b}${c.toFixed(2)}%`,a.style.color=i}else a.textContent=""}}class Je{constructor(){A(this,"config",null);A(this,"rol","caja");A(this,"tasa",0);A(this,"oyentes",[])}suscribir(e){this.oyentes.push(e)}notificar(){this.oyentes.forEach(e=>e())}async cargarConfig(){return this.config=await R.config(),this.config}getConfig(){return this.config}async inicializar(e,o,a,n,c){await R.inicializar(e,o,a,n,c),await this.cargarConfig(),this.notificar()}get rubroAbasto(){var e,o;return(((e=this.config)==null?void 0:e.rubros)??0&ve)!==0||(((o=this.config)==null?void 0:o.rubros)??0)===ve}tieneRubro(e){var o;return((((o=this.config)==null?void 0:o.rubros)??0)&e)!==0}tieneCapacidad(e){var o;return((((o=this.config)==null?void 0:o.capacidades)??0)&e)!==0}setRol(e){this.rol=e,this.notificar()}get rolActual(){return this.rol}setTasa(e){this.tasa=e,this.notificar()}get tasaActual(){return this.tasa}bs(e){return(Number(e)*this.tasa).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}hasPinSet(){var e;return!!((e=this.config)!=null&&e.tienePin)}async verificarPin(e){return R.validarPin(e)}}function Ke(u,e){const o=u.replace(/[^a-zA-Z0-9]/g,"");if(o.length!==16)return!1;const a=o.split("").map(b=>parseInt(b,10)).filter(b=>!isNaN(b)&&b<10);if(a.length!==16)return!1;let n=0;for(let b=0;b<12;b++)n+=a[b]*(b+1);const c=n%1e4,i=a[12]*1e3+a[13]*100+a[14]*10+a[15];return c===i}class We{constructor(e,o,a){A(this,"contenedor");A(this,"modelo");A(this,"alTerminar");A(this,"modo","nuevo");A(this,"bloquearPanel",!0);this.contenedor=e,this.modelo=o,this.alTerminar=a}render(){this.contenedor.innerHTML=`
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
                            ${this.tarjetaRubro("wz-abasto","Abasto","Comestibles y peso",ve,"bg-brand-cyan")}
                            ${this.tarjetaRubro("wz-panaderia","Panadería","Horneados FEFO",Ce,"bg-brand-yellow")}
                            ${this.tarjetaRubro("wz-licoreria","Licorería","Cuentas y consumo",Ae,"bg-brand-pink")}
                            ${this.tarjetaRubro("wz-retail","Retail","Series y garantías",$e,"bg-purple-100")}
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
                        <label class="block font-heading font-bold text-xs uppercase tracking-wide mb-2">Selecciona o arrastra el archivo de respaldo (.backup):</label>
                        <div class="border-2 border-dashed border-brand-black rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer" id="drop-zona">
                            <svg class="w-10 h-10 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                            </svg>
                            <p class="font-heading font-black text-sm text-brand-black mb-1">Haz clic para cargar archivo de respaldo</p>
                            <p class="text-[11px] font-mono text-gray-500">Formato: datio_FECHA.backup</p>
                            <input type="file" id="wz-archivo-input" accept=".backup,.datio,.bin" class="hidden" />
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
        </div>`,this.conectarEventos()}tarjetaRubro(e,o,a,n,c,i=!1){return`
        <label for="${e}" class="cursor-pointer block select-none">
            <div class="border-2 border-brand-black rounded-lg p-3 ${c} bg-opacity-30 hover:bg-opacity-50 transition-all hover:-translate-y-0.5 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="font-heading font-black text-sm text-brand-black">${o}</span>
                    <input type="checkbox" id="${e}" data-bit="${n}" ${i?"checked":""} class="w-5 h-5 accent-brand-black cursor-pointer border-2 border-brand-black rounded" />
                </div>
                <p class="text-xs text-brand-text font-body mt-1 font-bold">${a}</p>
            </div>
        </label>`}conectarEventos(){var m,f;const e=document.getElementById("wz-tab-nuevo"),o=document.getElementById("wz-tab-restaurar");e==null||e.addEventListener("click",()=>{this.modo="nuevo",this.render()}),o==null||o.addEventListener("click",()=>{this.modo="restaurar",this.render()});const a=document.getElementById("seg-bloqueado"),n=document.getElementById("seg-abierto"),c=document.getElementById("wz-box-pin");a==null||a.addEventListener("change",()=>{this.bloquearPanel=!0,c==null||c.classList.remove("hidden")}),n==null||n.addEventListener("change",()=>{this.bloquearPanel=!1,c==null||c.classList.add("hidden")});const i=document.getElementById("seg-bloqueado-res"),b=document.getElementById("seg-abierto-res"),t=document.getElementById("wz-box-pin-res");i==null||i.addEventListener("change",()=>{this.bloquearPanel=!0,t==null||t.classList.remove("hidden")}),b==null||b.addEventListener("change",()=>{this.bloquearPanel=!1,t==null||t.classList.add("hidden")}),(m=document.getElementById("wz-iniciar"))==null||m.addEventListener("click",()=>void this.enviarNuevo());const r=document.getElementById("drop-zona"),s=document.getElementById("wz-archivo-input"),d=document.getElementById("wz-archivo-cargado"),l=document.getElementById("wz-nombre-archivo");r==null||r.addEventListener("click",()=>s==null?void 0:s.click()),s==null||s.addEventListener("change",()=>{if(s.files&&s.files[0]){const h=s.files[0];l&&d&&(l.textContent=h.name,d.classList.remove("hidden"))}}),(f=document.getElementById("wz-ejecutar-restaurar"))==null||f.addEventListener("click",()=>void this.enviarRestauracion())}async enviarNuevo(){const e=document.getElementById("wz-error"),o=document.getElementById("wz-nombre").value.trim(),a=document.getElementById("wz-pin"),n=this.bloquearPanel&&(a==null?void 0:a.value.trim())||"",c=[...this.contenedor.querySelectorAll("input[type=checkbox]:checked")].reduce((r,s)=>r|Number(s.dataset.bit),0),i=document.getElementById("wz-licencia"),b=(i==null?void 0:i.value.trim())||"",t=document.getElementById("wz-licencia-error");if(!o||c===0){e&&(e.textContent="Escribe el nombre del negocio y marca al menos un rubro.",e.classList.remove("hidden"));return}if(this.bloquearPanel&&!n){e&&(e.textContent='Ingresa una clave para proteger el panel o selecciona la opción "DEJAR ABIERTO".',e.classList.remove("hidden"));return}if(b&&!Ke(b)){t&&t.classList.remove("hidden");return}t&&t.classList.add("hidden");try{const r=document.getElementById("priv-inv-dueno"),s=(r==null?void 0:r.checked)??!0;await this.modelo.inicializar(o,c,n,b,s);const d=this.modelo.getConfig();d&&this.alTerminar(d)}catch(r){e&&(e.textContent=r instanceof Error?r.message:String(r),e.classList.remove("hidden"))}}async enviarRestauracion(){var i;const e=document.getElementById("wz-restore-error"),o=document.getElementById("wz-archivo-input"),a=document.getElementById("wz-pin-restaurar"),n=this.bloquearPanel&&(a==null?void 0:a.value.trim())||"",c=(i=o==null?void 0:o.files)==null?void 0:i[0];if(!c){e&&(e.textContent="Selecciona un archivo de respaldo.",e.classList.remove("hidden"));return}if(this.bloquearPanel&&!n){e&&(e.textContent='Ingresa una clave para el panel en este terminal o selecciona "DEJAR ABIERTO".',e.classList.remove("hidden"));return}try{const b=await new Promise((r,s)=>{const d=new FileReader;d.onload=()=>{const l=d.result;if(typeof l=="string"){const m=l.split(",")[1]||"";r(m)}else s(new Error("Error leyendo archivo"))},d.onerror=()=>s(new Error("No se pudo leer el archivo")),d.readAsDataURL(c)});await R.restaurarDesdeArchivo(b,c.name);const t=await R.config();if(t)this.alTerminar(t);else throw new Error("Respaldo restaurado pero no se pudo cargar la configuración")}catch(b){e&&(e.textContent=b instanceof Error?b.message:String(b),e.classList.remove("hidden"))}}}class Qe{constructor(e){A(this,"modelo");A(this,"productos",[]);A(this,"carrito",[]);A(this,"busqueda","");A(this,"cuentaSeleccionada",null);A(this,"cuentas",[]);A(this,"oyentes",[]);A(this,"edadConfirmadaSesion",!1);A(this,"tasaBloqueadaTicket",null);this.modelo=e}suscribir(e){this.oyentes.push(e),e()}notificar(){this.oyentes.forEach(e=>e())}async cargar(){this.productos=await R.productos(),this.modelo.tieneCapacidad(re)&&(this.cuentas=await R.cuentas()),this.notificar()}get visibles(){const e=this.busqueda.trim().toLowerCase();return e?this.productos.filter(o=>o.nombre.toLowerCase().includes(e)||o.sku.toLowerCase().includes(e)).slice(0,24):this.productos.slice(0,24)}setBusqueda(e){this.busqueda=e,this.notificar()}get lineasCarrito(){return this.carrito}get tasaTicket(){return this.tasaBloqueadaTicket??this.modelo.tasaActual}get totalUsd(){return this.carrito.reduce((e,o)=>e+o.precioUsd*o.cantidad,0)}get totalBs(){return this.totalUsd*this.tasaTicket}get cuentasAbiertasListado(){return this.cuentas}get cuentaActiva(){return this.cuentaSeleccionada}get modoCuentaAbierta(){return this.cuentaSeleccionada!==null}seleccionarCuenta(e){this.cuentaSeleccionada=e,this.notificar()}requiereEdad(e){return!1}marcarEdadConfirmada(e){this.edadConfirmadaSesion=e}async agregar(e,o="unidad"){const a=this.productos.find(n=>n.sku===e);return a?this.requiereEdad(a)?"EDAD|"+a.nombre:this.empujar(a,void 0,void 0,o):"Producto no encontrado"}empujar(e,o,a,n="unidad"){const c=n==="paquete"&&(e.precioPaqueteUsd||e.esCaja&&e.unidadesPorCaja&&e.unidadesPorCaja>1),i=c&&e.unidadesPorCaja||1,b=c?e.precioPaqueteUsd?Number(e.precioPaqueteUsd):Number(e.precioUsd)*i:Number(e.precioUsd),t=!c&&((e.capacidades&ce)!==0||e.unidad==="kg"||e.unidad==="ml"),r=t?.25:1,s=this.carrito.find(m=>m.sku===e.sku&&m.serie===o&&m.variante===a&&m.modoVenta===n),l=(s?s.cantidad:0)+r;if(!e.sinStock){const m=Number(e.stock);if(m<l*i)return`Stock insuficiente para ${e.nombre}. Disponible: ${m}, Solicitado: ${l*i}`}return this.tasaBloqueadaTicket===null&&(this.tasaBloqueadaTicket=this.modelo.tasaActual),s?s.cantidad=t?Math.round(l*1e3)/1e3:Math.round(l):this.carrito.push({sku:e.sku,nombre:e.nombre,precioUsd:b,cantidad:t?r:Math.round(r),pesable:t,conSerie:(e.capacidades&ge)!==0,conVariantes:(e.capacidades&ye)!==0,serie:o,variante:a,modoVenta:n}),this.notificar(),null}asignarSerie(e,o){const a=this.carrito.find(n=>n.sku===e);a&&(a.serie=o.trim().toUpperCase(),this.notificar())}asignarVariante(e,o){const a=this.carrito.find(n=>n.sku===e);a&&(a.variante=o.trim(),this.notificar())}cambiarCantidad(e,o){const a=this.carrito.find(i=>i.sku===e);if(!a)return null;const n=this.productos.find(i=>i.sku===e);let c=Math.max(0,o);return a.pesable?c=Math.round(c*1e3)/1e3:c=Math.round(c),n&&!n.sinStock&&c>Number(n.stock)?`Stock insuficiente para ${a.nombre}. Disponible: ${n.stock}`:(a.cantidad=c,a.cantidad===0?this.quitar(e):this.notificar(),null)}quitar(e){this.carrito=this.carrito.filter(o=>o.sku!==e),this.carrito.length===0&&(this.tasaBloqueadaTicket=null),this.notificar()}vaciar(){this.carrito=[],this.tasaBloqueadaTicket=null,this.notificar()}async cobrar(e,o,a){if(this.modoCuentaAbierta&&this.cuentaSeleccionada)throw new Error("Hay una cuenta abierta seleccionada. Usa su boton de cobro.");if(this.carrito.length===0)throw new Error("Carrito vacio");for(const c of this.carrito){const i=this.productos.find(b=>b.sku===c.sku);if(i&&!i.sinStock&&c.cantidad>Number(i.stock))throw new Error(`Stock insuficiente para ${i.nombre}. Disponible: ${i.stock}, En carrito: ${c.cantidad}`)}const n=await R.registrarVenta(this.carrito.map(c=>({sku:c.sku,cantidad:String(c.cantidad),modo_venta:c.modoVenta})),this.edadConfirmadaSesion,e||"0",o,a,`sale-${Date.now()}-${Math.random().toString(36).slice(2,8)}`);return this.vaciar(),this.edadConfirmadaSesion=!1,await this.refrescarInventario(),n}async crearCuenta(e){const o=await R.abrirCuenta(e);this.cuentas.some(a=>a.ventaId===o.ventaId)||this.cuentas.push(o),this.cuentaSeleccionada=o,this.notificar()}async agregarACuenta(e,o="unidad"){if(!this.cuentaSeleccionada)return"Selecciona una cuenta primero";const a=this.productos.find(c=>c.sku===e);if(!a)return"Producto no encontrado";if(this.requiereEdad(a))return"EDAD|"+a.nombre;const n=await R.agregarConsumo(this.cuentaSeleccionada.ventaId,a.sku,"1",this.edadConfirmadaSesion,o);return this.cuentaSeleccionada=n,this.cuentas=this.cuentas.map(c=>c.ventaId===n.ventaId?n:c),await this.refrescarInventario(),null}async cerrarCuentaActual(e,o){if(!this.cuentaSeleccionada)throw new Error("Ninguna cuenta seleccionada");const a=await R.cerrarCuenta(this.cuentaSeleccionada.ventaId,e||"0",void 0,o);return this.cuentas=this.cuentas.filter(n=>n.ventaId!==a.ventaId),this.cuentaSeleccionada=null,this.edadConfirmadaSesion=!1,await this.refrescarInventario(),a}async refrescarInventario(){this.productos=await R.productos(),this.notificar()}}const Y=u=>Z(u).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2});class Ze{constructor(e,o,a,n){A(this,"contenedor");A(this,"vm");A(this,"modelo");A(this,"modal");A(this,"pagosBorrador",null);A(this,"resolucionVueltoBorrador",null);A(this,"semaforoStock",{rojoMax:5,amarilloMax:15});this.contenedor=e,this.modal=o,this.vm=a,this.modelo=n,R.obtenerSemaforoStock().then(c=>{this.semaforoStock=c,this.renderDinamico()}),this.vm.suscribir(()=>this.renderDinamico()),this.modelo.suscribir(()=>this.renderDinamico())}render(){var e,o,a,n,c;this.contenedor.innerHTML=`
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
        </div>`,(e=document.getElementById("caja-buscar"))==null||e.addEventListener("input",i=>{this.vm.setBusqueda(i.target.value)}),(o=document.getElementById("caja-buscar"))==null||o.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),this.enterRapido())}),(a=document.getElementById("caja-vaciar"))==null||a.addEventListener("click",()=>{this.pagosBorrador=null,this.resolucionVueltoBorrador=null,this.vm.vaciar()}),(n=document.getElementById("caja-cobrar"))==null||n.addEventListener("click",()=>void this.abrirModalCobro()),(c=document.getElementById("btn-gestionar-operadores-caja"))==null||c.addEventListener("click",()=>void(async()=>{await R.obtenerJornadaActual()===null?this.abrirModalIniciarJornada():this.abrirModalOperadoresCaja()})()),this.renderDinamico()}async enterRapido(){const e=this.vm.visibles;if(e.length===0)return;const o=await this.vm.agregar(e[0].sku);o&&this.mostrarError(o);const a=document.getElementById("caja-buscar");a&&(a.value=""),this.vm.setBusqueda("")}mostrarError(e){if(e.startsWith("EDAD|")){this.modalEdad(e.slice(5));return}this.renderModal(`
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
            </div>`),(o=this.modal.querySelector("[data-no]"))==null||o.addEventListener("click",()=>this.cerrarModal()),(a=this.modal.querySelector("[data-si]"))==null||a.addEventListener("click",()=>{this.vm.marcarEdadConfirmada(!0),(async()=>{const n=this.vm.visibles;n[0]&&this.vm.empujar(n[0])})(),this.cerrarModal()})}async abrirModalOperadoresCaja(){const e=await R.listarOperadores(),o=await R.obtenerJornadaActual(),a=new Set((o==null?void 0:o.operadoresActivos)||[(o==null?void 0:o.operadorActual)||""]);(()=>{var i,b,t,r;const c=e.map(s=>{const d=a.has(s.nombre);return`
                <div class="flex items-center justify-between p-2.5 rounded border-2 border-brand-black ${d?"bg-purple-50 border-brand-purple":"bg-gray-50"}">
                    <label class="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0">
                        <input type="checkbox" data-cajero-chk="${s.id}" value="${s.nombre}" ${d?"checked":""} class="w-4 h-4 rounded text-brand-purple" />
                        <div>
                            <span class="font-heading font-black text-sm text-brand-black truncate block">${s.nombre}</span>
                            <span class="text-[10px] text-gray-500 font-bold">${s.activo?"Operador Activo":"Inactivo"}</span>
                        </div>
                    </label>
                    <div class="flex items-center gap-1 shrink-0">
                        <button data-cajero-edit="${s.id}" data-cajero-nom="${s.nombre}" title="Editar nombre" class="text-xs bg-white border border-gray-400 rounded px-1.5 py-0.5 hover:bg-gray-100">✎</button>
                        <button data-cajero-del="${s.id}" data-cajero-nom="${s.nombre}" title="Eliminar operador" class="text-xs text-red-600 bg-white border border-gray-400 rounded px-1.5 py-0.5 hover:bg-red-50">✕</button>
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
            `,"max-w-md"),(i=this.modal.querySelector("[data-cerrar]"))==null||i.addEventListener("click",()=>this.cerrarModal()),(b=this.modal.querySelector("#btn-cancelar-operadores-caja"))==null||b.addEventListener("click",()=>this.cerrarModal()),this.modal.querySelectorAll("button[data-cajero-edit]").forEach(s=>{s.addEventListener("click",async()=>{const d=s.dataset.cajeroEdit||"",l=s.dataset.cajeroNom||"",m=window.prompt("Modificar nombre del operador:",l);m&&m.trim()&&m.trim()!==l&&(await R.editarOperador(d,m.trim()),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())})}),this.modal.querySelectorAll("button[data-cajero-del]").forEach(s=>{s.addEventListener("click",async()=>{const d=s.dataset.cajeroDel||"",l=s.dataset.cajeroNom||"";window.confirm(`¿Confirmas eliminar al operador "${l}"?`)&&(await R.eliminarOperador(d),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())})}),(t=this.modal.querySelector("#form-nuevo-cajero-caja"))==null||t.addEventListener("submit",async s=>{s.preventDefault();const d=this.modal.querySelector("#in-nuevo-cajero-caja"),l=(d==null?void 0:d.value.trim())||"";l&&(await R.crearOperador(l),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())}),(r=this.modal.querySelector("#btn-guardar-operadores-caja"))==null||r.addEventListener("click",async()=>{const s=this.modal.querySelectorAll("input[data-cajero-chk]:checked"),d=[];if(s.forEach(l=>{l.value&&d.push(l.value)}),d.length===0){this.mostrarToast("Debes seleccionar al menos un operador activo en turno.","error");return}await R.asignarOperadoresTurno(d),this.cerrarModal(),this.renderDinamico()})})()}async abrirModalIniciarJornada(){const e=await R.listarOperadores();(()=>{var n,c,i,b;const a=e.length>0?e.map((t,r)=>`
                <div class="flex items-center p-2.5 rounded border-2 border-brand-black ${r===0?"bg-purple-50 border-brand-purple":"bg-gray-50"}">
                    <label class="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0">
                        <input type="checkbox" data-inicio-cajero-chk value="${t.nombre}" ${r===0?"checked":""} class="w-4 h-4 rounded text-brand-purple" />
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
            `,"max-w-md"),(n=this.modal.querySelector("[data-cerrar]"))==null||n.addEventListener("click",()=>this.cerrarModal()),(c=this.modal.querySelector("#btn-cancelar-inicio-jornada"))==null||c.addEventListener("click",()=>this.cerrarModal()),(i=this.modal.querySelector("#form-nuevo-cajero-inicio"))==null||i.addEventListener("submit",async t=>{t.preventDefault();const r=this.modal.querySelector("#in-nuevo-cajero-inicio"),s=(r==null?void 0:r.value.trim())||"";s&&(await R.crearOperador(s),this.cerrarModal(),this.abrirModalIniciarJornada())}),(b=this.modal.querySelector("#btn-abrir-turno"))==null||b.addEventListener("click",async()=>{const t=this.modal.querySelectorAll("input[data-inicio-cajero-chk]:checked"),r=[];if(t.forEach(d=>{d.value&&r.push(d.value)}),r.length===0){this.mostrarToast("Selecciona al menos un operador para abrir el turno.","error");return}const s=r[0];await R.abrirJornada(s,r),this.cerrarModal(),this.renderDinamico()})})()}async abrirModalCobro(){var f,h,g,E;if(this.vm.lineasCarrito.length===0)return;let e=[];try{e=await R.listarMetodosPago()}catch{e=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}const o=Number(this.vm.totalUsd.toFixed(2)),a=this.vm.tasaTicket,n=Number((o*a).toFixed(2)),c=e.find(w=>w.nombre==="BIOPAGO")||e.find(w=>w.moneda==="BS")||e[0]||{nombre:"BIOPAGO",moneda:"BS"};let i;if(this.pagosBorrador&&this.pagosBorrador.length>0){if(i=this.pagosBorrador.map(w=>({...w})),i.length===1&&i[0]){const w=i[0];w.monto=w.moneda==="USD"?o:n,w.tasaCambio=a}else if(i.length>1){let w=0;for(let j=0;j<i.length-1;j++){const x=i[j],v=x.tasaCambio>0?x.tasaCambio:a;w+=x.moneda==="USD"?x.monto*v:x.monto}const P=Math.max(0,Math.round((n-w)*100)/100),T=i[i.length-1];T&&(T.monto=T.moneda==="USD"?a>0?Number((P/a).toFixed(2)):0:P,T.tasaCambio=a)}}else i=[{id:"p-1",metodo:c.nombre,moneda:c.moneda,monto:c.moneda==="USD"?o:n,tasaCambio:a,referencia:""}];let b=((f=this.resolucionVueltoBorrador)==null?void 0:f.estado)||"PAGADO",t=((h=this.resolucionVueltoBorrador)==null?void 0:h.metodo)||"BS.EFEC.",r=((g=this.resolucionVueltoBorrador)==null?void 0:g.tasa)||a;e.some(w=>w.nombre===t)||(t=((E=e[0])==null?void 0:E.nombre)||"BS.EFEC.");let s=!1;const d=()=>{let w=0;for(const U of i)if(U.moneda==="USD"){const D=U.tasaCambio>0?U.tasaCambio:a;w+=U.monto*D}else w+=U.monto;w=Math.round(w*100)/100;const P=a>0?Math.round(w/a*100)/100:0,T=Math.max(0,Math.round((n-w)*100)/100),j=a>0?Math.max(0,Math.round(T/a*100)/100):0,x=Math.max(0,Math.round((w-n)*100)/100),v=a>0?Math.max(0,Math.round(x/a*100)/100):0,y=w>=n-.01&&i.every(U=>U.monto>0);return{cubiertoUsd:P,cubiertoBs:w,faltanteUsd:j,faltanteBs:T,vueltoUsd:v,vueltoBs:x,puedeConfirmar:y}},l=()=>{const w=d(),P=e.filter(C=>C.moneda==="USD"),T=e.filter(C=>C.moneda==="BS"),j=i.map((C,G)=>{const _=P.map(k=>`<option value="${k.nombre}" ${k.nombre===C.metodo?"selected":""}>${k.nombre} ($ - Tasa Dinámica)</option>`).join(""),B=`
                        <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                            ${T.map(k=>`<option value="${k.nombre}" ${k.nombre===C.metodo?"selected":""}>${k.nombre} (Bs.)</option>`).join("")}
                        </optgroup>
                        <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                            ${_}
                        </optgroup>
                    `,N=C.tasaCambio>0?C.tasaCambio:a,S=C.moneda==="USD"?C.monto*N:C.monto,M=a>0?S/a:0;return`
                    <div class="border-2 border-brand-black rounded-lg p-3 bg-gray-50 mb-2.5">
                        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span class="font-heading font-black text-xs uppercase text-gray-700">
                                Pago #${G+1} · <span class="${C.moneda==="USD"?"text-brand-purple":"text-brand-black"}">${C.moneda==="USD"?"Divisa ($ USD)":"Moneda Nacional (Bs.)"}</span>
                            </span>
                            ${i.length>1?`<button data-eliminar-pago="${C.id}" class="text-xs font-black text-red-600 hover:text-red-800 bg-red-50 border border-red-300 rounded px-2 py-0.5">Eliminar</button>`:""}
                        </div>
                        ${C.moneda==="USD"?`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Divisa</label>
                                <select data-pago-metodo="${C.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${B}
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
                                    <button type="button" data-reset-tasa="${C.id}" class="text-[9px] font-black uppercase text-brand-purple hover:underline" title="Restablecer a tasa BCV oficial">BCV: ${Y(a)}</button>
                                </div>
                                <input type="number" step="0.01" min="1" max="100000" data-pago-tasa="${C.id}" value="${N>0?N:a}"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${C.id}" value="${C.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-purple">Aporte: Bs. ${Y(S)}</span>
                            <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${Y(M)} ${N!==a?`(Tasa: Bs. ${Y(N)} vs BCV: Bs. ${Y(a)})`:""}</span>
                        </div>
                        `:`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-5">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Bolívares</label>
                                <select data-pago-metodo="${C.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${B}
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
                            <span class="font-bold text-brand-black">Aporte directo: Bs. ${Y(C.monto)}</span>
                            <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${Y(M)}</span>
                        </div>
                        `}
                    </div>`}).join(""),x=e.find(C=>C.nombre===t),v=(x==null?void 0:x.moneda)==="USD",y=r>0?r:a,U=v&&y>0?Number((w.vueltoBs/y).toFixed(2)):w.vueltoUsd,D=w.faltanteBs>.009?`
                    <div class="bg-amber-50 border-2 border-amber-500 rounded p-3 text-center mb-3">
                        <p class="text-xs font-black uppercase text-amber-900">Monto Incompleto por Cubrir</p>
                        <p class="font-heading font-black text-xl text-amber-700">Faltan Bs. ${Y(w.faltanteBs)} · <span class="text-base text-amber-900">$ ${Y(w.faltanteUsd)} (Equiv. Oficial)</span></p>
                    </div>`:w.vueltoBs>.009?`
                    <div class="border-2 border-emerald-700 bg-emerald-50/70 rounded-lg p-3 mb-3">
                        <div class="flex flex-wrap items-center justify-between gap-1 mb-2">
                            <div>
                                <span class="text-[10px] font-black uppercase text-emerald-900 tracking-wide block">Excedente / Vuelto del Cliente</span>
                                <span class="font-heading font-black text-xl text-emerald-800">Bs. ${Y(w.vueltoBs)}</span>
                            </div>
                            <span class="text-xs font-bold text-emerald-900 font-mono">$ ${Y(w.vueltoUsd)} equiv. oficial</span>
                        </div>

                        <!-- Selector: Entregar Vuelto vs Retener Vuelto -->
                        <div class="grid grid-cols-2 gap-2 mb-2.5">
                            <button type="button" id="btn-vuelto-pagado" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${b==="PAGADO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                                ENTREGAR VUELTO (PAGADO)
                            </button>
                            <button type="button" id="btn-vuelto-retenido" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${b==="RETENIDO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                                RETENER VUELTO (A FAVOR)
                            </button>
                        </div>

                        ${b==="PAGADO"?`
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
                            ${v?`
                            <div class="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-gray-100">
                                <div>
                                    <span class="text-[10px] font-bold text-gray-500 uppercase block">Tasa Pactada Vuelto USD:</span>
                                    <div class="flex items-center gap-1.5">
                                        <input id="input-tasa-vuelto" type="text" inputmode="decimal" value="${r.toFixed(2)}"
                                            class="w-24 border-2 border-brand-black rounded px-2 py-0.5 text-xs font-mono font-bold" />
                                        <button id="btn-reset-tasa-vuelto" type="button" class="text-[10px] bg-gray-100 border border-gray-400 rounded px-1.5 py-0.5 hover:bg-gray-200">
                                            Reset BCV
                                        </button>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="text-[10px] font-bold text-gray-500 uppercase block">Divisa USD a Entregar:</span>
                                    <span class="font-heading font-black text-base text-brand-purple">
                                        $ ${Y(U)} USD
                                    </span>
                                </div>
                            </div>
                            `:`
                            <div class="flex items-center justify-between pt-1 border-t border-gray-100 text-xs">
                                <span class="font-bold text-gray-600">Total a Entregar en Bolívares:</span>
                                <span class="font-heading font-black text-base text-brand-black">Bs. ${Y(w.vueltoBs)}</span>
                            </div>
                            `}
                        </div>
                        `:`
                        <div class="bg-white border border-gray-300 rounded p-2 text-xs text-gray-700">
                            <p class="font-bold text-emerald-900 mb-0.5">Vuelto Retenido como Saldo a Favor</p>
                            <p class="text-[11px] text-gray-600 leading-tight">
                                El excedente de <b>Bs. ${Y(w.vueltoBs)} ($ ${Y(w.vueltoUsd)})</b> no genera egreso físico de caja y se asienta en el comprobante como saldo a favor o ganancia por excedente del negocio.
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
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${Y(o)} USD</span>
                                <span class="font-heading font-black text-xl text-brand-purple">Bs. ${Y(n)}</span>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-[10px] font-bold text-gray-500 uppercase block">Tasa Oficial Aplicada</span>
                            <span class="text-xs font-mono font-black text-gray-800">Bs. ${Y(a)}</span>
                        </div>
                    </div>

                    <!-- Lista de Pagos Asignados -->
                    <div class="mb-3">
                        ${j}
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
                    ${s?`
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
                    ${D}

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
                        <button id="btn-confirmar-cobro" ${w.puedeConfirmar?"":"disabled"}
                            class="bg-green-700 hover:bg-green-800 disabled:opacity-30 disabled:cursor-not-allowed text-white font-heading font-black px-5 py-2.5 rounded border-2 border-brand-black shadow-brutal-sm text-sm">
                            CONFIRMAR COBRO
                        </button>
                    </div>
                </div>`,"max-w-xl"),m()},m=()=>{var j,x,v,y,U,D,C,G,_,z;const w=()=>{this.pagosBorrador=i,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},this.cerrarModal()};this.modal.querySelectorAll("[data-cerrar]").forEach(B=>B.addEventListener("click",w)),(j=this.modal.querySelector("[data-cancelar]"))==null||j.addEventListener("click",w),(x=this.modal.querySelector("#btn-volver-caja"))==null||x.addEventListener("click",()=>{this.pagosBorrador=i,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},this.cerrarModal();const B=document.getElementById("caja-buscar");B==null||B.focus()}),(v=this.modal.querySelector("#btn-vuelto-pagado"))==null||v.addEventListener("click",()=>{b="PAGADO",this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},l()}),(y=this.modal.querySelector("#btn-vuelto-retenido"))==null||y.addEventListener("click",()=>{b="RETENIDO",this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},l()}),(U=this.modal.querySelector("#select-metodo-vuelto"))==null||U.addEventListener("change",B=>{t=B.target.value,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},l()});const P=this.modal.querySelector("#input-tasa-vuelto");P&&(P.addEventListener("input",B=>{const N=Z(B.target.value);r=N>0?N:a,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r}}),P.addEventListener("blur",()=>{l()})),(D=this.modal.querySelector("#btn-reset-tasa-vuelto"))==null||D.addEventListener("click",()=>{r=a,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},l()}),this.modal.querySelectorAll("select[data-pago-metodo]").forEach(B=>{B.addEventListener("change",N=>{const S=B.dataset.pagoMetodo,M=N.target.value,k=i.find(q=>q.id===S);if(k){const q=e.find(te=>te.nombre===M),J=(q==null?void 0:q.moneda)||"BS";k.moneda=J,k.tasaCambio=a,i.length===1?k.monto=k.moneda==="USD"?o:n:J!==k.moneda&&(J==="USD"?k.monto=Number((a>0?k.monto/a:0).toFixed(2)):k.monto=Number((k.monto*a).toFixed(2))),k.metodo=M,this.pagosBorrador=i,l()}})}),this.modal.querySelectorAll("input[data-pago-tasa]").forEach(B=>{B.addEventListener("input",N=>{const S=B.dataset.pagoTasa,M=Z(N.target.value),k=i.find(q=>q.id===S);if(k){k.tasaCambio=M>0?M:a,this.pagosBorrador=i;const q=d(),J=this.modal.querySelector("#btn-confirmar-cobro");J&&(J.disabled=!q.puedeConfirmar)}}),B.addEventListener("blur",()=>{l()})}),this.modal.querySelectorAll("button[data-reset-tasa]").forEach(B=>{B.addEventListener("click",()=>{const N=B.dataset.resetTasa,S=i.find(M=>M.id===N);S&&(S.tasaCambio=a,this.pagosBorrador=i,l())})}),this.modal.querySelectorAll("input[data-pago-monto]").forEach(B=>{B.addEventListener("input",N=>{const S=B.dataset.pagoMonto,M=Z(N.target.value),k=i.find(q=>q.id===S);if(k){k.monto=M,this.pagosBorrador=i;const q=d(),J=this.modal.querySelector("#btn-confirmar-cobro");J&&(J.disabled=!q.puedeConfirmar)}}),B.addEventListener("blur",()=>{l()})}),this.modal.querySelectorAll("input[data-pago-ref]").forEach(B=>{B.addEventListener("input",N=>{const S=B.dataset.pagoRef,M=N.target.value,k=i.find(q=>q.id===S);k&&(k.referencia=M,this.pagosBorrador=i)})}),this.modal.querySelectorAll("button[data-eliminar-pago]").forEach(B=>{B.addEventListener("click",()=>{const N=B.dataset.eliminarPago;i=i.filter(S=>S.id!==N),this.pagosBorrador=i,l()})}),(C=this.modal.querySelector("#btn-agregar-pago"))==null||C.addEventListener("click",()=>{let B=d();const N="p-"+Math.random().toString(36).slice(2,7),S=e.find(k=>!i.some(q=>q.metodo===k.nombre))||e[0]||{nombre:"BS.EFEC.",moneda:"BS"};if(B.faltanteBs<=.01&&i.length===1&&i[0]){const k=i[0],q=k.tasaCambio>0?k.tasaCambio:a,J=k.moneda==="USD"?k.monto*q:k.monto,te=Math.round(J/2*100)/100;k.monto=k.moneda==="USD"?q>0?Number((te/q).toFixed(2)):0:te,B=d()}const M=B.faltanteBs>0?B.faltanteBs:0;i.push({id:N,metodo:S.nombre,moneda:S.moneda,monto:S.moneda==="USD"?a>0?Number((M/a).toFixed(2)):0:M,tasaCambio:a,referencia:""}),this.pagosBorrador=i,l()}),(G=this.modal.querySelector("#btn-toggle-nuevo-metodo"))==null||G.addEventListener("click",()=>{s=!s,l()}),(_=this.modal.querySelector("#btn-guardar-nuevo-metodo"))==null||_.addEventListener("click",()=>{(async()=>{const B=this.modal.querySelector("#input-nuevo-metodo-nombre"),N=(B==null?void 0:B.value.trim())||"",S=this.modal.querySelector('input[name="radio-nuevo-metodo-moneda"][value="USD"]'),M=S!=null&&S.checked?"USD":"BS";if(N)try{e=await R.crearMetodoPago(N,M),s=!1,l()}catch{}})()}),this.modal.querySelectorAll("button[data-caja-eliminar-metodo]").forEach(B=>{B.addEventListener("click",()=>{(async()=>{const N=B.dataset.cajaEliminarMetodo||"";N&&window.confirm(`¿Seguro que deseas eliminar el método de pago "${N}"?`)&&(e=await R.eliminarMetodoPago(N),i.forEach(S=>{if(S.metodo===N){const M=e[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"};S.metodo=M.nombre,S.moneda=M.moneda}}),this.pagosBorrador=i,l())})()})});let T=!1;(z=this.modal.querySelector("#btn-confirmar-cobro"))==null||z.addEventListener("click",()=>{T||(T=!0,(async()=>{const B=this.modal.querySelector("#cobro-error");try{const N=i.filter($=>$.monto>0).map($=>{const F=$.moneda==="USD"&&$.tasaCambio>0?$.tasaCambio:a,O=$.moneda==="USD"?$.monto*F:$.monto,W=a>0?O/a:0;return{metodo:$.metodo,moneda:$.moneda,montoUsd:($.moneda==="USD"?$.monto:W).toFixed(2),montoBs:O.toFixed(2),tasaCambio:$.moneda==="USD"?F.toFixed(2):void 0,referencia:$.referencia.trim()||void 0}});if(N.length===0)throw new Error("Debe especificar al menos un pago válido.");const S=d(),M=N.reduce(($,F)=>$+Number(F.montoBs),0),k=e.find($=>$.nombre===t),q=(k==null?void 0:k.moneda)==="USD",J=q?r>0?r:a:void 0,te=q&&J?(S.vueltoBs/J).toFixed(2):S.vueltoUsd.toFixed(2),H={estado:S.vueltoBs>.009?b:"SIN_VUELTO",metodo:S.vueltoBs>.009&&b==="PAGADO"?t:void 0,montoBs:S.vueltoBs>.009?S.vueltoBs.toFixed(2):void 0,montoUsd:S.vueltoBs>.009?te:void 0,tasa:S.vueltoBs>.009&&b==="PAGADO"&&J?J.toFixed(2):void 0},I=await this.vm.cobrar(M.toFixed(2),N,H);this.pagosBorrador=null,this.resolucionVueltoBorrador=null,this.cerrarModal(),this.modalTicketExito(I,M)}catch(N){T=!1,B&&(B.textContent=N instanceof Error?N.message.replace(/"/g,""):String(N),B.classList.remove("hidden"))}})())})};l()}modalTicketExito(e,o){const a=e.pagos&&e.pagos.length>0?e.pagos.map(c=>`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-1.5 text-left font-heading font-black text-xs text-brand-black">
                        ${c.metodo}
                        ${c.tasaCambio?`<span class="block text-[10px] text-brand-purple font-mono font-bold">Tasa: Bs. ${Y(Number(c.tasaCambio))}</span>`:""}
                        ${c.referencia?`<span class="block text-[10px] text-gray-500 font-mono font-normal">Ref: ${c.referencia}</span>`:""}
                    </td>
                    <td class="py-1.5 text-right font-black text-xs text-brand-black">$ ${Y(c.montoUsd)}</td>
                    <td class="py-1.5 text-right font-black text-xs text-brand-purple">Bs. ${Y(c.montoBs)}</td>
                </tr>
            `).join(""):'<tr><td colspan="3" class="py-2 text-center text-xs text-gray-400">Pago Único Estándar</td></tr>',n=Z(e.vueltoBs);this.renderModal(`
            <div class="text-center mb-3">
                <h3 class="font-heading font-black text-3xl text-green-700">VENTA EXITOSA</h3>
                <p class="font-body text-xs text-brand-text">Ticket ${e.ventaId} · Tasa BCV: Bs. ${Y(Number(e.tasaDelDia))}</p>
            </div>
            <div class="border-t-2 border-b-2 border-brand-black py-3 mb-3 text-center bg-gray-50 rounded">
                <span class="text-[10px] font-bold text-gray-500 uppercase block">Total Liquidado</span>
                <p class="font-heading font-black text-3xl text-brand-purple">Bs. ${Y(o)}</p>
                <p class="font-body text-xs text-gray-600">$ ${Y(Number(e.totalUsd))} USD</p>
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

            ${n>0?`
            <div class="mb-3 ${e.estadoVuelto==="RETENIDO"?"bg-blue-50 border-blue-500":"bg-emerald-50 border-emerald-500"} border rounded p-2.5 text-center">
                <span class="text-[10px] font-bold ${e.estadoVuelto==="RETENIDO"?"text-blue-900":"text-emerald-800"} uppercase block">
                    ${e.estadoVuelto==="RETENIDO"?"Vuelto Retenido (Saldo a Favor del Negocio)":"Vuelto Pagado al Cliente"}
                </span>
                <span class="font-heading font-black text-xl ${e.estadoVuelto==="RETENIDO"?"text-blue-800":"text-emerald-700"}">
                    Bs. ${Y(n)}
                </span>
                <span class="block text-xs font-bold text-gray-600 mt-0.5">
                    ${e.estadoVuelto==="RETENIDO"?`Asentado en comprobante ($ ${Y(e.montoVueltoUsd||(Number(e.tasaDelDia)>0?n/Number(e.tasaDelDia):0))} USD equiv.)`:`Método: ${e.metodoVuelto||"Efectivo"} ${e.montoVueltoUsd&&Number(e.montoVueltoUsd)>0&&e.tasaVuelto?`($ ${Y(e.montoVueltoUsd)} USD @ Bs. ${Y(e.tasaVuelto)})`:""}`}
                </span>
            </div>`:""}

            <button data-cerrar class="w-full bg-brand-black text-white font-heading font-black text-lg py-3 rounded border-2 border-brand-black shadow-brutal-sm hover:bg-gray-800">
                LISTO
            </button>`,"max-w-md")}renderDinamico(){const e=this.contenedor.querySelector("#caja-grid");if(!e)return;const o=this.semaforoStock;e.innerHTML=this.vm.visibles.map(i=>{const b=(i.capacidades&ce)!==0,t=Number(i.stock),r=t<=0,s=i.sinStock?"text-purple-700":t<=o.rojoMax?"text-red-600":t<=o.amarilloMax?"text-amber-600":"text-emerald-700",d=i.unidad?i.unidad.toLowerCase()==="un"?"un.":i.unidad.toLowerCase():b?"kg":"un.",l=d==="kg"?"kg":d==="ml"?"ml":"un.";let m="";if(i.sinStock)m="LIBRE";else if(r)m="AGOTADO";else if(i.esCaja&&i.unidadesPorCaja&&i.unidadesPorCaja>1){const h=Math.floor(t/i.unidadesPorCaja),g=t%i.unidadesPorCaja;m=`${h} cajas y ${g} un. (${t} un.)`}else m=`${t} ${d}`;const f=i.precioPaqueteUsd&&i.nombrePaquete||i.esCaja&&i.unidadesPorCaja&&i.unidadesPorCaja>1;return`
                <div class="relative" data-producto-card="${i.sku}">
                    <button data-sku="${i.sku}" data-modo="unidad" ${r&&!i.sinStock?"disabled":""}
                        class="text-left border-2 border-brand-black rounded p-3 bg-white shadow-brutal hover:-translate-y-0.5 hover:shadow-brutal-hover transition-all active:translate-y-0.5 active:shadow-none disabled:opacity-30 w-full">
                        <div class="flex justify-between items-start mb-1 gap-1">
                            <span class="font-heading font-extrabold leading-tight text-sm text-brand-black truncate" title="${i.nombre}">${i.nombre}</span>
                            <div class="flex gap-1 shrink-0">
                                ${`<span class="text-[9px] font-black bg-amber-100 text-amber-900 border border-brand-black rounded px-1 lowercase">${l}</span>`}
                            </div>
                        </div>
                        <p class="font-heading font-black text-lg text-brand-purple">Bs. ${this.modelo.bs(i.precioUsd)}</p>
                        <div class="flex justify-between items-center mt-1">
                            <span class="text-xs font-bold text-gray-600">$${Number(i.precioUsd).toFixed(2)}</span>
                            <span class="text-[11px] font-black ${s}">
                                ${m}
                            </span>
                        </div>
                    </button>
                    ${f?`
                    <button data-sku="${i.sku}" data-modo="paquete" ${r&&!i.sinStock?"disabled":""}
                        class="text-left border-2 border-brand-purple rounded p-2 bg-purple-50 shadow-brutal hover:-translate-y-0.5 hover:shadow-brutal-hover transition-all active:translate-y-0.5 active:shadow-none disabled:opacity-30 w-full mt-1">
                        <div class="flex justify-between items-center">
                            <span class="font-heading font-bold text-xs text-purple-800">${i.nombrePaquete||"Caja"} (${i.precioPaqueteUsd?`$${Number(i.precioPaqueteUsd).toFixed(2)}`:`$${(Number(i.precioUsd)*(i.unidadesPorCaja||1)).toFixed(2)}`})</span>
                            <span class="text-[10px] font-black text-purple-600">${i.unidadesPorCaja||1} un.</span>
                        </div>
                    </button>`:""}
                </div>`}).join(""),e.querySelectorAll("button[data-sku]").forEach(i=>i.addEventListener("click",()=>{const b=i.dataset.sku??"",t=i.dataset.modo||"unidad";(async()=>{const r=this.vm.modoCuentaAbierta?await this.vm.agregarACuenta(b,t):await this.vm.agregar(b,t);r&&this.mostrarError(r)})()}));const a=this.contenedor.querySelector("#caja-lineas");a&&(a.innerHTML=this.vm.lineasCarrito.length===0?'<p class="text-center text-brand-text font-body py-10">Toca un producto para agregarlo</p>':this.vm.lineasCarrito.map(i=>`
                    <div class="border-2 border-brand-black rounded p-2 bg-white shadow-sm space-y-1">
                        <div class="flex items-center gap-2">
                            <div class="flex-1 min-w-0 pr-2">
                                <p class="font-heading font-bold text-sm truncate" title="${i.nombre}">
                                    ${i.nombre}
                                    ${i.modoVenta==="paquete"?'<span class="inline-block ml-1 text-[9px] font-black bg-purple-100 text-purple-800 border border-brand-purple rounded px-1">paquete</span>':""}
                                </p>
                                <p class="text-xs text-gray-600 font-bold">$${i.precioUsd.toFixed(2)} · Bs. ${this.modelo.bs(Number((i.precioUsd*i.cantidad).toFixed(2)))}</p>
                            </div>
                            ${i.pesable?`<input type="number" step="0.05" min="0.01" max="999.99" maxlength="6" value="${Number(i.cantidad.toFixed(3))}" data-qty="${i.sku}" class="w-20 border-2 border-brand-black rounded px-1 py-0.5 text-right font-bold text-sm" />`:`<button data-menos="${i.sku}" class="w-7 h-7 border-2 border-brand-black rounded font-black bg-amber-100 text-sm">-</button>
                                   <span class="font-black w-5 text-center text-sm">${i.cantidad}</span>
                                   <button data-mas="${i.sku}" class="w-7 h-7 border-2 border-brand-black rounded font-black bg-emerald-100 text-sm">+</button>`}
                            <button data-quitar="${i.sku}" class="w-7 h-7 border-2 border-brand-black rounded font-black bg-red-100 text-red-800 text-sm hover:bg-red-600 hover:text-white transition-colors">&times;</button>
                        </div>
                    </div>`).join(""));const n=this.contenedor.querySelector("#caja-total-usd"),c=this.contenedor.querySelector("#caja-total-bs");n&&(n.textContent="$ "+Y(this.vm.totalUsd)),c&&(c.textContent="Bs. "+Y(this.vm.totalBs)),R.obtenerJornadaActual().then(i=>{const b=this.contenedor.querySelector("#caja-operadores-activo-texto"),t=this.contenedor.querySelector("#btn-gestionar-operadores-caja"),r=this.contenedor.querySelector("#caja-cobrar");if(i===null){if(b&&(b.textContent="SIN TURNO ACTIVO",b.title="No hay jornada activa. Abre un turno para operar."),t){t.classList.remove("bg-purple-100","text-brand-purple","border-brand-purple","hover:bg-purple-200"),t.classList.add("bg-orange-100","text-red-800","border-red-600","hover:bg-orange-200");const s=t.querySelector("span.rounded-full");s&&(s.classList.remove("bg-emerald-500"),s.classList.add("bg-red-500"))}r&&(r.disabled=!0,r.title="Abre un turno antes de cobrar")}else{const s=i.operadoresActivos&&i.operadoresActivos.length>0?i.operadoresActivos.join(", "):i.operadorActual||"Operador en caja";if(b&&(b.textContent=s,b.title=`Operadores en caja: ${s}`),t){t.classList.add("bg-purple-100","text-brand-purple","border-brand-purple","hover:bg-purple-200"),t.classList.remove("bg-orange-100","text-red-800","border-red-600","hover:bg-orange-200");const d=t.querySelector("span.rounded-full");d&&(d.classList.add("bg-emerald-500"),d.classList.remove("bg-red-500"))}r&&(r.disabled=!1,r.title="")}}),this.contenedor.querySelectorAll("[data-mas]").forEach(i=>i.addEventListener("click",()=>{const b=i.dataset.mas??"",t=this.vm.lineasCarrito.find(r=>r.sku===b);if(t){const r=this.vm.cambiarCantidad(b,t.cantidad+1);r&&this.mostrarError(r)}})),this.contenedor.querySelectorAll("[data-menos]").forEach(i=>i.addEventListener("click",()=>{const b=i.dataset.menos??"",t=this.vm.lineasCarrito.find(r=>r.sku===b);t&&this.vm.cambiarCantidad(b,Math.max(1,t.cantidad-1))})),this.contenedor.querySelectorAll("[data-quitar]").forEach(i=>i.addEventListener("click",()=>this.vm.quitar(i.dataset.quitar??""))),this.contenedor.querySelectorAll("input[data-qty]").forEach(i=>i.addEventListener("change",()=>{const b=Number(i.value||"0"),t=Math.min(999.99,Math.max(.01,Number.isFinite(b)?b:.01));i.value=String(t);const r=this.vm.cambiarCantidad(i.dataset.qty??"",t);r&&this.mostrarError(r)}))}mostrarToast(e,o="info"){var c;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},n=document.createElement("div");n.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,n.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(c=n.querySelector("button"))==null||c.addEventListener("click",()=>n.remove()),document.body.appendChild(n),setTimeout(()=>n.remove(),8e3)}}const ee=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},Q=u=>{const e=ee(u);return(Math.round((e+Number.EPSILON)*100)/100).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})},se=u=>{const e=ee(u);return e>=1e9?(e/1e9).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})+" Mil Millones":e>=1e6?(e/1e6).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})+" Millones":Q(e)};class Xe{constructor(){A(this,"datos",null)}setDatos(e){this.datos=e}get panel(){return this.datos}}class Ye{constructor(e,o,a,n){A(this,"contenedor");A(this,"vm");A(this,"modelo");A(this,"criterioGrafica","volumen");A(this,"respaldos",[]);A(this,"transacciones",[]);A(this,"productos",[]);A(this,"categorias",[]);A(this,"rangoDetalleFechas","");A(this,"jornadaActual",null);A(this,"POR_PAGINA_TRX",20);A(this,"paginaTrx",1);A(this,"margenBrutoPct",0);A(this,"margenNetoPct",0);this.contenedor=e,this.vm=a,this.modelo=n}calcularDineroPorCategoria(){const e=this.modelo.tasaActual||807.39;let o=0;const a={};return this.categorias.forEach(n=>{a[n.id]={categoriaId:n.id,nombre:n.nombre,cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}}),a["cat-general"]||(a["cat-general"]={categoriaId:"cat-general",nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}),this.productos.forEach(n=>{const c=n.categoriaId||"cat-general";a[c]||(a[c]={categoriaId:c,nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0});const i=Number(n.stock)||0,b=ee(n.precioBrutoUsd),t=ee(n.precioUsd);a[c].cantidadProductos+=1,a[c].unidadesStock+=i;const r=i*b;a[c].brutoUsd+=r,a[c].ventaUsd+=i*t,o+=r}),Object.values(a).map(n=>{const c=o>0?(n.brutoUsd/o*100).toFixed(1):"0.0",i=Math.max(0,n.ventaUsd-n.brutoUsd),b=n.ventaUsd>0?(i/n.ventaUsd*100).toFixed(1):"0.0";return{categoriaId:n.categoriaId,nombre:n.nombre,cantidadProductos:n.cantidadProductos,unidadesStock:n.unidadesStock,dineroBrutoUsd:n.brutoUsd.toFixed(2),dineroBrutoBs:(n.brutoUsd*e).toFixed(2),dineroVentaUsd:n.ventaUsd.toFixed(2),dineroVentaBs:(n.ventaUsd*e).toFixed(2),margenBrutoProyectadoUsd:i.toFixed(2),margenBrutoPct:b,porcentajeCapital:c}})}calcularMargenes(){if(this.productos.length===0)return;let e=0,o=0;this.productos.forEach(a=>{const n=ee(a.precioUsd),c=ee(a.precioBrutoUsd);n>0&&(e+=n,c>0&&(o+=c))}),e>0&&(this.margenBrutoPct=Math.round((e-o)/e*100),this.margenNetoPct=Math.max(0,this.margenBrutoPct-12))}obtenerTimestampTicket(e){if(e.fechaUnix&&e.fechaUnix>0)return e.fechaUnix;if(e.fechaHora){const o=e.fechaHora.match(/(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})/);if(o&&o[1]&&o[2]&&o[3]&&o[4]&&o[5]&&o[6]){const a=Date.UTC(parseInt(o[1],10),parseInt(o[2],10)-1,parseInt(o[3],10),parseInt(o[4],10),parseInt(o[5],10),parseInt(o[6],10));if(!isNaN(a))return Math.floor(a/1e3)}}return Math.floor(Date.now()/1e3)}renderFilasTransacciones(e){if(e.length===0)return'<tr><td colspan="7" class="py-6 text-center text-gray-400 font-bold">No se encontraron transacciones registradas.</td></tr>';const o=Math.ceil(e.length/this.POR_PAGINA_TRX);this.paginaTrx>o&&(this.paginaTrx=o),this.paginaTrx<1&&(this.paginaTrx=1);const a=(this.paginaTrx-1)*this.POR_PAGINA_TRX;return e.slice(a,a+this.POR_PAGINA_TRX).map(c=>{const i=c.fechaHora||"Reciente",b=c.ventaId.startsWith("CTA-"),t=b?"Cuenta Abierta":"Caja Directa";return`
            <tr class="hover:bg-gray-50 border-b border-gray-100 last:border-none transition-colors">
                <td class="py-2.5 font-mono text-brand-black">${c.ventaId}</td>
                <td class="py-2.5 text-gray-600">${i}</td>
                <td class="py-2.5">
                    <span class="px-2 py-0.5 rounded border border-brand-black text-[10px] font-black ${b?"bg-amber-100 text-amber-900":"bg-blue-100 text-blue-900"}">
                        ${t}
                    </span>
                </td>
                <td class="py-2.5 text-gray-700">${c.operador||"Principal"}</td>
                <td class="py-2.5 text-right font-mono text-gray-600">Bs. ${Q(Number(c.tasaDelDia))}</td>
                <td class="py-2.5 text-right font-black">$ ${Q(c.totalUsd)}</td>
                <td class="py-2.5 text-right font-black text-brand-purple">Bs. ${Q(c.totalBs)}</td>
            </tr>`}).join("")}async render(){var j;const[e,o,a,n,c,i]=await Promise.all([R.panel(),R.respaldos(),R.ventas(),R.productos(),R.categorias(),R.obtenerJornadaActual()]);this.vm.setDatos(e),this.respaldos=o,this.transacciones=a,this.productos=n,this.categorias=c,this.jornadaActual=i,this.calcularMargenes();const b=new Date,t=new Date(b.getTime()-864e5),r=x=>x.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});this.rangoDetalleFechas||(this.rangoDetalleFechas=`Del ${r(t)} al ${r(b)}`);const s=this.modelo.bs(e.valorInventarioUsd),d=this.modelo.tieneCapacidad(8)||this.modelo.tieneRubro(4),l=e.dineroPorCategoria&&e.dineroPorCategoria.length>0?e.dineroPorCategoria:this.calcularDineroPorCategoria(),m=l.reduce((x,v)=>x+v.cantidadProductos,0),f=l.reduce((x,v)=>x+v.unidadesStock,0),h=l.reduce((x,v)=>x+ee(v.dineroBrutoUsd),0),g=l.reduce((x,v)=>x+ee(v.dineroBrutoBs),0),E=l.reduce((x,v)=>x+ee(v.dineroVentaUsd),0),w=Math.max(0,E-h),P=E>0?(w/E*100).toFixed(1):"0.0",T=l.map(x=>{const v=ee(x.porcentajeCapital);return`
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="py-2.5 px-3 flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-purple inline-block border border-brand-black shrink-0"></span>
                    <span class="font-black text-brand-black text-xs">${x.nombre}</span>
                </td>
                <td class="py-2.5 px-3 text-center">
                    <span class="bg-gray-100 border border-brand-black px-2 py-0.5 rounded text-[11px] font-black">${x.cantidadProductos} art.</span>
                </td>
                <td class="py-2.5 px-3 text-right font-mono">${x.unidadesStock} un.</td>
                <td class="py-2.5 px-3 text-right font-black font-mono text-brand-black">$ ${Q(x.dineroBrutoUsd)}</td>
                <td class="py-2.5 px-3 text-right font-black font-mono text-brand-purple">Bs. ${Q(x.dineroBrutoBs)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-gray-700">$ ${Q(x.dineroVentaUsd)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-700">$ ${Q(x.margenBrutoProyectadoUsd)} (${x.margenBrutoPct}%)</td>
                <td class="py-2.5 px-3 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                        <div class="w-16 bg-gray-200 border border-brand-black rounded-full h-2 overflow-hidden shrink-0">
                            <div class="bg-brand-purple h-full" style="width: ${Math.min(100,v)}%"></div>
                        </div>
                        <span class="font-mono text-[11px] w-10 text-right">${x.porcentajeCapital}%</span>
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
            ${this.kpi("Ventas Totales",`<span id="kpi-ventas-usd" class="font-black text-brand-black">$ ${Q(e.ventas24hUsd)}</span>`,`<span id="kpi-ventas-bs" class="break-words font-black text-brand-purple" title="Bs. ${Q(e.ventas24hBs)}">Bs. ${se(e.ventas24hBs)}</span>`,"bg-amber-50","Facturación bruta cobrada en caja (USD y Bs. al cambio oficial)")}
            ${this.kpi("Ganancia Bruta",`<span id="kpi-gan-bruta">$ ${Q(e.gananciaBrutaUsd||Number(e.ventas24hUsd)*this.margenBrutoPct/100)}</span>`,`Margen bruto comercial: ${this.margenBrutoPct.toFixed(1)}%`,"bg-emerald-50","Ventas menos costo de adquisición de mercancía")}
            ${this.kpi("Ganancia Neta",`<span id="kpi-gan-neta">$ ${Q(e.gananciaNetaUsd||Number(e.ventas24hUsd)*this.margenNetoPct/100)}</span>`,`<span id="kpi-gan-neta-bs" class="break-words" title="Bs. ${this.modelo.bs(Number(e.ventas24hUsd)*this.margenNetoPct/100)}">Bs. ${se(this.modelo.bs(Number(e.ventas24hUsd)*this.margenNetoPct/100))}</span>`,"bg-blue-50","Utilidad líquida real después de descontar impuestos")}
            ${this.kpi("Inventario Total",`$ ${Q(e.valorInventarioUsd)}`,`<span class="break-words" title="Bs. ${s}">Bs. ${se(s)}</span>`,"bg-purple-50","Valoración monetaria total del stock físico actual disponible")}
        </div>

        <!-- Módulo de Jornada Laboral y Operadores en Turno -->
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 mb-4 sm:mb-6">
            <div class="flex flex-wrap justify-between items-center border-b-2 border-brand-black pb-3 mb-4 gap-2">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full ${((j=this.jornadaActual)==null?void 0:j.estado)==="abierta"?"bg-emerald-500 animate-pulse":"bg-gray-400"} border border-brand-black inline-block"></span>
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
                    <h3 class="font-heading font-black text-lg sm:text-xl border-b-2 border-brand-black pb-3 mb-4">Indicadores de Rendimiento</h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <span class="font-bold text-xs text-gray-600 uppercase">Tickets Emitidos</span>
                            <span id="kpi-tickets" class="font-black font-heading text-base sm:text-lg">${e.tickets24h}</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <span class="font-bold text-xs text-gray-600 uppercase">Ticket Promedio</span>
                            <span id="kpi-ticket-prom" class="font-black font-heading text-base">$ ${e.tickets24h>0?(Number(e.ventas24hUsd)/e.tickets24h).toFixed(2):"0.00"}</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <span class="font-bold text-xs text-gray-600 uppercase">Margen Comercial Global</span>
                            <span class="font-black font-heading text-base text-emerald-700">${Number(e.ventas24hUsd)>0?(ee(e.gananciaBrutaUsd)/Number(e.ventas24hUsd)*100).toFixed(1):"0.0"}% bruto</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <span class="font-bold text-xs text-gray-600 uppercase">Demanda Principal</span>
                            <span class="font-black font-heading text-base text-blue-700">${e.topProductos.length>0&&Number(e.ventas24hUsd)>0?(ee(e.topProductos[0].totalUsd)/Number(e.ventas24hUsd)*100).toFixed(1):"0.0"}% ingresos</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <span class="font-bold text-xs text-gray-600 uppercase">Cuentas Activas</span>
                            <span class="font-black font-heading text-base">${d?e.cuentasAbiertas:"N/A"}</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <div>
                                <span class="font-bold text-xs text-gray-600 uppercase">Deudas Abiertas</span>
                                <p class="text-[10px] text-gray-400 font-bold">Créditos pendientes por cobrar</p>
                            </div>
                            <div class="text-right">
                                <span class="font-black font-heading text-base text-amber-700">${d?e.deudasAbiertas??0:"N/A"}</span>
                                ${d&&e.dineroEnLaCalleUsd?`
                                    <p class="text-[11px] font-mono font-bold text-gray-700">$ ${Q(e.dineroEnLaCalleUsd)} <span class="text-gray-400">·</span> Bs. ${Q(e.dineroEnLaCalleBs)}</p>
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
                        ${l.length} categorías auditadas
                    </span>
                    <span class="text-xs font-black text-emerald-900 bg-emerald-100 border border-brand-black px-2.5 py-1 rounded">
                        Capital en Bruto: $ ${Q(h)}
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
                        ${T}
                    </tbody>
                    <tfoot class="border-t-2 border-brand-black bg-gray-100 font-black font-heading text-xs">
                        <tr>
                            <td class="py-2.5 px-3 uppercase text-brand-black">TOTAL CONSOLIDADO</td>
                            <td class="py-2.5 px-3 text-center">${m} prods.</td>
                            <td class="py-2.5 px-3 text-right">${f} un.</td>
                            <td class="py-2.5 px-3 text-right text-brand-black">$ ${Q(h)}</td>
                            <td class="py-2.5 px-3 text-right text-brand-purple">Bs. ${Q(g)}</td>
                            <td class="py-2.5 px-3 text-right text-brand-black">$ ${Q(E)}</td>
                            <td class="py-2.5 px-3 text-right text-emerald-700">$ ${Q(w)} (${P}%)</td>
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
            ${(()=>{const x=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);return x<=1?"":`
                <div class="flex items-center justify-between border-t-2 border-brand-black pt-3 mt-3">
                    <span class="text-xs font-bold text-gray-600">Página ${this.paginaTrx} de ${x} · ${this.transacciones.length} transacciones</span>
                    <div class="flex gap-2">
                        <button id="trx-pag-ant" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaTrx===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANTERIOR</button>
                        <button id="trx-pag-sig" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaTrx===x?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIGUIENTE</button>
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
                        ${this.respaldos.map(x=>`
                            <div class="border border-brand-black rounded p-2.5 bg-gray-50 flex justify-between items-center text-xs">
                                <div class="min-w-0 pr-2">
                                    <p class="font-mono font-black text-brand-black truncate text-[11px]">Respaldos/${x.archivoNombre||`${x.id}.backup`}</p>
                                    <p class="text-[10px] text-gray-500 font-mono truncate max-w-[260px]" title="${x.checksumSha256}">SHA: ${x.checksumSha256.slice(0,16)}... · ${x.fecha}</p>
                                </div>
                                <div class="text-right shrink-0">
                                    <span class="font-bold text-gray-600 text-[11px]">${x.registros} reg. (${x.tamanoKb} KB)</span>
                                    <p class="text-[10px] text-green-700 font-black uppercase">Verificado OK</p>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500 font-bold">
                    <span class="truncate">Ruta local: <code class="text-[10px] font-mono font-bold bg-gray-100 px-1 rounded">Respaldos/datio_FECHA.backup</code></span>
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
        </div>`,this.conectarEventos(e),this.pintarGrafico(e)}conectarEventos(e){var m,f,h,g,E,w,P,T,j;const o=document.getElementById("btn-crit-vol"),a=document.getElementById("btn-crit-ing"),n=document.getElementById("filtro-fecha-desde"),c=document.getElementById("filtro-fecha-hasta"),i=document.getElementById("btn-aplicar-fechas"),b=document.getElementById("btn-limpiar-fechas"),t=document.getElementById("label-estado-fechas"),r=document.getElementById("tabla-transacciones-body"),s=document.getElementById("conteo-transacciones-badge"),d=this.contenedor.querySelectorAll("[data-rango]");d.forEach(x=>{x.addEventListener("click",()=>{n&&(n.value=""),c&&(c.value=""),t&&t.classList.add("hidden"),r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)),s&&(s.textContent=`${this.transacciones.length} transacciones registradas`),d.forEach(y=>{y.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"}),x.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white shrink-0";const v=x.dataset.rango||"24h";this.aplicarRango(v,e)})}),i==null||i.addEventListener("click",()=>{this.aplicarFiltroFechas(e)}),b==null||b.addEventListener("click",()=>{var v,y;n&&(n.value=""),c&&(c.value=""),t&&t.classList.add("hidden"),r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)),s&&(s.textContent=`${this.transacciones.length} transacciones registradas`),this.paginaTrx=1,(v=document.getElementById("trx-pag-ant"))==null||v.addEventListener("click",()=>{this.paginaTrx>1&&(this.paginaTrx--,r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(y=document.getElementById("trx-pag-sig"))==null||y.addEventListener("click",()=>{const U=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);this.paginaTrx<U&&(this.paginaTrx++,r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),d.forEach(U=>{U.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"});const x=this.contenedor.querySelector('[data-rango="24h"]');x&&(x.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white shrink-0"),this.aplicarRango("24h",e)}),o==null||o.addEventListener("click",()=>{this.criterioGrafica="volumen",o.className="px-2.5 py-1 text-xs font-heading font-black rounded bg-brand-black text-white",a.className="px-2.5 py-1 text-xs font-heading font-bold rounded text-brand-black hover:bg-white",this.pintarGrafico(this.vm.panel||e)}),a==null||a.addEventListener("click",()=>{this.criterioGrafica="ingreso",a.className="px-2.5 py-1 text-xs font-heading font-black rounded bg-brand-black text-white",o.className="px-2.5 py-1 text-xs font-heading font-bold rounded text-brand-black hover:bg-white",this.pintarGrafico(this.vm.panel||e)}),(m=document.getElementById("trx-pag-ant"))==null||m.addEventListener("click",()=>{this.paginaTrx>1&&(this.paginaTrx--,r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(f=document.getElementById("trx-pag-sig"))==null||f.addEventListener("click",()=>{const x=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);this.paginaTrx<x&&(this.paginaTrx++,r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(h=document.getElementById("btn-crear-backup"))==null||h.addEventListener("click",async()=>{await R.crearRespaldo(),this.respaldos=await R.respaldos();const x=document.getElementById("lista-respaldos");x&&(x.innerHTML=this.respaldos.map(v=>`
                    <div class="border border-brand-black rounded p-2.5 bg-gray-50 flex justify-between items-center text-xs">
                        <div class="min-w-0 pr-2">
                            <p class="font-mono font-black text-brand-black truncate text-[11px]">Respaldos/${v.archivoNombre||`${v.id}.backup`}</p>
                            <p class="text-[10px] text-gray-500 font-mono truncate max-w-[260px]" title="${v.checksumSha256}">SHA: ${v.checksumSha256.slice(0,16)}... · ${v.fecha}</p>
                        </div>
                        <div class="text-right shrink-0">
                            <span class="font-bold text-gray-600 text-[11px]">${v.registros} reg. (${v.tamanoKb} KB)</span>
                            <p class="text-[10px] text-green-700 font-black uppercase">Verificado OK</p>
                        </div>
                    </div>
                `).join(""))});const l=async()=>{var J,te,H;const x=await R.obtenerJornadaActual(),v=await R.listarOperadores(),y=await R.obtenerSemaforoStock(),U=document.getElementById("jornada-estado-texto"),D=document.getElementById("jornada-fechas-texto"),C=document.getElementById("jornada-operador-activo"),G=document.getElementById("jornada-balance-texto"),_=document.getElementById("jornada-tickets-texto"),z=document.getElementById("box-acciones-jornada"),B=document.getElementById("lista-operadores-chips"),N=(x==null?void 0:x.estado)==="abierta";U&&(U.textContent=N?"Jornada en Curso":"Jornada Cerrada"),D&&(D.textContent=N?`Inicio: ${(x==null?void 0:x.inicioStr)||"Reciente"}`:`Último cierre: ${(x==null?void 0:x.finStr)||"Sin jornadas"}`);const S=x!=null&&x.operadoresActivos&&x.operadoresActivos.length>0?x.operadoresActivos.join(", "):((J=x==null?void 0:x.operadorActual)==null?void 0:J.trim())||"Sin operador asignado";C&&(C.textContent=S),G&&(G.textContent=`$ ${Q((x==null?void 0:x.ventasTotalUsd)||0)} USD (Bs. ${Q((x==null?void 0:x.ventasTotalBs)||0)})`),_&&(_.textContent=`${(x==null?void 0:x.ticketsEmitidos)||0} tickets emitidos · ${(x==null?void 0:x.entradasStockReg)||0} reposiciones`),z&&(N?z.innerHTML=`
                        <button id="btn-cerrar-jornada" class="bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs px-3 py-1.5 rounded border-2 border-brand-black shadow-brutal-sm">
                            CERRAR JORNADA Y EMITIR INFORME
                        </button>
                    `:z.innerHTML=`
                        <button id="btn-abrir-jornada" class="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs px-3 py-1.5 rounded border-2 border-brand-black shadow-brutal-sm">
                            ABRIR NUEVA JORNADA
                        </button>
                    `,(te=z.querySelector("#btn-abrir-jornada"))==null||te.addEventListener("click",async()=>{var I;try{const $=(await R.listarOperadores()).filter(O=>O.activo);if($.length===0){this.mostrarToast("No hay operadores activos. Registre uno primero.","error");return}const F=((I=$[0])==null?void 0:I.nombre)||"Cajero Principal";await R.abrirJornada(F,$.map(O=>O.nombre)),this.mostrarToast("Jornada abierta exitosamente.","success"),l()}catch($){this.mostrarToast("Error al abrir jornada: "+($ instanceof Error?$.message:String($)),"error")}}),(H=z.querySelector("#btn-cerrar-jornada"))==null||H.addEventListener("click",async()=>{try{if(window.confirm("¿Confirmas el cierre de la jornada operativa actual? Se generará el balance consolidado del turno.")){const $=await R.cerrarJornada();this.mostrarToast(`Jornada cerrada. ID: ${$.id} — $${$.ventasTotalUsd} USD (Bs. ${$.ventasTotalBs})`,"success"),l()}}catch(I){this.mostrarToast("Error al cerrar jornada: "+(I instanceof Error?I.message:String(I)),"error")}})),B&&(B.innerHTML=v.map(I=>{var F,O;return`
                    <div class="inline-flex items-center gap-1.5 border-2 border-brand-black rounded px-2 py-1 text-xs font-bold ${((F=x==null?void 0:x.operadoresActivos)==null?void 0:F.includes(I.nombre))||((O=x==null?void 0:x.operadorActual)==null?void 0:O.includes(I.nombre))?"bg-purple-100 text-brand-purple border-brand-purple":"bg-gray-100 text-brand-black"}">
                        <span>${I.nombre}</span>
                        <span class="text-[9px] uppercase px-1 rounded ${I.activo?"bg-green-200 text-green-900":"bg-gray-300 text-gray-700"}">${I.activo?"Activo":"Inactivo"}</span>
                        <button data-op-edit="${I.id}" data-op-nom="${I.nombre}" title="Editar nombre" class="hover:text-blue-600 ml-1 text-[11px] font-mono font-bold bg-white border border-gray-300 rounded px-1">✎</button>
                        <button data-op-del="${I.id}" data-op-nom="${I.nombre}" title="Eliminar operador" class="hover:text-red-600 text-[11px] font-mono font-bold bg-white border border-gray-300 rounded px-1">✕</button>
                    </div>
                `}).join(""),B.querySelectorAll("button[data-op-edit]").forEach(I=>{I.addEventListener("click",async()=>{const $=I.dataset.opEdit||"",F=I.dataset.opNom||"",O=prompt("Editar nombre del operador:",F);O&&O.trim()&&O.trim()!==F&&(await R.editarOperador($,O.trim()),l())})}),B.querySelectorAll("button[data-op-del]").forEach(I=>{I.addEventListener("click",async()=>{const $=I.dataset.opDel||"",F=I.dataset.opNom||"";confirm(`¿Eliminar al operador "${F}"?`)&&(await R.eliminarOperador($),l())})}));const M=document.getElementById("lista-metodos-pago-panel");if(M){const I=await R.listarMetodosPago();M.innerHTML=I.map($=>`
                    <div class="inline-flex items-center gap-2 border-2 border-brand-black rounded px-3 py-1.5 text-xs font-bold ${$.moneda==="BS"?"bg-amber-50":"bg-blue-50"}">
                        <span>${$.nombre}</span>
                        <span class="text-[9px] uppercase px-1.5 py-0.5 rounded font-black ${$.moneda==="BS"?"bg-amber-200 text-amber-900":"bg-blue-200 text-blue-900"}">${$.moneda==="BS"?"Bolívares":"Dólares"}</span>
                        <button data-metodo-del="${$.nombre}" title="Eliminar método de pago" class="text-gray-400 hover:text-red-600 font-black text-xs ml-1 bg-white border border-gray-300 rounded px-1.5 py-0.5">✕</button>
                    </div>
                `).join(""),M.querySelectorAll("button[data-metodo-del]").forEach($=>{$.addEventListener("click",async()=>{const F=$.dataset.metodoDel||"";window.confirm(`¿Confirmas eliminar el método de pago "${F}"?`)&&(await R.eliminarMetodoPago(F),l())})})}const k=document.getElementById("in-semaforo-rojo"),q=document.getElementById("in-semaforo-amarillo");k&&!k.dataset.modificado&&(k.value=String(y.rojoMax)),q&&!q.dataset.modificado&&(q.value=String(y.amarilloMax))};l(),(g=document.getElementById("btn-relevar-operador"))==null||g.addEventListener("click",async()=>{var G,_,z;const x=(await R.listarOperadores()).filter(B=>B.activo);if(x.length===0){this.mostrarToast("No hay operadores activos disponibles. Registre uno a continuación.","error");return}const v=await R.obtenerJornadaActual(),y=(v==null?void 0:v.operadoresActivos)||[(v==null?void 0:v.operadorActual)||""],U=document.getElementById("modal-root")||document.body,D=document.createElement("div");D.id="modal-asignar-operadores",D.innerHTML=`
                <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                    <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                            <h3 class="font-heading font-black text-xl">ASIGNAR OPERADORES AL TURNO</h3>
                            <button id="modal-asig-close" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
                        </div>
                        <p class="text-xs text-gray-600 font-bold mb-3">Selecciona los operadores que atenderán en este turno:</p>
                        <div class="space-y-2 max-h-56 overflow-y-auto pr-1 mb-4">
                            ${x.map(B=>{const N=y.some(S=>S.toLowerCase()===B.nombre.toLowerCase());return`
                                <label class="flex items-center gap-2.5 p-2.5 rounded border-2 border-brand-black cursor-pointer ${N?"bg-purple-50 border-brand-purple":"bg-gray-50"}">
                                    <input type="checkbox" data-asig-chk="${B.nombre}" ${N?"checked":""} class="w-4 h-4 rounded text-brand-purple" />
                                    <div>
                                        <span class="font-heading font-black text-sm text-brand-black">${B.nombre}</span>
                                        <span class="text-[10px] text-gray-500 font-bold ml-2">${B.activo?"Activo":"Inactivo"}</span>
                                    </div>
                                </label>`}).join("")}
                        </div>
                        <div class="grid grid-cols-2 gap-3 border-t-2 border-brand-black pt-3">
                            <button id="modal-asig-cancelar" class="bg-white border-2 border-brand-black font-heading font-black py-2.5 rounded text-xs">CANCELAR</button>
                            <button id="modal-asig-guardar" class="bg-brand-purple text-white font-heading font-black py-2.5 rounded border-2 border-brand-black shadow-brutal-sm text-xs">ASIGNAR A TURNO</button>
                        </div>
                    </div>
                </div>`,U.appendChild(D);const C=()=>D.remove();(G=D.querySelector("#modal-asig-close"))==null||G.addEventListener("click",C),(_=D.querySelector("#modal-asig-cancelar"))==null||_.addEventListener("click",C),(z=D.querySelector("#modal-asig-guardar"))==null||z.addEventListener("click",async()=>{const B=D.querySelectorAll("input[data-asig-chk]:checked"),N=[];if(B.forEach(S=>{S.dataset.asigChk&&N.push(S.dataset.asigChk)}),N.length===0){this.mostrarToast("Selecciona al menos un operador para el turno.","error");return}await R.asignarOperadoresTurno(N),C(),l()})}),(E=document.getElementById("form-crear-metodo-panel"))==null||E.addEventListener("submit",async x=>{x.preventDefault();const v=document.getElementById("in-nuevo-metodo-nombre"),y=document.getElementById("select-nuevo-metodo-moneda"),U=(v==null?void 0:v.value.trim())||"",D=(y==null?void 0:y.value)==="USD"?"USD":"BS";U&&(await R.crearMetodoPago(U,D),v&&(v.value=""),l())}),(w=document.getElementById("form-crear-operador"))==null||w.addEventListener("submit",async x=>{x.preventDefault();const v=document.getElementById("in-nuevo-operador"),y=(v==null?void 0:v.value.trim())||"";y&&(await R.crearOperador(y),v&&(v.value=""),l())}),(P=document.getElementById("form-semaforo-stock"))==null||P.addEventListener("submit",async x=>{x.preventDefault();const v=document.getElementById("in-semaforo-rojo"),y=document.getElementById("in-semaforo-amarillo"),U=document.getElementById("msg-semaforo-stock"),D=parseInt((v==null?void 0:v.value)||"5",10),C=parseInt((y==null?void 0:y.value)||"15",10);if(D>=C){this.mostrarToast("El umbral rojo debe ser estrictamente menor que el umbral amarillo.","error");return}await R.guardarSemaforoStock(D,C),U&&(U.textContent="Umbrales del semáforo guardados y aplicados a todo el sistema.",U.classList.remove("hidden"),setTimeout(()=>U.classList.add("hidden"),2500))}),(T=document.getElementById("btn-reset-semaforo"))==null||T.addEventListener("click",async()=>{await R.guardarSemaforoStock(5,15),l()}),(j=document.getElementById("form-cambiar-clave"))==null||j.addEventListener("submit",async x=>{x.preventDefault();const v=document.getElementById("pin-actual"),y=document.getElementById("pin-nuevo"),U=document.getElementById("msg-cambio-clave");if(U)try{await R.cambiarPinDueno((v==null?void 0:v.value.trim())||"",(y==null?void 0:y.value.trim())||""),await this.modelo.cargarConfig(),U.textContent=y!=null&&y.value.trim()?"Clave actualizada exitosamente. El panel requerirá esta nueva clave para ingresar.":"Clave eliminada. El panel ha quedado en modo abierto sin clave.",U.style.color="#00823B",U.classList.remove("hidden"),setTimeout(()=>void this.render(),1200)}catch(D){U.textContent=D instanceof Error?D.message:String(D),U.style.color="#C60C15",U.classList.remove("hidden")}})}aplicarFiltroFechas(e){const o=document.getElementById("filtro-fecha-desde"),a=document.getElementById("filtro-fecha-hasta"),n=document.getElementById("label-estado-fechas"),c=document.getElementById("tabla-transacciones-body"),i=document.getElementById("conteo-transacciones-badge"),b=(o==null?void 0:o.value.trim())||"",t=(a==null?void 0:a.value.trim())||"";if(!b&&!t){n&&(n.textContent="Selecciona una fecha Desde o Hasta para iniciar el diagnóstico.",n.classList.remove("hidden"));return}let r=0,s=Number.MAX_SAFE_INTEGER;if(b){const[k,q,J]=b.split("-").map(Number);r=Math.floor(new Date(k,q-1,J,0,0,0,0).getTime()/1e3)}if(t){const[k,q,J]=t.split("-").map(Number);s=Math.floor(new Date(k,q-1,J,23,59,59,999).getTime()/1e3)}if(r>s){n&&(n.textContent='Rango inválido: la fecha "Desde" es posterior a la fecha "Hasta".',n.classList.remove("hidden"));return}const d=this.transacciones.filter(k=>{const q=this.obtenerTimestampTicket(k);return q>=r&&q<=s}),l=d.reduce((k,q)=>k+ee(q.totalUsd),0),m=d.reduce((k,q)=>k+ee(q.totalBs),0),f=d.length;let h=0;d.forEach(k=>{(k.lineas||[]).forEach(q=>{const J=this.productos.find(te=>te.sku===q.sku);J&&(h+=ee(J.precioBrutoUsd)*ee(q.cantidad))})});const g=Math.max(0,l-h),E=g*.95,w=E*(this.modelo.tasaActual||807.39),P=f>0?(l/f).toFixed(2):"0.00",T=document.getElementById("kpi-ventas-usd"),j=document.getElementById("kpi-ventas-bs"),x=document.getElementById("kpi-tickets"),v=document.getElementById("kpi-gan-bruta"),y=document.getElementById("kpi-gan-neta"),U=document.getElementById("kpi-gan-neta-bs"),D=document.getElementById("kpi-ticket-prom");T&&(T.textContent="$ "+Q(l)),j&&(j.textContent="Bs. "+se(m),j.title="Bs. "+Q(m)),x&&(x.textContent=String(f)),v&&(v.textContent="$ "+Q(g)),y&&(y.textContent="$ "+Q(E)),U&&(U.textContent="Bs. "+se(w),U.title="Bs. "+Q(w)),D&&(D.textContent="$ "+P),c&&(c.innerHTML=this.renderFilasTransacciones(d)),i&&(i.textContent=`${d.length} transacciones en rango`),this.contenedor.querySelectorAll("[data-rango]").forEach(k=>{k.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"});const G={};d.forEach(k=>{(k.lineas||[]).forEach(q=>{G[q.nombre]||(G[q.nombre]={nombre:q.nombre,cantidad:0,totalUsd:0}),G[q.nombre].cantidad+=Number(q.cantidad)||0,G[q.nombre].totalUsd+=ee(q.subtotalUsd)||Number(q.cantidad)*ee(q.precioUsd)})});const _=Object.values(G).reduce((k,q)=>k+q.totalUsd,0)||1,z=Object.values(G).sort((k,q)=>q.totalUsd-k.totalUsd).map(k=>({nombre:k.nombre,cantidad:String(k.cantidad),totalUsd:k.totalUsd.toFixed(2),porcentaje:(k.totalUsd/_*100).toFixed(1)})),B={...e,ventas24hUsd:l.toFixed(2),ventas24hBs:m.toFixed(2),gananciaBrutaUsd:g.toFixed(2),gananciaNetaUsd:E.toFixed(2),tickets24h:f,topProductos:z.length>0?z:d.length===0?[]:e.topProductos};this.vm.setDatos(B),this.pintarGrafico(B);const N=k=>k.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),S=b?new Date(r*1e3):new Date(2020,0,1),M=t?new Date(s*1e3):new Date;if(this.rangoDetalleFechas=`Del ${N(S)} al ${N(M)}`,n){const k=b||"Inicio",q=t||"Actualidad";n.textContent=`Diagnóstico activo (${k} al ${q}): ${d.length} transacciones registradas`,n.classList.remove("hidden")}}aplicarRango(e,o){const a=new Date,n=v=>v.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});let c=864e5;e==="7d"?c=7*864e5:e==="30d"?c=30*864e5:e==="1a"?c=365*864e5:e==="todo"&&(c=5*365*864e5);const i=new Date(a.getTime()-c);this.rangoDetalleFechas=`Del ${n(i)} al ${n(a)}`;const b=Math.floor(i.getTime()/1e3),t=this.transacciones.filter(v=>this.obtenerTimestampTicket(v)>=b),r=this.modelo.tasaActual||807.39;let s=0,d=0;t.forEach(v=>{s+=ee(v.totalUsd),d+=ee(v.totalBs)});const l=t.length,m=document.getElementById("kpi-ventas-usd"),f=document.getElementById("kpi-ventas-bs"),h=document.getElementById("kpi-tickets"),g=document.getElementById("kpi-gan-bruta"),E=document.getElementById("kpi-gan-neta"),w=document.getElementById("kpi-gan-neta-bs"),P=document.getElementById("kpi-ticket-prom");if(m&&(m.textContent="$ "+Q(s)),f&&(f.textContent="Bs. "+se(d),f.title="Bs. "+Q(d)),h&&(h.textContent=String(l)),g&&(g.textContent="$ "+Q(s*this.margenBrutoPct/100)),E&&(E.textContent="$ "+Q(s*this.margenNetoPct/100)),w){const v=s*this.margenNetoPct/100*r;w.textContent="Bs. "+se(v),w.title="Bs. "+Q(v)}P&&(P.textContent="$ "+(l>0?(s/l).toFixed(2):"0.00"));const T=new Map;t.forEach(v=>{var y;(y=v.lineas)==null||y.forEach(U=>{const D=T.get(U.sku);D?(D.cantidad+=ee(U.cantidad),D.totalUsd+=ee(U.subtotalUsd)):T.set(U.sku,{nombre:U.nombre,cantidad:ee(U.cantidad),totalUsd:ee(U.subtotalUsd)})})});const j=Array.from(T.values()).sort((v,y)=>y.totalUsd-v.totalUsd).slice(0,10).map(v=>({nombre:v.nombre,cantidad:String(Math.round(v.cantidad)),totalUsd:v.totalUsd>0?String(v.totalUsd.toFixed(2)):void 0,porcentaje:s>0?(v.totalUsd/s*100).toFixed(1):"0.0"})),x={...o,topProductos:j};this.vm.setDatos(x),this.pintarGrafico(x)}kpi(e,o,a,n,c=""){return`
        <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-4 ${n} flex flex-col justify-between min-w-0 overflow-hidden" title="${c}">
            <p class="font-heading font-bold text-xs uppercase tracking-wide text-brand-text truncate">${e}</p>
            <div class="font-heading font-black text-xl lg:text-2xl mt-1 min-w-0">${o}</div>
            <div class="text-xs font-body text-brand-text truncate mt-1">${a}</div>
            ${c?`<div class="text-[10px] text-gray-500 font-bold truncate mt-0.5 border-t border-gray-200/60 pt-1">${c}</div>`:""}
        </div>`}async pintarGrafico(e){const o=this.contenedor.querySelector("#panel-chart-container");if(!o)return;if(e.topProductos.length===0){o.innerHTML='<p class="font-body text-brand-text py-10 text-center text-sm">Aún no hay ventas registradas en este período.</p>';return}const a=["#2563EB","#D97706","#10B981","#8B5CF6","#EC4899","#06B6D4","#F97316","#84CC16","#6366F1","#14B8A6","#F43F5E","#A855F7","#EAB308","#64748B"],n=this.criterioGrafica==="volumen",c=e.topProductos.map(h=>Number(n?h.cantidad:h.totalUsd||Number(h.cantidad)*8.5)),i=c.reduce((h,g)=>h+g,0)||1,b=e.topProductos.map((h,g)=>({nombre:h.nombre,valor:c[g],porcentaje:(c[g]/i*100).toFixed(1)}));let t=0;const r=95,s=95,d=85;let l="";b.length===1?l=`<circle cx="${r}" cy="${s}" r="${d}" fill="${a[0]}" stroke="#1E232A" stroke-width="2" />`:b.forEach((h,g)=>{const w=h.valor/i*2*Math.PI,P=t,T=t+w,j=r+d*Math.cos(P),x=s+d*Math.sin(P),v=r+d*Math.cos(T),y=s+d*Math.sin(T),U=w>Math.PI?1:0,D=a[g%a.length];l+=`
                    <path d="M ${r} ${s} L ${j} ${x} A ${d} ${d} 0 ${U} 1 ${v} ${y} Z"
                        fill="${D}" stroke="#1E232A" stroke-width="1.5"
                        class="hover:opacity-85 transition-opacity cursor-pointer">
                        <title>${h.nombre}: ${h.porcentaje}%</title>
                    </path>
                `,t+=w});const m=b.map((h,g)=>{const E=a[g%a.length],w=n?`${h.valor} un.`:`$ ${Q(h.valor)}`;return`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-2 pr-3 flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full inline-block border border-brand-black shrink-0" style="background-color: ${E}"></span>
                        <span class="font-bold text-xs truncate max-w-[180px]" title="${h.nombre}">${h.nombre}</span>
                    </td>
                    <td class="py-2 text-right font-black text-xs pr-2">${w}</td>
                    <td class="py-2 text-right font-mono text-xs font-bold text-gray-500">${h.porcentaje}%</td>
                </tr>
            `}).join(""),f=n?`${Math.round(i)} un.`:`$ ${Q(i)}`;o.innerHTML=`
        <div class="flex flex-col md:flex-row items-center justify-around gap-4 sm:gap-6 w-full h-full py-2 min-w-0">
            <div class="shrink-0 flex flex-col items-center justify-center my-2">
                <svg width="190" height="190" viewBox="0 0 190 190" class="drop-shadow-sm">
                    ${l}
                </svg>
                <span class="text-[11px] font-black uppercase text-brand-black bg-gray-100 border border-brand-black px-2.5 py-0.5 rounded mt-2">
                    Total: ${f}
                </span>
            </div>
            <div class="w-full min-w-0 max-h-56 overflow-y-auto pr-1">
                <table class="w-full text-left">
                    <thead class="sticky top-0 bg-white">
                        <tr class="text-[10px] uppercase font-heading font-bold text-gray-400 border-b border-brand-black">
                            <th class="pb-1">Producto (${b.length})</th>
                            <th class="pb-1 text-right">${n?"Volumen":"Ingresos"}</th>
                            <th class="pb-1 text-right">Part.</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${m}
                    </tbody>
                </table>
            </div>
        </div>`}mostrarToast(e,o="info"){var c;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},n=document.createElement("div");n.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,n.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(c=n.querySelector("button"))==null||c.addEventListener("click",()=>n.remove()),document.body.appendChild(n),setTimeout(()=>n.remove(),8e3)}}const X=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},L=u=>X(u).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2});function Ee(u){if(u.sinStock)return"Ilimitado";const e=Number(u.stock);if(u.esCaja&&u.unidadesPorCaja&&u.unidadesPorCaja>1){const o=Math.floor(e/u.unidadesPorCaja),a=e%u.unidadesPorCaja;return`${o} cj. + ${a} un.`}return`${e} un.`}const xe=(u,e,o,a)=>{u.maxLength=o,u.addEventListener("input",()=>{let n=u.value.replace(/[^0-9.,]/g,"");const c=n.split(/[.,]/);c.length>2&&(n=c[0]+"."+c.slice(1).join("")),n.length>o&&(n=n.slice(0,o));const i=X(n);Number.isFinite(i)&&i>e&&(n=String(e)),u.value!==n&&(u.value=n),a&&a()})},he=(u,e,o=!1)=>{u.maxLength=e,u.addEventListener("input",()=>{let a=o?u.value.replace(/[<>{}\\]/g,""):u.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ .,/_#-]/g,"");a.length>e&&(a=a.slice(0,e)),u.value!==a&&(u.value=a)})};function we(u){if(!u)return"Hoy";const e=Math.floor(Date.now()/1e3),o=Math.max(0,e-u);if(o<3600)return"Hoy (reciente)";const a=Math.floor(o/3600);if(a<24)return`Hoy (hace ${a}h)`;const n=Math.floor(a/24);return n===1?"Hace 1 día":`Hace ${n} días`}class et{constructor(e,o,a){A(this,"contenedor");A(this,"modal");A(this,"modelo");A(this,"cuentas",[]);A(this,"productos",[]);A(this,"cuentaSeleccionada",null);A(this,"filtroTab","todas");A(this,"POR_PAGINA_CUENTAS",15);A(this,"paginaCuentas",1);A(this,"pagosBorradorPorCuenta",new Map);A(this,"resolucionVueltoPorCuenta",new Map);this.contenedor=e,this.modal=o,this.modelo=a}async render(){[this.cuentas,this.productos]=await Promise.all([R.cuentas(),R.productos()]);const e=this.modelo.tieneRubro(4);!e&&this.filtroTab==="activa"&&(this.filtroTab="deuda");const o=this.cuentas.filter(s=>(s.tipo||"activa")==="activa"),a=this.cuentas.filter(s=>s.tipo==="deuda"),n=this.cuentas.filter(s=>e?this.filtroTab==="activa"?(s.tipo||"activa")==="activa":this.filtroTab==="deuda"?s.tipo==="deuda":!0:s.tipo==="deuda");this.cuentaSeleccionada&&(this.cuentaSeleccionada=this.cuentas.find(s=>{var d;return s.ventaId===((d=this.cuentaSeleccionada)==null?void 0:d.ventaId)})||null),this.cuentaSeleccionada&&!n.some(s=>{var d;return s.ventaId===((d=this.cuentaSeleccionada)==null?void 0:d.ventaId)})?this.cuentaSeleccionada=n[0]||null:!this.cuentaSeleccionada&&n.length>0&&(this.cuentaSeleccionada=n[0]);const c=this.modelo.tasaActual||807.39;let i=0;a.forEach(s=>{const d=X(s.totalParcialUsd),l=X(s.abonosUsd);i+=Math.max(0,d-l)});const b=i*c;let t=0;o.forEach(s=>{const d=X(s.totalParcialUsd),l=X(s.abonosUsd);t+=Math.max(0,d-l)});const r=this.cuentas.reduce((s,d)=>s+X(d.abonosUsd),0);this.contenedor.innerHTML=`
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
                <p class="font-heading font-black text-2xl sm:text-3xl text-amber-950 mt-1">$ ${L(i)}</p>
                <p class="text-xs font-bold text-amber-800">Bs. ${L(b)} <span class="text-[10px] text-amber-700">(tasa ref.)</span></p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Cuentas en Local</span>
                    <span class="bg-blue-100 text-blue-900 font-black text-[10px] px-1.5 py-0.5 rounded border border-blue-300">${o.length} activas</span>
                </div>
                <p class="font-heading font-black text-2xl sm:text-3xl text-brand-black mt-1">$ ${L(t)}</p>
                <p class="text-xs font-bold text-gray-500">Saldo pendiente de cobro</p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Abonos Recaudados</span>
                    <span class="bg-emerald-100 text-emerald-900 font-black text-[10px] px-1.5 py-0.5 rounded border border-emerald-300">Anticipos</span>
                </div>
                <p class="font-heading font-black text-2xl sm:text-3xl text-emerald-700 mt-1">$ ${L(r)}</p>
                <p class="text-xs font-bold text-gray-500">Bs. ${L(r*c)}</p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Tasa Oficial del Día</span>
                    <span class="bg-gray-100 text-gray-800 font-black text-[10px] px-1.5 py-0.5 rounded border border-gray-300">BCV</span>
                </div>
                <p class="font-heading font-black text-xl sm:text-2xl text-brand-black mt-1">Bs. ${L(c)}</p>
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
                    ${n.length===0?`<div class="bg-white border-2 border-brand-black rounded-lg p-6 text-center text-brand-text font-bold">
                            No hay registros en la sección seleccionada.
                        </div>`:(()=>{const s=Math.ceil(n.length/this.POR_PAGINA_CUENTAS);this.paginaCuentas>s&&(this.paginaCuentas=s),this.paginaCuentas<1&&(this.paginaCuentas=1);const d=(this.paginaCuentas-1)*this.POR_PAGINA_CUENTAS;return n.slice(d,d+this.POR_PAGINA_CUENTAS).map(m=>{var x;const f=m.tipo==="deuda",h=X(m.totalParcialUsd),g=X(m.abonosUsd),E=Math.max(0,h-g),w=Math.max(0,g-h),P=((x=this.cuentaSeleccionada)==null?void 0:x.ventaId)===m.ventaId,T=we(m.fechaCreacionUnix);let j="cursor-pointer border-2 border-brand-black rounded-lg p-3 sm:p-4 transition-all ";return P?j+=f?"bg-amber-50 text-brand-black border-l-[6px] border-l-amber-600 shadow-brutal ring-1 ring-amber-500/20":"bg-blue-50 text-brand-black border-l-[6px] border-l-blue-600 shadow-brutal ring-1 ring-blue-500/20":j+=f?"bg-stone-50 border-l-4 border-l-amber-300 text-brand-black shadow-brutal-sm hover:bg-amber-50/60 hover:-translate-y-0.5":"bg-stone-50 border-l-4 border-l-blue-200 text-brand-black shadow-brutal-sm hover:bg-blue-50/50 hover:-translate-y-0.5",`
                        <div data-cuenta-id="${m.ventaId}" class="${j}">
                            <div class="flex justify-between items-start gap-2">
                                <div>
                                    <div class="flex items-center gap-1.5">
                                        <span class="font-heading font-black text-base sm:text-lg leading-snug">${m.etiqueta}</span>
                                        ${f?'<span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-amber-400 bg-amber-100 text-amber-900">DEUDA</span>':'<span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-blue-300 bg-blue-100 text-blue-900">LOCAL</span>'}
                                    </div>
                                    <p class="text-[11px] font-mono font-bold text-gray-500 mt-0.5">
                                        ${f?`${T} · `:""}${m.ventaId.slice(0,9)}
                                    </p>
                                    ${m.nota?`<p class="text-[11px] italic font-semibold text-gray-600 mt-0.5 line-clamp-1">Nota: ${m.nota}</p>`:""}
                                </div>
                                <div class="text-right shrink-0">
                                    <p class="font-heading font-black text-base sm:text-lg text-brand-black">$${L(m.totalParcialUsd)}</p>
                                    ${w>0?`<p class="text-[11px] font-black text-emerald-700">A favor: +$${L(w)}</p>`:E>0?`<p class="text-xs font-bold ${f?"text-amber-900":"text-blue-900"}">Pend: $${L(E)}</p>`:'<p class="text-[11px] font-bold text-gray-400">Cubierta ($0,00)</p>'}
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-2 pt-2 border-t border-gray-200 text-[11px] font-bold text-gray-600">
                                <span>${m.lineas} consumos</span>
                                <span>Abonado: <strong class="text-brand-black">$${L(m.abonosUsd)}</strong></span>
                            </div>
                        </div>`}).join("")})()}
                </div>
                ${(()=>{const s=Math.ceil(n.length/this.POR_PAGINA_CUENTAS);return s<=1?"":`
                    <div class="flex items-center justify-between border-2 border-brand-black rounded bg-white p-2 mt-2 shadow-brutal-sm">
                        <span class="text-[10px] font-bold text-gray-600">Pág. ${this.paginaCuentas} de ${s} (${n.length} reg.)</span>
                        <div class="flex gap-1">
                            <button id="cta-pag-ant" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCuentas===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANT.</button>
                            <button id="cta-pag-sig" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCuentas===s?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIG.</button>
                        </div>
                    </div>`})()}
            </div>

            <!-- Columna de Detalle / Añadir Consumo / Cobrar -->
            <div class="lg:col-span-2">
                ${this.cuentaSeleccionada?(()=>{var g;const s=this.cuentaSeleccionada.tipo==="deuda",d=X(this.cuentaSeleccionada.totalParcialUsd),l=X(this.cuentaSeleccionada.abonosUsd),m=Math.max(0,d-l),f=Math.max(0,l-d),h=we(this.cuentaSeleccionada.fechaCreacionUnix);return`
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 flex flex-col space-y-4">
                    <!-- Banner Distintivo del Tipo de Registro -->
                    ${s?`
                    <div class="bg-amber-50/70 border-2 border-brand-black border-l-[6px] border-l-amber-600 rounded p-3 text-xs text-amber-950 flex flex-wrap justify-between items-center gap-2">
                        <div class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-amber-500 border border-brand-black shrink-0"></span>
                            <div>
                                <p class="font-heading font-black text-sm uppercase">DEUDA COMERCIAL / FIADO PENDIENTE</p>
                                <p class="text-[11px] font-bold text-amber-900 mt-0.5">
                                    Cliente: <strong>${this.cuentaSeleccionada.cliente||this.cuentaSeleccionada.etiqueta}</strong> · Creada: <strong>${this.cuentaSeleccionada.fechaCreacionStr||h}</strong>
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
                            ${f>0?`
                                <span class="text-[10px] font-black text-emerald-900 uppercase px-2 py-0.5 rounded bg-emerald-100 border border-emerald-500">
                                    SALDO A FAVOR DEL CLIENTE
                                </span>
                                <p class="font-heading font-black text-2xl sm:text-3xl text-emerald-600 mt-0.5">
                                    +$${L(f)}
                                </p>
                                <p class="text-xs font-black text-emerald-700">
                                    Bs. ${L(f*c)} (excedente)
                                </p>
                                <div class="flex items-center justify-end gap-1.5 mt-1">
                                    <span class="font-bold text-[10px] text-gray-500">
                                        Consumo: $${L(d)} · Abonado: <strong class="text-brand-black">$${L(l)}</strong>
                                    </span>
                                    <button data-editar-abono title="Corregir monto abonado por error" class="text-[10px] font-black uppercase px-2 py-0.5 rounded border border-brand-black bg-amber-200 hover:bg-amber-300 text-brand-black">
                                        Editar
                                    </button>
                                </div>
                            `:`
                                <span class="text-xs font-bold text-gray-500 uppercase">${s?"Monto Adeudado Pendiente":"Saldo Pendiente"}</span>
                                <p class="font-heading font-black text-2xl sm:text-3xl text-brand-black">
                                    $${L(m)} USD
                                </p>
                                <p class="text-xs font-bold text-gray-600">
                                    Bs. ${L(m*c)} <span class="text-[10px] text-gray-400">(${s?"tasa hoy":"actual"})</span>
                                </p>
                                <div class="flex items-center justify-end gap-1.5 mt-1">
                                    <span class="font-bold text-xs text-gray-600">
                                        Total: $${L(d)} · Abonado: <strong class="text-brand-black">$${L(l)}</strong>
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
                            <span class="font-heading font-black text-xs uppercase tracking-wider text-gray-700">Consumos Cargados (${((g=this.cuentaSeleccionada.consumos)==null?void 0:g.length)||0})</span>
                            <span class="text-xs font-bold text-gray-500">Monto Unit. / Subtotal</span>
                        </div>
                        <div id="cta-consumos-lista" class="space-y-2 overflow-y-auto max-h-[300px] pr-1">
                            ${!this.cuentaSeleccionada.consumos||this.cuentaSeleccionada.consumos.length===0?`<div class="py-6 text-center text-xs text-gray-400 font-bold">
                                    Sin consumos cargados en este registro. Selecciona productos abajo para cargar mercancía. El stock se descuenta de inmediato.
                                </div>`:this.cuentaSeleccionada.consumos.map(E=>`
                                <div class="flex items-center justify-between border-2 border-brand-black rounded-lg bg-white px-3 py-2 text-xs font-bold shadow-brutal-sm hover:bg-amber-50/50 transition-colors gap-2">
                                    <div class="flex-1 min-w-0 pr-2">
                                        <p class="truncate text-brand-black font-heading font-black text-sm" title="${E.nombre}">${E.nombre}</p>
                                        <p class="text-[11px] text-gray-500 font-semibold">${E.cantidad} un. &times; $${L(E.precioUsd)} <span class="text-gray-400 font-normal">· Bs. ${this.modelo.bs(X(E.precioUsd))} c/u</span></p>
                                    </div>
                                    <div class="flex items-center gap-3 shrink-0">
                                        <div class="text-right">
                                            <p class="font-heading font-black text-sm sm:text-base text-brand-black leading-tight">$${L(E.subtotalUsd)}</p>
                                            <p class="text-[10px] font-bold text-gray-500 leading-tight">Bs. ${this.modelo.bs(X(E.subtotalUsd))}</p>
                                        </div>
                                        <button data-del-consumo="${E.id}" title="Eliminar consumo y reintegrar stock al inventario" class="w-7 h-7 flex items-center justify-center rounded border-2 border-brand-black bg-red-100 hover:bg-red-500 hover:text-white text-red-800 text-sm font-black transition-colors active:scale-95">&times;</button>
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
                            ${this.productos.map(E=>{const w=!E.sinStock&&Number(E.stock)<=0,P=E.precioPaqueteUsd&&E.nombrePaquete||E.esCaja&&E.unidadesPorCaja&&E.unidadesPorCaja>1;return`
                                <div class="relative" data-producto-row="${E.sku}">
                                    <button data-add-sku="${E.sku}" data-modo="unidad" data-agotado="${w?"1":"0"}" class="text-left border-2 border-brand-black rounded p-2 transition-all text-xs font-bold ${w?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-gray-50 hover:bg-white shadow-sm hover:shadow-brutal-sm"} w-full">
                                        <div class="flex justify-between items-start gap-1">
                                            <p class="truncate flex-1" title="${E.nombre}">${E.nombre}</p>
                                            ${w?'<span class="bg-red-200 text-red-900 border border-red-400 text-[9px] font-black px-1 rounded">AGOTADO</span>':""}
                                        </div>
                                        <div class="flex justify-between items-center mt-1">
                                            <p class="text-brand-black font-black">$${L(E.precioUsd)}</p>
                                            <span class="text-[10px] ${w?"text-red-700 font-black":"text-gray-500"}">${Ee(E)}</span>
                                        </div>
                                    </button>
                                    ${P?`
                                    <button data-add-sku="${E.sku}" data-modo="paquete" data-agotado="${w?"1":"0"}" class="text-left border-2 border-brand-purple rounded p-1 transition-all text-[10px] font-bold mt-1 w-full ${w?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-purple-50 hover:bg-purple-100 shadow-sm hover:shadow-brutal-sm"}">
                                        <div class="flex justify-between items-center">
                                            <span class="text-purple-800">${E.nombrePaquete} ($${Number(E.precioPaqueteUsd).toFixed(2)})</span>
                                            <span class="text-purple-600">${E.unidadesPorCaja||1} un.</span>
                                        </div>
                                    </button>`:""}
                                </div>`}).join("")}
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
                        <button id="btn-cerrar-cuenta" class="${f>0?"bg-emerald-600 hover:bg-emerald-700":"bg-green-700 hover:bg-green-800"} text-white font-heading font-black text-xs sm:text-sm py-3.5 rounded border-2 border-brand-black shadow-brutal active:translate-y-0.5">
                            ${s?"COBRAR Y LIQUIDAR DEUDA (TASA LIBRE)":f>0?`LIQUIDAR (+$${L(f)})`:"LIQUIDAR Y COBRAR"}
                        </button>
                    </div>
                </div>`})():`
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                    <h4 class="font-heading font-black text-2xl mb-2">Selecciona un registro</h4>
                    <p class="text-brand-text font-body text-sm max-w-sm">Haz clic en una cuenta activa o deuda de la lista izquierda para cargarle consumos, abonar pagos o cobrarla.</p>
                </div>
                `}
            </div>
        </div>`,this.vincularEventos()}vincularEventos(){var a,n,c,i,b,t,r,s,d,l;(a=document.getElementById("btn-nueva-cuenta"))==null||a.addEventListener("click",()=>this.modalNuevaCuenta("activa")),(n=document.getElementById("btn-nueva-deuda"))==null||n.addEventListener("click",()=>this.modalNuevaCuenta("deuda")),(c=document.getElementById("tab-todas"))==null||c.addEventListener("click",()=>{this.filtroTab="todas",this.paginaCuentas=1,this.render()}),(i=document.getElementById("tab-activas"))==null||i.addEventListener("click",()=>{this.filtroTab="activa",this.paginaCuentas=1,this.render()}),(b=document.getElementById("tab-deudas"))==null||b.addEventListener("click",()=>{this.filtroTab="deuda",this.paginaCuentas=1,this.render()}),(t=document.getElementById("cta-pag-ant"))==null||t.addEventListener("click",()=>{this.paginaCuentas>1&&(this.paginaCuentas--,this.render())}),(r=document.getElementById("cta-pag-sig"))==null||r.addEventListener("click",()=>{this.paginaCuentas++,this.render()}),this.contenedor.querySelectorAll("[data-cuenta-id]").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.cuentaId;this.cuentaSeleccionada=this.cuentas.find(h=>h.ventaId===f)||null,this.render()})}),this.contenedor.querySelectorAll("[data-del-consumo]").forEach(m=>{m.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const f=m.dataset.delConsumo||"";try{const h=await R.eliminarConsumo(this.cuentaSeleccionada.ventaId,f);this.cuentaSeleccionada=h,this.render()}catch(h){this.mostrarToast(h instanceof Error?h.message:String(h),"error")}})});const e=this.contenedor.querySelector("#cta-buscar-prod");e&&he(e,40),e==null||e.addEventListener("input",()=>{const m=e.value.trim().toLowerCase(),f=this.contenedor.querySelector("#cta-grid-prod");if(f){const h=this.productos.filter(g=>!m||g.nombre.toLowerCase().includes(m));h.length===0?f.innerHTML='<p class="col-span-full text-center text-xs text-gray-400 py-4 font-bold">No se encontraron productos coincidentes.</p>':(f.innerHTML=h.map(g=>{const E=!g.sinStock&&Number(g.stock)<=0,w=g.precioPaqueteUsd&&g.nombrePaquete;return`
                        <div class="relative" data-producto-row="${g.sku}">
                            <button data-add-sku="${g.sku}" data-modo="unidad" data-agotado="${E?"1":"0"}" class="text-left border-2 border-brand-black rounded p-2 transition-all text-xs font-bold ${E?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-gray-50 hover:bg-white shadow-sm hover:shadow-brutal-sm"} w-full">
                                <div class="flex justify-between items-start gap-1">
                                    <p class="truncate flex-1" title="${g.nombre}">${g.nombre}</p>
                                    ${E?'<span class="bg-red-200 text-red-900 border border-red-400 text-[9px] font-black px-1 rounded">AGOTADO</span>':""}
                                </div>
                                <div class="flex justify-between items-center mt-1">
                                    <p class="text-brand-black font-black">$${L(g.precioUsd)}</p>
                                    <span class="text-[10px] ${E?"text-red-700 font-black":"text-gray-500"}">${Ee(g)}</span>
                                </div>
                            </button>
                            ${w?`
                            <button data-add-sku="${g.sku}" data-modo="paquete" data-agotado="${E?"1":"0"}" class="text-left border-2 border-brand-purple rounded p-1 transition-all text-[10px] font-bold mt-1 w-full ${E?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-purple-50 hover:bg-purple-100 shadow-sm hover:shadow-brutal-sm"}">
                                <div class="flex justify-between items-center">
                                    <span class="text-purple-800">${g.nombrePaquete||"Caja"} (${g.precioPaqueteUsd?`$${Number(g.precioPaqueteUsd).toFixed(2)}`:`$${(Number(g.precioUsd)*(g.unidadesPorCaja||1)).toFixed(2)}`})</span>
                                    <span class="text-purple-600">${g.unidadesPorCaja||1} un.</span>
                                </div>
                            </button>`:""}
                        </div>`}).join(""),this.vincularBotonesAgregar(f))}});const o=this.contenedor.querySelector("#cta-grid-prod");o&&this.vincularBotonesAgregar(o),this.contenedor.querySelectorAll("[data-editar-abono]").forEach(m=>{m.addEventListener("click",()=>this.modalEditarAbono())}),(s=document.getElementById("btn-editar-abono-cuenta"))==null||s.addEventListener("click",()=>this.modalEditarAbono()),(d=document.getElementById("btn-abonar-cuenta"))==null||d.addEventListener("click",()=>this.modalAbono()),(l=document.getElementById("btn-cerrar-cuenta"))==null||l.addEventListener("click",()=>this.modalCierre())}vincularBotonesAgregar(e){e.querySelectorAll("[data-add-sku]").forEach(o=>{o.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const a=o,n=a.dataset.addSku||"",c=a.dataset.agotado==="1",i=a.dataset.modo||"unidad";if(c){this.mostrarToast("Stock insuficiente: este producto no tiene existencias disponibles en inventario.","error");return}try{const b=await R.agregarConsumo(this.cuentaSeleccionada.ventaId,n,"1",!0,i);this.cuentaSeleccionada=b,this.render()}catch(b){this.mostrarToast(b instanceof Error?b.message:String(b),"error")}})})}modalNuevaCuenta(e="activa"){let o=e;const a=()=>{var s,d;const n=o==="deuda";this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                    <div class="flex border-2 border-brand-black rounded bg-gray-100 p-1 mb-4">
                        <button id="modal-tab-activa" class="flex-1 py-2 font-heading font-black text-xs rounded transition-colors ${n?"text-brand-black hover:bg-white":"bg-brand-black text-white"}">
                            CUENTA EN LOCAL (MESA)
                        </button>
                        <button id="modal-tab-deuda" class="flex-1 py-2 font-heading font-black text-xs rounded transition-colors ${n?"bg-amber-400 text-brand-black font-black":"text-brand-black hover:bg-white"}">
                            DEUDA / FIADO (CLIENTE)
                        </button>
                    </div>

                    <h3 class="font-heading font-black text-2xl mb-1">${n?"REGISTRAR NUEVA DEUDA":"ABRIR CUENTA EN LOCAL"}</h3>
                    <p class="text-xs text-gray-600 mb-4 font-bold leading-relaxed">
                        ${n?"Abre un registro de deuda a nombre de un cliente. Los consumos descontarán stock de inmediato. Esta cuenta puede permanecer abierta por días y se cobrará a la tasa libre que usted defina al momento del pago.":"Identificador para consumos de comanda, mesa o servicio en barra."}
                    </p>

                    <div class="space-y-3 mb-4">
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">${n?"Nombre del Cliente / Deudor":"Identificador (Mesa / Barra / Cliente)"}</label>
                            <input id="modal-cta-nombre" maxlength="40" autofocus placeholder="${n?"Ej: Taller Hermanos Gómez / Carlos":"Ej: Mesa 4 / Terraza"}"
                                class="w-full border-2 border-brand-black rounded px-3 py-2 text-base font-body focus:ring-2 focus:ring-brand-cyan" />
                        </div>

                        ${n?`
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Nota de Compromiso / Plazo (Opcional)</label>
                            <input id="modal-cta-nota" maxlength="60" placeholder="Ej: Paga el viernes / Autorizado por dueño"
                                class="w-full border-2 border-brand-black rounded px-3 py-2 text-sm font-body focus:ring-2 focus:ring-brand-cyan" />
                        </div>
                        `:""}
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <button id="modal-cta-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">CANCELAR</button>
                        <button id="modal-cta-ok" class="${n?"bg-amber-400 text-brand-black":"bg-brand-black text-white"} font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">
                            ${n?"CREAR DEUDA":"ABRIR CUENTA"}
                        </button>
                    </div>
                </div>
            </div>`;const c=this.modal.querySelector("#modal-tab-activa"),i=this.modal.querySelector("#modal-tab-deuda");c==null||c.addEventListener("click",()=>{o="activa",a()}),i==null||i.addEventListener("click",()=>{o="deuda",a()});const b=this.modal.querySelector("#modal-cta-nombre"),t=this.modal.querySelector("#modal-cta-nota");b&&he(b,40),t&&he(t,60),setTimeout(()=>b==null?void 0:b.focus(),50);const r=()=>{this.modal.innerHTML=""};(s=this.modal.querySelector("#modal-cta-cancel"))==null||s.addEventListener("click",r),(d=this.modal.querySelector("#modal-cta-ok"))==null||d.addEventListener("click",async()=>{const l=b==null?void 0:b.value.trim().slice(0,40),m=t==null?void 0:t.value.trim().slice(0,60);if(l){const f=await R.abrirCuenta(l,o,m,l);this.cuentaSeleccionada=f,o==="deuda"&&(this.filtroTab="deuda"),r(),this.render()}else this.mostrarToast(n?"Debe ingresar el nombre del cliente o empresa deudora.":"Debe ingresar un identificador válido para la cuenta.","error"),b==null||b.focus()})};a()}async modalAbono(){if(!this.cuentaSeleccionada)return;let e=[];try{e=await R.listarMetodosPago()}catch{e=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}const o=X(this.cuentaSeleccionada.totalParcialUsd),a=X(this.cuentaSeleccionada.abonosUsd),n=Math.max(0,o-a),c=this.modelo.tasaActual||807.39,i=(n*c).toFixed(2),b=this.cuentaSeleccionada.tipo==="deuda";let t=e.find(h=>h.nombre==="BIOPAGO")||e[0]||{nombre:"BIOPAGO",moneda:"BS"},r=t.moneda==="USD"?n:Number(i),s=c,d="";const l=()=>{var G;const h=e.filter(_=>_.moneda==="USD"),g=e.filter(_=>_.moneda==="BS"),E=h.map(_=>`<option value="${_.nombre}" ${_.nombre===t.nombre?"selected":""}>${_.nombre} ($ USD - Tasa Dinámica)</option>`).join(""),P=`
                <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                    ${g.map(_=>`<option value="${_.nombre}" ${_.nombre===t.nombre?"selected":""}>${_.nombre} (Bs.)</option>`).join("")}
                </optgroup>
                <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                    ${E}
                </optgroup>
            `,T=t.moneda==="USD",j=T&&s>0?s:c,x=T?r*j:r,v=c>0?x/c:0,y=a+v,U=y-o,D=U*c;let C="";if(r<=1e-4)C=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-700 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Aporte de este abono:</span>
                            <span class="font-heading font-black text-sm text-gray-800">$0.00 USD (Bs. 0.00)</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-600 border-t border-gray-300 pt-1 mt-1">
                            <span>Saldo pendiente actual:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${L(n)} USD (Bs. ${L(i)})</span>
                        </div>
                    </div>
                `;else if(U>.001)C=`
                    <div class="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${L(y)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${L(U)} USD (Bs. ${L(D)})</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Abono superior al consumo: este excedente se convertirá en ganancia o crédito al liquidar.</p>
                    </div>
                `;else if(U<-.001){const _=Math.abs(U),z=_*c;C=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${L(y)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${L(_)} USD (Bs. ${L(z)})</span>
                        </div>
                    </div>
                `}else C=`
                    <div class="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${L(y)} USD</span>
                        </div>
                    </div>
                `;this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                    <h3 class="font-heading font-black text-2xl mb-1">${b?"ABONAR A LA DEUDA":"REGISTRAR ABONO / ANTICIPO"}</h3>
                    <p class="font-body text-xs text-gray-700 mb-3">${(G=this.cuentaSeleccionada)==null?void 0:G.etiqueta} · El usuario decide libremente el monto y tasa del abono.</p>

                    <div class="bg-blue-50 border border-blue-400 rounded p-2.5 mb-3 text-xs text-blue-950 font-bold leading-tight">
                        ℹ <strong>Abonos con tasas dinámicas:</strong> En métodos en divisas (${h.map(_=>_.nombre).join(", ")}) se define la tasa al momento del abono. El diferencial frente a la tasa oficial se computa a favor del cliente.
                    </div>

                    <div class="space-y-3 mb-4">
                        <div>
                            <label class="block text-xs font-black uppercase text-gray-700 mb-1">Método de Pago del Abono</label>
                            <select id="select-metodo-abono" class="w-full border-2 border-brand-black rounded px-3 py-2 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                ${P}
                            </select>
                        </div>

                        ${T?`
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Monto a abonar en Dólares ($ USD)</label>
                            <div class="flex items-center">
                                <span class="bg-brand-black text-white px-3 py-2 rounded-l border-y-2 border-l-2 border-brand-black text-sm font-mono font-bold">$</span>
                                <input id="input-monto-abono" type="number" step="0.01" min="0.01" max="50000" value="${r>0?r:""}" placeholder="0.00"
                                    class="w-full border-2 border-brand-black rounded-r px-3 py-2 font-mono font-black text-xl text-brand-black text-right focus:outline-none" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <label class="block text-xs font-bold uppercase text-gray-700">Tasa de Cambio del Método (Bs. / USD)</label>
                                <button type="button" id="btn-reset-tasa-abono" class="text-[10px] font-black uppercase text-brand-purple hover:underline">
                                    TASA BCV: ${L(c)}
                                </button>
                            </div>
                            <input id="input-tasa-abono" type="number" step="0.01" min="1" max="100000" value="${j}"
                                class="w-full border-2 border-brand-black rounded px-3 py-2 font-mono font-black text-base text-brand-black text-right focus:outline-none" />
                        </div>

                        <div class="bg-purple-50 border border-brand-purple rounded p-2 text-xs font-bold space-y-0.5">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Valor aportado en Bolívares:</span>
                                <span data-aporte-bs class="text-brand-purple font-mono font-black">Bs. ${L(x)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Abono computable (Tasa BCV):</span>
                                <span data-abono-computable class="text-brand-black font-mono font-black">$ ${L(v)} USD</span>
                            </div>
                        </div>
                        `:`
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Monto a abonar en Bolívares (Bs.)</label>
                            <div class="flex items-center">
                                <span class="bg-brand-black text-white px-3 py-2 rounded-l border-y-2 border-l-2 border-brand-black text-sm font-mono font-bold">Bs.</span>
                                <input id="input-monto-abono" type="number" step="0.01" min="0.01" max="50000000" value="${r>0?r:""}" placeholder="0.00"
                                    class="w-full border-2 border-brand-black rounded-r px-3 py-2 font-mono font-black text-xl text-brand-black text-right focus:outline-none" />
                            </div>
                            <p class="text-[11px] text-gray-500 mt-1">Equivalente oficial acreditado: <span class="font-bold text-brand-black">$ ${L(v)} USD</span> (Tasa BCV: ${L(c)})</p>
                        </div>
                        `}

                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia (Opcional)</label>
                            <input id="input-ref-abono" type="text" maxlength="25" value="${d}" placeholder="Ej: PAGO MOVIL 4912, USDT HASH..."
                                class="w-full border-2 border-brand-black rounded px-3 py-1.5 text-xs font-mono focus:outline-none" />
                        </div>

                        <div id="abono-preview-container">${C}</div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <button id="modal-abono-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded hover:bg-gray-100">VOLVER</button>
                        <button id="modal-abono-ok" ${r<=0?"disabled":""} class="bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed text-brand-black font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">APLICAR ABONO</button>
                    </div>
                </div>
            </div>`,f()},m=()=>{const h=t.moneda==="USD",g=h&&s>0?s:c,E=h?r*g:r,w=c>0?E/c:0,P=a+w,T=P-o,j=T*c;let x="";if(r<=1e-4)x=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-700 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Aporte de este abono:</span>
                            <span class="font-heading font-black text-sm text-gray-800">$0.00 USD (Bs. 0.00)</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-600 border-t border-gray-300 pt-1 mt-1">
                            <span>Saldo pendiente actual:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${L(n)} USD (Bs. ${L(i)})</span>
                        </div>
                    </div>
                `;else if(T>.001)x=`
                    <div class="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${L(P)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${L(T)} USD (Bs. ${L(j)})</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Abono superior al consumo: este excedente se convertirá en ganancia o crédito al liquidar.</p>
                    </div>
                `;else if(T<-.001){const U=Math.abs(T),D=U*c;x=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${L(P)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${L(U)} USD (Bs. ${L(D)})</span>
                        </div>
                    </div>
                `}else x=`
                    <div class="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${L(P)} USD</span>
                        </div>
                    </div>
                `;const v=this.modal.querySelector("#abono-preview-container");v&&(v.innerHTML=x);const y=this.modal.querySelector("#modal-abono-ok");if(y&&(y.disabled=r<=0),h){const U=this.modal.querySelector("[data-aporte-bs]");U&&(U.textContent=`Bs. ${L(E)}`);const D=this.modal.querySelector("[data-abono-computable]");D&&(D.textContent=`$ ${L(w)} USD`)}},f=()=>{var g,E,w,P,T,j,x;const h=()=>{this.modal.innerHTML=""};(g=this.modal.querySelector("#modal-abono-cancel"))==null||g.addEventListener("click",h),(E=this.modal.querySelector("#select-metodo-abono"))==null||E.addEventListener("change",v=>{const y=v.target.value,U=e.find(D=>D.nombre===y);if(U){const D=t.moneda==="USD";t=U,U.moneda==="USD"?(s=c,D||(r=n)):D&&(r=Number(i)),l()}}),(w=this.modal.querySelector("#input-monto-abono"))==null||w.addEventListener("input",v=>{r=X(v.target.value),m()}),(P=this.modal.querySelector("#input-tasa-abono"))==null||P.addEventListener("input",v=>{s=X(v.target.value),m()}),(T=this.modal.querySelector("#btn-reset-tasa-abono"))==null||T.addEventListener("click",()=>{s=c,l()}),(j=this.modal.querySelector("#input-ref-abono"))==null||j.addEventListener("input",v=>{d=v.target.value}),(x=this.modal.querySelector("#modal-abono-ok"))==null||x.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const v=t.moneda==="USD",y=v&&s>0?s:c,U=v?r*y:r,D=c>0?U/c:0;if(D<=0||!Number.isFinite(D)){this.mostrarToast("Por favor ingrese un monto válido.","error");return}const C=await R.abonarCuenta(this.cuentaSeleccionada.ventaId,D,U);C&&(this.cuentaSeleccionada=C),h(),this.render()})};l()}modalEditarAbono(){var g,E,w,P;if(!this.cuentaSeleccionada)return;const e=X(this.cuentaSeleccionada.totalParcialUsd),o=X(this.cuentaSeleccionada.abonosUsd),a=this.modelo.tasaActual||807.39;this.modal.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                <h3 class="font-heading font-black text-2xl mb-1">CORREGIR SALDO ABONADO</h3>
                <p class="font-body text-xs text-gray-700 mb-4">${this.cuentaSeleccionada.etiqueta} · Modifique el saldo acumulado en caso de error de registro o digitación.</p>

                <div class="bg-gray-50 border-2 border-brand-black rounded p-3 mb-4 text-xs space-y-1">
                    <div class="flex justify-between font-bold text-gray-600">
                        <span>Consumo acumulado:</span>
                        <span>$${L(e)} (Bs. ${this.modelo.bs(e)})</span>
                    </div>
                    <div class="flex justify-between font-bold text-amber-800">
                        <span>Abonado registrado actualmente:</span>
                        <span>$${L(o)} (Bs. ${this.modelo.bs(o)})</span>
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
                        <button id="btn-preset-exacto" type="button" class="text-xs font-bold px-2.5 py-1.5 rounded border border-gray-400 bg-gray-100 hover:bg-gray-200 text-gray-800">Cubrir Todo ($${L(e)})</button>
                    </div>

                    <div id="edit-preview-box" class="rounded p-2.5 border-2 border-brand-black text-xs"></div>
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <button id="modal-edit-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">VOLVER</button>
                    <button id="modal-edit-ok" class="bg-amber-400 hover:bg-amber-500 text-brand-black font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">GUARDAR CORRECCIÓN</button>
                </div>
            </div>
        </div>`;const n=this.modal.querySelector("#tab-edit-usd"),c=this.modal.querySelector("#tab-edit-bs"),i=this.modal.querySelector("#sec-edit-usd"),b=this.modal.querySelector("#sec-edit-bs"),t=this.modal.querySelector("#edit-abono-usd-val"),r=this.modal.querySelector("#edit-abono-bs-val"),s=this.modal.querySelector("#edit-usd-equiv"),d=this.modal.querySelector("#edit-bs-equiv"),l=this.modal.querySelector("#edit-preview-box");let m="usd";const f=()=>{let T=0;m==="usd"?(T=X(t==null?void 0:t.value),s&&(s.textContent=`Bs. ${(T*a).toFixed(2)}`)):(T=X(r==null?void 0:r.value)/a,d&&(d.textContent=`$${T.toFixed(2)} USD`)),Number.isFinite(T)||(T=0);const j=T-e;if(l)if(j>.001)l.className="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold",l.innerHTML=`
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Saldo Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${L(T)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${L(j)} USD</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Excedente a favor del cliente.</p>
                    `;else if(j<-.001){const x=Math.abs(j);l.className="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold",l.innerHTML=`
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Saldo Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${L(T)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${L(x)} USD</span>
                        </div>
                    `}else l.className="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold",l.innerHTML=`
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${L(T)} USD</span>
                        </div>
                    `};t&&xe(t,5e4,8,f),r&&xe(r,5e7,11,f),f(),(g=this.modal.querySelector("#btn-preset-cero"))==null||g.addEventListener("click",()=>{const T=X(m==="usd"?t==null?void 0:t.value:r==null?void 0:r.value);(o>0||T>0)&&!window.confirm("¿Desea restablecer el saldo abonado a $0.00? Esta acción dejará los pagos registrados en cero.")||(t&&(t.value="0.00"),r&&(r.value="0.00"),f())}),(E=this.modal.querySelector("#btn-preset-exacto"))==null||E.addEventListener("click",()=>{t&&(t.value=e.toFixed(2)),r&&(r.value=(e*a).toFixed(2)),f()}),n==null||n.addEventListener("click",()=>{m="usd",n.className="flex-1 py-1.5 font-heading font-black text-xs rounded bg-brand-black text-white",c.className="flex-1 py-1.5 font-heading font-bold text-xs rounded text-brand-black hover:bg-white",i==null||i.classList.remove("hidden"),b==null||b.classList.add("hidden"),f()}),c==null||c.addEventListener("click",()=>{m="bs",c.className="flex-1 py-1.5 font-heading font-black text-xs rounded bg-brand-black text-white",n.className="flex-1 py-1.5 font-heading font-bold text-xs rounded text-brand-black hover:bg-white",b==null||b.classList.remove("hidden"),i==null||i.classList.add("hidden"),f()});const h=()=>{this.modal.innerHTML=""};(w=this.modal.querySelector("#modal-edit-cancel"))==null||w.addEventListener("click",h),(P=this.modal.querySelector("#modal-edit-ok"))==null||P.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;let T=0;if(m==="usd"?T=X(t==null?void 0:t.value):T=X(r==null?void 0:r.value)/a,!Number.isFinite(T)||T<0||T>5e4){this.mostrarToast("Monto inválido. Ingrese un valor entre $0.00 y $50,000.00 USD.","error");return}if(Math.abs(T-o)>.009){const v=T===0?`¿Confirmas reiniciar el saldo abonado a $0.00? (Monto previo registrado: $${L(o)})`:`¿Confirmas modificar el saldo abonado de esta cuenta a $${L(T)} USD (Bs. ${L(T*a)})? (Monto previo registrado: $${L(o)})`;if(!window.confirm(v))return}const x=await R.editarAbonoCuenta(this.cuentaSeleccionada.ventaId,T);x&&(this.cuentaSeleccionada=x),h(),this.render()})}async modalCierre(){var j,x,v;if(!this.cuentaSeleccionada)return;const e=this.cuentaSeleccionada.tipo==="deuda",o=X(this.cuentaSeleccionada.totalParcialUsd),a=X(this.cuentaSeleccionada.abonosUsd),n=Math.max(0,Math.round((o-a)*100)/100),c=Math.max(0,Math.round((a-o)*100)/100),i=this.modelo.tasaActual||807.39;if(n<=.009){this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                    <h3 class="font-heading font-black text-2xl mb-1">${e?"LIQUIDAR DEUDA":"LIQUIDAR CUENTA"}</h3>
                    <p class="font-body text-sm text-gray-600 mb-4">${this.cuentaSeleccionada.etiqueta} · Total cubierto por abonos previos</p>
                    
                    <div class="space-y-2 mb-4">
                        <div class="flex justify-between text-xs font-bold text-gray-500">
                            <span>Total de consumos:</span>
                            <span>$${L(o)} (Bs. ${L(o*i)})</span>
                        </div>
                        <div class="flex justify-between text-xs font-bold text-emerald-700">
                            <span>Total abonado acumulado:</span>
                            <span>$${L(a)} (Bs. ${L(a*i)})</span>
                        </div>

                        ${c>0?`
                        <div class="bg-emerald-50 border-2 border-emerald-600 rounded p-4 text-center mt-3">
                            <span class="text-xs font-black text-emerald-900 uppercase">Saldo a Favor del Cliente</span>
                            <p class="font-heading font-black text-3xl text-emerald-600 mt-1">+$${L(c)} USD</p>
                            <p class="font-bold text-xs text-emerald-800">Bs. ${L(c*i)}</p>
                            <div class="mt-3 bg-white border border-emerald-500 rounded p-2.5 text-xs text-emerald-950 font-bold leading-tight text-left">
                                ✓ <strong>Consolidación como ganancia:</strong> Al liquidar y cerrar la cuenta, este excedente de <strong>$${L(c)}</strong> se consolidará automáticamente como ganancia del negocio.
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
            </div>`;const y=()=>{this.modal.innerHTML=""};(j=this.modal.querySelector("#modal-liq-cancel"))==null||j.addEventListener("click",y);let U=!1;(x=this.modal.querySelector("#modal-liq-ok"))==null||x.addEventListener("click",async()=>{if(!U&&this.cuentaSeleccionada){U=!0;try{await R.cerrarCuenta(this.cuentaSeleccionada.ventaId,"0.00",i.toFixed(4)),this.cuentaSeleccionada=null,y(),this.render()}catch{U=!1}}});return}let b=[];try{b=await R.listarMetodosPago()}catch{b=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}let t=i;const r=e?b.find(y=>y.nombre==="TRANSF.BS.")||b[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"}:b.find(y=>y.nombre==="PUNTOD.VENTA")||b[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"},s=this.cuentaSeleccionada.ventaId,d=this.pagosBorradorPorCuenta.get(s);let l;if(d&&d.length>0){if(l=d.map(y=>({...y})),l.length===1&&l[0]){const y=l[0];y.monto=y.moneda==="USD"?n:Number((n*t).toFixed(2)),y.tasaCambio=t}else if(l.length>1){const y=Number((n*t).toFixed(2));let U=0;for(let G=0;G<l.length-1;G++){const _=l[G],z=_.tasaCambio>0?_.tasaCambio:t;U+=_.moneda==="USD"?_.monto*z:_.monto}const D=Math.max(0,Math.round((y-U)*100)/100),C=l[l.length-1];C&&(C.monto=C.moneda==="USD"?t>0?Number((D/t).toFixed(2)):0:D,C.tasaCambio=t)}}else l=[{id:"p-1",metodo:r.nombre,moneda:r.moneda,monto:r.moneda==="USD"?n:Number((n*t).toFixed(2)),tasaCambio:t,referencia:""}];const m=this.resolucionVueltoPorCuenta.get(s);let f=(m==null?void 0:m.estado)||"PAGADO",h=(m==null?void 0:m.metodo)||(e?"TRANSF.BS.":"BS.EFEC."),g=(m==null?void 0:m.tasa)||t;b.some(y=>y.nombre===h)||(h=((v=b[0])==null?void 0:v.nombre)||(e?"TRANSF.BS.":"BS.EFEC."));let E=!1;const w=()=>{let y=0;for(const N of l)if(N.moneda==="USD"){const S=N.tasaCambio>0?N.tasaCambio:t;y+=N.monto*S}else y+=N.monto;y=Math.round(y*100)/100;const U=Math.round(n*t*100)/100,D=t>0?Math.round(y/t*100)/100:0,C=Math.max(0,Math.round((U-y)*100)/100),G=t>0?Math.max(0,Math.round(C/t*100)/100):0,_=Math.max(0,Math.round((y-U)*100)/100),z=t>0?Math.max(0,Math.round(_/t*100)/100):0,B=y>=U-.01&&l.every(N=>N.monto>0);return{cubiertoUsd:D,cubiertoBs:y,totalEsperadoBs:U,faltanteUsd:G,faltanteBs:C,vueltoUsd:z,vueltoBs:_,puedeConfirmar:B}},P=()=>{var S,M;const y=w(),U=b.filter(k=>k.moneda==="USD"),D=b.filter(k=>k.moneda==="BS"),C=l.map((k,q)=>{const J=U.map(O=>`<option value="${O.nombre}" ${O.nombre===k.metodo?"selected":""}>${O.nombre} ($ - Tasa Dinámica)</option>`).join(""),H=`
                        <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                            ${D.map(O=>`<option value="${O.nombre}" ${O.nombre===k.metodo?"selected":""}>${O.nombre} (Bs.)</option>`).join("")}
                        </optgroup>
                        <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                            ${J}
                        </optgroup>
                    `,I=k.tasaCambio>0?k.tasaCambio:t,$=k.moneda==="USD"?k.monto*I:k.monto,F=t>0?$/t:0;return`
                    <div class="border-2 border-brand-black rounded-lg p-2.5 bg-gray-50 mb-2">
                        <div class="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                            <span class="font-heading font-black text-xs uppercase text-gray-700">
                                Pago #${q+1} · <span class="${k.moneda==="USD"?"text-brand-purple":"text-brand-black"}">${k.moneda==="USD"?"Divisa ($ USD)":"Moneda Nacional (Bs.)"}</span>
                            </span>
                            ${l.length>1?`<button data-eliminar-pago="${k.id}" class="text-[11px] font-black text-red-600 hover:text-red-800 bg-red-50 border border-red-300 rounded px-2 py-0.5">Eliminar</button>`:""}
                        </div>
                        ${k.moneda==="USD"?`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Divisa</label>
                                <select data-pago-metodo="${k.id}" class="w-full border-2 border-brand-black rounded px-2 py-1 font-heading font-black text-xs bg-white focus:outline-none">
                                    ${H}
                                </select>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto ($ USD)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">$</span>
                                    <input type="number" step="0.01" min="0.01" max="999999" data-pago-monto="${k.id}" value="${k.monto>0?k.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1 text-xs font-mono font-black focus:outline-none text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <div class="flex items-center justify-between mb-0.5">
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase">Tasa (Bs./$)</label>
                                    <button type="button" data-reset-tasa-cuenta="${k.id}" class="text-[9px] font-black uppercase text-brand-purple hover:underline" title="Restablecer a tasa oficial">Base: ${L(t)}</button>
                                </div>
                                <input type="number" step="0.01" min="1" max="100000" data-pago-tasa="${k.id}" value="${I>0?I:t}"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1 text-xs font-mono font-black focus:outline-none text-right" />
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${k.id}" value="${k.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1 text-xs font-mono focus:outline-none" />
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-1 mt-1 text-[11px]">
                            <span class="font-bold text-brand-purple">Aporte: Bs. ${L($)}</span>
                            <span class="text-gray-500 font-mono">Equiv. base: $ ${L(F)} ${I!==t?`(Tasa: Bs. ${L(I)} vs Base: Bs. ${L(t)})`:""}</span>
                        </div>
                        `:`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-5">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Bolívares</label>
                                <select data-pago-metodo="${k.id}" class="w-full border-2 border-brand-black rounded px-2 py-1 font-heading font-black text-xs bg-white focus:outline-none">
                                    ${H}
                                </select>
                            </div>
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto (Bs.)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">Bs.</span>
                                    <input type="number" step="0.01" min="0.01" max="999999999" data-pago-monto="${k.id}" value="${k.monto>0?k.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1 text-xs font-mono font-black focus:outline-none text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${k.id}" value="${k.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1 text-xs font-mono focus:outline-none" />
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-1 mt-1 text-[11px]">
                            <span class="font-bold text-brand-black">Aporte directo: Bs. ${L(k.monto)}</span>
                            <span class="text-gray-500 font-mono">Equiv. base: $ ${L(F)}</span>
                        </div>
                        `}
                    </div>`}).join(""),G=b.find(k=>k.nombre===h),_=(G==null?void 0:G.moneda)==="USD",z=g>0?g:t,B=_&&z>0?Number((y.vueltoBs/z).toFixed(2)):y.vueltoUsd,N=y.faltanteBs>.009?`
                    <div class="bg-amber-50 border-2 border-amber-500 rounded p-2.5 text-center mb-3">
                        <p class="text-xs font-black uppercase text-amber-900">Monto Incompleto por Cubrir</p>
                        <p class="font-heading font-black text-lg text-amber-700">Faltan Bs. ${L(y.faltanteBs)} · <span class="text-sm text-amber-900">$ ${L(y.faltanteUsd)} (Equiv. Base)</span></p>
                    </div>`:y.vueltoBs>.009?`
                    <div class="border-2 border-emerald-700 bg-emerald-50/70 rounded-lg p-3 mb-3">
                        <div class="flex flex-wrap items-center justify-between gap-1 mb-2">
                            <div>
                                <span class="text-[10px] font-black uppercase text-emerald-900 tracking-wide block">Excedente / Vuelto del Cliente</span>
                                <span class="font-heading font-black text-lg text-emerald-800">Bs. ${L(y.vueltoBs)}</span>
                            </div>
                            <span class="text-xs font-bold text-emerald-900 font-mono">$ ${L(y.vueltoUsd)} equiv.</span>
                        </div>

                        <!-- Selector: Entregar Vuelto vs Retener Vuelto -->
                        <div class="grid grid-cols-2 gap-2 mb-2.5">
                            <button type="button" id="btn-vuelto-pagado-cuenta" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${f==="PAGADO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                                ENTREGAR VUELTO (PAGADO)
                            </button>
                            <button type="button" id="btn-vuelto-retenido-cuenta" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${f==="RETENIDO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                                RETENER VUELTO (A FAVOR)
                            </button>
                        </div>

                        ${f==="PAGADO"?`
                        <div class="bg-white border border-emerald-600 rounded p-2.5 space-y-2">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <label class="text-[11px] font-bold text-gray-700 uppercase">Método de Egreso del Vuelto:</label>
                                <select id="select-metodo-vuelto-cuenta" class="border-2 border-brand-black rounded px-2 py-1 text-xs font-bold bg-white focus:outline-none">
                                    ${b.map(k=>`
                                        <option value="${k.nombre}" ${k.nombre===h?"selected":""}>
                                            ${k.nombre} (${k.moneda==="USD"?"$ Dólares":"Bs. Bolívares"})
                                        </option>
                                    `).join("")}
                                </select>
                            </div>
                            ${_?`
                            <div class="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-gray-100">
                                <div>
                                    <span class="text-[10px] font-bold text-gray-500 uppercase block">Tasa Pactada Vuelto USD:</span>
                                    <div class="flex items-center gap-1.5">
                                        <input id="input-tasa-vuelto-cuenta" type="text" inputmode="decimal" value="${g.toFixed(2)}"
                                            class="w-24 border-2 border-brand-black rounded px-2 py-0.5 text-xs font-mono font-bold" />
                                        <button id="btn-reset-tasa-vuelto-cuenta" type="button" class="text-[10px] bg-gray-100 border border-gray-400 rounded px-1.5 py-0.5 hover:bg-gray-200">
                                            Reset Base
                                        </button>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="text-[10px] font-bold text-gray-500 uppercase block">Divisa USD a Entregar:</span>
                                    <span class="font-heading font-black text-base text-brand-purple">
                                        $ ${L(B)} USD
                                    </span>
                                </div>
                            </div>
                            `:`
                            <div class="flex items-center justify-between pt-1 border-t border-gray-100 text-xs">
                                <span class="font-bold text-gray-600">Total a Entregar en Bolívares:</span>
                                <span class="font-heading font-black text-base text-brand-black">Bs. ${L(y.vueltoBs)}</span>
                            </div>
                            `}
                        </div>
                        `:`
                        <div class="bg-white border border-gray-300 rounded p-2 text-xs text-gray-700">
                            <p class="font-bold text-emerald-900 mb-0.5">Vuelto Retenido como Saldo a Favor</p>
                            <p class="text-[11px] text-gray-600 leading-tight">
                                El excedente de <b>Bs. ${L(y.vueltoBs)} ($ ${L(y.vueltoUsd)})</b> no genera egreso físico de caja y se asienta en el comprobante como saldo a favor retenido en el negocio.
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
                                ${(S=this.cuentaSeleccionada)==null?void 0:S.etiqueta} ${(M=this.cuentaSeleccionada)!=null&&M.cliente?`· ${this.cuentaSeleccionada.cliente}`:""}
                            </p>
                        </div>
                        <button id="modal-liq-cerrar" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
                    </div>

                    <!-- Resumen del Importe Pendiente -->
                    <div class="bg-brand-gray/30 border-2 border-brand-black rounded-lg p-3 mb-3 flex flex-wrap justify-between items-center gap-2">
                        <div>
                            <span class="text-[10px] font-bold text-gray-600 uppercase block">Saldo Neto a Cobrar</span>
                            <div class="flex items-baseline gap-2">
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${L(n)} USD</span>
                                <span class="font-heading font-black text-xl text-brand-purple">Bs. ${L(y.totalEsperadoBs)}</span>
                            </div>
                        </div>
                        <div class="text-right text-xs">
                            <span class="text-gray-500 font-bold block">Consumo: $${L(o)} · Abonos: $${L(a)}</span>
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
                            Métodos de Pago Aplicados (${l.length})
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
                    ${E?`
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
                    ${N}

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
                        <button id="modal-liq-ok" ${y.puedeConfirmar?"":"disabled"}
                            class="bg-green-700 hover:bg-green-800 disabled:opacity-30 disabled:cursor-not-allowed text-white font-heading font-black py-2 px-5 rounded border-2 border-brand-black shadow-brutal-sm text-sm">
                            CONFIRMAR COBRO
                        </button>
                    </div>
                </div>
            </div>`,T()},T=()=>{var G,_,z,B,N,S,M,k,q,J,te;const y=()=>{this.cuentaSeleccionada&&(this.pagosBorradorPorCuenta.set(this.cuentaSeleccionada.ventaId,l),this.resolucionVueltoPorCuenta.set(this.cuentaSeleccionada.ventaId,{estado:f,metodo:h,tasa:g}))},U=()=>{y(),this.modal.innerHTML=""};(G=this.modal.querySelector("#modal-liq-cerrar"))==null||G.addEventListener("click",U),(_=this.modal.querySelector("#modal-liq-cancel"))==null||_.addEventListener("click",U),(z=this.modal.querySelector("#modal-liq-agregar-mas"))==null||z.addEventListener("click",()=>{y(),this.modal.innerHTML=""}),(B=this.modal.querySelector("#btn-vuelto-pagado-cuenta"))==null||B.addEventListener("click",()=>{f="PAGADO",y(),P()}),(N=this.modal.querySelector("#btn-vuelto-retenido-cuenta"))==null||N.addEventListener("click",()=>{f="RETENIDO",y(),P()}),(S=this.modal.querySelector("#select-metodo-vuelto-cuenta"))==null||S.addEventListener("change",H=>{h=H.target.value,y(),P()});const D=this.modal.querySelector("#input-tasa-vuelto-cuenta");if(D&&(D.addEventListener("input",H=>{const I=X(H.target.value);g=I>0?I:t,y()}),D.addEventListener("blur",()=>{P()})),(M=this.modal.querySelector("#btn-reset-tasa-vuelto-cuenta"))==null||M.addEventListener("click",()=>{g=t,y(),P()}),e){const H=this.modal.querySelector("#deuda-tasa-input"),I=this.modal.querySelector("#btn-tasa-bcv");H&&xe(H,1e5,9,()=>{const $=X(H.value);t=Number.isFinite($)&&$>0?$:i,y(),P()}),I==null||I.addEventListener("click",()=>{t=i,y(),P()})}this.modal.querySelectorAll("select[data-pago-metodo]").forEach(H=>{H.addEventListener("change",I=>{const $=H.dataset.pagoMetodo,F=I.target.value,O=l.find(W=>W.id===$);if(O){const W=b.find(de=>de.nombre===F),oe=(W==null?void 0:W.moneda)||"BS";O.moneda=oe,O.tasaCambio=t,l.length===1?O.monto=O.moneda==="USD"?n:Number((n*t).toFixed(2)):oe!==O.moneda&&(oe==="USD"?O.monto=Number((t>0?O.monto/t:0).toFixed(2)):O.monto=Number((O.monto*t).toFixed(2))),O.metodo=F,y(),P()}})}),this.modal.querySelectorAll("input[data-pago-tasa]").forEach(H=>{H.addEventListener("input",I=>{const $=H.dataset.pagoTasa,F=X(I.target.value),O=l.find(W=>W.id===$);if(O){O.tasaCambio=F>0?F:t,y();const W=w(),oe=this.modal.querySelector("#modal-liq-ok");oe&&(oe.disabled=!W.puedeConfirmar)}}),H.addEventListener("blur",()=>{P()})}),this.modal.querySelectorAll("button[data-reset-tasa-cuenta]").forEach(H=>{H.addEventListener("click",()=>{const I=H.dataset.resetTasaCuenta,$=l.find(F=>F.id===I);$&&($.tasaCambio=t,y(),P())})}),this.modal.querySelectorAll("input[data-pago-monto]").forEach(H=>{H.addEventListener("input",I=>{const $=H.dataset.pagoMonto,F=X(I.target.value),O=l.find(W=>W.id===$);if(O){O.monto=F,y();const W=w(),oe=this.modal.querySelector("#modal-liq-ok");oe&&(oe.disabled=!W.puedeConfirmar)}}),H.addEventListener("blur",()=>{P()})}),this.modal.querySelectorAll("input[data-pago-ref]").forEach(H=>{H.addEventListener("input",I=>{const $=H.dataset.pagoRef,F=I.target.value,O=l.find(W=>W.id===$);O&&(O.referencia=F,y())})}),this.modal.querySelectorAll("button[data-eliminar-pago]").forEach(H=>{H.addEventListener("click",()=>{const I=H.dataset.eliminarPago;l=l.filter($=>$.id!==I),y(),P()})}),(k=this.modal.querySelector("#btn-agregar-pago-cuenta"))==null||k.addEventListener("click",()=>{let H=w();const I="p-"+Math.random().toString(36).slice(2,7),$=b.find(O=>!l.some(W=>W.metodo===O.nombre))||b[0]||{nombre:"BS.EFEC.",moneda:"BS"};if(H.faltanteBs<=.01&&l.length===1&&l[0]){const O=l[0],W=O.tasaCambio>0?O.tasaCambio:t,oe=O.moneda==="USD"?O.monto*W:O.monto,de=Math.round(oe/2*100)/100;O.monto=O.moneda==="USD"?W>0?Number((de/W).toFixed(2)):0:de,H=w()}const F=H.faltanteBs>0?H.faltanteBs:0;l.push({id:I,metodo:$.nombre,moneda:$.moneda,monto:$.moneda==="USD"?t>0?Number((F/t).toFixed(2)):0:F,tasaCambio:t,referencia:""}),y(),P()}),(q=this.modal.querySelector("#btn-toggle-nuevo-metodo-cuenta"))==null||q.addEventListener("click",()=>{E=!E,P()}),(J=this.modal.querySelector("#btn-guardar-nuevo-metodo-cuenta"))==null||J.addEventListener("click",()=>{(async()=>{const H=this.modal.querySelector("#input-nuevo-metodo-nombre-cuenta"),I=(H==null?void 0:H.value.trim())||"",$=this.modal.querySelector('input[name="radio-nuevo-metodo-moneda-cuenta"][value="USD"]'),F=$!=null&&$.checked?"USD":"BS";if(I)try{b=await R.crearMetodoPago(I,F),E=!1,P()}catch{}})()});let C=!1;(te=this.modal.querySelector("#modal-liq-ok"))==null||te.addEventListener("click",()=>{C||(C=!0,(async()=>{if(!this.cuentaSeleccionada)return;const H=this.modal.querySelector("#cobro-error-cuenta");try{const I=l.filter(ne=>ne.monto>0).map(ne=>{const ue=ne.moneda==="USD"&&ne.tasaCambio>0?ne.tasaCambio:t,ke=ne.moneda==="USD"?ne.monto*ue:ne.monto,Te=t>0?ke/t:0;return{metodo:ne.metodo,moneda:ne.moneda,montoUsd:(ne.moneda==="USD"?ne.monto:Te).toFixed(2),montoBs:ke.toFixed(2),tasaCambio:ne.moneda==="USD"?ue.toFixed(2):void 0,referencia:ne.referencia.trim()||void 0}});if(I.length===0)throw new Error("Debe especificar al menos un pago válido.");const $=w(),F=I.reduce((ne,ue)=>ne+Number(ue.montoBs),0),O=b.find(ne=>ne.nombre===h),W=(O==null?void 0:O.moneda)==="USD",oe=W?g>0?g:t:void 0,de=W&&oe?($.vueltoBs/oe).toFixed(2):$.vueltoUsd.toFixed(2),Ue={estado:$.vueltoBs>.009?f:"SIN_VUELTO",metodo:$.vueltoBs>.009&&f==="PAGADO"?h:void 0,montoBs:$.vueltoBs>.009?$.vueltoBs.toFixed(2):void 0,montoUsd:$.vueltoBs>.009?de:void 0,tasa:$.vueltoBs>.009&&f==="PAGADO"&&oe?oe.toFixed(2):void 0},fe=this.cuentaSeleccionada.ventaId;await R.cerrarCuenta(fe,F.toFixed(2),t.toFixed(4),I,Ue),this.pagosBorradorPorCuenta.delete(fe),this.resolucionVueltoPorCuenta.delete(fe),this.cuentaSeleccionada=null,this.modal.innerHTML="",this.render()}catch(I){C=!1,H&&(H.textContent=I instanceof Error?I.message.replace(/"/g,""):String(I),H.classList.remove("hidden"))}})())})};P()}mostrarToast(e,o="info"){var c;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},n=document.createElement("div");n.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,n.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(c=n.querySelector("button"))==null||c.addEventListener("click",()=>n.remove()),document.body.appendChild(n),setTimeout(()=>n.remove(),8e3)}}const ie=(u,e,o,a)=>{u.maxLength=o,u.addEventListener("input",()=>{let n=u.value.replace(/[^0-9.,]/g,"");const c=n.split(/[.,]/);c.length>2?n=c[0]+"."+c.slice(1).join(""):c.length===2&&(n=c[0]+"."+c[1].slice(0,2)),n.length>o&&(n=n.slice(0,o));const i=parseFloat(n.replace(",","."));Number.isFinite(i)&&i>e&&(n=String(e)),u.value!==n&&(u.value=n),a&&a()})},Se=(u,e,o,a,n)=>{u.maxLength=a,u.addEventListener("input",()=>{let c=u.value.replace(/[^0-9]/g,"");c.length>a&&(c=c.slice(0,a));const i=parseInt(c,10);Number.isFinite(i)&&i>o&&(c=String(o)),u.value!==c&&(u.value=c),n&&n()}),u.addEventListener("blur",()=>{const c=parseInt(u.value,10);Number.isFinite(c)&&c<e&&(u.value=String(e),n&&n())})},le=(u,e,o=!1)=>{u.maxLength=e,u.addEventListener("input",()=>{let a=o?u.value.replace(/[<>{}\\]/g,""):u.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ .,/_#-]/g,"");a.length>e&&(a=a.slice(0,e)),u.value!==a&&(u.value=a)})};class tt{constructor(e,o,a=!0){A(this,"contenedor");A(this,"modelo");A(this,"categorias",[]);A(this,"tasasImpuestos",[]);A(this,"productos",[]);A(this,"busquedaRepo","");A(this,"busquedaCatalogo","");A(this,"filtroCategoriaRepo","todas");A(this,"filtroCategoriaCatalogo","todas");A(this,"tabActiva","alta");A(this,"semaforoStock",{rojoMax:5,amarilloMax:15});A(this,"POR_PAGINA_CAT",40);A(this,"POR_PAGINA_REPO",24);A(this,"paginaCat",1);A(this,"paginaRepo",1);this.duenoAutenticado=a,this.contenedor=e,this.modelo=o,this.modelo}getUnitLabel(e){return e.unidad==="kg"?"kg":e.unidad==="ml"?"ml":e.unidad==="un"?"un.":e.capacidades&2?"kg":"un."}getNombreCategoria(e){if(!e)return"General";const o=this.categorias.find(a=>a.id===e);return o?o.nombre:"General"}getConteoCategorias(){const e={todas:this.productos.length};return this.categorias.forEach(o=>{e[o.id]=0}),e["cat-general"]===void 0&&(e["cat-general"]=0),this.productos.forEach(o=>{const a=o.categoriaId||"cat-general";e[a]=(e[a]||0)+1}),e}async render(e){var s;e&&(this.tabActiva=e);const[o,a,n,c]=await Promise.all([R.categorias(),R.tasasImpuestos(),R.productos(),R.obtenerSemaforoStock()]);this.categorias=o,this.tasasImpuestos=a,this.productos=n,this.semaforoStock=c;const i=this.getConteoCategorias(),b="Ej: Artículo Comercial 1L, Presentación 500g, Pack Estándar...",r=((s=this.modelo.getConfig())==null?void 0:s.privacidadInventario)&&!this.duenoAutenticado;this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Control de Inventario</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Alta de productos, reposición de mercancía, categorías y tasas tributarias</p>
            </div>
            ${r?'<div class="bg-amber-100 border-2 border-amber-400 rounded px-3 py-1 text-xs font-bold text-amber-800">MODO OPERADOR — Precios y stock ocultos. Acceda como administrador para ver información sensible.</div>':""}
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
                        <input id="prod-nombre" maxlength="64" placeholder="${b}" class="w-full border-2 border-brand-black rounded px-4 py-2.5 font-bold focus:ring-2 focus:ring-brand-cyan" required />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Categoría</label>
                            <select id="prod-categoria" class="w-full border-2 border-brand-black rounded px-3 py-2.5 bg-white font-bold">
                                ${this.categorias.map(d=>`<option value="${d.id}">${d.nombre}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Tasa de Impuesto</label>
                            <select id="prod-impuesto" class="w-full border-2 border-brand-black rounded px-3 py-2.5 bg-white font-bold">
                                ${this.tasasImpuestos.map(d=>`<option value="${d.porcentaje}">${d.nombre}</option>`).join("")}
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
                        <div class="pt-2 border-t border-gray-300">
                            <label class="inline-flex items-center gap-2 cursor-pointer select-none">
                                <input id="prod-tiene-paquete" type="checkbox" class="w-4 h-4 border-2 border-brand-purple rounded text-brand-purple focus:ring-0" />
                                <span class="font-bold text-xs sm:text-sm">¿Tiene precio por paquete / caja?</span>
                            </label>
                            <div id="box-paquete-config" class="hidden grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                <div>
                                    <label class="block text-[11px] font-bold uppercase text-gray-700 mb-0.5">Nombre del Empaque *</label>
                                    <input id="prod-nombre-paquete" type="text" maxlength="30" placeholder="Ej: Caja, Tobo, Bolsa" class="w-full border-2 border-brand-purple rounded px-3 py-1.5 font-bold bg-white text-sm" />
                                    <span class="text-[10px] text-gray-500">Nombre descriptivo del empaque</span>
                                </div>
                                <div>
                                    <label class="block text-[11px] font-bold uppercase text-gray-700 mb-0.5">Precio por Empaque (USD) *</label>
                                    <input id="prod-precio-paquete" type="number" min="0" step="0.01" placeholder="Ej: 25.00" class="w-full border-2 border-brand-purple rounded px-3 py-1.5 font-bold bg-white text-sm" />
                                    <span class="text-[10px] text-gray-500">Precio de venta por empaque completo</span>
                                </div>
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
                            ${this.categorias.map(d=>`<option value="${d.id}" ${this.filtroCategoriaCatalogo===d.id?"selected":""}>${d.nombre} (${i[d.id]||0} prods)</option>`).join("")}
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
                    ${this.categorias.map(d=>{const l=i[d.id]||0,m=this.filtroCategoriaRepo===d.id;return`
                        <button data-cat-chip="${d.id}" class="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors ${m?"bg-brand-black text-white":"bg-gray-100 text-brand-black hover:bg-gray-200"}">
                            ${d.nombre} (${l})
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
                    ${this.categorias.map(d=>{const l=i[d.id]||0;return`
                        <div class="flex justify-between items-center border-2 border-brand-black rounded-lg p-3 bg-gray-50">
                            <div>
                                <span class="font-bold text-sm text-brand-black">${d.nombre}</span>
                                <p class="text-[11px] font-bold text-gray-500">${l} ${l===1?"producto asociado":"productos asociados"}</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs font-black px-2 py-0.5 rounded border border-brand-black ${l>0?"bg-amber-100 text-amber-900":"bg-gray-200 text-gray-600"}">
                                    ${l} prods.
                                </span>
                                <button data-del-cat="${d.id}" class="text-xs font-black text-red-600 hover:text-white hover:bg-red-600 border border-red-300 rounded px-2 py-1 transition-colors">Eliminar</button>
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
                    ${this.tasasImpuestos.map(d=>`
                        <div class="flex justify-between items-center border border-brand-black rounded p-2.5 bg-gray-50">
                            <span class="font-bold text-sm">${d.nombre} (${d.porcentaje}%)</span>
                            ${d.porcentaje==="0"||d.porcentaje==="16"?'<span class="text-xs text-gray-400 font-bold">Por defecto</span>':`<button data-del-tax="${d.id}" class="text-xs font-black text-red-600 hover:underline">Eliminar</button>`}
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>`,this.conectarEventos(),this.renderCatalogoLista(),this.renderRepoLista()}conectarEventos(){var M,k,q,J,te,H;const e=document.getElementById("tab-alta"),o=document.getElementById("tab-stock"),a=document.getElementById("tab-ajustes"),n=document.getElementById("inv-seccion-alta"),c=document.getElementById("inv-seccion-stock"),i=document.getElementById("inv-seccion-ajustes"),b=(I,$,F)=>{this.tabActiva=I,[e,o,a].forEach(O=>{O&&(O.className="w-36 sm:w-48 h-9 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0")}),[n,c,i].forEach(O=>{O==null||O.classList.remove("block"),O==null||O.classList.add("hidden")}),$&&F&&($.className="w-36 sm:w-48 h-9 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white transition-colors shrink-0",F.classList.remove("hidden"),F.classList.add("block"))};e==null||e.addEventListener("click",()=>b("alta",e,n)),o==null||o.addEventListener("click",()=>{b("stock",o,c),this.renderRepoLista()}),a==null||a.addEventListener("click",()=>b("ajustes",a,i));const t=document.getElementById("prod-precio-bruto"),r=document.getElementById("prod-margen"),s=document.getElementById("prod-impuesto"),d=document.getElementById("prod-precio-neto"),l=I=>{if(!I)return 0;const $=I.trim().replace(",","."),F=parseFloat($);return Number.isFinite(F)&&!isNaN(F)?F:0},m=()=>{if(!t||!d||!r||!s)return;const I=l(t.value),$=l(r.value)/100,F=l(s.value)/100;if(I>0){const W=I*(1+$)*(1+F);d.value=W.toFixed(2)}},f=()=>{if(!t||!d||!r||!s)return;const I=l(d.value),$=l(t.value),F=l(r.value)/100,O=l(s.value)/100;if(I>0){const W=I/(1+O);if($>0){const oe=(W-$)/$*100;r.value=Math.max(0,Math.round(oe*10)/10).toFixed(1)}else F>0&&(t.value=(W/(1+F)).toFixed(2))}},h=document.getElementById("prod-stock"),g=document.getElementById("prod-nombre"),E=document.getElementById("prod-unidad"),w=document.getElementById("cat-nombre"),P=document.getElementById("tax-nombre"),T=document.getElementById("tax-pct"),j=document.getElementById("cat-buscar-filtro"),x=document.getElementById("repo-buscar"),v=document.getElementById("alta-prod-msg");g&&le(g,64),t&&ie(t,99999.99,8,m),r&&ie(r,999,5,m),d&&ie(d,99999.99,8,f),h&&ie(h,99999,7),w&&le(w,32),P&&le(P,32),T&&ie(T,100,5),j&&le(j,40),x&&le(x,40),s==null||s.addEventListener("change",m);const y=()=>{v&&!v.classList.contains("hidden")&&v.style.color!=="#00823B"&&(v.classList.add("hidden"),v.textContent="")};g==null||g.addEventListener("input",y),d==null||d.addEventListener("input",y),h==null||h.addEventListener("input",y),E==null||E.addEventListener("change",y);const U=document.getElementById("prod-sin-stock"),D=document.getElementById("box-stock-inicial");U==null||U.addEventListener("change",()=>{y(),D&&(D.style.opacity=U.checked?"0.3":"1",D.querySelector("input").disabled=U.checked)});const C=document.getElementById("prod-es-caja"),G=document.getElementById("box-caja-config"),_=document.getElementById("prod-unidades-caja"),z=document.getElementById("prod-stock-cajas");C==null||C.addEventListener("change",()=>{y(),G&&(C.checked?G.classList.remove("hidden"):G.classList.add("hidden"))});const B=()=>{if(C!=null&&C.checked&&z&&_&&h){const I=parseInt(z.value,10),$=parseInt(_.value,10);Number.isFinite(I)&&I>=0&&Number.isFinite($)&&$>1&&(h.value=String(I*$))}};_&&Se(_,2,1e3,4,B),z&&Se(z,0,9999,4,B);const N=document.getElementById("prod-tiene-paquete"),S=document.getElementById("box-paquete-config");N==null||N.addEventListener("change",()=>{y(),S&&(N.checked?S.classList.remove("hidden"):S.classList.add("hidden"))}),z==null||z.addEventListener("input",B),_==null||_.addEventListener("input",B),(M=document.getElementById("form-nuevo-producto"))==null||M.addEventListener("submit",I=>{I.preventDefault(),this.guardarProducto()}),(k=document.getElementById("cat-buscar-filtro"))==null||k.addEventListener("input",I=>{this.busquedaCatalogo=I.target.value.trim().toLowerCase(),this.paginaCat=1,this.renderCatalogoLista()}),(q=document.getElementById("cat-filtro-lateral"))==null||q.addEventListener("change",I=>{this.filtroCategoriaCatalogo=I.target.value,this.paginaCat=1,this.renderCatalogoLista()}),(J=document.getElementById("repo-buscar"))==null||J.addEventListener("input",I=>{this.busquedaRepo=I.target.value.trim().toLowerCase(),this.paginaRepo=1,this.renderRepoLista()}),this.contenedor.querySelectorAll("[data-cat-chip]").forEach(I=>{I.addEventListener("click",()=>{const $=I.dataset.catChip||"todas";this.filtroCategoriaRepo=$,this.paginaRepo=1,this.contenedor.querySelectorAll("[data-cat-chip]").forEach(F=>{(F.dataset.catChip||"todas")===$?F.className="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors bg-brand-black text-white":F.className="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors bg-gray-100 text-brand-black hover:bg-gray-200"}),this.renderRepoLista()})}),(te=document.getElementById("form-crear-cat"))==null||te.addEventListener("submit",I=>{I.preventDefault();const $=document.getElementById("cat-nombre");$!=null&&$.value.trim()&&R.crearCategoria($.value.trim()).then(()=>void this.render("ajustes"))}),this.contenedor.querySelectorAll("[data-del-cat]").forEach(I=>{I.addEventListener("click",async()=>{var O;const $=I.dataset.delCat;if(!$)return;if(((O=this.modelo.getConfig())==null?void 0:O.privacidadInventario)&&!this.duenoAutenticado){alert("Acción no permitida en modo operador. Solicite al dueño.");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const W=window.prompt("Acción protegida. Ingrese el PIN de Administrador / Dueño:");if(!W||!await this.modelo.verificarPin(W)){alert("PIN incorrecto o no suministrado. Acción cancelada.");return}}window.confirm("¿Seguro que desea eliminar esta categoría? Los productos asociados quedarán sin categoría.")&&R.eliminarCategoria($).then(()=>void this.render("ajustes"))})}),(H=document.getElementById("form-crear-tax"))==null||H.addEventListener("submit",I=>{I.preventDefault();const $=document.getElementById("tax-nombre"),F=document.getElementById("tax-pct");$!=null&&$.value.trim()&&F&&R.crearTasaImpuesto($.value.trim(),Number(F.value)).then(()=>void this.render("ajustes"))}),this.contenedor.querySelectorAll("[data-del-tax]").forEach(I=>{I.addEventListener("click",()=>{const $=I.dataset.delTax;$&&R.eliminarTasaImpuesto($).then(()=>void this.render("ajustes"))})})}renderCatalogoLista(){var i,b,t,r;const e=document.getElementById("cat-lista-items");if(!e)return;const o=this.productos.filter(s=>{const d=!this.busquedaCatalogo||s.nombre.toLowerCase().includes(this.busquedaCatalogo)||s.sku.toLowerCase().includes(this.busquedaCatalogo),l=this.filtroCategoriaCatalogo==="todas"||(s.categoriaId||"cat-general")===this.filtroCategoriaCatalogo;return d&&l});if(o.length===0){e.innerHTML='<p class="py-4 text-center text-gray-400 font-bold text-xs">Sin coincidencias en esta categoría.</p>',(i=document.getElementById("paginacion-cat"))==null||i.remove();return}const a=Math.ceil(o.length/this.POR_PAGINA_CAT);this.paginaCat>a&&(this.paginaCat=a);const n=(this.paginaCat-1)*this.POR_PAGINA_CAT,c=o.slice(n,n+this.POR_PAGINA_CAT);if(e.innerHTML=c.map(s=>{var E;const d=Number(s.stock),l=s.sinStock?"bg-purple-100 text-purple-900":d>15?"bg-green-100 text-green-900":d>=10?"bg-yellow-100 text-yellow-900":"bg-red-100 text-red-900",m=this.getUnitLabel(s),f=this.getNombreCategoria(s.categoriaId),g=((E=this.modelo.getConfig())==null?void 0:E.privacidadInventario)&&!this.duenoAutenticado;return`
            <div class="border border-brand-black rounded p-2 bg-gray-50 flex justify-between items-center text-xs">
                <div class="min-w-0 flex-1 pr-2">
                    <p class="font-bold truncate text-brand-black" title="${s.nombre}">${s.nombre}</p>
                    <p class="text-[10px] text-gray-500 font-bold">
                        <span class="text-brand-purple font-black">${f}</span> · ${g?"•••":`$${Number(s.precioUsd).toFixed(2)}`} · IVA ${s.impuestoPct}%
                    </p>
                </div>
                <div class="text-right shrink-0">
                    <span class="font-black px-2 py-0.5 rounded border border-brand-black text-[10px] inline-block ${l}">
                        ${g?'<span class="text-gray-400">•••</span>':s.sinStock?"LIBRE":s.esCaja&&s.unidadesPorCaja&&s.unidadesPorCaja>1?`${Math.floor(d/s.unidadesPorCaja)} cj. + ${d%s.unidadesPorCaja} un. (${d} un.)`:`${d} ${m}`}
                    </span>
                </div>
            </div>`}).join(""),(b=document.getElementById("paginacion-cat"))==null||b.remove(),a>1){const s=document.createElement("div");s.id="paginacion-cat",s.className="flex items-center justify-between mt-2 gap-2 flex-wrap",s.innerHTML=`
                <span class="text-[10px] font-bold text-gray-500">Pag. ${this.paginaCat} de ${a} · ${o.length} productos</span>
                <div class="flex gap-1">
                    <button id="cat-pag-ant" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCat===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANT.</button>
                    <button id="cat-pag-sig" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCat===a?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIG.</button>
                </div>`,e.insertAdjacentElement("afterend",s),(t=document.getElementById("cat-pag-ant"))==null||t.addEventListener("click",()=>{this.paginaCat>1&&(this.paginaCat--,this.renderCatalogoLista())}),(r=document.getElementById("cat-pag-sig"))==null||r.addEventListener("click",()=>{this.paginaCat<a&&(this.paginaCat++,this.renderCatalogoLista())})}}renderRepoLista(){var t,r,s;const e=document.getElementById("repo-lista");if(!e)return;const o=this.productos.filter(d=>{const l=!this.busquedaRepo||d.nombre.toLowerCase().includes(this.busquedaRepo)||d.sku.toLowerCase().includes(this.busquedaRepo),m=this.filtroCategoriaRepo==="todas"||(d.categoriaId||"cat-general")===this.filtroCategoriaRepo;return l&&m}),a=document.getElementById("repo-contador-estado");if(a){const d=this.filtroCategoriaRepo==="todas"?"en depósito":`en ${this.getNombreCategoria(this.filtroCategoriaRepo)}`;a.textContent=`${o.length} de ${this.productos.length} artículos ${d}`}if(o.length===0){e.innerHTML='<p class="col-span-full py-8 text-center text-gray-500 font-bold">No se encontraron productos en la categoría seleccionada.</p>';return}const n=this.semaforoStock,c=Math.ceil(o.length/this.POR_PAGINA_REPO);this.paginaRepo>c&&(this.paginaRepo=c);const i=(this.paginaRepo-1)*this.POR_PAGINA_REPO,b=o.slice(i,i+this.POR_PAGINA_REPO);if(e.innerHTML=b.map(d=>{var P;const l=Number(d.stock),m=d.sinStock?"text-purple-700":l<=n.rojoMax?"text-red-600":l<=n.amarilloMax?"text-amber-600":"text-emerald-700",f=this.getUnitLabel(d),h=this.getNombreCategoria(d.categoriaId),g=d.sinStock?"Venta libre":d.esCaja&&d.unidadesPorCaja&&d.unidadesPorCaja>1?`${Math.floor(l/d.unidadesPorCaja)} cajas y ${l%d.unidadesPorCaja} un. (${l} un.)`:`${l} ${f}`,w=((P=this.modelo.getConfig())==null?void 0:P.privacidadInventario)&&!this.duenoAutenticado;return`
            <div class="border-2 border-brand-black rounded-lg p-3 bg-white shadow-sm flex flex-col justify-between h-[175px] min-h-[175px] max-h-[175px] box-border overflow-hidden">
                <div class="min-w-0">
                    <div class="flex justify-between items-start gap-1">
                        <div class="min-w-0 flex-1">
                            <span class="text-[9px] font-black uppercase tracking-wider text-brand-purple bg-purple-50 border border-purple-200 rounded px-1.5 py-0.2 inline-block mb-0.5 truncate max-w-[150px]">${h}</span>
                            <h4 class="font-heading font-black text-sm truncate" title="${d.nombre}">${d.nombre}</h4>
                        </div>
                        <button data-repo-del="${d.sku}" title="Eliminar producto del catálogo" class="w-5 h-5 rounded border border-brand-black text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center font-black text-xs shrink-0">&times;</button>
                    </div>
                    <p class="text-xs font-bold text-gray-500 mt-0.5">${w?'Stock: <span class="font-black text-gray-400">•••</span>':`Precio: $${Number(d.precioUsd).toFixed(2)} · Stock: <span class="font-black ${m}">${g}</span>`}</p>
                </div>
                ${d.sinStock?'<p class="text-[11px] text-purple-700 font-bold mt-auto">Sin control de existencias físicas.</p>':`
                <div class="flex items-center gap-1 mt-auto pt-2 border-t border-gray-100">
                    ${d.esCaja&&d.unidadesPorCaja&&d.unidadesPorCaja>1?`
                        <select data-repo-tipo="${d.sku}" class="h-8 border-2 border-brand-black rounded px-1 py-0.5 font-bold text-[10px] shrink-0 bg-white">
                            <option value="unidad">Unidad</option>
                            <option value="caja">Caja (${d.unidadesPorCaja} un.)</option>
                        </select>
                    `:""}
                    <input type="number" step="${f==="kg"||f==="ml"?"0.1":"1"}" min="${f==="kg"||f==="ml"?"0.01":"1"}" max="9999" maxlength="5" placeholder="Cant." data-repo-cant="${d.sku}" class="w-14 h-8 border-2 border-brand-black rounded px-1.5 py-0.5 font-bold text-xs shrink-0" />
                    <button data-repo-in="${d.sku}" title="Sumar stock por reposición de compra" class="h-8 bg-green-200 hover:bg-green-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">+ ENTRADA</button>
                    <button data-repo-red="${d.sku}" title="Reducir stock por ajuste de inventario regular" class="h-8 bg-amber-200 hover:bg-amber-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">- REDUCIR</button>
                    <button data-repo-out="${d.sku}" title="Registrar como merma o daño físico" class="h-8 bg-red-200 hover:bg-red-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">- MERMA</button>
                </div>`}
            </div>`}).join(""),(t=document.getElementById("paginacion-repo"))==null||t.remove(),c>1){const d=document.createElement("div");d.id="paginacion-repo",d.className="col-span-full flex items-center justify-between mt-3 gap-3 flex-wrap",d.innerHTML=`
                <span class="text-xs font-bold text-gray-500">Pagina ${this.paginaRepo} de ${c} · ${o.length} productos</span>
                <div class="flex gap-2">
                    <button id="repo-pag-ant" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaRepo===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANTERIOR</button>
                    <button id="repo-pag-sig" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaRepo===c?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIGUIENTE</button>
                </div>`,e.insertAdjacentElement("afterend",d),(r=document.getElementById("repo-pag-ant"))==null||r.addEventListener("click",()=>{this.paginaRepo>1&&(this.paginaRepo--,this.renderRepoLista())}),(s=document.getElementById("repo-pag-sig"))==null||s.addEventListener("click",()=>{this.paginaRepo<c&&(this.paginaRepo++,this.renderRepoLista())})}e.querySelectorAll("input[data-repo-cant]").forEach(d=>{ie(d,9999,5)}),e.querySelectorAll("[data-repo-del]").forEach(d=>{d.addEventListener("click",async()=>{var g;const l=d.dataset.repoDel,m=this.productos.find(E=>E.sku===l);if(!l||!m)return;if(((g=this.modelo.getConfig())==null?void 0:g.privacidadInventario)&&!this.duenoAutenticado){alert("Acción no permitida en modo operador. Solicite al dueño.");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const E=window.prompt("Acción protegida. Ingrese el PIN de Administrador / Dueño:");if(!E||!await this.modelo.verificarPin(E)){alert("PIN incorrecto o no suministrado. Acción cancelada.");return}}window.confirm(`¿Seguro que deseas eliminar permanentemente el producto "${m.nombre}" del catálogo?`)&&R.eliminarProducto(l).then(()=>{R.productos().then(E=>{this.productos=E,this.renderRepoLista(),this.renderCatalogoLista();const w=document.getElementById("repo-contador-estado");w&&(w.textContent=`${this.productos.length} artículos en depósito`)})})})}),e.querySelectorAll("[data-repo-in]").forEach(d=>{d.addEventListener("click",async()=>{var h;const l=d.dataset.repoIn,m=e.querySelector(`input[data-repo-cant="${l}"]`),f=m==null?void 0:m.value;if(l&&f&&Number(f)>0&&Number(f)<=9999){if(((h=this.modelo.getConfig())==null?void 0:h.privacidadInventario)&&!this.duenoAutenticado){alert("Acción no permitida en modo operador. Solicite al dueño.");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const j=window.prompt("Acción de inventario protegida. Ingrese el PIN de Administrador / Dueño:");if(!j||!await this.modelo.verificarPin(j)){alert("PIN incorrecto o no suministrado. Operación cancelada.");return}}const E=e.querySelector(`select[data-repo-tipo="${l}"]`),w=(E==null?void 0:E.value)||"unidad",P=this.productos.find(j=>j.sku===l);let T=Number(f);w==="caja"&&(P!=null&&P.esCaja)&&(P!=null&&P.unidadesPorCaja)&&P.unidadesPorCaja>1&&(T=T*P.unidadesPorCaja),R.compraStock(l,String(T)).then(()=>{R.productos().then(j=>{this.productos=j,this.renderRepoLista(),this.renderCatalogoLista()})})}})}),e.querySelectorAll("[data-repo-red]").forEach(d=>{d.addEventListener("click",async()=>{var h;const l=d.dataset.repoRed,m=e.querySelector(`input[data-repo-cant="${l}"]`),f=m==null?void 0:m.value;if(l&&f&&Number(f)>0&&Number(f)<=9999){if(((h=this.modelo.getConfig())==null?void 0:h.privacidadInventario)&&!this.duenoAutenticado){alert("Acción no permitida en modo operador. Solicite al dueño.");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const j=window.prompt("Acción de inventario protegida. Ingrese el PIN de Administrador / Dueño:");if(!j||!await this.modelo.verificarPin(j)){alert("PIN incorrecto o no suministrado. Operación cancelada.");return}}const E=e.querySelector(`select[data-repo-tipo="${l}"]`),w=(E==null?void 0:E.value)||"unidad",P=this.productos.find(j=>j.sku===l);let T=Number(f);w==="caja"&&(P!=null&&P.esCaja)&&(P!=null&&P.unidadesPorCaja)&&P.unidadesPorCaja>1&&(T=T*P.unidadesPorCaja),R.reducirStock(l,String(T)).then(()=>{R.productos().then(j=>{this.productos=j,this.renderRepoLista(),this.renderCatalogoLista()})})}})}),e.querySelectorAll("[data-repo-out]").forEach(d=>{d.addEventListener("click",async()=>{var h;const l=d.dataset.repoOut,m=e.querySelector(`input[data-repo-cant="${l}"]`),f=m==null?void 0:m.value;if(l&&f&&Number(f)>0&&Number(f)<=9999){if(((h=this.modelo.getConfig())==null?void 0:h.privacidadInventario)&&!this.duenoAutenticado){alert("Acción no permitida en modo operador. Solicite al dueño.");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const j=window.prompt("Acción de inventario protegida. Ingrese el PIN de Administrador / Dueño:");if(!j||!await this.modelo.verificarPin(j)){alert("PIN incorrecto o no suministrado. Operación cancelada.");return}}const E=e.querySelector(`select[data-repo-tipo="${l}"]`),w=(E==null?void 0:E.value)||"unidad",P=this.productos.find(j=>j.sku===l);let T=Number(f);w==="caja"&&(P!=null&&P.esCaja)&&(P!=null&&P.unidadesPorCaja)&&P.unidadesPorCaja>1&&(T=T*P.unidadesPorCaja),R.merma(l,String(T),null).then(()=>{R.productos().then(j=>{this.productos=j,this.renderRepoLista(),this.renderCatalogoLista()})})}})})}async guardarProducto(){var G;const e=document.getElementById("prod-nombre"),o=document.getElementById("prod-categoria"),a=document.getElementById("prod-impuesto"),n=document.getElementById("prod-precio-bruto"),c=document.getElementById("prod-margen"),i=document.getElementById("prod-precio-neto"),b=document.getElementById("prod-stock"),t=((G=document.getElementById("prod-unidad"))==null?void 0:G.value)||"un",r=document.getElementById("prod-sin-stock"),s=document.getElementById("alta-prod-msg"),d=_=>{if(!_)return 0;const z=_.trim().replace(",","."),B=parseFloat(z);return Number.isFinite(B)&&!isNaN(B)?B:0};if(s&&(s.classList.add("hidden"),s.textContent=""),!(e!=null&&e.value.trim())){s&&(s.textContent="El nombre del producto o servicio es obligatorio.",s.style.color="#C60C15",s.classList.remove("hidden"),e==null||e.focus());return}const l=d(i==null?void 0:i.value);if(l<=0||l>99999.99){s&&(s.textContent="El precio neto final debe ser un monto positivo entre $0.01 y $99,999.99 USD.",s.style.color="#C60C15",s.classList.remove("hidden"),i==null||i.focus());return}const m=d(b==null?void 0:b.value),f=(r==null?void 0:r.checked)||!1;if(!f&&(m<0||m>99999)){s&&(s.textContent="El stock inicial debe estar comprendido entre 0 y 99,999 unidades.",s.style.color="#C60C15",s.classList.remove("hidden"),b==null||b.focus());return}if(!f&&t==="un"&&(!Number.isInteger(m)||m%1!==0)){s&&(s.textContent='Los productos vendidos por Unidad (un.) deben tener un stock entero exacto (ej: 10). Para registrar fracciones o decimales, seleccione Tipo de Medida "Por Peso (kg)" o "Por Volumen (ml)".',s.style.color="#C60C15",s.classList.remove("hidden"),b==null||b.focus());return}const h=d((a==null?void 0:a.value)||"0"),g=d((c==null?void 0:c.value)||"30");let E=d(n==null?void 0:n.value);E<=0&&(E=l/(1+h/100)/(1+g/100));const w=document.getElementById("prod-es-caja"),P=document.getElementById("prod-unidades-caja"),T=(w==null?void 0:w.checked)||!1,j=T&&P?Math.max(2,parseInt(P.value,10)||12):void 0,x=document.getElementById("prod-tiene-paquete"),v=document.getElementById("prod-nombre-paquete"),y=document.getElementById("prod-precio-paquete"),U=(x==null?void 0:x.checked)||!1,D=U&&v?v.value.trim():void 0,C=U&&y?d(y.value).toFixed(2):void 0;try{await R.crearProducto({nombre:e.value.trim(),precioBrutoUsd:E.toFixed(2),margenPct:String(g),precioUsd:l.toFixed(2),impuestoPct:String(h),stockInicial:r!=null&&r.checked?"0":String(m),categoriaId:(o==null?void 0:o.value)||"",sinStock:(r==null?void 0:r.checked)||!1,pesable:t==="kg"||t==="ml",unidad:t,alcoholica:!1,esCaja:T,unidadesPorCaja:j,precioPaqueteUsd:C,nombrePaquete:D}),s&&(s.textContent="Producto o servicio registrado exitosamente.",s.style.color="#00823B",s.classList.remove("hidden")),setTimeout(()=>void this.render("alta"),800)}catch(_){s&&(s.textContent=_ instanceof Error?_.message:String(_),s.style.color="#C60C15",s.classList.remove("hidden"))}}}const be=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},K=u=>be(u).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}),Pe=u=>{const e=u.finUnix||Math.floor(Date.now()/1e3),o=Math.max(0,e-u.inicioUnix),a=Math.floor(o/3600),n=Math.floor(o%3600/60);return`${a}h ${n}m`},at=(u,e)=>{const o=u.operadoresRelevo.length>0?u.operadoresRelevo.join(" / "):u.operadorActual,a=e.filter(d=>d.operador&&u.operadoresRelevo.some(l=>d.operador===l)),n=[["INFORME DE JORNADA",u.id],["Estado",u.estado==="abierta"?"En curso":"Cerrada"],["Apertura",u.inicioStr],["Cierre",u.finStr||"-"],["Duracion",Pe(u)],["Operadores",o],["Total USD",`$${K(u.ventasTotalUsd)}`],["Total Bs",`Bs. ${K(u.ventasTotalBs)}`],["Tickets emitidos",String(u.ticketsEmitidos)],["Vuelto pagado Bs",`Bs. ${K(u.vueltoPagadoBs)}`],["Vuelto retenido Bs",`Bs. ${K(u.vueltoRetenidoBs)}`],["Deudas liquidadas USD",`$${K(u.deudasLiquidadasUsd)}`],["Entradas stock",String(u.entradasStockReg)],["Mermas",String(u.mermasStockReg)],["Cambios de precio",String(u.cambiosPrecioReg)],["Tasa apertura",`Bs. ${u.tasaInicio}`],["Tasa cierre",u.tasaFin?`Bs. ${u.tasaFin}`:"-"],...u.checksumSha256?[["SHA-256",u.checksumSha256]]:[],[],["TICKETS DE LA JORNADA"],["ID Ticket","Fecha/Hora","Canal","Operador","Metodo(s) de Pago","Total USD","Total Bs"]],c=a.map(d=>{const l=d.pagos&&d.pagos.length>0?d.pagos.map(m=>`${m.metodo}:$${K(m.montoUsd)}`).join(" | "):"DIRECTO";return[d.ventaId,d.fechaHora||"",d.canal||"VENTA DIRECTA",d.operador||"Caja",l,`$${K(d.totalUsd)}`,`Bs. ${K(d.totalBs)}`]}),b=[...n,...c].map(d=>d.map(l=>`"${String(l).replace(/"/g,'""')}"`).join(",")).join(`\r
`),t=new Blob(["\uFEFF"+b],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(t),s=document.createElement("a");s.href=r,s.download=`jornada_${u.id}.csv`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(r)};class ot{constructor(e,o,a){A(this,"contenedor");A(this,"modalRoot");A(this,"modelo");A(this,"jornadas",[]);A(this,"jornadaActual",null);A(this,"todosLosTickets",[]);A(this,"busqueda","");A(this,"expandidos",new Set);A(this,"paginaActual",1);A(this,"POR_PAGINA",20);this.contenedor=e,this.modalRoot=o,this.modelo=a}parseFechaUnix(e){if(!e)return 0;const o=e.match(/(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})/);if(o&&o[1]&&o[2]&&o[3]&&o[4]&&o[5]&&o[6]){const a=Date.UTC(parseInt(o[1],10),parseInt(o[2],10)-1,parseInt(o[3],10),parseInt(o[4],10),parseInt(o[5],10),parseInt(o[6],10));if(!isNaN(a))return Math.floor(a/1e3)}return 0}async render(){const[e,o,a]=await Promise.all([R.obtenerJornadaActual(),R.listarHistoricoJornadas(),R.ventas()]);this.jornadaActual=e,this.jornadas=o,this.todosLosTickets=a;const n=(e?1:0)+o.length,c=[...e?[e]:[],...o],i=c.reduce((t,r)=>t+be(r.ventasTotalUsd),0),b=c.reduce((t,r)=>t+r.ticketsEmitidos,0);this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Historial de Jornadas</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Registro de turnos operativos, balance consolidado y exportacion por jornada</p>
            </div>
            <span class="text-xs font-bold text-gray-700 bg-white border-2 border-brand-black px-3 py-1.5 rounded shadow-brutal-sm">
                ${n} Jornada${n!==1?"s":""}
            </span>
        </div>

        <!-- KPIs -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-3 bg-amber-50">
                <p class="font-heading font-bold text-[10px] uppercase tracking-wide text-brand-text">Facturado Total</p>
                <div class="font-heading font-black text-lg mt-0.5 text-brand-black">$ ${K(i)}</div>
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
                <div class="font-heading font-black text-lg mt-0.5 text-brand-purple">Bs. ${K(this.modelo.tasaActual||807.39)}</div>
            </div>
            <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-3 bg-blue-50">
                <p class="font-heading font-bold text-[10px] uppercase tracking-wide text-brand-text">Tickets Totales</p>
                <div class="font-heading font-black text-lg mt-0.5 text-blue-900">${b}</div>
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
        <div id="lista-jornadas" class="flex flex-col gap-2"></div>`,this.conectarEventosBuscador(),this.renderLista()}conectarEventosBuscador(){var e;(e=document.getElementById("jornadas-buscar"))==null||e.addEventListener("input",o=>{this.busqueda=o.target.value,this.paginaActual=1,this.renderLista()})}renderLista(){var s,d;const e=document.getElementById("lista-jornadas");if(!e)return;const o=[...this.jornadaActual?[this.jornadaActual]:[],...this.jornadas],a=this.busqueda.trim().toLowerCase(),n=a?o.filter(l=>l.id.toLowerCase().includes(a)||l.operadorActual.toLowerCase().includes(a)||l.operadoresRelevo.some(m=>m.toLowerCase().includes(a))||l.inicioStr.toLowerCase().includes(a)||(l.finStr||"").toLowerCase().includes(a)):o,c=document.getElementById("paginacion-jornadas");if(c&&c.remove(),n.length===0){e.innerHTML=`
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 text-center text-gray-400 font-bold text-sm">
                ${a?"Sin jornadas que coincidan con la busqueda.":"No hay jornadas registradas en el sistema."}
            </div>`;return}const i=Math.max(1,Math.ceil(n.length/this.POR_PAGINA));this.paginaActual>i&&(this.paginaActual=i),this.paginaActual<1&&(this.paginaActual=1);const b=this.paginaActual,t=n.slice((b-1)*this.POR_PAGINA,b*this.POR_PAGINA);e.innerHTML=t.map(l=>this.renderFila(l)).join(""),t.forEach(l=>{if(this.expandidos.has(l.id)){const m=document.getElementById(`detalle-${l.id}`);m==null||m.classList.remove("hidden");const f=document.getElementById(`icon-${l.id}`);f&&(f.textContent="▲")}}),e.querySelectorAll("[data-toggle-jornada]").forEach(l=>{l.addEventListener("click",()=>{const m=l.dataset.toggleJornada,f=document.getElementById(`detalle-${m}`),h=document.getElementById(`icon-${m}`);if(f){const g=f.classList.contains("hidden");f.classList.toggle("hidden",!g),h&&(h.textContent=g?"▲":"▼"),g?this.expandidos.add(m):this.expandidos.delete(m)}})}),e.querySelectorAll("[data-exportar-jornada]").forEach(l=>{l.addEventListener("click",m=>{m.stopPropagation();const f=l.dataset.exportarJornada,h=n.find(g=>g.id===f);h&&at(h,this.todosLosTickets)})}),e.querySelectorAll("[data-ver-ticket]").forEach(l=>{l.addEventListener("click",()=>{const m=l.dataset.verTicket,f=this.todosLosTickets.find(h=>h.ventaId===m);f&&this.mostrarModalTicket(f)})});const r=document.createElement("div");r.id="paginacion-jornadas",r.innerHTML=`
            <div class="flex items-center justify-between mt-3 gap-3 flex-wrap">
                <span class="text-xs font-bold text-gray-600">
                    Pagina ${b} de ${i} &middot; ${n.length} jornada${n.length!==1?"s":""}
                </span>
                <div class="flex gap-2">
                    <button id="btn-pag-ant"
                        class="border-2 border-brand-black font-heading font-black text-xs px-3 py-1.5 rounded shadow-brutal-sm bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                        ${b===1?"disabled":""}>
                        ANTERIOR
                    </button>
                    <button id="btn-pag-sig"
                        class="border-2 border-brand-black font-heading font-black text-xs px-3 py-1.5 rounded shadow-brutal-sm bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                        ${b===i?"disabled":""}>
                        SIGUIENTE
                    </button>
                </div>
            </div>`,e.insertAdjacentElement("afterend",r),(s=document.getElementById("btn-pag-ant"))==null||s.addEventListener("click",()=>{this.paginaActual>1&&(this.paginaActual--,this.renderLista())}),(d=document.getElementById("btn-pag-sig"))==null||d.addEventListener("click",()=>{this.paginaActual<i&&(this.paginaActual++,this.renderLista())})}renderFila(e){const o=e.estado==="abierta",a=e.operadoresRelevo.length>0?e.operadoresRelevo.join(", "):e.operadorActual,n=this.todosLosTickets.filter(t=>{const r=t.fechaUnix&&t.fechaUnix>0?t.fechaUnix:this.parseFechaUnix(t.fechaHora);return!(r<=0||r<e.inicioUnix||e.finUnix&&r>e.finUnix)}),c={};n.forEach(t=>{(t.pagos||[]).forEach(r=>{c[r.metodo]||(c[r.metodo]={usd:0,bs:0}),c[r.metodo].usd+=be(r.montoUsd),c[r.metodo].bs+=be(r.montoBs)})});const i=Object.entries(c).map(([t,r])=>`
            <div class="flex justify-between items-center text-xs border-b border-gray-100 last:border-none py-1">
                <span class="font-heading font-black text-brand-black">${t}</span>
                <div>
                    <span class="font-black">$ ${K(r.usd)}</span>
                    <span class="text-brand-purple font-mono font-bold ml-2">Bs. ${K(r.bs)}</span>
                </div>
            </div>`).join(""),b=n.length>0?n.map(t=>{const s=t.canal==="CONSUMO EN CUENTA"||t.ventaId.startsWith("CTA-")?'<span class="bg-amber-100 text-amber-900 border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">CUENTA</span>':'<span class="bg-blue-100 text-blue-900 border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">VENTA</span>';let d="";return t.pagos&&t.pagos.length>1?d='<span class="bg-amber-50 text-amber-950 border border-amber-500 px-1.5 py-0.5 rounded font-black text-[9px]">MIXTO</span>':t.pagos&&t.pagos.length===1?d=`<span class="bg-gray-100 text-brand-black border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">${t.pagos[0].metodo}</span>`:d='<span class="bg-gray-100 text-gray-500 border border-gray-300 px-1.5 py-0.5 rounded font-mono text-[9px]">DIRECTO</span>',`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="py-1.5 px-2 font-mono text-brand-purple text-[10px]">${t.ventaId}</td>
                    <td class="py-1.5 px-2 text-gray-500 text-[10px]">${t.fechaHora||"-"}</td>
                    <td class="py-1.5 px-2">${s}</td>
                    <td class="py-1.5 px-2">${d}</td>
                    <td class="py-1.5 px-2 text-gray-700 text-[10px]">${t.operador||"Caja"}</td>
                    <td class="py-1.5 px-2 text-right font-black text-brand-black text-[10px]">$ ${K(t.totalUsd)}</td>
                    <td class="py-1.5 px-2 text-right font-black text-brand-purple text-[10px]">Bs. ${K(t.totalBs)}</td>
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
                    <span class="font-heading font-black text-sm text-brand-black">$ ${K(e.ventasTotalUsd)}</span>
                    <span class="font-heading font-black text-sm text-brand-purple hidden sm:block">Bs. ${K(e.ventasTotalBs)}</span>
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
                        <p class="font-bold text-xs text-brand-black mt-0.5">${Pe(e)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Vuelto pagado</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">Bs. ${K(e.vueltoPagadoBs)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Vuelto retenido</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">Bs. ${K(e.vueltoRetenidoBs)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Deudas liquid.</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">$ ${K(e.deudasLiquidadasUsd)}</p>
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
                                ${b}
                            </tbody>
                        </table>
                    </div>
                    ${e.checksumSha256?`<p class="text-[9px] font-mono text-gray-400 mt-1.5 break-all">SHA-256: ${e.checksumSha256}</p>`:""}
                </div>
            </div>
        </div>`}mostrarModalTicket(e){var c,i;const o=e.tasaDelDia?`Bs. ${K(e.tasaDelDia)}`:`Bs. ${K(this.modelo.tasaActual||807.39)}`,a=e.lineas&&e.lineas.length>0?e.lineas.map(b=>`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-2 pr-2">
                        <div class="font-bold text-gray-900">${b.nombre}</div>
                        <div class="text-[10px] text-gray-400 font-mono">${b.sku}</div>
                    </td>
                    <td class="py-2 text-center font-bold">${b.cantidad}</td>
                    <td class="py-2 text-right font-mono">$ ${K(b.precioUsd)}</td>
                    <td class="py-2 text-right font-bold text-brand-black">$ ${K(b.subtotalUsd)}</td>
                    <td class="py-2 text-right font-black text-brand-purple">Bs. ${K(b.subtotalBs)}</td>
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
                            <span class="font-bold text-gray-900">Bs. ${K(e.montoRecibidoBs||e.totalBs)}</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-gray-500 font-bold uppercase block">Vuelto (${e.estadoVuelto==="RETENIDO"?"Retenido":"Entregado"})</span>
                            <span class="font-bold ${e.estadoVuelto==="RETENIDO"?"text-blue-700":"text-green-700"}">Bs. ${K(e.vueltoBs||"0.00")}</span>
                        </div>
                    </div>

                    ${be(e.vueltoBs)>.009?`
                    <div class="mb-3 ${e.estadoVuelto==="RETENIDO"?"bg-blue-50 border-blue-500 text-blue-950":"bg-emerald-50 border-emerald-500 text-emerald-950"} border-2 rounded p-2.5 text-xs font-bold flex flex-wrap items-center justify-between gap-2">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-wider block">
                                ${e.estadoVuelto==="RETENIDO"?"Vuelto Retenido (Saldo a Favor)":"Vuelto Pagado al Cliente"}
                            </span>
                            <span>
                                ${e.estadoVuelto==="RETENIDO"?"Asentado como saldo a favor retenido.":`Entregado via ${e.metodoVuelto||"Efectivo"}${e.montoVueltoUsd&&Number(e.montoVueltoUsd)>0&&e.tasaVuelto?` ($ ${K(e.montoVueltoUsd)} a Bs. ${K(e.tasaVuelto)})`:""}.`}
                            </span>
                        </div>
                        <span class="font-heading font-black text-lg shrink-0">Bs. ${K(e.vueltoBs)}</span>
                    </div>`:""}

                    <div class="mb-3 border border-brand-black rounded p-2.5 bg-gray-50">
                        <span class="text-[10px] uppercase font-heading font-black text-gray-700 block mb-1">
                            Metodos de Pago (${e.pagos?e.pagos.length:1})
                        </span>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            ${e.pagos&&e.pagos.length>0?e.pagos.map(b=>`
                                    <div class="bg-white border border-brand-black rounded p-2 text-xs flex justify-between items-center">
                                        <div>
                                            <span class="font-heading font-black text-brand-black">${b.metodo}</span>
                                            ${b.tasaCambio?`<p class="text-[10px] font-mono font-bold text-brand-purple">Tasa: Bs. ${K(b.tasaCambio)}</p>`:""}
                                            ${b.referencia?`<p class="text-[10px] font-mono text-gray-500">Ref: ${b.referencia}</p>`:""}
                                        </div>
                                        <div class="text-right">
                                            <span class="font-black text-brand-black block">$ ${K(b.montoUsd)}</span>
                                            <span class="text-[10px] font-mono font-bold text-brand-purple block">Bs. ${K(b.montoBs)}</span>
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
                        <span class="font-heading font-black text-lg text-emerald-700 ml-4 shrink-0">+$${K(e.saldoAFavorConsolidadoUsd)} USD</span>
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
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${K(e.totalUsd)}</span>
                                <span class="font-heading font-black text-xl text-brand-purple font-mono">Bs. ${K(e.totalBs)}</span>
                            </div>
                        </div>
                        <button id="modal-ticket-ok" class="bg-brand-black text-white font-heading font-black px-6 py-2.5 rounded border border-brand-black shadow-brutal-sm hover:bg-gray-800">
                            CERRAR
                        </button>
                    </div>
                </div>
            </div>
        </div>`;const n=()=>{this.modalRoot.innerHTML=""};(c=document.getElementById("modal-ticket-cerrar"))==null||c.addEventListener("click",n),(i=document.getElementById("modal-ticket-ok"))==null||i.addEventListener("click",n)}}class nt{constructor(e){A(this,"contenedor");this.contenedor=e}render(){this.contenedor.innerHTML=`
        <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Playbook Operativo ABC</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Manual de procedimientos comerciales, directrices de uso y lectura analitica de DatioLabs</p>
            </div>
            <span class="bg-brand-black text-white px-3 py-1.5 rounded font-black font-heading text-xs uppercase tracking-wider">
                DOCUMENTACION OFICIAL
            </span>
        </div>

        <!-- Tarjetas Resumen de los 6 Modulos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
            <div class="border-2 border-brand-black rounded-lg bg-amber-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-amber-900 uppercase">MODULO 01</span>
                <h4 class="font-heading font-black text-base mt-0.5">CAJA</h4>
                <p class="text-xs text-gray-700 mt-1">Precio dual USD/Bs., semaforo de stock, pesable, paquetes, multi-operador, control de edad y cobro mixto con vuelto.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-yellow-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-yellow-900 uppercase">MODULO 02</span>
                <h4 class="font-heading font-black text-base mt-0.5">CUENTAS</h4>
                <p class="text-xs text-gray-700 mt-1">Cuentas activas (mesa/comanda) y deudas comerciales a credito, abonos con tasa dinamica y saldo a favor.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-blue-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-blue-900 uppercase">MODULO 03</span>
                <h4 class="font-heading font-black text-base mt-0.5">VENTAS</h4>
                <p class="text-xs text-gray-700 mt-1">Historial de jornadas con KPIs, desglose por metodo de pago, badges de canal y exportacion CSV.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-emerald-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-emerald-900 uppercase">MODULO 04</span>
                <h4 class="font-heading font-black text-base mt-0.5">INVENTARIO</h4>
                <p class="text-xs text-gray-700 mt-1">Catalogo por categorias, calculadora de margen, empaque/caja, paquete, PIN protegido y modo privacidad.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-slate-100 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-gray-800 uppercase">MODULO 05</span>
                <h4 class="font-heading font-black text-base mt-0.5">PANEL</h4>
                <p class="text-xs text-gray-700 mt-1">Diagnostico financiero por fechas, grafico SVG, semaforo de stock, respaldos criptograficos y PIN.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-purple-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-purple-900 uppercase">MODULO 06</span>
                <h4 class="font-heading font-black text-base mt-0.5">ACCESO REMOTO</h4>
                <p class="text-xs text-gray-700 mt-1">Conexion P2P por QR, bootstrap para movil, WebRTC DataChannel y sincronizacion en tiempo real.</p>
            </div>
        </div>

        <div class="space-y-6">

            <!-- ============ MODULO 1: CAJA ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">1</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Modulo CAJA: Precio Dual, Semaforo, Pesable y Cobro Multimethod</h3>
                        <p class="text-xs text-gray-500 font-bold">Facturacion directa con precios en USD y Bs., control de stock visual y vuelto exacto</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Precio Dual USD / Bs.</strong>
                        Cada producto muestra simultaneamente su precio en dolares (pequeno) y en bolivares con tasa BCV (grande, morado). El ticket tambien muestra ambos montos.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-red-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Semaforo de Stock</strong>
                        Indicador visual de salud del inventario: ROJO (stock critico), AMARILLO (stock bajo), VERDE (suficiente). Los umbrales son configurables desde el Panel del Dueno.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Soporte Pesable (kg / ml)</strong>
                        Productos vendidos por peso o volumen muestran input decimal en vez de botones +/-. Paso automatico de 0.05 para kg, 0.01 para ml.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Paquete y Caja Despiece</strong>
                        Productos con precio por paquete muestran boton morado adicional. El stock se despieza visualmente en cajas y unidades sueltas (ej: "3 cajas + 5 un.").
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Multi-Operador Simultaneo</strong>
                        Multiples cajeros pueden trabajar en el mismo turno. El boton morado en el ticket muestra el operador activo y permite relevar o asignar cajeros sin cerrar turno.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-orange-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Control de Edad</strong>
                        Para productos restringidos (licoreria), el sistema solicita confirmacion de mayoria de edad antes de agregar al ticket.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Cobro Multimethod con Vuelto</strong>
                        Soporta multiples metodos de pago por venta (pago mixto). Cada metodo USD tiene tasa editable. El vuelto puede marcarse como PAGADO (entregado) o RETENIDO (saldo a favor).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Borrador Persistente</strong>
                        Si se cierra el modal de cobro sin confirmar, los pagos y resolucion de vuelto se guardan como borrador y se restauran al reabrir.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Creacion de Metodos de Pago</strong>
                        Desde el modal de cobro se pueden crear nuevos metodos de pago (nombre + moneda USD o Bs.) y eliminar los existentes, sin salir de la pantalla de caja.
                    </div>
                </div>
            </div>

            <!-- ============ MODULO 2: CUENTAS ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">2</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Modulo CUENTAS: Activas en Local y Deudas Comerciales</h3>
                        <p class="text-xs text-gray-500 font-bold">Comandas para mesas y credito a clientes con abonos a tasa libre y saldo a favor</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Dos Modalidades: Local vs. Deuda</strong>
                        Cuentas Activas (mesas o barras, liquidadas a tasa del dia) y Deudas Abiertas (credito a clientes de confianza que permanecen abiertas por dias descontando stock al instante).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Abonos con Tasa Dinamica</strong>
                        Cada abono puede usar una tasa de cambio diferente (ej: USDT pactado a tasa superior a BCV). El sistema calcula automaticamente el aporte en Bs. y el saldo computable en USD.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Saldo a Favor y Edicion</strong>
                        Si el abono supera lo consumido, el saldo a favor se detecta automaticamente con badge verde. Los abonos pueden editarse (corregir monto en USD o Bs.) con preset "Poner en $0" o "Cubrir Todo".
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Liquidacion a Tasa Libre</strong>
                        Las deudas no se atan al BCV historico: al cobrar, el dueno fija libremente la tasa o carga la oficial con un clic. El cobro final acepta pago mixto con vuelto.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-red-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Stock en Tiempo Real</strong>
                        Agregar consumos descuenta existencias inmediatamente. Eliminar un consumo reintegra el stock automaticamente.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Filtros, Paginacion y Borrador</strong>
                        Selector de pestanas (TODAS / ACTIVAS / DEUDAS), busqueda, paginacion a 15 por pagina y borrador de pagos persistente por cuenta.
                    </div>
                </div>
            </div>

            <!-- ============ MODULO 3: VENTAS ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">3</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Modulo VENTAS: Historial de Jornadas con KPIs</h3>
                        <p class="text-xs text-gray-500 font-bold">Balance por turno, desglose por metodo de pago, badges de canal y exportacion CSV</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">KPIs en Cabecera</strong>
                        4 tarjetas: Facturado Total (USD), Estado Actual (Abierta/Sin turno con pulse verde), Tasa BCV del dia (morado), Tickets Totales (azul).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Buscador y Paginacion</strong>
                        Filtra por ID de jornada, nombre de operador o fecha. Paginacion a 20 registros por pagina. El estado de expansion se preserva al filtrar.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Detalle Expandible por Jornada</strong>
                        Al expandir: duracion, vueltos pagados y retenidos, deudas liquidadas, entradas de stock, mermas, tasa de apertura y cierre, SHA-256 de verificacion.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Desglose por Metodo de Pago</strong>
                        Dentro de cada jornada: tabla con nombre del metodo, total en USD y total en Bs. para cada metodo utilizado.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-orange-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Badges de Canal Comercial</strong>
                        Cada ticket muestra badge de color: VENTA DIRECTA (verde), CUENTA/DEUDA (azul), MIXTO (morado). Permite distinguir origen de cada transaccion.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Exportacion CSV y Ticket PDF</strong>
                        Cada jornada tiene boton CSV con encabezado completo (operadores, totales, vueltos, SHA-256) y tabla de tickets. Modal de detalle de ticket con comprobante completo.
                    </div>
                </div>
            </div>

            <!-- ============ MODULO 4: INVENTARIO ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">4</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Modulo INVENTARIO: Catalogo, Margenes, Empaque y Movimientos</h3>
                        <p class="text-xs text-gray-500 font-bold">Alta de productos con calculadora de margen, sistema de empaque/paquete, PIN protegido</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Calculadora de Margen Bidireccional</strong>
                        Ingrese precio bruto (costo) y margen % para calcular precio neto, O ingrese precio neto para calcular margen inverso. Soporta tasa de impuesto configurable.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Empaque / Caja con Unidades</strong>
                        Configuracion de productos en empaque: unidades por caja, stock en cajas (se convierte automaticamente a unidades base). Stock se despieza en "X cajas + Y un.".
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Precio por Paquete</strong>
                        Productos pueden tener precio adicional por paquete/boveda/cambio. Nombre del empaque configurable. Se muestra boton morado en Caja y Cuentas.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Unidades de Medida</strong>
                        Soporte para Unidad/Pieza (un.), Peso (Kilogramos - kg) y Volumen (Mililitros - ml) con pasos de input diferentes.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-red-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">PIN Protegido y Modo Privacidad</strong>
                        Operadores requieren PIN para eliminar productos, entradas, reducciones y mermas. El dueno puede ocultar precios y stock a los operadores desde la configuracion.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Movimientos de Stock</strong>
                        + ENTRADA (reposicion), - REDUCIR (ajuste fisico) y - MERMA (deterioro). Cada movimiento se registra en la auditoria. Boton de eliminacion por producto con confirmacion.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Gestion de Categorias e Impuestos</strong>
                        Pestana dedicada para CRUD de categorias (con conteo de productos) y tasas de impuestos (0% y 16% predefinidas,加上 personalizadas).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Catalogo Lateral Paginado</strong>
                        Columna derecha con filtro por categoria, busqueda y lista paginada (40 por pagina) con nombre, categoria, precio, IVA% y badge de stock.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Venta Sin Stock</strong>
                        Checkbox "Venta Sin Stock" para servicios o detal libre: productos que no descuentan inventario al vender.
                    </div>
                </div>
            </div>

            <!-- ============ MODULO 5: PANEL DEL DUENO ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">5</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Modulo PANEL: Diagnostico Financiero y Configuracion</h3>
                        <p class="text-xs text-gray-500 font-bold">KPIs por rango de fechas, grafico SVG, semaforo, respaldos y administracion completa</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">KPIs y Rango de Fechas</strong>
                        4 indicadores: Ventas Totales (USD+Bs.), Ganancia Bruta (con % margen), Ganancia Neta (Bs.) e Inventario Total. Selector de rango (24H, 7D, 30D, 1A, TODO) y rango personalizado con fechas exactas.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Grafico SVG de Rendimiento</strong>
                        Grafico de pie puro SVG (sin librerias externas). Criterio toggleable: POR VOLUMEN o POR INGRESOS. Colores dinamicos, tooltips, leyenda con tabla de productos.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Capital por Categoria</strong>
                        Tabla desglosada: categoria, n productos, stock fisico, dinero en bruto (USD y Bs.), valor PVP, margen proyectado, % capital con barra de progreso y total consolidado.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-red-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Semaforo de Salud del Stock</strong>
                        Configuracion de umbrales de stock: ROJO (critico) y AMARILLO (bajo). Validacion de coherencia. Boton de restablecer a valores predeterminados.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Historial de Transacciones</strong>
                        Tabla cronologica con ID, fecha, canal (badge: Cuenta Abierta / Caja Directa), operador, tasa BCV, total USD y Bs. Paginacion a 20 por pagina.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-100">
                        <strong class="text-brand-black block font-heading font-black mb-1">Respaldos Criptograficos</strong>
                        Copias de seguridad con SHA-256 verificable. Lista de respaldos con nombre de archivo, hash truncado, fecha, registros y tamano. Boton de crear respaldo con verificacion inmediata.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-slate-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Jornada y Multi-Operador</strong>
                        Apertura y cierre de jornada desde el Panel con confirmacion. Gestion completa de operadores: alta, edicion de nombre, baja. Asignacion de operadores al turno activo.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-slate-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Metodos de Pago</strong>
                        CRUD de metodos de pago: nombre y moneda (USD o Bs.). Chips con badge de moneda. Eliminacion con garantia de al menos un metodo activo.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-slate-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Seguridad y PIN</strong>
                        Cambio o eliminacion de clave del Panel. Campo "vacio = sin clave". Indicador de estado "Protegido" con descripcion de seguridad.
                    </div>
                </div>
            </div>

            <!-- ============ MODULO 6: ACCESO REMOTO / P2P ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">6</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Acceso Remoto: P2P, QR y Bootstrap Movil</h3>
                        <p class="text-xs text-gray-500 font-bold">Conexion directa desktop-movil via WebRTC DataChannel sin servidores centrales de datos</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Generacion de QR</strong>
                        El dueno genera un QR desde el Panel que contiene la IP del desktop, el puerto (4000) y un room ID unico. El QR apunta a /bootstrap.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Bootstrap para Movil</strong>
                        Pagina minimalista (3KB) que se carga en el navegador del movil: conecta al servidor de senalizacion, establece DataChannel y descarga la SPA completa por P2P.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">WebRTC DataChannel</strong>
                        Canales de datos ordenados para comandos API. El desktop proxea las llamadas HTTP del movil con la sesion autenticada del dueno.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Reconexion Automatica</strong>
                        Backoff exponencial (1s a 30s), ICE restart automatico, keepalive ping/pong cada 20s y reconstruccion completa del PeerConnection.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-red-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Servidor de Senalizacion</strong>
                        Cloudflare Worker con Durable Objects (SQLite-backed) para emparejamiento de peers. Elimina volatilidad de globalThis._wsMap.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Fallback HTTP y Demo</strong>
                        Invocar() tiene 4 niveles: Tauri, DataChannel, HTTP (Axum local) y Mock (demo Cloudflare Pages). El sistema degrada graceful sin conexion.
                    </div>
                </div>
            </div>

            <!-- ============ PROCEDIMIENTOS OPERATIVOS ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <div class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">O</div>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Procedimientos Operativos: Jornadas, Cobro y Stock</h3>
                        <p class="text-xs text-gray-500 font-bold">Instrucciones para apertura de turno, gestion de cajeros, cobro multimethod y control de inventario</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Apertura Directa sin Clave</strong>
                        Si no hay turno activo, el boton de operador en Caja muestra "SIN TURNO ACTIVO". El operador selecciona los cajeros del dia y abre el turno sin requerir clave de dueno.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Relevo y Asignacion en Vivo</strong>
                        Desde Caja o Panel se pueden agregar, editar y relevar cajeros simultaneos. Los cambios se propagan inmediatamente al turno activo sin interrumpir ventas.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Cierre desde Panel</strong>
                        Solo el dueno puede cerrar la jornada desde el Panel. El cierre consolida totales, genera SHA-256 de verificacion y bloquea ediciones posteriores.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Paginacion y Rendimiento</strong>
                        Todos los modulos historicos (Jornadas, Transacciones, Catalogo, Reposicion, Cuentas) operan bajo paginacion estricta con sanitizacion en tiempo real.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Cobro Multimethod y Vuelto</strong>
                        El sistema prioriza bolivares arriba y divisas abajo. Vuelto se resuelve como PAGADO (entregado) o RETENIDO (saldo a favor del cliente).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Notificaciones Toast</strong>
                        Alertas no intrusivas en la esquina inferior derecha: verde (exito), rojo (error), negro (info). Se auto-cierran a los 8 segundos.
                    </div>
                </div>
            </div>
        </div>`}}const rt=4e3,st=3e5;class dt{constructor(){A(this,"modelo",new Je);A(this,"cajaVm",null);A(this,"panelVm",new Xe);A(this,"widget",new ze);A(this,"root");A(this,"modalRoot");A(this,"peerConnection",null);A(this,"dataChannel",null);A(this,"wsSignaling",null);A(this,"offerResendTimer",null);A(this,"p2pPin","");A(this,"signalingRetries",0);A(this,"p2pConnected",!1);A(this,"roomId","");A(this,"reconectando",!1);A(this,"STUN_SERVERS",{iceServers:[{urls:"stun:stun.cloudflare.com:3478"},{urls:"stun:stun.l.google.com:19302"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:443",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:443?transport=tcp",username:"openrelayproject",credential:"openrelayproject"}]});A(this,"keepaliveTimer",null);A(this,"keepalivePending",!1)}async arrancar(){var c;const e=document.getElementById("app-root");if(!e)return;this.root=e,this.modalRoot=this.crearModalRoot(),this.widget.iniciar();const a=new URLSearchParams(window.location.search).get("room");if(a&&!window.__DATACHANNEL__){await this.arrancarMovil(e,a);return}window.addEventListener("tasa_actualizada",i=>{const b=i;b.detail&&this.modelo.setTasa(b.detail)}),await this.refrescarTasa();let n=null;try{n=await this.modelo.cargarConfig()}catch{n=await this.modelo.cargarConfig()}if(window.setInterval(()=>void this.refrescarTasa(),st),!n){new We(this.root,this.modelo,()=>void this.arrancar()).render();return}this.pintarBotonesRol(n),(c=document.getElementById("btn-conectar-movil"))==null||c.addEventListener("click",()=>this.abrirModalQrMovil()),this.ejecutarBackupAutomatico(),await this.arrancarCaja()}async arrancarMovil(e,o){e.innerHTML=`
        <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
            <div class="text-center">
                <div class="w-12 h-12 border-4 border-brand-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h2 class="font-heading font-black text-xl">CONECTANDO...</h2>
                <p class="text-sm text-gray-500 mt-2">Estableciendo conexion P2P con el equipo principal</p>
                <p id="movil-status" class="text-xs text-gray-400 mt-1">Conectando al servidor de senalizacion...</p>
            </div>
        </div>`;const a=new URLSearchParams(window.location.search).get("pin")||"",c=`${window.__SIGNALING_URL__||"wss://datiolabs-signaling.apex-importvcb.workers.dev"}/ws/signaling?room=${o}&pin=${encodeURIComponent(a||"default")}`;try{const i=new WebSocket(c);i.onopen=()=>{const b=document.getElementById("movil-status");b&&(b.textContent="Senalizacion conectada. Esperando offer P2P...")},i.onmessage=async b=>{const t=JSON.parse(b.data);if(t.type==="offer"){const r=document.getElementById("movil-status");r&&(r.textContent="Offer recibido. Estableciendo conexion...");const s=new RTCPeerConnection(this.STUN_SERVERS);s.onicecandidate=l=>{l.candidate&&i.readyState===WebSocket.OPEN&&i.send(JSON.stringify({type:"ice-candidate",candidate:l.candidate}))},s.ondatachannel=l=>{const m=l.channel;m.onopen=()=>{window.__DATACHANNEL__=m,window.__DATACHANNEL_WS__=i;const f=document.getElementById("movil-status");f&&(f.textContent="Conexion P2P lista!");try{this.root.innerHTML=`
                                <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
                                    <div class="text-center">
                                        <div class="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                        <h2 class="font-heading font-black text-xl text-green-700">CONECTADO</h2>
                                        <p class="text-sm text-gray-500 mt-2">Cargando datos del negocio...</p>
                                    </div>
                                </div>`,this.cargarConfigMovil()}catch{}},m.onclose=()=>{delete window.__DATACHANNEL__,this.root.innerHTML=`
                            <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
                                <div class="text-center">
                                    <div class="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                                    <h2 class="font-heading font-black text-xl text-red-700">DESCONECTADO</h2>
                                    <p class="text-sm text-gray-500 mt-2">La conexion P2P se ha perdido. Recargue la pagina.</p>
                                    <button onclick="location.reload()" class="mt-4 bg-brand-black text-white px-4 py-2 rounded font-heading font-black text-sm">RECONECTAR</button>
                                </div>
                            </div>`},m.onmessage=f=>{try{const h=JSON.parse(f.data);if(h.type==="ping"){try{m.send(JSON.stringify({type:"pong",ts:h.ts}))}catch{}return}const g=window.__P2P_PENDING__;if(g&&h.id&&g.has(h.id)){const E=g.get(h.id);g.delete(h.id),h.error?E.reject(new Error(h.error)):E.resolve(h.body)}}catch{}}},await s.setRemoteDescription(new RTCSessionDescription(t.sdp));const d=await s.createAnswer();await s.setLocalDescription(d),i.readyState===WebSocket.OPEN&&i.send(JSON.stringify({type:"answer",sdp:s.localDescription}))}else t.type==="error"&&(this.root.innerHTML=`
                    <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
                        <div class="text-center">
                            <h2 class="font-heading font-black text-xl text-red-700">ERROR</h2>
                            <p class="text-sm text-gray-500 mt-2">${t.message||"Error de conexion"}</p>
                        </div>
                    </div>`)},i.onerror=()=>{const b=document.getElementById("movil-status");b&&(b.textContent="Error de conexion con el servidor de senalizacion")},i.onclose=()=>{if(!window.__DATACHANNEL__){const b=document.getElementById("movil-status");b&&(b.textContent="Conexion perdida. Reconectando..."),setTimeout(()=>this.arrancarMovil(e,o),3e3)}}}catch{e.innerHTML=`
            <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
                <div class="text-center">
                    <h2 class="font-heading font-black text-xl text-red-700">ERROR</h2>
                    <p class="text-sm text-gray-500 mt-2">No se pudo conectar al servidor de senalizacion</p>
                </div>
            </div>`}}async cargarConfigMovil(){var e;try{await this.modelo.cargarConfig()}catch{}this.pintarBotonesRol(this.modelo.getConfig()),(e=document.getElementById("btn-conectar-movil"))==null||e.remove(),await this.arrancarCaja()}crearModalRoot(){let e=document.getElementById("modal-root");return e||(e=document.createElement("div"),e.id="modal-root",document.body.appendChild(e)),e}async refrescarTasa(){try{const e=await R.tasa();e&&this.modelo.setTasa(Number(e.valor))}catch{}}async ejecutarBackupAutomatico(){try{const e=await R.getBackupDir();if(e){const o=await R.autoBackup(e,5);o&&console.log(`[Backup] Auto-backup generado: ${o.totalRegistros} registros`)}}catch(e){console.warn("[Backup] Auto-backup falló:",e)}}pintarBotonesRol(e){const o=[document.getElementById("nav-actions-desktop"),document.getElementById("nav-actions-mobile")].filter(Boolean);o.length===0||document.querySelector('[data-nav-btn="caja"]')||o.forEach(a=>{a.innerHTML="";const n=(l,m,f)=>{const h=document.createElement("button");return h.id=`${l}-${a.id.includes("mobile")?"mob":"dsk"}`,h.dataset.navBtn=f,h.className="font-heading font-black text-xs sm:text-sm bg-white border-2 border-brand-black px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded shadow-brutal-sm hover:-translate-y-0.5 transition-transform shrink-0",h.textContent=m,h},c=n("btn-ir-caja","CAJA","caja"),i=n("btn-ir-ventas","VENTAS","ventas"),b=n("btn-ir-inventario","INVENTARIO","inventario"),t=n("btn-ir-panel","PANEL","panel"),r=n("btn-ir-guia","GUIA","guia"),s=e.rubros!==0;let d=null;s&&(d=n("btn-ir-cuentas","CUENTAS","cuentas"),d.addEventListener("click",()=>void this.arrancarCuentas())),a.appendChild(c),d&&a.appendChild(d),a.appendChild(i),a.appendChild(b),a.appendChild(t),a.appendChild(r),c.addEventListener("click",()=>void this.arrancarCaja()),i.addEventListener("click",()=>void this.arrancarVentas()),b.addEventListener("click",()=>void this.arrancarInventario()),t.addEventListener("click",()=>this.solicitarAccesoPanel()),r.addEventListener("click",()=>this.arrancarGuia())})}arrancarGuia(){this.marcarActivo("guia"),new nt(this.root).render()}async arrancarCaja(){this.marcarActivo("caja"),this.cajaVm=new Qe(this.modelo),new Ze(this.root,this.modalRoot,this.cajaVm,this.modelo).render();try{await this.cajaVm.cargar()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}async arrancarCuentas(){this.marcarActivo("cuentas");const e=new et(this.root,this.modalRoot,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}arrancarVentas(){var n,c,i;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)){this.abrirVentas();return}this.modalRoot.innerHTML=`
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
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(n=document.getElementById("pin-ventas-cancelar"))==null||n.addEventListener("click",o);const a=()=>void(async()=>{var r;const b=document.getElementById("pin-ventas-input").value;await R.validarPin(b).catch(()=>!1)?(o(),await this.abrirVentas()):(r=document.getElementById("pin-ventas-error"))==null||r.classList.remove("hidden")})();(c=document.getElementById("pin-ventas-ok"))==null||c.addEventListener("click",a),(i=document.getElementById("pin-ventas-input"))==null||i.addEventListener("keydown",b=>{b.key==="Enter"&&a()})}async abrirVentas(){this.marcarActivo("ventas");const e=new ot(this.root,this.modalRoot,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}arrancarInventario(){var n,c,i,b;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)||!(e!=null&&e.privacidadInventario)){this.abrirInventario();return}this.modalRoot.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 w-full max-w-sm">
                <h3 class="font-heading font-black text-2xl mb-1">ACCESO RESTRINGIDO</h3>
                <p class="font-body text-brand-text mb-4">El inventario requiere la clave administrativa.</p>
                <input id="pin-inv-input" type="password" inputmode="numeric" maxlength="16" autofocus
                    class="w-full border-2 border-brand-black rounded px-4 py-3 text-2xl tracking-[0.5em] text-center mb-3" />
                <p id="pin-inv-error" class="hidden text-red-700 font-bold mb-2">Clave incorrecta.</p>
                <div class="grid grid-cols-2 gap-3 mb-3">
                    <button id="pin-inv-cancelar" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">CANCELAR</button>
                    <button id="pin-inv-ok" class="bg-brand-black text-white font-heading font-black py-3 rounded">ENTRAR</button>
                </div>
                <button id="pin-inv-sin-clave" class="w-full bg-gray-100 border-2 border-brand-black font-heading font-black py-2 rounded text-xs">VER CATÁLOGO (sin precios ni stock)</button>
            </div>
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(n=document.getElementById("pin-inv-cancelar"))==null||n.addEventListener("click",o);const a=()=>void(async()=>{var s;const t=document.getElementById("pin-inv-input").value;await R.validarPin(t).catch(()=>!1)?(o(),await this.abrirInventario(!0)):(s=document.getElementById("pin-inv-error"))==null||s.classList.remove("hidden")})();(c=document.getElementById("pin-inv-ok"))==null||c.addEventListener("click",a),(i=document.getElementById("pin-inv-sin-clave"))==null||i.addEventListener("click",()=>{o(),this.abrirInventario(!1)}),(b=document.getElementById("pin-inv-input"))==null||b.addEventListener("keydown",t=>{t.key==="Enter"&&a()})}async abrirInventario(e=!0){this.marcarActivo("inventario");const o=new tt(this.root,this.modelo,e);try{await o.render()}catch(a){this.toastError(a instanceof Error?a.message:String(a))}}marcarActivo(e){document.querySelectorAll("[data-nav-btn]").forEach(o=>{o.dataset.navBtn===e?(o.classList.remove("bg-white"),o.classList.add("bg-brand-yellow")):(o.classList.remove("bg-brand-yellow","bg-brand-cyan"),o.classList.add("bg-white"))})}solicitarAccesoPanel(){var n,c,i;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)){this.abrirPanel();return}this.modalRoot.innerHTML=`
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
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(n=document.getElementById("pin-cancelar"))==null||n.addEventListener("click",o);const a=()=>void(async()=>{var r;const b=document.getElementById("pin-input").value;await R.validarPin(b).catch(()=>!1)?(o(),await this.abrirPanel()):(r=document.getElementById("pin-error"))==null||r.classList.remove("hidden")})();(c=document.getElementById("pin-ok"))==null||c.addEventListener("click",a),(i=document.getElementById("pin-input"))==null||i.addEventListener("keydown",b=>{b.key==="Enter"&&a()})}async abrirPanel(){this.marcarActivo("panel");const e=new Ye(this.root,this.modalRoot,this.panelVm,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}async abrirModalQrMovil(){var i,b,t;let e=null;try{e=await R.generarQr()}catch{e=null}const o=(e==null?void 0:e.url)||`http://127.0.0.1:${rt}/panel`,a=(e==null?void 0:e.qrBase64)||"",n=(e==null?void 0:e.roomId)||"";this.modalRoot.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-lg">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-3 mb-4">
                    <div>
                        <h3 class="font-heading font-black text-2xl">CONEXION MOVIL P2P</h3>
                        <p class="font-body text-xs text-gray-600">WebRTC DataChannel + TURN Relay - Funciona dentro y fuera de LAN</p>
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
                            ${n?`<p class="text-[10px] text-gray-400 mt-1 font-mono">Room: ${n}</p>`:""}
                        </div>
                        <div class="bg-green-100 border border-brand-black rounded p-2 text-[10px] font-bold text-green-900 mt-2">
                            WebRTC P2P: Funciona dentro y fuera de LAN. TURN relay para NAT simetrico.
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
                            <div class="bg-amber-100 border border-brand-black rounded p-2 text-[10px] font-bold text-amber-900 mb-3">
                                La conexion solicitará obligatoriamente la Clave del Dueño definida al instalar.
                            </div>
                            <div class="space-y-2">
                                <label class="block text-[11px] font-bold uppercase text-gray-700">Clave P2P (Opcional)</label>
                                <input id="p2p-pin-input" type="password" maxlength="16" placeholder="Dejar vacio para clave por defecto" class="w-full border-2 border-brand-black rounded px-3 py-1.5 font-bold bg-white text-xs" />
                                <p class="text-[10px] text-gray-500">Si se define, el dispositivo movil debera ingresar esta clave para conectarse.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center pt-3 border-t-2 border-brand-black text-xs text-gray-500 font-bold">
                    <span>STUN/TURN: Cloudflare | Google | OpenRelay</span>
                    <button id="qr-cerrar-btn" class="bg-brand-black text-white px-4 py-2 rounded font-black font-heading text-xs">CERRAR</button>
                </div>
            </div>
        </div>`;const c=()=>{this.modalRoot.innerHTML="",this.desconectarP2P()};if((i=document.getElementById("qr-cerrar"))==null||i.addEventListener("click",c),(b=document.getElementById("qr-cerrar-btn"))==null||b.addEventListener("click",c),n){const r=document.getElementById("p2p-pin-input"),s=((t=r==null?void 0:r.value)==null?void 0:t.trim())||"";this.conectarSignaling(n,s)}}conectarSignaling(e,o=""){this.roomId=e,this.p2pPin=o;const a=o?`&pin=${encodeURIComponent(o)}`:"&pin=default",c=`${window.__SIGNALING_URL__||"wss://datiolabs-signaling.apex-importvcb.workers.dev"}/ws/signaling?room=${e}${a}`;try{this.wsSignaling=new WebSocket(c),this.wsSignaling.onopen=()=>{var i,b;this.signalingRetries=0,((i=this.dataChannel)==null?void 0:i.readyState)==="open"&&((b=this.peerConnection)==null?void 0:b.connectionState)==="connected"?this.actualizarEstadoP2P("connected","Senalizacion reconectada - P2P activo"):(this.actualizarEstadoP2P("connected","Conectado al servidor de senalizacion..."),this.crearPeerConnection(e))},this.wsSignaling.onmessage=async i=>{const b=JSON.parse(i.data);if(b.type==="answer"&&this.peerConnection)this.offerResendTimer&&(clearInterval(this.offerResendTimer),this.offerResendTimer=null),await this.peerConnection.setRemoteDescription(new RTCSessionDescription(b.sdp)),this.actualizarEstadoP2P("connected","Conexion P2P establecida");else if(b.type==="ice-candidate"&&this.peerConnection)try{await this.peerConnection.addIceCandidate(new RTCIceCandidate(b.candidate))}catch(t){console.warn("[P2P] ICE candidate error:",t)}else b.type==="error"&&this.actualizarEstadoP2P("error",b.message||"Error del servidor de senalizacion")},this.wsSignaling.onclose=()=>{var b;((b=this.dataChannel)==null?void 0:b.readyState)==="open"?this.actualizarEstadoP2P("connected","Senalizacion caida - P2P sigue activo"):this.actualizarEstadoP2P("disconnected","Senalizacion desconectada. Reconectando...");const i=Math.min(1e3*Math.pow(2,this.signalingRetries),3e4);this.signalingRetries++,setTimeout(()=>{this.conectarSignaling(e,this.p2pPin)},i)},this.wsSignaling.onerror=()=>{}}catch{this.actualizarEstadoP2P("error","Error al conectar con el servidor");const b=Math.min(1e3*Math.pow(2,this.signalingRetries),3e4);this.signalingRetries++,setTimeout(()=>{this.conectarSignaling(e,this.p2pPin)},b)}}async crearPeerConnection(e){if(this.reconectando)return;if(this.peerConnection){try{this.peerConnection.close()}catch{}this.peerConnection=null}this.dataChannel&&(this.dataChannel=null),this.peerConnection=new RTCPeerConnection(this.STUN_SERVERS),this.peerConnection.onicecandidate=c=>{c.candidate&&this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.wsSignaling.send(JSON.stringify({type:"ice-candidate",candidate:c.candidate}))},this.peerConnection.onconnectionstatechange=()=>{var i;const c=(i=this.peerConnection)==null?void 0:i.connectionState;c==="connected"?(this.p2pConnected=!0,this.actualizarEstadoP2P("connected","P2P Conectado - Dispositivo movil vinculado")):c==="disconnected"?(this.actualizarEstadoP2P("connecting","Conexion P2P inestable, intentando recuperar..."),setTimeout(()=>{var b,t;((b=this.peerConnection)==null?void 0:b.connectionState)==="disconnected"&&((t=this.peerConnection)==null?void 0:t.iceConnectionState)!=="failed"&&this.intentarIceRestart()},5e3)):c==="failed"&&(this.p2pConnected=!1,this.actualizarEstadoP2P("disconnected","Conexion P2P perdida. Reconectando..."),this.reconectarP2P())},this.peerConnection.oniceconnectionstatechange=()=>{var i;((i=this.peerConnection)==null?void 0:i.iceConnectionState)==="failed"&&(this.p2pConnected=!1,this.reconectarP2P())},this.dataChannel=this.peerConnection.createDataChannel("api",{ordered:!0}),this.dataChannel.onopen=async()=>{this.offerResendTimer&&(clearInterval(this.offerResendTimer),this.offerResendTimer=null),this.p2pConnected=!0,window.__DATACHANNEL__=this.dataChannel,this.actualizarEstadoP2P("connected","DataChannel abierto - Dispositivo movil vinculado"),this.iniciarKeepalive()},this.dataChannel.onclose=()=>{this.p2pConnected=!1,this.detenerKeepalive(),delete window.__DATACHANNEL__,this.actualizarEstadoP2P("disconnected","DataChannel cerrado"),setTimeout(()=>{!this.p2pConnected&&this.peerConnection&&this.peerConnection.connectionState!=="closed"&&this.peerConnection.connectionState!=="failed"&&this.reconectarP2P()},2e3)},this.dataChannel.onmessage=c=>{this.handleDataChannelMessage(c.data)};const o=await this.peerConnection.createOffer();await this.peerConnection.setLocalDescription(o),this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.wsSignaling.send(JSON.stringify({type:"offer",sdp:this.peerConnection.localDescription})),this.actualizarEstadoP2P("connecting","Oferta P2P enviada, esperando respuesta..."),this.offerResendTimer&&clearInterval(this.offerResendTimer);let a=0;const n=60;this.offerResendTimer=setInterval(()=>{if(a++,a>=n){clearInterval(this.offerResendTimer),this.offerResendTimer=null,this.actualizarEstadoP2P("error","Tiempo de espera agotado. Verifique que el dispositivo movil este en la misma red.");return}this.peerConnection&&this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.wsSignaling.send(JSON.stringify({type:"offer",sdp:this.peerConnection.localDescription}))},5e3)}async handleDataChannelMessage(e){var o,a;try{const n=JSON.parse(e);if(n.type==="ping"){if(((o=this.dataChannel)==null?void 0:o.readyState)==="open")try{this.dataChannel.send(JSON.stringify({type:"pong",ts:n.ts}))}catch{}return}if(n.type==="pong"){this.keepalivePending=!1;return}const{id:c,method:i,path:b,body:t,comando:r,args:s}=n;let d=i||"GET",l=b,m=t;if(r&&!l){const h={obtener_config:{method:"GET",path:"/api/config"},listar_productos:{method:"GET",path:"/api/productos"},listar_categorias:{method:"GET",path:"/api/categorias"},panel:{method:"GET",path:"/api/panel"},listar_ventas:{method:"GET",path:"/api/ventas"},listar_cuentas:{method:"GET",path:"/api/cuentas"},obtener_jornada_actual:{method:"GET",path:"/api/jornadas/actual"},listar_historico_jornadas:{method:"GET",path:"/api/jornadas"},listar_dispositivos:{method:"GET",path:"/api/dispositivos"},listar_metodos_pago:{method:"GET",path:"/api/metodos-pago"},listar_operadores:{method:"GET",path:"/api/operadores"},obtener_semaforo_stock:{method:"GET",path:"/api/semaforo"},listar_historico_tasas:{method:"GET",path:"/api/historico-tasas"},obtener_tasa_bcv:{method:"GET",path:"/api/tasa"},listar_respaldos:{method:"GET",path:"/api/respaldos"},obtener_spa:{method:"GET",path:"/api/spa"},registrar_venta:{method:"POST",path:"/api/ventas"},agregar_consumo:{method:"POST",path:g=>`/api/cuentas/${(g==null?void 0:g.ventaId)||(g==null?void 0:g.cuentaId)||""}/consumo`},abrir_cuenta:{method:"POST",path:"/api/cuentas"},abrir_jornada:{method:"POST",path:"/api/jornadas/abrir"},cerrar_jornada:{method:"POST",path:"/api/jornadas/cerrar"},crear_producto:{method:"POST",path:"/api/productos"},editar_producto:{method:"PUT",path:g=>`/api/productos/${(g==null?void 0:g.sku)||""}`},eliminar_producto:{method:"DELETE",path:g=>`/api/productos/${(g==null?void 0:g.sku)||""}`},comprar_producto:{method:"POST",path:g=>`/api/productos/${(g==null?void 0:g.sku)||""}/compra`},reducir_producto:{method:"POST",path:g=>`/api/productos/${(g==null?void 0:g.sku)||""}/reducir`},crear_categoria:{method:"POST",path:"/api/categorias"},eliminar_categoria:{method:"DELETE",path:g=>`/api/categorias/${(g==null?void 0:g.id)||""}`},crear_metodo_pago:{method:"POST",path:"/api/metodos-pago"},eliminar_metodo_pago:{method:"DELETE",path:g=>`/api/metodos-pago/${(g==null?void 0:g.nombre)||""}`},crear_operador:{method:"POST",path:"/api/operadores"},editar_operador:{method:"PUT",path:g=>`/api/operadores/${(g==null?void 0:g.id)||""}`},eliminar_operador:{method:"DELETE",path:g=>`/api/operadores/${(g==null?void 0:g.id)||""}`},crear_respaldo:{method:"POST",path:"/api/respaldos"},cerrar_cuenta:{method:"POST",path:g=>`/api/cuentas/${(g==null?void 0:g.ventaId)||""}/cerrar`},abonar_cuenta:{method:"POST",path:g=>`/api/cuentas/${(g==null?void 0:g.ventaId)||""}/abonar`},eliminar_consumo:{method:"DELETE",path:g=>`/api/cuentas/${(g==null?void 0:g.ventaId)||""}/consumo/${(g==null?void 0:g.consumoIdx)||""}`}}[r];if(h)d=h.method,l=typeof h.path=="function"?h.path(s):h.path,m=s;else{((a=this.dataChannel)==null?void 0:a.readyState)==="open"&&this.dataChannel.send(JSON.stringify({id:c,error:`Unknown command: ${r}`}));return}}try{const f={method:d,credentials:"include"};m&&(f.body=typeof m=="string"?m:JSON.stringify(m));const h={"Content-Type":"application/json"},g=window.location.origin,E=await fetch(`${g}${l}`,{...f,headers:h});if(E.status===401){this.dataChannel&&this.dataChannel.readyState==="open"&&this.dataChannel.send(JSON.stringify({id:c,error:"Unauthorized"}));return}const w=await E.json();this.dataChannel&&this.dataChannel.readyState==="open"&&this.dataChannel.send(JSON.stringify({id:c,body:w}))}catch(f){this.dataChannel&&this.dataChannel.readyState==="open"&&this.dataChannel.send(JSON.stringify({id:c,error:String(f)}))}}catch(n){console.error("[P2P] Error handling message:",n)}}iniciarKeepalive(){this.detenerKeepalive(),this.keepalivePending=!1,this.keepaliveTimer=setInterval(()=>{var e;if(this.keepalivePending){this.detenerKeepalive(),this.reconectarP2P();return}if(((e=this.dataChannel)==null?void 0:e.readyState)==="open"){this.keepalivePending=!0;try{this.dataChannel.send(JSON.stringify({type:"ping",ts:Date.now()}))}catch{this.detenerKeepalive(),this.reconectarP2P()}}},2e4)}detenerKeepalive(){this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.keepalivePending=!1}intentarIceRestart(){if(!(!this.peerConnection||this.peerConnection.connectionState==="closed"))try{this.peerConnection.restartIce(),this.peerConnection.createOffer({iceRestart:!0}).then(e=>this.peerConnection.setLocalDescription(e)).then(()=>{this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.peerConnection&&this.wsSignaling.send(JSON.stringify({type:"offer",sdp:this.peerConnection.localDescription}))}).catch(e=>{console.warn("[P2P] ICE restart failed:",e),this.reconectarP2P()})}catch(e){console.warn("[P2P] ICE restart error:",e),this.reconectarP2P()}}async reconectarP2P(){this.reconectando||(this.reconectando=!0,this.detenerKeepalive(),this.limpiarPeerConnection(),await new Promise(e=>setTimeout(e,1500)),this.reconectando=!1,this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.crearPeerConnection(this.roomId))}limpiarPeerConnection(){if(this.offerResendTimer&&(clearInterval(this.offerResendTimer),this.offerResendTimer=null),this.dataChannel){try{this.dataChannel.close()}catch{}this.dataChannel=null}if(this.peerConnection){try{this.peerConnection.close()}catch{}this.peerConnection=null}}actualizarEstadoP2P(e,o){const a=document.getElementById("p2p-status-dot"),n=document.getElementById("p2p-status-text");a&&(a.className=`w-3 h-3 rounded-full border border-brand-black ${e==="connected"?"bg-green-500":e==="connecting"?"bg-yellow-400":"bg-red-500"}`),n&&(n.textContent=o)}desconectarP2P(){this.detenerKeepalive(),this.limpiarPeerConnection(),this.wsSignaling&&(this.wsSignaling.close(),this.wsSignaling=null),this.p2pConnected=!1,this.signalingRetries=0,this.reconectando=!1,delete window.__DATACHANNEL__}toastError(e){var o;this.modalRoot.innerHTML=`
        <div class="fixed bottom-6 right-6 bg-red-600 text-white border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]">
            ${e.replace(/"/g,"")}
            <button id="toast-close" class="ml-3 underline font-black">cerrar</button>
        </div>`,(o=document.getElementById("toast-close"))==null||o.addEventListener("click",()=>{this.modalRoot.innerHTML=""})}}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("contextmenu",u=>u.preventDefault()),new dt().arrancar().catch(u=>console.error(u))});
