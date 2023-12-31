const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu');
const closeBtn = document.querySelector('#close-btn');
const themeToggle = document.querySelector('.theme-toggler');


//show sideBar
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
})
//close sideBar
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
})
//change theme
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})

//fill orders in table
orders.forEach((order) => {
    const tr = document.createElement('tr');
    const trContent = `<td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">${order.productDetails}</td>`;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)});
