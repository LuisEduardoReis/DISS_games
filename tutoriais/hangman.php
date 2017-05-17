<!DOCTYPE html>
<body>

<meta charset="utf-8">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="lib/default.min.css">
<script src="lib/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

<h2> Hangman </h2>

<div id="demo">
	<?php include('../jogos/hangman.html'); ?>
</div><br>

<a href="./">Índice</a>

<p> Em português "O Jogo do Enforcado", este é um jogo simples para duas pessoas. Uma escolhe uma palavra e a outra tenta adivinha-la dizendo uma letra de cada vez, tendo um dado número de tentativas.</p>

<p>Na implementação que iremos fazer o computador irá jogar como a pessoa que escolhe a palavra. Irá mostrar a palavra parcial no ecrã, atualiza-la com as letras escolhidas e contar o número de tentativas falhadas.</p>

<br>
<h3> O template </h3>

<pre><code class="html">&lt;html&gt;
	&lt;head&gt;
		&lt;title&gt;Hangman&lt;/title&gt;		
	&lt;/head&gt;
	
	&lt;body&gt;
		&lt;h1 id=&quot;word&quot;&gt;&lt;/h1&gt; 
		&lt;h3 id=&quot;fails&quot;&gt;&lt;h3&gt;
		&lt;input id=&quot;letter&quot; type=&quot;text&quot; maxlength=&quot;1&quot;&gt;
		&lt;button id=&quot;try&quot;&gt;Try&lt;/button&gt;
		&lt;h3 id=&quot;result&quot;&gt;&lt;/h3&gt;
	&lt;/body&gt;
	
	&lt;script&gt;
	&lt;/script&gt;
&lt;/html&gt;
</code></pre>

<p>Este será o html com que iremos trabalhar. Todos os elementos tem um <b>id</b> a partir do qual podemos referir-nos a eles.</p>
<ul>
	<li> O h1 <b>word</b> é um cabeçalho onde vamos colocar a nossa palavra escondida.</li>
	<li> O h3 <b>fails</b> é um cabeçalho mais pequeno onde vamos colocar informação sobre tentativas falhadas ao jogador.</li>
	<li> O input <b>letter</b> é a caixa de texto onde vamos receber uma letra do jogador. Note-se o parâmetro "maxLength" igual a 1 que impede que o utilizador coloque mais do que uma letra </li>
	<li> O botão <b>try</b> é o botão que irá despoletar a jogada do jogador. </li>
	<li> Finalmente, o h3 <b>result</b> é um cabeçalho onde vamos colocar o resultado do jogo ("ganhou"/"perdeu").</li>	
</ul>


<br>
<h3> As variáveis </h3>

<pre><code class="javascript">// Variables
var words = [&quot;abacate&quot;,&quot;banana&quot;,&quot;cereja&quot;];
var solution = words[Math.floor(Math.random()*words.length)];
var word = &quot;&quot;;
var fails = [];
var maxFails = 4;
</code></pre>

<ul>
	<li> <b>words</b> é um array onde vão estar as palavras possíveis para o computador escolher. Neste exemplo temos apenas 3.</li>
	<li> <b>solution</b> é a palavra que o computador escolhe, escolhida do array de palavras anterior.</li>
	<li> <b>word</b> é o estado da palavra à medida que o outro jogador a adivinha. Inicialmente é composta apenas de asteriscos mas estes vão sendo substituídospelas letras corretas à medida que o jogador adivinha. Para já vamos inicializa-la com uma palavra vazia e a seguir colocamos os asteriscos.</li>
	<li> <b>fails</b> é um array para guardar as letras que o jogador experimentou mas falhou.</li>
	<li> <b>maxFails</b> é o número máximo de tentativas falhadas permitido.</li>
</ul>

<p>Agora precisamos de adicionar à palavra guardada na variável word o número correto de asteriscos. Para isso vamos usar um ciclo. Vamos usar um ciclo <b>while</b> que tem a seguinte estrutura:</p>

<pre><code class="javascript">while (condi&ccedil;&atilde;o) opera&ccedil;&atilde;o;</code></pre>

<p> Um ciclo while efetua a sua operação enquanto a condição for verdadeira. Se a condição for sempre verdadeira temos um ciclo infinito!</p>

<p> Para adicionar os nossos asteriscos vamos usar o seguinte código:</p>

<pre><code class="javascript">// Generate the initial word using a while cycle
while(word.length &lt; solution.length) word = word + &quot;*&quot;;
</code></pre>

<p>Aqui a condição é "a palavra ter um tamanho inferior ao da solução" e a operação é "adicionar um asterisco à palavra". Efetivamente, quando o ciclo acabar, a palavra terá o tamanho da solução em asteriscos.</p>

<p>Finalmente vamos criar variáveis para cada um dos elementos do html para ser mais fácil aceder-lhes:</p>

<pre><code class="javascript">// HTML Elements
var wordElement = document.getElementById(&quot;word&quot;);
var failsElement = document.getElementById(&quot;fails&quot;);
var letterElement = document.getElementById(&quot;letter&quot;);
var tryElement = document.getElementById(&quot;try&quot;);
var resultElement = document.getElementById(&quot;result&quot;);</code></pre>



