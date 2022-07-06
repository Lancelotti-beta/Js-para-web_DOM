export const removeDataRepetidas = (datas) => {
    const dataUnica = []
    datas.forEach(data => {
        if (dataUnica.indexOf(data.data) === -1) {
            dataUnica.push(data.data)
        }
    });

    return dataUnica
}

export const ordenaData = (data) => {
    data.sort((a, b) => {
        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')

        return primeiraData - segundaData
    })
}
