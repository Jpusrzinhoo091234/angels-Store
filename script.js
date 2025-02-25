// Dados dos produtos
const products = [
    // Assinaturas
    {
        id: 'NETFLIX + HBO/MAX PRIME VIDEO + APPLE TV [30 DIAS',
        name: 'NETFLIX + HBO/MAX PRIME VIDEO + APPLE TV [30 DIAS',
        price: 25.99,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: 'PROMOÇÃO'
    },
    {
        id: 'AMAZON PRIME VIDEO + CANVA [30 DIAS] ',
        name: 'AMAZON PRIME VIDEO + CANVA [30 DIAS] ',
        price: 4.99,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: ''
    },
    {
        id: 'DISNEY PREMIUM + CANVA [30 DIAS] ',
        name: 'DISNEY PREMIUM + CANVA [30 DIAS]  ',
        price: 14.99,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: ''
    },
    {
        id: 'LINK YOUTUBE PREMIUM & MUSIC + CANVA [30 DIAS',
        name: 'LINK YOUTUBE PREMIUM & MUSIC + CANVA [30 DIAS',
        price: 14.99,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: ''   
    },
    {
        id: 'HBO/MAX + CANVA [30 DIAS] ',
        name: 'HBO/MAX + CANVA [30 DIAS] ',
        price: 6.99,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: ''
    },
    {
        id: 'DISNEY/STAR + HBO/MAX + PRIME + APPLE TV [30 DIAS] ',
        name: 'DISNEY/STAR + HBO/MAX + PRIME + APPLE TV [30 DIAS]',
        price: 19.99,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: ''
    },
    {
        id: '[7 DIAS] DISNEY/STAR + CANVA 7 DIAS DE GARANTIA ',
        name: '[7 DIAS] DISNEY/STAR + CANVA 7 DIAS DE GARANTIA ',
        price: 7.00,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: ''
    },
    {
        id: 'PRIME VIDEO + PARAMOUNT + HBO/MAX [30 DIAS] ',
        name: 'PRIME VIDEO + PARAMOUNT + HBO/MAX [30 DIAS] ',
        price: 8.99,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: ''
    },
    {
        id: '[15 DIAS] HBO/MAX CANVA [15 DIAS DE GARANTIA] ',
        name: '[15 DIAS] HBO/MAX CANVA [15 DIAS DE GARANTIA]  ',
        price: 5.99,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: ''
    },
    {
        id: '[10 DIAS] PARAMOUNT + PRIME VIDEO [10 DIAS DE GARANΤΙΑ  ',
        name: '[10 DIAS] PARAMOUNT + PRIME VIDEO [10 DIAS DE GARANΤΙΑ  ',
        price: 5.99,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: ''
    },
    {
        id: '[10 DIAS] HBO/MAX + PARAMOUNT 10 DIAS DE GARANTIA ',
        name: '[10 DIAS] HBO/MAX + PARAMOUNT 10 DIAS DE GARANTIA ',
        price: 5.99,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: ''
    },
    {
        id: '[14 DIAS] CRUNCHYROLL + CANVA 14 DIAS DE GARANTIA ',
        name: '[14 DIAS] CRUNCHYROLL + CANVA 14 DIAS DE GARANTIA ',
        price: 4.99,
        category: 'assinaturas',
        description: ' 14 DIAS DE GARANTIA E SURPORTE',
        stock: 999,
        badge: ''
    },
    {
        id: 'PASSE BOOYAH PREMIUM FREE FIRE ',
        name: 'PASSE BOOYAH PREMIUM FREE FIRE ',
        price: 8.99,
        category: 'free_fire',
        description: 'ENTRE VIA ID EM ATE 10 MINUTOS',
        stock: 999,
        badge: ''
    },
    {
        id: 'CONTA FREE FIRE LV 15 COM DIAMANTES',
        name: 'CONTA FREE FIRE LV 15 COM DIAMANTES',
        price: 18,
        category: 'free_fire',
        description: '🟢LEVEL 15 +300 DIMAS +20K OURO COM SKIN REI CAVEIRA (acompanha personagens aleatórios)+TROCA NICK',
        stock: 999,
        badge: ''
    },
    {
        id: '1k de seguidores brasileiros',
        name: '1k de seguidores brasileiros',
        price: 38,
        category: 'instagram',
        description: '♻️ **Garantia** - Garantia de 30 dias para reposição de seguidores/curtidas/views em caso de quedas. A chance de quedas é baixa, mas você tem direito à reposição durante o período garantido.',
        stock: 999,
        badge: ''
    },
    {
        id: '1k de seguidores mundiais',
        name: '1k de seguidores mundiais',
        price: 19,
        category: 'instagram',
        description: '♻️ **Garantia** - Garantia de 30 dias para reposição de seguidores/curtidas/views em caso de quedas. A chance de quedas é baixa, mas você tem direito à reposição durante o período garantido.',
        stock: 999,
        badge: ''
    },
    {
        id: '100 seguidores brasileiros',
        name: '100 seguidores brasileiros',
        price: 6.90,
        category: 'instagram',
        description: '♻️ **Garantia** - Garantia de 30 dias para reposição de seguidores/curtidas/views em caso de quedas. A chance de quedas é baixa, mas você tem direito à reposição durante o período garantido.',
        stock: 999,
        badge: ''
    },

    
    
        
];

