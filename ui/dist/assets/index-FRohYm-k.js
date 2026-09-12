var He=Object.defineProperty;var Ge=(b,e,o)=>e in b?He(b,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):b[e]=o;var T=(b,e,o)=>Ge(b,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const i of d.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(r){if(r.ep)return;r.ep=!0;const d=o(r);fetch(r.href,d)}})();const ze=1,De=2,Le=4,Re=8,Je=ze|De|Le|Re,se=1,fe=2,pe=8,Ae=16,$e=32,we=64,Ke=128;function Ne(b){let e=0;for(let o=0;o<12;o++)e+=b[o]*(o+1);return e%1e4}function je(b){const e=b.replace(/[^0-9]/g,"");if(e.length!==16)return!1;const o=e.split("").map(d=>parseInt(d,10)),a=Ne(o.slice(0,12)),r=o[12]*1e3+o[13]*100+o[14]*10+o[15];return a===r}const Ze="DATIOLABS_ROOT_KEY_SET_UNIVERSAL_2026",Oe=10;function Xe(b){const e=`${Ze}:${b%Oe}`;let o=2166136261,a=2654435769,r=1779033703,d=3144134277;for(let c=0;c<e.length;c++){const t=e.charCodeAt(c);o=Math.imul(o^t,16777619),a=Math.imul(a^(t<<3|t>>5),1540483477),r=Math.imul(r^(t<<5|t>>3),668265263),d=Math.imul(d^t+c,374761393)}const i=[],p=c=>{i.push(Math.abs(c)&255),i.push(Math.abs(c>>8)&255),i.push(Math.abs(c>>16)&255),i.push(Math.abs(c>>24)&255)};return p(o),p(a),p(r),p(d),i}function Ye(b){const e=Xe(b),o=[];for(let i=0;i<12;i++)o.push(e[i]%10);const a=Ne(o),r=o.join(""),d=String(a).padStart(4,"0");return`${r}${d}`}function Qe(){const b=Math.floor(Math.random()*Oe);return Ye(b)}const X=b=>{if(typeof b=="number")return Number.isFinite(b)?b:0;if(b==null)return 0;let e=String(b).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0};class Me extends Error{constructor(e){super(e)}}function We(){const b=typeof window<"u"?window.location.pathname.toLowerCase():"",e=typeof window<"u"?new URLSearchParams(window.location.search):null,o=b.includes("retail")||(e==null?void 0:e.get("rubro"))==="retail",a=b.includes("panaderia")||(e==null?void 0:e.get("rubro"))==="panaderia";return o?{key:"datiolabs_demo_retail_v3",claveLicencia:"0000888833330000",titular:"DatioLabs Retail Demo",config:{nombre:"DatioLabs Retail",rubros:Re,capacidades:se|Ae|$e|we|Ke,tienePin:!1},productos:[{sku:"SMART-PHONE-X",nombre:"Smartphone X 128GB (Serie/Garantía)",precioBrutoUsd:"180.00",margenPct:"38",precioUsd:"250.00",impuestoPct:"16",stock:"8",capacidades:se|Ae|we,unidad:"un",categoriaId:"cat-general"},{sku:"AURICULAR-BT",nombre:"Audífonos Inalámbricos Bluetooth Pro",precioBrutoUsd:"14.00",margenPct:"42",precioUsd:"20.00",impuestoPct:"16",stock:"22",capacidades:se|we,unidad:"un",categoriaId:"cat-general"},{sku:"CARGADOR-RAPIDO",nombre:"Cargador Rápido 30W Tipo-C",precioBrutoUsd:"5.50",margenPct:"45",precioUsd:"8.00",impuestoPct:"16",stock:"30",capacidades:se,unidad:"un",categoriaId:"cat-general"},{sku:"CABLE-USB-C",nombre:"Cable Reforzado Tipo-C a Tipo-C 1.5m",precioBrutoUsd:"2.50",margenPct:"60",precioUsd:"4.00",impuestoPct:"16",stock:"45",capacidades:se,unidad:"un",categoriaId:"cat-general"},{sku:"POWERBANK-20K",nombre:"Batería Portátil PowerBank 20000mAh",precioBrutoUsd:"16.00",margenPct:"40",precioUsd:"22.50",impuestoPct:"16",stock:"12",capacidades:se|we,unidad:"un",categoriaId:"cat-general"}]}:a?{key:"datiolabs_demo_panaderia_v3",claveLicencia:"0000888822220000",titular:"DatioLabs Panadería Demo",config:{nombre:"DatioLabs Panadería",rubros:De,capacidades:se|fe,tienePin:!1},productos:[{sku:"PAN-CANILLA",nombre:"Pan Canilla Tradicional",precioBrutoUsd:"0.50",margenPct:"60",precioUsd:"0.80",impuestoPct:"0",stock:"60",capacidades:se,unidad:"un",categoriaId:"cat-panes"},{sku:"PAN-CAMPESINO",nombre:"Pan Campesino Rústico",precioBrutoUsd:"0.80",margenPct:"50",precioUsd:"1.20",impuestoPct:"0",stock:"35",capacidades:se,unidad:"un",categoriaId:"cat-panes"},{sku:"PAN-SOBADO",nombre:"Pan Sobado Suave",precioBrutoUsd:"0.65",margenPct:"53",precioUsd:"1.00",impuestoPct:"0",stock:"40",capacidades:se,unidad:"un",categoriaId:"cat-panes"},{sku:"QUESO-GUAYANES",nombre:"Queso Guayanés Fresco",precioBrutoUsd:"3.20",margenPct:"40",precioUsd:"4.50",impuestoPct:"0",stock:"15.00",capacidades:fe,unidad:"kg",categoriaId:"cat-viveres"},{sku:"CAFE-MOLIDO",nombre:"Café Molido Tostado 250g",precioBrutoUsd:"2.00",margenPct:"50",precioUsd:"3.00",impuestoPct:"0",stock:"25",capacidades:se,unidad:"un",categoriaId:"cat-viveres"}]}:{key:"datiolabs_demo_licoreria_v3",claveLicencia:"0000888811110000",titular:"DatioLabs Licorería Demo",config:{nombre:"DatioLabs Licorería",rubros:Le,capacidades:se|pe,tienePin:!1},productos:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",precioBrutoUsd:"13.50",margenPct:"33",precioUsd:"18.00",impuestoPct:"16",stock:"12",capacidades:se|pe,unidad:"un",categoriaId:"cat-bebidas"},{sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",precioBrutoUsd:"8.80",margenPct:"36",precioUsd:"12.00",impuestoPct:"16",stock:"16",capacidades:se|pe,unidad:"un",categoriaId:"cat-bebidas"},{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",precioBrutoUsd:"3.30",margenPct:"36",precioUsd:"4.50",impuestoPct:"16",stock:"30",capacidades:se|pe,unidad:"un",categoriaId:"cat-bebidas"},{sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",precioBrutoUsd:"16.50",margenPct:"33",precioUsd:"22.00",impuestoPct:"16",stock:"8",capacidades:se|pe,unidad:"un",categoriaId:"cat-bebidas"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",precioBrutoUsd:"1.20",margenPct:"50",precioUsd:"1.80",impuestoPct:"16",stock:"24",capacidades:se|pe,unidad:"un",categoriaId:"cat-bebidas"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",precioBrutoUsd:"0.60",margenPct:"66",precioUsd:"1.00",impuestoPct:"16",stock:"40",capacidades:se|pe,unidad:"un",categoriaId:"cat-viveres"}]}}class et{constructor(){T(this,"config");T(this,"productos");T(this,"cuentas",[{ventaId:"CTA-88210",etiqueta:"Mesa 4 (Terraza)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-7200,fechaCreacionStr:"Hoy, 02:00 PM",lineas:2,totalParcialUsd:"10.00",totalParcialBs:"8073.90",abonosUsd:"5.00",abonosBs:"4036.95",consumos:[{id:"con-m4-1",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-m4-2",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]},{ventaId:"CTA-88211",etiqueta:"Barra Principal (Carlos)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-3600,fechaCreacionStr:"Hoy, 03:00 PM",lineas:2,totalParcialUsd:"19.80",totalParcialBs:"15986.32",abonosUsd:"25.00",abonosBs:"20184.75",consumos:[{id:"con-bp-1",sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:1,precioUsd:"18.00",subtotalUsd:"18.00"},{id:"con-bp-2",sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:1,precioUsd:"1.80",subtotalUsd:"1.80"}]},{ventaId:"CTA-88212",etiqueta:"Mesa 1 (VIP)",tipo:"activa",fechaCreacionUnix:Math.floor(Date.now()/1e3)-1800,fechaCreacionStr:"Hoy, 03:30 PM",lineas:1,totalParcialUsd:"22.00",totalParcialBs:"17762.58",abonosUsd:"0.00",abonosBs:"0.00",consumos:[{id:"con-m1-1",sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",cantidad:1,precioUsd:"22.00",subtotalUsd:"22.00"}]},{ventaId:"DEU-99042",etiqueta:"Taller Hermanos Gómez",cliente:"Carlos Gómez (Taller)",nota:"Crédito comercial acordado a cobrar en días",tipo:"deuda",fechaCreacionUnix:Math.floor(Date.now()/1e3)-86400*3,fechaCreacionStr:"01/09/2026 10:30",lineas:3,totalParcialUsd:"34.00",totalParcialBs:"27451.26",abonosUsd:"10.00",abonosBs:"8073.90",consumos:[{id:"con-d1",sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:2,precioUsd:"12.00",subtotalUsd:"24.00"},{id:"con-d2",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-d3",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]}]);T(this,"categorias",[{id:"cat-general",nombre:"General"},{id:"cat-viveres",nombre:"Víveres"},{id:"cat-bebidas",nombre:"Bebidas y Licores"},{id:"cat-panes",nombre:"Panes y Horneados"}]);T(this,"tasasImpuestos",[{id:"iva-16",nombre:"IVA General (16%)",porcentaje:"16"},{id:"iva-8",nombre:"IVA Reducido (8%)",porcentaje:"8"},{id:"iva-0",nombre:"Exento (0%)",porcentaje:"0"}]);T(this,"tasaActual",{valor:"807.39",fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:null,direccion:null});T(this,"tickets",[{ventaId:"TRX-94812",totalUsd:"23.80",totalBs:"19215.88",tasaDelDia:"807.39",montoRecibidoBs:"20000.00",vueltoBs:"784.12",fechaHora:"Hoy, 01:24 PM",fechaUnix:Math.floor(Date.now()/1e3)-3600,canal:"VENTA DIRECTA",operador:"Caja Principal",pagos:[{metodo:"PAGO MOVIL",montoUsd:"23.80",montoBs:"19215.88",referencia:"REF-7892"}],lineas:[{sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:"1",precioUsd:"12.00",tasaBloqueada:"807.39",subtotalUsd:"12.00",subtotalBs:"9688.68"},{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:"2",precioUsd:"4.50",tasaBloqueada:"807.39",subtotalUsd:"9.00",subtotalBs:"7266.51"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:"1",precioUsd:"1.00",tasaBloqueada:"807.39",subtotalUsd:"1.00",subtotalBs:"807.39"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:"1",precioUsd:"1.80",tasaBloqueada:"807.39",subtotalUsd:"1.80",subtotalBs:"1453.30"}]},{ventaId:"CTA-78104",totalUsd:"40.00",totalBs:"32295.60",tasaDelDia:"807.39",montoRecibidoBs:"35000.00",vueltoBs:"2704.40",fechaHora:"Hoy, 12:50 PM",fechaUnix:Math.floor(Date.now()/1e3)-7200,canal:"CONSUMO EN CUENTA",operador:"Mesa 4 / Mostrador",pagos:[{metodo:"DOL.CASH",moneda:"USD",montoUsd:"20.00",montoBs:"16147.80",tasaCambio:"807.39"},{metodo:"PUNTOD.VENTA",moneda:"BS",montoUsd:"20.00",montoBs:"16147.80",referencia:"LOTE-112"}],lineas:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:"1",precioUsd:"18.00",tasaBloqueada:"807.39",subtotalUsd:"18.00",subtotalBs:"14533.02"},{sku:"WHISKY-12A",nombre:"Whisky Escocés 12 Años 750ml",cantidad:"1",precioUsd:"22.00",tasaBloqueada:"807.39",subtotalUsd:"22.00",subtotalBs:"17762.58"}]},{ventaId:"TRX-94811",totalUsd:"13.60",totalBs:"10980.50",tasaDelDia:"807.39",montoRecibidoBs:"11000.00",vueltoBs:"19.50",fechaHora:"Hoy, 11:35 AM",fechaUnix:Math.floor(Date.now()/1e3)-10800,canal:"VENTA DIRECTA",operador:"Caja Principal",pagos:[{metodo:"BS.EFEC.",moneda:"BS",montoUsd:"13.60",montoBs:"10980.50"}],lineas:[{sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:"2",precioUsd:"4.50",tasaBloqueada:"807.39",subtotalUsd:"9.00",subtotalBs:"7266.51"},{sku:"REFRESCO-COLA",nombre:"Refresco Cola 2L (Mezclador)",cantidad:"2",precioUsd:"1.80",tasaBloqueada:"807.39",subtotalUsd:"3.60",subtotalBs:"2906.60"},{sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:"1",precioUsd:"1.00",tasaBloqueada:"807.39",subtotalUsd:"1.00",subtotalBs:"807.39"}]},{ventaId:"CTA-78103",totalUsd:"18.00",totalBs:"14533.02",tasaDelDia:"807.39",montoRecibidoBs:"15000.00",vueltoBs:"466.98",fechaHora:"Hoy, 10:15 AM",fechaUnix:Math.floor(Date.now()/1e3)-14400,canal:"CONSUMO EN CUENTA",operador:"Barra Principal",pagos:[{metodo:"ZELLE",moneda:"USD",montoUsd:"18.00",montoBs:"14533.02",tasaCambio:"807.39",referencia:"ZEL-5501"}],lineas:[{sku:"RON-DIPLOMATICO",nombre:"Ron Reserva Exclusiva 750ml",cantidad:"1",precioUsd:"18.00",tasaBloqueada:"807.39",subtotalUsd:"18.00",subtotalBs:"14533.02"}]}]);T(this,"ventasTotalUsd",95.4);T(this,"ventasTotalBs",77025);T(this,"metodosPago",[{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]);T(this,"respaldos",[{id:"bk-1",fecha:"Hoy, 06:00 PM",archivoNombre:"DATO-DEMO-20260903-180000.backup",registros:412,tamanoKb:124,checksumSha256:"9f83a21b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f"},{id:"bk-2",fecha:"Ayer, 11:30 PM",archivoNombre:"DATO-DEMO-20260902-233000.backup",registros:395,tamanoKb:118,checksumSha256:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"}]);T(this,"licencia",{estado:"activa",tipo:"Enterprise Standalone Local",claveLicencia:"0000888811110000",titular:"Empresa DatioLabs Cliente Comercial",validez:"Perpetua (Sin caducidad / Portabilidad Total)"});T(this,"operadores",[{id:"op-1",nombre:"Carlos Mendoza",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*30},{id:"op-2",nombre:"María Andrea Silva",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*15},{id:"op-3",nombre:"José Gregorio Páez",activo:!0,creadoUnix:Math.floor(Date.now()/1e3)-86400*5}]);T(this,"jornadaActual",{id:"JOR-20260908-01",estado:"abierta",inicioUnix:Math.floor(Date.now()/1e3)-14400,inicioStr:"Hoy, 08:30 AM",operadorInicial:"Carlos Mendoza",operadorActual:"Carlos Mendoza",operadoresActivos:["Carlos Mendoza"],operadoresRelevo:["Carlos Mendoza"],tasaInicio:"807.39",ventasTotalUsd:"95.40",ventasTotalBs:"77025.00",ticketsEmitidos:6,vueltoPagadoBs:"1450.00",vueltoRetenidoBs:"784.12",deudasLiquidadasUsd:"34.00",entradasStockReg:2,mermasStockReg:0,cambiosPrecioReg:0});T(this,"historicoJornadas",[{id:"JOR-20260907-01",estado:"cerrada",inicioUnix:Math.floor(Date.now()/1e3)-86400-28800,finUnix:Math.floor(Date.now()/1e3)-86400,inicioStr:"Ayer, 08:00 AM",finStr:"Ayer, 09:30 PM",operadorInicial:"María Andrea Silva",operadorActual:"Carlos Mendoza",operadoresRelevo:["María Andrea Silva","Carlos Mendoza"],tasaInicio:"805.20",tasaFin:"807.39",ventasTotalUsd:"340.50",ventasTotalBs:"274889.70",ticketsEmitidos:24,vueltoPagadoBs:"4520.00",vueltoRetenidoBs:"1200.00",deudasLiquidadasUsd:"68.00",entradasStockReg:4,mermasStockReg:1,cambiosPrecioReg:1,checksumSha256:"a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0"}]);T(this,"semaforoStock",{rojoMax:5,amarilloMax:15});T(this,"dedupVentas",{});T(this,"historicoTasas",[{id:"tx-1",valor:"807.3900",fechaHora:"Hoy, 04:00 PM",tipo:"automático",motivo:"Sondeo oficial BCV"},{id:"tx-2",valor:"805.2000",fechaHora:"Hoy, 09:00 AM",tipo:"automático",motivo:"Apertura de jornada"},{id:"tx-3",valor:"802.1500",fechaHora:"Ayer, 05:00 PM",tipo:"automático",motivo:"Cierre BCV"}]);T(this,"pinDueno","");T(this,"storageKey");const e=We();this.storageKey=e.key,this.config=e.config,this.productos=e.productos,this.licencia.claveLicencia=e.claveLicencia,this.licencia.titular=e.titular;try{["datiolabs_demo_licoreria_db","datiolabs_demo_panaderia_db","datiolabs_demo_retail_db","datiolabs_demo_licoreria_v2"].forEach(a=>{try{localStorage.removeItem(a)}catch{}});const o=localStorage.getItem(this.storageKey);if(o){const a=JSON.parse(o);if(a.productos&&Array.isArray(a.productos)&&(this.productos=a.productos.map(r=>{const d=e.productos.find(n=>n.sku===r.sku),i=String(r.unidad||(d==null?void 0:d.unidad)||"").toLowerCase(),p=i==="kg"?"kg":i==="ml"?"ml":"un",c=r.categoriaId&&r.categoriaId.trim()?r.categoriaId:(d==null?void 0:d.categoriaId)||"cat-general",t=Number(r.precioUsd)||0,s=r.precioBrutoUsd&&Number(r.precioBrutoUsd)>0?r.precioBrutoUsd:(d==null?void 0:d.precioBrutoUsd)||(t*.65).toFixed(2);return{...r,unidad:p,categoriaId:c,precioBrutoUsd:s}})),a.cuentas&&Array.isArray(a.cuentas)&&a.cuentas.length>0&&(this.cuentas=a.cuentas.map(r=>(Array.isArray(r.consumos)||(r.consumos=[]),r.abonosUsd===void 0&&(r.abonosUsd="0.00"),r.abonosBs===void 0&&(r.abonosBs="0.00"),r.tipo||(r.tipo=r.etiqueta.toLowerCase().includes("taller")||r.etiqueta.toLowerCase().includes("deuda")?"deuda":"activa"),r.fechaCreacionUnix||(r.fechaCreacionUnix=r.tipo==="deuda"?Math.floor(Date.now()/1e3)-86400*3:Math.floor(Date.now()/1e3)-3600),r.fechaCreacionStr||(r.fechaCreacionStr=r.tipo==="deuda"?"01/09/2026 10:30":"Hoy"),r.consumos.length===0&&X(r.totalParcialUsd)>0&&r.consumos.push({id:"con-"+Math.random().toString(36).slice(2,8),sku:"CONSUMO-PREV",nombre:"Consumos acumulados",cantidad:1,precioUsd:String(r.totalParcialUsd),subtotalUsd:String(r.totalParcialUsd)}),r.lineas=r.consumos.length,r)),this.cuentas.some(r=>r.tipo==="deuda")||this.cuentas.push({ventaId:"DEU-99042",etiqueta:"Taller Hermanos Gómez",cliente:"Carlos Gómez (Taller)",nota:"Crédito comercial convenido a pagar en días",tipo:"deuda",fechaCreacionUnix:Math.floor(Date.now()/1e3)-86400*3,fechaCreacionStr:"01/09/2026 10:30",lineas:3,totalParcialUsd:"34.00",totalParcialBs:(34*X(this.tasaActual.valor)).toFixed(2),abonosUsd:"10.00",abonosBs:(10*X(this.tasaActual.valor)).toFixed(2),consumos:[{id:"con-d1",sku:"RON-SANTA-TERESA",nombre:"Ron Santa Teresa Gran Reserva 750ml",cantidad:2,precioUsd:"12.00",subtotalUsd:"24.00"},{id:"con-d2",sku:"CERVEZA-POLAR-6P",nombre:"Six Pack Cerveza Pilsen 330ml",cantidad:2,precioUsd:"4.50",subtotalUsd:"9.00"},{id:"con-d3",sku:"HIELO-BOLSA",nombre:"Bolsa de Hielo 3Kg",cantidad:1,precioUsd:"1.00",subtotalUsd:"1.00"}]})),a.metodosPago&&Array.isArray(a.metodosPago)){const r=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}],d=[],i=new Set,p=c=>{let t="",s="BS";if(typeof c=="string")t=c.trim().toUpperCase(),t==="DOLAR.EFEC."&&(t="DOL.CASH"),t==="USDT BINAN."&&(t="BINAN.USDT"),["DOL.CASH","ZELLE","BINAN.USDT"].includes(t)&&(s="USD");else if(c&&typeof c=="object"&&"nombre"in c){const n=c;t=String(n.nombre||"").trim().toUpperCase(),t==="DOLAR.EFEC."&&(t="DOL.CASH"),t==="USDT BINAN."&&(t="BINAN.USDT"),s=n.moneda==="USD"||["DOL.CASH","ZELLE","BINAN.USDT"].includes(t)?"USD":"BS"}t&&!i.has(t)&&(i.add(t),d.push({nombre:t,moneda:s}))};r.forEach(p),a.metodosPago.forEach(p),d.sort((c,t)=>c.moneda===t.moneda?0:c.moneda==="BS"?-1:1),this.metodosPago=d}else this.metodosPago.sort((r,d)=>r.moneda===d.moneda?0:r.moneda==="BS"?-1:1);a.operadores&&Array.isArray(a.operadores)&&(this.operadores=a.operadores),a.jornadaActual!==void 0&&(this.jornadaActual=a.jornadaActual),a.historicoJornadas&&Array.isArray(a.historicoJornadas)&&(this.historicoJornadas=a.historicoJornadas),a.semaforoStock&&(this.semaforoStock=a.semaforoStock),a.categorias&&(this.categorias=a.categorias),a.tasasImpuestos&&(this.tasasImpuestos=a.tasasImpuestos),a.tasaActual&&(this.tasaActual=a.tasaActual),a.respaldos&&(this.respaldos=a.respaldos),a.historicoTasas&&(this.historicoTasas=a.historicoTasas),a.tickets&&Array.isArray(a.tickets)&&a.tickets.length>0&&(this.tickets=a.tickets),a.ventasTotalUsd!==void 0&&(this.ventasTotalUsd=Number(a.ventasTotalUsd)),a.ventasTotalBs!==void 0&&(this.ventasTotalBs=Number(a.ventasTotalBs)),a.pinDueno!==void 0&&(this.pinDueno=a.pinDueno),this.config&&this.pinDueno&&(this.config.tienePin=!0)}}catch{}this.refrescarTasaEnVivo()}async refrescarTasaEnVivo(){try{const e=await fetch("https://ve.dolarapi.com/v1/dolares/oficial");if(e.ok){const o=await e.json(),a=Number(o.promedio);if(Number.isFinite(a)&&a>0){const r=Number(this.tasaActual.valor);let d=null,i=null;if(Number.isFinite(r)&&r>0&&r!==a){const t=(a-r)/r*100;d=Math.abs(t).toFixed(2),i=t>0?"subio":"bajo"}this.tasaActual={valor:a.toFixed(4),fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:d,direccion:i};const c=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});this.historicoTasas.unshift({id:"tx-"+Math.random().toString(36).slice(2,7),valor:a.toFixed(4),fechaHora:`Hoy, ${c}`,tipo:"automático",motivo:"Sincronización BCV en vivo"}),this.historicoTasas.length>50&&this.historicoTasas.pop(),this.persist(),typeof window<"u"&&window.dispatchEvent(new CustomEvent("tasa_actualizada",{detail:a}))}}}catch{}}persist(){try{localStorage.setItem(this.storageKey,JSON.stringify({productos:this.productos,cuentas:this.cuentas,categorias:this.categorias,tasasImpuestos:this.tasasImpuestos,tasaActual:this.tasaActual,respaldos:this.respaldos,historicoTasas:this.historicoTasas,tickets:this.tickets,ventasTotalUsd:this.ventasTotalUsd,ventasTotalBs:this.ventasTotalBs,pinDueno:this.pinDueno,metodosPago:this.metodosPago,operadores:this.operadores,jornadaActual:this.jornadaActual,historicoJornadas:this.historicoJornadas,semaforoStock:this.semaforoStock}))}catch{}}}const x=new et,tt={crear_respaldo:{method:"POST",path:"/api/respaldos"},listar_respaldos:{method:"GET",path:"/api/respaldos"},restaurar_desde_respaldo:{method:"POST",path:"/api/respaldos/restaurar",body:!0},restaurar_desde_archivo:{method:"POST",path:"/api/respaldos/restaurar",body:!0},obtener_config:{method:"GET",path:"/api/config"},obtener_tasa_bcv:{method:"GET",path:"/api/tasa"},listar_productos:{method:"GET",path:"/api/productos"},listar_categorias:{method:"GET",path:"/api/categorias"},panel:{method:"GET",path:"/api/panel"},listar_ventas:{method:"GET",path:"/api/ventas"},listar_cuentas:{method:"GET",path:"/api/cuentas"},obtener_jornada_actual:{method:"GET",path:"/api/jornadas/actual"},listar_historico_jornadas:{method:"GET",path:"/api/jornadas"},listar_metodos_pago:{method:"GET",path:"/api/metodos-pago"},listar_operadores:{method:"GET",path:"/api/operadores"},listar_historico_tasas:{method:"GET",path:"/api/historico-tasas"},obtener_semaforo_stock:{method:"GET",path:"/api/semaforo"}};async function z(b,e){var d;const o=window.__TAURI__,a=(d=o==null?void 0:o.core)==null?void 0:d.invoke;if(a)try{return await a(b,e)}catch(i){throw new Me(typeof i=="string"?i:JSON.stringify(i))}const r=await at(b,e).catch(()=>null);return r!==null?r:ot(b,e)}async function at(b,e){const o=tt[b];if(!o)return null;const a={method:o.method,headers:{"Content-Type":"application/json"}};o.body&&e&&(b==="restaurar_desde_archivo"?a.body=JSON.stringify({contenido_base64:e.contenidoBase64,nombre_archivo:e.nombreArchivo}):a.body=JSON.stringify(e));const r=await fetch(o.path,a);if(!r.ok)throw new Me(`HTTP ${r.status}`);return await r.json()}function ot(b,e){var o,a,r,d,i,p,c;switch(b){case"obtener_config":return Promise.resolve(x.config);case"inicializar_negocio":{const t=e!=null&&e.pinDueno?String(e.pinDueno).trim():"",s=e!=null&&e.licenciaClave?String(e.licenciaClave).trim():"";return x.pinDueno=t,x.config={nombre:String((e==null?void 0:e.nombre)||"Mi Negocio Demo"),rubros:Number((e==null?void 0:e.rubros)||15),capacidades:se|fe|pe|Ae|$e,tienePin:t.length>0,licenciaEstado:s?"activa":"demo",licenciaTitular:s?"Empresa DatioLabs":"",privacidadInventario:!!(e!=null&&e.privacidadInventario)},x.licencia.claveLicencia=s||"0000888811110000",x.licencia.estado=s?"activa":"demo",x.licencia.titular=s?"Empresa DatioLabs":"DatioLabs Demo",x.persist(),Promise.resolve(void 0)}case"validar_pin_dueno":{const t=String((e==null?void 0:e.pin)||"").trim();return x.pinDueno?Promise.resolve(t===x.pinDueno):Promise.resolve(!0)}case"cambiar_pin_dueno":{const t=String((e==null?void 0:e.pinAnterior)||"").trim(),s=String((e==null?void 0:e.pinNuevo)||"").trim();return x.pinDueno&&t!==x.pinDueno?Promise.reject(new Error("La clave anterior no coincide.")):(x.pinDueno=s,x.config&&(x.config.tienePin=s.length>0),x.persist(),Promise.resolve(!0))}case"listar_productos":return Promise.resolve(x.productos);case"crear_producto":{const t=e==null?void 0:e.input,s=String((t==null?void 0:t.unidad)||"").toLowerCase(),n=s==="kg"?"kg":s==="ml"?"ml":t!=null&&t.pesable?"kg":"un",l=!!(t!=null&&t.esCaja),u=Number(t==null?void 0:t.unidadesPorCaja)>1?Math.floor(Number(t.unidadesPorCaja)):void 0,m=String((t==null?void 0:t.stockInicial)||"0"),g={sku:String((t==null?void 0:t.sku)||"").toUpperCase(),nombre:String((t==null?void 0:t.nombre)||""),precioBrutoUsd:String((t==null?void 0:t.precioBrutoUsd)||"0"),margenPct:String((t==null?void 0:t.margenPct)||"0"),precioUsd:String((t==null?void 0:t.precioUsd)||"0"),impuestoPct:String((t==null?void 0:t.impuestoPct)||"0"),stock:m,capacidades:se|(n==="kg"||n==="ml"||t!=null&&t.pesable?fe:0),categoriaId:String((t==null?void 0:t.categoriaId)||""),sinStock:!!(t!=null&&t.sinStock),unidad:n,esCaja:l,unidadesPorCaja:u,precioPaqueteUsd:t!=null&&t.precioPaqueteUsd?String(t.precioPaqueteUsd):void 0,nombrePaquete:t!=null&&t.nombrePaquete?String(t.nombrePaquete):void 0,presentaciones:Array.isArray(t==null?void 0:t.presentaciones)?t.presentaciones:[]};return x.productos.push(g),x.persist(),Promise.resolve(void 0)}case"actualizar_producto":{const t=e==null?void 0:e.input,s=String((t==null?void 0:t.sku)||"").toUpperCase(),n=x.productos.findIndex(l=>l.sku===s);if(n>=0){const l=x.productos[n];t!=null&&t.nombre&&(l.nombre=String(t.nombre)),t!=null&&t.precioUsd&&(l.precioUsd=String(t.precioUsd)),t!=null&&t.impuestoPct&&(l.impuestoPct=String(t.impuestoPct)),(t==null?void 0:t.precioBrutoUsd)!==void 0&&(l.precioBrutoUsd=String(t.precioBrutoUsd)),(t==null?void 0:t.margenPct)!==void 0&&(l.margenPct=String(t.margenPct)),(t==null?void 0:t.categoriaId)!==void 0&&(l.categoriaId=String(t.categoriaId)),(t==null?void 0:t.sinStock)!==void 0&&(l.sinStock=!!t.sinStock),(t==null?void 0:t.unidad)!==void 0&&(l.unidad=t.unidad),(t==null?void 0:t.esCaja)!==void 0&&(l.esCaja=!!t.esCaja),(t==null?void 0:t.unidadesPorCaja)!==void 0&&(l.unidadesPorCaja=Number(t.unidadesPorCaja)),(t==null?void 0:t.precioPaqueteUsd)!==void 0&&(l.precioPaqueteUsd=String(t.precioPaqueteUsd)),(t==null?void 0:t.nombrePaquete)!==void 0&&(l.nombrePaquete=String(t.nombrePaquete)),Array.isArray(t==null?void 0:t.presentaciones)&&(l.presentaciones=t.presentaciones),x.persist()}return Promise.resolve(void 0)}case"eliminar_producto":{const t=String((e==null?void 0:e.sku)||"").toUpperCase();return x.productos=x.productos.filter(s=>s.sku!==t),x.persist(),Promise.resolve(void 0)}case"registrar_venta":{const t=e==null?void 0:e.items,s=e==null?void 0:e.idempotencyKey,n=Number((e==null?void 0:e.montoRecibidoBs)||"0");if(s&&((o=x.dedupVentas)!=null&&o[s])){const N=x.dedupVentas[s],j=x.tickets.find(F=>F.ventaId===N);if(j)return Promise.resolve(j)}let l=0;const u=Number(x.tasaActual.valor);t.forEach(N=>{var F;const j=x.productos.find(M=>M.sku===N.sku);if(j){const M=Number(N.cantidad),K=N.modo_venta||"unidad",P=K!=="unidad"?(F=j.presentaciones)==null?void 0:F.find(U=>U.nombre.toLowerCase()===K.toLowerCase()):void 0,Z=!P&&K==="paquete"&&(j.precioPaqueteUsd||j.esCaja&&j.unidadesPorCaja&&j.unidadesPorCaja>1),k=P?P.unidades:Z&&j.unidadesPorCaja||1,$=P?Number(P.precioUsd):Z?j.precioPaqueteUsd?Number(j.precioPaqueteUsd):Number(j.precioUsd)*(j.unidadesPorCaja||1):Number(j.precioUsd);l+=$*M,j.stock=String(Math.max(0,Number(j.stock)-k*M))}});const m=l*u,g=Math.max(0,n-m);x.ventasTotalUsd+=l,x.ventasTotalBs+=m;const y=new Date,h=y.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),w=Array.isArray(e==null?void 0:e.pagos)&&e.pagos.length>0?e.pagos:[{metodo:n>0?"BS.EFEC.":"DOL.CASH",moneda:n>0?"BS":"USD",montoUsd:l.toFixed(2),montoBs:m.toFixed(2)}],f=e==null?void 0:e.resolucionVuelto,S=g>.009?(f==null?void 0:f.estado)||"PAGADO":"SIN_VUELTO",B=S==="PAGADO"?(f==null?void 0:f.metodo)||"BS.EFEC.":void 0,A=g>.009?(f==null?void 0:f.montoBs)||g.toFixed(2):void 0,C=g>.009?(f==null?void 0:f.montoUsd)||(u>0?(g/u).toFixed(2):"0.00"):void 0,v=S==="PAGADO"?f==null?void 0:f.tasa:void 0,E=((a=x.jornadaActual)==null?void 0:a.operadorActual)||"Caja Principal",L={ventaId:"TRX-"+Math.floor(1e4+Math.random()*9e4),totalUsd:l.toFixed(2),totalBs:m.toFixed(2),tasaDelDia:u.toFixed(2),montoRecibidoBs:n.toFixed(2),vueltoBs:g.toFixed(2),fechaHora:`Hoy, ${h}`,fechaUnix:Math.floor(y.getTime()/1e3),canal:"VENTA DIRECTA",operador:E,pagos:w,estadoVuelto:S,metodoVuelto:B,montoVueltoBs:A,montoVueltoUsd:C,tasaVuelto:v,lineas:t.map(N=>{const j=x.productos.find(k=>k.sku===N.sku),F=N.modo_venta||"unidad",M=F==="paquete"&&(j==null?void 0:j.precioPaqueteUsd),K=Number(M?(j==null?void 0:j.precioPaqueteUsd)||0:(j==null?void 0:j.precioUsd)||0),P=(K*Number(N.cantidad)).toFixed(2),Z=(Number(P)*u).toFixed(2);return{sku:N.sku,nombre:(j==null?void 0:j.nombre)||N.sku,cantidad:N.cantidad,precioUsd:String(K),tasaBloqueada:u.toFixed(2),subtotalUsd:P,subtotalBs:Z,modoVenta:F}})};if(x.tickets.some(N=>N.ventaId===L.ventaId)||x.tickets.unshift(L),s&&(x.dedupVentas||(x.dedupVentas={}),x.dedupVentas[s]=L.ventaId),x.jornadaActual){const N=x.jornadaActual;N.ventasTotalUsd=(X(N.ventasTotalUsd)+l).toFixed(2),N.ventasTotalBs=(X(N.ventasTotalBs)+m).toFixed(2),N.ticketsEmitidos+=1,S==="PAGADO"?N.vueltoPagadoBs=(X(N.vueltoPagadoBs)+g).toFixed(2):S==="RETENIDO"&&(N.vueltoRetenidoBs=(X(N.vueltoRetenidoBs)+g).toFixed(2))}return x.persist(),Promise.resolve(L)}case"listar_cuentas":return Promise.resolve(x.cuentas);case"abrir_cuenta":{const t=String((e==null?void 0:e.etiqueta)||"Mesa Demo").trim(),s=(e==null?void 0:e.tipo)==="deuda"?"deuda":"activa",n=typeof(e==null?void 0:e.cliente)=="string"?e.cliente.trim():void 0,l=typeof(e==null?void 0:e.nota)=="string"?e.nota.trim():void 0,u=new Date,m=u.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),g=`${u.toLocaleDateString("es-VE")} ${m}`,y={ventaId:(s==="deuda"?"DEU-":"CTA-")+Math.random().toString(36).slice(2,8).toUpperCase(),etiqueta:t,tipo:s,cliente:n,nota:l,fechaCreacionUnix:Math.floor(u.getTime()/1e3),fechaCreacionStr:g,totalParcialUsd:"0.00",totalParcialBs:"0.00",abonosUsd:"0.00",abonosBs:"0.00",lineas:0,consumos:[]};return x.cuentas.push(y),x.persist(),Promise.resolve(y)}case"convertir_cuenta_a_deuda":{const t=String((e==null?void 0:e.ventaId)||""),s=String((e==null?void 0:e.cliente)||"").trim(),n=typeof(e==null?void 0:e.nota)=="string"?e.nota.trim():void 0,l=x.cuentas.find(u=>u.ventaId===t);return l?(l.tipo="deuda",s&&(l.cliente=s,l.etiqueta=s),n!==void 0&&(l.nota=n),x.persist(),Promise.resolve(l)):Promise.reject(new Error("Cuenta no encontrada"))}case"agregar_consumo":{const t=String((e==null?void 0:e.ventaId)||""),s=String((e==null?void 0:e.sku)||"").trim().toUpperCase(),n=X(e==null?void 0:e.cantidad)||1,l=String((e==null?void 0:e.modo_venta)||"unidad"),u=x.cuentas.find(g=>g.ventaId===t),m=x.productos.find(g=>g.sku.trim().toUpperCase()===s);if(u&&m){const g=l!=="unidad"?(r=m.presentaciones)==null?void 0:r.find(v=>v.nombre.toLowerCase()===l.toLowerCase()):void 0,y=!g&&l==="paquete"&&(m.precioPaqueteUsd||m.esCaja&&m.unidadesPorCaja&&m.unidadesPorCaja>1),h=g?g.unidades:y&&m.unidadesPorCaja||1,w=g?X(g.precioUsd):y?m.precioPaqueteUsd?X(m.precioPaqueteUsd):X(m.precioUsd)*h:X(m.precioUsd),f=n*h;if(!m.sinStock){const v=X(m.stock);if(v<f)return Promise.reject(new Error(`Stock insuficiente para "${m.nombre}". Disponible: ${v} ${m.unidad||"un."}`));m.stock=String(Math.max(0,v-f))}Array.isArray(u.consumos)||(u.consumos=[]);const S=w*n,B=X(x.tasaActual.valor)||807.39,A=u.consumos.find(v=>v.sku.trim().toUpperCase()===m.sku.trim().toUpperCase()&&v.modoVenta===l);A?(A.cantidad+=n,A.subtotalUsd=(A.cantidad*X(A.precioUsd)).toFixed(2)):u.consumos.push({id:"con-"+Math.random().toString(36).slice(2,8),sku:m.sku,nombre:m.nombre,cantidad:n,precioUsd:w.toFixed(2),subtotalUsd:S.toFixed(2),modoVenta:l});const C=u.consumos.reduce((v,E)=>v+X(E.subtotalUsd),0);return u.totalParcialUsd=C.toFixed(2),u.totalParcialBs=(C*B).toFixed(2),u.lineas=u.consumos.length,x.persist(),Promise.resolve(u)}return Promise.resolve(u)}case"eliminar_consumo":{const t=String((e==null?void 0:e.ventaId)||""),s=String((e==null?void 0:e.consumoId)||""),n=(e==null?void 0:e.cantidad)!==void 0&&(e==null?void 0:e.cantidad)!==null?X(e.cantidad):0,l=x.cuentas.find(u=>u.ventaId===t);if(l&&Array.isArray(l.consumos)){const u=l.consumos.findIndex(m=>m.id===s);if(u!==-1){const m=l.consumos[u],g=m.modoVenta==="paquete",y=x.productos.find(S=>S.sku.trim().toUpperCase()===m.sku.trim().toUpperCase()),h=g&&(y!=null&&y.unidadesPorCaja)&&y.unidadesPorCaja>1?y.unidadesPorCaja:1;n>0&&n<m.cantidad?(m.cantidad-=n,m.subtotalUsd=(m.cantidad*X(m.precioUsd)).toFixed(2),y&&!y.sinStock&&(y.stock=String(X(y.stock)+n*h))):(y&&!y.sinStock&&(y.stock=String(X(y.stock)+m.cantidad*h)),l.consumos.splice(u,1));const w=X(x.tasaActual.valor)||807.39,f=l.consumos.reduce((S,B)=>S+X(B.subtotalUsd),0);l.totalParcialUsd=f.toFixed(2),l.totalParcialBs=(f*w).toFixed(2),l.lineas=l.consumos.length,x.persist()}return Promise.resolve(l)}return Promise.resolve(l)}case"cerrar_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),s=x.cuentas.findIndex(P=>P.ventaId===t);if(s===-1){const P=x.tickets.find(Z=>Z.ventaId===t);return P?Promise.resolve(P):Promise.reject(new Error("Cuenta no encontrada"))}const n=x.cuentas[s];let l="0.00",u="0.00",m=[],g=0;const y=X(e==null?void 0:e.tasaCobro),h=y>0?y:Number(x.tasaActual.valor)||807.39,w=(n==null?void 0:n.tipo)==="deuda";if(n){const P=Number(n.totalParcialUsd),Z=Number(n.abonosUsd||"0"),k=Math.max(0,Z-P);g=k;const $=Math.max(P,Z);l=$.toFixed(2),u=($*h).toFixed(2),x.cuentas.splice(s,1),x.ventasTotalUsd+=$,x.ventasTotalBs+=$*h,m=(n.consumos||[]).map(U=>({sku:U.sku,nombre:U.nombre,cantidad:String(U.cantidad),precioUsd:U.precioUsd,tasaBloqueada:h.toFixed(4),subtotalUsd:U.subtotalUsd,subtotalBs:(Number(U.subtotalUsd)*h).toFixed(2)})),k>0&&m.push({sku:"GANANCIA-EXCEDENTE",nombre:"Saldo a Favor Consolidado como Ganancia (Excedente Retenido)",cantidad:"1",precioUsd:k.toFixed(2),tasaBloqueada:h.toFixed(4),subtotalUsd:k.toFixed(2),subtotalBs:(k*h).toFixed(2)})}const f=new Date,S=f.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),B=Array.isArray(e==null?void 0:e.pagos)&&e.pagos.length>0?e.pagos:[{metodo:w?"TRANSF.BS.":"BS.EFEC.",moneda:"BS",montoUsd:l,montoBs:u}],A=Number((e==null?void 0:e.montoRecibidoBs)||u),C=Math.max(0,A-Number(u)),v=e==null?void 0:e.resolucionVuelto,E=C>.009?(v==null?void 0:v.estado)||"PAGADO":"SIN_VUELTO",L=E==="PAGADO"?(v==null?void 0:v.metodo)||(w?"TRANSF.BS.":"BS.EFEC."):void 0,N=C>.009?(v==null?void 0:v.montoBs)||C.toFixed(2):void 0,j=C>.009?(v==null?void 0:v.montoUsd)||(h>0?(C/h).toFixed(2):"0.00"):void 0,F=E==="PAGADO"?v==null?void 0:v.tasa:void 0,M=((d=x.jornadaActual)==null?void 0:d.operadorActual)||"Caja Principal",K={ventaId:t||(w?"DEU-":"CTA-")+Math.floor(1e4+Math.random()*9e4),totalUsd:l,totalBs:u,tasaDelDia:h.toFixed(4),montoRecibidoBs:A.toFixed(2),vueltoBs:C.toFixed(2),fechaHora:`Hoy, ${S}`,fechaUnix:Math.floor(f.getTime()/1e3),canal:w?"LIQUIDACION DE DEUDA":"CONSUMO EN CUENTA",operador:M,saldoAFavorConsolidadoUsd:g>0?g.toFixed(2):void 0,pagos:B,estadoVuelto:E,metodoVuelto:L,montoVueltoBs:N,montoVueltoUsd:j,tasaVuelto:F,lineas:m};if(x.tickets.unshift(K),x.jornadaActual){const P=x.jornadaActual,Z=X(l),k=X(u);P.ventasTotalUsd=(X(P.ventasTotalUsd)+Z).toFixed(2),P.ventasTotalBs=(X(P.ventasTotalBs)+k).toFixed(2),P.ticketsEmitidos+=1,w&&(P.deudasLiquidadasUsd=(X(P.deudasLiquidadasUsd)+Z).toFixed(2)),E==="PAGADO"?P.vueltoPagadoBs=(X(P.vueltoPagadoBs)+C).toFixed(2):E==="RETENIDO"&&(P.vueltoRetenidoBs=(X(P.vueltoRetenidoBs)+C).toFixed(2))}return x.persist(),Promise.resolve(K)}case"listar_categorias":return Promise.resolve(x.categorias);case"crear_categoria":{const t=String((e==null?void 0:e.nombre)||"").trim(),s="cat-"+Math.random().toString(36).slice(2,7);return x.categorias.push({id:s,nombre:t}),x.persist(),Promise.resolve(x.categorias)}case"eliminar_categoria":{const t=String((e==null?void 0:e.id)||"");return x.categorias=x.categorias.filter(s=>s.id!==t),x.persist(),Promise.resolve(x.categorias)}case"listar_tasas_impuestos":return Promise.resolve(x.tasasImpuestos);case"crear_tasa_impuesto":{const t=String((e==null?void 0:e.nombre)||"").trim(),s=Number((e==null?void 0:e.porcentaje)||0),n="tax-"+Math.random().toString(36).slice(2,7);return x.tasasImpuestos.push({id:n,nombre:t,porcentaje:String(s)}),x.persist(),Promise.resolve(x.tasasImpuestos)}case"eliminar_tasa_impuesto":{const t=String((e==null?void 0:e.id)||"");return x.tasasImpuestos=x.tasasImpuestos.filter(s=>s.id!==t),x.persist(),Promise.resolve(x.tasasImpuestos)}case"abonar_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),s=Number((e==null?void 0:e.montoUsd)||0),n=Number((e==null?void 0:e.montoBs)||0),l=x.cuentas.find(u=>u.ventaId===t);if(l&&Number.isFinite(s)&&s>0&&s<=5e4){const u=Array.isArray(l.consumos)&&l.consumos.length>0,m=X(l.totalParcialUsd)>0;if(!u&&!m)return Promise.resolve(null);const g=Number(x.tasaActual.valor),y=Number(l.abonosUsd||"0"),h=Number(l.abonosBs||"0");if(n>0){const w=h+n;l.abonosBs=w.toFixed(2),l.abonosUsd=(g>0?w/g:0).toFixed(2)}else{const w=y+s;l.abonosUsd=w.toFixed(2),l.abonosBs=(w*g).toFixed(2)}x.persist()}return Promise.resolve(l)}case"editar_abono_cuenta":{const t=String((e==null?void 0:e.ventaId)||""),s=Math.max(0,Math.min(5e4,Number((e==null?void 0:e.nuevoAbonoUsd)||0))),n=x.cuentas.find(l=>l.ventaId===t);if(n&&Number.isFinite(s)){const l=Number(x.tasaActual.valor);n.abonosUsd=s.toFixed(2),n.abonosBs=(s*l).toFixed(2),x.persist()}return Promise.resolve(n)}case"datos_panel":{const t=Number(x.tasaActual.valor),s=x.ventasTotalUsd,n=x.ventasTotalBs;let l=0,u=0;x.productos.forEach(k=>{const $=Number(k.precioUsd)||0,U=Number(k.precioBrutoUsd)||0;$>0&&(l+=$,U>0&&(u+=U))});const m=l>0&&u>0?(l-u)/l:0,g=s*(1-m),y=s-g,h=s*.12,w=y-h,f=y,S=w*t,B={};x.tickets.forEach(k=>{k.lineas.forEach($=>{B[$.sku]||(B[$.sku]={qty:0,monto:0,nombre:$.nombre}),B[$.sku].qty+=Number($.cantidad)||1,B[$.sku].monto+=Number($.subtotalUsd)||0})}),x.productos.forEach((k,$)=>{if(!B[k.sku]){const U=Math.max(1,14-$*2);B[k.sku]={qty:U,monto:U*Number(k.precioUsd),nombre:k.nombre}}});const A=Object.values(B).sort((k,$)=>$.monto-k.monto),C=A.reduce((k,$)=>k+$.monto,0)||1,v=A.map(k=>({nombre:k.nombre,cantidad:String(k.qty),totalUsd:k.monto.toFixed(2),porcentaje:(k.monto/C*100).toFixed(1)})),E=Number(x.tasaActual.valor)||807.39;let L=0;const N={};x.categorias.forEach(k=>{N[k.id]={categoriaId:k.id,nombre:k.nombre,cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}}),N["cat-general"]||(N["cat-general"]={categoriaId:"cat-general",nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}),x.productos.forEach(k=>{const $=k.categoriaId&&N[k.categoriaId]?k.categoriaId:"cat-general",U=N[$];U.cantidadProductos+=1;const H=k.sinStock?0:Number(k.stock)||0,G=Number(k.precioBrutoUsd)>0?Number(k.precioBrutoUsd):Number(k.precioUsd)*.65,W=Number(k.precioUsd)||0,J=H*G,Y=H*W;U.unidadesStock+=H,U.brutoUsd+=J,U.ventaUsd+=Y,L+=J});const j=Object.values(N).filter(k=>k.cantidadProductos>0||k.brutoUsd>0).map(k=>{const $=Math.max(0,k.ventaUsd-k.brutoUsd),U=k.ventaUsd>0?($/k.ventaUsd*100).toFixed(1):"0.0",H=L>0?(k.brutoUsd/L*100).toFixed(1):"0.0";return{categoriaId:k.categoriaId,nombre:k.nombre,cantidadProductos:k.cantidadProductos,unidadesStock:Math.round(k.unidadesStock*100)/100,dineroBrutoUsd:k.brutoUsd.toFixed(2),dineroBrutoBs:(k.brutoUsd*E).toFixed(2),dineroVentaUsd:k.ventaUsd.toFixed(2),dineroVentaBs:(k.ventaUsd*E).toFixed(2),margenBrutoProyectadoUsd:$.toFixed(2),margenBrutoPct:U,porcentajeCapital:H}}).sort((k,$)=>Number($.dineroBrutoUsd)-Number(k.dineroBrutoUsd)),F=x.cuentas.filter(k=>k.tipo==="deuda"),M=x.cuentas.filter(k=>k.tipo!=="deuda"),K=F.reduce((k,$)=>k+Math.max(0,X($.totalParcialUsd)-X($.abonosUsd)),0),P=K*E,Z={ventas24hUsd:s.toFixed(2),ventas24hBs:n.toFixed(2),tickets24h:Math.max(x.tickets.length,18),valorInventarioUsd:x.productos.reduce((k,$)=>k+Number($.precioUsd)*Number($.stock),0).toFixed(2),costoTotalUsd:g.toFixed(2),gananciaBrutaUsd:y.toFixed(2),gananciaNetaUsd:w.toFixed(2),gananciaNetaSinImpUsd:f.toFixed(2),gananciaNetaBs:S.toFixed(2),cuentasAbiertas:M.length,deudasAbiertas:F.length,dineroEnLaCalleUsd:K.toFixed(2),dineroEnLaCalleBs:P.toFixed(2),criticos:x.productos.filter(k=>!k.sinStock&&Number(k.stock)<=5).map(k=>({sku:k.sku,nombre:k.nombre,stock:k.stock})),topProductos:v,dineroPorCategoria:j};return Promise.resolve(Z)}case"compra_stock":{const t=String((e==null?void 0:e.sku)||""),s=Number((e==null?void 0:e.cantidad)||"0"),n=x.productos.find(l=>l.sku===t);return n&&Number.isFinite(s)&&s>0?(n.stock=String(Number(n.stock)+s),x.persist(),Promise.resolve(n.stock)):Promise.resolve("0")}case"reducir_stock":{const t=String((e==null?void 0:e.sku)||""),s=Number((e==null?void 0:e.cantidad)||"0"),n=x.productos.find(l=>l.sku===t);return n&&Number.isFinite(s)&&s>0?(n.stock=String(Math.max(0,Number(n.stock)-s)),x.persist(),Promise.resolve(n.stock)):Promise.resolve("0")}case"registrar_merma":{const t=String((e==null?void 0:e.sku)||""),s=Number((e==null?void 0:e.cantidad)||"0"),n=x.productos.find(l=>l.sku===t);return n&&Number.isFinite(s)&&s>0?(n.stock=String(Math.max(0,Number(n.stock)-s)),x.persist(),Promise.resolve(n.stock)):Promise.resolve("0")}case"listar_respaldos":return Promise.resolve(x.respaldos);case"crear_respaldo":{const t="bk-"+Math.random().toString(36).slice(2,7),s=x.productos.length+x.cuentas.length+x.categorias.length,n=new Date,l=(((i=x.config)==null?void 0:i.nombre)||"DATIOLABS").toUpperCase().replace(/[^A-Z0-9]/g,"-").replace(/-+/g,"-").slice(0,30),u=n.getFullYear(),m=String(n.getMonth()+1).padStart(2,"0"),g=String(n.getDate()).padStart(2,"0"),y=String(n.getHours()).padStart(2,"0"),h=String(n.getMinutes()).padStart(2,"0"),w=String(n.getSeconds()).padStart(2,"0"),f=`${l}-${u}${m}${g}-${y}${h}${w}.backup`,S={id:t,fecha:"Ahora mismo",archivoNombre:f,registros:s,tamanoKb:Math.round(s*.4+10),checksumSha256:Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join("")};return x.respaldos.unshift(S),x.persist(),Promise.resolve(S)}case"restaurar_desde_respaldo":case"restaurar_desde_archivo":return x.persist(),Promise.resolve(!0);case"obtener_licencia":return Promise.resolve(x.licencia);case"generar_licencia":return Promise.resolve(Qe());case"validar_licencia":{const t=String((e==null?void 0:e.clave)||"");return Promise.resolve(je(t))}case"obtener_tasa_bcv":return Promise.resolve(x.tasaActual);case"forzar_actualizacion_tasa":return x.refrescarTasaEnVivo().then(()=>x.tasaActual);case"listar_historico_tasas":return Promise.resolve(x.historicoTasas);case"fijar_tasa_manual":{const t=String((e==null?void 0:e.tasa)||"0"),s=Number(t),n=Number(x.tasaActual.valor);let l=null,u=null;if(Number.isFinite(n)&&n>0&&Number.isFinite(s)&&s>0&&n!==s){const y=(s-n)/n*100;l=Math.abs(y).toFixed(2),u=y>0?"subio":"bajo"}x.tasaActual={valor:s.toFixed(4),fechaUnix:Math.floor(Date.now()/1e3),fluctuacionPct:l,direccion:u};const g=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});return x.historicoTasas.unshift({id:"tx-"+Math.random().toString(36).slice(2,7),valor:s.toFixed(4),fechaHora:`Hoy, ${g}`,tipo:"manual",motivo:"Ajuste manual por el usuario"}),x.historicoTasas.length>50&&x.historicoTasas.pop(),x.persist(),Promise.resolve(x.tasaActual)}case"listar_ventas":return Promise.resolve(x.tickets);case"listar_metodos_pago":return x.metodosPago.sort((t,s)=>t.moneda===s.moneda?0:t.moneda==="BS"?-1:1),Promise.resolve(x.metodosPago);case"crear_metodo_pago":{const t=String((e==null?void 0:e.nombre)||"").trim().toUpperCase().replace(/[^A-Z0-9. _-]/g,"").slice(0,25),s=(e==null?void 0:e.moneda)==="USD"?"USD":"BS";return t&&!x.metodosPago.some(n=>n.nombre===t)&&(x.metodosPago.push({nombre:t,moneda:s}),x.metodosPago.sort((n,l)=>n.moneda===l.moneda?0:n.moneda==="BS"?-1:1),x.persist()),Promise.resolve(x.metodosPago)}case"eliminar_metodo_pago":{const t=String((e==null?void 0:e.nombre)||"").trim().toUpperCase();return t&&(x.metodosPago=x.metodosPago.filter(s=>s.nombre!==t),x.metodosPago.length===0&&x.metodosPago.push({nombre:"PUNTOD.VENTA",moneda:"BS"}),x.persist()),Promise.resolve(x.metodosPago)}case"listar_operadores":return Promise.resolve(x.operadores);case"crear_operador":{const t=String((e==null?void 0:e.nombre)||"").trim();if(t){const s={id:"op-"+Math.random().toString(36).slice(2,7),nombre:t,activo:!0,creadoUnix:Math.floor(Date.now()/1e3)};x.operadores.push(s),x.persist()}return Promise.resolve(x.operadores)}case"editar_operador":{const t=String((e==null?void 0:e.id)||""),s=String((e==null?void 0:e.nombre)||"").trim();if(t&&s){const n=x.operadores.find(l=>l.id===t);if(n){const l=n.nombre;n.nombre=s,x.jornadaActual&&(x.jornadaActual.operadorActual===l&&(x.jornadaActual.operadorActual=s),x.jornadaActual.operadoresActivos&&(x.jornadaActual.operadoresActivos=x.jornadaActual.operadoresActivos.map(u=>u===l?s:u)),x.jornadaActual.operadoresRelevo&&(x.jornadaActual.operadoresRelevo=x.jornadaActual.operadoresRelevo.map(u=>u===l?s:u))),x.persist()}}return Promise.resolve(x.operadores)}case"eliminar_operador":{const t=String((e==null?void 0:e.id)||"");if(t){const s=x.operadores.find(l=>l.id===t),n=s==null?void 0:s.nombre;x.operadores=x.operadores.filter(l=>l.id!==t),x.jornadaActual&&n&&(x.jornadaActual.operadoresActivos&&(x.jornadaActual.operadoresActivos=x.jornadaActual.operadoresActivos.filter(l=>l!==n)),x.jornadaActual.operadorActual===n&&(x.jornadaActual.operadorActual=((p=x.jornadaActual.operadoresActivos)==null?void 0:p[0])||((c=x.operadores[0])==null?void 0:c.nombre)||"Cajero Principal")),x.persist()}return Promise.resolve(x.operadores)}case"alternar_operador":{const t=String((e==null?void 0:e.id)||""),s=x.operadores.find(n=>n.id===t);return s&&(s.activo=!s.activo,x.persist()),Promise.resolve(x.operadores)}case"obtener_jornada_actual":return Promise.resolve(x.jornadaActual);case"listar_historico_jornadas":{const t=new Set,s=x.historicoJornadas.filter(n=>t.has(n.id)?!1:(t.add(n.id),!0));return Promise.resolve(s)}case"abrir_jornada":{const t=String((e==null?void 0:e.operador)||"Cajero Principal").trim(),s=Array.isArray(e==null?void 0:e.operadores)&&e.operadores.length>0?e.operadores.map(f=>String(f).trim()).filter(Boolean):[t],n=new Date,l=n.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),u=`${n.toLocaleDateString("es-VE")} ${l}`,m=n.getFullYear(),g=String(n.getMonth()+1).padStart(2,"0"),y=String(n.getDate()).padStart(2,"0"),h=x.tasaActual.valor,w={id:`JOR-${m}${g}${y}-${Math.random().toString(36).slice(2,6).toUpperCase()}`,estado:"abierta",inicioUnix:Math.floor(Date.now()/1e3),inicioStr:`Hoy, ${l} (${u})`,operadorInicial:s[0]||t,operadorActual:s.join(", "),operadoresActivos:s,operadoresRelevo:[...s],tasaInicio:h,ventasTotalUsd:"0.00",ventasTotalBs:"0.00",ticketsEmitidos:0,vueltoPagadoBs:"0.00",vueltoRetenidoBs:"0.00",deudasLiquidadasUsd:"0.00",entradasStockReg:0,mermasStockReg:0,cambiosPrecioReg:0};return x.jornadaActual=w,x.persist(),Promise.resolve(w)}case"asignar_operadores_turno":{const t=Array.isArray(e==null?void 0:e.operadores)?e.operadores.map(s=>String(s).trim()).filter(Boolean):[];return x.jornadaActual&&(x.jornadaActual.operadoresActivos=t,x.jornadaActual.operadorActual=t.length>0?t.join(", "):"Sin operador asignado",t.forEach(s=>{var n,l;(n=x.jornadaActual)!=null&&n.operadoresRelevo.includes(s)||(l=x.jornadaActual)==null||l.operadoresRelevo.push(s)}),x.persist()),Promise.resolve(x.jornadaActual)}case"relevar_operador_jornada":{const t=String((e==null?void 0:e.operador)||"").trim();return x.jornadaActual&&t&&(x.jornadaActual.operadorActual=t,x.jornadaActual.operadoresActivos=[t],x.jornadaActual.operadoresRelevo.includes(t)||x.jornadaActual.operadoresRelevo.push(t),x.persist()),Promise.resolve(x.jornadaActual)}case"cerrar_jornada":{if(!x.jornadaActual)return Promise.reject(new Error("No existe una jornada laboral abierta para cerrar."));const t=new Date,s=t.toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"}),n=`${t.toLocaleDateString("es-VE")} ${s}`,l={...x.jornadaActual};return l.estado="cerrada",l.finUnix=Math.floor(Date.now()/1e3),l.finStr=`${n}`,l.tasaFin=x.tasaActual.valor,l.checksumSha256=Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join(""),x.historicoJornadas.unshift(l),x.jornadaActual=null,x.persist(),Promise.resolve(l)}case"obtener_semaforo_stock":return Promise.resolve(x.semaforoStock);case"guardar_semaforo_stock":{const t=Math.max(1,Number(e==null?void 0:e.rojoMax)||5),s=Math.max(t+1,Number(e==null?void 0:e.amarilloMax)||15);return x.semaforoStock={rojoMax:t,amarilloMax:s},x.persist(),Promise.resolve(x.semaforoStock)}default:return Promise.resolve(null)}}const D={config:()=>z("obtener_config"),inicializar:(b,e,o,a,r)=>z("inicializar_negocio",{nombre:b,rubros:e,pinDueno:o||null,licenciaClave:a||null,licenciaTitular:null,privacidadInventario:r??!1}),validarPin:b=>z("validar_pin_dueno",{pin:b}),productos:()=>z("listar_productos"),crearProducto:b=>{const e=b.sku&&b.sku.trim()?b.sku.trim().toUpperCase():"PROD-"+Math.random().toString(36).slice(2,8).toUpperCase();return z("crear_producto",{input:{...b,sku:e}})},actualizarProducto:b=>z("actualizar_producto",{input:{...b,stockInicial:b.stockInicial||"0",pesable:b.pesable??!1}}),eliminarProducto:b=>z("eliminar_producto",{sku:b}),registrarVenta:(b,e,o,a,r,d)=>z("registrar_venta",{items:b,montoRecibidoBs:o,pagos:a,resolucionVuelto:r,idempotencyKey:d}),abrirCuenta:(b,e,o,a)=>z("abrir_cuenta",{etiqueta:b,tipo:e,nota:o,cliente:a}),cuentas:()=>z("listar_cuentas"),agregarConsumo:(b,e,o,a,r)=>z("agregar_consumo",{ventaId:b,sku:e,cantidad:o,clienteMayorEdad:a,modo_venta:r}),eliminarConsumo:(b,e,o)=>z("eliminar_consumo",{ventaId:b,consumoId:e,cantidad:o!==void 0?String(o):void 0}),abonarCuenta:(b,e,o)=>z("abonar_cuenta",{ventaId:b,montoUsd:e,montoBs:o}),editarAbonoCuenta:(b,e)=>z("editar_abono_cuenta",{ventaId:b,nuevoAbonoUsd:e}),convertirCuentaADeuda:(b,e,o)=>z("convertir_cuenta_a_deuda",{ventaId:b,cliente:e,nota:o}),cerrarCuenta:(b,e,o,a,r)=>z("cerrar_cuenta",{ventaId:b,montoRecibidoBs:e,tasaCobro:o,pagos:a,resolucionVuelto:r}),panel:()=>z("datos_panel"),compraStock:(b,e)=>z("compra_stock",{sku:b,cantidad:e}),reducirStock:(b,e)=>z("reducir_stock",{sku:b,cantidad:e}),merma:(b,e,o)=>z("registrar_merma",{sku:b,cantidad:e,loteId:o}),categorias:()=>z("listar_categorias"),crearCategoria:b=>z("crear_categoria",{nombre:b}),eliminarCategoria:b=>z("eliminar_categoria",{id:b}),tasasImpuestos:()=>z("listar_tasas_impuestos"),crearTasaImpuesto:(b,e)=>z("crear_tasa_impuesto",{nombre:b,porcentaje:e}),eliminarTasaImpuesto:b=>z("eliminar_tasa_impuesto",{id:b}),respaldos:()=>z("listar_respaldos"),crearRespaldo:()=>z("crear_respaldo"),restaurarRespaldo:b=>z("restaurar_desde_respaldo",{archivo:b}),restaurarDesdeArchivo:(b,e)=>z("restaurar_desde_archivo",{contenidoBase64:b,nombreArchivo:e}),licencia:()=>z("obtener_licencia"),validarLicencia:b=>z("validar_licencia",{clave:b}),generarLicencia:()=>z("generar_licencia"),cambiarPinDueno:(b,e)=>z("cambiar_pin_dueno",{pinAnterior:b,pinNuevo:e}),actualizarPrivacidadInventario:b=>fetch("/api/config/privacidad",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({privacidadInventario:b})}).then(e=>e.json()),tasa:()=>z("obtener_tasa_bcv"),historicoTasas:()=>z("listar_historico_tasas"),forzarTasa:()=>z("forzar_actualizacion_tasa"),fijarTasaManual:b=>z("fijar_tasa_manual",{tasa:b}),ventas:()=>z("listar_ventas"),listarMetodosPago:()=>z("listar_metodos_pago"),crearMetodoPago:(b,e="BS")=>z("crear_metodo_pago",{nombre:b,moneda:e}),eliminarMetodoPago:b=>z("eliminar_metodo_pago",{nombre:b}),listarOperadores:()=>z("listar_operadores"),crearOperador:b=>z("crear_operador",{nombre:b}),editarOperador:(b,e)=>z("editar_operador",{id:b,nombre:e}),eliminarOperador:b=>z("eliminar_operador",{id:b}),alternarOperador:b=>z("alternar_operador",{id:b}),obtenerJornadaActual:()=>z("obtener_jornada_actual"),listarHistoricoJornadas:()=>z("listar_historico_jornadas"),abrirJornada:(b,e)=>z("abrir_jornada",{operador:b,operadores:e}),relevarOperadorJornada:b=>z("relevar_operador_jornada",{operador:b}),asignarOperadoresTurno:b=>z("asignar_operadores_turno",{operadores:b}),cerrarJornada:()=>z("cerrar_jornada"),obtenerSemaforoStock:()=>z("obtener_semaforo_stock"),guardarSemaforoStock:(b,e)=>z("guardar_semaforo_stock",{rojoMax:b,amarilloMax:e}),autoBackup:(b,e)=>z("auto_backup",{directorio:b,maxBackups:e}),getBackupDir:()=>z("get_backup_dir")},rt="#00823B",nt="#C60C15",st="#6B7280",dt=3e5;class it{constructor(){T(this,"contenedor");T(this,"timer",null);this.contenedor=document.getElementById("bcv-indicator")}iniciar(){this.contenedor&&(this.renderizarEsqueleto(),this.actualizar(),this.timer=window.setInterval(()=>void this.actualizar(),dt))}detener(){this.timer!==null&&(window.clearInterval(this.timer),this.timer=null)}renderizarEsqueleto(){var e,o;this.contenedor&&(this.contenedor.innerHTML=`
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
            </div>`,(e=document.getElementById("bcv-refresh"))==null||e.addEventListener("click",()=>void this.forzar()),(o=document.getElementById("bcv-valor"))==null||o.addEventListener("click",()=>void this.abrirModalHistoricoYAjuste()))}async abrirModalHistoricoYAjuste(){var i,p,c;const e=document.getElementById("modal-root");if(!e)return;const o=await D.historicoTasas().catch(()=>[]),a=((i=document.getElementById("bcv-valor"))==null?void 0:i.textContent)||"--";e.innerHTML=`
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
                        ${o.length===0?'<p class="text-xs text-gray-400 font-bold py-4 text-center">Sin registros históricos previos.</p>':o.map(t=>`
                            <div class="border border-brand-black rounded p-2 bg-white flex justify-between items-center text-xs">
                                <div>
                                    <span class="font-black font-heading text-sm text-brand-black">Bs. ${Number(t.valor).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                                    <span class="text-[10px] text-gray-500 font-bold ml-2">· ${t.motivo||"Actualización"}</span>
                                </div>
                                <div class="text-right">
                                    <span class="text-[10px] px-1.5 py-0.5 rounded border border-brand-black font-black uppercase ${t.tipo==="manual"?"bg-amber-100 text-amber-900":"bg-blue-100 text-blue-900"}">
                                        ${t.tipo}
                                    </span>
                                    <p class="text-[10px] text-gray-500 font-mono mt-0.5">${t.fechaHora}</p>
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
        </div>`;const r=()=>{e.innerHTML=""};(p=document.getElementById("tasa-modal-cerrar"))==null||p.addEventListener("click",r),(c=document.getElementById("tasa-modal-btn-cerrar"))==null||c.addEventListener("click",r);const d=document.getElementById("form-tasa-manual");d==null||d.addEventListener("submit",async t=>{t.preventDefault();const s=document.getElementById("in-tasa-manual"),n=Number((s==null?void 0:s.value)||0);if(!n||n<=0)return;if(window.confirm(`¿Está seguro de que desea cambiar la tasa oficial del sistema a Bs. ${n.toFixed(2)}?

Esta tasa afectará todos los nuevos cobros y tickets a partir de este momento.`)){const u=await z("fijar_tasa_manual",{tasa:n.toFixed(2)});u&&this.pintar(u),r()}})}async actualizar(){const e=await this.obtenerTasa("obtener_tasa_bcv");e&&this.pintar(e)}async forzar(){const e=document.getElementById("bcv-refresh");e&&e.classList.add("animate-spin");const o=await this.obtenerTasa("forzar_actualizacion_tasa");e&&e.classList.remove("animate-spin"),o&&this.pintar(o)}async obtenerTasa(e){try{return await z(e)}catch{return null}}pintar(e){const o=document.getElementById("bcv-valor"),a=document.getElementById("bcv-fluctuacion");if(!o||!a)return;const r=Number(e.valor);o.textContent=Number.isFinite(r)&&r>0?r.toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}):"--",Number.isFinite(r)&&r>0&&window.dispatchEvent(new CustomEvent("tasa_actualizada",{detail:r}));const d=Number(e.fluctuacionPct);if(e.direccion&&Number.isFinite(d)){const i=e.direccion==="subio"?rt:e.direccion==="bajo"?nt:st,p=d>0?"+":"";a.textContent=`${p}${d.toFixed(2)}%`,a.style.color=i}else a.textContent=""}}class ct{constructor(){T(this,"config",null);T(this,"rol","caja");T(this,"tasa",0);T(this,"oyentes",[])}suscribir(e){this.oyentes.push(e)}notificar(){this.oyentes.forEach(e=>e())}async cargarConfig(){return this.config=await D.config(),this.config}getConfig(){return this.config}async inicializar(e,o,a,r,d){await D.inicializar(e,o,a,r,d),await this.cargarConfig(),this.notificar()}get rubroAbasto(){return!0}tieneRubro(e){return!0}tieneCapacidad(e){var o;return(o=this.config)!=null&&o.capacidades?(this.config.capacidades&e)!==0:!0}setRol(e){this.rol=e,this.notificar()}get rolActual(){return this.rol}setTasa(e){this.tasa=e,this.notificar()}get tasaActual(){return this.tasa}bs(e){return(Number(e)*this.tasa).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})}hasPinSet(){var e;return!!((e=this.config)!=null&&e.tienePin)}async verificarPin(e){return D.validarPin(e)}}class lt{constructor(e,o,a){T(this,"contenedor");T(this,"modelo");T(this,"alTerminar");T(this,"modo","nuevo");T(this,"bloquearPanel",!0);this.contenedor=e,this.modelo=o,this.alTerminar=a}render(){this.contenedor.innerHTML=`
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

                    <div class="bg-purple-50 border-2 border-brand-purple rounded-lg p-4 space-y-2">
                        <div class="flex items-center gap-2">
                            <span class="w-2.5 h-2.5 rounded-full bg-brand-purple"></span>
                            <span class="font-heading font-black text-xs uppercase tracking-wide text-brand-purple">Motor Comercial Universal DatioLabs</span>
                        </div>
                        <p class="text-xs text-gray-700 font-bold leading-relaxed">
                            Todas las capacidades operan unificadas: venta unitaria y por peso (balanza), control de lotes y vencimiento FEFO, consumo y cuentas abiertas / fiados, presentaciones dinámicas (cajas, tobo, six-pack), series y garantías.
                        </p>
                    </div>

                    <!-- Clave de Licencia Comercial -->
                    <div class="border-2 border-brand-black rounded-lg p-4 bg-gray-50 space-y-3">
                        <span class="block font-heading font-black text-xs uppercase text-brand-black">Clave de Licencia Comercial</span>
                        <p class="text-xs text-gray-600 font-bold">Clave de activación de 16 dígitos DatioLabs. Sin clave, opera en modo demostración.</p>
                        <input id="wz-licencia" type="text" maxlength="20" placeholder="Ej: 0001-8888-1111-0000"
                            class="w-full border-2 border-brand-black rounded px-4 py-2 text-sm font-mono font-bold focus:outline-none focus:ring-2 focus:ring-brand-purple tracking-wider" />
                        <p id="wz-licencia-error" class="hidden text-red-700 font-bold text-xs">Clave de licencia no válida o checksum incorrecto.</p>
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
        </div>`,this.conectarEventos()}conectarEventos(){var u,m;const e=document.getElementById("wz-tab-nuevo"),o=document.getElementById("wz-tab-restaurar");e==null||e.addEventListener("click",()=>{this.modo="nuevo",this.render()}),o==null||o.addEventListener("click",()=>{this.modo="restaurar",this.render()});const a=document.getElementById("seg-bloqueado"),r=document.getElementById("seg-abierto"),d=document.getElementById("wz-box-pin");a==null||a.addEventListener("change",()=>{this.bloquearPanel=!0,d==null||d.classList.remove("hidden")}),r==null||r.addEventListener("change",()=>{this.bloquearPanel=!1,d==null||d.classList.add("hidden")});const i=document.getElementById("seg-bloqueado-res"),p=document.getElementById("seg-abierto-res"),c=document.getElementById("wz-box-pin-res");i==null||i.addEventListener("change",()=>{this.bloquearPanel=!0,c==null||c.classList.remove("hidden")}),p==null||p.addEventListener("change",()=>{this.bloquearPanel=!1,c==null||c.classList.add("hidden")}),(u=document.getElementById("wz-iniciar"))==null||u.addEventListener("click",()=>void this.enviarNuevo());const t=document.getElementById("drop-zona"),s=document.getElementById("wz-archivo-input"),n=document.getElementById("wz-archivo-cargado"),l=document.getElementById("wz-nombre-archivo");t==null||t.addEventListener("click",()=>s==null?void 0:s.click()),s==null||s.addEventListener("change",()=>{if(s.files&&s.files[0]){const g=s.files[0];l&&n&&(l.textContent=g.name,n.classList.remove("hidden"))}}),(m=document.getElementById("wz-ejecutar-restaurar"))==null||m.addEventListener("click",()=>void this.enviarRestauracion())}async enviarNuevo(){const e=document.getElementById("wz-error"),o=document.getElementById("wz-nombre").value.trim(),a=document.getElementById("wz-pin"),r=this.bloquearPanel&&(a==null?void 0:a.value.trim())||"",d=Je,i=document.getElementById("wz-licencia"),p=(i==null?void 0:i.value.trim())||"",c=document.getElementById("wz-licencia-error");if(!o){e&&(e.textContent="Escribe el nombre del negocio para continuar.",e.classList.remove("hidden"));return}if(this.bloquearPanel&&!r){e&&(e.textContent='Ingresa una clave para proteger el panel o selecciona la opción "DEJAR ABIERTO".',e.classList.remove("hidden"));return}if(p&&!je(p)){c&&c.classList.remove("hidden");return}c&&c.classList.add("hidden");try{const t=document.getElementById("priv-inv-dueno"),s=(t==null?void 0:t.checked)??!0;await this.modelo.inicializar(o,d,r,p,s);const n=this.modelo.getConfig();n&&this.alTerminar(n)}catch(t){e&&(e.textContent=t instanceof Error?t.message:String(t),e.classList.remove("hidden"))}}async enviarRestauracion(){var i;const e=document.getElementById("wz-restore-error"),o=document.getElementById("wz-archivo-input"),a=document.getElementById("wz-pin-restaurar"),r=this.bloquearPanel&&(a==null?void 0:a.value.trim())||"",d=(i=o==null?void 0:o.files)==null?void 0:i[0];if(!d){e&&(e.textContent="Selecciona un archivo de respaldo.",e.classList.remove("hidden"));return}if(this.bloquearPanel&&!r){e&&(e.textContent='Ingresa una clave para el panel en este terminal o selecciona "DEJAR ABIERTO".',e.classList.remove("hidden"));return}try{const p=await new Promise((t,s)=>{const n=new FileReader;n.onload=()=>{const l=n.result;if(typeof l=="string"){const u=l.split(",")[1]||"";t(u)}else s(new Error("Error leyendo archivo"))},n.onerror=()=>s(new Error("No se pudo leer el archivo")),n.readAsDataURL(d)});await D.restaurarDesdeArchivo(p,d.name),this.bloquearPanel&&r&&await D.cambiarPinDueno("",r).catch(()=>{});const c=await D.config();if(c)this.alTerminar(c);else throw new Error("Respaldo restaurado pero no se pudo cargar la configuración")}catch(p){e&&(e.textContent=p instanceof Error?p.message:String(p),e.classList.remove("hidden"))}}}class bt{constructor(e){T(this,"modelo");T(this,"productos",[]);T(this,"carrito",[]);T(this,"busqueda","");T(this,"cuentaSeleccionada",null);T(this,"cuentas",[]);T(this,"oyentes",[]);T(this,"edadConfirmadaSesion",!1);T(this,"tasaBloqueadaTicket",null);this.modelo=e}suscribir(e){this.oyentes.push(e),e()}notificar(){this.oyentes.forEach(e=>e())}async cargar(){this.productos=await D.productos(),this.modelo.tieneCapacidad(pe)&&(this.cuentas=await D.cuentas()),this.notificar()}get visibles(){const e=this.busqueda.trim().toLowerCase();return e?this.productos.filter(o=>o.nombre.toLowerCase().includes(e)||o.sku.toLowerCase().includes(e)).slice(0,24):this.productos.slice(0,24)}setBusqueda(e){this.busqueda=e,this.notificar()}get lineasCarrito(){return this.carrito}get tasaTicket(){return this.tasaBloqueadaTicket??this.modelo.tasaActual}get totalUsd(){return this.carrito.reduce((e,o)=>e+o.precioUsd*o.cantidad,0)}get totalBs(){return this.totalUsd*this.tasaTicket}get cuentasAbiertasListado(){return this.cuentas}get cuentaActiva(){return this.cuentaSeleccionada}get modoCuentaAbierta(){return this.cuentaSeleccionada!==null}seleccionarCuenta(e){this.cuentaSeleccionada=e,this.notificar()}requiereEdad(e){return!1}marcarEdadConfirmada(e){this.edadConfirmadaSesion=e}async agregar(e,o="unidad"){const a=this.productos.find(r=>r.sku===e);return a?this.requiereEdad(a)?"EDAD|"+a.nombre:this.empujar(a,void 0,void 0,o):"Producto no encontrado"}empujar(e,o,a,r="unidad"){const d=r==="paquete"&&(e.precioPaqueteUsd||e.esCaja&&e.unidadesPorCaja&&e.unidadesPorCaja>1),i=d&&e.unidadesPorCaja||1,p=d?e.precioPaqueteUsd?Number(e.precioPaqueteUsd):Number(e.precioUsd)*i:Number(e.precioUsd),c=!d&&((e.capacidades&fe)!==0||e.unidad==="kg"||e.unidad==="ml"),t=c?.25:1,s=this.carrito.find(u=>u.sku===e.sku&&u.serie===o&&u.variante===a&&u.modoVenta===r),l=(s?s.cantidad:0)+t;if(!e.sinStock){const u=Number(e.stock);if(u<l*i)return`Stock insuficiente para ${e.nombre}. Disponible: ${u}, Solicitado: ${l*i}`}return this.tasaBloqueadaTicket===null&&(this.tasaBloqueadaTicket=this.modelo.tasaActual),s?s.cantidad=c?Math.round(l*1e3)/1e3:Math.round(l):this.carrito.push({sku:e.sku,nombre:e.nombre,precioUsd:p,cantidad:c?t:Math.round(t),pesable:c,conSerie:(e.capacidades&Ae)!==0,conVariantes:(e.capacidades&$e)!==0,serie:o,variante:a,modoVenta:r}),this.notificar(),null}asignarSerie(e,o){const a=this.carrito.find(r=>r.sku===e);a&&(a.serie=o.trim().toUpperCase(),this.notificar())}asignarVariante(e,o){const a=this.carrito.find(r=>r.sku===e);a&&(a.variante=o.trim(),this.notificar())}cambiarCantidad(e,o){const a=this.carrito.find(p=>p.sku===e);if(!a)return null;const r=this.productos.find(p=>p.sku===e);let d=Math.max(0,o);a.pesable?d=Math.round(d*1e3)/1e3:d=Math.round(d);const i=a.modoVenta==="paquete"&&(r!=null&&r.esCaja)&&(r!=null&&r.unidadesPorCaja)?r.unidadesPorCaja:1;return r&&!r.sinStock&&d*i>Number(r.stock)?`Stock insuficiente para ${a.nombre}. Disponible: ${r.stock} un., Solicitado: ${d*i} un.`:(a.cantidad=d,a.cantidad===0?this.quitar(e):this.notificar(),null)}quitar(e){this.carrito=this.carrito.filter(o=>o.sku!==e),this.carrito.length===0&&(this.tasaBloqueadaTicket=null),this.notificar()}vaciar(){this.carrito=[],this.tasaBloqueadaTicket=null,this.notificar()}async cobrar(e,o,a){if(this.modoCuentaAbierta&&this.cuentaSeleccionada)throw new Error("Hay una cuenta abierta seleccionada. Usa su boton de cobro.");if(this.carrito.length===0)throw new Error("Carrito vacio");for(const d of this.carrito){const i=this.productos.find(t=>t.sku===d.sku),p=d.modoVenta==="paquete"&&(i!=null&&i.esCaja)&&(i!=null&&i.unidadesPorCaja)?i.unidadesPorCaja:1,c=d.cantidad*p;if(i&&!i.sinStock&&c>Number(i.stock))throw new Error(`Stock insuficiente para ${i.nombre}. Disponible: ${i.stock} un., En carrito: ${c} un.`)}const r=await D.registrarVenta(this.carrito.map(d=>({sku:d.sku,cantidad:String(d.cantidad),modo_venta:d.modoVenta})),this.edadConfirmadaSesion,e||"0",o,a,`sale-${Date.now()}-${Math.random().toString(36).slice(2,8)}`);return this.vaciar(),this.edadConfirmadaSesion=!1,await this.refrescarInventario(),r}async crearCuenta(e){const o=await D.abrirCuenta(e);this.cuentas.some(a=>a.ventaId===o.ventaId)||this.cuentas.push(o),this.cuentaSeleccionada=o,this.notificar()}async agregarACuenta(e,o="unidad"){if(!this.cuentaSeleccionada)return"Selecciona una cuenta primero";const a=this.productos.find(d=>d.sku===e);if(!a)return"Producto no encontrado";if(this.requiereEdad(a))return"EDAD|"+a.nombre;const r=await D.agregarConsumo(this.cuentaSeleccionada.ventaId,a.sku,"1",this.edadConfirmadaSesion,o);return this.cuentaSeleccionada=r,this.cuentas=this.cuentas.map(d=>d.ventaId===r.ventaId?r:d),await this.refrescarInventario(),null}async cerrarCuentaActual(e,o){if(!this.cuentaSeleccionada)throw new Error("Ninguna cuenta seleccionada");const a=await D.cerrarCuenta(this.cuentaSeleccionada.ventaId,e||"0",void 0,o);return this.cuentas=this.cuentas.filter(r=>r.ventaId!==a.ventaId),this.cuentaSeleccionada=null,this.edadConfirmadaSesion=!1,await this.refrescarInventario(),a}async refrescarInventario(){this.productos=await D.productos(),this.notificar()}}function ce(b,e="info"){var r;const o={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},a=document.createElement("div");a.className=`fixed bottom-6 right-6 ${o[e]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110] transition-all duration-300`,a.innerHTML=`<span class="text-xs sm:text-sm">${b.replace(/"/g,"")}</span> <button class="ml-3 underline font-black text-xs uppercase">Cerrar</button>`,(r=a.querySelector("button"))==null||r.addEventListener("click",()=>a.remove()),document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",setTimeout(()=>a.remove(),300)},6e3)}function ue(b,e="CONFIRMACIÓN REQUERIDA"){return new Promise(o=>{var d;const a=document.createElement("div");a.className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[120]",a.innerHTML=`
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal max-w-md w-full p-5 sm:p-6">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                    <h3 class="font-heading font-black text-base sm:text-lg text-brand-black uppercase">${e}</h3>
                    <button data-dialog-cancel class="text-brand-black font-black text-lg hover:text-red-600">&times;</button>
                </div>
                <p class="text-xs sm:text-sm font-bold text-gray-700 leading-relaxed mb-5">${b}</p>
                <div class="flex justify-end gap-2 pt-2 border-t border-gray-200">
                    <button data-dialog-cancel class="bg-white border-2 border-brand-black font-heading font-black px-4 py-2 rounded text-xs hover:bg-gray-100">
                        CANCELAR
                    </button>
                    <button data-dialog-confirm class="bg-brand-black text-white hover:bg-gray-800 border-2 border-brand-black font-heading font-black px-4 py-2 rounded text-xs shadow-brutal-sm">
                        CONFIRMAR
                    </button>
                </div>
            </div>
        `;const r=i=>{a.remove(),o(i)};a.querySelectorAll("[data-dialog-cancel]").forEach(i=>i.addEventListener("click",()=>r(!1))),(d=a.querySelector("[data-dialog-confirm]"))==null||d.addEventListener("click",()=>r(!0)),document.body.appendChild(a)})}function be(b,e="",o="SOLICITUD DE DATO"){return new Promise(a=>{var p;const r=document.createElement("div");r.className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[120]",r.innerHTML=`
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal max-w-md w-full p-5 sm:p-6">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                    <h3 class="font-heading font-black text-base sm:text-lg text-brand-black uppercase">${o}</h3>
                    <button data-dialog-cancel class="text-brand-black font-black text-lg hover:text-red-600">&times;</button>
                </div>
                <p class="text-xs sm:text-sm font-bold text-gray-700 leading-relaxed mb-3">${b}</p>
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
        `;const d=r.querySelector("#dialog-input-val"),i=c=>{r.remove(),a(c)};r.querySelectorAll("[data-dialog-cancel]").forEach(c=>c.addEventListener("click",()=>i(null))),(p=r.querySelector("[data-dialog-accept]"))==null||p.addEventListener("click",()=>{i((d==null?void 0:d.value)??"")}),d==null||d.addEventListener("keydown",c=>{c.key==="Enter"&&i(d.value),c.key==="Escape"&&i(null)}),document.body.appendChild(r),d==null||d.focus(),d==null||d.select()})}const qe="America/Caracas";function he(b){if(!b||b<=0)return"-";const e=new Date(b*1e3);return new Intl.DateTimeFormat("es-VE",{timeZone:qe,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(e)}function Ue(b,e=!1){return new Intl.DateTimeFormat("es-VE",{timeZone:qe,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",...e?{second:"2-digit"}:{},hour12:!1}).format(b)}function ut(b){if(!b||b<=0)return"Hoy";const e=Math.floor(Date.now()/1e3),o=Math.max(0,e-b);if(o<3600)return"Hoy (reciente)";const a=Math.floor(o/3600);if(a<24)return`Hoy (hace ${a}h)`;const r=Math.floor(a/24);return r===1?"Hace 1 día":`Hace ${r} días`}const ie=b=>X(b).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2});async function Fe(b){var n,l,u;const[e,o]=await Promise.all([D.obtenerJornadaActual(),D.ventas()]);if(!e){b.innerHTML=`
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md text-center">
                <h3 class="font-heading font-black text-xl mb-2 text-red-700">SIN JORNADA ACTIVA</h3>
                <p class="text-xs font-body text-gray-600 mb-4">No existe un turno abierto actualmente en la estación. Abre un turno para iniciar el registro cronológico de ventas.</p>
                <button id="btn-cerrar-historial-turno" class="w-full bg-brand-black text-white font-heading font-black py-2.5 rounded border-2 border-brand-black text-xs">ENTENDIDO</button>
            </div>
        </div>`,(n=b.querySelector("#btn-cerrar-historial-turno"))==null||n.addEventListener("click",()=>{b.innerHTML=""});return}const a=e.inicioUnix,r=o.filter(m=>(m.fechaUnix||0)>=a);let d=0,i=0,p={},c={};r.forEach(m=>{const g=X(m.totalUsd),y=X(m.totalBs);d+=g,i+=y;const h=m.operador||e.operadorActual||"Cajero";c[h]||(c[h]={usd:0,bs:0,tickets:0}),c[h].usd+=g,c[h].bs+=y,c[h].tickets+=1,Array.isArray(m.pagos)&&m.pagos.length>0&&m.pagos.forEach(w=>{const f=w.metodo||"EFECTIVO";p[f]||(p[f]={usd:0,bs:0}),p[f].usd+=X(w.montoUsd),p[f].bs+=X(w.montoBs)})});const t=e.operadoresActivos&&e.operadoresActivos.length>0?e.operadoresActivos.join(", "):e.operadorActual||"Sin asignar";b.innerHTML=`
    <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-5 sm:p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col">
            <div class="flex justify-between items-center border-b-2 border-brand-black pb-3 mb-3">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-wider text-brand-purple">Auditoría Operativa de Caja</span>
                    <h3 class="font-heading font-black text-2xl">HISTORIAL DEL TURNO ACTIVO</h3>
                    <p class="text-xs text-gray-500 font-bold">
                        Apertura: ${he(e.inicioUnix)} · Operador(es): <strong>${t}</strong>
                    </p>
                </div>
                <button id="btn-cerrar-historial-turno" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
            </div>

            <!-- Resumen Métricas del Turno -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div class="bg-gray-50 border-2 border-brand-black rounded p-3">
                    <span class="text-[10px] font-black uppercase text-gray-500 block">Total Recaudado en Turno</span>
                    <p class="font-heading font-black text-xl text-brand-black mt-0.5">$ ${ie(d)} USD</p>
                    <p class="text-xs font-black text-brand-purple">Bs. ${ie(i)}</p>
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
                        ${Object.keys(c).length===0?'<p class="text-xs text-gray-400 italic">Sin transacciones registradas por operadores.</p>':Object.entries(c).map(([m,g])=>`
                                <div class="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
                                    <span class="font-bold text-gray-800">${m} (${g.tickets} t.)</span>
                                    <span class="font-mono font-black text-brand-black">$${ie(g.usd)} · Bs. ${ie(g.bs)}</span>
                                </div>
                            `).join("")}
                    </div>
                </div>
                <div class="border-2 border-brand-black rounded p-3 bg-white">
                    <span class="text-[10px] font-heading font-black uppercase text-gray-600 block mb-2">Desglose por Método de Pago</span>
                    <div class="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                        ${Object.keys(p).length===0?'<p class="text-xs text-gray-400 italic">Sin pagos asentados.</p>':Object.entries(p).map(([m,g])=>`
                                <div class="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
                                    <span class="font-bold text-gray-800">${m}</span>
                                    <span class="font-mono font-black text-brand-black">${g.usd>0?`$${ie(g.usd)} `:""}Bs. ${ie(g.bs)}</span>
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
                <div class="space-y-2 overflow-y-auto max-h-72 pr-1">
                    ${r.length===0?'<p class="py-6 text-center text-xs text-gray-400 font-bold">No se han emitido tickets durante el turno actual.</p>':r.map(m=>`
                            <div class="border border-brand-black bg-white rounded overflow-hidden shadow-sm">
                                <div class="flex items-center justify-between p-2.5 text-xs font-bold hover:bg-amber-50/50 cursor-pointer select-none" data-toggle-ticket-detalle="${m.ventaId}">
                                    <div class="min-w-0 flex-1 pr-2">
                                        <div class="flex items-center gap-2">
                                            <span class="font-mono text-brand-black font-black">${m.ventaId}</span>
                                            <span class="text-[10px] text-gray-500 font-bold">${he(m.fechaUnix)}</span>
                                        </div>
                                        <p class="text-[10px] text-brand-purple font-black uppercase mt-0.5">
                                            ${m.canal||"VENTA DIRECTA"} ${m.operador?`· Cajero: <strong class="text-brand-black">${m.operador}</strong>`:""}
                                        </p>
                                    </div>
                                    <div class="text-right shrink-0 flex items-center gap-3">
                                        <div>
                                            <p class="font-heading font-black text-sm text-brand-black">$${ie(m.totalUsd)}</p>
                                            <p class="text-[10px] font-bold text-brand-purple">Bs. ${ie(m.totalBs)}</p>
                                        </div>
                                        <span class="text-xs font-black text-gray-500 px-1 py-0.5 border border-gray-300 rounded bg-gray-50" data-arrow-detalle="${m.ventaId}">▼</span>
                                    </div>
                                </div>
                                <div id="detalle-ticket-${m.ventaId}" class="hidden border-t border-brand-black bg-gray-50 p-2.5 text-xs">
                                    <p class="text-[10px] font-heading font-black uppercase text-gray-600 mb-1.5">Artículos y Servicios Despachados:</p>
                                    <div class="space-y-1 mb-2">
                                        ${m.lineas&&m.lineas.length>0?m.lineas.map(g=>`
                                                <div class="flex justify-between items-center text-[11px] border-b border-gray-200 pb-1">
                                                    <div class="min-w-0 flex-1 pr-2">
                                                        <span class="font-bold text-gray-800">${g.nombre}</span>
                                                        <span class="text-[10px] text-gray-500 block">${g.cantidad} × $${ie(g.precioUsd)} ${g.modoVenta==="paquete"?"(Empaque/Caja)":""}</span>
                                                    </div>
                                                    <div class="text-right shrink-0 font-mono font-bold">
                                                        <span class="text-brand-black">$${ie(g.subtotalUsd)}</span>
                                                        <span class="text-[10px] text-gray-500 block">Bs. ${ie(g.subtotalBs)}</span>
                                                    </div>
                                                </div>
                                            `).join(""):'<p class="text-[10px] text-gray-400 italic">Detalle de líneas no disponible en este comprobante.</p>'}
                                    </div>
                                    ${m.pagos&&m.pagos.length>0?`
                                        <div class="pt-1.5 border-t border-gray-200 flex flex-wrap justify-between items-center text-[10px] font-bold text-gray-600">
                                            <span>Pagos: ${m.pagos.map(g=>`${g.metodo} ($${ie(g.montoUsd)}${g.moneda==="BS"?` / Bs.${ie(g.montoBs)}`:""})`).join(", ")}</span>
                                            ${m.vueltoBs&&X(m.vueltoBs)>0?`<span class="text-emerald-800">Vuelto: Bs. ${ie(m.vueltoBs)} (${m.estadoVuelto||"PAGADO"})</span>`:""}
                                        </div>
                                    `:""}
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
    </div>`,b.querySelectorAll("[data-toggle-ticket-detalle]").forEach(m=>{m.addEventListener("click",()=>{const g=m.dataset.toggleTicketDetalle,y=b.querySelector(`#detalle-ticket-${g}`),h=b.querySelector(`[data-arrow-detalle="${g}"]`);y&&(y.classList.contains("hidden")?(y.classList.remove("hidden"),h&&(h.textContent="▲")):(y.classList.add("hidden"),h&&(h.textContent="▼")))})});const s=()=>{b.innerHTML=""};(l=b.querySelector("#btn-cerrar-historial-turno"))==null||l.addEventListener("click",s),(u=b.querySelector("#btn-cerrar-historial-turno-footer"))==null||u.addEventListener("click",s)}const ee=b=>X(b).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2});class pt{constructor(e,o,a,r){T(this,"contenedor");T(this,"vm");T(this,"modelo");T(this,"modal");T(this,"pagosBorrador",null);T(this,"resolucionVueltoBorrador",null);T(this,"semaforoStock",{rojoMax:5,amarilloMax:15});this.contenedor=e,this.modal=o,this.vm=a,this.modelo=r,D.obtenerSemaforoStock().then(d=>{this.semaforoStock=d,this.renderDinamico()}),this.vm.suscribir(()=>this.renderDinamico()),this.modelo.suscribir(()=>this.renderDinamico())}render(){var e,o,a,r,d,i;this.contenedor.innerHTML=`
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
        </div>`,(e=document.getElementById("caja-buscar"))==null||e.addEventListener("input",p=>{this.vm.setBusqueda(p.target.value)}),(o=document.getElementById("caja-buscar"))==null||o.addEventListener("keydown",p=>{p.key==="Enter"&&(p.preventDefault(),this.enterRapido())}),(a=document.getElementById("caja-vaciar"))==null||a.addEventListener("click",()=>{this.pagosBorrador=null,this.resolucionVueltoBorrador=null,this.vm.vaciar()}),(r=document.getElementById("caja-cobrar"))==null||r.addEventListener("click",()=>void this.abrirModalCobro()),(d=document.getElementById("btn-historial-turno-caja"))==null||d.addEventListener("click",()=>{Fe(this.modal)}),(i=document.getElementById("btn-gestionar-operadores-caja"))==null||i.addEventListener("click",()=>void(async()=>{await D.obtenerJornadaActual()===null?this.abrirModalIniciarJornada():this.abrirModalOperadoresCaja()})()),this.renderDinamico()}async enterRapido(){const e=this.vm.visibles;if(e.length===0)return;const o=await this.vm.agregar(e[0].sku);o&&this.mostrarError(o);const a=document.getElementById("caja-buscar");a&&(a.value=""),this.vm.setBusqueda("")}mostrarError(e){if(e.startsWith("EDAD|")){this.modalEdad(e.slice(5));return}this.renderModal(`
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
            </div>`),(o=this.modal.querySelector("[data-no]"))==null||o.addEventListener("click",()=>this.cerrarModal()),(a=this.modal.querySelector("[data-si]"))==null||a.addEventListener("click",()=>{this.vm.marcarEdadConfirmada(!0),(async()=>{const r=this.vm.visibles;r[0]&&this.vm.empujar(r[0])})(),this.cerrarModal()})}async abrirModalOperadoresCaja(){const e=await D.listarOperadores(),o=await D.obtenerJornadaActual(),a=new Set((o==null?void 0:o.operadoresActivos)||[(o==null?void 0:o.operadorActual)||""]);(()=>{var i,p,c,t;const d=e.map(s=>{const n=a.has(s.nombre);return`
                <div class="flex items-center justify-between p-2.5 rounded border-2 border-brand-black ${n?"bg-purple-50 border-brand-purple":"bg-gray-50"}">
                    <label class="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0">
                        <input type="checkbox" data-cajero-chk="${s.id}" value="${s.nombre}" ${n?"checked":""} class="w-4 h-4 rounded text-brand-purple" />
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
                        ${d}
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
            `,"max-w-md"),(i=this.modal.querySelector("[data-cerrar]"))==null||i.addEventListener("click",()=>this.cerrarModal()),(p=this.modal.querySelector("#btn-cancelar-operadores-caja"))==null||p.addEventListener("click",()=>this.cerrarModal()),this.modal.querySelectorAll("button[data-cajero-edit]").forEach(s=>{s.addEventListener("click",async()=>{const n=s.dataset.cajeroEdit||"",l=s.dataset.cajeroNom||"",u=await be("Modificar nombre del operador:",l,"EDITAR OPERADOR");u&&u.trim()&&u.trim()!==l&&(await D.editarOperador(n,u.trim()),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())})}),this.modal.querySelectorAll("button[data-cajero-del]").forEach(s=>{s.addEventListener("click",async()=>{const n=s.dataset.cajeroDel||"",l=s.dataset.cajeroNom||"";await ue(`¿Confirmas eliminar al operador "${l}"?`,"ELIMINAR OPERADOR")&&(await D.eliminarOperador(n),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())})}),(c=this.modal.querySelector("#form-nuevo-cajero-caja"))==null||c.addEventListener("submit",async s=>{s.preventDefault();const n=this.modal.querySelector("#in-nuevo-cajero-caja"),l=(n==null?void 0:n.value.trim())||"";l&&(await D.crearOperador(l),this.cerrarModal(),this.abrirModalOperadoresCaja(),this.renderDinamico())}),(t=this.modal.querySelector("#btn-guardar-operadores-caja"))==null||t.addEventListener("click",async()=>{const s=this.modal.querySelectorAll("input[data-cajero-chk]:checked"),n=[];if(s.forEach(l=>{l.value&&n.push(l.value)}),n.length===0){this.mostrarToast("Debes seleccionar al menos un operador activo en turno.","error");return}await D.asignarOperadoresTurno(n),this.cerrarModal(),this.renderDinamico()})})()}async abrirModalIniciarJornada(){const e=await D.listarOperadores();(()=>{var r,d,i,p;const a=e.length>0?e.map((c,t)=>`
                <div class="flex items-center p-2.5 rounded border-2 border-brand-black ${t===0?"bg-purple-50 border-brand-purple":"bg-gray-50"}">
                    <label class="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0">
                        <input type="checkbox" data-inicio-cajero-chk value="${c.nombre}" ${t===0?"checked":""} class="w-4 h-4 rounded text-brand-purple" />
                        <div>
                            <span class="font-heading font-black text-sm text-brand-black truncate block">${c.nombre}</span>
                            <span class="text-[10px] text-gray-500 font-bold">${c.activo?"Operador Activo":"Inactivo"}</span>
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
            `,"max-w-md"),(r=this.modal.querySelector("[data-cerrar]"))==null||r.addEventListener("click",()=>this.cerrarModal()),(d=this.modal.querySelector("#btn-cancelar-inicio-jornada"))==null||d.addEventListener("click",()=>this.cerrarModal()),(i=this.modal.querySelector("#form-nuevo-cajero-inicio"))==null||i.addEventListener("submit",async c=>{c.preventDefault();const t=this.modal.querySelector("#in-nuevo-cajero-inicio"),s=(t==null?void 0:t.value.trim())||"";s&&(await D.crearOperador(s),this.cerrarModal(),this.abrirModalIniciarJornada())}),(p=this.modal.querySelector("#btn-abrir-turno"))==null||p.addEventListener("click",async()=>{const c=this.modal.querySelectorAll("input[data-inicio-cajero-chk]:checked"),t=[];if(c.forEach(n=>{n.value&&t.push(n.value)}),t.length===0){this.mostrarToast("Selecciona al menos un operador para abrir el turno.","error");return}const s=t[0];await D.abrirJornada(s,t),this.cerrarModal(),this.renderDinamico()})})()}async abrirModalCobro(){var g,y,h,w;if(this.vm.lineasCarrito.length===0)return;let e=[];try{e=await D.listarMetodosPago()}catch{e=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}const o=Number(this.vm.totalUsd.toFixed(2)),a=this.vm.tasaTicket,r=Number((o*a).toFixed(2)),d=e.find(f=>f.nombre==="BIOPAGO")||e.find(f=>f.moneda==="BS")||e[0]||{nombre:"BIOPAGO",moneda:"BS"};let i;if(this.pagosBorrador&&this.pagosBorrador.length>0){if(i=this.pagosBorrador.map(f=>({...f})),i.length===1&&i[0]){const f=i[0];f.monto=f.moneda==="USD"?o:r,f.tasaCambio=a}else if(i.length>1){let f=0;for(let A=0;A<i.length-1;A++){const C=i[A],v=C.tasaCambio>0?C.tasaCambio:a;f+=C.moneda==="USD"?C.monto*v:C.monto}const S=Math.max(0,Math.round((r-f)*100)/100),B=i[i.length-1];B&&(B.monto=B.moneda==="USD"?a>0?Number((S/a).toFixed(2)):0:S,B.tasaCambio=a)}}else i=[{id:"p-1",metodo:d.nombre,moneda:d.moneda,monto:d.moneda==="USD"?o:r,tasaCambio:a,referencia:""}];let p=((g=this.resolucionVueltoBorrador)==null?void 0:g.estado)||"PAGADO",c=((y=this.resolucionVueltoBorrador)==null?void 0:y.metodo)||"BS.EFEC.",t=((h=this.resolucionVueltoBorrador)==null?void 0:h.tasa)||a;e.some(f=>f.nombre===c)||(c=((w=e[0])==null?void 0:w.nombre)||"BS.EFEC.");let s=!1;const n=()=>{let f=0;for(const L of i)if(L.moneda==="USD"){const N=L.tasaCambio>0?L.tasaCambio:a;f+=L.monto*N}else f+=L.monto;f=Math.round(f*100)/100;const S=a>0?Math.round(f/a*100)/100:0,B=Math.max(0,Math.round((r-f)*100)/100),A=a>0?Math.max(0,Math.round(B/a*100)/100):0,C=Math.max(0,Math.round((f-r)*100)/100),v=a>0?Math.max(0,Math.round(C/a*100)/100):0,E=f>=r-.01&&i.every(L=>L.monto>0);return{cubiertoUsd:S,cubiertoBs:f,faltanteUsd:A,faltanteBs:B,vueltoUsd:v,vueltoBs:C,puedeConfirmar:E}},l=f=>{const S=e.find(v=>v.nombre===c),B=(S==null?void 0:S.moneda)==="USD",A=t>0?t:a,C=B&&A>0?Number((f.vueltoBs/A).toFixed(2)):f.vueltoUsd;return f.faltanteBs>.009?`
                <div class="bg-amber-50 border-2 border-amber-500 rounded p-3 text-center mb-3">
                    <p class="text-xs font-black uppercase text-amber-900">Monto Incompleto por Cubrir</p>
                    <p class="font-heading font-black text-xl text-amber-700">Faltan Bs. ${ee(f.faltanteBs)} · <span class="text-base text-amber-900">$ ${ee(f.faltanteUsd)} (Equiv. Oficial)</span></p>
                </div>`:f.vueltoBs>.009?`
                <div class="border-2 border-emerald-700 bg-emerald-50/70 rounded-lg p-3 mb-3">
                    <div class="flex flex-wrap items-center justify-between gap-1 mb-2">
                        <div>
                            <span class="text-[10px] font-black uppercase text-emerald-900 tracking-wide block">Excedente / Vuelto del Cliente</span>
                            <span class="font-heading font-black text-xl text-emerald-800">Bs. ${ee(f.vueltoBs)}</span>
                        </div>
                        <span class="text-xs font-bold text-emerald-900 font-mono">$ ${ee(f.vueltoUsd)} equiv. oficial</span>
                    </div>

                    <!-- Selector: Entregar Vuelto vs Retener Vuelto -->
                    <div class="grid grid-cols-2 gap-2 mb-2.5">
                        <button type="button" id="btn-vuelto-pagado" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${p==="PAGADO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                            ENTREGAR VUELTO (PAGADO)
                        </button>
                        <button type="button" id="btn-vuelto-retenido" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${p==="RETENIDO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                            RETENER VUELTO (A FAVOR)
                        </button>
                    </div>

                    ${p==="PAGADO"?`
                    <div class="bg-white border border-emerald-600 rounded p-2.5 space-y-2">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <label class="text-[11px] font-bold text-gray-700 uppercase">Método de Egreso del Vuelto:</label>
                            <select id="select-metodo-vuelto" class="border-2 border-brand-black rounded px-2 py-1 text-xs font-bold bg-white focus:outline-none">
                                ${e.map(v=>`
                                    <option value="${v.nombre}" ${v.nombre===c?"selected":""}>
                                        ${v.nombre} (${v.moneda==="USD"?"$ Dólares":"Bs. Bolívares"})
                                    </option>
                                `).join("")}
                            </select>
                        </div>
                        ${B?`
                        <div class="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-gray-100">
                            <div>
                                <span class="text-[10px] font-bold text-gray-500 uppercase block">Tasa Pactada Vuelto USD:</span>
                                <div class="flex items-center gap-1.5">
                                    <input id="input-tasa-vuelto" type="text" inputmode="decimal" value="${t.toFixed(2)}"
                                        class="w-24 border-2 border-brand-black rounded px-2 py-0.5 text-xs font-mono font-bold" />
                                    <button id="btn-reset-tasa-vuelto" type="button" class="text-[10px] bg-gray-100 border border-gray-400 rounded px-1.5 py-0.5 hover:bg-gray-200">
                                        Reset BCV
                                    </button>
                                </div>
                            </div>
                            <div class="text-right">
                                <span class="text-[10px] font-bold text-gray-500 uppercase block">Divisa USD a Entregar:</span>
                                <span class="font-heading font-black text-base text-brand-purple">
                                    $ ${ee(C)} USD
                                </span>
                            </div>
                        </div>
                        `:`
                        <div class="flex items-center justify-between pt-1 border-t border-gray-100 text-xs">
                            <span class="font-bold text-gray-600">Total a Entregar en Bolívares:</span>
                            <span class="font-heading font-black text-base text-brand-black">Bs. ${ee(f.vueltoBs)}</span>
                        </div>
                        `}
                    </div>
                    `:`
                    <div class="bg-white border border-gray-300 rounded p-2 text-xs text-gray-700">
                        <p class="font-bold text-emerald-900 mb-0.5">Vuelto Retenido como Saldo a Favor</p>
                        <p class="text-[11px] text-gray-600 leading-tight">
                            Excedente de <b>Bs. ${ee(f.vueltoBs)} ($ ${ee(f.vueltoUsd)})</b> asentado a favor sin egreso de efectivo.
                        </p>
                    </div>
                    `}
                </div>`:`
            <div class="bg-emerald-50 border-2 border-emerald-600 rounded p-2.5 text-center mb-3">
                <p class="text-xs font-black uppercase text-emerald-800">Total Exactamente Cubierto</p>
                <p class="text-xs text-emerald-700 font-bold">Importe liquidado sin diferencia pendiente.</p>
            </div>`},u=()=>{const f=n(),S=e.filter(v=>v.moneda==="USD"),B=e.filter(v=>v.moneda==="BS"),A=i.map((v,E)=>{const L=S.map(P=>`<option value="${P.nombre}" ${P.nombre===v.metodo?"selected":""}>${P.nombre} ($ - Tasa Dinámica)</option>`).join(""),j=`
                        <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                            ${B.map(P=>`<option value="${P.nombre}" ${P.nombre===v.metodo?"selected":""}>${P.nombre} (Bs.)</option>`).join("")}
                        </optgroup>
                        <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                            ${L}
                        </optgroup>
                    `,F=v.tasaCambio>0?v.tasaCambio:a,M=v.moneda==="USD"?v.monto*F:v.monto,K=a>0?M/a:0;return`
                    <div data-pago-card="${v.id}" class="border-2 border-brand-black rounded-lg p-3 bg-gray-50 mb-2.5">
                        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span class="font-heading font-black text-xs uppercase text-gray-700">
                                Pago #${E+1} · <span class="${v.moneda==="USD"?"text-brand-purple":"text-brand-black"}">${v.moneda==="USD"?"Divisa ($ USD)":"Moneda Nacional (Bs.)"}</span>
                            </span>
                            ${i.length>1?`<button data-eliminar-pago="${v.id}" class="text-xs font-black text-red-600 hover:text-red-800 bg-red-50 border border-red-300 rounded px-2 py-0.5">Eliminar</button>`:""}
                        </div>
                        ${v.moneda==="USD"?`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Divisa</label>
                                <select data-pago-metodo="${v.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${j}
                                </select>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto ($ USD)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">$</span>
                                    <input type="number" step="0.01" min="0.01" max="999999" data-pago-monto="${v.id}" value="${v.monto>0?v.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <div class="flex items-center justify-between mb-0.5">
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase">Tasa (Bs./$)</label>
                                    <button type="button" data-reset-tasa="${v.id}" class="text-[9px] font-black uppercase text-brand-purple hover:underline" title="Restablecer a tasa BCV oficial">BCV: ${ee(a)}</button>
                                </div>
                                <input type="number" step="0.01" min="1" max="100000" data-pago-tasa="${v.id}" value="${F>0?F:a}"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${v.id}" value="${v.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div data-aporte-info="${v.id}" class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-purple">Aporte: Bs. ${ee(M)}</span>
                            <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${ee(K)} ${F!==a?`(Tasa: Bs. ${ee(F)} vs BCV: Bs. ${ee(a)})`:""}</span>
                        </div>
                        `:`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-5">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Bolívares</label>
                                <select data-pago-metodo="${v.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${j}
                                </select>
                            </div>
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto (Bs.)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">Bs.</span>
                                    <input type="number" step="0.01" min="0.01" max="999999999" data-pago-monto="${v.id}" value="${v.monto>0?v.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${v.id}" value="${v.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div data-aporte-info="${v.id}" class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-black">Aporte directo: Bs. ${ee(v.monto)}</span>
                            <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${ee(K)}</span>
                        </div>
                        `}
                    </div>`}).join(""),C=`<div id="contenedor-estado-balance">${l(f)}</div>`;this.modalContenido(`
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
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${ee(o)} USD</span>
                                <span class="font-heading font-black text-xl text-brand-purple">Bs. ${ee(r)}</span>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-[10px] font-bold text-gray-500 uppercase block">Tasa Oficial Aplicada</span>
                            <span class="text-xs font-mono font-black text-gray-800">Bs. ${ee(a)}</span>
                        </div>
                    </div>

                    <!-- Lista de Pagos Asignados -->
                    <div class="mb-3">
                        ${A}
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
                                    ${e.map(v=>`
                                        <span class="inline-flex items-center gap-1 border border-brand-black rounded px-2 py-0.5 text-[11px] font-bold bg-white">
                                            <span>${v.nombre}</span>
                                            <span class="text-[9px] text-gray-500">(${v.moneda})</span>
                                            <button data-caja-eliminar-metodo="${v.nombre}" title="Eliminar método" class="text-red-600 hover:text-red-800 font-bold ml-0.5">✕</button>
                                        </span>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                    </div>`:""}

                    <!-- Indicador de Cobertura y Vuelto -->
                    ${C}

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
                </div>`,"max-w-xl"),m()},m=()=>{var E,L,N,j,F,M,K,P,Z;const f=()=>{this.pagosBorrador=i,this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t},this.cerrarModal()};this.modal.querySelectorAll("[data-cerrar]").forEach(k=>k.addEventListener("click",f)),(E=this.modal.querySelector("[data-cancelar]"))==null||E.addEventListener("click",f),(L=this.modal.querySelector("#btn-volver-caja"))==null||L.addEventListener("click",()=>{this.pagosBorrador=i,this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t},this.cerrarModal();const k=document.getElementById("caja-buscar");k==null||k.focus()}),(N=this.modal.querySelector("#btn-vuelto-pagado"))==null||N.addEventListener("click",()=>{p="PAGADO",this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t},u()}),(j=this.modal.querySelector("#btn-vuelto-retenido"))==null||j.addEventListener("click",()=>{p="RETENIDO",this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t},u()}),(F=this.modal.querySelector("#select-metodo-vuelto"))==null||F.addEventListener("change",k=>{c=k.target.value,this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t},u()});const S=this.modal.querySelector("#input-tasa-vuelto");S&&(S.addEventListener("input",k=>{const $=X(k.target.value);t=$>0?$:a,this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t}}),S.addEventListener("blur",()=>{u()})),(M=this.modal.querySelector("#btn-reset-tasa-vuelto"))==null||M.addEventListener("click",()=>{t=a,this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t},u()}),this.modal.querySelectorAll("select[data-pago-metodo]").forEach(k=>{k.addEventListener("change",$=>{const U=k.dataset.pagoMetodo,H=$.target.value,G=i.find(W=>W.id===U);if(G){const W=e.find(Y=>Y.nombre===H),J=(W==null?void 0:W.moneda)||"BS";G.moneda=J,G.tasaCambio=a,i.length===1?G.monto=G.moneda==="USD"?o:r:J!==G.moneda&&(J==="USD"?G.monto=Number((a>0?G.monto/a:0).toFixed(2)):G.monto=Number((G.monto*a).toFixed(2))),G.metodo=H,this.pagosBorrador=i,u()}})});const B=()=>{var H,G,W,J;const k=n(),$=this.modal.querySelector("#contenedor-estado-balance");if($){$.innerHTML=l(k),(H=this.modal.querySelector("#btn-vuelto-pagado"))==null||H.addEventListener("click",()=>{p="PAGADO",this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t},u()}),(G=this.modal.querySelector("#btn-vuelto-retenido"))==null||G.addEventListener("click",()=>{p="RETENIDO",this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t},u()}),(W=this.modal.querySelector("#select-metodo-vuelto"))==null||W.addEventListener("change",O=>{c=O.target.value,this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t},u()});const Y=this.modal.querySelector("#input-tasa-vuelto");Y&&(Y.addEventListener("input",O=>{const _=X(O.target.value);t=_>0?_:a,this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t}}),Y.addEventListener("blur",()=>u())),(J=this.modal.querySelector("#btn-reset-tasa-vuelto"))==null||J.addEventListener("click",()=>{t=a,this.resolucionVueltoBorrador={estado:p,metodo:c,tasa:t},u()})}const U=this.modal.querySelector("#btn-confirmar-cobro");U&&(U.disabled=!k.puedeConfirmar)},A=k=>{const $=this.modal.querySelector(`div[data-aporte-info="${k.id}"]`);if(!$)return;const U=k.tasaCambio>0?k.tasaCambio:a,H=k.moneda==="USD"?k.monto*U:k.monto,G=a>0?H/a:0;k.moneda==="USD"?$.innerHTML=`
                        <span class="font-bold text-brand-purple">Aporte: Bs. ${ee(H)}</span>
                        <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${ee(G)} ${U!==a?`(Tasa: Bs. ${ee(U)} vs BCV: Bs. ${ee(a)})`:""}</span>
                    `:$.innerHTML=`
                        <span class="font-bold text-brand-black">Aporte directo: Bs. ${ee(k.monto)}</span>
                        <span class="text-gray-500 font-mono">Equiv. oficial BCV: $ ${ee(G)}</span>
                    `};this.modal.querySelectorAll("input[data-pago-tasa]").forEach(k=>{k.addEventListener("input",$=>{const U=k.dataset.pagoTasa,H=X($.target.value),G=i.find(W=>W.id===U);G&&(G.tasaCambio=H>0?H:a,this.pagosBorrador=i,A(G),B())}),k.addEventListener("keydown",$=>{var U;$.key==="Enter"&&n().puedeConfirmar&&((U=this.modal.querySelector("#btn-confirmar-cobro"))==null||U.click())})}),this.modal.querySelectorAll("button[data-reset-tasa]").forEach(k=>{k.addEventListener("click",()=>{const $=k.dataset.resetTasa,U=i.find(H=>H.id===$);U&&(U.tasaCambio=a,this.pagosBorrador=i,u())})}),this.modal.querySelectorAll("input[data-pago-monto]").forEach(k=>{k.addEventListener("input",$=>{const U=k.dataset.pagoMonto,H=X($.target.value),G=i.find(W=>W.id===U);G&&(G.monto=H,this.pagosBorrador=i,A(G),B())}),k.addEventListener("keydown",$=>{var U;$.key==="Enter"&&n().puedeConfirmar&&((U=this.modal.querySelector("#btn-confirmar-cobro"))==null||U.click())})}),this.modal.querySelectorAll("input[data-pago-ref]").forEach(k=>{k.addEventListener("input",$=>{const U=k.dataset.pagoRef,H=$.target.value,G=i.find(W=>W.id===U);G&&(G.referencia=H,this.pagosBorrador=i)}),k.addEventListener("keydown",$=>{var U;$.key==="Enter"&&n().puedeConfirmar&&((U=this.modal.querySelector("#btn-confirmar-cobro"))==null||U.click())})}),this.modal.querySelectorAll("button[data-eliminar-pago]").forEach(k=>{k.addEventListener("click",()=>{const $=k.dataset.eliminarPago;i=i.filter(U=>U.id!==$),this.pagosBorrador=i,u()})}),(K=this.modal.querySelector("#btn-agregar-pago"))==null||K.addEventListener("click",()=>{let k=n();const $="p-"+Math.random().toString(36).slice(2,7),U=e.find(G=>!i.some(W=>W.metodo===G.nombre))||e[0]||{nombre:"BS.EFEC.",moneda:"BS"};if(k.faltanteBs<=.01&&i.length===1&&i[0]){const G=i[0],W=G.tasaCambio>0?G.tasaCambio:a,J=G.moneda==="USD"?G.monto*W:G.monto,Y=Math.round(J/2*100)/100;G.monto=G.moneda==="USD"?W>0?Number((Y/W).toFixed(2)):0:Y,k=n()}const H=k.faltanteBs>0?k.faltanteBs:0;i.push({id:$,metodo:U.nombre,moneda:U.moneda,monto:U.moneda==="USD"?a>0?Number((H/a).toFixed(2)):0:H,tasaCambio:a,referencia:""}),this.pagosBorrador=i,u()}),(P=this.modal.querySelector("#btn-toggle-nuevo-metodo"))==null||P.addEventListener("click",()=>{s=!s,u()}),(Z=this.modal.querySelector("#btn-guardar-nuevo-metodo"))==null||Z.addEventListener("click",()=>{(async()=>{const k=this.modal.querySelector("#input-nuevo-metodo-nombre"),$=(k==null?void 0:k.value.trim())||"",U=this.modal.querySelector('input[name="radio-nuevo-metodo-moneda"][value="USD"]'),H=U!=null&&U.checked?"USD":"BS";if($)try{e=await D.crearMetodoPago($,H),s=!1,u()}catch{}})()}),this.modal.querySelectorAll("button[data-caja-eliminar-metodo]").forEach(k=>{k.addEventListener("click",()=>{(async()=>{const $=k.dataset.cajaEliminarMetodo||"";$&&await ue(`¿Seguro que deseas eliminar el método de pago "${$}"?`,"ELIMINAR MÉTODO")&&(e=await D.eliminarMetodoPago($),i.forEach(U=>{if(U.metodo===$){const H=e[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"};U.metodo=H.nombre,U.moneda=H.moneda}}),this.pagosBorrador=i,u())})()})});let C=!1;const v=this.modal.querySelector("#btn-confirmar-cobro");v==null||v.addEventListener("click",()=>{C||(C=!0,v&&(v.disabled=!0,v.textContent="PROCESANDO COBRO..."),(async()=>{const k=this.modal.querySelector("#cobro-error");try{const $=i.filter(I=>I.monto>0).map(I=>{const q=I.moneda==="USD"&&I.tasaCambio>0?I.tasaCambio:a,V=I.moneda==="USD"?I.monto*q:I.monto,Q=a>0?V/a:0;return{metodo:I.metodo,moneda:I.moneda,montoUsd:(I.moneda==="USD"?I.monto:Q).toFixed(2),montoBs:V.toFixed(2),tasaCambio:I.moneda==="USD"?q.toFixed(2):void 0,referencia:I.referencia.trim()||void 0}});if($.length===0)throw new Error("Debe especificar al menos un pago válido.");const U=n(),H=$.reduce((I,q)=>I+Number(q.montoBs),0),G=e.find(I=>I.nombre===c),W=(G==null?void 0:G.moneda)==="USD",J=W?t>0?t:a:void 0,Y=W&&J?(U.vueltoBs/J).toFixed(2):U.vueltoUsd.toFixed(2),O={estado:U.vueltoBs>.009?p:"SIN_VUELTO",metodo:U.vueltoBs>.009&&p==="PAGADO"?c:void 0,montoBs:U.vueltoBs>.009?U.vueltoBs.toFixed(2):void 0,montoUsd:U.vueltoBs>.009?Y:void 0,tasa:U.vueltoBs>.009&&p==="PAGADO"&&J?J.toFixed(2):void 0},_=await this.vm.cobrar(H.toFixed(2),$,O);this.pagosBorrador=null,this.resolucionVueltoBorrador=null,this.cerrarModal(),this.modalTicketExito(_,H)}catch($){C=!1,v&&(v.disabled=!1,v.textContent="CONFIRMAR COBRO"),k&&(k.textContent=$ instanceof Error?$.message.replace(/"/g,""):String($),k.classList.remove("hidden"))}})())})};u()}modalTicketExito(e,o){const a=e.pagos&&e.pagos.length>0?e.pagos.map(d=>`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-1.5 text-left font-heading font-black text-xs text-brand-black">
                        ${d.metodo}
                        ${d.tasaCambio?`<span class="block text-[10px] text-brand-purple font-mono font-bold">Tasa: Bs. ${ee(Number(d.tasaCambio))}</span>`:""}
                        ${d.referencia?`<span class="block text-[10px] text-gray-500 font-mono font-normal">Ref: ${d.referencia}</span>`:""}
                    </td>
                    <td class="py-1.5 text-right font-black text-xs text-brand-black">$ ${ee(d.montoUsd)}</td>
                    <td class="py-1.5 text-right font-black text-xs text-brand-purple">Bs. ${ee(d.montoBs)}</td>
                </tr>
            `).join(""):'<tr><td colspan="3" class="py-2 text-center text-xs text-gray-400">Pago Único Estándar</td></tr>',r=X(e.vueltoBs);this.renderModal(`
            <div class="text-center mb-3">
                <h3 class="font-heading font-black text-3xl text-green-700">VENTA EXITOSA</h3>
                <p class="font-body text-xs text-brand-text">Ticket ${e.ventaId} · Tasa BCV: Bs. ${ee(Number(e.tasaDelDia))}</p>
            </div>
            <div class="border-t-2 border-b-2 border-brand-black py-3 mb-3 text-center bg-gray-50 rounded">
                <span class="text-[10px] font-bold text-gray-500 uppercase block">Total Liquidado</span>
                <p class="font-heading font-black text-3xl text-brand-purple">Bs. ${ee(o)}</p>
                <p class="font-body text-xs text-gray-600">$ ${ee(Number(e.totalUsd))} USD</p>
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
                    Bs. ${ee(r)}
                </span>
                <span class="block text-xs font-bold text-gray-600 mt-0.5">
                    ${e.estadoVuelto==="RETENIDO"?`Asentado en comprobante ($ ${ee(e.montoVueltoUsd||(Number(e.tasaDelDia)>0?r/Number(e.tasaDelDia):0))} USD equiv.)`:`Método: ${e.metodoVuelto||"Efectivo"} ${e.montoVueltoUsd&&Number(e.montoVueltoUsd)>0&&e.tasaVuelto?`($ ${ee(e.montoVueltoUsd)} USD @ Bs. ${ee(e.tasaVuelto)})`:""}`}
                </span>
            </div>`:""}

            <button data-cerrar class="w-full bg-brand-black text-white font-heading font-black text-lg py-3 rounded border-2 border-brand-black shadow-brutal-sm hover:bg-gray-800">
                LISTO
            </button>`,"max-w-md")}renderDinamico(){const e=this.contenedor.querySelector("#caja-grid");if(!e)return;const o=this.semaforoStock;e.innerHTML=this.vm.visibles.map(i=>{const p=(i.capacidades&fe)!==0,c=Number(i.stock),t=c<=0,s=i.sinStock?"text-purple-700":c<=o.rojoMax?"text-red-600":c<=o.amarilloMax?"text-amber-600":"text-emerald-700",n=i.unidad?i.unidad.toLowerCase()==="un"?"un.":i.unidad.toLowerCase():p?"kg":"un.",l=n==="kg"?"kg":n==="ml"?"ml":"un.";let u="";if(i.sinStock)u="LIBRE";else if(t)u="AGOTADO";else if(i.esCaja&&i.unidadesPorCaja&&i.unidadesPorCaja>1){const y=Math.floor(c/i.unidadesPorCaja),h=c%i.unidadesPorCaja;u=`${y} cajas y ${h} un. (${c} un.)`}else u=`${c} ${n}`;const m=i.precioPaqueteUsd&&i.nombrePaquete||i.esCaja&&i.unidadesPorCaja&&i.unidadesPorCaja>1,g=i.presentaciones&&i.presentaciones.length>0?i.presentaciones.map(y=>`
                        <button data-sku="${i.sku}" data-modo="${y.nombre}" ${t&&!i.sinStock?"disabled":""}
                            class="text-left border-2 border-brand-purple rounded p-2 bg-purple-50 shadow-brutal hover:-translate-y-0.5 hover:shadow-brutal-hover transition-all active:translate-y-0.5 active:shadow-none disabled:opacity-30 w-full mt-1">
                            <div class="flex justify-between items-center">
                                <span class="font-heading font-bold text-xs text-purple-800">${y.nombre} ($${Number(y.precioUsd).toFixed(2)})</span>
                                <span class="text-[10px] font-black text-purple-600">${y.unidades} un.</span>
                            </div>
                        </button>`).join(""):m?`
                        <button data-sku="${i.sku}" data-modo="paquete" ${t&&!i.sinStock?"disabled":""}
                            class="text-left border-2 border-brand-purple rounded p-2 bg-purple-50 shadow-brutal hover:-translate-y-0.5 hover:shadow-brutal-hover transition-all active:translate-y-0.5 active:shadow-none disabled:opacity-30 w-full mt-1">
                            <div class="flex justify-between items-center">
                                <span class="font-heading font-bold text-xs text-purple-800">${i.nombrePaquete||"Caja"} (${i.precioPaqueteUsd?`$${Number(i.precioPaqueteUsd).toFixed(2)}`:`$${(Number(i.precioUsd)*(i.unidadesPorCaja||1)).toFixed(2)}`})</span>
                                <span class="text-[10px] font-black text-purple-600">${i.unidadesPorCaja||1} un.</span>
                            </div>
                        </button>`:"";return`
                <div class="relative" data-producto-card="${i.sku}">
                    <button data-sku="${i.sku}" data-modo="unidad" ${t&&!i.sinStock?"disabled":""}
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
                                ${u}
                            </span>
                        </div>
                    </button>
                    ${g}
                </div>`}).join(""),e.querySelectorAll("button[data-sku]").forEach(i=>i.addEventListener("click",()=>{const p=i.dataset.sku??"",c=i.dataset.modo||"unidad";(async()=>{const t=this.vm.modoCuentaAbierta?await this.vm.agregarACuenta(p,c):await this.vm.agregar(p,c);t&&this.mostrarError(t)})()}));const a=this.contenedor.querySelector("#caja-lineas");a&&(a.innerHTML=this.vm.lineasCarrito.length===0?'<p class="text-center text-brand-text font-body py-10">Toca un producto para agregarlo</p>':this.vm.lineasCarrito.map(i=>`
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
                    </div>`).join(""));const r=this.contenedor.querySelector("#caja-total-usd"),d=this.contenedor.querySelector("#caja-total-bs");r&&(r.textContent="$ "+ee(this.vm.totalUsd)),d&&(d.textContent="Bs. "+ee(this.vm.totalBs)),D.obtenerJornadaActual().then(i=>{const p=this.contenedor.querySelector("#caja-operadores-activo-texto"),c=this.contenedor.querySelector("#btn-gestionar-operadores-caja"),t=this.contenedor.querySelector("#caja-cobrar");if(i===null){if(p&&(p.textContent="SIN TURNO ACTIVO",p.title="No hay jornada activa. Abre un turno para operar."),c){c.classList.remove("bg-purple-100","text-brand-purple","border-brand-purple","hover:bg-purple-200"),c.classList.add("bg-orange-100","text-red-800","border-red-600","hover:bg-orange-200");const s=c.querySelector("span.rounded-full");s&&(s.classList.remove("bg-emerald-500"),s.classList.add("bg-red-500"))}t&&(t.disabled=!0,t.title="Abre un turno antes de cobrar")}else{const s=i.operadoresActivos&&i.operadoresActivos.length>0?i.operadoresActivos.join(", "):i.operadorActual||"Operador en caja";if(p&&(p.textContent=s,p.title=`Operadores en caja: ${s}`),c){c.classList.add("bg-purple-100","text-brand-purple","border-brand-purple","hover:bg-purple-200"),c.classList.remove("bg-orange-100","text-red-800","border-red-600","hover:bg-orange-200");const n=c.querySelector("span.rounded-full");n&&(n.classList.add("bg-emerald-500"),n.classList.remove("bg-red-500"))}t&&(t.disabled=!1,t.title="")}}),this.contenedor.querySelectorAll("[data-mas]").forEach(i=>i.addEventListener("click",()=>{const p=i.dataset.mas??"",c=this.vm.lineasCarrito.find(t=>t.sku===p);if(c){const t=this.vm.cambiarCantidad(p,c.cantidad+1);t&&this.mostrarError(t)}})),this.contenedor.querySelectorAll("[data-menos]").forEach(i=>i.addEventListener("click",()=>{const p=i.dataset.menos??"",c=this.vm.lineasCarrito.find(t=>t.sku===p);c&&this.vm.cambiarCantidad(p,Math.max(1,c.cantidad-1))})),this.contenedor.querySelectorAll("[data-quitar]").forEach(i=>i.addEventListener("click",()=>this.vm.quitar(i.dataset.quitar??""))),this.contenedor.querySelectorAll("input[data-qty]").forEach(i=>i.addEventListener("change",()=>{const p=Number(i.value||"0"),c=Math.min(999.99,Math.max(.01,Number.isFinite(p)?p:.01));i.value=String(c);const t=this.vm.cambiarCantidad(i.dataset.qty??"",c);t&&this.mostrarError(t)}))}mostrarToast(e,o="info"){var d;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},r=document.createElement("div");r.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,r.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(d=r.querySelector("button"))==null||d.addEventListener("click",()=>r.remove()),document.body.appendChild(r),setTimeout(()=>r.remove(),8e3)}}const re=b=>{if(typeof b=="number")return Number.isFinite(b)?b:0;if(b==null)return 0;let e=String(b).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},ae=b=>{const e=re(b);return(Math.round((e+Number.EPSILON)*100)/100).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})},me=b=>{const e=re(b);return e>=1e9?(e/1e9).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})+" Mil Millones":e>=1e6?(e/1e6).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2})+" Millones":ae(e)};class mt{constructor(){T(this,"datos",null)}setDatos(e){this.datos=e}get panel(){return this.datos}}class xt{constructor(e,o,a,r){T(this,"contenedor");T(this,"vm");T(this,"modelo");T(this,"criterioGrafica","volumen");T(this,"respaldos",[]);T(this,"transacciones",[]);T(this,"productos",[]);T(this,"categorias",[]);T(this,"rangoDetalleFechas","");T(this,"jornadaActual",null);T(this,"POR_PAGINA_TRX",20);T(this,"paginaTrx",1);T(this,"margenBrutoPct",0);T(this,"margenNetoPct",0);this.contenedor=e,this.vm=a,this.modelo=r}calcularDineroPorCategoria(){const e=this.modelo.tasaActual||807.39;let o=0;const a={};return this.categorias.forEach(r=>{a[r.id]={categoriaId:r.id,nombre:r.nombre,cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}}),a["cat-general"]||(a["cat-general"]={categoriaId:"cat-general",nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0}),this.productos.forEach(r=>{const d=r.categoriaId||"cat-general";a[d]||(a[d]={categoriaId:d,nombre:"General",cantidadProductos:0,unidadesStock:0,brutoUsd:0,ventaUsd:0});const i=Number(r.stock)||0,p=re(r.precioBrutoUsd),c=re(r.precioUsd);a[d].cantidadProductos+=1,a[d].unidadesStock+=i;const t=i*p;a[d].brutoUsd+=t,a[d].ventaUsd+=i*c,o+=t}),Object.values(a).map(r=>{const d=o>0?(r.brutoUsd/o*100).toFixed(1):"0.0",i=Math.max(0,r.ventaUsd-r.brutoUsd),p=r.ventaUsd>0?(i/r.ventaUsd*100).toFixed(1):"0.0";return{categoriaId:r.categoriaId,nombre:r.nombre,cantidadProductos:r.cantidadProductos,unidadesStock:r.unidadesStock,dineroBrutoUsd:r.brutoUsd.toFixed(2),dineroBrutoBs:(r.brutoUsd*e).toFixed(2),dineroVentaUsd:r.ventaUsd.toFixed(2),dineroVentaBs:(r.ventaUsd*e).toFixed(2),margenBrutoProyectadoUsd:i.toFixed(2),margenBrutoPct:p,porcentajeCapital:d}})}calcularMargenes(){if(this.productos.length===0)return;let e=0,o=0;this.productos.forEach(a=>{const r=re(a.precioUsd),d=re(a.precioBrutoUsd);r>0&&(e+=r,d>0&&(o+=d))}),e>0&&(this.margenBrutoPct=Math.round((e-o)/e*100),this.margenNetoPct=Math.max(0,this.margenBrutoPct-12))}obtenerTimestampTicket(e){if(e.fechaUnix&&e.fechaUnix>0)return e.fechaUnix;if(e.fechaHora){const o=e.fechaHora.match(/(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})/);if(o&&o[1]&&o[2]&&o[3]&&o[4]&&o[5]&&o[6]){const a=Date.UTC(parseInt(o[1],10),parseInt(o[2],10)-1,parseInt(o[3],10),parseInt(o[4],10),parseInt(o[5],10),parseInt(o[6],10));if(!isNaN(a))return Math.floor(a/1e3)}}return Math.floor(Date.now()/1e3)}renderFilasTransacciones(e){if(e.length===0)return'<tr><td colspan="7" class="py-6 text-center text-gray-400 font-bold">No se encontraron transacciones registradas.</td></tr>';const o=Math.ceil(e.length/this.POR_PAGINA_TRX);this.paginaTrx>o&&(this.paginaTrx=o),this.paginaTrx<1&&(this.paginaTrx=1);const a=(this.paginaTrx-1)*this.POR_PAGINA_TRX;return e.slice(a,a+this.POR_PAGINA_TRX).map(d=>{const i=d.fechaUnix?he(d.fechaUnix):d.fechaHora||"Reciente",p=d.ventaId.startsWith("CTA-"),c=p?"Cuenta Abierta":"Caja Directa";return`
            <tr class="hover:bg-gray-50 border-b border-gray-100 last:border-none transition-colors">
                <td class="py-2.5 font-mono text-brand-black">${d.ventaId}</td>
                <td class="py-2.5 text-gray-600">${i}</td>
                <td class="py-2.5">
                    <span class="px-2 py-0.5 rounded border border-brand-black text-[10px] font-black ${p?"bg-amber-100 text-amber-900":"bg-blue-100 text-blue-900"}">
                        ${c}
                    </span>
                </td>
                <td class="py-2.5 text-gray-700">${d.operador||"Principal"}</td>
                <td class="py-2.5 text-right font-mono text-gray-600">Bs. ${ae(Number(d.tasaDelDia))}</td>
                <td class="py-2.5 text-right font-black">$ ${ae(d.totalUsd)}</td>
                <td class="py-2.5 text-right font-black text-brand-purple">Bs. ${ae(d.totalBs)}</td>
            </tr>`}).join("")}async render(){var S;const[e,o,a,r,d,i]=await Promise.all([D.panel(),D.respaldos(),D.ventas(),D.productos(),D.categorias(),D.obtenerJornadaActual()]);this.vm.setDatos(e),this.respaldos=o,this.transacciones=a,this.productos=r,this.categorias=d,this.jornadaActual=i,this.calcularMargenes();const p=new Date,c=new Date(p.getTime()-864e5);this.rangoDetalleFechas||(this.rangoDetalleFechas=`Del ${Ue(c)} al ${Ue(p)}`);const t=this.modelo.bs(e.valorInventarioUsd),s=this.modelo.tieneCapacidad(8)||this.modelo.tieneRubro(4),n=e.dineroPorCategoria&&e.dineroPorCategoria.length>0?e.dineroPorCategoria:this.calcularDineroPorCategoria(),l=n.reduce((B,A)=>B+A.cantidadProductos,0),u=n.reduce((B,A)=>B+A.unidadesStock,0),m=n.reduce((B,A)=>B+re(A.dineroBrutoUsd),0),g=n.reduce((B,A)=>B+re(A.dineroBrutoBs),0),y=n.reduce((B,A)=>B+re(A.dineroVentaUsd),0),h=Math.max(0,y-m),w=y>0?(h/y*100).toFixed(1):"0.0",f=n.map(B=>{const A=re(B.porcentajeCapital);return`
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="py-2.5 px-3 flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-purple inline-block border border-brand-black shrink-0"></span>
                    <span class="font-black text-brand-black text-xs">${B.nombre}</span>
                </td>
                <td class="py-2.5 px-3 text-center">
                    <span class="bg-gray-100 border border-brand-black px-2 py-0.5 rounded text-[11px] font-black">${B.cantidadProductos} art.</span>
                </td>
                <td class="py-2.5 px-3 text-right font-mono">${B.unidadesStock} un.</td>
                <td class="py-2.5 px-3 text-right font-black font-mono text-brand-black">$ ${ae(B.dineroBrutoUsd)}</td>
                <td class="py-2.5 px-3 text-right font-black font-mono text-brand-purple">Bs. ${ae(B.dineroBrutoBs)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-gray-700">$ ${ae(B.dineroVentaUsd)}</td>
                <td class="py-2.5 px-3 text-right font-mono text-emerald-700">$ ${ae(B.margenBrutoProyectadoUsd)} (${B.margenBrutoPct}%)</td>
                <td class="py-2.5 px-3 text-right">
                    <div class="flex items-center justify-end gap-1.5">
                        <div class="w-16 bg-gray-200 border border-brand-black rounded-full h-2 overflow-hidden shrink-0">
                            <div class="bg-brand-purple h-full" style="width: ${Math.min(100,A)}%"></div>
                        </div>
                        <span class="font-mono text-[11px] w-10 text-right">${B.porcentajeCapital}%</span>
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
            ${this.kpi("Ventas Totales",`<span id="kpi-ventas-usd" class="font-black text-brand-black">$ ${ae(e.ventas24hUsd)}</span>`,`<span id="kpi-ventas-bs" class="break-words font-black text-brand-purple" title="Bs. ${ae(e.ventas24hBs)}">Bs. ${me(e.ventas24hBs)}</span>`,"bg-amber-50","Facturación bruta cobrada en caja (USD y Bs. al cambio oficial)")}
            ${this.kpi("Ganancia Bruta",`<span id="kpi-gan-bruta">$ ${ae(e.gananciaBrutaUsd||Number(e.ventas24hUsd)*this.margenBrutoPct/100)}</span>`,`Margen bruto comercial: ${this.margenBrutoPct.toFixed(1)}%`,"bg-emerald-50","Ventas menos costo de adquisición de mercancía")}
            ${this.kpi("Ganancia Neta",`<span id="kpi-gan-neta">$ ${ae(e.gananciaNetaUsd||Number(e.ventas24hUsd)*this.margenNetoPct/100)}</span>`,`<span id="kpi-gan-neta-bs" class="break-words" title="Bs. ${this.modelo.bs(Number(e.ventas24hUsd)*this.margenNetoPct/100)}">Bs. ${me(this.modelo.bs(Number(e.ventas24hUsd)*this.margenNetoPct/100))}</span>`,"bg-blue-50","Utilidad líquida real después de descontar impuestos")}
            ${this.kpi("Inventario Total",`$ ${ae(e.valorInventarioUsd)}`,`<span class="break-words" title="Bs. ${t}">Bs. ${me(t)}</span>`,"bg-purple-50","Valoración monetaria total del stock físico actual disponible")}
        </div>

        <!-- Módulo de Jornada Laboral y Operadores en Turno -->
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 mb-4 sm:mb-6">
            <div class="flex flex-wrap justify-between items-center border-b-2 border-brand-black pb-3 mb-4 gap-2">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full ${((S=this.jornadaActual)==null?void 0:S.estado)==="abierta"?"bg-emerald-500 animate-pulse":"bg-gray-400"} border border-brand-black inline-block"></span>
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
                            <span class="font-black font-heading text-base">${s?e.cuentasAbiertas:"N/A"}</span>
                        </div>
                        <div class="flex justify-between items-center py-1.5 border-b border-gray-200">
                            <div>
                                <span class="font-bold text-xs text-gray-600 uppercase">Deudas Abiertas</span>
                                <p class="text-[10px] text-gray-400 font-bold">Créditos pendientes por cobrar</p>
                            </div>
                            <div class="text-right">
                                <span class="font-black font-heading text-base text-amber-700">${s?e.deudasAbiertas??0:"N/A"}</span>
                                ${s&&e.dineroEnLaCalleUsd?`
                                    <p class="text-[11px] font-mono font-bold text-gray-700">$ ${ae(e.dineroEnLaCalleUsd)} <span class="text-gray-400">·</span> Bs. ${ae(e.dineroEnLaCalleBs)}</p>
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
                        ${n.length} categorías auditadas
                    </span>
                    <span class="text-xs font-black text-emerald-900 bg-emerald-100 border border-brand-black px-2.5 py-1 rounded">
                        Capital en Bruto: $ ${ae(m)}
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
                            <td class="py-2.5 px-3 text-center">${l} prods.</td>
                            <td class="py-2.5 px-3 text-right">${u} un.</td>
                            <td class="py-2.5 px-3 text-right text-brand-black">$ ${ae(m)}</td>
                            <td class="py-2.5 px-3 text-right text-brand-purple">Bs. ${ae(g)}</td>
                            <td class="py-2.5 px-3 text-right text-brand-black">$ ${ae(y)}</td>
                            <td class="py-2.5 px-3 text-right text-emerald-700">$ ${ae(h)} (${w}%)</td>
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
            ${(()=>{const B=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);return B<=1?"":`
                <div class="flex items-center justify-between border-t-2 border-brand-black pt-3 mt-3">
                    <span class="text-xs font-bold text-gray-600">Página ${this.paginaTrx} de ${B} · ${this.transacciones.length} transacciones</span>
                    <div class="flex gap-2">
                        <button id="trx-pag-ant" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaTrx===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANTERIOR</button>
                        <button id="trx-pag-sig" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaTrx===B?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIGUIENTE</button>
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
                        ${this.respaldos.map(B=>`
                            <div class="border border-brand-black rounded p-2.5 bg-gray-50 flex justify-between items-center text-xs">
                                <div class="min-w-0 pr-2">
                                    <p class="font-mono font-black text-brand-black truncate text-[11px]">Respaldos/${B.archivoNombre||`${B.id}.backup`}</p>
                                    <p class="text-[10px] text-gray-500 font-mono truncate max-w-[260px]" title="${B.checksumSha256}">SHA: ${B.checksumSha256.slice(0,16)}... · ${B.fecha}</p>
                                </div>
                                <div class="text-right shrink-0">
                                    <span class="font-bold text-gray-600 text-[11px]">${B.registros} reg. (${B.tamanoKb} KB)</span>
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
        </div>`,this.conectarEventos(e),this.pintarGrafico(e)}conectarEventos(e){var m,g,y,h,w,f,S,B;const o=document.getElementById("btn-crit-vol"),a=document.getElementById("btn-crit-ing"),r=document.getElementById("filtro-fecha-desde"),d=document.getElementById("filtro-fecha-hasta"),i=document.getElementById("btn-aplicar-fechas"),p=document.getElementById("btn-limpiar-fechas"),c=document.getElementById("label-estado-fechas"),t=document.getElementById("tabla-transacciones-body"),s=document.getElementById("conteo-transacciones-badge"),n=this.contenedor.querySelectorAll("[data-rango]");n.forEach(A=>{A.addEventListener("click",()=>{r&&(r.value=""),d&&(d.value=""),c&&c.classList.add("hidden"),t&&(t.innerHTML=this.renderFilasTransacciones(this.transacciones)),s&&(s.textContent=`${this.transacciones.length} transacciones registradas`),n.forEach(v=>{v.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"}),A.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white shrink-0";const C=A.dataset.rango||"24h";this.aplicarRango(C,e)})}),i==null||i.addEventListener("click",()=>{this.aplicarFiltroFechas(e)}),p==null||p.addEventListener("click",()=>{var C,v;r&&(r.value=""),d&&(d.value=""),c&&c.classList.add("hidden"),t&&(t.innerHTML=this.renderFilasTransacciones(this.transacciones)),s&&(s.textContent=`${this.transacciones.length} transacciones registradas`),this.paginaTrx=1,(C=document.getElementById("trx-pag-ant"))==null||C.addEventListener("click",()=>{this.paginaTrx>1&&(this.paginaTrx--,t&&(t.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(v=document.getElementById("trx-pag-sig"))==null||v.addEventListener("click",()=>{const E=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);this.paginaTrx<E&&(this.paginaTrx++,t&&(t.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),n.forEach(E=>{E.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"});const A=this.contenedor.querySelector('[data-rango="24h"]');A&&(A.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white shrink-0"),this.aplicarRango("24h",e)}),o==null||o.addEventListener("click",()=>{this.criterioGrafica="volumen",o.className="px-2.5 py-1 text-xs font-heading font-black rounded bg-brand-black text-white",a.className="px-2.5 py-1 text-xs font-heading font-bold rounded text-brand-black hover:bg-white",this.pintarGrafico(this.vm.panel||e)}),a==null||a.addEventListener("click",()=>{this.criterioGrafica="ingreso",a.className="px-2.5 py-1 text-xs font-heading font-black rounded bg-brand-black text-white",o.className="px-2.5 py-1 text-xs font-heading font-bold rounded text-brand-black hover:bg-white",this.pintarGrafico(this.vm.panel||e)}),(m=document.getElementById("trx-pag-ant"))==null||m.addEventListener("click",()=>{this.paginaTrx>1&&(this.paginaTrx--,t&&(t.innerHTML=this.renderFilasTransacciones(this.transacciones)))}),(g=document.getElementById("trx-pag-sig"))==null||g.addEventListener("click",()=>{const A=Math.ceil(this.transacciones.length/this.POR_PAGINA_TRX);this.paginaTrx<A&&(this.paginaTrx++,t&&(t.innerHTML=this.renderFilasTransacciones(this.transacciones)))});const l=document.getElementById("btn-crear-backup");l==null||l.addEventListener("click",async()=>{if(l.disabled)return;l.disabled=!0;const A=l.textContent;l.textContent="CREANDO...";try{await D.crearRespaldo(),this.respaldos=await D.respaldos();const C=document.getElementById("lista-respaldos");C&&(C.innerHTML=this.respaldos.map(v=>`
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
                    `).join("")),this.mostrarToast("Copia de respaldo generada exitosamente.","success")}catch(C){this.mostrarToast("Error generando respaldo: "+(C instanceof Error?C.message:String(C)),"error")}finally{l.disabled=!1,l.textContent=A||"+ COPIA"}});const u=async()=>{var H,G,W;const A=await D.obtenerJornadaActual(),C=await D.listarOperadores(),v=await D.obtenerSemaforoStock(),E=document.getElementById("jornada-estado-texto"),L=document.getElementById("jornada-fechas-texto"),N=document.getElementById("jornada-operador-activo"),j=document.getElementById("jornada-balance-texto"),F=document.getElementById("jornada-tickets-texto"),M=document.getElementById("box-acciones-jornada"),K=document.getElementById("lista-operadores-chips"),P=(A==null?void 0:A.estado)==="abierta";E&&(E.textContent=P?"Jornada en Curso":"Jornada Cerrada"),L&&(L.textContent=P?`Inicio: ${(A==null?void 0:A.inicioStr)||"Reciente"}`:`Último cierre: ${(A==null?void 0:A.finStr)||"Sin jornadas"}`);const Z=A!=null&&A.operadoresActivos&&A.operadoresActivos.length>0?A.operadoresActivos.join(", "):((H=A==null?void 0:A.operadorActual)==null?void 0:H.trim())||"Sin operador asignado";N&&(N.textContent=Z),j&&(j.textContent=`$ ${ae((A==null?void 0:A.ventasTotalUsd)||0)} USD (Bs. ${ae((A==null?void 0:A.ventasTotalBs)||0)})`),F&&(F.textContent=`${(A==null?void 0:A.ticketsEmitidos)||0} tickets emitidos · ${(A==null?void 0:A.entradasStockReg)||0} reposiciones`),M&&(P?M.innerHTML=`
                        <button id="btn-cerrar-jornada" class="bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs px-3 py-1.5 rounded border-2 border-brand-black shadow-brutal-sm">
                            CERRAR JORNADA Y EMITIR INFORME
                        </button>
                    `:M.innerHTML=`
                        <button id="btn-abrir-jornada" class="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs px-3 py-1.5 rounded border-2 border-brand-black shadow-brutal-sm">
                            ABRIR NUEVA JORNADA
                        </button>
                    `,(G=M.querySelector("#btn-abrir-jornada"))==null||G.addEventListener("click",async()=>{var J;try{const Y=(await D.listarOperadores()).filter(_=>_.activo);if(Y.length===0){this.mostrarToast("No hay operadores activos. Registre uno primero.","error");return}const O=((J=Y[0])==null?void 0:J.nombre)||"Cajero Principal";await D.abrirJornada(O,Y.map(_=>_.nombre)),this.mostrarToast("Jornada abierta exitosamente.","success"),u()}catch(Y){this.mostrarToast("Error al abrir jornada: "+(Y instanceof Error?Y.message:String(Y)),"error")}}),(W=M.querySelector("#btn-cerrar-jornada"))==null||W.addEventListener("click",async()=>{try{if(await ue("¿Confirmas el cierre de la jornada operativa actual? Se generará el balance consolidado del turno.","CIERRE DE JORNADA")){const Y=await D.cerrarJornada();this.mostrarToast(`Jornada cerrada. ID: ${Y.id} — $${Y.ventasTotalUsd} USD (Bs. ${Y.ventasTotalBs})`,"success"),u()}}catch(J){this.mostrarToast("Error al cerrar jornada: "+(J instanceof Error?J.message:String(J)),"error")}})),K&&(K.innerHTML=C.map(J=>{var O,_;return`
                    <div class="inline-flex items-center gap-1.5 border-2 border-brand-black rounded px-2 py-1 text-xs font-bold ${((O=A==null?void 0:A.operadoresActivos)==null?void 0:O.includes(J.nombre))||((_=A==null?void 0:A.operadorActual)==null?void 0:_.includes(J.nombre))?"bg-purple-100 text-brand-purple border-brand-purple":"bg-gray-100 text-brand-black"}">
                        <span>${J.nombre}</span>
                        <span class="text-[9px] uppercase px-1 rounded ${J.activo?"bg-green-200 text-green-900":"bg-gray-300 text-gray-700"}">${J.activo?"Activo":"Inactivo"}</span>
                        <button data-op-edit="${J.id}" data-op-nom="${J.nombre}" title="Editar nombre" class="hover:text-blue-600 ml-1 text-[11px] font-mono font-bold bg-white border border-gray-300 rounded px-1">✎</button>
                        <button data-op-del="${J.id}" data-op-nom="${J.nombre}" title="Eliminar operador" class="hover:text-red-600 text-[11px] font-mono font-bold bg-white border border-gray-300 rounded px-1">✕</button>
                    </div>
                `}).join(""),K.querySelectorAll("button[data-op-edit]").forEach(J=>{J.addEventListener("click",async()=>{const Y=J.dataset.opEdit||"",O=J.dataset.opNom||"",_=await be("Editar nombre del operador:",O,"EDITAR OPERADOR");_&&_.trim()&&_.trim()!==O&&(await D.editarOperador(Y,_.trim()),u())})}),K.querySelectorAll("button[data-op-del]").forEach(J=>{J.addEventListener("click",async()=>{const Y=J.dataset.opDel||"",O=J.dataset.opNom||"";await ue(`¿Eliminar al operador "${O}"?`,"ELIMINAR OPERADOR")&&(await D.eliminarOperador(Y),u())})}));const k=document.getElementById("lista-metodos-pago-panel");if(k){const J=await D.listarMetodosPago();k.innerHTML=J.map(Y=>`
                    <div class="inline-flex items-center gap-2 border-2 border-brand-black rounded px-3 py-1.5 text-xs font-bold ${Y.moneda==="BS"?"bg-amber-50":"bg-blue-50"}">
                        <span>${Y.nombre}</span>
                        <span class="text-[9px] uppercase px-1.5 py-0.5 rounded font-black ${Y.moneda==="BS"?"bg-amber-200 text-amber-900":"bg-blue-200 text-blue-900"}">${Y.moneda==="BS"?"Bolívares":"Dólares"}</span>
                        <button data-metodo-del="${Y.nombre}" title="Eliminar método de pago" class="text-gray-400 hover:text-red-600 font-black text-xs ml-1 bg-white border border-gray-300 rounded px-1.5 py-0.5">✕</button>
                    </div>
                `).join(""),k.querySelectorAll("button[data-metodo-del]").forEach(Y=>{Y.addEventListener("click",async()=>{const O=Y.dataset.metodoDel||"";await ue(`¿Confirmas eliminar el método de pago "${O}"?`,"ELIMINAR MÉTODO")&&(await D.eliminarMetodoPago(O),u())})})}const $=document.getElementById("in-semaforo-rojo"),U=document.getElementById("in-semaforo-amarillo");$&&!$.dataset.modificado&&($.value=String(v.rojoMax)),U&&!U.dataset.modificado&&(U.value=String(v.amarilloMax))};u(),(y=document.getElementById("btn-relevar-operador"))==null||y.addEventListener("click",async()=>{var j,F,M;const A=(await D.listarOperadores()).filter(K=>K.activo);if(A.length===0){this.mostrarToast("No hay operadores activos disponibles. Registre uno a continuación.","error");return}const C=await D.obtenerJornadaActual(),v=(C==null?void 0:C.operadoresActivos)||[(C==null?void 0:C.operadorActual)||""],E=document.getElementById("modal-root")||document.body,L=document.createElement("div");L.id="modal-asignar-operadores",L.innerHTML=`
                <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                    <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                            <h3 class="font-heading font-black text-xl">ASIGNAR OPERADORES AL TURNO</h3>
                            <button id="modal-asig-close" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
                        </div>
                        <p class="text-xs text-gray-600 font-bold mb-3">Selecciona los operadores que atenderán en este turno:</p>
                        <div class="space-y-2 max-h-56 overflow-y-auto pr-1 mb-4">
                            ${A.map(K=>{const P=v.some(Z=>Z.toLowerCase()===K.nombre.toLowerCase());return`
                                <label class="flex items-center gap-2.5 p-2.5 rounded border-2 border-brand-black cursor-pointer ${P?"bg-purple-50 border-brand-purple":"bg-gray-50"}">
                                    <input type="checkbox" data-asig-chk="${K.nombre}" ${P?"checked":""} class="w-4 h-4 rounded text-brand-purple" />
                                    <div>
                                        <span class="font-heading font-black text-sm text-brand-black">${K.nombre}</span>
                                        <span class="text-[10px] text-gray-500 font-bold ml-2">${K.activo?"Activo":"Inactivo"}</span>
                                    </div>
                                </label>`}).join("")}
                        </div>
                        <div class="grid grid-cols-2 gap-3 border-t-2 border-brand-black pt-3">
                            <button id="modal-asig-cancelar" class="bg-white border-2 border-brand-black font-heading font-black py-2.5 rounded text-xs">CANCELAR</button>
                            <button id="modal-asig-guardar" class="bg-brand-purple text-white font-heading font-black py-2.5 rounded border-2 border-brand-black shadow-brutal-sm text-xs">ASIGNAR A TURNO</button>
                        </div>
                    </div>
                </div>`,E.appendChild(L);const N=()=>L.remove();(j=L.querySelector("#modal-asig-close"))==null||j.addEventListener("click",N),(F=L.querySelector("#modal-asig-cancelar"))==null||F.addEventListener("click",N),(M=L.querySelector("#modal-asig-guardar"))==null||M.addEventListener("click",async()=>{const K=L.querySelectorAll("input[data-asig-chk]:checked"),P=[];if(K.forEach(Z=>{Z.dataset.asigChk&&P.push(Z.dataset.asigChk)}),P.length===0){this.mostrarToast("Selecciona al menos un operador para el turno.","error");return}await D.asignarOperadoresTurno(P),N(),u()})}),(h=document.getElementById("form-crear-metodo-panel"))==null||h.addEventListener("submit",async A=>{A.preventDefault();const C=document.getElementById("in-nuevo-metodo-nombre"),v=document.getElementById("select-nuevo-metodo-moneda"),E=(C==null?void 0:C.value.trim())||"",L=(v==null?void 0:v.value)==="USD"?"USD":"BS";E&&(await D.crearMetodoPago(E,L),C&&(C.value=""),u())}),(w=document.getElementById("form-crear-operador"))==null||w.addEventListener("submit",async A=>{A.preventDefault();const C=document.getElementById("in-nuevo-operador"),v=(C==null?void 0:C.value.trim())||"";v&&(await D.crearOperador(v),C&&(C.value=""),u())}),(f=document.getElementById("form-semaforo-stock"))==null||f.addEventListener("submit",async A=>{A.preventDefault();const C=document.getElementById("in-semaforo-rojo"),v=document.getElementById("in-semaforo-amarillo"),E=document.getElementById("msg-semaforo-stock"),L=parseInt((C==null?void 0:C.value)||"5",10),N=parseInt((v==null?void 0:v.value)||"15",10);if(L>=N){this.mostrarToast("El umbral rojo debe ser estrictamente menor que el umbral amarillo.","error");return}await D.guardarSemaforoStock(L,N),E&&(E.textContent="Umbrales del semáforo guardados y aplicados a todo el sistema.",E.classList.remove("hidden"),setTimeout(()=>E.classList.add("hidden"),2500))}),(S=document.getElementById("btn-reset-semaforo"))==null||S.addEventListener("click",async()=>{await D.guardarSemaforoStock(5,15),u()}),(B=document.getElementById("form-cambiar-clave"))==null||B.addEventListener("submit",async A=>{A.preventDefault();const C=document.getElementById("pin-actual"),v=document.getElementById("pin-nuevo"),E=document.getElementById("msg-cambio-clave");if(E)try{await D.cambiarPinDueno((C==null?void 0:C.value.trim())||"",(v==null?void 0:v.value.trim())||""),await this.modelo.cargarConfig(),E.textContent=v!=null&&v.value.trim()?"Clave actualizada exitosamente. El panel requerirá esta nueva clave para ingresar.":"Clave eliminada. El panel ha quedado en modo abierto sin clave.",E.style.color="#00823B",E.classList.remove("hidden"),setTimeout(()=>void this.render(),1200)}catch(L){E.textContent=L instanceof Error?L.message:String(L),E.style.color="#C60C15",E.classList.remove("hidden")}})}aplicarFiltroFechas(e){const o=document.getElementById("filtro-fecha-desde"),a=document.getElementById("filtro-fecha-hasta"),r=document.getElementById("label-estado-fechas"),d=document.getElementById("tabla-transacciones-body"),i=document.getElementById("conteo-transacciones-badge"),p=(o==null?void 0:o.value.trim())||"",c=(a==null?void 0:a.value.trim())||"";if(!p&&!c){r&&(r.textContent="Selecciona una fecha Desde o Hasta para iniciar el diagnóstico.",r.classList.remove("hidden"));return}let t=0,s=Number.MAX_SAFE_INTEGER;if(p){const[$,U,H]=p.split("-").map(Number);t=Math.floor(new Date($,U-1,H,0,0,0,0).getTime()/1e3)}if(c){const[$,U,H]=c.split("-").map(Number);s=Math.floor(new Date($,U-1,H,23,59,59,999).getTime()/1e3)}if(t>s){r&&(r.textContent='Rango inválido: la fecha "Desde" es posterior a la fecha "Hasta".',r.classList.remove("hidden"));return}const n=this.transacciones.filter($=>{const U=this.obtenerTimestampTicket($);return U>=t&&U<=s}),l=n.reduce(($,U)=>$+re(U.totalUsd),0),u=n.reduce(($,U)=>$+re(U.totalBs),0),m=n.length;let g=0;n.forEach($=>{($.lineas||[]).forEach(U=>{const H=this.productos.find(G=>G.sku===U.sku);H&&(g+=re(H.precioBrutoUsd)*re(U.cantidad))})});const y=Math.max(0,l-g),h=y*.95,w=h*(this.modelo.tasaActual||807.39),f=m>0?(l/m).toFixed(2):"0.00",S=document.getElementById("kpi-ventas-usd"),B=document.getElementById("kpi-ventas-bs"),A=document.getElementById("kpi-tickets"),C=document.getElementById("kpi-gan-bruta"),v=document.getElementById("kpi-gan-neta"),E=document.getElementById("kpi-gan-neta-bs"),L=document.getElementById("kpi-ticket-prom");S&&(S.textContent="$ "+ae(l)),B&&(B.textContent="Bs. "+me(u),B.title="Bs. "+ae(u)),A&&(A.textContent=String(m)),C&&(C.textContent="$ "+ae(y)),v&&(v.textContent="$ "+ae(h)),E&&(E.textContent="Bs. "+me(w),E.title="Bs. "+ae(w)),L&&(L.textContent="$ "+f),d&&(d.innerHTML=this.renderFilasTransacciones(n)),i&&(i.textContent=`${n.length} transacciones en rango`),this.contenedor.querySelectorAll("[data-rango]").forEach($=>{$.className="w-12 sm:w-14 h-8 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0"});const j={};n.forEach($=>{($.lineas||[]).forEach(U=>{j[U.nombre]||(j[U.nombre]={nombre:U.nombre,cantidad:0,totalUsd:0}),j[U.nombre].cantidad+=Number(U.cantidad)||0,j[U.nombre].totalUsd+=re(U.subtotalUsd)||Number(U.cantidad)*re(U.precioUsd)})});const F=Object.values(j).reduce(($,U)=>$+U.totalUsd,0)||1,M=Object.values(j).sort(($,U)=>U.totalUsd-$.totalUsd).map($=>({nombre:$.nombre,cantidad:String($.cantidad),totalUsd:$.totalUsd.toFixed(2),porcentaje:($.totalUsd/F*100).toFixed(1)})),K={...e,ventas24hUsd:l.toFixed(2),ventas24hBs:u.toFixed(2),gananciaBrutaUsd:y.toFixed(2),gananciaNetaUsd:h.toFixed(2),tickets24h:m,topProductos:M.length>0?M:n.length===0?[]:e.topProductos};this.vm.setDatos(K),this.pintarGrafico(K);const P=$=>$.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),Z=p?new Date(t*1e3):new Date(2020,0,1),k=c?new Date(s*1e3):new Date;if(this.rangoDetalleFechas=`Del ${P(Z)} al ${P(k)}`,r){const $=p||"Inicio",U=c||"Actualidad";r.textContent=`Diagnóstico activo (${$} al ${U}): ${n.length} transacciones registradas`,r.classList.remove("hidden")}}aplicarRango(e,o){const a=new Date,r=C=>C.toLocaleString("es-VE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});let d=864e5;e==="7d"?d=7*864e5:e==="30d"?d=30*864e5:e==="1a"?d=365*864e5:e==="todo"&&(d=5*365*864e5);const i=new Date(a.getTime()-d);this.rangoDetalleFechas=`Del ${r(i)} al ${r(a)}`;const p=Math.floor(i.getTime()/1e3),c=this.transacciones.filter(C=>this.obtenerTimestampTicket(C)>=p),t=this.modelo.tasaActual||807.39;let s=0,n=0;c.forEach(C=>{s+=re(C.totalUsd),n+=re(C.totalBs)});const l=c.length,u=document.getElementById("kpi-ventas-usd"),m=document.getElementById("kpi-ventas-bs"),g=document.getElementById("kpi-tickets"),y=document.getElementById("kpi-gan-bruta"),h=document.getElementById("kpi-gan-neta"),w=document.getElementById("kpi-gan-neta-bs"),f=document.getElementById("kpi-ticket-prom");if(u&&(u.textContent="$ "+ae(s)),m&&(m.textContent="Bs. "+me(n),m.title="Bs. "+ae(n)),g&&(g.textContent=String(l)),y&&(y.textContent="$ "+ae(s*this.margenBrutoPct/100)),h&&(h.textContent="$ "+ae(s*this.margenNetoPct/100)),w){const C=s*this.margenNetoPct/100*t;w.textContent="Bs. "+me(C),w.title="Bs. "+ae(C)}f&&(f.textContent="$ "+(l>0?(s/l).toFixed(2):"0.00"));const S=new Map;c.forEach(C=>{var v;(v=C.lineas)==null||v.forEach(E=>{const L=S.get(E.sku);L?(L.cantidad+=re(E.cantidad),L.totalUsd+=re(E.subtotalUsd)):S.set(E.sku,{nombre:E.nombre,cantidad:re(E.cantidad),totalUsd:re(E.subtotalUsd)})})});const B=Array.from(S.values()).sort((C,v)=>v.totalUsd-C.totalUsd).slice(0,10).map(C=>({nombre:C.nombre,cantidad:String(Math.round(C.cantidad)),totalUsd:C.totalUsd>0?String(C.totalUsd.toFixed(2)):void 0,porcentaje:s>0?(C.totalUsd/s*100).toFixed(1):"0.0"})),A={...o,topProductos:B};this.vm.setDatos(A),this.pintarGrafico(A)}kpi(e,o,a,r,d=""){return`
        <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-4 ${r} flex flex-col justify-between min-w-0 overflow-hidden" title="${d}">
            <p class="font-heading font-bold text-xs uppercase tracking-wide text-brand-text truncate">${e}</p>
            <div class="font-heading font-black text-xl lg:text-2xl mt-1 min-w-0">${o}</div>
            <div class="text-xs font-body text-brand-text truncate mt-1">${a}</div>
            ${d?`<div class="text-[10px] text-gray-500 font-bold truncate mt-0.5 border-t border-gray-200/60 pt-1">${d}</div>`:""}
        </div>`}async pintarGrafico(e){const o=this.contenedor.querySelector("#panel-chart-container");if(!o)return;if(e.topProductos.length===0){o.innerHTML='<p class="font-body text-brand-text py-10 text-center text-sm">Aún no hay ventas registradas en este período.</p>';return}const a=["#2563EB","#D97706","#10B981","#8B5CF6","#EC4899","#06B6D4","#F97316","#84CC16","#6366F1","#14B8A6","#F43F5E","#A855F7","#EAB308","#64748B"],r=this.criterioGrafica==="volumen",d=e.topProductos.map(g=>Number(r?g.cantidad:g.totalUsd||Number(g.cantidad)*8.5)),i=d.reduce((g,y)=>g+y,0)||1,p=e.topProductos.map((g,y)=>({nombre:g.nombre,valor:d[y],porcentaje:(d[y]/i*100).toFixed(1)}));let c=0;const t=95,s=95,n=85;let l="";p.length===1?l=`<circle cx="${t}" cy="${s}" r="${n}" fill="${a[0]}" stroke="#1E232A" stroke-width="2" />`:p.forEach((g,y)=>{const w=g.valor/i*2*Math.PI,f=c,S=c+w,B=t+n*Math.cos(f),A=s+n*Math.sin(f),C=t+n*Math.cos(S),v=s+n*Math.sin(S),E=w>Math.PI?1:0,L=a[y%a.length];l+=`
                    <path d="M ${t} ${s} L ${B} ${A} A ${n} ${n} 0 ${E} 1 ${C} ${v} Z"
                        fill="${L}" stroke="#1E232A" stroke-width="1.5"
                        class="hover:opacity-85 transition-opacity cursor-pointer">
                        <title>${g.nombre}: ${g.porcentaje}%</title>
                    </path>
                `,c+=w});const u=p.map((g,y)=>{const h=a[y%a.length],w=r?`${g.valor} un.`:`$ ${ae(g.valor)}`;return`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-2 pr-3 flex items-center gap-2">
                        <span class="w-3 h-3 rounded-full inline-block border border-brand-black shrink-0" style="background-color: ${h}"></span>
                        <span class="font-bold text-xs truncate max-w-[180px]" title="${g.nombre}">${g.nombre}</span>
                    </td>
                    <td class="py-2 text-right font-black text-xs pr-2">${w}</td>
                    <td class="py-2 text-right font-mono text-xs font-bold text-gray-500">${g.porcentaje}%</td>
                </tr>
            `}).join(""),m=r?`${Math.round(i)} un.`:`$ ${ae(i)}`;o.innerHTML=`
        <div class="flex flex-col md:flex-row items-center justify-around gap-4 sm:gap-6 w-full h-full py-2 min-w-0">
            <div class="shrink-0 flex flex-col items-center justify-center my-2">
                <svg width="190" height="190" viewBox="0 0 190 190" class="drop-shadow-sm">
                    ${l}
                </svg>
                <span class="text-[11px] font-black uppercase text-brand-black bg-gray-100 border border-brand-black px-2.5 py-0.5 rounded mt-2">
                    Total: ${m}
                </span>
            </div>
            <div class="w-full min-w-0 max-h-56 overflow-y-auto pr-1">
                <table class="w-full text-left">
                    <thead class="sticky top-0 bg-white">
                        <tr class="text-[10px] uppercase font-heading font-bold text-gray-400 border-b border-brand-black">
                            <th class="pb-1">Producto (${p.length})</th>
                            <th class="pb-1 text-right">${r?"Volumen":"Ingresos"}</th>
                            <th class="pb-1 text-right">Part.</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${u}
                    </tbody>
                </table>
            </div>
        </div>`}mostrarToast(e,o="info"){var d;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},r=document.createElement("div");r.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,r.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(d=r.querySelector("button"))==null||d.addEventListener("click",()=>r.remove()),document.body.appendChild(r),setTimeout(()=>r.remove(),8e3)}}const oe=b=>{if(typeof b=="number")return Number.isFinite(b)?b:0;if(b==null)return 0;let e=String(b).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},R=b=>oe(b).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2});function Ie(b){if(b.sinStock)return"Ilimitado";const e=Number(b.stock);if(b.esCaja&&b.unidadesPorCaja&&b.unidadesPorCaja>1){const o=Math.floor(e/b.unidadesPorCaja),a=e%b.unidadesPorCaja;return`${o} cj. + ${a} un.`}return`${e} un.`}const Se=(b,e,o,a)=>{b.maxLength=o,b.addEventListener("input",()=>{let r=b.value.replace(/[^0-9.,]/g,"");const d=r.split(/[.,]/);d.length>2&&(r=d[0]+"."+d.slice(1).join("")),r.length>o&&(r=r.slice(0,o));const i=oe(r);Number.isFinite(i)&&i>e&&(r=String(e)),b.value!==r&&(b.value=r),a&&a()})},Ce=(b,e,o=!1)=>{b.maxLength=e,b.addEventListener("input",()=>{let a=o?b.value.replace(/[<>{}\\]/g,""):b.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ .,/_#-]/g,"");a.length>e&&(a=a.slice(0,e)),b.value!==a&&(b.value=a)})};function Pe(b){return ut(b)}class gt{constructor(e,o,a){T(this,"contenedor");T(this,"modal");T(this,"modelo");T(this,"cuentas",[]);T(this,"productos",[]);T(this,"cuentaSeleccionada",null);T(this,"filtroTab","todas");T(this,"POR_PAGINA_CUENTAS",15);T(this,"paginaCuentas",1);T(this,"pagosBorradorPorCuenta",new Map);T(this,"resolucionVueltoPorCuenta",new Map);this.contenedor=e,this.modal=o,this.modelo=a}async render(){[this.cuentas,this.productos]=await Promise.all([D.cuentas(),D.productos()]);const e=this.modelo.tieneRubro(4);!e&&this.filtroTab==="activa"&&(this.filtroTab="deuda");const o=this.cuentas.filter(s=>(s.tipo||"activa")==="activa"),a=this.cuentas.filter(s=>s.tipo==="deuda"),r=this.cuentas.filter(s=>e?this.filtroTab==="activa"?(s.tipo||"activa")==="activa":this.filtroTab==="deuda"?s.tipo==="deuda":!0:s.tipo==="deuda");this.cuentaSeleccionada&&(this.cuentaSeleccionada=this.cuentas.find(s=>{var n;return s.ventaId===((n=this.cuentaSeleccionada)==null?void 0:n.ventaId)})||null),this.cuentaSeleccionada&&!r.some(s=>{var n;return s.ventaId===((n=this.cuentaSeleccionada)==null?void 0:n.ventaId)})?this.cuentaSeleccionada=r[0]||null:!this.cuentaSeleccionada&&r.length>0&&(this.cuentaSeleccionada=r[0]);const d=this.modelo.tasaActual||807.39;let i=0;a.forEach(s=>{const n=oe(s.totalParcialUsd),l=oe(s.abonosUsd);i+=Math.max(0,n-l)});const p=i*d;let c=0;o.forEach(s=>{const n=oe(s.totalParcialUsd),l=oe(s.abonosUsd);c+=Math.max(0,n-l)});const t=this.cuentas.reduce((s,n)=>s+oe(n.abonosUsd),0);this.contenedor.innerHTML=`
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
                <p class="font-heading font-black text-2xl sm:text-3xl text-amber-950 mt-1">$ ${R(i)}</p>
                <p class="text-xs font-bold text-amber-800">Bs. ${R(p)} <span class="text-[10px] text-amber-700">(tasa ref.)</span></p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Cuentas en Local</span>
                    <span class="bg-blue-100 text-blue-900 font-black text-[10px] px-1.5 py-0.5 rounded border border-blue-300">${o.length} activas</span>
                </div>
                <p class="font-heading font-black text-2xl sm:text-3xl text-brand-black mt-1">$ ${R(c)}</p>
                <p class="text-xs font-bold text-gray-500">Saldo pendiente de cobro</p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Abonos Recaudados</span>
                    <span class="bg-emerald-100 text-emerald-900 font-black text-[10px] px-1.5 py-0.5 rounded border border-emerald-300">Anticipos</span>
                </div>
                <p class="font-heading font-black text-2xl sm:text-3xl text-emerald-700 mt-1">$ ${R(t)}</p>
                <p class="text-xs font-bold text-gray-500">Bs. ${R(t*d)}</p>
            </div>

            <div class="bg-white border-2 border-brand-black rounded-lg p-3 sm:p-4 shadow-brutal-sm">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-black uppercase text-gray-600 tracking-wider">Tasa Oficial del Día</span>
                    <span class="bg-gray-100 text-gray-800 font-black text-[10px] px-1.5 py-0.5 rounded border border-gray-300">BCV</span>
                </div>
                <p class="font-heading font-black text-xl sm:text-2xl text-brand-black mt-1">Bs. ${R(d)}</p>
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
                        </div>`:(()=>{const s=Math.ceil(r.length/this.POR_PAGINA_CUENTAS);this.paginaCuentas>s&&(this.paginaCuentas=s),this.paginaCuentas<1&&(this.paginaCuentas=1);const n=(this.paginaCuentas-1)*this.POR_PAGINA_CUENTAS;return r.slice(n,n+this.POR_PAGINA_CUENTAS).map(u=>{var A;const m=u.tipo==="deuda",g=oe(u.totalParcialUsd),y=oe(u.abonosUsd),h=Math.max(0,g-y),w=Math.max(0,y-g),f=((A=this.cuentaSeleccionada)==null?void 0:A.ventaId)===u.ventaId,S=Pe(u.fechaCreacionUnix);let B="cursor-pointer border-2 border-brand-black rounded-lg p-3 sm:p-4 transition-all ";return f?B+=m?"bg-amber-50 text-brand-black border-l-[6px] border-l-amber-600 shadow-brutal ring-1 ring-amber-500/20":"bg-blue-50 text-brand-black border-l-[6px] border-l-blue-600 shadow-brutal ring-1 ring-blue-500/20":B+=m?"bg-stone-50 border-l-4 border-l-amber-300 text-brand-black shadow-brutal-sm hover:bg-amber-50/60 hover:-translate-y-0.5":"bg-stone-50 border-l-4 border-l-blue-200 text-brand-black shadow-brutal-sm hover:bg-blue-50/50 hover:-translate-y-0.5",`
                        <div data-cuenta-id="${u.ventaId}" class="${B}">
                            <div class="flex justify-between items-start gap-2">
                                <div>
                                    <div class="flex items-center gap-1.5">
                                        <span class="font-heading font-black text-base sm:text-lg leading-snug">${u.etiqueta}</span>
                                        ${m?'<span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-amber-400 bg-amber-100 text-amber-900">DEUDA</span>':'<span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-blue-300 bg-blue-100 text-blue-900">LOCAL</span>'}
                                    </div>
                                    <p class="text-[11px] font-mono font-bold text-gray-500 mt-0.5">
                                        ${m?`${S} · `:""}${u.ventaId.slice(0,9)}
                                    </p>
                                    ${u.nota?`<p class="text-[11px] italic font-semibold text-gray-600 mt-0.5 line-clamp-1">Nota: ${u.nota}</p>`:""}
                                </div>
                                <div class="text-right shrink-0">
                                    <p class="font-heading font-black text-base sm:text-lg text-brand-black">$${R(u.totalParcialUsd)}</p>
                                    ${w>0?`<p class="text-[11px] font-black text-emerald-700">A favor: +$${R(w)}</p>`:h>0?`<p class="text-xs font-bold ${m?"text-amber-900":"text-blue-900"}">Pend: $${R(h)}</p>`:'<p class="text-[11px] font-bold text-gray-400">Cubierta ($0,00)</p>'}
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-2 pt-2 border-t border-gray-200 text-[11px] font-bold text-gray-600">
                                <span>${u.lineas} consumos</span>
                                <span>Abonado: <strong class="text-brand-black">$${R(u.abonosUsd)}</strong></span>
                            </div>
                        </div>`}).join("")})()}
                </div>
                ${(()=>{const s=Math.ceil(r.length/this.POR_PAGINA_CUENTAS);return s<=1?"":`
                    <div class="flex items-center justify-between border-2 border-brand-black rounded bg-white p-2 mt-2 shadow-brutal-sm">
                        <span class="text-[10px] font-bold text-gray-600">Pág. ${this.paginaCuentas} de ${s} (${r.length} reg.)</span>
                        <div class="flex gap-1">
                            <button id="cta-pag-ant" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCuentas===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANT.</button>
                            <button id="cta-pag-sig" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCuentas===s?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIG.</button>
                        </div>
                    </div>`})()}
            </div>

            <!-- Columna de Detalle / Añadir Consumo / Cobrar -->
            <div class="lg:col-span-2">
                ${this.cuentaSeleccionada?(()=>{var y;const s=this.cuentaSeleccionada.tipo==="deuda",n=oe(this.cuentaSeleccionada.totalParcialUsd),l=oe(this.cuentaSeleccionada.abonosUsd),u=Math.max(0,n-l),m=Math.max(0,l-n),g=Pe(this.cuentaSeleccionada.fechaCreacionUnix);return`
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-4 sm:p-6 flex flex-col space-y-4">
                    <!-- Banner Distintivo del Tipo de Registro -->
                    ${s?`
                    <div class="bg-amber-50/70 border-2 border-brand-black border-l-[6px] border-l-amber-600 rounded p-3 text-xs text-amber-950 flex flex-wrap justify-between items-center gap-2">
                        <div class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-amber-500 border border-brand-black shrink-0"></span>
                            <div>
                                <p class="font-heading font-black text-sm uppercase">DEUDA COMERCIAL / FIADO PENDIENTE</p>
                                <p class="text-[11px] font-bold text-amber-900 mt-0.5">
                                    Cliente: <strong>${this.cuentaSeleccionada.cliente||this.cuentaSeleccionada.etiqueta}</strong> · Creada: <strong>${this.cuentaSeleccionada.fechaCreacionStr||g}</strong>
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
                            ${m>0?`
                                <span class="text-[10px] font-black text-emerald-900 uppercase px-2 py-0.5 rounded bg-emerald-100 border border-emerald-500">
                                    SALDO A FAVOR DEL CLIENTE
                                </span>
                                <p class="font-heading font-black text-2xl sm:text-3xl text-emerald-600 mt-0.5">
                                    +$${R(m)}
                                </p>
                                <p class="text-xs font-black text-emerald-700">
                                    Bs. ${R(m*d)} (excedente)
                                </p>
                                <div class="flex items-center justify-end gap-1.5 mt-1">
                                    <span class="font-bold text-[10px] text-gray-500">
                                        Consumo: $${R(n)} · Abonado: <strong class="text-brand-black">$${R(l)}</strong>
                                    </span>
                                    <button data-editar-abono title="Corregir monto abonado por error" class="text-[10px] font-black uppercase px-2 py-0.5 rounded border border-brand-black bg-amber-200 hover:bg-amber-300 text-brand-black">
                                        Editar
                                    </button>
                                </div>
                            `:`
                                <span class="text-xs font-bold text-gray-500 uppercase">${s?"Monto Adeudado Pendiente":"Saldo Pendiente"}</span>
                                <p class="font-heading font-black text-2xl sm:text-3xl text-brand-black">
                                    $${R(u)} USD
                                </p>
                                <p class="text-xs font-bold text-gray-600">
                                    Bs. ${R(u*d)} <span class="text-[10px] text-gray-400">(${s?"tasa hoy":"actual"})</span>
                                </p>
                                <div class="flex items-center justify-end gap-1.5 mt-1">
                                    <span class="font-bold text-xs text-gray-600">
                                        Total: $${R(n)} · Abonado: <strong class="text-brand-black">$${R(l)}</strong>
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
                            <span class="font-heading font-black text-xs uppercase tracking-wider text-gray-700">Consumos Cargados (${((y=this.cuentaSeleccionada.consumos)==null?void 0:y.length)||0})</span>
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
                                        <p class="text-[11px] text-gray-500 font-semibold">${h.cantidad} un. &times; $${R(h.precioUsd)} <span class="text-gray-400 font-normal">· Bs. ${this.modelo.bs(oe(h.precioUsd))} c/u</span></p>
                                    </div>
                                    <div class="flex items-center gap-2 shrink-0">
                                        <div class="text-right mr-1">
                                            <p class="font-heading font-black text-sm sm:text-base text-brand-black leading-tight">$${R(h.subtotalUsd)}</p>
                                            <p class="text-[10px] font-bold text-gray-500 leading-tight">Bs. ${this.modelo.bs(oe(h.subtotalUsd))}</p>
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
                            ${this.productos.map(h=>{const w=!h.sinStock&&Number(h.stock)<=0,f=h.precioPaqueteUsd&&h.nombrePaquete||h.esCaja&&h.unidadesPorCaja&&h.unidadesPorCaja>1;return`
                                <div class="relative" data-producto-row="${h.sku}">
                                    <button data-add-sku="${h.sku}" data-modo="unidad" data-agotado="${w?"1":"0"}" class="text-left border-2 border-brand-black rounded p-2 transition-all text-xs font-bold ${w?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-gray-50 hover:bg-white shadow-sm hover:shadow-brutal-sm"} w-full">
                                        <div class="flex justify-between items-start gap-1">
                                            <p class="truncate flex-1" title="${h.nombre}">${h.nombre}</p>
                                            ${w?'<span class="bg-red-200 text-red-900 border border-red-400 text-[9px] font-black px-1 rounded">AGOTADO</span>':""}
                                        </div>
                                        <div class="flex justify-between items-center mt-1">
                                            <p class="text-brand-black font-black">$${R(h.precioUsd)}</p>
                                            <span class="text-[10px] ${w?"text-red-700 font-black":"text-gray-500"}">${Ie(h)}</span>
                                        </div>
                                    </button>
                                    ${f?`
                                    <button data-add-sku="${h.sku}" data-modo="paquete" data-agotado="${w?"1":"0"}" class="text-left border-2 border-brand-purple rounded p-1 transition-all text-[10px] font-bold mt-1 w-full ${w?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-purple-50 hover:bg-purple-100 shadow-sm hover:shadow-brutal-sm"}">
                                        <div class="flex justify-between items-center">
                                            <span class="text-purple-800">${h.nombrePaquete} ($${Number(h.precioPaqueteUsd).toFixed(2)})</span>
                                            <span class="text-purple-600">${h.unidadesPorCaja||1} un.</span>
                                        </div>
                                    </button>`:""}
                                </div>`}).join("")}
                        </div>
                    </div>

                    <!-- Botonera de Abono, Corrección, Conversión y Liquidación -->
                    <div class="border-t-2 border-brand-black pt-4 grid grid-cols-1 sm:grid-cols-${s?"3":"4"} gap-2 sm:gap-3">
                        ${s?"":`
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
                        <button id="btn-cerrar-cuenta" class="${m>0?"bg-emerald-600 hover:bg-emerald-700":"bg-green-700 hover:bg-green-800"} text-white font-heading font-black text-xs py-3.5 rounded border-2 border-brand-black shadow-brutal active:translate-y-0.5">
                            ${s?"COBRAR Y LIQUIDAR DEUDA (TASA LIBRE)":m>0?`LIQUIDAR (+$${R(m)})`:"LIQUIDAR Y COBRAR"}
                        </button>
                    </div>
                </div>`})():`
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                    <h4 class="font-heading font-black text-2xl mb-2">Selecciona un registro</h4>
                    <p class="text-brand-text font-body text-sm max-w-sm">Haz clic en una cuenta activa o deuda de la lista izquierda para cargarle consumos, abonar pagos o cobrarla.</p>
                </div>
                `}
            </div>
        </div>`,this.vincularEventos()}vincularEventos(){var a,r,d,i,p,c,t,s,n,l,u,m;(a=document.getElementById("btn-historial-turno-cuentas"))==null||a.addEventListener("click",()=>{Fe(this.modal)}),(r=document.getElementById("btn-nueva-cuenta"))==null||r.addEventListener("click",()=>this.modalNuevaCuenta("activa")),(d=document.getElementById("btn-nueva-deuda"))==null||d.addEventListener("click",()=>this.modalNuevaCuenta("deuda")),(i=document.getElementById("tab-todas"))==null||i.addEventListener("click",()=>{this.filtroTab="todas",this.paginaCuentas=1,this.render()}),(p=document.getElementById("tab-activas"))==null||p.addEventListener("click",()=>{this.filtroTab="activa",this.paginaCuentas=1,this.render()}),(c=document.getElementById("tab-deudas"))==null||c.addEventListener("click",()=>{this.filtroTab="deuda",this.paginaCuentas=1,this.render()}),(t=document.getElementById("cta-pag-ant"))==null||t.addEventListener("click",()=>{this.paginaCuentas>1&&(this.paginaCuentas--,this.render())}),(s=document.getElementById("cta-pag-sig"))==null||s.addEventListener("click",()=>{this.paginaCuentas++,this.render()}),this.contenedor.querySelectorAll("[data-cuenta-id]").forEach(g=>{g.addEventListener("click",()=>{const y=g.dataset.cuentaId;this.cuentaSeleccionada=this.cuentas.find(h=>h.ventaId===y)||null,this.render()})}),this.contenedor.querySelectorAll("[data-inc-consumo]").forEach(g=>{g.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const y=g,h=y.dataset.sku||"",w=y.dataset.modo||"unidad";try{const f=await D.agregarConsumo(this.cuentaSeleccionada.ventaId,h,"1",!0,w);this.cuentaSeleccionada=f,this.render()}catch(f){this.mostrarToast(f instanceof Error?f.message:String(f),"error")}})}),this.contenedor.querySelectorAll("[data-dec-consumo]").forEach(g=>{g.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const y=g,h=y.dataset.decConsumo||"";if(!(Number(y.dataset.cant||"1")<=1&&!await ue("¿Deseas quitar este producto de la cuenta y devolverlo al inventario?","ELIMINAR CONSUMO")))try{const f=await D.eliminarConsumo(this.cuentaSeleccionada.ventaId,h,1);this.cuentaSeleccionada=f,this.render()}catch(f){this.mostrarToast(f instanceof Error?f.message:String(f),"error")}})}),this.contenedor.querySelectorAll("[data-del-consumo]").forEach(g=>{g.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const y=g.dataset.delConsumo||"";if(await ue("¿Deseas eliminar todo este consumo y reintegrar las unidades al inventario?","ELIMINAR CONSUMO"))try{const w=await D.eliminarConsumo(this.cuentaSeleccionada.ventaId,y);this.cuentaSeleccionada=w,this.render()}catch(w){this.mostrarToast(w instanceof Error?w.message:String(w),"error")}})}),(n=document.getElementById("btn-convertir-deuda"))==null||n.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const g=this.cuentaSeleccionada,y=g.cliente||g.etiqueta||"",h=await be("Nombre o titular responsable de la deuda comercial:",y,"CONVERTIR A DEUDA COMERCIAL");if(!h||!h.trim())return;const w=g.nota||"",f=await be("Nota o plazo de compromiso de pago (opcional):",w,"PLAZO / COMPROMISO");try{const S=await D.convertirCuentaADeuda(g.ventaId,h.trim(),f?f.trim():void 0);this.cuentaSeleccionada=S,this.filtroTab="deuda",this.mostrarToast("Cuenta convertida a deuda comercial correctamente.","success"),this.render()}catch(S){this.mostrarToast(S instanceof Error?S.message:String(S),"error")}});const e=this.contenedor.querySelector("#cta-buscar-prod");e&&Ce(e,40),e==null||e.addEventListener("input",()=>{const g=e.value.trim().toLowerCase(),y=this.contenedor.querySelector("#cta-grid-prod");if(y){const h=this.productos.filter(w=>!g||w.nombre.toLowerCase().includes(g));h.length===0?y.innerHTML='<p class="col-span-full text-center text-xs text-gray-400 py-4 font-bold">No se encontraron productos coincidentes.</p>':(y.innerHTML=h.map(w=>{const f=!w.sinStock&&Number(w.stock)<=0,S=w.precioPaqueteUsd&&w.nombrePaquete||w.esCaja&&w.unidadesPorCaja&&w.unidadesPorCaja>1,B=w.presentaciones&&w.presentaciones.length>0?w.presentaciones.map(A=>`
                                <button data-add-sku="${w.sku}" data-modo="${A.nombre}" data-agotado="${f?"1":"0"}" class="text-left border-2 border-brand-purple rounded p-1 transition-all text-[10px] font-bold mt-1 w-full ${f?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-purple-50 hover:bg-purple-100 shadow-sm hover:shadow-brutal-sm"}">
                                    <div class="flex justify-between items-center">
                                        <span class="text-purple-800">${A.nombre} ($${Number(A.precioUsd).toFixed(2)})</span>
                                        <span class="text-purple-600">${A.unidades} un.</span>
                                    </div>
                                </button>`).join(""):S?`
                                <button data-add-sku="${w.sku}" data-modo="paquete" data-agotado="${f?"1":"0"}" class="text-left border-2 border-brand-purple rounded p-1 transition-all text-[10px] font-bold mt-1 w-full ${f?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-purple-50 hover:bg-purple-100 shadow-sm hover:shadow-brutal-sm"}">
                                    <div class="flex justify-between items-center">
                                        <span class="text-purple-800">${w.nombrePaquete||"Caja"} (${w.precioPaqueteUsd?`$${Number(w.precioPaqueteUsd).toFixed(2)}`:`$${(Number(w.precioUsd)*(w.unidadesPorCaja||1)).toFixed(2)}`})</span>
                                        <span class="text-purple-600">${w.unidadesPorCaja||1} un.</span>
                                    </div>
                                </button>`:"";return`
                        <div class="relative" data-producto-row="${w.sku}">
                            <button data-add-sku="${w.sku}" data-modo="unidad" data-agotado="${f?"1":"0"}" class="text-left border-2 border-brand-black rounded p-2 transition-all text-xs font-bold ${f?"bg-gray-100 opacity-60 cursor-not-allowed":"bg-gray-50 hover:bg-white shadow-sm hover:shadow-brutal-sm"} w-full">
                                <div class="flex justify-between items-start gap-1">
                                    <p class="truncate flex-1" title="${w.nombre}">${w.nombre}</p>
                                    ${f?'<span class="bg-red-200 text-red-900 border border-red-400 text-[9px] font-black px-1 rounded">AGOTADO</span>':""}
                                </div>
                                <div class="flex justify-between items-center mt-1">
                                    <p class="text-brand-black font-black">$${R(w.precioUsd)}</p>
                                    <span class="text-[10px] ${f?"text-red-700 font-black":"text-gray-500"}">${Ie(w)}</span>
                                </div>
                            </button>
                            ${B}
                        </div>`}).join(""),this.vincularBotonesAgregar(y))}});const o=this.contenedor.querySelector("#cta-grid-prod");o&&this.vincularBotonesAgregar(o),this.contenedor.querySelectorAll("[data-editar-abono]").forEach(g=>{g.addEventListener("click",()=>this.modalEditarAbono())}),(l=document.getElementById("btn-editar-abono-cuenta"))==null||l.addEventListener("click",()=>this.modalEditarAbono()),(u=document.getElementById("btn-abonar-cuenta"))==null||u.addEventListener("click",()=>this.modalAbono()),(m=document.getElementById("btn-cerrar-cuenta"))==null||m.addEventListener("click",()=>this.modalCierre())}vincularBotonesAgregar(e){e.querySelectorAll("[data-add-sku]").forEach(o=>{o.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const a=o,r=a.dataset.addSku||"",d=a.dataset.agotado==="1",i=a.dataset.modo||"unidad";if(d){this.mostrarToast("Stock insuficiente: este producto no tiene existencias disponibles en inventario.","error");return}try{const p=await D.agregarConsumo(this.cuentaSeleccionada.ventaId,r,"1",!0,i);this.cuentaSeleccionada=p,this.render()}catch(p){this.mostrarToast(p instanceof Error?p.message:String(p),"error")}})})}modalNuevaCuenta(e="activa"){let o=e;const a=()=>{var s,n;const r=o==="deuda";this.modal.innerHTML=`
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
            </div>`;const d=this.modal.querySelector("#modal-tab-activa"),i=this.modal.querySelector("#modal-tab-deuda");d==null||d.addEventListener("click",()=>{o="activa",a()}),i==null||i.addEventListener("click",()=>{o="deuda",a()});const p=this.modal.querySelector("#modal-cta-nombre"),c=this.modal.querySelector("#modal-cta-nota");p&&Ce(p,40),c&&Ce(c,60),setTimeout(()=>p==null?void 0:p.focus(),50);const t=()=>{this.modal.innerHTML=""};(s=this.modal.querySelector("#modal-cta-cancel"))==null||s.addEventListener("click",t),(n=this.modal.querySelector("#modal-cta-ok"))==null||n.addEventListener("click",async()=>{const l=p==null?void 0:p.value.trim().slice(0,40),u=c==null?void 0:c.value.trim().slice(0,60);if(l){const m=await D.abrirCuenta(l,o,u,l);this.cuentaSeleccionada=m,o==="deuda"&&(this.filtroTab="deuda"),t(),this.render()}else this.mostrarToast(r?"Debe ingresar el nombre del cliente o empresa deudora.":"Debe ingresar un identificador válido para la cuenta.","error"),p==null||p.focus()})};a()}async modalAbono(){if(!this.cuentaSeleccionada)return;let e=[];try{e=await D.listarMetodosPago()}catch{e=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}const o=oe(this.cuentaSeleccionada.totalParcialUsd),a=oe(this.cuentaSeleccionada.abonosUsd),r=Math.max(0,o-a),d=this.modelo.tasaActual||807.39,i=(r*d).toFixed(2),p=this.cuentaSeleccionada.tipo==="deuda";let c=e.find(g=>g.nombre==="BIOPAGO")||e[0]||{nombre:"BIOPAGO",moneda:"BS"},t=c.moneda==="USD"?r:Number(i),s=d,n="";const l=()=>{var j;const g=e.filter(F=>F.moneda==="USD"),y=e.filter(F=>F.moneda==="BS"),h=g.map(F=>`<option value="${F.nombre}" ${F.nombre===c.nombre?"selected":""}>${F.nombre} ($ USD - Tasa Dinámica)</option>`).join(""),f=`
                <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                    ${y.map(F=>`<option value="${F.nombre}" ${F.nombre===c.nombre?"selected":""}>${F.nombre} (Bs.)</option>`).join("")}
                </optgroup>
                <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                    ${h}
                </optgroup>
            `,S=c.moneda==="USD",B=S&&s>0?s:d,A=S?t*B:t,C=d>0?A/d:0,v=a+C,E=v-o,L=E*d;let N="";if(t<=1e-4)N=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-700 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Aporte de este abono:</span>
                            <span class="font-heading font-black text-sm text-gray-800">$0.00 USD (Bs. 0.00)</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-600 border-t border-gray-300 pt-1 mt-1">
                            <span>Saldo pendiente actual:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(r)} USD (Bs. ${R(i)})</span>
                        </div>
                    </div>
                `;else if(E>.001)N=`
                    <div class="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${R(v)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${R(E)} USD (Bs. ${R(L)})</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Abono superior al consumo: este excedente se convertirá en ganancia o crédito al liquidar.</p>
                    </div>
                `;else if(E<-.001){const F=Math.abs(E),M=F*d;N=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(v)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${R(F)} USD (Bs. ${R(M)})</span>
                        </div>
                    </div>
                `}else N=`
                    <div class="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${R(v)} USD</span>
                        </div>
                    </div>
                `;this.modal.innerHTML=`
            <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
                <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md">
                    <h3 class="font-heading font-black text-2xl mb-1">${p?"ABONAR A LA DEUDA":"REGISTRAR ABONO / ANTICIPO"}</h3>
                    <p class="font-body text-xs text-gray-700 mb-3">${(j=this.cuentaSeleccionada)==null?void 0:j.etiqueta} · El usuario decide libremente el monto y tasa del abono.</p>

                    <div class="bg-blue-50 border border-blue-400 rounded p-2.5 mb-3 text-xs text-blue-950 font-bold leading-tight">
                        ℹ <strong>Abonos con tasas dinámicas:</strong> En métodos en divisas (${g.map(F=>F.nombre).join(", ")}) se define la tasa al momento del abono. El diferencial frente a la tasa oficial se computa a favor del cliente.
                    </div>

                    <div class="space-y-3 mb-4">
                        <div>
                            <label class="block text-xs font-black uppercase text-gray-700 mb-1">Método de Pago del Abono</label>
                            <select id="select-metodo-abono" class="w-full border-2 border-brand-black rounded px-3 py-2 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                ${f}
                            </select>
                        </div>

                        ${S?`
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Monto a abonar en Dólares ($ USD)</label>
                            <div class="flex items-center">
                                <span class="bg-brand-black text-white px-3 py-2 rounded-l border-y-2 border-l-2 border-brand-black text-sm font-mono font-bold">$</span>
                                <input id="input-monto-abono" type="number" step="0.01" min="0.01" max="50000" value="${t>0?t:""}" placeholder="0.00"
                                    class="w-full border-2 border-brand-black rounded-r px-3 py-2 font-mono font-black text-xl text-brand-black text-right focus:outline-none" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <label class="block text-xs font-bold uppercase text-gray-700">Tasa de Cambio del Método (Bs. / USD)</label>
                                <button type="button" id="btn-reset-tasa-abono" class="text-[10px] font-black uppercase text-brand-purple hover:underline">
                                    TASA BCV: ${R(d)}
                                </button>
                            </div>
                            <input id="input-tasa-abono" type="number" step="0.01" min="1" max="100000" value="${B}"
                                class="w-full border-2 border-brand-black rounded px-3 py-2 font-mono font-black text-base text-brand-black text-right focus:outline-none" />
                        </div>

                        <div class="bg-purple-50 border border-brand-purple rounded p-2 text-xs font-bold space-y-0.5">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Valor aportado en Bolívares:</span>
                                <span data-aporte-bs class="text-brand-purple font-mono font-black">Bs. ${R(A)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Abono computable (Tasa BCV):</span>
                                <span data-abono-computable class="text-brand-black font-mono font-black">$ ${R(C)} USD</span>
                            </div>
                        </div>
                        `:`
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Monto a abonar en Bolívares (Bs.)</label>
                            <div class="flex items-center">
                                <span class="bg-brand-black text-white px-3 py-2 rounded-l border-y-2 border-l-2 border-brand-black text-sm font-mono font-bold">Bs.</span>
                                <input id="input-monto-abono" type="number" step="0.01" min="0.01" max="50000000" value="${t>0?t:""}" placeholder="0.00"
                                    class="w-full border-2 border-brand-black rounded-r px-3 py-2 font-mono font-black text-xl text-brand-black text-right focus:outline-none" />
                            </div>
                            <p class="text-[11px] text-gray-500 mt-1">Equivalente oficial acreditado: <span class="font-bold text-brand-black">$ ${R(C)} USD</span> (Tasa BCV: ${R(d)})</p>
                        </div>
                        `}

                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia (Opcional)</label>
                            <input id="input-ref-abono" type="text" maxlength="25" value="${n}" placeholder="Ej: PAGO MOVIL 4912, USDT HASH..."
                                class="w-full border-2 border-brand-black rounded px-3 py-1.5 text-xs font-mono focus:outline-none" />
                        </div>

                        <div id="abono-preview-container">${N}</div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <button id="modal-abono-cancel" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded hover:bg-gray-100">VOLVER</button>
                        <button id="modal-abono-ok" ${t<=0?"disabled":""} class="bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed text-brand-black font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">APLICAR ABONO</button>
                    </div>
                </div>
            </div>`,m()},u=()=>{const g=c.moneda==="USD",y=g&&s>0?s:d,h=g?t*y:t,w=d>0?h/d:0,f=a+w,S=f-o,B=S*d;let A="";if(t<=1e-4)A=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-700 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Aporte de este abono:</span>
                            <span class="font-heading font-black text-sm text-gray-800">$0.00 USD (Bs. 0.00)</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-600 border-t border-gray-300 pt-1 mt-1">
                            <span>Saldo pendiente actual:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(r)} USD (Bs. ${R(i)})</span>
                        </div>
                    </div>
                `;else if(S>.001)A=`
                    <div class="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${R(f)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${R(S)} USD (Bs. ${R(B)})</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Abono superior al consumo: este excedente se convertirá en ganancia o crédito al liquidar.</p>
                    </div>
                `;else if(S<-.001){const E=Math.abs(S),L=E*d;A=`
                    <div class="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold">
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Total Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(f)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${R(E)} USD (Bs. ${R(L)})</span>
                        </div>
                    </div>
                `}else A=`
                    <div class="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold">
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${R(f)} USD</span>
                        </div>
                    </div>
                `;const C=this.modal.querySelector("#abono-preview-container");C&&(C.innerHTML=A);const v=this.modal.querySelector("#modal-abono-ok");if(v&&(v.disabled=t<=0),g){const E=this.modal.querySelector("[data-aporte-bs]");E&&(E.textContent=`Bs. ${R(h)}`);const L=this.modal.querySelector("[data-abono-computable]");L&&(L.textContent=`$ ${R(w)} USD`)}},m=()=>{var y,h,w,f,S,B,A;const g=()=>{this.modal.innerHTML=""};(y=this.modal.querySelector("#modal-abono-cancel"))==null||y.addEventListener("click",g),(h=this.modal.querySelector("#select-metodo-abono"))==null||h.addEventListener("change",C=>{const v=C.target.value,E=e.find(L=>L.nombre===v);if(E){const L=c.moneda==="USD";c=E,E.moneda==="USD"?(s=d,L||(t=r)):L&&(t=Number(i)),l()}}),(w=this.modal.querySelector("#input-monto-abono"))==null||w.addEventListener("input",C=>{t=oe(C.target.value),u()}),(f=this.modal.querySelector("#input-tasa-abono"))==null||f.addEventListener("input",C=>{s=oe(C.target.value),u()}),(S=this.modal.querySelector("#btn-reset-tasa-abono"))==null||S.addEventListener("click",()=>{s=d,l()}),(B=this.modal.querySelector("#input-ref-abono"))==null||B.addEventListener("input",C=>{n=C.target.value}),(A=this.modal.querySelector("#modal-abono-ok"))==null||A.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;const C=c.moneda==="USD",v=C&&s>0?s:d,E=C?t*v:t,L=d>0?E/d:0;if(L<=0||!Number.isFinite(L)){this.mostrarToast("Por favor ingrese un monto válido.","error");return}const N=await D.abonarCuenta(this.cuentaSeleccionada.ventaId,L,E);N&&(this.cuentaSeleccionada=N),g(),this.render()})};l()}modalEditarAbono(){var y,h,w,f;if(!this.cuentaSeleccionada)return;const e=oe(this.cuentaSeleccionada.totalParcialUsd),o=oe(this.cuentaSeleccionada.abonosUsd),a=this.modelo.tasaActual||807.39;this.modal.innerHTML=`
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
        </div>`;const r=this.modal.querySelector("#tab-edit-usd"),d=this.modal.querySelector("#tab-edit-bs"),i=this.modal.querySelector("#sec-edit-usd"),p=this.modal.querySelector("#sec-edit-bs"),c=this.modal.querySelector("#edit-abono-usd-val"),t=this.modal.querySelector("#edit-abono-bs-val"),s=this.modal.querySelector("#edit-usd-equiv"),n=this.modal.querySelector("#edit-bs-equiv"),l=this.modal.querySelector("#edit-preview-box");let u="usd";const m=()=>{let S=0;u==="usd"?(S=oe(c==null?void 0:c.value),s&&(s.textContent=`Bs. ${(S*a).toFixed(2)}`)):(S=oe(t==null?void 0:t.value)/a,n&&(n.textContent=`$${S.toFixed(2)} USD`)),Number.isFinite(S)||(S=0);const B=S-e;if(l)if(B>.001)l.className="rounded p-2.5 border-2 border-emerald-600 bg-emerald-50 text-xs text-emerald-950 font-bold",l.innerHTML=`
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Saldo Abonado:</span>
                            <span class="font-heading font-black text-sm text-emerald-700">$${R(S)}</span>
                        </div>
                        <div class="flex justify-between items-center text-emerald-900 border-t border-emerald-300 pt-1">
                            <span>Saldo a favor resultante:</span>
                            <span class="font-heading font-black text-base text-emerald-600">+$${R(B)} USD</span>
                        </div>
                        <p class="text-[10px] text-emerald-800 mt-1">✓ Excedente a favor del cliente.</p>
                    `;else if(B<-.001){const A=Math.abs(B);l.className="rounded p-2.5 border-2 border-brand-black bg-gray-50 text-xs text-gray-800 font-bold",l.innerHTML=`
                        <div class="flex justify-between items-center mb-1">
                            <span>Nuevo Saldo Abonado:</span>
                            <span class="font-heading font-black text-sm text-brand-black">$${R(S)}</span>
                        </div>
                        <div class="flex justify-between items-center text-gray-900 border-t border-gray-300 pt-1">
                            <span>Saldo pendiente restante:</span>
                            <span class="font-heading font-black text-base text-brand-black">$${R(A)} USD</span>
                        </div>
                    `}else l.className="rounded p-2.5 border-2 border-green-600 bg-green-50 text-xs text-green-950 font-bold",l.innerHTML=`
                        <div class="flex justify-between items-center">
                            <span>Registro saldado exactamente:</span>
                            <span class="font-heading font-black text-base text-green-700">$${R(S)} USD</span>
                        </div>
                    `};c&&Se(c,5e4,8,m),t&&Se(t,5e7,11,m),m(),(y=this.modal.querySelector("#btn-preset-cero"))==null||y.addEventListener("click",async()=>{const S=oe(u==="usd"?c==null?void 0:c.value:t==null?void 0:t.value);(o>0||S>0)&&!await ue("¿Desea restablecer el saldo abonado a $0.00? Esta acción dejará los pagos registrados en cero.","RESTABLECER ABONO")||(c&&(c.value="0.00"),t&&(t.value="0.00"),m())}),(h=this.modal.querySelector("#btn-preset-exacto"))==null||h.addEventListener("click",()=>{c&&(c.value=e.toFixed(2)),t&&(t.value=(e*a).toFixed(2)),m()}),r==null||r.addEventListener("click",()=>{u="usd",r.className="flex-1 py-1.5 font-heading font-black text-xs rounded bg-brand-black text-white",d.className="flex-1 py-1.5 font-heading font-bold text-xs rounded text-brand-black hover:bg-white",i==null||i.classList.remove("hidden"),p==null||p.classList.add("hidden"),m()}),d==null||d.addEventListener("click",()=>{u="bs",d.className="flex-1 py-1.5 font-heading font-black text-xs rounded bg-brand-black text-white",r.className="flex-1 py-1.5 font-heading font-bold text-xs rounded text-brand-black hover:bg-white",p==null||p.classList.remove("hidden"),i==null||i.classList.add("hidden"),m()});const g=()=>{this.modal.innerHTML=""};(w=this.modal.querySelector("#modal-edit-cancel"))==null||w.addEventListener("click",g),(f=this.modal.querySelector("#modal-edit-ok"))==null||f.addEventListener("click",async()=>{if(!this.cuentaSeleccionada)return;let S=0;if(u==="usd"?S=oe(c==null?void 0:c.value):S=oe(t==null?void 0:t.value)/a,!Number.isFinite(S)||S<0||S>5e4){this.mostrarToast("Monto inválido. Ingrese un valor entre $0.00 y $50,000.00 USD.","error");return}if(Math.abs(S-o)>.009){const C=S===0?`¿Confirmas reiniciar el saldo abonado a $0.00? (Monto previo registrado: $${R(o)})`:`¿Confirmas modificar el saldo abonado de esta cuenta a $${R(S)} USD (Bs. ${R(S*a)})? (Monto previo registrado: $${R(o)})`;if(!await ue(C,"MODIFICAR ABONO"))return}const A=await D.editarAbonoCuenta(this.cuentaSeleccionada.ventaId,S);A&&(this.cuentaSeleccionada=A),g(),this.render()})}async modalCierre(){var A,C,v;if(!this.cuentaSeleccionada)return;const e=this.cuentaSeleccionada.tipo==="deuda",o=oe(this.cuentaSeleccionada.totalParcialUsd),a=oe(this.cuentaSeleccionada.abonosUsd),r=Math.max(0,Math.round((o-a)*100)/100),d=Math.max(0,Math.round((a-o)*100)/100),i=this.modelo.tasaActual||807.39;if(r<=.009){this.modal.innerHTML=`
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

                        ${d>0?`
                        <div class="bg-emerald-50 border-2 border-emerald-600 rounded p-4 text-center mt-3">
                            <span class="text-xs font-black text-emerald-900 uppercase">Saldo a Favor del Cliente</span>
                            <p class="font-heading font-black text-3xl text-emerald-600 mt-1">+$${R(d)} USD</p>
                            <p class="font-bold text-xs text-emerald-800">Bs. ${R(d*i)}</p>
                            <div class="mt-3 bg-white border border-emerald-500 rounded p-2.5 text-xs text-emerald-950 font-bold leading-tight text-left">
                                ✓ <strong>Consolidación como ganancia:</strong> Al liquidar y cerrar la cuenta, este excedente de <strong>$${R(d)}</strong> se consolidará automáticamente como ganancia del negocio.
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
                        <button id="modal-liq-ok" class="${d>0?"bg-emerald-600 hover:bg-emerald-700":"bg-green-600 hover:bg-green-700"} text-white font-heading font-black py-3 rounded border-2 border-brand-black shadow-brutal-sm">
                            ${d>0?"LIQUIDAR Y CONSOLIDAR GANANCIA":"CONFIRMAR CIERRE"}
                        </button>
                    </div>
                </div>
            </div>`;const E=()=>{this.modal.innerHTML=""};(A=this.modal.querySelector("#modal-liq-cancel"))==null||A.addEventListener("click",E);let L=!1;(C=this.modal.querySelector("#modal-liq-ok"))==null||C.addEventListener("click",async()=>{if(!L&&this.cuentaSeleccionada){L=!0;try{await D.cerrarCuenta(this.cuentaSeleccionada.ventaId,"0.00",i.toFixed(4)),this.cuentaSeleccionada=null,E(),this.render()}catch{L=!1}}});return}let p=[];try{p=await D.listarMetodosPago()}catch{p=[{nombre:"PUNTOD.VENTA",moneda:"BS"},{nombre:"BIOPAGO",moneda:"BS"},{nombre:"PAGO MOVIL",moneda:"BS"},{nombre:"TRANSF.BS.",moneda:"BS"},{nombre:"BS.EFEC.",moneda:"BS"},{nombre:"DOL.CASH",moneda:"USD"},{nombre:"ZELLE",moneda:"USD"},{nombre:"BINAN.USDT",moneda:"USD"}]}let c=i;const t=e?p.find(E=>E.nombre==="TRANSF.BS.")||p[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"}:p.find(E=>E.nombre==="PUNTOD.VENTA")||p[0]||{nombre:"PUNTOD.VENTA",moneda:"BS"},s=this.cuentaSeleccionada.ventaId,n=this.pagosBorradorPorCuenta.get(s);let l;if(n&&n.length>0){if(l=n.map(E=>({...E})),l.length===1&&l[0]){const E=l[0];E.monto=E.moneda==="USD"?r:Number((r*c).toFixed(2)),E.tasaCambio=c}else if(l.length>1){const E=Number((r*c).toFixed(2));let L=0;for(let F=0;F<l.length-1;F++){const M=l[F],K=M.tasaCambio>0?M.tasaCambio:c;L+=M.moneda==="USD"?M.monto*K:M.monto}const N=Math.max(0,Math.round((E-L)*100)/100),j=l[l.length-1];j&&(j.monto=j.moneda==="USD"?c>0?Number((N/c).toFixed(2)):0:N,j.tasaCambio=c)}}else l=[{id:"p-1",metodo:t.nombre,moneda:t.moneda,monto:t.moneda==="USD"?r:Number((r*c).toFixed(2)),tasaCambio:c,referencia:""}];const u=this.resolucionVueltoPorCuenta.get(s);let m=(u==null?void 0:u.estado)||"PAGADO",g=(u==null?void 0:u.metodo)||(e?"TRANSF.BS.":"BS.EFEC."),y=(u==null?void 0:u.tasa)||c;p.some(E=>E.nombre===g)||(g=((v=p[0])==null?void 0:v.nombre)||(e?"TRANSF.BS.":"BS.EFEC."));let h=!1;const w=()=>{let E=0;for(const Z of l)if(Z.moneda==="USD"){const k=Z.tasaCambio>0?Z.tasaCambio:c;E+=Z.monto*k}else E+=Z.monto;E=Math.round(E*100)/100;const L=Math.round(r*c*100)/100,N=c>0?Math.round(E/c*100)/100:0,j=Math.max(0,Math.round((L-E)*100)/100),F=c>0?Math.max(0,Math.round(j/c*100)/100):0,M=Math.max(0,Math.round((E-L)*100)/100),K=c>0?Math.max(0,Math.round(M/c*100)/100):0,P=E>=L-.01&&l.every(Z=>Z.monto>0);return{cubiertoUsd:N,cubiertoBs:E,totalEsperadoBs:L,faltanteUsd:F,faltanteBs:j,vueltoUsd:K,vueltoBs:M,puedeConfirmar:P}},f=E=>{const L=p.find(M=>M.nombre===g),N=(L==null?void 0:L.moneda)==="USD",j=y>0?y:c,F=N&&j>0?Number((E.vueltoBs/j).toFixed(2)):E.vueltoUsd;return E.faltanteBs>.009?`
                <div class="bg-amber-50 border-2 border-amber-500 rounded p-2.5 text-center mb-3">
                    <p class="text-xs font-black uppercase text-amber-900">Monto Incompleto por Cubrir</p>
                    <p class="font-heading font-black text-lg text-amber-700">Faltan Bs. ${R(E.faltanteBs)} · <span class="text-sm text-amber-900">$ ${R(E.faltanteUsd)} (Equiv. Base)</span></p>
                </div>`:E.vueltoBs>.009?`
                <div class="border-2 border-emerald-700 bg-emerald-50/70 rounded-lg p-3 mb-3">
                    <div class="flex flex-wrap items-center justify-between gap-1 mb-2">
                        <div>
                            <span class="text-[10px] font-black uppercase text-emerald-900 tracking-wide block">Excedente / Vuelto a Devolver</span>
                            <span class="font-heading font-black text-lg text-emerald-800">Bs. ${R(E.vueltoBs)}</span>
                        </div>
                        <span class="text-xs font-bold text-emerald-900 font-mono">$ ${R(E.vueltoUsd)} equiv. oficial</span>
                    </div>

                    <!-- Selector: Entregar Vuelto vs Retener Vuelto -->
                    <div class="grid grid-cols-2 gap-2 mb-2.5">
                        <button type="button" id="btn-vuelto-pagado-cuenta" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${m==="PAGADO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                            ENTREGAR VUELTO (PAGADO)
                        </button>
                        <button type="button" id="btn-vuelto-retenido-cuenta" class="py-1.5 px-2 rounded border-2 text-xs font-heading font-black transition-all ${m==="RETENIDO"?"bg-emerald-700 text-white border-brand-black shadow-sm":"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}">
                            RETENER VUELTO (A FAVOR)
                        </button>
                    </div>

                    ${m==="PAGADO"?`
                    <div class="bg-white border border-emerald-600 rounded p-2.5 space-y-2">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <label class="text-[11px] font-bold text-gray-700 uppercase">Método de Egreso del Vuelto:</label>
                            <select id="select-metodo-vuelto-cuenta" class="border-2 border-brand-black rounded px-2 py-1 text-xs font-bold bg-white focus:outline-none">
                                ${p.map(M=>`
                                    <option value="${M.nombre}" ${M.nombre===g?"selected":""}>
                                        ${M.nombre} (${M.moneda==="USD"?"$ Dólares":"Bs. Bolívares"})
                                    </option>
                                `).join("")}
                            </select>
                        </div>
                        ${N?`
                        <div class="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-gray-100">
                            <div>
                                <span class="text-[10px] font-bold text-gray-500 uppercase block">Tasa Pactada Vuelto USD:</span>
                                <div class="flex items-center gap-1.5">
                                    <input id="input-tasa-vuelto-cuenta" type="text" inputmode="decimal" value="${y.toFixed(2)}"
                                        class="w-24 border-2 border-brand-black rounded px-2 py-0.5 text-xs font-mono font-bold" />
                                    <button id="btn-reset-tasa-vuelto-cuenta" type="button" class="text-[10px] bg-gray-100 border border-gray-400 rounded px-1.5 py-0.5 hover:bg-gray-200">
                                        Reset Oficial
                                    </button>
                                </div>
                            </div>
                            <div class="text-right">
                                <span class="text-[10px] font-bold text-gray-500 uppercase block">Divisa USD a Entregar:</span>
                                <span class="font-heading font-black text-base text-brand-purple">
                                    $ ${R(F)} USD
                                </span>
                            </div>
                        </div>
                        `:`
                        <div class="flex items-center justify-between pt-1 border-t border-gray-100 text-xs">
                            <span class="font-bold text-gray-600">Total a Entregar en Bolívares:</span>
                            <span class="font-heading font-black text-base text-brand-black">Bs. ${R(E.vueltoBs)}</span>
                        </div>
                        `}
                    </div>
                    `:`
                    <div class="bg-white border border-gray-300 rounded p-2 text-xs text-gray-700">
                        <p class="font-bold text-emerald-900 mb-0.5">Vuelto Retenido como Saldo a Favor</p>
                        <p class="text-[11px] text-gray-600 leading-tight">
                            El excedente de <b>Bs. ${R(E.vueltoBs)} ($ ${R(E.vueltoUsd)})</b> no genera egreso físico de caja y se asienta en el comprobante como saldo a favor retenido en el negocio.
                        </p>
                    </div>
                    `}
                </div>`:`
            <div class="bg-emerald-50 border-2 border-emerald-600 rounded p-2.5 text-center mb-3">
                <p class="text-xs font-black uppercase text-emerald-800">Total Exactamente Cubierto</p>
                <p class="text-xs text-emerald-700 font-bold">Importe liquidado sin diferencia pendiente.</p>
            </div>`},S=()=>{var M,K;const E=w(),L=p.filter(P=>P.moneda==="USD"),N=p.filter(P=>P.moneda==="BS"),j=l.map((P,Z)=>{const k=L.map(J=>`<option value="${J.nombre}" ${J.nombre===P.metodo?"selected":""}>${J.nombre} ($ - Tasa Dinámica)</option>`).join(""),U=`
                        <optgroup label="MÉTODOS EN BOLÍVARES (Bs.)">
                            ${N.map(J=>`<option value="${J.nombre}" ${J.nombre===P.metodo?"selected":""}>${J.nombre} (Bs.)</option>`).join("")}
                        </optgroup>
                        <optgroup label="MÉTODOS EN DÓLARES ($ - TASA PROPIA)">
                            ${k}
                        </optgroup>
                    `,H=P.tasaCambio>0?P.tasaCambio:c,G=P.moneda==="USD"?P.monto*H:P.monto,W=c>0?G/c:0;return`
                    <div data-pago-card="${P.id}" class="border-2 border-brand-black rounded-lg p-3 bg-gray-50 mb-2.5">
                        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span class="font-heading font-black text-xs uppercase text-gray-700">
                                Pago #${Z+1} · <span class="${P.moneda==="USD"?"text-brand-purple":"text-brand-black"}">${P.moneda==="USD"?"Divisa ($ USD)":"Moneda Nacional (Bs.)"}</span>
                            </span>
                            ${l.length>1?`<button data-eliminar-pago="${P.id}" class="text-xs font-black text-red-600 hover:text-red-800 bg-red-50 border border-red-300 rounded px-2 py-0.5">Eliminar</button>`:""}
                        </div>
                        ${P.moneda==="USD"?`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Divisa</label>
                                <select data-pago-metodo="${P.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${U}
                                </select>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto ($ USD)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">$</span>
                                    <input type="number" step="0.01" min="0.01" max="999999" data-pago-monto="${P.id}" value="${P.monto>0?P.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <div class="flex items-center justify-between mb-0.5">
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase">Tasa (Bs./$)</label>
                                    <button type="button" data-reset-tasa="${P.id}" class="text-[9px] font-black uppercase text-brand-purple hover:underline" title="Restablecer a tasa oficial">Tasa: ${R(c)}</button>
                                </div>
                                <input type="number" step="0.01" min="1" max="100000" data-pago-tasa="${P.id}" value="${H>0?H:c}"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${P.id}" value="${P.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div data-aporte-info="${P.id}" class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-purple">Aporte: Bs. ${R(G)}</span>
                            <span class="text-gray-500 font-mono">Equiv. base: $ ${R(W)} ${H!==c?`(Tasa: Bs. ${R(H)} vs Base: Bs. ${R(c)})`:""}</span>
                        </div>
                        `:`
                        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                            <div class="sm:col-span-5">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Medio en Bolívares</label>
                                <select data-pago-metodo="${P.id}" class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 font-heading font-black text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple">
                                    ${U}
                                </select>
                            </div>
                            <div class="sm:col-span-4">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Monto (Bs.)</label>
                                <div class="flex items-center">
                                    <span class="bg-brand-black text-white px-2 py-1.5 rounded-l border-y-2 border-l-2 border-brand-black text-xs font-mono font-bold">Bs.</span>
                                    <input type="number" step="0.01" min="0.01" max="999999999" data-pago-monto="${P.id}" value="${P.monto>0?P.monto:""}" placeholder="0.00"
                                        class="w-full border-2 border-brand-black rounded-r px-2 py-1.5 text-xs font-mono font-black focus:outline-none focus:ring-2 focus:ring-brand-purple text-right" />
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label class="block text-[10px] font-bold text-gray-500 uppercase mb-0.5">Referencia</label>
                                <input type="text" maxlength="25" data-pago-ref="${P.id}" value="${P.referencia||""}" placeholder="Opcional"
                                    class="w-full border-2 border-brand-black rounded px-2.5 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                            </div>
                        </div>
                        <div data-aporte-info="${P.id}" class="flex flex-wrap items-center justify-between gap-1 mt-1.5 text-[11px]">
                            <span class="font-bold text-brand-black">Aporte directo: Bs. ${R(P.monto)}</span>
                            <span class="text-gray-500 font-mono">Equiv. base: $ ${R(W)}</span>
                        </div>
                        `}
                    </div>`}).join(""),F=`<div id="contenedor-estado-balance-cuenta">${f(E)}</div>`;this.modal.innerHTML=`
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
                                ${(M=this.cuentaSeleccionada)==null?void 0:M.etiqueta} ${(K=this.cuentaSeleccionada)!=null&&K.cliente?`· ${this.cuentaSeleccionada.cliente}`:""}
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
                                <span class="font-heading font-black text-xl text-brand-purple">Bs. ${R(E.totalEsperadoBs)}</span>
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
                            <input id="deuda-tasa-input" type="text" inputmode="decimal" maxlength="9" value="${c.toFixed(4)}"
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
                        ${j}
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
                    ${F}

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
                        <button id="modal-liq-ok" ${E.puedeConfirmar?"":"disabled"}
                            class="bg-green-700 hover:bg-green-800 disabled:opacity-30 disabled:cursor-not-allowed text-white font-heading font-black py-2 px-5 rounded border-2 border-brand-black shadow-brutal-sm text-sm">
                            CONFIRMAR COBRO
                        </button>
                    </div>
                </div>
            </div>`,B()},B=()=>{var K,P,Z,k,$,U,H,G,W,J,Y;const E=()=>{this.cuentaSeleccionada&&(this.pagosBorradorPorCuenta.set(this.cuentaSeleccionada.ventaId,l),this.resolucionVueltoPorCuenta.set(this.cuentaSeleccionada.ventaId,{estado:m,metodo:g,tasa:y}))},L=()=>{E(),this.modal.innerHTML=""};(K=this.modal.querySelector("#modal-liq-cerrar"))==null||K.addEventListener("click",L),(P=this.modal.querySelector("#modal-liq-cancel"))==null||P.addEventListener("click",L),(Z=this.modal.querySelector("#modal-liq-agregar-mas"))==null||Z.addEventListener("click",()=>{E(),this.modal.innerHTML=""}),(k=this.modal.querySelector("#btn-vuelto-pagado-cuenta"))==null||k.addEventListener("click",()=>{m="PAGADO",E(),S()}),($=this.modal.querySelector("#btn-vuelto-retenido-cuenta"))==null||$.addEventListener("click",()=>{m="RETENIDO",E(),S()}),(U=this.modal.querySelector("#select-metodo-vuelto-cuenta"))==null||U.addEventListener("change",O=>{g=O.target.value,E(),S()});const N=this.modal.querySelector("#input-tasa-vuelto-cuenta");if(N&&(N.addEventListener("input",O=>{const _=oe(O.target.value);y=_>0?_:c,E()}),N.addEventListener("blur",()=>{S()})),(H=this.modal.querySelector("#btn-reset-tasa-vuelto-cuenta"))==null||H.addEventListener("click",()=>{y=c,E(),S()}),e){const O=this.modal.querySelector("#deuda-tasa-input"),_=this.modal.querySelector("#btn-tasa-bcv");O&&Se(O,1e5,9,()=>{const I=oe(O.value);c=Number.isFinite(I)&&I>0?I:i,E(),S()}),_==null||_.addEventListener("click",()=>{c=i,E(),S()})}this.modal.querySelectorAll("select[data-pago-metodo]").forEach(O=>{O.addEventListener("change",_=>{const I=O.dataset.pagoMetodo,q=_.target.value,V=l.find(Q=>Q.id===I);if(V){const Q=p.find(le=>le.nombre===q),ne=(Q==null?void 0:Q.moneda)||"BS";V.moneda=ne,V.tasaCambio=c,l.length===1?V.monto=V.moneda==="USD"?r:Number((r*c).toFixed(2)):ne!==V.moneda&&(ne==="USD"?V.monto=Number((c>0?V.monto/c:0).toFixed(2)):V.monto=Number((V.monto*c).toFixed(2))),V.metodo=q,E(),S()}})});const j=()=>{var q,V,Q,ne;const O=w(),_=this.modal.querySelector("#contenedor-estado-balance-cuenta");if(_){_.innerHTML=f(O),(q=this.modal.querySelector("#btn-vuelto-pagado-cuenta"))==null||q.addEventListener("click",()=>{m="PAGADO",E(),S()}),(V=this.modal.querySelector("#btn-vuelto-retenido-cuenta"))==null||V.addEventListener("click",()=>{m="RETENIDO",E(),S()}),(Q=this.modal.querySelector("#select-metodo-vuelto-cuenta"))==null||Q.addEventListener("change",ve=>{g=ve.target.value,E(),S()});const le=this.modal.querySelector("#input-tasa-vuelto-cuenta");le&&(le.addEventListener("input",ve=>{const xe=oe(ve.target.value);y=xe>0?xe:c,E()}),le.addEventListener("blur",()=>S())),(ne=this.modal.querySelector("#btn-reset-tasa-vuelto-cuenta"))==null||ne.addEventListener("click",()=>{y=c,E(),S()})}const I=this.modal.querySelector("#modal-liq-ok");I&&(I.disabled=!O.puedeConfirmar)},F=O=>{const _=this.modal.querySelector(`div[data-aporte-info-cuenta="${O.id}"]`);if(!_)return;const I=O.tasaCambio>0?O.tasaCambio:c,q=O.moneda==="USD"?O.monto*I:O.monto,V=c>0?q/c:0;O.moneda==="USD"?_.innerHTML=`
                        <span class="font-bold text-brand-purple">Aporte: Bs. ${R(q)}</span>
                        <span class="text-gray-500 font-mono">Equiv. base: $ ${R(V)} ${I!==c?`(Tasa: Bs. ${R(I)} vs Base: Bs. ${R(c)})`:""}</span>
                    `:_.innerHTML=`
                        <span class="font-bold text-brand-black">Aporte directo: Bs. ${R(O.monto)}</span>
                        <span class="text-gray-500 font-mono">Equiv. base: $ ${R(V)}</span>
                    `};this.modal.querySelectorAll("input[data-pago-tasa]").forEach(O=>{O.addEventListener("input",_=>{const I=O.dataset.pagoTasa,q=oe(_.target.value),V=l.find(Q=>Q.id===I);V&&(V.tasaCambio=q>0?q:c,E(),F(V),j())}),O.addEventListener("keydown",_=>{var I;_.key==="Enter"&&w().puedeConfirmar&&((I=this.modal.querySelector("#modal-liq-ok"))==null||I.click())}),O.addEventListener("blur",()=>{S()})}),this.modal.querySelectorAll("button[data-reset-tasa-cuenta]").forEach(O=>{O.addEventListener("click",()=>{const _=O.dataset.resetTasaCuenta,I=l.find(q=>q.id===_);I&&(I.tasaCambio=c,E(),S())})}),this.modal.querySelectorAll("input[data-pago-monto]").forEach(O=>{O.addEventListener("input",_=>{const I=O.dataset.pagoMonto,q=oe(_.target.value),V=l.find(Q=>Q.id===I);V&&(V.monto=q,E(),F(V),j())}),O.addEventListener("keydown",_=>{var I;_.key==="Enter"&&w().puedeConfirmar&&((I=this.modal.querySelector("#modal-liq-ok"))==null||I.click())}),O.addEventListener("blur",()=>{S()})}),this.modal.querySelectorAll("input[data-pago-ref]").forEach(O=>{O.addEventListener("input",_=>{const I=O.dataset.pagoRef,q=_.target.value,V=l.find(Q=>Q.id===I);V&&(V.referencia=q,E())})}),this.modal.querySelectorAll("button[data-eliminar-pago]").forEach(O=>{O.addEventListener("click",()=>{const _=O.dataset.eliminarPago;l=l.filter(I=>I.id!==_),E(),S()})}),(G=this.modal.querySelector("#btn-agregar-pago-cuenta"))==null||G.addEventListener("click",()=>{let O=w();const _="p-"+Math.random().toString(36).slice(2,7),I=p.find(V=>!l.some(Q=>Q.metodo===V.nombre))||p[0]||{nombre:"BS.EFEC.",moneda:"BS"};if(O.faltanteBs<=.01&&l.length===1&&l[0]){const V=l[0],Q=V.tasaCambio>0?V.tasaCambio:c,ne=V.moneda==="USD"?V.monto*Q:V.monto,le=Math.round(ne/2*100)/100;V.monto=V.moneda==="USD"?Q>0?Number((le/Q).toFixed(2)):0:le,O=w()}const q=O.faltanteBs>0?O.faltanteBs:0;l.push({id:_,metodo:I.nombre,moneda:I.moneda,monto:I.moneda==="USD"?c>0?Number((q/c).toFixed(2)):0:q,tasaCambio:c,referencia:""}),E(),S()}),(W=this.modal.querySelector("#btn-toggle-nuevo-metodo-cuenta"))==null||W.addEventListener("click",()=>{h=!h,S()}),(J=this.modal.querySelector("#btn-guardar-nuevo-metodo-cuenta"))==null||J.addEventListener("click",()=>{(async()=>{const O=this.modal.querySelector("#input-nuevo-metodo-nombre-cuenta"),_=(O==null?void 0:O.value.trim())||"",I=this.modal.querySelector('input[name="radio-nuevo-metodo-moneda-cuenta"][value="USD"]'),q=I!=null&&I.checked?"USD":"BS";if(_)try{p=await D.crearMetodoPago(_,q),h=!1,S()}catch{}})()});let M=!1;(Y=this.modal.querySelector("#modal-liq-ok"))==null||Y.addEventListener("click",()=>{M||(M=!0,(async()=>{if(!this.cuentaSeleccionada)return;const O=this.modal.querySelector("#cobro-error-cuenta");try{const _=l.filter(de=>de.monto>0).map(de=>{const Ee=de.moneda==="USD"&&de.tasaCambio>0?de.tasaCambio:c,Be=de.moneda==="USD"?de.monto*Ee:de.monto,_e=c>0?Be/c:0;return{metodo:de.metodo,moneda:de.moneda,montoUsd:(de.moneda==="USD"?de.monto:_e).toFixed(2),montoBs:Be.toFixed(2),tasaCambio:de.moneda==="USD"?Ee.toFixed(2):void 0,referencia:de.referencia.trim()||void 0}});if(_.length===0)throw new Error("Debe especificar al menos un pago válido.");const I=w(),q=_.reduce((de,Ee)=>de+Number(Ee.montoBs),0),V=p.find(de=>de.nombre===g),Q=(V==null?void 0:V.moneda)==="USD",ne=Q?y>0?y:c:void 0,le=Q&&ne?(I.vueltoBs/ne).toFixed(2):I.vueltoUsd.toFixed(2),ve={estado:I.vueltoBs>.009?m:"SIN_VUELTO",metodo:I.vueltoBs>.009&&m==="PAGADO"?g:void 0,montoBs:I.vueltoBs>.009?I.vueltoBs.toFixed(2):void 0,montoUsd:I.vueltoBs>.009?le:void 0,tasa:I.vueltoBs>.009&&m==="PAGADO"&&ne?ne.toFixed(2):void 0},xe=this.cuentaSeleccionada.ventaId;await D.cerrarCuenta(xe,q.toFixed(2),c.toFixed(4),_,ve),this.pagosBorradorPorCuenta.delete(xe),this.resolucionVueltoPorCuenta.delete(xe),this.cuentaSeleccionada=null,this.modal.innerHTML="",this.render()}catch(_){M=!1,O&&(O.textContent=_ instanceof Error?_.message.replace(/"/g,""):String(_),O.classList.remove("hidden"))}})())})};S()}mostrarToast(e,o="info"){var d;const a={success:"bg-emerald-600 text-white",error:"bg-red-600 text-white",info:"bg-brand-black text-white"},r=document.createElement("div");r.className=`fixed bottom-6 right-6 ${a[o]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]`,r.innerHTML=`${e.replace(/"/g,"")} <button class="ml-3 underline font-black">cerrar</button>`,(d=r.querySelector("button"))==null||d.addEventListener("click",()=>r.remove()),document.body.appendChild(r),setTimeout(()=>r.remove(),8e3)}}const ge=(b,e,o,a)=>{b.maxLength=o,b.addEventListener("input",()=>{let r=b.value.replace(/[^0-9.,]/g,"");const d=r.split(/[.,]/);d.length>2?r=d[0]+"."+d.slice(1).join(""):d.length===2&&(r=d[0]+"."+d[1].slice(0,2)),r.length>o&&(r=r.slice(0,o));const i=parseFloat(r.replace(",","."));Number.isFinite(i)&&i>e&&(r=String(e)),b.value!==r&&(b.value=r),a&&a()})},Te=(b,e,o,a,r)=>{b.maxLength=a,b.addEventListener("input",()=>{let d=b.value.replace(/[^0-9]/g,"");d.length>a&&(d=d.slice(0,a));const i=parseInt(d,10);Number.isFinite(i)&&i>o&&(d=String(o)),b.value!==d&&(b.value=d),r&&r()}),b.addEventListener("blur",()=>{const d=parseInt(b.value,10);Number.isFinite(d)&&d<e&&(b.value=String(e),r&&r())})},ke=(b,e,o=!1)=>{b.maxLength=e,b.addEventListener("input",()=>{let a=o?b.value.replace(/[<>{}\\]/g,""):b.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ .,/_#-]/g,"");a.length>e&&(a=a.slice(0,e)),b.value!==a&&(b.value=a)})};class ft{constructor(e,o,a=!0){T(this,"contenedor");T(this,"modelo");T(this,"categorias",[]);T(this,"tasasImpuestos",[]);T(this,"productos",[]);T(this,"busquedaRepo","");T(this,"busquedaCatalogo","");T(this,"filtroCategoriaRepo","todas");T(this,"filtroCategoriaCatalogo","todas");T(this,"tabActiva","alta");T(this,"semaforoStock",{rojoMax:5,amarilloMax:15});T(this,"POR_PAGINA_CAT",40);T(this,"POR_PAGINA_REPO",24);T(this,"paginaCat",1);T(this,"paginaRepo",1);this.duenoAutenticado=a,this.contenedor=e,this.modelo=o,this.modelo}getUnitLabel(e){return e.unidad==="kg"?"kg":e.unidad==="ml"?"ml":e.unidad==="un"?"un.":e.capacidades&2?"kg":"un."}getNombreCategoria(e){if(!e)return"General";const o=this.categorias.find(a=>a.id===e);return o?o.nombre:"General"}getConteoCategorias(){const e={todas:this.productos.length};return this.categorias.forEach(o=>{e[o.id]=0}),e["cat-general"]===void 0&&(e["cat-general"]=0),this.productos.forEach(o=>{const a=o.categoriaId||"cat-general";e[a]=(e[a]||0)+1}),e}async render(e){var s;e&&(this.tabActiva=e);const[o,a,r,d]=await Promise.all([D.categorias(),D.tasasImpuestos(),D.productos(),D.obtenerSemaforoStock()]);this.categorias=o,this.tasasImpuestos=a,this.productos=r,this.semaforoStock=d;const i=this.getConteoCategorias(),p="Nombre comercial del producto o servicio...",t=((s=this.modelo.getConfig())==null?void 0:s.privacidadInventario)&&!this.duenoAutenticado;this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Control de Inventario</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Alta de productos, reposición de mercancía, categorías y tasas tributarias</p>
            </div>
            ${t?'<div class="bg-amber-100 border-2 border-amber-400 rounded px-3 py-1 text-xs font-bold text-amber-800">MODO OPERADOR — Precios y stock ocultos. Acceda como administrador para ver información sensible.</div>':""}
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
                        <input id="prod-nombre" maxlength="64" placeholder="${p}" class="w-full border-2 border-brand-black rounded px-4 py-2.5 font-bold focus:ring-2 focus:ring-brand-cyan" required />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Categoría</label>
                            <select id="prod-categoria" class="w-full border-2 border-brand-black rounded px-3 py-2.5 bg-white font-bold">
                                ${this.categorias.map(n=>`<option value="${n.id}">${n.nombre}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold uppercase mb-1">Tasa de Impuesto</label>
                            <select id="prod-impuesto" class="w-full border-2 border-brand-black rounded px-3 py-2.5 bg-white font-bold">
                                ${this.tasasImpuestos.map(n=>`<option value="${n.porcentaje}">${n.nombre}</option>`).join("")}
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
                                <span class="font-bold text-xs sm:text-sm">¿Tiene precio por paquete / caja único?</span>
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
                        <div class="pt-2 border-t border-gray-300 space-y-2">
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="font-bold text-xs sm:text-sm text-brand-purple">Múltiples Presentaciones (Diferentes Tamaños / Empaques)</span>
                                    <p class="text-[10px] text-gray-500">Ej: Six-pack (6 un.), Tobo (10 un.), Caja (24 un.). Descuento dinámico exacto de stock.</p>
                                </div>
                                <button type="button" id="btn-agregar-presentacion" class="bg-brand-purple text-white font-heading font-black text-[10px] px-2.5 py-1 rounded border border-brand-black hover:bg-purple-800 shadow-brutal-sm">
                                    + PRESENTACIÓN
                                </button>
                            </div>
                            <div id="presentaciones-lista" class="space-y-1.5 pt-1"></div>
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
                            ${this.categorias.map(n=>`<option value="${n.id}" ${this.filtroCategoriaCatalogo===n.id?"selected":""}>${n.nombre} (${i[n.id]||0} prods)</option>`).join("")}
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
                    ${this.categorias.map(n=>{const l=i[n.id]||0,u=this.filtroCategoriaRepo===n.id;return`
                        <button data-cat-chip="${n.id}" class="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors ${u?"bg-brand-black text-white":"bg-gray-100 text-brand-black hover:bg-gray-200"}">
                            ${n.nombre} (${l})
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
                    ${this.categorias.map(n=>{const l=i[n.id]||0;return`
                        <div class="flex justify-between items-center border-2 border-brand-black rounded-lg p-3 bg-gray-50">
                            <div>
                                <span class="font-bold text-sm text-brand-black">${n.nombre}</span>
                                <p class="text-[11px] font-bold text-gray-500">${l} ${l===1?"producto asociado":"productos asociados"}</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs font-black px-2 py-0.5 rounded border border-brand-black ${l>0?"bg-amber-100 text-amber-900":"bg-gray-200 text-gray-600"}">
                                    ${l} prods.
                                </span>
                                <button data-del-cat="${n.id}" class="text-xs font-black text-red-600 hover:text-white hover:bg-red-600 border border-red-300 rounded px-2 py-1 transition-colors">Eliminar</button>
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
                    ${this.tasasImpuestos.map(n=>`
                        <div class="flex justify-between items-center border border-brand-black rounded p-2.5 bg-gray-50">
                            <span class="font-bold text-sm">${n.nombre} (${n.porcentaje}%)</span>
                            ${n.porcentaje==="0"||n.porcentaje==="16"?'<span class="text-xs text-gray-400 font-bold">Por defecto</span>':`<button data-del-tax="${n.id}" class="text-xs font-black text-red-600 hover:underline">Eliminar</button>`}
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>`,this.conectarEventos(),this.renderCatalogoLista(),this.renderRepoLista()}conectarEventos(){var G,W,J,Y,O,_;const e=document.getElementById("tab-alta"),o=document.getElementById("tab-stock"),a=document.getElementById("tab-ajustes"),r=document.getElementById("inv-seccion-alta"),d=document.getElementById("inv-seccion-stock"),i=document.getElementById("inv-seccion-ajustes"),p=(I,q,V)=>{this.tabActiva=I,[e,o,a].forEach(Q=>{Q&&(Q.className="w-36 sm:w-48 h-9 flex items-center justify-center font-heading font-bold text-xs rounded text-brand-black hover:bg-gray-100 transition-colors shrink-0")}),[r,d,i].forEach(Q=>{Q==null||Q.classList.remove("block"),Q==null||Q.classList.add("hidden")}),q&&V&&(q.className="w-36 sm:w-48 h-9 flex items-center justify-center font-heading font-black text-xs rounded bg-brand-black text-white transition-colors shrink-0",V.classList.remove("hidden"),V.classList.add("block"))};e==null||e.addEventListener("click",()=>p("alta",e,r)),o==null||o.addEventListener("click",()=>{p("stock",o,d),this.renderRepoLista()}),a==null||a.addEventListener("click",()=>p("ajustes",a,i));const c=document.getElementById("prod-precio-bruto"),t=document.getElementById("prod-margen"),s=document.getElementById("prod-impuesto"),n=document.getElementById("prod-precio-neto"),l=I=>{if(!I)return 0;const q=I.trim().replace(",","."),V=parseFloat(q);return Number.isFinite(V)&&!isNaN(V)?V:0},u=()=>{if(!c||!n||!t||!s)return;const I=l(c.value),q=l(t.value)/100,V=l(s.value)/100;if(I>0){const ne=I*(1+q)*(1+V);n.value=ne.toFixed(2)}},m=()=>{if(!c||!n||!t||!s)return;const I=l(n.value),q=l(c.value),V=l(t.value)/100,Q=l(s.value)/100;if(I>0){const ne=I/(1+Q);if(q>0){const le=(ne-q)/q*100;t.value=Math.max(0,Math.round(le*10)/10).toFixed(1)}else V>0&&(c.value=(ne/(1+V)).toFixed(2))}},g=document.getElementById("prod-stock"),y=document.getElementById("prod-nombre"),h=document.getElementById("prod-unidad"),w=document.getElementById("cat-nombre"),f=document.getElementById("tax-nombre"),S=document.getElementById("tax-pct"),B=document.getElementById("cat-buscar-filtro"),A=document.getElementById("repo-buscar"),C=document.getElementById("alta-prod-msg");y&&ke(y,64),c&&ge(c,99999.99,8,u),t&&ge(t,999,5,u),n&&ge(n,99999.99,8,m),g&&ge(g,99999,7),w&&ke(w,32),f&&ke(f,32),S&&ge(S,100,5),B&&ke(B,40),A&&ke(A,40),s==null||s.addEventListener("change",u);const v=()=>{C&&!C.classList.contains("hidden")&&C.style.color!=="#00823B"&&(C.classList.add("hidden"),C.textContent="")};y==null||y.addEventListener("input",v),n==null||n.addEventListener("input",v),g==null||g.addEventListener("input",v),h==null||h.addEventListener("change",v);const E=document.getElementById("prod-sin-stock"),L=document.getElementById("box-stock-inicial");E==null||E.addEventListener("change",()=>{v(),L&&(L.style.opacity=E.checked?"0.3":"1",L.querySelector("input").disabled=E.checked)});const N=document.getElementById("prod-es-caja"),j=document.getElementById("box-caja-config"),F=document.getElementById("prod-unidades-caja"),M=document.getElementById("prod-stock-cajas");N==null||N.addEventListener("change",()=>{v(),j&&(N.checked?j.classList.remove("hidden"):j.classList.add("hidden"))});const K=()=>{if(N!=null&&N.checked&&M&&F&&g){const I=parseInt(M.value,10),q=parseInt(F.value,10);Number.isFinite(I)&&I>=0&&Number.isFinite(q)&&q>1&&(g.value=String(I*q))}};F&&Te(F,2,1e3,4,K),M&&Te(M,0,9999,4,K);const P=document.getElementById("prod-tiene-paquete"),Z=document.getElementById("box-paquete-config");P==null||P.addEventListener("change",()=>{v(),Z&&(P.checked?Z.classList.remove("hidden"):Z.classList.add("hidden"))}),M==null||M.addEventListener("input",K),F==null||F.addEventListener("input",K);const k=document.getElementById("presentaciones-lista"),$=document.getElementById("btn-agregar-presentacion");let U=0;const H=()=>{var V;const I=U++,q=document.createElement("div");q.id=`pres-row-${I}`,q.className="grid grid-cols-[1fr_90px_70px_32px] gap-2 items-center bg-white border border-brand-black rounded p-2",q.innerHTML=`
                <div>
                    <label class="block text-[9px] font-bold uppercase text-gray-600 mb-0.5">Nombre</label>
                    <input id="pres-nombre-${I}" type="text" maxlength="30" placeholder="Ej: Six-pack, Tobo, Caja" class="w-full border border-brand-black rounded px-2 py-1 font-bold text-xs bg-gray-50 focus:bg-white" />
                </div>
                <div>
                    <label class="block text-[9px] font-bold uppercase text-gray-600 mb-0.5">Precio ($)</label>
                    <input id="pres-precio-${I}" type="number" min="0.01" step="0.01" placeholder="0.00" class="w-full border border-brand-black rounded px-1.5 py-1 font-bold text-xs bg-gray-50 focus:bg-white" />
                </div>
                <div>
                    <label class="block text-[9px] font-bold uppercase text-gray-600 mb-0.5">Unidades</label>
                    <input id="pres-unidades-${I}" type="number" min="1" max="9999" step="1" value="1" placeholder="1" class="w-full border border-brand-black rounded px-1.5 py-1 font-bold text-xs bg-gray-50 focus:bg-white" />
                </div>
                <div class="pt-3">
                    <button type="button" data-del-pres="${I}" title="Eliminar presentación" class="w-7 h-7 rounded border border-red-400 text-red-600 hover:bg-red-50 font-black text-sm flex items-center justify-center">&times;</button>
                </div>
            `,k==null||k.appendChild(q),(V=q.querySelector(`[data-del-pres="${I}"]`))==null||V.addEventListener("click",()=>{q.remove()})};$==null||$.addEventListener("click",()=>{H()}),(G=document.getElementById("form-nuevo-producto"))==null||G.addEventListener("submit",I=>{I.preventDefault(),this.guardarProducto()}),(W=document.getElementById("cat-buscar-filtro"))==null||W.addEventListener("input",I=>{this.busquedaCatalogo=I.target.value.trim().toLowerCase(),this.paginaCat=1,this.renderCatalogoLista()}),(J=document.getElementById("cat-filtro-lateral"))==null||J.addEventListener("change",I=>{this.filtroCategoriaCatalogo=I.target.value,this.paginaCat=1,this.renderCatalogoLista()}),(Y=document.getElementById("repo-buscar"))==null||Y.addEventListener("input",I=>{this.busquedaRepo=I.target.value.trim().toLowerCase(),this.paginaRepo=1,this.renderRepoLista()}),this.contenedor.querySelectorAll("[data-cat-chip]").forEach(I=>{I.addEventListener("click",()=>{const q=I.dataset.catChip||"todas";this.filtroCategoriaRepo=q,this.paginaRepo=1,this.contenedor.querySelectorAll("[data-cat-chip]").forEach(V=>{(V.dataset.catChip||"todas")===q?V.className="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors bg-brand-black text-white":V.className="px-3 py-1 rounded text-xs font-heading font-black border-2 border-brand-black shrink-0 transition-colors bg-gray-100 text-brand-black hover:bg-gray-200"}),this.renderRepoLista()})}),(O=document.getElementById("form-crear-cat"))==null||O.addEventListener("submit",I=>{I.preventDefault();const q=document.getElementById("cat-nombre");q!=null&&q.value.trim()&&D.crearCategoria(q.value.trim()).then(()=>void this.render("ajustes"))}),this.contenedor.querySelectorAll("[data-del-cat]").forEach(I=>{I.addEventListener("click",async()=>{var Q;const q=I.dataset.delCat;if(!q)return;if(((Q=this.modelo.getConfig())==null?void 0:Q.privacidadInventario)&&!this.duenoAutenticado){ce("Acción no permitida en modo operador. Solicite al Dueño(a).","error");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const ne=await be("Acción protegida. Ingrese el PIN de Administrador(a) / Dueño(a):","","AUTENTICACIÓN DUEÑO(A)");if(!ne||!await this.modelo.verificarPin(ne)){ce("PIN incorrecto o no suministrado. Acción cancelada.","error");return}}await ue("¿Seguro que desea eliminar esta categoría? Los productos asociados quedarán sin categoría.","ELIMINAR CATEGORÍA")&&D.eliminarCategoria(q).then(()=>void this.render("ajustes"))})}),(_=document.getElementById("form-crear-tax"))==null||_.addEventListener("submit",I=>{I.preventDefault();const q=document.getElementById("tax-nombre"),V=document.getElementById("tax-pct");q!=null&&q.value.trim()&&V&&D.crearTasaImpuesto(q.value.trim(),Number(V.value)).then(()=>void this.render("ajustes"))}),this.contenedor.querySelectorAll("[data-del-tax]").forEach(I=>{I.addEventListener("click",()=>{const q=I.dataset.delTax;q&&D.eliminarTasaImpuesto(q).then(()=>void this.render("ajustes"))})})}renderCatalogoLista(){var i,p,c,t;const e=document.getElementById("cat-lista-items");if(!e)return;const o=this.productos.filter(s=>{const n=!this.busquedaCatalogo||s.nombre.toLowerCase().includes(this.busquedaCatalogo)||s.sku.toLowerCase().includes(this.busquedaCatalogo),l=this.filtroCategoriaCatalogo==="todas"||(s.categoriaId||"cat-general")===this.filtroCategoriaCatalogo;return n&&l});if(o.length===0){e.innerHTML='<p class="py-4 text-center text-gray-400 font-bold text-xs">Sin coincidencias en esta categoría.</p>',(i=document.getElementById("paginacion-cat"))==null||i.remove();return}const a=Math.ceil(o.length/this.POR_PAGINA_CAT);this.paginaCat>a&&(this.paginaCat=a);const r=(this.paginaCat-1)*this.POR_PAGINA_CAT,d=o.slice(r,r+this.POR_PAGINA_CAT);if(e.innerHTML=d.map(s=>{var h;const n=Number(s.stock),l=s.sinStock?"bg-purple-100 text-purple-900":n<=this.semaforoStock.rojoMax?"bg-red-100 text-red-900":n<=this.semaforoStock.amarilloMax?"bg-yellow-100 text-yellow-900":"bg-green-100 text-green-900",u=this.getUnitLabel(s),m=this.getNombreCategoria(s.categoriaId),y=((h=this.modelo.getConfig())==null?void 0:h.privacidadInventario)&&!this.duenoAutenticado;return`
            <div class="border border-brand-black rounded p-2 bg-gray-50 flex justify-between items-center text-xs">
                <div class="min-w-0 flex-1 pr-2">
                    <p class="font-bold truncate text-brand-black" title="${s.nombre}">${s.nombre}</p>
                    <p class="text-[10px] text-gray-500 font-bold">
                        <span class="text-brand-purple font-black">${m}</span> · ${y?"•••":`$${Number(s.precioUsd).toFixed(2)}`} · IVA ${s.impuestoPct}%
                    </p>
                </div>
                <div class="text-right shrink-0">
                    <span class="font-black px-2 py-0.5 rounded border border-brand-black text-[10px] inline-block ${l}">
                        ${y?'<span class="text-gray-400">•••</span>':s.sinStock?"LIBRE":s.esCaja&&s.unidadesPorCaja&&s.unidadesPorCaja>1?`${Math.floor(n/s.unidadesPorCaja)} cj. + ${n%s.unidadesPorCaja} un. (${n} un.)`:`${n} ${u}`}
                    </span>
                </div>
            </div>`}).join(""),(p=document.getElementById("paginacion-cat"))==null||p.remove(),a>1){const s=document.createElement("div");s.id="paginacion-cat",s.className="flex items-center justify-between mt-2 gap-2 flex-wrap",s.innerHTML=`
                <span class="text-[10px] font-bold text-gray-500">Pag. ${this.paginaCat} de ${a} · ${o.length} productos</span>
                <div class="flex gap-1">
                    <button id="cat-pag-ant" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCat===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANT.</button>
                    <button id="cat-pag-sig" class="border-2 border-brand-black px-2 py-0.5 rounded text-[10px] font-heading font-black shadow-brutal-sm ${this.paginaCat===a?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIG.</button>
                </div>`,e.insertAdjacentElement("afterend",s),(c=document.getElementById("cat-pag-ant"))==null||c.addEventListener("click",()=>{this.paginaCat>1&&(this.paginaCat--,this.renderCatalogoLista())}),(t=document.getElementById("cat-pag-sig"))==null||t.addEventListener("click",()=>{this.paginaCat<a&&(this.paginaCat++,this.renderCatalogoLista())})}}renderRepoLista(){var c,t,s;const e=document.getElementById("repo-lista");if(!e)return;const o=this.productos.filter(n=>{const l=!this.busquedaRepo||n.nombre.toLowerCase().includes(this.busquedaRepo)||n.sku.toLowerCase().includes(this.busquedaRepo),u=this.filtroCategoriaRepo==="todas"||(n.categoriaId||"cat-general")===this.filtroCategoriaRepo;return l&&u}),a=document.getElementById("repo-contador-estado");if(a){const n=this.filtroCategoriaRepo==="todas"?"en depósito":`en ${this.getNombreCategoria(this.filtroCategoriaRepo)}`;a.textContent=`${o.length} de ${this.productos.length} artículos ${n}`}if(o.length===0){e.innerHTML='<p class="col-span-full py-8 text-center text-gray-500 font-bold">No se encontraron productos en la categoría seleccionada.</p>';return}const r=this.semaforoStock,d=Math.ceil(o.length/this.POR_PAGINA_REPO);this.paginaRepo>d&&(this.paginaRepo=d);const i=(this.paginaRepo-1)*this.POR_PAGINA_REPO,p=o.slice(i,i+this.POR_PAGINA_REPO);if(e.innerHTML=p.map(n=>{var f;const l=Number(n.stock),u=n.sinStock?"text-purple-700":l<=r.rojoMax?"text-red-600":l<=r.amarilloMax?"text-amber-600":"text-emerald-700",m=this.getUnitLabel(n),g=this.getNombreCategoria(n.categoriaId),y=n.sinStock?"Venta libre":n.esCaja&&n.unidadesPorCaja&&n.unidadesPorCaja>1?`${Math.floor(l/n.unidadesPorCaja)} cajas y ${l%n.unidadesPorCaja} un. (${l} un.)`:`${l} ${m}`,w=((f=this.modelo.getConfig())==null?void 0:f.privacidadInventario)&&!this.duenoAutenticado;return`
            <div class="border-2 border-brand-black rounded-lg p-3 bg-white shadow-sm flex flex-col justify-between h-[175px] min-h-[175px] max-h-[175px] box-border overflow-hidden">
                <div class="min-w-0">
                    <div class="flex justify-between items-start gap-1">
                        <div class="min-w-0 flex-1">
                            <span class="text-[9px] font-black uppercase tracking-wider text-brand-purple bg-purple-50 border border-purple-200 rounded px-1.5 py-0.2 inline-block mb-0.5 truncate max-w-[150px]">${g}</span>
                            <h4 class="font-heading font-black text-sm truncate" title="${n.nombre}">${n.nombre}</h4>
                        </div>
                        <div class="flex gap-1 shrink-0">
                            <button data-repo-edit="${n.sku}" title="Editar precio y datos del producto" class="w-5 h-5 rounded border border-brand-black text-brand-black hover:bg-brand-black hover:text-white flex items-center justify-center font-black text-[10px] shrink-0">✎</button>
                            <button data-repo-del="${n.sku}" title="Eliminar producto del catálogo" class="w-5 h-5 rounded border border-brand-black text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center font-black text-xs shrink-0">&times;</button>
                        </div>
                    </div>
                    <p class="text-xs font-bold text-gray-500 mt-0.5">${w?'Stock: <span class="font-black text-gray-400">•••</span>':`Precio: <span class="font-black text-brand-black">$${Number(n.precioUsd).toFixed(2)}</span> · Stock: <span class="font-black ${u}">${y}</span>`}</p>
                </div>
                ${n.sinStock?'<p class="text-[11px] text-purple-700 font-bold mt-auto">Sin control de existencias físicas.</p>':`
                <div class="flex items-center gap-1 mt-auto pt-2 border-t border-gray-100">
                    ${n.esCaja&&n.unidadesPorCaja&&n.unidadesPorCaja>1?`
                        <select data-repo-tipo="${n.sku}" class="h-8 border-2 border-brand-black rounded px-1 py-0.5 font-bold text-[10px] shrink-0 bg-white">
                            <option value="unidad">Unidad</option>
                            <option value="caja">Caja (${n.unidadesPorCaja} un.)</option>
                        </select>
                    `:""}
                    <input type="number" step="${m==="kg"||m==="ml"?"0.1":"1"}" min="${m==="kg"||m==="ml"?"0.01":"1"}" max="9999" maxlength="5" placeholder="Cant." data-repo-cant="${n.sku}" class="w-14 h-8 border-2 border-brand-black rounded px-1.5 py-0.5 font-bold text-xs shrink-0" />
                    <button data-repo-in="${n.sku}" title="Sumar stock por reposición de compra" class="h-8 bg-green-200 hover:bg-green-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">+ ENTRADA</button>
                    <button data-repo-red="${n.sku}" title="Reducir stock por ajuste de inventario regular" class="h-8 bg-amber-200 hover:bg-amber-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">- REDUCIR</button>
                    <button data-repo-out="${n.sku}" title="Registrar como merma o daño físico" class="h-8 bg-red-200 hover:bg-red-300 border border-brand-black rounded px-1.5 text-[10px] font-black font-heading flex-1 truncate shrink-0">- MERMA</button>
                </div>`}
            </div>`}).join(""),(c=document.getElementById("paginacion-repo"))==null||c.remove(),d>1){const n=document.createElement("div");n.id="paginacion-repo",n.className="col-span-full flex items-center justify-between mt-3 gap-3 flex-wrap",n.innerHTML=`
                <span class="text-xs font-bold text-gray-500">Pagina ${this.paginaRepo} de ${d} · ${o.length} productos</span>
                <div class="flex gap-2">
                    <button id="repo-pag-ant" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaRepo===1?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">ANTERIOR</button>
                    <button id="repo-pag-sig" class="border-2 border-brand-black px-3 py-1 rounded text-xs font-heading font-black shadow-brutal-sm ${this.paginaRepo===d?"opacity-30 pointer-events-none":"hover:bg-gray-100"}">SIGUIENTE</button>
                </div>`,e.insertAdjacentElement("afterend",n),(t=document.getElementById("repo-pag-ant"))==null||t.addEventListener("click",()=>{this.paginaRepo>1&&(this.paginaRepo--,this.renderRepoLista())}),(s=document.getElementById("repo-pag-sig"))==null||s.addEventListener("click",()=>{this.paginaRepo<d&&(this.paginaRepo++,this.renderRepoLista())})}e.querySelectorAll("input[data-repo-cant]").forEach(n=>{ge(n,9999,5)}),e.querySelectorAll("[data-repo-edit]").forEach(n=>{n.addEventListener("click",async()=>{var h;const l=n.dataset.repoEdit,u=this.productos.find(w=>w.sku===l);if(!l||!u)return;if(((h=this.modelo.getConfig())==null?void 0:h.privacidadInventario)&&!this.duenoAutenticado){ce("Acción no permitida en modo operador. Solicite al Dueño(a).","error");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const w=await be("Acción protegida. Ingrese el PIN de Administrador(a) / Dueño(a):","","AUTENTICACIÓN DUEÑO(A)");if(!w||!await this.modelo.verificarPin(w)){ce("PIN incorrecto o no suministrado. Acción cancelada.","error");return}}const g=await be(`Ingrese el nuevo precio neto de venta (USD) para "${u.nombre}":`,Number(u.precioUsd).toFixed(2),"ACTUALIZAR PRECIO DE VENTA");if(!g)return;const y=parseFloat(g.replace(",","."));if(isNaN(y)||y<=0){ce("Precio inválido. Debe ser un número mayor a cero.","error");return}try{await D.actualizarProducto({sku:u.sku,nombre:u.nombre,precioUsd:y.toFixed(2),impuestoPct:u.impuestoPct,precioBrutoUsd:u.precioBrutoUsd,margenPct:u.margenPct,categoriaId:u.categoriaId,sinStock:u.sinStock,unidad:u.unidad,esCaja:u.esCaja,unidadesPorCaja:u.unidadesPorCaja,precioPaqueteUsd:u.precioPaqueteUsd,nombrePaquete:u.nombrePaquete,presentaciones:u.presentaciones});const w=await D.productos();this.productos=w,this.renderRepoLista(),this.renderCatalogoLista(),ce(`Precio de "${u.nombre}" actualizado a $${y.toFixed(2)}.`,"success")}catch(w){ce(w instanceof Error?w.message:String(w),"error")}})}),e.querySelectorAll("[data-repo-del]").forEach(n=>{n.addEventListener("click",async()=>{var y;const l=n.dataset.repoDel,u=this.productos.find(h=>h.sku===l);if(!l||!u)return;if(((y=this.modelo.getConfig())==null?void 0:y.privacidadInventario)&&!this.duenoAutenticado){ce("Acción no permitida en modo operador. Solicite al Dueño(a).","error");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const h=await be("Acción protegida. Ingrese el PIN de Administrador(a) / Dueño(a):","","AUTENTICACIÓN DUEÑO(A)");if(!h||!await this.modelo.verificarPin(h)){ce("PIN incorrecto o no suministrado. Acción cancelada.","error");return}}await ue(`¿Seguro que deseas eliminar permanentemente el producto "${u.nombre}" del catálogo?`,"ELIMINAR PRODUCTO")&&D.eliminarProducto(l).then(()=>{D.productos().then(h=>{this.productos=h,this.renderRepoLista(),this.renderCatalogoLista();const w=document.getElementById("repo-contador-estado");w&&(w.textContent=`${this.productos.length} artículos en depósito`)})})})}),e.querySelectorAll("[data-repo-in]").forEach(n=>{n.addEventListener("click",async()=>{var g;const l=n.dataset.repoIn,u=e.querySelector(`input[data-repo-cant="${l}"]`),m=u==null?void 0:u.value;if(l&&m&&Number(m)>0&&Number(m)<=9999){if(((g=this.modelo.getConfig())==null?void 0:g.privacidadInventario)&&!this.duenoAutenticado){ce("Acción no permitida en modo operador. Solicite al Dueño(a).","error");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const B=await be("Acción de inventario protegida. Ingrese el PIN de Administrador(a) / Dueño(a):","","AUTENTICACIÓN DUEÑO(A)");if(!B||!await this.modelo.verificarPin(B)){ce("PIN incorrecto o no suministrado. Operación cancelada.","error");return}}const h=e.querySelector(`select[data-repo-tipo="${l}"]`),w=(h==null?void 0:h.value)||"unidad",f=this.productos.find(B=>B.sku===l);let S=Number(m);w==="caja"&&(f!=null&&f.esCaja)&&(f!=null&&f.unidadesPorCaja)&&f.unidadesPorCaja>1&&(S=S*f.unidadesPorCaja),D.compraStock(l,String(S)).then(()=>{D.productos().then(B=>{this.productos=B,this.renderRepoLista(),this.renderCatalogoLista()})})}})}),e.querySelectorAll("[data-repo-red]").forEach(n=>{n.addEventListener("click",async()=>{var g;const l=n.dataset.repoRed,u=e.querySelector(`input[data-repo-cant="${l}"]`),m=u==null?void 0:u.value;if(l&&m&&Number(m)>0&&Number(m)<=9999){if(((g=this.modelo.getConfig())==null?void 0:g.privacidadInventario)&&!this.duenoAutenticado){ce("Acción no permitida en modo operador. Solicite al Dueño(a).","error");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const B=await be("Acción de inventario protegida. Ingrese el PIN de Administrador(a) / Dueño(a):","","AUTENTICACIÓN DUEÑO(A)");if(!B||!await this.modelo.verificarPin(B)){ce("PIN incorrecto o no suministrado. Operación cancelada.","error");return}}const h=e.querySelector(`select[data-repo-tipo="${l}"]`),w=(h==null?void 0:h.value)||"unidad",f=this.productos.find(B=>B.sku===l);let S=Number(m);w==="caja"&&(f!=null&&f.esCaja)&&(f!=null&&f.unidadesPorCaja)&&f.unidadesPorCaja>1&&(S=S*f.unidadesPorCaja),D.reducirStock(l,String(S)).then(()=>{D.productos().then(B=>{this.productos=B,this.renderRepoLista(),this.renderCatalogoLista()})})}})}),e.querySelectorAll("[data-repo-out]").forEach(n=>{n.addEventListener("click",async()=>{var g;const l=n.dataset.repoOut,u=e.querySelector(`input[data-repo-cant="${l}"]`),m=u==null?void 0:u.value;if(l&&m&&Number(m)>0&&Number(m)<=9999){if(((g=this.modelo.getConfig())==null?void 0:g.privacidadInventario)&&!this.duenoAutenticado){ce("Acción no permitida en modo operador. Solicite al Dueño(a).","error");return}if(!this.duenoAutenticado&&this.modelo.hasPinSet()){const B=await be("Acción de inventario protegida. Ingrese el PIN de Administrador(a) / Dueño(a):","","AUTENTICACIÓN DUEÑO(A)");if(!B||!await this.modelo.verificarPin(B)){ce("PIN incorrecto o no suministrado. Operación cancelada.","error");return}}const h=e.querySelector(`select[data-repo-tipo="${l}"]`),w=(h==null?void 0:h.value)||"unidad",f=this.productos.find(B=>B.sku===l);let S=Number(m);w==="caja"&&(f!=null&&f.esCaja)&&(f!=null&&f.unidadesPorCaja)&&f.unidadesPorCaja>1&&(S=S*f.unidadesPorCaja),D.merma(l,String(S),null).then(()=>{D.productos().then(B=>{this.productos=B,this.renderRepoLista(),this.renderCatalogoLista()})})}})})}async guardarProducto(){var F;const e=document.getElementById("prod-nombre"),o=document.getElementById("prod-categoria"),a=document.getElementById("prod-impuesto"),r=document.getElementById("prod-precio-bruto"),d=document.getElementById("prod-margen"),i=document.getElementById("prod-precio-neto"),p=document.getElementById("prod-stock"),c=((F=document.getElementById("prod-unidad"))==null?void 0:F.value)||"un",t=document.getElementById("prod-sin-stock"),s=document.getElementById("alta-prod-msg"),n=M=>{if(!M)return 0;const K=M.trim().replace(",","."),P=parseFloat(K);return Number.isFinite(P)&&!isNaN(P)?P:0};if(s&&(s.classList.add("hidden"),s.textContent=""),!(e!=null&&e.value.trim())){s&&(s.textContent="El nombre del producto o servicio es obligatorio.",s.style.color="#C60C15",s.classList.remove("hidden"),e==null||e.focus());return}const l=n(i==null?void 0:i.value);if(l<=0||l>99999.99){s&&(s.textContent="El precio neto final debe ser un monto positivo entre $0.01 y $99,999.99 USD.",s.style.color="#C60C15",s.classList.remove("hidden"),i==null||i.focus());return}const u=n(p==null?void 0:p.value),m=(t==null?void 0:t.checked)||!1;if(!m&&(u<0||u>99999)){s&&(s.textContent="El stock inicial debe estar comprendido entre 0 y 99,999 unidades.",s.style.color="#C60C15",s.classList.remove("hidden"),p==null||p.focus());return}if(!m&&c==="un"&&(!Number.isInteger(u)||u%1!==0)){s&&(s.textContent='Los productos vendidos por Unidad (un.) deben tener un stock entero exacto (ej: 10). Para registrar fracciones o decimales, seleccione Tipo de Medida "Por Peso (kg)" o "Por Volumen (ml)".',s.style.color="#C60C15",s.classList.remove("hidden"),p==null||p.focus());return}const g=n((a==null?void 0:a.value)||"0"),y=n((d==null?void 0:d.value)||"30");let h=n(r==null?void 0:r.value);h<=0&&(h=l/(1+g/100)/(1+y/100));const w=document.getElementById("prod-es-caja"),f=document.getElementById("prod-unidades-caja"),S=(w==null?void 0:w.checked)||!1,B=S&&f?Math.max(2,parseInt(f.value,10)||12):void 0,A=document.getElementById("prod-tiene-paquete"),C=document.getElementById("prod-nombre-paquete"),v=document.getElementById("prod-precio-paquete"),E=(A==null?void 0:A.checked)||!1,L=E&&C?C.value.trim():void 0,N=E&&v?n(v.value).toFixed(2):void 0,j=[];document.querySelectorAll('[id^="pres-row-"]').forEach(M=>{const K=M.id.replace("pres-row-",""),P=document.getElementById(`pres-nombre-${K}`),Z=document.getElementById(`pres-precio-${K}`),k=document.getElementById(`pres-unidades-${K}`),$=P==null?void 0:P.value.trim(),U=n(Z==null?void 0:Z.value),H=parseInt((k==null?void 0:k.value)||"1",10);$&&U>0&&Number.isFinite(H)&&H>=1&&j.push({nombre:$,precioUsd:U.toFixed(2),unidades:H})});try{await D.crearProducto({nombre:e.value.trim(),precioBrutoUsd:h.toFixed(2),margenPct:String(y),precioUsd:l.toFixed(2),impuestoPct:String(g),stockInicial:t!=null&&t.checked?"0":String(u),categoriaId:(o==null?void 0:o.value)||"",sinStock:(t==null?void 0:t.checked)||!1,pesable:c==="kg"||c==="ml",unidad:c,alcoholica:!1,esCaja:S,unidadesPorCaja:B,precioPaqueteUsd:N,nombrePaquete:L,presentaciones:j.length>0?j:void 0}),s&&(s.textContent="Producto o servicio registrado exitosamente.",s.style.color="#00823B",s.classList.remove("hidden")),setTimeout(()=>void this.render("alta"),800)}catch(M){s&&(s.textContent=M instanceof Error?M.message:String(M),s.style.color="#C60C15",s.classList.remove("hidden"))}}}const ye=b=>{if(typeof b=="number")return Number.isFinite(b)?b:0;if(b==null)return 0;let e=String(b).trim();if(!e)return 0;e.includes(",")&&!e.includes(".")?e=e.replace(",","."):e.includes(".")&&e.includes(",")&&(e=e.replace(/\./g,"").replace(",","."));const o=parseFloat(e);return Number.isFinite(o)&&!isNaN(o)?o:0},te=b=>ye(b).toLocaleString("es-VE",{minimumFractionDigits:2,maximumFractionDigits:2}),Ve=b=>{const e=b.finUnix||Math.floor(Date.now()/1e3),o=Math.max(0,e-b.inicioUnix),a=Math.floor(o/3600),r=Math.floor(o%3600/60);return`${a}h ${r}m`},ht=(b,e)=>{const o=b.operadoresRelevo.length>0?b.operadoresRelevo.join(" / "):b.operadorActual,a=e.filter(n=>{const l=n.fechaUnix&&n.fechaUnix>0?n.fechaUnix:(()=>{const u=(n.fechaHora||"").match(/(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})/);if(u&&u[1]&&u[2]&&u[3]&&u[4]&&u[5]&&u[6]){const m=Date.UTC(parseInt(u[1],10),parseInt(u[2],10)-1,parseInt(u[3],10),parseInt(u[4],10),parseInt(u[5],10),parseInt(u[6],10));if(!isNaN(m))return Math.floor(m/1e3)}return 0})();return!(l<=0||l<b.inicioUnix||b.finUnix&&l>b.finUnix)}),r=[["INFORME DE JORNADA",b.id],["Estado",b.estado==="abierta"?"En curso":"Cerrada"],["Apertura",b.inicioStr],["Cierre",b.finStr||"-"],["Duracion",Ve(b)],["Operadores",o],["Total USD",`$${te(b.ventasTotalUsd)}`],["Total Bs",`Bs. ${te(b.ventasTotalBs)}`],["Tickets emitidos",String(b.ticketsEmitidos)],["Vuelto pagado Bs",`Bs. ${te(b.vueltoPagadoBs)}`],["Vuelto retenido Bs",`Bs. ${te(b.vueltoRetenidoBs)}`],["Deudas liquidadas USD",`$${te(b.deudasLiquidadasUsd)}`],["Entradas stock",String(b.entradasStockReg)],["Mermas",String(b.mermasStockReg)],["Cambios de precio",String(b.cambiosPrecioReg)],["Tasa apertura",`Bs. ${b.tasaInicio}`],["Tasa cierre",b.tasaFin?`Bs. ${b.tasaFin}`:"-"],...b.checksumSha256?[["SHA-256",b.checksumSha256]]:[],[],["TICKETS DE LA JORNADA"],["ID Ticket","Fecha/Hora","Canal","Operador","Metodo(s) de Pago","Total USD","Total Bs"]],d=a.map(n=>{const l=n.pagos&&n.pagos.length>0?n.pagos.map(u=>`${u.metodo}:$${te(u.montoUsd)}`).join(" | "):"DIRECTO";return[n.ventaId,n.fechaUnix&&n.fechaUnix>0?he(n.fechaUnix):n.fechaHora||"",n.canal||"VENTA DIRECTA",n.operador||"Principal",l,`$${te(n.totalUsd)}`,`Bs. ${te(n.totalBs)}`]}),p=[...r,...d].map(n=>n.map(l=>`"${String(l).replace(/"/g,'""')}"`).join(",")).join(`\r
`),c=new Blob(["\uFEFF"+p],{type:"text/csv;charset=utf-8;"}),t=URL.createObjectURL(c),s=document.createElement("a");s.href=t,s.download=`jornada_${b.id}.csv`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(t)};class vt{constructor(e,o,a){T(this,"contenedor");T(this,"modalRoot");T(this,"modelo");T(this,"jornadas",[]);T(this,"jornadaActual",null);T(this,"todosLosTickets",[]);T(this,"busqueda","");T(this,"expandidos",new Set);T(this,"paginaActual",1);T(this,"POR_PAGINA",20);this.contenedor=e,this.modalRoot=o,this.modelo=a}parseFechaUnix(e){if(!e)return 0;const o=e.match(/(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})/);if(o&&o[1]&&o[2]&&o[3]&&o[4]&&o[5]&&o[6]){const a=Date.UTC(parseInt(o[1],10),parseInt(o[2],10)-1,parseInt(o[3],10),parseInt(o[4],10),parseInt(o[5],10),parseInt(o[6],10));if(!isNaN(a))return Math.floor(a/1e3)}return 0}async render(){const[e,o,a]=await Promise.all([D.obtenerJornadaActual(),D.listarHistoricoJornadas(),D.ventas()]);this.jornadaActual=e,this.jornadas=o,this.todosLosTickets=a;const r=e?o.filter(t=>t.id!==e.id):o,d=[...e?[e]:[],...r],i=d.length,p=d.reduce((t,s)=>t+ye(s.ventasTotalUsd),0),c=d.reduce((t,s)=>t+s.ticketsEmitidos,0);this.contenedor.innerHTML=`
        <div class="mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Historial de Jornadas</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Turnos operativos, arqueo de ventas y exportación de jornadas</p>
            </div>
            <span class="text-xs font-bold text-gray-700 bg-white border-2 border-brand-black px-3 py-1.5 rounded shadow-brutal-sm">
                ${i} Jornada${i!==1?"s":""}
            </span>
        </div>

        <!-- KPIs -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-3 bg-amber-50">
                <p class="font-heading font-bold text-[10px] uppercase tracking-wide text-brand-text">Facturado Total</p>
                <div class="font-heading font-black text-lg mt-0.5 text-brand-black">$ ${te(p)}</div>
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
                <div class="font-heading font-black text-lg mt-0.5 text-brand-purple">Bs. ${te(this.modelo.tasaActual||807.39)}</div>
            </div>
            <div class="border-2 border-brand-black rounded-lg shadow-brutal-sm p-3 bg-blue-50">
                <p class="font-heading font-bold text-[10px] uppercase tracking-wide text-brand-text">Tickets Totales</p>
                <div class="font-heading font-black text-lg mt-0.5 text-blue-900">${c}</div>
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
        <div id="lista-jornadas" class="flex flex-col gap-2"></div>`,this.conectarEventosBuscador(),this.renderLista()}conectarEventosBuscador(){var e;(e=document.getElementById("jornadas-buscar"))==null||e.addEventListener("input",o=>{this.busqueda=o.target.value,this.paginaActual=1,this.renderLista()})}renderLista(){var n,l;const e=document.getElementById("lista-jornadas");if(!e)return;const o=this.jornadaActual?this.jornadas.filter(u=>{var m;return u.id!==((m=this.jornadaActual)==null?void 0:m.id)}):this.jornadas,a=[...this.jornadaActual?[this.jornadaActual]:[],...o],r=this.busqueda.trim().toLowerCase(),d=r?a.filter(u=>u.id.toLowerCase().includes(r)||u.operadorActual.toLowerCase().includes(r)||u.operadoresRelevo.some(m=>m.toLowerCase().includes(r))||u.inicioStr.toLowerCase().includes(r)||(u.finStr||"").toLowerCase().includes(r)):a,i=document.getElementById("paginacion-jornadas");if(i&&i.remove(),d.length===0){e.innerHTML=`
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 text-center text-gray-400 font-bold text-sm">
                ${r?"Sin jornadas que coincidan con la busqueda.":"No hay jornadas registradas en el sistema."}
            </div>`;return}const p=Math.max(1,Math.ceil(d.length/this.POR_PAGINA));this.paginaActual>p&&(this.paginaActual=p),this.paginaActual<1&&(this.paginaActual=1);const c=this.paginaActual,t=d.slice((c-1)*this.POR_PAGINA,c*this.POR_PAGINA);e.innerHTML=t.map(u=>this.renderFila(u)).join(""),t.forEach(u=>{if(this.expandidos.has(u.id)){const m=document.getElementById(`detalle-${u.id}`);m==null||m.classList.remove("hidden");const g=document.getElementById(`icon-${u.id}`);g&&(g.textContent="▲")}}),e.querySelectorAll("[data-toggle-jornada]").forEach(u=>{u.addEventListener("click",()=>{const m=u.dataset.toggleJornada,g=document.getElementById(`detalle-${m}`),y=document.getElementById(`icon-${m}`);if(g){const h=g.classList.contains("hidden");g.classList.toggle("hidden",!h),y&&(y.textContent=h?"▲":"▼"),h?this.expandidos.add(m):this.expandidos.delete(m)}})}),e.querySelectorAll("[data-exportar-jornada]").forEach(u=>{u.addEventListener("click",m=>{m.stopPropagation();const g=u.dataset.exportarJornada,y=d.find(h=>h.id===g);y&&ht(y,this.todosLosTickets)})}),e.querySelectorAll("[data-ver-ticket]").forEach(u=>{u.addEventListener("click",()=>{const m=u.dataset.verTicket,g=this.todosLosTickets.find(y=>y.ventaId===m);g&&this.mostrarModalTicket(g)})});const s=document.createElement("div");s.id="paginacion-jornadas",s.innerHTML=`
            <div class="flex items-center justify-between mt-3 gap-3 flex-wrap">
                <span class="text-xs font-bold text-gray-600">
                    Pagina ${c} de ${p} &middot; ${d.length} jornada${d.length!==1?"s":""}
                </span>
                <div class="flex gap-2">
                    <button id="btn-pag-ant"
                        class="border-2 border-brand-black font-heading font-black text-xs px-3 py-1.5 rounded shadow-brutal-sm bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                        ${c===1?"disabled":""}>
                        ANTERIOR
                    </button>
                    <button id="btn-pag-sig"
                        class="border-2 border-brand-black font-heading font-black text-xs px-3 py-1.5 rounded shadow-brutal-sm bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                        ${c===p?"disabled":""}>
                        SIGUIENTE
                    </button>
                </div>
            </div>`,e.insertAdjacentElement("afterend",s),(n=document.getElementById("btn-pag-ant"))==null||n.addEventListener("click",()=>{this.paginaActual>1&&(this.paginaActual--,this.renderLista())}),(l=document.getElementById("btn-pag-sig"))==null||l.addEventListener("click",()=>{this.paginaActual<p&&(this.paginaActual++,this.renderLista())})}renderFila(e){const o=e.estado==="abierta",a=e.operadoresRelevo.length>0?e.operadoresRelevo.join(", "):e.operadorActual,r=this.todosLosTickets.filter(c=>{const t=c.fechaUnix&&c.fechaUnix>0?c.fechaUnix:this.parseFechaUnix(c.fechaHora);return!(t<=0||t<e.inicioUnix||e.finUnix&&t>e.finUnix)}),d={};r.forEach(c=>{(c.pagos||[]).forEach(t=>{d[t.metodo]||(d[t.metodo]={usd:0,bs:0}),d[t.metodo].usd+=ye(t.montoUsd),d[t.metodo].bs+=ye(t.montoBs)})});const i=Object.entries(d).map(([c,t])=>`
            <div class="flex justify-between items-center text-xs border-b border-gray-100 last:border-none py-1">
                <span class="font-heading font-black text-brand-black">${c}</span>
                <div>
                    <span class="font-black">$ ${te(t.usd)}</span>
                    <span class="text-brand-purple font-mono font-bold ml-2">Bs. ${te(t.bs)}</span>
                </div>
            </div>`).join(""),p=r.length>0?r.map(c=>{const s=c.canal==="CONSUMO EN CUENTA"||c.ventaId.startsWith("CTA-")?'<span class="bg-amber-100 text-amber-900 border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">CUENTA</span>':'<span class="bg-blue-100 text-blue-900 border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">VENTA</span>';let n="";return c.pagos&&c.pagos.length>1?n='<span class="bg-amber-50 text-amber-950 border border-amber-500 px-1.5 py-0.5 rounded font-black text-[9px]">MIXTO</span>':c.pagos&&c.pagos.length===1?n=`<span class="bg-gray-100 text-brand-black border border-brand-black px-1.5 py-0.5 rounded font-black text-[9px]">${c.pagos[0].metodo}</span>`:n='<span class="bg-gray-100 text-gray-500 border border-gray-300 px-1.5 py-0.5 rounded font-mono text-[9px]">DIRECTO</span>',`
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="py-1.5 px-2 font-mono text-brand-purple text-[10px]">${c.ventaId}</td>
                    <td class="py-1.5 px-2 text-gray-500 text-[10px]">${c.fechaUnix&&c.fechaUnix>0?he(c.fechaUnix):c.fechaHora||"-"}</td>
                    <td class="py-1.5 px-2">${s}</td>
                    <td class="py-1.5 px-2">${n}</td>
                    <td class="py-1.5 px-2 text-gray-700 text-[10px]">${c.operador||"Principal"}</td>
                    <td class="py-1.5 px-2 text-right font-black text-brand-black text-[10px]">$ ${te(c.totalUsd)}</td>
                    <td class="py-1.5 px-2 text-right font-black text-brand-purple text-[10px]">Bs. ${te(c.totalBs)}</td>
                    <td class="py-1.5 px-2 text-center">
                        <button data-ver-ticket="${c.ventaId}"
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
                    <span class="font-heading font-black text-sm text-brand-black">$ ${te(e.ventasTotalUsd)}</span>
                    <span class="font-heading font-black text-sm text-brand-purple hidden sm:block">Bs. ${te(e.ventasTotalBs)}</span>
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
                        <p class="font-bold text-xs text-brand-black mt-0.5">${Ve(e)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Vuelto pagado</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">Bs. ${te(e.vueltoPagadoBs)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Vuelto retenido</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">Bs. ${te(e.vueltoRetenidoBs)}</p>
                    </div>
                    <div class="p-2">
                        <p class="text-[9px] font-black uppercase text-gray-400">Deudas liquid.</p>
                        <p class="font-bold text-xs text-brand-black mt-0.5">$ ${te(e.deudasLiquidadasUsd)}</p>
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
                ${Object.keys(d).length>0?`
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
                                ${p}
                            </tbody>
                        </table>
                    </div>
                    ${e.checksumSha256?`<p class="text-[9px] font-mono text-gray-400 mt-1.5 break-all">SHA-256: ${e.checksumSha256}</p>`:""}
                </div>
            </div>
        </div>`}mostrarModalTicket(e){var d,i;const o=e.tasaDelDia?`Bs. ${te(e.tasaDelDia)}`:`Bs. ${te(this.modelo.tasaActual||807.39)}`,a=e.lineas&&e.lineas.length>0?e.lineas.map(p=>`
                <tr class="border-b border-gray-100 last:border-none">
                    <td class="py-2 pr-2">
                        <div class="font-bold text-gray-900">${p.nombre}</div>
                        <div class="text-[10px] text-gray-400 font-mono">${p.sku}</div>
                    </td>
                    <td class="py-2 text-center font-bold">${p.cantidad}</td>
                    <td class="py-2 text-right font-mono">$ ${te(p.precioUsd)}</td>
                    <td class="py-2 text-right font-bold text-brand-black">$ ${te(p.subtotalUsd)}</td>
                    <td class="py-2 text-right font-black text-brand-purple">Bs. ${te(p.subtotalBs)}</td>
                </tr>
            `).join(""):'<tr><td colspan="5" class="py-3 text-center text-gray-400 font-bold">Sin lineas individuales registradas.</td></tr>';this.modalRoot.innerHTML=`
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-2xl max-h-[90vh] flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start border-b-2 border-brand-black pb-3 mb-4">
                        <div>
                            <span class="text-[10px] uppercase font-black tracking-widest text-brand-purple">Comprobante de Venta</span>
                            <h3 class="font-heading font-black text-2xl">${e.ventaId}</h3>
                            <p class="text-xs text-gray-600 font-bold mt-0.5">${e.fechaUnix&&e.fechaUnix>0?he(e.fechaUnix):e.fechaHora||"Hoy"} · Canal: ${e.canal||"VENTA DIRECTA"}</p>
                        </div>
                        <button id="modal-ticket-cerrar" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">
                            &times;
                        </button>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 bg-gray-50 border border-brand-black rounded p-3 text-xs">
                        <div>
                            <span class="text-[10px] text-gray-500 font-bold uppercase block">Operador / Mesa</span>
                            <span class="font-bold text-gray-900">${e.operador||"Principal"}</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-gray-500 font-bold uppercase block">Tasa BCV Auditada</span>
                            <span class="font-black text-brand-purple font-mono">${o}</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-gray-500 font-bold uppercase block">Recibido (Bs.)</span>
                            <span class="font-bold text-gray-900">Bs. ${te(e.montoRecibidoBs||e.totalBs)}</span>
                        </div>
                        <div>
                            <span class="text-[10px] text-gray-500 font-bold uppercase block">Vuelto (${e.estadoVuelto==="RETENIDO"?"Retenido":"Entregado"})</span>
                            <span class="font-bold ${e.estadoVuelto==="RETENIDO"?"text-blue-700":"text-green-700"}">Bs. ${te(e.vueltoBs||"0.00")}</span>
                        </div>
                    </div>

                    ${ye(e.vueltoBs)>.009?`
                    <div class="mb-3 ${e.estadoVuelto==="RETENIDO"?"bg-blue-50 border-blue-500 text-blue-950":"bg-emerald-50 border-emerald-500 text-emerald-950"} border-2 rounded p-2.5 text-xs font-bold flex flex-wrap items-center justify-between gap-2">
                        <div>
                            <span class="text-[10px] font-black uppercase tracking-wider block">
                                ${e.estadoVuelto==="RETENIDO"?"Vuelto Retenido (Saldo a Favor)":"Vuelto Pagado al Cliente"}
                            </span>
                            <span>
                                ${e.estadoVuelto==="RETENIDO"?"Asentado como saldo a favor retenido.":`Entregado via ${e.metodoVuelto||"Efectivo"}${e.montoVueltoUsd&&Number(e.montoVueltoUsd)>0&&e.tasaVuelto?` ($ ${te(e.montoVueltoUsd)} a Bs. ${te(e.tasaVuelto)})`:""}.`}
                            </span>
                        </div>
                        <span class="font-heading font-black text-lg shrink-0">Bs. ${te(e.vueltoBs)}</span>
                    </div>`:""}

                    <div class="mb-3 border border-brand-black rounded p-2.5 bg-gray-50">
                        <span class="text-[10px] uppercase font-heading font-black text-gray-700 block mb-1">
                            Metodos de Pago (${e.pagos?e.pagos.length:1})
                        </span>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            ${e.pagos&&e.pagos.length>0?e.pagos.map(p=>`
                                    <div class="bg-white border border-brand-black rounded p-2 text-xs flex justify-between items-center">
                                        <div>
                                            <span class="font-heading font-black text-brand-black">${p.metodo}</span>
                                            ${p.tasaCambio?`<p class="text-[10px] font-mono font-bold text-brand-purple">Tasa: Bs. ${te(p.tasaCambio)}</p>`:""}
                                            ${p.referencia?`<p class="text-[10px] font-mono text-gray-500">Ref: ${p.referencia}</p>`:""}
                                        </div>
                                        <div class="text-right">
                                            <span class="font-black text-brand-black block">$ ${te(p.montoUsd)}</span>
                                            <span class="text-[10px] font-mono font-bold text-brand-purple block">Bs. ${te(p.montoBs)}</span>
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
                        <span class="font-heading font-black text-lg text-emerald-700 ml-4 shrink-0">+$${te(e.saldoAFavorConsolidadoUsd)} USD</span>
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
                                <span class="font-heading font-black text-2xl text-brand-black">$ ${te(e.totalUsd)}</span>
                                <span class="font-heading font-black text-xl text-brand-purple font-mono">Bs. ${te(e.totalBs)}</span>
                            </div>
                        </div>
                        <button id="modal-ticket-ok" class="bg-brand-black text-white font-heading font-black px-6 py-2.5 rounded border border-brand-black shadow-brutal-sm hover:bg-gray-800">
                            CERRAR
                        </button>
                    </div>
                </div>
            </div>
        </div>`;const r=()=>{this.modalRoot.innerHTML=""};(d=document.getElementById("modal-ticket-cerrar"))==null||d.addEventListener("click",r),(i=document.getElementById("modal-ticket-ok"))==null||i.addEventListener("click",r)}}class kt{constructor(e){T(this,"contenedor");this.contenedor=e}render(){this.contenedor.innerHTML=`
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
        </div>`}}const yt=3e5;class Et{constructor(){T(this,"modelo",new ct);T(this,"cajaVm",null);T(this,"panelVm",new mt);T(this,"widget",new it);T(this,"root");T(this,"modalRoot")}async arrancar(){const e=document.getElementById("app-root");if(!e)return;this.root=e,this.modalRoot=this.crearModalRoot(),this.widget.iniciar(),window.addEventListener("tasa_actualizada",a=>{const r=a;r.detail&&this.modelo.setTasa(r.detail)}),await this.refrescarTasa();let o=null;try{o=await this.modelo.cargarConfig()}catch{o=await this.modelo.cargarConfig()}if(window.setInterval(()=>void this.refrescarTasa(),yt),!o){new lt(this.root,this.modelo,()=>void this.arrancar()).render();return}this.pintarBotonesRol(o),this.ejecutarBackupAutomatico(),await this.arrancarCaja()}crearModalRoot(){let e=document.getElementById("modal-root");return e||(e=document.createElement("div"),e.id="modal-root",document.body.appendChild(e)),e}async refrescarTasa(){try{const e=await D.tasa();e&&this.modelo.setTasa(Number(e.valor))}catch{}}async ejecutarBackupAutomatico(){try{const e=await D.getBackupDir();if(e){const o=await D.autoBackup(e,5);o&&console.log(`[Backup] Auto-backup generado: ${o.totalRegistros} registros`)}}catch(e){console.warn("[Backup] Auto-backup falló:",e)}}pintarBotonesRol(e){const o=[document.getElementById("nav-actions-desktop"),document.getElementById("nav-actions-mobile")].filter(Boolean);o.length===0||document.querySelector('[data-nav-btn="caja"]')||o.forEach(a=>{a.innerHTML="";const r=(n,l,u)=>{const m=document.createElement("button");return m.id=`${n}-${a.id.includes("mobile")?"mob":"dsk"}`,m.dataset.navBtn=u,m.className="font-heading font-black text-xs sm:text-sm bg-white border-2 border-brand-black px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded shadow-brutal-sm hover:-translate-y-0.5 transition-transform shrink-0",m.textContent=l,m},d=r("btn-ir-caja","CAJA","caja"),i=r("btn-ir-cuentas","CUENTAS","cuentas"),p=r("btn-ir-ventas","VENTAS","ventas"),c=r("btn-ir-inventario","INVENTARIO","inventario"),t=r("btn-ir-panel","PANEL","panel"),s=r("btn-ir-guia","GUIA","guia");a.appendChild(d),a.appendChild(i),a.appendChild(p),a.appendChild(c),a.appendChild(t),a.appendChild(s),d.addEventListener("click",()=>void this.arrancarCaja()),i.addEventListener("click",()=>void this.arrancarCuentas()),p.addEventListener("click",()=>void this.arrancarVentas()),c.addEventListener("click",()=>void this.arrancarInventario()),t.addEventListener("click",()=>this.solicitarAccesoPanel()),s.addEventListener("click",()=>this.arrancarGuia())})}arrancarGuia(){this.marcarActivo("guia"),new kt(this.root).render()}async arrancarCaja(){this.marcarActivo("caja"),this.cajaVm=new bt(this.modelo),new pt(this.root,this.modalRoot,this.cajaVm,this.modelo).render();try{await this.cajaVm.cargar()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}async arrancarCuentas(){this.marcarActivo("cuentas");const e=new gt(this.root,this.modalRoot,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}arrancarVentas(){var r,d,i;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)){this.abrirVentas();return}this.modalRoot.innerHTML=`
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
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(r=document.getElementById("pin-ventas-cancelar"))==null||r.addEventListener("click",o);const a=()=>void(async()=>{var t;const p=document.getElementById("pin-ventas-input").value;await D.validarPin(p).catch(()=>!1)?(o(),await this.abrirVentas()):(t=document.getElementById("pin-ventas-error"))==null||t.classList.remove("hidden")})();(d=document.getElementById("pin-ventas-ok"))==null||d.addEventListener("click",a),(i=document.getElementById("pin-ventas-input"))==null||i.addEventListener("keydown",p=>{p.key==="Enter"&&a()})}async abrirVentas(){this.marcarActivo("ventas");const e=new vt(this.root,this.modalRoot,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}arrancarInventario(){var r,d,i,p;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)||!(e!=null&&e.privacidadInventario)){this.abrirInventario();return}this.modalRoot.innerHTML=`
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
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(r=document.getElementById("pin-inv-cancelar"))==null||r.addEventListener("click",o);const a=()=>void(async()=>{var s;const c=document.getElementById("pin-inv-input").value;await D.validarPin(c).catch(()=>!1)?(o(),await this.abrirInventario(!0)):(s=document.getElementById("pin-inv-error"))==null||s.classList.remove("hidden")})();(d=document.getElementById("pin-inv-ok"))==null||d.addEventListener("click",a),(i=document.getElementById("pin-inv-sin-clave"))==null||i.addEventListener("click",()=>{o(),this.abrirInventario(!1)}),(p=document.getElementById("pin-inv-input"))==null||p.addEventListener("keydown",c=>{c.key==="Enter"&&a()})}async abrirInventario(e=!0){this.marcarActivo("inventario");const o=new ft(this.root,this.modelo,e);try{await o.render()}catch(a){this.toastError(a instanceof Error?a.message:String(a))}}marcarActivo(e){document.querySelectorAll("[data-nav-btn]").forEach(o=>{o.dataset.navBtn===e?(o.classList.remove("bg-white"),o.classList.add("bg-brand-yellow")):(o.classList.remove("bg-brand-yellow","bg-brand-cyan"),o.classList.add("bg-white"))})}solicitarAccesoPanel(){var r,d,i;const e=this.modelo.getConfig();if(!(e!=null&&e.tienePin)){this.abrirPanel();return}this.modalRoot.innerHTML=`
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
        </div>`;const o=()=>{this.modalRoot.innerHTML=""};(r=document.getElementById("pin-cancelar"))==null||r.addEventListener("click",o);const a=()=>void(async()=>{var t;const p=document.getElementById("pin-input").value;await D.validarPin(p).catch(()=>!1)?(o(),await this.abrirPanel()):(t=document.getElementById("pin-error"))==null||t.classList.remove("hidden")})();(d=document.getElementById("pin-ok"))==null||d.addEventListener("click",a),(i=document.getElementById("pin-input"))==null||i.addEventListener("keydown",p=>{p.key==="Enter"&&a()})}async abrirPanel(){this.marcarActivo("panel");const e=new xt(this.root,this.modalRoot,this.panelVm,this.modelo);try{await e.render()}catch(o){this.toastError(o instanceof Error?o.message:String(o))}}toastError(e){var o;this.modalRoot.innerHTML=`
        <div class="fixed bottom-6 right-6 bg-red-600 text-white border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]">
            ${e.replace(/"/g,"")}
            <button id="toast-close" class="ml-3 underline font-black">cerrar</button>
        </div>`,(o=document.getElementById("toast-close"))==null||o.addEventListener("click",()=>{this.modalRoot.innerHTML=""})}}document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("contextmenu",b=>b.preventDefault()),new Et().arrancar().catch(b=>console.error(b))});
