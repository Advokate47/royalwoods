'use strict';

let timeOut;
function goUp() {
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',20);
   } else clearTimeout(timeOut);
}

const headerMenu = document.querySelector('.header-menu'),
      aboutHeaderMenu = document.querySelector('#about'),
      portfolioHeaderMenu = document.querySelector('#portfolio'),
      priceHeaderMenu = document.querySelector('#price'),
      commentsHeaderMenu = document.querySelector('#comments'),
      projekts = document.querySelectorAll('.projekt');

const weddings = [
  {
    wedding: "wedding1",
    src: ["https://i.ibb.co/C96XQRT/1-8.jpg",
"https://i.ibb.co/RcrGJD8/1-10.jpg",
"https://i.ibb.co/DYjg6qT/1-13.jpg" ,
"https://i.ibb.co/qN8QbGB/1-22.jpg",
"https://i.ibb.co/xjbhMYV/1-29.jpg",
"https://i.ibb.co/ZcJVCGw/1-88.jpg",
"https://i.ibb.co/qrC4tyT/1-142.jpg",
"https://i.ibb.co/y8sx5tB/1-447.jpg",
"https://i.ibb.co/qmG1bRh/1-451.jpg" ,
"https://i.ibb.co/z4L222B/1-453.jpg" ,
"https://i.ibb.co/k3b2QnT/1-454.jpg",
"https://i.ibb.co/GPBPRNM/1-456.jpg" ,
"https://i.ibb.co/qs5m7RH/1-470.jpg" ,
"https://i.ibb.co/LzsnR7f/1-479.jpg" ,
"https://i.ibb.co/W6z1wxG/1-481.jpg",
"https://i.ibb.co/x6VbnsG/1-515.jpg" ,
"https://i.ibb.co/G9pHQ3g/1-518.jpg" ,
"https://i.ibb.co/K9jZGgK/1-536.jpg" ,
"https://i.ibb.co/LgQQQG0/1-545.jpg",
"https://i.ibb.co/BfFqTHT/1-620.jpg" ,
"https://i.ibb.co/f0C8TmH/1-1291.jpg" ,
"https://i.ibb.co/Z1Y0mCV/1.jpg" ],
    text: ["Алина и Владимир", "Эко-Ранчо, 2018", "Фото:Юлия Каптелова"]
  },
  {
    wedding: "wedding2",
    src: ["https://i.ibb.co/XbwCcJB/IMG-1617.jpg", 
"https://i.ibb.co/MyzD64J/IMG-1619.jpg" ,
"https://i.ibb.co/DM2PjG2/IMG-2054.jpg" ,
"https://i.ibb.co/r3DnmYD/IMG-2057.jpg" ,
"https://i.ibb.co/pryWs7t/IMG-2060.jpg" ,
"https://i.ibb.co/F0wNsr0/IMG-2063.jpg" ,
"https://i.ibb.co/m6mKwYd/IMG-2068.jpg" ,
"https://i.ibb.co/7SxfPJ3/IMG-2069.jpg" ,
"https://i.ibb.co/0t64nVY/IMG-2071.jpg" ,
"https://i.ibb.co/4drnGSY/IMG-2072.jpg" ,
"https://i.ibb.co/VWtLq3b/IMG-2078.jpg" ,
"https://i.ibb.co/09Z77CN/IMG-2079.jpg" ,
"https://i.ibb.co/hL3cCDV/IMG-2082.jpg" ,
"https://i.ibb.co/kMM59fK/IMG-2084.jpg" ,
"https://i.ibb.co/x61gt2y/IMG-2093.jpg" ,
"https://i.ibb.co/BfNfGCZ/IMG-2097.jpg" ,
"https://i.ibb.co/G9Y13hp/IMG-2098.jpg" ,
"https://i.ibb.co/qNGspGM/IMG-2103.jpg" ,
"https://i.ibb.co/vdgB4hV/IMG-2110.jpg" ,
"https://i.ibb.co/9N50Ymn/IMG-2113.jpg" ,
"https://i.ibb.co/d2F5kbv/IMG-2116.jpg" ,
"https://i.ibb.co/d2F5kbv/IMG-2116.jpg"
],
    text: ["Катя и Дима", "Корабль, 2018", "Фото:Юлия Каптелова"]
  }, 
  {
    wedding: "wedding3",
    src: ["https://i.ibb.co/KKM5JH2/1.jpg",
"https://i.ibb.co/qmgLBL6/IMG-4329.jpg",
"https://i.ibb.co/cc6NHn1/IMG-4331.jpg",
"https://i.ibb.co/VMY7kyY/IMG-4332.jpg",
"https://i.ibb.co/gtQrWtN/IMG-4333.jpg",
"https://i.ibb.co/xzZq1Ct/IMG-4334.jpg",
"https://i.ibb.co/PNCVL73/IMG-4378.jpg",
"https://i.ibb.co/H7nQmTD/IMG-4380.jpg",
"https://i.ibb.co/CwBd29f/IMG-4381.jpg",
"https://i.ibb.co/XW39WXk/IMG-4383.jpg",
"https://i.ibb.co/kq8nC8N/IMG-4384.jpg",
"https://i.ibb.co/HqXrdMv/IMG-4385.jpg",
"https://i.ibb.co/dWt1WK4/IMG-4386.jpg",
"https://i.ibb.co/r5s5F23/IMG-4459.jpg",
"https://i.ibb.co/st229hN/IMG-4461.jpg",
"https://i.ibb.co/CBzzVJ1/IMG-4462.jpg",
"https://i.ibb.co/9szf0wN/IMG-4463.jpg",
"https://i.ibb.co/pv69ZYT/IMG-4467.jpg",
"https://i.ibb.co/VLsyL4R/IMG-4472.jpg",
"https://i.ibb.co/qmvJ805/IMG-4474.jpg",
"https://i.ibb.co/S3x04nB/IMG-4475.jpg",
"https://i.ibb.co/cX8zCzC/IMG-4476.jpg",
"https://i.ibb.co/jfz1sxR/IMG-5251.jpg"],
    text: ["Алина и Владимир", "Ресторан 2018", "Фото:Юлия Каптелова"]
  },
  {
    wedding: "wedding4",
    src: ["https://i.ibb.co/VMNj1nJ/1.jpg",
"https://i.ibb.co/xSNytgB/IMG-4036.jpg",
"https://i.ibb.co/sWrRDP3/IMG-4037.jpg",
"https://i.ibb.co/NsY3NDY/IMG-4955.jpg",
"https://i.ibb.co/6cKCj2m/IMG-4957.jpg",
"https://i.ibb.co/g9V4RX8/IMG-4959.jpg",
"https://i.ibb.co/WWmxP4t/IMG-4960.jpg",
"https://i.ibb.co/0yqRKk3/IMG-4961.jpg",
"https://i.ibb.co/YBnw9PW/IMG-6685.jpg",
"https://i.ibb.co/Z86Fh1F/IMG-6687.jpg",
"https://i.ibb.co/9gG5R2k/IMG-6688.jpg",
"https://i.ibb.co/dbpx4Z8/IMG-6689.jpg",
"https://i.ibb.co/wMZzStz/IMG-6690.jpg"],
    text: ["Наталья Фриске", "Лес, 2019", "Фото:Юлия Каптелова"]
  },
  {
    wedding: "wedding5",
    src: ["https://i.ibb.co/QJqkkgx/1.jpg",
"https://i.ibb.co/nrKN4Ky/161ee9dd-e4f4-40c4-a5f0-3b2f4d973505.jpg",
"https://i.ibb.co/41CkvJF/IMG-3795.jpg",
"https://i.ibb.co/3ky3KNS/IMG-3799.jpg" ,
"https://i.ibb.co/yqK4G1p/IMG-3800.jpg",
"https://i.ibb.co/5TjNKwg/IMG-3802.jpg",
"https://i.ibb.co/JtYvFTc/IMG-3803.jpg",
"https://i.ibb.co/ry0gD6j/IMG-3804.jpg",
"https://i.ibb.co/vj3cBvy/IMG-3805.jpg",
"https://i.ibb.co/ZJ8DZJW/IMG-3806.jpg",
"https://i.ibb.co/Gk272BL/IMG-3807.jpg",
"https://i.ibb.co/GnszMg0/IMG-3808.jpg",
"https://i.ibb.co/swbmPX9/IMG-4662.jpg",
"https://i.ibb.co/XsR8rDB/IMG-4663.jpg",
"https://i.ibb.co/sskM5pv/IMG-4664.jpg",
"https://i.ibb.co/ggsvXr9/IMG-4665.jpg",
"https://i.ibb.co/Sn4wK4D/IMG-4666.jpg",
"https://i.ibb.co/ZNCzJ8L/IMG-4667.jpg",
"https://i.ibb.co/r7xZqcz/IMG-4668.jpg",
"https://i.ibb.co/NNFPD1H/IMG-4669.jpg",
"https://i.ibb.co/JdxvqQk/IMG-4670.jpg",
"https://i.ibb.co/34Qf3mx/IMG-4671.jpg",
"https://i.ibb.co/mTHD5Wx/IMG-4672.jpg",
"https://i.ibb.co/4VFrZ5h/IMG-4673.jpg",
"https://i.ibb.co/KxLTvJn/IMG-4674.jpg"],
    text: ["Алина и Владимир", "Нептун, 2019", "Фото:Юлия Каптелова"]
  },
  {
    wedding: "wedding6",
    src: ["https://i.ibb.co/hVcB66m/IMG-0468.jpg" ,
"https://i.ibb.co/sKtBfy0/IMG-2281.jpg",
"https://i.ibb.co/Zx7VHg6/IMG-2295.jpg",
"https://i.ibb.co/Q9pT27y/IMG-2296.jpg",
"https://i.ibb.co/fFm2TpG/IMG-2298.jpg",
"https://i.ibb.co/94Fff4r/IMG-2299.jpg",
"https://i.ibb.co/tCgyLkw/IMG-2300.jpg",
"https://i.ibb.co/9s6D1MT/IMG-3410.jpg",
"https://i.ibb.co/NpPRGQF/IMG-4202.jpg",
"https://i.ibb.co/jMTSg4j/IMG-6850.jpg",
"https://i.ibb.co/GPFjLhg/IMG-6851.jpg",
"https://i.ibb.co/TWBp1kt/IMG-6852.jpg" ,
"https://i.ibb.co/3StdjJc/IMG-6853.jpg",
"https://i.ibb.co/RPDwgR4/IMG-6993.jpg",
"https://i.ibb.co/LvZKhwC/IMG-6994.jpg",
"https://i.ibb.co/b6M2s4R/IMG-6995.jpg",
"https://i.ibb.co/2q08pm6/IMG-8765.jpg"],
    text: ["Алина и Владимир", "Кафе, 2018", "Фото:Юлия Каптелова"]
  },
  {
    wedding: "wedding7",
    src: ["https://i.ibb.co/tz4dY4b/1.jpg",
"https://i.ibb.co/qmjjYLn/2ae96b96-f0d6-42a9-b024-b81aca43721a.jpg",
"https://i.ibb.co/xJvZm1D/2b467d37-8e07-4f9c-bc2a-64d1c16deb66.jpg",
"https://i.ibb.co/Y8wtB86/3cbac9fb-1dd0-40b7-aeb0-617e3fe0ff57.jpg",
"https://i.ibb.co/1fJ8VZw/4eaf9dd7-54cf-4244-aab4-bb04338af30c.jpg",
"https://i.ibb.co/P9ZbtKs/6e3c1eeb-4a9a-498a-998f-c665a358b809.jpg",
"https://i.ibb.co/1RMzwcL/7d5519e2-ec57-48aa-8133-8c6721ad0ec0.jpg",
"https://i.ibb.co/HKmgWNz/7e2c5238-56aa-49f1-8983-dc2027a22f04.jpg",
"https://i.ibb.co/xH427Fk/008b88d7-0cef-4d71-abfa-c1781dd3b9a0.jpg",
"https://i.ibb.co/SKdBdxT/40bfcf3e-7348-4a82-8187-9f7bd7192976.jpg",
"https://i.ibb.co/DGt0VRJ/61a2b315-d7da-48e9-bd1d-b3253a5ac43b.jpg",
"https://i.ibb.co/TBXyQDy/75f7688b-0156-441c-849d-439ec05f74fb.jpg",
"https://i.ibb.co/HT3g1Yk/0125b6fb-dd3f-4c80-9553-ee7ff606daa3.jpg",
"https://i.ibb.co/Qn7srCT/201eef8d-6a77-4db7-a8a3-41c85c280eae.jpg",
"https://i.ibb.co/GFRYh5G/293e9e8e-8e33-43c8-bc6c-9cc1193ab3ea.jpg",
"https://i.ibb.co/ctBb0MW/709f16d9-540b-4fed-a811-3d8e7f612fce.jpg",
"https://i.ibb.co/gPPJxnS/789d1557-392b-406f-a2c6-3ca4f4194267.jpg",
"https://i.ibb.co/Wvd4Nx4/8499e143-6911-4b3c-a7c7-aa27ff1594b2.jpg",
"https://i.ibb.co/FgFf8K8/330488a5-47a5-498d-9d40-30430226ea48.jpg",
"https://i.ibb.co/253tdnT/5056201a-2fcb-4267-8cdd-17f1ad2afba7.jpg",
"https://i.ibb.co/VS5MhgR/9343931c-edd1-4afe-9357-cdb7f5a6cf41.jpg",
"https://i.ibb.co/98GMFtf/49522479-7ab8-4a6d-a5e5-ab3fd899174f.jpg",
"https://i.ibb.co/QQWhYGq/a65acf25-5d99-4928-aae9-7a44997c0a82.jpg",
"https://i.ibb.co/d4sTF28/c9e73700-5714-411b-b6d5-ca144497887c.jpg",
"https://i.ibb.co/1RgzRLd/ca15eed7-0873-4285-a4a8-fbae7865bae1.jpg",
"https://i.ibb.co/YZq5KfS/e5c308e5-3bcf-43d3-a749-bc82be2ce29e.jpg",
"https://i.ibb.co/sQx1XC2/e36523fd-fefe-498b-85cf-be439447305e.jpg",
"https://i.ibb.co/0mcjdfq/f9f3d4a1-e142-4591-a8c1-20febc91edba.jpg",
"https://i.ibb.co/S5285P6/f782f5e5-9dfd-47dd-bff4-6a38cd66f0d5.jpg",
"https://i.ibb.co/r5KSCyH/fe32aea8-8d23-40b9-9133-2ac48c3e77ae.jpg"],
    text: ["Алина и Владимир", "Отель, 2018", "Фото:Юлия Каптелова"]
  },
  {
    wedding: "wedding8",
    src: ["https://i.ibb.co/pX80qLv/IMG-3903.jpg",
"https://i.ibb.co/ykN8GPt/IMG-3988.jpg",
"https://i.ibb.co/s28h7pG/IMG-4386.jpg",
"https://i.ibb.co/yfsNjV1/IMG-4387.jpg",
"https://i.ibb.co/G93LbG0/IMG-4388.jpg",
"https://i.ibb.co/nfTsGgC/IMG-4392.jpg",
"https://i.ibb.co/CmGpBxr/IMG-4393.jpg",
"https://i.ibb.co/dQqtdGK/IMG-6977.jpg",
"https://i.ibb.co/RT720pj/IMG-6978.jpg",
"https://i.ibb.co/bJh0z98/IMG-6979.jpg",
"https://i.ibb.co/YQx8nhT/IMG-6980.jpg",
"https://i.ibb.co/t4DksFC/IMG-6982.jpg",
"https://i.ibb.co/85WQDry/IMG-6983.jpg"],
    text: ["Модель...", "Парк, 2019", "Фото:Юлия Каптелова"]
  },
  {
    wedding: "wedding9",
    src: ["https://i.ibb.co/x8wX587/IMG-0637.jpg",
"https://i.ibb.co/BgPNzSM/IMG-0639.jpg",
"https://i.ibb.co/w0Nnfd3/IMG-1924.jpg",
"https://i.ibb.co/8xXxhgK/IMG-1925.jpg",
"https://i.ibb.co/ggzBTWY/IMG-2284.jpg",
"https://i.ibb.co/jggqJ4r/IMG-2285.jpg",
"https://i.ibb.co/zGyXMT3/IMG-2286.jpg",
"https://i.ibb.co/dQ41cnx/IMG-2287.jpg",
"https://i.ibb.co/VVLKzFK/IMG-2291.jpg",
"https://i.ibb.co/z8rRSXF/IMG-3409.jpg",
"https://i.ibb.co/txhX1TB/IMG-3947.jpg",
"https://i.ibb.co/GCgh64S/IMG-4745.jpg",
"https://i.ibb.co/HHWSybp/IMG-4746.jpg",
"https://i.ibb.co/CvyFcvm/IMG-4747.jpg",
"https://i.ibb.co/2tKHNNL/IMG-4748.jpg",
"https://i.ibb.co/yPMT864/IMG-6835.jpg"],
    text: ["Алина и Владимир", "Адмирал, 2018", "Фото:Юлия Каптелова"]
  }
];


