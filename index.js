    // =========================
    // 1. PRICE FORMAT (EN / AR)
    // =========================
    function toArabicDigits(num) {
      return num
        .toString()
        .replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
    }

    function formatCurrencyEn(n){
      return new Intl.NumberFormat("en-EG", {
        style: "currency",
        currency: "EGP",
        minimumFractionDigits: 2
      }).format(n);
    }

    function formatCurrencyAr(n){
      const rounded = Math.round(n);
      return toArabicDigits(rounded) + " ج.م";
    }

    // =========================
    // 2. TEXT / TRANSLATIONS
    // =========================
    const TEXT = {
      en: {
        brand: "L&N",
        searchPlaceholder: "Search clothes, colors…",
        cartBtn: "Cart",
        sort: {
          featured: "Featured",
          priceAsc: "Price: Low → High",
          priceDesc: "Price: High → Low",
          rating: "Top Rated",
        },
        heroTitle: "New Season. Fresh Fits.",
        heroDesc:
          "Minimal looks, statement details. Curated for everyday confidence.",
        quickFind: "Quick Find",
        quickSearchPlaceholder: "Try 'bag', 'oversized blazer', 'dress'…",
        sizeLabel: "Size",
        productsHeader: "Products",
        clearCategory: "Clear Category",
        noResults: "No items match your filters.",
        cartTitle: "Your Cart",
        cartEmpty: "Your cart is empty.",
        subtotal: "Subtotal",
        shipping: "Shipping",
        total: "Total",
        checkout: "Checkout",
        sizeWordInCart: "Size",
        remove: "Remove",
        footerAbout:
          "Modern pieces, clean silhouettes, neutral tones. This is a demo storefront.",
        supportTitle: "Support",
        supportShip: "Shipping & Returns",
        supportSize: "Size Guide",
        supportContact: "Contact Us",
        newsletterTitle: "Newsletter",
        newsletterPlaceholder: "Enter your email",
        newsletterBtn: "Join",
        footerCopy: "All rights reserved.",
        addToCartBtn: "🛒 Add to cart",
        langToggleBtn: "عربي",
        categoriesLabel: {
          Clothing: "Clothing",
          Suits: "Sets / Suits",
          Bags: "Bags",
          Dresses: "Dresses",
        },
      },
      ar: {
        brand: "L&N",
        searchPlaceholder: "دوري على منتج أو لون…",
        cartBtn: "السلة",
        sort: {
          featured: "مميز",
          priceAsc: "السعر من الأقل للأعلى",
          priceDesc: "السعر من الأعلى للأقل",
          rating: "أعلى تقييم",
        },
        heroTitle: "موسم جديد. ستايلات جديدة.",
        heroDesc:
          "ستايلات هادية بألوان نيوترال، لوكات عملية وثقة كل يوم.",
        quickFind: "بحث سريع",
        quickSearchPlaceholder: "جرّبي 'شنطة'، 'بليزر اوفر سايز'، 'فستان'…",
        sizeLabel: "المقاس",
        productsHeader: "المنتجات",
        clearCategory: "مسح الفئة",
        noResults: "مفيش منتجات مطابقة للفلاتر.",
        cartTitle: "السلة",
        cartEmpty: "السلة فاضية.",
        subtotal: "المجموع الفرعي",
        shipping: "الشحن",
        total: "الإجمالي",
        checkout: "تأكيد الطلب",
        sizeWordInCart: "المقاس",
        remove: "حذف",
        footerAbout:
          "ستايلات بسيطة وعصرية بألوان هادية. ده نموذج متجر للتجربة.",
        supportTitle: "الدعم",
        supportShip: "الشحن والاسترجاع",
        supportSize: "جدول المقاسات",
        supportContact: "تواصل معنا",
        newsletterTitle: "اشتركي في التحديثات",
        newsletterPlaceholder: "اكتبي الإيميل",
        newsletterBtn: "اشتركي",
        footerCopy: "جميع الحقوق محفوظة.",
        addToCartBtn: "🛒 أضف للسلة",
        langToggleBtn: "English",
        categoriesLabel: {
          Clothing: "ملابس",
          Suits: "أطقم / سوتس",
          Bags: "شنط",
          Dresses: "فساتين",
        },
      },
    };

    // =========================
    // 3. PRODUCTS DATA
    // =========================
    // صور اختيارناها من نفس ستايل Zara / H&M / Shein (بليزر أوفر سايز، سليب دريس ساتان، شنطة كتف structured)
    const PRODUCTS = [
      // Dresses
      {
        id: "d1",
        name_en: "Minimal Satin Slip Dress (H&M insp.)",
        name_ar: "فستان ساتان سيمبل",
        price: 2100,
        rating: 4.9,
        category: "Dresses",
        sizes: ["XS","S","M","L","XL","2XL","3XL"],
        colors: ["Champagne", "Black"],
        image: "images/Minimal Satin Slip Dress.png",
        tags: ["New"],
      },
      {
        id: "d2",
        name_en: "Soft Knit Bodycon Dress (H&M insp.)",
        name_ar: "فستان سيمبل تريكو",
        price: 1950,
        rating: 4.6,
        category: "Dresses",
        sizes: ["XS","S","M","L","XL","2XL","3XL"],
        colors: ["Beige"],
        image: "images/Soft Knit Bodycon Dress.png",
        tags: ["Trending"],
      },

      // Suits / Sets
      {
        id: "sA",
        name_en: "Oversized Blazer Set (Zara style)",
        name_ar: "طقم بليزر اوفر سايز",
        price: 2700,
        rating: 4.8,
        category: "Suits",
        sizes: ["XS","S","M","L","XL","2XL","3XL"],
        colors: ["Taupe"],
        image: "images/Oversized Blazer Set.png",
        tags: ["Best Seller"],
      },
      {
        id: "sB",
        name_en: "Dark Utility Denim Set (Zara denim vibe)",
        name_ar: "طقم جينز غامق عملي",
        price: 2500,
        rating: 4.7,
        category: "Suits",
        sizes: ["XS","S","M","L","XL","2XL","3XL"],
        colors: ["Dark Denim"],
        image: "images/Dark Utility Denim Set.png",
        tags: ["Denim"],
      },

      // Bags
      {
        id: "bNew1",
        name_en: "Structured Shoulder Bag (Shein insp.)",
        name_ar: "شنطة كتف فورمال",
        price: 980,
        rating: 4.6,
        category: "Bags",
        sizes: ["One Size"],
        colors: ["Black", "Brown"],
        image: "images/Structured Shoulder Bag.png",
        tags: ["Hot"],
      },
      {
        id: "bNew2",
        name_en: "Soft Everyday Tote (Shein insp.)",
        name_ar: "شنطة كتف يومي",
        price: 900,
        rating: 4.5,
        category: "Bags",
        sizes: ["One Size"],
        colors: ["Cream", "Chocolate"],
        image: "images/Soft Everyday Tote.png",
        tags: ["New Color"],
      },

      // Clothing basics
      {
        id: "c1",
        name_en: "Classic White Tee (Basic)",
        name_ar: "تيشيرت أبيض كلاسيك",
        price: 650,
        rating: 4.5,
        category: "Clothing",
        sizes: ["XS","S","M","L","XL","2XL","3XL"],
        colors: ["White"],
        image: "images/Classic White Tee.png",
        tags: ["Essential"],
      },
      {
        id: "c2",
        name_en: "Wide-Leg Pants (Beige, Zara vibe)",
        name_ar: "بنطلون واسع بيچ",
        price: 1200,
        rating: 4.7,
        category: "Clothing",
        sizes: ["XS","S","M","L","XL","2XL","3XL"],
        colors: ["Beige"],
        image: "images/Wide-Leg Pants.png",
        tags: ["Trending"],
      },
    ];

    const CATEGORIES = ["All", "Clothing", "Suits", "Bags", "Dresses"];

    // المقاسات من XS لحد 3XL + One Size للشنط
    const SIZE_OPTIONS = ["XS","S","M","L","XL","2XL","3XL","One Size"];

    // =========================
    // 4. STATE
    // =========================
    let state = {
      query: "",
      category: "All",
      sizeFilter: new Set(),
      sort: "featured",
      favorites: {},
      cart: [],
      lang: "en", // "en" or "ar"
    };

    // =========================
    // 5. HELPERS
    // =========================
    function t(key) {
      return TEXT[state.lang][key];
    }

    function formatPrice(n){
      return state.lang === "en" ? formatCurrencyEn(n) : formatCurrencyAr(n);
    }

    function productName(p) {
      return state.lang === "en" ? p.name_en : p.name_ar;
    }

    function categoryLabel(cat){
      return TEXT[state.lang].categoriesLabel[cat] || cat;
    }

    function applyFiltersSort() {
      const q = state.query.toLowerCase().trim();

      let data = PRODUCTS.filter(p => {
        const searchable = [
          p.name_en,
          p.name_ar,
          p.category,
          ...(p.colors || []),
          ...(p.tags || []),
        ]
        .join(" ")
        .toLowerCase();

        if (q && !searchable.includes(q)) return false;

        if (state.category !== "All" && p.category !== state.category) return false;

        if (state.sizeFilter.size > 0) {
          const match = p.sizes.some(s => state.sizeFilter.has(s));
          if (!match) return false;
        }

        return true;
      });

      switch (state.sort) {
        case "price-asc":
          data.sort((a,b)=>a.price-b.price);
          break;
        case "price-desc":
          data.sort((a,b)=>b.price-a.price);
          break;
        case "rating":
          data.sort((a,b)=>b.rating-a.rating);
          break;
        default:
          break;
      }

      return data;
    }

    // =========================
    // 6. UI BUILDERS
    // =========================
    function rebuildProductsUI() {
      const productsGrid = document.getElementById("productsGrid");
      const noResultsBox = document.getElementById("noResultsBox");
      const itemsCountPill = document.getElementById("itemsCountPill");

      const list = applyFiltersSort();

      productsGrid.innerHTML = "";
      if (list.length === 0) {
        noResultsBox.classList.remove("hidden");
        noResultsBox.textContent = t("noResults");
      } else {
        noResultsBox.classList.add("hidden");
      }

      itemsCountPill.textContent = list.length + " items";

      list.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        const imgWrap = document.createElement("div");
        imgWrap.className = "card-img-wrap";

        const img = document.createElement("img");
        img.src = p.image;
        img.alt = productName(p);
        imgWrap.appendChild(img);

        if (p.tags && p.tags.length){
          const tagRow = document.createElement("div");
          tagRow.className = "tag-row";
          p.tags.forEach(tg=>{
            const badge = document.createElement("div");
            badge.className = "tag-pill";
            badge.textContent = tg;
            tagRow.appendChild(badge);
          });
          imgWrap.appendChild(tagRow);
        }

        const favBtn = document.createElement("button");
        favBtn.className = "fav-btn " + (state.favorites[p.id] ? "faved":"");
        favBtn.innerHTML = state.favorites[p.id] ? "❤" : "♡";
        favBtn.addEventListener("click", ()=>{
          state.favorites[p.id] = !state.favorites[p.id];
          rebuildProductsUI();
        });
        imgWrap.appendChild(favBtn);

        const body = document.createElement("div");
        body.className = "card-body";

        const title = document.createElement("div");
        title.className = "prod-name";
        title.textContent = productName(p);
        body.appendChild(title);

        const row = document.createElement("div");
        row.className = "row-between";

        const ratingDiv = document.createElement("div");
        ratingDiv.className = "rating";
        ratingDiv.innerHTML =
          "★".repeat(Math.floor(p.rating)) +
          "<span class='num'> " + p.rating.toFixed(1) + "</span>";

        const price = document.createElement("div");
        price.className = "price-text";
        price.textContent = formatPrice(p.price);

        row.appendChild(ratingDiv);
        row.appendChild(price);

        body.appendChild(row);

        const cat = document.createElement("div");
        cat.className = "prod-cat";
        cat.textContent = categoryLabel(p.category);
        body.appendChild(cat);

        const addBtn = document.createElement("button");
        addBtn.className = "add-cart-btn";
        addBtn.textContent = TEXT[state.lang].addToCartBtn;
        addBtn.addEventListener("click", ()=>{
          addToCart(p);
          openCart();
        });
        body.appendChild(addBtn);

        card.appendChild(imgWrap);
        card.appendChild(body);
        productsGrid.appendChild(card);
      });

      const clearCategoryBtn = document.getElementById("clearCategoryBtn");
      if (state.category === "All") {
        clearCategoryBtn.style.display = "none";
      } else {
        clearCategoryBtn.style.display = "flex";
      }
      
    }

    function rebuildCategoryChips() {
      const chips = document.getElementById("categoryChips");
      const categorySelect = document.getElementById("categorySelect");
      chips.innerHTML = "";
      categorySelect.innerHTML = "";

      CATEGORIES.forEach(cat => {
        if (cat !== "All") {
          const b = document.createElement("button");
          b.className = "chip-btn";
          b.textContent = categoryLabel(cat);
          b.addEventListener("click", ()=>{
            state.category = cat;
            rebuildProductsUI();
            syncDropdowns();
          });
          chips.appendChild(b);
        }

        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = categoryLabel(cat);
        categorySelect.appendChild(opt);
      });

      categorySelect.value = state.category;
    }

    function rebuildSizeGrid() {
      const sizeGrid = document.getElementById("sizeGrid");
      sizeGrid.innerHTML = "";
      SIZE_OPTIONS.forEach(sz => {
        const lbl = document.createElement("label");
        lbl.className = "size-item";

        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = state.sizeFilter.has(sz);

        cb.addEventListener("change", ()=>{
          if (cb.checked) {
            state.sizeFilter.add(sz);
          } else {
            state.sizeFilter.delete(sz);
          }
          rebuildProductsUI();
        });

        const txt = document.createElement("span");
        txt.textContent = sz;

        lbl.appendChild(cb);
        lbl.appendChild(txt);
        sizeGrid.appendChild(lbl);
      });
    }

    function rebuildStaticText() {
      // navbar + search
      document.getElementById("brandName").textContent = TEXT[state.lang].brand;
      document.getElementById("searchInput").placeholder = TEXT[state.lang].searchPlaceholder;
      document.getElementById("cartBtnLabel").textContent = TEXT[state.lang].cartBtn;

      // lang toggle btn
      document.getElementById("langToggleBtn").textContent = TEXT[state.lang].langToggleBtn;

      // sort dropdowns
      document.getElementById("sortSelect").options[0].text = TEXT[state.lang].sort.featured;
      document.getElementById("sortSelect").options[1].text = TEXT[state.lang].sort.priceAsc;
      document.getElementById("sortSelect").options[2].text = TEXT[state.lang].sort.priceDesc;
      document.getElementById("sortSelect").options[3].text = TEXT[state.lang].sort.rating;

      document.getElementById("sortSelect2").options[0].text = TEXT[state.lang].sort.featured;
      document.getElementById("sortSelect2").options[1].text = TEXT[state.lang].sort.priceAsc;
      document.getElementById("sortSelect2").options[2].text = TEXT[state.lang].sort.priceDesc;
      document.getElementById("sortSelect2").options[3].text = TEXT[state.lang].sort.rating;

      // hero
      document.getElementById("heroTitle").textContent = TEXT[state.lang].heroTitle;
      document.getElementById("heroDesc").textContent = TEXT[state.lang].heroDesc;

      document.getElementById("quickFindTitle").textContent = TEXT[state.lang].quickFind;
      document.getElementById("quickSearchInput").placeholder = TEXT[state.lang].quickSearchPlaceholder;

      document.getElementById("sizeLabel").textContent = TEXT[state.lang].sizeLabel;

      // products header
      document.getElementById("productsHeader").textContent = TEXT[state.lang].productsHeader;
      document.getElementById("clearCategoryText").textContent = TEXT[state.lang].clearCategory;

      // cart area text
      document.getElementById("cartTitle").textContent = TEXT[state.lang].cartTitle;
      document.getElementById("cartEmptyMsg").textContent = TEXT[state.lang].cartEmpty;
      document.getElementById("subtotalLabel").textContent = TEXT[state.lang].subtotal;
      document.getElementById("shippingLabel").textContent = TEXT[state.lang].shipping;
      document.getElementById("totalLabel").textContent = TEXT[state.lang].total;
      document.getElementById("checkoutBtn").textContent = TEXT[state.lang].checkout;

      // footer
      document.getElementById("footerAbout").textContent = TEXT[state.lang].footerAbout;
      document.getElementById("supportTitle").textContent = TEXT[state.lang].supportTitle;
      document.getElementById("supportShip").textContent = TEXT[state.lang].supportShip;
      document.getElementById("supportSize").textContent = TEXT[state.lang].supportSize;
      document.getElementById("supportContact").textContent = TEXT[state.lang].supportContact;
      document.getElementById("newsletterTitle").textContent = TEXT[state.lang].newsletterTitle;
      document.getElementById("newsletterInput").placeholder = TEXT[state.lang].newsletterPlaceholder;
      document.getElementById("newsletterBtn").textContent = TEXT[state.lang].newsletterBtn;
      document.getElementById("footerCopy").textContent = TEXT[state.lang].footerCopy + " • " + TEXT[state.lang].brand;
    }

    function rebuildCartUI() {
      const cartItemsContainer = document.getElementById("cartItemsContainer");
      const cartEmptyMsg = document.getElementById("cartEmptyMsg");
      const cartCount = document.getElementById("cartCount");
      const {subtotal, shipping, total} = calcTotals();

      cartItemsContainer.innerHTML = "";
      if (state.cart.length === 0) {
        cartEmptyMsg.classList.remove("hidden");
        cartItemsContainer.appendChild(cartEmptyMsg);
        cartCount.classList.add("hidden");
      } else {
        cartEmptyMsg.classList.add("hidden");
        cartCount.classList.remove("hidden");
        cartCount.textContent = state.cart.length;

        state.cart.forEach((it, index)=>{
          const wrap = document.createElement("div");
          wrap.className = "cart-item";

          const imgBox = document.createElement("div");
          imgBox.className = "cart-item-img";
          const im = document.createElement("img");
          im.src = it.image;
          im.alt = productName(it);
          imgBox.appendChild(im);

          const main = document.createElement("div");
          main.className = "cart-item-main";

          const top = document.createElement("div");
          top.className = "cart-item-top";
          top.textContent = productName(it);

          const sub = document.createElement("div");
          sub.className = "cart-item-sub";
          sub.textContent =
            formatPrice(it.price) +
            " • " +
            TEXT[state.lang].sizeWordInCart +
            ": " +
            it.size;

          const qtyRow = document.createElement("div");
          qtyRow.className = "qty-row";

          const minusBtn = document.createElement("button");
          minusBtn.className = "qty-btn";
          minusBtn.textContent = "−";
          minusBtn.addEventListener("click", ()=>{
            updateQty(index,-1);
          });

          const qtyVal = document.createElement("span");
          qtyVal.textContent = it.qty;

          const plusBtn = document.createElement("button");
          plusBtn.className = "qty-btn";
          plusBtn.textContent = "+";
          plusBtn.addEventListener("click", ()=>{
            updateQty(index,1);
          });

          qtyRow.appendChild(minusBtn);
          qtyRow.appendChild(qtyVal);
          qtyRow.appendChild(plusBtn);

          main.appendChild(top);
          main.appendChild(sub);
          main.appendChild(qtyRow);

          const side = document.createElement("div");
          side.className = "cart-item-side";

          const priceDiv = document.createElement("div");
          priceDiv.className = "cart-item-price";
          priceDiv.textContent = formatPrice(it.price * it.qty);

          const rm = document.createElement("button");
          rm.className = "remove-btn";
          rm.textContent = TEXT[state.lang].remove;
          rm.addEventListener("click", ()=>{
            removeCartItem(index);
          });

          side.appendChild(priceDiv);
          side.appendChild(rm);

          wrap.appendChild(imgBox);
          wrap.appendChild(main);
          wrap.appendChild(side);

          cartItemsContainer.appendChild(wrap);
        });
      }

      document.getElementById("subtotalVal").textContent = formatPrice(subtotal);
      document.getElementById("shippingVal").textContent = state.cart.length
        ? (shipping === 0 ? (state.lang === "en" ? "Free" : "مجاني") : formatPrice(shipping))
        : "—";
      document.getElementById("totalVal").textContent = formatPrice(total);
    }

    function syncDropdowns() {
      document.getElementById("sortSelect").value = state.sort;
      document.getElementById("sortSelect2").value = state.sort;
      document.getElementById("categorySelect").value = state.category;
      document.getElementById("searchInput").value = state.query;
      document.getElementById("quickSearchInput").value = state.query;
    }

    // =========================
    // 7. CART LOGIC
    // =========================
    function addToCart(product) {
      const chosenSize = product.sizes && product.sizes.length ? product.sizes[0] : "One Size";

      const idx = state.cart.findIndex(
        it => it.id === product.id && it.size === chosenSize
      );
      if (idx >= 0) {
        state.cart[idx].qty += 1;
      } else {
        state.cart.push({
          ...product,
          size: chosenSize,
          qty: 1
        });
      }
      rebuildCartUI();
    }

    function updateQty(itemIndex, delta) {
      state.cart[itemIndex].qty += delta;
      if (state.cart[itemIndex].qty < 1) {
        state.cart[itemIndex].qty = 1;
      }
      rebuildCartUI();
    }

    function removeCartItem(itemIndex) {
      state.cart.splice(itemIndex,1);
      rebuildCartUI();
    }

    function calcTotals() {
      let subtotal = 0;
      state.cart.forEach(it=>{
        subtotal += it.qty * it.price;
      });
      const shipping = state.cart.length ? (subtotal > 100 ? 0 : 100) : 0;
      const total = subtotal + (state.cart.length ? shipping : 0);
      return {subtotal, shipping, total};
    }

    // =========================
    // 8. EVENTS
    // =========================
    function bindEvents() {
      const searchInput = document.getElementById("searchInput");
      const quickSearchInput = document.getElementById("quickSearchInput");

      const sortSelect = document.getElementById("sortSelect");
      const sortSelect2 = document.getElementById("sortSelect2");

      const categorySelect = document.getElementById("categorySelect");

      const clearCategoryBtn = document.getElementById("clearCategoryBtn");

      const openCartBtn = document.getElementById("openCartBtn");
      const closeCartBtn = document.getElementById("closeCartBtn");
      const cartOverlay = document.getElementById("cartOverlay");

      const langToggleBtn = document.getElementById("langToggleBtn");

      function onSearchChange(e){
        state.query = e.target.value;
        rebuildProductsUI();
        syncDropdowns();
      }
      searchInput.addEventListener("input", onSearchChange);
      quickSearchInput.addEventListener("input", onSearchChange);

      function onSortChange(e){
        state.sort = e.target.value;
        rebuildProductsUI();
        syncDropdowns();
      }
      sortSelect.addEventListener("change", onSortChange);
      sortSelect2.addEventListener("change", onSortChange);

      categorySelect.addEventListener("change", e=>{
        state.category = e.target.value;
        rebuildProductsUI();
        syncDropdowns();
      });

      clearCategoryBtn.addEventListener("click", ()=>{
        state.category = "All";
        rebuildProductsUI();
        syncDropdowns();
      });

      openCartBtn.addEventListener("click", openCart);
      closeCartBtn.addEventListener("click", closeCart);

      cartOverlay.addEventListener("click", (e)=>{
        if(e.target === cartOverlay){
          closeCart();
        }
      });

      langToggleBtn.addEventListener("click", ()=>{
        state.lang = state.lang === "en" ? "ar" : "en";
        rebuildStaticText();
        rebuildCategoryChips();
        rebuildProductsUI();
        rebuildCartUI();
        syncDropdowns();
      });
    }

    function openCart(){
      document.getElementById("cartOverlay").classList.add("active");
      rebuildCartUI();
    }
    function closeCart(){
      document.getElementById("cartOverlay").classList.remove("active");
    }

    // =========================
    // 9. INIT
    // =========================
    function init() {
      document.getElementById("yearNow").textContent = new Date().getFullYear();
      rebuildStaticText();
      rebuildCategoryChips();
      rebuildSizeGrid();
      rebuildProductsUI();
      rebuildCartUI();
      bindEvents();
      syncDropdowns();
    }

    init();
