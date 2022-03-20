class ProjectInput {
  templateElemnt: HTMLTemplateElement;
  hostElemnt: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElemnt = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElemnt = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElemnt.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElemnt.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
