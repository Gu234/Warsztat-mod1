$(() => {
    const calcInputs = $('#calculator form input[type=number]');
    const checkboxes = $('#calculator form input[type=checkbox]');
    const selectBox = $('#calculator select');
    const result = $('#calculator .result');
    const totalCost = result.find('.result__total').children().eq(1);
    const partials = [0, 0, 0, 0, 0];

    calcInputs.eq(0).on('change', function () {
        const inputValue = $(this).val();
        partials[0] = parseInt(inputValue) * 0.5;
        if (inputValue > 0) {
            result.children().eq(0).css('visibility', 'visible');
            result.children().children().eq(1).text(`${inputValue} * $0.5`);
            result.children().children().eq(2).text(`$${inputValue*0.5}`);
        } else {
            alert('Natural numbers only');
        }
        totalCost.text(`$${partials.reduce((a,b)=>a+b)}`);
    });

    calcInputs.eq(1).on('change', function () {
        const inputValue = $(this).val();
        partials[1] = parseInt(inputValue) * 0.25;

        if (inputValue > 0) {
            result.children().eq(1).css('visibility', 'visible');
            result.children().eq(1).children().eq(1).text(`${inputValue} * $0.25`);
            result.children().eq(1).children().eq(2).text(`$${inputValue*0.25}`);
        } else {
            alert('Natural numbers only');
        }
        totalCost.text(`$${partials.reduce((a,b)=>a+b)}`);
    });

    checkboxes.eq(0).on('click', () => {
        if (result.children().eq(3).css('visibility') === 'hidden') {
            result.children().eq(3).css('visibility', 'visible');
            result.children().eq(3).children().eq(1).text(`$30`);
            partials[3] = 30;
        } else {
            result.children().eq(3).css('visibility', 'hidden');
            partials[3] = 0;
        }
        totalCost.text(`$${partials.reduce((a,b)=>a+b)}`);
    });

    checkboxes.eq(1).on('click', () => {
        if (result.children().eq(4).css('visibility') === 'hidden') {
            result.children().eq(4).css('visibility', 'visible');
            result.children().eq(4).children().eq(1).text(`$5`);
            partials[4] = 5;
        } else {
            result.children().eq(4).css('visibility', 'hidden');

            partials[4] = 0;
        }
        totalCost.text(`$${partials.reduce((a,b)=>a+b)}`);
    });
    selectBox.on('change', () => {
        if (selectBox.val() === 'basic') {
            result.children().eq(2).css('visibility', 'visible');
            partials[2] = 0;
            result.children().eq(2).children().eq(1).text('Basic');
            result.children().eq(2).children().eq(2).text(`$${0}`);

        } else if (selectBox.val() === 'professional') {
            result.children().eq(2).css('visibility', 'visible');
            partials[2] = 25;
            result.children().eq(2).children().eq(1).text('Professional');
            result.children().eq(2).children().eq(2).text(`$${25}`);

        } else if (selectBox.val() === 'premium') {
            result.children().eq(2).css('visibility', 'visible');
            partials[2] = 60;
            result.children().eq(2).children().eq(1).text('Premium');
            result.children().eq(2).children().eq(2).text(`$${60}`);

        } else {
            result.children().eq(2).css('visibility', 'hidden');
            partials[2] = 0;

        }
        totalCost.text(`$${partials.reduce((a,b)=>a+b)}`);

    })


    const hamburgerIcon = $('.footerAndHeaderContainer i');

    hamburgerIcon.on('click', function(){
        hamburgerIcon.toggleClass('fa-bars');
        hamburgerIcon.toggleClass('fa');
        hamburgerIcon.toggleClass('fas');
        hamburgerIcon.toggleClass('fa-times');
        if (hamburgerIcon.hasClass('fas')){
            const menuList = $('<ul class="menu"><li>why us</li><li>benefits</li><li>prices</li><li>contact</li></ul>');
            $('.shadow').after(menuList);
        }else{
            $('.shadow').next().remove();
        }

    })
})