// Sistema de contador de acessos
const visitCounter = {
    INCREMENT_VALUE: 4.5678, // Valor para incrementar a cada visita

    initialize: function() {
        // Verifica se é a primeira visita do dia
        const today = new Date().toDateString();
        const lastVisit = localStorage.getItem('lastVisit');
        let totalVisits = parseFloat(localStorage.getItem('totalVisits'));
        
        // Se não existir contagem, inicializa com 0
        if (isNaN(totalVisits)) {
            totalVisits = 0;
            localStorage.setItem('totalVisits', totalVisits);
        }
        
        if (lastVisit !== today) {
            // Nova visita do dia
            localStorage.setItem('lastVisit', today);
            totalVisits += this.INCREMENT_VALUE;
            localStorage.setItem('totalVisits', totalVisits);
            
            // Atualiza o contador na interface
            this.updateVisitDisplay();
            
            // Registra a visita (você pode implementar uma chamada de API aqui)
            this.logVisit();
        } else {
            // Atualiza o display mesmo se não for uma nova visita
            this.updateVisitDisplay();
        }
    },
    
    updateVisitDisplay: function() {
        const totalVisits = parseFloat(localStorage.getItem('totalVisits')) || 0;
        // Cria ou atualiza o elemento de exibição do contador
        let counterDisplay = document.getElementById('visit-counter');
        if (!counterDisplay) {
            counterDisplay = document.createElement('div');
            counterDisplay.id = 'visit-counter';
            counterDisplay.style.cssText = 'position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px;';
            document.body.appendChild(counterDisplay);
        }
        // Converte para inteiro usando Math.floor para mostrar apenas a parte inteira
        counterDisplay.textContent = `Visitas: ${Math.floor(totalVisits)}`;
    },
    
    logVisit: function() {
        // Aqui você pode implementar uma chamada para seu backend
        console.log('Nova visita registrada:', new Date().toISOString());
    }
};

// Função para exibir produtos
function displayProducts(productsToShow) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = '';

    if (productsToShow.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-message';
        emptyMessage.innerHTML = `
            <div class="empty-icon">😢</div>
            <h3>Nenhum produto encontrado</h3>
            <p>Não encontramos produtos nesta categoria no momento.</p>
        `;
        productsContainer.appendChild(emptyMessage);
        return;
    }

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let badgeHTML = '';
        if (product.badge) {
            badgeHTML = `<span class="badge ${product.badgeColor}">${product.badge}</span>`;
        }

        let stockStatus = '';
        if (product.stock === 0) {
            stockStatus = '<span class="out-of-stock">Esgotado</span>';
        }

        const buyButton = product.stock === 0 
            ? `<button class="buy-btn" disabled>Esgotado</button>`
            : `<button class="buy-btn" onclick="addToCart('${product.id}')">Adicionar ao Carrinho</button>`;

        productCard.innerHTML = `
            ${badgeHTML}
            <h3>${product.name}</h3>
            <p class="description">${product.description || ''}</p>
            <p class="price">R$ ${product.price.toFixed(2)}</p>
            ${stockStatus}
            ${buyButton}
        `;

        productsContainer.appendChild(productCard);
    });
}

// Função para adicionar ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showCartNotification();
}

// Função para atualizar contagem do carrinho
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Função para mostrar notificação de sucesso
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification show';
    notification.innerHTML = '✅ Produto adicionado ao carrinho!';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Função para mostrar carrinho
function showCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = 'flex';
    updateCartDisplay();
}

