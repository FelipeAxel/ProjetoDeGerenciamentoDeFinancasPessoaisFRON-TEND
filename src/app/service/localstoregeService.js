class LocalStorageService{
    static adicionarItem(chave, valor){
        localStorage.setItem(chave, JSON.stringify(valor));
    }
    
    static removerItem(chave){
        localStorage.removeItem(chave)
    }
    
    static obterItem(chave){
       const item =  localStorage.getItem(chave)
       return JSON.parse(item)
    }
}

export default LocalStorageService;