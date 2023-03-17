function tabuada() {
    let num = document.querySelector('#txtnum')
    let seltab = document.querySelector('#seltab')
    let n = Number(num.value)
    seltab.innerText = null
    for (let c = 0; c <= 10; c++) {
        let item = document.createElement('option')
        let tab = n * c
        item.innerText += `${n} X ${c} = ${tab}`
        seltab.appendChild(item)
    }
}