// Função para fechar o carrinho
function closeCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = 'none';
}

// Função para gerar mensagem do WhatsApp
function generateWhatsAppMessage() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    let message = "🛒 *Novo Pedido*\n\n";
    let total = 0;

    cartItems.forEach(item => {
        const subtotal = item.price * item.quantity;
        message += `*${item.name}*\n`;
        message += `Quantidade: ${item.quantity}\n`;
        message += `Preço: R$ ${item.price.toFixed(2)}\n`;
        message += `Subtotal: R$ ${subtotal.toFixed(2)}\n\n`;
        total += subtotal;
    });

    message += `*Total do Pedido: R$ ${total.toFixed(2)}*\n\n`;
    message += "💬 Preciso de suporte ou tenho dúvidas? Entre em contato:\n";
    message += "📱 WhatsApp: (24) 98182-7333";

    const whatsappNumber = "24981827333";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    closeCart();
}

// Função para remover item do carrinho
function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartCount();
    showCart(); // Atualiza a visualização do carrinho
}

// Função para atualizar quantidade do item
function updateItemQuantity(productId, quantity) {
    if (quantity < 1) {
        removeFromCart(productId);
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showCart(); // Atualiza a visualização do carrinho
    }
}

// Função para mostrar carrinho
function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (!cartContainer || !cartItems || !cartTotal) return;

    // Limpa o conteúdo anterior
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Seu carrinho está vazio 😢</p>
            </div>
        `;
        cartTotal.textContent = 'R$ 0,00';
    } else {
        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button onclick="updateItemQuantity('${item.id}', ${(item.quantity || 1) - 1})">-</button>
                        <span>${item.quantity || 1}</span>
                        <button onclick="updateItemQuantity('${item.id}', ${(item.quantity || 1) + 1})">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItems.appendChild(itemElement);
        });

        cartTotal.textContent = `R$ ${total.toFixed(2)}`;
    }

    // Mostra o carrinho
    cartContainer.style.display = 'block';
}

// Adicionar evento de clique ao botão de checkout
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartCount();
    visitCounter.initialize();

    // Adicionar evento para fechar carrinho quando clicar fora
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        cartContainer.addEventListener('click', function(e) {
            if (e.target === cartContainer) {
                closeCart();
            }
        });
    }

    // Adicionar evento para o botão de fechar do carrinho
    const closeCartBtn = document.querySelector('.cart-close-btn');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', closeCart);
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.onclick = generateWhatsAppMessage;
    }
});

// Event listeners for buttons
document.querySelector('.clear-cart-btn').addEventListener('click', clearCart);

// Assuming you have a way to render cart items with remove buttons and quantity inputs
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <input type='number' value='${item.quantity}' min='1' onchange='updateItemQuantity("${item.id}", this.value)'>
            <button onclick='removeFromCart("${item.id}")'>Remover</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

function sendToWhatsApp() {
    const message = generateWhatsAppMessage();
    if (message) {
        window.open(`https://wa.me/24981827333?text=${message}`, '_blank');
    } else {
        alert('Adicione itens ao carrinho primeiro!');
    }
}

function sendSupportMessage() {
    const messageModal = document.getElementById('message-modal');
    messageModal.classList.add('active');
}

function closeMessageModal() {
    const messageModal = document.getElementById('message-modal');
    messageModal.classList.remove('active');
}

function sendCustomMessage() {
    const messageText = document.getElementById('support-message').value.trim();
    if (!messageText) {
        alert('Por favor, digite sua mensagem antes de enviar.');
        return;
    }

    const whatsappNumber = "24981827333";
    const message = `👋 Olá! ${messageText}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    closeMessageModal();
    document.getElementById('support-message').value = '';
}

// Fechar modal ao clicar fora
document.addEventListener('click', function(event) {
    const messageModal = document.getElementById('message-modal');
    const messageContent = document.querySelector('.message-content');
    
    if (event.target === messageModal) {
        closeMessageModal();
    }
});

// Função para filtrar produtos
function filterProducts(category) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
}

// Adicionar evento de busca
document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
});

// Adicionar evento de ordenação
document.getElementById('sort-select').addEventListener('change', function() {
    const sortValue = this.value;
    let sortedProducts = [...products];

    if (sortValue === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    displayProducts(sortedProducts);
});

// Carregar produtos do arquivo JSON
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        // Armazena os produtos carregados
        window.products = data;
        displayProducts(products); // Exibe os produtos carregados
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));
