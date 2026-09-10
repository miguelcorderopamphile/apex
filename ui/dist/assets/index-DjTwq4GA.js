var De=Object.defineProperty;var Le=(u,e,o)=>e in u?De(u,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[e]=o;var C=(u,e,o)=>Le(u,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}})();const ye=1,Ce=2,$e=4,Be=8,ae=1,ce=2,re=8,ge=16,ke=32,pe=64,Re=128,Z=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0};class Pe extends Error{constructor(e){super(e)}}function Ne(){const u=typeof window<"u"?window.location.pathname.toLowerCase():"",e=typeof window<"u"?new URLSearchParams(window.location.search):null,o=u.includes("retail")||(e==null?void 0:e.get("rubro"))==="retail",a=u.includes("panaderia")||(e==null?void 0:e.get("rubro"))==="panaderia";return o?{key:"datiolabs_demo_retail_v3",claveLicencia:"0000888833330000",titular:"DatioLabs Retail Demo",config:{nombre:"DatioLabs Retail",rubros:Be,capacidades:ae|ge|ke|pe|Re,tienePin:!1},productos:[{sku:"SMART-PHONE-X",nombre:"Smartphone X 128GB (Serie/Garantía)",precioBrutoUsd:"180.00",margenPct:"38",precioUsd:"250.00",impuestoPct:"16",stock:"8",capacidades:ae|ge|pe,unidad:"un",categoriaId:"cat-general"},{sku:"AURICULAR-BT",nombre:"Audífonos Inalámbricos Bluetooth Pro",precioBrutoUsd:"14.00",margenPct:"42",precioUsd:"20.00",impuestoPct:"16",stock:"22",capacidades:ae|pe,unidad:"un",categoriaId:"cat-general"},{sku:"CARGADOR-RAPIDO",nombre:"Cargador Rápido 30W Tipo-C",precioBrutoUsd:"5.50",margenPct:"45",precioUsd:"8.00",impuestoPct:"16",stock:"30",capacidades:ae,unidad:"un",categoriaId:"cat-general"},{sku:"CABLE-USB-C",nombre:"Cable Reforzado Tipo-C a Tipo-C 1.5m",precioBrutoUsd:"2.50",margenPct:"60",precioUsd:"4.00",impuestoPct:"16",stock:"45",capacidades:ae,unidad:"un",categoriaId:"cat-general"},{sku:"POWERBANK-20K",nombre:"Batería Portátil PowerBank 20000mAh",precioBrutoUsd:"16.00",margenPct:"40",precioUsd:"22.50",impuestoPct:"16",stock:"12",capacidades:ae|pe,unidad:"un",categoriaId:"cat-general"}]}:a?{key:"datiolabs_demo_panaderia_v3",claveLicencia:"0000888822220000",titular:"DatioLabs Panadería Demo",config:{nombre:"DatioLabs Panadería",rubros:Ce,capacidades:ae|ce,tienePin:!1},productos:[{sku:"PAN-CANILLA",nombre:"Pan Canilla Tradicional",precioBrutoUsd:"0.50",margenPct:"60",precioUsd:"0.80",impuestoPct:"0",stock:"60",capacidades:ae,unidad:"un",categoriaId:"cat-panes"},{sku:"PAN-CAMPESINO",nombre:"Pan Campesino Rústico",precioBrutoUsd:"0.80",margenPct:"50",precioUsd:"1.20",impuestoPct:"0",stock:"35",capacidades:ae,unidad:"un",categoriaId:"cat-panes"},{sku:"PAN-SOBADO",nombre:"Pan Sobado Suave",precioBrutoUsd:"0.65",margenPct:"53",precioUsd:"1.00",impuestoPct:"0",stock:"40",capacidades:ae,unidad:"un",categoriaId:"cat-panes"},{sku:"QUESO-GUAYANES",nombre:"Queso Guayanés Fresco",precioBrutoUsd:"3.20",margenPct:"40",precioUsd:"4.50",impuestoPct:"0",stock:"15.00",capacidades:ce,unidad:"kg",categoriaId:"cat-viveres"},{sku:"CAFE-MOLIDO",nombre:"Café Molido Tostado 250g",precioBrutoUsd:"2.00",margenPct:"50",precioUsd:"3.00",impuestoPct:"0",stock:"25",capacidades:ae,unidad:"un",categoriaId:"cat-viveres"}]}:{key:"datiolabs_demo_licoreria_v3",claveLicencia:"0000888811110000",titular:"DatioLabs Licorería Demo",config:{nombre:"DatioLabs Licorería",rubros:$e,capacidades:ae|re,tienePin:!1},productos:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",precioBrutoUsd:"13.50",margenPct:"33",precioUsd:"18.00",impuestoPct:"16",stock:"12",capacidades:ae|re,unidad:"un",categoriaId:"cat-bebidas"},{sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",precioBrutoUsd:"8.80",margenPct:"36",precioUsd:"12.00",impuestoPct:"16",stock:"16",capacidades:ae|re,unidad:"un",categoriaId:"cat-bebidas"},{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",precioBrutoUsd:"3.30",margenPct:"36",precioUsd:"4.50",impuestoPct:"16",stock:"30",capacidades:ae|re,unidad:"un",categoriaId:"cat-bebidas"},{sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",precioBrutoUsd:"16.50",margenPct:"33",precioUsd:"22.00",impuestoPct:"16",stock:"8",capacidades:ae|re,unidad:"un",categoriaId:"cat-bebidas"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",precioBrutoUsd:"1.20",margenPct:"50",precioUsd:"1.80",impuestoPct:"16",stock:"24",capacidades:ae|re,unidad:"un",categoriaId:"cat-bebidas"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",precioBrutoUsd:"0.60",margenPct:"66",precioUsd:"1.00",impuestoPct:"16",stock:"40",capacidades:ae|re,unidad:"un",categoriaId:"cat-viveres"}]}}class je{constructor(){C(this,"config");C(this,"productos");C(this,"cuentas",[{ventaId:"CTA-88210",etiqueta:"Mesa 4 (Terraza)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-7200,fechaCreacionStr:"Hoy, 02:00 PM",lineas:2,totalParcialUsd:"10.00",totalParcialBs:"8073.90",abonosUsd:"5.00",abonosBs:"4036.95",consumos:[{id:"con-m4-1",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-m4-2",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]},{ventaId:"CTA-88211",etiqueta:"Barra Principal (Carlos)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-3600,fechaCreacionStr:"Hoy, 03:00 PM",lineas:2,totalParcialUsd:"19.80",totalParcialBs:"15986.32",abonosUsd:"25.00",abonosBs:"20184.75",consumos:[{id:"con-bp-1",sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:1,precioUsd:"18.00",subtotalUsd:"18.00"},{id:"con-bp-2",sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:1,precioUsd:"1.80",subtotalUsd:"1.80"}]},{ventaId:"CTA-88212",etiqueta:"Mesa 1 (VIP)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-1800,fechaCreacionStr:"Hoy, 03:30 PM",lineas:1,totalParcialUsd:"22.00",totalParcialBs:"17762.58",abonosUsd:"0.00",abonosBs:"0.00",consumos:[{id:"con-m1-1",sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",cantidad:1,precioUsd:"22.00",subtotalUsd:"22.00"}]},{ventaId:"DEU-99042",etiqueta:"Taller Hermanos Gómez",cliente:"Carlos Gómez (Taller)",nota:"Crédito comercial acordado a cobrar en días",tipo:"deuda",fechaCreacionUnix:Math.floor(Date.now()/1e3)-86400*3,fechaCreacionStr:"01/09/2026 10:30",lineas:3,totalParcialUsd:"34.00",totalParcialBs:"27451.26",abonosUsd:"10.00",abonosBs:"8073.90",consumos:[{id:"con-d1",sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:2,precioUsd:"12.00",subtotalUsd:"24.00"},{id:"con-d2",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-d3",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]}]);C(this,"categorias",[{id:"cat-general",nombre:"General"},{id:"cat-viveres",nombre:"Víveres"},{id:"cat-bebidas",nombre:"Bebidas y Licores"},{id:"cat-panes",nombre:"Panes y Horneados"}]);C(this,"tasasImpuestos",[{id:"iva-16",nombre:"IVA General (16%)",porcentaje:"16"},{id:"iva-8",nombre:"IVA Reducido (8%)",porcentaje:"8"},{id:"iva-0",nombre:"Exento (0%)",porcentaje:"0"}]);C(this,"tasaActual",{valor:"807.39",fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:null,direccion:null});C(this,"tickets",[{ventaId:"TRX-94812",totalUsd:"23.80",totalBs:"19215.88",tasaDelDia:"807.39",montoRecibidoBs:"20000.00",vueltoBs:"784.12",fechaHora:"Hoy, 01:24 PM",fechaUnix:Math.floor(Date.now()/1e3)-3600,canal:"VENTA DIRECTA",operador:"Caja Principal",pagos:[{metodo:"PAGO MOVIL",montoUsd:"23.80",montoBs:"19215.88",referencia:"REF-7892"}],lineas:[{sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:"1",precioUsd:"12.00",tasaBloqueada:"807.39",subtotalUsd:"12.00",subtotalBs:"9688.68"},{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:"2",precioUsd:"4.50",tasaBloqueada:"807.39",subtotalUsd:"9.00",subtotalBs:"7266.51"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:"1",precioUsd:"1.00",tasaBloqueada:"807.39",subtotalUsd:"1.00",subtotalBs:"807.39"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:"1",precioUsd:"1.80",tasaBloqueada:"807.39",subtotalUsd:"1.80",subtotalBs:"1453.30"}]},{ventaId:"CTA-78104",totalUsd:"40.00",totalBs:"32295.60",tasaDelDia:"807.39",montoRecibidoBs:"35000.00",vueltoBs:"2704.40",fechaHora:"Hoy, 12:50 PM",fechaUnix:Math.floor(Date.now()/1e3)-7200,canal:"CONSUMO EN CUENTA",operador:"Mesa 4 / Mostrador",pagos:[{metodo:"DOL.CASH",moneda:"USD",montoUsd:"20.00",montoBs:"16147.80",tasaCambio:"807.39"},{metodo:"PUNTOD.VENTA",moneda:"BS",montoUsd:"20.00",montoBs:"16147.80",referencia:"LOTE-112"}],lineas:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:"1",precioUsd:"18.00",tasaBloqueada:"807.39",subtotalUsd:"18.00",subtotalBs:"14533.02"},{sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",cantidad:"1",precioUsd:"22.00",tasaBloqueada:"807.39",subtotalUsd:"22.00",subtotalBs:"17762.58"}]},{ventaId:"TRX-94811",totalUsd:"13.60",totalBs:"10980.50",tasaDelDia:"807.39",montoRecibidoBs:"11000.00",vueltoBs:"19.50",fechaHora:"Hoy, 11:35 AM",fechaUnix:Math.floor(Date.now()/1e3)-10800,canal:"VENTA DIRECTA",operador:"Caja Principal",pagos:[{metodo:"BS.EFEC.",moneda:"BS",montoUsd:"13.60",montoBs:"10980.50"}],lineas:[{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:"2",precioUsd:"4.50",tasaBloqueada:"807.39",subtotalUsd:"9.00",subtotalBs:"7266.51"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:"2",precioUsd:"1.80",tasaBloqueada:"807.39",subtotalUsd:"3.60",subtotalBs:"2906.60"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:"1",precioUsd:"1.00",tasaBloqueada:"807.39",subtotalUsd:"1.00",subtotalBs:"807.39"}]},{ventaId:"CTA-78103",totalUsd:"18.00",totalBs:"14533.02",tasaDelDia:"807.39",montoRecibidoBs:"15000.00",vueltoBs:"466.98",fechaHora:"Hoy, 10:15 AM",fechaUnix:Math.floor(Date.now()/1e3)-14400,canal:"CONSUMO EN CUENTA",operador:"Barra Principal",pagos:[{metodo:"ZELLE",moneda:"USD",montoUsd:"18.00",montoBs:"14533.02",tasaCambio:"807.39",referencia:"ZEL-5501"}],lineas:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:"1",precioUsd:"18.00",tasaBloqueada:"807.39",subtotalUsd:"18.00",subtotalBs:"14533.02"}]}]);C(this,"ventasTotalUsd",95.4);C(this,"ventasTotalBs",77025);C(this,"metodosPago",[{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]);C(this,"dispositivos",[{id:"dev-1",nombre:"iPhone 15 Pro (Dueño)",ip:"192.168.1.45",ultimoAcceso:"Hace 5 min",activo:!0},{id:"dev-2",nombre:"Tablet Mostrador 1",ip:"192.168.1.80",ultimoAcceso:"Hace 12 min",activo:!0}]);C(this,"respaldos",[{id:"bk-1",fecha:"Hoy, 06:00 PM",archivoNombre:"DATO-DEMO-20260903-180000.backup",registros:412,tamanoKb:124,checksumSha256:"9f83a21b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f"},{id:"bk-2",fecha:"Ayer, 11:30 PM",archivoNombre:"DATO-DEMO-20260902-233000.backup",registros:395,tamanoKb:118,checksumSha256:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"}]);C(this,"licencia",{estado:"activa",tipo:"Enterprise Standalone Local",claveLicencia:"0000888811110000",titular:"Empresa DatioLabs Cliente Comercial",validez:"Perpetua (Sin caducidad / Portabilidad Total)"});C(this,"operadores",[{id:"op-1",nombre:"Carlos Mendoza",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*30},{id:"op-2",nombre:"María Andrea Silva",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*15},{id:"op-3",nombre:"José Gregorio Páez",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*5}]);C(this,"jornadaActual",{id:"JOR-20260908-01",estado:"abierta",inicioUnix:Math.floor(Date.now()/1e3)-14400,inicioStr:"Hoy, 08:30 AM",operadorInicial:"Carlos Mendoza",operadorActual:"Carlos Mendoza",operadoresActivos:["Carlos Mendoza"],operadoresRelevo:["Carlos Mendoza"],tasaInicio:"807.39",ventasTotalUsd:"95.40",ventasTotalBs:"77025.00",ticketsEmitidos:6,vueltoPagadoBs:"1450.00",vueltoRetenidoBs:"784.12",deudasLiquidadasUsd:"34.00",entradasStockReg:2,mermasStockReg:0,cambiosPrecioReg:0});C(this,"historicoJornadas",[{id:"JOR-20260907-01",estado:"cerrada",inicioUnix:Math.floor(Date.now()/1e3)-86400-28800,finUnix:Math.floor(Date.now()/1e3)-86400,inicioStr:"Ayer, 08:00 AM",finStr:"Ayer, 09:30 PM",operadorInicial:"María Andrea Silva",operadorActual:"Carlos Mendoza",operadoresRelevo:["María Andrea Silva","Carlos Mendoza"],tasaInicio:"805.20",tasaFin:"807.39",ventasTotalUsd:"340.50",ventasTotalBs:"274889.70",ticketsEmitidos:24,vueltoPagadoBs:"4520.00",vueltoRetenidoBs:"1200.00",deudasLiquidadasUsd:"68.00",entradasStockReg:4,mermasStockReg:1,cambiosPrecioReg:1,checksumSha256:"a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0"}]);C(this,"semaforoStock",{rojoMax:5,amarilloMax:15});C(this,"dedupVentas",{});C(this,"historicoTasas",[{id:"tx-1",valor:"807.3900",fechaHora:"Hoy, 04:00 PM",tipo:"automático",motivo:"Sondeo oficial BCV"},{id:"tx-2",valor:"805.2000",fechaHora:"Hoy, 09:00 AM",tipo:"automático",motivo:"Apertura de jornada"},{id:"tx-3",valor:"802.1500",fechaHora:"Ayer, 05:00 PM",tipo:"automático",motivo:"Cierre BCV"}]);C(this,"pinDueno","");C(this,"storageKey");const e=Ne();this.storageKey=e.key,this.config=e.config,this.productos=e.productos,this.licencia.claveLicencia=e.claveLicencia,this.licencia.titular=e.titular;try{["datiolabs_demo_licoreria_db","datiolabs_demo_panaderia_db","datiolabs_demo_retail_db","datiolabs_demo_licoreria_v2"].forEach(a=>{try{localStorage.removeItem(a)}catch{}});const o=localStorage.getItem(this.storageKey);if(o){const a=JSON.parse(o);if(a.productos&&Array.isArray(a.productos)&&(this.productos=a.productos.map(n=>{const c=e.productos.find(d=>d.sku===n.sku),i=String(n.unidad||(c==null?void 0:c.unidad)||"").toLowerCase(),b=i==="kg"?"kg":i==="ml"?"ml":"un",t=n.categoriaId&&n.categoriaId.trim()?n.categoriaId:(c==null?void 0:c.categoriaId)||"cat-general",r=Number(n.precioUsd)||0,s=n.precioBrutoUsd&&Number(n.precioBrutoUsd)>0?n.precioBrutoUsd:(c==null?void 0:c.precioBrutoUsd)||(r*.65).toFixed(2);return{...n,unidad:b,categoriaId:t,precioBrutoUsd:s}})),a.cuentas&&Array.isArray(a.cuentas)&&a.cuentas.length>0&&(this.cuentas=a.cuentas.map(n=>(Array.isArray(n.consumos)||(n.consumos=[]),n.abonosUsd===void 0&&(n.abonosUsd="0.00"),n.abonosBs===void 0&&(n.abonosBs="0.00"),n.tipo||(n.tipo=n.etiqueta.toLowerCase().includes("taller")||n.etiqueta.toLowerCase().includes("deuda")?"deuda":"activa"),n.fechaCreacionUnix||(n.fechaCreacionUnix=n.tipo==="deuda"?Math.floor(Date.now()/1e3)-86400*3:Math.floor(Date.now()/1e3)-3600),n.fechaCreacionStr||(n.fechaCreacionStr=n.tipo==="deuda"?"01/09/2026 10:30":"Hoy"),n.consumos.length===0&&Z(n.totalParcialUsd)>0&&n.consumos.push({id:"con-"+Math.random().toString(36).slice(2,8),sku:"CONSUMO-PREV",nombre:"Consumos acumulados",cantidad:1,precioUsd:String(n.totalParcialUsd),subtotalUsd:String(n.totalParcialUsd)}),n.lineas=n.consumos.length,n)),this.cuentas.some(n=>n.tipo==="deuda")||this.cuentas.push({ventaId:"DEU-99042",etiqueta:"Taller Hermanos Gómez",cliente:"Carlos Gómez (Taller)",nota:"Crédito comercial convenido a pagar en días",tipo:"deuda",fechaCreacionUnix:Math.floor(Date.now()/1e3)-86400*3,fechaCreacionStr:"01/09/2026 10:30",lineas:3,totalParcialUsd:"34.00",totalParcialBs:(34*Z(this.tasaActual.valor)).toFixed(2),abonosUsd:"10.00",abonosBs:(10*Z(this.tasaActual.valor)).toFixed(2),consumos:[{id:"con-d1",sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:2,precioUsd:"12.00",subtotalUsd:"24.00"},{id:"con-d2",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-d3",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]})),a.metodosPago&&Array.isArray(a.metodosPago)){const n=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}],c=[],i=new Set,b=t=>{let r="",s="BS";if(typeof t=="string")r=t.trim().toUpperCase(),r==="DOLAR.EFEC."&&(r="DOL.CASH"),r==="USDT BINAN."&&(r="BINAN.USDT"),["DOL.CASH","ZELLE","BINAN.USDT"].includes(r)&&(s="USD");else if(t&&typeof t=="object"&&"nombre"in t){const d=t;r=String(d.nombre||"").trim().toUpperCase(),r==="DOLAR.EFEC."&&(r="DOL.CASH"),r==="USDT BINAN."&&(r="BINAN.USDT"),s=d.moneda==="USD"||["DOL.CASH","ZELLE","BINAN.USDT"].includes(r)?"USD":"BS"}r&&!i.has(r)&&(i.add(r),c.push({nombre:r,moneda:s}))};n.forEach(b),a.metodosPago.forEach(b),c.sort((t,r)=>t.moneda===r.moneda?0:t.moneda==="BS"?-1:1),this.metodosPago=c}else this.metodosPago.sort((n,c)=>n.moneda===c.moneda?0:n.moneda==="BS"?-1:1);a.operadores&&Array.isArray(a.operadores)&&(this.operadores=a.operadores),a.jornadaActual!==void 0&&(this.jornadaActual=a.jornadaActual),a.historicoJornadas&&Array.isArray(a.historicoJornadas)&&(this.historicoJornadas=a.historicoJornadas),a.semaforoStock&&(this.semaforoStock=a.semaforoStock),a.categorias&&(this.categorias=a.categorias),a.tasasImpuestos&&(this.tasasImpuestos=a.tasasImpuestos),a.tasaActual&&(this.tasaActual=a.tasaActual),a.dispositivos&&(this.dispositivos=a.dispositivos),a.respaldos&&(this.respaldos=a.respaldos),a.historicoTasas&&(this.historicoTasas=a.historicoTasas),a.tickets&&Array.isArray(a.tickets)&&a.tickets.length>0&&(this.tickets=a.tickets),a.ventasTotalUsd!==void 0&&(this.ventasTotalUsd=Number(a.ventasTotalUsd)),a.ventasTotalBs!==void 0&&(this.ventasTotalBs=Number(a.ventasTotalBs)),a.pinDueno!==void 0&&(this.pinDueno=a.pinDueno),this.config&&this.pinDueno&&(this.config.tienePin=!0)}}catch{}this.refrescarTasaEnVivo()}async refrescarTasaEnVivo(){try{const e=await fetch("https://ve.dolarapi.com/v1/dolares/oficial");if(e.ok){const o=await e.json(),a=Number(o.promedio);if(Number.isFinite(a)&&a>0){const n=Number(this.tasaActual.valor);let c=null,i=null;if(Number.isFinite(n)&&n>0&&n!==a){const r=(a-n)/n*100;c=Math.abs(r).toFixed(2),i=r>0?"subio":"bajo"}this.tasaActual={valor:a.toFixed(4),fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:c,direccion:i};const t=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});this.historicoTasas.unshift({id:"tx-"+Math.random().toString(36).slice(2,7),valor:a.toFixed(4),fechaHora:`Hoy, ${t}`,tipo:"automático",motivo:"Sincronización BCV en vivo"}),this.historicoTasas.length>50&&this.historicoTasas.pop(),this.persist(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("tasa_actualizada",{detail:a}))}}}catch{}}persist(){try{localStorage.setItem(this.storageKey,JSON.stringify({productos:this.productos,cuentas:this.cuentas,categorias:this.categorias,tasasImpuestos:this.tasasImpuestos,tasaActual:this.tasaActual,dispositivos:this.dispositivos,respaldos:this.respaldos,historicoTasas:this.historicoTasas,tickets:this.tickets,ventasTotalUsd:this.ventasTotalUsd,ventasTotalBs:this.ventasTotalBs,pinDueno:this.pinDueno,metodosPago:this.metodosPago,operadores:this.operadores,jornadaActual:this.jornadaActual,historicoJornadas:this.historicoJornadas,semaforoStock:this.semaforoStock}))}catch{}}}const m=new je,Oe={crear_respaldo:{method:"POST",path:"/api/respaldos"},listar_respaldos:{method:"GET",path:"/api/respaldos"},restaurar_desde_respaldo:{method:"POST",path:"/api/respaldos/restaurar",body:!0},restaurar_desde_archivo:{method:"POST",path:"/api/respaldos/restaurar",body:!0},obtener_config:{method:"GET",path:"/api/config"},obtener_tasa_bcv:{method:"GET",path:"/api/tasa"},listar_productos:{method:"GET",path:"/api/productos"},listar_categorias:{method:"GET",path:"/api/categorias"},panel:{method:"GET",path:"/api/panel"},listar_ventas:{method:"GET",path:"/api/ventas"},listar_cuentas:{method:"GET",path:"/api/cuentas"},obtener_jornada_actual:{method:"GET",path:"/api/jornadas/actual"},listar_historico_jornadas:{method:"GET",path:"/api/jornadas"},listar_dispositivos:{method:"GET",path:"/api/dispositivos"},listar_metodos_pago:{method:"GET",path:"/api/metodos-pago"},listar_operadores:{method:"GET",path:"/api/operadores"},listar_historico_tasas:{method:"GET",path:"/api/historico-tasas"},obtener_semaforo_stock:{method:"GET",path:"/api/semaforo"}};async function F(u,e){var i;const o=window.__TAURI__,a=(i=o==null?void 0:o.core)==null?void 0:i.invoke;if(a)try{return await a(u,e)}catch(b){throw new Pe(typeof b=="string"?b:JSON.stringify(b))}const n=window.__DATACHANNEL__;if(n&&n.readyState==="open"){const b=await qe(n,u,e).catch(()=>null);if(b!==null)return b}const c=await _e(u,e).catch(()=>null);return c!==null?c:Fe(u,e)}let Me=0;const me=new Map;function qe(u,e,o){return new Promise((a,n)=>{const c=`dc-${++Me}-${Date.now()}`,i=setTimeout(()=>{me.delete(c),n(new Error("DataChannel timeout"))},15e3);me.set(c,{resolve:a,reject:n,timer:i}),window.__P2P_PENDING__=me;try{u.send(JSON.stringify({id:c,comando:e,args:o}))}catch(b){clearTimeout(i),me.delete(c),n(b instanceof Error?b:new Error(String(b)))}})}async function _e(u,e){const o=Oe[u];if(!o)return null;const a={method:o.method,headers:{"Content-Type":"application/json"}};o.body&&e&&(u==="restaurar_desde_archivo"?a.body=JSON.stringify({contenido_base64:e.contenidoBase64,nombre_archivo:e.nombreArchivo}):a.body=JSON.stringify(e));const n=await fetch(o.path,a);if(!n.ok)throw new Pe(`HTTP ${n.status}`);return await n.json()}function Fe(u,e){var o,a,n,c,i,b;switch(u){case"obtener_config":return Promise.resolve(m.config);case"inicializar_negocio":{const t=e!=null&&e.pinDueno?String(e.pinDueno).trim():"",r=e!=null&&e.licenciaClave?String(e.licenciaClave).trim():"";return m.pinDueno=t,m.config={nombre:String((e==null?void 0:e.nombre)||"Mi Negocio Demo"),rubros:Number((e==null?void 0:e.rubros)||15),capacidades:ae|ce|re|ge|ke,tienePin:t.length>0,licenciaEstado:r?"activa":"demo",licenciaTitular:r?"Empresa DatioLabs":"",privacidadInventario:!!(e!=null&&e.privacidadInventario)},m.licencia.claveLicencia=r||"0000888811110000",m.licencia.estado=r?"activa":"demo",m.licencia.titular=r?"Empresa DatioLabs":"DatioLabs Demo",m.persist(),Promise.resolve(void 0)}case"validar_pin_dueno":{const t=String((e==null?void 0:e.pin)||"").trim();return m.pinDueno?Promise.resolve(t===m.pinDueno):Promise.resolve(!0)}case"cambiar_pin_dueno":{const t=String((e==null?void 0:e.pinAnterior)||"").trim(),r=String((e==null?void 0:e.pinNuevo)||"").trim();return m.pinDueno&&t!==m.pinDueno?Promise.reject(new Error("La clave anterior no coincide.")):(m.pinDueno=r,m.config&&(m.config.tienePin=r.length>0),m.persist(),Promise.resolve(!0))}case"listar_productos":return Promise.resolve(m.productos);case"crear_producto":{const t=e==null?void 0:e.input,r=String((t==null?void 0:t.unidad)||"").toLowerCase(),s=r==="kg"?"kg":r==="ml"?"ml":t!=null&&t.pesable?"kg":"un",d=!!(t!=null&&t.esCaja),l=Number(t==null?void 0:t.unidadesPorCaja)>1?Math.floor(Number(t.unidadesPorCaja)):void 0,p=String((t==null?void 0:t.stockInicial)||"0"),f={sku:String((t==null?void 0:t.sku)||"").toUpperCase(),nombre:String((t==null?void 0:t.nombre)||""),precioBrutoUsd:String((t==null?void 0:t.precioBrutoUsd)||"0"),margenPct:String((t==null?void 0:t.margenPct)||"0"),precioUsd:String((t==null?void 0:t.precioUsd)||"0"),impuestoPct:String((t==null?void 0:t.impuestoPct)||"0"),stock:p,capacidades:ae|(s==="kg"||s==="ml"||t!=null&&t.pesable?ce:0),categoriaId:String((t==null?void 0:t.categoriaId)||""),sinStock:!!(t!=null&&t.sinStock),unidad:s,esCaja:d,unidadesPorCaja:l,precioPaqueteUsd:t!=null&&t.precioPaqueteUsd?String(t.precioPaqueteUsd):void 0,nombrePaquete:t!=null&&t.nombrePaquete?String(t.nombrePaquete):void 0};return m.productos.push(f),m.persist(),Promise.resolve(void 0)}case"eliminar_producto":{const t=String((e==null?void 0:e.sku)||"").toUpperCase();return m.productos=m.productos.filter(r=>r.sku!==t),m.persist(),Promise.resolve(void 0)}case"registrar_venta":{const t=e==null?void 0:e.items,r=e==null?void 0:e.idempotencyKey,s=Number((e==null?void 0:e.montoRecibidoBs)||"0");if(r&&((o=m.dedupVentas)!=null&&o[r])){const T=m.dedupVentas[r],A=m.tickets.find(G=>G.ventaId===T);if(A)return Promise.resolve(A)}let d=0;const l=Number(m.tasaActual.valor);t.forEach(T=>{const A=m.productos.find(G=>G.sku===T.sku);if(A){const G=Number(T.cantidad),z=(T.modo_venta||"unidad")==="paquete"&&(A.precioPaqueteUsd||A.esCaja&&A.unidadesPorCaja&&A.unidadesPorCaja>1),B=z&&A.unidadesPorCaja||1,N=z?A.precioPaqueteUsd?Number(A.precioPaqueteUsd):Number(A.precioUsd)*B:Number(A.precioUsd);d+=N*G,A.stock=String(Math.max(0,Number(A.stock)-B*G))}});const p=d*l,f=Math.max(0,s-p);m.ventasTotalUsd+=d,m.ventasTotalBs+=p;const h=new Date,g=h.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),y=Array.isArray(e==null?void 0:e.pagos)&&e.pagos.length>0?e.pagos:[{metodo:s>0?"BS.EFEC.":"DOL.CASH",moneda:s>0?"BS":"USD",montoUsd:d.toFixed(2),montoBs:p.toFixed(2)}],w=e==null?void 0:e.resolucionVuelto,I=f>.009?(w==null?void 0:w.estado)||"PAGADO":"SIN_VUELTO",D=I==="PAGADO"?(w==null?void 0:w.metodo)||"BS.EFEC.":void 0,_=f>.009?(w==null?void 0:w.montoBs)||f.toFixed(2):void 0,x=f>.009?(w==null?void 0:w.montoUsd)||(l>0?(f/l).toFixed(2):"0.00"):void 0,v=I==="PAGADO"?w==null?void 0:w.tasa:void 0,k=((a=m.jornadaActual)==null?void 0:a.operadorActual)||"Caja Principal",P={ventaId:"TRX-"+Math.floor(1e4+Math.random()*9e4),totalUsd:d.toFixed(2),totalBs:p.toFixed(2),tasaDelDia:l.toFixed(2),montoRecibidoBs:s.toFixed(2),vueltoBs:f.toFixed(2),fechaHora:`Hoy, ${g}`,fechaUnix:Math.floor(h.getTime()/1e3),canal:"VENTA DIRECTA",operador:k,pagos:y,estadoVuelto:I,metodoVuelto:D,montoVueltoBs:_,montoVueltoUsd:x,tasaVuelto:v,lineas:t.map(T=>{const A=m.productos.find(S=>S.sku===T.sku),G=T.modo_venta||"unidad",q=G==="paquete"&&(A==null?void 0:A.precioPaqueteUsd),z=Number(q?(A==null?void 0:A.precioPaqueteUsd)||0:(A==null?void 0:A.precioUsd)||0),B=(z*Number(T.cantidad)).toFixed(2),N=(Number(B)*l).toFixed(2);return{sku:T.sku,nombre:(A==null?void 0:A.nombre)||T.sku,cantidad:T.cantidad,precioUsd:String(z),tasaBloqueada:l.toFixed(2),subtotalUsd:B,subtotalBs:N,modoVenta:G}})};if(m.tickets.some(T=>T.ventaId===P.ventaId)||m.tickets.unshift(P),r&&(m.dedupVentas||(m.dedupVentas={}),m.dedupVentas[r]=P.ventaId),m.jornadaActual){const T=m.jornadaActual;T.ventasTotalUsd=(Z(T.ventasTotalUsd)+d).toFixed(2),T.ventasTotalBs=(Z(T.ventasTotalBs)+p).toFixed(2),T.ticketsEmitidos+=1,I==="PAGADO"?T.vueltoPagadoBs=(Z(T.vueltoPagadoBs)+f).toFixed(2):I==="RETENIDO"&&(T.vueltoRetenidoBs=(Z(T.vueltoRetenidoBs)+f).toFixed(2))}return m.persist(),Promise.resolve(P)}case"listar_cuentas":return Promise.resolve(m.cuentas);case"abrir_cuenta":{const t=String((e==null?void 0:e.etiqueta)||"Mesa Demo").trim(),r=(e==null?void 0:e.tipo)==="deuda"?"deuda":"activa",s=typeof(e==null?void 0:e.cliente)=="string"?e.cliente.trim():void 0,d=typeof(e==null?void 0:e.nota)=="string"?e.nota.trim():void 0,l=new Date,p=l.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),f=`${l.toLocaleDateString("es-VE")} ${p}`,h={ventaId:(r==="deuda"?"DEU-":"CTA-")+Math.random().toString(36).slice(2,8).toUpperCase(),etiqueta:t,tipo:r,cliente:s,nota:d,fechaCreacionUnix:Math.floor(l.getTime()/1e3),fechaCreacionStr:f,totalParcialUsd:"0.00",totalParcialBs:"0.00",abonosUsd:"0.00",abonosBs:"0.00",lineas:0,consumos:[]};return m.cuentas.push(h),m.persist(),Promise.resolve(h)}case"agregar_consumo":{const t=String((e==null?void 0:e.ventaId)||""),r=String((e==null?void 0:e.sku)||"").trim().toUpperCase(),s=Z(e==null?void 0:e.cantidad)||1,d=String((e==null?void 0:e.modo_venta)||"unidad"),l=m.cuentas.find(f=>f.ventaId===t),p=m.productos.find(f=>f.sku.trim().toUpperCase()===r);if(l&&p){const f=d==="paquete"&&(p.precioPaqueteUsd||p.esCaja&&p.unidadesPorCaja&&p.unidadesPorCaja>1),h=f&&p.unidadesPorCaja||1,g=f?p.precioPaqueteUsd?Z(p.precioPaqueteUsd):Z(p.precioUsd)*h:Z(p.precioUsd),y=s*h;if(!p.sinStock){const x=Z(p.stock);if(x<y)return Promise.reject(new Error(`Stock insuficiente para "${p.nombre}". Disponible: ${x} ${p.unidad||"un."}`));p.stock=String(Math.max(0,x-y))}Array.isArray(l.consumos)||(l.consumos=[]);const w=g*s,I=Z(m.tasaActual.valor)||807.39,D=l.consumos.find(x=>x.sku.trim().toUpperCase()===p.sku.trim().toUpperCase()&&x.modoVenta===d);D?(D.cantidad+=s,D.subtotalUsd=(D.cantidad*Z(D.precioUsd)).toFixed(2)):l.consumos.push({id:"con-"+Math.random().toString(36).slice(2,8),sku:p.sku,nombre:p.nombre,cantidad:s,precioUsd:g.toFixed(2),subtotalUsd:w.toFixed(2),modoVenta:d});const _=l.consumos.reduce((x,v)=>x+Z(v.subtotalUsd),0);return l.totalParcialUsd=_.toFixed(2),l.totalParcialBs=(_*I).toFixed(2),l.lineas=l.consumos.length,m.persist(),Promise.resolve(l)}return Promise.resolve(l)}case"eliminar_consumo":{const t=String((e==null?void 0:e.ventaId)||""),r=String((e==null?void 0:e.consumoId)||""),s=m.cuentas.find(d=>d.ventaId===t);if(s&&Array.isArray(s.consumos)){const d=s.consumos.findIndex(l=>l.id===r);if(d!==-1){const l=s.consumos[d],p=m.productos.find(g=>g.sku.trim().toUpperCase()===l.sku.trim().toUpperCase());p&&!p.sinStock&&(p.stock=String(Z(p.stock)+l.cantidad)),s.consumos.splice(d,1);const f=Z(m.tasaActual.valor)||807.39,h=s.consumos.reduce((g,y)=>g+Z(y.subtotalUsd),0);s.totalParcialUsd=h.toFixed(2),s.totalParcialBs=(h*f).toFixed(2),s.lineas=s.consumos.length,m.persist()}return Promise.resolve(s)}return Promise.resolve(s)}case"cerrar_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),r=m.cuentas.findIndex(B=>B.ventaId===t);if(r===-1){const B=m.tickets.find(N=>N.ventaId===t);return B?Promise.resolve(B):Promise.reject(new Error("Cuenta no encontrada"))}const s=m.cuentas[r];let d="0.00",l="0.00",p=[],f=0;const h=Z(e==null?void 0:e.tasaCobro),g=h>0?h:Number(m.tasaActual.valor)||807.39,y=(s==null?void 0:s.tipo)==="deuda";if(s){const B=Number(s.totalParcialUsd),N=Number(s.abonosUsd||"0"),S=Math.max(0,N-B);f=S;const j=Math.max(B,N);d=j.toFixed(2),l=(j*g).toFixed(2),m.cuentas.splice(r,1),m.ventasTotalUsd+=j,m.ventasTotalBs+=j*g,p=(s.consumos||[]).map(E=>({sku:E.sku,nombre:E.nombre,cantidad:String(E.cantidad),precioUsd:E.precioUsd,tasaBloqueada:g.toFixed(4),subtotalUsd:E.subtotalUsd,subtotalBs:(Number(E.subtotalUsd)*g).toFixed(2)})),S>0&&p.push({sku:"GANANCIA-EXCEDENTE",nombre:"Saldo a Favor Consolidado como Ganancia (Excedente Retenido)",cantidad:"1",precioUsd:S.toFixed(2),tasaBloqueada:g.toFixed(4),subtotalUsd:S.toFixed(2),subtotalBs:(S*g).toFixed(2)})}const w=new Date,I=w.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),D=Array.isArray(e==null?void 0:e.pagos)&&e.pagos.length>0?e.pagos:[{metodo:y?"TRANSF.BS.":"BS.EFEC.",moneda:"BS",montoUsd:d,montoBs:l}],_=Number((e==null?void 0:e.montoRecibidoBs)||l),x=Math.max(0,_-Number(l)),v=e==null?void 0:e.resolucionVuelto,k=x>.009?(v==null?void 0:v.estado)||"PAGADO":"SIN_VUELTO",P=k==="PAGADO"?(v==null?void 0:v.metodo)||(y?"TRANSF.BS.":"BS.EFEC."):void 0,T=x>.009?(v==null?void 0:v.montoBs)||x.toFixed(2):void 0,A=x>.009?(v==null?void 0:v.montoUsd)||(g>0?(x/g).toFixed(2):"0.00"):void 0,G=k==="PAGADO"?v==null?void 0:v.tasa:void 0,q=((n=m.jornadaActual)==null?void 0:n.operadorActual)||"Caja Principal",z={ventaId:t||(y?"DEU-":"CTA-")+Math.floor(1e4+Math.random()*9e4),totalUsd:d,totalBs:l,tasaDelDia:g.toFixed(4),montoRecibidoBs:_.toFixed(2),vueltoBs:x.toFixed(2),fechaHora:`Hoy, ${I}`,fechaUnix:Math.floor(w.getTime()/1e3),canal:y?"LIQUIDACION DE DEUDA":"CONSUMO EN CUENTA",operador:q,saldoAFavorConsolidadoUsd:f>0?f.toFixed(2):void 0,pagos:D,estadoVuelto:k,metodoVuelto:P,montoVueltoBs:T,montoVueltoUsd:A,tasaVuelto:G,lineas:p};if(m.tickets.unshift(z),m.jornadaActual){const B=m.jornadaActual,N=Z(d),S=Z(l);B.ventasTotalUsd=(Z(B.ventasTotalUsd)+N).toFixed(2),B.ventasTotalBs=(Z(B.ventasTotalBs)+S).toFixed(2),B.ticketsEmitidos+=1,y&&(B.deudasLiquidadasUsd=(Z(B.deudasLiquidadasUsd)+N).toFixed(2)),k==="PAGADO"?B.vueltoPagadoBs=(Z(B.vueltoPagadoBs)+x).toFixed(2):k==="RETENIDO"&&(B.vueltoRetenidoBs=(Z(B.vueltoRetenidoBs)+x).toFixed(2))}return m.persist(),Promise.resolve(z)}case"listar_categorias":return Promise.resolve(m.categorias);case"crear_categoria":{const t=String((e==null?void 0:e.nombre)||"").trim(),r="cat-"+Math.random().toString(36).slice(2,7);return m.categorias.push({id:r,nombre:t}),m.persist(),Promise.resolve(m.categorias)}case"eliminar_categoria":{const t=String((e==null?void 0:e.id)||"");return m.categorias=m.categorias.filter(r=>r.id!==t),m.persist(),Promise.resolve(m.categorias)}case"listar_tasas_impuestos":return Promise.resolve(m.tasasImpuestos);case"crear_tasa_impuesto":{const t=String((e==null?void 0:e.nombre)||"").trim(),r=Number((e==null?void 0:e.porcentaje)||0),s="tax-"+Math.random().toString(36).slice(2,7);return m.tasasImpuestos.push({id:s,nombre:t,porcentaje:String(r)}),m.persist(),Promise.resolve(m.tasasImpuestos)}case"eliminar_tasa_impuesto":{const t=String((e==null?void 0:e.id)||"");return m.tasasImpuestos=m.tasasImpuestos.filter(r=>r.id!==t),m.persist(),Promise.resolve(m.tasasImpuestos)}case"abonar_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),r=Number((e==null?void 0:e.montoUsd)||0),s=Number((e==null?void 0:e.montoBs)||0),d=m.cuentas.find(l=>l.ventaId===t);if(d&&Number.isFinite(r)&&r>0&&r<=5e4){const l=Array.isArray(d.consumos)&&d.consumos.length>0,p=Z(d.totalParcialUsd)>0;if(!l&&!p)return Promise.resolve(null);const f=Number(m.tasaActual.valor),h=Number(d.abonosUsd||"0"),g=Number(d.abonosBs||"0");if(s>0){const y=g+s;d.abonosBs=y.toFixed(2),d.abonosUsd=(f>0?y/f:0).toFixed(2)}else{const y=h+r;d.abonosUsd=y.toFixed(2),d.abonosBs=(y*f).toFixed(2)}m.persist()}return Promise.resolve(d)}case"editar_abono_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),r=Math.max(0,Math.min(5e4,Number((e==null?void 0:e.nuevoAbonoUsd)||0))),s=m.cuentas.find(d=>d.ventaId===t);if(s&&Number.isFinite(r)){const d=Number(m.tasaActual.valor);s.abonosUsd=r.toFixed(2),s.abonosBs=(r*d).toFixed(2),m.persist()}return Promise.resolve(s)}case"datos_panel":{const t=Number(m.tasaActual.valor),r=m.ventasTotalUsd,s=m.ventasTotalBs;let d=0,l=0;m.productos.forEach(S=>{const j=Number(S.precioUsd)||0,E=Number(S.precioBrutoUsd)||0;j>0&&(d+=j,E>0&&(l+=E))});const p=d>0&&l>0?(d-l)/d:0,f=r*(1-p),h=r-f,g=r*.12,y=h-g,w=h,I=y*t,D={};m.tickets.forEach(S=>{S.lineas.forEach(j=>{D[j.sku]||(D[j.sku]={qty:0,monto:0,nombre:j.nombre}),D[j.sku].qty+=Number(j.cantidad)||1,D[j.sku].monto+=Number(j.subtotalUsd)||0})}),m.productos.forEach((S,j)=>{if(!D[S.sku]){const E=Math.max(1,14-j*2);D[S.sku]={qty:E,monto:E*Number(S.precioUsd),nombre:S.nombre}}});const _=Object.values(D).sort((S,j)=>j.monto-S.monto),x=_.reduce((S,j)=>S+j.monto,0)||1,v=_.map(S=>({nombre:S.nombre,cantidad:String(S.qty),totalUsd:S.monto.toFixed(2),porcentaje:(S.monto/x*100).toFixed(1)})),k=Number(m.tasaActual.valor)||807.39;let P=0;const T={};m.categorias.forEach(S=>{T[S.id]={categoriaId:S.id,nombre:S.nombre,cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}}),T["cat-general"]||(T["cat-general"]={categoriaId:"cat-general",nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}),m.productos.forEach(S=>{const j=S.categoriaId&&T[S.categoriaId]?S.categoriaId:"cat-general",E=T[j];E.cantidadProductos+=1;const M=S.sinStock?0:Number(S.stock)||0,J=Number(S.precioBrutoUsd)>0?Number(S.precioBrutoUsd):Number(S.precioUsd)*.65,te=Number(S.precioUsd)||0,H=M*J,U=M*te;E.unidadesStock+=M,E.brutoUsd+=H,E.ventaUsd+=U,P+=H});const A=Object.values(T).filter(S=>S.cantidadProductos>0||S.brutoUsd>0).map(S=>{const j=Math.max(0,S.ventaUsd-S.brutoUsd),E=S.ventaUsd>0?(j/S.ventaUsd*100).toFixed(1):"0.0",M=P>0?(S.brutoUsd/P*100).toFixed(1):"0.0";return{categoriaId:S.categoriaId,nombre:S.nombre,cantidadProductos:S.cantidadProductos,unidadesStock:Math.round(S.unidadesStock*100)/100,dineroBrutoUsd:S.brutoUsd.toFixed(2),dineroBrutoBs:(S.brutoUsd*k).toFixed(2),dineroVentaUsd:S.ventaUsd.toFixed(2),dineroVentaBs:(S.ventaUsd*k).toFixed(2),margenBrutoProyectadoUsd:j.toFixed(2),margenBrutoPct:E,porcentajeCapital:M}}).sort((S,j)=>Number(j.dineroBrutoUsd)-Number(S.dineroBrutoUsd)),G=m.cuentas.filter(S=>S.tipo==="deuda"),q=m.cuentas.filter(S=>S.tipo!=="deuda"),z=G.reduce((S,j)=>S+Math.max(0,Z(j.totalParcialUsd)-Z(j.abonosUsd)),0),B=z*k,N={ventas24hUsd:r.toFixed(2),ventas24hBs:s.toFixed(2),tickets24h:Math.max(m.tickets.length,18),valorInventarioUsd:m.productos.reduce((S,j)=>S+Number(j.precioUsd)*Number(j.stock),0).toFixed(2),costoTotalUsd:f.toFixed(2),gananciaBrutaUsd:h.toFixed(2),gananciaNetaUsd:y.toFixed(2),gananciaNetaSinImpUsd:w.toFixed(2),gananciaNetaBs:I.toFixed(2),cuentasAbiertas:q.length,deudasAbiertas:G.length,dineroEnLaCalleUsd:z.toFixed(2),dineroEnLaCalleBs:B.toFixed(2),criticos:m.productos.filter(S=>!S.sinStock&&Number(S.stock)<=5).map(S=>({sku:S.sku,nombre:S.nombre,stock:S.stock})),topProductos:v,dineroPorCategoria:A};return Promise.resolve(N)}case"compra_stock":{const t=String((e==null?void 0:e.sku)||""),r=Number((e==null?void 0:e.cantidad)||"0"),s=m.productos.find(d=>d.sku===t);return s&&Number.isFinite(r)&&r>0?(s.stock=String(Number(s.stock)+r),m.persist(),Promise.resolve(s.stock)):Promise.resolve("0")}case"reducir_stock":{const t=String((e==null?void 0:e.sku)||""),r=Number((e==null?void 0:e.cantidad)||"0"),s=m.productos.find(d=>d.sku===t);return s&&Number.isFinite(r)&&r>0?(s.stock=String(Math.max(0,Number(s.stock)-r)),m.persist(),Promise.resolve(s.stock)):Promise.resolve("0")}case"registrar_merma":{const t=String((e==null?void 0:e.sku)||""),r=Number((e==null?void 0:e.cantidad)||"0"),s=m.productos.find(d=>d.sku===t);return s&&Number.isFinite(r)&&r>0?(s.stock=String(Math.max(0,Number(s.stock)-r)),m.persist(),Promise.resolve(s.stock)):Promise.resolve("0")}case"listar_dispositivos":return Promise.resolve(m.dispositivos);case"registrar_dispositivo":{const t=String((e==null?void 0:e.nombre)||"Dispositivo Móvil").trim(),s={id:"dev-"+Math.random().toString(36).slice(2,7),nombre:t,ip:"192.168.1."+Math.floor(Math.random()*200+20),ultimoAcceso:"Ahora mismo",activo:!0};return m.dispositivos.push(s),m.persist(),Promise.resolve(m.dispositivos)}case"revocar_dispositivo":{const t=String((e==null?void 0:e.id)||"");return m.dispositivos=m.dispositivos.filter(r=>r.id!==t),m.persist(),Promise.resolve(m.dispositivos)}case"listar_respaldos":return Promise.resolve(m.respaldos);case"crear_respaldo":{const t="bk-"+Math.random().toString(36).slice(2,7),r=m.productos.length+m.cuentas.length+m.categorias.length,s=new Date,d=(((c=m.config)==null?void 0:c.nombre)||"DATIOLABS").toUpperCase().replace(/[^A-Z0-9]/g,"-").replace(/-+/g,"-").slice(0,30),l=s.getFullYear(),p=String(s.getMonth()+1).padStart(2,"0"),f=String(s.getDate()).padStart(2,"0"),h=String(s.getHours()).padStart(2,"0"),g=String(s.getMinutes()).padStart(2,"0"),y=String(s.getSeconds()).padStart(2,"0"),w=`${d}-${l}${p}${f}-${h}${g}${y}.backup`,I={id:t,fecha:"Ahora mismo",archivoNombre:w,registros:r,tamanoKb:Math.round(r*.4+10),checksumSha256:Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join("")};return m.respaldos.unshift(I),m.persist(),Promise.resolve(I)}case"restaurar_desde_respaldo":return m.dispositivos=[],m.persist(),Promise.resolve(!0);case"obtener_licencia":return Promise.resolve(m.licencia);case"validar_licencia":{const r=String((e==null?void 0:e.clave)||"").replace(/[^a-zA-Z0-9]/g,"");if(r.length!==16)return Promise.resolve(!1);const s=r.split("").map(f=>parseInt(f,10)).filter(f=>!isNaN(f)&&f<10);if(s.length!==16)return Promise.resolve(!1);let d=0;for(let f=0;f<12;f++)d+=s[f]*(f+1);const l=d%1e4,p=s[12]*1e3+s[13]*100+s[14]*10+s[15];return Promise.resolve(l===p)}case"generar_qr_panel":{const t="room-"+Math.random().toString(36).slice(2,10),s=`${window.__SIGNALING_URL__||"https://datiolabs-signaling.apex-importvcb.workers.dev"}/ws/signaling?room=${t}`;return Promise.resolve({url:s,qrBase64:"",roomId:t})}case"obtener_tasa_bcv":return Promise.resolve(m.tasaActual);case"forzar_actualizacion_tasa":return m.refrescarTasaEnVivo().then(()=>m.tasaActual);case"listar_historico_tasas":return Promise.resolve(m.historicoTasas);case"fijar_tasa_manual":{const t=String((e==null?void 0:e.tasa)||"0"),r=Number(t),s=Number(m.tasaActual.valor);let d=null,l=null;if(Number.isFinite(s)&&s>0&&Number.isFinite(r)&&r>0&&s!==r){const h=(r-s)/s*100;d=Math.abs(h).toFixed(2),l=h>0?"subio":"bajo"}m.tasaActual={valor:r.toFixed(4),fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:d,direccion:l};const f=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});return m.historicoTasas.unshift({id:"tx-"+Math.random().toString(36).slice(2,7),valor:r.toFixed(4),fechaHora:`Hoy, ${f}`,tipo:"manual",motivo:"Ajuste manual por el usuario"}),m.historicoTasas.length>50&&m.historicoTasas.pop(),m.persist(),Promise.resolve(m.tasaActual)}case"listar_ventas":return Promise.resolve(m.tickets);case"listar_metodos_pago":return m.metodosPago.sort((t,r)=>t.moneda===r.moneda?0:t.moneda==="BS"?-1:1),Promise.resolve(m.metodosPago);case"crear_metodo_pago":{const t=String((e==null?void 0:e.nombre)||"").trim().toUpperCase().replace(/[^A-Z0-9. _-]/g,"").slice(0,25),r=(e==null?void 0:e.moneda)==="USD"?"USD":"BS";return t&&!m.metodosPago.some(s=>s.nombre===t)&&(m.metodosPago.push({nombre:t,moneda:r}),m.metodosPago.sort((s,d)=>s.moneda===d.moneda?0:s.moneda==="BS"?-1:1),m.persist()),Promise.resolve(m.metodosPago)}case"eliminar_metodo_pago":{const t=String((e==null?void 0:e.nombre)||"").trim().toUpperCase();return t&&(m.metodosPago=m.metodosPago.filter(r=>r.nombre!==t),m.metodosPago.length===0&&m.metodosPago.push({nombre:"PUNTOD.VENTA",moneda:"BS"}),m.persist()),Promise.resolve(m.metodosPago)}case"listar_operadores":return Promise.resolve(m.operadores);case"crear_operador":{const t=String((e==null?void 0:e.nombre)||"").trim();if(t){const r={id:"op-"+Math.random().toString(36).slice(2,7),nombre:t,activo:!0,creadoUnix:Math.floor(Date.now()/1e3)};m.operadores.push(r),m.persist()}return Promise.resolve(m.operadores)}case"editar_operador":{const t=String((e==null?void 0:e.id)||""),r=String((e==null?void 0:e.nombre)||"").trim();if(t&&r){const s=m.operadores.find(d=>d.id===t);if(s){const d=s.nombre;s.nombre=r,m.jornadaActual&&(m.jornadaActual.operadorActual===d&&(m.jornadaActual.operadorActual=r),m.jornadaActual.operadoresActivos&&(m.jornadaActual.operadoresActivos=m.jornadaActual.operadoresActivos.map(l=>l===d?r:l)),m.jornadaActual.operadoresRelevo&&(m.jornadaActual.operadoresRelevo=m.jornadaActual.operadoresRelevo.map(l=>l===d?r:l))),m.persist()}}return Promise.resolve(m.operadores)}case"eliminar_operador":{const t=String((e==null?void 0:e.id)||"");if(t){const r=m.operadores.find(d=>d.id===t),s=r==null?void 0:r.nombre;m.operadores=m.operadores.filter(d=>d.id!==t),m.jornadaActual&&s&&(m.jornadaActual.operadoresActivos&&(m.jornadaActual.operadoresActivos=m.jornadaActual.operadoresActivos.filter(d=>d!==s)),m.jornadaActual.operadorActual===s&&(m.jornadaActual.operadorActual=((i=m.jornadaActual.operadoresActivos)==null?void 0:i[0])||((b=m.operadores[0])==null?void 0:b.nombre)||"Cajero Principal")),m.persist()}return Promise.resolve(m.operadores)}case"alternar_operador":{const t=String((e==null?void 0:e.id)||""),r=m.operadores.find(s=>s.id===t);return r&&(r.activo=!r.activo,m.persist()),Promise.resolve(m.operadores)}case"obtener_jornada_actual":return Promise.resolve(m.jornadaActual);case"listar_historico_jornadas":{const t=new Set,r=m.historicoJornadas.filter(s=>t.has(s.id)?!1:(t.add(s.id),!0));return Promise.resolve(r)}case"abrir_jornada":{const t=String((e==null?void 0:e.operador)||"Cajero Principal").trim(),r=Array.isArray(e==null?void 0:e.operadores)&&e.operadores.length>0?e.operadores.map(w=>String(w).trim()).filter(Boolean):[t],s=new Date,d=s.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),l=`${s.toLocaleDateString("es-VE")} ${d}`,p=s.getFullYear(),f=String(s.getMonth()+1).padStart(2,"0"),h=String(s.getDate()).padStart(2,"0"),g=m.tasaActual.valor,y={id:`JOR-${p}${f}${h}-${Math.random().toString(36).slice(2,6).toUpperCase()}`,estado:"abierta",inicioUnix:Math.floor(Date.now()/1e3),inicioStr:`Hoy, ${d} (${l})`,operadorInicial:r[0]||t,operadorActual:r.join(", "),operadoresActivos:r,operadoresRelevo:[...r],tasaInicio:g,ventasTotalUsd:"0.00",ventasTotalBs:"0.00",ticketsEmitidos:0,vueltoPagadoBs:"0.00",vueltoRetenidoBs:"0.00",deudasLiquidadasUsd:"0.00",entradasStockReg:0,mermasStockReg:0,cambiosPrecioReg:0};return m.jornadaActual=y,m.persist(),Promise.resolve(y)}case"asignar_operadores_turno":{const t=Array.isArray(e==null?void 0:e.operadores)?e.operadores.map(r=>String(r).trim()).filter(Boolean):[];return m.jornadaActual&&(m.jornadaActual.operadoresActivos=t,m.jornadaActual.operadorActual=t.length>0?t.join(", "):"Sin operador asignado",t.forEach(r=>{var s,d;(s=m.jornadaActual)!=null&&s.operadoresRelevo.includes(r)||(d=m.jornadaActual)==null||d.operadoresRelevo.push(r)}),m.persist()),Promise.resolve(m.jornadaActual)}case"relevar_operador_jornada":{const t=String((e==null?void 0:e.operador)||"").trim();return m.jornadaActual&&t&&(m.jornadaActual.operadorActual=t,m.jornadaActual.operadoresActivos=[t],m.jornadaActual.operadoresRelevo.includes(t)||m.jornadaActual.operadoresRelevo.push(t),m.persist()),Promise.resolve(m.jornadaActual)}case"cerrar_jornada":{if(!m.jornadaActual)return Promise.reject(new Error("No existe una jornada laboral abierta para cerrar."));const t=new Date,r=t.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),s=`${t.toLocaleDateString("es-VE")} ${r}`,d={...m.jornadaActual};return d.estado="cerrada",d.finUnix=Math.floor(Date.now()/1e3),d.finStr=`${s}`,d.tasaFin=m.tasaActual.valor,d.checksumSha256=Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join(""),m.historicoJornadas.unshift(d),m.jornadaActual=null,m.persist(),Promise.resolve(d)}case"obtener_semaforo_stock":return Promise.resolve(m.semaforoStock);case"guardar_semaforo_stock":{const t=Math.max(1,Number(e==null?void 0:e.rojoMax)||5),r=Math.max(t+1,Number(e==null?void 0:e.amarilloMax)||15);return m.semaforoStock={rojoMax:t,amarilloMax:r},m.persist(),Promise.resolve(m.semaforoStock)}default:return Promise.resolve(null)}}const L={config:()=>F("obtener_config"),inicializar:(u,e,o,a,n)=>F("inicializar_negocio",{nombre:u,rubros:e,pinDueno:o||null,licenciaClave:a||null,licenciaTitular:null,privacidadInventario:n??!1}),validarPin:u=>F("validar_pin_dueno",{pin:u}),productos:()=>F("listar_productos"),crearProducto:u=>{const e=u.sku&&u.sku.trim()?u.sku.trim().toUpperCase():"PROD-"+Math.random().toString(36).slice(2,8).toUpperCase();return F("crear_producto",{input:{...u,sku:e}})},eliminarProducto:u=>F("eliminar_producto",{sku:u}),registrarVenta:(u,e,o,a,n,c)=>F("registrar_venta",{items:u,montoRecibidoBs:o,pagos:a,resolucionVuelto:n,idempotencyKey:c}),abrirCuenta:(u,e,o,a)=>F("abrir_cuenta",{etiqueta:u,tipo:e,nota:o,cliente:a}),cuentas:()=>F("listar_cuentas"),agregarConsumo:(u,e,o,a,n)=>F("agregar_consumo",{ventaId:u,sku:e,cantidad:o,clienteMayorEdad:a,modo_venta:n}),eliminarConsumo:(u,e)=>F("eliminar_consumo",{ventaId:u,consumoId:e}),abonarCuenta:(u,e,o)=>F("abonar_cuenta",{ventaId:u,montoUsd:e,montoBs:o}),editarAbonoCuenta:(u,e)=>F("editar_abono_cuenta",{ventaId:u,nuevoAbonoUsd:e}),cerrarCuenta:(u,e,o,a,n)=>F("cerrar_cuenta",{ventaId:u,montoRecibidoBs:e,tasaCobro:o,pagos:a,resolucionVuelto:n}),panel:()=>F("datos_panel"),compraStock:(u,e)=>F("compra_stock",{sku:u,cantidad:e}),reducirStock:(u,e)=>F("reducir_stock",{sku:u,cantidad:e}),merma:(u,e,o)=>F("registrar_merma",{sku:u,cantidad:e,loteId:o}),categorias:()=>F("listar_categorias"),crearCategoria:u=>F("crear_categoria",{nombre:u}),eliminarCategoria:u=>F("eliminar_categoria",{id:u}),tasasImpuestos:()=>F("listar_tasas_impuestos"),crearTasaImpuesto:(u,e)=>F("crear_tasa_impuesto",{nombre:u,porcentaje:e}),eliminarTasaImpuesto:u=>F("eliminar_tasa_impuesto",{id:u}),dispositivos:()=>F("listar_dispositivos"),registrarDispositivo:u=>F("registrar_dispositivo",{nombre:u}),revocarDispositivo:u=>F("revocar_dispositivo",{id:u}),respaldos:()=>F("listar_respaldos"),crearRespaldo:()=>F("crear_respaldo"),restaurarRespaldo:u=>F("restaurar_desde_respaldo",{archivo:u}),restaurarDesdeArchivo:(u,e)=>F("restaurar_desde_archivo",{contenidoBase64:u,nombreArchivo:e}),licencia:()=>F("obtener_licencia"),validarLicencia:u=>F("validar_licencia",{clave:u}),generarQr:()=>F("generar_qr_panel"),cambiarPinDueno:(u,e)=>F("cambiar_pin_dueno",{pinAnterior:u,pinNuevo:e}),actualizarPrivacidadInventario:u=>fetch("/api/config/privacidad",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({privacidadInventario:u})}).then(e=>e.json()),tasa:()=>F("obtener_tasa_bcv"),historicoTasas:()=>F("listar_historico_tasas"),forzarTasa:()=>F("forzar_actualizacion_tasa"),fijarTasaManual:u=>F("fijar_tasa_manual",{tasa:u}),ventas:()=>F("listar_ventas"),listarMetodosPago:()=>F("listar_metodos_pago"),crearMetodoPago:(u,e="BS")=>F("crear_metodo_pago",{nombre:u,moneda:e}),eliminarMetodoPago:u=>F("eliminar_metodo_pago",{nombre:u}),listarOperadores:()=>F("listar_operadores"),crearOperador:u=>F("crear_operador",{nombre:u}),editarOperador:(u,e)=>F("editar_operador",{id:u,nombre:e}),eliminarOperador:u=>F("eliminar_operador",{id:u}),alternarOperador:u=>F("alternar_operador",{id:u}),obtenerJornadaActual:()=>F("obtener_jornada_actual"),listarHistoricoJornadas:()=>F("listar_historico_jornadas"),abrirJornada:(u,e)=>F("abrir_jornada",{operador:u,operadores:e}),relevarOperadorJornada:u=>F("relevar_operador_jornada",{operador:u}),asignarOperadoresTurno:u=>F("asignar_operadores_turno",{operadores:u}),cerrarJornada:()=>F("cerrar_jornada"),obtenerSemaforoStock:()=>F("obtener_semaforo_stock"),guardarSemaforoStock:(u,e)=>F("guardar_semaforo_stock",{rojoMax:u,amarilloMax:e}),autoBackup:(u,e)=>F("auto_backup",{directorio:u,maxBackups:e}),getBackupDir:()=>F("get_backup_dir")},Ve="#00823B",Ge="#C60C15",He="#6B7280",ze=3e5;class Je{constructor(){C(this,"contenedor");C(this,"timer",null);this.contenedor=document.getElementById("bcv-indicator")}iniciar(){this.contenedor&&(this.renderizarEsqueleto(),this.actualizar(),this.timer=window.setInterval(()=>void this.actualizar(),ze))}detener(){this.timer!==null&&(window.clearInterval(this.timer),this.timer=null)}renderizarEsqueleto(){var e,o;this.contenedor&&(this.contenedor.innerHTML=`
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
            </div>`,(e=document.getElementById("bcv-refresh"))==null||e.addEventListener("click",()=>void this.forzar()),(o=document.getElementById("bcv-valor"))==null||o.addEventListener("click",()=>void this.abrirModalHistoricoYAjuste()))}async abrirModalHistoricoYAjuste(){var i,b,t;const e=document.getElementById("modal-root");if(!e)return;const o=await L.historicoTasas().catch(()=>[]),a=((i=document.getElementById("bcv-valor"))==null?void 0:i.textContent)||"--";e.innerHTML=`
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

Esta tasa afectará todos los nuevos cobros y tickets a partir de este momento.`)){const p=await F("fijar_tasa_manual",{tasa:d.toFixed(2)});p&&this.pintar(p),n()}})}async actualizar(){const e=await this.obtenerTasa("obtener_tasa_bcv");e&&this.pintar(e)}async forzar(){const e=document.getElementById("bcv-refresh");e&&e.classList.add("animate-spin");const o=await this.obtenerTasa("forzar_actualizacion_tasa");e&&e.classList.remove("animate-spin"),o&&this.pintar(o)}async obtenerTasa(e){try{return await F(e)}catch{return null}}pintar(e){const o=document.getElementById("bcv-valor"),a=document.getElementById("bcv-fluctuacion");if(!o||!a)return;const n=Number(e.valor);o.textContent=Number.isFinite(n)&&n>0?n.toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}):"--",Number.isFinite(n)&&n>0&&window.dispatchEvent(new CustomEvent("tasa_actualizada",{detail:n}));const c=Number(e.fluctuacionPct);if(e.direccion&&Number.isFinite(c)){const i=e.direccion==="subio"?Ve:e.direccion==="bajo"?Ge:He,b=c>0?"+":"";a.textContent=`${b}${c.toFixed(2)}%`,a.style.color=i}else a.textContent=""}}class Ke{constructor(){C(this,"config",null);C(this,"rol","caja");C(this,"tasa",0);C(this,"oyentes",[])}suscribir(e){this.oyentes.push(e)}notificar(){this.oyentes.forEach(e=>e())}async cargarConfig(){return this.config=await L.config(),this.config}getConfig(){return this.config}async inicializar(e,o,a,n,c){await L.inicializar(e,o,a,n,c),await this.cargarConfig(),this.notificar()}get rubroAbasto(){var e,o;return(((e=this.config)==null?void 0:e.rubros)??0&ye)!==0||(((o=this.config)==null?void 0:o.rubros)??0)===ye}tieneRubro(e){var o;return((((o=this.config)==null?void 0:o.rubros)??0)&e)!==0}tieneCapacidad(e){var o;return((((o=this.config)==null?void 0:o.capacidades)??0)&e)!==0}setRol(e){this.rol=e,this.notificar()}get rolActual(){return this.rol}setTasa(e){this.tasa=e,this.notificar()}get tasaActual(){return this.tasa}bs(e){return(Number(e)*this.tasa).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}hasPinSet(){var e;return!!((e=this.config)!=null&&e.tienePin)}async verificarPin(e){return L.validarPin(e)}}function We(u,e){const o=u.replace(/[^a-zA-Z0-9]/g,"");if(o.length!==16)return!1;const a=o.split("").map(b=>parseInt(b,10)).filter(b=>!isNaN(b)&&b<10);if(a.length!==16)return!1;let n=0;for(let b=0;b<12;b++)n+=a[b]*(b+1);const c=n%1e4,i=a[12]*1e3+a[13]*100+a[14]*10+a[15];return c===i}class Ze{constructor(e,o,a){C(this,"contenedor");C(this,"modelo");C(this,"alTerminar");C(this,"modo","nuevo");C(this,"bloquearPanel",!0);this.contenedor=e,this.modelo=o,this.alTerminar=a}render(){this.contenedor.innerHTML=`
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
                            ${this.tarjetaRubro("wz-abasto","Abasto","Comestibles y peso",ye,"bg-brand-cyan")}
                            ${this.tarjetaRubro("wz-panaderia","Panadería","Horneados FEFO",Ce,"bg-brand-yellow")}
                            ${this.tarjetaRubro("wz-licoreria","Licorería","Cuentas y consumo",$e,"bg-brand-pink")}
                            ${this.tarjetaRubro("wz-retail","Retail","Series y garantías",Be,"bg-purple-100")}
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
        </label>`}conectarEventos(){var p,f;const e=document.getElementById("wz-tab-nuevo"),o=document.getElementById("wz-tab-restaurar");e==null||e.addEventListener("click",()=>{this.modo="nuevo",this.render()}),o==null||o.addEventListener("click",()=>{this.modo="restaurar",this.render()});const a=document.getElementById("seg-bloqueado"),n=document.getElementById("seg-abierto"),c=document.getElementById("wz-box-pin");a==null||a.addEventListener("change",()=>{this.bloquearPanel=!0,c==null||c.classList.remove("hidden")}),n==null||n.addEventListener("change",()=>{this.bloquearPanel=!1,c==null||c.classList.add("hidden")});const i=document.getElementById("seg-bloqueado-res"),b=document.getElementById("seg-abierto-res"),t=document.getElementById("wz-box-pin-res");i==null||i.addEventListener("change",()=>{this.bloquearPanel=!0,t==null||t.classList.remove("hidden")}),b==null||b.addEventListener("change",()=>{this.bloquearPanel=!1,t==null||t.classList.add("hidden")}),(p=document.getElementById("wz-iniciar"))==null||p.addEventListener("click",()=>void this.enviarNuevo());const r=document.getElementById("drop-zona"),s=document.getElementById("wz-archivo-input"),d=document.getElementById("wz-archivo-cargado"),l=document.getElementById("wz-nombre-archivo");r==null||r.addEventListener("click",()=>s==null?void 0:s.click()),s==null||s.addEventListener("change",()=>{if(s.files&&s.files[0]){const h=s.files[0];l&&d&&(l.textContent=h.name,d.classList.remove("hidden"))}}),(f=document.getElementById("wz-ejecutar-restaurar"))==null||f.addEventListener("click",()=>void this.enviarRestauracion())}async enviarNuevo(){const e=document.getElementById("wz-error"),o=document.getElementById("wz-nombre").value.trim(),a=document.getElementById("wz-pin"),n=this.bloquearPanel&&(a==null?void 0:a.value.trim())||"",c=[...this.contenedor.querySelectorAll("input[type=checkbox]:checked")].reduce((r,s)=>r|Number(s.dataset.bit),0),i=document.getElementById("wz-licencia"),b=(i==null?void 0:i.value.trim())||"",t=document.getElementById("wz-licencia-error");if(!o||c===0){e&&(e.textContent="Escribe el nombre del negocio y marca al menos un rubro.",e.classList.remove("hidden"));return}if(this.bloquearPanel&&!n){e&&(e.textContent='Ingresa una clave para proteger el panel o selecciona la opción "DEJAR ABIERTO".',e.classList.remove("hidden"));return}if(b&&!We(b)){t&&t.classList.remove("hidden");return}t&&t.classList.add("hidden");try{const r=document.getElementById("priv-inv-dueno"),s=(r==null?void 0:r.checked)??!0;await this.modelo.inicializar(o,c,n,b,s);const d=this.modelo.getConfig();d&&this.alTerminar(d)}catch(r){e&&(e.textContent=r instanceof Error?r.message:String(r),e.classList.remove("hidden"))}}async enviarRestauracion(){var i;const e=document.getElementById("wz-restore-error"),o=document.getElementById("wz-archivo-input"),a=document.getElementById("wz-pin-restaurar"),n=this.bloquearPanel&&(a==null?void 0:a.value.trim())||"",c=(i=o==null?void 0:o.files)==null?void 0:i[0];if(!c){e&&(e.textContent="Selecciona un archivo de respaldo.",e.classList.remove("hidden"));return}if(this.bloquearPanel&&!n){e&&(e.textContent='Ingresa una clave para el panel en este terminal o selecciona "DEJAR ABIERTO".',e.classList.remove("hidden"));return}try{const b=await new Promise((r,s)=>{const d=new FileReader;d.onload=()=>{const l=d.result;if(typeof l=="string"){const p=l.split(",")[1]||"";r(p)}else s(new Error("Error leyendo archivo"))},d.onerror=()=>s(new Error("No se pudo leer el archivo")),d.readAsDataURL(c)});await L.restaurarDesdeArchivo(b,c.name);const t=await L.config();if(t)this.alTerminar(t);else throw new Error("Respaldo restaurado pero no se pudo cargar la configuración")}catch(b){e&&(e.textContent=b instanceof Error?b.message:String(b),e.classList.remove("hidden"))}}}class Qe{constructor(e){C(this,"modelo");C(this,"productos",[]);C(this,"carrito",[]);C(this,"busqueda","");C(this,"cuentaSeleccionada",null);C(this,"cuentas",[]);C(this,"oyentes",[]);C(this,"edadConfirmadaSesion",!1);C(this,"tasaBloqueadaTicket",null);this.modelo=e}suscribir(e){this.oyentes.push(e),e()}notificar(){this.oyentes.forEach(e=>e())}async cargar(){this.productos=await L.productos(),this.modelo.tieneCapacidad(re)&&(this.cuentas=await L.cuentas()),this.notificar()}get visibles(){const e=this.busqueda.trim().toLowerCase();return e?this.productos.filter(o=>o.nombre.toLowerCase().includes(e)||o.sku.toLowerCase().includes(e)).slice(0,24):this.productos.slice(0,24)}setBusqueda(e){this.busqueda=e,this.notificar()}get lineasCarrito(){return this.carrito}get tasaTicket(){return this.tasaBloqueadaTicket??this.modelo.tasaActual}get totalUsd(){return this.carrito.reduce((e,o)=>e+o.precioUsd*o.cantidad,0)}get totalBs(){return this.totalUsd*this.tasaTicket}get cuentasAbiertasListado(){return this.cuentas}get cuentaActiva(){return this.cuentaSeleccionada}get modoCuentaAbierta(){return this.cuentaSeleccionada!==null}seleccionarCuenta(e){this.cuentaSeleccionada=e,this.notificar()}requiereEdad(e){return!1}marcarEdadConfirmada(e){this.edadConfirmadaSesion=e}async agregar(e,o="unidad"){const a=this.productos.find(n=>n.sku===e);return a?this.requiereEdad(a)?"EDAD|"+a.nombre:this.empujar(a,void 0,void 0,o):"Producto no encontrado"}empujar(e,o,a,n="unidad"){const c=n==="paquete"&&(e.precioPaqueteUsd||e.esCaja&&e.unidadesPorCaja&&e.unidadesPorCaja>1),i=c&&e.unidadesPorCaja||1,b=c?e.precioPaqueteUsd?Number(e.precioPaqueteUsd):Number(e.precioUsd)*i:Number(e.precioUsd),t=!c&&((e.capacidades&ce)!==0||e.unidad==="kg"||e.unidad==="ml"),r=t?.25:1,s=this.carrito.find(p=>p.sku===e.sku&&p.serie===o&&p.variante===a&&p.modoVenta===n),l=(s?s.cantidad:0)+r;if(!e.sinStock){const p=Number(e.stock);if(p<l*i)return`Stock insuficiente para ${e.nombre}. Disponible: ${p}, Solicitado: ${l*i}`}return this.tasaBloqueadaTicket===null&&(this.tasaBloqueadaTicket=this.modelo.tasaActual),s?s.cantidad=t?Math.round(l*1e3)/1e3:Math.round(l):this.carrito.push({sku:e.sku,nombre:e.nombre,precioUsd:b,cantidad:t?r:Math.round(r),pesable:t,conSerie:(e.capacidades&ge)!==0,conVariantes:(e.capacidades&ke)!==0,serie:o,variante:a,modoVenta:n}),this.notificar(),null}asignarSerie(e,o){const a=this.carrito.find(n=>n.sku===e);a&&(a.serie=o.trim().toUpperCase(),this.notificar())}asignarVariante(e,o){const a=this.carrito.find(n=>n.sku===e);a&&(a.variante=o.trim(),this.notificar())}cambiarCantidad(e,o){const a=this.carrito.find(i=>i.sku===e);if(!a)return null;const n=this.productos.find(i=>i.sku===e);let c=Math.max(0,o);return a.pesable?c=Math.round(c*1e3)/1e3:c=Math.round(c),n&&!n.sinStock&&c>Number(n.stock)?`Stock insuficiente para ${a.nombre}. Disponible: ${n.stock}`:(a.cantidad=c,a.cantidad===0?this.quitar(e):this.notificar(),null)}quitar(e){this.carrito=this.carrito.filter(o=>o.sku!==e),this.carrito.length===0&&(this.tasaBloqueadaTicket=null),this.notificar()}vaciar(){this.carrito=[],this.tasaBloqueadaTicket=null,this.notificar()}async cobrar(e,o,a){if(this.modoCuentaAbierta&&this.cuentaSeleccionada)throw new Error("Hay una cuenta abierta seleccionada. Usa su boton de cobro.");if(this.carrito.length===0)throw new Error("Carrito vacio");for(const c of this.carrito){const i=this.productos.find(b=>b.sku===c.sku);if(i&&!i.sinStock&&c.cantidad>Number(i.stock))throw new Error(`Stock insuficiente para ${i.nombre}. Disponible: ${i.stock}, En carrito: ${c.cantidad}`)}const n=await L.registrarVenta(this.carrito.map(c=>({sku:c.sku,cantidad:String(c.cantidad),modo_venta:c.modoVenta})),this.edadConfirmadaSesion,e||"0",o,a,`sale-${Date.now()}-${Math.random().toString(36).slice(2,8)}`);return this.vaciar(),this.edadConfirmadaSesion=!1,await this.refrescarInventario(),n}async crearCuenta(e){const o=await L.abrirCuenta(e);this.cuentas.some(a=>a.ventaId===o.ventaId)||this.cuentas.push(o),this.cuentaSeleccionada=o,this.notificar()}async agregarACuenta(e,o="unidad"){if(!this.cuentaSeleccionada)return"Selecciona una cuenta primero";const a=this.productos.find(c=>c.sku===e);if(!a)return"Producto no encontrado";if(this.requiereEdad(a))return"EDAD|"+a.nombre;const n=await L.agregarConsumo(this.cuentaSeleccionada.ventaId,a.sku,"1",this.edadConfirmadaSesion,o);return this.cuentaSeleccionada=n,this.cuentas=this.cuentas.map(c=>c.ventaId===n.ventaId?n:c),await this.refrescarInventario(),null}async cerrarCuentaActual(e,o){if(!this.cuentaSeleccionada)throw new Error("Ninguna cuenta seleccionada");const a=await L.cerrarCuenta(this.cuentaSeleccionada.ventaId,e||"0",void 0,o);return this.cuentas=this.cuentas.filter(n=>n.ventaId!==a.ventaId),this.cuentaSeleccionada=null,this.edadConfirmadaSesion=!1,await this.refrescarInventario(),a}async refrescarInventario(){this.productos=await L.productos(),this.notificar()}}const Y=u=>Z(u).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2});class Xe{constructor(e,o,a,n){C(this,"contenedor");C(this,"vm");C(this,"modelo");C(this,"modal");C(this,"pagosBorrador",null);C(this,"resolucionVueltoBorrador",null);C(this,"semaforoStock",{rojoMax:5,amarilloMax:15});this.contenedor=e,this.modal=o,this.vm=a,this.modelo=n,L.obtenerSemaforoStock().then(c=>{this.semaforoStock=c,this.renderDinamico()}),this.vm.suscribir(()=>this.renderDinamico()),this.modelo.suscribir(()=>this.renderDinamico())}render(){var e,o,a,n,c;this.contenedor.innerHTML=`
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
        </div>`,(e=document.getElementById("caja-buscar"))==null||e.addEventListener("input",i=>{this.vm.setBusqueda(i.target.value)}),(o=document.getElementById("caja-buscar"))==null||o.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),this.enterRapido())}),(a=document.getElementById("caja-vaciar"))==null||a.addEventListener("click",()=>{this.pagosBorrador=null,this.resolucionVueltoBorrador=null,this.vm.vaciar()}),(n=document.getElementById("caja-cobrar"))==null||n.addEventListener("click",()=>void this.abrirModalCobro()),(c=document.getElementById("btn-gestionar-operadores-caja"))==null||c.addEventListener("click",()=>void(async()=>{await L.obtenerJornadaActual()===null?this.abrirModalIniciarJornada():this.abrirModalOperadoresCaja()})()),this.renderDinamico()}async enterRapido(){const e=this.vm.visibles;if(e.length===0)return;const o=await this.vm.agregar(e[0].sku);o&&this.mostrarError(o);const a=document.getElementById("caja-buscar");a&&(a.value=""),this.vm.setBusqueda("")}mostrarError(e){if(e.startsWith("EDAD|")){this.modalEdad(e.slice(5));return}this.renderModal(`
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
            </div>`),(o=this.modal.querySelector("[data-no]"))==null||o.addEventListener("click",()=>this.cerrarModal()),(a=this.modal.querySelector("[data-si]"))==null||a.addEventListener("click",()=>{this.vm.marcarEdadConfirmada(!0),(async()=>{const n=this.vm.visibles;n[0]&&this.vm.empujar(n[0])})(),this.cerrarModal()})}async abrirModalOperadoresCaja(){const e=await L.listarOperadores(),o=await L.obtenerJornadaActual(),a=new Set((o==null?void 0:o.operadoresActivos)||[(o==null?void 0:o.operadorActual)||""]);(()=>{var i,b,t,r;const c=e.map(s=>{const d=a.has(s.nombre);return`
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
            `,"max-w-md"),(i=this.modal.querySelector("[data-cerrar]"))==null||i.addEventListener("click",()=>this.cerrarModal()),(b=this.modal.querySelector("#btn-cancelar-operadores-caja"))==null||b.addEventListener("click",()=>this.cerrarModal()),this.modal.querySelectorAll("button[data-cajero-edit]").forEach(s=>{s.addEventListener("click",async()=>{const d=s.dataset.cajeroEdit||"",l=s.dataset.cajeroNom||"",p=window.prompt("Modificar nombre del operador:",l);p&&p.trim()&&p.trim()!==l&&(await L.editarOperador(d,p.trim()),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())})}),this.modal.querySelectorAll("button[data-cajero-del]").forEach(s=>{s.addEventListener("click",async()=>{const d=s.dataset.cajeroDel||"",l=s.dataset.cajeroNom||"";window.confirm(`¿Confirmas eliminar al operador "${l}"?`)&&(await L.eliminarOperador(d),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())})}),(t=this.modal.querySelector("#form-nuevo-cajero-caja"))==null||t.addEventListener("submit",async s=>{s.preventDefault();const d=this.modal.querySelector("#in-nuevo-cajero-caja"),l=(d==null?void 0:d.value.trim())||"";l&&(await L.crearOperador(l),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())}),(r=this.modal.querySelector("#btn-guardar-operadores-caja"))==null||r.addEventListener("click",async()=>{const s=this.modal.querySelectorAll("input[data-cajero-chk]:checked"),d=[];if(s.forEach(l=>{l.value&&d.push(l.value)}),d.length===0){this.mostrarToast("Debes seleccionar al menos un operador activo en turno.","error");return}await L.asignarOperadoresTurno(d),this.cerrarModal(),this.renderDinamico()})})()}async abrirModalIniciarJornada(){const e=await L.listarOperadores();(()=>{var n,c,i,b;const a=e.length>0?e.map((t,r)=>`
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
            `,"max-w-md"),(n=this.modal.querySelector("[data-cerrar]"))==null||n.addEventListener("click",()=>this.cerrarModal()),(c=this.modal.querySelector("#btn-cancelar-inicio-jornada"))==null||c.addEventListener("click",()=>this.cerrarModal()),(i=this.modal.querySelector("#form-nuevo-cajero-inicio"))==null||i.addEventListener("submit",async t=>{t.preventDefault();const r=this.modal.querySelector("#in-nuevo-cajero-inicio"),s=(r==null?void 0:r.value.trim())||"";s&&(await L.crearOperador(s),this.cerrarModal(),this.abrirModalIniciarJornada())}),(b=this.modal.querySelector("#btn-abrir-turno"))==null||b.addEventListener("click",async()=>{const t=this.modal.querySelectorAll("input[data-inicio-cajero-chk]:checked"),r=[];if(t.forEach(d=>{d.value&&r.push(d.value)}),r.length===0){this.mostrarToast("Selecciona al menos un operador para abrir el turno.","error");return}const s=r[0];await L.abrirJornada(s,r),this.cerrarModal(),this.renderDinamico()})})()}async abrirModalCobro(){var f,h,g,y;if(this.vm.lineasCarrito.length===0)return;let e=[];try{e=await L.listarMetodosPago()}catch{e=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}const o=Number(this.vm.totalUsd.toFixed(2)),a=this.vm.tasaTicket,n=Number((o*a).toFixed(2)),c=e.find(w=>w.nombre==="BIOPAGO")||e.find(w=>w.moneda==="BS")||e[0]||{nombre:"BIOPAGO",moneda:"BS"};let i;if(this.pagosBorrador&&this.pagosBorrador.length>0){if(i=this.pagosBorrador.map(w=>({...w})),i.length===1&&i[0]){const w=i[0];w.monto=w.moneda==="USD"?o:n,w.tasaCambio=a}else if(i.length>1){let w=0;for(let _=0;_<i.length-1;_++){const x=i[_],v=x.tasaCambio>0?x.tasaCambio:a;w+=x.moneda==="USD"?x.monto*v:x.monto}const I=Math.max(0,Math.round((n-w)*100)/100),D=i[i.length-1];D&&(D.monto=D.moneda==="USD"?a>0?Number((I/a).toFixed(2)):0:I,D.tasaCambio=a)}}else i=[{id:"p-1",metodo:c.nombre,moneda:c.moneda,monto:c.moneda==="USD"?o:n,tasaCambio:a,referencia:""}];let b=((f=this.resolucionVueltoBorrador)==null?void 0:f.estado)||"PAGADO",t=((h=this.resolucionVueltoBorrador)==null?void 0:h.metodo)||"BS.EFEC.",r=((g=this.resolucionVueltoBorrador)==null?void 0:g.tasa)||a;e.some(w=>w.nombre===t)||(t=((y=e[0])==null?void 0:y.nombre)||"BS.EFEC.");let s=!1;const d=()=>{let w=0;for(const P of i)if(P.moneda==="USD"){const T=P.tasaCambio>0?P.tasaCambio:a;w+=P.monto*T}else w+=P.monto;w=Math.round(w*100)/100;const I=a>0?Math.round(w/a*100)/100:0,D=Math.max(0,Math.round((n-w)*100)/100),_=a>0?Math.max(0,Math.round(D/a*100)/100):0,x=Math.max(0,Math.round((w-n)*100)/100),v=a>0?Math.max(0,Math.round(x/a*100)/100):0,k=w>=n-.01&&i.every(P=>P.monto>0);return{cubiertoUsd:I,cubiertoBs:w,faltanteUsd:_,faltanteBs:D,vueltoUsd:v,vueltoBs:x,puedeConfirmar:k}},l=()=>{const w=d(),I=e.filter(A=>A.moneda==="USD"),D=e.filter(A=>A.moneda==="BS"),_=i.map((A,G)=>{const q=I.map(E=>`<option value="${E.nombre}" ${E.nombre===A.metodo?"selected":""}>${E.nombre} ($ - Tasa Dinámica)</option>`).join(""),B=`
                        <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                            ${D.map(E=>`<option value="${E.nombre}" ${E.nombre===A.metodo?"selected":""}>${E.nombre} (Bs.)</option>`).join("")}
                        </optgroup>
                        <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                            ${q}
                        </optgroup>
                    `,N=A.tasaCambio>0?A.tasaCambio:a,S=A.moneda==="USD"?A.monto*N:A.monto,j=a>0?S/a:0;return`
                    <div class="border-2 border-brand-black rounded-lg p-3 bg-gray-50 mb-2.5">
                        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span class="font-heading font-black text-xs uppercase text-gray-700">
                                Pago #${G+1} · <span class="${A.moneda==="USD"?"text-brand-purple":"text-brand-black"}">${A.moneda==="USD"?"Divisa ($ USD)":"Moneda Nacional (Bs.)"}</span>
                            </span>
                            ${i.length>1?`<button data-eliminar-pago="${A.id}" class="text-xs font-black text-red-600 hover:text-red-800 bg-red-50 border border-red-300 rounded px-2 py-0.5">Eliminar</button>`:""}
                        </div>
                        ${A.moneda==="USD"?`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Divisa</label>
                                <select data-pago-metodo="${A.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${B}
                                </select>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto ($ USD)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">$</span>
                                    <input type="number" step="0.01" min="0.01" max="999999" data-pago-monto="${A.id}" value="${A.monto>0?A.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <div class="flex items-center justify-between mb-0.5">
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase">Tasa (Bs./$)</label>
                                    <button type="button" data-reset-tasa="${A.id}" class="text-[9px] font-black uppercase text-brand-purple hover:underline" title="Restablecer a tasa BCV oficial">BCV: ${Y(a)}</button>
                                </div>
                                <input type="number" step="0.01" min="1" max="100000" data-pago-tasa="${A.id}" value="${N>0?N:a}"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${A.id}" value="${A.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-purple">Aporte: Bs. ${Y(S)}</span>
                            <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${Y(j)} ${N!==a?`(Tasa: Bs. ${Y(N)} vs BCV: Bs. ${Y(a)})`:""}</span>
                        </div>
                        `:`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-5">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Bolívares</label>
                                <select data-pago-metodo="${A.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${B}
                                </select>
                            </div>
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto (Bs.)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">Bs.</span>
                                    <input type="number" step="0.01" min="0.01" max="999999999" data-pago-monto="${A.id}" value="${A.monto>0?A.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${A.id}" value="${A.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-black">Aporte directo: Bs. ${Y(A.monto)}</span>
                            <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${Y(j)}</span>
                        </div>
                        `}
                    </div>`}).join(""),x=e.find(A=>A.nombre===t),v=(x==null?void 0:x.moneda)==="USD",k=r>0?r:a,P=v&&k>0?Number((w.vueltoBs/k).toFixed(2)):w.vueltoUsd,T=w.faltanteBs>.009?`
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
                                    ${e.map(A=>`
                                        <option value="${A.nombre}" ${A.nombre===t?"selected":""}>
                                            ${A.nombre} (${A.moneda==="USD"?"$ Dólares":"Bs. Bolívares"})
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
                                        $ ${Y(P)} USD
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
                        ${_}
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
                                    ${e.map(A=>`
                                        <span class="inline-flex items-center gap-1 border border-brand-black rounded px-2 py-0.5 text-[11px] font-bold bg-white">
                                            <span>${A.nombre}</span>
                                            <span class="text-[9px] text-gray-500">(${A.moneda})</span>
                                            <button data-caja-eliminar-metodo="${A.nombre}" title="Eliminar método" class="text-red-600 hover:text-red-800 font-bold ml-0.5">✕</button>
                                        </span>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                    </div>`:""}

                    <!-- Indicador de Cobertura y Vuelto -->
                    ${T}

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
                </div>`,"max-w-xl"),p()},p=()=>{var _,x,v,k,P,T,A,G,q,z;const w=()=>{this.pagosBorrador=i,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},this.cerrarModal()};this.modal.querySelectorAll("[data-cerrar]").forEach(B=>B.addEventListener("click",w)),(_=this.modal.querySelector("[data-cancelar]"))==null||_.addEventListener("click",w),(x=this.modal.querySelector("#btn-volver-caja"))==null||x.addEventListener("click",()=>{this.pagosBorrador=i,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},this.cerrarModal();const B=document.getElementById("caja-buscar");B==null||B.focus()}),(v=this.modal.querySelector("#btn-vuelto-pagado"))==null||v.addEventListener("click",()=>{b="PAGADO",this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},l()}),(k=this.modal.querySelector("#btn-vuelto-retenido"))==null||k.addEventListener("click",()=>{b="RETENIDO",this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},l()}),(P=this.modal.querySelector("#select-metodo-vuelto"))==null||P.addEventListener("change",B=>{t=B.target.value,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},l()});const I=this.modal.querySelector("#input-tasa-vuelto");I&&(I.addEventListener("input",B=>{const N=Z(B.target.value);r=N>0?N:a,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r}}),I.addEventListener("blur",()=>{l()})),(T=this.modal.querySelector("#btn-reset-tasa-vuelto"))==null||T.addEventListener("click",()=>{r=a,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:r},l()}),this.modal.querySelectorAll("select[data-pago-metodo]").forEach(B=>{B.addEventListener("change",N=>{const S=B.dataset.pagoMetodo,j=N.target.value,E=i.find(M=>M.id===S);if(E){const M=e.find(te=>te.nombre===j),J=(M==null?void 0:M.moneda)||"BS";E.moneda=J,E.tasaCambio=a,i.length===1?E.monto=E.moneda==="USD"?o:n:J!==E.moneda&&(J==="USD"?E.monto=Number((a>0?E.monto/a:0).toFixed(2)):E.monto=Number((E.monto*a).toFixed(2))),E.metodo=j,this.pagosBorrador=i,l()}})}),this.modal.querySelectorAll("input[data-pago-tasa]").forEach(B=>{B.addEventListener("input",N=>{const S=B.dataset.pagoTasa,j=Z(N.target.value),E=i.find(M=>M.id===S);if(E){E.tasaCambio=j>0?j:a,this.pagosBorrador=i;const M=d(),J=this.modal.querySelector("#btn-confirmar-cobro");J&&(J.disabled=!M.puedeConfirmar)}}),B.addEventListener("blur",()=>{l()})}),this.modal.querySelectorAll("button[data-reset-tasa]").forEach(B=>{B.addEventListener("click",()=>{const N=B.dataset.resetTasa,S=i.find(j=>j.id===N);S&&(S.tasaCambio=a,this.pagosBorrador=i,l())})}),this.modal.querySelectorAll("input[data-pago-monto]").forEach(B=>{B.addEventListener("input",N=>{const S=B.dataset.pagoMonto,j=Z(N.target.value),E=i.find(M=>M.id===S);if(E){E.monto=j,this.pagosBorrador=i;const M=d(),J=this.modal.querySelector("#btn-confirmar-cobro");J&&(J.disabled=!M.puedeConfirmar)}}),B.addEventListener("blur",()=>{l()})}),this.modal.querySelectorAll("input[data-pago-ref]").forEach(B=>{B.addEventListener("input",N=>{const S=B.dataset.pagoRef,j=N.target.value,E=i.find(M=>M.id===S);E&&(E.referencia=j,this.pagosBorrador=i)})}),this.modal.querySelectorAll("button[data-eliminar-pago]").forEach(B=>{B.addEventListener("click",()=>{const N=B.dataset.eliminarPago;i=i.filter(S=>S.id!==N),this.pagosBorrador=i,l()})}),(A=this.modal.querySelector("#btn-agregar-pago"))==null||A.addEventListener("click",()=>{let B=d();const N="p-"+Math.random().toString(36).slice(2,7),S=e.find(E=>!i.some(M=>M.metodo===E.nombre))||e[0]||{nombre:"BS.EFEC.",moneda:"BS"};if(B.faltanteBs<=.01&&i.length===1&&i[0]){const E=i[0],M=E.tasaCambio>0?E.tasaCambio:a,J=E.moneda==="USD"?E.monto*M:E.monto,te=Math.round(J/2*100)/100;E.monto=E.moneda==="USD"?M>0?Number((te/M).toFixed(2)):0:te,B=d()}const j=B.faltanteBs>0?B.faltanteBs:0;i.push({id:N,metodo:S.nombre,moneda:S.moneda,monto:S.moneda==="USD"?a>0?Number((j/a).toFixed(2)):0:j,tasaCambio:a,referencia:""}),this.pagosBorrador=i,l()}),(G=this.modal.querySelector("#btn-toggle-nuevo-metodo"))==null||G.addEventListener("click",()=>{s=!s,l()}),(q=this.modal.querySelector("#btn-guardar-nuevo-metodo"))==null||q.addEventListener("click",()=>{(async()=>{const B=this.modal.querySelector("#input-nuevo-metodo-nombre"),N=(B==null?void 0:B.value.trim())||"",S=this.modal.querySelector('input[name="radio-nuevo-metodo-moneda"][value="USD"]'),j=S!=null&&S.checked?"USD":"BS";if(N)try{e=await L.crearMetodoPago(N,j),s=!1,l()}catch{}})()}),this.modal.querySelectorAll("button[data-caja-eliminar-metodo]").forEach(B=>{B.addEventListener("click",()=>{(async()=>{const N=B.dataset.cajaEliminarMetodo||"";N&&window.confirm(`¿Seguro que deseas eliminar el método de pago "${N}"?`)&&(e=await L.eliminarMetodoPago(N),i.forEach(S=>{if(S.metodo===N){const j=e[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"};S.metodo=j.nombre,S.moneda=j.moneda}}),this.pagosBorrador=i,l())})()})});let D=!1;(z=this.modal.querySelector("#btn-confirmar-cobro"))==null||z.addEventListener("click",()=>{D||(D=!0,(async()=>{const B=this.modal.querySelector("#cobro-error");try{const N=i.filter($=>$.monto>0).map($=>{const V=$.moneda==="USD"&&$.tasaCambio>0?$.tasaCambio:a,O=$.moneda==="USD"?$.monto*V:$.monto,Q=a>0?O/a:0;return{metodo:$.metodo,moneda:$.moneda,montoUsd:($.moneda==="USD"?$.monto:Q).toFixed(2),montoBs:O.toFixed(2),tasaCambio:$.moneda==="USD"?V.toFixed(2):void 0,referencia:$.referencia.trim()||void 0}});if(N.length===0)throw new Error("Debe especificar al menos un pago válido.");const S=d(),j=N.reduce(($,V)=>$+Number(V.montoBs),0),E=e.find($=>$.nombre===t),M=(E==null?void 0:E.moneda)==="USD",J=M?r>0?r:a:void 0,te=M&&J?(S.vueltoBs/J).toFixed(2):S.vueltoUsd.toFixed(2),H={estado:S.vueltoBs>.009?b:"SIN_VUELTO",metodo:S.vueltoBs>.009&&b==="PAGADO"?t:void 0,montoBs:S.vueltoBs>.009?S.vueltoBs.toFixed(2):void 0,montoUsd:S.vueltoBs>.009?te:void 0,tasa:S.vueltoBs>.009&&b==="PAGADO"&&J?J.toFixed(2):void 0},U=await this.vm.cobrar(j.toFixed(2),N,H);this.pagosBorrador=null,this.resolucionVueltoBorrador=null,this.cerrarModal(),this.modalTicketExito(U,j)}catch(N){D=!1,B&&(B.textContent=N instanceof Error?N.message.replace(/"/g,""):String(N),B.classList.remove("hidden"))}})())})};l()}modalTicketExito(e,o){const a=e.pagos&&e.pagos.length>0?e.pagos.map(c=>`
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
            </button>`,"max-w-md")}renderDinamico(){const e=this.contenedor.querySelector("#caja-grid");if(!e)return;const o=this.semaforoStock;e.innerHTML=this.vm.visibles.map(i=>{const b=(i.capacidades&ce)!==0,t=Number(i.stock),r=t<=0,s=i.sinStock?"text-purple-700":t<=o.rojoMax?"text-red-600":t<=o.amarilloMax?"text-amber-600":"text-emerald-700",d=i.unidad?i.unidad.toLowerCase()==="un"?"un.":i.unidad.toLowerCase():b?"kg":"un.",l=d==="kg"?"kg":d==="ml"?"ml":"un.";let p="";if(i.sinStock)p="LIBRE";else if(r)p="AGOTADO";else if(i.esCaja&&i.unidadesPorCaja&&i.unidadesPorCaja>1){const h=Math.floor(t/i.unidadesPorCaja),g=t%i.unidadesPorCaja;p=`${h} cajas y ${g} un. (${t} un.)`}else p=`${t} ${d}`;const f=i.precioPaqueteUsd&&i.nombrePaquete||i.esCaja&&i.unidadesPorCaja&&i.unidadesPorCaja>1;return`
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
                                ${p}
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
                    </div>`).join(""));const n=this.contenedor.querySelector("#caja-total-usd"),c=this.contenedor.querySelector("#caja-total-bs");n&&(n.textContent="$ "+Y(this.vm.totalUsd)),c&&(c.textContent="Bs. "+Y(this.vm.totalBs)),L.obtenerJornadaActual().then(i=>{const b=this.contenedor.querySelector("#caja-operadores-activo-texto"),t=this.contenedor.querySelector("#btn-gestionar-operadores-caja"),r=this.contenedor.querySelector("#caja-cobrar");if(i===null){if(b&&(b.textContent="SIN TURNO ACTIVO",b.title="No hay jornada activa. Abre un turno para operar."),t){t.classList.remove("bg-purple-100","text-brand-purple","border-brand-purple","hover:bg-purple-200"),t.classList.add("bg-orange-100","text-red-800","border-red-600","hover:bg-orange-200");const s=t.querySelector("span.rounded-full");s&&(s.classList.remove("bg-emerald-500"),s.classList.add("bg-red-500"))}r&&(r.disabled=!0,r.title="Abre un turno antes de cobrar")}else{const s=i.operadoresActivos&&i.operadoresActivos.length>0?i.operadoresActivos.join(", "):i.operadorActual||"Operador en caja";if(b&&(b.textContent=s,b.title=`Operadores en caja: ${s}`),t){t.classList.add("bg-purple-100","text-brand-purple","border-brand-purple","hover:bg-purple-200"),t.classList.remove("bg-orange-100","text-red-800","border-red-600","hover:bg-orange-200");const d=t.querySelector("span.rounded-full");d&&(d.classList.add("bg-emerald-500"),d.classList.remove("bg-red-500"))}r&&(r.disabled=!1,r.title="")}}),this.contenedor.querySelectorAll("[data-mas]").forEach(i=>i.addEventListener("click",()=>{const b=i.dataset.mas??"",t=this.vm.lineasCarrito.find(r=>r.sku===b);if(t){const r=this.vm.cambiarCantidad(b,t.cantidad+1);r&&this.mostrarError(r)}})),this.contenedor.querySelectorAll("[data-menos]").forEach(i=>i.addEventListener("click",()=>{const b=i.dataset.menos??"",t=this.vm.lineasCarrito.find(r=>r.sku===b);t&&this.vm.cambiarCantidad(b,Math.max(1,t.cantidad-1))})),this.contenedor.querySelectorAll("[data-quitar]").forEach(i=>i.addEventListener("click",()=>this.vm.quitar(i.dataset.quitar??""))),this.contenedor.querySelectorAll("input[data-qty]").forEach(i=>i.addEventListener("change",()=>{const b=Number(i.value||"0"),t=Math.min(999.99,Math.max(.01,Number.isFinite(b)?b:.01));i.value=String(t);const r=this.vm.cambiarCantidad(i.dataset.qty??"",t);r&&this.mostrarError(r)}))}mostrarToast(e,o="info"){var c;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},n=document.createElement("div");n.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,n.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(c=n.querySelector("button"))==null||c.addEventListener("click",()=>n.remove()),document.body.appendChild(n),setTimeout(()=>n.remove(),8e3)}}const ee=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},W=u=>{const e=ee(u);return(Math.round((e+Number.EPSILON)*100)/100).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})},se=u=>{const e=ee(u);return e>=1e9?(e/1e9).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})+" Mil Millones":e>=1e6?(e/1e6).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})+" Millones":W(e)};class Ye{constructor(){C(this,"datos",null)}setDatos(e){this.datos=e}get panel(){return this.datos}}class et{constructor(e,o,a,n){C(this,"contenedor");C(this,"vm");C(this,"modelo");C(this,"criterioGrafica","volumen");C(this,"respaldos",[]);C(this,"transacciones",[]);C(this,"productos",[]);C(this,"categorias",[]);C(this,"rangoDetalleFechas","");C(this,"jornadaActual",null);C(this,"POR_PAGINA_TRX",20);C(this,"paginaTrx",1);C(this,"margenBrutoPct",0);C(this,"margenNetoPct",0);this.contenedor=e,this.vm=a,this.modelo=n}calcularDineroPorCategoria(){const e=this.modelo.tasaActual||807.39;let o=0;const a={};return this.categorias.forEach(n=>{a[n.id]={categoriaId:n.id,nombre:n.nombre,cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}}),a["cat-general"]||(a["cat-general"]={categoriaId:"cat-general",nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}),this.productos.forEach(n=>{const c=n.categoriaId||"cat-general";a[c]||(a[c]={categoriaId:c,nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0});const i=Number(n.stock)||0,b=ee(n.precioBrutoUsd),t=ee(n.precioUsd);a[c].cantidadProductos+=1,a[c].unidadesStock+=i;const r=i*b;a[c].brutoUsd+=r,a[c].ventaUsd+=i*t,o+=r}),Object.values(a).map(n=>{const c=o>0?(n.brutoUsd/o*100).toFixed(1):"0.0",i=Math.max(0,n.ventaUsd-n.brutoUsd),b=n.ventaUsd>0?(i/n.ventaUsd*100).toFixed(1):"0.0";return{categoriaId:n.categoriaId,nombre:n.nombre,cantidadProductos:n.cantidadProductos,unidadesStock:n.unidadesStock,dineroBrutoUsd:n.brutoUsd.toFixed(2),dineroBrutoBs:(n.brutoUsd*e).toFixed(2),dineroVentaUsd:n.ventaUsd.toFixed(2),dineroVentaBs:(n.ventaUsd*e).toFixed(2),margenBrutoProyectadoUsd:i.toFixed(2),margenBrutoPct:b,porcentajeCapital:c}})}calcularMargenes(){if(this.productos.length===0)return;let e=0,o=0;this.productos.forEach(a=>{const n=ee(a.precioUsd),c=ee(a.precioBrutoUsd);n>0&&(e+=n,c>0&&(o+=c))}),e>0&&(this.margenBrutoPct=Math.round((e-o)/e*100),this.margenNetoPct=Math.max(0,this.margenBrutoPct-12))}obtenerTimestampTicket(e){if(e.fechaUnix&&e.fechaUnix>0)return e.fechaUnix;if(e.fechaHora){const o=e.fechaHora.match(/(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})/);if(o&&o[1]&&o[2]&&o[3]&&o[4]&&o[5]&&o[6]){const a=Date.UTC(parseInt(o[1],10),parseInt(o[2],10)-1,parseInt(o[3],10),parseInt(o[4],10),parseInt(o[5],10),parseInt(o[6],10));if(!isNaN(a))return Math.floor(a/1e3)}}return Math.floor(Date.now()/1e3)}renderFilasTransacciones(e){if(e.length===0)return'<tr><td colspan="7" class="py-6 text-center text-gray-400 font-bold">No se encontraron transacciones registradas.</td></tr>';const o=Math.ceil(e.length/this.POR_PAGINA_TRX);this.paginaTrx>o&&(this.paginaTrx=o),this.paginaTrx<1&&(this.paginaTrx=1);const a=(this.paginaTrx-1)*this.POR_PAGINA_TRX;return e.slice(a,a+this.POR_PAGINA_TRX).map(c=>{const i=c.fechaHora||"Reciente",b=c.ventaId.startsWith("CTA-"),t=b?"Cuenta Abierta":"Caja Directa";return`
            <tr class="hover:bg-gray-50 border-b border-gray-100 last:border-none transition-colors">
                <td class="py-2.5 font-mono text-brand-black">${c.ventaId}</td>
                <td class="py-2.5 text-gray-600">${i}</td>
                <td class="py-2.5">
                    <span class="px-2 py-0.5 rounded border border-brand-black text-[10px] font-black ${b?"bg-amber-100 text-amber-900":"bg-blue-100 text-blue-900"}">
                        ${t}
                    </span>
                </td>
                <td class="py-2.5 text-gray-700">${c.operador||"Principal"}</td>
                <td class="py-2.5 text-right font-mono text-gray-600">Bs. ${W(Number(c.tasaDelDia))}</td>
                <td class="py-2.5 text-right font-black">$ ${W(c.totalUsd)}</td>
                <td class="py-2.5 text-right font-black text-brand-purple">Bs. ${W(c.totalBs)}</td>
            </tr>`}).join("")}async render(){var _;const[e,o,a,n,c,i]=await Promise.all([L.panel(),L.respaldos(),L.ventas(),L.productos(),L.categorias(),L.obtenerJornadaActual()]);this.vm.setDatos(e),this.respaldos=o,this.transacciones=a,this.productos=n,this.categorias=c,this.jornadaActual=i,this.calcularMargenes();const b=new Date,t=new Date(b.getTime()-864e5),r=x=>x.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});this.rangoDetalleFechas||(this.rangoDetalleFechas=`Del ${r(t)} al ${r(b)}`);const s=this.modelo.bs(e.valorInventarioUsd),d=this.modelo.tieneCapacidad(8)||this.modelo.tieneRubro(4),l=e.dineroPorCategoria&&e.dineroPorCategoria.length>0?e.dineroPorCategoria:this.calcularDineroPorCategoria(),p=l.reduce((x,v)=>x+v.cantidadProductos,0),f=l.reduce((x,v)=>x+v.unidadesStock,0),h=l.reduce((x,v)=>x+ee(v.dineroBrutoUsd),0),g=l.reduce((x,v)=>x+ee(v.dineroBrutoBs),0),y=l.reduce((x,v)=>x+ee(v.dineroVentaUsd),0),w=Math.max(0,y-h),I=y>0?(w/y*100).toFixed(1):"0.0",D=l.map(x=>{const v=ee(x.porcentajeCapital);return`
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="py-2.5 px-3 flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-purple inline-block border border-brand-black shrink-0"></span>
                    <span class="font-black text-brand-black text-xs">${x.nombre}</span>
                </td>
                <td class="py-2.5 px-3 text-center">
                    <span class="bg-gray-100 border border-brand-black px-2 py-0.5 rounded text-[11px] font-black">${x.cantidadProductos} art.</span>
                </td>
                <td class="py-2.5 px-3 text-right font-mono">${x.unidadesStock} un.</td>
                <td class="py-2.5 px-3 text-right font-black font-mono text-brand-black">$ ${W(x.dineroBrutoUsd)}</td>
                <td class="py-2.5 px-3 text-right font-black font-mono text-brand-purple">Bs. ${W(x.dineroBrutoBs)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-gray-700">$ ${W(x.dineroVentaUsd)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-700">$ ${W(x.margenBrutoProyectadoUsd)} (${x.margenBrutoPct}%)</td>
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
            ${this.kpi("Ventas Totales",`<span id="kpi-ventas-usd" class="font-black text-brand-black">$ ${W(e.ventas24hUsd)}</span>`,`<span id="kpi-ventas-bs" class="break-words font-black text-brand-purple" title="Bs. ${W(e.ventas24hBs)}">Bs. ${se(e.ventas24hBs)}</span>`,"bg-amber-50","Facturación bruta cobrada en caja (USD y Bs. al cambio oficial)")}
            ${this.kpi("Ganancia Bruta",`<span id="kpi-gan-bruta">$ ${W(e.gananciaBrutaUsd||Number(e.ventas24hUsd)*this.margenBrutoPct/100)}</span>`,`Margen bruto comercial: ${this.margenBrutoPct.toFixed(1)}%`,"bg-emerald-50","Ventas menos costo de adquisición de mercancía")}
            ${this.kpi("Ganancia Neta",`<span id="kpi-gan-neta">$ ${W(e.gananciaNetaUsd||Number(e.ventas24hUsd)*this.margenNetoPct/100)}</span>`,`<span id="kpi-gan-neta-bs" class="break-words" title="Bs. ${this.modelo.bs(Number(e.ventas24hUsd)*this.margenNetoPct/100)}">Bs. ${se(this.modelo.bs(Number(e.ventas24hUsd)*this.margenNetoPct/100))}</span>`,"bg-blue-50","Utilidad líquida real después de descontar impuestos")}
            ${this.kpi("Inventario Total",`$ ${W(e.valorInventarioUsd)}`,`<span class="break-words" title="Bs. ${s}">Bs. ${se(s)}</span>`,"bg-purple-50","Valoración monetaria total del stock físico actual disponible")}
        </div>

        <!-- Módulo de Jornada Laboral y Operadores en Turno -->
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 mb-4 sm:mb-6">
            <div class="flex flex-wrap justify-between items-center border-b-2 border-brand-black pb-3 mb-4 gap-2">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full ${((_=this.jornadaActual)==null?void 0:_.estado)==="abierta"?"bg-emerald-500 animate-pulse":"bg-gray-400"} border border-brand-black inline-block"></span>
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
                                    <p class="text-[11px] font-mono font-bold text-gray-700">$ ${W(e.dineroEnLaCalleUsd)} <span class="text-gray-400">·</span> Bs. ${W(e.dineroEnLaCalleBs)}</p>
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
                        Capital en Bruto: $ ${W(h)}
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
                        ${D}
                    </tbody>
                    <tfoot class="border-t-2 border-brand-black bg-gray-100 font-black font-heading text-xs">
                        <tr>
                            <td class="py-2.5 px-3 uppercase text-brand-black">TOTAL CONSOLIDADO</td>
                            <td class="py-2.5 px-3 text-center">${p} prods.</td>
                            <td class="py-2.5 px-3 text-right">${f} un.</td>
                            <td class="py-2.5 px-3 text-right text-brand-black">$ ${W(h)}</td>
                            <td class="py-2.5 px-3 text-right text-brand-purple">Bs. ${W(g)}</td>
                            <td class="py-2.5 px-3 text-right text-brand-black">$ ${W(y)}</td>
                            <td class="py-2.5 px-3 text-right text-emerald-700">$ ${W(w)} (${I}%)</td>
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
        </div>`,this.conectarEventos(e),this.pintarGrafico(e)}conectarEventos(e){var p,f,h,g,y,w,I,D,_;const o=document.getElementById("btn-crit-vol"),a=document.getElementById("btn-crit-ing"),n=document.getElementById("filtro-fecha-desde"),c=document.getElementById("filtro-fecha-hasta"),i=document.getElementById("btn-aplicar-fechas"),b=document.getElementById("btn-limpiar-fechas"),t=document.getElementById("label-estado-fechas"),r=document.getElementById("tabla-transacciones-body"),s=document.getElementById("conteo-transacciones-badge"),d=this.contenedor.querySelectorAll("[data-rango]");d.forEach(x=>{x.addEventListener("click",()=>{n&&(n.value=""),c&&(c.value=""),t&&t.classList.add("hidden"),r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)),s&&(s.textContent=`${this.transacciones.length} transacciones registradas`),d.forEach(k=>{k.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"}),x.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white shrink-0";const v=x.dataset.rango||"24h";this.aplicarRango(v,e)})}),i==null||i.addEventListener("click",()=>{this.aplicarFiltroFechas(e)}),b==null||b.addEventListener("click",()=>{var v,k;n&&(n.value=""),c&&(c.value=""),t&&t.classList.add("hidden"),r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)),s&&(s.textContent=`${this.transacciones.length} transacciones registradas`),this.paginaTrx=1,(v=document.getElementById("trx-pag-ant"))==null||v.addEventListener("click",()=>{this.paginaTrx>1&&(this.paginaTrx--,r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(k=document.getElementById("trx-pag-sig"))==null||k.addEventListener("click",()=>{const P=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);this.paginaTrx<P&&(this.paginaTrx++,r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),d.forEach(P=>{P.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"});const x=this.contenedor.querySelector('[data-rango="24h"]');x&&(x.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white shrink-0"),this.aplicarRango("24h",e)}),o==null||o.addEventListener("click",()=>{this.criterioGrafica="volumen",o.className="px-2.5 py-1 text-xs font-heading font-black rounded bg-brand-black text-white",a.className="px-2.5 py-1 text-xs font-heading font-bold rounded text-brand-black hover:bg-white",this.pintarGrafico(this.vm.panel||e)}),a==null||a.addEventListener("click",()=>{this.criterioGrafica="ingreso",a.className="px-2.5 py-1 text-xs font-heading font-black rounded bg-brand-black text-white",o.className="px-2.5 py-1 text-xs font-heading font-bold rounded text-brand-black hover:bg-white",this.pintarGrafico(this.vm.panel||e)}),(p=document.getElementById("trx-pag-ant"))==null||p.addEventListener("click",()=>{this.paginaTrx>1&&(this.paginaTrx--,r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(f=document.getElementById("trx-pag-sig"))==null||f.addEventListener("click",()=>{const x=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);this.paginaTrx<x&&(this.paginaTrx++,r&&(r.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(h=document.getElementById("btn-crear-backup"))==null||h.addEventListener("click",async()=>{await L.crearRespaldo(),this.respaldos=await L.respaldos();const x=document.getElementById("lista-respaldos");x&&(x.innerHTML=this.respaldos.map(v=>`
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
                `).join(""))});const l=async()=>{var J,te,H;const x=await L.obtenerJornadaActual(),v=await L.listarOperadores(),k=await L.obtenerSemaforoStock(),P=document.getElementById("jornada-estado-texto"),T=document.getElementById("jornada-fechas-texto"),A=document.getElementById("jornada-operador-activo"),G=document.getElementById("jornada-balance-texto"),q=document.getElementById("jornada-tickets-texto"),z=document.getElementById("box-acciones-jornada"),B=document.getElementById("lista-operadores-chips"),N=(x==null?void 0:x.estado)==="abierta";P&&(P.textContent=N?"Jornada en Curso":"Jornada Cerrada"),T&&(T.textContent=N?`Inicio: ${(x==null?void 0:x.inicioStr)||"Reciente"}`:`Último cierre: ${(x==null?void 0:x.finStr)||"Sin jornadas"}`);const S=x!=null&&x.operadoresActivos&&x.operadoresActivos.length>0?x.operadoresActivos.join(", "):((J=x==null?void 0:x.operadorActual)==null?void 0:J.trim())||"Sin operador asignado";A&&(A.textContent=S),G&&(G.textContent=`$ ${W((x==null?void 0:x.ventasTotalUsd)||0)} USD (Bs. ${W((x==null?void 0:x.ventasTotalBs)||0)})`),q&&(q.textContent=`${(x==null?void 0:x.ticketsEmitidos)||0} tickets emitidos · ${(x==null?void 0:x.entradasStockReg)||0} reposiciones`),z&&(N?z.innerHTML=`
                        <button id="btn-cerrar-jornada" class="bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs px-3 py-1.5 rounded border-2 border-brand-black shadow-brutal-sm">
                            CERRAR JORNADA Y EMITIR INFORME
                        </button>
                    `:z.innerHTML=`
                        <button id="btn-abrir-jornada" class="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs px-3 py-1.5 rounded border-2 border-brand-black shadow-brutal-sm">
                            ABRIR NUEVA JORNADA
                        </button>
                    `,(te=z.querySelector("#btn-abrir-jornada"))==null||te.addEventListener("click",async()=>{var U;try{const $=(await L.listarOperadores()).filter(O=>O.activo);if($.length===0){this.mostrarToast("No hay operadores activos. Registre uno primero.","error");return}const V=((U=$[0])==null?void 0:U.nombre)||"Cajero Principal";await L.abrirJornada(V,$.map(O=>O.nombre)),this.mostrarToast("Jornada abierta exitosamente.","success"),l()}catch($){this.mostrarToast("Error al abrir jornada: "+($ instanceof Error?$.message:String($)),"error")}}),(H=z.querySelector("#btn-cerrar-jornada"))==null||H.addEventListener("click",async()=>{try{if(window.confirm("¿Confirmas el cierre de la jornada operativa actual? Se generará el balance consolidado del turno.")){const $=await L.cerrarJornada();this.mostrarToast(`Jornada cerrada. ID: ${$.id} — $${$.ventasTotalUsd} USD (Bs. ${$.ventasTotalBs})`,"success"),l()}}catch(U){this.mostrarToast("Error al cerrar jornada: "+(U instanceof Error?U.message:String(U)),"error")}})),B&&(B.innerHTML=v.map(U=>{var V,O;return`
                    <div class="inline-flex items-center gap-1.5 border-2 border-brand-black rounded px-2 py-1 text-xs font-bold ${((V=x==null?void 0:x.operadoresActivos)==null?void 0:V.includes(U.nombre))||((O=x==null?void 0:x.operadorActual)==null?void 0:O.includes(U.nombre))?"bg-purple-100 text-brand-purple border-brand-purple":"bg-gray-100 text-brand-black"}">
                        <span>${U.nombre}</span>
                        <span class="text-[9px] uppercase px-1 rounded ${U.activo?"bg-green-200 text-green-900":"bg-gray-300 text-gray-700"}">${U.activo?"Activo":"Inactivo"}</span>
                        <button data-op-edit="${U.id}" data-op-nom="${U.nombre}" title="Editar nombre" class="hover:text-blue-600 ml-1 text-[11px] font-mono font-bold bg-white border border-gray-300 rounded px-1">✎</button>
                        <button data-op-del="${U.id}" data-op-nom="${U.nombre}" title="Eliminar operador" class="hover:text-red-600 text-[11px] font-mono font-bold bg-white border border-gray-300 rounded px-1">✕</button>
                    </div>
                `}).join(""),B.querySelectorAll("button[data-op-edit]").forEach(U=>{U.addEventListener("click",async()=>{const $=U.dataset.opEdit||"",V=U.dataset.opNom||"",O=prompt("Editar nombre del operador:",V);O&&O.trim()&&O.trim()!==V&&(await L.editarOperador($,O.trim()),l())})}),B.querySelectorAll("button[data-op-del]").forEach(U=>{U.addEventListener("click",async()=>{const $=U.dataset.opDel||"",V=U.dataset.opNom||"";confirm(`¿Eliminar al operador "${V}"?`)&&(await L.eliminarOperador($),l())})}));const j=document.getElementById("lista-metodos-pago-panel");if(j){const U=await L.listarMetodosPago();j.innerHTML=U.map($=>`
                    <div class="inline-flex items-center gap-2 border-2 border-brand-black rounded px-3 py-1.5 text-xs font-bold ${$.moneda==="BS"?"bg-amber-50":"bg-blue-50"}">
                        <span>${$.nombre}</span>
                        <span class="text-[9px] uppercase px-1.5 py-0.5 rounded font-black ${$.moneda==="BS"?"bg-amber-200 text-amber-900":"bg-blue-200 text-blue-900"}">${$.moneda==="BS"?"Bolívares":"Dólares"}</span>
                        <button data-metodo-del="${$.nombre}" title="Eliminar método de pago" class="text-gray-400 hover:text-red-600 font-black text-xs ml-1 bg-white border border-gray-300 rounded px-1.5 py-0.5">✕</button>
                    </div>
                `).join(""),j.querySelectorAll("button[data-metodo-del]").forEach($=>{$.addEventListener("click",async()=>{const V=$.dataset.metodoDel||"";window.confirm(`¿Confirmas eliminar el método de pago "${V}"?`)&&(await L.eliminarMetodoPago(V),l())})})}const E=document.getElementById("in-semaforo-rojo"),M=document.getElementById("in-semaforo-amarillo");E&&!E.dataset.modificado&&(E.value=String(k.rojoMax)),M&&!M.dataset.modificado&&(M.value=String(k.amarilloMax))};l(),(g=document.getElementById("btn-relevar-operador"))==null||g.addEventListener("click",async()=>{var G,q,z;const x=(await L.listarOperadores()).filter(B=>B.activo);if(x.length===0){this.mostrarToast("No hay operadores activos disponibles. Registre uno a continuación.","error");return}const v=await L.obtenerJornadaActual(),k=(v==null?void 0:v.operadoresActivos)||[(v==null?void 0:v.operadorActual)||""],P=document.getElementById("modal-root")||document.body,T=document.createElement("div");T.id="modal-asignar-operadores",T.innerHTML=`
                <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                    <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                            <h3 class="font-heading font-black text-xl">ASIGNAR OPERADORES AL TURNO</h3>
                            <button id="modal-asig-close" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
                        </div>
                        <p class="text-xs text-gray-600 font-bold mb-3">Selecciona los operadores que atenderán en este turno:</p>
                        <div class="space-y-2 max-h-56 overflow-y-auto pr-1 mb-4">
                            ${x.map(B=>{const N=k.some(S=>S.toLowerCase()===B.nombre.toLowerCase());return`
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
                </div>`,P.appendChild(T);const A=()=>T.remove();(G=T.querySelector("#modal-asig-close"))==null||G.addEventListener("click",A),(q=T.querySelector("#modal-asig-cancelar"))==null||q.addEventListener("click",A),(z=T.querySelector("#modal-asig-guardar"))==null||z.addEventListener("click",async()=>{const B=T.querySelectorAll("input[data-asig-chk]:checked"),N=[];if(B.forEach(S=>{S.dataset.asigChk&&N.push(S.dataset.asigChk)}),N.length===0){this.mostrarToast("Selecciona al menos un operador para el turno.","error");return}await L.asignarOperadoresTurno(N),A(),l()})}),(y=document.getElementById("form-crear-metodo-panel"))==null||y.addEventListener("submit",async x=>{x.preventDefault();const v=document.getElementById("in-nuevo-metodo-nombre"),k=document.getElementById("select-nuevo-metodo-moneda"),P=(v==null?void 0:v.value.trim())||"",T=(k==null?void 0:k.value)==="USD"?"USD":"BS";P&&(await L.crearMetodoPago(P,T),v&&(v.value=""),l())}),(w=document.getElementById("form-crear-operador"))==null||w.addEventListener("submit",async x=>{x.preventDefault();const v=document.getElementById("in-nuevo-operador"),k=(v==null?void 0:v.value.trim())||"";k&&(await L.crearOperador(k),v&&(v.value=""),l())}),(I=document.getElementById("form-semaforo-stock"))==null||I.addEventListener("submit",async x=>{x.preventDefault();const v=document.getElementById("in-semaforo-rojo"),k=document.getElementById("in-semaforo-amarillo"),P=document.getElementById("msg-semaforo-stock"),T=parseInt((v==null?void 0:v.value)||"5",10),A=parseInt((k==null?void 0:k.value)||"15",10);if(T>=A){this.mostrarToast("El umbral rojo debe ser estrictamente menor que el umbral amarillo.","error");return}await L.guardarSemaforoStock(T,A),P&&(P.textContent="Umbrales del semáforo guardados y aplicados a todo el sistema.",P.classList.remove("hidden"),setTimeout(()=>P.classList.add("hidden"),2500))}),(D=document.getElementById("btn-reset-semaforo"))==null||D.addEventListener("click",async()=>{await L.guardarSemaforoStock(5,15),l()}),(_=document.getElementById("form-cambiar-clave"))==null||_.addEventListener("submit",async x=>{x.preventDefault();const v=document.getElementById("pin-actual"),k=document.getElementById("pin-nuevo"),P=document.getElementById("msg-cambio-clave");if(P)try{await L.cambiarPinDueno((v==null?void 0:v.value.trim())||"",(k==null?void 0:k.value.trim())||""),await this.modelo.cargarConfig(),P.textContent=k!=null&&k.value.trim()?"Clave actualizada exitosamente. El panel requerirá esta nueva clave para ingresar.":"Clave eliminada. El panel ha quedado en modo abierto sin clave.",P.style.color="#00823B",P.classList.remove("hidden"),setTimeout(()=>void this.render(),1200)}catch(T){P.textContent=T instanceof Error?T.message:String(T),P.style.color="#C60C15",P.classList.remove("hidden")}})}aplicarFiltroFechas(e){const o=document.getElementById("filtro-fecha-desde"),a=document.getElementById("filtro-fecha-hasta"),n=document.getElementById("label-estado-fechas"),c=document.getElementById("tabla-transacciones-body"),i=document.getElementById("conteo-transacciones-badge"),b=(o==null?void 0:o.value.trim())||"",t=(a==null?void 0:a.value.trim())||"";if(!b&&!t){n&&(n.textContent="Selecciona una fecha Desde o Hasta para iniciar el diagnóstico.",n.classList.remove("hidden"));return}let r=0,s=Number.MAX_SAFE_INTEGER;if(b){const[E,M,J]=b.split("-").map(Number);r=Math.floor(new Date(E,M-1,J,0,0,0,0).getTime()/1e3)}if(t){const[E,M,J]=t.split("-").map(Number);s=Math.floor(new Date(E,M-1,J,23,59,59,999).getTime()/1e3)}if(r>s){n&&(n.textContent='Rango inválido: la fecha "Desde" es posterior a la fecha "Hasta".',n.classList.remove("hidden"));return}const d=this.transacciones.filter(E=>{const M=this.obtenerTimestampTicket(E);return M>=r&&M<=s}),l=d.reduce((E,M)=>E+ee(M.totalUsd),0),p=d.reduce((E,M)=>E+ee(M.totalBs),0),f=d.length;let h=0;d.forEach(E=>{(E.lineas||[]).forEach(M=>{const J=this.productos.find(te=>te.sku===M.sku);J&&(h+=ee(J.precioBrutoUsd)*ee(M.cantidad))})});const g=Math.max(0,l-h),y=g*.95,w=y*(this.modelo.tasaActual||807.39),I=f>0?(l/f).toFixed(2):"0.00",D=document.getElementById("kpi-ventas-usd"),_=document.getElementById("kpi-ventas-bs"),x=document.getElementById("kpi-tickets"),v=document.getElementById("kpi-gan-bruta"),k=document.getElementById("kpi-gan-neta"),P=document.getElementById("kpi-gan-neta-bs"),T=document.getElementById("kpi-ticket-prom");D&&(D.textContent="$ "+W(l)),_&&(_.textContent="Bs. "+se(p),_.title="Bs. "+W(p)),x&&(x.textContent=String(f)),v&&(v.textContent="$ "+W(g)),k&&(k.textContent="$ "+W(y)),P&&(P.textContent="Bs. "+se(w),P.title="Bs. "+W(w)),T&&(T.textContent="$ "+I),c&&(c.innerHTML=this.renderFilasTransacciones(d)),i&&(i.textContent=`${d.length} transacciones en rango`),this.contenedor.querySelectorAll("[data-rango]").forEach(E=>{E.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"});const G={};d.forEach(E=>{(E.lineas||[]).forEach(M=>{G[M.nombre]||(G[M.nombre]={nombre:M.nombre,cantidad:0,totalUsd:0}),G[M.nombre].cantidad+=Number(M.cantidad)||0,G[M.nombre].totalUsd+=ee(M.subtotalUsd)||Number(M.cantidad)*ee(M.precioUsd)})});const q=Object.values(G).reduce((E,M)=>E+M.totalUsd,0)||1,z=Object.values(G).sort((E,M)=>M.totalUsd-E.totalUsd).map(E=>({nombre:E.nombre,cantidad:String(E.cantidad),totalUsd:E.totalUsd.toFixed(2),porcentaje:(E.totalUsd/q*100).toFixed(1)})),B={...e,ventas24hUsd:l.toFixed(2),ventas24hBs:p.toFixed(2),gananciaBrutaUsd:g.toFixed(2),gananciaNetaUsd:y.toFixed(2),tickets24h:f,topProductos:z.length>0?z:d.length===0?[]:e.topProductos};this.vm.setDatos(B),this.pintarGrafico(B);const N=E=>E.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),S=b?new Date(r*1e3):new Date(2020,0,1),j=t?new Date(s*1e3):new Date;if(this.rangoDetalleFechas=`Del ${N(S)} al ${N(j)}`,n){const E=b||"Inicio",M=t||"Actualidad";n.textContent=`Diagnóstico activo (${E} al ${M}): ${d.length} transacciones registradas`,n.classList.remove("hidden")}}aplicarRango(e,o){const a=new Date,n=v=>v.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});let c=864e5;e==="7d"?c=7*864e5:e==="30d"?c=30*864e5:e==="1a"?c=365*864e5:e==="todo"&&(c=5*365*864e5);const i=new Date(a.getTime()-c);this.rangoDetalleFechas=`Del ${n(i)} al ${n(a)}`;const b=Math.floor(i.getTime()/1e3),t=this.transacciones.filter(v=>this.obtenerTimestampTicket(v)>=b),r=this.modelo.tasaActual||807.39;let s=0,d=0;t.forEach(v=>{s+=ee(v.totalUsd),d+=ee(v.totalBs)});const l=t.length,p=document.getElementById("kpi-ventas-usd"),f=document.getElementById("kpi-ventas-bs"),h=document.getElementById("kpi-tickets"),g=document.getElementById("kpi-gan-bruta"),y=document.getElementById("kpi-gan-neta"),w=document.getElementById("kpi-gan-neta-bs"),I=document.getElementById("kpi-ticket-prom");if(p&&(p.textContent="$ "+W(s)),f&&(f.textContent="Bs. "+se(d),f.title="Bs. "+W(d)),h&&(h.textContent=String(l)),g&&(g.textContent="$ "+W(s*this.margenBrutoPct/100)),y&&(y.textContent="$ "+W(s*this.margenNetoPct/100)),w){const v=s*this.margenNetoPct/100*r;w.textContent="Bs. "+se(v),w.title="Bs. "+W(v)}I&&(I.textContent="$ "+(l>0?(s/l).toFixed(2):"0.00"));const D=new Map;t.forEach(v=>{var k;(k=v.lineas)==null||k.forEach(P=>{const T=D.get(P.sku);T?(T.cantidad+=ee(P.cantidad),T.totalUsd+=ee(P.subtotalUsd)):D.set(P.sku,{nombre:P.nombre,cantidad:ee(P.cantidad),totalUsd:ee(P.subtotalUsd)})})});const _=Array.from(D.values()).sort((v,k)=>k.totalUsd-v.totalUsd).slice(0,10).map(v=>({nombre:v.nombre,cantidad:String(Math.round(v.cantidad)),totalUsd:v.totalUsd>0?String(v.totalUsd.toFixed(2)):void 0,porcentaje:s>0?(v.totalUsd/s*100).toFixed(1):"0.0"})),x={...o,topProductos:_};this.vm.setDatos(x),this.pintarGrafico(x)}kpi(e,o,a,n,c=""){return`
        <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-4 ${n} flex flex-col justify-between min-w-0 overflow-hidden" title="${c}">
            <p class="font-heading font-bold text-xs uppercase tracking-wide text-brand-text truncate">${e}</p>
            <div class="font-heading font-black text-xl lg:text-2xl mt-1 min-w-0">${o}</div>
            <div class="text-xs font-body text-brand-text truncate mt-1">${a}</div>
            ${c?`<div class="text-[10px] text-gray-500 font-bold truncate mt-0.5 border-t border-gray-200/60 pt-1">${c}</div>`:""}
        </div>`}async pintarGrafico(e){const o=this.contenedor.querySelector("#panel-chart-container");if(!o)return;if(e.topProductos.length===0){o.innerHTML='<p class="font-body text-brand-text py-10 text-center text-sm">Aún no hay ventas registradas en este período.</p>';return}const a=["#2563EB","#D97706","#10B981","#8B5CF6","#EC4899","#06B6D4","#F97316","#84CC16","#6366F1","#14B8A6","#F43F5E","#A855F7","#EAB308","#64748B"],n=this.criterioGrafica==="volumen",c=e.topProductos.map(h=>Number(n?h.cantidad:h.totalUsd||Number(h.cantidad)*8.5)),i=c.reduce((h,g)=>h+g,0)||1,b=e.topProductos.map((h,g)=>({nombre:h.nombre,valor:c[g],porcentaje:(c[g]/i*100).toFixed(1)}));let t=0;const r=95,s=95,d=85;let l="";b.length===1?l=`<circle cx="${r}" cy="${s}" r="${d}" fill="${a[0]}" stroke="#1E232A" stroke-width="2" />`:b.forEach((h,g)=>{const w=h.valor/i*2*Math.PI,I=t,D=t+w,_=r+d*Math.cos(I),x=s+d*Math.sin(I),v=r+d*Math.cos(D),k=s+d*Math.sin(D),P=w>Math.PI?1:0,T=a[g%a.length];l+=`
                    <path d="M ${r} ${s} L ${_} ${x} A ${d} ${d} 0 ${P} 1 ${v} ${k} Z"
                        fill="${T}" stroke="#1E232A" stroke-width="1.5"
                        class="hover:opacity-85 transition-opacity cursor-pointer">
                        <title>${h.nombre}: ${h.porcentaje}%</title>
                    </path>
                `,t+=w});const p=b.map((h,g)=>{const y=a[g%a.length],w=n?`${h.valor} un.`:`$ ${W(h.valor)}`;return`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-2 pr-3 flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full inline-block border border-brand-black shrink-0" style="background-color: ${y}"></span>
                        <span class="font-bold text-xs truncate max-w-[180px]" title="${h.nombre}">${h.nombre}</span>
                    </td>
                    <td class="py-2 text-right font-black text-xs pr-2">${w}</td>
                    <td class="py-2 text-right font-mono text-xs font-bold text-gray-500">${h.porcentaje}%</td>
                </tr>
            `}).join(""),f=n?`${Math.round(i)} un.`:`$ ${W(i)}`;o.innerHTML=`
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
                        ${p}
                    </tbody>
                </table>
            </div>
        </div>`}mostrarToast(e,o="info"){var c;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},n=document.createElement("div");n.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,n.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(c=n.querySelector("button"))==null||c.addEventListener("click",()=>n.remove()),document.body.appendChild(n),setTimeout(()=>n.remove(),8e3)}}const X=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},R=u=>X(u).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2});function we(u){if(u.sinStock)return"Ilimitado";const e=Number(u.stock);if(u.esCaja&&u.unidadesPorCaja&&u.unidadesPorCaja>1){const o=Math.floor(e/u.unidadesPorCaja),a=e%u.unidadesPorCaja;return`${o} cj. + ${a} un.`}return`${e} un.`}const xe=(u,e,o,a)=>{u.maxLength=o,u.addEventListener("input",()=>{let n=u.value.replace(/[^0-9.,]/g,"");const c=n.split(/[.,]/);c.length>2&&(n=c[0]+"."+c.slice(1).join("")),n.length>o&&(n=n.slice(0,o));const i=X(n);Number.isFinite(i)&&i>e&&(n=String(e)),u.value!==n&&(u.value=n),a&&a()})},he=(u,e,o=!1)=>{u.maxLength=e,u.addEventListener("input",()=>{let a=o?u.value.replace(/[<>{}\\]/g,""):u.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ .,/_#-]/g,"");a.length>e&&(a=a.slice(0,e)),u.value!==a&&(u.value=a)})};function Se(u){if(!u)return"Hoy";const e=Math.floor(Date.now()/1e3),o=Math.max(0,e-u);if(o<3600)return"Hoy (reciente)";const a=Math.floor(o/3600);if(a<24)return`Hoy (hace ${a}h)`;const n=Math.floor(a/24);return n===1?"Hace 1 día":`Hace ${n} días`}class tt{constructor(e,o,a){C(this,"contenedor");C(this,"modal");C(this,"modelo");C(this,"cuentas",[]);C(this,"productos",[]);C(this,"cuentaSeleccionada",null);C(this,"filtroTab","todas");C(this,"POR_PAGINA_CUENTAS",15);C(this,"paginaCuentas",1);C(this,"pagosBorradorPorCuenta",new Map);C(this,"resolucionVueltoPorCuenta",new Map);this.contenedor=e,this.modal=o,this.modelo=a}async render(){[this.cuentas,this.productos]=await Promise.all([L.cuentas(),L.productos()]);const e=this.modelo.tieneRubro(4);!e&&this.filtroTab==="activa"&&(this.filtroTab="deuda");const o=this.cuentas.filter(s=>(s.tipo||"activa")==="activa"),a=this.cuentas.filter(s=>s.tipo==="deuda"),n=this.cuentas.filter(s=>e?this.filtroTab==="activa"?(s.tipo||"activa")==="activa":this.filtroTab==="deuda"?s.tipo==="deuda":!0:s.tipo==="deuda");this.cuentaSeleccionada&&(this.cuentaSeleccionada=this.cuentas.find(s=>{var d;return s.ventaId===((d=this.cuentaSeleccionada)==null?void 0:d.ventaId)})||null),this.cuentaSeleccionada&&!n.some(s=>{var d;return s.ventaId===((d=this.cuentaSeleccionada)==null?void 0:d.ventaId)})?this.cuentaSeleccionada=n[0]||null:!this.cuentaSeleccionada&&n.length>0&&(this.cuentaSeleccionada=n[0]);const c=this.modelo.tasaActual||807.39;let i=0;a.forEach(s=>{const d=X(s.totalParcialUsd),l=X(s.abonosUsd);i+=Math.max(0,d-l)});const b=i*c;let t=0;o.forEach(s=>{const d=X(s.totalParcialUsd),l=X(s.abonosUsd);t+=Math.max(0,d-l)});const r=this.cuentas.reduce((s,d)=>s+X(d.abonosUsd),0);this.contenedor.innerHTML=`
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
                <p class="font-heading font-black text-2xl sm:text-3xl text-amber-950 mt-1">$ ${R(i)}</p>
                <p class="text-xs font-bold text-amber-800">Bs. ${R(b)} <span class="text-[10px] text-amber-700">(tasa ref.)</span></p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Cuentas en Local</span>
                    <span class="bg-blue-100 text-blue-900 font-black text-[10px] px-1.5 py-0.5 rounded border border-blue-300">${o.length} activas</span>
                </div>
                <p class="font-heading font-black text-2xl sm:text-3xl text-brand-black mt-1">$ ${R(t)}</p>
                <p class="text-xs font-bold text-gray-500">Saldo pendiente de cobro</p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Abonos Recaudados</span>
                    <span class="bg-emerald-100 text-emerald-900 font-black text-[10px] px-1.5 py-0.5 rounded border border-emerald-300">Anticipos</span>
                </div>
                <p class="font-heading font-black text-2xl sm:text-3xl text-emerald-700 mt-1">$ ${R(r)}</p>
                <p class="text-xs font-bold text-gray-500">Bs. ${R(r*c)}</p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Tasa Oficial del Día</span>
                    <span class="bg-gray-100 text-gray-800 font-black text-[10px] px-1.5 py-0.5 rounded border border-gray-300">BCV</span>
                </div>
                <p class="font-heading font-black text-xl sm:text-2xl text-brand-black mt-1">Bs. ${R(c)}</p>
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
                        </div>`:(()=>{const s=Math.ceil(n.length/this.POR_PAGINA_CUENTAS);this.paginaCuentas>s&&(this.paginaCuentas=s),this.paginaCuentas<1&&(this.paginaCuentas=1);const d=(this.paginaCuentas-1)*this.POR_PAGINA_CUENTAS;return n.slice(d,d+this.POR_PAGINA_CUENTAS).map(p=>{var x;const f=p.tipo==="deuda",h=X(p.totalParcialUsd),g=X(p.abonosUsd),y=Math.max(0,h-g),w=Math.max(0,g-h),I=((x=this.cuentaSeleccionada)==null?void 0:x.ventaId)===p.ventaId,D=Se(p.fechaCreacionUnix);let _="cursor-pointer border-2 border-brand-black rounded-lg p-3 sm:p-4 transition-all ";return I?_+=f?"bg-amber-50 text-brand-black border-l-[6px] border-l-amber-600 shadow-brutal ring-1 ring-amber-500/20":"bg-blue-50 text-brand-black border-l-[6px] border-l-blue-600 shadow-brutal ring-1 ring-blue-500/20":_+=f?"bg-stone-50 border-l-4 border-l-amber-300 text-brand-black shadow-brutal-sm hover:bg-amber-50/60 hover:-translate-y-0.5":"bg-stone-50 border-l-4 border-l-blue-200 text-brand-black shadow-brutal-sm hover:bg-blue-50/50 hover:-translate-y-0.5",`
                        <div data-cuenta-id="${p.ventaId}" class="${_}">
                            <div class="flex justify-between items-start gap-2">
                                <div>
                                    <div class="flex items-center gap-1.5">
                                        <span class="font-heading font-black text-base sm:text-lg leading-snug">${p.etiqueta}</span>
                                        ${f?'<span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-amber-400 bg-amber-100 text-amber-900">DEUDA</span>':'<span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-blue-300 bg-blue-100 text-blue-900">LOCAL</span>'}
                                    </div>
                                    <p class="text-[11px] font-mono font-bold text-gray-500 mt-0.5">
                                        ${f?`${D} · `:""}${p.ventaId.slice(0,9)}
                                    </p>
                                    ${p.nota?`<p class="text-[11px] italic font-semibold text-gray-600 mt-0.5 line-clamp-1">Nota: ${p.nota}</p>`:""}
                                </div>
                                <div class="text-right shrink-0">
                                    <p class="font-heading font-black text-base sm:text-lg text-brand-black">$${R(p.totalParcialUsd)}</p>
                                    ${w>0?`<p class="text-[11px] font-black text-emerald-700">A favor: +$${R(w)}</p>`:y>0?`<p class="text-xs font-bold ${f?"text-amber-900":"text-blue-900"}">Pend: $${R(y)}</p>`:'<p class="text-[11px] font-bold text-gray-400">Cubierta ($0,00)</p>'}
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-2 pt-2 border-t border-gray-200 text-[11px] font-bold text-gray-600">
                                <span>${p.lineas} consumos</span>
                                <span>Abonado: <strong class="text-brand-black">$${R(p.abonosUsd)}</strong></span>
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
                ${this.cuentaSeleccionada?(()=>{var g;const s=this.cuentaSeleccionada.tipo==="deuda",d=X(this.cuentaSeleccionada.totalParcialUsd),l=X(this.cuentaSeleccionada.abonosUsd),p=Math.max(0,d-l),f=Math.max(0,l-d),h=Se(this.cuentaSeleccionada.fechaCreacionUnix);return`
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
                                    +$${R(f)}
                                </p>
                                <p class="text-xs font-black text-emerald-700">
                                    Bs. ${R(f*c)} (excedente)
                                </p>
                                <div class="flex items-center justify-end gap-1.5 mt-1">
                                    <span class="font-bold text-[10px] text-gray-500">
                                        Consumo: $${R(d)} · Abonado: <strong class="text-brand-black">$${R(l)}</strong>
                                    </span>
                                    <button data-editar-abono title="Corregir monto abonado por error" class="text-[10px] font-black uppercase px-2 py-0.5 rounded border border-brand-black bg-amber-200 hover:bg-amber-300 text-brand-black">
                                        Editar
                                    </button>
                                </div>
                            `:`
                                <span class="text-xs font-bold text-gray-500 uppercase">${s?"Monto Adeudado Pendiente":"Saldo Pendiente"}</span>
                                <p class="font-heading font-black text-2xl sm:text-3xl text-brand-black">
                                    $${R(p)} USD
                                </p>
                                <p class="text-xs font-bold text-gray-600">
                                    Bs. ${R(p*c)} <span class="text-[10px] text-gray-400">(${s?"tasa hoy":"actual"})</span>
                                </p>
                                <div class="flex items-center justify-end gap-1.5 mt-1">
                                    <span class="font-bold text-xs text-gray-600">
                                        Total: $${R(d)} · Abonado: <strong class="text-brand-black">$${R(l)}</strong>
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
                                </div>`:this.cuentaSeleccionada.consumos.map(y=>`
                                <div class="flex items-center justify-between border-2 border-brand-black rounded-lg bg-white px-3 py-2 text-xs font-bold shadow-brutal-sm hover:bg-amber-50/50 transition-colors gap-2">
                                    <div class="flex-1 min-w-0 pr-2">
                                        <p class="truncate text-brand-black font-heading font-black text-sm" title="${y.nombre}">${y.nombre}</p>
                                        <p class="text-[11px] text-gray-500 font-semibold">${y.cantidad} un. &times; $${R(y.precioUsd)} <span class="text-gray-400 font-normal">· Bs. ${this.modelo.bs(X(y.precioUsd))} c/u</span></p>
                                    </div>
                                    <div class="flex items-center gap-3 shrink-0">
                                        <div class="text-right">
                                            <p class="font-heading font-black text-sm sm:text-base text-brand-black leading-tight">$${R(y.subtotalUsd)}</p>
                                            <p class="text-[10px] font-bold text-gray-500 leading-tight">Bs. ${this.modelo.bs(X(y.subtotalUsd))}</p>
                                        </div>
                                        <button data-del-consumo="${y.id}" title="Eliminar consumo y reintegrar stock al inventario" class="w-7 h-7 flex items-center justify-center rounded border-2 border-brand-black bg-red-100 hover:bg-red-500 hover:text-white text-red-800 text-sm font-black transition-colors active:scale-95">&times;</button>
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
                            ${this.productos.map(y=>{const w=!y.sinStock&&Number(y.stock)<=0,I=y.precioPaqueteUsd&&y.nombrePaquete||y.esCaja&&y.unidadesPorCaja&&y.unidadesPorCaja>1;return`
                                <div class="relative" data-producto-row="${y.sku}">
                                    <button data-add-sku="${y.sku}" data-modo="unidad" data-agotado="${w?"1":"0"}" class="text-left border-2 border-brand-black rounded p-2 transition-all text-xs font-bold ${w?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-gray-50 hover:bg-white shadow-sm hover:shadow-brutal-sm"} w-full">
                                        <div class="flex justify-between items-start gap-1">
                                            <p class="truncate flex-1" title="${y.nombre}">${y.nombre}</p>
                                            ${w?'<span class="bg-red-200 text-red-900 border border-red-400 text-[9px] font-black px-1 rounded">AGOTADO</span>':""}
                                        </div>
                                        <div class="flex justify-between items-center mt-1">
                                            <p class="text-brand-black font-black">$${R(y.precioUsd)}</p>
                                            <span class="text-[10px] ${w?"text-red-700 font-black":"text-gray-500"}">${we(y)}</span>
                                        </div>
                                    </button>
                                    ${I?`
                                    <button data-add-sku="${y.sku}" data-modo="paquete" data-agotado="${w?"1":"0"}" class="text-left border-2 border-brand-purple rounded p-1 transition-all text-[10px] font-bold mt-1 w-full ${w?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-purple-50 hover:bg-purple-100 shadow-sm hover:shadow-brutal-sm"}">
                                        <div class="flex justify-between items-center">
                                            <span class="text-purple-800">${y.nombrePaquete} ($${Number(y.precioPaqueteUsd).toFixed(2)})</span>
                                            <span class="text-purple-600">${y.unidadesPorCaja||1} un.</span>
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
                            ${s?"COBRAR Y LIQUIDAR DEUDA (TASA LIBRE)":f>0?`LIQUIDAR (+$${R(f)})`:"LIQUIDAR Y COBRAR"}
                        </button>
                    </div>
                </div>`})():`
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                    <h4 class="font-heading font-black text-2xl mb-2">Selecciona un registro</h4>
                    <p class="text-brand-text font-body text-sm max-w-sm">Haz clic en una cuenta activa o deuda de la lista izquierda para cargarle consumos, abonar pagos o cobrarla.</p>
                </div>
                `}
            </div>
        </div>`,this.vincularEventos()}vincularEventos(){var a,n,c,i,b,t,r,s,d,l;(a=document.getElementById("btn-nueva-cuenta"))==null||a.addEventListener("click",()=>this.modalNuevaCuenta("activa")),(n=document.getElementById("btn-nueva-deuda"))==null||n.addEventListener("click",()=>this.modalNuevaCuenta("deuda")),(c=document.getElementById("tab-todas"))==null||c.addEventListener("click",()=>{this.filtroTab="todas",this.paginaCuentas=1,this.render()}),(i=document.getElementById("tab-activas"))==null||i.addEventListener("click",()=>{this.filtroTab="activa",this.paginaCuentas=1,this.render()}),(b=document.getElementById("tab-deudas"))==null||b.addEventListener("click",()=>{this.filtroTab="deuda",this.paginaCuentas=1,this.render()}),(t=document.getElementById("cta-pag-ant"))==null||t.addEventListener("click",()=>{this.paginaCuentas>1&&(this.paginaCuentas--,this.render())}),(r=document.getElementById("cta-pag-sig"))==null||r.addEventListener("click",()=>{this.paginaCuentas++,this.render()}),this.contenedor.querySelectorAll("[data-cuenta-id]").forEach(p=>{p.addEventListener("click",()=>{const f=p.dataset.cuentaId;this.cuentaSeleccionada=this.cuentas.find(h=>h.ventaId===f)||null,this.render()})}),this.contenedor.querySelectorAll("[data-del-consumo]").forEach(p=>{p.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const f=p.dataset.delConsumo||"";try{const h=await L.eliminarConsumo(this.cuentaSeleccionada.ventaId,f);this.cuentaSeleccionada=h,this.render()}catch(h){this.mostrarToast(h instanceof Error?h.message:String(h),"error")}})});const e=this.contenedor.querySelector("#cta-buscar-prod");e&&he(e,40),e==null||e.addEventListener("input",()=>{const p=e.value.trim().toLowerCase(),f=this.contenedor.querySelector("#cta-grid-prod");if(f){const h=this.productos.filter(g=>!p||g.nombre.toLowerCase().includes(p));h.length===0?f.innerHTML='<p class="col-span-full text-center text-xs text-gray-400 py-4 font-bold">No se encontraron productos coincidentes.</p>':(f.innerHTML=h.map(g=>{const y=!g.sinStock&&Number(g.stock)<=0,w=g.precioPaqueteUsd&&g.nombrePaquete;return`
                        <div class="relative" data-producto-row="${g.sku}">
                            <button data-add-sku="${g.sku}" data-modo="unidad" data-agotado="${y?"1":"0"}" class="text-left border-2 border-brand-black rounded p-2 transition-all text-xs font-bold ${y?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-gray-50 hover:bg-white shadow-sm hover:shadow-brutal-sm"} w-full">
                                <div class="flex justify-between items-start gap-1">
                                    <p class="truncate flex-1" title="${g.nombre}">${g.nombre}</p>
                                    ${y?'<span class="bg-red-200 text-red-900 border border-red-400 text-[9px] font-black px-1 rounded">AGOTADO</span>':""}
                                </div>
                                <div class="flex justify-between items-center mt-1">
                                    <p class="text-brand-black font-black">$${R(g.precioUsd)}</p>
                                    <span class="text-[10px] ${y?"text-red-700 font-black":"text-gray-500"}">${we(g)}</span>
                                </div>
                            </button>
                            ${w?`
                            <button data-add-sku="${g.sku}" data-modo="paquete" data-agotado="${y?"1":"0"}" class="text-left border-2 border-brand-purple rounded p-1 transition-all text-[10px] font-bold mt-1 w-full ${y?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-purple-50 hover:bg-purple-100 shadow-sm hover:shadow-brutal-sm"}">
                                <div class="flex justify-between items-center">
                                    <span class="text-purple-800">${g.nombrePaquete||"Caja"} (${g.precioPaqueteUsd?`$${Number(g.precioPaqueteUsd).toFixed(2)}`:`$${(Number(g.precioUsd)*(g.unidadesPorCaja||1)).toFixed(2)}`})</span>
                                    <span class="text-purple-600">${g.unidadesPorCaja||1} un.</span>
                                </div>
                            </button>`:""}
                        </div>`}).join(""),this.vincularBotonesAgregar(f))}});const o=this.contenedor.querySelector("#cta-grid-prod");o&&this.vincularBotonesAgregar(o),this.contenedor.querySelectorAll("[data-editar-abono]").forEach(p=>{p.addEventListener("click",()=>this.modalEditarAbono())}),(s=document.getElementById("btn-editar-abono-cuenta"))==null||s.addEventListener("click",()=>this.modalEditarAbono()),(d=document.getElementById("btn-abonar-cuenta"))==null||d.addEventListener("click",()=>this.modalAbono()),(l=document.getElementById("btn-cerrar-cuenta"))==null||l.addEventListener("click",()=>this.modalCierre())}vincularBotonesAgregar(e){e.querySelectorAll("[data-add-sku]").forEach(o=>{o.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const a=o,n=a.dataset.addSku||"",c=a.dataset.agotado==="1",i=a.dataset.modo||"unidad";if(c){this.mostrarToast("Stock insuficiente: este producto no tiene existencias disponibles en inventario.","error");return}try{const b=await L.agregarConsumo(this.cuentaSeleccionada.ventaId,n,"1",!0,i);this.cuentaSeleccionada=b,this.render()}catch(b){this.mostrarToast(b instanceof Error?b.message:String(b),"error")}})})}modalNuevaCuenta(e="activa"){let o=e;const a=()=>{var s,d;const n=o==="deuda";this.modal.innerHTML=`
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
            </div>`;const c=this.modal.querySelector("#modal-tab-activa"),i=this.modal.querySelector("#modal-tab-deuda");c==null||c.addEventListener("click",()=>{o="activa",a()}),i==null||i.addEventListener("click",()=>{o="deuda",a()});const b=this.modal.querySelector("#modal-cta-nombre"),t=this.modal.querySelector("#modal-cta-nota");b&&he(b,40),t&&he(t,60),setTimeout(()=>b==null?void 0:b.focus(),50);const r=()=>{this.modal.innerHTML=""};(s=this.modal.querySelector("#modal-cta-cancel"))==null||s.addEventListener("click",r),(d=this.modal.querySelector("#modal-cta-ok"))==null||d.addEventListener("click",async()=>{const l=b==null?void 0:b.value.trim().slice(0,40),p=t==null?void 0:t.value.trim().slice(0,60);if(l){const f=await L.abrirCuenta(l,o,p,l);this.cuentaSeleccionada=f,o==="deuda"&&(this.filtroTab="deuda"),r(),this.render()}else this.mostrarToast(n?"Debe ingresar el nombre del cliente o empresa deudora.":"Debe ingresar un identificador válido para la cuenta.","error"),b==null||b.focus()})};a()}async modalAbono(){if(!this.cuentaSeleccionada)return;let e=[];try{e=await L.listarMetodosPago()}catch{e=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}const o=X(this.cuentaSeleccionada.totalParcialUsd),a=X(this.cuentaSeleccionada.abonosUsd),n=Math.max(0,o-a),c=this.modelo.tasaActual||807.39,i=(n*c).toFixed(2),b=this.cuentaSeleccionada.tipo==="deuda";let t=e.find(h=>h.nombre==="BIOPAGO")||e[0]||{nombre:"BIOPAGO",moneda:"BS"},r=t.moneda==="USD"?n:Number(i),s=c,d="";const l=()=>{var G;const h=e.filter(q=>q.moneda==="USD"),g=e.filter(q=>q.moneda==="BS"),y=h.map(q=>`<option value="${q.nombre}" ${q.nombre===t.nombre?"selected":""}>${q.nombre} ($ USD - Tasa Dinámica)</option>`).join(""),I=`
                <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                    ${g.map(q=>`<option value="${q.nombre}" ${q.nombre===t.nombre?"selected":""}>${q.nombre} (Bs.)</option>`).join("")}
                </optgroup>
                <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                    ${y}
                </optgroup>
            `,D=t.moneda==="USD",_=D&&s>0?s:c,x=D?r*_:r,v=c>0?x/c:0,k=a+v,P=k-o,T=P*c;let A="";if(r<=1e-4)A=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-700 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Aporte de este abono:</span>
                            <span class="font-heading font-black text-sm text-gray-800">$0.00 USD (Bs. 0.00)</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-600 border-t border-gray-300 pt-1 mt-1">
                            <span>Saldo pendiente actual:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(n)} USD (Bs. ${R(i)})</span>
                        </div>
                    </div>
                `;else if(P>.001)A=`
                    <div class="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${R(k)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${R(P)} USD (Bs. ${R(T)})</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Abono superior al consumo: este excedente se convertirá en ganancia o crédito al liquidar.</p>
                    </div>
                `;else if(P<-.001){const q=Math.abs(P),z=q*c;A=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(k)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${R(q)} USD (Bs. ${R(z)})</span>
                        </div>
                    </div>
                `}else A=`
                    <div class="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${R(k)} USD</span>
                        </div>
                    </div>
                `;this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                    <h3 class="font-heading font-black text-2xl mb-1">${b?"ABONAR A LA DEUDA":"REGISTRAR ABONO / ANTICIPO"}</h3>
                    <p class="font-body text-xs text-gray-700 mb-3">${(G=this.cuentaSeleccionada)==null?void 0:G.etiqueta} · El usuario decide libremente el monto y tasa del abono.</p>

                    <div class="bg-blue-50 border border-blue-400 rounded p-2.5 mb-3 text-xs text-blue-950 font-bold leading-tight">
                        ℹ <strong>Abonos con tasas dinámicas:</strong> En métodos en divisas (${h.map(q=>q.nombre).join(", ")}) se define la tasa al momento del abono. El diferencial frente a la tasa oficial se computa a favor del cliente.
                    </div>

                    <div class="space-y-3 mb-4">
                        <div>
                            <label class="block text-xs font-black uppercase text-gray-700 mb-1">Método de Pago del Abono</label>
                            <select id="select-metodo-abono" class="w-full border-2 border-brand-black rounded px-3 py-2 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                ${I}
                            </select>
                        </div>

                        ${D?`
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
                                    TASA BCV: ${R(c)}
                                </button>
                            </div>
                            <input id="input-tasa-abono" type="number" step="0.01" min="1" max="100000" value="${_}"
                                class="w-full border-2 border-brand-black rounded px-3 py-2 font-mono font-black text-base text-brand-black text-right focus:outline-none" />
                        </div>

                        <div class="bg-purple-50 border border-brand-purple rounded p-2 text-xs font-bold space-y-0.5">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Valor aportado en Bolívares:</span>
                                <span data-aporte-bs class="text-brand-purple font-mono font-black">Bs. ${R(x)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Abono computable (Tasa BCV):</span>
                                <span data-abono-computable class="text-brand-black font-mono font-black">$ ${R(v)} USD</span>
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
                            <p class="text-[11px] text-gray-500 mt-1">Equivalente oficial acreditado: <span class="font-bold text-brand-black">$ ${R(v)} USD</span> (Tasa BCV: ${R(c)})</p>
                        </div>
                        `}

                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia (Opcional)</label>
                            <input id="input-ref-abono" type="text" maxlength="25" value="${d}" placeholder="Ej: PAGO MOVIL 4912, USDT HASH..."
                                class="w-full border-2 border-brand-black rounded px-3 py-1.5 text-xs font-mono focus:outline-none" />
                        </div>

                        <div id="abono-preview-container">${A}</div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <button id="modal-abono-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded hover:bg-gray-100">VOLVER</button>
                        <button id="modal-abono-ok" ${r<=0?"disabled":""} class="bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed text-brand-black font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">APLICAR ABONO</button>
                    </div>
                </div>
            </div>`,f()},p=()=>{const h=t.moneda==="USD",g=h&&s>0?s:c,y=h?r*g:r,w=c>0?y/c:0,I=a+w,D=I-o,_=D*c;let x="";if(r<=1e-4)x=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-700 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Aporte de este abono:</span>
                            <span class="font-heading font-black text-sm text-gray-800">$0.00 USD (Bs. 0.00)</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-600 border-t border-gray-300 pt-1 mt-1">
                            <span>Saldo pendiente actual:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(n)} USD (Bs. ${R(i)})</span>
                        </div>
                    </div>
                `;else if(D>.001)x=`
                    <div class="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${R(I)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${R(D)} USD (Bs. ${R(_)})</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Abono superior al consumo: este excedente se convertirá en ganancia o crédito al liquidar.</p>
                    </div>
                `;else if(D<-.001){const P=Math.abs(D),T=P*c;x=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(I)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${R(P)} USD (Bs. ${R(T)})</span>
                        </div>
                    </div>
                `}else x=`
                    <div class="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${R(I)} USD</span>
                        </div>
                    </div>
                `;const v=this.modal.querySelector("#abono-preview-container");v&&(v.innerHTML=x);const k=this.modal.querySelector("#modal-abono-ok");if(k&&(k.disabled=r<=0),h){const P=this.modal.querySelector("[data-aporte-bs]");P&&(P.textContent=`Bs. ${R(y)}`);const T=this.modal.querySelector("[data-abono-computable]");T&&(T.textContent=`$ ${R(w)} USD`)}},f=()=>{var g,y,w,I,D,_,x;const h=()=>{this.modal.innerHTML=""};(g=this.modal.querySelector("#modal-abono-cancel"))==null||g.addEventListener("click",h),(y=this.modal.querySelector("#select-metodo-abono"))==null||y.addEventListener("change",v=>{const k=v.target.value,P=e.find(T=>T.nombre===k);if(P){const T=t.moneda==="USD";t=P,P.moneda==="USD"?(s=c,T||(r=n)):T&&(r=Number(i)),l()}}),(w=this.modal.querySelector("#input-monto-abono"))==null||w.addEventListener("input",v=>{r=X(v.target.value),p()}),(I=this.modal.querySelector("#input-tasa-abono"))==null||I.addEventListener("input",v=>{s=X(v.target.value),p()}),(D=this.modal.querySelector("#btn-reset-tasa-abono"))==null||D.addEventListener("click",()=>{s=c,l()}),(_=this.modal.querySelector("#input-ref-abono"))==null||_.addEventListener("input",v=>{d=v.target.value}),(x=this.modal.querySelector("#modal-abono-ok"))==null||x.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const v=t.moneda==="USD",k=v&&s>0?s:c,P=v?r*k:r,T=c>0?P/c:0;if(T<=0||!Number.isFinite(T)){this.mostrarToast("Por favor ingrese un monto válido.","error");return}const A=await L.abonarCuenta(this.cuentaSeleccionada.ventaId,T,P);A&&(this.cuentaSeleccionada=A),h(),this.render()})};l()}modalEditarAbono(){var g,y,w,I;if(!this.cuentaSeleccionada)return;const e=X(this.cuentaSeleccionada.totalParcialUsd),o=X(this.cuentaSeleccionada.abonosUsd),a=this.modelo.tasaActual||807.39;this.modal.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                <h3 class="font-heading font-black text-2xl mb-1">CORREGIR SALDO ABONADO</h3>
                <p class="font-body text-xs text-gray-700 mb-4">${this.cuentaSeleccionada.etiqueta} · Modifique el saldo acumulado en caso de error de registro o digitación.</p>

                <div class="bg-gray-50 border-2 border-brand-black rounded p-3 mb-4 text-xs space-y-1">
                    <div class="flex justify-between font-bold text-gray-600">
                        <span>Consumo acumulado:</span>
                        <span>$${R(e)} (Bs. ${this.modelo.bs(e)})</span>
                    </div>
                    <div class="flex justify-between font-bold text-amber-800">
                        <span>Abonado registrado actualmente:</span>
                        <span>$${R(o)} (Bs. ${this.modelo.bs(o)})</span>
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
                        <button id="btn-preset-exacto" type="button" class="text-xs font-bold px-2.5 py-1.5 rounded border border-gray-400 bg-gray-100 hover:bg-gray-200 text-gray-800">Cubrir Todo ($${R(e)})</button>
                    </div>

                    <div id="edit-preview-box" class="rounded p-2.5 border-2 border-brand-black text-xs"></div>
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <button id="modal-edit-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">VOLVER</button>
                    <button id="modal-edit-ok" class="bg-amber-400 hover:bg-amber-500 text-brand-black font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">GUARDAR CORRECCIÓN</button>
                </div>
            </div>
        </div>`;const n=this.modal.querySelector("#tab-edit-usd"),c=this.modal.querySelector("#tab-edit-bs"),i=this.modal.querySelector("#sec-edit-usd"),b=this.modal.querySelector("#sec-edit-bs"),t=this.modal.querySelector("#edit-abono-usd-val"),r=this.modal.querySelector("#edit-abono-bs-val"),s=this.modal.querySelector("#edit-usd-equiv"),d=this.modal.querySelector("#edit-bs-equiv"),l=this.modal.querySelector("#edit-preview-box");let p="usd";const f=()=>{let D=0;p==="usd"?(D=X(t==null?void 0:t.value),s&&(s.textContent=`Bs. ${(D*a).toFixed(2)}`)):(D=X(r==null?void 0:r.value)/a,d&&(d.textContent=`$${D.toFixed(2)} USD`)),Number.isFinite(D)||(D=0);const _=D-e;if(l)if(_>.001)l.className="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold",l.innerHTML=`
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Saldo Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${R(D)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${R(_)} USD</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Excedente a favor del cliente.</p>
                    `;else if(_<-.001){const x=Math.abs(_);l.className="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold",l.innerHTML=`
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Saldo Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(D)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${R(x)} USD</span>
                        </div>
                    `}else l.className="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold",l.innerHTML=`
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${R(D)} USD</span>
                        </div>
                    `};t&&xe(t,5e4,8,f),r&&xe(r,5e7,11,f),f(),(g=this.modal.querySelector("#btn-preset-cero"))==null||g.addEventListener("click",()=>{const D=X(p==="usd"?t==null?void 0:t.value:r==null?void 0:r.value);(o>0||D>0)&&!window.confirm("¿Desea restablecer el saldo abonado a $0.00? Esta acción dejará los pagos registrados en cero.")||(t&&(t.value="0.00"),r&&(r.value="0.00"),f())}),(y=this.modal.querySelector("#btn-preset-exacto"))==null||y.addEventListener("click",()=>{t&&(t.value=e.toFixed(2)),r&&(r.value=(e*a).toFixed(2)),f()}),n==null||n.addEventListener("click",()=>{p="usd",n.className="flex-1 py-1.5 font-heading font-black text-xs rounded bg-brand-black text-white",c.className="flex-1 py-1.5 font-heading font-bold text-xs rounded text-brand-black hover:bg-white",i==null||i.classList.remove("hidden"),b==null||b.classList.add("hidden"),f()}),c==null||c.addEventListener("click",()=>{p="bs",c.className="flex-1 py-1.5 font-heading font-black text-xs rounded bg-brand-black text-white",n.className="flex-1 py-1.5 font-heading font-bold text-xs rounded text-brand-black hover:bg-white",b==null||b.classList.remove("hidden"),i==null||i.classList.add("hidden"),f()});const h=()=>{this.modal.innerHTML=""};(w=this.modal.querySelector("#modal-edit-cancel"))==null||w.addEventListener("click",h),(I=this.modal.querySelector("#modal-edit-ok"))==null||I.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;let D=0;if(p==="usd"?D=X(t==null?void 0:t.value):D=X(r==null?void 0:r.value)/a,!Number.isFinite(D)||D<0||D>5e4){this.mostrarToast("Monto inválido. Ingrese un valor entre $0.00 y $50,000.00 USD.","error");return}if(Math.abs(D-o)>.009){const v=D===0?`¿Confirmas reiniciar el saldo abonado a $0.00? (Monto previo registrado: $${R(o)})`:`¿Confirmas modificar el saldo abonado de esta cuenta a $${R(D)} USD (Bs. ${R(D*a)})? (Monto previo registrado: $${R(o)})`;if(!window.confirm(v))return}const x=await L.editarAbonoCuenta(this.cuentaSeleccionada.ventaId,D);x&&(this.cuentaSeleccionada=x),h(),this.render()})}async modalCierre(){var _,x,v;if(!this.cuentaSeleccionada)return;const e=this.cuentaSeleccionada.tipo==="deuda",o=X(this.cuentaSeleccionada.totalParcialUsd),a=X(this.cuentaSeleccionada.abonosUsd),n=Math.max(0,Math.round((o-a)*100)/100),c=Math.max(0,Math.round((a-o)*100)/100),i=this.modelo.tasaActual||807.39;if(n<=.009){this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                    <h3 class="font-heading font-black text-2xl mb-1">${e?"LIQUIDAR DEUDA":"LIQUIDAR CUENTA"}</h3>
                    <p class="font-body text-sm text-gray-600 mb-4">${this.cuentaSeleccionada.etiqueta} · Total cubierto por abonos previos</p>
                    
                    <div class="space-y-2 mb-4">
                        <div class="flex justify-between text-xs font-bold text-gray-500">
                            <span>Total de consumos:</span>
                            <span>$${R(o)} (Bs. ${R(o*i)})</span>
                        </div>
                        <div class="flex justify-between text-xs font-bold text-emerald-700">
                            <span>Total abonado acumulado:</span>
                            <span>$${R(a)} (Bs. ${R(a*i)})</span>
                        </div>

                        ${c>0?`
                        <div class="bg-emerald-50 border-2 border-emerald-600 rounded p-4 text-center mt-3">
                            <span class="text-xs font-black text-emerald-900 uppercase">Saldo a Favor del Cliente</span>
                            <p class="font-heading font-black text-3xl text-emerald-600 mt-1">+$${R(c)} USD</p>
                            <p class="font-bold text-xs text-emerald-800">Bs. ${R(c*i)}</p>
                            <div class="mt-3 bg-white border border-emerald-500 rounded p-2.5 text-xs text-emerald-950 font-bold leading-tight text-left">
                                ✓ <strong>Consolidación como ganancia:</strong> Al liquidar y cerrar la cuenta, este excedente de <strong>$${R(c)}</strong> se consolidará automáticamente como ganancia del negocio.
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
            </div>`;const k=()=>{this.modal.innerHTML=""};(_=this.modal.querySelector("#modal-liq-cancel"))==null||_.addEventListener("click",k);let P=!1;(x=this.modal.querySelector("#modal-liq-ok"))==null||x.addEventListener("click",async()=>{if(!P&&this.cuentaSeleccionada){P=!0;try{await L.cerrarCuenta(this.cuentaSeleccionada.ventaId,"0.00",i.toFixed(4)),this.cuentaSeleccionada=null,k(),this.render()}catch{P=!1}}});return}let b=[];try{b=await L.listarMetodosPago()}catch{b=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}let t=i;const r=e?b.find(k=>k.nombre==="TRANSF.BS.")||b[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"}:b.find(k=>k.nombre==="PUNTOD.VENTA")||b[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"},s=this.cuentaSeleccionada.ventaId,d=this.pagosBorradorPorCuenta.get(s);let l;if(d&&d.length>0){if(l=d.map(k=>({...k})),l.length===1&&l[0]){const k=l[0];k.monto=k.moneda==="USD"?n:Number((n*t).toFixed(2)),k.tasaCambio=t}else if(l.length>1){const k=Number((n*t).toFixed(2));let P=0;for(let G=0;G<l.length-1;G++){const q=l[G],z=q.tasaCambio>0?q.tasaCambio:t;P+=q.moneda==="USD"?q.monto*z:q.monto}const T=Math.max(0,Math.round((k-P)*100)/100),A=l[l.length-1];A&&(A.monto=A.moneda==="USD"?t>0?Number((T/t).toFixed(2)):0:T,A.tasaCambio=t)}}else l=[{id:"p-1",metodo:r.nombre,moneda:r.moneda,monto:r.moneda==="USD"?n:Number((n*t).toFixed(2)),tasaCambio:t,referencia:""}];const p=this.resolucionVueltoPorCuenta.get(s);let f=(p==null?void 0:p.estado)||"PAGADO",h=(p==null?void 0:p.metodo)||(e?"TRANSF.BS.":"BS.EFEC."),g=(p==null?void 0:p.tasa)||t;b.some(k=>k.nombre===h)||(h=((v=b[0])==null?void 0:v.nombre)||(e?"TRANSF.BS.":"BS.EFEC."));let y=!1;const w=()=>{let k=0;for(const N of l)if(N.moneda==="USD"){const S=N.tasaCambio>0?N.tasaCambio:t;k+=N.monto*S}else k+=N.monto;k=Math.round(k*100)/100;const P=Math.round(n*t*100)/100,T=t>0?Math.round(k/t*100)/100:0,A=Math.max(0,Math.round((P-k)*100)/100),G=t>0?Math.max(0,Math.round(A/t*100)/100):0,q=Math.max(0,Math.round((k-P)*100)/100),z=t>0?Math.max(0,Math.round(q/t*100)/100):0,B=k>=P-.01&&l.every(N=>N.monto>0);return{cubiertoUsd:T,cubiertoBs:k,totalEsperadoBs:P,faltanteUsd:G,faltanteBs:A,vueltoUsd:z,vueltoBs:q,puedeConfirmar:B}},I=()=>{var S,j;const k=w(),P=b.filter(E=>E.moneda==="USD"),T=b.filter(E=>E.moneda==="BS"),A=l.map((E,M)=>{const J=P.map(O=>`<option value="${O.nombre}" ${O.nombre===E.metodo?"selected":""}>${O.nombre} ($ - Tasa Dinámica)</option>`).join(""),H=`
                        <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                            ${T.map(O=>`<option value="${O.nombre}" ${O.nombre===E.metodo?"selected":""}>${O.nombre} (Bs.)</option>`).join("")}
                        </optgroup>
                        <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                            ${J}
                        </optgroup>
                    `,U=E.tasaCambio>0?E.tasaCambio:t,$=E.moneda==="USD"?E.monto*U:E.monto,V=t>0?$/t:0;return`
                    <div class="border-2 border-brand-black rounded-lg p-2.5 bg-gray-50 mb-2">
                        <div class="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                            <span class="font-heading font-black text-xs uppercase text-gray-700">
                                Pago #${M+1} · <span class="${E.moneda==="USD"?"text-brand-purple":"text-brand-black"}">${E.moneda==="USD"?"Divisa ($ USD)":"Moneda Nacional (Bs.)"}</span>
                            </span>
                            ${l.length>1?`<button data-eliminar-pago="${E.id}" class="text-[11px] font-black text-red-600 hover:text-red-800 bg-red-50 border border-red-300 rounded px-2 py-0.5">Eliminar</button>`:""}
                        </div>
                        ${E.moneda==="USD"?`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Divisa</label>
                                <select data-pago-metodo="${E.id}" class="w-full border-2 border-brand-black rounded px-2 py-1 font-heading font-black text-xs bg-white focus:outline-none">
                                    ${H}
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
                                    <button type="button" data-reset-tasa-cuenta="${E.id}" class="text-[9px] font-black uppercase text-brand-purple hover:underline" title="Restablecer a tasa oficial">Base: ${R(t)}</button>
                                </div>
                                <input type="number" step="0.01" min="1" max="100000" data-pago-tasa="${E.id}" value="${U>0?U:t}"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1 text-xs font-mono font-black focus:outline-none text-right" />
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${E.id}" value="${E.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1 text-xs font-mono focus:outline-none" />
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-1 mt-1 text-[11px]">
                            <span class="font-bold text-brand-purple">Aporte: Bs. ${R($)}</span>
                            <span class="text-gray-500 font-mono">Equiv. base: $ ${R(V)} ${U!==t?`(Tasa: Bs. ${R(U)} vs Base: Bs. ${R(t)})`:""}</span>
                        </div>
                        `:`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-5">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Bolívares</label>
                                <select data-pago-metodo="${E.id}" class="w-full border-2 border-brand-black rounded px-2 py-1 font-heading font-black text-xs bg-white focus:outline-none">
                                    ${H}
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
                            <span class="font-bold text-brand-black">Aporte directo: Bs. ${R(E.monto)}</span>
                            <span class="text-gray-500 font-mono">Equiv. base: $ ${R(V)}</span>
                        </div>
                        `}
                    </div>`}).join(""),G=b.find(E=>E.nombre===h),q=(G==null?void 0:G.moneda)==="USD",z=g>0?g:t,B=q&&z>0?Number((k.vueltoBs/z).toFixed(2)):k.vueltoUsd,N=k.faltanteBs>.009?`
                    <div class="bg-amber-50 border-2 border-amber-500 rounded p-2.5 text-center mb-3">
                        <p class="text-xs font-black uppercase text-amber-900">Monto Incompleto por Cubrir</p>
                        <p class="font-heading font-black text-lg text-amber-700">Faltan Bs. ${R(k.faltanteBs)} · <span class="text-sm text-amber-900">$ ${R(k.faltanteUsd)} (Equiv. Base)</span></p>
                    </div>`:k.vueltoBs>.009?`
                    <div class="border-2 border-emerald-700 bg-emerald-50/70 rounded-lg p-3 mb-3">
                        <div class="flex flex-wrap items-center justify-between gap-1 mb-2">
                            <div>
                                <span class="text-[10px] font-black uppercase text-emerald-900 tracking-wide block">Excedente / Vuelto del Cliente</span>
                                <span class="font-heading font-black text-lg text-emerald-800">Bs. ${R(k.vueltoBs)}</span>
                            </div>
                            <span class="text-xs font-bold text-emerald-900 font-mono">$ ${R(k.vueltoUsd)} equiv.</span>
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
                                    ${b.map(E=>`
                                        <option value="${E.nombre}" ${E.nombre===h?"selected":""}>
                                            ${E.nombre} (${E.moneda==="USD"?"$ Dólares":"Bs. Bolívares"})
                                        </option>
                                    `).join("")}
                                </select>
                            </div>
                            ${q?`
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
                                        $ ${R(B)} USD
                                    </span>
                                </div>
                            </div>
                            `:`
                            <div class="flex items-center justify-between pt-1 border-t border-gray-100 text-xs">
                                <span class="font-bold text-gray-600">Total a Entregar en Bolívares:</span>
                                <span class="font-heading font-black text-base text-brand-black">Bs. ${R(k.vueltoBs)}</span>
                            </div>
                            `}
                        </div>
                        `:`
                        <div class="bg-white border border-gray-300 rounded p-2 text-xs text-gray-700">
                            <p class="font-bold text-emerald-900 mb-0.5">Vuelto Retenido como Saldo a Favor</p>
                            <p class="text-[11px] text-gray-600 leading-tight">
                                El excedente de <b>Bs. ${R(k.vueltoBs)} ($ ${R(k.vueltoUsd)})</b> no genera egreso físico de caja y se asienta en el comprobante como saldo a favor retenido en el negocio.
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
                                ${(S=this.cuentaSeleccionada)==null?void 0:S.etiqueta} ${(j=this.cuentaSeleccionada)!=null&&j.cliente?`· ${this.cuentaSeleccionada.cliente}`:""}
                            </p>
                        </div>
                        <button id="modal-liq-cerrar" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
                    </div>

                    <!-- Resumen del Importe Pendiente -->
                    <div class="bg-brand-gray/30 border-2 border-brand-black rounded-lg p-3 mb-3 flex flex-wrap justify-between items-center gap-2">
                        <div>
                            <span class="text-[10px] font-bold text-gray-600 uppercase block">Saldo Neto a Cobrar</span>
                            <div class="flex items-baseline gap-2">
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${R(n)} USD</span>
                                <span class="font-heading font-black text-xl text-brand-purple">Bs. ${R(k.totalEsperadoBs)}</span>
                            </div>
                        </div>
                        <div class="text-right text-xs">
                            <span class="text-gray-500 font-bold block">Consumo: $${R(o)} · Abonos: $${R(a)}</span>
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
                        ${A}
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
                    ${y?`
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
                        <button id="modal-liq-ok" ${k.puedeConfirmar?"":"disabled"}
                            class="bg-green-700 hover:bg-green-800 disabled:opacity-30 disabled:cursor-not-allowed text-white font-heading font-black py-2 px-5 rounded border-2 border-brand-black shadow-brutal-sm text-sm">
                            CONFIRMAR COBRO
                        </button>
                    </div>
                </div>
            </div>`,D()},D=()=>{var G,q,z,B,N,S,j,E,M,J,te;const k=()=>{this.cuentaSeleccionada&&(this.pagosBorradorPorCuenta.set(this.cuentaSeleccionada.ventaId,l),this.resolucionVueltoPorCuenta.set(this.cuentaSeleccionada.ventaId,{estado:f,metodo:h,tasa:g}))},P=()=>{k(),this.modal.innerHTML=""};(G=this.modal.querySelector("#modal-liq-cerrar"))==null||G.addEventListener("click",P),(q=this.modal.querySelector("#modal-liq-cancel"))==null||q.addEventListener("click",P),(z=this.modal.querySelector("#modal-liq-agregar-mas"))==null||z.addEventListener("click",()=>{k(),this.modal.innerHTML=""}),(B=this.modal.querySelector("#btn-vuelto-pagado-cuenta"))==null||B.addEventListener("click",()=>{f="PAGADO",k(),I()}),(N=this.modal.querySelector("#btn-vuelto-retenido-cuenta"))==null||N.addEventListener("click",()=>{f="RETENIDO",k(),I()}),(S=this.modal.querySelector("#select-metodo-vuelto-cuenta"))==null||S.addEventListener("change",H=>{h=H.target.value,k(),I()});const T=this.modal.querySelector("#input-tasa-vuelto-cuenta");if(T&&(T.addEventListener("input",H=>{const U=X(H.target.value);g=U>0?U:t,k()}),T.addEventListener("blur",()=>{I()})),(j=this.modal.querySelector("#btn-reset-tasa-vuelto-cuenta"))==null||j.addEventListener("click",()=>{g=t,k(),I()}),e){const H=this.modal.querySelector("#deuda-tasa-input"),U=this.modal.querySelector("#btn-tasa-bcv");H&&xe(H,1e5,9,()=>{const $=X(H.value);t=Number.isFinite($)&&$>0?$:i,k(),I()}),U==null||U.addEventListener("click",()=>{t=i,k(),I()})}this.modal.querySelectorAll("select[data-pago-metodo]").forEach(H=>{H.addEventListener("change",U=>{const $=H.dataset.pagoMetodo,V=U.target.value,O=l.find(Q=>Q.id===$);if(O){const Q=b.find(de=>de.nombre===V),oe=(Q==null?void 0:Q.moneda)||"BS";O.moneda=oe,O.tasaCambio=t,l.length===1?O.monto=O.moneda==="USD"?n:Number((n*t).toFixed(2)):oe!==O.moneda&&(oe==="USD"?O.monto=Number((t>0?O.monto/t:0).toFixed(2)):O.monto=Number((O.monto*t).toFixed(2))),O.metodo=V,k(),I()}})}),this.modal.querySelectorAll("input[data-pago-tasa]").forEach(H=>{H.addEventListener("input",U=>{const $=H.dataset.pagoTasa,V=X(U.target.value),O=l.find(Q=>Q.id===$);if(O){O.tasaCambio=V>0?V:t,k();const Q=w(),oe=this.modal.querySelector("#modal-liq-ok");oe&&(oe.disabled=!Q.puedeConfirmar)}}),H.addEventListener("blur",()=>{I()})}),this.modal.querySelectorAll("button[data-reset-tasa-cuenta]").forEach(H=>{H.addEventListener("click",()=>{const U=H.dataset.resetTasaCuenta,$=l.find(V=>V.id===U);$&&($.tasaCambio=t,k(),I())})}),this.modal.querySelectorAll("input[data-pago-monto]").forEach(H=>{H.addEventListener("input",U=>{const $=H.dataset.pagoMonto,V=X(U.target.value),O=l.find(Q=>Q.id===$);if(O){O.monto=V,k();const Q=w(),oe=this.modal.querySelector("#modal-liq-ok");oe&&(oe.disabled=!Q.puedeConfirmar)}}),H.addEventListener("blur",()=>{I()})}),this.modal.querySelectorAll("input[data-pago-ref]").forEach(H=>{H.addEventListener("input",U=>{const $=H.dataset.pagoRef,V=U.target.value,O=l.find(Q=>Q.id===$);O&&(O.referencia=V,k())})}),this.modal.querySelectorAll("button[data-eliminar-pago]").forEach(H=>{H.addEventListener("click",()=>{const U=H.dataset.eliminarPago;l=l.filter($=>$.id!==U),k(),I()})}),(E=this.modal.querySelector("#btn-agregar-pago-cuenta"))==null||E.addEventListener("click",()=>{let H=w();const U="p-"+Math.random().toString(36).slice(2,7),$=b.find(O=>!l.some(Q=>Q.metodo===O.nombre))||b[0]||{nombre:"BS.EFEC.",moneda:"BS"};if(H.faltanteBs<=.01&&l.length===1&&l[0]){const O=l[0],Q=O.tasaCambio>0?O.tasaCambio:t,oe=O.moneda==="USD"?O.monto*Q:O.monto,de=Math.round(oe/2*100)/100;O.monto=O.moneda==="USD"?Q>0?Number((de/Q).toFixed(2)):0:de,H=w()}const V=H.faltanteBs>0?H.faltanteBs:0;l.push({id:U,metodo:$.nombre,moneda:$.moneda,monto:$.moneda==="USD"?t>0?Number((V/t).toFixed(2)):0:V,tasaCambio:t,referencia:""}),k(),I()}),(M=this.modal.querySelector("#btn-toggle-nuevo-metodo-cuenta"))==null||M.addEventListener("click",()=>{y=!y,I()}),(J=this.modal.querySelector("#btn-guardar-nuevo-metodo-cuenta"))==null||J.addEventListener("click",()=>{(async()=>{const H=this.modal.querySelector("#input-nuevo-metodo-nombre-cuenta"),U=(H==null?void 0:H.value.trim())||"",$=this.modal.querySelector('input[name="radio-nuevo-metodo-moneda-cuenta"][value="USD"]'),V=$!=null&&$.checked?"USD":"BS";if(U)try{b=await L.crearMetodoPago(U,V),y=!1,I()}catch{}})()});let A=!1;(te=this.modal.querySelector("#modal-liq-ok"))==null||te.addEventListener("click",()=>{A||(A=!0,(async()=>{if(!this.cuentaSeleccionada)return;const H=this.modal.querySelector("#cobro-error-cuenta");try{const U=l.filter(ne=>ne.monto>0).map(ne=>{const ue=ne.moneda==="USD"&&ne.tasaCambio>0?ne.tasaCambio:t,Ee=ne.moneda==="USD"?ne.monto*ue:ne.monto,Ie=t>0?Ee/t:0;return{metodo:ne.metodo,moneda:ne.moneda,montoUsd:(ne.moneda==="USD"?ne.monto:Ie).toFixed(2),montoBs:Ee.toFixed(2),tasaCambio:ne.moneda==="USD"?ue.toFixed(2):void 0,referencia:ne.referencia.trim()||void 0}});if(U.length===0)throw new Error("Debe especificar al menos un pago válido.");const $=w(),V=U.reduce((ne,ue)=>ne+Number(ue.montoBs),0),O=b.find(ne=>ne.nombre===h),Q=(O==null?void 0:O.moneda)==="USD",oe=Q?g>0?g:t:void 0,de=Q&&oe?($.vueltoBs/oe).toFixed(2):$.vueltoUsd.toFixed(2),Te={estado:$.vueltoBs>.009?f:"SIN_VUELTO",metodo:$.vueltoBs>.009&&f==="PAGADO"?h:void 0,montoBs:$.vueltoBs>.009?$.vueltoBs.toFixed(2):void 0,montoUsd:$.vueltoBs>.009?de:void 0,tasa:$.vueltoBs>.009&&f==="PAGADO"&&oe?oe.toFixed(2):void 0},fe=this.cuentaSeleccionada.ventaId;await L.cerrarCuenta(fe,V.toFixed(2),t.toFixed(4),U,Te),this.pagosBorradorPorCuenta.delete(fe),this.resolucionVueltoPorCuenta.delete(fe),this.cuentaSeleccionada=null,this.modal.innerHTML="",this.render()}catch(U){A=!1,H&&(H.textContent=U instanceof Error?U.message.replace(/"/g,""):String(U),H.classList.remove("hidden"))}})())})};I()}mostrarToast(e,o="info"){var c;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},n=document.createElement("div");n.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,n.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(c=n.querySelector("button"))==null||c.addEventListener("click",()=>n.remove()),document.body.appendChild(n),setTimeout(()=>n.remove(),8e3)}}const ie=(u,e,o,a)=>{u.maxLength=o,u.addEventListener("input",()=>{let n=u.value.replace(/[^0-9.,]/g,"");const c=n.split(/[.,]/);c.length>2?n=c[0]+"."+c.slice(1).join(""):c.length===2&&(n=c[0]+"."+c[1].slice(0,2)),n.length>o&&(n=n.slice(0,o));const i=parseFloat(n.replace(",","."));Number.isFinite(i)&&i>e&&(n=String(e)),u.value!==n&&(u.value=n),a&&a()})},Ae=(u,e,o,a,n)=>{u.maxLength=a,u.addEventListener("input",()=>{let c=u.value.replace(/[^0-9]/g,"");c.length>a&&(c=c.slice(0,a));const i=parseInt(c,10);Number.isFinite(i)&&i>o&&(c=String(o)),u.value!==c&&(u.value=c),n&&n()}),u.addEventListener("blur",()=>{const c=parseInt(u.value,10);Number.isFinite(c)&&c<e&&(u.value=String(e),n&&n())})},le=(u,e,o=!1)=>{u.maxLength=e,u.addEventListener("input",()=>{let a=o?u.value.replace(/[<>{}\\]/g,""):u.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ .,/_#-]/g,"");a.length>e&&(a=a.slice(0,e)),u.value!==a&&(u.value=a)})};class at{constructor(e,o,a=!0){C(this,"contenedor");C(this,"modelo");C(this,"categorias",[]);C(this,"tasasImpuestos",[]);C(this,"productos",[]);C(this,"busquedaRepo","");C(this,"busquedaCatalogo","");C(this,"filtroCategoriaRepo","todas");C(this,"filtroCategoriaCatalogo","todas");C(this,"tabActiva","alta");C(this,"semaforoStock",{rojoMax:5,amarilloMax:15});C(this,"POR_PAGINA_CAT",40);C(this,"POR_PAGINA_REPO",24);C(this,"paginaCat",1);C(this,"paginaRepo",1);this.duenoAutenticado=a,this.contenedor=e,this.modelo=o,this.modelo}getUnitLabel(e){return e.unidad==="kg"?"kg":e.unidad==="ml"?"ml":e.unidad==="un"?"un.":e.capacidades&2?"kg":"un."}getNombreCategoria(e){if(!e)return"General";const o=this.categorias.find(a=>a.id===e);return o?o.nombre:"General"}getConteoCategorias(){const e={todas:this.productos.length};return this.categorias.forEach(o=>{e[o.id]=0}),e["cat-general"]===void 0&&(e["cat-general"]=0),this.productos.forEach(o=>{const a=o.categoriaId||"cat-general";e[a]=(e[a]||0)+1}),e}async render(e){var s;e&&(this.tabActiva=e);const[o,a,n,c]=await Promise.all([L.categorias(),L.tasasImpuestos(),L.productos(),L.obtenerSemaforoStock()]);this.categorias=o,this.tasasImpuestos=a,this.productos=n,this.semaforoStock=c;const i=this.getConteoCategorias(),b="Ej: Artículo Comercial 1L, Presentación 500g, Pack Estándar...",r=((s=this.modelo.getConfig())==null?void 0:s.privacidadInventario)&&!this.duenoAutenticado;this.contenedor.innerHTML=`
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
                    ${this.categorias.map(d=>{const l=i[d.id]||0,p=this.filtroCategoriaRepo===d.id;return`
                        <button data-cat-chip="${d.id}" class="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors ${p?"bg-brand-black text-white":"bg-gray-100 text-brand-black hover:bg-gray-200"}">
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
        </div>`,this.conectarEventos(),this.renderCatalogoLista(),this.renderRepoLista()}conectarEventos(){var j,E,M,J,te,H;const e=document.getElementById("tab-alta"),o=document.getElementById("tab-stock"),a=document.getElementById("tab-ajustes"),n=document.getElementById("inv-seccion-alta"),c=document.getElementById("inv-seccion-stock"),i=document.getElementById("inv-seccion-ajustes"),b=(U,$,V)=>{this.tabActiva=U,[e,o,a].forEach(O=>{O&&(O.className="w-36 sm:w-48 h-9 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0")}),[n,c,i].forEach(O=>{O==null||O.classList.remove("block"),O==null||O.classList.add("hidden")}),$&&V&&($.className="w-36 sm:w-48 h-9 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white transition-colors shrink-0",V.classList.remove("hidden"),V.classList.add("block"))};e==null||e.addEventListener("click",()=>b("alta",e,n)),o==null||o.addEventListener("click",()=>{b("stock",o,c),this.renderRepoLista()}),a==null||a.addEventListener("click",()=>b("ajustes",a,i));const t=document.getElementById("prod-precio-bruto"),r=document.getElementById("prod-margen"),s=document.getElementById("prod-impuesto"),d=document.getElementById("prod-precio-neto"),l=U=>{if(!U)return 0;const $=U.trim().replace(",","."),V=parseFloat($);return Number.isFinite(V)&&!isNaN(V)?V:0},p=()=>{if(!t||!d||!r||!s)return;const U=l(t.value),$=l(r.value)/100,V=l(s.value)/100;if(U>0){const Q=U*(1+$)*(1+V);d.value=Q.toFixed(2)}},f=()=>{if(!t||!d||!r||!s)return;const U=l(d.value),$=l(t.value),V=l(r.value)/100,O=l(s.value)/100;if(U>0){const Q=U/(1+O);if($>0){const oe=(Q-$)/$*100;r.value=Math.max(0,Math.round(oe*10)/10).toFixed(1)}else V>0&&(t.value=(Q/(1+V)).toFixed(2))}},h=document.getElementById("prod-stock"),g=document.getElementById("prod-nombre"),y=document.getElementById("prod-unidad"),w=document.getElementById("cat-nombre"),I=document.getElementById("tax-nombre"),D=document.getElementById("tax-pct"),_=document.getElementById("cat-buscar-filtro"),x=document.getElementById("repo-buscar"),v=document.getElementById("alta-prod-msg");g&&le(g,64),t&&ie(t,99999.99,8,p),r&&ie(r,999,5,p),d&&ie(d,99999.99,8,f),h&&ie(h,99999,7),w&&le(w,32),I&&le(I,32),D&&ie(D,100,5),_&&le(_,40),x&&le(x,40),s==null||s.addEventListener("change",p);const k=()=>{v&&!v.classList.contains("hidden")&&v.style.color!=="#00823B"&&(v.classList.add("hidden"),v.textContent="")};g==null||g.addEventListener("input",k),d==null||d.addEventListener("input",k),h==null||h.addEventListener("input",k),y==null||y.addEventListener("change",k);const P=document.getElementById("prod-sin-stock"),T=document.getElementById("box-stock-inicial");P==null||P.addEventListener("change",()=>{k(),T&&(T.style.opacity=P.checked?"0.3":"1",T.querySelector("input").disabled=P.checked)});const A=document.getElementById("prod-es-caja"),G=document.getElementById("box-caja-config"),q=document.getElementById("prod-unidades-caja"),z=document.getElementById("prod-stock-cajas");A==null||A.addEventListener("change",()=>{k(),G&&(A.checked?G.classList.remove("hidden"):G.classList.add("hidden"))});const B=()=>{if(A!=null&&A.checked&&z&&q&&h){const U=parseInt(z.value,10),$=parseInt(q.value,10);Number.isFinite(U)&&U>=0&&Number.isFinite($)&&$>1&&(h.value=String(U*$))}};q&&Ae(q,2,1e3,4,B),z&&Ae(z,0,9999,4,B);const N=document.getElementById("prod-tiene-paquete"),S=document.getElementById("box-paquete-config");N==null||N.addEventListener("change",()=>{k(),S&&(N.checked?S.classList.remove("hidden"):S.classList.add("hidden"))}),z==null||z.addEventListener("input",B),q==null||q.addEventListener("input",B),(j=document.getElementById("form-nuevo-producto"))==null||j.addEventListener("submit",U=>{U.preventDefault(),this.guardarProducto()}),(E=document.getElementById("cat-buscar-filtro"))==null||E.addEventListener("input",U=>{this.busquedaCatalogo=U.target.value.trim().toLowerCase(),this.paginaCat=1,this.renderCatalogoLista()}),(M=document.getElementById("cat-filtro-lateral"))==null||M.addEventListener("change",U=>{this.filtroCategoriaCatalogo=U.target.value,this.paginaCat=1,this.renderCatalogoLista()}),(J=document.getElementById("repo-buscar"))==null||J.addEventListener("input",U=>{this.busquedaRepo=U.target.value.trim().toLowerCase(),this.paginaRepo=1,this.renderRepoLista()}),this.contenedor.querySelectorAll("[data-cat-chip]").forEach(U=>{U.addEventListener("click",()=>{const $=U.dataset.catChip||"todas";this.filtroCategoriaRepo=$,this.paginaRepo=1,this.contenedor.querySelectorAll("[data-cat-chip]").forEach(V=>{(V.dataset.catChip||"todas")===$?V.className="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors bg-brand-black text-white":V.className="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors bg-gray-100 text-brand-black hover:bg-gray-200"}),this.renderRepoLista()})}),(te=document.getElementById("form-crear-cat"))==null||te.addEventListener("submit",U=>{U.preventDefault();const $=document.getElementById("cat-nombre");$!=null&&$.value.trim()&&L.crearCategoria($.value.trim()).then(()=>void this.render("ajustes"))}),this.contenedor.querySelectorAll("[data-del-cat]").forEach(U=>{U.addEventListener("click",()=>{const $=U.dataset.delCat;$&&L.eliminarCategoria($).then(()=>void this.render("ajustes"))})}),(H=document.getElementById("form-crear-tax"))==null||H.addEventListener("submit",U=>{U.preventDefault();const $=document.getElementById("tax-nombre"),V=document.getElementById("tax-pct");$!=null&&$.value.trim()&&V&&L.crearTasaImpuesto($.value.trim(),Number(V.value)).then(()=>void this.render("ajustes"))}),this.contenedor.querySelectorAll("[data-del-tax]").forEach(U=>{U.addEventListener("click",()=>{const $=U.dataset.delTax;$&&L.eliminarTasaImpuesto($).then(()=>void this.render("ajustes"))})})}renderCatalogoLista(){var i,b,t,r;const e=document.getElementById("cat-lista-items");if(!e)return;const o=this.productos.filter(s=>{const d=!this.busquedaCatalogo||s.nombre.toLowerCase().includes(this.busquedaCatalogo)||s.sku.toLowerCase().includes(this.busquedaCatalogo),l=this.filtroCategoriaCatalogo==="todas"||(s.categoriaId||"cat-general")===this.filtroCategoriaCatalogo;return d&&l});if(o.length===0){e.innerHTML='<p class="py-4 text-center text-gray-400 font-bold text-xs">Sin coincidencias en esta categoría.</p>',(i=document.getElementById("paginacion-cat"))==null||i.remove();return}const a=Math.ceil(o.length/this.POR_PAGINA_CAT);this.paginaCat>a&&(this.paginaCat=a);const n=(this.paginaCat-1)*this.POR_PAGINA_CAT,c=o.slice(n,n+this.POR_PAGINA_CAT);if(e.innerHTML=c.map(s=>{var y;const d=Number(s.stock),l=s.sinStock?"bg-purple-100 text-purple-900":d>15?"bg-green-100 text-green-900":d>=10?"bg-yellow-100 text-yellow-900":"bg-red-100 text-red-900",p=this.getUnitLabel(s),f=this.getNombreCategoria(s.categoriaId),g=((y=this.modelo.getConfig())==null?void 0:y.privacidadInventario)&&!this.duenoAutenticado;return`
            <div class="border border-brand-black rounded p-2 bg-gray-50 flex justify-between items-center text-xs">
                <div class="min-w-0 flex-1 pr-2">
                    <p class="font-bold truncate text-brand-black" title="${s.nombre}">${s.nombre}</p>
                    <p class="text-[10px] text-gray-500 font-bold">
                        <span class="text-brand-purple font-black">${f}</span> · ${g?"•••":`$${Number(s.precioUsd).toFixed(2)}`} · IVA ${s.impuestoPct}%
                    </p>
                </div>
                <div class="text-right shrink-0">
                    <span class="font-black px-2 py-0.5 rounded border border-brand-black text-[10px] inline-block ${l}">
                        ${g?'<span class="text-gray-400">•••</span>':s.sinStock?"LIBRE":s.esCaja&&s.unidadesPorCaja&&s.unidadesPorCaja>1?`${Math.floor(d/s.unidadesPorCaja)} cj. + ${d%s.unidadesPorCaja} un. (${d} un.)`:`${d} ${p}`}
                    </span>
                </div>
            </div>`}).join(""),(b=document.getElementById("paginacion-cat"))==null||b.remove(),a>1){const s=document.createElement("div");s.id="paginacion-cat",s.className="flex items-center justify-between mt-2 gap-2 flex-wrap",s.innerHTML=`
                <span class="text-[10px] font-bold text-gray-500">Pag. ${this.paginaCat} de ${a} · ${o.length} productos</span>
                <div class="flex gap-1">
                    <button id="cat-pag-ant" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCat===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANT.</button>
                    <button id="cat-pag-sig" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCat===a?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIG.</button>
                </div>`,e.insertAdjacentElement("afterend",s),(t=document.getElementById("cat-pag-ant"))==null||t.addEventListener("click",()=>{this.paginaCat>1&&(this.paginaCat--,this.renderCatalogoLista())}),(r=document.getElementById("cat-pag-sig"))==null||r.addEventListener("click",()=>{this.paginaCat<a&&(this.paginaCat++,this.renderCatalogoLista())})}}renderRepoLista(){var t,r,s;const e=document.getElementById("repo-lista");if(!e)return;const o=this.productos.filter(d=>{const l=!this.busquedaRepo||d.nombre.toLowerCase().includes(this.busquedaRepo)||d.sku.toLowerCase().includes(this.busquedaRepo),p=this.filtroCategoriaRepo==="todas"||(d.categoriaId||"cat-general")===this.filtroCategoriaRepo;return l&&p}),a=document.getElementById("repo-contador-estado");if(a){const d=this.filtroCategoriaRepo==="todas"?"en depósito":`en ${this.getNombreCategoria(this.filtroCategoriaRepo)}`;a.textContent=`${o.length} de ${this.productos.length} artículos ${d}`}if(o.length===0){e.innerHTML='<p class="col-span-full py-8 text-center text-gray-500 font-bold">No se encontraron productos en la categoría seleccionada.</p>';return}const n=this.semaforoStock,c=Math.ceil(o.length/this.POR_PAGINA_REPO);this.paginaRepo>c&&(this.paginaRepo=c);const i=(this.paginaRepo-1)*this.POR_PAGINA_REPO,b=o.slice(i,i+this.POR_PAGINA_REPO);if(e.innerHTML=b.map(d=>{var I;const l=Number(d.stock),p=d.sinStock?"text-purple-700":l<=n.rojoMax?"text-red-600":l<=n.amarilloMax?"text-amber-600":"text-emerald-700",f=this.getUnitLabel(d),h=this.getNombreCategoria(d.categoriaId),g=d.sinStock?"Venta libre":d.esCaja&&d.unidadesPorCaja&&d.unidadesPorCaja>1?`${Math.floor(l/d.unidadesPorCaja)} cajas y ${l%d.unidadesPorCaja} un. (${l} un.)`:`${l} ${f}`,w=((I=this.modelo.getConfig())==null?void 0:I.privacidadInventario)&&!this.duenoAutenticado;return`
            <div class="border-2 border-brand-black rounded-lg p-3 bg-white shadow-sm flex flex-col justify-between h-[175px] min-h-[175px] max-h-[175px] box-border overflow-hidden">
                <div class="min-w-0">
                    <div class="flex justify-between items-start gap-1">
                        <div class="min-w-0 flex-1">
                            <span class="text-[9px] font-black uppercase tracking-wider text-brand-purple bg-purple-50 border border-purple-200 rounded px-1.5 py-0.2 inline-block mb-0.5 truncate max-w-[150px]">${h}</span>
                            <h4 class="font-heading font-black text-sm truncate" title="${d.nombre}">${d.nombre}</h4>
                        </div>
                        <button data-repo-del="${d.sku}" title="Eliminar producto del catálogo" class="w-5 h-5 rounded border border-brand-black text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center font-black text-xs shrink-0">&times;</button>
                    </div>
                    <p class="text-xs font-bold text-gray-500 mt-0.5">${w?'Stock: <span class="font-black text-gray-400">•••</span>':`Precio: $${Number(d.precioUsd).toFixed(2)} · Stock: <span class="font-black ${p}">${g}</span>`}</p>
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
                </div>`,e.insertAdjacentElement("afterend",d),(r=document.getElementById("repo-pag-ant"))==null||r.addEventListener("click",()=>{this.paginaRepo>1&&(this.paginaRepo--,this.renderRepoLista())}),(s=document.getElementById("repo-pag-sig"))==null||s.addEventListener("click",()=>{this.paginaRepo<c&&(this.paginaRepo++,this.renderRepoLista())})}e.querySelectorAll("input[data-repo-cant]").forEach(d=>{ie(d,9999,5)}),e.querySelectorAll("[data-repo-del]").forEach(d=>{d.addEventListener("click",async()=>{const l=d.dataset.repoDel,p=this.productos.find(h=>h.sku===l);if(!l||!p)return;if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const h=window.prompt("Acción protegida. Ingrese el PIN de Administrador / Dueño:");if(!h||!await this.modelo.verificarPin(h)){alert("PIN incorrecto o no suministrado. Acción cancelada.");return}}window.confirm(`¿Seguro que deseas eliminar permanentemente el producto "${p.nombre}" del catálogo?`)&&L.eliminarProducto(l).then(()=>{L.productos().then(h=>{this.productos=h,this.renderRepoLista(),this.renderCatalogoLista();const g=document.getElementById("repo-contador-estado");g&&(g.textContent=`${this.productos.length} artículos en depósito`)})})})}),e.querySelectorAll("[data-repo-in]").forEach(d=>{d.addEventListener("click",async()=>{const l=d.dataset.repoIn,p=e.querySelector(`input[data-repo-cant="${l}"]`),f=p==null?void 0:p.value;if(l&&f&&Number(f)>0&&Number(f)<=9999){if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const I=window.prompt("Acción de inventario protegida. Ingrese el PIN de Administrador / Dueño:");if(!I||!await this.modelo.verificarPin(I)){alert("PIN incorrecto o no suministrado. Operación cancelada.");return}}const h=e.querySelector(`select[data-repo-tipo="${l}"]`),g=(h==null?void 0:h.value)||"unidad",y=this.productos.find(I=>I.sku===l);let w=Number(f);g==="caja"&&(y!=null&&y.esCaja)&&(y!=null&&y.unidadesPorCaja)&&y.unidadesPorCaja>1&&(w=w*y.unidadesPorCaja),L.compraStock(l,String(w)).then(()=>{L.productos().then(I=>{this.productos=I,this.renderRepoLista(),this.renderCatalogoLista()})})}})}),e.querySelectorAll("[data-repo-red]").forEach(d=>{d.addEventListener("click",async()=>{const l=d.dataset.repoRed,p=e.querySelector(`input[data-repo-cant="${l}"]`),f=p==null?void 0:p.value;if(l&&f&&Number(f)>0&&Number(f)<=9999){if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const I=window.prompt("Acción de inventario protegida. Ingrese el PIN de Administrador / Dueño:");if(!I||!await this.modelo.verificarPin(I)){alert("PIN incorrecto o no suministrado. Operación cancelada.");return}}const h=e.querySelector(`select[data-repo-tipo="${l}"]`),g=(h==null?void 0:h.value)||"unidad",y=this.productos.find(I=>I.sku===l);let w=Number(f);g==="caja"&&(y!=null&&y.esCaja)&&(y!=null&&y.unidadesPorCaja)&&y.unidadesPorCaja>1&&(w=w*y.unidadesPorCaja),L.reducirStock(l,String(w)).then(()=>{L.productos().then(I=>{this.productos=I,this.renderRepoLista(),this.renderCatalogoLista()})})}})}),e.querySelectorAll("[data-repo-out]").forEach(d=>{d.addEventListener("click",async()=>{const l=d.dataset.repoOut,p=e.querySelector(`input[data-repo-cant="${l}"]`),f=p==null?void 0:p.value;if(l&&f&&Number(f)>0&&Number(f)<=9999){if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const I=window.prompt("Acción de inventario protegida. Ingrese el PIN de Administrador / Dueño:");if(!I||!await this.modelo.verificarPin(I)){alert("PIN incorrecto o no suministrado. Operación cancelada.");return}}const h=e.querySelector(`select[data-repo-tipo="${l}"]`),g=(h==null?void 0:h.value)||"unidad",y=this.productos.find(I=>I.sku===l);let w=Number(f);g==="caja"&&(y!=null&&y.esCaja)&&(y!=null&&y.unidadesPorCaja)&&y.unidadesPorCaja>1&&(w=w*y.unidadesPorCaja),L.merma(l,String(w),null).then(()=>{L.productos().then(I=>{this.productos=I,this.renderRepoLista(),this.renderCatalogoLista()})})}})})}async guardarProducto(){var G;const e=document.getElementById("prod-nombre"),o=document.getElementById("prod-categoria"),a=document.getElementById("prod-impuesto"),n=document.getElementById("prod-precio-bruto"),c=document.getElementById("prod-margen"),i=document.getElementById("prod-precio-neto"),b=document.getElementById("prod-stock"),t=((G=document.getElementById("prod-unidad"))==null?void 0:G.value)||"un",r=document.getElementById("prod-sin-stock"),s=document.getElementById("alta-prod-msg"),d=q=>{if(!q)return 0;const z=q.trim().replace(",","."),B=parseFloat(z);return Number.isFinite(B)&&!isNaN(B)?B:0};if(s&&(s.classList.add("hidden"),s.textContent=""),!(e!=null&&e.value.trim())){s&&(s.textContent="El nombre del producto o servicio es obligatorio.",s.style.color="#C60C15",s.classList.remove("hidden"),e==null||e.focus());return}const l=d(i==null?void 0:i.value);if(l<=0||l>99999.99){s&&(s.textContent="El precio neto final debe ser un monto positivo entre $0.01 y $99,999.99 USD.",s.style.color="#C60C15",s.classList.remove("hidden"),i==null||i.focus());return}const p=d(b==null?void 0:b.value),f=(r==null?void 0:r.checked)||!1;if(!f&&(p<0||p>99999)){s&&(s.textContent="El stock inicial debe estar comprendido entre 0 y 99,999 unidades.",s.style.color="#C60C15",s.classList.remove("hidden"),b==null||b.focus());return}if(!f&&t==="un"&&(!Number.isInteger(p)||p%1!==0)){s&&(s.textContent='Los productos vendidos por Unidad (un.) deben tener un stock entero exacto (ej: 10). Para registrar fracciones o decimales, seleccione Tipo de Medida "Por Peso (kg)" o "Por Volumen (ml)".',s.style.color="#C60C15",s.classList.remove("hidden"),b==null||b.focus());return}const h=d((a==null?void 0:a.value)||"0"),g=d((c==null?void 0:c.value)||"30");let y=d(n==null?void 0:n.value);y<=0&&(y=l/(1+h/100)/(1+g/100));const w=document.getElementById("prod-es-caja"),I=document.getElementById("prod-unidades-caja"),D=(w==null?void 0:w.checked)||!1,_=D&&I?Math.max(2,parseInt(I.value,10)||12):void 0,x=document.getElementById("prod-tiene-paquete"),v=document.getElementById("prod-nombre-paquete"),k=document.getElementById("prod-precio-paquete"),P=(x==null?void 0:x.checked)||!1,T=P&&v?v.value.trim():void 0,A=P&&k?d(k.value).toFixed(2):void 0;try{await L.crearProducto({nombre:e.value.trim(),precioBrutoUsd:y.toFixed(2),margenPct:String(g),precioUsd:l.toFixed(2),impuestoPct:String(h),stockInicial:r!=null&&r.checked?"0":String(p),categoriaId:(o==null?void 0:o.value)||"",sinStock:(r==null?void 0:r.checked)||!1,pesable:t==="kg"||t==="ml",unidad:t,alcoholica:!1,esCaja:D,unidadesPorCaja:_,precioPaqueteUsd:A,nombrePaquete:T}),s&&(s.textContent="Producto o servicio registrado exitosamente.",s.style.color="#00823B",s.classList.remove("hidden")),setTimeout(()=>void this.render("alta"),800)}catch(q){s&&(s.textContent=q instanceof Error?q.message:String(q),s.style.color="#C60C15",s.classList.remove("hidden"))}}}const be=u=>{if(typeof u=="number")return Number.isFinite(u)?u:0;if(u==null)return 0;let e=String(u).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},K=u=>be(u).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}),Ue=u=>{const e=u.finUnix||Math.floor(Date.now()/1e3),o=Math.max(0,e-u.inicioUnix),a=Math.floor(o/3600),n=Math.floor(o%3600/60);return`${a}h ${n}m`},ot=(u,e)=>{const o=u.operadoresRelevo.length>0?u.operadoresRelevo.join(" / "):u.operadorActual,a=e.filter(d=>d.operador&&u.operadoresRelevo.some(l=>d.operador===l)),n=[["INFORME DE JORNADA",u.id],["Estado",u.estado==="abierta"?"En curso":"Cerrada"],["Apertura",u.inicioStr],["Cierre",u.finStr||"-"],["Duracion",Ue(u)],["Operadores",o],["Total USD",`$${K(u.ventasTotalUsd)}`],["Total Bs",`Bs. ${K(u.ventasTotalBs)}`],["Tickets emitidos",String(u.ticketsEmitidos)],["Vuelto pagado Bs",`Bs. ${K(u.vueltoPagadoBs)}`],["Vuelto retenido Bs",`Bs. ${K(u.vueltoRetenidoBs)}`],["Deudas liquidadas USD",`$${K(u.deudasLiquidadasUsd)}`],["Entradas stock",String(u.entradasStockReg)],["Mermas",String(u.mermasStockReg)],["Cambios de precio",String(u.cambiosPrecioReg)],["Tasa apertura",`Bs. ${u.tasaInicio}`],["Tasa cierre",u.tasaFin?`Bs. ${u.tasaFin}`:"-"],...u.checksumSha256?[["SHA-256",u.checksumSha256]]:[],[],["TICKETS DE LA JORNADA"],["ID Ticket","Fecha/Hora","Canal","Operador","Metodo(s) de Pago","Total USD","Total Bs"]],c=a.map(d=>{const l=d.pagos&&d.pagos.length>0?d.pagos.map(p=>`${p.metodo}:$${K(p.montoUsd)}`).join(" | "):"DIRECTO";return[d.ventaId,d.fechaHora||"",d.canal||"VENTA DIRECTA",d.operador||"Caja",l,`$${K(d.totalUsd)}`,`Bs. ${K(d.totalBs)}`]}),b=[...n,...c].map(d=>d.map(l=>`"${String(l).replace(/"/g,'""')}"`).join(",")).join(`\r
`),t=new Blob(["\uFEFF"+b],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(t),s=document.createElement("a");s.href=r,s.download=`jornada_${u.id}.csv`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(r)};class nt{constructor(e,o,a){C(this,"contenedor");C(this,"modalRoot");C(this,"modelo");C(this,"jornadas",[]);C(this,"jornadaActual",null);C(this,"todosLosTickets",[]);C(this,"busqueda","");C(this,"expandidos",new Set);C(this,"paginaActual",1);C(this,"POR_PAGINA",20);this.contenedor=e,this.modalRoot=o,this.modelo=a}parseFechaUnix(e){if(!e)return 0;const o=e.match(/(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})/);if(o&&o[1]&&o[2]&&o[3]&&o[4]&&o[5]&&o[6]){const a=Date.UTC(parseInt(o[1],10),parseInt(o[2],10)-1,parseInt(o[3],10),parseInt(o[4],10),parseInt(o[5],10),parseInt(o[6],10));if(!isNaN(a))return Math.floor(a/1e3)}return 0}async render(){const[e,o,a]=await Promise.all([L.obtenerJornadaActual(),L.listarHistoricoJornadas(),L.ventas()]);this.jornadaActual=e,this.jornadas=o,this.todosLosTickets=a;const n=(e?1:0)+o.length,c=[...e?[e]:[],...o],i=c.reduce((t,r)=>t+be(r.ventasTotalUsd),0),b=c.reduce((t,r)=>t+r.ticketsEmitidos,0);this.contenedor.innerHTML=`
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
        <div id="lista-jornadas" class="flex flex-col gap-2"></div>`,this.conectarEventosBuscador(),this.renderLista()}conectarEventosBuscador(){var e;(e=document.getElementById("jornadas-buscar"))==null||e.addEventListener("input",o=>{this.busqueda=o.target.value,this.paginaActual=1,this.renderLista()})}renderLista(){var s,d;const e=document.getElementById("lista-jornadas");if(!e)return;const o=[...this.jornadaActual?[this.jornadaActual]:[],...this.jornadas],a=this.busqueda.trim().toLowerCase(),n=a?o.filter(l=>l.id.toLowerCase().includes(a)||l.operadorActual.toLowerCase().includes(a)||l.operadoresRelevo.some(p=>p.toLowerCase().includes(a))||l.inicioStr.toLowerCase().includes(a)||(l.finStr||"").toLowerCase().includes(a)):o,c=document.getElementById("paginacion-jornadas");if(c&&c.remove(),n.length===0){e.innerHTML=`
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 text-center text-gray-400 font-bold text-sm">
                ${a?"Sin jornadas que coincidan con la busqueda.":"No hay jornadas registradas en el sistema."}
            </div>`;return}const i=Math.max(1,Math.ceil(n.length/this.POR_PAGINA));this.paginaActual>i&&(this.paginaActual=i),this.paginaActual<1&&(this.paginaActual=1);const b=this.paginaActual,t=n.slice((b-1)*this.POR_PAGINA,b*this.POR_PAGINA);e.innerHTML=t.map(l=>this.renderFila(l)).join(""),t.forEach(l=>{if(this.expandidos.has(l.id)){const p=document.getElementById(`detalle-${l.id}`);p==null||p.classList.remove("hidden");const f=document.getElementById(`icon-${l.id}`);f&&(f.textContent="▲")}}),e.querySelectorAll("[data-toggle-jornada]").forEach(l=>{l.addEventListener("click",()=>{const p=l.dataset.toggleJornada,f=document.getElementById(`detalle-${p}`),h=document.getElementById(`icon-${p}`);if(f){const g=f.classList.contains("hidden");f.classList.toggle("hidden",!g),h&&(h.textContent=g?"▲":"▼"),g?this.expandidos.add(p):this.expandidos.delete(p)}})}),e.querySelectorAll("[data-exportar-jornada]").forEach(l=>{l.addEventListener("click",p=>{p.stopPropagation();const f=l.dataset.exportarJornada,h=n.find(g=>g.id===f);h&&ot(h,this.todosLosTickets)})}),e.querySelectorAll("[data-ver-ticket]").forEach(l=>{l.addEventListener("click",()=>{const p=l.dataset.verTicket,f=this.todosLosTickets.find(h=>h.ventaId===p);f&&this.mostrarModalTicket(f)})});const r=document.createElement("div");r.id="paginacion-jornadas",r.innerHTML=`
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
                        <p class="font-bold text-xs text-brand-black mt-0.5">${Ue(e)}</p>
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
        </div>`;const n=()=>{this.modalRoot.innerHTML=""};(c=document.getElementById("modal-ticket-cerrar"))==null||c.addEventListener("click",n),(i=document.getElementById("modal-ticket-ok"))==null||i.addEventListener("click",n)}}class rt{constructor(e){C(this,"contenedor");this.contenedor=e}render(){this.contenedor.innerHTML=`
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
        </div>`}}const ve=4e3,st=3e5;class dt{constructor(){C(this,"modelo",new Ke);C(this,"cajaVm",null);C(this,"panelVm",new Ye);C(this,"widget",new Je);C(this,"root");C(this,"modalRoot");C(this,"peerConnection",null);C(this,"dataChannel",null);C(this,"wsSignaling",null);C(this,"offerResendTimer",null);C(this,"p2pPin","");C(this,"signalingRetries",0);C(this,"p2pConnected",!1);C(this,"roomId","");C(this,"reconectando",!1);C(this,"STUN_SERVERS",{iceServers:[{urls:"stun:stun.cloudflare.com:3478"},{urls:"stun:stun.l.google.com:19302"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:443",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:443?transport=tcp",username:"openrelayproject",credential:"openrelayproject"}]});C(this,"p2pSessionCookie","");C(this,"keepaliveTimer",null);C(this,"keepalivePending",!1)}async arrancar(){var c;const e=document.getElementById("app-root");if(!e)return;this.root=e,this.modalRoot=this.crearModalRoot(),this.widget.iniciar();const a=new URLSearchParams(window.location.search).get("room");if(a&&!window.__DATACHANNEL__){await this.arrancarMovil(e,a);return}window.addEventListener("tasa_actualizada",i=>{const b=i;b.detail&&this.modelo.setTasa(b.detail)}),await this.refrescarTasa();let n=null;try{n=await this.modelo.cargarConfig()}catch{n=await this.modelo.cargarConfig()}if(window.setInterval(()=>void this.refrescarTasa(),st),!n){new Ze(this.root,this.modelo,()=>void this.arrancar()).render();return}this.pintarBotonesRol(n),(c=document.getElementById("btn-conectar-movil"))==null||c.addEventListener("click",()=>this.abrirModalQrMovil()),this.ejecutarBackupAutomatico(),await this.arrancarCaja()}async arrancarMovil(e,o){e.innerHTML=`
        <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
            <div class="text-center">
                <div class="w-12 h-12 border-4 border-brand-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h2 class="font-heading font-black text-xl">CONECTANDO...</h2>
                <p class="text-sm text-gray-500 mt-2">Estableciendo conexion P2P con el equipo principal</p>
                <p id="movil-status" class="text-xs text-gray-400 mt-1">Conectando al servidor de senalizacion...</p>
            </div>
        </div>`;const a=new URLSearchParams(window.location.search).get("pin")||"",c=`${window.__SIGNALING_URL__||"wss://datiolabs-signaling.apex-importvcb.workers.dev"}/ws/signaling?room=${o}&pin=${encodeURIComponent(a||"default")}`;try{const i=new WebSocket(c);i.onopen=()=>{const b=document.getElementById("movil-status");b&&(b.textContent="Senalizacion conectada. Esperando offer P2P...")},i.onmessage=async b=>{const t=JSON.parse(b.data);if(t.type==="offer"){const r=document.getElementById("movil-status");r&&(r.textContent="Offer recibido. Estableciendo conexion...");const s=new RTCPeerConnection(this.STUN_SERVERS);s.onicecandidate=p=>{p.candidate&&i.readyState===WebSocket.OPEN&&i.send(JSON.stringify({type:"ice-candidate",candidate:p.candidate}))};const d=s.createDataChannel("api",{ordered:!0});d.onopen=()=>{window.__DATACHANNEL__=d,window.__DATACHANNEL_WS__=i;const p=document.getElementById("movil-status");p&&(p.textContent="Conexion P2P lista!");try{this.root.innerHTML=`
                            <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
                                <div class="text-center">
                                    <div class="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                    <h2 class="font-heading font-black text-xl text-green-700">CONECTADO</h2>
                                    <p class="text-sm text-gray-500 mt-2">Cargando datos del negocio...</p>
                                </div>
                            </div>`,this.cargarConfigMovil()}catch{}},d.onclose=()=>{delete window.__DATACHANNEL__,this.root.innerHTML=`
                        <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
                            <div class="text-center">
                                <div class="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                                <h2 class="font-heading font-black text-xl text-red-700">DESCONECTADO</h2>
                                <p class="text-sm text-gray-500 mt-2">La conexion P2P se ha perdido. Recargue la pagina.</p>
                                <button onclick="location.reload()" class="mt-4 bg-brand-black text-white px-4 py-2 rounded font-heading font-black text-sm">RECONECTAR</button>
                            </div>
                        </div>`},d.onmessage=p=>{try{const f=JSON.parse(p.data);if(f.type==="ping"){try{d.send(JSON.stringify({type:"pong",ts:f.ts}))}catch{}return}const h=window.__P2P_PENDING__;if(h&&f.id&&h.has(f.id)){const g=h.get(f.id);h.delete(f.id),f.error?g.reject(new Error(f.error)):g.resolve(f.body)}}catch{}},await s.setRemoteDescription(new RTCSessionDescription(t.sdp));const l=await s.createAnswer();await s.setLocalDescription(l),i.readyState===WebSocket.OPEN&&i.send(JSON.stringify({type:"answer",sdp:s.localDescription}))}else t.type==="error"&&(this.root.innerHTML=`
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
            </div>`}}async cargarConfigMovil(){var e;try{await this.modelo.cargarConfig()}catch{}this.pintarBotonesRol(this.modelo.getConfig()),(e=document.getElementById("btn-conectar-movil"))==null||e.remove(),await this.arrancarCaja()}crearModalRoot(){let e=document.getElementById("modal-root");return e||(e=document.createElement("div"),e.id="modal-root",document.body.appendChild(e)),e}async refrescarTasa(){try{const e=await L.tasa();e&&this.modelo.setTasa(Number(e.valor))}catch{}}async ejecutarBackupAutomatico(){try{const e=await L.getBackupDir();if(e){const o=await L.autoBackup(e,5);o&&console.log(`[Backup] Auto-backup generado: ${o.totalRegistros} registros`)}}catch(e){console.warn("[Backup] Auto-backup falló:",e)}}pintarBotonesRol(e){const o=[document.getElementById("nav-actions-desktop"),document.getElementById("nav-actions-mobile")].filter(Boolean);o.length===0||document.querySelector('[data-nav-btn="caja"]')||o.forEach(a=>{a.innerHTML="";const n=(l,p,f)=>{const h=document.createElement("button");return h.id=`${l}-${a.id.includes("mobile")?"mob":"dsk"}`,h.dataset.navBtn=f,h.className="font-heading font-black text-xs sm:text-sm bg-white border-2 border-brand-black px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded shadow-brutal-sm hover:-translate-y-0.5 transition-transform shrink-0",h.textContent=p,h},c=n("btn-ir-caja","CAJA","caja"),i=n("btn-ir-ventas","VENTAS","ventas"),b=n("btn-ir-inventario","INVENTARIO","inventario"),t=n("btn-ir-panel","PANEL","panel"),r=n("btn-ir-guia","GUIA","guia"),s=e.rubros!==0;let d=null;s&&(d=n("btn-ir-cuentas","CUENTAS","cuentas"),d.addEventListener("click",()=>void this.arrancarCuentas())),a.appendChild(c),d&&a.appendChild(d),a.appendChild(i),a.appendChild(b),a.appendChild(t),a.appendChild(r),c.addEventListener("click",()=>void this.arrancarCaja()),i.addEventListener("click",()=>void this.arrancarVentas()),b.addEventListener("click",()=>void this.arrancarInventario()),t.addEventListener("click",()=>this.solicitarAccesoPanel()),r.addEventListener("click",()=>this.arrancarGuia())})}arrancarGuia(){this.marcarActivo("guia"),new rt(this.root).render()}async arrancarCaja(){this.marcarActivo("caja"),this.cajaVm=new Qe(this.modelo),new Xe(this.root,this.modalRoot,this.cajaVm,this.modelo).render();try{await this.cajaVm.cargar()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}async arrancarCuentas(){this.marcarActivo("cuentas");const e=new tt(this.root,this.modalRoot,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}arrancarVentas(){var n,c,i;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)){this.abrirVentas();return}this.modalRoot.innerHTML=`
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
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(n=document.getElementById("pin-ventas-cancelar"))==null||n.addEventListener("click",o);const a=()=>void(async()=>{var r;const b=document.getElementById("pin-ventas-input").value;await L.validarPin(b).catch(()=>!1)?(o(),await this.abrirVentas()):(r=document.getElementById("pin-ventas-error"))==null||r.classList.remove("hidden")})();(c=document.getElementById("pin-ventas-ok"))==null||c.addEventListener("click",a),(i=document.getElementById("pin-ventas-input"))==null||i.addEventListener("keydown",b=>{b.key==="Enter"&&a()})}async abrirVentas(){this.marcarActivo("ventas");const e=new nt(this.root,this.modalRoot,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}arrancarInventario(){var n,c,i,b;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)||!(e!=null&&e.privacidadInventario)){this.abrirInventario();return}this.modalRoot.innerHTML=`
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
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(n=document.getElementById("pin-inv-cancelar"))==null||n.addEventListener("click",o);const a=()=>void(async()=>{var s;const t=document.getElementById("pin-inv-input").value;await L.validarPin(t).catch(()=>!1)?(o(),await this.abrirInventario(!0)):(s=document.getElementById("pin-inv-error"))==null||s.classList.remove("hidden")})();(c=document.getElementById("pin-inv-ok"))==null||c.addEventListener("click",a),(i=document.getElementById("pin-inv-sin-clave"))==null||i.addEventListener("click",()=>{o(),this.abrirInventario(!1)}),(b=document.getElementById("pin-inv-input"))==null||b.addEventListener("keydown",t=>{t.key==="Enter"&&a()})}async abrirInventario(e=!0){this.marcarActivo("inventario");const o=new at(this.root,this.modelo,e);try{await o.render()}catch(a){this.toastError(a instanceof Error?a.message:String(a))}}marcarActivo(e){document.querySelectorAll("[data-nav-btn]").forEach(o=>{o.dataset.navBtn===e?(o.classList.remove("bg-white"),o.classList.add("bg-brand-yellow")):(o.classList.remove("bg-brand-yellow","bg-brand-cyan"),o.classList.add("bg-white"))})}solicitarAccesoPanel(){var n,c,i;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)){this.abrirPanel();return}this.modalRoot.innerHTML=`
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
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(n=document.getElementById("pin-cancelar"))==null||n.addEventListener("click",o);const a=()=>void(async()=>{var r;const b=document.getElementById("pin-input").value;await L.validarPin(b).catch(()=>!1)?(o(),await this.abrirPanel()):(r=document.getElementById("pin-error"))==null||r.classList.remove("hidden")})();(c=document.getElementById("pin-ok"))==null||c.addEventListener("click",a),(i=document.getElementById("pin-input"))==null||i.addEventListener("keydown",b=>{b.key==="Enter"&&a()})}async abrirPanel(){this.marcarActivo("panel");const e=new et(this.root,this.modalRoot,this.panelVm,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}async abrirModalQrMovil(){var i,b,t;let e=null;try{e=await L.generarQr()}catch{e=null}const o=(e==null?void 0:e.url)||`http://127.0.0.1:${ve}/panel`,a=(e==null?void 0:e.qrBase64)||"",n=(e==null?void 0:e.roomId)||"";this.modalRoot.innerHTML=`
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
        </div>`;const c=()=>{this.modalRoot.innerHTML="",this.desconectarP2P()};if((i=document.getElementById("qr-cerrar"))==null||i.addEventListener("click",c),(b=document.getElementById("qr-cerrar-btn"))==null||b.addEventListener("click",c),n){const r=document.getElementById("p2p-pin-input"),s=((t=r==null?void 0:r.value)==null?void 0:t.trim())||"";this.conectarSignaling(n,s)}}conectarSignaling(e,o=""){this.roomId=e,this.p2pPin=o;const a=o?`&pin=${encodeURIComponent(o)}`:"&pin=default",c=`${window.__SIGNALING_URL__||"wss://datiolabs-signaling.apex-importvcb.workers.dev"}/ws/signaling?room=${e}${a}`;try{this.wsSignaling=new WebSocket(c),this.wsSignaling.onopen=()=>{var i,b;this.signalingRetries=0,((i=this.dataChannel)==null?void 0:i.readyState)==="open"&&((b=this.peerConnection)==null?void 0:b.connectionState)==="connected"?this.actualizarEstadoP2P("connected","Senalizacion reconectada - P2P activo"):(this.actualizarEstadoP2P("connected","Conectado al servidor de senalizacion..."),this.crearPeerConnection(e))},this.wsSignaling.onmessage=async i=>{const b=JSON.parse(i.data);if(b.type==="answer"&&this.peerConnection)this.offerResendTimer&&(clearInterval(this.offerResendTimer),this.offerResendTimer=null),await this.peerConnection.setRemoteDescription(new RTCSessionDescription(b.sdp)),this.actualizarEstadoP2P("connected","Conexion P2P establecida");else if(b.type==="ice-candidate"&&this.peerConnection)try{await this.peerConnection.addIceCandidate(new RTCIceCandidate(b.candidate))}catch(t){console.warn("[P2P] ICE candidate error:",t)}else b.type==="error"&&this.actualizarEstadoP2P("error",b.message||"Error del servidor de senalizacion")},this.wsSignaling.onclose=()=>{var b;((b=this.dataChannel)==null?void 0:b.readyState)==="open"?this.actualizarEstadoP2P("connected","Senalizacion caida - P2P sigue activo"):this.actualizarEstadoP2P("disconnected","Senalizacion desconectada. Reconectando...");const i=Math.min(1e3*Math.pow(2,this.signalingRetries),3e4);this.signalingRetries++,setTimeout(()=>{this.conectarSignaling(e,this.p2pPin)},i)},this.wsSignaling.onerror=()=>{}}catch{this.actualizarEstadoP2P("error","Error al conectar con el servidor");const b=Math.min(1e3*Math.pow(2,this.signalingRetries),3e4);this.signalingRetries++,setTimeout(()=>{this.conectarSignaling(e,this.p2pPin)},b)}}async crearPeerConnection(e){if(this.reconectando)return;if(this.peerConnection){try{this.peerConnection.close()}catch{}this.peerConnection=null}this.dataChannel&&(this.dataChannel=null),this.peerConnection=new RTCPeerConnection(this.STUN_SERVERS),this.peerConnection.onicecandidate=c=>{c.candidate&&this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.wsSignaling.send(JSON.stringify({type:"ice-candidate",candidate:c.candidate}))},this.peerConnection.onconnectionstatechange=()=>{var i;const c=(i=this.peerConnection)==null?void 0:i.connectionState;c==="connected"?(this.p2pConnected=!0,this.actualizarEstadoP2P("connected","P2P Conectado - Dispositivo movil vinculado")):c==="disconnected"?(this.actualizarEstadoP2P("connecting","Conexion P2P inestable, intentando recuperar..."),setTimeout(()=>{var b,t;((b=this.peerConnection)==null?void 0:b.connectionState)==="disconnected"&&((t=this.peerConnection)==null?void 0:t.iceConnectionState)!=="failed"&&this.intentarIceRestart()},5e3)):c==="failed"&&(this.p2pConnected=!1,this.actualizarEstadoP2P("disconnected","Conexion P2P perdida. Reconectando..."),this.reconectarP2P())},this.peerConnection.oniceconnectionstatechange=()=>{var i;((i=this.peerConnection)==null?void 0:i.iceConnectionState)==="failed"&&(this.p2pConnected=!1,this.reconectarP2P())},this.dataChannel=this.peerConnection.createDataChannel("api",{ordered:!0}),this.dataChannel.onopen=async()=>{this.offerResendTimer&&(clearInterval(this.offerResendTimer),this.offerResendTimer=null),this.p2pConnected=!0,window.__DATACHANNEL__=this.dataChannel,this.actualizarEstadoP2P("connected","DataChannel abierto - Autenticando...");try{const c=this.p2pPin||"";if(c){const i=await fetch(`http://localhost:${ve}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin:c})});if(i.ok){const b=i.headers.get("set-cookie");if(b){const t=b.match(/datiolabs_session=[a-zA-Z0-9]{32}/);t&&(this.p2pSessionCookie=t[0])}}}this.actualizarEstadoP2P("connected","DataChannel listo - Dispositivo movil vinculado"),this.iniciarKeepalive()}catch{this.actualizarEstadoP2P("connected","DataChannel abierto - Dispositivo movil vinculado"),this.iniciarKeepalive()}},this.dataChannel.onclose=()=>{this.p2pConnected=!1,this.detenerKeepalive(),delete window.__DATACHANNEL__,this.actualizarEstadoP2P("disconnected","DataChannel cerrado"),setTimeout(()=>{!this.p2pConnected&&this.peerConnection&&this.peerConnection.connectionState!=="closed"&&this.peerConnection.connectionState!=="failed"&&this.reconectarP2P()},2e3)},this.dataChannel.onmessage=c=>{this.handleDataChannelMessage(c.data)};const o=await this.peerConnection.createOffer();await this.peerConnection.setLocalDescription(o),this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.wsSignaling.send(JSON.stringify({type:"offer",sdp:this.peerConnection.localDescription})),this.actualizarEstadoP2P("connecting","Oferta P2P enviada, esperando respuesta..."),this.offerResendTimer&&clearInterval(this.offerResendTimer);let a=0;const n=60;this.offerResendTimer=setInterval(()=>{if(a++,a>=n){clearInterval(this.offerResendTimer),this.offerResendTimer=null,this.actualizarEstadoP2P("error","Tiempo de espera agotado. Verifique que el dispositivo movil este en la misma red.");return}this.peerConnection&&this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.wsSignaling.send(JSON.stringify({type:"offer",sdp:this.peerConnection.localDescription}))},5e3)}async handleDataChannelMessage(e){var o,a;try{const n=JSON.parse(e);if(n.type==="ping"){if(((o=this.dataChannel)==null?void 0:o.readyState)==="open")try{this.dataChannel.send(JSON.stringify({type:"pong",ts:n.ts}))}catch{}return}if(n.type==="pong"){this.keepalivePending=!1;return}const{id:c,method:i,path:b,body:t,comando:r,args:s}=n;let d=i||"GET",l=b,p=t;if(r&&!l){const h={obtener_config:{method:"GET",path:"/api/config"},listar_productos:{method:"GET",path:"/api/productos"},listar_categorias:{method:"GET",path:"/api/categorias"},panel:{method:"GET",path:"/api/panel"},listar_ventas:{method:"GET",path:"/api/ventas"},listar_cuentas:{method:"GET",path:"/api/cuentas"},obtener_jornada_actual:{method:"GET",path:"/api/jornadas/actual"},listar_historico_jornadas:{method:"GET",path:"/api/jornadas"},listar_dispositivos:{method:"GET",path:"/api/dispositivos"},listar_metodos_pago:{method:"GET",path:"/api/metodos-pago"},listar_operadores:{method:"GET",path:"/api/operadores"},obtener_semaforo_stock:{method:"GET",path:"/api/semaforo"},listar_historico_tasas:{method:"GET",path:"/api/historico-tasas"},obtener_tasa_bcv:{method:"GET",path:"/api/tasa"},listar_respaldos:{method:"GET",path:"/api/respaldos"},obtener_spa:{method:"GET",path:"/api/spa"},registrar_venta:{method:"POST",path:"/api/ventas"},agregar_consumo:{method:"POST",path:g=>`/api/cuentas/${(g==null?void 0:g.ventaId)||(g==null?void 0:g.cuentaId)||""}/consumo`},abrir_cuenta:{method:"POST",path:"/api/cuentas"},abrir_jornada:{method:"POST",path:"/api/jornadas/abrir"},cerrar_jornada:{method:"POST",path:"/api/jornadas/cerrar"},crear_producto:{method:"POST",path:"/api/productos"},editar_producto:{method:"PUT",path:g=>`/api/productos/${(g==null?void 0:g.sku)||""}`},eliminar_producto:{method:"DELETE",path:g=>`/api/productos/${(g==null?void 0:g.sku)||""}`},comprar_producto:{method:"POST",path:g=>`/api/productos/${(g==null?void 0:g.sku)||""}/compra`},reducir_producto:{method:"POST",path:g=>`/api/productos/${(g==null?void 0:g.sku)||""}/reducir`},crear_categoria:{method:"POST",path:"/api/categorias"},eliminar_categoria:{method:"DELETE",path:g=>`/api/categorias/${(g==null?void 0:g.id)||""}`},crear_metodo_pago:{method:"POST",path:"/api/metodos-pago"},eliminar_metodo_pago:{method:"DELETE",path:g=>`/api/metodos-pago/${(g==null?void 0:g.nombre)||""}`},crear_operador:{method:"POST",path:"/api/operadores"},editar_operador:{method:"PUT",path:g=>`/api/operadores/${(g==null?void 0:g.id)||""}`},eliminar_operador:{method:"DELETE",path:g=>`/api/operadores/${(g==null?void 0:g.id)||""}`},crear_respaldo:{method:"POST",path:"/api/respaldos"},cerrar_cuenta:{method:"POST",path:g=>`/api/cuentas/${(g==null?void 0:g.ventaId)||""}/cerrar`},abonar_cuenta:{method:"POST",path:g=>`/api/cuentas/${(g==null?void 0:g.ventaId)||""}/abonar`},eliminar_consumo:{method:"DELETE",path:g=>`/api/cuentas/${(g==null?void 0:g.ventaId)||""}/consumo/${(g==null?void 0:g.consumoIdx)||""}`}}[r];if(h)d=h.method,l=typeof h.path=="function"?h.path(s):h.path,p=s;else{((a=this.dataChannel)==null?void 0:a.readyState)==="open"&&this.dataChannel.send(JSON.stringify({id:c,error:`Unknown command: ${r}`}));return}}try{const f={method:d};p&&(f.body=typeof p=="string"?p:JSON.stringify(p));const h={"Content-Type":"application/json"};this.p2pSessionCookie&&(h.Cookie=this.p2pSessionCookie);const g=await fetch(`http://localhost:${ve}${l}`,{...f,headers:h});if(g.status===401){this.dataChannel&&this.dataChannel.readyState==="open"&&this.dataChannel.send(JSON.stringify({id:c,error:"Unauthorized"}));return}const y=await g.json();this.dataChannel&&this.dataChannel.readyState==="open"&&this.dataChannel.send(JSON.stringify({id:c,body:y}))}catch(f){this.dataChannel&&this.dataChannel.readyState==="open"&&this.dataChannel.send(JSON.stringify({id:c,error:String(f)}))}}catch(n){console.error("[P2P] Error handling message:",n)}}iniciarKeepalive(){this.detenerKeepalive(),this.keepalivePending=!1,this.keepaliveTimer=setInterval(()=>{var e;if(this.keepalivePending){this.detenerKeepalive(),this.reconectarP2P();return}if(((e=this.dataChannel)==null?void 0:e.readyState)==="open"){this.keepalivePending=!0;try{this.dataChannel.send(JSON.stringify({type:"ping",ts:Date.now()}))}catch{this.detenerKeepalive(),this.reconectarP2P()}}},2e4)}detenerKeepalive(){this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.keepalivePending=!1}intentarIceRestart(){if(!(!this.peerConnection||this.peerConnection.connectionState==="closed"))try{this.peerConnection.restartIce(),this.peerConnection.createOffer({iceRestart:!0}).then(e=>this.peerConnection.setLocalDescription(e)).then(()=>{this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.peerConnection&&this.wsSignaling.send(JSON.stringify({type:"offer",sdp:this.peerConnection.localDescription}))}).catch(e=>{console.warn("[P2P] ICE restart failed:",e),this.reconectarP2P()})}catch(e){console.warn("[P2P] ICE restart error:",e),this.reconectarP2P()}}async reconectarP2P(){this.reconectando||(this.reconectando=!0,this.detenerKeepalive(),this.limpiarPeerConnection(),await new Promise(e=>setTimeout(e,1500)),this.reconectando=!1,this.wsSignaling&&this.wsSignaling.readyState===WebSocket.OPEN&&this.crearPeerConnection(this.roomId))}limpiarPeerConnection(){if(this.offerResendTimer&&(clearInterval(this.offerResendTimer),this.offerResendTimer=null),this.dataChannel){try{this.dataChannel.close()}catch{}this.dataChannel=null}if(this.peerConnection){try{this.peerConnection.close()}catch{}this.peerConnection=null}}actualizarEstadoP2P(e,o){const a=document.getElementById("p2p-status-dot"),n=document.getElementById("p2p-status-text");a&&(a.className=`w-3 h-3 rounded-full border border-brand-black ${e==="connected"?"bg-green-500":e==="connecting"?"bg-yellow-400":"bg-red-500"}`),n&&(n.textContent=o)}desconectarP2P(){this.detenerKeepalive(),this.limpiarPeerConnection(),this.wsSignaling&&(this.wsSignaling.close(),this.wsSignaling=null),this.p2pSessionCookie="",this.p2pConnected=!1,this.signalingRetries=0,this.reconectando=!1,delete window.__DATACHANNEL__}toastError(e){var o;this.modalRoot.innerHTML=`
        <div class="fixed bottom-6 right-6 bg-red-600 text-white border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]">
            ${e.replace(/"/g,"")}
            <button id="toast-close" class="ml-3 underline font-black">cerrar</button>
        </div>`,(o=document.getElementById("toast-close"))==null||o.addEventListener("click",()=>{this.modalRoot.innerHTML=""})}}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("contextmenu",u=>u.preventDefault()),new dt().arrancar().catch(u=>console.error(u))});
