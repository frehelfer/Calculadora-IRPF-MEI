// DOM Elements
const serviços = document.querySelector('#serviços');
const comércio = document.querySelector('#comércio');
const transporte = document.querySelector('#transporte');

const despesas = document.querySelector('#despesas');

const receitaBrutaApurado = document.querySelector('#receita-bruta-apurado');
const lucroApurado = document.querySelector('#lucro-apurado');
const lucroIsento = document.querySelector('#lucro-isento');
const lucroTributável = document.querySelector('#lucro-tributável');

// MASKS Setup
const masks = {
	money(value) {
		const cleanValue = +value.replace(/\D+/g, '');
		const options = { style: 'currency', currency: 'BRL' };
		return new Intl.NumberFormat('pt-br', options).format(cleanValue / 100);
	},
};

document.querySelectorAll('input').forEach(($input) => {
	const field = $input.dataset.js;

	$input.addEventListener(
		'input',
		(e) => {
			// Mask the value from input fields to BRL
			e.target.value = masks[field](e.target.value);

			// Get the value from input field
			const serviçosValue = +serviços.value.replace(/\D+/g, '') / 100;
			const comércioValue = +comércio.value.replace(/\D+/g, '') / 100;
			const transporteValue = +transporte.value.replace(/\D+/g, '') / 100;
			const despesasValue = +despesas.value.replace(/\D+/g, '') / 100;

			const options = { style: 'currency', currency: 'BRL' };

			//Receita Bruta Anual
			const receitaBrutaApuradoValue = serviçosValue + comércioValue + transporteValue;

			receitaBrutaApurado.innerText = Intl.NumberFormat('pt-br', options).format(
				receitaBrutaApuradoValue
			);

			// Lucro Apurado
			const lucroApuradoValue = receitaBrutaApuradoValue - despesasValue;

			if (lucroApuradoValue < 0) {
				lucroApurado.innerText = 'R$ 0,00';
			} else {
				lucroApurado.innerText = Intl.NumberFormat('pt-br', options).format(lucroApuradoValue);
			}

			// Lucro Isento
			const serviçosIsento = serviçosValue * 0.32;
			const comércioIsento = comércioValue * 0.08;
			const transporteIsento = transporteValue * 0.16;

			const lucroIsentoValue = serviçosIsento + comércioIsento + transporteIsento;

			lucroIsento.innerText = Intl.NumberFormat('pt-br', options).format(lucroIsentoValue);

			// Lucro Tributável
			const lucroTributavelValue = lucroApuradoValue - lucroIsentoValue;

			if (lucroTributavelValue < 0) {
				lucroTributável.innerText = 'R$ 0,00';
			} else {
				lucroTributável.innerText = Intl.NumberFormat('pt-br', options).format(
					lucroTributavelValue
				);
			}

			// Resultado
			const resultTitle = document.querySelector('#resultTitle');
			const resultText = document.querySelector('#resultText');

			if (lucroTributavelValue > 2855970) {
				resultTitle.innerText = 'Declaração Anual do IRPF OBRIGATÓRIA';
				resultText.innerText =
					'O Rendimento tributável ficou superiro a R$ 28.559,70. Sendo assim é necessário seguir os passos a seguir para fazer sua declaração.';
			} else {
				resultTitle.innerText = 'Declaração Anual do IRPF Não Obrigatória';
				resultText.innerText =
					'Atenção, o IRPF deve ser feito se você recebeu outros rendimentos como pessoa física e somado com o Lucro Tributável do MEI ficou superior a R$ 28.559,70.';
			}
		},
		false
	);
});
