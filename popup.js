function displayFormContents() {

    var out = '';
    
    out += 'nome = ' + document.getElementById('nome').value + '\n';
    out += 'sobrenome = '      + document.getElementById('sobrenome').value      + '\n';
    out += 'telefone = '     + document.getElementById('telefone').value     + '\n';
    out += 'idade = '       + document.getElementById('idade').value       + '\n';
    out += 'Email = '     + document.getElementById('email').value     + '\n';
    
    out += 'Sexo = ';
    if (document.getElementById('masculino').checked == true)
    out += document.getElementById('masculino').value;
    if (document.getElementById('feminino').checked == true)
    out += document.getElementById('feminino').value;
    if (document.getElementById('outro').checked == true)
    out += document.getElementById('outro').value;
    out += '\n';
    
    if (document.getElementById('estudante').checked == true)
    out += 'Estudante da 42 = Sim';
    else
    out += 'Estudante da 42 = Não';
    
    alert(out);
    
    }
