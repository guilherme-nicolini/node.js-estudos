try {
    const listaDeProdutosDisponiveis = [
        'pao',
        'leite',
        'cafe',
        'laranja',
        'macarrao',
        'sabonete',
        'detergente',
    ];

    const listaDeArgumentos = process.argv.slice(2);

    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    })

    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós temos: ${produto}, quantos vai querer hoje ?`))

    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    });

    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Infelizmente este produto não temos por hora 😞: ${argumento}`));

    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto esta disponivel:${produto}`));
} catch (error) {
    console.log("Não foi possivel executar pedido de compra")
}

