var story = {};

story["start"] = { text: "És um jovem aprendiz feiticeiro. O Merlim diz que para chegares a mago, tens que deixar a tua pacata aldeia e fazer uma longa viagem até à caldeira mais próxima. Lá terás que retirar uma pedra muito preciosa para colocares no teu cajado. Depois disso, serás tão forte quanto Merlim. Alinhas?",
	a_text:"Sim",
	a_target:"1",
	b_text:"Não",
	b_target:"2"
}

story["1"] = { text: "A tua viagem teve início na entrada de uma gruta, que por acaso é também um ninho de dragões. Segundo o Merlim, tens que raptar um dragão bebé para te acompanhar na viagem. Se não conseguires, terás que levar o cão do teu irmão, um Chihuahua.",
	a_text:"Agarras em todos os teus pertences e vais a casa buscar o cão do teu irmão.",
	a_target:"4",
	b_text:"Fazes uma tocha e entras sem medo na gruta.",
	b_target:"5"
}

story["2"] = { text: "Voltas para casa, o teu pai diz que és uma vergonha e que te desonra se não fizeres a viagem do Merlim.",
	a_text:"Fazes as malas e vais fazer a viagem.",
	a_target:"1",
	b_text:"Fazes frente ao teu pai e esperas ganhar o seu respeito.",
	b_target:"3"
}

story["3"] = { text: "Parabéns! Fizeste frente ao teu pai e, com esse acto de coragem, ele resolveu passar-te o negócio de família. És agora criador de Chihuahuas!" }

story["4"] = { text: "Voltaste ao caminho e encontras uma quinta à beira rio. Podes matar um porco para te alimentares durante uma parte da viagem. Como é que o fazes?",
	a_text:"Atiras uma seta.",
	a_target:"8",
	b_text:"Fazes um feitiço para o matar e trazer até a ti.",
	b_target:"9"
}

story["5"] = { text: "Tiveste sorte! A mãe dos dragões não estava. Agora tens um bebé dragão para cuidar. A primeira coisa que precisas de fazer é arranjar água e comida para ele. Nas aulas do Merlim aprendeste que os dragões bebés gostam muito de porcos, por isso diriges-te a uma quinta com um rio por perto. Precisas de matar um, como é que o fazes?",
	a_text:"Atiras uma seta.",
	a_target:"6",
	b_text:"Fazes um feitiço para o matar e trazer até a ti.",
	b_target:"7"
}

story["6"] = { text: "Ups! Não era o porco, era o dono da quinta que estava abaixado. O homem vem a correr para ti furioso! \n Como reages?",
	a_text:"Tentas petrificá-lo com um feitiço",
	a_target:"10",
	b_text:"Mandas o dragão assustá-lo",
	b_target:"12"
}

story["7"] = { text: "Boa! Agora já tens comida para o teu dragão e é mais fácil de o domesticar. Depois de lhe dares um bocado, resolves batizar o dragão. Que nome lhe dás? ",
	a_text:"Bobby",
	a_target:"12",
	b_text:"Smaug",
	b_target:"13"
}

story["8"] = { text: "Ups! Não era o porco, era o dono da quinta que estava abaixado. O homem vem a correr para ti furioso! \n Como reages?",
	a_text:"Tentas petrificá-lo com um feitiço",
	a_target:"10",
	b_text:"Mandas o teu cão assustá-lo.",
	b_target:"11"
}

story["9"] = { text: "Fizeste bem em praticar! O porco vem direitinho até a ti e o teu cão salta de alegria! Salta tanto que quase te chega aos joelhos! No entanto, convém não demorares muito tempo em comemorações pois a viagem ainda é longa. Para chegares à caldeira tens dois caminhos:",
	a_text:"Um desfiladeiro seguro mas muito longo",
	a_target:"14",
	b_text:"Um caminho antigo pelo meio da floresta que já não é usado à 5000 anos.",
	b_target:"15"
}

story["10"] = { text: "Fizeste bem em praticar!  Agora já tens comida para o teu dragão e é mais fácil de o domesticar. Depois de lhe dares um bocado, resolves batizar o dragão. Que nome lhe dás?",
	a_text:"Bobby",
	a_target:"12",
	b_text:"Smaug",
	b_target:"13"
}

story["11"] = { text: "O teu cão tem mais medo que tu e fugiu para um arbusto. O homem apanhou-te e levaste um grande sermão. 2 horas depois já podes voltar para a tua viagem. Para chegares à caldeira tens dois caminhos:",
	a_text:"Um desfiladeiro seguro mas muito longo",
	a_target:"14",
	b_text:"Um caminho antigo pelo meio da floresta que já não é usado à 5000 anos.",
	b_target:"15"
}

story["12"] = { text: "O teu dragão não gostou muito e lançou-te uma pequena labareda. Depois de apagares o fogo do teu cabelo, precisas de voltar para a viagem. Para chegares à caldeira tens dois caminhos:",
	a_text:"Um desfiladeiro seguro mas muito longo",
	a_target:"16",
	b_text:"Um caminho antigo pelo meio da floresta que já não é usado à 5000 anos.",
	b_target:"17"
}

