let DataUsers = localStorage.getItem('DataUsers') ? JSON.parse(localStorage.getItem('DataUsers')) : [
    {
        id:         1,
        isAdmin:    1,
        name: "",
        email:      'admin123@gmail.com',
        password:   'admin123',
        cartItems: [
        ],
    },
];
let loginUser = JSON.parse(localStorage.getItem('loginUser'))
updateLocalStorage()
renderUser()
//Xử lý ẩn/hiện layout đăng nhập

function loginBtn(){
document.querySelector(".icon-user").onclick = function () {
    Object.assign(document.querySelector(".loginBackground").style, { // hiện lên nền background
        visibility: 'visible',      
        'animation-name': 'backgroundeffect1', // ẩn r hiện
    });
    Object.assign(document.querySelector(".loginBlock").style, {  // hiện lên block form
        display:'block',        
    });
};
document.querySelector(".btn").onclick = function () { // .btn là nút create ở gần footer
    Object.assign(document.querySelector(".loginBackground").style, {
        visibility: 'visible',      
        'animation-name': 'backgroundeffect1',
    });
    Object.assign(document.querySelector(".loginBlock").style, {
        display:'block',      
    });
};
document.querySelector(".closeLoginBlock img").onclick = function () { // nút dấu x để tắt form
    Object.assign(document.querySelector(".loginBackground").style, {
        'animation-name': 'backgroundefffect2', // hiện rồi ẩn
        visibility: 'hidden',      
    });
    Object.assign(document.querySelector(".loginBlock").style, {
        display:'none',
    });
};
var loginBackgroundClickState = 1
document.querySelector('.loginBlock').onclick = function(){  // xử lí khi nhấn vào form k bị ẩn đi
    loginBackgroundClickState = 0;
}
document.querySelector('.loginBackground').onclick = function(){
    if(loginBackgroundClickState === 1){
        Object.assign(document.querySelector(".loginBackground").style, {
            'animation-name': 'backgroundefffect2',
            visibility: 'hidden',      
        });
        Object.assign(document.querySelector(".loginBlock").style, {
            display:'none',
        });
    }
    loginBackgroundClickState = 1
}
}

function showPassword1(){
var showPasswordState = 0
document.querySelector(".password1").onclick = function(){
    if(showPasswordState === 0 ){
    document.querySelector(".password1").setAttribute('src','./asset/img/show.png')
    document.querySelector("#password1").setAttribute('type','text')
    showPasswordState = 1;
    }
    else{
    document.querySelector(".password1").setAttribute('src','./asset/img/hide.png')
    document.querySelector("#password1").setAttribute('type','password')
    showPasswordState = 0;
    }
}
}
function showPassword2(){
var showPasswordState = 0
document.querySelector(".password2").onclick = function(){
    if(showPasswordState === 0 ){
    document.querySelector(".password2").setAttribute('src','./asset/img/show.png')
    document.querySelector("#password2").setAttribute('type','text')
    showPasswordState = 1;
    }
    else{
    document.querySelector(".password2").setAttribute('src','./asset/img/hide.png')
    document.querySelector("#password2").setAttribute('type','password')
    showPasswordState = 0;
    }
}
}
function showPassword3(){
var showPasswordState = 0
document.querySelector(".password_confirmation").onclick = function(){
    if(showPasswordState === 0 ){
    document.querySelector(".password_confirmation").setAttribute('src','./asset/img/show.png')
    document.querySelector("#password_confirmation").setAttribute('type','text')
    showPasswordState = 1;
    }
    else{
    document.querySelector(".password_confirmation").setAttribute('src','./asset/img/hide.png')
    document.querySelector("#password_confirmation").setAttribute('type','password')
    showPasswordState = 0;
    }
}
}

const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
tabs.forEach((tab, index) => {
   const pane = panes[index];
   tab.onclick = function () {
       document.querySelector(".tab-item.active").classList.remove("active");
       document.querySelector(".tab-pane.active").classList.remove("active");
       this.classList.add("active");
       pane.classList.add("active");
   };
});

