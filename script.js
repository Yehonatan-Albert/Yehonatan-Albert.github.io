function printTable() {
    $('button,br').hide()
    print()
    $('button,br').show()
}

function saveTable() {
    let csv = ''
    for (let i = 0; i < 10; i++)
        csv += `${$('th').eq(i).text()},${$('td').eq(i).text()}\r\n`
    $(`<a href="${URL.createObjectURL(new Blob([csv]))}" download="Emuna.csv"></a>`).get(0).click()
}

function clearTable() {
    localStorage.data = ''
    location.reload()
}

$(window).on('input', () => {
    const arr = []
    $('td').each((i, e) => {
        arr.push($(e).text())
    })
    localStorage.data = JSON.stringify(arr)
})

$(document).ready(() => {
    if (localStorage.data) {
        const arr = JSON.parse(localStorage.data)
        $('td').each((i, e) => {
            $(e).text(arr[i])
        })
    }
})