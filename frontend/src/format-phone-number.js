function formatPhoneNumber(input) {
    // Remove todos os caracteres que não são números
    var cleaned = ('' + input).replace(/\D/g, '');

    // Formata o número de telefone
    var match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }

    return input;
}

function handlePhoneNumberInput(event) {
    // Obtém o elemento de input
    var phoneNumberInput = event.target;

    // Obtém o valor atual do input
    var phoneNumber = phoneNumberInput.value;

    // Remove caracteres em excesso
    if (phoneNumber.length > 14) {
        phoneNumberInput.value = phoneNumber.slice(0, 14);
        return;
    }

    // Formata o número de telefone
    var formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    // Atualiza o valor do input com o número de telefone formatado
    phoneNumberInput.value = formattedPhoneNumber;
}

// Adiciona um evento de escuta de teclado ao input para chamar a função handlePhoneNumberInput() a cada tecla pressionada
document.addEventListener('DOMContentLoaded', function() {
    var phoneNumberInput = document.getElementById('phone-number-input');
    phoneNumberInput.addEventListener('input', handlePhoneNumberInput);
});