        let list = [];

        function addElement() {
            const elementInput = document.getElementById('element');
            const element = elementInput.value.trim();
            if (element) {
                list.push(element);
                elementInput.value = '';
                updateList();
            } else {
                alert('Digite um elemento v�lido.');
            }
        }

        function removeElement() {
            const elementInput = document.getElementById('element');
            const input = elementInput.value.trim();

            if (input) {
                const index = parseInt(input, 10);

                if (!isNaN(index) && index >= 0 && index < list.length) {
                    // Remove pela posi��o
                    list.splice(index, 1);
                } else {
                    // Remove pelo valor do elemento
                    const elementIndex = list.indexOf(input);
                    if (elementIndex !== -1) {
                        list.splice(elementIndex, 1);
                    } else {
                        alert('Elemento n�o encontrado na lista.');
                        return;
                    }
                }
                
                elementInput.value = '';
                updateList();
            } else {
                alert('Digite um elemento ou posi��o v�lido.');
            }
        }

        function updateList() {
            const listContainer = document.getElementById('list');
            listContainer.innerHTML = '';
            list.forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = item;
                listContainer.appendChild(li);
            });
            document.getElementById('count').textContent = `Quantidade de elementos: ${list.length}`;
        }