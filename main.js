const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let Janela = null

//Função Responsável por criar a Janela Principal
function criaJanela(){
    //Instancia o objeto da Janela
    Janela = new BrowserWindow({
        width:800,
        height:600,
        show:false
    })
    //Carrega o Template inicial
    Janela.loadURL(url.format({
        pathname: path.join(__dirname, 'views', 'index.html'),
        protocol: 'file',
        slashes: true
    }))
    //Exibe a Janela após o carregamento total em memória
    Janela.on('ready-to-show', () => {
        Janela.show()
    })

    Janela.webContents.openDevTools()
}

app.on('ready', criaJanela)
