document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    alert(`Thank you for subscribing, ${name}!`);
    // 여기에서 서버로 데이터를 보내는 코드를 추가할 수 있습니다.
});

function subscribe(plan) {
    alert(`You have selected the ${plan} plan.`);
    // 여기에서 서버로 구독 데이터를 보내는 코드를 추가할 수 있습니다.
}