// Đối tượng `Validator`
function Validator(options) {
   function getParent(element, selector) {
       while (element.parentElement) {
           if (element.parentElement.matches(selector)) {
               return element.parentElement;
           }
           element = element.parentElement;
       }
   }

   var selectorRules = {};

   // Hàm thực hiện validate
   function validate(inputElement, rule) {
       var errorElement = getParent(
           inputElement,
           options.formGroupSelector
       ).querySelector(options.errorSelector);
       var errorMessage;
       // Lấy ra các rules của selector
       var rules = selectorRules[rule.selector];
       // Lặp qua từng rule & kiểm tra
       // Nếu có lỗi thì dừng việc kiểm
       for (var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
           if (errorMessage) break;
       }
       if (errorMessage) {
           errorElement.innerText = errorMessage;
            var validateElement = getParent(
                inputElement,
                options.formGroupSelector
            ).querySelector('.div');
                Object.assign(validateElement.style, {
                'border-color': 'red',
            })
       } else {
           errorElement.innerText = "";
           var validateElement = getParent(
                inputElement,
                options.formGroupSelector
            ).querySelector('.div');
                Object.assign(validateElement.style, {
                'border-color': '#b3b3b3',
            })
       }
       return !errorMessage;
   }

   // Lấy element của form cần validate
   var formElement = document.querySelector(options.form);
   if (formElement) {
       // Khi submit form
       formElement.onsubmit = function (e) {
           e.preventDefault();
           var isFormValid = true;
           // Lặp qua từng rules và validate
           options.rules.forEach(function (rule) {
               var inputElement = formElement.querySelector(rule.selector);
               var isValid = validate(inputElement, rule);
               if (!isValid) {
                   isFormValid = false;
               }
           });

           if (isFormValid) {
               // Trường hợp submit với javascript
               if (typeof options.onSubmit === "function") {
                   var enableInputs = formElement.querySelectorAll("[name]");
                   var formValues = Array.from(enableInputs).reduce(function (values,input) {
                        values[input.name] = input.value
                        return values;
                   }, {});
                   options.onSubmit(formValues);
               }
               // Trường hợp submit với hành vi mặc định
               else {
                   formElement.submit();
               }
           }
       };

       // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
       options.rules.forEach(function (rule) {
           // Lưu lại các rules cho mỗi input
           if (Array.isArray(selectorRules[rule.selector])) {   
               selectorRules[rule.selector].push(rule.test);
           } else {
               selectorRules[rule.selector] = [rule.test];
           }

           var inputElement = formElement.querySelector(rule.selector);

           if(inputElement) {
               // Xử lý trường hợp blur khỏi input
               inputElement.onblur = function () {
                   validate(inputElement, rule);
               };

               // Xử lý mỗi khi người dùng nhập vào input
               inputElement.oninput = function () {
                    var errorElement = getParent(
                       inputElement,
                       options.formGroupSelector
                    ).querySelector(options.errorSelector);
                    errorElement.innerText = "";
                    var validateElement = getParent(
                        inputElement,
                        options.formGroupSelector
                    ).querySelector('.div');
                    Object.assign(validateElement.style, {
                        'border-color': '#b3b3b3',
                    })

                    document.querySelector('.loginError').innerHTML = ''
               };
   }})}
}

// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
   return {
       selector: selector,
       test: function (value) {
           return value.trim()
               ? undefined
               : message || "Vui lòng nhập trường này";
       },
   };
};
Validator.isEmail = function (selector, message) {
   return {
       selector: selector,
       test: function (value) {
           var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           return regex.test(value)
               ? undefined
               : message || "Trường này phải là email";
       },
   };
};
Validator.minLength = function (selector, min, message) {
   return {
       selector: selector,
       test: function (value) {
           return value.length >= min
               ? undefined
               : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
       },
   };
};
Validator.isConfirmed = function (selector, getConfirmValue, message) {
   return {
       selector: selector,
       test: function (value) {
           return value === getConfirmValue()
               ? undefined
               : message || "Giá trị nhập vào không chính xác";
       },
   };
};
runCheckRegister()
runCheckLogin()
//submit
function runCheckRegister() {
    Validator({
        form: '#form-2',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#email2'),
            Validator.isRequired('#name'),
            Validator.minLength('#password2', 6),
            Validator.isRequired('#password_confirmation'),
            Validator.isConfirmed('#password_confirmation', function () {
                return document.querySelector('#form-2 #password2').value;
            }, 'Mật khẩu nhập lại không chính xác')
        ],
        onSubmit: function (data) {
            checkRegister(data)
        }
})
function checkRegister(data) {
    let isFound = false;
    let errorMessage = ``
    for (let DataUser of DataUsers) {
        if (data.email === DataUser.email) {
            isFound = true;
            errorMessage = `Email này đã được đăng ký! `
        }
        if (isFound) {
            document.querySelector('.loginError').innerHTML = `${errorMessage}`
            break;
        }
    }
    if (!isFound) {
       updateDataUsers(data)
       window.location = "./index.html"
    }
 }
 function setId(){
    let max=DataUsers[0].id
    for(let i=1;i<DataUsers.length;i++){
        if(DataUsers[i].id > max) max=DataUsers[i].id
    }
    return max+1;
 }
 function updateDataUsers(data) {
    DataUsers.push(
        {
            id: setId(),
            isAdmin: 0,
            name: data.name,
            email: data.email,
            password: data.password,
            cartItems: [
            ],
        }
    )
    loginUser = DataUsers[DataUsers.length - 1];
    updateLocalStorage();
}

}
function runCheckLogin() {
    Validator({
        form: '#form-1',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        rules: [
            Validator.isEmail('#email1'),
            Validator.isRequired('#password1'),
            Validator.minLength('#password1', 6),
        ],
        onSubmit: function (data) {
            checkLogin(data)
        }
    });

function checkLogin(data) {
    let isFound = false;
    for (let DataUser of DataUsers) {
       if (data.email === DataUser.email && data.password === DataUser.password) {
          isFound = true;
          loginUser = DataUser;
          updateLocalStorage();
          window.location = "./index.html"
       }
    }
    if (!isFound) {
        document.querySelector('.loginError').innerHTML = `Tài khoản hoặc mật khẩu không chính xác!`
    }
 }
} 
 function renderUser(){
    var iconUser = document.querySelector('.iconUser')
    if(!loginUser){
    iconUser.innerHTML = `<img src="./asset/img/header-user.svg" alt="" class="icon-user" />`
    loginBtn()
    showPassword1()
    showPassword2()
    showPassword3()
    }
    else{
        if(loginUser.isAdmin === 1){
            iconUser.innerHTML = `<img src="./asset/img/admin-delete-product.png" alt="" class="icon-logout" onclick ='logout()' />`
            window.location = "./admin.html";
            loginUser = null;
            updateLocalStorage();
        }
        else{
            iconUser.innerHTML = `<img src="./asset/img/admin-logout-icon.svg" alt="" class="icon-logout" onclick ='logout()'/>`
        }
    }
 }
 function updateLocalStorage() {
    //Nếu không JSON.stringify thì console.log(DataUsers) sẽ ra [object Object]
    let usersData = JSON.stringify(DataUsers);
    let loginUserAccount = JSON.stringify(loginUser); 

    localStorage.setItem('DataUsers', usersData);
    localStorage.setItem('loginUser', loginUserAccount)
 }
 function logout() {
    loginUser = null;
    // updateLocalStorage();
    localStorage.setItem("loginUser", JSON.stringify(loginUser));
    window.location = "./index.html"
 }