<br>
<h3> Povoando a interface </h3>

<p>Se carregarmos a página atualmente deverá aparecer apenas a caixa de input de texto e o botão que criamos.</p>

<img src="images/hangman-1.png"></img>

<p>Vamos inserir o conteúdo correto em cada elemento do html. Primeiro colocamos a palavra e limpamos a caixa de input de texto (vai ser importante mais tarde).</p>

<pre><code class="javascript">// Set the word element&quot;s text
wordElement.innerHTML = word;
// Reset the letter input
letterElement.value = &quot;&quot;;
</code></pre>

<p>A seguir vamos preencher o cabeçalho que mostra as letras falhadas e o número máximo de tentativas. Vamos usar um if para que só apareça quando o número de tentativas falhadas for maior que 0.</p>

<pre><code class="javascript">// Set the number of fails element&quot;s text
if (fails.length &gt; 0) {
	failsElement.innerHTML = &quot;Fails: &quot; + fails.toString() + &quot; (&quot; + fails.length + &quot;/&quot; + maxFails + &quot;)&quot;;
} else 
	failsElement.innerHTML = &quot;&quot;;
</code></pre>

<p> Finalmente preenchemos o cabeçalho do resultado. Existem três casos possíveis:  </p>
<ul>
	<li>O jogador ultrapassou o limite de falhas e temos de mostrar uma mensagem de derrota.</li>
	<li>Senão, se o jogador tiver chegado à solução, ou seja, quando a palavra atual for igual à solução, mostramos uma mensagem de vitória.</li>
	<li>Em qualquer outro caso, não mostramos nada.</li>
</ul>

<pre><code class="javascript">// Set the result element&quot;s text
if (fails.length &gt; maxFails) 
	resultElement.innerHTML = &quot;You lose! The word was \&quot;&quot; + solution + &quot;\&quot;&quot;;
else if (word == solution) 
	resultElement.innerHTML = &quot;You win!&quot;;
else
	resultElement.innerHTML = &quot;&quot;;
</code></pre>

<p>Vamos colocar o código de povoação da interface numa função para ser fácil atualizar a interface mais tarde. Invocamos a função logo a seguir a declara-la para a interface ser povoado inicialmente.</p>

<pre><code class="javascript">// Function to set/reset the HTML elements
function resetInterface() {
	// Set the word element&quot;s text
	wordElement.innerHTML = word;
	// Reset the letter input
	letterElement.value = &quot;&quot;;
	
	// Set the number of fails element&quot;s text
	if (fails.length &gt; 0) {
		failsElement.innerHTML = &quot;Fails: &quot; + fails.toString() + &quot; (&quot; + fails.length + &quot;/&quot; + maxFails + &quot;)&quot;;
	} else 
		failsElement.innerHTML = &quot;&quot;;
	
	// Set the result element&quot;s text
	if (fails.length &gt; maxFails) 
		resultElement.innerHTML = &quot;You lose! The word was \&quot;&quot; + solution + &quot;\&quot;&quot;;
	else if (word == solution) 
		resultElement.innerHTML = &quot;You win!&quot;;
	else
		resultElement.innerHTML = &quot;&quot;;
}

// Initially reset the interface
resetInterface();
</code></pre>

<p>Se atualizarmos a página agora deverá aparecer pelo menos a palavra representada por asteriscos.</p>

<img src="images/hangman-2.png"></img>



<br>
<h3> Fazer uma tentativa </h3>

<p>Vamos fazer uma função que é executada quando o botão de try é clicado e que efetua uma jogada.</p>

<pre><code class="javascript">// Function for the &quot;Try&quot; button
function tryLetter() {
	//(...)
}
</code></pre>

<p>No html:</p>
<pre><code class="html">&lt;button id=&quot;try&quot; onclick=&quot;tryLetter()&quot;&gt;Try&lt;/button&gt;
</code></pre>

<p>A primeira coisa que precisamos de fazer é ir buscar a letra que o jogador escolheu. Usamos a função toLowerCase() para funcionar no caso do jogador inserir uma letra maiuscúla. Assim assumimos sempre que a letra introduzida é minuscúla.</p>

<pre><code class="javascript">// Get the letter from the input element
var letter = letterElement.value.toLowerCase();
</code></pre>

<p>A seguir temos de ter em conta os casos em que o jogador introduz input inválido. Vamos para já verificar só que de facto foi introduzida uma letra. Ou seja, terminar a função caso o input seja vazio.</p>

<pre><code class="javascript">if (letter == &quot;&quot;) return; // Ignore it if it's empty
</code></pre>



<br>
<h3> Substituir os asteriscos </h3>

<p>Agora que temos a letra a usar temos de substituir os asteriscos correspondentes por ela. Para isso vamos usar outro ciclo.</p>

<pre><code class="javascript">for(var i = 0; i &lt; word.length; i++) {
	(...)
}
</code></pre>

<p>Isto é um ciclo for. Tem a seguinte estrutura:</p>

