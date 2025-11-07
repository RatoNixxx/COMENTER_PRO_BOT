// COMENTER PRO BOT - Remote Bookmarklet Version
// GitHub: https://github.com/carlos9209/COMENTER_PRO_BOT

(function() {
    if (window.comenterProLoaded) {
        // Se já está carregado, apenas mostra/oculta
        const panel = document.getElementById('comenterProPanel');
        if (panel) {
            if (panel.style.display === 'none' || panel.parentElement.style.display === 'none') {
                panel.style.display = 'block';
                panel.parentElement.style.display = 'flex';
            } else {
                panel.style.display = 'none';
                panel.parentElement.style.display = 'none';
            }
        }
        return;
    }
    window.comenterProLoaded = true;

    // Criar overlay - SEM FECHAR AO CLICAR
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    `;

    // Criar interface do bot - ARRASTÁVEL
    const botUI = document.createElement('div');
    botUI.innerHTML = `
        <div id="comenterProPanel" style="
            background: #2c3e50;
            color: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            width: 400px;
            font-family: Arial, sans-serif;
            border: 2px solid #3498db;
            max-height: 80vh;
            overflow-y: auto;
            position: fixed;
            top: 50px;
            left: 50px;
            cursor: move;
            z-index: 10000;
            pointer-events: auto;
        ">
            <!-- Cabeçalho com botões de controle -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #34495e;">
                <div style="display: flex; align-items: center;">
                    <div style="font-size: 20px; margin-right: 10px;">💬</div>
                    <div>
                        <div style="color: #3498db; font-weight: bold; font-size: 16px;">COMENTER PRO</div>
                        <div style="color: #bdc3c7; font-size: 10px;">Digitação humana real</div>
                    </div>
                </div>
                <div style="display: flex; gap: 5px;">
                    <button id="transparentBtn" title="Toggle Transparência (Ctrl+Q)" style="
                        background: #f39c12; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        👁️
                    </button>
                    <button id="minimizeBtn" title="Minimizar (Ctrl+W)" style="
                        background: #3498db; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        _
                    </button>
                    <button id="closeBtn" title="Fechar (Ctrl+E)" style="
                        background: #e74c3c; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        ×
                    </button>
                </div>
            </div>
            
            <!-- Conteúdo principal -->
            <div id="panelContent">
                <!-- Seção de Configurações -->
                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">⚙️ Configurações</h3>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⏱️ Intervalo entre comentários (segundos):</label>
                        <input type="number" id="comenterInterval" value="10" min="5" max="60" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⌨️ Velocidade de digitação:</label>
                        <select id="typingSpeed" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="50">Muito Lenta (mais realista)</option>
                            <option value="80" selected>Lenta (recomendado)</option>
                            <option value="120">Normal</option>
                            <option value="200">Rápida</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🎯 Modo de Envio:</label>
                        <select id="comenterMode" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="human">Digitação Humana (Recomendado)</option>
                            <option value="auto">Auto-detect</option>
                            <option value="enter">Tecla ENTER</option>
                            <option value="button">Botão Enviar</option>
                        </select>
                    </div>
                </div>

                <!-- Seção de Mensagens -->
                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha..."
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Olá, este é um comentário automático!
Estou testando o COMENTER PRO BOT.
Funciona muito bem! 👍</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 Dica: Use mensagens diferentes e naturais</div>
                </div>

                <!-- Botões de Controle -->
                <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                    <button onclick="window.startComenterBot()" style="
                        flex: 2; background: #27ae60; color: white; border: none; padding: 12px; 
                        border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 14px;">
                        🚀 INICIAR BOT
                    </button>
                    <button onclick="window.stopComenterBot()" style="
                        flex: 1; background: #e74c3c; color: white; border: none; padding: 12px; 
                        border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 14px;">
                        ⏹️ PARAR
                    </button>
                </div>

                <!-- Status -->
                <div id="comenterStatus" style="
                    padding: 10px; border-radius: 5px; background: #34495e; 
                    font-size: 11px; text-align: center; min-height: 20px;">
                    ⚡ Pronto para usar! Configure as opções acima.
                </div>

                <!-- Rodapé -->
                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | Digitação palavra por palavra
                    </p>
                </div>
            </div>

            <!-- Versão minimizada -->
            <div id="minimizedPanel" style="display: none; text-align: center; padding: 10px;">
                <div style="color: #3498db; font-weight: bold; font-size: 14px;">COMENTER PRO</div>
                <div style="color: #bdc3c7; font-size: 10px; margin: 5px 0;" id="minimizedStatus">Bot parado</div>
                <button onclick="window.maximizePanel()" style="
                    background: #3498db; color: white; border: none; 
                    padding: 5px 10px; border-radius: 3px; cursor: pointer; 
                    margin-top: 5px; font-size: 10px;">
                    Expandir
                </button>
            </div>
        </div>
    `;
    
    overlay.appendChild(botUI);
    document.body.appendChild(overlay);

    // Variáveis globais
    window.comenterRunning = false;
    window.comenterIntervalId = null;
    window.messageCount = 0;
    window.isTransparent = false;
    window.isMinimized = false;

    // ========== FUNÇÃO DE ARRASTAR ==========
    function makeDraggable(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        element.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON') {
                return;
            }
            
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            const newTop = (element.offsetTop - pos2);
            const newLeft = (element.offsetLeft - pos1);
            
            // Limitar à área da tela
            if (newTop >= 0 && newTop <= window.innerHeight - 100) {
                element.style.top = newTop + "px";
            }
            if (newLeft >= 0 && newLeft <= window.innerWidth - 400) {
                element.style.left = newLeft + "px";
            }
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    // ========== FUNÇÕES DE CONTROLE ==========
    window.toggleTransparency = function() {
        const panel = document.getElementById('comenterProPanel');
        const btn = document.getElementById('transparentBtn');
        
        window.isTransparent = !window.isTransparent;
        
        if (window.isTransparent) {
            panel.style.opacity = '0.3';
            panel.style.background = 'rgba(44, 62, 80, 0.7)';
            btn.style.background = '#27ae60';
            btn.title = 'Restaurar Opacidade (Ctrl+Q)';
        } else {
            panel.style.opacity = '1';
            panel.style.background = '#2c3e50';
            btn.style.background = '#f39c12';
            btn.title = 'Toggle Transparência (Ctrl+Q)';
        }
    };

    window.minimizePanel = function() {
        const content = document.getElementById('panelContent');
        const minimized = document.getElementById('minimizedPanel');
        const btn = document.getElementById('minimizeBtn');
        
        window.isMinimized = true;
        content.style.display = 'none';
        minimized.style.display = 'block';
        btn.innerHTML = '□';
        btn.title = 'Maximizar (Ctrl+W)';
        btn.style.background = '#27ae60';
        
        // Reduzir tamanho quando minimizado
        document.getElementById('comenterProPanel').style.width = '200px';
        document.getElementById('comenterProPanel').style.height = 'auto';
    };

    window.maximizePanel = function() {
        const content = document.getElementById('panelContent');
        const minimized = document.getElementById('minimizedPanel');
        const btn = document.getElementById('minimizeBtn');
        
        window.isMinimized = false;
        content.style.display = 'block';
        minimized.style.display = 'none';
        btn.innerHTML = '_';
        btn.title = 'Minimizar (Ctrl+W)';
        btn.style.background = '#3498db';
        
        // Restaurar tamanho original
        document.getElementById('comenterProPanel').style.width = '400px';
    };

    window.closePanel = function() {
        window.stopComenterBot();
        overlay.remove();
        window.comenterProLoaded = false;
    };

    window.hidePanel = function() {
        const panel = document.getElementById('comenterProPanel');
        panel.style.display = 'none';
        overlay.style.display = 'none';
    };

    window.showPanel = function() {
        const panel = document.getElementById('comenterProPanel');
        panel.style.display = 'block';
        overlay.style.display = 'flex';
    };

    window.togglePanel = function() {
        const panel = document.getElementById('comenterProPanel');
        if (panel.style.display === 'none' || overlay.style.display === 'none') {
            window.showPanel();
        } else {
            window.hidePanel();
        }
    };

    // ========== FUNÇÕES DO BOT - DIGITAÇÃO HUMANA ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 1000;
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const mode = document.getElementById('comenterMode').value;
        const typingSpeed = parseInt(document.getElementById('typingSpeed').value);

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        if (interval < 5000) {
            updateStatus('❌ Intervalo muito curto! Use pelo menos 5 segundos.', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🚀 Bot iniciado! ${messages.length} mensagens`, '#27ae60');
        updateStatus('⌨️ Digitação humana ativada...', '#3498db');

        let messageIndex = 0;

        window.comenterIntervalId = setInterval(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            updateStatus(`📝 Digitando: "${message.substring(0, 30)}..."`, '#3498db');
            
            const success = await sendCommentHumanLike(message, mode, typingSpeed);

            if (success) {
                window.messageCount++;
                updateStatus(`✅ ${window.messageCount} comentários enviados`, '#27ae60');
                
                // Atualizar painel minimizado
                if (window.isMinimized) {
                    const minimizedText = document.getElementById('minimizedStatus');
                    if (minimizedText) {
                        minimizedText.textContent = `${window.messageCount} comentários`;
                    }
                }
            } else {
                updateStatus('❌ Falha ao enviar comentário', '#e74c3c');
            }

            messageIndex++;
        }, interval);
    };

    window.stopComenterBot = function() {
        window.comenterRunning = false;
        if (window.comenterIntervalId) {
            clearInterval(window.comenterIntervalId);
            window.comenterIntervalId = null;
        }
        updateStatus(`⏹️ Bot parado! ${window.messageCount} comentários enviados`, '#e74c3c');
        
        // Atualizar painel minimizado
        if (window.isMinimized) {
            const minimizedText = document.getElementById('minimizedStatus');
            if (minimizedText) {
                minimizedText.textContent = `Parado - ${window.messageCount} comentários`;
            }
        }
    };

    // ========== DIGITAÇÃO HUMANA REAL ==========
    async function sendCommentHumanLike(message, mode, typingSpeed) {
        try {
            // 1. Encontrar campo de comentário
            const commentField = await findCommentField();
            if (!commentField) {
                updateStatus('❌ Campo de comentário não encontrado!', '#e74c3c');
                return false;
            }

            // 2. Focar e limpar campo
            commentField.focus();
            await delay(800 + Math.random() * 400); // Delay humano
            
            await clearFieldSafely(commentField);
            await delay(500 + Math.random() * 300);

            // 3. DIGITAR PALAVRA POR PALAVRA (COMPORTAMENTO HUMANO)
            const words = message.split(' ');
            let typedText = '';
            
            updateStatus(`⌨️ Digitando palavra por palavra...`, '#3498db');
            
            for (let i = 0; i < words.length; i++) {
                if (!window.comenterRunning) return false;
                
                const word = words[i];
                
                // Digitar letra por letra com variação de velocidade
                for (let j = 0; j < word.length; j++) {
                    if (!window.comenterRunning) return false;
                    
                    const char = word[j];
                    typedText += char;
                    
                    // Atualizar campo de texto
                    if (commentField.tagName === 'TEXTAREA' || commentField.tagName === 'INPUT') {
                        commentField.value = typedText;
                    } else {
                        commentField.textContent = typedText;
                    }
                    
                    // Disparar evento de input
                    triggerEvent(commentField, 'input');
                    
                    // Delay entre letras (com variação humana)
                    const charDelay = typingSpeed + Math.random() * 50 - 25;
                    await delay(charDelay);
                }
                
                // Adicionar espaço após palavra (exceto última)
                if (i < words.length - 1) {
                    typedText += ' ';
                    
                    if (commentField.tagName === 'TEXTAREA' || commentField.tagName === 'INPUT') {
                        commentField.value = typedText;
                    } else {
                        commentField.textContent = typedText;
                    }
                    
                    triggerEvent(commentField, 'input');
                    
                    // Delay entre palavras (um pouco maior)
                    await delay(typingSpeed * 1.5 + Math.random() * 100);
                }
                
                // Pequena pausa ocasional (como um humano)
                if (Math.random() < 0.1) { // 10% de chance de pausa
                    await delay(800 + Math.random() * 1000);
                }
            }

            // 4. Pequena pausa final antes de enviar
            await delay(1000 + Math.random() * 500);

            // 5. Enviar comentário
            const sent = await sendMessageImproved(commentField, mode);
            
            if (sent) {
                // Aguardar confirmação
                await delay(2000 + Math.random() * 1000);
                return true;
            }
            
            return false;
            
        } catch (error) {
            console.error('Erro ao enviar comentário:', error);
            return false;
        }
    }

    async function findCommentField() {
        // Tentar elemento ativo primeiro
        const activeElement = document.activeElement;
        if (activeElement && isEditableElement(activeElement)) {
            return activeElement;
        }

        // Procurar campos de comentário
        const selectors = [
            'textarea',
            'input[type="text"]',
            '[contenteditable="true"]',
            '[role="textbox"]',
            '.comment-input',
            '.comment-field',
            '[data-testid="tweetTextarea"]',
            '#comment',
            '.ytd-comment-simplebox-renderer #contenteditable-root',
            'div[contenteditable="true"]',
            'input[placeholder*="comment" i]',
            'textarea[placeholder*="comment" i]'
        ];

        for (const selector of selectors) {
            const elements = document.querySelectorAll(selector);
            for (const element of elements) {
                if (isVisible(element) && isEditableElement(element)) {
                    return element;
                }
            }
        }

        return null;
    }

    async function clearFieldSafely(element) {
        if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
            element.value = '';
        } else if (element.isContentEditable) {
            element.textContent = '';
            if (element.innerHTML) {
                element.innerHTML = '';
            }
        }
        
        // Disparar eventos para notificar a aplicação
        triggerEvent(element, 'input');
        triggerEvent(element, 'change');
    }

    async function sendMessageImproved(element, mode) {
        let sent = false;

        // Tentar botão enviar primeiro (mais confiável)
        if (mode === 'button' || mode === 'auto' || mode === 'human') {
            sent = await findAndClickSendButton();
        }

        // Tentar tecla Enter
        if (!sent && (mode === 'enter' || mode === 'auto' || mode === 'human')) {
            sent = await pressEnterKey(element);
        }

        return sent;
    }

    async function findAndClickSendButton() {
        const buttonSelectors = [
            'button[type="submit"]',
            'button:contains("Enviar")',
            'button:contains("Comment")',
            'button:contains("Post")',
            'button:contains("Publicar")',
            'button:contains("Send")',
            'button:contains("Publicar")',
            '[data-testid="tweetButton"]',
            '[role="button"]:contains("Tweet")',
            '.ytd-comment-simplebox-renderer #submit-button',
            'input[type="submit"]',
            'button[aria-label*="comment" i]',
            'button[aria-label*="tweet" i]',
            'button[aria-label*="post" i]'
        ];

        for (const selector of buttonSelectors) {
            try {
                // Tentar seletor CSS normal
                const buttons = document.querySelectorAll(selector);
                for (const button of buttons) {
                    if (isVisible(button) && !button.disabled) {
                        button.click();
                        await delay(500);
                        return true;
                    }
                }

                // Tentar por texto
                const allButtons = document.querySelectorAll('button, input[type="submit"], [role="button"]');
                for (const button of allButtons) {
                    const text = (button.textContent || button.value || '').toLowerCase();
                    if ((text.includes('enviar') || text.includes('comment') || text.includes('post') || 
                         text.includes('tweet') || text.includes('send')) && 
                        isVisible(button) && !button.disabled) {
                        button.click();
                        await delay(500);
                        return true;
                    }
                }
            } catch (error) {
                continue;
            }
        }
        return false;
    }

    async function pressEnterKey(element) {
        try {
            // Simular pressionar Enter
            const enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true,
                cancelable: true
            });
            
            element.dispatchEvent(enterEvent);
            
            // Também tentar keyup
            const enterUpEvent = new KeyboardEvent('keyup', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true
            });
            
            element.dispatchEvent(enterUpEvent);
            
            return true;
        } catch (error) {
            return false;
        }
    }

    function isEditableElement(element) {
        return element.tagName === 'TEXTAREA' || 
               element.tagName === 'INPUT' || 
               element.isContentEditable ||
               element.getAttribute('contenteditable') === 'true' ||
               element.getAttribute('role') === 'textbox';
    }

    function isVisible(element) {
        return element.offsetWidth > 0 && 
               element.offsetHeight > 0 && 
               element.style.visibility !== 'hidden' && 
               element.style.display !== 'none';
    }

    function triggerEvent(element, eventName) {
        try {
            const event = new Event(eventName, { bubbles: true, cancelable: true });
            element.dispatchEvent(event);
        } catch (error) {
            // Ignorar erros de evento
        }
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function updateStatus(message, color = '#3498db') {
        const statusEl = document.getElementById('comenterStatus');
        if (statusEl) {
            statusEl.textContent = message;
            statusEl.style.background = color;
        }
    }

    // ========== EVENT LISTENERS ==========
    document.addEventListener('keydown', function(e) {
        // Ctrl+Q - Transparência
        if (e.ctrlKey && e.key === 'q') {
            e.preventDefault();
            window.toggleTransparency();
        }
        // Ctrl+W - Minimizar/Maximizar
        else if (e.ctrlKey && e.key === 'w') {
            e.preventDefault();
            if (window.isMinimized) {
                window.maximizePanel();
            } else {
                window.minimizePanel();
            }
        }
        // Ctrl+E - Fechar
        else if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            window.closePanel();
        }
        // F2 - Mostrar/Ocultar
        else if (e.key === 'F2') {
            e.preventDefault();
            window.togglePanel();
        }
        // ESC - Fechar
        else if (e.key === 'Escape') {
            window.closePanel();
        }
    });

    // Configurar botões e funcionalidades
    setTimeout(() => {
        const panel = document.getElementById('comenterProPanel');
        makeDraggable(panel);
        
        document.getElementById('transparentBtn').onclick = window.toggleTransparency;
        document.getElementById('minimizeBtn').onclick = window.minimizePanel;
        document.getElementById('closeBtn').onclick = window.closePanel;
    }, 100);

    console.log('🚀 COMENTER PRO carregado com sucesso!');
    console.log('🎯 Digitação humana ativada - palavra por palavra');
})();
