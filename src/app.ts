class ProjectInput {
  templateElemnt: HTMLTemplateElement;
  hostElemnt: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElemnt = document.getElementById(
      'project-input',
    )! as HTMLTemplateElement;
    this.hostElemnt = document.getElementById(
      'app',
    )! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElemnt.content,
      true,
    );
    this.element =
      importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElemnt.insertAdjacentElement(
      'afterbegin',
      this.element,
    );
  }
}

const prjInput = new ProjectInput();