function addHidden(event) {
  event.preventDefault();
  
  if (document.querySelector('.allGallery') !== null) {
    document.querySelector('.column-text').remove();
    const parent = document.querySelector('.allGallery');
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    document.querySelector('.allGallery').remove();
  }
  document.querySelector('.underline').classList.remove ('underline')
  event.target.classList.add('underline');
  
  if (event.target.id === 'about') {
    document.querySelector('.columns-photo').classList.add("hidden");
    document.querySelector('.price').classList.add("hidden");
    document.querySelector('.comments').classList.add("hidden");
    document.querySelector('.about').classList.remove("hidden")
  } else if (event.target.id === 'portfolio') {
    document.querySelector('.columns-photo').classList.remove("hidden");
    document.querySelector('.price').classList.add("hidden");
    document.querySelector('.comments').classList.add("hidden");
    document.querySelector('.about').classList.add("hidden")
  } else if (event.target.id === 'price') {
    document.querySelector('.columns-photo').classList.add("hidden");
    document.querySelector('.price').classList.remove("hidden");
    document.querySelector('.comments').classList.add("hidden");
    document.querySelector('.about').classList.add("hidden")
  } else if (event.target.id === 'comments') {
    document.querySelector('.columns-photo').classList.add("hidden");
    document.querySelector('.price').classList.add("hidden");
    document.querySelector('.comments').classList.remove("hidden");
    document.querySelector('.about').classList.add("hidden")  }
}