story["13"] = { text: "O teu dragão adorou o nome! Ele começa a correr, enfia-se no meio das tuas pernas e voa até ao meio da caldeira. Estás agora diante de uma rocha que contém no seu interior a pedra preciosa que necessitas. À volta da pedra tens muitos esqueletos de outros feiticeiros e cavaleiros que por lá passaram. Que fazes?",
	a_text:"Fazes um feitiço para extrair a pedra",
	a_target:"18",
	b_text:"Tentas partir a pedra com uma picareta",
	b_target:"19"
}

story["14"] = { text: "6 meses depois consegues chegar ao centro da caldeira.  Estás agora diante de uma rocha que contém no seu interior a pedra preciosa que necessitas. À volta da pedra tens muitos esqueletos de outros feiticeiros e cavaleiros que por lá passaram. Que fazes?",
	a_text:"Fazes um feitiço para extrair a pedra",
	a_target:"20",
	b_text:"Tentas partir a pedra com uma picareta",
	b_target:"21"
}

story["15"] = { text: "Passado uma semana consegues chegar à caldeira. No entanto, o caminho era ardiloso e como consequência perdeste o teu chihuahua. Estás agora diante de uma rocha que contém no seu interior a pedra preciosa que necessitas. À volta da pedra tens muitos esqueletos de outros feiticeiros e cavaleiros que por lá passaram. Que fazes?",
	a_text:"Fazes um feitiço para extrair a pedra",
	a_target:"20",
	b_text:"Tentas partir a pedra com uma picareta",
	b_target:"21"
}

story["16"] = { text: "6 meses depois consegues chegar ao centro da caldeira.  Estás agora diante de uma rocha que contém no seu interior a pedra preciosa que necessitas. À volta da pedra tens muitos esqueletos de outros feiticeiros e cavaleiros que por lá passaram. Que fazes?",
	a_text:"Fazes um feitiço para extrair a pedra",
	a_target:"18",
	b_text:"Tentas partir a pedra com uma picareta",
	b_target:"19"
}

story["17"] = { text: "​Passado uma semana consegues chegar à caldeira. ​O caminho era ardiloso mas o teu dragão ajudou-te a ultrapassar os obstáculos.​ Estás agora diante de uma rocha que contém no seu interior a pedra preciosa que necessitas. À volta da pedra tens muitos esqueletos de outros feiticeiros e cavaleiros que por lá passaram. Que fazes?",
	a_text:"Fazes um feitiço para extrair a pedra",
	a_target:"18",
	b_text:"Tentas partir a pedra com uma picareta",
	b_target:"​19"
};

story["18"] = { text: "Consegues extrair com sucesso! No entanto o chão começa a tremer e da enorme pedra sai a sombra de um Merlim negro! Não tens tempo de colocar a pedra preciosa no cajado, que decides fazer?",
	a_text:"Defrontá-lo com a magia que conheces.",
	a_target:"22",
	b_text:"Foges no teu dragão.",
	b_target:"23"
}

story["19"] = { text: "Consegues partir a rocha e tiras a pedra que necessitas. No entanto o chão começa a tremer e da enorme rocha sai a sombra de um Merlim negro! Não tens tempo de colocar a pedra preciosa no cajado, que decides fazer?",
	a_text:"Defrontá-lo com a magia que conheces.",
	a_target:"22",
	b_text:"Foges no teu dragão.",
	b_target:"23"
}

story["20"] = { text: "Consegues extrair com sucesso! No entanto o chão começa a tremer e da enorme pedra sai a sombra de um Merlim negro! Não tens tempo de colocar a pedra preciosa no cajado, que decides fazer?",
	a_text:"Defrontá-lo com a magia que conheces.",
	a_target:"24",
	b_text:"Tentas fugir.",
	b_target:"25"
}

story["21"] = { text: "Consegues partir a rocha e tiras a pedra que necessitas. No entanto o chão começa a tremer e da enorme rocha sai a sombra de um Merlim negro! Não tens tempo de colocar a pedra preciosa no cajado, que decides fazer?",
	a_text:"Defrontá-lo com a magia que conheces.",
	a_target:"24",
	b_text:"Tentas fugir.",
	b_target:"25"
}

story["22"] = { text: "Tentas mandar todos os feitiços que sabes mas todos em vão. O teu dragão vai lançando chamas para a sombra, apesar se não fazer efeito, dá para o distrair. Enquanto isso, ganhas tempo para por a pedra no teu cajado e finalmente derrotas o Merlim negro. Parabéns! És agora um Mago com um dragão!"}

story["23"] = { text: "Acordas em tua casa, com a tua mãe ao teu lado. Ela diz-te que ficaste em apuros e o Merlim teve que te ir socorrer. Ao ver que tinhas um dragão e a pedra na tua posse, ele considerou-te um verdadeiro Mago, apesar de não teres tido coragem de enfrentar a sombra negra. Pode-se dizer que estás de parabéns, mas podias começar a viagem de novo..."}

story["24"] = { text: "Tentas mandar todos os feitiços que sabes mas todos em vão. Não sabes bem como mas aparece um dragão de outro aprendiz de feiticeiro que distrai a sombra negra. Enquanto isso, ganhas tempo para por a pedra no teu cajado e finalmente derrotas o Merlim negro. Parabéns! És agora um Mago!"}

story["25"] = { text: "Acordas em tua casa, com a tua mãe ao teu lado. Ela diz-te que ficaste em apuros e o Merlim teve que te ir socorrer. Dado que chegaste ao fim sem cão e sem pedra (perdeste-a enquanto fugias),  o Merlim diz que se realmente quiseres ser Mago, tens que começar de novo."}