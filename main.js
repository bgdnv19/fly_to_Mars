
const yearSelect = document.getElementById('birth-year');
const currentYear = new Date().getFullYear();
for (let year = currentYear; year >= 1900; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+\(\s\)\d\-]{10,20}$/;
    return phone.length >= 10;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

const form = document.getElementById('mars-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const surname = document.getElementById('surname').value.trim();
    const name = document.getElementById('name').value.trim();
    const patronymic = document.getElementById('patronymic').value.trim();
    const surnameLat = document.getElementById('surname-lat').value.trim();
    const nameLat = document.getElementById('name-lat').value.trim();
    const birthDay = document.getElementById('birth-day').value;
    const birthMonth = document.getElementById('birth-month').value;
    const birthYear = document.getElementById('birth-year').value;
    const maritalStatus = document.getElementById('marital-status').value;
    const education = document.getElementById('education').value;
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const agreement = document.getElementById('agreement').checked;
    
    const errorIds = ['surname-error', 'name-error', 'surname-lat-error', 'name-lat-error', 
                      'birth-error', 'marital-error', 'education-error', 'phone-error', 
                      'email-error', 'agreement-error'];
    errorIds.forEach(id => hideError(id));
    
    const inputIds = ['surname', 'name', 'surname-lat', 'name-lat', 'marital-status', 
                      'education', 'phone', 'email'];
    inputIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.remove('error');
    });
    
    let isValid = true;
   
    if (!surname) {
        showError('surname-error', 'Введите фамилию');
        document.getElementById('surname').classList.add('error');
        isValid = false;
    }
    
    if (!name) {
        showError('name-error', 'Введите имя');
        document.getElementById('name').classList.add('error');
        isValid = false;
    }
    
    if (!surnameLat) {
        showError('surname-lat-error', 'Введите фамилию латиницей');
        document.getElementById('surname-lat').classList.add('error');
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(surnameLat)) {
        showError('surname-lat-error', 'Используйте только латинские буквы');
        document.getElementById('surname-lat').classList.add('error');
        isValid = false;
    }
    
    if (!nameLat) {
        showError('name-lat-error', 'Введите имя латиницей');
        document.getElementById('name-lat').classList.add('error');
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(nameLat)) {
        showError('name-lat-error', 'Используйте только латинские буквы');
        document.getElementById('name-lat').classList.add('error');
        isValid = false;
    }
    
    if (!birthDay || !birthMonth || !birthYear) {
        showError('birth-error', 'Выберите полную дату рождения');
        isValid = false;
    }
    
    if (!maritalStatus) {
        showError('marital-error', 'Выберите семейное положение');
        document.getElementById('marital-status').classList.add('error');
        isValid = false;
    }
    
    if (!education) {
        showError('education-error', 'Выберите образование');
        document.getElementById('education').classList.add('error');
        isValid = false;
    }
    
    if (!phone) {
        showError('phone-error', 'Введите номер телефона');
        document.getElementById('phone').classList.add('error');
        isValid = false;
    } else if (!validatePhone(phone)) {
        showError('phone-error', 'Введите корректный номер телефона');
        document.getElementById('phone').classList.add('error');
        isValid = false;
    }
    
    if (!email) {
        showError('email-error', 'Введите email');
        document.getElementById('email').classList.add('error');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email-error', 'Введите корректный email (например: name@domain.ru)');
        document.getElementById('email').classList.add('error');
        isValid = false;
    }
    
    if (!agreement) {
        showError('agreement-error', 'Необходимо подтвердить согласие');
        isValid = false;
    }
  
    if (isValid) {
        const birthDate = `${birthDay}.${birthMonth}.${birthYear}`;
        
        const formData = {
            surname: surname,
            name: name,
            patronymic: patronymic || null,
            surname_latin: surnameLat,
            name_latin: nameLat,
            birth_date: birthDate,
            marital_status: maritalStatus,
            education: education,
            phone: phone,
            email: email,
            agreement: agreement
        };
        
        console.log(formData);
        
        console.log('=== ЗАЯВКА НА ПОЛЁТ НА МАРС ===');
        console.log(`Фамилия: ${surname}`);
        console.log(`Имя: ${name}`);
        console.log(`Отчество: ${patronymic || '—'}`);
        console.log(`Фамилия (лат): ${surnameLat}`);
        console.log(`Имя (лат): ${nameLat}`);
        console.log(`Дата рождения: ${birthDate}`);
        console.log(`Семейное положение: ${maritalStatus}`);
        console.log(`Образование: ${education}`);
        console.log(`Телефон: ${phone}`);
        console.log(`Email: ${email}`);
        console.log(`Согласие: ${agreement}`);
        console.log('================================');
        
        alert('Заявка успешно отправлена!');
      
    }
});