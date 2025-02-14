import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "Texto Inicial alterado";
  inputType = "text";
  isDisabled = true;
  title = 'Testes-Binding'
  enableInput(){
    this.isDisabled = false;
  }

  disableInput(){
    this.isDisabled = true;
  }

  setPasswordTypeInput(){
    this.inputType = "password";
  }

  setTextTypeInput(){
    this.inputType = "text";
  }

  logInputText() {
    console.log(this.inputText);
  }

  // obter valor atual do input
  handleInputKeyup(event: KeyboardEvent){
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  // outro metodo
  // event: InputEvent (angular não aceita)
  handleInputEvent(event: Event){
    const currentText2 = (event.target as HTMLInputElement).value;
    console.log(currentText2);
  }

  buttonTitle = "titulo do botão";
  buttonDisable = true;

  onButtonClick(){
    this.buttonTitle = "Título ALTERADOOOOOOOOO";
    
    // se buttonDisable for true recebe false, e vice-versa
    this.buttonDisable = !this.buttonDisable;
  }

  widthButton1 = "110px";
  widthButton2 = 130;
  
  stylesObj = {
    width: '160px',
    backgroundColor: 'gray',
  };

  updateStyleObj(){
    console.log('updateStyleObj')
    this.stylesObj.width = '170px';
    this.stylesObj.backgroundColor = 'light blue';
  }

  updateStyleObjCorrect(){
    console.log('updateStyleObjCorrect');

    this.stylesObj = {
      width: '170px',
      backgroundColor: 'lightblue',
    };
  }

  updateWidth() {
    this.widthButton2 = 200;
  }

  isRedButton = true;
  isGreen = true;

} 
