function BotaoBuscar() {
    if (document.formBusca.txtBusca.value=='') {
        alert('Nenhum texto escrito.');
        return false;
    }
    else {
        alert('Tem texto escrito');
        return true;
    }
}   