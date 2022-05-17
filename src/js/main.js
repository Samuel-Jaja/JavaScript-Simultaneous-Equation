//ID TARGETING
const x1 = document.getElementById("x1");
const y1 = document.getElementById("y1");
const constant1 = document.getElementById("constant1");
const x2 = document.getElementById("x2");
const y2 = document.getElementById("y2");
const constant2 = document.getElementById("constant2");
let output = document.getElementById("output");

output.addEventListener("mouseout", () => {
    const x1 = document.getElementById("x1").value;
    const y1 = document.getElementById("y1").value;
    const constant1 = document.getElementById("constant1").value;
    const x2 = document.getElementById("x2").value;
    const y2 = document.getElementById("y2").value;
    const constant2 = document.getElementById("constant2").value;
    const lefths = math.matrix([
        [x1, y1],
        [x2, y2],
    ]);

    const righths = math.matrix([
        [constant1],
        [constant2]
    ]);
    let answer = math.multiply(math.inv(lefths), righths);
    output.innerText = answer;
});