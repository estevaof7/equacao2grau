document.querySelector('form').addEventListener('submit', function (parametro) {
    parametro.preventDefault();

    const a = Number(document.querySelector('#a').value);
    const b = Number(document.querySelector('#b').value);
    const c = Number(document.querySelector('#c').value);
    const validacao = document.querySelector('.validacao');
    const expressao = document.querySelector('.expressao');
    const raizes = document.querySelector('.raizes');
    const complexoOuReal = document.querySelector('.complexo-ou-real');

    function compOuR (rc) {
        return complexoOuReal.innerHTML = `${rc}`;
    }

    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || (a === 0 && b === 0 && c !== 0)) {
        validacao.innerHTML = 'Valores inválidos';
        compOuR(``);
        raizes.innerHTML = ``;
        expressao.innerHTML = ``;
    } else {
        validacao.innerHTML = '';
        if (a === 0) {
            if (b === 0) {
                expressao.innerHTML = `0 = 0`;
                raizes.innerHTML = ``;
                compOuR(``);
            } else {
                compOuR(` Real`);
                if (c === 0) {
                    expressao.innerHTML = `${b}x = 0`;
                    raizes.innerHTML = `x = 0`;
                } else {
                    if (c > 0) {
                        expressao.innerHTML = `${b}x + ${c} = 0`;
                    } else {
                        expressao.innerHTML = `${b}x - ${c * -1} = 0`;
                    }
                    raizes.innerHTML = `x = ${(c * -1) / b}`;
                }
            }
        } else {
            const delta = b**2 - 4 * a * c;
            if (delta === 0) {
                compOuR(` Real`);
                raizes.innerHTML = `x = ${(b * -1) / (a * 2)}`;
            } else if (delta > 0) {
                compOuR(`es Reais`);
                raizes.innerHTML = `x<sub>1</sub> = ${((b * -1) + (delta**(1/2))) / (a * 2)} </br>`;
                raizes.innerHTML += `x<sub>2</sub> = ${((b * -1) - (delta**(1/2))) / (a * 2)}`;
            } else if (delta < 0) {
                compOuR(`es Complexas`);
                raizes.innerHTML = `x<sub>1</sub> = ${(b * -1) / (a * 2)} + i*${((delta * -1)**(1/2)) / (a * 2)} </br>`;
                raizes.innerHTML += `x<sub>2</sub> = ${(b * -1) / (a * 2)} - i*${((delta * -1)**(1/2)) / (a * 2)}`;
            }

            if (b === 0) {
                if (c === 0) {
                    expressao.innerHTML = `${a}x<sup>2</sup> = 0`;
                } else {
                    if (c > 0) {
                        expressao.innerHTML = `${a}x<sup>2</sup> + ${c} = 0`;
                    } else {
                        expressao.innerHTML = `${a}x<sup>2</sup> - ${c * -1} = 0`;
                    }
                }
            } else {
                if (b > 0) {
                    if (c === 0) {
                        expressao.innerHTML = `${a}x<sup>2</sup> + ${b}x = 0`;
                    } else {
                        if (c > 0) {
                            expressao.innerHTML = `${a}x<sup>2</sup> + ${b}x + ${c} = 0`;
                        } else {
                            expressao.innerHTML = `${a}x<sup>2</sup> + ${b}x - ${c * -1} = 0`;
                        }
                    }
                } else {
                    if (c === 0) {
                        expressao.innerHTML = `${a}x<sup>2</sup> - ${b * -1}x = 0`;
                    } else {
                        if (c > 0) {
                            expressao.innerHTML = `${a}x<sup>2</sup> - ${b * -1}x + ${c} = 0`;
                        } else {
                            expressao.innerHTML = `${a}x<sup>2</sup> - ${b * -1}x - ${c * -1} = 0`;
                        }
                    }
                }
            }
        }
    }
})