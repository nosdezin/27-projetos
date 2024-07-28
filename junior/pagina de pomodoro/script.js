let minutos = 0;
let segundos = 0;
let cronom = false;
let Status = "";
const btnControl = document.getElementById("ControlBtn");
const btnReset = document.getElementById("ResetBtn");
let pause = false;
let pomodoroIndice = 0;
const pomodoros = [25,5,25,5,25,5,25,15]

btnControl.onclick = () => {
  if (!cronom && !pause) {
    Status = "Hora de fazer a tarefa";
    document.querySelector("h3").innerText = `#${
      pomodoroIndice + 1
    } - ${Status}`;
    btnControl.innerText = "Pausar";
    minutos = pomodoros[0];
    cronom = true;
  } else {
    if (pause && !cronom) {
      btnControl.innerText = "Pausar";
      cronom = true;
      pause = false;
      btnReset.hidden = true;
    } else {
      if (cronom && !pause) {
        pause = true;
        cronom = false;
        btnControl.innerText = "Continuar";
        btnReset.hidden = false;
      }
    }
  }
};

btnReset.onclick = () => {
  cronom = false;
  pause = false;
  Status = "";
  pomodoroIndice = 0;
  btnControl.innerText = "Começar pomodoro";
  document.querySelector("body").classList.remove("break");
  btnReset.hidden = true;
  minutos = 0;
  segundos = 0;
  document.querySelector("h2").innerText = "00:00";
};

setInterval(() => {
  if (cronom) {
    if (segundos == 0) {
      if (minutos == 0 && minutos == 0) {
        pomodoroIndice++;
        if (pomodoroIndice >= 8) {
          minutos = 0;
          segundos = 1;
          pomodoroIndice = 0;
          btnControl.innerText = "reiniciar pomodoro";
          Status = "";
          document.querySelector("h3").innerText = "#0";
          document.querySelector("body").classList.remove("break");
          cronom = false;
        } else {
          minutos = pomodoros[pomodoroIndice];
          segundos = 1;
          switch (pomodoroIndice) {
            case 1:
            case 3:
            case 5:
              Status = "descanso pequeno";
              document.querySelector("body").classList.add("break");
              break;
            case 7:
              Status = "descanso longo";
              document.querySelector("body").classList.add("break");
              break;
            default:
              Status = "Hora de fazer a tarefa";
              document.querySelector("body").classList.remove("break");
              break;
          }
          document.querySelector("h3").innerText = `#${
            pomodoroIndice + 1
          } - ${Status}`;
        }
      } else {
        minutos--;
        segundos = 60;
      }
    }
    segundos--;
    document.querySelector("h2").innerText = `${minutos}:${
      segundos < 10 ? "0" + segundos : segundos
    }`;
  }
}, 1000);
