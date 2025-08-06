function showImage() {
    const output = document.getElementById('output');
    output.innerHTML = `
    <div style="width: 200px; margin: auto;">
      <img src="pic/oos.png" alt="Sample" style="width: 100%; height: auto; border-radius: 10px;">
    </div>
  `;
}


function showParagraph() {
    const output = document.getElementById('output');
    output.innerHTML = '<p>HELLO WORLD!</p>';
}

function changeColor() {
    document.body.style.backgroundColor = '#5c5868ff';
}

function showAlert() {
    alert('Hello Tahsin!');
}

function table() {

}

function clearOutput() {
    const output = document.getElementById('output');
    output.innerHTML = '';
    document.body.style.backgroundColor = 'white';
}