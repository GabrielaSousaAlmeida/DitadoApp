const botaoVerificar = document.querySelector('#btn-verificar');
const inputPalavra = document.querySelector('#palavra');
const palavrasCertas = [
  'abacaxi', 'abelha', 'abóbora', 'abridor', 'abstrato', 'academia', 'açúcar', 'adesivo', 'água', 'álbum', 'alface', 'alegria', 'alfinete', 'alho', 'aliança', 'alicate', 'almofada', 'alpiste', 'alquimia', 'aluguel', 'amarelo', 'amendoim', 'amizade', 'amuleto', 'anão', 'aniversário', 'ansiedade', 'antena', 'anjo', 'aparador', 'apito', 'apresentação', 'aprumo', 'arco', 'areia', 'aroma', 'arte', 'artista', 'asa', 'asfalto', 'átomo', 'aurora', 'austeridade', 'autenticidade', 'avental', 'aveia', 'azeite', 'azul', 'babado', 'babuíno', 'bafômetro', 'bagagem', 'baile', 'bala', 'balança', 'balé', 'bambu', 'banco', 'bandeira', 'banho', 'barata', 'barbante', 'barco', 'barraca', 'barriga', 'barril', 'bata', 'batata', 'batedeira', 'bateria', 'bebedouro', 'beija-flor', 'beijo', 'bengala', 'benção', 'berinjela', 'berço', 'beterraba', 'bexiga', 'biblioteca', 'bife', 'bigode', 'bilhete', 'binóculo', 'biruta', 'bisnaga', 'biscoito', 'bisonte', 'bisturi', 'bola', 'bolacha', 'boliche', 'bolsa', 'bomba', 'bombeiro', 'borboleta', 'borracha', 'bosque', 'botão', 'branco', 'brilho', 'broa', 'broche', 'brócolis', 'bronze', 'bule', 'buraco', 'cabelo', 'cachecol', 'cachoeira', 'cadeado', 'cadeira', 'caderno', 'café', 'caixa', 'cajado', 'caju', 'calça', 'caldeirão', 'calendário', 'cama', 'camarão', 'camelo', 'caminhão', 'campo', 'canário', 'candelabro', 'canela', 'caneta', 'canguru', 'canivete', 'cano', 'canoa', 'cão', 'canto', 'cantor', 'capa', 'capacete', 'capim', 'capivara', 'capote', 'caracol', 'caranguejo', 'caravela', 'carboidrato', 'cardeal', 'carimbo', 'carinho', 'carne', 'carro', 'carta', 'carteira', 'cartolina', 'carvão', 'casaco', 'casamento', 'casca', 'cascata', 'castanha', 'castelo', 'catapulta', 'catedral', 'catraca', 'caule', 'celebração', 'celular', 'cenoura', 'centopeia', 'cerâmica', 'cerca', 'cereja', 'cerveja', 'cesta', 'chá', 'chaleira', 'chama', 'chaminé', 'champô', 'chance', 'chapéu', 'charuto', 'chave', 'chiclete', 'chifre', 'chifre', 'chocalho', 'chope', 'chupeta', 'chuva', 'cílio', 'cilindro', 'cimento', 'cinema', 'cinto', 'cipó', 'circo', 'círculo', 'cirrose', 'cisne', 'citronela', 'clamor', 'clipe', 'coala', 'coco', 'coelho', 'cofre', 'colar', 'colcha', 'coleção', 'colher', 'colina', 'colmeia', 'colônia', 'coluna', 'comédia', 'cometa', 'comida', 'compasso', 'comunhão', 'concha', 'concreto', 'condor', 'cone', 'confusão', 'conhaque', 'conjunto', 'conquista', 'conta', 'contorno', 'coqueiro', 'cor', 'coração', 'coragem', 'corcova', 'corda', 'córtex', 'coruja', 'corvina', 'costa', 'cova', 'coxinha', 'cozinha', 'crachá', 'cravo', 'credibilidade', 'creme', 'crescimento', 'criança', 'crisântemo', 'cristal', 'cruz', 'cubo', 'cuco', 'cueca', 'culinária', 'cultura', 'cumprimento', 'cura', 'curva', 'cutelo', 'czar', 'dado', 'dança', 'dardo', 'datilografia', 'debutante', 'dedal', 'dedo', 'defesa', 'degrau', 'delírio', 'democracia', 'dente', 'deputado', 'derrota', 'desafio', 'desanimo', 'desastre', 'desenho', 'desfile', 'destino', 'destruição', 'detetive', 'deus', 'dia', 'diamante', 'diário', 'dicionário', 'diesel', 'diferença', 'difusão', 'digestão', 'dignidade', 'dilúvio', 'dimensão', 'dinamite', 'dinheiro', 'dino', 'diploma', 'direção', 'disciplina', 'disco', 'discoteca', 'disfarce', 'dispensador', 'distância', 'divisão', 'doce', 'doceria', 'doença', 'dólar', 'dom', 'domingo', 'donzela', 'dor', 'dormitório', 'dose', 'dotô', 'doutorado', 'dragão', 'drenagem', 'droga', 'duelo', 'duende', 'dueto', 'duque', 'durian', 'eclipse', 'economia', 'edição', 'edifício', 'educação', 'efeito', 'efeito', 'efervescência', 'eficácia', 'eficiência', 'efeito', 'egito', 'elástico', 'elefante', 'elegância', 'eleição', 'elevação', 'elipse', 'elogio', 'eloquência', 'elétron', 'emancipação', 'embriaguez', 'emenda', 'emissão', 'emoção', 'empada', 'empatia', 'emprego', 'empresa', 'empreendimento', 'empréstimo', 'emulsão', 'encaixe', 'encontro', 'encomenda', 'encrenca', 'energia', 'enfrentamento', 'engajamento', 'engano', 'engenharia', 'engrenagem', 'enigma', 'enlace', 'encontro', 'enfermeira', 'enfeite', 'enigma', 'entendimento', 'entusiasmo', 'entrada', 'entrega', 'entrelaçamento', 'entusiasmo', 'entusiasmo', 'enxame', 'enxoval', 'época', 'equação', 'equidade', 'equilíbrio', 'equipamento', 'erro', 'esboço', 'escada', 'escama', 'escapamento', 'escapulário', 'escassez', 'escavadeira', 'escoba', 'escola', 'escorpião', 'escova', 'escritura', 'escudo', 'escultura', 'escuridão', 'esfera', 'esforço', 'esgoto', 'esmeralda', 'espaguete', 'espantalho', 'esparadrapo', 'espelho', 'espessura', 'espírito', 'esplendor', 'espuma', 'esquadra', 'esquerda', 'esquilo', 'esquina', 'estampa', 'estante', 'estátua', 'estação', 'esteira', 'estilo', 'estômago', 'estrela', 'estudo', 'etapa', 'eternidade', 'etiqueta', 'eucalipto', 'euforia', 'evasão', 'evolução', 'exame', 'excelência', 'exercício', 'exibição', 'exigência', 'existência', 'expansão', 'expectativa', 'expedição', 'experiência', 'explosão', 'exportação', 'expressão', 'extensão', 'extinção', 'extração', 'extravagância', 'fábula', 'fabricação', 'fachada', 'faculdade', 'fadiga', 'fagulha', 'faisão', 'fala', 'falafel', 'falência', 'falha', 'falsete', 'fama', 'família', 'fanfarra', 'fantasia', 'fantoche', 'faraó', 'fardo', 'faringe', 'farmácia', 'farol', 'fascinação', 'fase', 'fastio', 'fatalidade', 'fatura', 'fauna', 'faísca', 'fazenda', 'febre', 'fechadura', 'fechamento', 'felicidade', 'fenda', 'ferida', 'fermentação', 'ferro', 'fertilidade', 'fervo', 'festividade', 'feudalismo', 'feudalismo', 'fiambre', 'fiação', 'fibrilação', 'ficheiro', 'fidalgo', 'fidelidade', 'fígado', 'figo', 'fila', 'filme', 'finalização', 'financiamento', 'fingimento', 'fio', 'fisgada', 'fita', 'fivela', 'flagrante', 'flama', 'flamingo', 'flanela', 'flauta', 'flecha', 'flocos', 'flor', 'floricultura', 'florista', 'flutuação', 'foco', 'fofoca', 'fogueira', 'foice', 'folclore', 'folha', 'fome', 'fonética', 'fonte', 'força', 'formatura', 'formiga', 'formosura', 'forno', 'fortaleza', 'fortuna', 'fosso', 'fotografia', 'fragrância', 'frango', 'frase', 'fraude', 'freio', 'freira', 'frescura', 'fresta', 'frio', 'fronteira', 'frota', 'fruta', 'fugitivo', 'fulgor', 'funcionamento', 'função', 'fundação', 'fundos', 'fungo', 'furação', 'furacão', 'furúnculo', 'fúria', 'fusão', 'futebol', 'futuro', 'gabinete', 'gaita', 'galeão', 'galera', 'galinha', 'galo', 'gama', 'ganância', 'ganso', 'garagem', 'garfo', 'garganta', 'garoa', 'garra', 'garrancho', 'garrafa', 'gaveta', 'gavião', 'gazela', 'gelo', 'gema', 'gemada', 'gêmeos', 'gengibre', 'genialidade', 'gentileza', 'genuinidade', 'geração', 'gergelim', 'germe', 'gesso', 'gesto', 'gigante', 'girafa', 'girassol', 'giz', 'glacê', 'glamour', 'glicerina', 'gnomo', 'goiaba', 'gol', 'gole', 'gorila', 'gostosura', 'gota', 'governo', 'grade', 'gralha', 'grama', 'granada', 'grandeza', 'granizo', 'gratidão', 'gravata', 'graxa', 'grego', 'greve', 'gripe', 'grito', 'gruta', 'guarda', 'guarda-chuva', 'guardanapo', 'guerra', 'guia', 'guilhotina', 'guindaste', 'guitarra', 'gula', 'guri', 'guru', 'hálito', 'hamburguer', 'haste', 'herança', 'hibisco', 'hiena', 'hipnose', 'hipopotamo', 'hino', 'história', 'homenagem', 'homem', 'homilia', 'honestidade', 'honra', 'hora', 'horta', 'hospedagem', 'hospedeiro', 'hotel', 'húmido', 'hurricane', 'iara', 'ícone'
];

botaoVerificar.onclick = () => {
  //inputPalavra.value.toLowerCase() === palavrasCertas[0]
  if (palavrasCertas.includes(inputPalavra.value.toLowerCase())) {
    alert('certo')
  } else {
    alert('errado')
  }
}

function teste() {
  //se a palavra estiver correta tem retorno caso contrario não.
  const url = `https://api.dicionario-aberto.net/word/${inputPalavra.value.toLowerCase()}`;

  fetch(url)
    .then(response => response.json())
    .then(res => {
      console.log(res);
      console.log(res[0].xml);
      alert('certo');
    })
    .catch(()=> alert('errado'));
}