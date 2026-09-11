var Ve=Object.defineProperty;var _e=(l,e,o)=>e in l?Ve(l,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[e]=o;var U=(l,e,o)=>_e(l,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const Ce=1,Le=2,Re=4,Ne=8,ne=1,fe=2,ue=8,we=16,Be=32,Ee=64,He=128,X=l=>{if(typeof l=="number")return Number.isFinite(l)?l:0;if(l==null)return 0;let e=String(l).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0};class je extends Error{constructor(e){super(e)}}function Ge(){const l=typeof window<"u"?window.location.pathname.toLowerCase():"",e=typeof window<"u"?new URLSearchParams(window.location.search):null,o=l.includes("retail")||(e==null?void 0:e.get("rubro"))==="retail",a=l.includes("panaderia")||(e==null?void 0:e.get("rubro"))==="panaderia";return o?{key:"datiolabs_demo_retail_v3",claveLicencia:"0000888833330000",titular:"DatioLabs Retail Demo",config:{nombre:"DatioLabs Retail",rubros:Ne,capacidades:ne|we|Be|Ee|He,tienePin:!1},productos:[{sku:"SMART-PHONE-X",nombre:"Smartphone X 128GB (Serie/Garantía)",precioBrutoUsd:"180.00",margenPct:"38",precioUsd:"250.00",impuestoPct:"16",stock:"8",capacidades:ne|we|Ee,unidad:"un",categoriaId:"cat-general"},{sku:"AURICULAR-BT",nombre:"Audífonos Inalámbricos Bluetooth Pro",precioBrutoUsd:"14.00",margenPct:"42",precioUsd:"20.00",impuestoPct:"16",stock:"22",capacidades:ne|Ee,unidad:"un",categoriaId:"cat-general"},{sku:"CARGADOR-RAPIDO",nombre:"Cargador Rápido 30W Tipo-C",precioBrutoUsd:"5.50",margenPct:"45",precioUsd:"8.00",impuestoPct:"16",stock:"30",capacidades:ne,unidad:"un",categoriaId:"cat-general"},{sku:"CABLE-USB-C",nombre:"Cable Reforzado Tipo-C a Tipo-C 1.5m",precioBrutoUsd:"2.50",margenPct:"60",precioUsd:"4.00",impuestoPct:"16",stock:"45",capacidades:ne,unidad:"un",categoriaId:"cat-general"},{sku:"POWERBANK-20K",nombre:"Batería Portátil PowerBank 20000mAh",precioBrutoUsd:"16.00",margenPct:"40",precioUsd:"22.50",impuestoPct:"16",stock:"12",capacidades:ne|Ee,unidad:"un",categoriaId:"cat-general"}]}:a?{key:"datiolabs_demo_panaderia_v3",claveLicencia:"0000888822220000",titular:"DatioLabs Panadería Demo",config:{nombre:"DatioLabs Panadería",rubros:Le,capacidades:ne|fe,tienePin:!1},productos:[{sku:"PAN-CANILLA",nombre:"Pan Canilla Tradicional",precioBrutoUsd:"0.50",margenPct:"60",precioUsd:"0.80",impuestoPct:"0",stock:"60",capacidades:ne,unidad:"un",categoriaId:"cat-panes"},{sku:"PAN-CAMPESINO",nombre:"Pan Campesino Rústico",precioBrutoUsd:"0.80",margenPct:"50",precioUsd:"1.20",impuestoPct:"0",stock:"35",capacidades:ne,unidad:"un",categoriaId:"cat-panes"},{sku:"PAN-SOBADO",nombre:"Pan Sobado Suave",precioBrutoUsd:"0.65",margenPct:"53",precioUsd:"1.00",impuestoPct:"0",stock:"40",capacidades:ne,unidad:"un",categoriaId:"cat-panes"},{sku:"QUESO-GUAYANES",nombre:"Queso Guayanés Fresco",precioBrutoUsd:"3.20",margenPct:"40",precioUsd:"4.50",impuestoPct:"0",stock:"15.00",capacidades:fe,unidad:"kg",categoriaId:"cat-viveres"},{sku:"CAFE-MOLIDO",nombre:"Café Molido Tostado 250g",precioBrutoUsd:"2.00",margenPct:"50",precioUsd:"3.00",impuestoPct:"0",stock:"25",capacidades:ne,unidad:"un",categoriaId:"cat-viveres"}]}:{key:"datiolabs_demo_licoreria_v3",claveLicencia:"0000888811110000",titular:"DatioLabs Licorería Demo",config:{nombre:"DatioLabs Licorería",rubros:Re,capacidades:ne|ue,tienePin:!1},productos:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",precioBrutoUsd:"13.50",margenPct:"33",precioUsd:"18.00",impuestoPct:"16",stock:"12",capacidades:ne|ue,unidad:"un",categoriaId:"cat-bebidas"},{sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",precioBrutoUsd:"8.80",margenPct:"36",precioUsd:"12.00",impuestoPct:"16",stock:"16",capacidades:ne|ue,unidad:"un",categoriaId:"cat-bebidas"},{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",precioBrutoUsd:"3.30",margenPct:"36",precioUsd:"4.50",impuestoPct:"16",stock:"30",capacidades:ne|ue,unidad:"un",categoriaId:"cat-bebidas"},{sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",precioBrutoUsd:"16.50",margenPct:"33",precioUsd:"22.00",impuestoPct:"16",stock:"8",capacidades:ne|ue,unidad:"un",categoriaId:"cat-bebidas"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",precioBrutoUsd:"1.20",margenPct:"50",precioUsd:"1.80",impuestoPct:"16",stock:"24",capacidades:ne|ue,unidad:"un",categoriaId:"cat-bebidas"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",precioBrutoUsd:"0.60",margenPct:"66",precioUsd:"1.00",impuestoPct:"16",stock:"40",capacidades:ne|ue,unidad:"un",categoriaId:"cat-viveres"}]}}class ze{constructor(){U(this,"config");U(this,"productos");U(this,"cuentas",[{ventaId:"CTA-88210",etiqueta:"Mesa 4 (Terraza)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-7200,fechaCreacionStr:"Hoy, 02:00 PM",lineas:2,totalParcialUsd:"10.00",totalParcialBs:"8073.90",abonosUsd:"5.00",abonosBs:"4036.95",consumos:[{id:"con-m4-1",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-m4-2",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]},{ventaId:"CTA-88211",etiqueta:"Barra Principal (Carlos)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-3600,fechaCreacionStr:"Hoy, 03:00 PM",lineas:2,totalParcialUsd:"19.80",totalParcialBs:"15986.32",abonosUsd:"25.00",abonosBs:"20184.75",consumos:[{id:"con-bp-1",sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:1,precioUsd:"18.00",subtotalUsd:"18.00"},{id:"con-bp-2",sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:1,precioUsd:"1.80",subtotalUsd:"1.80"}]},{ventaId:"CTA-88212",etiqueta:"Mesa 1 (VIP)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-1800,fechaCreacionStr:"Hoy, 03:30 PM",lineas:1,totalParcialUsd:"22.00",totalParcialBs:"17762.58",abonosUsd:"0.00",abonosBs:"0.00",consumos:[{id:"con-m1-1",sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",cantidad:1,precioUsd:"22.00",subtotalUsd:"22.00"}]},{ventaId:"DEU-99042",etiqueta:"Taller Hermanos Gómez",cliente:"Carlos Gómez (Taller)",nota:"Crédito comercial acordado a cobrar en días",tipo:"deuda",fechaCreacionUnix:Math.floor(Date.now()/1e3)-86400*3,fechaCreacionStr:"01/09/2026 10:30",lineas:3,totalParcialUsd:"34.00",totalParcialBs:"27451.26",abonosUsd:"10.00",abonosBs:"8073.90",consumos:[{id:"con-d1",sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:2,precioUsd:"12.00",subtotalUsd:"24.00"},{id:"con-d2",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-d3",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]}]);U(this,"categorias",[{id:"cat-general",nombre:"General"},{id:"cat-viveres",nombre:"Víveres"},{id:"cat-bebidas",nombre:"Bebidas y Licores"},{id:"cat-panes",nombre:"Panes y Horneados"}]);U(this,"tasasImpuestos",[{id:"iva-16",nombre:"IVA General (16%)",porcentaje:"16"},{id:"iva-8",nombre:"IVA Reducido (8%)",porcentaje:"8"},{id:"iva-0",nombre:"Exento (0%)",porcentaje:"0"}]);U(this,"tasaActual",{valor:"807.39",fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:null,direccion:null});U(this,"tickets",[{ventaId:"TRX-94812",totalUsd:"23.80",totalBs:"19215.88",tasaDelDia:"807.39",montoRecibidoBs:"20000.00",vueltoBs:"784.12",fechaHora:"Hoy, 01:24 PM",fechaUnix:Math.floor(Date.now()/1e3)-3600,canal:"VENTA DIRECTA",operador:"Caja Principal",pagos:[{metodo:"PAGO MOVIL",montoUsd:"23.80",montoBs:"19215.88",referencia:"REF-7892"}],lineas:[{sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:"1",precioUsd:"12.00",tasaBloqueada:"807.39",subtotalUsd:"12.00",subtotalBs:"9688.68"},{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:"2",precioUsd:"4.50",tasaBloqueada:"807.39",subtotalUsd:"9.00",subtotalBs:"7266.51"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:"1",precioUsd:"1.00",tasaBloqueada:"807.39",subtotalUsd:"1.00",subtotalBs:"807.39"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:"1",precioUsd:"1.80",tasaBloqueada:"807.39",subtotalUsd:"1.80",subtotalBs:"1453.30"}]},{ventaId:"CTA-78104",totalUsd:"40.00",totalBs:"32295.60",tasaDelDia:"807.39",montoRecibidoBs:"35000.00",vueltoBs:"2704.40",fechaHora:"Hoy, 12:50 PM",fechaUnix:Math.floor(Date.now()/1e3)-7200,canal:"CONSUMO EN CUENTA",operador:"Mesa 4 / Mostrador",pagos:[{metodo:"DOL.CASH",moneda:"USD",montoUsd:"20.00",montoBs:"16147.80",tasaCambio:"807.39"},{metodo:"PUNTOD.VENTA",moneda:"BS",montoUsd:"20.00",montoBs:"16147.80",referencia:"LOTE-112"}],lineas:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:"1",precioUsd:"18.00",tasaBloqueada:"807.39",subtotalUsd:"18.00",subtotalBs:"14533.02"},{sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",cantidad:"1",precioUsd:"22.00",tasaBloqueada:"807.39",subtotalUsd:"22.00",subtotalBs:"17762.58"}]},{ventaId:"TRX-94811",totalUsd:"13.60",totalBs:"10980.50",tasaDelDia:"807.39",montoRecibidoBs:"11000.00",vueltoBs:"19.50",fechaHora:"Hoy, 11:35 AM",fechaUnix:Math.floor(Date.now()/1e3)-10800,canal:"VENTA DIRECTA",operador:"Caja Principal",pagos:[{metodo:"BS.EFEC.",moneda:"BS",montoUsd:"13.60",montoBs:"10980.50"}],lineas:[{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:"2",precioUsd:"4.50",tasaBloqueada:"807.39",subtotalUsd:"9.00",subtotalBs:"7266.51"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:"2",precioUsd:"1.80",tasaBloqueada:"807.39",subtotalUsd:"3.60",subtotalBs:"2906.60"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:"1",precioUsd:"1.00",tasaBloqueada:"807.39",subtotalUsd:"1.00",subtotalBs:"807.39"}]},{ventaId:"CTA-78103",totalUsd:"18.00",totalBs:"14533.02",tasaDelDia:"807.39",montoRecibidoBs:"15000.00",vueltoBs:"466.98",fechaHora:"Hoy, 10:15 AM",fechaUnix:Math.floor(Date.now()/1e3)-14400,canal:"CONSUMO EN CUENTA",operador:"Barra Principal",pagos:[{metodo:"ZELLE",moneda:"USD",montoUsd:"18.00",montoBs:"14533.02",tasaCambio:"807.39",referencia:"ZEL-5501"}],lineas:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:"1",precioUsd:"18.00",tasaBloqueada:"807.39",subtotalUsd:"18.00",subtotalBs:"14533.02"}]}]);U(this,"ventasTotalUsd",95.4);U(this,"ventasTotalBs",77025);U(this,"metodosPago",[{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]);U(this,"respaldos",[{id:"bk-1",fecha:"Hoy, 06:00 PM",archivoNombre:"DATO-DEMO-20260903-180000.backup",registros:412,tamanoKb:124,checksumSha256:"9f83a21b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f"},{id:"bk-2",fecha:"Ayer, 11:30 PM",archivoNombre:"DATO-DEMO-20260902-233000.backup",registros:395,tamanoKb:118,checksumSha256:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"}]);U(this,"licencia",{estado:"activa",tipo:"Enterprise Standalone Local",claveLicencia:"0000888811110000",titular:"Empresa DatioLabs Cliente Comercial",validez:"Perpetua (Sin caducidad / Portabilidad Total)"});U(this,"operadores",[{id:"op-1",nombre:"Carlos Mendoza",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*30},{id:"op-2",nombre:"María Andrea Silva",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*15},{id:"op-3",nombre:"José Gregorio Páez",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*5}]);U(this,"jornadaActual",{id:"JOR-20260908-01",estado:"abierta",inicioUnix:Math.floor(Date.now()/1e3)-14400,inicioStr:"Hoy, 08:30 AM",operadorInicial:"Carlos Mendoza",operadorActual:"Carlos Mendoza",operadoresActivos:["Carlos Mendoza"],operadoresRelevo:["Carlos Mendoza"],tasaInicio:"807.39",ventasTotalUsd:"95.40",ventasTotalBs:"77025.00",ticketsEmitidos:6,vueltoPagadoBs:"1450.00",vueltoRetenidoBs:"784.12",deudasLiquidadasUsd:"34.00",entradasStockReg:2,mermasStockReg:0,cambiosPrecioReg:0});U(this,"historicoJornadas",[{id:"JOR-20260907-01",estado:"cerrada",inicioUnix:Math.floor(Date.now()/1e3)-86400-28800,finUnix:Math.floor(Date.now()/1e3)-86400,inicioStr:"Ayer, 08:00 AM",finStr:"Ayer, 09:30 PM",operadorInicial:"María Andrea Silva",operadorActual:"Carlos Mendoza",operadoresRelevo:["María Andrea Silva","Carlos Mendoza"],tasaInicio:"805.20",tasaFin:"807.39",ventasTotalUsd:"340.50",ventasTotalBs:"274889.70",ticketsEmitidos:24,vueltoPagadoBs:"4520.00",vueltoRetenidoBs:"1200.00",deudasLiquidadasUsd:"68.00",entradasStockReg:4,mermasStockReg:1,cambiosPrecioReg:1,checksumSha256:"a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0"}]);U(this,"semaforoStock",{rojoMax:5,amarilloMax:15});U(this,"dedupVentas",{});U(this,"historicoTasas",[{id:"tx-1",valor:"807.3900",fechaHora:"Hoy, 04:00 PM",tipo:"automático",motivo:"Sondeo oficial BCV"},{id:"tx-2",valor:"805.2000",fechaHora:"Hoy, 09:00 AM",tipo:"automático",motivo:"Apertura de jornada"},{id:"tx-3",valor:"802.1500",fechaHora:"Ayer, 05:00 PM",tipo:"automático",motivo:"Cierre BCV"}]);U(this,"pinDueno","");U(this,"storageKey");const e=Ge();this.storageKey=e.key,this.config=e.config,this.productos=e.productos,this.licencia.claveLicencia=e.claveLicencia,this.licencia.titular=e.titular;try{["datiolabs_demo_licoreria_db","datiolabs_demo_panaderia_db","datiolabs_demo_retail_db","datiolabs_demo_licoreria_v2"].forEach(a=>{try{localStorage.removeItem(a)}catch{}});const o=localStorage.getItem(this.storageKey);if(o){const a=JSON.parse(o);if(a.productos&&Array.isArray(a.productos)&&(this.productos=a.productos.map(r=>{const i=e.productos.find(s=>s.sku===r.sku),c=String(r.unidad||(i==null?void 0:i.unidad)||"").toLowerCase(),b=c==="kg"?"kg":c==="ml"?"ml":"un",t=r.categoriaId&&r.categoriaId.trim()?r.categoriaId:(i==null?void 0:i.categoriaId)||"cat-general",n=Number(r.precioUsd)||0,d=r.precioBrutoUsd&&Number(r.precioBrutoUsd)>0?r.precioBrutoUsd:(i==null?void 0:i.precioBrutoUsd)||(n*.65).toFixed(2);return{...r,unidad:b,categoriaId:t,precioBrutoUsd:d}})),a.cuentas&&Array.isArray(a.cuentas)&&a.cuentas.length>0&&(this.cuentas=a.cuentas.map(r=>(Array.isArray(r.consumos)||(r.consumos=[]),r.abonosUsd===void 0&&(r.abonosUsd="0.00"),r.abonosBs===void 0&&(r.abonosBs="0.00"),r.tipo||(r.tipo=r.etiqueta.toLowerCase().includes("taller")||r.etiqueta.toLowerCase().includes("deuda")?"deuda":"activa"),r.fechaCreacionUnix||(r.fechaCreacionUnix=r.tipo==="deuda"?Math.floor(Date.now()/1e3)-86400*3:Math.floor(Date.now()/1e3)-3600),r.fechaCreacionStr||(r.fechaCreacionStr=r.tipo==="deuda"?"01/09/2026 10:30":"Hoy"),r.consumos.length===0&&X(r.totalParcialUsd)>0&&r.consumos.push({id:"con-"+Math.random().toString(36).slice(2,8),sku:"CONSUMO-PREV",nombre:"Consumos acumulados",cantidad:1,precioUsd:String(r.totalParcialUsd),subtotalUsd:String(r.totalParcialUsd)}),r.lineas=r.consumos.length,r)),this.cuentas.some(r=>r.tipo==="deuda")||this.cuentas.push({ventaId:"DEU-99042",etiqueta:"Taller Hermanos Gómez",cliente:"Carlos Gómez (Taller)",nota:"Crédito comercial convenido a pagar en días",tipo:"deuda",fechaCreacionUnix:Math.floor(Date.now()/1e3)-86400*3,fechaCreacionStr:"01/09/2026 10:30",lineas:3,totalParcialUsd:"34.00",totalParcialBs:(34*X(this.tasaActual.valor)).toFixed(2),abonosUsd:"10.00",abonosBs:(10*X(this.tasaActual.valor)).toFixed(2),consumos:[{id:"con-d1",sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:2,precioUsd:"12.00",subtotalUsd:"24.00"},{id:"con-d2",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-d3",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]})),a.metodosPago&&Array.isArray(a.metodosPago)){const r=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}],i=[],c=new Set,b=t=>{let n="",d="BS";if(typeof t=="string")n=t.trim().toUpperCase(),n==="DOLAR.EFEC."&&(n="DOL.CASH"),n==="USDT BINAN."&&(n="BINAN.USDT"),["DOL.CASH","ZELLE","BINAN.USDT"].includes(n)&&(d="USD");else if(t&&typeof t=="object"&&"nombre"in t){const s=t;n=String(s.nombre||"").trim().toUpperCase(),n==="DOLAR.EFEC."&&(n="DOL.CASH"),n==="USDT BINAN."&&(n="BINAN.USDT"),d=s.moneda==="USD"||["DOL.CASH","ZELLE","BINAN.USDT"].includes(n)?"USD":"BS"}n&&!c.has(n)&&(c.add(n),i.push({nombre:n,moneda:d}))};r.forEach(b),a.metodosPago.forEach(b),i.sort((t,n)=>t.moneda===n.moneda?0:t.moneda==="BS"?-1:1),this.metodosPago=i}else this.metodosPago.sort((r,i)=>r.moneda===i.moneda?0:r.moneda==="BS"?-1:1);a.operadores&&Array.isArray(a.operadores)&&(this.operadores=a.operadores),a.jornadaActual!==void 0&&(this.jornadaActual=a.jornadaActual),a.historicoJornadas&&Array.isArray(a.historicoJornadas)&&(this.historicoJornadas=a.historicoJornadas),a.semaforoStock&&(this.semaforoStock=a.semaforoStock),a.categorias&&(this.categorias=a.categorias),a.tasasImpuestos&&(this.tasasImpuestos=a.tasasImpuestos),a.tasaActual&&(this.tasaActual=a.tasaActual),a.respaldos&&(this.respaldos=a.respaldos),a.historicoTasas&&(this.historicoTasas=a.historicoTasas),a.tickets&&Array.isArray(a.tickets)&&a.tickets.length>0&&(this.tickets=a.tickets),a.ventasTotalUsd!==void 0&&(this.ventasTotalUsd=Number(a.ventasTotalUsd)),a.ventasTotalBs!==void 0&&(this.ventasTotalBs=Number(a.ventasTotalBs)),a.pinDueno!==void 0&&(this.pinDueno=a.pinDueno),this.config&&this.pinDueno&&(this.config.tienePin=!0)}}catch{}this.refrescarTasaEnVivo()}async refrescarTasaEnVivo(){try{const e=await fetch("https://ve.dolarapi.com/v1/dolares/oficial");if(e.ok){const o=await e.json(),a=Number(o.promedio);if(Number.isFinite(a)&&a>0){const r=Number(this.tasaActual.valor);let i=null,c=null;if(Number.isFinite(r)&&r>0&&r!==a){const n=(a-r)/r*100;i=Math.abs(n).toFixed(2),c=n>0?"subio":"bajo"}this.tasaActual={valor:a.toFixed(4),fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:i,direccion:c};const t=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});this.historicoTasas.unshift({id:"tx-"+Math.random().toString(36).slice(2,7),valor:a.toFixed(4),fechaHora:`Hoy, ${t}`,tipo:"automático",motivo:"Sincronización BCV en vivo"}),this.historicoTasas.length>50&&this.historicoTasas.pop(),this.persist(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("tasa_actualizada",{detail:a}))}}}catch{}}persist(){try{localStorage.setItem(this.storageKey,JSON.stringify({productos:this.productos,cuentas:this.cuentas,categorias:this.categorias,tasasImpuestos:this.tasasImpuestos,tasaActual:this.tasaActual,respaldos:this.respaldos,historicoTasas:this.historicoTasas,tickets:this.tickets,ventasTotalUsd:this.ventasTotalUsd,ventasTotalBs:this.ventasTotalBs,pinDueno:this.pinDueno,metodosPago:this.metodosPago,operadores:this.operadores,jornadaActual:this.jornadaActual,historicoJornadas:this.historicoJornadas,semaforoStock:this.semaforoStock}))}catch{}}}const m=new ze,Je={crear_respaldo:{method:"POST",path:"/api/respaldos"},listar_respaldos:{method:"GET",path:"/api/respaldos"},restaurar_desde_respaldo:{method:"POST",path:"/api/respaldos/restaurar",body:!0},restaurar_desde_archivo:{method:"POST",path:"/api/respaldos/restaurar",body:!0},obtener_config:{method:"GET",path:"/api/config"},obtener_tasa_bcv:{method:"GET",path:"/api/tasa"},listar_productos:{method:"GET",path:"/api/productos"},listar_categorias:{method:"GET",path:"/api/categorias"},panel:{method:"GET",path:"/api/panel"},listar_ventas:{method:"GET",path:"/api/ventas"},listar_cuentas:{method:"GET",path:"/api/cuentas"},obtener_jornada_actual:{method:"GET",path:"/api/jornadas/actual"},listar_historico_jornadas:{method:"GET",path:"/api/jornadas"},listar_metodos_pago:{method:"GET",path:"/api/metodos-pago"},listar_operadores:{method:"GET",path:"/api/operadores"},listar_historico_tasas:{method:"GET",path:"/api/historico-tasas"},obtener_semaforo_stock:{method:"GET",path:"/api/semaforo"}};async function J(l,e){var i;const o=window.__TAURI__,a=(i=o==null?void 0:o.core)==null?void 0:i.invoke;if(a)try{return await a(l,e)}catch(c){throw new je(typeof c=="string"?c:JSON.stringify(c))}const r=await Ke(l,e).catch(()=>null);return r!==null?r:Ze(l,e)}async function Ke(l,e){const o=Je[l];if(!o)return null;const a={method:o.method,headers:{"Content-Type":"application/json"}};o.body&&e&&(l==="restaurar_desde_archivo"?a.body=JSON.stringify({contenido_base64:e.contenidoBase64,nombre_archivo:e.nombreArchivo}):a.body=JSON.stringify(e));const r=await fetch(o.path,a);if(!r.ok)throw new je(`HTTP ${r.status}`);return await r.json()}function Ze(l,e){var o,a,r,i,c,b;switch(l){case"obtener_config":return Promise.resolve(m.config);case"inicializar_negocio":{const t=e!=null&&e.pinDueno?String(e.pinDueno).trim():"",n=e!=null&&e.licenciaClave?String(e.licenciaClave).trim():"";return m.pinDueno=t,m.config={nombre:String((e==null?void 0:e.nombre)||"Mi Negocio Demo"),rubros:Number((e==null?void 0:e.rubros)||15),capacidades:ne|fe|ue|we|Be,tienePin:t.length>0,licenciaEstado:n?"activa":"demo",licenciaTitular:n?"Empresa DatioLabs":"",privacidadInventario:!!(e!=null&&e.privacidadInventario)},m.licencia.claveLicencia=n||"0000888811110000",m.licencia.estado=n?"activa":"demo",m.licencia.titular=n?"Empresa DatioLabs":"DatioLabs Demo",m.persist(),Promise.resolve(void 0)}case"validar_pin_dueno":{const t=String((e==null?void 0:e.pin)||"").trim();return m.pinDueno?Promise.resolve(t===m.pinDueno):Promise.resolve(!0)}case"cambiar_pin_dueno":{const t=String((e==null?void 0:e.pinAnterior)||"").trim(),n=String((e==null?void 0:e.pinNuevo)||"").trim();return m.pinDueno&&t!==m.pinDueno?Promise.reject(new Error("La clave anterior no coincide.")):(m.pinDueno=n,m.config&&(m.config.tienePin=n.length>0),m.persist(),Promise.resolve(!0))}case"listar_productos":return Promise.resolve(m.productos);case"crear_producto":{const t=e==null?void 0:e.input,n=String((t==null?void 0:t.unidad)||"").toLowerCase(),d=n==="kg"?"kg":n==="ml"?"ml":t!=null&&t.pesable?"kg":"un",s=!!(t!=null&&t.esCaja),u=Number(t==null?void 0:t.unidadesPorCaja)>1?Math.floor(Number(t.unidadesPorCaja)):void 0,p=String((t==null?void 0:t.stockInicial)||"0"),g={sku:String((t==null?void 0:t.sku)||"").toUpperCase(),nombre:String((t==null?void 0:t.nombre)||""),precioBrutoUsd:String((t==null?void 0:t.precioBrutoUsd)||"0"),margenPct:String((t==null?void 0:t.margenPct)||"0"),precioUsd:String((t==null?void 0:t.precioUsd)||"0"),impuestoPct:String((t==null?void 0:t.impuestoPct)||"0"),stock:p,capacidades:ne|(d==="kg"||d==="ml"||t!=null&&t.pesable?fe:0),categoriaId:String((t==null?void 0:t.categoriaId)||""),sinStock:!!(t!=null&&t.sinStock),unidad:d,esCaja:s,unidadesPorCaja:u,precioPaqueteUsd:t!=null&&t.precioPaqueteUsd?String(t.precioPaqueteUsd):void 0,nombrePaquete:t!=null&&t.nombrePaquete?String(t.nombrePaquete):void 0};return m.productos.push(g),m.persist(),Promise.resolve(void 0)}case"eliminar_producto":{const t=String((e==null?void 0:e.sku)||"").toUpperCase();return m.productos=m.productos.filter(n=>n.sku!==t),m.persist(),Promise.resolve(void 0)}case"registrar_venta":{const t=e==null?void 0:e.items,n=e==null?void 0:e.idempotencyKey,d=Number((e==null?void 0:e.montoRecibidoBs)||"0");if(n&&((o=m.dedupVentas)!=null&&o[n])){const C=m.dedupVentas[n],j=m.tickets.find(G=>G.ventaId===C);if(j)return Promise.resolve(j)}let s=0;const u=Number(m.tasaActual.valor);t.forEach(C=>{const j=m.productos.find(G=>G.sku===C.sku);if(j){const G=Number(C.cantidad),H=(C.modo_venta||"unidad")==="paquete"&&(j.precioPaqueteUsd||j.esCaja&&j.unidadesPorCaja&&j.unidadesPorCaja>1),_=H&&j.unidadesPorCaja||1,O=H?j.precioPaqueteUsd?Number(j.precioPaqueteUsd):Number(j.precioUsd)*_:Number(j.precioUsd);s+=O*G,j.stock=String(Math.max(0,Number(j.stock)-_*G))}});const p=s*u,g=Math.max(0,d-p);m.ventasTotalUsd+=s,m.ventasTotalBs+=p;const x=new Date,S=x.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),h=Array.isArray(e==null?void 0:e.pagos)&&e.pagos.length>0?e.pagos:[{metodo:d>0?"BS.EFEC.":"DOL.CASH",moneda:d>0?"BS":"USD",montoUsd:s.toFixed(2),montoBs:p.toFixed(2)}],A=e==null?void 0:e.resolucionVuelto,f=g>.009?(A==null?void 0:A.estado)||"PAGADO":"SIN_VUELTO",E=f==="PAGADO"?(A==null?void 0:A.metodo)||"BS.EFEC.":void 0,$=g>.009?(A==null?void 0:A.montoBs)||g.toFixed(2):void 0,k=g>.009?(A==null?void 0:A.montoUsd)||(u>0?(g/u).toFixed(2):"0.00"):void 0,w=f==="PAGADO"?A==null?void 0:A.tasa:void 0,y=((a=m.jornadaActual)==null?void 0:a.operadorActual)||"Caja Principal",v={ventaId:"TRX-"+Math.floor(1e4+Math.random()*9e4),totalUsd:s.toFixed(2),totalBs:p.toFixed(2),tasaDelDia:u.toFixed(2),montoRecibidoBs:d.toFixed(2),vueltoBs:g.toFixed(2),fechaHora:`Hoy, ${S}`,fechaUnix:Math.floor(x.getTime()/1e3),canal:"VENTA DIRECTA",operador:y,pagos:h,estadoVuelto:f,metodoVuelto:E,montoVueltoBs:$,montoVueltoUsd:k,tasaVuelto:w,lineas:t.map(C=>{const j=m.productos.find(I=>I.sku===C.sku),G=C.modo_venta||"unidad",V=G==="paquete"&&(j==null?void 0:j.precioPaqueteUsd),H=Number(V?(j==null?void 0:j.precioPaqueteUsd)||0:(j==null?void 0:j.precioUsd)||0),_=(H*Number(C.cantidad)).toFixed(2),O=(Number(_)*u).toFixed(2);return{sku:C.sku,nombre:(j==null?void 0:j.nombre)||C.sku,cantidad:C.cantidad,precioUsd:String(H),tasaBloqueada:u.toFixed(2),subtotalUsd:_,subtotalBs:O,modoVenta:G}})};if(m.tickets.some(C=>C.ventaId===v.ventaId)||m.tickets.unshift(v),n&&(m.dedupVentas||(m.dedupVentas={}),m.dedupVentas[n]=v.ventaId),m.jornadaActual){const C=m.jornadaActual;C.ventasTotalUsd=(X(C.ventasTotalUsd)+s).toFixed(2),C.ventasTotalBs=(X(C.ventasTotalBs)+p).toFixed(2),C.ticketsEmitidos+=1,f==="PAGADO"?C.vueltoPagadoBs=(X(C.vueltoPagadoBs)+g).toFixed(2):f==="RETENIDO"&&(C.vueltoRetenidoBs=(X(C.vueltoRetenidoBs)+g).toFixed(2))}return m.persist(),Promise.resolve(v)}case"listar_cuentas":return Promise.resolve(m.cuentas);case"abrir_cuenta":{const t=String((e==null?void 0:e.etiqueta)||"Mesa Demo").trim(),n=(e==null?void 0:e.tipo)==="deuda"?"deuda":"activa",d=typeof(e==null?void 0:e.cliente)=="string"?e.cliente.trim():void 0,s=typeof(e==null?void 0:e.nota)=="string"?e.nota.trim():void 0,u=new Date,p=u.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),g=`${u.toLocaleDateString("es-VE")} ${p}`,x={ventaId:(n==="deuda"?"DEU-":"CTA-")+Math.random().toString(36).slice(2,8).toUpperCase(),etiqueta:t,tipo:n,cliente:d,nota:s,fechaCreacionUnix:Math.floor(u.getTime()/1e3),fechaCreacionStr:g,totalParcialUsd:"0.00",totalParcialBs:"0.00",abonosUsd:"0.00",abonosBs:"0.00",lineas:0,consumos:[]};return m.cuentas.push(x),m.persist(),Promise.resolve(x)}case"convertir_cuenta_a_deuda":{const t=String((e==null?void 0:e.ventaId)||""),n=String((e==null?void 0:e.cliente)||"").trim(),d=typeof(e==null?void 0:e.nota)=="string"?e.nota.trim():void 0,s=m.cuentas.find(u=>u.ventaId===t);return s?(s.tipo="deuda",n&&(s.cliente=n,s.etiqueta=n),d!==void 0&&(s.nota=d),m.persist(),Promise.resolve(s)):Promise.reject(new Error("Cuenta no encontrada"))}case"agregar_consumo":{const t=String((e==null?void 0:e.ventaId)||""),n=String((e==null?void 0:e.sku)||"").trim().toUpperCase(),d=X(e==null?void 0:e.cantidad)||1,s=String((e==null?void 0:e.modo_venta)||"unidad"),u=m.cuentas.find(g=>g.ventaId===t),p=m.productos.find(g=>g.sku.trim().toUpperCase()===n);if(u&&p){const g=s==="paquete"&&(p.precioPaqueteUsd||p.esCaja&&p.unidadesPorCaja&&p.unidadesPorCaja>1),x=g&&p.unidadesPorCaja||1,S=g?p.precioPaqueteUsd?X(p.precioPaqueteUsd):X(p.precioUsd)*x:X(p.precioUsd),h=d*x;if(!p.sinStock){const k=X(p.stock);if(k<h)return Promise.reject(new Error(`Stock insuficiente para "${p.nombre}". Disponible: ${k} ${p.unidad||"un."}`));p.stock=String(Math.max(0,k-h))}Array.isArray(u.consumos)||(u.consumos=[]);const A=S*d,f=X(m.tasaActual.valor)||807.39,E=u.consumos.find(k=>k.sku.trim().toUpperCase()===p.sku.trim().toUpperCase()&&k.modoVenta===s);E?(E.cantidad+=d,E.subtotalUsd=(E.cantidad*X(E.precioUsd)).toFixed(2)):u.consumos.push({id:"con-"+Math.random().toString(36).slice(2,8),sku:p.sku,nombre:p.nombre,cantidad:d,precioUsd:S.toFixed(2),subtotalUsd:A.toFixed(2),modoVenta:s});const $=u.consumos.reduce((k,w)=>k+X(w.subtotalUsd),0);return u.totalParcialUsd=$.toFixed(2),u.totalParcialBs=($*f).toFixed(2),u.lineas=u.consumos.length,m.persist(),Promise.resolve(u)}return Promise.resolve(u)}case"eliminar_consumo":{const t=String((e==null?void 0:e.ventaId)||""),n=String((e==null?void 0:e.consumoId)||""),d=(e==null?void 0:e.cantidad)!==void 0&&(e==null?void 0:e.cantidad)!==null?X(e.cantidad):0,s=m.cuentas.find(u=>u.ventaId===t);if(s&&Array.isArray(s.consumos)){const u=s.consumos.findIndex(p=>p.id===n);if(u!==-1){const p=s.consumos[u],g=p.modoVenta==="paquete",x=m.productos.find(f=>f.sku.trim().toUpperCase()===p.sku.trim().toUpperCase()),S=g&&(x!=null&&x.unidadesPorCaja)&&x.unidadesPorCaja>1?x.unidadesPorCaja:1;d>0&&d<p.cantidad?(p.cantidad-=d,p.subtotalUsd=(p.cantidad*X(p.precioUsd)).toFixed(2),x&&!x.sinStock&&(x.stock=String(X(x.stock)+d*S))):(x&&!x.sinStock&&(x.stock=String(X(x.stock)+p.cantidad*S)),s.consumos.splice(u,1));const h=X(m.tasaActual.valor)||807.39,A=s.consumos.reduce((f,E)=>f+X(E.subtotalUsd),0);s.totalParcialUsd=A.toFixed(2),s.totalParcialBs=(A*h).toFixed(2),s.lineas=s.consumos.length,m.persist()}return Promise.resolve(s)}return Promise.resolve(s)}case"cerrar_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),n=m.cuentas.findIndex(_=>_.ventaId===t);if(n===-1){const _=m.tickets.find(O=>O.ventaId===t);return _?Promise.resolve(_):Promise.reject(new Error("Cuenta no encontrada"))}const d=m.cuentas[n];let s="0.00",u="0.00",p=[],g=0;const x=X(e==null?void 0:e.tasaCobro),S=x>0?x:Number(m.tasaActual.valor)||807.39,h=(d==null?void 0:d.tipo)==="deuda";if(d){const _=Number(d.totalParcialUsd),O=Number(d.abonosUsd||"0"),I=Math.max(0,O-_);g=I;const B=Math.max(_,O);s=B.toFixed(2),u=(B*S).toFixed(2),m.cuentas.splice(n,1),m.ventasTotalUsd+=B,m.ventasTotalBs+=B*S,p=(d.consumos||[]).map(P=>({sku:P.sku,nombre:P.nombre,cantidad:String(P.cantidad),precioUsd:P.precioUsd,tasaBloqueada:S.toFixed(4),subtotalUsd:P.subtotalUsd,subtotalBs:(Number(P.subtotalUsd)*S).toFixed(2)})),I>0&&p.push({sku:"GANANCIA-EXCEDENTE",nombre:"Saldo a Favor Consolidado como Ganancia (Excedente Retenido)",cantidad:"1",precioUsd:I.toFixed(2),tasaBloqueada:S.toFixed(4),subtotalUsd:I.toFixed(2),subtotalBs:(I*S).toFixed(2)})}const A=new Date,f=A.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),E=Array.isArray(e==null?void 0:e.pagos)&&e.pagos.length>0?e.pagos:[{metodo:h?"TRANSF.BS.":"BS.EFEC.",moneda:"BS",montoUsd:s,montoBs:u}],$=Number((e==null?void 0:e.montoRecibidoBs)||u),k=Math.max(0,$-Number(u)),w=e==null?void 0:e.resolucionVuelto,y=k>.009?(w==null?void 0:w.estado)||"PAGADO":"SIN_VUELTO",v=y==="PAGADO"?(w==null?void 0:w.metodo)||(h?"TRANSF.BS.":"BS.EFEC."):void 0,C=k>.009?(w==null?void 0:w.montoBs)||k.toFixed(2):void 0,j=k>.009?(w==null?void 0:w.montoUsd)||(S>0?(k/S).toFixed(2):"0.00"):void 0,G=y==="PAGADO"?w==null?void 0:w.tasa:void 0,V=((r=m.jornadaActual)==null?void 0:r.operadorActual)||"Caja Principal",H={ventaId:t||(h?"DEU-":"CTA-")+Math.floor(1e4+Math.random()*9e4),totalUsd:s,totalBs:u,tasaDelDia:S.toFixed(4),montoRecibidoBs:$.toFixed(2),vueltoBs:k.toFixed(2),fechaHora:`Hoy, ${f}`,fechaUnix:Math.floor(A.getTime()/1e3),canal:h?"LIQUIDACION DE DEUDA":"CONSUMO EN CUENTA",operador:V,saldoAFavorConsolidadoUsd:g>0?g.toFixed(2):void 0,pagos:E,estadoVuelto:y,metodoVuelto:v,montoVueltoBs:C,montoVueltoUsd:j,tasaVuelto:G,lineas:p};if(m.tickets.unshift(H),m.jornadaActual){const _=m.jornadaActual,O=X(s),I=X(u);_.ventasTotalUsd=(X(_.ventasTotalUsd)+O).toFixed(2),_.ventasTotalBs=(X(_.ventasTotalBs)+I).toFixed(2),_.ticketsEmitidos+=1,h&&(_.deudasLiquidadasUsd=(X(_.deudasLiquidadasUsd)+O).toFixed(2)),y==="PAGADO"?_.vueltoPagadoBs=(X(_.vueltoPagadoBs)+k).toFixed(2):y==="RETENIDO"&&(_.vueltoRetenidoBs=(X(_.vueltoRetenidoBs)+k).toFixed(2))}return m.persist(),Promise.resolve(H)}case"listar_categorias":return Promise.resolve(m.categorias);case"crear_categoria":{const t=String((e==null?void 0:e.nombre)||"").trim(),n="cat-"+Math.random().toString(36).slice(2,7);return m.categorias.push({id:n,nombre:t}),m.persist(),Promise.resolve(m.categorias)}case"eliminar_categoria":{const t=String((e==null?void 0:e.id)||"");return m.categorias=m.categorias.filter(n=>n.id!==t),m.persist(),Promise.resolve(m.categorias)}case"listar_tasas_impuestos":return Promise.resolve(m.tasasImpuestos);case"crear_tasa_impuesto":{const t=String((e==null?void 0:e.nombre)||"").trim(),n=Number((e==null?void 0:e.porcentaje)||0),d="tax-"+Math.random().toString(36).slice(2,7);return m.tasasImpuestos.push({id:d,nombre:t,porcentaje:String(n)}),m.persist(),Promise.resolve(m.tasasImpuestos)}case"eliminar_tasa_impuesto":{const t=String((e==null?void 0:e.id)||"");return m.tasasImpuestos=m.tasasImpuestos.filter(n=>n.id!==t),m.persist(),Promise.resolve(m.tasasImpuestos)}case"abonar_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),n=Number((e==null?void 0:e.montoUsd)||0),d=Number((e==null?void 0:e.montoBs)||0),s=m.cuentas.find(u=>u.ventaId===t);if(s&&Number.isFinite(n)&&n>0&&n<=5e4){const u=Array.isArray(s.consumos)&&s.consumos.length>0,p=X(s.totalParcialUsd)>0;if(!u&&!p)return Promise.resolve(null);const g=Number(m.tasaActual.valor),x=Number(s.abonosUsd||"0"),S=Number(s.abonosBs||"0");if(d>0){const h=S+d;s.abonosBs=h.toFixed(2),s.abonosUsd=(g>0?h/g:0).toFixed(2)}else{const h=x+n;s.abonosUsd=h.toFixed(2),s.abonosBs=(h*g).toFixed(2)}m.persist()}return Promise.resolve(s)}case"editar_abono_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),n=Math.max(0,Math.min(5e4,Number((e==null?void 0:e.nuevoAbonoUsd)||0))),d=m.cuentas.find(s=>s.ventaId===t);if(d&&Number.isFinite(n)){const s=Number(m.tasaActual.valor);d.abonosUsd=n.toFixed(2),d.abonosBs=(n*s).toFixed(2),m.persist()}return Promise.resolve(d)}case"datos_panel":{const t=Number(m.tasaActual.valor),n=m.ventasTotalUsd,d=m.ventasTotalBs;let s=0,u=0;m.productos.forEach(I=>{const B=Number(I.precioUsd)||0,P=Number(I.precioBrutoUsd)||0;B>0&&(s+=B,P>0&&(u+=P))});const p=s>0&&u>0?(s-u)/s:0,g=n*(1-p),x=n-g,S=n*.12,h=x-S,A=x,f=h*t,E={};m.tickets.forEach(I=>{I.lineas.forEach(B=>{E[B.sku]||(E[B.sku]={qty:0,monto:0,nombre:B.nombre}),E[B.sku].qty+=Number(B.cantidad)||1,E[B.sku].monto+=Number(B.subtotalUsd)||0})}),m.productos.forEach((I,B)=>{if(!E[I.sku]){const P=Math.max(1,14-B*2);E[I.sku]={qty:P,monto:P*Number(I.precioUsd),nombre:I.nombre}}});const $=Object.values(E).sort((I,B)=>B.monto-I.monto),k=$.reduce((I,B)=>I+B.monto,0)||1,w=$.map(I=>({nombre:I.nombre,cantidad:String(I.qty),totalUsd:I.monto.toFixed(2),porcentaje:(I.monto/k*100).toFixed(1)})),y=Number(m.tasaActual.valor)||807.39;let v=0;const C={};m.categorias.forEach(I=>{C[I.id]={categoriaId:I.id,nombre:I.nombre,cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}}),C["cat-general"]||(C["cat-general"]={categoriaId:"cat-general",nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}),m.productos.forEach(I=>{const B=I.categoriaId&&C[I.categoriaId]?I.categoriaId:"cat-general",P=C[B];P.cantidadProductos+=1;const T=I.sinStock?0:Number(I.stock)||0,K=Number(I.precioBrutoUsd)>0?Number(I.precioBrutoUsd):Number(I.precioUsd)*.65,z=Number(I.precioUsd)||0,Y=T*K,N=T*z;P.unidadesStock+=T,P.brutoUsd+=Y,P.ventaUsd+=N,v+=Y});const j=Object.values(C).filter(I=>I.cantidadProductos>0||I.brutoUsd>0).map(I=>{const B=Math.max(0,I.ventaUsd-I.brutoUsd),P=I.ventaUsd>0?(B/I.ventaUsd*100).toFixed(1):"0.0",T=v>0?(I.brutoUsd/v*100).toFixed(1):"0.0";return{categoriaId:I.categoriaId,nombre:I.nombre,cantidadProductos:I.cantidadProductos,unidadesStock:Math.round(I.unidadesStock*100)/100,dineroBrutoUsd:I.brutoUsd.toFixed(2),dineroBrutoBs:(I.brutoUsd*y).toFixed(2),dineroVentaUsd:I.ventaUsd.toFixed(2),dineroVentaBs:(I.ventaUsd*y).toFixed(2),margenBrutoProyectadoUsd:B.toFixed(2),margenBrutoPct:P,porcentajeCapital:T}}).sort((I,B)=>Number(B.dineroBrutoUsd)-Number(I.dineroBrutoUsd)),G=m.cuentas.filter(I=>I.tipo==="deuda"),V=m.cuentas.filter(I=>I.tipo!=="deuda"),H=G.reduce((I,B)=>I+Math.max(0,X(B.totalParcialUsd)-X(B.abonosUsd)),0),_=H*y,O={ventas24hUsd:n.toFixed(2),ventas24hBs:d.toFixed(2),tickets24h:Math.max(m.tickets.length,18),valorInventarioUsd:m.productos.reduce((I,B)=>I+Number(B.precioUsd)*Number(B.stock),0).toFixed(2),costoTotalUsd:g.toFixed(2),gananciaBrutaUsd:x.toFixed(2),gananciaNetaUsd:h.toFixed(2),gananciaNetaSinImpUsd:A.toFixed(2),gananciaNetaBs:f.toFixed(2),cuentasAbiertas:V.length,deudasAbiertas:G.length,dineroEnLaCalleUsd:H.toFixed(2),dineroEnLaCalleBs:_.toFixed(2),criticos:m.productos.filter(I=>!I.sinStock&&Number(I.stock)<=5).map(I=>({sku:I.sku,nombre:I.nombre,stock:I.stock})),topProductos:w,dineroPorCategoria:j};return Promise.resolve(O)}case"compra_stock":{const t=String((e==null?void 0:e.sku)||""),n=Number((e==null?void 0:e.cantidad)||"0"),d=m.productos.find(s=>s.sku===t);return d&&Number.isFinite(n)&&n>0?(d.stock=String(Number(d.stock)+n),m.persist(),Promise.resolve(d.stock)):Promise.resolve("0")}case"reducir_stock":{const t=String((e==null?void 0:e.sku)||""),n=Number((e==null?void 0:e.cantidad)||"0"),d=m.productos.find(s=>s.sku===t);return d&&Number.isFinite(n)&&n>0?(d.stock=String(Math.max(0,Number(d.stock)-n)),m.persist(),Promise.resolve(d.stock)):Promise.resolve("0")}case"registrar_merma":{const t=String((e==null?void 0:e.sku)||""),n=Number((e==null?void 0:e.cantidad)||"0"),d=m.productos.find(s=>s.sku===t);return d&&Number.isFinite(n)&&n>0?(d.stock=String(Math.max(0,Number(d.stock)-n)),m.persist(),Promise.resolve(d.stock)):Promise.resolve("0")}case"listar_respaldos":return Promise.resolve(m.respaldos);case"crear_respaldo":{const t="bk-"+Math.random().toString(36).slice(2,7),n=m.productos.length+m.cuentas.length+m.categorias.length,d=new Date,s=(((i=m.config)==null?void 0:i.nombre)||"DATIOLABS").toUpperCase().replace(/[^A-Z0-9]/g,"-").replace(/-+/g,"-").slice(0,30),u=d.getFullYear(),p=String(d.getMonth()+1).padStart(2,"0"),g=String(d.getDate()).padStart(2,"0"),x=String(d.getHours()).padStart(2,"0"),S=String(d.getMinutes()).padStart(2,"0"),h=String(d.getSeconds()).padStart(2,"0"),A=`${s}-${u}${p}${g}-${x}${S}${h}.backup`,f={id:t,fecha:"Ahora mismo",archivoNombre:A,registros:n,tamanoKb:Math.round(n*.4+10),checksumSha256:Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join("")};return m.respaldos.unshift(f),m.persist(),Promise.resolve(f)}case"restaurar_desde_respaldo":case"restaurar_desde_archivo":return m.persist(),Promise.resolve(!0);case"obtener_licencia":return Promise.resolve(m.licencia);case"validar_licencia":{const n=String((e==null?void 0:e.clave)||"").replace(/[^a-zA-Z0-9]/g,"");if(n.length!==16)return Promise.resolve(!1);const d=n.split("").map(g=>parseInt(g,10)).filter(g=>!isNaN(g)&&g<10);if(d.length!==16)return Promise.resolve(!1);let s=0;for(let g=0;g<12;g++)s+=d[g]*(g+1);const u=s%1e4,p=d[12]*1e3+d[13]*100+d[14]*10+d[15];return Promise.resolve(u===p)}case"obtener_tasa_bcv":return Promise.resolve(m.tasaActual);case"forzar_actualizacion_tasa":return m.refrescarTasaEnVivo().then(()=>m.tasaActual);case"listar_historico_tasas":return Promise.resolve(m.historicoTasas);case"fijar_tasa_manual":{const t=String((e==null?void 0:e.tasa)||"0"),n=Number(t),d=Number(m.tasaActual.valor);let s=null,u=null;if(Number.isFinite(d)&&d>0&&Number.isFinite(n)&&n>0&&d!==n){const x=(n-d)/d*100;s=Math.abs(x).toFixed(2),u=x>0?"subio":"bajo"}m.tasaActual={valor:n.toFixed(4),fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:s,direccion:u};const g=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});return m.historicoTasas.unshift({id:"tx-"+Math.random().toString(36).slice(2,7),valor:n.toFixed(4),fechaHora:`Hoy, ${g}`,tipo:"manual",motivo:"Ajuste manual por el usuario"}),m.historicoTasas.length>50&&m.historicoTasas.pop(),m.persist(),Promise.resolve(m.tasaActual)}case"listar_ventas":return Promise.resolve(m.tickets);case"listar_metodos_pago":return m.metodosPago.sort((t,n)=>t.moneda===n.moneda?0:t.moneda==="BS"?-1:1),Promise.resolve(m.metodosPago);case"crear_metodo_pago":{const t=String((e==null?void 0:e.nombre)||"").trim().toUpperCase().replace(/[^A-Z0-9. _-]/g,"").slice(0,25),n=(e==null?void 0:e.moneda)==="USD"?"USD":"BS";return t&&!m.metodosPago.some(d=>d.nombre===t)&&(m.metodosPago.push({nombre:t,moneda:n}),m.metodosPago.sort((d,s)=>d.moneda===s.moneda?0:d.moneda==="BS"?-1:1),m.persist()),Promise.resolve(m.metodosPago)}case"eliminar_metodo_pago":{const t=String((e==null?void 0:e.nombre)||"").trim().toUpperCase();return t&&(m.metodosPago=m.metodosPago.filter(n=>n.nombre!==t),m.metodosPago.length===0&&m.metodosPago.push({nombre:"PUNTOD.VENTA",moneda:"BS"}),m.persist()),Promise.resolve(m.metodosPago)}case"listar_operadores":return Promise.resolve(m.operadores);case"crear_operador":{const t=String((e==null?void 0:e.nombre)||"").trim();if(t){const n={id:"op-"+Math.random().toString(36).slice(2,7),nombre:t,activo:!0,creadoUnix:Math.floor(Date.now()/1e3)};m.operadores.push(n),m.persist()}return Promise.resolve(m.operadores)}case"editar_operador":{const t=String((e==null?void 0:e.id)||""),n=String((e==null?void 0:e.nombre)||"").trim();if(t&&n){const d=m.operadores.find(s=>s.id===t);if(d){const s=d.nombre;d.nombre=n,m.jornadaActual&&(m.jornadaActual.operadorActual===s&&(m.jornadaActual.operadorActual=n),m.jornadaActual.operadoresActivos&&(m.jornadaActual.operadoresActivos=m.jornadaActual.operadoresActivos.map(u=>u===s?n:u)),m.jornadaActual.operadoresRelevo&&(m.jornadaActual.operadoresRelevo=m.jornadaActual.operadoresRelevo.map(u=>u===s?n:u))),m.persist()}}return Promise.resolve(m.operadores)}case"eliminar_operador":{const t=String((e==null?void 0:e.id)||"");if(t){const n=m.operadores.find(s=>s.id===t),d=n==null?void 0:n.nombre;m.operadores=m.operadores.filter(s=>s.id!==t),m.jornadaActual&&d&&(m.jornadaActual.operadoresActivos&&(m.jornadaActual.operadoresActivos=m.jornadaActual.operadoresActivos.filter(s=>s!==d)),m.jornadaActual.operadorActual===d&&(m.jornadaActual.operadorActual=((c=m.jornadaActual.operadoresActivos)==null?void 0:c[0])||((b=m.operadores[0])==null?void 0:b.nombre)||"Cajero Principal")),m.persist()}return Promise.resolve(m.operadores)}case"alternar_operador":{const t=String((e==null?void 0:e.id)||""),n=m.operadores.find(d=>d.id===t);return n&&(n.activo=!n.activo,m.persist()),Promise.resolve(m.operadores)}case"obtener_jornada_actual":return Promise.resolve(m.jornadaActual);case"listar_historico_jornadas":{const t=new Set,n=m.historicoJornadas.filter(d=>t.has(d.id)?!1:(t.add(d.id),!0));return Promise.resolve(n)}case"abrir_jornada":{const t=String((e==null?void 0:e.operador)||"Cajero Principal").trim(),n=Array.isArray(e==null?void 0:e.operadores)&&e.operadores.length>0?e.operadores.map(A=>String(A).trim()).filter(Boolean):[t],d=new Date,s=d.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),u=`${d.toLocaleDateString("es-VE")} ${s}`,p=d.getFullYear(),g=String(d.getMonth()+1).padStart(2,"0"),x=String(d.getDate()).padStart(2,"0"),S=m.tasaActual.valor,h={id:`JOR-${p}${g}${x}-${Math.random().toString(36).slice(2,6).toUpperCase()}`,estado:"abierta",inicioUnix:Math.floor(Date.now()/1e3),inicioStr:`Hoy, ${s} (${u})`,operadorInicial:n[0]||t,operadorActual:n.join(", "),operadoresActivos:n,operadoresRelevo:[...n],tasaInicio:S,ventasTotalUsd:"0.00",ventasTotalBs:"0.00",ticketsEmitidos:0,vueltoPagadoBs:"0.00",vueltoRetenidoBs:"0.00",deudasLiquidadasUsd:"0.00",entradasStockReg:0,mermasStockReg:0,cambiosPrecioReg:0};return m.jornadaActual=h,m.persist(),Promise.resolve(h)}case"asignar_operadores_turno":{const t=Array.isArray(e==null?void 0:e.operadores)?e.operadores.map(n=>String(n).trim()).filter(Boolean):[];return m.jornadaActual&&(m.jornadaActual.operadoresActivos=t,m.jornadaActual.operadorActual=t.length>0?t.join(", "):"Sin operador asignado",t.forEach(n=>{var d,s;(d=m.jornadaActual)!=null&&d.operadoresRelevo.includes(n)||(s=m.jornadaActual)==null||s.operadoresRelevo.push(n)}),m.persist()),Promise.resolve(m.jornadaActual)}case"relevar_operador_jornada":{const t=String((e==null?void 0:e.operador)||"").trim();return m.jornadaActual&&t&&(m.jornadaActual.operadorActual=t,m.jornadaActual.operadoresActivos=[t],m.jornadaActual.operadoresRelevo.includes(t)||m.jornadaActual.operadoresRelevo.push(t),m.persist()),Promise.resolve(m.jornadaActual)}case"cerrar_jornada":{if(!m.jornadaActual)return Promise.reject(new Error("No existe una jornada laboral abierta para cerrar."));const t=new Date,n=t.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),d=`${t.toLocaleDateString("es-VE")} ${n}`,s={...m.jornadaActual};return s.estado="cerrada",s.finUnix=Math.floor(Date.now()/1e3),s.finStr=`${d}`,s.tasaFin=m.tasaActual.valor,s.checksumSha256=Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join(""),m.historicoJornadas.unshift(s),m.jornadaActual=null,m.persist(),Promise.resolve(s)}case"obtener_semaforo_stock":return Promise.resolve(m.semaforoStock);case"guardar_semaforo_stock":{const t=Math.max(1,Number(e==null?void 0:e.rojoMax)||5),n=Math.max(t+1,Number(e==null?void 0:e.amarilloMax)||15);return m.semaforoStock={rojoMax:t,amarilloMax:n},m.persist(),Promise.resolve(m.semaforoStock)}default:return Promise.resolve(null)}}const D={config:()=>J("obtener_config"),inicializar:(l,e,o,a,r)=>J("inicializar_negocio",{nombre:l,rubros:e,pinDueno:o||null,licenciaClave:a||null,licenciaTitular:null,privacidadInventario:r??!1}),validarPin:l=>J("validar_pin_dueno",{pin:l}),productos:()=>J("listar_productos"),crearProducto:l=>{const e=l.sku&&l.sku.trim()?l.sku.trim().toUpperCase():"PROD-"+Math.random().toString(36).slice(2,8).toUpperCase();return J("crear_producto",{input:{...l,sku:e}})},eliminarProducto:l=>J("eliminar_producto",{sku:l}),registrarVenta:(l,e,o,a,r,i)=>J("registrar_venta",{items:l,montoRecibidoBs:o,pagos:a,resolucionVuelto:r,idempotencyKey:i}),abrirCuenta:(l,e,o,a)=>J("abrir_cuenta",{etiqueta:l,tipo:e,nota:o,cliente:a}),cuentas:()=>J("listar_cuentas"),agregarConsumo:(l,e,o,a,r)=>J("agregar_consumo",{ventaId:l,sku:e,cantidad:o,clienteMayorEdad:a,modo_venta:r}),eliminarConsumo:(l,e,o)=>J("eliminar_consumo",{ventaId:l,consumoId:e,cantidad:o!==void 0?String(o):void 0}),abonarCuenta:(l,e,o)=>J("abonar_cuenta",{ventaId:l,montoUsd:e,montoBs:o}),editarAbonoCuenta:(l,e)=>J("editar_abono_cuenta",{ventaId:l,nuevoAbonoUsd:e}),convertirCuentaADeuda:(l,e,o)=>J("convertir_cuenta_a_deuda",{ventaId:l,cliente:e,nota:o}),cerrarCuenta:(l,e,o,a,r)=>J("cerrar_cuenta",{ventaId:l,montoRecibidoBs:e,tasaCobro:o,pagos:a,resolucionVuelto:r}),panel:()=>J("datos_panel"),compraStock:(l,e)=>J("compra_stock",{sku:l,cantidad:e}),reducirStock:(l,e)=>J("reducir_stock",{sku:l,cantidad:e}),merma:(l,e,o)=>J("registrar_merma",{sku:l,cantidad:e,loteId:o}),categorias:()=>J("listar_categorias"),crearCategoria:l=>J("crear_categoria",{nombre:l}),eliminarCategoria:l=>J("eliminar_categoria",{id:l}),tasasImpuestos:()=>J("listar_tasas_impuestos"),crearTasaImpuesto:(l,e)=>J("crear_tasa_impuesto",{nombre:l,porcentaje:e}),eliminarTasaImpuesto:l=>J("eliminar_tasa_impuesto",{id:l}),respaldos:()=>J("listar_respaldos"),crearRespaldo:()=>J("crear_respaldo"),restaurarRespaldo:l=>J("restaurar_desde_respaldo",{archivo:l}),restaurarDesdeArchivo:(l,e)=>J("restaurar_desde_archivo",{contenidoBase64:l,nombreArchivo:e}),licencia:()=>J("obtener_licencia"),validarLicencia:l=>J("validar_licencia",{clave:l}),cambiarPinDueno:(l,e)=>J("cambiar_pin_dueno",{pinAnterior:l,pinNuevo:e}),actualizarPrivacidadInventario:l=>fetch("/api/config/privacidad",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({privacidadInventario:l})}).then(e=>e.json()),tasa:()=>J("obtener_tasa_bcv"),historicoTasas:()=>J("listar_historico_tasas"),forzarTasa:()=>J("forzar_actualizacion_tasa"),fijarTasaManual:l=>J("fijar_tasa_manual",{tasa:l}),ventas:()=>J("listar_ventas"),listarMetodosPago:()=>J("listar_metodos_pago"),crearMetodoPago:(l,e="BS")=>J("crear_metodo_pago",{nombre:l,moneda:e}),eliminarMetodoPago:l=>J("eliminar_metodo_pago",{nombre:l}),listarOperadores:()=>J("listar_operadores"),crearOperador:l=>J("crear_operador",{nombre:l}),editarOperador:(l,e)=>J("editar_operador",{id:l,nombre:e}),eliminarOperador:l=>J("eliminar_operador",{id:l}),alternarOperador:l=>J("alternar_operador",{id:l}),obtenerJornadaActual:()=>J("obtener_jornada_actual"),listarHistoricoJornadas:()=>J("listar_historico_jornadas"),abrirJornada:(l,e)=>J("abrir_jornada",{operador:l,operadores:e}),relevarOperadorJornada:l=>J("relevar_operador_jornada",{operador:l}),asignarOperadoresTurno:l=>J("asignar_operadores_turno",{operadores:l}),cerrarJornada:()=>J("cerrar_jornada"),obtenerSemaforoStock:()=>J("obtener_semaforo_stock"),guardarSemaforoStock:(l,e)=>J("guardar_semaforo_stock",{rojoMax:l,amarilloMax:e}),autoBackup:(l,e)=>J("auto_backup",{directorio:l,maxBackups:e}),getBackupDir:()=>J("get_backup_dir")},Xe="#00823B",Ye="#C60C15",Qe="#6B7280",We=3e5;class et{constructor(){U(this,"contenedor");U(this,"timer",null);this.contenedor=document.getElementById("bcv-indicator")}iniciar(){this.contenedor&&(this.renderizarEsqueleto(),this.actualizar(),this.timer=window.setInterval(()=>void this.actualizar(),We))}detener(){this.timer!==null&&(window.clearInterval(this.timer),this.timer=null)}renderizarEsqueleto(){var e,o;this.contenedor&&(this.contenedor.innerHTML=`
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
            </div>`,(e=document.getElementById("bcv-refresh"))==null||e.addEventListener("click",()=>void this.forzar()),(o=document.getElementById("bcv-valor"))==null||o.addEventListener("click",()=>void this.abrirModalHistoricoYAjuste()))}async abrirModalHistoricoYAjuste(){var c,b,t;const e=document.getElementById("modal-root");if(!e)return;const o=await D.historicoTasas().catch(()=>[]),a=((c=document.getElementById("bcv-valor"))==null?void 0:c.textContent)||"--";e.innerHTML=`
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
        </div>`;const r=()=>{e.innerHTML=""};(b=document.getElementById("tasa-modal-cerrar"))==null||b.addEventListener("click",r),(t=document.getElementById("tasa-modal-btn-cerrar"))==null||t.addEventListener("click",r);const i=document.getElementById("form-tasa-manual");i==null||i.addEventListener("submit",async n=>{n.preventDefault();const d=document.getElementById("in-tasa-manual"),s=Number((d==null?void 0:d.value)||0);if(!s||s<=0)return;if(window.confirm(`¿Está seguro de que desea cambiar la tasa oficial del sistema a Bs. ${s.toFixed(2)}?

Esta tasa afectará todos los nuevos cobros y tickets a partir de este momento.`)){const p=await J("fijar_tasa_manual",{tasa:s.toFixed(2)});p&&this.pintar(p),r()}})}async actualizar(){const e=await this.obtenerTasa("obtener_tasa_bcv");e&&this.pintar(e)}async forzar(){const e=document.getElementById("bcv-refresh");e&&e.classList.add("animate-spin");const o=await this.obtenerTasa("forzar_actualizacion_tasa");e&&e.classList.remove("animate-spin"),o&&this.pintar(o)}async obtenerTasa(e){try{return await J(e)}catch{return null}}pintar(e){const o=document.getElementById("bcv-valor"),a=document.getElementById("bcv-fluctuacion");if(!o||!a)return;const r=Number(e.valor);o.textContent=Number.isFinite(r)&&r>0?r.toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}):"--",Number.isFinite(r)&&r>0&&window.dispatchEvent(new CustomEvent("tasa_actualizada",{detail:r}));const i=Number(e.fluctuacionPct);if(e.direccion&&Number.isFinite(i)){const c=e.direccion==="subio"?Xe:e.direccion==="bajo"?Ye:Qe,b=i>0?"+":"";a.textContent=`${b}${i.toFixed(2)}%`,a.style.color=c}else a.textContent=""}}class tt{constructor(){U(this,"config",null);U(this,"rol","caja");U(this,"tasa",0);U(this,"oyentes",[])}suscribir(e){this.oyentes.push(e)}notificar(){this.oyentes.forEach(e=>e())}async cargarConfig(){return this.config=await D.config(),this.config}getConfig(){return this.config}async inicializar(e,o,a,r,i){await D.inicializar(e,o,a,r,i),await this.cargarConfig(),this.notificar()}get rubroAbasto(){var e,o;return(((e=this.config)==null?void 0:e.rubros)??0&Ce)!==0||(((o=this.config)==null?void 0:o.rubros)??0)===Ce}tieneRubro(e){var o;return((((o=this.config)==null?void 0:o.rubros)??0)&e)!==0}tieneCapacidad(e){var o;return((((o=this.config)==null?void 0:o.capacidades)??0)&e)!==0}setRol(e){this.rol=e,this.notificar()}get rolActual(){return this.rol}setTasa(e){this.tasa=e,this.notificar()}get tasaActual(){return this.tasa}bs(e){return(Number(e)*this.tasa).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}hasPinSet(){var e;return!!((e=this.config)!=null&&e.tienePin)}async verificarPin(e){return D.validarPin(e)}}function at(l,e){const o=l.replace(/[^a-zA-Z0-9]/g,"");if(o.length!==16)return!1;const a=o.split("").map(b=>parseInt(b,10)).filter(b=>!isNaN(b)&&b<10);if(a.length!==16)return!1;let r=0;for(let b=0;b<12;b++)r+=a[b]*(b+1);const i=r%1e4,c=a[12]*1e3+a[13]*100+a[14]*10+a[15];return i===c}class ot{constructor(e,o,a){U(this,"contenedor");U(this,"modelo");U(this,"alTerminar");U(this,"modo","nuevo");U(this,"bloquearPanel",!0);this.contenedor=e,this.modelo=o,this.alTerminar=a}render(){this.contenedor.innerHTML=`
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
                        <p class="font-heading font-bold text-xs uppercase tracking-wide mb-2">Rubros comerciales activos:</p>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            ${this.tarjetaRubro("wz-abasto","Abasto","Comestibles y peso",Ce,"bg-brand-cyan")}
                            ${this.tarjetaRubro("wz-panaderia","Panadería","Horneados FEFO",Le,"bg-brand-yellow")}
                            ${this.tarjetaRubro("wz-licoreria","Licorería","Cuentas y consumo",Re,"bg-brand-pink")}
                            ${this.tarjetaRubro("wz-retail","Retail","Series y garantías",Ne,"bg-purple-100")}
                        </div>
                    </div>

                    <!-- Clave de Licencia Comercial -->
                    <div class="border-2 border-brand-black rounded-lg p-4 bg-gray-50 space-y-3">
                        <span class="block font-heading font-black text-xs uppercase text-brand-black">Clave de Licencia Comercial</span>
                        <p class="text-xs text-gray-600 font-bold">Clave de activación de 16 dígitos DatioLabs. Sin clave, opera en modo demostración.</p>
                        <input id="wz-licencia" type="text" maxlength="20" placeholder="Ej: 0001-8888-1111-0000"
                            class="w-full border-2 border-brand-black rounded px-4 py-2 text-sm font-mono font-bold focus:outline-none focus:ring-2 focus:ring-brand-purple tracking-wider" />
                        <p id="wz-licencia-error" class="hidden text-red-700 font-bold text-xs">Clave no válida para los rubros seleccionados.</p>
                        <p class="text-[10px] text-gray-500 font-bold">Puede omitir este paso y activar la licencia posteriormente desde el Panel de Control Dueño(a).</p>
                    </div>

                    <!-- Elección de Privacidad de Inventario -->
                    <div class="border-2 border-brand-black rounded-lg p-4 bg-gray-50 space-y-3">
                        <span class="block font-heading font-black text-xs uppercase text-brand-black">Privacidad de Inventario y Stock</span>
                        <p class="text-xs text-gray-600 font-bold">Nivel de visibilidad de costos y valoración para operadores:</p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label class="cursor-pointer border-2 rounded p-3 bg-white flex items-start gap-2.5 border-brand-black ring-2 ring-brand-purple">
                                <input type="radio" name="opt-priv-inv" id="priv-inv-dueno" checked class="mt-0.5" />
                                <div>
                                    <span class="block font-heading font-black text-xs">SOLO DUEÑO(A) (RESTRINGIDO)</span>
                                    <span class="text-[11px] text-gray-500 font-bold">Operadores visualizan disponibilidad física sin costos ni valoración global.</span>
                                </div>
                            </label>
                            <label class="cursor-pointer border-2 rounded p-3 bg-white flex items-start gap-2.5 border-gray-300">
                                <input type="radio" name="opt-priv-inv" id="priv-inv-abierto" class="mt-0.5" />
                                <div>
                                    <span class="block font-heading font-black text-xs">VISIBILIDAD TOTAL</span>
                                    <span class="text-[11px] text-gray-500 font-bold">Acceso a conteos, costos unitarios y balance total de inventario.</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- Elección de Seguridad del Panel -->
                    <div class="border-2 border-brand-black rounded-lg p-4 bg-gray-50 space-y-3">
                        <span class="block font-heading font-black text-xs uppercase text-brand-black">Seguridad del Panel de Control Dueño(a)</span>
                        <p class="text-xs text-gray-600 font-bold">Restricción de acceso a métricas contables, arqueos y configuración:</p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label class="cursor-pointer border-2 rounded p-3 bg-white flex items-start gap-2.5 ${this.bloquearPanel?"border-brand-black ring-2 ring-brand-purple":"border-gray-300"}">
                                <input type="radio" name="opt-seguridad" id="seg-bloqueado" ${this.bloquearPanel?"checked":""} class="mt-0.5" />
                                <div>
                                    <span class="block font-heading font-black text-xs">BLOQUEAR CON CLAVE</span>
                                    <span class="text-[11px] text-gray-500 font-bold">Acceso exclusivo mediante clave de Dueño(a).</span>
                                </div>
                            </label>
                            <label class="cursor-pointer border-2 rounded p-3 bg-white flex items-start gap-2.5 ${this.bloquearPanel?"border-gray-300":"border-brand-black ring-2 ring-brand-purple"}">
                                <input type="radio" name="opt-seguridad" id="seg-abierto" ${this.bloquearPanel?"":"checked"} class="mt-0.5" />
                                <div>
                                    <span class="block font-heading font-black text-xs">DEJAR ABIERTO</span>
                                    <span class="text-[11px] text-gray-500 font-bold">Acceso directo sin clave en este terminal.</span>
                                </div>
                            </label>
                        </div>

                        <div id="wz-box-pin" class="${this.bloquearPanel?"block":"hidden"} pt-2">
                            <label class="block font-heading font-bold text-xs uppercase tracking-wide mb-1">Define la Clave Maestra de Dueño(a) *</label>
                            <input id="wz-pin" type="password" maxlength="16" placeholder="Ingresa clave numérica (ej: 1234)"
                                class="w-full border-2 border-brand-black rounded px-4 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            <p class="text-[10px] text-gray-500 font-bold mt-1">Configurable posteriormente desde el Panel de Control Dueño(a).</p>
                        </div>
                    </div>



                    <div id="wz-error" class="hidden bg-red-100 border-2 border-red-600 text-red-800 rounded px-4 py-3 font-bold text-sm"></div>

                    <button id="wz-iniciar" class="w-full bg-brand-black text-white font-heading font-black text-lg py-3.5 rounded border-2 border-brand-black shadow-brutal hover:-translate-y-0.5 transition-transform">
                        INICIALIZAR TERMINAL
                    </button>
                </div>

                <!-- Modo 2: Instalar desde Respaldo Criptográfico -->
                <div id="wz-sec-restaurar" class="${this.modo==="restaurar"?"block":"hidden"} space-y-5">
                    <div class="bg-amber-50 border-2 border-brand-black rounded-lg p-4 text-xs font-bold text-amber-900 leading-relaxed">
                        <strong>Restauración Criptográfica de Datos:</strong>
                        <p class="mt-1">Restaura el catálogo SoA, inventario atómico, categorías, tasas tributarias e historial comercial con verificación de integridad SHA-256.</p>
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
                            <label class="block font-heading font-bold text-xs uppercase tracking-wide mb-1">Clave de Dueño(a) para este Terminal *</label>
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
        </div>`,this.conectarEventos()}tarjetaRubro(e,o,a,r,i,c=!1){return`
        <label for="${e}" class="cursor-pointer block select-none">
            <div class="border-2 border-brand-black rounded-lg p-3 ${i} bg-opacity-30 hover:bg-opacity-50 transition-all hover:-translate-y-0.5 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="font-heading font-black text-sm text-brand-black">${o}</span>
                    <input type="checkbox" id="${e}" data-bit="${r}" ${c?"checked":""} class="w-5 h-5 accent-brand-black cursor-pointer border-2 border-brand-black rounded" />
                </div>
                <p class="text-xs text-brand-text font-body mt-1 font-bold">${a}</p>
            </div>
        </label>`}conectarEventos(){var p,g;const e=document.getElementById("wz-tab-nuevo"),o=document.getElementById("wz-tab-restaurar");e==null||e.addEventListener("click",()=>{this.modo="nuevo",this.render()}),o==null||o.addEventListener("click",()=>{this.modo="restaurar",this.render()});const a=document.getElementById("seg-bloqueado"),r=document.getElementById("seg-abierto"),i=document.getElementById("wz-box-pin");a==null||a.addEventListener("change",()=>{this.bloquearPanel=!0,i==null||i.classList.remove("hidden")}),r==null||r.addEventListener("change",()=>{this.bloquearPanel=!1,i==null||i.classList.add("hidden")});const c=document.getElementById("seg-bloqueado-res"),b=document.getElementById("seg-abierto-res"),t=document.getElementById("wz-box-pin-res");c==null||c.addEventListener("change",()=>{this.bloquearPanel=!0,t==null||t.classList.remove("hidden")}),b==null||b.addEventListener("change",()=>{this.bloquearPanel=!1,t==null||t.classList.add("hidden")}),(p=document.getElementById("wz-iniciar"))==null||p.addEventListener("click",()=>void this.enviarNuevo());const n=document.getElementById("drop-zona"),d=document.getElementById("wz-archivo-input"),s=document.getElementById("wz-archivo-cargado"),u=document.getElementById("wz-nombre-archivo");n==null||n.addEventListener("click",()=>d==null?void 0:d.click()),d==null||d.addEventListener("change",()=>{if(d.files&&d.files[0]){const x=d.files[0];u&&s&&(u.textContent=x.name,s.classList.remove("hidden"))}}),(g=document.getElementById("wz-ejecutar-restaurar"))==null||g.addEventListener("click",()=>void this.enviarRestauracion())}async enviarNuevo(){const e=document.getElementById("wz-error"),o=document.getElementById("wz-nombre").value.trim(),a=document.getElementById("wz-pin"),r=this.bloquearPanel&&(a==null?void 0:a.value.trim())||"",i=[...this.contenedor.querySelectorAll("input[type=checkbox]:checked")].reduce((n,d)=>n|Number(d.dataset.bit),0),c=document.getElementById("wz-licencia"),b=(c==null?void 0:c.value.trim())||"",t=document.getElementById("wz-licencia-error");if(!o||i===0){e&&(e.textContent="Escribe el nombre del negocio y marca al menos un rubro.",e.classList.remove("hidden"));return}if(this.bloquearPanel&&!r){e&&(e.textContent='Ingresa una clave para proteger el panel o selecciona la opción "DEJAR ABIERTO".',e.classList.remove("hidden"));return}if(b&&!at(b)){t&&t.classList.remove("hidden");return}t&&t.classList.add("hidden");try{const n=document.getElementById("priv-inv-dueno"),d=(n==null?void 0:n.checked)??!0;await this.modelo.inicializar(o,i,r,b,d);const s=this.modelo.getConfig();s&&this.alTerminar(s)}catch(n){e&&(e.textContent=n instanceof Error?n.message:String(n),e.classList.remove("hidden"))}}async enviarRestauracion(){var c;const e=document.getElementById("wz-restore-error"),o=document.getElementById("wz-archivo-input"),a=document.getElementById("wz-pin-restaurar"),r=this.bloquearPanel&&(a==null?void 0:a.value.trim())||"",i=(c=o==null?void 0:o.files)==null?void 0:c[0];if(!i){e&&(e.textContent="Selecciona un archivo de respaldo.",e.classList.remove("hidden"));return}if(this.bloquearPanel&&!r){e&&(e.textContent='Ingresa una clave para el panel en este terminal o selecciona "DEJAR ABIERTO".',e.classList.remove("hidden"));return}try{const b=await new Promise((n,d)=>{const s=new FileReader;s.onload=()=>{const u=s.result;if(typeof u=="string"){const p=u.split(",")[1]||"";n(p)}else d(new Error("Error leyendo archivo"))},s.onerror=()=>d(new Error("No se pudo leer el archivo")),s.readAsDataURL(i)});await D.restaurarDesdeArchivo(b,i.name),this.bloquearPanel&&r&&await D.cambiarPinDueno("",r).catch(()=>{});const t=await D.config();if(t)this.alTerminar(t);else throw new Error("Respaldo restaurado pero no se pudo cargar la configuración")}catch(b){e&&(e.textContent=b instanceof Error?b.message:String(b),e.classList.remove("hidden"))}}}class rt{constructor(e){U(this,"modelo");U(this,"productos",[]);U(this,"carrito",[]);U(this,"busqueda","");U(this,"cuentaSeleccionada",null);U(this,"cuentas",[]);U(this,"oyentes",[]);U(this,"edadConfirmadaSesion",!1);U(this,"tasaBloqueadaTicket",null);this.modelo=e}suscribir(e){this.oyentes.push(e),e()}notificar(){this.oyentes.forEach(e=>e())}async cargar(){this.productos=await D.productos(),this.modelo.tieneCapacidad(ue)&&(this.cuentas=await D.cuentas()),this.notificar()}get visibles(){const e=this.busqueda.trim().toLowerCase();return e?this.productos.filter(o=>o.nombre.toLowerCase().includes(e)||o.sku.toLowerCase().includes(e)).slice(0,24):this.productos.slice(0,24)}setBusqueda(e){this.busqueda=e,this.notificar()}get lineasCarrito(){return this.carrito}get tasaTicket(){return this.tasaBloqueadaTicket??this.modelo.tasaActual}get totalUsd(){return this.carrito.reduce((e,o)=>e+o.precioUsd*o.cantidad,0)}get totalBs(){return this.totalUsd*this.tasaTicket}get cuentasAbiertasListado(){return this.cuentas}get cuentaActiva(){return this.cuentaSeleccionada}get modoCuentaAbierta(){return this.cuentaSeleccionada!==null}seleccionarCuenta(e){this.cuentaSeleccionada=e,this.notificar()}requiereEdad(e){return!1}marcarEdadConfirmada(e){this.edadConfirmadaSesion=e}async agregar(e,o="unidad"){const a=this.productos.find(r=>r.sku===e);return a?this.requiereEdad(a)?"EDAD|"+a.nombre:this.empujar(a,void 0,void 0,o):"Producto no encontrado"}empujar(e,o,a,r="unidad"){const i=r==="paquete"&&(e.precioPaqueteUsd||e.esCaja&&e.unidadesPorCaja&&e.unidadesPorCaja>1),c=i&&e.unidadesPorCaja||1,b=i?e.precioPaqueteUsd?Number(e.precioPaqueteUsd):Number(e.precioUsd)*c:Number(e.precioUsd),t=!i&&((e.capacidades&fe)!==0||e.unidad==="kg"||e.unidad==="ml"),n=t?.25:1,d=this.carrito.find(p=>p.sku===e.sku&&p.serie===o&&p.variante===a&&p.modoVenta===r),u=(d?d.cantidad:0)+n;if(!e.sinStock){const p=Number(e.stock);if(p<u*c)return`Stock insuficiente para ${e.nombre}. Disponible: ${p}, Solicitado: ${u*c}`}return this.tasaBloqueadaTicket===null&&(this.tasaBloqueadaTicket=this.modelo.tasaActual),d?d.cantidad=t?Math.round(u*1e3)/1e3:Math.round(u):this.carrito.push({sku:e.sku,nombre:e.nombre,precioUsd:b,cantidad:t?n:Math.round(n),pesable:t,conSerie:(e.capacidades&we)!==0,conVariantes:(e.capacidades&Be)!==0,serie:o,variante:a,modoVenta:r}),this.notificar(),null}asignarSerie(e,o){const a=this.carrito.find(r=>r.sku===e);a&&(a.serie=o.trim().toUpperCase(),this.notificar())}asignarVariante(e,o){const a=this.carrito.find(r=>r.sku===e);a&&(a.variante=o.trim(),this.notificar())}cambiarCantidad(e,o){const a=this.carrito.find(b=>b.sku===e);if(!a)return null;const r=this.productos.find(b=>b.sku===e);let i=Math.max(0,o);a.pesable?i=Math.round(i*1e3)/1e3:i=Math.round(i);const c=a.modoVenta==="paquete"&&(r!=null&&r.esCaja)&&(r!=null&&r.unidadesPorCaja)?r.unidadesPorCaja:1;return r&&!r.sinStock&&i*c>Number(r.stock)?`Stock insuficiente para ${a.nombre}. Disponible: ${r.stock} un., Solicitado: ${i*c} un.`:(a.cantidad=i,a.cantidad===0?this.quitar(e):this.notificar(),null)}quitar(e){this.carrito=this.carrito.filter(o=>o.sku!==e),this.carrito.length===0&&(this.tasaBloqueadaTicket=null),this.notificar()}vaciar(){this.carrito=[],this.tasaBloqueadaTicket=null,this.notificar()}async cobrar(e,o,a){if(this.modoCuentaAbierta&&this.cuentaSeleccionada)throw new Error("Hay una cuenta abierta seleccionada. Usa su boton de cobro.");if(this.carrito.length===0)throw new Error("Carrito vacio");for(const i of this.carrito){const c=this.productos.find(n=>n.sku===i.sku),b=i.modoVenta==="paquete"&&(c!=null&&c.esCaja)&&(c!=null&&c.unidadesPorCaja)?c.unidadesPorCaja:1,t=i.cantidad*b;if(c&&!c.sinStock&&t>Number(c.stock))throw new Error(`Stock insuficiente para ${c.nombre}. Disponible: ${c.stock} un., En carrito: ${t} un.`)}const r=await D.registrarVenta(this.carrito.map(i=>({sku:i.sku,cantidad:String(i.cantidad),modo_venta:i.modoVenta})),this.edadConfirmadaSesion,e||"0",o,a,`sale-${Date.now()}-${Math.random().toString(36).slice(2,8)}`);return this.vaciar(),this.edadConfirmadaSesion=!1,await this.refrescarInventario(),r}async crearCuenta(e){const o=await D.abrirCuenta(e);this.cuentas.some(a=>a.ventaId===o.ventaId)||this.cuentas.push(o),this.cuentaSeleccionada=o,this.notificar()}async agregarACuenta(e,o="unidad"){if(!this.cuentaSeleccionada)return"Selecciona una cuenta primero";const a=this.productos.find(i=>i.sku===e);if(!a)return"Producto no encontrado";if(this.requiereEdad(a))return"EDAD|"+a.nombre;const r=await D.agregarConsumo(this.cuentaSeleccionada.ventaId,a.sku,"1",this.edadConfirmadaSesion,o);return this.cuentaSeleccionada=r,this.cuentas=this.cuentas.map(i=>i.ventaId===r.ventaId?r:i),await this.refrescarInventario(),null}async cerrarCuentaActual(e,o){if(!this.cuentaSeleccionada)throw new Error("Ninguna cuenta seleccionada");const a=await D.cerrarCuenta(this.cuentaSeleccionada.ventaId,e||"0",void 0,o);return this.cuentas=this.cuentas.filter(r=>r.ventaId!==a.ventaId),this.cuentaSeleccionada=null,this.edadConfirmadaSesion=!1,await this.refrescarInventario(),a}async refrescarInventario(){this.productos=await D.productos(),this.notificar()}}function be(l,e="info"){var r;const o={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},a=document.createElement("div");a.className=`fixed bottom-6 right-6 ${o[e]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110] transition-all duration-300`,a.innerHTML=`<span class="text-xs sm:text-sm">${l.replace(/"/g,"")}</span> <button class="ml-3 underline font-black text-xs uppercase">Cerrar</button>`,(r=a.querySelector("button"))==null||r.addEventListener("click",()=>a.remove()),document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",setTimeout(()=>a.remove(),300)},6e3)}function ce(l,e="CONFIRMACIÓN REQUERIDA"){return new Promise(o=>{var i;const a=document.createElement("div");a.className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[120]",a.innerHTML=`
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal max-w-md w-full p-5 sm:p-6">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                    <h3 class="font-heading font-black text-base sm:text-lg text-brand-black uppercase">${e}</h3>
                    <button data-dialog-cancel class="text-brand-black font-black text-lg hover:text-red-600">&times;</button>
                </div>
                <p class="text-xs sm:text-sm font-bold text-gray-700 leading-relaxed mb-5">${l}</p>
                <div class="flex justify-end gap-2 pt-2 border-t border-gray-200">
                    <button data-dialog-cancel class="bg-white border-2 border-brand-black font-heading font-black px-4 py-2 rounded text-xs hover:bg-gray-100">
                        CANCELAR
                    </button>
                    <button data-dialog-confirm class="bg-brand-black text-white hover:bg-gray-800 border-2 border-brand-black font-heading font-black px-4 py-2 rounded text-xs shadow-brutal-sm">
                        CONFIRMAR
                    </button>
                </div>
            </div>
        `;const r=c=>{a.remove(),o(c)};a.querySelectorAll("[data-dialog-cancel]").forEach(c=>c.addEventListener("click",()=>r(!1))),(i=a.querySelector("[data-dialog-confirm]"))==null||i.addEventListener("click",()=>r(!0)),document.body.appendChild(a)})}function pe(l,e="",o="SOLICITUD DE DATO"){return new Promise(a=>{var b;const r=document.createElement("div");r.className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[120]",r.innerHTML=`
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal max-w-md w-full p-5 sm:p-6">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                    <h3 class="font-heading font-black text-base sm:text-lg text-brand-black uppercase">${o}</h3>
                    <button data-dialog-cancel class="text-brand-black font-black text-lg hover:text-red-600">&times;</button>
                </div>
                <p class="text-xs sm:text-sm font-bold text-gray-700 leading-relaxed mb-3">${l}</p>
                <input id="dialog-input-val" type="text" value="${e}" class="w-full border-2 border-brand-black rounded px-3 py-2 text-sm font-bold mb-4 focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                <div class="flex justify-end gap-2 pt-2 border-t border-gray-200">
                    <button data-dialog-cancel class="bg-white border-2 border-brand-black font-heading font-black px-4 py-2 rounded text-xs hover:bg-gray-100">
                        CANCELAR
                    </button>
                    <button data-dialog-accept class="bg-brand-black text-white hover:bg-gray-800 border-2 border-brand-black font-heading font-black px-4 py-2 rounded text-xs shadow-brutal-sm">
                        ACEPTAR
                    </button>
                </div>
            </div>
        `;const i=r.querySelector("#dialog-input-val"),c=t=>{r.remove(),a(t)};r.querySelectorAll("[data-dialog-cancel]").forEach(t=>t.addEventListener("click",()=>c(null))),(b=r.querySelector("[data-dialog-accept]"))==null||b.addEventListener("click",()=>{c((i==null?void 0:i.value)??"")}),i==null||i.addEventListener("keydown",t=>{t.key==="Enter"&&c(i.value),t.key==="Escape"&&c(null)}),document.body.appendChild(r),i==null||i.focus(),i==null||i.select()})}const Oe="America/Caracas";function $e(l){if(!l||l<=0)return"-";const e=new Date(l*1e3);return new Intl.DateTimeFormat("es-VE",{timeZone:Oe,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(e)}function Ie(l,e=!1){return new Intl.DateTimeFormat("es-VE",{timeZone:Oe,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",...e?{second:"2-digit"}:{},hour12:!1}).format(l)}function nt(l){if(!l||l<=0)return"Hoy";const e=Math.floor(Date.now()/1e3),o=Math.max(0,e-l);if(o<3600)return"Hoy (reciente)";const a=Math.floor(o/3600);if(a<24)return`Hoy (hace ${a}h)`;const r=Math.floor(a/24);return r===1?"Hace 1 día":`Hace ${r} días`}const ie=l=>X(l).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2});async function Me(l){var s,u,p;const[e,o]=await Promise.all([D.obtenerJornadaActual(),D.ventas()]);if(!e){l.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md text-center">
                <h3 class="font-heading font-black text-xl mb-2 text-red-700">SIN JORNADA ACTIVA</h3>
                <p class="text-xs font-body text-gray-600 mb-4">No existe un turno abierto actualmente en la estación. Abre un turno para iniciar el registro cronológico de ventas.</p>
                <button id="btn-cerrar-historial-turno" class="w-full bg-brand-black text-white font-heading font-black py-2.5 rounded border-2 border-brand-black text-xs">ENTENDIDO</button>
            </div>
        </div>`,(s=l.querySelector("#btn-cerrar-historial-turno"))==null||s.addEventListener("click",()=>{l.innerHTML=""});return}const a=e.inicioUnix,r=o.filter(g=>(g.fechaUnix||0)>=a);let i=0,c=0,b={},t={};r.forEach(g=>{const x=X(g.totalUsd),S=X(g.totalBs);i+=x,c+=S;const h=g.operador||e.operadorActual||"Cajero";t[h]||(t[h]={usd:0,bs:0,tickets:0}),t[h].usd+=x,t[h].bs+=S,t[h].tickets+=1,Array.isArray(g.pagos)&&g.pagos.length>0&&g.pagos.forEach(A=>{const f=A.metodo||"EFECTIVO";b[f]||(b[f]={usd:0,bs:0}),b[f].usd+=X(A.montoUsd),b[f].bs+=X(A.montoBs)})});const n=e.operadoresActivos&&e.operadoresActivos.length>0?e.operadoresActivos.join(", "):e.operadorActual||"Sin asignar";l.innerHTML=`
    <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-5 sm:p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col">
            <div class="flex justify-between items-center border-b-2 border-brand-black pb-3 mb-3">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-wider text-brand-purple">Auditoría Operativa de Caja</span>
                    <h3 class="font-heading font-black text-2xl">HISTORIAL DEL TURNO ACTIVO</h3>
                    <p class="text-xs text-gray-500 font-bold">
                        Apertura: ${$e(e.inicioUnix)} · Operador(es): <strong>${n}</strong>
                    </p>
                </div>
                <button id="btn-cerrar-historial-turno" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
            </div>

            <!-- Resumen Métricas del Turno -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div class="bg-gray-50 border-2 border-brand-black rounded p-3">
                    <span class="text-[10px] font-black uppercase text-gray-500 block">Total Recaudado en Turno</span>
                    <p class="font-heading font-black text-xl text-brand-black mt-0.5">$ ${ie(i)} USD</p>
                    <p class="text-xs font-black text-brand-purple">Bs. ${ie(c)}</p>
                </div>
                <div class="bg-gray-50 border-2 border-brand-black rounded p-3">
                    <span class="text-[10px] font-black uppercase text-gray-500 block">Comprobantes Emitidos</span>
                    <p class="font-heading font-black text-xl text-brand-black mt-0.5">${r.length} tickets</p>
                    <p class="text-xs font-bold text-gray-500">Tasa de inicio: Bs. ${ie(e.tasaInicio)}</p>
                </div>
                <div class="bg-gray-50 border-2 border-brand-black rounded p-3">
                    <span class="text-[10px] font-black uppercase text-gray-500 block">Vueltos Otorgados / Retenidos</span>
                    <p class="font-heading font-black text-base text-gray-800 mt-0.5">Pagado: Bs. ${ie(e.vueltoPagadoBs)}</p>
                    <p class="text-xs font-bold text-emerald-800">Retenido: Bs. ${ie(e.vueltoRetenidoBs)}</p>
                </div>
            </div>

            <!-- Desglose por Operador y Métodos -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div class="border-2 border-brand-black rounded p-3 bg-white">
                    <span class="text-[10px] font-heading font-black uppercase text-gray-600 block mb-2">Desglose por Cajero / Despachador</span>
                    <div class="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                        ${Object.keys(t).length===0?'<p class="text-xs text-gray-400 italic">Sin transacciones registradas por operadores.</p>':Object.entries(t).map(([g,x])=>`
                                <div class="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
                                    <span class="font-bold text-gray-800">${g} (${x.tickets} t.)</span>
                                    <span class="font-mono font-black text-brand-black">$${ie(x.usd)} · Bs. ${ie(x.bs)}</span>
                                </div>
                            `).join("")}
                    </div>
                </div>
                <div class="border-2 border-brand-black rounded p-3 bg-white">
                    <span class="text-[10px] font-heading font-black uppercase text-gray-600 block mb-2">Desglose por Método de Pago</span>
                    <div class="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                        ${Object.keys(b).length===0?'<p class="text-xs text-gray-400 italic">Sin pagos asentados.</p>':Object.entries(b).map(([g,x])=>`
                                <div class="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
                                    <span class="font-bold text-gray-800">${g}</span>
                                    <span class="font-mono font-black text-brand-black">${x.usd>0?`$${ie(x.usd)} `:""}Bs. ${ie(x.bs)}</span>
                                </div>
                            `).join("")}
                    </div>
                </div>
            </div>

            <!-- Lista Cronológica de Tickets -->
            <div class="border-2 border-brand-black rounded-lg p-3 bg-gray-50 flex-1 flex flex-col min-h-[160px]">
                <div class="flex justify-between items-center border-b-2 border-gray-200 pb-1.5 mb-2">
                    <span class="text-xs font-heading font-black uppercase text-gray-700">Tickets del Turno (${r.length})</span>
                    <span class="text-[10px] font-bold text-gray-500">Hora VET · Canal · Total</span>
                </div>
                <div class="space-y-1.5 overflow-y-auto max-h-56 pr-1">
                    ${r.length===0?'<p class="py-6 text-center text-xs text-gray-400 font-bold">No se han emitido tickets durante el turno actual.</p>':r.map(g=>`
                            <div class="flex items-center justify-between border border-brand-black bg-white rounded p-2 text-xs font-bold hover:bg-amber-50/50">
                                <div>
                                    <p class="font-mono text-brand-black">${g.ventaId.slice(0,10)} · <span class="text-[10px] text-gray-500">${$e(g.fechaUnix)}</span></p>
                                    <p class="text-[10px] text-brand-purple font-black uppercase">${g.canal||"VENTA DIRECTA"} ${g.operador?`· Cajero: ${g.operador}`:""}</p>
                                </div>
                                <div class="text-right">
                                    <p class="font-heading font-black text-sm text-brand-black">$${ie(g.totalUsd)}</p>
                                    <p class="text-[10px] font-bold text-gray-500">Bs. ${ie(g.totalBs)}</p>
                                </div>
                            </div>
                        `).join("")}
                </div>
            </div>

            <div class="pt-4 mt-2 border-t-2 border-brand-black text-right">
                <button id="btn-cerrar-historial-turno-footer" class="bg-brand-black text-white font-heading font-black px-6 py-2.5 rounded border-2 border-brand-black text-xs hover:bg-gray-800">
                    CERRAR
                </button>
            </div>
        </div>
    </div>`;const d=()=>{l.innerHTML=""};(u=l.querySelector("#btn-cerrar-historial-turno"))==null||u.addEventListener("click",d),(p=l.querySelector("#btn-cerrar-historial-turno-footer"))==null||p.addEventListener("click",d)}const Q=l=>X(l).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2});class st{constructor(e,o,a,r){U(this,"contenedor");U(this,"vm");U(this,"modelo");U(this,"modal");U(this,"pagosBorrador",null);U(this,"resolucionVueltoBorrador",null);U(this,"semaforoStock",{rojoMax:5,amarilloMax:15});this.contenedor=e,this.modal=o,this.vm=a,this.modelo=r,D.obtenerSemaforoStock().then(i=>{this.semaforoStock=i,this.renderDinamico()}),this.vm.suscribir(()=>this.renderDinamico()),this.modelo.suscribir(()=>this.renderDinamico())}render(){var e,o,a,r,i,c;this.contenedor.innerHTML=`
        <div class="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6">
            <div class="lg:col-span-2 order-2 lg:order-1">
                <input id="caja-buscar" type="text" autocomplete="off" maxlength="40"
                    placeholder="Buscar producto o código..."
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
                        <button id="btn-historial-turno-caja" title="Ver historial de tickets y recaudación de la jornada activa" class="inline-flex items-center gap-1 text-[11px] font-heading font-black bg-gray-100 text-brand-black border border-brand-black hover:bg-gray-200 px-2 py-1 rounded shadow-brutal-sm transition-transform active:translate-y-0.5">
                            HISTORIAL
                        </button>
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
        </div>`,(e=document.getElementById("caja-buscar"))==null||e.addEventListener("input",b=>{this.vm.setBusqueda(b.target.value)}),(o=document.getElementById("caja-buscar"))==null||o.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),this.enterRapido())}),(a=document.getElementById("caja-vaciar"))==null||a.addEventListener("click",()=>{this.pagosBorrador=null,this.resolucionVueltoBorrador=null,this.vm.vaciar()}),(r=document.getElementById("caja-cobrar"))==null||r.addEventListener("click",()=>void this.abrirModalCobro()),(i=document.getElementById("btn-historial-turno-caja"))==null||i.addEventListener("click",()=>{Me(this.modal)}),(c=document.getElementById("btn-gestionar-operadores-caja"))==null||c.addEventListener("click",()=>void(async()=>{await D.obtenerJornadaActual()===null?this.abrirModalIniciarJornada():this.abrirModalOperadoresCaja()})()),this.renderDinamico()}async enterRapido(){const e=this.vm.visibles;if(e.length===0)return;const o=await this.vm.agregar(e[0].sku);o&&this.mostrarError(o);const a=document.getElementById("caja-buscar");a&&(a.value=""),this.vm.setBusqueda("")}mostrarError(e){if(e.startsWith("EDAD|")){this.modalEdad(e.slice(5));return}this.renderModal(`
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
            </div>`),(o=this.modal.querySelector("[data-no]"))==null||o.addEventListener("click",()=>this.cerrarModal()),(a=this.modal.querySelector("[data-si]"))==null||a.addEventListener("click",()=>{this.vm.marcarEdadConfirmada(!0),(async()=>{const r=this.vm.visibles;r[0]&&this.vm.empujar(r[0])})(),this.cerrarModal()})}async abrirModalOperadoresCaja(){const e=await D.listarOperadores(),o=await D.obtenerJornadaActual(),a=new Set((o==null?void 0:o.operadoresActivos)||[(o==null?void 0:o.operadorActual)||""]);(()=>{var c,b,t,n;const i=e.map(d=>{const s=a.has(d.nombre);return`
                <div class="flex items-center justify-between p-2.5 rounded border-2 border-brand-black ${s?"bg-purple-50 border-brand-purple":"bg-gray-50"}">
                    <label class="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0">
                        <input type="checkbox" data-cajero-chk="${d.id}" value="${d.nombre}" ${s?"checked":""} class="w-4 h-4 rounded text-brand-purple" />
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
                        ${i}
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
            `,"max-w-md"),(c=this.modal.querySelector("[data-cerrar]"))==null||c.addEventListener("click",()=>this.cerrarModal()),(b=this.modal.querySelector("#btn-cancelar-operadores-caja"))==null||b.addEventListener("click",()=>this.cerrarModal()),this.modal.querySelectorAll("button[data-cajero-edit]").forEach(d=>{d.addEventListener("click",async()=>{const s=d.dataset.cajeroEdit||"",u=d.dataset.cajeroNom||"",p=await pe("Modificar nombre del operador:",u,"EDITAR OPERADOR");p&&p.trim()&&p.trim()!==u&&(await D.editarOperador(s,p.trim()),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())})}),this.modal.querySelectorAll("button[data-cajero-del]").forEach(d=>{d.addEventListener("click",async()=>{const s=d.dataset.cajeroDel||"",u=d.dataset.cajeroNom||"";await ce(`¿Confirmas eliminar al operador "${u}"?`,"ELIMINAR OPERADOR")&&(await D.eliminarOperador(s),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())})}),(t=this.modal.querySelector("#form-nuevo-cajero-caja"))==null||t.addEventListener("submit",async d=>{d.preventDefault();const s=this.modal.querySelector("#in-nuevo-cajero-caja"),u=(s==null?void 0:s.value.trim())||"";u&&(await D.crearOperador(u),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())}),(n=this.modal.querySelector("#btn-guardar-operadores-caja"))==null||n.addEventListener("click",async()=>{const d=this.modal.querySelectorAll("input[data-cajero-chk]:checked"),s=[];if(d.forEach(u=>{u.value&&s.push(u.value)}),s.length===0){this.mostrarToast("Debes seleccionar al menos un operador activo en turno.","error");return}await D.asignarOperadoresTurno(s),this.cerrarModal(),this.renderDinamico()})})()}async abrirModalIniciarJornada(){const e=await D.listarOperadores();(()=>{var r,i,c,b;const a=e.length>0?e.map((t,n)=>`
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
            `,"max-w-md"),(r=this.modal.querySelector("[data-cerrar]"))==null||r.addEventListener("click",()=>this.cerrarModal()),(i=this.modal.querySelector("#btn-cancelar-inicio-jornada"))==null||i.addEventListener("click",()=>this.cerrarModal()),(c=this.modal.querySelector("#form-nuevo-cajero-inicio"))==null||c.addEventListener("submit",async t=>{t.preventDefault();const n=this.modal.querySelector("#in-nuevo-cajero-inicio"),d=(n==null?void 0:n.value.trim())||"";d&&(await D.crearOperador(d),this.cerrarModal(),this.abrirModalIniciarJornada())}),(b=this.modal.querySelector("#btn-abrir-turno"))==null||b.addEventListener("click",async()=>{const t=this.modal.querySelectorAll("input[data-inicio-cajero-chk]:checked"),n=[];if(t.forEach(s=>{s.value&&n.push(s.value)}),n.length===0){this.mostrarToast("Selecciona al menos un operador para abrir el turno.","error");return}const d=n[0];await D.abrirJornada(d,n),this.cerrarModal(),this.renderDinamico()})})()}async abrirModalCobro(){var x,S,h,A;if(this.vm.lineasCarrito.length===0)return;let e=[];try{e=await D.listarMetodosPago()}catch{e=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}const o=Number(this.vm.totalUsd.toFixed(2)),a=this.vm.tasaTicket,r=Number((o*a).toFixed(2)),i=e.find(f=>f.nombre==="BIOPAGO")||e.find(f=>f.moneda==="BS")||e[0]||{nombre:"BIOPAGO",moneda:"BS"};let c;if(this.pagosBorrador&&this.pagosBorrador.length>0){if(c=this.pagosBorrador.map(f=>({...f})),c.length===1&&c[0]){const f=c[0];f.monto=f.moneda==="USD"?o:r,f.tasaCambio=a}else if(c.length>1){let f=0;for(let k=0;k<c.length-1;k++){const w=c[k],y=w.tasaCambio>0?w.tasaCambio:a;f+=w.moneda==="USD"?w.monto*y:w.monto}const E=Math.max(0,Math.round((r-f)*100)/100),$=c[c.length-1];$&&($.monto=$.moneda==="USD"?a>0?Number((E/a).toFixed(2)):0:E,$.tasaCambio=a)}}else c=[{id:"p-1",metodo:i.nombre,moneda:i.moneda,monto:i.moneda==="USD"?o:r,tasaCambio:a,referencia:""}];let b=((x=this.resolucionVueltoBorrador)==null?void 0:x.estado)||"PAGADO",t=((S=this.resolucionVueltoBorrador)==null?void 0:S.metodo)||"BS.EFEC.",n=((h=this.resolucionVueltoBorrador)==null?void 0:h.tasa)||a;e.some(f=>f.nombre===t)||(t=((A=e[0])==null?void 0:A.nombre)||"BS.EFEC.");let d=!1;const s=()=>{let f=0;for(const C of c)if(C.moneda==="USD"){const j=C.tasaCambio>0?C.tasaCambio:a;f+=C.monto*j}else f+=C.monto;f=Math.round(f*100)/100;const E=a>0?Math.round(f/a*100)/100:0,$=Math.max(0,Math.round((r-f)*100)/100),k=a>0?Math.max(0,Math.round($/a*100)/100):0,w=Math.max(0,Math.round((f-r)*100)/100),y=a>0?Math.max(0,Math.round(w/a*100)/100):0,v=f>=r-.01&&c.every(C=>C.monto>0);return{cubiertoUsd:E,cubiertoBs:f,faltanteUsd:k,faltanteBs:$,vueltoUsd:y,vueltoBs:w,puedeConfirmar:v}},u=f=>{const E=e.find(y=>y.nombre===t),$=(E==null?void 0:E.moneda)==="USD",k=n>0?n:a,w=$&&k>0?Number((f.vueltoBs/k).toFixed(2)):f.vueltoUsd;return f.faltanteBs>.009?`
                <div class="bg-amber-50 border-2 border-amber-500 rounded p-3 text-center mb-3">
                    <p class="text-xs font-black uppercase text-amber-900">Monto Incompleto por Cubrir</p>
                    <p class="font-heading font-black text-xl text-amber-700">Faltan Bs. ${Q(f.faltanteBs)} · <span class="text-base text-amber-900">$ ${Q(f.faltanteUsd)} (Equiv. Oficial)</span></p>
                </div>`:f.vueltoBs>.009?`
                <div class="border-2 border-emerald-700 bg-emerald-50/70 rounded-lg p-3 mb-3">
                    <div class="flex flex-wrap items-center justify-between gap-1 mb-2">
                        <div>
                            <span class="text-[10px] font-black uppercase text-emerald-900 tracking-wide block">Excedente / Vuelto del Cliente</span>
                            <span class="font-heading font-black text-xl text-emerald-800">Bs. ${Q(f.vueltoBs)}</span>
                        </div>
                        <span class="text-xs font-bold text-emerald-900 font-mono">$ ${Q(f.vueltoUsd)} equiv. oficial</span>
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
                                ${e.map(y=>`
                                    <option value="${y.nombre}" ${y.nombre===t?"selected":""}>
                                        ${y.nombre} (${y.moneda==="USD"?"$ Dólares":"Bs. Bolívares"})
                                    </option>
                                `).join("")}
                            </select>
                        </div>
                        ${$?`
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
                                    $ ${Q(w)} USD
                                </span>
                            </div>
                        </div>
                        `:`
                        <div class="flex items-center justify-between pt-1 border-t border-gray-100 text-xs">
                            <span class="font-bold text-gray-600">Total a Entregar en Bolívares:</span>
                            <span class="font-heading font-black text-base text-brand-black">Bs. ${Q(f.vueltoBs)}</span>
                        </div>
                        `}
                    </div>
                    `:`
                    <div class="bg-white border border-gray-300 rounded p-2 text-xs text-gray-700">
                        <p class="font-bold text-emerald-900 mb-0.5">Vuelto Retenido como Saldo a Favor</p>
                        <p class="text-[11px] text-gray-600 leading-tight">
                            Excedente de <b>Bs. ${Q(f.vueltoBs)} ($ ${Q(f.vueltoUsd)})</b> asentado a favor sin egreso de efectivo.
                        </p>
                    </div>
                    `}
                </div>`:`
            <div class="bg-emerald-50 border-2 border-emerald-600 rounded p-2.5 text-center mb-3">
                <p class="text-xs font-black uppercase text-emerald-800">Total Exactamente Cubierto</p>
                <p class="text-xs text-emerald-700 font-bold">Importe liquidado sin diferencia pendiente.</p>
            </div>`},p=()=>{const f=s(),E=e.filter(y=>y.moneda==="USD"),$=e.filter(y=>y.moneda==="BS"),k=c.map((y,v)=>{const C=E.map(O=>`<option value="${O.nombre}" ${O.nombre===y.metodo?"selected":""}>${O.nombre} ($ - Tasa Dinámica)</option>`).join(""),G=`
                        <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                            ${$.map(O=>`<option value="${O.nombre}" ${O.nombre===y.metodo?"selected":""}>${O.nombre} (Bs.)</option>`).join("")}
                        </optgroup>
                        <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                            ${C}
                        </optgroup>
                    `,V=y.tasaCambio>0?y.tasaCambio:a,H=y.moneda==="USD"?y.monto*V:y.monto,_=a>0?H/a:0;return`
                    <div data-pago-card="${y.id}" class="border-2 border-brand-black rounded-lg p-3 bg-gray-50 mb-2.5">
                        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span class="font-heading font-black text-xs uppercase text-gray-700">
                                Pago #${v+1} · <span class="${y.moneda==="USD"?"text-brand-purple":"text-brand-black"}">${y.moneda==="USD"?"Divisa ($ USD)":"Moneda Nacional (Bs.)"}</span>
                            </span>
                            ${c.length>1?`<button data-eliminar-pago="${y.id}" class="text-xs font-black text-red-600 hover:text-red-800 bg-red-50 border border-red-300 rounded px-2 py-0.5">Eliminar</button>`:""}
                        </div>
                        ${y.moneda==="USD"?`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Divisa</label>
                                <select data-pago-metodo="${y.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${G}
                                </select>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto ($ USD)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">$</span>
                                    <input type="number" step="0.01" min="0.01" max="999999" data-pago-monto="${y.id}" value="${y.monto>0?y.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <div class="flex items-center justify-between mb-0.5">
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase">Tasa (Bs./$)</label>
                                    <button type="button" data-reset-tasa="${y.id}" class="text-[9px] font-black uppercase text-brand-purple hover:underline" title="Restablecer a tasa BCV oficial">BCV: ${Q(a)}</button>
                                </div>
                                <input type="number" step="0.01" min="1" max="100000" data-pago-tasa="${y.id}" value="${V>0?V:a}"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${y.id}" value="${y.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div data-aporte-info="${y.id}" class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-purple">Aporte: Bs. ${Q(H)}</span>
                            <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${Q(_)} ${V!==a?`(Tasa: Bs. ${Q(V)} vs BCV: Bs. ${Q(a)})`:""}</span>
                        </div>
                        `:`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-5">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Bolívares</label>
                                <select data-pago-metodo="${y.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${G}
                                </select>
                            </div>
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto (Bs.)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">Bs.</span>
                                    <input type="number" step="0.01" min="0.01" max="999999999" data-pago-monto="${y.id}" value="${y.monto>0?y.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${y.id}" value="${y.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div data-aporte-info="${y.id}" class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-black">Aporte directo: Bs. ${Q(y.monto)}</span>
                            <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${Q(_)}</span>
                        </div>
                        `}
                    </div>`}).join(""),w=`<div id="contenedor-estado-balance">${u(f)}</div>`;this.modalContenido(`
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
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${Q(o)} USD</span>
                                <span class="font-heading font-black text-xl text-brand-purple">Bs. ${Q(r)}</span>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-[10px] font-bold text-gray-500 uppercase block">Tasa Oficial Aplicada</span>
                            <span class="text-xs font-mono font-black text-gray-800">Bs. ${Q(a)}</span>
                        </div>
                    </div>

                    <!-- Lista de Pagos Asignados -->
                    <div class="mb-3">
                        ${k}
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
                                    ${e.map(y=>`
                                        <span class="inline-flex items-center gap-1 border border-brand-black rounded px-2 py-0.5 text-[11px] font-bold bg-white">
                                            <span>${y.nombre}</span>
                                            <span class="text-[9px] text-gray-500">(${y.moneda})</span>
                                            <button data-caja-eliminar-metodo="${y.nombre}" title="Eliminar método" class="text-red-600 hover:text-red-800 font-bold ml-0.5">✕</button>
                                        </span>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                    </div>`:""}

                    <!-- Indicador de Cobertura y Vuelto -->
                    ${w}

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
                        <button id="btn-confirmar-cobro" ${f.puedeConfirmar?"":"disabled"}
                            class="bg-green-700 hover:bg-green-800 disabled:opacity-30 disabled:cursor-not-allowed text-white font-heading font-black px-5 py-2.5 rounded border-2 border-brand-black shadow-brutal-sm text-sm">
                            CONFIRMAR COBRO
                        </button>
                    </div>
                </div>`,"max-w-xl"),g()},g=()=>{var v,C,j,G,V,H,_,O,I;const f=()=>{this.pagosBorrador=c,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n},this.cerrarModal()};this.modal.querySelectorAll("[data-cerrar]").forEach(B=>B.addEventListener("click",f)),(v=this.modal.querySelector("[data-cancelar]"))==null||v.addEventListener("click",f),(C=this.modal.querySelector("#btn-volver-caja"))==null||C.addEventListener("click",()=>{this.pagosBorrador=c,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n},this.cerrarModal();const B=document.getElementById("caja-buscar");B==null||B.focus()}),(j=this.modal.querySelector("#btn-vuelto-pagado"))==null||j.addEventListener("click",()=>{b="PAGADO",this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n},p()}),(G=this.modal.querySelector("#btn-vuelto-retenido"))==null||G.addEventListener("click",()=>{b="RETENIDO",this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n},p()}),(V=this.modal.querySelector("#select-metodo-vuelto"))==null||V.addEventListener("change",B=>{t=B.target.value,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n},p()});const E=this.modal.querySelector("#input-tasa-vuelto");E&&(E.addEventListener("input",B=>{const P=X(B.target.value);n=P>0?P:a,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n}}),E.addEventListener("blur",()=>{p()})),(H=this.modal.querySelector("#btn-reset-tasa-vuelto"))==null||H.addEventListener("click",()=>{n=a,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n},p()}),this.modal.querySelectorAll("select[data-pago-metodo]").forEach(B=>{B.addEventListener("change",P=>{const T=B.dataset.pagoMetodo,K=P.target.value,z=c.find(Y=>Y.id===T);if(z){const Y=e.find(q=>q.nombre===K),N=(Y==null?void 0:Y.moneda)||"BS";z.moneda=N,z.tasaCambio=a,c.length===1?z.monto=z.moneda==="USD"?o:r:N!==z.moneda&&(N==="USD"?z.monto=Number((a>0?z.monto/a:0).toFixed(2)):z.monto=Number((z.monto*a).toFixed(2))),z.metodo=K,this.pagosBorrador=c,p()}})});const $=()=>{var K,z,Y,N;const B=s(),P=this.modal.querySelector("#contenedor-estado-balance");if(P){P.innerHTML=u(B),(K=this.modal.querySelector("#btn-vuelto-pagado"))==null||K.addEventListener("click",()=>{b="PAGADO",this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n},p()}),(z=this.modal.querySelector("#btn-vuelto-retenido"))==null||z.addEventListener("click",()=>{b="RETENIDO",this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n},p()}),(Y=this.modal.querySelector("#select-metodo-vuelto"))==null||Y.addEventListener("change",L=>{t=L.target.value,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n},p()});const q=this.modal.querySelector("#input-tasa-vuelto");q&&(q.addEventListener("input",L=>{const M=X(L.target.value);n=M>0?M:a,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n}}),q.addEventListener("blur",()=>p())),(N=this.modal.querySelector("#btn-reset-tasa-vuelto"))==null||N.addEventListener("click",()=>{n=a,this.resolucionVueltoBorrador={estado:b,metodo:t,tasa:n},p()})}const T=this.modal.querySelector("#btn-confirmar-cobro");T&&(T.disabled=!B.puedeConfirmar)},k=B=>{const P=this.modal.querySelector(`div[data-aporte-info="${B.id}"]`);if(!P)return;const T=B.tasaCambio>0?B.tasaCambio:a,K=B.moneda==="USD"?B.monto*T:B.monto,z=a>0?K/a:0;B.moneda==="USD"?P.innerHTML=`
                        <span class="font-bold text-brand-purple">Aporte: Bs. ${Q(K)}</span>
                        <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${Q(z)} ${T!==a?`(Tasa: Bs. ${Q(T)} vs BCV: Bs. ${Q(a)})`:""}</span>
                    `:P.innerHTML=`
                        <span class="font-bold text-brand-black">Aporte directo: Bs. ${Q(B.monto)}</span>
                        <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${Q(z)}</span>
                    `};this.modal.querySelectorAll("input[data-pago-tasa]").forEach(B=>{B.addEventListener("input",P=>{const T=B.dataset.pagoTasa,K=X(P.target.value),z=c.find(Y=>Y.id===T);z&&(z.tasaCambio=K>0?K:a,this.pagosBorrador=c,k(z),$())}),B.addEventListener("keydown",P=>{var T;P.key==="Enter"&&s().puedeConfirmar&&((T=this.modal.querySelector("#btn-confirmar-cobro"))==null||T.click())})}),this.modal.querySelectorAll("button[data-reset-tasa]").forEach(B=>{B.addEventListener("click",()=>{const P=B.dataset.resetTasa,T=c.find(K=>K.id===P);T&&(T.tasaCambio=a,this.pagosBorrador=c,p())})}),this.modal.querySelectorAll("input[data-pago-monto]").forEach(B=>{B.addEventListener("input",P=>{const T=B.dataset.pagoMonto,K=X(P.target.value),z=c.find(Y=>Y.id===T);z&&(z.monto=K,this.pagosBorrador=c,k(z),$())}),B.addEventListener("keydown",P=>{var T;P.key==="Enter"&&s().puedeConfirmar&&((T=this.modal.querySelector("#btn-confirmar-cobro"))==null||T.click())})}),this.modal.querySelectorAll("input[data-pago-ref]").forEach(B=>{B.addEventListener("input",P=>{const T=B.dataset.pagoRef,K=P.target.value,z=c.find(Y=>Y.id===T);z&&(z.referencia=K,this.pagosBorrador=c)}),B.addEventListener("keydown",P=>{var T;P.key==="Enter"&&s().puedeConfirmar&&((T=this.modal.querySelector("#btn-confirmar-cobro"))==null||T.click())})}),this.modal.querySelectorAll("button[data-eliminar-pago]").forEach(B=>{B.addEventListener("click",()=>{const P=B.dataset.eliminarPago;c=c.filter(T=>T.id!==P),this.pagosBorrador=c,p()})}),(_=this.modal.querySelector("#btn-agregar-pago"))==null||_.addEventListener("click",()=>{let B=s();const P="p-"+Math.random().toString(36).slice(2,7),T=e.find(z=>!c.some(Y=>Y.metodo===z.nombre))||e[0]||{nombre:"BS.EFEC.",moneda:"BS"};if(B.faltanteBs<=.01&&c.length===1&&c[0]){const z=c[0],Y=z.tasaCambio>0?z.tasaCambio:a,N=z.moneda==="USD"?z.monto*Y:z.monto,q=Math.round(N/2*100)/100;z.monto=z.moneda==="USD"?Y>0?Number((q/Y).toFixed(2)):0:q,B=s()}const K=B.faltanteBs>0?B.faltanteBs:0;c.push({id:P,metodo:T.nombre,moneda:T.moneda,monto:T.moneda==="USD"?a>0?Number((K/a).toFixed(2)):0:K,tasaCambio:a,referencia:""}),this.pagosBorrador=c,p()}),(O=this.modal.querySelector("#btn-toggle-nuevo-metodo"))==null||O.addEventListener("click",()=>{d=!d,p()}),(I=this.modal.querySelector("#btn-guardar-nuevo-metodo"))==null||I.addEventListener("click",()=>{(async()=>{const B=this.modal.querySelector("#input-nuevo-metodo-nombre"),P=(B==null?void 0:B.value.trim())||"",T=this.modal.querySelector('input[name="radio-nuevo-metodo-moneda"][value="USD"]'),K=T!=null&&T.checked?"USD":"BS";if(P)try{e=await D.crearMetodoPago(P,K),d=!1,p()}catch{}})()}),this.modal.querySelectorAll("button[data-caja-eliminar-metodo]").forEach(B=>{B.addEventListener("click",()=>{(async()=>{const P=B.dataset.cajaEliminarMetodo||"";P&&await ce(`¿Seguro que deseas eliminar el método de pago "${P}"?`,"ELIMINAR MÉTODO")&&(e=await D.eliminarMetodoPago(P),c.forEach(T=>{if(T.metodo===P){const K=e[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"};T.metodo=K.nombre,T.moneda=K.moneda}}),this.pagosBorrador=c,p())})()})});let w=!1;const y=this.modal.querySelector("#btn-confirmar-cobro");y==null||y.addEventListener("click",()=>{w||(w=!0,y&&(y.disabled=!0,y.textContent="PROCESANDO COBRO..."),(async()=>{const B=this.modal.querySelector("#cobro-error");try{const P=c.filter(F=>F.monto>0).map(F=>{const te=F.moneda==="USD"&&F.tasaCambio>0?F.tasaCambio:a,Z=F.moneda==="USD"?F.monto*te:F.monto,oe=a>0?Z/a:0;return{metodo:F.metodo,moneda:F.moneda,montoUsd:(F.moneda==="USD"?F.monto:oe).toFixed(2),montoBs:Z.toFixed(2),tasaCambio:F.moneda==="USD"?te.toFixed(2):void 0,referencia:F.referencia.trim()||void 0}});if(P.length===0)throw new Error("Debe especificar al menos un pago válido.");const T=s(),K=P.reduce((F,te)=>F+Number(te.montoBs),0),z=e.find(F=>F.nombre===t),Y=(z==null?void 0:z.moneda)==="USD",N=Y?n>0?n:a:void 0,q=Y&&N?(T.vueltoBs/N).toFixed(2):T.vueltoUsd.toFixed(2),L={estado:T.vueltoBs>.009?b:"SIN_VUELTO",metodo:T.vueltoBs>.009&&b==="PAGADO"?t:void 0,montoBs:T.vueltoBs>.009?T.vueltoBs.toFixed(2):void 0,montoUsd:T.vueltoBs>.009?q:void 0,tasa:T.vueltoBs>.009&&b==="PAGADO"&&N?N.toFixed(2):void 0},M=await this.vm.cobrar(K.toFixed(2),P,L);this.pagosBorrador=null,this.resolucionVueltoBorrador=null,this.cerrarModal(),this.modalTicketExito(M,K)}catch(P){w=!1,y&&(y.disabled=!1,y.textContent="CONFIRMAR COBRO"),B&&(B.textContent=P instanceof Error?P.message.replace(/"/g,""):String(P),B.classList.remove("hidden"))}})())})};p()}modalTicketExito(e,o){const a=e.pagos&&e.pagos.length>0?e.pagos.map(i=>`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-1.5 text-left font-heading font-black text-xs text-brand-black">
                        ${i.metodo}
                        ${i.tasaCambio?`<span class="block text-[10px] text-brand-purple font-mono font-bold">Tasa: Bs. ${Q(Number(i.tasaCambio))}</span>`:""}
                        ${i.referencia?`<span class="block text-[10px] text-gray-500 font-mono font-normal">Ref: ${i.referencia}</span>`:""}
                    </td>
                    <td class="py-1.5 text-right font-black text-xs text-brand-black">$ ${Q(i.montoUsd)}</td>
                    <td class="py-1.5 text-right font-black text-xs text-brand-purple">Bs. ${Q(i.montoBs)}</td>
                </tr>
            `).join(""):'<tr><td colspan="3" class="py-2 text-center text-xs text-gray-400">Pago Único Estándar</td></tr>',r=X(e.vueltoBs);this.renderModal(`
            <div class="text-center mb-3">
                <h3 class="font-heading font-black text-3xl text-green-700">VENTA EXITOSA</h3>
                <p class="font-body text-xs text-brand-text">Ticket ${e.ventaId} · Tasa BCV: Bs. ${Q(Number(e.tasaDelDia))}</p>
            </div>
            <div class="border-t-2 border-b-2 border-brand-black py-3 mb-3 text-center bg-gray-50 rounded">
                <span class="text-[10px] font-bold text-gray-500 uppercase block">Total Liquidado</span>
                <p class="font-heading font-black text-3xl text-brand-purple">Bs. ${Q(o)}</p>
                <p class="font-body text-xs text-gray-600">$ ${Q(Number(e.totalUsd))} USD</p>
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
                    Bs. ${Q(r)}
                </span>
                <span class="block text-xs font-bold text-gray-600 mt-0.5">
                    ${e.estadoVuelto==="RETENIDO"?`Asentado en comprobante ($ ${Q(e.montoVueltoUsd||(Number(e.tasaDelDia)>0?r/Number(e.tasaDelDia):0))} USD equiv.)`:`Método: ${e.metodoVuelto||"Efectivo"} ${e.montoVueltoUsd&&Number(e.montoVueltoUsd)>0&&e.tasaVuelto?`($ ${Q(e.montoVueltoUsd)} USD @ Bs. ${Q(e.tasaVuelto)})`:""}`}
                </span>
            </div>`:""}

            <button data-cerrar class="w-full bg-brand-black text-white font-heading font-black text-lg py-3 rounded border-2 border-brand-black shadow-brutal-sm hover:bg-gray-800">
                LISTO
            </button>`,"max-w-md")}renderDinamico(){const e=this.contenedor.querySelector("#caja-grid");if(!e)return;const o=this.semaforoStock;e.innerHTML=this.vm.visibles.map(c=>{const b=(c.capacidades&fe)!==0,t=Number(c.stock),n=t<=0,d=c.sinStock?"text-purple-700":t<=o.rojoMax?"text-red-600":t<=o.amarilloMax?"text-amber-600":"text-emerald-700",s=c.unidad?c.unidad.toLowerCase()==="un"?"un.":c.unidad.toLowerCase():b?"kg":"un.",u=s==="kg"?"kg":s==="ml"?"ml":"un.";let p="";if(c.sinStock)p="LIBRE";else if(n)p="AGOTADO";else if(c.esCaja&&c.unidadesPorCaja&&c.unidadesPorCaja>1){const x=Math.floor(t/c.unidadesPorCaja),S=t%c.unidadesPorCaja;p=`${x} cajas y ${S} un. (${t} un.)`}else p=`${t} ${s}`;const g=c.precioPaqueteUsd&&c.nombrePaquete||c.esCaja&&c.unidadesPorCaja&&c.unidadesPorCaja>1;return`
                <div class="relative" data-producto-card="${c.sku}">
                    <button data-sku="${c.sku}" data-modo="unidad" ${n&&!c.sinStock?"disabled":""}
                        class="text-left border-2 border-brand-black rounded p-3 bg-white shadow-brutal hover:-translate-y-0.5 hover:shadow-brutal-hover transition-all active:translate-y-0.5 active:shadow-none disabled:opacity-30 w-full">
                        <div class="flex justify-between items-start mb-1 gap-1">
                            <span class="font-heading font-extrabold leading-tight text-sm text-brand-black truncate" title="${c.nombre}">${c.nombre}</span>
                            <div class="flex gap-1 shrink-0">
                                ${`<span class="text-[9px] font-black bg-amber-100 text-amber-900 border border-brand-black rounded px-1 lowercase">${u}</span>`}
                            </div>
                        </div>
                        <p class="font-heading font-black text-lg text-brand-purple">Bs. ${this.modelo.bs(c.precioUsd)}</p>
                        <div class="flex justify-between items-center mt-1">
                            <span class="text-xs font-bold text-gray-600">$${Number(c.precioUsd).toFixed(2)}</span>
                            <span class="text-[11px] font-black ${d}">
                                ${p}
                            </span>
                        </div>
                    </button>
                    ${g?`
                    <button data-sku="${c.sku}" data-modo="paquete" ${n&&!c.sinStock?"disabled":""}
                        class="text-left border-2 border-brand-purple rounded p-2 bg-purple-50 shadow-brutal hover:-translate-y-0.5 hover:shadow-brutal-hover transition-all active:translate-y-0.5 active:shadow-none disabled:opacity-30 w-full mt-1">
                        <div class="flex justify-between items-center">
                            <span class="font-heading font-bold text-xs text-purple-800">${c.nombrePaquete||"Caja"} (${c.precioPaqueteUsd?`$${Number(c.precioPaqueteUsd).toFixed(2)}`:`$${(Number(c.precioUsd)*(c.unidadesPorCaja||1)).toFixed(2)}`})</span>
                            <span class="text-[10px] font-black text-purple-600">${c.unidadesPorCaja||1} un.</span>
                        </div>
                    </button>`:""}
                </div>`}).join(""),e.querySelectorAll("button[data-sku]").forEach(c=>c.addEventListener("click",()=>{const b=c.dataset.sku??"",t=c.dataset.modo||"unidad";(async()=>{const n=this.vm.modoCuentaAbierta?await this.vm.agregarACuenta(b,t):await this.vm.agregar(b,t);n&&this.mostrarError(n)})()}));const a=this.contenedor.querySelector("#caja-lineas");a&&(a.innerHTML=this.vm.lineasCarrito.length===0?'<p class="text-center text-brand-text font-body py-10">Toca un producto para agregarlo</p>':this.vm.lineasCarrito.map(c=>`
                    <div class="border-2 border-brand-black rounded p-2 bg-white shadow-sm space-y-1">
                        <div class="flex items-center gap-2">
                            <div class="flex-1 min-w-0 pr-2">
                                <p class="font-heading font-bold text-sm truncate" title="${c.nombre}">
                                    ${c.nombre}
                                    ${c.modoVenta==="paquete"?'<span class="inline-block ml-1 text-[9px] font-black bg-purple-100 text-purple-800 border border-brand-purple rounded px-1">paquete</span>':""}
                                </p>
                                <p class="text-xs text-gray-600 font-bold">$${c.precioUsd.toFixed(2)} · Bs. ${this.modelo.bs(Number((c.precioUsd*c.cantidad).toFixed(2)))}</p>
                            </div>
                            ${c.pesable?`<input type="number" step="0.05" min="0.01" max="999.99" maxlength="6" value="${Number(c.cantidad.toFixed(3))}" data-qty="${c.sku}" class="w-20 border-2 border-brand-black rounded px-1 py-0.5 text-right font-bold text-sm" />`:`<button data-menos="${c.sku}" class="w-7 h-7 border-2 border-brand-black rounded font-black bg-amber-100 text-sm">-</button>
                                   <span class="font-black w-5 text-center text-sm">${c.cantidad}</span>
                                   <button data-mas="${c.sku}" class="w-7 h-7 border-2 border-brand-black rounded font-black bg-emerald-100 text-sm">+</button>`}
                            <button data-quitar="${c.sku}" class="w-7 h-7 border-2 border-brand-black rounded font-black bg-red-100 text-red-800 text-sm hover:bg-red-600 hover:text-white transition-colors">&times;</button>
                        </div>
                    </div>`).join(""));const r=this.contenedor.querySelector("#caja-total-usd"),i=this.contenedor.querySelector("#caja-total-bs");r&&(r.textContent="$ "+Q(this.vm.totalUsd)),i&&(i.textContent="Bs. "+Q(this.vm.totalBs)),D.obtenerJornadaActual().then(c=>{const b=this.contenedor.querySelector("#caja-operadores-activo-texto"),t=this.contenedor.querySelector("#btn-gestionar-operadores-caja"),n=this.contenedor.querySelector("#caja-cobrar");if(c===null){if(b&&(b.textContent="SIN TURNO ACTIVO",b.title="No hay jornada activa. Abre un turno para operar."),t){t.classList.remove("bg-purple-100","text-brand-purple","border-brand-purple","hover:bg-purple-200"),t.classList.add("bg-orange-100","text-red-800","border-red-600","hover:bg-orange-200");const d=t.querySelector("span.rounded-full");d&&(d.classList.remove("bg-emerald-500"),d.classList.add("bg-red-500"))}n&&(n.disabled=!0,n.title="Abre un turno antes de cobrar")}else{const d=c.operadoresActivos&&c.operadoresActivos.length>0?c.operadoresActivos.join(", "):c.operadorActual||"Operador en caja";if(b&&(b.textContent=d,b.title=`Operadores en caja: ${d}`),t){t.classList.add("bg-purple-100","text-brand-purple","border-brand-purple","hover:bg-purple-200"),t.classList.remove("bg-orange-100","text-red-800","border-red-600","hover:bg-orange-200");const s=t.querySelector("span.rounded-full");s&&(s.classList.add("bg-emerald-500"),s.classList.remove("bg-red-500"))}n&&(n.disabled=!1,n.title="")}}),this.contenedor.querySelectorAll("[data-mas]").forEach(c=>c.addEventListener("click",()=>{const b=c.dataset.mas??"",t=this.vm.lineasCarrito.find(n=>n.sku===b);if(t){const n=this.vm.cambiarCantidad(b,t.cantidad+1);n&&this.mostrarError(n)}})),this.contenedor.querySelectorAll("[data-menos]").forEach(c=>c.addEventListener("click",()=>{const b=c.dataset.menos??"",t=this.vm.lineasCarrito.find(n=>n.sku===b);t&&this.vm.cambiarCantidad(b,Math.max(1,t.cantidad-1))})),this.contenedor.querySelectorAll("[data-quitar]").forEach(c=>c.addEventListener("click",()=>this.vm.quitar(c.dataset.quitar??""))),this.contenedor.querySelectorAll("input[data-qty]").forEach(c=>c.addEventListener("change",()=>{const b=Number(c.value||"0"),t=Math.min(999.99,Math.max(.01,Number.isFinite(b)?b:.01));c.value=String(t);const n=this.vm.cambiarCantidad(c.dataset.qty??"",t);n&&this.mostrarError(n)}))}mostrarToast(e,o="info"){var i;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},r=document.createElement("div");r.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,r.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(i=r.querySelector("button"))==null||i.addEventListener("click",()=>r.remove()),document.body.appendChild(r),setTimeout(()=>r.remove(),8e3)}}const re=l=>{if(typeof l=="number")return Number.isFinite(l)?l:0;if(l==null)return 0;let e=String(l).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},ee=l=>{const e=re(l);return(Math.round((e+Number.EPSILON)*100)/100).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})},me=l=>{const e=re(l);return e>=1e9?(e/1e9).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})+" Mil Millones":e>=1e6?(e/1e6).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})+" Millones":ee(e)};class dt{constructor(){U(this,"datos",null)}setDatos(e){this.datos=e}get panel(){return this.datos}}class it{constructor(e,o,a,r){U(this,"contenedor");U(this,"vm");U(this,"modelo");U(this,"criterioGrafica","volumen");U(this,"respaldos",[]);U(this,"transacciones",[]);U(this,"productos",[]);U(this,"categorias",[]);U(this,"rangoDetalleFechas","");U(this,"jornadaActual",null);U(this,"POR_PAGINA_TRX",20);U(this,"paginaTrx",1);U(this,"margenBrutoPct",0);U(this,"margenNetoPct",0);this.contenedor=e,this.vm=a,this.modelo=r}calcularDineroPorCategoria(){const e=this.modelo.tasaActual||807.39;let o=0;const a={};return this.categorias.forEach(r=>{a[r.id]={categoriaId:r.id,nombre:r.nombre,cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}}),a["cat-general"]||(a["cat-general"]={categoriaId:"cat-general",nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}),this.productos.forEach(r=>{const i=r.categoriaId||"cat-general";a[i]||(a[i]={categoriaId:i,nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0});const c=Number(r.stock)||0,b=re(r.precioBrutoUsd),t=re(r.precioUsd);a[i].cantidadProductos+=1,a[i].unidadesStock+=c;const n=c*b;a[i].brutoUsd+=n,a[i].ventaUsd+=c*t,o+=n}),Object.values(a).map(r=>{const i=o>0?(r.brutoUsd/o*100).toFixed(1):"0.0",c=Math.max(0,r.ventaUsd-r.brutoUsd),b=r.ventaUsd>0?(c/r.ventaUsd*100).toFixed(1):"0.0";return{categoriaId:r.categoriaId,nombre:r.nombre,cantidadProductos:r.cantidadProductos,unidadesStock:r.unidadesStock,dineroBrutoUsd:r.brutoUsd.toFixed(2),dineroBrutoBs:(r.brutoUsd*e).toFixed(2),dineroVentaUsd:r.ventaUsd.toFixed(2),dineroVentaBs:(r.ventaUsd*e).toFixed(2),margenBrutoProyectadoUsd:c.toFixed(2),margenBrutoPct:b,porcentajeCapital:i}})}calcularMargenes(){if(this.productos.length===0)return;let e=0,o=0;this.productos.forEach(a=>{const r=re(a.precioUsd),i=re(a.precioBrutoUsd);r>0&&(e+=r,i>0&&(o+=i))}),e>0&&(this.margenBrutoPct=Math.round((e-o)/e*100),this.margenNetoPct=Math.max(0,this.margenBrutoPct-12))}obtenerTimestampTicket(e){if(e.fechaUnix&&e.fechaUnix>0)return e.fechaUnix;if(e.fechaHora){const o=e.fechaHora.match(/(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})/);if(o&&o[1]&&o[2]&&o[3]&&o[4]&&o[5]&&o[6]){const a=Date.UTC(parseInt(o[1],10),parseInt(o[2],10)-1,parseInt(o[3],10),parseInt(o[4],10),parseInt(o[5],10),parseInt(o[6],10));if(!isNaN(a))return Math.floor(a/1e3)}}return Math.floor(Date.now()/1e3)}renderFilasTransacciones(e){if(e.length===0)return'<tr><td colspan="7" class="py-6 text-center text-gray-400 font-bold">No se encontraron transacciones registradas.</td></tr>';const o=Math.ceil(e.length/this.POR_PAGINA_TRX);this.paginaTrx>o&&(this.paginaTrx=o),this.paginaTrx<1&&(this.paginaTrx=1);const a=(this.paginaTrx-1)*this.POR_PAGINA_TRX;return e.slice(a,a+this.POR_PAGINA_TRX).map(i=>{const c=i.fechaUnix?$e(i.fechaUnix):i.fechaHora||"Reciente",b=i.ventaId.startsWith("CTA-"),t=b?"Cuenta Abierta":"Caja Directa";return`
            <tr class="hover:bg-gray-50 border-b border-gray-100 last:border-none transition-colors">
                <td class="py-2.5 font-mono text-brand-black">${i.ventaId}</td>
                <td class="py-2.5 text-gray-600">${c}</td>
                <td class="py-2.5">
                    <span class="px-2 py-0.5 rounded border border-brand-black text-[10px] font-black ${b?"bg-amber-100 text-amber-900":"bg-blue-100 text-blue-900"}">
                        ${t}
                    </span>
                </td>
                <td class="py-2.5 text-gray-700">${i.operador||"Principal"}</td>
                <td class="py-2.5 text-right font-mono text-gray-600">Bs. ${ee(Number(i.tasaDelDia))}</td>
                <td class="py-2.5 text-right font-black">$ ${ee(i.totalUsd)}</td>
                <td class="py-2.5 text-right font-black text-brand-purple">Bs. ${ee(i.totalBs)}</td>
            </tr>`}).join("")}async render(){var E;const[e,o,a,r,i,c]=await Promise.all([D.panel(),D.respaldos(),D.ventas(),D.productos(),D.categorias(),D.obtenerJornadaActual()]);this.vm.setDatos(e),this.respaldos=o,this.transacciones=a,this.productos=r,this.categorias=i,this.jornadaActual=c,this.calcularMargenes();const b=new Date,t=new Date(b.getTime()-864e5);this.rangoDetalleFechas||(this.rangoDetalleFechas=`Del ${Ie(t)} al ${Ie(b)}`);const n=this.modelo.bs(e.valorInventarioUsd),d=this.modelo.tieneCapacidad(8)||this.modelo.tieneRubro(4),s=e.dineroPorCategoria&&e.dineroPorCategoria.length>0?e.dineroPorCategoria:this.calcularDineroPorCategoria(),u=s.reduce(($,k)=>$+k.cantidadProductos,0),p=s.reduce(($,k)=>$+k.unidadesStock,0),g=s.reduce(($,k)=>$+re(k.dineroBrutoUsd),0),x=s.reduce(($,k)=>$+re(k.dineroBrutoBs),0),S=s.reduce(($,k)=>$+re(k.dineroVentaUsd),0),h=Math.max(0,S-g),A=S>0?(h/S*100).toFixed(1):"0.0",f=s.map($=>{const k=re($.porcentajeCapital);return`
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="py-2.5 px-3 flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-purple inline-block border border-brand-black shrink-0"></span>
                    <span class="font-black text-brand-black text-xs">${$.nombre}</span>
                </td>
                <td class="py-2.5 px-3 text-center">
                    <span class="bg-gray-100 border border-brand-black px-2 py-0.5 rounded text-[11px] font-black">${$.cantidadProductos} art.</span>
                </td>
                <td class="py-2.5 px-3 text-right font-mono">${$.unidadesStock} un.</td>
                <td class="py-2.5 px-3 text-right font-black font-mono text-brand-black">$ ${ee($.dineroBrutoUsd)}</td>
                <td class="py-2.5 px-3 text-right font-black font-mono text-brand-purple">Bs. ${ee($.dineroBrutoBs)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-gray-700">$ ${ee($.dineroVentaUsd)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-700">$ ${ee($.margenBrutoProyectadoUsd)} (${$.margenBrutoPct}%)</td>
                <td class="py-2.5 px-3 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                        <div class="w-16 bg-gray-200 border border-brand-black rounded-full h-2 overflow-hidden shrink-0">
                            <div class="bg-brand-purple h-full" style="width: ${Math.min(100,k)}%"></div>
                        </div>
                        <span class="font-mono text-[11px] w-10 text-right">${$.porcentajeCapital}%</span>
                    </div>
                </td>
            </tr>`}).join("");this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Panel de Control Dueño(a)</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Auditoría contable, rentabilidad, márgenes y configuración de seguridad</p>
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
            ${this.kpi("Ventas Totales",`<span id="kpi-ventas-usd" class="font-black text-brand-black">$ ${ee(e.ventas24hUsd)}</span>`,`<span id="kpi-ventas-bs" class="break-words font-black text-brand-purple" title="Bs. ${ee(e.ventas24hBs)}">Bs. ${me(e.ventas24hBs)}</span>`,"bg-amber-50","Facturación bruta cobrada en caja (USD y Bs. al cambio oficial)")}
            ${this.kpi("Ganancia Bruta",`<span id="kpi-gan-bruta">$ ${ee(e.gananciaBrutaUsd||Number(e.ventas24hUsd)*this.margenBrutoPct/100)}</span>`,`Margen bruto comercial: ${this.margenBrutoPct.toFixed(1)}%`,"bg-emerald-50","Ventas menos costo de adquisición de mercancía")}
            ${this.kpi("Ganancia Neta",`<span id="kpi-gan-neta">$ ${ee(e.gananciaNetaUsd||Number(e.ventas24hUsd)*this.margenNetoPct/100)}</span>`,`<span id="kpi-gan-neta-bs" class="break-words" title="Bs. ${this.modelo.bs(Number(e.ventas24hUsd)*this.margenNetoPct/100)}">Bs. ${me(this.modelo.bs(Number(e.ventas24hUsd)*this.margenNetoPct/100))}</span>`,"bg-blue-50","Utilidad líquida real después de descontar impuestos")}
            ${this.kpi("Inventario Total",`$ ${ee(e.valorInventarioUsd)}`,`<span class="break-words" title="Bs. ${n}">Bs. ${me(n)}</span>`,"bg-purple-50","Valoración monetaria total del stock físico actual disponible")}
        </div>

        <!-- Módulo de Jornada Laboral y Operadores en Turno -->
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 mb-4 sm:mb-6">
            <div class="flex flex-wrap justify-between items-center border-b-2 border-brand-black pb-3 mb-4 gap-2">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full ${((E=this.jornadaActual)==null?void 0:E.estado)==="abierta"?"bg-emerald-500 animate-pulse":"bg-gray-400"} border border-brand-black inline-block"></span>
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
                            <span class="font-black font-heading text-base text-emerald-700">${Number(e.ventas24hUsd)>0?(re(e.gananciaBrutaUsd)/Number(e.ventas24hUsd)*100).toFixed(1):"0.0"}% bruto</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <span class="font-bold text-xs text-gray-600 uppercase">Demanda Principal</span>
                            <span class="font-black font-heading text-base text-blue-700">${e.topProductos.length>0&&Number(e.ventas24hUsd)>0?(re(e.topProductos[0].totalUsd)/Number(e.ventas24hUsd)*100).toFixed(1):"0.0"}% ingresos</span>
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
                                    <p class="text-[11px] font-mono font-bold text-gray-700">$ ${ee(e.dineroEnLaCalleUsd)} <span class="text-gray-400">·</span> Bs. ${ee(e.dineroEnLaCalleBs)}</p>
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
                        ${s.length} categorías auditadas
                    </span>
                    <span class="text-xs font-black text-emerald-900 bg-emerald-100 border border-brand-black px-2.5 py-1 rounded">
                        Capital en Bruto: $ ${ee(g)}
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
                        ${f}
                    </tbody>
                    <tfoot class="border-t-2 border-brand-black bg-gray-100 font-black font-heading text-xs">
                        <tr>
                            <td class="py-2.5 px-3 uppercase text-brand-black">TOTAL CONSOLIDADO</td>
                            <td class="py-2.5 px-3 text-center">${u} prods.</td>
                            <td class="py-2.5 px-3 text-right">${p} un.</td>
                            <td class="py-2.5 px-3 text-right text-brand-black">$ ${ee(g)}</td>
                            <td class="py-2.5 px-3 text-right text-brand-purple">Bs. ${ee(x)}</td>
                            <td class="py-2.5 px-3 text-right text-brand-black">$ ${ee(S)}</td>
                            <td class="py-2.5 px-3 text-right text-emerald-700">$ ${ee(h)} (${A}%)</td>
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
            ${(()=>{const $=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);return $<=1?"":`
                <div class="flex items-center justify-between border-t-2 border-brand-black pt-3 mt-3">
                    <span class="text-xs font-bold text-gray-600">Página ${this.paginaTrx} de ${$} · ${this.transacciones.length} transacciones</span>
                    <div class="flex gap-2">
                        <button id="trx-pag-ant" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaTrx===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANTERIOR</button>
                        <button id="trx-pag-sig" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaTrx===$?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIGUIENTE</button>
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
                        ${this.respaldos.map($=>`
                            <div class="border border-brand-black rounded p-2.5 bg-gray-50 flex justify-between items-center text-xs">
                                <div class="min-w-0 pr-2">
                                    <p class="font-mono font-black text-brand-black truncate text-[11px]">Respaldos/${$.archivoNombre||`${$.id}.backup`}</p>
                                    <p class="text-[10px] text-gray-500 font-mono truncate max-w-[260px]" title="${$.checksumSha256}">SHA: ${$.checksumSha256.slice(0,16)}... · ${$.fecha}</p>
                                </div>
                                <div class="text-right shrink-0">
                                    <span class="font-bold text-gray-600 text-[11px]">${$.registros} reg. (${$.tamanoKb} KB)</span>
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
        </div>`,this.conectarEventos(e),this.pintarGrafico(e)}conectarEventos(e){var g,x,S,h,A,f,E,$;const o=document.getElementById("btn-crit-vol"),a=document.getElementById("btn-crit-ing"),r=document.getElementById("filtro-fecha-desde"),i=document.getElementById("filtro-fecha-hasta"),c=document.getElementById("btn-aplicar-fechas"),b=document.getElementById("btn-limpiar-fechas"),t=document.getElementById("label-estado-fechas"),n=document.getElementById("tabla-transacciones-body"),d=document.getElementById("conteo-transacciones-badge"),s=this.contenedor.querySelectorAll("[data-rango]");s.forEach(k=>{k.addEventListener("click",()=>{r&&(r.value=""),i&&(i.value=""),t&&t.classList.add("hidden"),n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)),d&&(d.textContent=`${this.transacciones.length} transacciones registradas`),s.forEach(y=>{y.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"}),k.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white shrink-0";const w=k.dataset.rango||"24h";this.aplicarRango(w,e)})}),c==null||c.addEventListener("click",()=>{this.aplicarFiltroFechas(e)}),b==null||b.addEventListener("click",()=>{var w,y;r&&(r.value=""),i&&(i.value=""),t&&t.classList.add("hidden"),n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)),d&&(d.textContent=`${this.transacciones.length} transacciones registradas`),this.paginaTrx=1,(w=document.getElementById("trx-pag-ant"))==null||w.addEventListener("click",()=>{this.paginaTrx>1&&(this.paginaTrx--,n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(y=document.getElementById("trx-pag-sig"))==null||y.addEventListener("click",()=>{const v=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);this.paginaTrx<v&&(this.paginaTrx++,n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),s.forEach(v=>{v.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"});const k=this.contenedor.querySelector('[data-rango="24h"]');k&&(k.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white shrink-0"),this.aplicarRango("24h",e)}),o==null||o.addEventListener("click",()=>{this.criterioGrafica="volumen",o.className="px-2.5 py-1 text-xs font-heading font-black rounded bg-brand-black text-white",a.className="px-2.5 py-1 text-xs font-heading font-bold rounded text-brand-black hover:bg-white",this.pintarGrafico(this.vm.panel||e)}),a==null||a.addEventListener("click",()=>{this.criterioGrafica="ingreso",a.className="px-2.5 py-1 text-xs font-heading font-black rounded bg-brand-black text-white",o.className="px-2.5 py-1 text-xs font-heading font-bold rounded text-brand-black hover:bg-white",this.pintarGrafico(this.vm.panel||e)}),(g=document.getElementById("trx-pag-ant"))==null||g.addEventListener("click",()=>{this.paginaTrx>1&&(this.paginaTrx--,n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(x=document.getElementById("trx-pag-sig"))==null||x.addEventListener("click",()=>{const k=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);this.paginaTrx<k&&(this.paginaTrx++,n&&(n.innerHTML=this.renderFilasTransacciones(this.transacciones)))});const u=document.getElementById("btn-crear-backup");u==null||u.addEventListener("click",async()=>{if(u.disabled)return;u.disabled=!0;const k=u.textContent;u.textContent="CREANDO...";try{await D.crearRespaldo(),this.respaldos=await D.respaldos();const w=document.getElementById("lista-respaldos");w&&(w.innerHTML=this.respaldos.map(y=>`
                        <div class="border border-brand-black rounded p-2.5 bg-gray-50 flex justify-between items-center text-xs">
                            <div class="min-w-0 pr-2">
                                <p class="font-mono font-black text-brand-black truncate text-[11px]">Respaldos/${y.archivoNombre||`${y.id}.backup`}</p>
                                <p class="text-[10px] text-gray-500 font-mono truncate max-w-[260px]" title="${y.checksumSha256}">SHA: ${y.checksumSha256.slice(0,16)}... · ${y.fecha}</p>
                            </div>
                            <div class="text-right shrink-0">
                                <span class="font-bold text-gray-600 text-[11px]">${y.registros} reg. (${y.tamanoKb} KB)</span>
                                <p class="text-[10px] text-green-700 font-black uppercase">Verificado OK</p>
                            </div>
                        </div>
                    `).join("")),this.mostrarToast("Copia de respaldo generada exitosamente.","success")}catch(w){this.mostrarToast("Error generando respaldo: "+(w instanceof Error?w.message:String(w)),"error")}finally{u.disabled=!1,u.textContent=k||"+ COPIA"}});const p=async()=>{var K,z,Y;const k=await D.obtenerJornadaActual(),w=await D.listarOperadores(),y=await D.obtenerSemaforoStock(),v=document.getElementById("jornada-estado-texto"),C=document.getElementById("jornada-fechas-texto"),j=document.getElementById("jornada-operador-activo"),G=document.getElementById("jornada-balance-texto"),V=document.getElementById("jornada-tickets-texto"),H=document.getElementById("box-acciones-jornada"),_=document.getElementById("lista-operadores-chips"),O=(k==null?void 0:k.estado)==="abierta";v&&(v.textContent=O?"Jornada en Curso":"Jornada Cerrada"),C&&(C.textContent=O?`Inicio: ${(k==null?void 0:k.inicioStr)||"Reciente"}`:`Último cierre: ${(k==null?void 0:k.finStr)||"Sin jornadas"}`);const I=k!=null&&k.operadoresActivos&&k.operadoresActivos.length>0?k.operadoresActivos.join(", "):((K=k==null?void 0:k.operadorActual)==null?void 0:K.trim())||"Sin operador asignado";j&&(j.textContent=I),G&&(G.textContent=`$ ${ee((k==null?void 0:k.ventasTotalUsd)||0)} USD (Bs. ${ee((k==null?void 0:k.ventasTotalBs)||0)})`),V&&(V.textContent=`${(k==null?void 0:k.ticketsEmitidos)||0} tickets emitidos · ${(k==null?void 0:k.entradasStockReg)||0} reposiciones`),H&&(O?H.innerHTML=`
                        <button id="btn-cerrar-jornada" class="bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs px-3 py-1.5 rounded border-2 border-brand-black shadow-brutal-sm">
                            CERRAR JORNADA Y EMITIR INFORME
                        </button>
                    `:H.innerHTML=`
                        <button id="btn-abrir-jornada" class="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs px-3 py-1.5 rounded border-2 border-brand-black shadow-brutal-sm">
                            ABRIR NUEVA JORNADA
                        </button>
                    `,(z=H.querySelector("#btn-abrir-jornada"))==null||z.addEventListener("click",async()=>{var N;try{const q=(await D.listarOperadores()).filter(M=>M.activo);if(q.length===0){this.mostrarToast("No hay operadores activos. Registre uno primero.","error");return}const L=((N=q[0])==null?void 0:N.nombre)||"Cajero Principal";await D.abrirJornada(L,q.map(M=>M.nombre)),this.mostrarToast("Jornada abierta exitosamente.","success"),p()}catch(q){this.mostrarToast("Error al abrir jornada: "+(q instanceof Error?q.message:String(q)),"error")}}),(Y=H.querySelector("#btn-cerrar-jornada"))==null||Y.addEventListener("click",async()=>{try{if(await ce("¿Confirmas el cierre de la jornada operativa actual? Se generará el balance consolidado del turno.","CIERRE DE JORNADA")){const q=await D.cerrarJornada();this.mostrarToast(`Jornada cerrada. ID: ${q.id} — $${q.ventasTotalUsd} USD (Bs. ${q.ventasTotalBs})`,"success"),p()}}catch(N){this.mostrarToast("Error al cerrar jornada: "+(N instanceof Error?N.message:String(N)),"error")}})),_&&(_.innerHTML=w.map(N=>{var L,M;return`
                    <div class="inline-flex items-center gap-1.5 border-2 border-brand-black rounded px-2 py-1 text-xs font-bold ${((L=k==null?void 0:k.operadoresActivos)==null?void 0:L.includes(N.nombre))||((M=k==null?void 0:k.operadorActual)==null?void 0:M.includes(N.nombre))?"bg-purple-100 text-brand-purple border-brand-purple":"bg-gray-100 text-brand-black"}">
                        <span>${N.nombre}</span>
                        <span class="text-[9px] uppercase px-1 rounded ${N.activo?"bg-green-200 text-green-900":"bg-gray-300 text-gray-700"}">${N.activo?"Activo":"Inactivo"}</span>
                        <button data-op-edit="${N.id}" data-op-nom="${N.nombre}" title="Editar nombre" class="hover:text-blue-600 ml-1 text-[11px] font-mono font-bold bg-white border border-gray-300 rounded px-1">✎</button>
                        <button data-op-del="${N.id}" data-op-nom="${N.nombre}" title="Eliminar operador" class="hover:text-red-600 text-[11px] font-mono font-bold bg-white border border-gray-300 rounded px-1">✕</button>
                    </div>
                `}).join(""),_.querySelectorAll("button[data-op-edit]").forEach(N=>{N.addEventListener("click",async()=>{const q=N.dataset.opEdit||"",L=N.dataset.opNom||"",M=await pe("Editar nombre del operador:",L,"EDITAR OPERADOR");M&&M.trim()&&M.trim()!==L&&(await D.editarOperador(q,M.trim()),p())})}),_.querySelectorAll("button[data-op-del]").forEach(N=>{N.addEventListener("click",async()=>{const q=N.dataset.opDel||"",L=N.dataset.opNom||"";await ce(`¿Eliminar al operador "${L}"?`,"ELIMINAR OPERADOR")&&(await D.eliminarOperador(q),p())})}));const B=document.getElementById("lista-metodos-pago-panel");if(B){const N=await D.listarMetodosPago();B.innerHTML=N.map(q=>`
                    <div class="inline-flex items-center gap-2 border-2 border-brand-black rounded px-3 py-1.5 text-xs font-bold ${q.moneda==="BS"?"bg-amber-50":"bg-blue-50"}">
                        <span>${q.nombre}</span>
                        <span class="text-[9px] uppercase px-1.5 py-0.5 rounded font-black ${q.moneda==="BS"?"bg-amber-200 text-amber-900":"bg-blue-200 text-blue-900"}">${q.moneda==="BS"?"Bolívares":"Dólares"}</span>
                        <button data-metodo-del="${q.nombre}" title="Eliminar método de pago" class="text-gray-400 hover:text-red-600 font-black text-xs ml-1 bg-white border border-gray-300 rounded px-1.5 py-0.5">✕</button>
                    </div>
                `).join(""),B.querySelectorAll("button[data-metodo-del]").forEach(q=>{q.addEventListener("click",async()=>{const L=q.dataset.metodoDel||"";await ce(`¿Confirmas eliminar el método de pago "${L}"?`,"ELIMINAR MÉTODO")&&(await D.eliminarMetodoPago(L),p())})})}const P=document.getElementById("in-semaforo-rojo"),T=document.getElementById("in-semaforo-amarillo");P&&!P.dataset.modificado&&(P.value=String(y.rojoMax)),T&&!T.dataset.modificado&&(T.value=String(y.amarilloMax))};p(),(S=document.getElementById("btn-relevar-operador"))==null||S.addEventListener("click",async()=>{var G,V,H;const k=(await D.listarOperadores()).filter(_=>_.activo);if(k.length===0){this.mostrarToast("No hay operadores activos disponibles. Registre uno a continuación.","error");return}const w=await D.obtenerJornadaActual(),y=(w==null?void 0:w.operadoresActivos)||[(w==null?void 0:w.operadorActual)||""],v=document.getElementById("modal-root")||document.body,C=document.createElement("div");C.id="modal-asignar-operadores",C.innerHTML=`
                <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                    <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                            <h3 class="font-heading font-black text-xl">ASIGNAR OPERADORES AL TURNO</h3>
                            <button id="modal-asig-close" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
                        </div>
                        <p class="text-xs text-gray-600 font-bold mb-3">Selecciona los operadores que atenderán en este turno:</p>
                        <div class="space-y-2 max-h-56 overflow-y-auto pr-1 mb-4">
                            ${k.map(_=>{const O=y.some(I=>I.toLowerCase()===_.nombre.toLowerCase());return`
                                <label class="flex items-center gap-2.5 p-2.5 rounded border-2 border-brand-black cursor-pointer ${O?"bg-purple-50 border-brand-purple":"bg-gray-50"}">
                                    <input type="checkbox" data-asig-chk="${_.nombre}" ${O?"checked":""} class="w-4 h-4 rounded text-brand-purple" />
                                    <div>
                                        <span class="font-heading font-black text-sm text-brand-black">${_.nombre}</span>
                                        <span class="text-[10px] text-gray-500 font-bold ml-2">${_.activo?"Activo":"Inactivo"}</span>
                                    </div>
                                </label>`}).join("")}
                        </div>
                        <div class="grid grid-cols-2 gap-3 border-t-2 border-brand-black pt-3">
                            <button id="modal-asig-cancelar" class="bg-white border-2 border-brand-black font-heading font-black py-2.5 rounded text-xs">CANCELAR</button>
                            <button id="modal-asig-guardar" class="bg-brand-purple text-white font-heading font-black py-2.5 rounded border-2 border-brand-black shadow-brutal-sm text-xs">ASIGNAR A TURNO</button>
                        </div>
                    </div>
                </div>`,v.appendChild(C);const j=()=>C.remove();(G=C.querySelector("#modal-asig-close"))==null||G.addEventListener("click",j),(V=C.querySelector("#modal-asig-cancelar"))==null||V.addEventListener("click",j),(H=C.querySelector("#modal-asig-guardar"))==null||H.addEventListener("click",async()=>{const _=C.querySelectorAll("input[data-asig-chk]:checked"),O=[];if(_.forEach(I=>{I.dataset.asigChk&&O.push(I.dataset.asigChk)}),O.length===0){this.mostrarToast("Selecciona al menos un operador para el turno.","error");return}await D.asignarOperadoresTurno(O),j(),p()})}),(h=document.getElementById("form-crear-metodo-panel"))==null||h.addEventListener("submit",async k=>{k.preventDefault();const w=document.getElementById("in-nuevo-metodo-nombre"),y=document.getElementById("select-nuevo-metodo-moneda"),v=(w==null?void 0:w.value.trim())||"",C=(y==null?void 0:y.value)==="USD"?"USD":"BS";v&&(await D.crearMetodoPago(v,C),w&&(w.value=""),p())}),(A=document.getElementById("form-crear-operador"))==null||A.addEventListener("submit",async k=>{k.preventDefault();const w=document.getElementById("in-nuevo-operador"),y=(w==null?void 0:w.value.trim())||"";y&&(await D.crearOperador(y),w&&(w.value=""),p())}),(f=document.getElementById("form-semaforo-stock"))==null||f.addEventListener("submit",async k=>{k.preventDefault();const w=document.getElementById("in-semaforo-rojo"),y=document.getElementById("in-semaforo-amarillo"),v=document.getElementById("msg-semaforo-stock"),C=parseInt((w==null?void 0:w.value)||"5",10),j=parseInt((y==null?void 0:y.value)||"15",10);if(C>=j){this.mostrarToast("El umbral rojo debe ser estrictamente menor que el umbral amarillo.","error");return}await D.guardarSemaforoStock(C,j),v&&(v.textContent="Umbrales del semáforo guardados y aplicados a todo el sistema.",v.classList.remove("hidden"),setTimeout(()=>v.classList.add("hidden"),2500))}),(E=document.getElementById("btn-reset-semaforo"))==null||E.addEventListener("click",async()=>{await D.guardarSemaforoStock(5,15),p()}),($=document.getElementById("form-cambiar-clave"))==null||$.addEventListener("submit",async k=>{k.preventDefault();const w=document.getElementById("pin-actual"),y=document.getElementById("pin-nuevo"),v=document.getElementById("msg-cambio-clave");if(v)try{await D.cambiarPinDueno((w==null?void 0:w.value.trim())||"",(y==null?void 0:y.value.trim())||""),await this.modelo.cargarConfig(),v.textContent=y!=null&&y.value.trim()?"Clave actualizada exitosamente. El panel requerirá esta nueva clave para ingresar.":"Clave eliminada. El panel ha quedado en modo abierto sin clave.",v.style.color="#00823B",v.classList.remove("hidden"),setTimeout(()=>void this.render(),1200)}catch(C){v.textContent=C instanceof Error?C.message:String(C),v.style.color="#C60C15",v.classList.remove("hidden")}})}aplicarFiltroFechas(e){const o=document.getElementById("filtro-fecha-desde"),a=document.getElementById("filtro-fecha-hasta"),r=document.getElementById("label-estado-fechas"),i=document.getElementById("tabla-transacciones-body"),c=document.getElementById("conteo-transacciones-badge"),b=(o==null?void 0:o.value.trim())||"",t=(a==null?void 0:a.value.trim())||"";if(!b&&!t){r&&(r.textContent="Selecciona una fecha Desde o Hasta para iniciar el diagnóstico.",r.classList.remove("hidden"));return}let n=0,d=Number.MAX_SAFE_INTEGER;if(b){const[P,T,K]=b.split("-").map(Number);n=Math.floor(new Date(P,T-1,K,0,0,0,0).getTime()/1e3)}if(t){const[P,T,K]=t.split("-").map(Number);d=Math.floor(new Date(P,T-1,K,23,59,59,999).getTime()/1e3)}if(n>d){r&&(r.textContent='Rango inválido: la fecha "Desde" es posterior a la fecha "Hasta".',r.classList.remove("hidden"));return}const s=this.transacciones.filter(P=>{const T=this.obtenerTimestampTicket(P);return T>=n&&T<=d}),u=s.reduce((P,T)=>P+re(T.totalUsd),0),p=s.reduce((P,T)=>P+re(T.totalBs),0),g=s.length;let x=0;s.forEach(P=>{(P.lineas||[]).forEach(T=>{const K=this.productos.find(z=>z.sku===T.sku);K&&(x+=re(K.precioBrutoUsd)*re(T.cantidad))})});const S=Math.max(0,u-x),h=S*.95,A=h*(this.modelo.tasaActual||807.39),f=g>0?(u/g).toFixed(2):"0.00",E=document.getElementById("kpi-ventas-usd"),$=document.getElementById("kpi-ventas-bs"),k=document.getElementById("kpi-tickets"),w=document.getElementById("kpi-gan-bruta"),y=document.getElementById("kpi-gan-neta"),v=document.getElementById("kpi-gan-neta-bs"),C=document.getElementById("kpi-ticket-prom");E&&(E.textContent="$ "+ee(u)),$&&($.textContent="Bs. "+me(p),$.title="Bs. "+ee(p)),k&&(k.textContent=String(g)),w&&(w.textContent="$ "+ee(S)),y&&(y.textContent="$ "+ee(h)),v&&(v.textContent="Bs. "+me(A),v.title="Bs. "+ee(A)),C&&(C.textContent="$ "+f),i&&(i.innerHTML=this.renderFilasTransacciones(s)),c&&(c.textContent=`${s.length} transacciones en rango`),this.contenedor.querySelectorAll("[data-rango]").forEach(P=>{P.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"});const G={};s.forEach(P=>{(P.lineas||[]).forEach(T=>{G[T.nombre]||(G[T.nombre]={nombre:T.nombre,cantidad:0,totalUsd:0}),G[T.nombre].cantidad+=Number(T.cantidad)||0,G[T.nombre].totalUsd+=re(T.subtotalUsd)||Number(T.cantidad)*re(T.precioUsd)})});const V=Object.values(G).reduce((P,T)=>P+T.totalUsd,0)||1,H=Object.values(G).sort((P,T)=>T.totalUsd-P.totalUsd).map(P=>({nombre:P.nombre,cantidad:String(P.cantidad),totalUsd:P.totalUsd.toFixed(2),porcentaje:(P.totalUsd/V*100).toFixed(1)})),_={...e,ventas24hUsd:u.toFixed(2),ventas24hBs:p.toFixed(2),gananciaBrutaUsd:S.toFixed(2),gananciaNetaUsd:h.toFixed(2),tickets24h:g,topProductos:H.length>0?H:s.length===0?[]:e.topProductos};this.vm.setDatos(_),this.pintarGrafico(_);const O=P=>P.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),I=b?new Date(n*1e3):new Date(2020,0,1),B=t?new Date(d*1e3):new Date;if(this.rangoDetalleFechas=`Del ${O(I)} al ${O(B)}`,r){const P=b||"Inicio",T=t||"Actualidad";r.textContent=`Diagnóstico activo (${P} al ${T}): ${s.length} transacciones registradas`,r.classList.remove("hidden")}}aplicarRango(e,o){const a=new Date,r=w=>w.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});let i=864e5;e==="7d"?i=7*864e5:e==="30d"?i=30*864e5:e==="1a"?i=365*864e5:e==="todo"&&(i=5*365*864e5);const c=new Date(a.getTime()-i);this.rangoDetalleFechas=`Del ${r(c)} al ${r(a)}`;const b=Math.floor(c.getTime()/1e3),t=this.transacciones.filter(w=>this.obtenerTimestampTicket(w)>=b),n=this.modelo.tasaActual||807.39;let d=0,s=0;t.forEach(w=>{d+=re(w.totalUsd),s+=re(w.totalBs)});const u=t.length,p=document.getElementById("kpi-ventas-usd"),g=document.getElementById("kpi-ventas-bs"),x=document.getElementById("kpi-tickets"),S=document.getElementById("kpi-gan-bruta"),h=document.getElementById("kpi-gan-neta"),A=document.getElementById("kpi-gan-neta-bs"),f=document.getElementById("kpi-ticket-prom");if(p&&(p.textContent="$ "+ee(d)),g&&(g.textContent="Bs. "+me(s),g.title="Bs. "+ee(s)),x&&(x.textContent=String(u)),S&&(S.textContent="$ "+ee(d*this.margenBrutoPct/100)),h&&(h.textContent="$ "+ee(d*this.margenNetoPct/100)),A){const w=d*this.margenNetoPct/100*n;A.textContent="Bs. "+me(w),A.title="Bs. "+ee(w)}f&&(f.textContent="$ "+(u>0?(d/u).toFixed(2):"0.00"));const E=new Map;t.forEach(w=>{var y;(y=w.lineas)==null||y.forEach(v=>{const C=E.get(v.sku);C?(C.cantidad+=re(v.cantidad),C.totalUsd+=re(v.subtotalUsd)):E.set(v.sku,{nombre:v.nombre,cantidad:re(v.cantidad),totalUsd:re(v.subtotalUsd)})})});const $=Array.from(E.values()).sort((w,y)=>y.totalUsd-w.totalUsd).slice(0,10).map(w=>({nombre:w.nombre,cantidad:String(Math.round(w.cantidad)),totalUsd:w.totalUsd>0?String(w.totalUsd.toFixed(2)):void 0,porcentaje:d>0?(w.totalUsd/d*100).toFixed(1):"0.0"})),k={...o,topProductos:$};this.vm.setDatos(k),this.pintarGrafico(k)}kpi(e,o,a,r,i=""){return`
        <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-4 ${r} flex flex-col justify-between min-w-0 overflow-hidden" title="${i}">
            <p class="font-heading font-bold text-xs uppercase tracking-wide text-brand-text truncate">${e}</p>
            <div class="font-heading font-black text-xl lg:text-2xl mt-1 min-w-0">${o}</div>
            <div class="text-xs font-body text-brand-text truncate mt-1">${a}</div>
            ${i?`<div class="text-[10px] text-gray-500 font-bold truncate mt-0.5 border-t border-gray-200/60 pt-1">${i}</div>`:""}
        </div>`}async pintarGrafico(e){const o=this.contenedor.querySelector("#panel-chart-container");if(!o)return;if(e.topProductos.length===0){o.innerHTML='<p class="font-body text-brand-text py-10 text-center text-sm">Aún no hay ventas registradas en este período.</p>';return}const a=["#2563EB","#D97706","#10B981","#8B5CF6","#EC4899","#06B6D4","#F97316","#84CC16","#6366F1","#14B8A6","#F43F5E","#A855F7","#EAB308","#64748B"],r=this.criterioGrafica==="volumen",i=e.topProductos.map(x=>Number(r?x.cantidad:x.totalUsd||Number(x.cantidad)*8.5)),c=i.reduce((x,S)=>x+S,0)||1,b=e.topProductos.map((x,S)=>({nombre:x.nombre,valor:i[S],porcentaje:(i[S]/c*100).toFixed(1)}));let t=0;const n=95,d=95,s=85;let u="";b.length===1?u=`<circle cx="${n}" cy="${d}" r="${s}" fill="${a[0]}" stroke="#1E232A" stroke-width="2" />`:b.forEach((x,S)=>{const A=x.valor/c*2*Math.PI,f=t,E=t+A,$=n+s*Math.cos(f),k=d+s*Math.sin(f),w=n+s*Math.cos(E),y=d+s*Math.sin(E),v=A>Math.PI?1:0,C=a[S%a.length];u+=`
                    <path d="M ${n} ${d} L ${$} ${k} A ${s} ${s} 0 ${v} 1 ${w} ${y} Z"
                        fill="${C}" stroke="#1E232A" stroke-width="1.5"
                        class="hover:opacity-85 transition-opacity cursor-pointer">
                        <title>${x.nombre}: ${x.porcentaje}%</title>
                    </path>
                `,t+=A});const p=b.map((x,S)=>{const h=a[S%a.length],A=r?`${x.valor} un.`:`$ ${ee(x.valor)}`;return`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-2 pr-3 flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full inline-block border border-brand-black shrink-0" style="background-color: ${h}"></span>
                        <span class="font-bold text-xs truncate max-w-[180px]" title="${x.nombre}">${x.nombre}</span>
                    </td>
                    <td class="py-2 text-right font-black text-xs pr-2">${A}</td>
                    <td class="py-2 text-right font-mono text-xs font-bold text-gray-500">${x.porcentaje}%</td>
                </tr>
            `}).join(""),g=r?`${Math.round(c)} un.`:`$ ${ee(c)}`;o.innerHTML=`
        <div class="flex flex-col md:flex-row items-center justify-around gap-4 sm:gap-6 w-full h-full py-2 min-w-0">
            <div class="shrink-0 flex flex-col items-center justify-center my-2">
                <svg width="190" height="190" viewBox="0 0 190 190" class="drop-shadow-sm">
                    ${u}
                </svg>
                <span class="text-[11px] font-black uppercase text-brand-black bg-gray-100 border border-brand-black px-2.5 py-0.5 rounded mt-2">
                    Total: ${g}
                </span>
            </div>
            <div class="w-full min-w-0 max-h-56 overflow-y-auto pr-1">
                <table class="w-full text-left">
                    <thead class="sticky top-0 bg-white">
                        <tr class="text-[10px] uppercase font-heading font-bold text-gray-400 border-b border-brand-black">
                            <th class="pb-1">Producto (${b.length})</th>
                            <th class="pb-1 text-right">${r?"Volumen":"Ingresos"}</th>
                            <th class="pb-1 text-right">Part.</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${p}
                    </tbody>
                </table>
            </div>
        </div>`}mostrarToast(e,o="info"){var i;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},r=document.createElement("div");r.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,r.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(i=r.querySelector("button"))==null||i.addEventListener("click",()=>r.remove()),document.body.appendChild(r),setTimeout(()=>r.remove(),8e3)}}const ae=l=>{if(typeof l=="number")return Number.isFinite(l)?l:0;if(l==null)return 0;let e=String(l).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},R=l=>ae(l).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2});function Pe(l){if(l.sinStock)return"Ilimitado";const e=Number(l.stock);if(l.esCaja&&l.unidadesPorCaja&&l.unidadesPorCaja>1){const o=Math.floor(e/l.unidadesPorCaja),a=e%l.unidadesPorCaja;return`${o} cj. + ${a} un.`}return`${e} un.`}const Ae=(l,e,o,a)=>{l.maxLength=o,l.addEventListener("input",()=>{let r=l.value.replace(/[^0-9.,]/g,"");const i=r.split(/[.,]/);i.length>2&&(r=i[0]+"."+i.slice(1).join("")),r.length>o&&(r=r.slice(0,o));const c=ae(r);Number.isFinite(c)&&c>e&&(r=String(e)),l.value!==r&&(l.value=r),a&&a()})},Se=(l,e,o=!1)=>{l.maxLength=e,l.addEventListener("input",()=>{let a=o?l.value.replace(/[<>{}\\]/g,""):l.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ .,/_#-]/g,"");a.length>e&&(a=a.slice(0,e)),l.value!==a&&(l.value=a)})};function Te(l){return nt(l)}class ct{constructor(e,o,a){U(this,"contenedor");U(this,"modal");U(this,"modelo");U(this,"cuentas",[]);U(this,"productos",[]);U(this,"cuentaSeleccionada",null);U(this,"filtroTab","todas");U(this,"POR_PAGINA_CUENTAS",15);U(this,"paginaCuentas",1);U(this,"pagosBorradorPorCuenta",new Map);U(this,"resolucionVueltoPorCuenta",new Map);this.contenedor=e,this.modal=o,this.modelo=a}async render(){[this.cuentas,this.productos]=await Promise.all([D.cuentas(),D.productos()]);const e=this.modelo.tieneRubro(4);!e&&this.filtroTab==="activa"&&(this.filtroTab="deuda");const o=this.cuentas.filter(d=>(d.tipo||"activa")==="activa"),a=this.cuentas.filter(d=>d.tipo==="deuda"),r=this.cuentas.filter(d=>e?this.filtroTab==="activa"?(d.tipo||"activa")==="activa":this.filtroTab==="deuda"?d.tipo==="deuda":!0:d.tipo==="deuda");this.cuentaSeleccionada&&(this.cuentaSeleccionada=this.cuentas.find(d=>{var s;return d.ventaId===((s=this.cuentaSeleccionada)==null?void 0:s.ventaId)})||null),this.cuentaSeleccionada&&!r.some(d=>{var s;return d.ventaId===((s=this.cuentaSeleccionada)==null?void 0:s.ventaId)})?this.cuentaSeleccionada=r[0]||null:!this.cuentaSeleccionada&&r.length>0&&(this.cuentaSeleccionada=r[0]);const i=this.modelo.tasaActual||807.39;let c=0;a.forEach(d=>{const s=ae(d.totalParcialUsd),u=ae(d.abonosUsd);c+=Math.max(0,s-u)});const b=c*i;let t=0;o.forEach(d=>{const s=ae(d.totalParcialUsd),u=ae(d.abonosUsd);t+=Math.max(0,s-u)});const n=this.cuentas.reduce((d,s)=>d+ae(s.abonosUsd),0);this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">${e?"Cuentas Abiertas y Deudas":"Deudas Comerciales a Clientes"}</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">${e?"Comandas en local y crédito comercial con liquidación a tasa libre":"Crédito comercial y cuentas por cobrar (tasa libre)"}</p>
            </div>
            <div class="flex items-center gap-2">
                <button id="btn-historial-turno-cuentas" class="bg-gray-100 hover:bg-gray-200 text-brand-black px-3 sm:px-4 py-2 sm:py-2.5 rounded font-heading font-black text-xs sm:text-sm border-2 border-brand-black shadow-brutal hover:-translate-y-0.5 transition-all flex items-center gap-1.5">
                    <span>HISTORIAL DEL TURNO</span>
                </button>
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
                <p class="font-heading font-black text-2xl sm:text-3xl text-amber-950 mt-1">$ ${R(c)}</p>
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
                <p class="font-heading font-black text-2xl sm:text-3xl text-emerald-700 mt-1">$ ${R(n)}</p>
                <p class="text-xs font-bold text-gray-500">Bs. ${R(n*i)}</p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Tasa Oficial del Día</span>
                    <span class="bg-gray-100 text-gray-800 font-black text-[10px] px-1.5 py-0.5 rounded border border-gray-300">BCV</span>
                </div>
                <p class="font-heading font-black text-xl sm:text-2xl text-brand-black mt-1">Bs. ${R(i)}</p>
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
                        </div>`:(()=>{const d=Math.ceil(r.length/this.POR_PAGINA_CUENTAS);this.paginaCuentas>d&&(this.paginaCuentas=d),this.paginaCuentas<1&&(this.paginaCuentas=1);const s=(this.paginaCuentas-1)*this.POR_PAGINA_CUENTAS;return r.slice(s,s+this.POR_PAGINA_CUENTAS).map(p=>{var k;const g=p.tipo==="deuda",x=ae(p.totalParcialUsd),S=ae(p.abonosUsd),h=Math.max(0,x-S),A=Math.max(0,S-x),f=((k=this.cuentaSeleccionada)==null?void 0:k.ventaId)===p.ventaId,E=Te(p.fechaCreacionUnix);let $="cursor-pointer border-2 border-brand-black rounded-lg p-3 sm:p-4 transition-all ";return f?$+=g?"bg-amber-50 text-brand-black border-l-[6px] border-l-amber-600 shadow-brutal ring-1 ring-amber-500/20":"bg-blue-50 text-brand-black border-l-[6px] border-l-blue-600 shadow-brutal ring-1 ring-blue-500/20":$+=g?"bg-stone-50 border-l-4 border-l-amber-300 text-brand-black shadow-brutal-sm hover:bg-amber-50/60 hover:-translate-y-0.5":"bg-stone-50 border-l-4 border-l-blue-200 text-brand-black shadow-brutal-sm hover:bg-blue-50/50 hover:-translate-y-0.5",`
                        <div data-cuenta-id="${p.ventaId}" class="${$}">
                            <div class="flex justify-between items-start gap-2">
                                <div>
                                    <div class="flex items-center gap-1.5">
                                        <span class="font-heading font-black text-base sm:text-lg leading-snug">${p.etiqueta}</span>
                                        ${g?'<span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-amber-400 bg-amber-100 text-amber-900">DEUDA</span>':'<span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-blue-300 bg-blue-100 text-blue-900">LOCAL</span>'}
                                    </div>
                                    <p class="text-[11px] font-mono font-bold text-gray-500 mt-0.5">
                                        ${g?`${E} · `:""}${p.ventaId.slice(0,9)}
                                    </p>
                                    ${p.nota?`<p class="text-[11px] italic font-semibold text-gray-600 mt-0.5 line-clamp-1">Nota: ${p.nota}</p>`:""}
                                </div>
                                <div class="text-right shrink-0">
                                    <p class="font-heading font-black text-base sm:text-lg text-brand-black">$${R(p.totalParcialUsd)}</p>
                                    ${A>0?`<p class="text-[11px] font-black text-emerald-700">A favor: +$${R(A)}</p>`:h>0?`<p class="text-xs font-bold ${g?"text-amber-900":"text-blue-900"}">Pend: $${R(h)}</p>`:'<p class="text-[11px] font-bold text-gray-400">Cubierta ($0,00)</p>'}
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-2 pt-2 border-t border-gray-200 text-[11px] font-bold text-gray-600">
                                <span>${p.lineas} consumos</span>
                                <span>Abonado: <strong class="text-brand-black">$${R(p.abonosUsd)}</strong></span>
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
                ${this.cuentaSeleccionada?(()=>{var S;const d=this.cuentaSeleccionada.tipo==="deuda",s=ae(this.cuentaSeleccionada.totalParcialUsd),u=ae(this.cuentaSeleccionada.abonosUsd),p=Math.max(0,s-u),g=Math.max(0,u-s),x=Te(this.cuentaSeleccionada.fechaCreacionUnix);return`
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 flex flex-col space-y-4">
                    <!-- Banner Distintivo del Tipo de Registro -->
                    ${d?`
                    <div class="bg-amber-50/70 border-2 border-brand-black border-l-[6px] border-l-amber-600 rounded p-3 text-xs text-amber-950 flex flex-wrap justify-between items-center gap-2">
                        <div class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-amber-500 border border-brand-black shrink-0"></span>
                            <div>
                                <p class="font-heading font-black text-sm uppercase">DEUDA COMERCIAL / FIADO PENDIENTE</p>
                                <p class="text-[11px] font-bold text-amber-900 mt-0.5">
                                    Cliente: <strong>${this.cuentaSeleccionada.cliente||this.cuentaSeleccionada.etiqueta}</strong> · Creada: <strong>${this.cuentaSeleccionada.fechaCreacionStr||x}</strong>
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
                            ${g>0?`
                                <span class="text-[10px] font-black text-emerald-900 uppercase px-2 py-0.5 rounded bg-emerald-100 border border-emerald-500">
                                    SALDO A FAVOR DEL CLIENTE
                                </span>
                                <p class="font-heading font-black text-2xl sm:text-3xl text-emerald-600 mt-0.5">
                                    +$${R(g)}
                                </p>
                                <p class="text-xs font-black text-emerald-700">
                                    Bs. ${R(g*i)} (excedente)
                                </p>
                                <div class="flex items-center justify-end gap-1.5 mt-1">
                                    <span class="font-bold text-[10px] text-gray-500">
                                        Consumo: $${R(s)} · Abonado: <strong class="text-brand-black">$${R(u)}</strong>
                                    </span>
                                    <button data-editar-abono title="Corregir monto abonado por error" class="text-[10px] font-black uppercase px-2 py-0.5 rounded border border-brand-black bg-amber-200 hover:bg-amber-300 text-brand-black">
                                        Editar
                                    </button>
                                </div>
                            `:`
                                <span class="text-xs font-bold text-gray-500 uppercase">${d?"Monto Adeudado Pendiente":"Saldo Pendiente"}</span>
                                <p class="font-heading font-black text-2xl sm:text-3xl text-brand-black">
                                    $${R(p)} USD
                                </p>
                                <p class="text-xs font-bold text-gray-600">
                                    Bs. ${R(p*i)} <span class="text-[10px] text-gray-400">(${d?"tasa hoy":"actual"})</span>
                                </p>
                                <div class="flex items-center justify-end gap-1.5 mt-1">
                                    <span class="font-bold text-xs text-gray-600">
                                        Total: $${R(s)} · Abonado: <strong class="text-brand-black">$${R(u)}</strong>
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
                            <span class="font-heading font-black text-xs uppercase tracking-wider text-gray-700">Consumos Cargados (${((S=this.cuentaSeleccionada.consumos)==null?void 0:S.length)||0})</span>
                            <span class="text-xs font-bold text-gray-500">Monto Unit. / Subtotal</span>
                        </div>
                        <div id="cta-consumos-lista" class="space-y-2 overflow-y-auto max-h-[300px] pr-1">
                            ${!this.cuentaSeleccionada.consumos||this.cuentaSeleccionada.consumos.length===0?`<div class="py-6 text-center text-xs text-gray-400 font-bold">
                                    Sin consumos cargados en este registro. Selecciona productos abajo para cargar mercancía. El stock se descuenta de inmediato.
                                </div>`:this.cuentaSeleccionada.consumos.map(h=>`
                                <div class="flex items-center justify-between border-2 border-brand-black rounded-lg bg-white px-3 py-2 text-xs font-bold shadow-brutal-sm hover:bg-amber-50/50 transition-colors gap-2">
                                    <div class="flex-1 min-w-0 pr-2">
                                        <p class="truncate text-brand-black font-heading font-black text-sm" title="${h.nombre}">
                                            ${h.nombre}
                                            ${h.modoVenta==="paquete"?'<span class="inline-block ml-1 text-[9px] font-black bg-purple-100 text-purple-800 border border-brand-purple rounded px-1">paquete</span>':""}
                                        </p>
                                        <p class="text-[11px] text-gray-500 font-semibold">${h.cantidad} un. &times; $${R(h.precioUsd)} <span class="text-gray-400 font-normal">· Bs. ${this.modelo.bs(ae(h.precioUsd))} c/u</span></p>
                                    </div>
                                    <div class="flex items-center gap-2 shrink-0">
                                        <div class="text-right mr-1">
                                            <p class="font-heading font-black text-sm sm:text-base text-brand-black leading-tight">$${R(h.subtotalUsd)}</p>
                                            <p class="text-[10px] font-bold text-gray-500 leading-tight">Bs. ${this.modelo.bs(ae(h.subtotalUsd))}</p>
                                        </div>
                                        <div class="flex items-center gap-1 border-2 border-brand-black rounded bg-gray-100 p-0.5">
                                            <button data-dec-consumo="${h.id}" data-sku="${h.sku}" data-cant="${h.cantidad}" data-modo="${h.modoVenta||"unidad"}" title="Disminuir 1 unidad" class="w-6 h-6 flex items-center justify-center rounded border border-brand-black bg-white hover:bg-amber-200 text-brand-black font-black text-xs active:scale-95">-</button>
                                            <span class="w-6 text-center font-black text-xs font-mono">${h.cantidad}</span>
                                            <button data-inc-consumo="${h.id}" data-sku="${h.sku}" data-modo="${h.modoVenta||"unidad"}" title="Aumentar 1 unidad" class="w-6 h-6 flex items-center justify-center rounded border border-brand-black bg-white hover:bg-emerald-200 text-brand-black font-black text-xs active:scale-95">+</button>
                                        </div>
                                        <button data-del-consumo="${h.id}" title="Eliminar todo el consumo y reintegrar stock al inventario" class="w-7 h-7 flex items-center justify-center rounded border-2 border-brand-black bg-red-100 hover:bg-red-500 hover:text-white text-red-800 text-sm font-black transition-colors active:scale-95">&times;</button>
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
                            ${this.productos.map(h=>{const A=!h.sinStock&&Number(h.stock)<=0,f=h.precioPaqueteUsd&&h.nombrePaquete||h.esCaja&&h.unidadesPorCaja&&h.unidadesPorCaja>1;return`
                                <div class="relative" data-producto-row="${h.sku}">
                                    <button data-add-sku="${h.sku}" data-modo="unidad" data-agotado="${A?"1":"0"}" class="text-left border-2 border-brand-black rounded p-2 transition-all text-xs font-bold ${A?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-gray-50 hover:bg-white shadow-sm hover:shadow-brutal-sm"} w-full">
                                        <div class="flex justify-between items-start gap-1">
                                            <p class="truncate flex-1" title="${h.nombre}">${h.nombre}</p>
                                            ${A?'<span class="bg-red-200 text-red-900 border border-red-400 text-[9px] font-black px-1 rounded">AGOTADO</span>':""}
                                        </div>
                                        <div class="flex justify-between items-center mt-1">
                                            <p class="text-brand-black font-black">$${R(h.precioUsd)}</p>
                                            <span class="text-[10px] ${A?"text-red-700 font-black":"text-gray-500"}">${Pe(h)}</span>
                                        </div>
                                    </button>
                                    ${f?`
                                    <button data-add-sku="${h.sku}" data-modo="paquete" data-agotado="${A?"1":"0"}" class="text-left border-2 border-brand-purple rounded p-1 transition-all text-[10px] font-bold mt-1 w-full ${A?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-purple-50 hover:bg-purple-100 shadow-sm hover:shadow-brutal-sm"}">
                                        <div class="flex justify-between items-center">
                                            <span class="text-purple-800">${h.nombrePaquete} ($${Number(h.precioPaqueteUsd).toFixed(2)})</span>
                                            <span class="text-purple-600">${h.unidadesPorCaja||1} un.</span>
                                        </div>
                                    </button>`:""}
                                </div>`}).join("")}
                        </div>
                    </div>

                    <!-- Botonera de Abono, Corrección, Conversión y Liquidación -->
                    <div class="border-t-2 border-brand-black pt-4 grid grid-cols-1 sm:grid-cols-${d?"3":"4"} gap-2 sm:gap-3">
                        ${d?"":`
                        <button id="btn-convertir-deuda" class="bg-amber-200 hover:bg-amber-300 text-amber-950 font-heading font-black text-xs py-3.5 rounded border-2 border-brand-black shadow-brutal active:translate-y-0.5">
                            CONVERTIR A DEUDA
                        </button>
                        `}
                        <button id="btn-abonar-cuenta" class="bg-amber-400 hover:bg-amber-500 text-brand-black font-heading font-black text-xs py-3.5 rounded border-2 border-brand-black shadow-brutal active:translate-y-0.5">
                            + REGISTRAR ABONO
                        </button>
                        <button id="btn-editar-abono-cuenta" class="bg-amber-100 hover:bg-amber-200 text-amber-950 font-heading font-black text-xs py-3.5 rounded border-2 border-brand-black shadow-brutal active:translate-y-0.5">
                            EDITAR ABONO
                        </button>
                        <button id="btn-cerrar-cuenta" class="${g>0?"bg-emerald-600 hover:bg-emerald-700":"bg-green-700 hover:bg-green-800"} text-white font-heading font-black text-xs py-3.5 rounded border-2 border-brand-black shadow-brutal active:translate-y-0.5">
                            ${d?"COBRAR Y LIQUIDAR DEUDA (TASA LIBRE)":g>0?`LIQUIDAR (+$${R(g)})`:"LIQUIDAR Y COBRAR"}
                        </button>
                    </div>
                </div>`})():`
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                    <h4 class="font-heading font-black text-2xl mb-2">Selecciona un registro</h4>
                    <p class="text-brand-text font-body text-sm max-w-sm">Haz clic en una cuenta activa o deuda de la lista izquierda para cargarle consumos, abonar pagos o cobrarla.</p>
                </div>
                `}
            </div>
        </div>`,this.vincularEventos()}vincularEventos(){var a,r,i,c,b,t,n,d,s,u,p,g;(a=document.getElementById("btn-historial-turno-cuentas"))==null||a.addEventListener("click",()=>{Me(this.modal)}),(r=document.getElementById("btn-nueva-cuenta"))==null||r.addEventListener("click",()=>this.modalNuevaCuenta("activa")),(i=document.getElementById("btn-nueva-deuda"))==null||i.addEventListener("click",()=>this.modalNuevaCuenta("deuda")),(c=document.getElementById("tab-todas"))==null||c.addEventListener("click",()=>{this.filtroTab="todas",this.paginaCuentas=1,this.render()}),(b=document.getElementById("tab-activas"))==null||b.addEventListener("click",()=>{this.filtroTab="activa",this.paginaCuentas=1,this.render()}),(t=document.getElementById("tab-deudas"))==null||t.addEventListener("click",()=>{this.filtroTab="deuda",this.paginaCuentas=1,this.render()}),(n=document.getElementById("cta-pag-ant"))==null||n.addEventListener("click",()=>{this.paginaCuentas>1&&(this.paginaCuentas--,this.render())}),(d=document.getElementById("cta-pag-sig"))==null||d.addEventListener("click",()=>{this.paginaCuentas++,this.render()}),this.contenedor.querySelectorAll("[data-cuenta-id]").forEach(x=>{x.addEventListener("click",()=>{const S=x.dataset.cuentaId;this.cuentaSeleccionada=this.cuentas.find(h=>h.ventaId===S)||null,this.render()})}),this.contenedor.querySelectorAll("[data-inc-consumo]").forEach(x=>{x.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const S=x,h=S.dataset.sku||"",A=S.dataset.modo||"unidad";try{const f=await D.agregarConsumo(this.cuentaSeleccionada.ventaId,h,"1",!0,A);this.cuentaSeleccionada=f,this.render()}catch(f){this.mostrarToast(f instanceof Error?f.message:String(f),"error")}})}),this.contenedor.querySelectorAll("[data-dec-consumo]").forEach(x=>{x.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const S=x,h=S.dataset.decConsumo||"";if(!(Number(S.dataset.cant||"1")<=1&&!await ce("¿Deseas quitar este producto de la cuenta y devolverlo al inventario?","ELIMINAR CONSUMO")))try{const f=await D.eliminarConsumo(this.cuentaSeleccionada.ventaId,h,1);this.cuentaSeleccionada=f,this.render()}catch(f){this.mostrarToast(f instanceof Error?f.message:String(f),"error")}})}),this.contenedor.querySelectorAll("[data-del-consumo]").forEach(x=>{x.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const S=x.dataset.delConsumo||"";if(await ce("¿Deseas eliminar todo este consumo y reintegrar las unidades al inventario?","ELIMINAR CONSUMO"))try{const A=await D.eliminarConsumo(this.cuentaSeleccionada.ventaId,S);this.cuentaSeleccionada=A,this.render()}catch(A){this.mostrarToast(A instanceof Error?A.message:String(A),"error")}})}),(s=document.getElementById("btn-convertir-deuda"))==null||s.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const x=this.cuentaSeleccionada,S=x.cliente||x.etiqueta||"",h=await pe("Nombre o titular responsable de la deuda comercial:",S,"CONVERTIR A DEUDA COMERCIAL");if(!h||!h.trim())return;const A=x.nota||"",f=await pe("Nota o plazo de compromiso de pago (opcional):",A,"PLAZO / COMPROMISO");try{const E=await D.convertirCuentaADeuda(x.ventaId,h.trim(),f?f.trim():void 0);this.cuentaSeleccionada=E,this.filtroTab="deuda",this.mostrarToast("Cuenta convertida a deuda comercial correctamente.","success"),this.render()}catch(E){this.mostrarToast(E instanceof Error?E.message:String(E),"error")}});const e=this.contenedor.querySelector("#cta-buscar-prod");e&&Se(e,40),e==null||e.addEventListener("input",()=>{const x=e.value.trim().toLowerCase(),S=this.contenedor.querySelector("#cta-grid-prod");if(S){const h=this.productos.filter(A=>!x||A.nombre.toLowerCase().includes(x));h.length===0?S.innerHTML='<p class="col-span-full text-center text-xs text-gray-400 py-4 font-bold">No se encontraron productos coincidentes.</p>':(S.innerHTML=h.map(A=>{const f=!A.sinStock&&Number(A.stock)<=0,E=A.precioPaqueteUsd&&A.nombrePaquete;return`
                        <div class="relative" data-producto-row="${A.sku}">
                            <button data-add-sku="${A.sku}" data-modo="unidad" data-agotado="${f?"1":"0"}" class="text-left border-2 border-brand-black rounded p-2 transition-all text-xs font-bold ${f?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-gray-50 hover:bg-white shadow-sm hover:shadow-brutal-sm"} w-full">
                                <div class="flex justify-between items-start gap-1">
                                    <p class="truncate flex-1" title="${A.nombre}">${A.nombre}</p>
                                    ${f?'<span class="bg-red-200 text-red-900 border border-red-400 text-[9px] font-black px-1 rounded">AGOTADO</span>':""}
                                </div>
                                <div class="flex justify-between items-center mt-1">
                                    <p class="text-brand-black font-black">$${R(A.precioUsd)}</p>
                                    <span class="text-[10px] ${f?"text-red-700 font-black":"text-gray-500"}">${Pe(A)}</span>
                                </div>
                            </button>
                            ${E?`
                            <button data-add-sku="${A.sku}" data-modo="paquete" data-agotado="${f?"1":"0"}" class="text-left border-2 border-brand-purple rounded p-1 transition-all text-[10px] font-bold mt-1 w-full ${f?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-purple-50 hover:bg-purple-100 shadow-sm hover:shadow-brutal-sm"}">
                                <div class="flex justify-between items-center">
                                    <span class="text-purple-800">${A.nombrePaquete||"Caja"} (${A.precioPaqueteUsd?`$${Number(A.precioPaqueteUsd).toFixed(2)}`:`$${(Number(A.precioUsd)*(A.unidadesPorCaja||1)).toFixed(2)}`})</span>
                                    <span class="text-purple-600">${A.unidadesPorCaja||1} un.</span>
                                </div>
                            </button>`:""}
                        </div>`}).join(""),this.vincularBotonesAgregar(S))}});const o=this.contenedor.querySelector("#cta-grid-prod");o&&this.vincularBotonesAgregar(o),this.contenedor.querySelectorAll("[data-editar-abono]").forEach(x=>{x.addEventListener("click",()=>this.modalEditarAbono())}),(u=document.getElementById("btn-editar-abono-cuenta"))==null||u.addEventListener("click",()=>this.modalEditarAbono()),(p=document.getElementById("btn-abonar-cuenta"))==null||p.addEventListener("click",()=>this.modalAbono()),(g=document.getElementById("btn-cerrar-cuenta"))==null||g.addEventListener("click",()=>this.modalCierre())}vincularBotonesAgregar(e){e.querySelectorAll("[data-add-sku]").forEach(o=>{o.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const a=o,r=a.dataset.addSku||"",i=a.dataset.agotado==="1",c=a.dataset.modo||"unidad";if(i){this.mostrarToast("Stock insuficiente: este producto no tiene existencias disponibles en inventario.","error");return}try{const b=await D.agregarConsumo(this.cuentaSeleccionada.ventaId,r,"1",!0,c);this.cuentaSeleccionada=b,this.render()}catch(b){this.mostrarToast(b instanceof Error?b.message:String(b),"error")}})})}modalNuevaCuenta(e="activa"){let o=e;const a=()=>{var d,s;const r=o==="deuda";this.modal.innerHTML=`
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
                    <p class="text-xs text-gray-600 mb-4">
                        ${r?"Registro de crédito comercial. Descuenta stock al instante y liquida a tasa libre al cobrar.":"Identificador para consumos de comanda, mesa o servicio en barra."}
                    </p>

                    <div class="space-y-3 mb-4">
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">${r?"Nombre del Cliente / Deudor":"Identificador (Mesa / Barra / Cliente)"}</label>
                            <input id="modal-cta-nombre" maxlength="40" autofocus placeholder="${r?"Ej: Taller Gómez / Carlos":"Ej: Mesa 4 / Terraza"}"
                                class="w-full border-2 border-brand-black rounded px-3 py-2 text-base font-body focus:ring-2 focus:ring-brand-cyan" />
                        </div>

                        ${r?`
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Nota de Compromiso / Plazo (Opcional)</label>
                            <input id="modal-cta-nota" maxlength="60" placeholder="Ej: Paga el viernes / Autorizado por Dueño(a)"
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
            </div>`;const i=this.modal.querySelector("#modal-tab-activa"),c=this.modal.querySelector("#modal-tab-deuda");i==null||i.addEventListener("click",()=>{o="activa",a()}),c==null||c.addEventListener("click",()=>{o="deuda",a()});const b=this.modal.querySelector("#modal-cta-nombre"),t=this.modal.querySelector("#modal-cta-nota");b&&Se(b,40),t&&Se(t,60),setTimeout(()=>b==null?void 0:b.focus(),50);const n=()=>{this.modal.innerHTML=""};(d=this.modal.querySelector("#modal-cta-cancel"))==null||d.addEventListener("click",n),(s=this.modal.querySelector("#modal-cta-ok"))==null||s.addEventListener("click",async()=>{const u=b==null?void 0:b.value.trim().slice(0,40),p=t==null?void 0:t.value.trim().slice(0,60);if(u){const g=await D.abrirCuenta(u,o,p,u);this.cuentaSeleccionada=g,o==="deuda"&&(this.filtroTab="deuda"),n(),this.render()}else this.mostrarToast(r?"Debe ingresar el nombre del cliente o empresa deudora.":"Debe ingresar un identificador válido para la cuenta.","error"),b==null||b.focus()})};a()}async modalAbono(){if(!this.cuentaSeleccionada)return;let e=[];try{e=await D.listarMetodosPago()}catch{e=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}const o=ae(this.cuentaSeleccionada.totalParcialUsd),a=ae(this.cuentaSeleccionada.abonosUsd),r=Math.max(0,o-a),i=this.modelo.tasaActual||807.39,c=(r*i).toFixed(2),b=this.cuentaSeleccionada.tipo==="deuda";let t=e.find(x=>x.nombre==="BIOPAGO")||e[0]||{nombre:"BIOPAGO",moneda:"BS"},n=t.moneda==="USD"?r:Number(c),d=i,s="";const u=()=>{var G;const x=e.filter(V=>V.moneda==="USD"),S=e.filter(V=>V.moneda==="BS"),h=x.map(V=>`<option value="${V.nombre}" ${V.nombre===t.nombre?"selected":""}>${V.nombre} ($ USD - Tasa Dinámica)</option>`).join(""),f=`
                <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                    ${S.map(V=>`<option value="${V.nombre}" ${V.nombre===t.nombre?"selected":""}>${V.nombre} (Bs.)</option>`).join("")}
                </optgroup>
                <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                    ${h}
                </optgroup>
            `,E=t.moneda==="USD",$=E&&d>0?d:i,k=E?n*$:n,w=i>0?k/i:0,y=a+w,v=y-o,C=v*i;let j="";if(n<=1e-4)j=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-700 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Aporte de este abono:</span>
                            <span class="font-heading font-black text-sm text-gray-800">$0.00 USD (Bs. 0.00)</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-600 border-t border-gray-300 pt-1 mt-1">
                            <span>Saldo pendiente actual:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(r)} USD (Bs. ${R(c)})</span>
                        </div>
                    </div>
                `;else if(v>.001)j=`
                    <div class="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${R(y)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${R(v)} USD (Bs. ${R(C)})</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Abono superior al consumo: este excedente se convertirá en ganancia o crédito al liquidar.</p>
                    </div>
                `;else if(v<-.001){const V=Math.abs(v),H=V*i;j=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(y)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${R(V)} USD (Bs. ${R(H)})</span>
                        </div>
                    </div>
                `}else j=`
                    <div class="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${R(y)} USD</span>
                        </div>
                    </div>
                `;this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                    <h3 class="font-heading font-black text-2xl mb-1">${b?"ABONAR A LA DEUDA":"REGISTRAR ABONO / ANTICIPO"}</h3>
                    <p class="font-body text-xs text-gray-700 mb-3">${(G=this.cuentaSeleccionada)==null?void 0:G.etiqueta} · El usuario decide libremente el monto y tasa del abono.</p>

                    <div class="bg-blue-50 border border-blue-400 rounded p-2.5 mb-3 text-xs text-blue-950 font-bold leading-tight">
                        ℹ <strong>Abonos con tasas dinámicas:</strong> En métodos en divisas (${x.map(V=>V.nombre).join(", ")}) se define la tasa al momento del abono. El diferencial frente a la tasa oficial se computa a favor del cliente.
                    </div>

                    <div class="space-y-3 mb-4">
                        <div>
                            <label class="block text-xs font-black uppercase text-gray-700 mb-1">Método de Pago del Abono</label>
                            <select id="select-metodo-abono" class="w-full border-2 border-brand-black rounded px-3 py-2 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                ${f}
                            </select>
                        </div>

                        ${E?`
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
                                    TASA BCV: ${R(i)}
                                </button>
                            </div>
                            <input id="input-tasa-abono" type="number" step="0.01" min="1" max="100000" value="${$}"
                                class="w-full border-2 border-brand-black rounded px-3 py-2 font-mono font-black text-base text-brand-black text-right focus:outline-none" />
                        </div>

                        <div class="bg-purple-50 border border-brand-purple rounded p-2 text-xs font-bold space-y-0.5">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Valor aportado en Bolívares:</span>
                                <span data-aporte-bs class="text-brand-purple font-mono font-black">Bs. ${R(k)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Abono computable (Tasa BCV):</span>
                                <span data-abono-computable class="text-brand-black font-mono font-black">$ ${R(w)} USD</span>
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
                            <p class="text-[11px] text-gray-500 mt-1">Equivalente oficial acreditado: <span class="font-bold text-brand-black">$ ${R(w)} USD</span> (Tasa BCV: ${R(i)})</p>
                        </div>
                        `}

                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia (Opcional)</label>
                            <input id="input-ref-abono" type="text" maxlength="25" value="${s}" placeholder="Ej: PAGO MOVIL 4912, USDT HASH..."
                                class="w-full border-2 border-brand-black rounded px-3 py-1.5 text-xs font-mono focus:outline-none" />
                        </div>

                        <div id="abono-preview-container">${j}</div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <button id="modal-abono-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded hover:bg-gray-100">VOLVER</button>
                        <button id="modal-abono-ok" ${n<=0?"disabled":""} class="bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed text-brand-black font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">APLICAR ABONO</button>
                    </div>
                </div>
            </div>`,g()},p=()=>{const x=t.moneda==="USD",S=x&&d>0?d:i,h=x?n*S:n,A=i>0?h/i:0,f=a+A,E=f-o,$=E*i;let k="";if(n<=1e-4)k=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-700 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Aporte de este abono:</span>
                            <span class="font-heading font-black text-sm text-gray-800">$0.00 USD (Bs. 0.00)</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-600 border-t border-gray-300 pt-1 mt-1">
                            <span>Saldo pendiente actual:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(r)} USD (Bs. ${R(c)})</span>
                        </div>
                    </div>
                `;else if(E>.001)k=`
                    <div class="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${R(f)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${R(E)} USD (Bs. ${R($)})</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Abono superior al consumo: este excedente se convertirá en ganancia o crédito al liquidar.</p>
                    </div>
                `;else if(E<-.001){const v=Math.abs(E),C=v*i;k=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(f)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${R(v)} USD (Bs. ${R(C)})</span>
                        </div>
                    </div>
                `}else k=`
                    <div class="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${R(f)} USD</span>
                        </div>
                    </div>
                `;const w=this.modal.querySelector("#abono-preview-container");w&&(w.innerHTML=k);const y=this.modal.querySelector("#modal-abono-ok");if(y&&(y.disabled=n<=0),x){const v=this.modal.querySelector("[data-aporte-bs]");v&&(v.textContent=`Bs. ${R(h)}`);const C=this.modal.querySelector("[data-abono-computable]");C&&(C.textContent=`$ ${R(A)} USD`)}},g=()=>{var S,h,A,f,E,$,k;const x=()=>{this.modal.innerHTML=""};(S=this.modal.querySelector("#modal-abono-cancel"))==null||S.addEventListener("click",x),(h=this.modal.querySelector("#select-metodo-abono"))==null||h.addEventListener("change",w=>{const y=w.target.value,v=e.find(C=>C.nombre===y);if(v){const C=t.moneda==="USD";t=v,v.moneda==="USD"?(d=i,C||(n=r)):C&&(n=Number(c)),u()}}),(A=this.modal.querySelector("#input-monto-abono"))==null||A.addEventListener("input",w=>{n=ae(w.target.value),p()}),(f=this.modal.querySelector("#input-tasa-abono"))==null||f.addEventListener("input",w=>{d=ae(w.target.value),p()}),(E=this.modal.querySelector("#btn-reset-tasa-abono"))==null||E.addEventListener("click",()=>{d=i,u()}),($=this.modal.querySelector("#input-ref-abono"))==null||$.addEventListener("input",w=>{s=w.target.value}),(k=this.modal.querySelector("#modal-abono-ok"))==null||k.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const w=t.moneda==="USD",y=w&&d>0?d:i,v=w?n*y:n,C=i>0?v/i:0;if(C<=0||!Number.isFinite(C)){this.mostrarToast("Por favor ingrese un monto válido.","error");return}const j=await D.abonarCuenta(this.cuentaSeleccionada.ventaId,C,v);j&&(this.cuentaSeleccionada=j),x(),this.render()})};u()}modalEditarAbono(){var S,h,A,f;if(!this.cuentaSeleccionada)return;const e=ae(this.cuentaSeleccionada.totalParcialUsd),o=ae(this.cuentaSeleccionada.abonosUsd),a=this.modelo.tasaActual||807.39;this.modal.innerHTML=`
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
        </div>`;const r=this.modal.querySelector("#tab-edit-usd"),i=this.modal.querySelector("#tab-edit-bs"),c=this.modal.querySelector("#sec-edit-usd"),b=this.modal.querySelector("#sec-edit-bs"),t=this.modal.querySelector("#edit-abono-usd-val"),n=this.modal.querySelector("#edit-abono-bs-val"),d=this.modal.querySelector("#edit-usd-equiv"),s=this.modal.querySelector("#edit-bs-equiv"),u=this.modal.querySelector("#edit-preview-box");let p="usd";const g=()=>{let E=0;p==="usd"?(E=ae(t==null?void 0:t.value),d&&(d.textContent=`Bs. ${(E*a).toFixed(2)}`)):(E=ae(n==null?void 0:n.value)/a,s&&(s.textContent=`$${E.toFixed(2)} USD`)),Number.isFinite(E)||(E=0);const $=E-e;if(u)if($>.001)u.className="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold",u.innerHTML=`
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Saldo Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${R(E)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${R($)} USD</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Excedente a favor del cliente.</p>
                    `;else if($<-.001){const k=Math.abs($);u.className="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold",u.innerHTML=`
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Saldo Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(E)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${R(k)} USD</span>
                        </div>
                    `}else u.className="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold",u.innerHTML=`
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${R(E)} USD</span>
                        </div>
                    `};t&&Ae(t,5e4,8,g),n&&Ae(n,5e7,11,g),g(),(S=this.modal.querySelector("#btn-preset-cero"))==null||S.addEventListener("click",async()=>{const E=ae(p==="usd"?t==null?void 0:t.value:n==null?void 0:n.value);(o>0||E>0)&&!await ce("¿Desea restablecer el saldo abonado a $0.00? Esta acción dejará los pagos registrados en cero.","RESTABLECER ABONO")||(t&&(t.value="0.00"),n&&(n.value="0.00"),g())}),(h=this.modal.querySelector("#btn-preset-exacto"))==null||h.addEventListener("click",()=>{t&&(t.value=e.toFixed(2)),n&&(n.value=(e*a).toFixed(2)),g()}),r==null||r.addEventListener("click",()=>{p="usd",r.className="flex-1 py-1.5 font-heading font-black text-xs rounded bg-brand-black text-white",i.className="flex-1 py-1.5 font-heading font-bold text-xs rounded text-brand-black hover:bg-white",c==null||c.classList.remove("hidden"),b==null||b.classList.add("hidden"),g()}),i==null||i.addEventListener("click",()=>{p="bs",i.className="flex-1 py-1.5 font-heading font-black text-xs rounded bg-brand-black text-white",r.className="flex-1 py-1.5 font-heading font-bold text-xs rounded text-brand-black hover:bg-white",b==null||b.classList.remove("hidden"),c==null||c.classList.add("hidden"),g()});const x=()=>{this.modal.innerHTML=""};(A=this.modal.querySelector("#modal-edit-cancel"))==null||A.addEventListener("click",x),(f=this.modal.querySelector("#modal-edit-ok"))==null||f.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;let E=0;if(p==="usd"?E=ae(t==null?void 0:t.value):E=ae(n==null?void 0:n.value)/a,!Number.isFinite(E)||E<0||E>5e4){this.mostrarToast("Monto inválido. Ingrese un valor entre $0.00 y $50,000.00 USD.","error");return}if(Math.abs(E-o)>.009){const w=E===0?`¿Confirmas reiniciar el saldo abonado a $0.00? (Monto previo registrado: $${R(o)})`:`¿Confirmas modificar el saldo abonado de esta cuenta a $${R(E)} USD (Bs. ${R(E*a)})? (Monto previo registrado: $${R(o)})`;if(!await ce(w,"MODIFICAR ABONO"))return}const k=await D.editarAbonoCuenta(this.cuentaSeleccionada.ventaId,E);k&&(this.cuentaSeleccionada=k),x(),this.render()})}async modalCierre(){var k,w,y;if(!this.cuentaSeleccionada)return;const e=this.cuentaSeleccionada.tipo==="deuda",o=ae(this.cuentaSeleccionada.totalParcialUsd),a=ae(this.cuentaSeleccionada.abonosUsd),r=Math.max(0,Math.round((o-a)*100)/100),i=Math.max(0,Math.round((a-o)*100)/100),c=this.modelo.tasaActual||807.39;if(r<=.009){this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                    <h3 class="font-heading font-black text-2xl mb-1">${e?"LIQUIDAR DEUDA":"LIQUIDAR CUENTA"}</h3>
                    <p class="font-body text-sm text-gray-600 mb-4">${this.cuentaSeleccionada.etiqueta} · Total cubierto por abonos previos</p>
                    
                    <div class="space-y-2 mb-4">
                        <div class="flex justify-between text-xs font-bold text-gray-500">
                            <span>Total de consumos:</span>
                            <span>$${R(o)} (Bs. ${R(o*c)})</span>
                        </div>
                        <div class="flex justify-between text-xs font-bold text-emerald-700">
                            <span>Total abonado acumulado:</span>
                            <span>$${R(a)} (Bs. ${R(a*c)})</span>
                        </div>

                        ${i>0?`
                        <div class="bg-emerald-50 border-2 border-emerald-600 rounded p-4 text-center mt-3">
                            <span class="text-xs font-black text-emerald-900 uppercase">Saldo a Favor del Cliente</span>
                            <p class="font-heading font-black text-3xl text-emerald-600 mt-1">+$${R(i)} USD</p>
                            <p class="font-bold text-xs text-emerald-800">Bs. ${R(i*c)}</p>
                            <div class="mt-3 bg-white border border-emerald-500 rounded p-2.5 text-xs text-emerald-950 font-bold leading-tight text-left">
                                ✓ <strong>Consolidación como ganancia:</strong> Al liquidar y cerrar la cuenta, este excedente de <strong>$${R(i)}</strong> se consolidará automáticamente como ganancia del negocio.
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
                        <button id="modal-liq-ok" class="${i>0?"bg-emerald-600 hover:bg-emerald-700":"bg-green-600 hover:bg-green-700"} text-white font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">
                            ${i>0?"LIQUIDAR Y CONSOLIDAR GANANCIA":"CONFIRMAR CIERRE"}
                        </button>
                    </div>
                </div>
            </div>`;const v=()=>{this.modal.innerHTML=""};(k=this.modal.querySelector("#modal-liq-cancel"))==null||k.addEventListener("click",v);let C=!1;(w=this.modal.querySelector("#modal-liq-ok"))==null||w.addEventListener("click",async()=>{if(!C&&this.cuentaSeleccionada){C=!0;try{await D.cerrarCuenta(this.cuentaSeleccionada.ventaId,"0.00",c.toFixed(4)),this.cuentaSeleccionada=null,v(),this.render()}catch{C=!1}}});return}let b=[];try{b=await D.listarMetodosPago()}catch{b=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}let t=c;const n=e?b.find(v=>v.nombre==="TRANSF.BS.")||b[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"}:b.find(v=>v.nombre==="PUNTOD.VENTA")||b[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"},d=this.cuentaSeleccionada.ventaId,s=this.pagosBorradorPorCuenta.get(d);let u;if(s&&s.length>0){if(u=s.map(v=>({...v})),u.length===1&&u[0]){const v=u[0];v.monto=v.moneda==="USD"?r:Number((r*t).toFixed(2)),v.tasaCambio=t}else if(u.length>1){const v=Number((r*t).toFixed(2));let C=0;for(let V=0;V<u.length-1;V++){const H=u[V],_=H.tasaCambio>0?H.tasaCambio:t;C+=H.moneda==="USD"?H.monto*_:H.monto}const j=Math.max(0,Math.round((v-C)*100)/100),G=u[u.length-1];G&&(G.monto=G.moneda==="USD"?t>0?Number((j/t).toFixed(2)):0:j,G.tasaCambio=t)}}else u=[{id:"p-1",metodo:n.nombre,moneda:n.moneda,monto:n.moneda==="USD"?r:Number((r*t).toFixed(2)),tasaCambio:t,referencia:""}];const p=this.resolucionVueltoPorCuenta.get(d);let g=(p==null?void 0:p.estado)||"PAGADO",x=(p==null?void 0:p.metodo)||(e?"TRANSF.BS.":"BS.EFEC."),S=(p==null?void 0:p.tasa)||t;b.some(v=>v.nombre===x)||(x=((y=b[0])==null?void 0:y.nombre)||(e?"TRANSF.BS.":"BS.EFEC."));let h=!1;const A=()=>{let v=0;for(const I of u)if(I.moneda==="USD"){const B=I.tasaCambio>0?I.tasaCambio:t;v+=I.monto*B}else v+=I.monto;v=Math.round(v*100)/100;const C=Math.round(r*t*100)/100,j=t>0?Math.round(v/t*100)/100:0,G=Math.max(0,Math.round((C-v)*100)/100),V=t>0?Math.max(0,Math.round(G/t*100)/100):0,H=Math.max(0,Math.round((v-C)*100)/100),_=t>0?Math.max(0,Math.round(H/t*100)/100):0,O=v>=C-.01&&u.every(I=>I.monto>0);return{cubiertoUsd:j,cubiertoBs:v,totalEsperadoBs:C,faltanteUsd:V,faltanteBs:G,vueltoUsd:_,vueltoBs:H,puedeConfirmar:O}},f=v=>{const C=b.find(H=>H.nombre===x),j=(C==null?void 0:C.moneda)==="USD",G=S>0?S:t,V=j&&G>0?Number((v.vueltoBs/G).toFixed(2)):v.vueltoUsd;return v.faltanteBs>.009?`
                <div class="bg-amber-50 border-2 border-amber-500 rounded p-2.5 text-center mb-3">
                    <p class="text-xs font-black uppercase text-amber-900">Monto Incompleto por Cubrir</p>
                    <p class="font-heading font-black text-lg text-amber-700">Faltan Bs. ${R(v.faltanteBs)} · <span class="text-sm text-amber-900">$ ${R(v.faltanteUsd)} (Equiv. Base)</span></p>
                </div>`:v.vueltoBs>.009?`
                <div class="border-2 border-emerald-700 bg-emerald-50/70 rounded-lg p-3 mb-3">
                    <div class="flex flex-wrap items-center justify-between gap-1 mb-2">
                        <div>
                            <span class="text-[10px] font-black uppercase text-emerald-900 tracking-wide block">Excedente / Vuelto a Devolver</span>
                            <span class="font-heading font-black text-lg text-emerald-800">Bs. ${R(v.vueltoBs)}</span>
                        </div>
                        <span class="text-xs font-bold text-emerald-900 font-mono">$ ${R(v.vueltoUsd)} equiv. oficial</span>
                    </div>

                    <!-- Selector: Entregar Vuelto vs Retener Vuelto -->
                    <div class="grid grid-cols-2 gap-2 mb-2.5">
                        <button type="button" id="btn-vuelto-pagado-cuenta" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${g==="PAGADO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                            ENTREGAR VUELTO (PAGADO)
                        </button>
                        <button type="button" id="btn-vuelto-retenido-cuenta" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${g==="RETENIDO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                            RETENER VUELTO (A FAVOR)
                        </button>
                    </div>

                    ${g==="PAGADO"?`
                    <div class="bg-white border border-emerald-600 rounded p-2.5 space-y-2">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <label class="text-[11px] font-bold text-gray-700 uppercase">Método de Egreso del Vuelto:</label>
                            <select id="select-metodo-vuelto-cuenta" class="border-2 border-brand-black rounded px-2 py-1 text-xs font-bold bg-white focus:outline-none">
                                ${b.map(H=>`
                                    <option value="${H.nombre}" ${H.nombre===x?"selected":""}>
                                        ${H.nombre} (${H.moneda==="USD"?"$ Dólares":"Bs. Bolívares"})
                                    </option>
                                `).join("")}
                            </select>
                        </div>
                        ${j?`
                        <div class="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-gray-100">
                            <div>
                                <span class="text-[10px] font-bold text-gray-500 uppercase block">Tasa Pactada Vuelto USD:</span>
                                <div class="flex items-center gap-1.5">
                                    <input id="input-tasa-vuelto-cuenta" type="text" inputmode="decimal" value="${S.toFixed(2)}"
                                        class="w-24 border-2 border-brand-black rounded px-2 py-0.5 text-xs font-mono font-bold" />
                                    <button id="btn-reset-tasa-vuelto-cuenta" type="button" class="text-[10px] bg-gray-100 border border-gray-400 rounded px-1.5 py-0.5 hover:bg-gray-200">
                                        Reset Oficial
                                    </button>
                                </div>
                            </div>
                            <div class="text-right">
                                <span class="text-[10px] font-bold text-gray-500 uppercase block">Divisa USD a Entregar:</span>
                                <span class="font-heading font-black text-base text-brand-purple">
                                    $ ${R(V)} USD
                                </span>
                            </div>
                        </div>
                        `:`
                        <div class="flex items-center justify-between pt-1 border-t border-gray-100 text-xs">
                            <span class="font-bold text-gray-600">Total a Entregar en Bolívares:</span>
                            <span class="font-heading font-black text-base text-brand-black">Bs. ${R(v.vueltoBs)}</span>
                        </div>
                        `}
                    </div>
                    `:`
                    <div class="bg-white border border-gray-300 rounded p-2 text-xs text-gray-700">
                        <p class="font-bold text-emerald-900 mb-0.5">Vuelto Retenido como Saldo a Favor</p>
                        <p class="text-[11px] text-gray-600 leading-tight">
                            El excedente de <b>Bs. ${R(v.vueltoBs)} ($ ${R(v.vueltoUsd)})</b> no genera egreso físico de caja y se asienta en el comprobante como saldo a favor retenido en el negocio.
                        </p>
                    </div>
                    `}
                </div>`:`
            <div class="bg-emerald-50 border-2 border-emerald-600 rounded p-2.5 text-center mb-3">
                <p class="text-xs font-black uppercase text-emerald-800">Total Exactamente Cubierto</p>
                <p class="text-xs text-emerald-700 font-bold">Importe liquidado sin diferencia pendiente.</p>
            </div>`},E=()=>{var H,_;const v=A(),C=b.filter(O=>O.moneda==="USD"),j=b.filter(O=>O.moneda==="BS"),G=u.map((O,I)=>{const B=C.map(N=>`<option value="${N.nombre}" ${N.nombre===O.metodo?"selected":""}>${N.nombre} ($ - Tasa Dinámica)</option>`).join(""),T=`
                        <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                            ${j.map(N=>`<option value="${N.nombre}" ${N.nombre===O.metodo?"selected":""}>${N.nombre} (Bs.)</option>`).join("")}
                        </optgroup>
                        <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                            ${B}
                        </optgroup>
                    `,K=O.tasaCambio>0?O.tasaCambio:t,z=O.moneda==="USD"?O.monto*K:O.monto,Y=t>0?z/t:0;return`
                    <div data-pago-card="${O.id}" class="border-2 border-brand-black rounded-lg p-3 bg-gray-50 mb-2.5">
                        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span class="font-heading font-black text-xs uppercase text-gray-700">
                                Pago #${I+1} · <span class="${O.moneda==="USD"?"text-brand-purple":"text-brand-black"}">${O.moneda==="USD"?"Divisa ($ USD)":"Moneda Nacional (Bs.)"}</span>
                            </span>
                            ${u.length>1?`<button data-eliminar-pago="${O.id}" class="text-xs font-black text-red-600 hover:text-red-800 bg-red-50 border border-red-300 rounded px-2 py-0.5">Eliminar</button>`:""}
                        </div>
                        ${O.moneda==="USD"?`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Divisa</label>
                                <select data-pago-metodo="${O.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${T}
                                </select>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto ($ USD)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">$</span>
                                    <input type="number" step="0.01" min="0.01" max="999999" data-pago-monto="${O.id}" value="${O.monto>0?O.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <div class="flex items-center justify-between mb-0.5">
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase">Tasa (Bs./$)</label>
                                    <button type="button" data-reset-tasa="${O.id}" class="text-[9px] font-black uppercase text-brand-purple hover:underline" title="Restablecer a tasa oficial">Tasa: ${R(t)}</button>
                                </div>
                                <input type="number" step="0.01" min="1" max="100000" data-pago-tasa="${O.id}" value="${K>0?K:t}"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${O.id}" value="${O.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div data-aporte-info="${O.id}" class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-purple">Aporte: Bs. ${R(z)}</span>
                            <span class="text-gray-500 font-mono">Equiv. base: $ ${R(Y)} ${K!==t?`(Tasa: Bs. ${R(K)} vs Base: Bs. ${R(t)})`:""}</span>
                        </div>
                        `:`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-5">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Bolívares</label>
                                <select data-pago-metodo="${O.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${T}
                                </select>
                            </div>
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto (Bs.)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">Bs.</span>
                                    <input type="number" step="0.01" min="0.01" max="999999999" data-pago-monto="${O.id}" value="${O.monto>0?O.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${O.id}" value="${O.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div data-aporte-info="${O.id}" class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-black">Aporte directo: Bs. ${R(O.monto)}</span>
                            <span class="text-gray-500 font-mono">Equiv. base: $ ${R(Y)}</span>
                        </div>
                        `}
                    </div>`}).join(""),V=`<div id="contenedor-estado-balance-cuenta">${f(v)}</div>`;this.modal.innerHTML=`
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
                                ${(H=this.cuentaSeleccionada)==null?void 0:H.etiqueta} ${(_=this.cuentaSeleccionada)!=null&&_.cliente?`· ${this.cuentaSeleccionada.cliente}`:""}
                            </p>
                        </div>
                        <button id="modal-liq-cerrar" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
                    </div>

                    <!-- Resumen del Importe Pendiente -->
                    <div class="bg-brand-gray/30 border-2 border-brand-black rounded-lg p-3 mb-3 flex flex-wrap justify-between items-center gap-2">
                        <div>
                            <span class="text-[10px] font-bold text-gray-600 uppercase block">Saldo Neto a Cobrar</span>
                            <div class="flex items-baseline gap-2">
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${R(r)} USD</span>
                                <span class="font-heading font-black text-xl text-brand-purple">Bs. ${R(v.totalEsperadoBs)}</span>
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
                            Métodos de Pago Aplicados (${u.length})
                        </span>
                        ${G}
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
                    ${h?`
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
                    ${V}

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
                        <button id="modal-liq-ok" ${v.puedeConfirmar?"":"disabled"}
                            class="bg-green-700 hover:bg-green-800 disabled:opacity-30 disabled:cursor-not-allowed text-white font-heading font-black py-2 px-5 rounded border-2 border-brand-black shadow-brutal-sm text-sm">
                            CONFIRMAR COBRO
                        </button>
                    </div>
                </div>
            </div>`,$()},$=()=>{var _,O,I,B,P,T,K,z,Y,N,q;const v=()=>{this.cuentaSeleccionada&&(this.pagosBorradorPorCuenta.set(this.cuentaSeleccionada.ventaId,u),this.resolucionVueltoPorCuenta.set(this.cuentaSeleccionada.ventaId,{estado:g,metodo:x,tasa:S}))},C=()=>{v(),this.modal.innerHTML=""};(_=this.modal.querySelector("#modal-liq-cerrar"))==null||_.addEventListener("click",C),(O=this.modal.querySelector("#modal-liq-cancel"))==null||O.addEventListener("click",C),(I=this.modal.querySelector("#modal-liq-agregar-mas"))==null||I.addEventListener("click",()=>{v(),this.modal.innerHTML=""}),(B=this.modal.querySelector("#btn-vuelto-pagado-cuenta"))==null||B.addEventListener("click",()=>{g="PAGADO",v(),E()}),(P=this.modal.querySelector("#btn-vuelto-retenido-cuenta"))==null||P.addEventListener("click",()=>{g="RETENIDO",v(),E()}),(T=this.modal.querySelector("#select-metodo-vuelto-cuenta"))==null||T.addEventListener("change",L=>{x=L.target.value,v(),E()});const j=this.modal.querySelector("#input-tasa-vuelto-cuenta");if(j&&(j.addEventListener("input",L=>{const M=ae(L.target.value);S=M>0?M:t,v()}),j.addEventListener("blur",()=>{E()})),(K=this.modal.querySelector("#btn-reset-tasa-vuelto-cuenta"))==null||K.addEventListener("click",()=>{S=t,v(),E()}),e){const L=this.modal.querySelector("#deuda-tasa-input"),M=this.modal.querySelector("#btn-tasa-bcv");L&&Ae(L,1e5,9,()=>{const F=ae(L.value);t=Number.isFinite(F)&&F>0?F:c,v(),E()}),M==null||M.addEventListener("click",()=>{t=c,v(),E()})}this.modal.querySelectorAll("select[data-pago-metodo]").forEach(L=>{L.addEventListener("change",M=>{const F=L.dataset.pagoMetodo,te=M.target.value,Z=u.find(oe=>oe.id===F);if(Z){const oe=b.find(le=>le.nombre===te),de=(oe==null?void 0:oe.moneda)||"BS";Z.moneda=de,Z.tasaCambio=t,u.length===1?Z.monto=Z.moneda==="USD"?r:Number((r*t).toFixed(2)):de!==Z.moneda&&(de==="USD"?Z.monto=Number((t>0?Z.monto/t:0).toFixed(2)):Z.monto=Number((Z.monto*t).toFixed(2))),Z.metodo=te,v(),E()}})});const G=()=>{var te,Z,oe,de;const L=A(),M=this.modal.querySelector("#contenedor-estado-balance-cuenta");if(M){M.innerHTML=f(L),(te=this.modal.querySelector("#btn-vuelto-pagado-cuenta"))==null||te.addEventListener("click",()=>{g="PAGADO",v(),E()}),(Z=this.modal.querySelector("#btn-vuelto-retenido-cuenta"))==null||Z.addEventListener("click",()=>{g="RETENIDO",v(),E()}),(oe=this.modal.querySelector("#select-metodo-vuelto-cuenta"))==null||oe.addEventListener("change",he=>{x=he.target.value,v(),E()});const le=this.modal.querySelector("#input-tasa-vuelto-cuenta");le&&(le.addEventListener("input",he=>{const ge=ae(he.target.value);S=ge>0?ge:t,v()}),le.addEventListener("blur",()=>E())),(de=this.modal.querySelector("#btn-reset-tasa-vuelto-cuenta"))==null||de.addEventListener("click",()=>{S=t,v(),E()})}const F=this.modal.querySelector("#modal-liq-ok");F&&(F.disabled=!L.puedeConfirmar)},V=L=>{const M=this.modal.querySelector(`div[data-aporte-info-cuenta="${L.id}"]`);if(!M)return;const F=L.tasaCambio>0?L.tasaCambio:t,te=L.moneda==="USD"?L.monto*F:L.monto,Z=t>0?te/t:0;L.moneda==="USD"?M.innerHTML=`
                        <span class="font-bold text-brand-purple">Aporte: Bs. ${R(te)}</span>
                        <span class="text-gray-500 font-mono">Equiv. base: $ ${R(Z)} ${F!==t?`(Tasa: Bs. ${R(F)} vs Base: Bs. ${R(t)})`:""}</span>
                    `:M.innerHTML=`
                        <span class="font-bold text-brand-black">Aporte directo: Bs. ${R(L.monto)}</span>
                        <span class="text-gray-500 font-mono">Equiv. base: $ ${R(Z)}</span>
                    `};this.modal.querySelectorAll("input[data-pago-tasa]").forEach(L=>{L.addEventListener("input",M=>{const F=L.dataset.pagoTasa,te=ae(M.target.value),Z=u.find(oe=>oe.id===F);Z&&(Z.tasaCambio=te>0?te:t,v(),V(Z),G())}),L.addEventListener("keydown",M=>{var F;M.key==="Enter"&&A().puedeConfirmar&&((F=this.modal.querySelector("#modal-liq-ok"))==null||F.click())}),L.addEventListener("blur",()=>{E()})}),this.modal.querySelectorAll("button[data-reset-tasa-cuenta]").forEach(L=>{L.addEventListener("click",()=>{const M=L.dataset.resetTasaCuenta,F=u.find(te=>te.id===M);F&&(F.tasaCambio=t,v(),E())})}),this.modal.querySelectorAll("input[data-pago-monto]").forEach(L=>{L.addEventListener("input",M=>{const F=L.dataset.pagoMonto,te=ae(M.target.value),Z=u.find(oe=>oe.id===F);Z&&(Z.monto=te,v(),V(Z),G())}),L.addEventListener("keydown",M=>{var F;M.key==="Enter"&&A().puedeConfirmar&&((F=this.modal.querySelector("#modal-liq-ok"))==null||F.click())}),L.addEventListener("blur",()=>{E()})}),this.modal.querySelectorAll("input[data-pago-ref]").forEach(L=>{L.addEventListener("input",M=>{const F=L.dataset.pagoRef,te=M.target.value,Z=u.find(oe=>oe.id===F);Z&&(Z.referencia=te,v())})}),this.modal.querySelectorAll("button[data-eliminar-pago]").forEach(L=>{L.addEventListener("click",()=>{const M=L.dataset.eliminarPago;u=u.filter(F=>F.id!==M),v(),E()})}),(z=this.modal.querySelector("#btn-agregar-pago-cuenta"))==null||z.addEventListener("click",()=>{let L=A();const M="p-"+Math.random().toString(36).slice(2,7),F=b.find(Z=>!u.some(oe=>oe.metodo===Z.nombre))||b[0]||{nombre:"BS.EFEC.",moneda:"BS"};if(L.faltanteBs<=.01&&u.length===1&&u[0]){const Z=u[0],oe=Z.tasaCambio>0?Z.tasaCambio:t,de=Z.moneda==="USD"?Z.monto*oe:Z.monto,le=Math.round(de/2*100)/100;Z.monto=Z.moneda==="USD"?oe>0?Number((le/oe).toFixed(2)):0:le,L=A()}const te=L.faltanteBs>0?L.faltanteBs:0;u.push({id:M,metodo:F.nombre,moneda:F.moneda,monto:F.moneda==="USD"?t>0?Number((te/t).toFixed(2)):0:te,tasaCambio:t,referencia:""}),v(),E()}),(Y=this.modal.querySelector("#btn-toggle-nuevo-metodo-cuenta"))==null||Y.addEventListener("click",()=>{h=!h,E()}),(N=this.modal.querySelector("#btn-guardar-nuevo-metodo-cuenta"))==null||N.addEventListener("click",()=>{(async()=>{const L=this.modal.querySelector("#input-nuevo-metodo-nombre-cuenta"),M=(L==null?void 0:L.value.trim())||"",F=this.modal.querySelector('input[name="radio-nuevo-metodo-moneda-cuenta"][value="USD"]'),te=F!=null&&F.checked?"USD":"BS";if(M)try{b=await D.crearMetodoPago(M,te),h=!1,E()}catch{}})()});let H=!1;(q=this.modal.querySelector("#modal-liq-ok"))==null||q.addEventListener("click",()=>{H||(H=!0,(async()=>{if(!this.cuentaSeleccionada)return;const L=this.modal.querySelector("#cobro-error-cuenta");try{const M=u.filter(se=>se.monto>0).map(se=>{const ye=se.moneda==="USD"&&se.tasaCambio>0?se.tasaCambio:t,Ue=se.moneda==="USD"?se.monto*ye:se.monto,Fe=t>0?Ue/t:0;return{metodo:se.metodo,moneda:se.moneda,montoUsd:(se.moneda==="USD"?se.monto:Fe).toFixed(2),montoBs:Ue.toFixed(2),tasaCambio:se.moneda==="USD"?ye.toFixed(2):void 0,referencia:se.referencia.trim()||void 0}});if(M.length===0)throw new Error("Debe especificar al menos un pago válido.");const F=A(),te=M.reduce((se,ye)=>se+Number(ye.montoBs),0),Z=b.find(se=>se.nombre===x),oe=(Z==null?void 0:Z.moneda)==="USD",de=oe?S>0?S:t:void 0,le=oe&&de?(F.vueltoBs/de).toFixed(2):F.vueltoUsd.toFixed(2),he={estado:F.vueltoBs>.009?g:"SIN_VUELTO",metodo:F.vueltoBs>.009&&g==="PAGADO"?x:void 0,montoBs:F.vueltoBs>.009?F.vueltoBs.toFixed(2):void 0,montoUsd:F.vueltoBs>.009?le:void 0,tasa:F.vueltoBs>.009&&g==="PAGADO"&&de?de.toFixed(2):void 0},ge=this.cuentaSeleccionada.ventaId;await D.cerrarCuenta(ge,te.toFixed(2),t.toFixed(4),M,he),this.pagosBorradorPorCuenta.delete(ge),this.resolucionVueltoPorCuenta.delete(ge),this.cuentaSeleccionada=null,this.modal.innerHTML="",this.render()}catch(M){H=!1,L&&(L.textContent=M instanceof Error?M.message.replace(/"/g,""):String(M),L.classList.remove("hidden"))}})())})};E()}mostrarToast(e,o="info"){var i;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},r=document.createElement("div");r.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,r.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(i=r.querySelector("button"))==null||i.addEventListener("click",()=>r.remove()),document.body.appendChild(r),setTimeout(()=>r.remove(),8e3)}}const xe=(l,e,o,a)=>{l.maxLength=o,l.addEventListener("input",()=>{let r=l.value.replace(/[^0-9.,]/g,"");const i=r.split(/[.,]/);i.length>2?r=i[0]+"."+i.slice(1).join(""):i.length===2&&(r=i[0]+"."+i[1].slice(0,2)),r.length>o&&(r=r.slice(0,o));const c=parseFloat(r.replace(",","."));Number.isFinite(c)&&c>e&&(r=String(e)),l.value!==r&&(l.value=r),a&&a()})},De=(l,e,o,a,r)=>{l.maxLength=a,l.addEventListener("input",()=>{let i=l.value.replace(/[^0-9]/g,"");i.length>a&&(i=i.slice(0,a));const c=parseInt(i,10);Number.isFinite(c)&&c>o&&(i=String(o)),l.value!==i&&(l.value=i),r&&r()}),l.addEventListener("blur",()=>{const i=parseInt(l.value,10);Number.isFinite(i)&&i<e&&(l.value=String(e),r&&r())})},ve=(l,e,o=!1)=>{l.maxLength=e,l.addEventListener("input",()=>{let a=o?l.value.replace(/[<>{}\\]/g,""):l.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ .,/_#-]/g,"");a.length>e&&(a=a.slice(0,e)),l.value!==a&&(l.value=a)})};class lt{constructor(e,o,a=!0){U(this,"contenedor");U(this,"modelo");U(this,"categorias",[]);U(this,"tasasImpuestos",[]);U(this,"productos",[]);U(this,"busquedaRepo","");U(this,"busquedaCatalogo","");U(this,"filtroCategoriaRepo","todas");U(this,"filtroCategoriaCatalogo","todas");U(this,"tabActiva","alta");U(this,"semaforoStock",{rojoMax:5,amarilloMax:15});U(this,"POR_PAGINA_CAT",40);U(this,"POR_PAGINA_REPO",24);U(this,"paginaCat",1);U(this,"paginaRepo",1);this.duenoAutenticado=a,this.contenedor=e,this.modelo=o,this.modelo}getUnitLabel(e){return e.unidad==="kg"?"kg":e.unidad==="ml"?"ml":e.unidad==="un"?"un.":e.capacidades&2?"kg":"un."}getNombreCategoria(e){if(!e)return"General";const o=this.categorias.find(a=>a.id===e);return o?o.nombre:"General"}getConteoCategorias(){const e={todas:this.productos.length};return this.categorias.forEach(o=>{e[o.id]=0}),e["cat-general"]===void 0&&(e["cat-general"]=0),this.productos.forEach(o=>{const a=o.categoriaId||"cat-general";e[a]=(e[a]||0)+1}),e}async render(e){var d;e&&(this.tabActiva=e);const[o,a,r,i]=await Promise.all([D.categorias(),D.tasasImpuestos(),D.productos(),D.obtenerSemaforoStock()]);this.categorias=o,this.tasasImpuestos=a,this.productos=r,this.semaforoStock=i;const c=this.getConteoCategorias(),b="Nombre comercial del producto o servicio...",n=((d=this.modelo.getConfig())==null?void 0:d.privacidadInventario)&&!this.duenoAutenticado;this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Control de Inventario</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Alta de productos, reposición de mercancía, categorías y tasas tributarias</p>
            </div>
            ${n?'<div class="bg-amber-100 border-2 border-amber-400 rounded px-3 py-1 text-xs font-bold text-amber-800">MODO OPERADOR — Precios y stock ocultos. Acceda como administrador para ver información sensible.</div>':""}
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
                                ${this.categorias.map(s=>`<option value="${s.id}">${s.nombre}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Tasa de Impuesto</label>
                            <select id="prod-impuesto" class="w-full border-2 border-brand-black rounded px-3 py-2.5 bg-white font-bold">
                                ${this.tasasImpuestos.map(s=>`<option value="${s.porcentaje}">${s.nombre}</option>`).join("")}
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
                            ${this.categorias.map(s=>`<option value="${s.id}" ${this.filtroCategoriaCatalogo===s.id?"selected":""}>${s.nombre} (${c[s.id]||0} prods)</option>`).join("")}
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
                    ${this.categorias.map(s=>{const u=c[s.id]||0,p=this.filtroCategoriaRepo===s.id;return`
                        <button data-cat-chip="${s.id}" class="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors ${p?"bg-brand-black text-white":"bg-gray-100 text-brand-black hover:bg-gray-200"}">
                            ${s.nombre} (${u})
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
                    ${this.categorias.map(s=>{const u=c[s.id]||0;return`
                        <div class="flex justify-between items-center border-2 border-brand-black rounded-lg p-3 bg-gray-50">
                            <div>
                                <span class="font-bold text-sm text-brand-black">${s.nombre}</span>
                                <p class="text-[11px] font-bold text-gray-500">${u} ${u===1?"producto asociado":"productos asociados"}</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs font-black px-2 py-0.5 rounded border border-brand-black ${u>0?"bg-amber-100 text-amber-900":"bg-gray-200 text-gray-600"}">
                                    ${u} prods.
                                </span>
                                <button data-del-cat="${s.id}" class="text-xs font-black text-red-600 hover:text-white hover:bg-red-600 border border-red-300 rounded px-2 py-1 transition-colors">Eliminar</button>
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
                    ${this.tasasImpuestos.map(s=>`
                        <div class="flex justify-between items-center border border-brand-black rounded p-2.5 bg-gray-50">
                            <span class="font-bold text-sm">${s.nombre} (${s.porcentaje}%)</span>
                            ${s.porcentaje==="0"||s.porcentaje==="16"?'<span class="text-xs text-gray-400 font-bold">Por defecto</span>':`<button data-del-tax="${s.id}" class="text-xs font-black text-red-600 hover:underline">Eliminar</button>`}
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>`,this.conectarEventos(),this.renderCatalogoLista(),this.renderRepoLista()}conectarEventos(){var B,P,T,K,z,Y;const e=document.getElementById("tab-alta"),o=document.getElementById("tab-stock"),a=document.getElementById("tab-ajustes"),r=document.getElementById("inv-seccion-alta"),i=document.getElementById("inv-seccion-stock"),c=document.getElementById("inv-seccion-ajustes"),b=(N,q,L)=>{this.tabActiva=N,[e,o,a].forEach(M=>{M&&(M.className="w-36 sm:w-48 h-9 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0")}),[r,i,c].forEach(M=>{M==null||M.classList.remove("block"),M==null||M.classList.add("hidden")}),q&&L&&(q.className="w-36 sm:w-48 h-9 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white transition-colors shrink-0",L.classList.remove("hidden"),L.classList.add("block"))};e==null||e.addEventListener("click",()=>b("alta",e,r)),o==null||o.addEventListener("click",()=>{b("stock",o,i),this.renderRepoLista()}),a==null||a.addEventListener("click",()=>b("ajustes",a,c));const t=document.getElementById("prod-precio-bruto"),n=document.getElementById("prod-margen"),d=document.getElementById("prod-impuesto"),s=document.getElementById("prod-precio-neto"),u=N=>{if(!N)return 0;const q=N.trim().replace(",","."),L=parseFloat(q);return Number.isFinite(L)&&!isNaN(L)?L:0},p=()=>{if(!t||!s||!n||!d)return;const N=u(t.value),q=u(n.value)/100,L=u(d.value)/100;if(N>0){const F=N*(1+q)*(1+L);s.value=F.toFixed(2)}},g=()=>{if(!t||!s||!n||!d)return;const N=u(s.value),q=u(t.value),L=u(n.value)/100,M=u(d.value)/100;if(N>0){const F=N/(1+M);if(q>0){const te=(F-q)/q*100;n.value=Math.max(0,Math.round(te*10)/10).toFixed(1)}else L>0&&(t.value=(F/(1+L)).toFixed(2))}},x=document.getElementById("prod-stock"),S=document.getElementById("prod-nombre"),h=document.getElementById("prod-unidad"),A=document.getElementById("cat-nombre"),f=document.getElementById("tax-nombre"),E=document.getElementById("tax-pct"),$=document.getElementById("cat-buscar-filtro"),k=document.getElementById("repo-buscar"),w=document.getElementById("alta-prod-msg");S&&ve(S,64),t&&xe(t,99999.99,8,p),n&&xe(n,999,5,p),s&&xe(s,99999.99,8,g),x&&xe(x,99999,7),A&&ve(A,32),f&&ve(f,32),E&&xe(E,100,5),$&&ve($,40),k&&ve(k,40),d==null||d.addEventListener("change",p);const y=()=>{w&&!w.classList.contains("hidden")&&w.style.color!=="#00823B"&&(w.classList.add("hidden"),w.textContent="")};S==null||S.addEventListener("input",y),s==null||s.addEventListener("input",y),x==null||x.addEventListener("input",y),h==null||h.addEventListener("change",y);const v=document.getElementById("prod-sin-stock"),C=document.getElementById("box-stock-inicial");v==null||v.addEventListener("change",()=>{y(),C&&(C.style.opacity=v.checked?"0.3":"1",C.querySelector("input").disabled=v.checked)});const j=document.getElementById("prod-es-caja"),G=document.getElementById("box-caja-config"),V=document.getElementById("prod-unidades-caja"),H=document.getElementById("prod-stock-cajas");j==null||j.addEventListener("change",()=>{y(),G&&(j.checked?G.classList.remove("hidden"):G.classList.add("hidden"))});const _=()=>{if(j!=null&&j.checked&&H&&V&&x){const N=parseInt(H.value,10),q=parseInt(V.value,10);Number.isFinite(N)&&N>=0&&Number.isFinite(q)&&q>1&&(x.value=String(N*q))}};V&&De(V,2,1e3,4,_),H&&De(H,0,9999,4,_);const O=document.getElementById("prod-tiene-paquete"),I=document.getElementById("box-paquete-config");O==null||O.addEventListener("change",()=>{y(),I&&(O.checked?I.classList.remove("hidden"):I.classList.add("hidden"))}),H==null||H.addEventListener("input",_),V==null||V.addEventListener("input",_),(B=document.getElementById("form-nuevo-producto"))==null||B.addEventListener("submit",N=>{N.preventDefault(),this.guardarProducto()}),(P=document.getElementById("cat-buscar-filtro"))==null||P.addEventListener("input",N=>{this.busquedaCatalogo=N.target.value.trim().toLowerCase(),this.paginaCat=1,this.renderCatalogoLista()}),(T=document.getElementById("cat-filtro-lateral"))==null||T.addEventListener("change",N=>{this.filtroCategoriaCatalogo=N.target.value,this.paginaCat=1,this.renderCatalogoLista()}),(K=document.getElementById("repo-buscar"))==null||K.addEventListener("input",N=>{this.busquedaRepo=N.target.value.trim().toLowerCase(),this.paginaRepo=1,this.renderRepoLista()}),this.contenedor.querySelectorAll("[data-cat-chip]").forEach(N=>{N.addEventListener("click",()=>{const q=N.dataset.catChip||"todas";this.filtroCategoriaRepo=q,this.paginaRepo=1,this.contenedor.querySelectorAll("[data-cat-chip]").forEach(L=>{(L.dataset.catChip||"todas")===q?L.className="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors bg-brand-black text-white":L.className="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors bg-gray-100 text-brand-black hover:bg-gray-200"}),this.renderRepoLista()})}),(z=document.getElementById("form-crear-cat"))==null||z.addEventListener("submit",N=>{N.preventDefault();const q=document.getElementById("cat-nombre");q!=null&&q.value.trim()&&D.crearCategoria(q.value.trim()).then(()=>void this.render("ajustes"))}),this.contenedor.querySelectorAll("[data-del-cat]").forEach(N=>{N.addEventListener("click",async()=>{var M;const q=N.dataset.delCat;if(!q)return;if(((M=this.modelo.getConfig())==null?void 0:M.privacidadInventario)&&!this.duenoAutenticado){be("Acción no permitida en modo operador. Solicite al Dueño(a).","error");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const F=await pe("Acción protegida. Ingrese el PIN de Administrador(a) / Dueño(a):","","AUTENTICACIÓN DUEÑO(A)");if(!F||!await this.modelo.verificarPin(F)){be("PIN incorrecto o no suministrado. Acción cancelada.","error");return}}await ce("¿Seguro que desea eliminar esta categoría? Los productos asociados quedarán sin categoría.","ELIMINAR CATEGORÍA")&&D.eliminarCategoria(q).then(()=>void this.render("ajustes"))})}),(Y=document.getElementById("form-crear-tax"))==null||Y.addEventListener("submit",N=>{N.preventDefault();const q=document.getElementById("tax-nombre"),L=document.getElementById("tax-pct");q!=null&&q.value.trim()&&L&&D.crearTasaImpuesto(q.value.trim(),Number(L.value)).then(()=>void this.render("ajustes"))}),this.contenedor.querySelectorAll("[data-del-tax]").forEach(N=>{N.addEventListener("click",()=>{const q=N.dataset.delTax;q&&D.eliminarTasaImpuesto(q).then(()=>void this.render("ajustes"))})})}renderCatalogoLista(){var c,b,t,n;const e=document.getElementById("cat-lista-items");if(!e)return;const o=this.productos.filter(d=>{const s=!this.busquedaCatalogo||d.nombre.toLowerCase().includes(this.busquedaCatalogo)||d.sku.toLowerCase().includes(this.busquedaCatalogo),u=this.filtroCategoriaCatalogo==="todas"||(d.categoriaId||"cat-general")===this.filtroCategoriaCatalogo;return s&&u});if(o.length===0){e.innerHTML='<p class="py-4 text-center text-gray-400 font-bold text-xs">Sin coincidencias en esta categoría.</p>',(c=document.getElementById("paginacion-cat"))==null||c.remove();return}const a=Math.ceil(o.length/this.POR_PAGINA_CAT);this.paginaCat>a&&(this.paginaCat=a);const r=(this.paginaCat-1)*this.POR_PAGINA_CAT,i=o.slice(r,r+this.POR_PAGINA_CAT);if(e.innerHTML=i.map(d=>{var h;const s=Number(d.stock),u=d.sinStock?"bg-purple-100 text-purple-900":s<=this.semaforoStock.rojoMax?"bg-red-100 text-red-900":s<=this.semaforoStock.amarilloMax?"bg-yellow-100 text-yellow-900":"bg-green-100 text-green-900",p=this.getUnitLabel(d),g=this.getNombreCategoria(d.categoriaId),S=((h=this.modelo.getConfig())==null?void 0:h.privacidadInventario)&&!this.duenoAutenticado;return`
            <div class="border border-brand-black rounded p-2 bg-gray-50 flex justify-between items-center text-xs">
                <div class="min-w-0 flex-1 pr-2">
                    <p class="font-bold truncate text-brand-black" title="${d.nombre}">${d.nombre}</p>
                    <p class="text-[10px] text-gray-500 font-bold">
                        <span class="text-brand-purple font-black">${g}</span> · ${S?"•••":`$${Number(d.precioUsd).toFixed(2)}`} · IVA ${d.impuestoPct}%
                    </p>
                </div>
                <div class="text-right shrink-0">
                    <span class="font-black px-2 py-0.5 rounded border border-brand-black text-[10px] inline-block ${u}">
                        ${S?'<span class="text-gray-400">•••</span>':d.sinStock?"LIBRE":d.esCaja&&d.unidadesPorCaja&&d.unidadesPorCaja>1?`${Math.floor(s/d.unidadesPorCaja)} cj. + ${s%d.unidadesPorCaja} un. (${s} un.)`:`${s} ${p}`}
                    </span>
                </div>
            </div>`}).join(""),(b=document.getElementById("paginacion-cat"))==null||b.remove(),a>1){const d=document.createElement("div");d.id="paginacion-cat",d.className="flex items-center justify-between mt-2 gap-2 flex-wrap",d.innerHTML=`
                <span class="text-[10px] font-bold text-gray-500">Pag. ${this.paginaCat} de ${a} · ${o.length} productos</span>
                <div class="flex gap-1">
                    <button id="cat-pag-ant" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCat===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANT.</button>
                    <button id="cat-pag-sig" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCat===a?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIG.</button>
                </div>`,e.insertAdjacentElement("afterend",d),(t=document.getElementById("cat-pag-ant"))==null||t.addEventListener("click",()=>{this.paginaCat>1&&(this.paginaCat--,this.renderCatalogoLista())}),(n=document.getElementById("cat-pag-sig"))==null||n.addEventListener("click",()=>{this.paginaCat<a&&(this.paginaCat++,this.renderCatalogoLista())})}}renderRepoLista(){var t,n,d;const e=document.getElementById("repo-lista");if(!e)return;const o=this.productos.filter(s=>{const u=!this.busquedaRepo||s.nombre.toLowerCase().includes(this.busquedaRepo)||s.sku.toLowerCase().includes(this.busquedaRepo),p=this.filtroCategoriaRepo==="todas"||(s.categoriaId||"cat-general")===this.filtroCategoriaRepo;return u&&p}),a=document.getElementById("repo-contador-estado");if(a){const s=this.filtroCategoriaRepo==="todas"?"en depósito":`en ${this.getNombreCategoria(this.filtroCategoriaRepo)}`;a.textContent=`${o.length} de ${this.productos.length} artículos ${s}`}if(o.length===0){e.innerHTML='<p class="col-span-full py-8 text-center text-gray-500 font-bold">No se encontraron productos en la categoría seleccionada.</p>';return}const r=this.semaforoStock,i=Math.ceil(o.length/this.POR_PAGINA_REPO);this.paginaRepo>i&&(this.paginaRepo=i);const c=(this.paginaRepo-1)*this.POR_PAGINA_REPO,b=o.slice(c,c+this.POR_PAGINA_REPO);if(e.innerHTML=b.map(s=>{var f;const u=Number(s.stock),p=s.sinStock?"text-purple-700":u<=r.rojoMax?"text-red-600":u<=r.amarilloMax?"text-amber-600":"text-emerald-700",g=this.getUnitLabel(s),x=this.getNombreCategoria(s.categoriaId),S=s.sinStock?"Venta libre":s.esCaja&&s.unidadesPorCaja&&s.unidadesPorCaja>1?`${Math.floor(u/s.unidadesPorCaja)} cajas y ${u%s.unidadesPorCaja} un. (${u} un.)`:`${u} ${g}`,A=((f=this.modelo.getConfig())==null?void 0:f.privacidadInventario)&&!this.duenoAutenticado;return`
            <div class="border-2 border-brand-black rounded-lg p-3 bg-white shadow-sm flex flex-col justify-between h-[175px] min-h-[175px] max-h-[175px] box-border overflow-hidden">
                <div class="min-w-0">
                    <div class="flex justify-between items-start gap-1">
                        <div class="min-w-0 flex-1">
                            <span class="text-[9px] font-black uppercase tracking-wider text-brand-purple bg-purple-50 border border-purple-200 rounded px-1.5 py-0.2 inline-block mb-0.5 truncate max-w-[150px]">${x}</span>
                            <h4 class="font-heading font-black text-sm truncate" title="${s.nombre}">${s.nombre}</h4>
                        </div>
                        <button data-repo-del="${s.sku}" title="Eliminar producto del catálogo" class="w-5 h-5 rounded border border-brand-black text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center font-black text-xs shrink-0">&times;</button>
                    </div>
                    <p class="text-xs font-bold text-gray-500 mt-0.5">${A?'Stock: <span class="font-black text-gray-400">•••</span>':`Precio: $${Number(s.precioUsd).toFixed(2)} · Stock: <span class="font-black ${p}">${S}</span>`}</p>
                </div>
                ${s.sinStock?'<p class="text-[11px] text-purple-700 font-bold mt-auto">Sin control de existencias físicas.</p>':`
                <div class="flex items-center gap-1 mt-auto pt-2 border-t border-gray-100">
                    ${s.esCaja&&s.unidadesPorCaja&&s.unidadesPorCaja>1?`
                        <select data-repo-tipo="${s.sku}" class="h-8 border-2 border-brand-black rounded px-1 py-0.5 font-bold text-[10px] shrink-0 bg-white">
                            <option value="unidad">Unidad</option>
                            <option value="caja">Caja (${s.unidadesPorCaja} un.)</option>
                        </select>
                    `:""}
                    <input type="number" step="${g==="kg"||g==="ml"?"0.1":"1"}" min="${g==="kg"||g==="ml"?"0.01":"1"}" max="9999" maxlength="5" placeholder="Cant." data-repo-cant="${s.sku}" class="w-14 h-8 border-2 border-brand-black rounded px-1.5 py-0.5 font-bold text-xs shrink-0" />
                    <button data-repo-in="${s.sku}" title="Sumar stock por reposición de compra" class="h-8 bg-green-200 hover:bg-green-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">+ ENTRADA</button>
                    <button data-repo-red="${s.sku}" title="Reducir stock por ajuste de inventario regular" class="h-8 bg-amber-200 hover:bg-amber-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">- REDUCIR</button>
                    <button data-repo-out="${s.sku}" title="Registrar como merma o daño físico" class="h-8 bg-red-200 hover:bg-red-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">- MERMA</button>
                </div>`}
            </div>`}).join(""),(t=document.getElementById("paginacion-repo"))==null||t.remove(),i>1){const s=document.createElement("div");s.id="paginacion-repo",s.className="col-span-full flex items-center justify-between mt-3 gap-3 flex-wrap",s.innerHTML=`
                <span class="text-xs font-bold text-gray-500">Pagina ${this.paginaRepo} de ${i} · ${o.length} productos</span>
                <div class="flex gap-2">
                    <button id="repo-pag-ant" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaRepo===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANTERIOR</button>
                    <button id="repo-pag-sig" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaRepo===i?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIGUIENTE</button>
                </div>`,e.insertAdjacentElement("afterend",s),(n=document.getElementById("repo-pag-ant"))==null||n.addEventListener("click",()=>{this.paginaRepo>1&&(this.paginaRepo--,this.renderRepoLista())}),(d=document.getElementById("repo-pag-sig"))==null||d.addEventListener("click",()=>{this.paginaRepo<i&&(this.paginaRepo++,this.renderRepoLista())})}e.querySelectorAll("input[data-repo-cant]").forEach(s=>{xe(s,9999,5)}),e.querySelectorAll("[data-repo-del]").forEach(s=>{s.addEventListener("click",async()=>{var S;const u=s.dataset.repoDel,p=this.productos.find(h=>h.sku===u);if(!u||!p)return;if(((S=this.modelo.getConfig())==null?void 0:S.privacidadInventario)&&!this.duenoAutenticado){be("Acción no permitida en modo operador. Solicite al Dueño(a).","error");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const h=await pe("Acción protegida. Ingrese el PIN de Administrador(a) / Dueño(a):","","AUTENTICACIÓN DUEÑO(A)");if(!h||!await this.modelo.verificarPin(h)){be("PIN incorrecto o no suministrado. Acción cancelada.","error");return}}await ce(`¿Seguro que deseas eliminar permanentemente el producto "${p.nombre}" del catálogo?`,"ELIMINAR PRODUCTO")&&D.eliminarProducto(u).then(()=>{D.productos().then(h=>{this.productos=h,this.renderRepoLista(),this.renderCatalogoLista();const A=document.getElementById("repo-contador-estado");A&&(A.textContent=`${this.productos.length} artículos en depósito`)})})})}),e.querySelectorAll("[data-repo-in]").forEach(s=>{s.addEventListener("click",async()=>{var x;const u=s.dataset.repoIn,p=e.querySelector(`input[data-repo-cant="${u}"]`),g=p==null?void 0:p.value;if(u&&g&&Number(g)>0&&Number(g)<=9999){if(((x=this.modelo.getConfig())==null?void 0:x.privacidadInventario)&&!this.duenoAutenticado){be("Acción no permitida en modo operador. Solicite al Dueño(a).","error");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const $=await pe("Acción de inventario protegida. Ingrese el PIN de Administrador(a) / Dueño(a):","","AUTENTICACIÓN DUEÑO(A)");if(!$||!await this.modelo.verificarPin($)){be("PIN incorrecto o no suministrado. Operación cancelada.","error");return}}const h=e.querySelector(`select[data-repo-tipo="${u}"]`),A=(h==null?void 0:h.value)||"unidad",f=this.productos.find($=>$.sku===u);let E=Number(g);A==="caja"&&(f!=null&&f.esCaja)&&(f!=null&&f.unidadesPorCaja)&&f.unidadesPorCaja>1&&(E=E*f.unidadesPorCaja),D.compraStock(u,String(E)).then(()=>{D.productos().then($=>{this.productos=$,this.renderRepoLista(),this.renderCatalogoLista()})})}})}),e.querySelectorAll("[data-repo-red]").forEach(s=>{s.addEventListener("click",async()=>{var x;const u=s.dataset.repoRed,p=e.querySelector(`input[data-repo-cant="${u}"]`),g=p==null?void 0:p.value;if(u&&g&&Number(g)>0&&Number(g)<=9999){if(((x=this.modelo.getConfig())==null?void 0:x.privacidadInventario)&&!this.duenoAutenticado){be("Acción no permitida en modo operador. Solicite al Dueño(a).","error");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const $=await pe("Acción de inventario protegida. Ingrese el PIN de Administrador(a) / Dueño(a):","","AUTENTICACIÓN DUEÑO(A)");if(!$||!await this.modelo.verificarPin($)){be("PIN incorrecto o no suministrado. Operación cancelada.","error");return}}const h=e.querySelector(`select[data-repo-tipo="${u}"]`),A=(h==null?void 0:h.value)||"unidad",f=this.productos.find($=>$.sku===u);let E=Number(g);A==="caja"&&(f!=null&&f.esCaja)&&(f!=null&&f.unidadesPorCaja)&&f.unidadesPorCaja>1&&(E=E*f.unidadesPorCaja),D.reducirStock(u,String(E)).then(()=>{D.productos().then($=>{this.productos=$,this.renderRepoLista(),this.renderCatalogoLista()})})}})}),e.querySelectorAll("[data-repo-out]").forEach(s=>{s.addEventListener("click",async()=>{var x;const u=s.dataset.repoOut,p=e.querySelector(`input[data-repo-cant="${u}"]`),g=p==null?void 0:p.value;if(u&&g&&Number(g)>0&&Number(g)<=9999){if(((x=this.modelo.getConfig())==null?void 0:x.privacidadInventario)&&!this.duenoAutenticado){be("Acción no permitida en modo operador. Solicite al Dueño(a).","error");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const $=await pe("Acción de inventario protegida. Ingrese el PIN de Administrador(a) / Dueño(a):","","AUTENTICACIÓN DUEÑO(A)");if(!$||!await this.modelo.verificarPin($)){be("PIN incorrecto o no suministrado. Operación cancelada.","error");return}}const h=e.querySelector(`select[data-repo-tipo="${u}"]`),A=(h==null?void 0:h.value)||"unidad",f=this.productos.find($=>$.sku===u);let E=Number(g);A==="caja"&&(f!=null&&f.esCaja)&&(f!=null&&f.unidadesPorCaja)&&f.unidadesPorCaja>1&&(E=E*f.unidadesPorCaja),D.merma(u,String(E),null).then(()=>{D.productos().then($=>{this.productos=$,this.renderRepoLista(),this.renderCatalogoLista()})})}})})}async guardarProducto(){var G;const e=document.getElementById("prod-nombre"),o=document.getElementById("prod-categoria"),a=document.getElementById("prod-impuesto"),r=document.getElementById("prod-precio-bruto"),i=document.getElementById("prod-margen"),c=document.getElementById("prod-precio-neto"),b=document.getElementById("prod-stock"),t=((G=document.getElementById("prod-unidad"))==null?void 0:G.value)||"un",n=document.getElementById("prod-sin-stock"),d=document.getElementById("alta-prod-msg"),s=V=>{if(!V)return 0;const H=V.trim().replace(",","."),_=parseFloat(H);return Number.isFinite(_)&&!isNaN(_)?_:0};if(d&&(d.classList.add("hidden"),d.textContent=""),!(e!=null&&e.value.trim())){d&&(d.textContent="El nombre del producto o servicio es obligatorio.",d.style.color="#C60C15",d.classList.remove("hidden"),e==null||e.focus());return}const u=s(c==null?void 0:c.value);if(u<=0||u>99999.99){d&&(d.textContent="El precio neto final debe ser un monto positivo entre $0.01 y $99,999.99 USD.",d.style.color="#C60C15",d.classList.remove("hidden"),c==null||c.focus());return}const p=s(b==null?void 0:b.value),g=(n==null?void 0:n.checked)||!1;if(!g&&(p<0||p>99999)){d&&(d.textContent="El stock inicial debe estar comprendido entre 0 y 99,999 unidades.",d.style.color="#C60C15",d.classList.remove("hidden"),b==null||b.focus());return}if(!g&&t==="un"&&(!Number.isInteger(p)||p%1!==0)){d&&(d.textContent='Los productos vendidos por Unidad (un.) deben tener un stock entero exacto (ej: 10). Para registrar fracciones o decimales, seleccione Tipo de Medida "Por Peso (kg)" o "Por Volumen (ml)".',d.style.color="#C60C15",d.classList.remove("hidden"),b==null||b.focus());return}const x=s((a==null?void 0:a.value)||"0"),S=s((i==null?void 0:i.value)||"30");let h=s(r==null?void 0:r.value);h<=0&&(h=u/(1+x/100)/(1+S/100));const A=document.getElementById("prod-es-caja"),f=document.getElementById("prod-unidades-caja"),E=(A==null?void 0:A.checked)||!1,$=E&&f?Math.max(2,parseInt(f.value,10)||12):void 0,k=document.getElementById("prod-tiene-paquete"),w=document.getElementById("prod-nombre-paquete"),y=document.getElementById("prod-precio-paquete"),v=(k==null?void 0:k.checked)||!1,C=v&&w?w.value.trim():void 0,j=v&&y?s(y.value).toFixed(2):void 0;try{await D.crearProducto({nombre:e.value.trim(),precioBrutoUsd:h.toFixed(2),margenPct:String(S),precioUsd:u.toFixed(2),impuestoPct:String(x),stockInicial:n!=null&&n.checked?"0":String(p),categoriaId:(o==null?void 0:o.value)||"",sinStock:(n==null?void 0:n.checked)||!1,pesable:t==="kg"||t==="ml",unidad:t,alcoholica:!1,esCaja:E,unidadesPorCaja:$,precioPaqueteUsd:j,nombrePaquete:C}),d&&(d.textContent="Producto o servicio registrado exitosamente.",d.style.color="#00823B",d.classList.remove("hidden")),setTimeout(()=>void this.render("alta"),800)}catch(V){d&&(d.textContent=V instanceof Error?V.message:String(V),d.style.color="#C60C15",d.classList.remove("hidden"))}}}const ke=l=>{if(typeof l=="number")return Number.isFinite(l)?l:0;if(l==null)return 0;let e=String(l).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},W=l=>ke(l).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}),qe=l=>{const e=l.finUnix||Math.floor(Date.now()/1e3),o=Math.max(0,e-l.inicioUnix),a=Math.floor(o/3600),r=Math.floor(o%3600/60);return`${a}h ${r}m`},bt=(l,e)=>{const o=l.operadoresRelevo.length>0?l.operadoresRelevo.join(" / "):l.operadorActual,a=e.filter(s=>{const u=s.fechaUnix&&s.fechaUnix>0?s.fechaUnix:(()=>{const p=(s.fechaHora||"").match(/(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})/);if(p&&p[1]&&p[2]&&p[3]&&p[4]&&p[5]&&p[6]){const g=Date.UTC(parseInt(p[1],10),parseInt(p[2],10)-1,parseInt(p[3],10),parseInt(p[4],10),parseInt(p[5],10),parseInt(p[6],10));if(!isNaN(g))return Math.floor(g/1e3)}return 0})();return!(u<=0||u<l.inicioUnix||l.finUnix&&u>l.finUnix)}),r=[["INFORME DE JORNADA",l.id],["Estado",l.estado==="abierta"?"En curso":"Cerrada"],["Apertura",l.inicioStr],["Cierre",l.finStr||"-"],["Duracion",qe(l)],["Operadores",o],["Total USD",`$${W(l.ventasTotalUsd)}`],["Total Bs",`Bs. ${W(l.ventasTotalBs)}`],["Tickets emitidos",String(l.ticketsEmitidos)],["Vuelto pagado Bs",`Bs. ${W(l.vueltoPagadoBs)}`],["Vuelto retenido Bs",`Bs. ${W(l.vueltoRetenidoBs)}`],["Deudas liquidadas USD",`$${W(l.deudasLiquidadasUsd)}`],["Entradas stock",String(l.entradasStockReg)],["Mermas",String(l.mermasStockReg)],["Cambios de precio",String(l.cambiosPrecioReg)],["Tasa apertura",`Bs. ${l.tasaInicio}`],["Tasa cierre",l.tasaFin?`Bs. ${l.tasaFin}`:"-"],...l.checksumSha256?[["SHA-256",l.checksumSha256]]:[],[],["TICKETS DE LA JORNADA"],["ID Ticket","Fecha/Hora","Canal","Operador","Metodo(s) de Pago","Total USD","Total Bs"]],i=a.map(s=>{const u=s.pagos&&s.pagos.length>0?s.pagos.map(p=>`${p.metodo}:$${W(p.montoUsd)}`).join(" | "):"DIRECTO";return[s.ventaId,s.fechaHora||"",s.canal||"VENTA DIRECTA",s.operador||"Caja",u,`$${W(s.totalUsd)}`,`Bs. ${W(s.totalBs)}`]}),b=[...r,...i].map(s=>s.map(u=>`"${String(u).replace(/"/g,'""')}"`).join(",")).join(`\r
`),t=new Blob(["\uFEFF"+b],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(t),d=document.createElement("a");d.href=n,d.download=`jornada_${l.id}.csv`,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(n)};class ut{constructor(e,o,a){U(this,"contenedor");U(this,"modalRoot");U(this,"modelo");U(this,"jornadas",[]);U(this,"jornadaActual",null);U(this,"todosLosTickets",[]);U(this,"busqueda","");U(this,"expandidos",new Set);U(this,"paginaActual",1);U(this,"POR_PAGINA",20);this.contenedor=e,this.modalRoot=o,this.modelo=a}parseFechaUnix(e){if(!e)return 0;const o=e.match(/(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})/);if(o&&o[1]&&o[2]&&o[3]&&o[4]&&o[5]&&o[6]){const a=Date.UTC(parseInt(o[1],10),parseInt(o[2],10)-1,parseInt(o[3],10),parseInt(o[4],10),parseInt(o[5],10),parseInt(o[6],10));if(!isNaN(a))return Math.floor(a/1e3)}return 0}async render(){const[e,o,a]=await Promise.all([D.obtenerJornadaActual(),D.listarHistoricoJornadas(),D.ventas()]);this.jornadaActual=e,this.jornadas=o,this.todosLosTickets=a;const r=e?o.filter(n=>n.id!==e.id):o,i=[...e?[e]:[],...r],c=i.length,b=i.reduce((n,d)=>n+ke(d.ventasTotalUsd),0),t=i.reduce((n,d)=>n+d.ticketsEmitidos,0);this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Historial de Jornadas</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Turnos operativos, arqueo de ventas y exportación de jornadas</p>
            </div>
            <span class="text-xs font-bold text-gray-700 bg-white border-2 border-brand-black px-3 py-1.5 rounded shadow-brutal-sm">
                ${c} Jornada${c!==1?"s":""}
            </span>
        </div>

        <!-- KPIs -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-3 bg-amber-50">
                <p class="font-heading font-bold text-[10px] uppercase tracking-wide text-brand-text">Facturado Total</p>
                <div class="font-heading font-black text-lg mt-0.5 text-brand-black">$ ${W(b)}</div>
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
                <div class="font-heading font-black text-lg mt-0.5 text-brand-purple">Bs. ${W(this.modelo.tasaActual||807.39)}</div>
            </div>
            <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-3 bg-blue-50">
                <p class="font-heading font-bold text-[10px] uppercase tracking-wide text-brand-text">Tickets Totales</p>
                <div class="font-heading font-black text-lg mt-0.5 text-blue-900">${t}</div>
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
        <div id="lista-jornadas" class="flex flex-col gap-2"></div>`,this.conectarEventosBuscador(),this.renderLista()}conectarEventosBuscador(){var e;(e=document.getElementById("jornadas-buscar"))==null||e.addEventListener("input",o=>{this.busqueda=o.target.value,this.paginaActual=1,this.renderLista()})}renderLista(){var s,u;const e=document.getElementById("lista-jornadas");if(!e)return;const o=this.jornadaActual?this.jornadas.filter(p=>{var g;return p.id!==((g=this.jornadaActual)==null?void 0:g.id)}):this.jornadas,a=[...this.jornadaActual?[this.jornadaActual]:[],...o],r=this.busqueda.trim().toLowerCase(),i=r?a.filter(p=>p.id.toLowerCase().includes(r)||p.operadorActual.toLowerCase().includes(r)||p.operadoresRelevo.some(g=>g.toLowerCase().includes(r))||p.inicioStr.toLowerCase().includes(r)||(p.finStr||"").toLowerCase().includes(r)):a,c=document.getElementById("paginacion-jornadas");if(c&&c.remove(),i.length===0){e.innerHTML=`
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 text-center text-gray-400 font-bold text-sm">
                ${r?"Sin jornadas que coincidan con la busqueda.":"No hay jornadas registradas en el sistema."}
            </div>`;return}const b=Math.max(1,Math.ceil(i.length/this.POR_PAGINA));this.paginaActual>b&&(this.paginaActual=b),this.paginaActual<1&&(this.paginaActual=1);const t=this.paginaActual,n=i.slice((t-1)*this.POR_PAGINA,t*this.POR_PAGINA);e.innerHTML=n.map(p=>this.renderFila(p)).join(""),n.forEach(p=>{if(this.expandidos.has(p.id)){const g=document.getElementById(`detalle-${p.id}`);g==null||g.classList.remove("hidden");const x=document.getElementById(`icon-${p.id}`);x&&(x.textContent="▲")}}),e.querySelectorAll("[data-toggle-jornada]").forEach(p=>{p.addEventListener("click",()=>{const g=p.dataset.toggleJornada,x=document.getElementById(`detalle-${g}`),S=document.getElementById(`icon-${g}`);if(x){const h=x.classList.contains("hidden");x.classList.toggle("hidden",!h),S&&(S.textContent=h?"▲":"▼"),h?this.expandidos.add(g):this.expandidos.delete(g)}})}),e.querySelectorAll("[data-exportar-jornada]").forEach(p=>{p.addEventListener("click",g=>{g.stopPropagation();const x=p.dataset.exportarJornada,S=i.find(h=>h.id===x);S&&bt(S,this.todosLosTickets)})}),e.querySelectorAll("[data-ver-ticket]").forEach(p=>{p.addEventListener("click",()=>{const g=p.dataset.verTicket,x=this.todosLosTickets.find(S=>S.ventaId===g);x&&this.mostrarModalTicket(x)})});const d=document.createElement("div");d.id="paginacion-jornadas",d.innerHTML=`
            <div class="flex items-center justify-between mt-3 gap-3 flex-wrap">
                <span class="text-xs font-bold text-gray-600">
                    Pagina ${t} de ${b} &middot; ${i.length} jornada${i.length!==1?"s":""}
                </span>
                <div class="flex gap-2">
                    <button id="btn-pag-ant"
                        class="border-2 border-brand-black font-heading font-black text-xs px-3 py-1.5 rounded shadow-brutal-sm bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                        ${t===1?"disabled":""}>
                        ANTERIOR
                    </button>
                    <button id="btn-pag-sig"
                        class="border-2 border-brand-black font-heading font-black text-xs px-3 py-1.5 rounded shadow-brutal-sm bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                        ${t===b?"disabled":""}>
                        SIGUIENTE
                    </button>
                </div>
            </div>`,e.insertAdjacentElement("afterend",d),(s=document.getElementById("btn-pag-ant"))==null||s.addEventListener("click",()=>{this.paginaActual>1&&(this.paginaActual--,this.renderLista())}),(u=document.getElementById("btn-pag-sig"))==null||u.addEventListener("click",()=>{this.paginaActual<b&&(this.paginaActual++,this.renderLista())})}renderFila(e){const o=e.estado==="abierta",a=e.operadoresRelevo.length>0?e.operadoresRelevo.join(", "):e.operadorActual,r=this.todosLosTickets.filter(t=>{const n=t.fechaUnix&&t.fechaUnix>0?t.fechaUnix:this.parseFechaUnix(t.fechaHora);return!(n<=0||n<e.inicioUnix||e.finUnix&&n>e.finUnix)}),i={};r.forEach(t=>{(t.pagos||[]).forEach(n=>{i[n.metodo]||(i[n.metodo]={usd:0,bs:0}),i[n.metodo].usd+=ke(n.montoUsd),i[n.metodo].bs+=ke(n.montoBs)})});const c=Object.entries(i).map(([t,n])=>`
            <div class="flex justify-between items-center text-xs border-b border-gray-100 last:border-none py-1">
                <span class="font-heading font-black text-brand-black">${t}</span>
                <div>
                    <span class="font-black">$ ${W(n.usd)}</span>
                    <span class="text-brand-purple font-mono font-bold ml-2">Bs. ${W(n.bs)}</span>
                </div>
            </div>`).join(""),b=r.length>0?r.map(t=>{const d=t.canal==="CONSUMO EN CUENTA"||t.ventaId.startsWith("CTA-")?'<span class="bg-amber-100 text-amber-900 border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">CUENTA</span>':'<span class="bg-blue-100 text-blue-900 border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">VENTA</span>';let s="";return t.pagos&&t.pagos.length>1?s='<span class="bg-amber-50 text-amber-950 border border-amber-500 px-1.5 py-0.5 rounded font-black text-[9px]">MIXTO</span>':t.pagos&&t.pagos.length===1?s=`<span class="bg-gray-100 text-brand-black border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">${t.pagos[0].metodo}</span>`:s='<span class="bg-gray-100 text-gray-500 border border-gray-300 px-1.5 py-0.5 rounded font-mono text-[9px]">DIRECTO</span>',`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="py-1.5 px-2 font-mono text-brand-purple text-[10px]">${t.ventaId}</td>
                    <td class="py-1.5 px-2 text-gray-500 text-[10px]">${t.fechaHora||"-"}</td>
                    <td class="py-1.5 px-2">${d}</td>
                    <td class="py-1.5 px-2">${s}</td>
                    <td class="py-1.5 px-2 text-gray-700 text-[10px]">${t.operador||"Caja"}</td>
                    <td class="py-1.5 px-2 text-right font-black text-brand-black text-[10px]">$ ${W(t.totalUsd)}</td>
                    <td class="py-1.5 px-2 text-right font-black text-brand-purple text-[10px]">Bs. ${W(t.totalBs)}</td>
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
                    <span class="font-heading font-black text-sm text-brand-black">$ ${W(e.ventasTotalUsd)}</span>
                    <span class="font-heading font-black text-sm text-brand-purple hidden sm:block">Bs. ${W(e.ventasTotalBs)}</span>
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
                        <p class="font-bold text-xs text-brand-black mt-0.5">${qe(e)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Vuelto pagado</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">Bs. ${W(e.vueltoPagadoBs)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Vuelto retenido</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">Bs. ${W(e.vueltoRetenidoBs)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Deudas liquid.</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">$ ${W(e.deudasLiquidadasUsd)}</p>
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
                ${Object.keys(i).length>0?`
                <div class="px-4 py-2 border-b border-gray-200">
                    <p class="text-[9px] font-black uppercase text-gray-400 mb-1.5">Desglose por metodo de pago</p>
                    <div class="bg-gray-50 border border-gray-200 rounded p-2">
                        ${c}
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
        </div>`}mostrarModalTicket(e){var i,c;const o=e.tasaDelDia?`Bs. ${W(e.tasaDelDia)}`:`Bs. ${W(this.modelo.tasaActual||807.39)}`,a=e.lineas&&e.lineas.length>0?e.lineas.map(b=>`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-2 pr-2">
                        <div class="font-bold text-gray-900">${b.nombre}</div>
                        <div class="text-[10px] text-gray-400 font-mono">${b.sku}</div>
                    </td>
                    <td class="py-2 text-center font-bold">${b.cantidad}</td>
                    <td class="py-2 text-right font-mono">$ ${W(b.precioUsd)}</td>
                    <td class="py-2 text-right font-bold text-brand-black">$ ${W(b.subtotalUsd)}</td>
                    <td class="py-2 text-right font-black text-brand-purple">Bs. ${W(b.subtotalBs)}</td>
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
                            <span class="font-bold text-gray-900">Bs. ${W(e.montoRecibidoBs||e.totalBs)}</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-gray-500 font-bold uppercase block">Vuelto (${e.estadoVuelto==="RETENIDO"?"Retenido":"Entregado"})</span>
                            <span class="font-bold ${e.estadoVuelto==="RETENIDO"?"text-blue-700":"text-green-700"}">Bs. ${W(e.vueltoBs||"0.00")}</span>
                        </div>
                    </div>

                    ${ke(e.vueltoBs)>.009?`
                    <div class="mb-3 ${e.estadoVuelto==="RETENIDO"?"bg-blue-50 border-blue-500 text-blue-950":"bg-emerald-50 border-emerald-500 text-emerald-950"} border-2 rounded p-2.5 text-xs font-bold flex flex-wrap items-center justify-between gap-2">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-wider block">
                                ${e.estadoVuelto==="RETENIDO"?"Vuelto Retenido (Saldo a Favor)":"Vuelto Pagado al Cliente"}
                            </span>
                            <span>
                                ${e.estadoVuelto==="RETENIDO"?"Asentado como saldo a favor retenido.":`Entregado via ${e.metodoVuelto||"Efectivo"}${e.montoVueltoUsd&&Number(e.montoVueltoUsd)>0&&e.tasaVuelto?` ($ ${W(e.montoVueltoUsd)} a Bs. ${W(e.tasaVuelto)})`:""}.`}
                            </span>
                        </div>
                        <span class="font-heading font-black text-lg shrink-0">Bs. ${W(e.vueltoBs)}</span>
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
                                            ${b.tasaCambio?`<p class="text-[10px] font-mono font-bold text-brand-purple">Tasa: Bs. ${W(b.tasaCambio)}</p>`:""}
                                            ${b.referencia?`<p class="text-[10px] font-mono text-gray-500">Ref: ${b.referencia}</p>`:""}
                                        </div>
                                        <div class="text-right">
                                            <span class="font-black text-brand-black block">$ ${W(b.montoUsd)}</span>
                                            <span class="text-[10px] font-mono font-bold text-brand-purple block">Bs. ${W(b.montoBs)}</span>
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
                        <span class="font-heading font-black text-lg text-emerald-700 ml-4 shrink-0">+$${W(e.saldoAFavorConsolidadoUsd)} USD</span>
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
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${W(e.totalUsd)}</span>
                                <span class="font-heading font-black text-xl text-brand-purple font-mono">Bs. ${W(e.totalBs)}</span>
                            </div>
                        </div>
                        <button id="modal-ticket-ok" class="bg-brand-black text-white font-heading font-black px-6 py-2.5 rounded border border-brand-black shadow-brutal-sm hover:bg-gray-800">
                            CERRAR
                        </button>
                    </div>
                </div>
            </div>
        </div>`;const r=()=>{this.modalRoot.innerHTML=""};(i=document.getElementById("modal-ticket-cerrar"))==null||i.addEventListener("click",r),(c=document.getElementById("modal-ticket-ok"))==null||c.addEventListener("click",r)}}class pt{constructor(e){U(this,"contenedor");this.contenedor=e}render(){this.contenedor.innerHTML=`
        <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Manual de Procedimientos y Operación Comercial</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Directrices de uso operativo, arqueo y lectura analítica de DatioLabs</p>
            </div>
            <span class="bg-brand-black text-white px-3 py-1.5 rounded font-black font-heading text-xs uppercase tracking-wider">
                DOCUMENTACIÓN OFICIAL
            </span>
        </div>

        <!-- Tarjetas Resumen de los 5 Modulos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-6">
            <div class="border-2 border-brand-black rounded-lg bg-amber-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-amber-900 uppercase">MODULO 01</span>
                <h4 class="font-heading font-black text-base mt-0.5">CAJA</h4>
                <p class="text-xs text-gray-700 mt-1">Precio dual USD/Bs., semáforo dinámico, pesable, empaques, multi-operador, historial del turno, reactividad Enter y cobro multimoneda con vuelto exacto.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-yellow-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-yellow-900 uppercase">MODULO 02</span>
                <h4 class="font-heading font-black text-base mt-0.5">CUENTAS</h4>
                <p class="text-xs text-gray-700 mt-1">Cuentas activas en mesa, conversión directa a deuda comercial, adición/decremento fluido de consumos con retorno de existencias y abonos a tasa pactada.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-blue-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-blue-900 uppercase">MODULO 03</span>
                <h4 class="font-heading font-black text-base mt-0.5">VENTAS</h4>
                <p class="text-xs text-gray-700 mt-1">Historial de jornadas con KPIs, desglose por método de pago, marcas cronológicas VET UTC-4 y exportación CSV exhaustiva.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-emerald-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-emerald-900 uppercase">MODULO 04</span>
                <h4 class="font-heading font-black text-base mt-0.5">INVENTARIO</h4>
                <p class="text-xs text-gray-700 mt-1">Catálogo por categorías, calculadora de margen, descuento atómico por empaque/caja, semáforo configurable y modo privacidad.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-slate-100 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-gray-800 uppercase">MODULO 05</span>
                <h4 class="font-heading font-black text-base mt-0.5">PANEL</h4>
                <p class="text-xs text-gray-700 mt-1">Diagnóstico financiero por fechas VET, gráfico SVG determinista, semáforo de stock, respaldos criptográficos SHA-256 y control Dueño(a).</p>
            </div>
        </div>

        <div class="space-y-6">

            <!-- ============ MODULO 1: CAJA ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">1</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Modulo CAJA: Precio Dual, Historial del Turno y Cobro Reactivo</h3>
                        <p class="text-xs text-gray-500 font-bold">Facturacion directa con precision decimal bancaria en USD y Bs., control de stock visual y auditoria en tiempo real</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Precio Dual USD / Bs.</strong>
                        Cada producto muestra simultaneamente su precio en dolares y en bolivares con tasa BCV. El ticket calcula totales con el modulo determinista de punto fijo Money.ts.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-red-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Semaforo Dinamico de Stock</strong>
                        Indicador visual de salud del inventario: ROJO (stock critico), AMARILLO (stock bajo), VERDE (suficiente). Los umbrales se sincronizan en tiempo real con la configuracion del negocio.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Soporte Pesable (kg / ml)</strong>
                        Productos vendidos por peso o volumen muestran input decimal en vez de botones +/-. Paso automatico fraccionario con proteccion contra desbordes.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Empaque y Descuento Atomico</strong>
                        Productos configurados en empaque (six-pack, bultos, cajas) descuentan exactamente la cantidad de unidades fisicas base correspondientes (K unidades x paquete) tanto en el carrito como en el libro mayor.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Historial del Turno Activo</strong>
                        Boton "HISTORIAL" en cabecera: despliega modal brutalista con tickets y recaudacion acumulada exclusiva del turno activo desglosada por operador y metodo sin interrumpir la sesion.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-orange-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Multi-Operador y Relevo</strong>
                        Multiples cajeros pueden operar en el mismo turno. El selector en la cabecera del ticket muestra el operador activo y permite registrar check-in y check-out de personal.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Reactividad Total y Tecla Enter</strong>
                        El calculo de faltante y vuelto se recalcula en tiempo real al tipear (evento input) en montos y tasas. Presionar Enter en cualquier campo confirma la venta si el total esta cubierto.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Cobro Multimoneda con Vuelto</strong>
                        Pagos mixtos en bolivares y divisas con tasas pactadas individuales. El excedente puede entregarse como vuelto fisico o retenerse como saldo a favor en cuenta.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Borrador Persistente</strong>
                        Si se cierra el modal de cobro sin confirmar, los importes, metodos y resolucion de vuelto quedan retenidos en memoria y se restauran al volver a abrir.
                    </div>
                </div>
            </div>

            <!-- ============ MODULO 2: CUENTAS ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">2</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Modulo CUENTAS: Comandas en Local, Deudas y Conversion</h3>
                        <p class="text-xs text-gray-500 font-bold">Comandas para mesas, cartera de credito comercial, conversion directa a deuda y ajuste fluido de consumos</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Dos Modalidades: Local vs. Deuda</strong>
                        Cuentas Activas (mesas o barras, liquidadas en la sesion) y Deudas Comerciales (credito a clientes de confianza que permanecen abiertas descontando existencias al instante).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Boton Conversion a Deuda</strong>
                        Boton "CONVERTIR A DEUDA": permite transferir una cuenta activa de mesa directamente al balance de deudas por cobrar asignando titular y plazo sin obligar a liquidar en caja.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Ajuste Fluido de Consumos</strong>
                        Controles interactivos [+] y [-] por cada linea de consumo. Permite incrementar o decrementar cantidades con devolucion o descuento automatico de stock fisico.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Liquidacion a Tasa Libre y Enter</strong>
                        El comerciante fija la tasa libremente o carga la oficial con un clic. La liquidacion reacciona a cada pulsacion y confirma la transaccion al presionar Enter.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-red-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Abonos Parciales y Saldo a Favor</strong>
                        Abonos en multiples monedas con tasa individual. Si el abono sobrepasa la deuda, se genera automaticamente comprobante con saldo a favor retenido.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Historial del Turno en Cuentas</strong>
                        Acceso directo al boton "HISTORIAL DEL TURNO" en la barra superior para auditar tickets cobrados y verificar balances de caja sin cambiar de modulo.
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
                        Operadores requieren PIN para eliminar productos, entradas, reducciones y mermas. Dueño(a) puede ocultar precios y stock a los operadores desde la configuración.
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

            <!-- ============ MODULO 5: PANEL DE CONTROL DUEÑO(A) ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">5</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Módulo PANEL: Diagnóstico Financiero y Control Dueño(a)</h3>
                        <p class="text-xs text-gray-500 font-bold">KPIs por rango de fechas, gráfico SVG, semáforo, respaldos y administración con clave</p>
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
                        Si no hay turno activo, el botón de operador en Caja muestra "SIN TURNO ACTIVO". El operador selecciona los cajeros del día y abre el turno sin requerir clave de Dueño(a).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Relevo y Asignación en Vivo</strong>
                        Desde Caja o Panel se pueden agregar, editar y relevar cajeros simultáneos. Los cambios se propagan inmediatamente al turno activo sin interrumpir ventas.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Cierre desde Panel</strong>
                        Solo Dueño(a) puede cerrar la jornada desde el Panel. El cierre consolida totales, genera SHA-256 de verificación y bloquea ediciones posteriores.
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
        </div>`}}const mt=3e5;class gt{constructor(){U(this,"modelo",new tt);U(this,"cajaVm",null);U(this,"panelVm",new dt);U(this,"widget",new et);U(this,"root");U(this,"modalRoot")}async arrancar(){const e=document.getElementById("app-root");if(!e)return;this.root=e,this.modalRoot=this.crearModalRoot(),this.widget.iniciar(),window.addEventListener("tasa_actualizada",a=>{const r=a;r.detail&&this.modelo.setTasa(r.detail)}),await this.refrescarTasa();let o=null;try{o=await this.modelo.cargarConfig()}catch{o=await this.modelo.cargarConfig()}if(window.setInterval(()=>void this.refrescarTasa(),mt),!o){new ot(this.root,this.modelo,()=>void this.arrancar()).render();return}this.pintarBotonesRol(o),this.ejecutarBackupAutomatico(),await this.arrancarCaja()}crearModalRoot(){let e=document.getElementById("modal-root");return e||(e=document.createElement("div"),e.id="modal-root",document.body.appendChild(e)),e}async refrescarTasa(){try{const e=await D.tasa();e&&this.modelo.setTasa(Number(e.valor))}catch{}}async ejecutarBackupAutomatico(){try{const e=await D.getBackupDir();if(e){const o=await D.autoBackup(e,5);o&&console.log(`[Backup] Auto-backup generado: ${o.totalRegistros} registros`)}}catch(e){console.warn("[Backup] Auto-backup falló:",e)}}pintarBotonesRol(e){const o=[document.getElementById("nav-actions-desktop"),document.getElementById("nav-actions-mobile")].filter(Boolean);o.length===0||document.querySelector('[data-nav-btn="caja"]')||o.forEach(a=>{a.innerHTML="";const r=(u,p,g)=>{const x=document.createElement("button");return x.id=`${u}-${a.id.includes("mobile")?"mob":"dsk"}`,x.dataset.navBtn=g,x.className="font-heading font-black text-xs sm:text-sm bg-white border-2 border-brand-black px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded shadow-brutal-sm hover:-translate-y-0.5 transition-transform shrink-0",x.textContent=p,x},i=r("btn-ir-caja","CAJA","caja"),c=r("btn-ir-ventas","VENTAS","ventas"),b=r("btn-ir-inventario","INVENTARIO","inventario"),t=r("btn-ir-panel","PANEL","panel"),n=r("btn-ir-guia","GUIA","guia"),d=e.rubros!==0;let s=null;d&&(s=r("btn-ir-cuentas","CUENTAS","cuentas"),s.addEventListener("click",()=>void this.arrancarCuentas())),a.appendChild(i),s&&a.appendChild(s),a.appendChild(c),a.appendChild(b),a.appendChild(t),a.appendChild(n),i.addEventListener("click",()=>void this.arrancarCaja()),c.addEventListener("click",()=>void this.arrancarVentas()),b.addEventListener("click",()=>void this.arrancarInventario()),t.addEventListener("click",()=>this.solicitarAccesoPanel()),n.addEventListener("click",()=>this.arrancarGuia())})}arrancarGuia(){this.marcarActivo("guia"),new pt(this.root).render()}async arrancarCaja(){this.marcarActivo("caja"),this.cajaVm=new rt(this.modelo),new st(this.root,this.modalRoot,this.cajaVm,this.modelo).render();try{await this.cajaVm.cargar()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}async arrancarCuentas(){this.marcarActivo("cuentas");const e=new ct(this.root,this.modalRoot,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}arrancarVentas(){var r,i,c;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)){this.abrirVentas();return}this.modalRoot.innerHTML=`
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
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(r=document.getElementById("pin-ventas-cancelar"))==null||r.addEventListener("click",o);const a=()=>void(async()=>{var n;const b=document.getElementById("pin-ventas-input").value;await D.validarPin(b).catch(()=>!1)?(o(),await this.abrirVentas()):(n=document.getElementById("pin-ventas-error"))==null||n.classList.remove("hidden")})();(i=document.getElementById("pin-ventas-ok"))==null||i.addEventListener("click",a),(c=document.getElementById("pin-ventas-input"))==null||c.addEventListener("keydown",b=>{b.key==="Enter"&&a()})}async abrirVentas(){this.marcarActivo("ventas");const e=new ut(this.root,this.modalRoot,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}arrancarInventario(){var r,i,c,b;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)||!(e!=null&&e.privacidadInventario)){this.abrirInventario();return}this.modalRoot.innerHTML=`
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
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(r=document.getElementById("pin-inv-cancelar"))==null||r.addEventListener("click",o);const a=()=>void(async()=>{var d;const t=document.getElementById("pin-inv-input").value;await D.validarPin(t).catch(()=>!1)?(o(),await this.abrirInventario(!0)):(d=document.getElementById("pin-inv-error"))==null||d.classList.remove("hidden")})();(i=document.getElementById("pin-inv-ok"))==null||i.addEventListener("click",a),(c=document.getElementById("pin-inv-sin-clave"))==null||c.addEventListener("click",()=>{o(),this.abrirInventario(!1)}),(b=document.getElementById("pin-inv-input"))==null||b.addEventListener("keydown",t=>{t.key==="Enter"&&a()})}async abrirInventario(e=!0){this.marcarActivo("inventario");const o=new lt(this.root,this.modelo,e);try{await o.render()}catch(a){this.toastError(a instanceof Error?a.message:String(a))}}marcarActivo(e){document.querySelectorAll("[data-nav-btn]").forEach(o=>{o.dataset.navBtn===e?(o.classList.remove("bg-white"),o.classList.add("bg-brand-yellow")):(o.classList.remove("bg-brand-yellow","bg-brand-cyan"),o.classList.add("bg-white"))})}solicitarAccesoPanel(){var r,i,c;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)){this.abrirPanel();return}this.modalRoot.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 w-full max-w-sm">
                <h3 class="font-heading font-black text-2xl mb-1">ACCESO DUEÑO(A)</h3>
                <p class="font-body text-brand-text mb-4">Ingresa la clave de administración.</p>
                <input id="pin-input" type="password" inputmode="numeric" maxlength="16" autofocus
                    class="w-full border-2 border-brand-black rounded px-4 py-3 text-2xl tracking-[0.5em] text-center mb-3" />
                <p id="pin-error" class="hidden text-red-700 font-bold mb-2">Clave incorrecta.</p>
                <div class="grid grid-cols-2 gap-3">
                    <button id="pin-cancelar" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">CANCELAR</button>
                    <button id="pin-ok" class="bg-brand-black text-white font-heading font-black py-3 rounded">ENTRAR</button>
                </div>
            </div>
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(r=document.getElementById("pin-cancelar"))==null||r.addEventListener("click",o);const a=()=>void(async()=>{var n;const b=document.getElementById("pin-input").value;await D.validarPin(b).catch(()=>!1)?(o(),await this.abrirPanel()):(n=document.getElementById("pin-error"))==null||n.classList.remove("hidden")})();(i=document.getElementById("pin-ok"))==null||i.addEventListener("click",a),(c=document.getElementById("pin-input"))==null||c.addEventListener("keydown",b=>{b.key==="Enter"&&a()})}async abrirPanel(){this.marcarActivo("panel");const e=new it(this.root,this.modalRoot,this.panelVm,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}toastError(e){var o;this.modalRoot.innerHTML=`
        <div class="fixed bottom-6 right-6 bg-red-600 text-white border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]">
            ${e.replace(/"/g,"")}
            <button id="toast-close" class="ml-3 underline font-black">cerrar</button>
        </div>`,(o=document.getElementById("toast-close"))==null||o.addEventListener("click",()=>{this.modalRoot.innerHTML=""})}}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("contextmenu",l=>l.preventDefault()),new gt().arrancar().catch(l=>console.error(l))});
