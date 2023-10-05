console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#ffa41b";
    tempLoad();
}, 5000);


tempLoad();

const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valeTemp);


    // Convert temperature from Celcius to Fahrenheit
    const celTOfah = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32);
        return fahrenheit;
    }

    // Covert temperature from Celcius to Kelvin
    const celTokel = (cel) => {
        let kelvin = (cel + 273.15)
        return kelvin;
    }

    // Convert temperature from Fahrenheit to Celsius
    const fahTOcel = (fehr) => {
        let celsius = ((fehr - 32) * 5 / 9);
        return celsius;
    }

    // Convert temperature from Fahrenheit to Kelvin
    const fahTOkel = (fehr) => {
        let kelvin = (5 / 9 *(fehr + 459.67));
        return kelvin;
    }

    // Convert temperature from Kelvin to Celsius
    const kelTocel = (kel) => {
        let celsius = (kel - 273.15)
        return celsius;
    }
    
    // Convert temperature from Kelvin to Fahrenheit
    const kelTofah = (kel) => {
        let fahrenheit = (9/5*(kel - 273.15)+32)
        return fahrenheit;
    }


    let result;
    if (valeTemp == "cel") {
        result = celTOfah(numberTemp);
        result = celTokel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
        document.getElementById('resultContainer').innerHTML = `=${result}°Kelvin`;
    } else if (valeTemp == "fah") {
        result = fahTOcel(numberTemp);
        result = fahTOkel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
        document.getElementById('resultContainer').innerHTML = `= ${result}°Kelvin`;
    }else{
        result = kelTocel(numberTemp);
        result = kelTofah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    }

    setTimeout(() => {
        window.location.reload();
    }, 1500);
}

