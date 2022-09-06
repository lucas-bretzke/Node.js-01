const fs = require('fs')
 
//Manipulação de pastas

//fs.existsSync() - Verifica se caminho existe
//fs.mkdirSync() - Cria uma pasta
//fs.renameSync() - Renomear pasta
//fs.rmdir() - Deletar pasta


// if (!fs.existsSync('./public')) {
//     fs.mkdirSync('./public', function (err) {
//         if (err) {
//             throw err;
//         }
//         console.log('Pasta criada com sucesso!')
//     })
// } else {
//     console.log('A pasta "public" já existe!')
// }


// if (fs.existsSync('./public')) {
//     fs.renameSync('./public', './public', (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log('Pasta renomeada com sucesso!');
//     })
// } else {
//     console.log('imposivel renomear por que public já existe')
// }


if (fs.existsSync('./lucas')) {
    fs.rmdir('./lucas', { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
        console.log('Pasta deletada com sucesso!');
    })
} else {
    console.log('imposivel deletar por que "lucas" não existe');
}

// fs.existsSync('./public') || fs.mkdirSync('./public');