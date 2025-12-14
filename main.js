const selectElement = document.getElementById('stream');
let stream = "";
let selectedValue = "";
const phy = [];
const chem = [];
const math = [];
const bio = [];
const eng = [];
const cs = [];
const ai = [];
const button = document.getElementById("calculateBtn");

selectElement.addEventListener('change', (event) => {
    selectedValue = event.target.value;
    if (selectedValue === "bio") {
        document.getElementById("math").style.visibility = "hidden";
        document.getElementById("bio").style.visibility = "visible";
        document.getElementById("ip").style.visibility = "visible";
        stream = "BPC";
    } else if (selectedValue === "math") {
        document.getElementById("math").style.visibility = "visible";
        document.getElementById("bio").style.visibility = "hidden";
        document.getElementById("ip").style.visibility = "visible";
        stream = "MPC";
    } else if (selectedValue === "both") {
        document.getElementById("math").style.visibility = "visible";
        document.getElementById("bio").style.visibility = "visible";
        document.getElementById("ip").style.visibility = "hidden";
        stream = "MBPC";
    }
});

button.addEventListener("click", function() {
    console.log("Button clicked!");

    // Clear arrays so repeated clicks don't accumulate values
    phy.length = chem.length = math.length = bio.length = eng.length = cs.length = ai.length = 0;

    const v = id => Number(document.getElementById(id).value) || 0;

    phy.push(Math.round(v("phy1") / 35 * 10));
    phy.push(Math.round(v("phy2") / 70 * 30));
    phy.push(Math.round(v("phy3") / 35 * 10));
    phy.push(Math.round(v("phy4") / 70 * 50));

    chem.push(Math.round(v("che1") / 35 * 10));
    chem.push(Math.round(v("che2") / 70 * 30));
    chem.push(Math.round(v("che3") / 35 * 10));
    chem.push(Math.round(v("che4") / 70 * 50));

    math.push(Math.round(v("mat1") / 40 * 10));
    math.push(Math.round(v("mat2") / 80 * 30));
    math.push(Math.round(v("mat3") / 40 * 10));
    math.push(Math.round(v("mat4") / 80 * 50));

    bio.push(Math.round(v("bio1") / 35 * 10));
    bio.push(Math.round(v("bio2") / 70 * 30));
    bio.push(Math.round(v("bio3") / 35 * 10));
    bio.push(Math.round(v("bio4") / 70 * 50));

    eng.push(Math.round(v("eng1") / 40 * 10));
    eng.push(Math.round(v("eng2") / 80 * 30));
    eng.push(Math.round(v("eng3") / 40 * 10));
    eng.push(Math.round(v("eng4") / 80 * 50));

    cs.push(Math.round(v("c1") / 35 * 10));
    cs.push(Math.round(v("c2") / 70 * 30));
    cs.push(Math.round(v("c3") / 35 * 10));
    cs.push(Math.round(v("c4") / 70 * 50));

    ai.push(Math.round(v("a1") / 40 * 10));
    ai.push(Math.round(v("a2") / 50 * 30));
    ai.push(Math.round(v("a3") / 40 * 10));
    ai.push(Math.round(v("a4") / 50 * 50));

    const wPhy = phy.reduce((s, n) => s + n, 0);
    const wChem = chem.reduce((s, n) => s + n, 0);
    const wMath = math.reduce((s, n) => s + n, 0);
    const wBio = bio.reduce((s, n) => s + n, 0);
    const wEng = eng.reduce((s, n) => s + n, 0);
    const wCs = cs.reduce((s, n) => s + n, 0);
    const wAi = ai.reduce((s, n) => s + n, 0);

    let totalWeightage = 0;
    if (stream === "MPC") {
        totalWeightage = wPhy + wChem + wMath + wEng + wCs + wAi;
    } else if (stream === "BPC") {
        totalWeightage = wPhy + wChem + wBio + wEng + wCs + wAi;
    } else if (stream === "MBPC") {
        totalWeightage = wPhy + wChem + wMath + wBio + wEng + wAi;
    }

    document.getElementById("result1").innerText = "Your Percentage so far is: " + (totalWeightage / 240 * 100).toFixed(2) + "%";
    document.getElementById("result2").innerText = "Your Weightage is: " + (totalWeightage / 600 * 100).toFixed(2) + "%";
});
