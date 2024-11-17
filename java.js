function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }



        function mascara_cpf() {
    var cpf_formatado = document.getElementById("cpf").value
    if (cpf_formatado[3] != ".") {
        if (cpf_formatado[3] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] != ".") {
        if (cpf_formatado[7] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7]
        }
    }

    if (cpf_formatado[11] != "-") {
        if (cpf_formatado[11] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11]
        }
    }
    
    localStorage.setItem("cpf", cpf_formatado)
}


function openModal() {
    console.log("Abrindo modal...");


    const nome = document.getElementById('Nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

  
    document.getElementById('nome-modal').textContent = nome || "Não informado";
    document.getElementById('email-modal').textContent = email || "Não informado";
    document.getElementById('telefone-modal').textContent = telefone || "Não informado";
    document.getElementById('cpf-modal').textContent = cpf || "Não informado";
    document.getElementById('senha-modal').textContent = senha || "Não informado";

   
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function saveDataAndRedirect() {
   
    const nome = document.getElementById('nome-modal').textContent;
    const email = document.getElementById('email-modal').textContent;
    const telefone = document.getElementById('telefone-modal').textContent;
    const cpf = document.getElementById('cpf-modal').textContent;
    const senha = document.getElementById('senha-modal').textContent;

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('senha', senha);

  
    alert("Seu cadastro foi realizado!");

  
    window.location.href = "perfil.html";
}