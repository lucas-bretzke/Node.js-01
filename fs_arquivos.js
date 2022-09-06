const fs = require('fs');

//Manipulação de arquivos

/*** CRIAR ARQUIVOS / ATUALIZAR ***/



/*fs.writeFile() - substitui o arquivo e o conteudo caso exista,
 se não existir ele cria um novo arquivo com o conteúdo que você passar */

/*if (!fs.existsSync('teste.txt')) {
    fs.writeFile('teste.txt', 'teste de conteudo!', (err) => {
        if (err) {
            throw err;
        }
        console.log('Arquivo criado com sucesso!')
    })
} else {
    console.log('Este arquivo já existe')
}
*/



/* fs.appendFile() - adiciona conteudo num arquivo,
 se o arquivo não existir ele cria */

fs.appendFile('outroTeste.txt', '\n\nAdicionado comteudo', (err) => {
    if (err) {
        throw err;
    }
    console.log('Arquivo atualizado')
})



/* fs.open() - abre um arquivo para leitura, se o arquivo não existir ele cria vazio.
 Para criar um arquivo usar flag "w"  para writing escrita */

// fs.open('arquivo01.txt', 'w', (err, file) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Salvo')
// })



//LER ARQUIVOS




/***  RENOMEAR / EXCLUIR ***/

//fs.rename() - Renomear arquivo
if (!fs.existsSync, 'teste.txt') {
    fs.rename('teste.txt', 'teste_renomeado.txt', (err) => {
        if (err) {
            throw err;
            console.log('Arquivo já possui este nome')
        }
        console.log('Arquivo renomeado')
    })
}


//fs.unlink() - Excluir arquivo
if (!fs.existsSync('teste.txt')) {
    fs.unlink('teste_renomeado.txt', (err) => {
        if (err) {
            throw err;
        }
        console.log('Arquivo deletado')
    })
}