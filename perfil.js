document.getElementById('nome-perfil').textContent = localStorage.getItem('nome') || "Não informado";
    document.getElementById('email-perfil').textContent = localStorage.getItem('email') || "Não informado";
    document.getElementById('telefone-perfil').textContent = localStorage.getItem('telefone') || "Não informado";
    document.getElementById('cpf-perfil').textContent = localStorage.getItem('cpf') || "Não informado";
    document.getElementById('senha-perfil').textContent = localStorage.getItem('senha') || "Não informado";