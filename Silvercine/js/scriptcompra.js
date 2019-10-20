function selecao(filme){
	var selectSessao=document.getElementById("opSessao");
	var inputData=document.getElementById("dataFilme");
	var total=document.getElementById("total");
	var imagem=document.getElementById("posterCompra");
	var sala=document.getElementById("sala");
	var horario=document.getElementById("horario");
	var dia=document.getElementById("dia");
	var idioma=document.getElementById("idioma");
	var nomeFilme=document.getElementById("nome");
	var generoFilme=document.getElementById("genero");
	var assento=document.getElementById("assento");
	var selectAssento=document.getElementById("opAssento");
	var idioma=document.getElementById("idioma");

	if(filme!=""){
		selectSessao.disabled=false;
		inputData.disabled=false;
		selectAssento.disabled=false;
		selectSessao.selectedIndex=0;
	}else{
		selectSessao.disabled=true;
		inputData.disabled=true;
		selectAssento.disabled=true;
		imagem.src="../imagens/posters/posternone.png";
		sala.innerText=" ";
		horario.innerText=" ";
		dia.innerText=" ";
		idioma.innerText=" ";
		nomeFilme.innerText="Nome do Filme";
		generoFilme.innerText="Gênero do Filme";
		assento.innerText=" ";
		total.innerText="R$0,00";
		idioma.innerText=" ";
	}

	if(selectSessao.options[0]!=null){
		var option1=selectSessao.options[0];
	}else{
		var option1=document.createElement("option");
	}

	if(selectSessao.options[1]!=null){
		var option2=selectSessao.options[1];
	}else{
		var option2=document.createElement("option");
	}

	switch(filme){
		case "filme1":
			option1.text="17:00";
			option1.value="op1";
    		selectSessao.add(option1);
    		option2.text="21:00";
    		option2.value="op2";
    		selectSessao.add(option2);
    		inputData.setAttribute("min", "2019-04-26");
    		inputData.setAttribute("max", "2019-05-24");
    		inputData.value="2019-04-26";
    		selecaoData(inputData);
    		imagem.src="../imagens/posters/poster1.jpg";
    		assento.innerText="A1";
    		horario.innerText="17:00";
    		idioma.innerText="Dublado";
    		sala.innerText="Scorsese";
			nomeFilme.innerText="Vingadores: Ultimato";
			generoFilme.innerText="Ação/Aventura";
			total.innerText="R$15,00";
			break;
		case "filme2":
			option1.text="18:00";
			option1.value="op1";
    		selectSessao.add(option1);
    		option2.text="21:00";
    		option2.value="op2";
    		selectSessao.add(option2);
    		inputData.setAttribute("min", "2019-02-14");
    		inputData.setAttribute("max", "2019-02-28");
    		inputData.value="2019-02-14";
    		selecaoData(inputData);
    		imagem.src="../imagens/posters/poster2.jpg";
    		assento.innerText="A1";
    		horario.innerText="18:00";
    		idioma.innerText="Dublado";
    		sala.innerText="Tarantino";
			nomeFilme.innerText="Alita: Anjo de Combate";
			generoFilme.innerText="Ação/Aventura";
			total.innerText="R$15,00";
			break;
		case "filme3":
			option1.text="16:00";
			option1.value="op1";
    		selectSessao.add(option1);
    		option2.text="19:00";
    		option2.value="op2";
    		selectSessao.add(option2);
    		inputData.setAttribute("min", "2019-04-04");
    		inputData.setAttribute("max", "2019-04-25");
    		inputData.value="2019-04-04";
    		selecaoData(inputData);
    		imagem.src="../imagens/posters/poster3.jpg";
    		assento.innerText="A1";
    		horario.innerText="16:00";
    		idioma.innerText="Dublado";
    		sala.innerText="Kubrick";
			nomeFilme.innerText="Shazam";
			generoFilme.innerText="Ação/Comédia";
			total.innerText="R$15,00";
			break;
		case "filme4":
			option1.text="19:00";
			option1.value="op1";
    		selectSessao.add(option1);
    		option2.text="21:00";
    		option2.value="op2";
    		selectSessao.add(option2);
    		inputData.setAttribute("min", "2019-03-07");
    		inputData.setAttribute("max", "2019-04-04");
    		inputData.value="2019-03-07";
    		selecaoData(inputData);
    		imagem.src="../imagens/posters/poster4.jpg";
    		assento.innerText="A1";
    		horario.innerText="19:00";
    		idioma.innerText="Dublado";
    		sala.innerText="Bigelow";
			nomeFilme.innerText="Capitã Marvel";
			generoFilme.innerText="Ação/Aventura";
			total.innerText="R$15,00";
			break;
		case "filme5":
			option1.text="14:00";
			option1.value="op1";
    		selectSessao.add(option1);
    		option2.text="17:00"
    		option2.value="op2";;
    		selectSessao.add(option2);
    		inputData.setAttribute("min", "2019-03-28");
    		inputData.setAttribute("max", "2019-04-11");
    		inputData.value="2019-03-28";
    		selecaoData(inputData);
    		imagem.src="../imagens/posters/poster5.jpg";
    		assento.innerText="A1";
    		horario.innerText="14:00";
    		idioma.innerText="Dublado";
    		sala.innerText="Eastwood";
			nomeFilme.innerText="Dumbo";
			generoFilme.innerText="Aventura/Fantasia";
			total.innerText="R$15,00";
			break;
		case "filme6":
    		option1.text="Pré-estreia";
    		selectSessao.add(option1);
    		if(selectSessao.options[1]!=null){
    			selectSessao.remove(option2);
    		}
    		inputData.value="2019-07-17";
    		selecaoData(inputData);
    		inputData.disabled=true;
    		selectSessao.disabled=true;
    		imagem.src="../imagens/posters/poster6.jpg";
    		assento.innerText="A1";
    		horario.innerText="23:00";
    		idioma.innerText="Legendado";
    		sala.innerText="Scorsese";
			nomeFilme.innerText="O Rei Leão";
			generoFilme.innerText="Animação/Aventura";
			total.innerText="R$20,00";
			break;
		case "filme7":
    		option1.text="Pré-estreia";
    		selectSessao.add(option1);
    		if(selectSessao.options[1]!=null){
    			selectSessao.remove(option2);
    		}
    		inputData.value="2019-05-22";
    		selecaoData(inputData);
    		inputData.disabled=true;
    		selectSessao.disabled=true;
    		imagem.src="../imagens/posters/poster7.jpg";
    		assento.innerText="A1";
    		horario.innerText="23:00";
    		idioma.innerText="Legendado";
    		sala.innerText="Tarantino";
			nomeFilme.innerText="Aladdin";
			generoFilme.innerText="Aventura/Comédia";
			total.innerText="R$20,00";
			break;
		case "filme8":
    		option1.text="Pré-estreia";
    		selectSessao.add(option1);
    		if(selectSessao.options[1]!=null){
    			selectSessao.remove(option2);
    		}
    		inputData.value="2019-04-17";
    		selecaoData(inputData);
    		inputData.disabled=true;
    		selectSessao.disabled=true;
    		imagem.src="../imagens/posters/poster8.jpg";
    		assento.innerText="A1";
    		horario.innerText="23:00";
    		idioma.innerText="Legendado";
    		sala.innerText="Kubrick";
			nomeFilme.innerText="A Maldição da Chorona";
			generoFilme.innerText="Terror/Mistério";
			total.innerText="R$20,00";
			break;
		case "filme9":
    		option1.text="Pré-estreia";
    		selectSessao.add(option1);
    		if(selectSessao.options[1]!=null){
    			selectSessao.remove(option2);
    		}
    		inputData.value="2019-04-10";
    		selecaoData(inputData);
    		inputData.disabled=true;
    		selectSessao.disabled=true;
    		imagem.src="../imagens/posters/poster9.jpg";
    		assento.innerText="A1";
    		horario.innerText="23:00";
    		idioma.innerText="Legendado";
    		sala.innerText="Bigelow";
			nomeFilme.innerText="Suspiria: A Dança do Medo";
			generoFilme.innerText="Fantasia/Terror";
			total.innerText="R$20,00";
			break;
		case "filme10":
    		option1.text="Pré-estreia";
    		selectSessao.add(option1);
    		if(selectSessao.options[1]!=null){
    			selectSessao.remove(option2);
    		}
    		inputData.value="2019-06-05";
    		selecaoData(inputData);
    		inputData.disabled=true;
    		selectSessao.disabled=true;
    		imagem.src="../imagens/posters/poster10.jpg";
    		assento.innerText="A1";
    		horario.innerText="23:00";
    		idioma.innerText="Legendado";
    		sala.innerText="Eastwood";
			nomeFilme.innerText="X-Men: Fênix Negra";
			generoFilme.innerText="Ação/Aventura";
			total.innerText="R$20,00";
			break;
	}
}

