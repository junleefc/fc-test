document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    alert(`구독해 주셔서 감사합니다, ${name}님!`);
    // 여기에서 서버로 데이터를 보내는 코드를 추가할 수 있습니다.
});

function subscribe(plan) {
    alert(`'${plan}' 플랜을 선택하셨습니다.`);
    // 여기에서 서버로 구독 데이터를 보내는 코드를 추가할 수 있습니다.
}

function viewProducts() {
    alert('모든 제품 보기 페이지로 이동합니다.');
    // 여기에서 모든 제품 보기 페이지로 이동하는 코드를 추가할 수 있습니다.
}
