const nodes = document.querySelectorAll('tr[class="total"] td');
const [_, totalCals, carbs, fat, protein] = Array.prototype.map.call(nodes, ele => {
    const raw = ele.innerHTML;
    return parseInt(raw.replace(/,/g, ''));
});

const round = v => Math.round(v * 100) / 100;
const calcRatio = v => round(v * 100 / totalCals);

const htmlString = `
    <tr class="total ratios">
        <td class="first"> Calorie % </td>
        <td> - </td>
        <td> ${calcRatio(carbs * 4)}% </td>
        <td> ${calcRatio(fat * 9)}% </td>
        <td> ${calcRatio(protein * 4)}% </td>
        <td> - </td>
        <td> - </td>
    </tr>
`;
document.querySelectorAll('.table0 .total.remaining')[0].insertAdjacentHTML('afterend', htmlString);
