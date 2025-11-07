// COMENTER PRO BOT - Versão com Digitação 100% Correta
// GitHub: https://ratonixxx.github.io/COMENTER_PRO_BOT

(function() {
    if (window.comenterProLoaded) {
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

    const botUI = document.createElement('div');
    botUI.innerHTML = `
        <div id="comenterProPanel" style="
            background: #2c3e50;
            color: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            width: 450px;
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
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #34495e;">
                <div style="display: flex; align-items: center;">
                    <div style="font-size: 20px; margin-right: 10px;">💬</div>
                    <div>
                        <div style="color: #3498db; font-weight: bold; font-size: 16px;">COMENTER PRO</div>
                        <div style="color: #bdc3c7; font-size: 10px;">DIGITAÇÃO 100% CORRETA</div>
                    </div>
                </div>
                <div style="display: flex; gap: 5px;">
                    <button id="transparentBtn" title="Toggle Transparência" style="
                        background: #f39c12; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        👁️
                    </button>
                    <button id="minimizeBtn" title="Minimizar" style="
                        background: #3498db; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        _
                    </button>
                    <button id="closeBtn" title="Fechar" style="
                        background: #e74c3c; color: white; border: none; 
                        width: 30px; height: 30px; border-radius: 50%; 
                        cursor: pointer; font-size: 12px;">
                        ×
                    </button>
                </div>
            </div>
            
            <div id="panelContent">
                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">⚙️ Configurações</h3>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">⏱️ Intervalo (minutos):</label>
                        <input type="number" id="comenterInterval" value="3" min="2" max="10" 
                            style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                    </div>
                    
                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">🔧 Método de digitação:</label>
                        <select id="typingMethod" style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white;">
                            <option value="direct">Direto (RECOMENDADO)</option>
                            <option value="events">Com eventos de teclado</option>
                            <option value="mixed">Misto</option>
                        </select>
                    </div>

                    <div style="margin: 10px 0;">
                        <label style="display: block; margin-bottom: 5px; font-size: 12px;">✅ Verificação:</label>
                        <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="doubleCheck" checked> Verificação dupla
                            </label>
                            <label style="font-size: 11px; display: flex; align-items: center;">
                                <input type="checkbox" id="forceCorrect" checked> Forçar correção
                            </label>
                        </div>
                    </div>
                </div>

                <div style="background: #34495e; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <h3 style="color: #3498db; margin: 0 0 10px 0; font-size: 14px;">💬 Mensagens</h3>
                    <textarea id="comenterMessages" rows="4" placeholder="Digite cada mensagem em uma linha"
                        style="width: 100%; padding: 8px; border: none; border-radius: 5px; background: #2c3e50; color: white; resize: vertical; font-size: 12px;">Olá
Teste
Funcionando
Gostei muito
Parabéns</textarea>
                    <div style="color: #bdc3c7; font-size: 10px; margin-top: 5px;">💡 Use mensagens SIMPLES para testar</div>
                </div>

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

                <div id="comenterStatus" style="
                    padding: 10px; border-radius: 5px; background: #34495e; 
                    font-size: 11px; text-align: center; min-height: 20px;">
                    ✅ Digitação 100% correta - PRONTO
                </div>

                <div style="text-align: center; margin-top: 15px; padding-top: 10px; border-top: 1px solid #34495e;">
                    <p style="color: #7f8c8d; font-size: 10px; margin: 0;">
                        F2: Ocultar/Mostrar | Digitação GARANTIDA
                    </p>
                </div>
            </div>

            <div id="minimizedPanel" style="display: none; text-align: center; padding: 10px;">
                <div style="color: #3498db; font-weight: bold; font-size: 14px;">COMENTER PRO</div>
                <div style="color: #bdc3c7; font-size: 10px; margin: 5px 0;" id="minimizedStatus">Digitação correta</div>
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
        } else {
            panel.style.opacity = '1';
            panel.style.background = '#2c3e50';
            btn.style.background = '#f39c12';
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
        btn.style.background = '#27ae60';
        
        document.getElementById('comenterProPanel').style.width = '200px';
    };

    window.maximizePanel = function() {
        const content = document.getElementById('panelContent');
        const minimized = document.getElementById('minimizedPanel');
        const btn = document.getElementById('minimizeBtn');
        
        window.isMinimized = false;
        content.style.display = 'block';
        minimized.style.display = 'none';
        btn.innerHTML = '_';
        btn.style.background = '#3498db';
        
        document.getElementById('comenterProPanel').style.width = '450px';
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

    // ========== SISTEMA DE DIGITAÇÃO 100% CORRETA ==========
    window.startComenterBot = async function() {
        if (window.comenterRunning) {
            updateStatus('⚠️ Bot já está rodando!', '#f39c12');
            return;
        }

        const interval = parseInt(document.getElementById('comenterInterval').value) * 60000;
        const messages = document.getElementById('comenterMessages').value.split('\n').filter(m => m.trim());
        const typingMethod = document.getElementById('typingMethod').value;

        if (messages.length === 0) {
            updateStatus('❌ Digite pelo menos uma mensagem!', '#e74c3c');
            return;
        }

        window.comenterRunning = true;
        window.messageCount = 0;

        updateStatus(`🚀 Bot iniciado! ${messages.length} mensagens`, '#27ae60');

        let messageIndex = 0;

        window.comenterIntervalId = setInterval(async () => {
            if (!window.comenterRunning) return;

            const message = messages[messageIndex % messages.length];
            
            const success = await guaranteedTyping(message, typingMethod);

            if (success) {
                window.messageCount++;
                updateStatus(`✅ ${window.messageCount} comentários enviados`, '#27ae60');
                
                if (window.isMinimized) {
                    const minimizedText = document.getElementById('minimizedStatus');
                    if (minimizedText) {
                        minimizedText.textContent = `${window.messageCount} enviados`;
                    }
                }
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
        
        if (window.isMinimized) {
            const minimizedText = document.getElementById('minimizedStatus');
            if (minimizedText) {
                minimizedText.textContent = `Parado - ${window.messageCount}`;
            }
        }
    };

    // ========== MÉTODO DE DIGITAÇÃO GARANTIDA ==========
    async function guaranteedTyping(message, method) {
        try {
            // 1. Encontrar campo
            const field = await findCommentField();
            if (!field) {
                updateStatus('❌ Campo não encontrado!', '#e74c3c');
                return false;
            }

            // 2. Foco no campo
            await simpleFocus(field);
            if (!window.comenterRunning) return false;

            // 3. LIMPAR CAMPO de forma GARANTIDA
            await guaranteedClear(field);
            
            // 4. DIGITAR usando método selecionado
            updateStatus('⌨️ Digitando...', '#3498db');
            await delay(500);

            let success = false;
            
            switch(method) {
                case 'direct':
                    success = await directTextInsert(field, message);
                    break;
                case 'events':
                    success = await eventBasedTyping(field, message);
                    break;
                case 'mixed':
                    success = await mixedTyping(field, message);
                    break;
            }

            // 5. VERIFICAÇÃO FINAL OBRIGATÓRIA
            if (success && document.getElementById('doubleCheck').checked) {
                success = await verifyAndCorrect(field, message);
            }

            // 6. Enviar
            if (success) {
                updateStatus('📤 Enviando...', '#3498db');
                const sent = await realSend(field);
                
                if (sent) {
                    updateStatus('✅ Comentário enviado!', '#27ae60');
                    return true;
                }
            }
            
            return false;
            
        } catch (error) {
            console.error('Erro na digitação:', error);
            updateStatus('❌ Erro na digitação', '#e74c3c');
            return false;
        }
    }

    // ========== MÉTODO 1: INSERÇÃO DIRETA ==========
    async function directTextInsert(field, message) {
        try {
            // INSERÇÃO DIRETA do texto completo
            if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
                field.value = message;
            } else if (field.isContentEditable) {
                field.textContent = message;
            }
            
            // Disparar eventos necessários
            triggerAllEvents(field);
            await delay(300);
            
            return true;
        } catch (error) {
            console.error('Erro na inserção direta:', error);
            return false;
        }
    }

    // ========== MÉTODO 2: DIGITAÇÃO COM EVENTOS ==========
    async function eventBasedTyping(field, message) {
        try {
            const characters = message.split('');
            
            for (let i = 0; i < characters.length; i++) {
                if (!window.comenterRunning) return false;

                const char = characters[i];
                
                // Método SIMPLES e DIRETO para cada caractere
                if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
                    field.value += char;
                } else if (field.isContentEditable) {
                    field.textContent += char;
                }
                
                // Apenas eventos essenciais
                const inputEvent = new Event('input', { bubbles: true });
                field.dispatchEvent(inputEvent);
                
                await delay(80 + Math.random() * 40);
            }
            
            return true;
        } catch (error) {
            console.error('Erro na digitação com eventos:', error);
            return false;
        }
    }

    // ========== MÉTODO 3: MISTO ==========
    async function mixedTyping(field, message) {
        try {
            // Dividir em partes e inserir em blocos
            const parts = splitMessage(message);
            
            for (let part of parts) {
                if (!window.comenterRunning) return false;
                
                if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
                    field.value += part;
                } else if (field.isContentEditable) {
                    field.textContent += part;
                }
                
                triggerAllEvents(field);
                await delay(200 + Math.random() * 100);
            }
            
            return true;
        } catch (error) {
            console.error('Erro no método misto:', error);
            return false;
        }
    }

    // ========== FUNÇÕES AUXILIARES GARANTIDAS ==========
    async function guaranteedClear(field) {
        // Método INFALÍVEL para limpar campo
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            field.value = '';
            field.textContent = '';
        }
        if (field.isContentEditable) {
            field.textContent = '';
            field.innerHTML = '';
        }
        
        // Disparar TODOS os eventos possíveis
        triggerAllEvents(field);
        await delay(200);
    }

    function triggerAllEvents(field) {
        const events = ['input', 'change', 'keydown', 'keyup', 'keypress', 'blur', 'focus'];
        
        events.forEach(eventType => {
            try {
                if (eventType.startsWith('key')) {
                    const event = new KeyboardEvent(eventType, { bubbles: true });
                    field.dispatchEvent(event);
                } else {
                    const event = new Event(eventType, { bubbles: true });
                    field.dispatchEvent(event);
                }
            } catch (e) {
                // Ignora erros em eventos
            }
        });
    }

    function splitMessage(message) {
        // Divide a mensagem em partes de 2-4 caracteres
        const parts = [];
        for (let i = 0; i < message.length; i += 2 + Math.floor(Math.random() * 3)) {
            parts.push(message.substring(i, i + 2 + Math.floor(Math.random() * 3)));
        }
        return parts;
    }

    async function verifyAndCorrect(field, expectedText) {
        const actualText = getFieldText(field);
        
        if (actualText === expectedText) {
            return true;
        }
        
        if (document.getElementById('forceCorrect').checked) {
            updateStatus('🔧 Corrigindo texto...', '#f39c12');
            await guaranteedClear(field);
            await delay(300);
            
            // Tenta o método direto para correção
            return await directTextInsert(field, expectedText);
        }
        
        return false;
    }

    function getFieldText(field) {
        if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
            return field.value || '';
        } else if (field.isContentEditable) {
            return field.textContent || field.innerText || '';
        }
        return '';
    }

    async function simpleFocus(field) {
        field.focus();
        field.click();
        await delay(300);
    }

    async function realSend(field) {
        // Tentar botão de enviar primeiro
        const buttonSent = await findAndClickSendButton();
        if (buttonSent) return true;
        
        // Se não, tentar Enter
        return await simulateEnterKey(field);
    }

    async function simulateEnterKey(field) {
        try {
            await delay(500);
            
            const enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true
            });
            field.dispatchEvent(enterEvent);
            
            await delay(1000);
            return true;
        } catch (error) {
            return false;
        }
    }

    async function findCommentField() {
        const selectors = [
            'textarea',
            'input[type="text"]',
            '[contenteditable="true"]',
            '[role="textbox"]',
            '.comment-input',
            '.comment-field',
            '[data-testid="tweetTextarea"]',
            '#comment',
            'input:not([type])'
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

    async function findAndClickSendButton() {
        const buttonSelectors = [
            'button[type="submit"]',
            'input[type="submit"]',
            'button:contains("Enviar")',
            'button:contains("Comment")',
            'button:contains("Post")',
            'button:contains("Send")',
            '[data-testid="tweetButton"]'
        ];

        for (const selector of buttonSelectors) {
            try {
                const buttons = document.querySelectorAll(selector);
                for (const button of buttons) {
                    if (isVisible(button) && !button.disabled) {
                        button.click();
                        await delay(1000);
                        return true;
                    }
                }
            } catch (error) {
                continue;
            }
        }
        return false;
    }

    function isEditableElement(element) {
        return element.tagName === 'TEXTAREA' || 
               element.tagName === 'INPUT' || 
               element.isContentEditable ||
               element.getAttribute('role') === 'textbox';
    }

    function isVisible(element) {
        return element.offsetWidth > 0 && 
               element.offsetHeight > 0 &&
               element.style.display !== 'none' &&
               element.style.visibility !== 'hidden';
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
        if (e.key === 'F2') {
            e.preventDefault();
            window.togglePanel();
        }
        else if (e.key === 'Escape') {
            window.closePanel();
        }
    });

    // Configurar botões
    setTimeout(() => {
        const panel = document.getElementById('comenterProPanel');
        makeDraggable(panel);
        
        document.getElementById('transparentBtn').onclick = window.toggleTransparency;
        document.getElementById('minimizeBtn').onclick = window.minimizePanel;
        document.getElementById('closeBtn').onclick = window.closePanel;
    }, 100);

    console.log('🚀 COMENTER PRO - Digitação 100% CORRETA ativada!');
})();