<pre><code class="javascript">for(inicialização; condição; incremento) operação;
</code></pre>

<p>Funciona da seguinte forma:</p>
<ul>
	<li>Primeiro é executada a inicialização.</li>
	<li>Depois, enquanto a condição for valida, é executada sucessivamente a operação seguida do incremento.</li>
</ul>
<p>É equivalente ao seguinte código:</p>
<pre><code class="javascript">inicializa&ccedil;&atilde;o; 
while(condi&ccedil;&atilde;o) {
	opera&ccedil;&atilde;o;
	incremento;
}
</code></pre>

<p>Efetivamente, com este ciclo vamos ter uma operação que será efetuada varias vezes em que cada vez i toma incrementalmente os valores de 0 até word.length-1.</p>

<p>Por causa da forma como as strings (pedaços de texto) funcionam em javascript a maneira mais fácil de substituir os asteriscos é construir a string de novo. Assim, vamos começar com uma string vazia e um a um vamos introduzir os caracteres corretos.</p>

<pre><code class="javascript">var newWord = &quot;&quot;;

// Iterate over the solution's letters and see if the input letter is there. Construct a new word based			
for(var i = 0; i &lt; word.length; i++) {
	
	if (solution[i] == letter) { 
		// Add the letter to the word
		newWord = newWord + letter;
	} else {
		// Keep the simbol that was in this position before
		newWord = newWord + word[i];
	}
	
}
word = newWord;
</code></pre>

<p>Colocamos um if dentro do ciclo. Se a letra que estamos a 
analisar atualmente na solução (obtida através de solution[i]) 
for igual à letra inserida pelo jogador colocamo-la na nova 
palavra. Senão colocamos na nova palavra a letra ou asterisco 
que já lá estava na palavra antiga.</p>

<p>No fim do ciclo colocamos a nova palavra de volta na variável word.</p>

<p>Para terminar a função tryLetter temos de fazer chamar resetInterface() para colocar as alterações na interface.</p>

<br>
<p>Se testarmos agora o jogo deverá aceitar letras como input e deve substituir corretamente os asteriscos. Porém ainda não conta com jogadas erradas.</p>

<img src="images/hangman-3.png"></img><br>



<br>
<h3> Contar os erros </h3>

<p>Falta agora adicionar a letra do jogador à lista de letras falhadas caso não esteja na solução. Sabemos que uma jogada foi bem-sucedida  se pelo menos uma letra da solução for igual à letra introduzida.</p>

<p>Para sabermos isto vamos criar uma variável fail que indica se a jogada não foi bem-sucedida  ou não. Partimos do principio que não foi bem-sucedida  e durante o ciclo atualizamos a variável fail caso encontremos a letra introduzida.</p>

<p>O nosso ciclo fica então assim:</p>

<pre><code class="javascript">var fail = true; // Assume it is a fail
var newWord = &quot;&quot;;

// Iterate over the solution's letters and see if the input letter is there. Construct a new word based			
for(var i = 0; i &lt; word.length; i++) {
	if (solution[i] == letter) { 
		// Lable this letter as a success
		fail = false;
		// Add the letter to the word
		newWord = newWord + letter;
	} else (...)
}
word = newWord;
</code></pre>

<p>Depois do ciclo apenas temos de adicionar a letra à lista de letras falhadas caso a variável fail seja verdadeira.</p>

<pre><code class="javascript">if (fail) fails.push(letter); // In case of fail, add this letter to fail list
</code></pre>

<p>Com isto o nosso enforcado fica pronto :)</p>

<img src="images/hangman-4.png"></img><br>



<br>
<h2> Possíveis Melhorias </h2>

<p>Apesar de funcional, o nosso enforcado ainda tem espaço para melhorias. Para além de adicionar mais palavras propomos que implemente as seguintes melhorias:</p>

<ol>
	<li>Se introduzirmos uma letra correta que já tenha sido introduzida antes a palavra fica na mesma mas não é dado nenhum feedback. Adicione uma mensagem para quando uma letra repetida for introduzida. <br>
	Sugestão: Há varias formas de fazer isto. Podemos percorrer a palavra à procura da letra antes de fazer a substituição dos asteriscos ou podemos usar o ciclo de substituição e ter uma variável repeated semelhante à variável fail.</li>
	<br>
	<li>Da mesma forma, se introduzirmos uma letra errada que já tenha sido introduzida antes esta ficará na lista de letras erradas e contará como um erro. Adicione uma verificação para que isto não aconteça e adicione uma mensagem de aviso para quando acontecer.</li>
	<br>
	<li>Ter de carregar no botão de try é chato. Seria mais intuitivo poder carregar na tecla Enter. Implemente este comportamento.<br>
	Sugestão: Existe um parâmetro onkeydown nos elementos html ao qual podemos passar uma função. Essa função recebe um parâmetro event com informações sobre a tecla carregada. Procure mais informações sobre os eventos do teclado em html e descubra o código da tecla enter.
	</li>
</ol>

<br>
<br>
<br>
<a href="./">Índice</a>
<br>
<br>

</body> 