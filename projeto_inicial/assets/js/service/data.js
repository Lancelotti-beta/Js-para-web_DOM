export const removeDataRepetidas = (datas) => {
    const dataUnica = []
    datas.forEach(data => {
        if (dataUnica.indexOf(data.data) === -1) {
            dataUnica.push(data.data)
        }
    });

    return dataUnica
}
