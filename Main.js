function readMenssages (){
	mensagens = document.getElementsByClassName('oIy2qc')
	
	for(i=0;i< mensagens.length;i++){
	
	console.log(mensagens[i].dataset.messageText)
    }

}

setInterval(readMenssages,5000);