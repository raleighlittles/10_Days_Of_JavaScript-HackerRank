
// On clicking either 0 or 1, add the corresponding text to the result inner html
// On clicking any operator, add that operator text to the result inner html
// On clicking button clear, clear the results field
// On clicking equals, evaluate the expression

document.getElementById('btn0').addEventListener('click', function()
{
  document.getElementById('res').insertAdjacentHTML('beforeend', '0');
});

document.getElementById('btn1').addEventListener('click', function()
{
  document.getElementById('res').insertAdjacentHTML('beforeend', '1');
});

function operatorAction(eve)
{
    var btn = eve.target;
    // Add the inner html for the operator buttons into the results field
    document.getElementById('res').insertAdjacentHTML('beforeend', btn.innerHTML);
}

document.getElementById('btnSum').onclick = operatorAction;
document.getElementById('btnMul').onclick = operatorAction;
document.getElementById('btnDiv').onclick = operatorAction;
document.getElementById('btnSub').onclick = operatorAction;

document.getElementById('btnClr').onclick = function()
{
    (document.getElementById('res').innerHTML) = "";
};

