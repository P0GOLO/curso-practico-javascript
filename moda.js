const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);
//Una lista que por medio de lista.map > función > condicionales
//hacemos que cuente la catidad de "núemros repetidos"