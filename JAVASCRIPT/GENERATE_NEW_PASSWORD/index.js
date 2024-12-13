
const Password_Length = 12;

const Include_LowerCase = true;

const Include_UpperCase = true;

const Include_Numbers = true;

const Include_Symbols = true;

function generate_password()
{
   const _Password_Length = Password_Length; 
   const _Include_LowerCase = Include_LowerCase; 
   const _Include_UpperCase = Include_UpperCase; 
   const _Include_Numbers = Include_Numbers; 
   const _Include_Symbols = Include_Symbols;

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const numberChars = "0123456789";

    const symbolChars = "~!@#$%^&*()_+-=|\/?<>";

    let allowedChars = "";

    let password = "";

    allowedChars += _Include_LowerCase ? lowerCaseChars : "";

    allowedChars += _Include_UpperCase ? upperCaseChars : "";

    allowedChars += _Include_Numbers ? numberChars : "";

    allowedChars += _Include_Symbols ? symbolChars : "";

    if(_Password_Length <= 0)
    {
        return `(Password Length must be atleat 1 character or a number)`;
    }
    else if(allowedChars.length === 0)
    {
        return `(Password Length must be atleat 1 character or a number)`;
    }

    for(let i=0 ; i < _Password_Length ; i++)
    {
        const random_Index = Math.floor(Math.random() * allowedChars.length);

        password += allowedChars[random_Index];
    }

    return password;
}

const New_Password = generate_password();//Password_Length, Include_LowerCase, Include_UpperCase, Include_Numbers, Include_Symbols);

console.log(`Generated Password is ${New_Password}`);

const Result = document.getElementById("result");

Result.textContent = `New Password is viewed as ${New_Password}`;