aboutHeaderMenu.addEventListener('click', addHidden);
portfolioHeaderMenu.addEventListener('click', addHidden);
priceHeaderMenu.addEventListener('click', addHidden);
commentsHeaderMenu.addEventListener('click', addHidden);
document.querySelector('.fotter-logo').addEventListener('click', ()=> {event.preventDefault(); goUp()});


function openGallery (event) {
  event.preventDefault();
  
  goUp();
  document.querySelector('.columns-photo').classList.add("hidden");
  const idDiv = event.currentTarget.id;
  let weddingGallery = weddings.find(item => item.wedding == idDiv);
  let textArr = weddingGallery.text;
  
  let srcArr = weddingGallery.src;
  const imgFragment0 = textArr.map(createTextNode).reduce((fragment, currentValue) => {
    fragment.appendChild(currentValue);
    return fragment;
}, document.createDocumentFragment());
  
 
  var coppyArray = srcArr.slice()
  
  const newArr = splitToChunks(coppyArray, 3);
  
  const arr1 = newArr[0],
        arr2 = newArr[1],
        arr3 = newArr[2];
  
  const imgFragment1 = arr1.map(createImgNode).reduce((fragment, currentValue) => {
    fragment.appendChild(currentValue);
    return fragment;
}, document.createDocumentFragment());
  
  const imgFragment2 = arr2.map(createImgNode).reduce((fragment, currentValue) => {
    fragment.appendChild(currentValue);
    return fragment;
}, document.createDocumentFragment());
  
  const imgFragment3 = arr3.map(createImgNode).reduce((fragment, currentValue) => {
    fragment.appendChild(currentValue);
    return fragment;
}, document.createDocumentFragment());
  let fragment = document.createDocumentFragment();
  const div0 = el('div', {class: 'column-text'}),
        div1 = el('div', {class: 'column-gallery'}),
        div2 = el('div', {class: 'column-gallery'}),
        div3 = el('div', {class: 'column-gallery'}),
        div4 = el('div', {class: 'allGallery'});
  
  div0.appendChild(imgFragment0); 
  div1.appendChild(imgFragment1);
  div2.appendChild(imgFragment2);
  div3.appendChild(imgFragment3);
  fragment.appendChild(div1);
  fragment.appendChild(div2);
  fragment.appendChild(div3);
  div4.append(fragment);
  document.querySelector('.gallery').append(div0);
  document.querySelector('.gallery').append(div4);
  
}

for (let i = 0; i < projekts.length; i++) {
    projekts[i].addEventListener('click', openGallery);
  }

function el(tagName, attributes, children) {
  const element = document.createElement(tagName);
  if (typeof attributes === 'object') {
    Object.keys(attributes).forEach(i => element
    .setAttribute(i, attributes[i]));
  }
  if (typeof children === 'string') {
    element.textContent = children;
  } else if (children instanceof Array) {
    children.forEach(child => element.appendChild(child));
  }
  return element;
}

function createImgNode(arr) {
  return el ('img', {src: arr})
}

function createTextNode(arr) {
  return el ('p', {class: 'text-wedding'}, arr)
}

function splitToChunks(array, parts) {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}



