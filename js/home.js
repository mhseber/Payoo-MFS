// console.log('Everything is ok lets go')

/**
 s-1 = add event handler
 prevent page reload after form submit
 s-2 = get money to be added to the account balance
 */





// step - 1 add an event handler to the add money button inside the form

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault();
    // console.log('money add success');

    // step-2 = get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-Number').value;
    console.log(pinNumberInput);

})