function selecaoSessao(sessao){
	var horario=document.getElementById("horario");
	horario.innerText=" ";

	switch(sessao.value){
		case "op1":
			for (var i=0; i<5; i++) {
				horario.innerText+=sessao.innerText[i];
			}
			idioma.innerText="Dublado";
			break;
		case "op2":
			for (var i=6; i<11; i++) {
				horario.innerText+=sessao.innerText[i];
			}
			idioma.innerText="Legendado";
			break;
	}
}

function selecaoData(data){
	var dia=document.getElementById("dia");

	dia.innerText="";

	for (var i=8; i<10; i++) {
		dia.innerText+=data.value[i];
	}

	dia.innerText+="/";

	for (var i=5; i<7; i++) {
		dia.innerText+=data.value[i];
	}

	dia.innerText+="/";

	for (var i=0; i<4; i++) {
		dia.innerText+=data.value[i];
	}
}

function selecaoAssento(assentoSel){
	var assento=document.getElementById("assento");

	assento.innerText=assentoSel.value;
}

function pagamento(forma){
	var btnBoleto=document.getElementById("botaoBoleto");
	var btnCartao=document.getElementById("botaoCartao");
	var titular=document.getElementById("titularCartao");
	var numero=document.getElementById("numeroCartao");
	var vencimento=document.getElementById("vencimentoCartao");

	if(forma.value=="boleto"){
		btnBoleto.disabled=false;
	}else{
		btnBoleto.disabled=true;
	}

	if(forma.value=="cartao"){
		btnCartao.disabled=false;
		titular.disabled=false;
		numero.disabled=false;
		vencimento.disabled=false;
	}else{
		btnCartao.disabled=true;
		titular.disabled=true;
		numero.disabled=true;
		vencimento.disabled=true;
	}
}