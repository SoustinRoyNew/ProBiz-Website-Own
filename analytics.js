const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const body = document.body;

const darkMode = document.querySelector('.dark-mode');
const darklogo = document.getElementsByClassName('logo-dark');
const lightlogo = document.getElementsByClassName('logo-light');

let valueDisplays = document.querySelectorAll(".num");

// if(valueDisplays.string.length >= 6) {
//     valueDisplays.style.color = 'red';
// }

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    // document.getElementsByClassName('logo active').style.visibility = "visible";
    // if(document.body.classList.contains('dark-mode-variables')){
    //     darklogo.style.visibility = 'visible';
    //     lightlogo.style.visibility = 'hidden';
    // } else {
    //     darklogo.style.visibility = 'hidden';
    //     lightlogo.style.visibility = 'visible';
    // }
    // document.getElementsByClassName('logo').style.visibility = "hidden";
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

// function movePoint(pointNum, bottomPercent, leftPercent) {
//     var point = document.getElementById('point' + pointNum);
//     point.style.bottom = bottomPercent + '%';
//     point.style.left = leftPercent + '%';
// }

// function switchToYearly() {
//     movePoint(1, 20, 20); // Example data for yearly
//     movePoint(2, 50, 70); // Example data for yearly
//     movePoint(3, 80, 40); // Example data for yearly
// }

// function switchToMonthly() {
//     movePoint(1, 30, 30); // Example data for monthly
//     movePoint(2, 60, 60); // Example data for monthly
//     movePoint(3, 90, 90); // Example data for monthly
// }

// function switchToWeekly() {
//     movePoint(1, 40, 40); // Example data for weekly
//     movePoint(2, 70, 10); // Example data for weekly
//     movePoint(3, 100, 80); // Example data for weekly
// }

// function movePoint(pointNum, bottomPercent, leftPercent) {
//     var point = document.getElementById('point' + pointNum);
//     point.style.bottom = bottomPercent + '%';
//     point.style.left = leftPercent + '%';
// }

// document.addEventListener("DOMContentLoaded", function(event) { 
//     document.getElementById("weekly").click();
// });

function switchToYearly() {
    movePoint('point1', 20, 20); // Example data for yearly
    movePoint('point2', 50, 70); // Example data for yearly
    movePoint('point3', 80, 40); // Example data for yearly
    connectPoints('line1', 'point1', 'point2');
    connectPoints('line2', 'point2', 'point3');
    hideLine('line3');
}

function switchToMonthly() {
    movePoint('point1', 30, 30); // Example data for monthly
    movePoint('point2', 60, 60); // Example data for monthly
    movePoint('point3', 90, 90); // Example data for monthly
    connectPoints('line1', 'point1', 'point2');
    connectPoints('line2', 'point2', 'point3');
    hideLine('line3');
}

function switchToWeekly() {
    movePoint('point1', 40, 40); // Example data for weekly
    movePoint('point2', 70, 10); // Example data for weekly
    movePoint('point3', 100, 80); // Example data for weekly
    connectPoints('line1', 'point1', 'point2');
    connectPoints('line2', 'point2', 'point3');
    showLine('line3');
}

function movePoint(pointId, bottomPercent, leftPercent) {
    var point = document.getElementById(pointId);
    point.style.bottom = bottomPercent + '%';
    point.style.left = leftPercent + '%';
}

function connectPoints(lineId, point1Id, point2Id) {
    var line = document.getElementById(lineId);
    var point1 = document.getElementById(point1Id);
    var point2 = document.getElementById(point2Id);
    var top1 = parseFloat(point1.style.bottom) + point1.offsetHeight / 2;
    var left1 = parseFloat(point1.style.left) + point1.offsetWidth / 2;
    var top2 = parseFloat(point2.style.bottom) + point2.offsetHeight / 2;
    var left2 = parseFloat(point2.style.left) + point2.offsetWidth / 2;
    var distance = Math.sqrt(Math.pow(top2 - top1, 2) + Math.pow(left2 - left1, 2));
    var angle = Math.atan2(left2 - left1, top2 - top1) * (180 / Math.PI);
    line.style.width = distance + 'px';
    line.style.top = (top1 + top2) / 2 + 'px';
    line.style.left = (left1 + left2) / 2 + 'px';
    line.style.transform = 'rotate(' + angle + 'deg)';
}

function hideLine(lineId) {
    var line = document.getElementById(lineId);
    line.style.display = 'none';
}

function showLine(lineId) {
    var line = document.getElementById(lineId);
    line.style.display = 'block';
}
