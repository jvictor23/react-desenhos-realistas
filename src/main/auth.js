export const isAuthenticated = () =>{
    const usuarioLogado = JSON.parse(localStorage.getItem("_usuarioLogado"));
    if(usuarioLogado){
        return true
    }else{
        return false
    }
};